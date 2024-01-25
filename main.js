
// creation d'une fonction pour remplacer "document.querySelector()", il faudra juste remplacer "element" par l'id convoité.
function créerBalise(element) {
  return document.querySelector(element);
};


//creation des constantes avec la fonction c-dessus : 
const newTask = créerBalise("#newTask");
const addTask = créerBalise("#addTask");
const tasksList = créerBalise("#tasksList");
// pour commencer il faut : créé une détection du click sur "ajouter" donc "addEventListener" sur "addTask"
addTask.addEventListener("click", () => {
  let valeur = newTask.value; // qui génère une variable "valeur" qui correspont à la "value" de "newTask"

  if (isNaN(newTask.value) == true) {
    let newLi = document.createElement("li");
    newLi.textContent = valeur;
    newLi.id = "boite";
    tasksList.appendChild(newLi);

    let supr = document.createElement("button");
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
