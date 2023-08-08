const puppeteer = require('puppeteer');

const eventRepository = require('../repository/eventRepository');
const EventRepository  = new eventRepository();

const scraper = () => {
    var scrapedData = [];
    console.log ("hello");
    (async () => {
    // Launch the browser
    const browser = await puppeteer.launch({
        headless : false, 
        slowMo: 250,
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
    const homePage = await page.waitForSelector("#main-navbar-collapse > ul > li:nth-child(1)",{visible: true});
    debugger;
    await homePage.click("#main-navbar-collapse > ul > li:nth-child(1)");
    debugger;
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
    // console.log(scrapedData);

    
    // Dispose of handle
    // await element.dispose();

    // Close browser.
    await browser.close();
    for(let i = 0 ; i<scrapedData.length ; i++){
        try{
            console.log(scrapedData[i]);
            const unique = await EventRepository.getEventByName(scrapedData[i].name);
            if(unique.length){
                // console.log(unique[0].dataValues.name)
                console.log("UP TO DATE");
                // console.log(response);
            }
            else{
                const response = await EventRepository.createEvent(scrapedData[i]);
                console.log("created");
            }
            
            // const response = await EventRepository.createEvent(scrapedData[i]);
            
        }
        catch(error){
            console.log(error);
        }
    }
    })();
}

const getEventByName = async(req ,res) => {
    try{
        
        const response = await EventRepository.getEventByName(req.body.name);
        // console.log(response);
        // console.log(response.length);
        // console.log(response[0].dataValues.name);
        if(response.length){
            console.log(response[0].dataValues.name)
        }
        else{
            console.log("nahi mila");
        }
        return res.status(200).json({
            data : response
        });
    }
    catch(error){
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not find anything',
            err: error
        })
    }
}

const getAllEvents = async(req,res)=>{
    try{
        const response = await EventRepository.getAllEvent();
        return res.status(201).json({
            message: 'Sucessfully fetched the upcomings events',
            err: {},
            data: response,
            sucess: true
        });
    }
    catch(error){
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not able to create the airport',
            err: error
        })
    }
}
module.exports = {
    scraper,
    getAllEvents,
    getEventByName
};

