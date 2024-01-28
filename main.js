// ok quand on remplis "newTask" et qu'on fait "ajouter" il faut générer une "li" qui est intitulée "la valeur de newTask" donc "newTask.value"(input#newTask) et qui s'affiche sur le DOM sous forme d'un element (li ou un p éventuellement) avec un "id" car il doit etre cliquable pour modififier son état. donc SI le champ de newTask contiend des characteres (string), on peut cliquer sur "ajouter" pour générer un element "li avec un "id"

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
    supr.textContent = "suprimer";// je le remplis "textContent" avec les characteres : "suprimer"
    supr.id = "suprim";// au passage je lui donne un id pour pouvoir le reprendre en css
    newLi.appendChild(supr);// et je le rattache (appendChild) à son parent "newLi"
    
    newTask.value = "";// petite fonction pour remplacer ce qui a été rentré dans le input "newTask" par du vide : "" avant de cliquer sur le bouton "suprimer"
    supr.addEventListener("click", () => {//evenement "addEventListener" sur le bouton "supr" pour faire marcher la petite fonction :
      newLi.remove(supr);// fonction pour "remove" la "newLi"
    });
  }
});

// pour sauvegarder les "newLi" je commence le "localStorage" par la fonction "saveLi" que je dois appeler à la fin de l'addEventListener de addTask (addTask.addEventListener)
      function saveLi() {
        const textlList = []; // créations d'une constante "tablList" qui est un tableau : [] vide
        const meslists = document.querySelectorAll("li");// creation d'une constante qui, sur le DOM(document) va prendre tout(all) les "li"

        // le paquet de "li" donc "mesLists"est un tableau qu'il fau décomposer pour avoir accés à chaques élement donc on utilise "forEach"
        meslists.forEach("item", () => {// je décompose "mesLists" avec "forEach"ce qui nous donne des elements que j'ai décidé de nommer "item" sur lesquels on fait les opérations suivantes
          let text = item.textContent;// je cré une variable "text" égale au texte que chaque element(item) contient (textContent)
          textlList.push(text)// dans ma variable tableau "textList" je pousse(push) les variables de texte "text"
          // j'ai donc une variable "textList" qui est un tableau(groupe) constitué de plusieurs elements qui sont des variables "text" remplis de chaque texte de "newLi"
        })
        localStorage.setItem('list', JSON.stringify(textsList));
      }
