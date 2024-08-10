<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers');
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Methods, Authorization'); 
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Max-Age: 86400');  

require '../dbconn.php';
$sql = "SELECT * FROM member";
$result = mysqli_query($conn, $sql);

$data = array();
while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}

echo json_encode($data);
