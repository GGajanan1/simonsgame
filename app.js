let gameSeq=[];
let userSeq=[];
let colors=["color1","color2","color3","color4"];

let level=0;
let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game has Started");
        started=true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3)+1;
    let randColor=colors[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    btnFlash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText=`Game over press any key to start your level is ${level}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset()
    }
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },300);   
}

function btnPress(){
    let btn=this;
    gameFlash(btn);
    color=btn.getAttribute("id");
    userSeq.push(color);
    checkAns(userSeq.length-1);
}

let allBoxes=document.querySelectorAll(".box");
for(box of allBoxes){
    box.addEventListener("click",btnPress);
}

function reset(){
    level=0;
    userSeq=[];
    gameSeq=[];
    started=false;
}