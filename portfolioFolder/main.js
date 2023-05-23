
const calcSpan = document.querySelector(".calcSpan");
const TdSPan = document.querySelector(".tdSpan");
const game = document.querySelector(".gameSpan");
const mundi = document.querySelector(".mundialSpan");
const rolex = document.querySelector(".rolexSpan");
const meImg = document.querySelector(".meSpan");
let icon;
// JS OF HOME
setInterval(() => {
    let textHome =  document.querySelector(".iAmTxt");
    gsap.to(textHome, {duration: 1, width: 0, onComplete: function(){
        if(textHome.textContent == "Jose Pablo"){
            textHome.textContent = "Front-End";
        }
        else{
            textHome.textContent = "Jose Pablo";
        }
    }});
    gsap.to(textHome, {delay:1, duration: 1, width: 160});
   
    
}, 2500);

function startPrt(){
    document.querySelector("body").style.backgroundRepeat = 'repeat';
    document.querySelector("body").style.overflowY = 'scroll';
    gsap.to('.home', {opacity:0, display: 'none'});
    gsap.to('.fatherContainer', {delay:1, duration: 1, display:'block', opacity:1 });
    gsap.from(".bmoDance", {y:-500,delay: 2, duration: 2, opacity: 0});
    gsap.from(".bmoGif", {y:-500,delay: 2, duration: 1, opacity: 0});
    gsap.from(".lineOne", {delay:2, x:-5000, duration: 2, opacity: -1});
    gsap.from(".bmoSit", {x:-600,delay: 2,duration: 2.5, ease:'back'});
    gsap.from(".iAm", {delay:2, x: -1000, opacity: 0});
}

