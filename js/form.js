window.onload = function() {
    var lang = document.getElementsByTagName("html")[0].getAttribute('lang') || 'en';
    
    var text = {};
    switch(lang) {
        case 'fr':
            text = {
                sent: function(response) {
                    return 'Le message est bien envoyé (Réponse du script : ' + response + ')';
                },
                notSent: function(response, status) {
                    return 'Erreur d\'envoi. (Réponse du script : ' + response + '<br/>Code : ' + status + ')';
                },
                valid: 'Ok',
                invalidMail: "L'adresse mail n'est pas valide.",
                tooShort: 'Le texte est trop court',
            };
            break;
        default:
            text = {
                sent: function(response) {
                    return 'Message has been sent (Script\'s response : ' + response + ')';
                },
                notSent: function(response, status) {
                    return 'Erreur d\'envoi. (Script\'s response : ' + response + '<br/>Code : ' + status + ')';
                },
                valid: 'Ok',
                invalidMail: "Email address is not valid.",
                tooShort: 'Text is too short',
            };
            break;
    }
    
	var form = document.getElementById("form_contact");
	form.onsubmit = function() {
		var xhr = new XMLHttpRequest();
	 
		xhr.open('POST', 'contact.php');

		var data = new FormData(form);
		data.append('ajax', true);
		
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				var data = xhr.responseText;
				var status = document.getElementById('status');
				status.style.display = '';
				
				if(xhr.status != 200) {
					status.innerHTML = text.notSent(xhr.responseText, xhr.status);
				}
				else {
					status.innerHTML = text.sent(xhr.responseText);
					form.reset();
				}
			}
		};
		 
		xhr.send(data);
		
		return false;
	};
	
	var name = document.getElementById("name");
	var mail = document.getElementById("mail");
	var message = document.getElementById("message");
	
	name.onchange = message.onchange = function() {
		validate(this, 'string');
	};
	
	mail.onchange = function() {
		validate(this, 'mail');
	};
	
	function validate(field, type) {
		var ok = false;
		var status_message = "";
		
		if(type === 'mail') {
			if(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(field.value)) {
				ok = true;
				status_message = text.valid;
			}
			else {
				status_message = text.invalidMail;
			}
		}
		else if(type === 'string') {
			if(field.value.length > 2) {
				ok = true;
				status_message = text.valid;
			}
			else {
				status_message = text.tooShort;
			}
		}
		
		var status = document.getElementById(field.id + "_status");
		status.innerHTML = status_message;
		if(ok) {
			status.className = 'valid icon icon-check';
		}
		else {
			status.className = 'error icon icon-uncheck';
		}
	}
};