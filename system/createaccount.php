<?php

error_reporting("E_ALL");
session_start();

include("conn.php");


if($_SESSION["username"]){
    echo "ASDASD";
}




// prepare and bind
$stmt = $conn->prepare("INSERT INTO accounts (username, tiktok_username, tiktok_password, capabilities) VALUES (?, ?,?,?)");
$stmt->bind_param("ssss", $un, $tu, $pw, $cpb);



$un = 1;
$tu = $_POST["username"];
$pw = $_POST["password"];
$cpb = $_POST["cpb"];


$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();


?>