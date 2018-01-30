# Leviathan

## leviathan 0

cat .backup/bookmarks.html  | grep leviathan

## leviathan 1

username: leviathan1
password: rioGegei8m



## leviathan 2

username: leviathan2
password: ougahZi8Ta

## leviathan 3

the executable "printfile" has a set UID, which means that it always has the permissions of the set UID, The SUI belongs to leviathan3, so it was obvious how we'd be doing this.
On using ltrace I was able to see that it first checked my acces privlidges for any file I was requesting to be printed, this meant that it both could not read a users files which lev3 could not read nor those that the user could not read.
At first I tried to use unshare to change the root in hopes of hyjacking /bin/cat.

username: leviathan3
password: Ahdiemoo1j

## leviathan 4

This was a case of security by obseciruty, which is something you should not rely on. After simply running ltrace I saw that there were two calls to stringcompare, one of which didn't do anything, the other seemed to try to look like a call to a print function, luckily it was the password instead.
After inputting the password, I had shell and was able to read out the user password.

username: leviathan4
password: vuH0coox6m

## leviathan 5

after finding a file in .trash name bin, and running it, I got an output in binary which translated to the level 5 password

Tith4cokei

## leviathan 6

I found a file named "leviathan5", it was a program that read out a file at "/tmp/file.log" and than deleted it. I failed to copy lev6 its password file to that location, so I made a symlink instead.

username: leviathan6
password: UgaoFee4li

## leviathan 7

I was presented with a small program that demanded a 4 number long code. I worte a small bash bruteforcer which quickly stumbled on the number being 7123. Once the correct number was inputted, I gained shell access on lev7s account

username: leviathan7
password: ahy7MaeBo9

## end
