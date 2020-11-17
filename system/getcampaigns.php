<?php
error_reporting("E_ALL");

session_start();

include("conn.php");

if($_SESSION["username"]){
    echo "ASDASD";
}


// prepare and bind
$stmt = $conn->prepare("select * from campaigns where username=?");
$stmt->bind_param("i", $un);


$un = 1;

$stmt->execute();

$users = array();

$result = $stmt->get_result();
while ($row = $result->fetch_assoc()) {
   array_push($users,array("id"=>$row["id"],"un"=>$row["user_name"]));
}



$stmt->close();
$conn->close();

echo json_encode($users);

?>