function openGameBox(e){
    let gameBox = document.querySelector(".gamesBox");
    if(gameBox.dataset.value == 'true'){
        console.log(gameBox.dataset.value)
        gameBox.classList.remove('hide');
        gsap.to(gameBox,{duration:1, y:100, opacity:1});
        gameBox.dataset.value = 'false';
        gameBox.style.opacity = 0;
    }
    else{
        gsap.to(gameBox,{duration:1, y:-100, opacity:1});
        // gameBox.classList.add('hide');
        gameBox.dataset.value = 'true';
        gameBox.style.opacity = 0;
    }
   
}
// SCROLL
gsap.registerPlugin(ScrollTrigger);
gsap.from(".calculator",{
    scrollTrigger: {
        trigger: ".calculator",
        start: "top center",
        toggleActions: "restart none none none"
    },
    x:-1000,
    duration: 2,
    ease: 'bounce',
    opacity: 0
});
gsap.from(".containerTD",{
    scrollTrigger: {
        trigger: ".containerTD",
        start: "top center",
        toggleActions: "restart none none none"
    },
    x:1000,
    ease: 'back',
    duration: 2,
    opacity: -1
});
gsap.from(".custom",{
    scrollTrigger: {
        trigger: ".custom",
        start: "top center",
        toggleActions: "restart none none none"
    },
    x:-1000,
    duration: 2,
    opacity: -1,
    ease: 'bounce'
});
gsap.from(".game",{
    scrollTrigger: {
        trigger: ".game",
        start: "top center",
        toggleActions: "restart none none none"
    },
    x:1000,
    duration: 2,
    opacity: -1,
    ease: 'bounce'
});
gsap.from(".mundialApi",{
    scrollTrigger: {
        trigger: ".mundialApi",
        start: "top center",
        toggleActions: "restart none none none"
    },
    x:-1000,
    duration: 2,
    ease: 'back',
    opacity: -1,
    ease: 'back'
});
gsap.from(".rolexPr",{
    scrollTrigger: {
        trigger: ".rolexPr",
        start: "top center",
        toggleActions: "restart none none none"
    },
    x:1000,
    duration: 2,
    ease: 'back',
    opacity: -1,
    ease: 'back'
});
gsap.from(".tic-tac-toe",{
    scrollTrigger: {
        trigger: ".tic-tac-toe",
        start: "top center",
        toggleActions: "restart none none none"
    },
    x:1000,
    duration: 2,
    opacity: 0,
    ease: 'bounce'
});
gsap.from(".climaContainer",{
    scrollTrigger: {
        trigger: ".climaContainer",
        start: "top center",
        toggleActions: "restart none none none"
    },
    x:-1000,
    duration: 2,
    ease: 'bounce',
    opacity: 0
});
// gsap.from(".iAm",{
//     scrollTrigger: {
//         trigger: ".iAm",
//         start: "top center",
//         toggleActions: "restart none none none"
//     },
//     x:-1000,
//     duration: 2,
//     opacity: 0,
//     ease: 'bounce'
// });
gsap.from(".footerCls",{
    scrollTrigger: {
        trigger: ".footerCls",
        start: "top center",
        toggleActions: "restart none none none"
    },
    y:-100,
    duration: 2,
    opacity: 0,
    ease: 'bounce'
});
function scrollerFnc(){
    window.scroll({
        top: scrollY -300, 
        behavior: "smooth"
    })
}
function navHeadFunc(e){
    let spanCls = document.querySelectorAll(".headNav")
    spanCls.forEach(elem=>{
        icon = elem.children[0];
        gsap.to(icon, {y:-100, duration: 0.5, opacity: 0, display: "none"});
    });
    gsap.to(e.children[0], {y:0, duration: 0.5, opacity: 1, display: "inline-grid"});
    
    scrollerFnc()
}
// JS OF CALCULATOR
function numeros(e){
    document.querySelector(".typerInp").value += e.value;
    document.querySelector(".result").textContent = eval(document.querySelector(".typerInp").value);
    document.querySelector(".warningImg").classList.add("hide");
    document.querySelector(".result").classList.remove("hide");
};
function clearAll(){
    let allResults = document.querySelector(".oldResults");
    while(allResults.firstChild){
        allResults.removeChild(allResults.firstChild);
    }
    document.querySelector(".fatherResults").classList.add("hide");
    document.querySelector(".clear").classList.add("hide");

}
function borrar(){
    document.querySelector(".result").textContent = "";
    document.querySelector(".typerInp").value = ""; 
}
function numbersF(e){
    if(document.querySelector(".typerInp").value.endsWith("-") || document.querySelector(".typerInp").value.endsWith("+") || document.querySelector(".typerInp").value.endsWith("/") || document.querySelector(".typerInp").value.endsWith("*")){
        let del = document.querySelector(".typerInp").value.substring(0, document.querySelector(".typerInp").value.length - 1);
        document.querySelector(".typerInp").value = del + e.value;
    }
    else{
         document.querySelector(".typerInp").value += e.value;
    }
    document.querySelector(".warningImg").classList.remove("hide");
    document.querySelector(".result").classList.add("hide");
    if(document.querySelector(".typerInp").value.startsWith("+") || document.querySelector(".typerInp").value.startsWith("/") || document.querySelector(".typerInp").value.startsWith("*")){
        document.querySelector(".typerInp").value = "";
    }
}
document.querySelector(".typerInp").addEventListener("keyup", function(){
    if(this.value.endsWith("-") || this.value.endsWith("+") || this.value.endsWith("/") || this.value.endsWith("*")){
        document.querySelector(".warningImg").classList.remove("hide");
        document.querySelector(".result").classList.add("hide");
    }
    else{
        document.querySelector(".result").textContent = eval(document.querySelector(".typerInp").value);
        document.querySelector(".result").classList.remove("hide");
        document.querySelector(".warningImg").classList.add("hide");
    }
    if(this.value.startsWith("+") || this.value.startsWith("/") || this.value.startsWith("*")){
        this.value = "";
    }
});
function valorCalc(e){
    document.querySelector(".fatherResults").classList.remove("hide");
    document.querySelector(".oldResults").insertAdjacentHTML("afterbegin", `<tr onclick="valorInp(this)"><td class="op">${document.querySelector(".typerInp").value}</td><td class="resu">${document.querySelector(".result").textContent}</td></tr>`);
    document.querySelector(".typerInp").value = "";
    document.querySelector(".result").textContent = "";
    document.querySelector(".clear").classList.remove("hide");
}
document.querySelector(".calculator").addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        e.preventDefault();
        let oldR = document.querySelector(".oldResults");
        let op = document.querySelector(".typerInp").value;
        let resu = document.querySelector(".result").textContent;
        oldR.insertAdjacentHTML("afterbegin", `<tr onclick="valorInp(this)"><td class="op">${op}</td><td class="resu">${resu}</td></tr>`);
        document.querySelector(".result").textContent = "";
        document.querySelector(".fatherResults").classList.remove("hide");
        document.querySelector(".typerInp").value = "";
        document.querySelector(".clear").classList.remove("hide");
    }
});
function valorInp(e){
    document.querySelector('.typerInp').value = e.children[0].textContent;
    document.querySelector('.result').textContent = e.children[1].textContent;
}

// JS OF TD LIST

