#!/usr/bin/env node
/* eslint-disable */
const cookie = 'ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSMX4MNzF+aAw=';

const decrypted = '{"showpassword":"no","bgcolor":"#ffffff"}';
/*
 * a (2b) at 8 and 36
 * " (55) at 2, 22, and 30
 * " (68) at 40
 * " (5d) at 20
 * " (19) at 17
 * " (70) at 15
{"showpassword":"no","bgcolor":"#aaaaaa"}
0a 55 4b 22 1e 00 48 2b 02 04 4f 25 03 13 1a 70 53 19 57 68 5d 55 5a 2d 12 18 54 25 03 55 02 68 52 16 59 2b 10 16 59 68 0c
{"showpassword":"no","bgcolor":"#ffffff"}
0a 55 4b 22 1e 00 48 2b 02 04 4f 25 03 13 1a 70 53 19 57 68 5d 55 5a 2d 12 18 54 25 03 55 02 68 52 31 7e 0c 37 31 7e 68 0c
{"showpassword":"no","bgcolor":"#000000"}
0a 55 4b 22 1e 00 48 2b 02 04 4f 25 03 13 1a 70 53 19 57 68 5d 55 5a 2d 12 18 54 25 03 55 02 68 52 47 08 7a 41 47 08 68 0c
*/

const decoded = Buffer.from(cookie, 'base64');
const buf = Buffer.from(decrypted);

const input = [
	'ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSMX4MNzF+aAw=',
	'ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSFlkrEBZZaAw=',
	'ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSRwh6QUcIaAw=',
	'ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSFlkrEBZZaAw='
];

input.map(cookie => {
	console.log(Buffer.from(cookie, 'base64').toString());
	console.log(Buffer.from(cookie, 'base64'));
});

process.exit();
// console.log(decoded);
const abc = 'abcdefghijklmnopqrstuvwxyz0123456789_-^~=';

for (let a = abc.length - 1; a >= 0; a--)
for (let b = abc.length - 1; b >= 0; b--)
for (let c = abc.length - 1; c >= 0; c--)
for (let d = abc.length - 1; d >= 0; d--) {
	const key = "" + abc[a] + abc[b] + abc[c] + abc[d];
	const store = [];
	buf.forEach((x, j) => {
		store[j] = x ^ key[j % 4];
	});
	let encoded = Buffer.from(store).toString('base64');
	console.log(key, encoded);
	if (encoded.startsWith('ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhS')) {
		console.log(key, encoded);
	}
}

process.exit();
let i = 255;

while (i--) {
	const key = 'aaaa';
	const store = [];
	buf.forEach((x, j) => {
		store[j] = x ^ key[j % 4];
	});
	let encoded = Buffer.from(store);
	console.log(encoded.toString('base64'), i);
	if (encoded.toString('base64').match('000000')) {
		console.log('hit!');
		process.exit();
	}
}
