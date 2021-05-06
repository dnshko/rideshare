<?php
require "../../configur.php";

$auth = getallheaders();

if (isset($auth['Authorization'])) {
    $user = verifyToken($auth['Authorization']);
    if (isset($user->id)) {
        $sql = "SELECT * FROM users WHERE id=" . $user->id;
        $userpro = $conn->query($sql)->fetch_assoc();
        $userpro['password'] = null;
        echo json_encode(["message" => "success", "success" => true, "data" => ["user" => $userpro]]);

    } else {
        echo json_encode(["message" => "Session expired. Please login again.", "success" => false]);
    }
}
