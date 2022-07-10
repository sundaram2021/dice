const x = Math.floor((Math.random() *6) + 1);
const y = Math.floor((Math.random() *6) + 1);


console.log(x,y);

if (x>y){
    document.getElementById("h1").innerHTML = "<h1>Player 1 won</h1>";
}
else if(x<y){
    document.getElementById("h1").innerHTML = "<h1>Player 2 won</h1>";
}
else{
    document.getElementById("h1").innerHTML = "<h1>DRAW!!</h1>";
}



if (x == 1){
    document.getElementById("img1").setAttribute("src","./images/dice1.png");
}
else if(x == 2){
    document.getElementById("img1").setAttribute("src","./images/dice2.png"); 
}
else if( x== 3){
    document.getElementById("img1").setAttribute("src","./images/dice3.png");
}
else if( x== 4){
    document.getElementById("img1").setAttribute("src","./images/dice4.png");
}
else if( x== 5){
    document.getElementById("img1").setAttribute("src","./images/dice5.png");
}
else if( x== 6){
    document.getElementById("img1").setAttribute("src","./images/dice6.png");
}

if (y == 1){
    document.getElementById("img2").setAttribute("src","./images/dice1.png");
}
else if(y == 2){
    document.getElementById("img2").setAttribute("src","./images/dice2.png"); 
}
else if(y == 3){
    document.getElementById("img2").setAttribute("src","./images/dice3.png");
}
else if(y == 4){
    document.getElementById("img2").setAttribute("src","./images/dice4.png");
}
else if(y == 5){
    document.getElementById("img2").setAttribute("src","./images/dice5.png");
}
else if(y == 6){
    document.getElementById("img2").setAttribute("src","./images/dice6.png");
}
