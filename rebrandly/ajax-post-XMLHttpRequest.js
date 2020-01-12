//new obj
const xhr = new XMLHttpRequest;

const url = 'https://api-to-call.com/endpoint';

// convert to JSON string for sending across the web
const data = JSON.stringify({id: '200'});

//set response type to JSON
xhr.responseType = 'json';

//on state change and if the request has been closed(DONE) then return the response from the server
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
};

//creates a new request with method and destination as params
xhr.open('POST', url);

//sends request to server

xhr.send(data);