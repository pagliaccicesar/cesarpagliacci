<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $tel = filter_var($_POST['tel'], FILTER_SANITIZE_STRING);
    $mje = filter_var($_POST['mje'], FILTER_SANITIZE_STRING);

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($nombre)) {
        $to = "info@cesarpagliacci.com.ar";  // Reemplaza con tu dirección de correo
        $subject = "Nuevo contacto";
        $message = "Nombre: " . $nombre . "\nCorreo: " . $email .  "\nPhone: " . $tel .  "\nMensaje: " . $mje;
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