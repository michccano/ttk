<?php
error_reporting("E_ALL");

session_start();

include("conn.php");

if($_SESSION["username"]){
    echo "ASDASD";
}


// prepare and bind
$stmt = $conn->prepare("select * from saved_hashtags where username=?");
$stmt->bind_param("i", $un);


$un = 1;

$stmt->execute();

$hashtags = array();

$result = $stmt->get_result();
while ($row = $result->fetch_assoc()) {
   array_push($hashtags,array("id"=>$row["id"],"hn"=>$row["hashtag_name"]));
}



$stmt->close();
$conn->close();

echo json_encode($hashtags);

?>