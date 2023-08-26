import axios from 'axios';

export const getHackthonsData = async ()=> {
    try{
        const response = await axios.get("http://127.0.0.1:5000/api/UpcomingEvents");
        // console.log(response);
        return response;
    }
    catch(error){
        console.log(error);
    }
}
        