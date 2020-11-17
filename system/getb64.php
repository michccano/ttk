<?php
error_reporting("E_ALL");

session_start();

include("conn.php");

if($_SESSION["username"]){
    echo "ASDASD";
}


// prepare and bind
$stmt = $conn->prepare("select * from captchas where id=?");
$stmt->bind_param("i", $id);


$id = $_POST["id"];

$stmt->execute();


$result = $stmt->get_result();
while ($row = $result->fetch_assoc()) {
   echo $row["code"];
}



$stmt->close();
$conn->close();


?>