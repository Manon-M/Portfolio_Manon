let tabUser = [];
let id = 0;

function recup(){

    let user ={
        name : document.getElementById("name").value,
        prenom : document.getElementById("prenom").value,
        age : document.getElementById("age").value,
        id : id
    }
    id++
    tabUser.push(user)
    let mySection = document.createElement("section");
    mySection.classList.add("w-full", "grid", "grid-cols-5", "place-items-center", "bg-gray-200", "animation");
    document.getElementById("list").appendChild(mySection);
    let tabList = [id, user.name, user.prenom, user.age]
    for(let i = 0; i < tabList.length; i++){
        let myDiv = document.createElement("div");
        myDiv.textContent = tabList[i]
        mySection.appendChild(myDiv)
    }
    let myDivButton = document.createElement("div")
    mySection.appendChild(myDivButton)
    mySection.style.backgroundColor = '#e5e8eb';
    let myButton = document.createElement("button");
    myButton.textContent = "X";
    myDivButton.appendChild(myButton);
    myButton.addEventListener('click', supprimerLigne);
}
//permet de supprimer un élément dans le tableau
function supprimerLigne(event){
    let parent = document.getElementById("list");
    let elemsuppr = document.querySelector("ul section");
    parent.removeChild(elemsuppr)
}

function recupnom(){ 
    tabUser.sort(function compare(a, b){
    if (a.name < b.name)
     return -1;
    if (a.name > b.name)
     return 1;
  
    return 0;
    })
     //on rappelle toute la liste
     let ul = document.getElementById("list")
     //on créé une boucle while: tant qu'il y a un "enfant" li il l'efface
     while(ul.firstChild){
         ul.removeChild(ul.firstChild);
     }

    tabUser.forEach((tabUser) => {
        id++
        let mySection = document.createElement("section");
        mySection.classList.add("w-full", "grid", "grid-cols-5", "place-items-center", "bg-gray-200");  
        let tabList = [id, tabUser.name, tabUser.prenom, tabUser.age]
        //on recréait la liste qui est triée
        for(let i = 0; i < tabList.length; i++){
            let myDiv = document.createElement("div");
            myDiv.textContent = tabList[i]
            mySection.appendChild(myDiv)
        }
    //création du bouton de suppression
    let myDivButton = document.createElement("div")
    mySection.appendChild(myDivButton)
    let myButton = document.createElement("button");
    myButton.textContent = "X";
    myDivButton.appendChild(myButton);
    myButton.addEventListener('click', supprimerLigne)
    document.getElementById("list").appendChild(mySection);
    })
}

function recupprenom(){ 
    tabUser.sort(function compare(a, b){
    if (a.prenom < b.prenom)
     return -1;
    if (a.prenom > b.prenom)
     return 1;
  
  return 0;
}
)
//on rappelle toute la liste
let ul = document.getElementById("list")
//on créé une boucle while: tant qu'il y a un "enfant" li il l'efface
while(ul.firstChild){
    ul.removeChild(ul.firstChild);
}
tabUser.forEach((tabUser) => {
    id++
    let mySection = document.createElement("section");
    mySection.classList.add("w-full", "grid", "grid-cols-5", "place-items-center", "bg-gray-200");  
    let tabList = [id, tabUser.name, tabUser.prenom, tabUser.age]
    //on recréait la liste qui est triée
    for(let i = 0; i < tabList.length; i++){
        let myDiv = document.createElement("div");
        myDiv.textContent = tabList[i]
        mySection.appendChild(myDiv)
    }
//création du bouton de suppression
let myDivButton = document.createElement("div")
mySection.appendChild(myDivButton)
let myButton = document.createElement("button");
myButton.textContent = "X";
myDivButton.appendChild(myButton);
myButton.addEventListener('click', supprimerLigne)
document.getElementById("list").appendChild(mySection);
})
}

function recupage(){ 
    tabUser.sort(function compareNombres(a, b) {
        return a.age - b.age;
      }
)
//on rappelle toute la liste
let ul = document.getElementById("list")
//on créé une boucle while: tant qu'il y a un "enfant" li il l'efface
while(ul.firstChild){
    ul.removeChild(ul.firstChild);
}
tabUser.forEach((tabUser) => {
    id++
    let mySection = document.createElement("section");
    mySection.classList.add("w-full", "grid", "grid-cols-5", "place-items-center", "bg-gray-200");  
    let tabList = [id, tabUser.name, tabUser.prenom, tabUser.age]
    //on recréait la liste qui est triée
    for(let i = 0; i < tabList.length; i++){
        let myDiv = document.createElement("div");
        myDiv.textContent = tabList[i]
        mySection.appendChild(myDiv)
    }
//création du bouton de suppression
let myDivButton = document.createElement("div")
mySection.appendChild(myDivButton)
let myButton = document.createElement("button");
myButton.textContent = "X";
myDivButton.appendChild(myButton);
myButton.addEventListener('click', supprimerLigne)
document.getElementById("list").appendChild(mySection);
})
}

//supprime tout le tableau
function deletall(){
    //on rappelle toute la liste
    let ul = document.getElementById("list")
    //on créé une boucle while: tant qu'il y a un "enfant" li il l'efface
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
tabUser.splice(0, tabUser.length)
}

//Calculatrice JS

const inputs = [...document.querySelectorAll('.numbers')];

const listKeyCode = inputs.map(input => input.dataset.key);

const result = document.querySelector('#result');

document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if(listKeyCode.includes(valeur)){
        switch (valeur) {
            case '8':
                result.textContent = "";
                break;
            case '13':
                const calcul = eval(result.textContent);
                result.textContent = calcul;
                break;
            default:
                const indexKeyCode = listKeyCode.indexOf(valeur);
                const input = inputs[indexKeyCode];
                result.textContent +=  input.innerHTML;
                break;
        }
    }
}

window.addEventListener('error', (e)=>{
    alert('Une erreur est survenu dans votre calcul : '+ e.message)
})