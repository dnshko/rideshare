<?php
require "../configur.php";
if (!isset($_POST['username'])) {
    echo json_encode(['message' => "Username is required.", "success" => false]);
} else if (!isset($_POST['mobile'])) {
    echo json_encode(['message' => "Mobile number is required.", "success" => false]);
} else if (!isset($_POST['password'])) {
    echo json_encode(['message' => "Password is required.", "success" => false]);
} else {
    $mobile = $conn->real_escape_string($_POST['mobile']);
    $password = base64_encode(base64_encode($conn->real_escape_string($_POST['password'])));
    $username = $conn->real_escape_string($_POST['username']);
    $first_name = $conn->real_escape_string($_POST['first_name']);
    $last_name = $conn->real_escape_string($_POST['last_name']);
    $profile_pic = "";
    $check = $conn->query("SELECT * FROM users WHERE mobile='" . $mobile . "'");
    $check = $check->fetch_assoc();
    if ($check) {
        if ($check['mobile_verified'] == 1) {
            echo json_encode(['message' => "This mobile number is already registered.", "success" => false]);
            return false;
        } else if ($check['mobile_verified'] == 0) {
            $conn->query("DELETE FROM users WHERE id=" . $check['id']);
        }
    }

    $check = $conn->query("SELECT * FROM users WHERE username='" . $username . "'");
    $check = $check->fetch_assoc();
    if ($check) {
        echo json_encode(['message' => "This username is already taken.", "success" => false]);
        return false;
    }
    if ($_FILES['profile_pic']) {
        $target_dir = "../../uploads/";
        $filename = basename($_FILES['profile_pic']["name"]);
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
                $profile_pic = "upload/" . $filename;
            }
        }
    }

    $otp = rand(100000, 999999);
    $otp_token = uniqid("ride_share_" . time());
    $message = "OTP for mobile number verification is " . $otp;
    sendSMS($message, $mobile);
    $sql = "INSERT INTO users(`first_name`,`last_name`,`username`,`mobile`,`profile_pic`,`password`,`otp`,`otp_token`) VALUES('" . $first_name . "','" . $last_name . "','" . $username . "','" . $mobile . "','" . $profile_pic . "','" . $password . "'," . $otp . ",'" . $otp_token . "')";
    $conn->query($sql);
    $data = ["otp_token" => $otp_token];
    echo json_encode(['data' => $data, "success" => true, "message" => "OTP sent to your registered mobile number."]);
}
