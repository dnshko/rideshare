<?php
require "../../configur.php";

$username = $conn->real_escape_string($_POST['username']);

$sql = "SELECT * FROM users WHERE username='" . $username . "' OR mobile='" . $username . "'";
$check = $conn->query($sql)->fetch_assoc();
if ($check) {
    $otp = rand(100000, 999999);
    $otp_token = uniqid("ride_share_" . time());
    $message = "OTP for mobile number verification is " . $otp;
    sendSMS($message, $check['mobile']);
    $conn->query("UPDATE users SET otp=" . $otp . ", otp_token='" . $otp_token . "' WHERE id=" . $check['id']);
    $data = ["otp_token" => $otp_token];
    echo json_encode(['data' => $data, "success" => true, "message" => "OTP sent to your registered mobile number."]);
} else {
    echo json_encode(["message" => "user nnot found.", "success" => false]);
}
