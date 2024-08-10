<?php
$host_name = "localhost";
$user_name = "root";
$pass_word = "root";
$db_name = "mobile166";
$conn = new mysqli($host_name, $user_name, $pass_word, $db_name);
mysqli_set_charset($conn, "utf8");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
date_default_timezone_set("Asia/Bangkok");
