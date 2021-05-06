<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
$db_host = "localhost";
$db_user = "root";
$db_password = "Ankit@123#";
$db_name = "ridesharing";

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// ALTER TABLE `users` ADD `otp` INT(11) NULL AFTER `remember_token`, ADD `otp_token` VARCHAR(255) NULL AFTER `otp`;
function createToken($user)
{

    $token = md5(uniqid());
    $sendtoken = base64_encode(json_encode($user)) . substr($token, 0, 20);
    return $sendtoken;
}
function verifyToken($token)
{
    $tkn = substr($token, 0, -20);
    $tkn = substr($tkn, 7);
    $user = json_decode(base64_decode($tkn));
    return $user;
}

// $auth = getallheaders();

// if (isset($auth['Authorization'])) {
//     $user = verifyToken($auth['Authorization']);
//     if (isset($user->id)) {

//     } else {
//         echo json_encode(["message" => "Session expired. Please login again.", "success" => false]);
//     }
// }

function sendSMS($message, $number)
{

    $id = "AC063b14e3747d04e454cae73451bc41b7";
    $token = "76979595b1714800d1c73018a1cc7013";
    $url = "https://api.twilio.com/2010-04-01/Accounts/$id/SMS/Messages.json";
    $from = "13213858190";
    $to = $number; // twilio trial verified number
    $body = $message;
    $data = array(
        'From' => $from,
        'To' => $to,
        'Body' => $body,

    );
    $post = http_build_query($data);
    $x = curl_init($url);
    curl_setopt($x, CURLOPT_POST, true);
    curl_setopt($x, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($x, CURLOPT_USERPWD, "$id:$token");
    curl_setopt($x, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($x, CURLOPT_POSTFIELDS, $post);
    // var_dump($post);
    $y = curl_exec($x);
    // var_dump($y);
    curl_close($x);
}
