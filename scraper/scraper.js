/**
 * Masjid Iqamah Times Scraper
 * Extracts iqamah times from Dallas/Fort Worth masjid websites
 */

import puppeteer from 'puppeteer';
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Masjid configurations with their prayer schedule URLs
const MASJIDS = [
    {
        id: 'iant',
        name: 'Islamic Association of North Texas (IANT)',
        url: 'https://iant.org/prayer-times/',
        sourceUrl: 'https://iant.org',
        type: 'daily'
    },
    {
        id: 'epic',
        name: 'East Plano Islamic Center (EPIC)',
        url: 'https://epicplano.org/prayer-times/',
        sourceUrl: 'https://epicplano.org',
        type: 'daily'
    },
    {
        id: 'iacc',
        name: 'Islamic Association of Collin County (IACC)',
        url: 'https://iacc.us/prayer-times/',
        sourceUrl: 'https://iacc.us',
        type: 'daily'
    },
    {
        id: 'frisco',
        name: 'Islamic Center of Frisco',
        url: 'https://icofrisco.org/prayer-times/',
        sourceUrl: 'https://icofrisco.org',
        type: 'daily'
    },
    {
        id: 'rowlett',
        name: 'Islamic Center of Rowlett',
        url: 'https://icr-tx.org/prayer-times/',
        sourceUrl: 'https://icr-tx.org',
        type: 'daily'
    },
    {
        id: 'vric',
        name: 'Valley Ranch Islamic Center',
        url: 'https://vric.org/prayer-times/',
        sourceUrl: 'https://vric.org',
        type: 'daily'
    },
    {
        id: 'mas_dallas',
        name: 'MAS Islamic Center Dallas',
        url: 'https://masdallas.org/prayer-times/',
        sourceUrl: 'https://masdallas.org',
        type: 'daily'
    },
    {
        id: 'mic',
        name: 'Mesquite Islamic Center',
        url: 'https://mesquiteislamiccenter.org/prayer-times/',
        sourceUrl: 'https://mesquiteislamiccenter.org',
        type: 'daily'
    },
    {
        id: 'mckinney',
        name: 'McKinney Masjid',
        url: 'https://mckinneymasjid.org/prayer-times/',
        sourceUrl: 'https://mckinneymasjid.org',
        type: 'daily'
    },
    {
        id: 'keller',
        name: 'Keller Islamic Center',
        url: 'https://kellerislamicschool.org/prayer-times/',
        sourceUrl: 'https://kellerislamicschool.org',
        type: 'daily'
    },
    {
        id: 'iatc',
        name: 'Islamic Association of Tarrant County',
        url: 'https://iatc.org/prayer-times/',
        sourceUrl: 'https://iatc.org',
        type: 'daily'
    },
    {
        id: 'masjid_al_islam',
        name: 'Masjid Al-Islam Dallas',
        url: 'https://masjidalislam.org/prayer-times/',
        sourceUrl: 'https://masjidalislam.org',
        type: 'daily'
    }
];

