// Your code goes here
const button1 = document.querySelector('#btn1');
button1.addEventListener('click', function(event){
  event.target.style.color = 'red';
});


const button2 = document.querySelector('#btn2');
button2.addEventListener('click', function(event){
  event.target.style.color = 'white';
});


const button3 = document.querySelector('#btn3');
button3.addEventListener('click', function(event){
  event.target.style.color = 'blue';
});



const img1 = document.querySelector('#img1');
img1.addEventListener('mouseenter', function(event){
  event.target.style.border = '2px dashed purple';
});


 const img2 = document.querySelector('#img2');
img2.addEventListener('mousedown', function(event){
  event.target.style.opacity = '0';
});


 img2.addEventListener('mouseup', function(event){
  event.target.style.opacity = '1';
});

const img4 = document.querySelector('#img4');
img4.addEventListener('mouseleave', function(event){
    event.target.style.border = '3px';
  })

window.addEventListener("load", function(event) {
    alert("The page has now loaded");
    });