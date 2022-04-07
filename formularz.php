<?php
if (count($_POST))
{
	////////// USTAWIENIA //////////
	$email = 'andrzej.polak@telebit.net.pl';	// Adres e-mail adresata
	$subject = 'temat';	// Temat listu
	$message = 'Dziekujemy za wyslanie formularza';	// Komunikat
	$error = 'Wystapil blad podczas wysylania formularza';	// Komunikat b��du
	$charset = 'iso-8859-2';	// Strona kodowa
	//////////////////////////////
	
	$head =
		"MIME-Version: 1.0\r\n" .
		"Content-Type: text/plain; charset=$charset\r\n" .
		"Content-Transfer-Encoding: 8bit";
	$body = '';
	foreach ($_POST as $name => $value)
	{
		if (is_array($value))
		{
			for ($i = 0; $i < count($value); $i++)
			{
				$body .= "$name=" . (get_magic_quotes_gpc() ? stripslashes($value[$i]) : $value[$i]) . "\r\n";
			}
		}
		else $body .= "$name=" . (get_magic_quotes_gpc() ? stripslashes($value) : $value) . "\r\n";
	}
	echo mail($email, "=?$charset?B?" . base64_encode($subject) . "?=", $body, $head) ? $message : $error;
}
else
{
?>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<form action="?" method="post">
Imie:<INPUT NAME="Imie"SIZE="15" MAXLENGTH="30"><BR>
Nazwisko:<INPUT NAME="Nazwisko" MAXLENGTH="20" SIZE="25"
><br><br>
PROSZE WYPElNIC
<TEXTAREA NAME="list"ROWS=7 COLS=30 WRAP="physical"></TEXTAREA><BR><BR>
<div class="g-recaptcha" data-sitekey="6LcmJ2oUAAAAAM-i2s0XO_wrVW-7Cy96wM5oy-jB"></div>

<INPUT TYPE="submit"VALUE="wyslij">

</form>
<?php
}
?>