const { events } = require('../models/index');

class eventRepository{
    async createEvent(data){
        try{
            const response  = await events.create(data);
            return response;
        }
        catch(error){
            console.log (error);
        }
    }
}

module.exports = eventRepository;