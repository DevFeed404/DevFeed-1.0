const puppeteer = require('puppeteer');

const eventRepository = require('../repository/eventRepository');


const scraper = () => {
    var scrapedData = [];
    const EventRepository  = new eventRepository();
    (async () => {
    // Launch the browser
    const browser = await puppeteer.launch({
        headless : false, 
        defaultViewport: null,
        args:[
        '--start-maximized' // you can also use '--start-fullscreen'
    ]
    });

    // Create a page
    const page = await browser.newPage();
    // Go to your site
    await page.goto('https://www.google.com');
    const element = await page.waitForSelector("textarea[class='gLFyf']" ,{ visible : false});
    await element.type("MLH");
    await page.keyboard.press('Enter');
    const mainPage = await page.waitForSelector("h3[class='LC20lb MBeuO DKV0Md']",{visible: true});
    await mainPage.click('h3[class="LC20lb MBeuO DKV0Md"]');
    const homePage = await page.waitForSelector("a[data-toggle='dropdown']",{visible: true});
    await homePage.click("a[data-toggle='dropdown']");
    const currentYear = await page.waitForSelector("#main-navbar-collapse > ul > li.dropdown.open > ul > li:nth-child(1) > a",{visible: true});
    await currentYear.click("#main-navbar-collapse > ul > li.dropdown.open > ul > li:nth-child(1) > a");
    await page.waitForSelector("body > div:nth-child(1) > div.container.feature > div:nth-child(1) > div.event ",{visible: true})
    const dataHandles = await page.$$("body > div:nth-child(1) > div.container.feature > div:nth-child(1) > div.event ");
    for (const datahandle of dataHandles){
        try{
        const name = await page.evaluate(
            (el) => el.querySelector("div > a > div > h3").textContent ,
            datahandle);
        const mainLink = await page.evaluate(
            (el) => el.querySelector("div > a").getAttribute("href"),
            datahandle);
        const imageLink = await page.evaluate(
            (el) => el.querySelector("div > a > div > div[class='image-wrap'] > img").getAttribute("src"),
            datahandle);
        const logoLink = await page.evaluate(
            (el) => el.querySelector("div > a > div > div[class='event-logo'] > img ").getAttribute("src"),
            datahandle);
        const eventDate = await page.evaluate(
            (el) => el.querySelector("div > a > div > p").textContent,
            datahandle);
        const startDate = await page.evaluate(
            (el) => el.querySelector("div > a > div > meta[itemprop='startDate']").getAttribute("content"),
            datahandle);
        const endDate = await page.evaluate(
            (el) => el.querySelector("div > a > div > meta[itemprop='endDate']").getAttribute("content"),
            datahandle);
        
        const city = await page.evaluate(
            (el) => el.querySelector("div > a > div > div[class='event-location'] > span[itemprop='city']").textContent,
            datahandle);
        const state = await page.evaluate(
            (el) => el.querySelector("div > a > div > div[class='event-location'] > span[itemprop='state']").textContent,
            datahandle);
        const eventNotes = await page.evaluate(
            (el) => el.querySelector("div > a > div > div[class='event-hybrid-notes'] > span").textContent,
            datahandle);
        const obj = {
            name : name,
            mainLink : mainLink,
            imageLink : imageLink,
            logoLink : logoLink,
            eventDate : eventDate,
            startDate : startDate,
            endDate : endDate,
            city : city,
            state : state,
            eventNotes : eventNotes,
            status : "UPCOMING"
        }
        scrapedData.push(obj);
        }
        catch(error){
        console.log(error);
        }
    }
    console.log(scrapedData);

    
    // Dispose of handle
    // await element.dispose();

    // Close browser.
    await browser.close();
    for(let i = 0 ; i<scrapedData.length ; i++){
        try{
            const response = await EventRepository.createEvent(scrapedData[i]);
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
    }
    })();
}

module.exports = scraper;

