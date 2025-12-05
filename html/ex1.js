const loupe = document.getElementById("loupe");
const poule = document.getElementById("poule");
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

bonne_reponse.addEventListener("click", () => {
    window.alert("Bravo !");
    lien.style.visibility="visible"}); 
//quand la bonne réponse est cliquée, le lien devient visible