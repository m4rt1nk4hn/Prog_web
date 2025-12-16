const loupe = document.getElementById("loupe");
const poule = document.getElementById("poule");
const ile = document.getElementById("ile");
const mer = document.getElementById("mer");
const parc = document.getElementById("parc");
const phare = document.getElementById("phare");
const mat = document.getElementById("mat");
const phare_bonne_reponses = document.getElementById("phare_bonne_reponses");
const faon_bonne_reponses = document.getElementById("faon_bonne_reponses");
const des_bonne_reponses = document.getElementById("des_bonne_reponses");
const faon_bonne_reponses = document.getElementById("faon_bonne_reponses");
const nez_bonne_reponses = document.getElementById("nez_bonne_reponses");
const pas_bonne_reponses = document.getElementById("pas_bonne_reponses");
const car_bonne_reponses = document.getElementById("car_bonne_reponses");
const hote_bonne_reponses = document.getElementById("hote_bonne_reponses");
const bouton_fini = document.getElementById("bouton_fini");


let nb_bonnes_reponses = 0;

const bonne_reponse = document.getElementById("bonne_reponse");
//on récupère les images

const lien = document.getElementById("page_suivante");
lien.style.visibility="hidden";
//le lien pour aller à l'ex2 est caché. Il apparaitra quand l'exercice sera fini

loupe.addEventListener("click", () => {
    loupe.style.visibility="hidden";
    window.alert("Essaye encore !");});

poule.addEventListener("click", () => {
    poule.style.visibility="hidden";
    window.alert("Essaye encore !");});
//Quand on clique sur l'image elle est cachée pour aider l'enfant

ile.addEventListener("click", () => {
    poule.style.visibility="hidden";
    window.alert("Essaye encore !");});
	
mer.addEventListener("click", () => {
    poule.style.visibility="hidden";
    window.alert("Essaye encore !");});

parc.addEventListener("click", () => {
    poule.style.visibility="hidden";
    window.alert("Essaye encore !");});
	
phare.addEventListener("click", () => {
    poule.style.visibility="hidden";
    window.alert("Essaye encore !");});

mat.addEventListener("click", () => {
    poule.style.visibility="hidden";
    window.alert("Essaye encore !");});
	
derniere_bonne_reponse.addEventListener("click", () => {
    window.alert("Bravo !");
	nb_bonnes_reponses = nb_bonnes_reponses + 1;
	}); 
//quand la bonne réponse est cliquée, le lien devient visible

bouton_fini.addEventListener("click", () => {
	if (nb_bonnes_reponses == 7) {
	window.alert("bravo ! tu peux passer à l'exercice suivant");
    lien.style.visibility="visible";
	}
});
// si l'utilisateur a cliqué sur toutes les bonnes réponses, le lien s'affiche