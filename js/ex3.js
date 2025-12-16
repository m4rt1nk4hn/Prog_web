const valide = document.getElementById("validate");

valide.addEventListener("click", () => {
   const reponses = document.getElementsByName("nombre"); // tableau des reponses de l'utilisateur
   console.log("reponses =" + typeof reponses);
   console.log(typeof reponses[i]);
   const reponses_correctes = ["1","1","2","1","1","3" ,"1","1","1","3","1","2"];
   let score = 0;
   // un tableau pour mettre les réponses données par l'utilisateur, et réponses correctes 
   let mauvaisesReponses = [];
   for (let i=0; i < reponses.length ; i++) { // on boucle sur les reponses de l'utilisateur
		if (reponses[i] == reponses_correctes[i]) {
			score = score + 1; // on ajoute un point par bonne reponse
		}
		else {
			mauvaisesReponses.push(i); // on note les erreurs
		}
   }
   if (mauvaisesReponses.length == 0) {
	   window.alert("bravo; zéro erreur !");
   }
   else {
	   window.alert("tu as fait des erreurs sur ces questions : " + mauvaisesReponses);
	   window.alert("ton score est de " + score);
   }
});