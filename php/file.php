<?php
$str = file_get_contents('php://input');
$arr = json_decode($str, true); 
$str = json_encode($arr);

     $file = fopen('clientsBase.json','w+');
     fwrite($file, $str);
     fclose($file);
   
?>