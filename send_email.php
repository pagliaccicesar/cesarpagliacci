<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "pagliaccicesar@gmail.com"; 
        $subject = "Nuevo contacto";
        $message = "Se ha registrado un nuevo correo: " . $email;
        $headers = "From: www.cesarpagliacci.com.ar";

        if (mail($to, $subject, $message, $headers)) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "invalid";
    }
}
?>

