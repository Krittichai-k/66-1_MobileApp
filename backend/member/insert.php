<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers');
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Methods, Authorization'); 
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Max-Age: 86400'); 

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);
  
$fullname = $data->fullname;
$email = $data->email;
$mobile = $data->mobile;
$lineid = $data->lineid;
$detail = $data->detail;

echo json_encode($request_body);
if (isset($data)) {
  require '../dbconn.php';
  $sql = "INSERT INTO member 
	(mem_fullname, mem_email, mem_mobile, mem_lineid, mem_detail)
	VALUES 
	('$fullname', '$email', '$mobile', '$lineid', '$detail')";
  $result = mysqli_query($conn, $sql);
}
