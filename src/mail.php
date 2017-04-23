<?php
/**
 * Created by PhpStorm.
 * User: Mateusz
 * Date: 13.05.2017
 * Time: 22:15
 */

if (isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {

    if (isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
        $to = 'myzalik@gmail.com';
        $name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
        $lastname = filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
        $name_send = $name . ' ' . $lastname;
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
        $sent = email($to, $email, $name_send, $subject, $message);
        if ($sent) {
            echo 'sent';

        } else {
            echo 'error';

        }
        return;
    }
}

function email($to, $from_mail, $from_name, $subject, $message)
{
    $header = array();
    $header[] = "MIME-Version: 1.0";
    $header[] = "From: {$from_name}<{$from_mail}>";
    $header[] = "Content-type:text/html; charset=iso-8859-1";
    $header[] = "Content-Transfer-Encoding: 7bit";
    if (mail($to, $subject, $message, implode("\r\n", $header))) return true;
}