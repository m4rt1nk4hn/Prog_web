const valide = document.getElementById("validate");
const lien = document.getElementById("page_suivante");
lien.style.visibility="hidden";

valide.addEventListener("click", () => {
   var reponses = document.getElementsByName("nombre"); // tableau des reponses de l'utilisateur
   const reponses_correctes = ["1","1","2","1","1","3" ,"3","2"];
   // un tableau pour mettre les réponses données par l'utilisateur, et réponses correctes 
   let score = 0;
   var mauvaisesReponses = [];
   

   for (let i=0; i < reponses.length ; i++) { // on boucle sur les reponses de l'utilisateur
		if (reponses[i].value == reponses_correctes[i]) {
			score = score + 1; // on ajoute un point par bonne reponse
		}
		else {
			mauvaisesReponses.push(i+1); // on note les erreurs
		}
   } 
   if (mauvaisesReponses.length == 0) { //si pas d'erreurs
	   window.alert("Bravo ! Aucune erreur, tu peux passer à l'exercice suivant !");
      lien.style.visibility="visible";
   }
   else {
	   window.alert("ton score est de " + score + " sur " + reponses_correctes.length + ". Tu as fait des erreurs sur les questions : " + mauvaisesReponses);
   }

});