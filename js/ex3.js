const valide = document.getElementById("validate");
const lien = document.getElementById("page_suivante");
lien.style.visibility="hidden";

valide.addEventListener("click", () => {
   var reponses = document.getElementsByName("nombre"); // tableau des reponses de l'utilisateur
   const reponses_correctes = ["1","1","2","1","1","3" ,"1","1","1","3","1","2"];
   // un tableau pour mettre les réponses données par l'utilisateur, et réponses correctes 
   let score = 0;
   var mauvaisesReponses = [];
   

   for (let i=0; i < reponses.length ; i++) { // on boucle sur les reponses de l'utilisateur
      //window.alert(reponses.values(i));
		if (reponses[i].value == reponses_correctes[i]) {
			score = score + 1; // on ajoute un point par bonne reponse
		}
		else {
			mauvaisesReponses.push(i+1); // on note les erreurs
		}
   } 
   if (mauvaisesReponses.length == 0) {
	   window.alert("bravo; zéro erreur !");
      lien.style.visibility="visible";
   }
   else {
      if (mauvaisesReponses.lenght == 1) {
         window.alert("Tu as fait une erreur à la question numéro " + mauvaisesReponses)
      }
      else if (mauvaisesReponses.length > 1) {
         window.alert("tu as fait des erreurs sur les questions numéros : " + mauvaisesReponses);
      }
	   window.alert("ton score est de " + score);
   }

});