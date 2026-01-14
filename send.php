<?php
// SPAM-SCHUTZ: Honeypot
if (!empty($_POST['honeypot'])) {
    die("OK");
}

// Pflichtfelder validieren
$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$phone   = trim($_POST['phone']   ?? '');
$address = trim($_POST['address'] ?? '');
$message = trim($_POST['message'] ?? '');
$privacy = isset($_POST['privacy']);

// Mindestvalidierung
if ($name === '' || $email === '' || $phone === '' || $message === '' || !$privacy) {
    header("Location: /?error=1");
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: /?error=1");
    exit;
}

// Wohin soll die E-Mail gehen?
$to = "info@rldachreinigung.de"; // <-- ÄNDERN!

$subject = "Neue Kontaktanfrage von $name";

$body = "Neue Kontaktanfrage:

Name: $name
E-Mail: $email
Telefon: $phone
Adresse: $address

Nachricht:
$message
";

// Header
$headers  = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Mail senden
if (mail($to, $subject, $body, $headers)) {
    header("Location: /?success=1");
    exit;
} else {
    header("Location: /?error=1");
    exit;
}
