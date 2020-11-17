<?php
session_start();

include("conn.php");

if($_SESSION["username"]){
    echo "ASDASD";
}


// prepare and bind
$stmt = $conn->prepare("INSERT INTO saved_hashtags (username, hashtag_name, thetags) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $un, $hn, $thetags);

// set parameters and execute
$un = 1;
$hn = $_POST["hn"];
$thetags = $_POST["tt"];
$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();


?>