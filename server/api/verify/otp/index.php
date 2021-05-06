<?php
require "../../configur.php";

$otp = $conn->real_escape_string($_POST['otp']);
$otp_token = $conn->real_escape_string($_POST['otp_token']);

$sql = "SELECT * FROM users WHERE otp=" . $otp . " AND otp_token='" . $otp_token . "'";
$user = $conn->query($sql)->fetch_assoc();
if ($user) {
    $sendtoken = createToken($user);
    $updatesql = $conn->query("UPDATE users SET otp=null, otp_token=null, mobile_verified=1 WHERE id=" . $user['id']);
    echo json_encode(["token" => $sendtoken, "message" => "OTP verified successfully.", "success" => true]);
} else {
    echo json_encode(["token" => null, "message" => "Wrong OTP.", "success" => false]);
}
