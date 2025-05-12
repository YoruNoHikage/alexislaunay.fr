function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

window.onload = function() {
    var lang = document.getElementsByTagName("html")[0].getAttribute('lang') || 'en';
    
    var text = {};
    switch(lang) {
        case 'fr':
            text = {
                sent: function() {
                    return 'Le message est bien envoyé ! Si vous ne recevez pas de réponse dans les prochains jours, veuillez réessayer.';
                },
                notSent: function(response, status) {
                    return 'Erreur d\'envoi. Contactez-moi sur les réseaux sociaux.';
                },
                valid: 'Ok',
                invalidMail: "L'adresse mail n'est pas valide.",
                tooShort: 'Le texte est trop court',
            };
            break;
        case 'ja':
            text = {
                sent: function() {
                    return 'メッセージが首尾良く送られました！返事が数日で届かなかったらもう一度送ってください。';
                },
                notSent: function(response, status) {
                    return '送信エラー。SNSで連絡してください。';
                },
                valid: 'OK',
                invalidMail: "メールアドレスは欠缺です。",
                tooShort: 'メッセージは短すぎます。',
            };
            break;
        default:
            text = {
                sent: function() {
                    return "Message has been sent! If you don't get a reply within a few days, please try again.";
                },
                notSent: function(response, status) {
                    return 'Error when sending. Contact me on social networks.';
                },
                valid: 'Ok',
                invalidMail: "Email address is not valid.",
                tooShort: 'Text is too short',
            };
            break;
    }
    
	var form = document.getElementById("form_contact");
	form.onsubmit = function(e) {
    var status = document.getElementById('status');
    status.style.display = 'none';
    
    // TODO: check iframe status? is it possible?

	status.style.display = '';
    status.innerHTML = text.sent();
    form.reset();
	
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