class Tarea{
    constructor(task, status){
        this.task = task;
        this.status = status;
    }
}
let inpVal = document.querySelector(".inpTd");
let taskList = [];
function btnadder(){
    if(inpVal.value !== ""){
        let task = new Tarea(inpVal.value, "pending");
        taskList.push(task);
        localStorage.setItem("task", JSON.stringify(taskList));
        console.log(JSON.parse(localStorage.getItem("task")))
        document.querySelector(".ulF").insertAdjacentHTML("beforeend", 
            `<li class="txts">
                <span>${JSON.parse(localStorage.getItem("task")).slice(-1)[0].task}</span>
                <button class="btnCheck hide" onclick="checkbtn(this)">✔</button>
                <button class="btnDelete" onclick="deleteBTn(this)">X</button>
                <button class="inProgBtn" onclick="btnInProg(this)">In progress</button>
                <button class="onHold hide" onclick="onholdBtn(this)">On Hold</button>
                <hr>
            </li>`);
        document.querySelector(".empty").classList.add("hide");
        inpVal.value = "";
        document.querySelector(".inpSearch").classList.remove("hide")
    }
}
window.addEventListener("load", e=>{
    if(localStorage.task == "[]" || localStorage.task == undefined){
        document.querySelector(".empty").classList.remove("hide");
    }else{
        taskList = JSON.parse(localStorage.getItem("task"));
        JSON.parse(localStorage.getItem("task")).forEach(element => {
            adderOfTasks(element)
        });
        document.querySelector(".empty").classList.add("hide");
        document.querySelector(".inpSearch").classList.remove("hide")
    }
});
document.querySelector(".containerTD").addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        e.preventDefault();
        btnadder();
    }
});
function deleteBTn(e){
    e.parentNode.remove();
    if(document.querySelector(".txts") == null){
        document.querySelector(".empty").classList.remove("hide");
        document.querySelector(".inpSearch").classList.add("hide")
    }
    taskList = taskList.filter(elem => elem.task  !==  e.parentNode.children[0].textContent);
    localStorage.setItem("task", JSON.stringify(taskList));
}
function btnInProg(e){
    e.parentElement.classList.add("negro");
    e.parentNode.children[1].classList.remove("hide");
    e.parentNode.children[4].classList.remove("hide");
    e.classList.add("hide");
    e.parentNode.children[2].classList.add("hide");
    e.parentElement.classList.add('progresStatus');
    e.parentElement.classList.remove('holdStatus', 'checkStatus');
    taskList.forEach((ele, id)=>{
        if(ele.task == e.parentNode.children[0].textContent){
            taskList[id].status = "progress";
        }
    });
    localStorage.setItem("task", JSON.stringify(taskList));
}
function onholdBtn(e){
    e.parentElement.classList.add('holdStatus');
    e.classList.add("hide")
    e.parentNode.children[2].classList.remove("hide");
    e.parentNode.children[3].classList.remove("hide");
    e.parentNode.children[1].classList.add("hide");
    e.parentElement.classList.remove('progresStatus', 'checkStatus');
    taskList.forEach((ele, id)=>{
        if(ele.task == e.parentNode.children[0].textContent){
            taskList[id].status = "hold";
        }
    });
    localStorage.setItem("task", JSON.stringify(taskList));
}
function checkbtn(e){
    e.parentElement.classList.add('checkStatus');
    e.parentNode.children[2].classList.remove("hide");
    e.parentNode.children[4].classList.add("hide");
    e.classList.add("hide");
    e.parentElement.classList.remove('progresStatus', 'holdStatus');
    taskList.forEach((ele, id)=>{
        if(ele.task == e.parentNode.children[0].textContent){
            taskList[id].status = "check";
        }
    });
    localStorage.setItem("task", JSON.stringify(taskList));
}
function inpSearchFn(e){
    let searchTask = taskList.filter(post => post.task.includes(document.querySelector(".searchInp").value));
    document.querySelectorAll(".txts").forEach((post)=>{
        post.remove();  
    });
    searchTask.forEach((element)=>{
        adderOfTasks(element);
    });
}
function adderOfTasks(element){
    document.querySelector(".ulF").insertAdjacentHTML("beforeend", 
    `${(() =>{if(element.status == "progress"){
        return (`<li class="txts progresStatus negro">
        <span>${element.task}</span>  
        <button class="btnCheck" onclick="checkbtn(this)">✔</button>
        <button class="btnDelete hide" onclick="deleteBTn(this)">X</button>
        <button class="inProgBtn hide" onclick="btnInProg(this)">In progress</button>
        <button class="onHold" onclick="onholdBtn(this)">On Hold</button>
        <hr>
    </li>`);
    }else if(element.status == "hold"){
        return (`<li class="txts holdStatus negro">
        <span>${element.task}</span>  
        <button class="btnCheck hide" onclick="checkbtn(this)">✔</button>
        <button class="btnDelete" onclick="deleteBTn(this)">X</button>
        <button class="inProgBtn" onclick="btnInProg(this)">In progress</button>
        <button class="onHold hide" onclick="onholdBtn(this)">On Hold</button>
        <hr>
    </li>`)
    }else if(element.status == "check"){
        return (`<li class="txts checkStatus negro">
        <span>${element.task}</span>  
        <button class="btnCheck hide" onclick="checkbtn(this)">✔</button>
        <button class="btnDelete" onclick="deleteBTn(this)">X</button>
        <button class="inProgBtn hide" onclick="btnInProg(this)">In progress</button>
        <button class="onHold hide" onclick="onholdBtn(this)">On Hold</button>
        <hr>
    </li>`)
    }
    else{
        return (`<li class="txts">
        <span>${element.task}</span>  
        <button class="btnCheck hide" onclick="checkbtn(this)">✔</button>
        <button class="btnDelete" onclick="deleteBTn(this)">X</button>
        <button class="inProgBtn" onclick="btnInProg(this)">In progress</button>
        <button class="onHold hide" onclick="onholdBtn(this)">On Hold</button>
        <hr>
    </li>`)
    }
    })()}`);
}  

