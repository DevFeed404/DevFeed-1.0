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
    async getAllEvent(){
        try{
            const response  = await events.findAll();
            return response;
        }
        catch(error){
            console.log (error);
        }
    }
    async getEventByName(data){
        try{
            const response = await events.findAll({
                where : {
                    name : data
                },
                attributes : ['name']
            });
            // console.log(response);
            return response;
        }
        catch(error){
            console.log(error);
            return error;
        }
    }

}

module.exports = eventRepository;