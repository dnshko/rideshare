<?php
require "../../configur.php";

$auth = getallheaders();

if (isset($auth['Authorization'])) {
    $user = verifyToken($auth['Authorization']);
    if (isset($user->id)) {
        if (!isset($_POST['location_from'])) {
            echo json_encode(["message" => "Please enter location from.", "success" => false]);
            return false;
        }
        if (!isset($_POST['destination'])) {
            echo json_encode(["message" => "Please enter destination.", "success" => false]);
            return false;
        }
        if (!isset($_POST['passenger'])) {
            echo json_encode(["message" => "Please enter passenger.", "success" => false]);
            return false;
        }
        $location_from = $conn->real_escape_string($_POST['location_from']);
        $destination = $conn->real_escape_string($_POST['destination']);
        $description = $conn->real_escape_string($_POST['description']);
        $passenger = $conn->real_escape_string($_POST['passenger']);
        $child_seat = $conn->real_escape_string($_POST['child_seat']);
        $estimated_time = $conn->real_escape_string($_POST['estimated_time']);
        $sql = "INSERT INTO posts(`location_from`,`destination`,`description`,`passenger`,`child_seat`,`estimated_time`) VALUES('" . $location_from . "','" . $destination . "','" . $description . "','" . $passenger . "','" . $child_seat . "','" . $estimated_time . "')";
        $conn->query($sql);
        echo json_encode(["success" => true, "message" => "Post created successfully."]);
    } else {
        echo json_encode(["message" => "Session expired. Pleae login again.", "success" => false]);
    }
} else {
    echo json_encode(["message" => "Session expired. Pleae login again.", "success" => false]);
}
