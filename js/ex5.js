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


const lien = document.getElementById("page_suivante");
lien.style.visibility="hidden";

let nb_bonnes_reponses= 0;

//question 1
question1_phare.addEventListener("change", () => {
	if(question1_phare.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1; 
		question1_phare.disabled = true; 
	}
});
// si la réponse est bonne on incrémente
// empèche de décocher la case
	
question1_nez.addEventListener("change", () => {
	if(question1_nez.checked){
		question1_nez.disabled = true;
	}
});


question1_faon.addEventListener("change", () => {
	if(question1_faon.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1;
		question1_faon.disabled = true;
	}
});

question1_hotte.addEventListener("change", () => {
	if(question1_hotte.checked){
		question1_hotte.disabled = true;
	}
});

//question 2
question2_des.addEventListener("change", () => {
	if(question2_des.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1;
		question2_des.disabled = true;
	}
});

question2_pas.addEventListener("change", () => {
	if(question2_pas.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1;
		question2_pas.disabled = true;
	}
});

question2_mat.addEventListener("change", () => {
	if(question2_mat.checked){
		question2_mat.disabled = true;
	}
});
		
question2_nez.addEventListener("change", () => {
	if(question2_nez.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1;
		question2_nez.disabled = true;
	}
});

//question 3
question3_phare.addEventListener("change", () => {
	if(question3_phare.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1;
		question3_phare.disabled = true;
	}
});

question3_faon.addEventListener("change", () => {
	if(question3_faon.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1;
		question3_faon.disabled = true;
	}	
});

question3_mat.addEventListener("change", () => {
	if(question3_mat.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1;
		question3_mat.disabled = true;
	}
});

question3_scie.addEventListener("change", () => {
	if(question3_scie.checked){
		nb_bonnes_reponses = nb_bonnes_reponses + 1;
		question3_scie.disabled = true;
	}
});

bouton_fini.addEventListener("click", () => {
	if (nb_bonnes_reponses == 8) {
	window.alert("bravo ! tu peux passer à l'exercice suivant");
    lien.style.visibility="visible";
	}else{
	alert("il y a une erreur, recommence !"); 
	//si l'utilisateur a faux, il recommence a zéro
	//on remet le compteur à zéro, et on réactive les cases
	nb_bonnes_reponses = 0;
	
	question1_phare.checked =false;
	question1_phare.disabled =false;

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

	question2_pas.checked = false;
	question2_pas.disabled = false;

	question2_nez.checked = false;
	question2_nez.disabled = false;

	question3_phare.checked = false;
	question3_phare.disabled = false;

	question3_faon.checked = false;
	question3_faon.disabled = false;

	question3_scie.checked = false;
	question3_scie.disabled = false;

	question3_mat.checked = false;
	question3_mat.disabled = false;

	}
});