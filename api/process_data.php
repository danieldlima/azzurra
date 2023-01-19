<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

class ErrorType {
  const Error = 'error';
  const Warn = 'Warn';
}

class EntriesType {
  const Name = 'name';
  const Email = 'email';
  const Subject = 'subject';
  const Generic = 'generic';
}

$mail = new PHPMailer(true);
$name = $_POST["name"];
$email_address = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$check = empty($name) || empty($subject);

$response = (object) [];
$entries = array(
  "name" => $name,
  "email" => $email_address,
  "subject" => $subject,
);

$errors = array(
  "pt-BR" => [
    "name" => 'O campo NOME é obrigatório.',
    "email" => 'O campo E-MAIL é obrigatório.',
    "subject" => 'O campo ASSUNTO é obrigatório.',
    "generic" => "Erro ao enviar a sua mensagem. Verifique seu e-mail ou tente novamente mais tarde."
  ],
  "en" => [
    "name" => 'The NAME field is required.',
    "email" => 'The EMAIL field is required.',
    "subject" => 'The SUBJECT field is required.',
    "generic" => "Error sending your message. Please check your email or try again later."
  ]
);

foreach($entries as $key => $value) {
  if (empty($value) && $key !== EntriesType::Email) {
    $response->$key = [
      "text" => $errors['pt-BR'][$key],
      "type" => ErrorType::Warn
    ];
  }
}
unset($key, $value);

try {
  // Server debug
  // $mail->SMTPDebug = SMTP::DEBUG_SERVER;

  // Server settings
  $mail->isSMTP();
  $mail->Host       = 'email-ssl.com.br';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'develop@azzurracapital.com.br';
  $mail->Password   = 'azzurra@Dev1';
  $mail->Port       = 587;


  // process_data.php
  //Recipients
  $mail->setFrom('develop@azzurracapital.com.br', 'Develop');
  $mail->addAddress($email_address, $name);

  //Content
  $mail->IsHTML(true);
  $mail->CharSet = 'UTF-8';

  $mail->Subject = $subject;
  $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  $obj = (object) [
    /*"name" =>
      isset($name)
        ? null
        : [
          "text" => "Existe campo(s) obrigatório(s) não preenchidos.",
          "type" => "warn"
        ],
    "email" =>
      isset($name)
        ? null
        : [
          "text" => "O campo SEU EMAIL é obrigatório.",
          "type" => "error"
        ],
    "subject" =>
      isset($name)
        ? null
        : [
          "text" => "Existe campo(s) obrigatório(s) não preenchidos.",
          "type" => "warn"
        ]
  */];
  $obj->aBoll = false;


  /*if (!$check) {
    $mail->send();
//    echo "[[success]]Mensagem enviada com sucesso!";
    echo json_encode($response);
  } else {
    echo '[[warn]]Existe campo(s) obrigatório(s) não preenchidos.';
  }*/

  echo json_encode($response, JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
  if (empty($email)) {
    $response->email = [
      "text" => $errors['pt-BR']['email'],
      "type" => ErrorType::Error
    ];
  } else {
    $response->generic = [
      "text" => "O campo {$errors['pt-BR']['generic']} é obrigatório.",
      "type" => ErrorType::Error
    ];
  }

  echo json_encode($response, JSON_UNESCAPED_UNICODE);
}


