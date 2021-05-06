<?php
require "../configur.php";

$username = $conn->real_escape_string($_POST['username']);
$password = $conn->real_escape_string($_POST['password']);

$sql = "SELECT * FROM users WHERE username='" . $username . "' OR mobile='" . $username . "'";
$check = $conn->query($sql)->fetch_assoc();
if ($check) {
    $pas = base64_decode(base64_decode($check['password']));
    if ($pas == $password) {
        $sendtoken = createToken($check);
        echo json_encode(["token" => $sendtoken, "message" => "success", "success" => true]);
    } else {
        echo json_encode(["message" => "Wrong credentials.", "success" => false]);
    }
} else {
    echo json_encode(["message" => "Wrong credentials.", "success" => false]);
}
