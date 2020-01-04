//XMLHttpRequest GET
//
//create new obj
const xhr = new XMLHttpRequest();
//
const url = 'https://api-to-call.com/endpoint';
//handles requests
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        //Code executed with response
    }
};
//
//opens request and sends obj
xhr.open('GET', url);
xhr.send();
//