<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "restaurant_email@gmail.com";  // Replace with the restaurant's email
    $subject = "Message from Flora Website";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    $email_body = "You have received a new message from your website contact form.\n\n";
    $email_body .= "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n\n";
    $email_body .= "Message:\n" . $message . "\n";
    
    // Send the email
    mail($to, $subject, $email_body, $headers);
    
    // Redirect to thank you page
    header("Location: thank_you.html");
}
?>
