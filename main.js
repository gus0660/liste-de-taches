function craiVar(element) {
  return document.querySelector(element);
}
const auDessus = craiVar("#auDessus");
const grosTitre = craiVar("#grosTitre");
const taskApp = craiVar("#taskApp");
const newTask = craiVar("#newTask");
const addTask = craiVar("#addTask");
const tasksList = craiVar("#tasksList");
// il faut : créé une détection du click sur "ajouter" donc "addEventListener" sur "addTask"
addTask.addEventListener("click", () => {
  // qui génère une variable "valeur" qui correspont à la "value" de "newTask"
  let valeur = newTask.value;
  console.log(valeur); // consultation de la "newTask.value"
});
