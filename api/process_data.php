<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

const STATUS_TYPE_ERROR   = 'error';
const STATUS_TYPE_WARN    = 'error';
const STATUS_TYPE_SUCCESS = 'success';
const ENTRY_TYPE_NAME     = 'name';
const ENTRY_TYPE_EMAIL    = 'email';
const ENTRY_TYPE_SUBJECT  = 'subject';
const ENTRY_TYPE_MESSAGE  = 'message';
const ENTRY_TYPE_LANG     = 'lang';

$mail          = new PHPMailer(true);
$name          = $_POST[ENTRY_TYPE_NAME];
$email_address = $_POST[ENTRY_TYPE_EMAIL];
$subject       = $_POST[ENTRY_TYPE_SUBJECT];
$message       = $_POST[ENTRY_TYPE_MESSAGE];
$lang          = $_POST[ENTRY_TYPE_LANG];
$check         = empty($name) || empty($subject);
$lang_type     = $lang ?? 'pt-BR';

$response = (object) [];
$entries = array(
  "name"    => $name,
  "email"   => $email_address,
  "subject" => $subject,
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
$error_message = $errors[$lang_type];

foreach($entries as $key => $value) {
  if (empty($value) && $key !== ENTRY_TYPE_EMAIL) {
    $response->$key = [
      "text" => $error_message[$key],
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
//   $mail->SMTPDebug = SMTP::DEBUG_SERVER;

  // Server settings
  $mail->isSMTP();
  $mail->Host       = 'email-ssl.com.br';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'develop@azzurracapital.com.br';
  $mail->Password   = 'azzurra@Dev1';
  $mail->Port       = 587;


  //Recipients
  $mail->setFrom('develop@azzurracapital.com.br', 'Develop');
  $mail->addAddress($email_address, $name);

  //Content
  $mail->IsHTML(true);
  $mail->CharSet = 'UTF-8';

  $mail->Subject = $subject;
  $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  if (array_every($entries, "is_even")) {
    $response->success = [
      "text" => $error_message[STATUS_TYPE_SUCCESS],
      "type" => STATUS_TYPE_SUCCESS
    ];
    $response->status = STATUS_TYPE_SUCCESS;

    $mail->send();
  }

  echo json_encode($response, JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
  if (empty($email)) {
    $response->email = [
      "text" => $error_message['email'],
      "type" => STATUS_TYPE_ERROR
    ];
  } else {
    $response->generic = [
      "text" => "O campo {$error_message['generic']} é obrigatório.",
      "type" => STATUS_TYPE_ERROR
    ];
  }

  $response->status = STATUS_TYPE_ERROR;

  echo json_encode($response, JSON_UNESCAPED_UNICODE);
}


