<?php

class NinjaSocket {

    //inizializzazione
    public function linkToDB() {

    //small template;
    $ip_addr = "127.0.0.1";
    $user = "root";
    $pwd = "";
    $database = "classifica_nazionalev3";

   
    $connect = new Mysqli($ip_addr, $user, $pwd, $database);

    if ($connect == false) {

    /*connect_error is a command, that allow to sending a error msg, 
    if PHP dont connect it to database*/

    echo "connection failed" . $connect->connect_error;

    }

    $arr = [

      0=> "$_REQUEST[username]",
      1=> "$_REQUEST[secondi]",
      2=> "$_REQUEST[mouse]",
      3=> "$_REQUEST[monitor]",
      4=> "$_REQUEST[tecnologia_monitor]",
      5=> "$_REQUEST[link_clip]",

    ];


    /*this instruction is important, for inserting the dates on database
    about reference*/

    $sql = "INSERT INTO classifica_italiana(username, secondi, modello_mouse, modello_monitor, tecnologia_monitor, link_clip)
    VALUES ('$arr[0]', '$arr[1]', '$arr[2]', '$arr[3]', '$arr[4]', '$arr[5]')";


    if($connect->query($sql) === true) { 
   
     echo "inserting date has been with successful!";

    } else {

      echo "inserting date failed" . $connect->connect_error;

    }

 $connect->close();

   }
}

function main() {

$ninjaSocket = new NinjaSocket();
$ninjaSocket->linkToDB();

}

main();



?>