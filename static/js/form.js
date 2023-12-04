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
                    return 'Le message est bien envoyé !';
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
                    return 'メッセージが首尾良く送られました！';
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
                    return 'Message has been sent!';
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
    
    if (!window.fetch) {
      e.target.action = 'https://maker.ifttt.com/trigger/contact/with/key/bOTXqjYhEh9syFkwYHeTiyXPExknOacXaCHJBUG-jwf';
      
      e.target.name.name = 'value1';
      e.target.mail.name = 'value2';
      e.target.message.name = 'value3';

      return;
    }
    
    e.preventDefault();
    
    var data = new FormData();
    
    data.append('value1', e.target.name.value);
    data.append('value2', e.target.mail.value);
    data.append('value3', nl2br(e.target.message.value));

    const queryParams = new URLSearchParams(data);
    
    fetch('https://maker.ifttt.com/trigger/contact/with/key/bOTXqjYhEh9syFkwYHeTiyXPExknOacXaCHJBUG-jwf?' + queryParams.toString(), {
      method: 'GET',
    }).then(d => {
			status.style.display = '';
      status.innerHTML = text.sent();
      form.reset();
    }, e => {
			status.style.display = '';
      status.innerHTML = text.notSent();
    });

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
