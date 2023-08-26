const cron = require('node-cron');
const { scraper }= require('../controllers/scraper');

const setUpJobs = ()=>{ 
    cron.schedule('0 0 */3 * *',()=> {
        console.log("jobs .. ");
        scraper();
    })
}
module.exports = setUpJobs;