<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

const STATUS_TYPE_ERROR   = 'error';
const STATUS_TYPE_WARN    = 'error';
const STATUS_TYPE_SUCCESS = 'success';
const ENTRY_TYPE_NAME     = 'name';
const ENTRY_TYPE_EMAIL    = 'email';
const ENTRY_TYPE_SUBJECT  = 'subject';
const ENTRY_TYPE_MESSAGE  = 'message';
const ENTRY_TYPE_LANG     = 'lang';

$name          = $_POST[ENTRY_TYPE_NAME];
$email_address = $_POST[ENTRY_TYPE_EMAIL];
$subject       = $_POST[ENTRY_TYPE_SUBJECT];
$message       = $_POST[ENTRY_TYPE_MESSAGE];
$lang          = $_POST[ENTRY_TYPE_LANG];

$check         = empty($name) || empty($subject);
$lang_type     = $lang ?? 'pt-BR';
$body          = strval(file_get_contents('template/address_mail.php'));
$yarn          = date("Y");

$response = (object) [];
$entries = array(
  "name"    => $name,
  "email"   => $email_address,
  "subject" => $subject,
);

$message_body = array(
  "pt-BR" => [
    "greeting_text_top"    => 'Olá $name',
    "greeting_text_bottom" => "Estamos felizes com seu contato.",
    "greeting_text_end"    => "Em breve entraremos em contato com você.",
    "greeting_btn"         => "Obrigado",
    "copyright"            => "Todos os direitos reservados.",
    "alt_text"             => "Olá! Estamos felizes com seu contato. Em breve entraremos em contato com você. Obrigado ;)"
  ],
  "en" => [
    "greeting_text_top"    => 'Hello $name!',
    "greeting_text_bottom" => "We are happy with your contact.",
    "greeting_text_end"    => "Soon, we will contact you.",
    "greeting_btn"         => "Thanks",
    "copyright"            => "All rights reserved.",
    "alt_text"             => "Hello! We are happy with your contact. Soon, we will contact you. Thanks ;)"
  ]
);

$errors = array(
  "pt-BR" => [
    "name"    => 'O campo NOME é obrigatório.',
    "email"   => 'O campo E-MAIL é obrigatório.',
    "subject" => 'O campo ASSUNTO é obrigatório.',
    "success" => 'Email enviado com sucesso!',
    "generic" => "Erro ao enviar a sua mensagem. Verifique seu e-mail ou tente novamente mais tarde."
  ],
  "en" => [
    "name"    => 'The NAME field is required.',
    "email"   => 'The EMAIL field is required.',
    "subject" => 'The SUBJECT field is required.',
    "success" => 'Message has been sent!',
    "generic" => "Error sending your message. Please check your email or try again later."
  ]
);

$error_message_translated = $errors[$lang_type];
$body_message_translated  = $message_body[$lang_type];

foreach($entries as $key => $value) {
  if (empty($value) && $key !== ENTRY_TYPE_EMAIL) {
    $response->$key = [
      "text" => $error_message_translated[$key],
      "type" => STATUS_TYPE_WARN
    ];
    $response->status = STATUS_TYPE_WARN;
  }
}
unset($key, $value);

function array_every(array $arr, callable $predicate): bool
{
  foreach ($arr as $e) {
    if (!call_user_func($predicate, $e)) {
      return false;
    }
  }

  return true;
}

function is_even($e): bool
{
  return !empty($e);
}

try {
//  $mail->SMTPDebug = SMTP::DEBUG_SERVER;

  // Server settings
  $mail             = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host       = 'email-ssl.com.br';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'develop@azzurracapital.com.br';
  $mail->Password   = 'azzurra@Dev1';
  $mail->Port       = 587;


  //Recipients
  $mail->setFrom('develop@azzurracapital.com.br', 'Develop');
  $mail->addAddress($email_address, $name);

  // Replace variables body
  $body = str_replace('$greeting_text_top', $body_message_translated["greeting_text_top"], $body);
  $body = str_replace('$greeting_text_bottom', $body_message_translated["greeting_text_bottom"], $body);
  $body = str_replace('$greeting_text_end', $body_message_translated["greeting_text_end"], $body);
  $body = str_replace('$greeting_btn', $body_message_translated["greeting_btn"], $body);
  $body = str_replace('$copyright', $body_message_translated["copyright"], $body);
  $body = str_replace('$name', $name, $body);
  $body = str_replace('$yarn', $yarn, $body);

  //Content
  $mail->IsHTML(true);
  $mail->CharSet = 'UTF-8';

  $mail->Subject = $subject;
  $mail->Body    = $body;
  $mail->AltBody = 'Olá $name! Estamos felizes com seu contato. Em breve entraremos em contato com você. Obrigado ;)';

  if (array_every($entries, "is_even")) {
    $response->success = [
      "text" => $error_message_translated[STATUS_TYPE_SUCCESS],
      "type" => STATUS_TYPE_SUCCESS
    ];
    $response->status = STATUS_TYPE_SUCCESS;

    $mail->send();
  }

  echo json_encode($response, JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
  if (empty($email)) {
    $response->email = [
      "text" => $error_message_translated['email'],
      "type" => STATUS_TYPE_ERROR
    ];
  } else {
    $response->generic = [
      "text" => "O campo {$error_message_translated['generic']} é obrigatório.",
      "type" => STATUS_TYPE_ERROR
    ];
  }

  $response->status = STATUS_TYPE_ERROR;

  echo json_encode($response, JSON_UNESCAPED_UNICODE);
}


