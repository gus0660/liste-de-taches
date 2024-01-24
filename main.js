function craiVar(element) {
    return document.querySelector(element)
};
const auDessus = craiVar("#auDessus");
const grosTitre = craiVar("#grosTitre");
const taskApp = craiVar("#taskApp");
const newTask = craiVar("#newTask");
const addTask = craiVar("#addTask");
const tasksList = craiVar("#tasksList");

addTask.addEventListener("click",() => {
    // console.log("YOUPY!!")
    let valeur = newTask.value;
    console.log(valeur)
});