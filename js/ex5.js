document.addEventListener("DOMContentLoaded", () => { //on charge les éléments du DOM
const question1_phare = document.getElementById("question1_phare");
const question1_nez = document.getElementById("question1_nez");
const question1_faon = document.getElementById("question1_faon");
const question1_hotte = document.getElementById("question1_hotte");

const question2_des = document.getElementById("question2_des");
const question2_pas = document.getElementById("question2_pas");
const question2_mat = document.getElementById("question2_mat");
const question2_nez = document.getElementById("question2_nez");

const question3_phare = document.getElementById("question3_phare");
const question3_faon = document.getElementById("question3_faon");
const question3_scie = document.getElementById("question3_scie");
const question3_mat = document.getElementById("question3_mat");

const bouton_fini = document.getElementById("bouton_fini");
//on récupère les éléments du DOM

const lien = document.getElementById("page_suivante");
lien.style.visibility="hidden";
//Lien qui apparaitra lorsque l'utilisateur aura réussi l'ensemble des exercices


//Bonne réponses
question1_phare.addEventListener("change", () => {
	if(question1_phare.checked){
		question1_phare.disabled = true; 
	}
});// On vérouille la case quand elle est cochée

	

question1_faon.addEventListener("change", () => {
	if(question1_faon.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1; //icrémentation du compteur nb_bonnes_reponses
		question1_faon.disabled = true; // Vérouillage de la case
	}
});

question2_des.addEventListener("change", () => {
	if(question2_des.checked){
		question2_des.disabled = true;
	}
});

question2_pas.addEventListener("change", () => {
	if(question2_pas.checked){
		question2_pas.disabled = true;
	}
});

		
question2_nez.addEventListener("change", () => {
	if(question2_nez.checked){
		question2_nez.disabled = true;
	}
});

question3_phare.addEventListener("change", () => {
	if(question3_phare.checked){
		question3_phare.disabled = true; // Vérouillage de la case
	}
});

question3_mat.addEventListener("change", () => {
	if(question3_mat.checked){
		question3_mat.disabled = true;
	}
});

question3_scie.addEventListener("change", () => {
	if(question3_scie.checked){
		question3_scie.disabled = true;
	}
});

//Mauvaises réponses
question1_nez.addEventListener("change", () => {
	if(question1_nez.checked){
		question1_nez.disabled = true;//Vérouillage de la case
	}
});


question1_hotte.addEventListener("change", () => {
	if(question1_hotte.checked){
		question1_hotte.disabled = true; 
	}
});

question2_mat.addEventListener("change", () => {
	if(question2_mat.checked){
		question2_mat.disabled = true;
	}
});

question3_faon.addEventListener("change", () => {
	if(question3_faon.checked){
		question3_faon.disabled = true;
	}	
});


bouton_fini.addEventListener("click", () => {
	
	let erreurs = []; //initialisation d'un tableau d'erreurs
	
	if(!question1_phare.checked || !question1_faon.checked || question1_nez.checked || question1_hotte.checked){
		erreurs.push("question 1") 
		}//définition des cases qui doivent être cochées ou non, si il y a une erreur, on insére le nom de la question dans le tableau d'erreur
		
	if(!question2_des.checked || !question2_pas.checked || !question2_nez.checked || question2_mat.checked){
		erreurs.push("question 2")
		}
	
	if(!question3_phare.checked || !question3_scie.checked || !question3_mat.checked || question3_faon.checked ){
		erreurs.push("question 3")
		}
	
	if (erreurs.length === 0){ //si il n'y a pas d'erreur, un message confirme la réussite de l'exercice
		window.alert("Bravo ! Tu peux maintenant retourner sur la page d'accueil et refaire les exercices si tu le souhaites!");
		lien.style.visibility="visible";//le lien apparait
		}
	
	else{
	alert("il y a une erreur dans la question :" +erreurs.join(",") +" Recommence !"); //message si il y a une erreur avec l'endroit où elle a été faite
	
	
	question1_phare.checked =false;// On décoche la case
	question1_phare.disabled =false;// On déverrouille la case

	question1_nez.checked = false;
	question1_nez.disabled = false;

	question1_faon.checked = false;
	question1_faon.disabled = false;

	question1_hotte.checked = false;
	question1_hotte.disabled = false;

	question2_des.checked = false;
	question2_des.disabled = false;

	question2_mat.checked = false;
	question2_mat.disabled = false;

	question2_pas.checked = false;// On décoche la case
	question2_pas.disabled = false;// On déverrouille la case

	question2_nez.checked = false;
	question2_nez.disabled = false;

	question3_phare.checked = false;
	question3_phare.disabled = false;

	question3_faon.checked = false;
	question3_faon.disabled = false;

	question3_scie.checked = false;
	question3_scie.disabled = false;

	question3_mat.checked = false;// On décoche la case
	question3_mat.disabled = false;// On déverrouille la case

	}
});

});