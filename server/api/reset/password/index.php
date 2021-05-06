<?php
require "../../configur.php";

$auth = getallheaders();

if (isset($auth['Authorization'])) {
    $user = verifyToken($auth['Authorization']);
    if (isset($user->id)) {
        $password = base64_encode(base64_encode($conn->real_escape_string($_POST['password'])));
        $conn->query("UPDATE users SET password='" . $password . "' WHERE id=" . $user->id);
        echo json_encode(["success" => true, "message" => "Password reset successfully."]);

    } else {
        echo json_encode(["message" => "Invalid reset password token.", "success" => false]);
    }
} else {
    echo json_encode(["message" => "Invalid reset password token.", "success" => false]);
}
