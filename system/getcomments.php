<?php
error_reporting("E_ALL");

session_start();

include("conn.php");

if($_SESSION["username"]){
    echo "ASDASD";
}


// prepare and bind
$stmt = $conn->prepare("select * from comments where username=? order by id DESC");
$stmt->bind_param("i", $un);


$un = 1;

$stmt->execute();

$comments = array();

$result = $stmt->get_result();
while ($row = $result->fetch_assoc()) {
   array_push($comments,array("id"=>$row["id"],"tc"=>$row["thecomment"]));
}



$stmt->close();
$conn->close();

echo json_encode($comments);

?>