// Gestion du formulaire de contact
async function formulaire(prenomNom, email, sujet, message) {

	const urlSubmitJSON = `https://api.submitjson.com/v1/submit/48p9LQRwX`;
	const reponse = await fetch(urlSubmitJSON, {
  		method: 'POST',
  		headers: {
    		'content-type': 'application/json',
    		'X-API-Key': 'sjk_6ca5afa9b4ab42b09129774dce438bd0',
  		},
  		body: JSON.stringify({
    		data: {
      			prenomNom: prenomNom,
      			email: email,
      			sujet: sujet,
	  			message: message
   			}
  		})
	});

	const submission = await reponse.json()
	
	console.log('📦 Submission response:', submission)
	const confirmationEnvoi = document.getElementById("confirmationEnvoi");
	confirmationEnvoi.style.opacity = "100%";
}

document.getElementById('formulaireContact').addEventListener('submit', (event) => { 
	
	event.preventDefault(); 
																								
	const prenomNom = document.getElementById("prenomNom").value;
	const email = document.getElementById("email").value;
	const sujet = document.getElementById("sujet").value;
	const message = document.getElementById("message").value;
	
	erreurPrenomNom.style.opacity = "0%";
	erreurEmail.style.opacity = "0%";
	erreurSujet.style.opacity = "0%";
	erreurMessage.style.opacity = "0%";
	
	if (validationPrenomNom() == null) { erreurPrenomNom.style.opacity = "100%"; return; }
	if (validationEmail() == null) { erreurEmail.style.opacity = "100%"; return; }
	if (validationSujet() == null) { erreurSujet.style.opacity = "100%"; return; }
	if (!message) { erreurMessage.style.opacity = "100%"; return; }
	
	formulaire(prenomNom, email, sujet, message);

	function validationPrenomNom() { return prenomNom.match(/^[a-zA-Z ]+$/); }
	function validationEmail() { return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); };
	function validationSujet() { return sujet.match(/^[\w\d ]+$/); };
	
});

