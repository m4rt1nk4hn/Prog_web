const question1_reponse1 = document.getElementById("question1_reponse1");
const question1_reponse2 = document.getElementById("question1_reponse2");
const question1_reponse3 = document.getElementById("question1_reponse3");
const question1_reponse4 = document.getElementById("question1_reponse4");

const question2_reponse1 = document.getElementById("question2_reponse1");
const question2_reponse2 = document.getElementById("question2_reponse2");
const question2_reponse3 = document.getElementById("question2_reponse3");
const question2_reponse4 = document.getElementById("question2_reponse4");

const question3_reponse1 = document.getElementById("question3_reponse1");
const question3_reponse2 = document.getElementById("question3_reponse2");
const question3_reponse3 = document.getElementById("question3_reponse3");
const question3_reponse4 = document.getElementById("question3_reponse4");

const bouton_fini = document.getElementById("bouton_fini");


const lien = document.getElementById("page_suivante");
lien.style.visibility="hidden";

let nb_bonne_reponse=0;

question1_.addEventListener("ckeck", () => {
	nb_bonnes_reponses = nb_bonnes_reponses + 1;
}
	
