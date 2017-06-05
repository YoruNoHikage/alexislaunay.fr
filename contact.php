<?php
	function redirect()
	{
		header('Status: 301 Moved Permanently', false, 301);
		header('Location: /');
		exit();
	}
	
	if(!(isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['message'])))
	{
		redirect();
	}
	
	// Here we get all the information from the fields sent over by the form.
	$name = stripslashes(htmlspecialchars($_POST['name']));
	$mail = htmlspecialchars($_POST['mail']);
	$message = stripslashes(htmlspecialchars($_POST['message']));
	
	$to = 'yorunohikage@gmail.com';
	$subject = '[Contact] "' . $name . '" on ' . $_SERVER['HTTP_HOST'];
	$message = 'Nom : '. $name ."\r\nMessage : " . $message;
  $headers = "Content-Type: text/plain; charset=UTF-8\r\n" . 
             'From: ' . $mail . "\r\n";
	
	if(preg_match("#" . $_SERVER['HTTP_HOST'] . "#is", $_SERVER['HTTP_REFERER']))
	{
		if(filter_var($mail, FILTER_VALIDATE_EMAIL))
		{
			mail($to, $subject, $message, $headers);
			
			// Without AJAX
			if(!isset($_POST['ajax']))
			{
				redirect();
			}
			
			// AJAX
			header('Status: 200 OK', false, 200);
			echo "Message sent.";
		}
		else
		{
			header('Status: 403 Forbidden', false, 403);
			echo "Error : Please provide a correct mail.";
		}
	}
	else
	{
		redirect();
	}
	
?>