// Time normalization helper
function normalizeTime(timeStr) {
    if (!timeStr) return null;
    
    // Remove extra spaces and convert to lowercase
    timeStr = timeStr.trim().toLowerCase();
    
    // Handle "X min after" format
    const afterMatch = timeStr.match(/(\d+)\s*min\s*after\s*(?:adhan|maghrib)/i);
    if (afterMatch) {
        return { offset: parseInt(afterMatch[1]), isOffset: true };
    }
    
    // Handle HH:MM format (12-hour or 24-hour)
    const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
    if (timeMatch) {
        let hours = parseInt(timeMatch[1]);
        const minutes = parseInt(timeMatch[2]);
        const period = timeMatch[3]?.toUpperCase();
        
        // Convert to 24-hour format
        if (period === 'AM' && hours === 12) {
            hours = 0;
        } else if (period === 'PM' && hours !== 12) {
            hours += 12;
        }
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
    
    return null;
}

// Extract prayer times from HTML table
function extractFromTable($, tableSelector) {
    const prayers = {};
    const table = $(tableSelector);
    
    if (table.length === 0) return null;
    
    table.find('tr').each((index, row) => {
        const $row = $(row);
        const cells = $row.find('td, th');
        
        if (cells.length >= 2) {
            const prayerName = $(cells[0]).text().trim().toLowerCase();
            const timeText = $(cells[1]).text().trim();
            
            // Map common prayer name variations
            const prayerMap = {
                'fajr': 'fajr',
                'dhuhr': 'dhuhr',
                'zuhr': 'dhuhr',
                'asr': 'asr',
                'maghrib': 'maghrib',
                'isha': 'isha',
                'jumuah': 'jumuah',
                'jummah': 'jumuah',
                'friday': 'jumuah'
            };
            
            for (const [key, value] of Object.entries(prayerMap)) {
                if (prayerName.includes(key)) {
                    const normalized = normalizeTime(timeText);
                    if (normalized) {
                        if (value === 'jumuah') {
                            if (!prayers.jumuah) prayers.jumuah = [];
                            prayers.jumuah.push(normalized);
                        } else {
                            prayers[value] = normalized;
                        }
                    }
                    break;
                }
            }
        }
    });
    
    return prayers;
}

// Extract from widget/embedded calendar
async function extractFromWidget(page, masjid) {
    try {
        // Look for common prayer time widgets
        const widgets = [
            '.prayer-times-widget',
            '.prayer-schedule',
            '#prayer-times',
            '.salah-times',
            '.prayer-calendar'
        ];
        
        for (const selector of widgets) {
            const element = await page.$(selector);
            if (element) {
                const html = await page.evaluate(el => el.innerHTML, element);
                const $ = cheerio.load(html);
                const prayers = extractFromTable($, 'table');
                if (prayers && Object.keys(prayers).length > 0) {
                    return prayers;
                }
            }
        }
    } catch (error) {
        console.error(`Error extracting widget for ${masjid.name}:`, error.message);
    }
    
    return null;
}

// Extract from PDF
async function extractFromPDF(pdfUrl) {
    try {
        const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
        const pdfParse = (await import('pdf-parse')).default;
        const data = await pdfParse(response.data);
        
        // Parse text for prayer times
        const text = data.text;
        const prayers = {};
        
        // Look for prayer times in text
        const prayerPatterns = [
            /fajr[:\s]+(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i,
            /dhuhr[:\s]+(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i,
            /asr[:\s]+(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i,
            /maghrib[:\s]+(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i,
            /isha[:\s]+(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i,
            /jumuah[:\s]+(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i
        ];
        
        prayerPatterns.forEach((pattern, index) => {
            const match = text.match(pattern);
            if (match) {
                const prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha', 'jumuah'];
                const normalized = normalizeTime(match[1]);
                if (normalized) {
                    prayers[prayerNames[index]] = normalized;
                }
            }
        });
        
        return Object.keys(prayers).length > 0 ? prayers : null;
    } catch (error) {
        console.error('Error parsing PDF:', error.message);
        return null;
    }
}

// Scrape single masjid
async function scrapeMasjid(masjid, browser) {
    console.log(`\n🕌 Scraping: ${masjid.name}`);
    console.log(`   URL: ${masjid.url}`);
    
    const result = {
        masjid_name: masjid.name,
        source_url: masjid.url,
        schedule_type: masjid.type,
        month: new Date().toISOString().slice(0, 7), // YYYY-MM
        timezone: 'America/Chicago',
        prayers: {
            fajr: { iqamah: null },
            dhuhr: { iqamah: null },
            asr: { iqamah: null },
            maghrib: { iqamah: null, offset_minutes: null },
            isha: { iqamah: null }
        },
        jumuah: [],
        confidence: 'medium',
        scraped_at: new Date().toISOString()
    };
    
    try {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        // Set timeout
        await page.setDefaultNavigationTimeout(30000);
        await page.setDefaultTimeout(10000);
        
        // Navigate to page
        const response = await page.goto(masjid.url, { 
            waitUntil: 'networkidle2',
            timeout: 30000
        });
        
        if (!response || !response.ok()) {
            console.log(`   ❌ Failed to load page (status: ${response?.status()})`);
            result.confidence = 'low';
            await page.close();
            return result;
        }
        
        // Get page content
        const html = await page.content();
        const $ = cheerio.load(html);
        
        // Try to find prayer times table
        const tableSelectors = [
            'table.prayer-times',
            'table.salah',
            'table.schedule',
            '.prayer-times table',
            '.salah-times table',
            '#prayer-schedule table'
        ];
        
        let prayers = null;
        
        for (const selector of tableSelectors) {
            prayers = extractFromTable($, selector);
            if (prayers && Object.keys(prayers).length > 0) {
                console.log(`   ✅ Found prayer times in table`);
                break;
            }
        }
        
        // Try widget extraction if table not found
        if (!prayers) {
            prayers = await extractFromWidget(page, masjid);
            if (prayers) {
                console.log(`   ✅ Found prayer times in widget`);
            }
        }
        
        // Look for PDF links
        if (!prayers) {
            const pdfLinks = $('a[href*=".pdf"], a[href*="prayer"], a[href*="schedule"]');
            for (const link of pdfLinks) {
                const href = $(link).attr('href');
                if (href && href.includes('.pdf')) {
                    const pdfUrl = new URL(href, masjid.url).href;
                    console.log(`   📄 Trying PDF: ${pdfUrl}`);
                    prayers = await extractFromPDF(pdfUrl);
                    if (prayers) {
                        console.log(`   ✅ Found prayer times in PDF`);
                        break;
                    }
                }
            }
        }
        
        // Populate result if prayers found
        if (prayers) {
            if (prayers.fajr) {
                result.prayers.fajr.iqamah = typeof prayers.fajr === 'object' ? prayers.fajr.iqamah : prayers.fajr;
            }
            if (prayers.dhuhr) {
                result.prayers.dhuhr.iqamah = typeof prayers.dhuhr === 'object' ? prayers.dhuhr.iqamah : prayers.dhuhr;
            }
            if (prayers.asr) {
                result.prayers.asr.iqamah = typeof prayers.asr === 'object' ? prayers.asr.iqamah : prayers.asr;
            }
            if (prayers.maghrib) {
                if (typeof prayers.maghrib === 'object' && prayers.maghrib.isOffset) {
                    result.prayers.maghrib.offset_minutes = prayers.maghrib.offset;
                    result.prayers.maghrib.iqamah = null; // Will be calculated from adhan + offset
                } else {
                    result.prayers.maghrib.iqamah = prayers.maghrib;
                }
            }
            if (prayers.isha) {
                result.prayers.isha.iqamah = typeof prayers.isha === 'object' ? prayers.isha.iqamah : prayers.isha;
            }
            if (prayers.jumuah) {
                result.jumuah = Array.isArray(prayers.jumuah) ? prayers.jumuah : [prayers.jumuah];
            }
            
            // Check if we got most prayer times
            const foundCount = Object.values(result.prayers).filter(p => p.iqamah !== null).length;
            result.confidence = foundCount >= 4 ? 'high' : foundCount >= 2 ? 'medium' : 'low';
        } else {
            console.log(`   ⚠️ Could not find prayer times`);
            result.confidence = 'low';
        }
        
        await page.close();
        
    } catch (error) {
        console.error(`   ❌ Error scraping ${masjid.name}:`, error.message);
        result.confidence = 'low';
        result.error = error.message;
    }
    
    return result;
}

// Main scraper function
async function scrapeAll() {
    console.log('🚀 Starting Masjid Iqamah Times Scraper');
    console.log('========================================');
    console.log(`📅 Date: ${new Date().toISOString()}`);
    console.log(`🕌 Total Masjids: ${MASJIDS.length}`);
    
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const results = [];
    
    for (const masjid of MASJIDS) {
        const result = await scrapeMasjid(masjid, browser);
        results.push(result);
        
        // Small delay to be respectful to servers
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    await browser.close();
    
    // Save results
    const outputDir = path.join(__dirname, 'output');
    await fs.mkdir(outputDir, { recursive: true });
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const outputFile = path.join(outputDir, `iqamah-data-${timestamp}.json`);
    
    await fs.writeFile(outputFile, JSON.stringify(results, null, 2));
    console.log(`\n💾 Results saved to: ${outputFile}`);
    
    // Also save a copy as latest.json
    const latestFile = path.join(outputDir, 'latest.json');
    await fs.writeFile(latestFile, JSON.stringify(results, null, 2));
    console.log(`📄 Latest data saved to: ${latestFile}`);
    
    // Print summary
    console.log('\n📊 Summary:');
    console.log('----------');
    results.forEach(result => {
        const status = result.confidence === 'high' ? '✅' : result.confidence === 'medium' ? '⚠️' : '❌';
        console.log(`${status} ${result.masjid_name}: ${result.confidence} confidence`);
    });
    
    return results;
}

// Run scraper
if (process.argv[1].includes('scraper.js')) {
    scrapeAll().catch(console.error);
}

export { scrapeAll, MASJIDS };