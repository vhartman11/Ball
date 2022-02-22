var velocity = 3;
var position = 0;
var reverse = false;
var ball = document.getElementById('ball');



setInterval(function moveBall(){
    if(!reverse){
        position = position + velocity;
        ball.style.left = position + "px";
    } else {
        position = position - velocity;
        ball.style.left = position + "px";
    }

if(position > 1000 || position == 0){
    reverse = !reverse;
}    
}, 10);