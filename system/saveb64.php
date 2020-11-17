<?php

error_reporting("E_ALL");
session_start();

include("conn.php");


if($_SESSION["username"]){
    echo "ASDASD";
}


$name = $_POST['firstName'];
$image = $_FILES['profilePicture'];
$ds = DIRECTORY_SEPARATOR;
move_uploaded_file($image['tmp_name'], realpath(dirname(__FILE__)) . $ds . "uploads" . $ds . $image['name']);


$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);


// prepare and bind
$stmt = $conn->prepare("INSERT INTO  captchas (code) VALUES (?)");
$stmt->bind_param("s",$captcha);

// set parameters and execute

$captcha = $image['name'];

$stmt->execute();

$last_id = $conn->insert_id;

echo $last_id;

$stmt->close();
$conn->close();


?>