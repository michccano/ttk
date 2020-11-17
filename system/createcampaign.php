<?php

error_reporting("E_ALL");
session_start();

include("conn.php");


if($_SESSION["username"]){
    echo "ASDASD";
}




// prepare and bind
$stmt = $conn->prepare("INSERT INTO campaigns (username, data) VALUES (?, ?)");
$stmt->bind_param("ss", $un, $data);

// set parameters and execute

$un = 1;
$arr = array("likesdaily"=>$_POST["likesdaily"],"followsdaily"=>$_POST["followsdaily"],"followersalready"=>$_POST["followersalready"],"unfollowsdaily"=>$_POST["unfollowsdaily"],"nointeraction"=>$_POST["nointeraction"]);

$data = json_encode($arr);

$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();


?>