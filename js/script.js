// Gestion du formulaire de contact
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
	
	confirmationEnvoi.style.opacity = "100%";

	function validationPrenomNom() { return prenomNom.match(/^[a-zA-Z ]+$/); }
	function validationEmail() { return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); };
	function validationSujet() { return sujet.match(/^[\w\d ]+$/); };
	
});
