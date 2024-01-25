// creation d'une fonction pour remplacer "document.querySelector()", il faudra juste remplacer "element" par l'id convoité.
function créerBalise(element) {
  return document.querySelector(element);
};
//creation des constantes avec la fonction c-dessus : 
const newTask = créerBalise("#newTask");
const addTask = créerBalise("#addTask");
const tasksList = créerBalise("#tasksList");
// pour commencer il faut : créé une détection du click sur "ajouter" donc "addEventListener" sur "addTask" nous donne un évenement "click" et la fonction qui en découle.
addTask.addEventListener("click", () => {
  let valeur = newTask.value; // qui génère une variable "valeur" qui correspont à la "value" de "newTask"
// et une condition "if" car il nous faut une interrogation : si on rentre des characteres alors le reste des fonctions se mettent en marche.
  if (isNaN(newTask.value) == true) {// si la valeur "value" de "newTask" est "isNaN" (c'est not a number) et qui renvoie "true" alors :
    let newLi = document.createElement("li");//je génère une variable "newLi" en créant un element "li" (balise html)
    newLi.textContent = valeur;// je la remplis (textContent) avec la let "valeur" (texte saisi)
    newLi.id = "boite";// au passage je lui donne un id pour pouvoir l'habiller avec du css
    tasksList.appendChild(newLi);//je fait de "newLi" l'enfant de "tasksList" pour rattacher la "li" au "ul"
// ok je peux créer un bouton "suprimer" pour faire disparaitre chaque "newLi" ainsi généré
    let supr = document.createElement("button");// je cré une variable "supr" qui cré un element "button" (balise html)
    supr.textContent = "suprimer";
    supr.id = "suprim";
    newLi.appendChild(supr);
    
    newTask.value = "";
    supr.addEventListener("click", () => {
      newLi.remove(supr);
      
    });
    
  }
});

// ok quand on remplis "newTask" et qu'on fait "ajouter" il faut générer une "li" qui est intitulée "la valeur de newTask" donc "newTask.value"(input#newTask) et qui s'affiche sur le DOM sous forme d'un element (li avec un p éventuellement) avec un "id" car il doit etre cliquable pour modififier son état. donc SI le champ de newTask contiend des characteres (string), on peut cliquer sur "ajouter" pour générer un element "li avec un "id"
