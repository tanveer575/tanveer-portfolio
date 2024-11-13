<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form data
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Email variables
    $to = "your-email@example.com"; // Apna email address yahan daalein
    $subject = "New Contact Us Form Submission";
    $body = "You have received a new message from the contact form.\n\n".
            "Full Name: $full_name\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Message: \n$message";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us! We will get back to you soon.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
