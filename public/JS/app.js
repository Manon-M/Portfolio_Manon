//burger menu
let buttonOpen = document.getElementById('open');
let buttonclose = document.getElementById('close');
let menu = document.getElementById('menu');

buttonOpen.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        buttonOpen.classList.add('hidden')
        buttonclose.classList.remove('hidden')
        menu.classList.add('fadeOutDown')
    }
})

buttonclose.addEventListener('click', ()=>{
    menu.classList.add('hidden')
    buttonclose.classList.add('hidden')
    buttonOpen.classList.remove('hidden')
    menu.classList.remove('fadeOutDown')
    menu.classList.add('fadeOutUp')
})


//bouton déployable CV
let buttonFormation = document.getElementById('formation');
let textFormation = document.getElementById('text-formation');
let svgOpenFormation = document.getElementById('open-formation');
let svgCloseFormation = document.getElementById('close-formation');

buttonFormation.addEventListener('click', (e)=>{
    e.preventDefault()
    if(textFormation.classList.contains('hidden')){
        textFormation.classList.remove('hidden')
        svgOpenFormation.classList.add('hidden')
        svgCloseFormation.classList.remove('hidden')
    }
    else{
        textFormation.classList.add('hidden')
        svgOpenFormation.classList.remove('hidden')
        svgCloseFormation.classList.add('hidden')
    }
})

let buttonExperience = document.getElementById('experience');
let textExperience = document.getElementById('text-experience');
let svgOpenExperience = document.getElementById('open-exp');
let svgCloseExperience = document.getElementById('close-exp');

buttonExperience.addEventListener('click', (e)=>{
    e.preventDefault()
    if(textExperience.classList.contains('hidden')){
        textExperience.classList.remove('hidden');
        svgOpenExperience.classList.add('hidden')
        svgCloseExperience.classList.remove('hidden')
    }
    else{
        textExperience.classList.add('hidden')
        svgOpenExperience.classList.remove('hidden')
        svgCloseExperience.classList.add('hidden')
    }
})

let buttonGame = document.getElementById('game');
let textGame = document.getElementById('text-game');

buttonGame.addEventListener('click', (e)=>{
    e.preventDefault()
    if(textGame.classList.contains('hidden')){
        textGame.classList.remove('hidden');
    }
    else{
        textGame.classList.add('hidden')
    }
})

let buttonTravel = document.getElementById('travel');
let textTravel = document.getElementById('text-travel');

buttonTravel.addEventListener('click', (e)=>{
    e.preventDefault()
    if(textTravel.classList.contains('hidden')){
        textTravel.classList.remove('hidden')
    }
    else{
        textTravel.classList.add('hidden')
    }
})

let buttonMusic = document.getElementById('music');
let textMusic = document.getElementById('text-music');

buttonMusic.addEventListener('click', (e)=>{
    e.preventDefault()
    if(textMusic.classList.contains('hidden')){
        textMusic.classList.remove('hidden')
    }
    else{
        textMusic.classList.add('hidden')
    }
})

//Animation section au scroll
let observer = new IntersectionObserver(function (entries){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > 0.2){
            entry.target.classList.remove('not-visible')
            entry.target.classList.add('showSection')
            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: [0.2]
})



let sections = document.querySelectorAll("section");

sections.forEach(function (section){
    section.classList.add('not-visible')
    observer.observe(section)
})
//changement d'images caroussel
let imageOne = document.getElementById('imageOne');
let littleOne = document.getElementById('littleOne');
let littleTwo = document.getElementById('littleTwo');

littleOne.addEventListener('click', (e)=>{
    e.preventDefault()
    if(imageOne.getAttribute("src")){
        let stockImage = imageOne.getAttribute("src");
        let changeImage = littleOne.getAttribute("src");
        littleOne.setAttribute('src', stockImage)
        imageOne.setAttribute('src', changeImage)
    }
})

littleTwo.addEventListener('click', (e)=>{
    e.preventDefault()
    if(imageOne.getAttribute("src")){
        let stockImage = imageOne.getAttribute("src");
        let changeImage = littleTwo.getAttribute("src");
        littleTwo.setAttribute('src', stockImage)
        imageOne.setAttribute('src', changeImage)
    }
})

let illustratorOne = document.getElementById('illustratorOne');
let illustratorTwo = document.getElementById('illustratorTwo');
let illustratorThree = document.getElementById('illustratorThree');
let illustratorFour = document.getElementById('illustratorFour');

illustratorTwo.addEventListener('click', (e)=>{
    e.preventDefault()
    if(illustratorOne.getAttribute("src")){
        let stockImage = illustratorOne.getAttribute("src");
        let changeImage = illustratorTwo.getAttribute("src");
        illustratorTwo.setAttribute('src', stockImage)
        illustratorOne.setAttribute('src', changeImage)
    }
})

illustratorThree.addEventListener('click', (e)=>{
    e.preventDefault()
    if(illustratorOne.getAttribute("src")){
        let stockImage = illustratorOne.getAttribute("src");
        let changeImage = illustratorThree.getAttribute("src");
        illustratorThree.setAttribute('src', stockImage)
        illustratorOne.setAttribute('src', changeImage)
    }
})

illustratorFour.addEventListener('click', (e)=>{
    e.preventDefault()
    if(illustratorOne.getAttribute("src")){
        let stockImage = illustratorOne.getAttribute("src");
        let changeImage = illustratorFour.getAttribute("src");
        illustratorFour.setAttribute('src', stockImage)
        illustratorOne.setAttribute('src', changeImage)
    }
})

//Création d'une modal pour les images
let modal = document.getElementById('myModal');
let images = document.getElementsByClassName('myImages');
let modalImg = document.getElementById("img01");

for (var i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(){
    modal.style.display = "none"
}

//Configuration emailjs pour envoyer des mails
let buttonsubmit = document.getElementById('submit');
let failed = document.getElementById('failed');
let success = document.getElementById('success');

buttonsubmit.addEventListener('click', (e)=>{
    e.preventDefault()
    let tempParams = {
        to_name: 'Manon',
        email: document.getElementById('email').value,
        from_name: document.getElementById('name').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }
    if(tempParams.email == '' || tempParams.from_name == '' || tempParams.subject == '' || tempParams.message == ''){
        failed.classList.remove('hidden')
    }
    else{
        emailjs.send('service_5l8elu7', 'template_bknqa09', tempParams)
        .then(function(response) {
            failed.classList.add('hidden')
            success.classList.remove('hidden')
            document.getElementById('myForm').reset()
        });
    }
})
    

