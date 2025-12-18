const loupe = document.getElementById("loupe");
const poule = document.getElementById("poule");
const ile = document.getElementById("ile");
const mer = document.getElementById("mer");
const parc = document.getElementById("parc");
const mat = document.getElementById("mat");
const phare_bonne_reponses = document.getElementById("phare_bonne_reponses");
const faon_bonne_reponses = document.getElementById("faon_bonne_reponses");
const des_bonne_reponses = document.getElementById("des_bonne_reponses");
const nez_bonne_reponses = document.getElementById("nez_bonne_reponses");
const pas_bonne_reponses = document.getElementById("pas_bonne_reponses");
const car_bonne_reponses = document.getElementById("car_bonne_reponses");
const hote_bonne_reponses = document.getElementById("hote_bonne_reponses");
const bouton_fini = document.getElementById("bouton_fini");


let nb_bonnes_reponses = 0;

//on récupère les images

const lien = document.getElementById("page_suivante");
lien.style.visibility="hidden";
//le lien pour aller à l'ex2 est caché. Il apparaitra quand l'exercice sera fini

phare_bonne_reponses.addEventListener("click", () => {
	window.alert("Bravo, petit indice: il te faut deux images !");
	nb_bonnes_reponses = nb_bonnes_reponses + 1;

}); 

faon_bonne_reponses.addEventListener("click", () => {
	window.alert("Bravo, petit indice: il te faut deux images !");
	nb_bonnes_reponses = nb_bonnes_reponses + 1;
}); 
	
des_bonne_reponses.addEventListener("click", () => {
	window.alert("Bravo, petit indice: il te faux trois images !");
	nb_bonnes_reponses = nb_bonnes_reponses + 1;
}); 

pas_bonne_reponses.addEventListener("click", () => {
	window.alert("Bravo, petit indice: il te faut trois images !");
	nb_bonnes_reponses = nb_bonnes_reponses + 1;
}); 

nez_bonne_reponses.addEventListener("click", () => {
	window.alert("Bravo, petit indice: il te faut trois images !");
	nb_bonnes_reponses = nb_bonnes_reponses + 1;
}); 

car_bonne_reponses.addEventListener("click", () => {
	window.alert("Bravo, petit indice: il te faut deux images !");
	nb_bonnes_reponses = nb_bonnes_reponses + 1;
}); 

hote_bonne_reponses.addEventListener("click", () => {
	window.alert("Bravo, petit indice: il te faut deux images !");
	nb_bonnes_reponses = nb_bonnes_reponses + 1;
}); 
loupe.addEventListener("click", () => {
    loupe.style.visibility="hidden";
    window.alert("Mauvaise réponse, essaye encore !");});

poule.addEventListener("click", () => {
    poule.style.visibility="hidden";
    window.alert("Mauvaise réponse, essaye encore !");});
//Quand on clique sur l'image elle est cachée pour aider l'enfant

ile.addEventListener("click", () => {
    ile.style.visibility="hidden";
    window.alert("Mauvaise réponse, essaye encore !");});
	
mer.addEventListener("click", () => {
    mer.style.visibility="hidden";
    window.alert("Mauvaise réponse, essaye encore !");});

parc.addEventListener("click", () => {
    parc.style.visibility="hidden";
    window.alert("Mauvaise réponse, essaye encore !");});
	
mat.addEventListener("click", () => {
    mat.style.visibility="hidden";
    window.alert("Mauvaise réponse, essaye encore !");});


//quand la bonne réponse est cliquée, le lien devient visible

bouton_fini.addEventListener("click", () => {
	if (nb_bonnes_reponses >= 7) {
	window.alert("bravo ! tu peux passer à l'exercice suivant");
    lien.style.visibility="visible";
	}
});
// si l'utilisateur a cliqué sur toutes les bonnes réponses, le lien s'affiche