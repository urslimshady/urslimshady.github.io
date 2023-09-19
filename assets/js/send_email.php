<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // You'll need to configure your email settings here
    $to = "samrohit933@gmail.com";
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    http_response_code(405); // Method Not Allowed
}
?>