// JS OF GAME

let roundsForPlay;
function addRounds(e){
    roundsForPlay = e.value;
}
function playFunc(e){
    document.querySelectorAll(".imgGame").forEach(e =>{
        e.classList.remove("hide")
    })
}
let selectionOfPlayer;
let selectionOfPc;
let pointsPc = 0;
let pointsPlayer = 0;
let rounds = 0;

function gameFunctions(e){
    rounds+=1;
    document.querySelector(".roundsCuant").textContent = rounds;
    selectionOfPlayer = e.dataset.elem;
    console.log(selectionOfPlayer);
    let randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber == 1){
        selectionOfPc = "rock";
    }
    else if(randomNumber == 2){
        selectionOfPc = "scissors";
    }
    else if(randomNumber == 3){
        selectionOfPc = "paper";
    }
    console.log(selectionOfPc)
    if(selectionOfPc == "rock" && selectionOfPlayer == "scissors" || selectionOfPc == "scissors" && selectionOfPlayer == "paper" || selectionOfPc == "paper" && selectionOfPlayer == "rock"){
        document.querySelector(".spWinner").textContent = "PC";
        document.querySelector(".pcPoints").textContent = pointsPc +=1; 
    }
    else if(selectionOfPlayer == "rock" && selectionOfPc == "scissors" || selectionOfPlayer == "scissors" && selectionOfPc == "paper" || selectionOfPlayer == "paper" && selectionOfPc == "rock"){
        document.querySelector(".spWinner").textContent = "Player 1";
        document.querySelector(".playerPoints").textContent = pointsPlayer +=1;
    }
    else{
        document.querySelector(".spWinner").textContent = "Tie";
    }
    if(document.querySelector(".spWinner").textContent == "Tie" || document.querySelector(".spWinner").textContent == "Player 1" || document.querySelector(".spWinner").textContent == "PC"){
        document.querySelector(".pcChoice").textContent = selectionOfPc;
        document.querySelector(".playerChoice").textContent = selectionOfPlayer;
    }
    if(rounds == document.querySelector(".roundsOptions").value){
        document.querySelectorAll(".imgGame").forEach(function (e){
            e.classList.add("block");
        });
        document.querySelector(".winners").classList.remove("hide")
        gsap.from(".winners", {y: 100, duration: 0.5, opacity:0})
    }
    if(pointsPc > pointsPlayer){
        document.querySelector(".gameWinner").textContent = "PC";
    }
    else if(pointsPc < pointsPlayer){
        document.querySelector(".gameWinner").textContent = "Player 1";
    }
    else{
        document.querySelector(".gameWinner").textContent = "Tie";
    }
    if(selectionOfPc == "rock"){
        document.querySelector(".imgRock").classList.remove("hide");
        document.querySelector(".imgPaper").classList.add("hide");
        document.querySelector(".imgScissors").classList.add("hide");
    }
    else if(selectionOfPc == "paper"){
        document.querySelector(".imgPaper").classList.remove("hide");
        document.querySelector(".imgScissors").classList.add("hide");
        document.querySelector(".imgRock").classList.add("hide");
    }
    else if(selectionOfPc == "scissors"){
        document.querySelector(".imgScissors").classList.remove("hide");
        document.querySelector(".imgPaper").classList.add("hide");
        document.querySelector(".imgRock").classList.add("hide");
    }
}
function resetBtn(e){
    pointsPc = 0;
    pointsPlayer = 0;   
    document.querySelector(".winners").classList.add("hide")
    document.querySelector(".imgScissors").classList.add("hide");
    document.querySelector(".imgPaper").classList.add("hide");
    document.querySelector(".imgRock").classList.add("hide");
    document.querySelector(".roundsCuant").textContent = "";
    document.querySelector(".spWinner").textContent = "";
    document.querySelector(".pcPoints").textContent = pointsPc;
    document.querySelector(".playerPoints").textContent = pointsPlayer;
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".pcChoice").textContent = "";
    document.querySelector(".gameWinner").textContent = "";
    rounds=0;
    document.querySelectorAll(".imgGame").forEach(function (e){
        e.classList.remove("block");
    });
}
// JS OF TIC-TAC-TOE

