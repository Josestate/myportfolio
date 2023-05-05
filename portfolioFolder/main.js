
const homeSpan = document.querySelector(".homeSpan");
const calcSpan = document.querySelector(".calcSpan");
const TdSPan = document.querySelector(".tdSpan");
const game = document.querySelector(".gameSpan");
const mundi = document.querySelector(".mundialSpan");
const rolex = document.querySelector(".rolexSpan");
const meImg = document.querySelector(".meSpan");
let icon;

gsap.to(".homeSpan", {y:0,delay: 3,duration: 1, opacity: 1, display: "inline-grid"});
gsap.from(".bmoDance", {y:-500,delay: 2, duration: 1, opacity: -2});
gsap.from(".bmoGif", {y:-500,delay: 2.5, duration: 1, opacity: -2});
gsap.from(".lineOne", {x:-5000, duration: 2, opacity: -1});
gsap.from(".home", {x:-2000,delay: 1.5, duration: 1,opacity: -1});
gsap.from(".bmoSit", {x:-600,delay: 2,duration: 2.5, ease:'back'});

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
        toggleActions: "restart none none none"
    },
    x:1000,
    duration: 2,
    opacity: 0,
    ease: 'bounce'
});
gsap.from(".iAm",{
    scrollTrigger: {
        trigger: ".iAm",
        start: "top center",
        toggleActions: "restart none none none"
    },
    x:-1000,
    duration: 2,
    opacity: 0,
    ease: 'bounce'
});
gsap.from(".footerCls",{
    scrollTrigger: {
        trigger: ".footerCls",
        toggleActions: "restart none none none"
    },
    y:-100,
    duration: 2,
    opacity: 0,
    ease: 'bounce'
});
function scrollerFnc(scroll){
    window.scroll({
        top: scroll, 
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
    
    scrollerFnc(e.dataset.scroll)
}
// JS OF HOME TEXT


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
   
    
}, 3000);



// JS OF CALCULATOR

function numeros(e){
    document.querySelector(".typerInp").value += e.value;
    console.log(document.querySelector(".typerInp").value);
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
//JS OF FOOTER
let childrenCls;
let clickFooter = true;
function funcsFooter(e){
    document.querySelectorAll(".cardContact").forEach(ele => {
        if(ele.dataset.value == 'false'){
            gsap.to(ele, {y:0, duration: 0.5,opacity: 0, onComplete: () => {
                ele.dataset.value = 'true';
                ele.classList.add("hide");
                console.log('Animación completa');
            }});  
        }
    });
    childrenCls = e.children[2];
    childrenCls.dataset.value = false;
    childrenCls.classList.remove("hide");
    gsap.to(childrenCls, {y:-150,duration: 1, opacity: 1});
    // if(clickFooter === 1){
       
    // }
    // console.log(clickFooter)
}
// function firstClick(e){
//     clickFooter++
//     if()
//     childrenCls = e.children[2];
//         childrenCls.dataset.value = false;
//         childrenCls.classList.remove("hide");
//         gsap.to(childrenCls, {y:-150,duration: 1, opacity: 1});
//     console.log(clickCount)
// }

// function displayerFooter(ele){
    
// }