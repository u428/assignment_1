import axios from 'axios';

const API_BASE_URL='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a4b7c2409956a7ea742d8ae1867bf59&format=json&nojsoncallback=1'; /*'&tags=Animal&per_page=10&page=1'*/

const request = (options) => {
    
    if (options.method==='GET') {
        return axios.get(options.url);    
    }
    else if (options.method==='POST') {
        return axios.post(options.url, options.body);
    }
    else if(options.method==='PUT'){
        return axios.put(options.url, options.body);
    }else {
        return axios.delete(options.url)
    }
};


export function getData(activePage, pageRangeDisplayed, search) {
    return request({
        url: API_BASE_URL+'&tags='+search+'&per_page='+pageRangeDisplayed+'&page='+activePage,
        method: 'GET'
    });
}