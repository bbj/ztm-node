const http = require('http');
//const https = require('https');
const {request} = require('https'); 
    //using destructuring
const {get} = require('https');     
    //with get, no need to call req.emd()

/**
 * If "www.google.com" => TypeError [ERR_INVALID_URL]: Invalid URL
 */
const req = http.request("http://www.google.com", (res) => {
    res.on('data', (chunk) => {
        console.log(`data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data.');
    });
});
req.end(); //send the request

const req2 = request("https://www.google.com", (res) => {
    res.on('data', (chunk) => {
        console.log(`data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data.');
    });
});
req2.end(); //send the request

/**
 * No need of req const, as not calling .end() ourself; get
 */
get("https://www.google.com", (res) => {
    res.on('data', (chunk) => {
        console.log(`[GET] data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('[GET] No more data.');
    });
});