let clickCount = 0;
function clickCircle(e){
    clickCount++;
    if((clickCount % 2)==0){
         e.style.opacity = 1;
    }else if((clickCount % 2)==1){
        e.style.opacity = 1;
        e.src = "./img/x-image.png";
    }
}
// JS APP CLIMA

let result = document.querySelector('.resultClima')  
let cityVal = document.querySelector('.inpCity');
let nameCountry = document.querySelector('#countryClima');
const form = document.querySelector('.getWeather')

function callapi(city, country){
    const apiId = '7438c9481c599ed981801783b7e38850';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal.value},${nameCountry.value}&appid=7438c9481c599ed981801783b7e38850`;
    fetch(apiUrl)
    .then(resp => resp.json())
    .then(data => {
        document.querySelector('.temp').textContent = data.main.temp;
        document.querySelector('.maxTemp').textContent = data.main.temp_max;
        document.querySelector('.minTemp').textContent = data.main.temp_min;
        document.querySelector('.cityResult').textContent = data.main.name;
        document.querySelector(".tempH").classList.remove("hide");
        document.querySelector(".maxTmp").classList.remove("hide");
        document.querySelector(".minTmp").classList.remove("hide");
    });
 
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(cityVal.value === '' || nameCountry.value === ''){
        return alert('ambos campos son obligatorios');
    }
    callapi(cityVal.value, nameCountry.value);
});

//JS OF FOOTER
let childrenCls;
let clickFooter = true;
function funcsFooter(e){
    childrenCls = e.children[2];
    if(e.children[2].dataset.value == 'true'){
        document.querySelectorAll(".cardContact").forEach(ele => {
            if(ele.dataset.value == 'false'){
                console.log(ele.dataset.value);
                gsap.to(ele, {y:0, duration: 0.5,opacity: 0, onComplete: () => {
                    ele.dataset.value = 'true';
                    ele.classList.add("hide");
                }});  
            }
        });
        childrenCls.dataset.value = 'false';
        childrenCls.classList.remove("hide");
        gsap.to(childrenCls, {y:-150,duration: 1, opacity: 1});
    }
    else{
        gsap.to(childrenCls, {y:0, duration: 0.5,opacity: 0, onComplete: () => {
            childrenCls.dataset.value = 'true';
            childrenCls.classList.add("hide");
        }});  
    }
}
// JS OF WINDOW SIZE
let windowSize = window.innerWidth;
if(windowSize < 700){
    document.querySelector('header').insertAdjacentHTML('beforeend', `<div class="bi"><img src="./img/pngMenu.png" onclick="displayMenu(this)" class="imgMenu"><p>Menu</p></div>`);
}
function displayMenu(e){
    if(document.querySelector('.navGray').dataset.value == 'true'){
        document.querySelector('.navGray').dataset.value = 'false'
        document.querySelector('.imgMenu').src = './img/blue-x-png-1.png'
        gsap.to('.navGray', {y:1000,duration: 1, opacity: 1, display: 'block'});
    }else{
        document.querySelector('.imgMenu').src = './img/pngMenu.png'
        document.querySelector('.navGray').dataset.value = 'true'
        gsap.to('.navGray', {y:0,duration: 1, opacity: 1,});

    }
   
}