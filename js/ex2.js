const bucheron = document.getElementById("bucheron");
const loupe = document.getElementById("loupe");
const poule = document.getElementById("poule");
const ile = document.getElementById("ile");
const mer = document.getElementById("mer");
const parc = document.getElementById("parc");
const mat = document.getElementById("mat");
const phare_bonne_reponses = document.getElementById("phare_bonne_reponses");
var phare_clique = false;
const faon_bonne_reponses = document.getElementById("faon_bonne_reponses");
var faon_clique = false;
const des_bonne_reponses = document.getElementById("des_bonne_reponses");
var des_clique = false;
const nez_bonne_reponses = document.getElementById("nez_bonne_reponses");
var nez_clique = false;
const pas_bonne_reponses = document.getElementById("pas_bonne_reponses");
var pas_clique = false;
const car_bonne_reponses = document.getElementById("car_bonne_reponses");
var car_clique = false;
const hote_bonne_reponses = document.getElementById("hote_bonne_reponses");
var hote_clique = false;
const bouton_fini = document.getElementById("bouton_fini");

//on récupère les éléments du DOM, et on initialise des variables booleennes pour garder en mémoire quelle image a été cliquée

var rebus1_fini = false;
var rebus2_fini = false;
var rebus3_fini = false;
// les variables qui indique quels rébus sont finis

const lien = document.getElementById("page_suivante");
lien.style.visibility="hidden";
//le lien pour aller à l'ex3 est caché. Il apparaitra quand l'exercice sera fini

phare_bonne_reponses.addEventListener("click", () => {
	if (faon_clique == true) { // si le faon a été cliqué le rébus est fini
		window.alert("Bravo, tu as résolu le premier rébus !")
		phare_bonne_reponses.style.visibility="hidden";
		faon_bonne_reponses.style.visibility="hidden";
		poule.style.visibility="hidden";
		ile.style.visibility="hidden";
		//on retire les images de l'exercice une fois le rébus résolu
		rebus1_fini = true;
		if (rebus2_fini && rebus3_fini) { // au cas où l'utilisateur a fait les rébus dans le désordre
			lien.style.visibility="visible";
		}
	}
	else {
		window.alert("C'est la deuxième syllabe. Clique sur l'image correspondant à la première syllabe pour finir l'exercice !")
	}
	phare_clique = true; // on garde en mémoire quelle image a été cliquée

}); 

//on ne commentera pas tout le code car c'est à peu près le même code que plus haut

faon_bonne_reponses.addEventListener("click", () => {
	if (phare_clique == false) {
		window.alert("Bravo, petit indice: il te faut deux images !");
	}
	else {
		window.alert("Bravo ! Tu as cliqué dans le désordre mais tu as cliqué sur les bonnes images !");
		phare_bonne_reponses.style.visibility="hidden";
		faon_bonne_reponses.style.visibility="hidden";
		poule.style.visibility="hidden";
		ile.style.visibility="hidden";
		rebus1_fini = true;
		if (rebus2_fini && rebus3_fini) { // au cas où l'utilisateur a fait les rébus dans le désordre
			lien.style.visibility="visible";
		}
	}
	faon_clique = true;

}); 
	
des_bonne_reponses.addEventListener("click", () => {
	des_clique = true;
	if (nez_clique == true && pas_clique == true) {
		rebus2_fini = true;
		window.alert("Bravo ! Tu as terminé le rébus");
		nez_bonne_reponses.style.visibility="hidden";
		des_bonne_reponses.style.visibility="hidden";
		mer.style.visibility="hidden";
		loupe.style.visibility="hidden";
		pas_bonne_reponses.style.visibility="hidden";
		parc.style.visibility="hidden";
		rebus2_fini = true;
		if (rebus1_fini && rebus3_fini) { // au cas où l'utilisateur a fait les rébus dans le désordre
			lien.style.visibility="visible";
		}
	}
	else {
		window.alert("Bravo, petit indice: il te faux trois images !");
	}
}); 

pas_bonne_reponses.addEventListener("click", () => {
	pas_clique = true;
	if (nez_clique == true && des_clique == true) {
		rebus2_fini = true;
		window.alert("Bravo ! Tu as terminé le rébus");
		nez_bonne_reponses.style.visibility="hidden";
		des_bonne_reponses.style.visibility="hidden";
		mer.style.visibility="hidden";
		loupe.style.visibility="hidden";
		pas_bonne_reponses.style.visibility="hidden";
		parc.style.visibility="hidden";
		rebus2_fini = true;
		if (rebus1_fini && rebus3_fini) { // au cas où l'utilisateur a fait les rébus dans le désordre
			lien.style.visibility="visible";
		}
	}
	else {
		window.alert("Bravo, petit indice: il te faux trois images !");
	}
}); 

nez_bonne_reponses.addEventListener("click", () => {
	nez_clique = true;
	if (des_clique == true && pas_clique == true) {
		rebus2_fini = true;
		window.alert("Bravo ! Tu as terminé le rébus");
		nez_bonne_reponses.style.visibility="hidden";
		des_bonne_reponses.style.visibility="hidden";
		mer.style.visibility="hidden";
		loupe.style.visibility="hidden";
		pas_bonne_reponses.style.visibility="hidden";
		parc.style.visibility="hidden";
		rebus2_fini = true;
		if (rebus1_fini && rebus3_fini) { // au cas où l'utilisateur a fait les rébus dans le désordre
			lien.style.visibility="visible";
		}
	}
	else {
		window.alert("Bravo, petit indice: il te faux trois images !");
	}
}); 

car_bonne_reponses.addEventListener("click", () => {
	car_clique = true;
	hote_clique = true;
	if (hote_clique == true) {
		window.alert("Bravo ! Tu as résolu le rébus, même si tu as répondu dans le désordre");
		car_bonne_reponses.style.visibility="hidden";
		hote_bonne_reponses.style.visibility="hidden";
		mat.style.visibility="hidden";
		bucheron.style.visibility="hidden";
		rebus3_fini = true;
		if (rebus1_fini && rebus2_fini) {
			lien.style.visibility="visible";
		}
	}
	else {
		window.alert("Bravo ! Trouve la deuxième image maintenant");
	}
	
}); 

hote_bonne_reponses.addEventListener("click", () => {
	hote_clique = true;
	if (car_clique == false) {
		window.alert("Bravo ! Trouves la première image maintenant");
	}
	else {
		window.alert("Bravo ! Tu as résolu le rébus");
		car_bonne_reponses.style.visibility="hidden";
		hote_bonne_reponses.style.visibility="hidden";
		mat.style.visibility="hidden";
		bucheron.style.visibility="hidden";
		rebus3_fini = true;
		if (rebus1_fini && rebus2_fini) {
			lien.style.visibility="visible";
		}
		
	}
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
