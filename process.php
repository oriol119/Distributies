<?php
echo "sended";
$nombre = strip_tags($_POST['name']);
$email = strip_tags($_POST['e-mail']);
$empresa = strip_tags($_POST['company']);
$web_empresa = strip_tags($_POST['company_web']);
$pais = strip_tags($_POST['country']);
$direccion = strip_tags($_POST['adress']);
$postal = strip_tags($_POST['postal_code']);
$telefono = strip_tags($_POST['phone_number']);

$mensaje = strip_tags($_POST['message']);

//Headers del correo electrónico.
$headers =
'From: ' . $correoFrom . "\r\n". 
'Reply-To: ' . $correoDestino. "\r\n" . 
'X-Mailer: PHP/' . phpversion() .
'MIME-Version: 1.0\r\n'.
'Content-type: text/html; charset=UTF-8\r\n';

//Correo de destino; donde se enviará el correo.
$correoDestino = "marc10sagues@gmail.com";


$asunto = "DISTRIBUTIES";
//Formateo el cuerpo del correo
$cuerpo = "Enviado por: " . $nombre . "";
$cuerpo .= "Empresa: " . $empresa . ", página web: " . $web_empresa . "";
$cuerpo .= "Teléfono de contacto: " . $telefono . "";
$cuerpo .= "E-mail: " . $email . "";
$cuerpo .= "País: " . $pais . " Dirección: " . $direccion . " Postal: " . $postal . "";
$cuerpo .= "Comentario: " . $mensaje;
mail( $correoDestino, $asunto, $cuerpo, $textoEmisor);



?>