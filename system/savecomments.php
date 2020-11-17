<?php

error_reporting("E_ALL");
session_start();

include("conn.php");


if($_SESSION["username"]){
    echo "ASDASD";
}




// prepare and bind
$stmt = $conn->prepare("INSERT INTO comments (username, thecomment) VALUES (?, ?)");
$stmt->bind_param("ss", $un, $data);

// set parameters and execute

$un = 1;
$data = $_POST["thecomment"];

$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();


?>