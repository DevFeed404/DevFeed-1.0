const cron = require('node-cron');
const FeedData = require('../controllers/scraper');

const setUpJobs = ()=>{ 
    cron.schedule('0 0 * * 0',()=> {
        console.log("jobs .. ");
        FeedData();
    })
}
module.exports = setUpJobs;