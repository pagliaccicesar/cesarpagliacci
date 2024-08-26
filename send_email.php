<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($nombre)) {
        $to = "pagliaccicesar@gmail.com";  // Reemplaza con tu dirección de correo
        $subject = "Nuevo contacto";
        $message = "Nombre: " . $nombre . "\nCorreo: " . $email;
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