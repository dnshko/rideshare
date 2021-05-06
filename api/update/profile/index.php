<?php
require "../../configur.php";

$auth = getallheaders();

if (isset($auth['Authorization'])) {
    $user = verifyToken($auth['Authorization']);
    if (isset($user->id)) {
        $xi = "";
        $updatesql = "UPDATE users SET";
        if (isset($_POST['first_name'])) {
            $first_name = $conn->real_escape_string($_POST['first_name']);
            $updatesql .= " first_name='" . $first_name . "'";
            $xi = ",";
        }
        if (isset($_POST['last_name'])) {
            $last_name = $conn->real_escape_string($_POST['last_name']);
            $updatesql .= $xi . " last_name='" . $last_name . "'";
            $xi = ",";
        }
        if (isset($_POST['mobile'])) {
            $mobile = $conn->real_escape_string($_POST['mobile']);
            $check = $conn->query("SELECT * FROM users WHERE mobile='" . $mobile . "' AND id!=" . $user->id);
            $check = $check->fetch_assoc();
            if ($check) {
                echo json_encode(['message' => "This mobile number is already registered.", "success" => false]);
                return false;
            }
            $updatesql .= $xi . " mobile='" . $mobile . "'";
            $xi = ",";
        }
        if (isset($_POST['password'])) {
            $password = base64_encode(base64_encode($conn->real_escape_string($_POST['password'])));
            $updatesql .= $xi . " password='" . $password . "'";
            $xi = ",";
        }
        if ($_FILES['profile_pic']) {
            $target_dir = "../../../uploads/";
            $filename = time().basename($_FILES['profile_pic']["name"]);
            $target_file = $target_dir . $filename;
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
            $profile_pic = null;
            $check = getimagesize($_FILES['profile_pic']["tmp_name"]);
            if ($check !== false) {
                $uploadOk = 1;
            } else {
                echo json_encode(['message' => "File is not an image.", "success" => false]);
                return false;
                $uploadOk = 0;
            }
            if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
                echo json_encode(['message' => "Sorry, only JPG, JPEG, PNG files are allowed.", "success" => false]);
                return false;
                $uploadOk = 0;
            }
            if ($uploadOk == 0) {
                echo json_encode(['message' => "Sorry, your file was not uploaded.", "success" => false]);
                return false;
            } else {
                if (move_uploaded_file($_FILES["profile_pic"]["tmp_name"], $target_file)) {
                    $profile_pic = "uploads/" . $filename;
                    $updatesql .= $xi . " profile_pic='" . $profile_pic . "'";
                }
            }
        }
        $updatesql .= " WHERE id=" . $user->id;
        if ($xi != "") {
            $conn->query($updatesql);
        }
        echo json_encode([ "success" => true, "message" => "Profile updated successfully."]);
    } else {
        echo json_encode(["message" => "Session expired. Please login again.", "success" => false]);
    }
} else {
    echo json_encode(["message" => "Session expired. Please login again.", "success" => false]);
}
