<?php
require "../../configur.php";

$auth = getallheaders();

if (isset($auth['Authorization'])) {
    $user = verifyToken($auth['Authorization']);
    if (isset($user->id)) {
        $page = isset($_GET['page']) ? $_GET['page'] : 1;
        $limit = isset($_GET['limit']) ? $_GET['limit'] : 10;
        $skip = ($page - 1) * $limit;
        $sql = "SELECT * FROM posts WHERE status='active' LIMIT $limit OFFSET $skip ";
        $posts = $conn->query($sql);
        $p = array();
        while ($post = $posts->fetch_assoc()) {
            $user = $conn->query("SELECT * FROM users WHERE id=" . (int)$post['user_id'])->fetch_assoc();
            $post['user'] = $user;
            array_push($p, $post);
        }

        echo json_encode(["success" => true, "message" => "success", "data" => ["posts" => $p]]);
    } else {
        echo json_encode(["message" => "Session expired. Pleae login again.", "success" => false]);
    }
} else {
    echo json_encode(["message" => "Session expired. Pleae login again.", "success" => false]);
}
