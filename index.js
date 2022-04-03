var box1 = document.getElementsByClassName('box')[0]
var box2 = document.getElementsByClassName('box')[1]

function move(){
    box2.classList.toggle('move')
}

function out(){
    box2.classList.remove('move')
}