<?php
require "../../configur.php";
$data = "Nothing to display";
if (isset($_POST['username'])) {
    $username = $conn->real_escape_string($_POST['username']);

    $sql = "SELECT * FROM users WHERE username='" . $username . "'";
    $check = $conn->query($sql);
    if ($check->num_rows > 0) {
        $data = ["message" => "Username already taken.", "success" => false];
    } else {
        $data = ["message" => "Username is available.", "success" => true];
    }
}
echo json_encode($data);
