import axios from 'axios';
import * as Config from './../constants/config';  

export default function callApi(endpoint, method = 'GET', body) {
    let eln_token = JSON.parse(localStorage.getItem('eln_token'));
    var header = (eln_token!==null &&  eln_token!=="undefined" )?eln_token:``;
   //axiosService.js  console.log(eln_token);
   let headers = {
     Authorization :  "Bearer " +  header ,'Access-Control-Allow-Origin': '*'
  }
   
    return axios({
        method,
        headers: headers,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    })
}
