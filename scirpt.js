function load() {
    challenge1();
    challenge2();
    challenge3();
    challenge4();
}

function challenge1(){
    const lis = document.getElementsByClassName("C1")
    console.log("total lis are " + lis.length)
    lis[2].innerHTML = "Adam :)"
}

function challenge2(){
    const element = document.getElementById("C2");
    element.style.backgroundColor = "yellow";
}

function challenge3() {
    const link = document.querySelector(".google");
    link.style.color = "red";
}

function challenge4(){
    const div = document.getElementById("c4div");

    const ele = document.createElement("p");
    const text = document.createTextNode("hello world");
    ele.classList.add("c4NewElement")
    ele.appendChild(text)
    div.appendChild(ele)

    document.getElementsByClassName("c4NewElement")[0].style.color = "red";
    document.getElementsByClassName("c4NewElement")[0].style.fontSize = "4rem";
}

function challenge5(){
    const pimg = [document.getElementById("p1"),document.getElementById("p2")];
    const players = [1, 2]
    const winner = document.getElementById("winner")

    let rolls = [Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1]
    switch(rolls[0]){
        case(1):
           pimg[0].src = "dice/dice1.png";
           break;
        case(2):
           pimg[0].src = "dice/dice2.png";
           break;
        case(3):
           pimg[0].src = "dice/dice3.png";
           break;
        case(4):
           pimg[0].src = "dice/dice4.png";
           break;
        case(5):
           pimg[0].src = "dice/dice5.png";
           break;
        case(6):
           pimg[0].src = "dice/dice6.png";
           break;
        default:
            pimg[0].src = "dice/dice1.png";
            break;
    }

    switch(rolls[1]){
        case(1):
           pimg[1].src = "dice/dice1.png";
           break;
        case(2):
           pimg[1].src = "dice/dice2.png";
           break;
        case(3):
           pimg[1].src = "dice/dice3.png";
           break;
        case(4):
           pimg[1].src = "dice/dice4.png";
           break;
        case(5):
           pimg[1].src = "dice/dice5.png";
           break;
        case(6):
           pimg[1].src = "dice/dice6.png";
           break;
        default:
            pimg[1].src = "dice/dice1.png";
            break;
    }
    if(rolls[0] == rolls[1]){
        winner.innerHTML = "It is draw! Press play to play again!"
        return;
    } else if(rolls[0] > rolls[1]) {
        winner.innerHTML = "Player " + players[0] + " wins! Press play to play again!"
        return;
    } else {
        winner.innerHTML = "Player " + players[1] + " wins! Press play to play again!"
        return;
    }
}