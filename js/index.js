// Your code goes here
const button1 = document.querySelector('#button1');
button1.addEventListener('click', function(event){
  event.target.style.color = 'red';
});


const button2 = document.querySelector('#button2');
button1.addEventListener('click', function(event){
  event.target.style.color = 'white';
});


const button3 = document.querySelector('#button3');
button1.addEventListener('click', function(event){
  event.target.style.color = 'blue';
});



const img1 = document.querySelector('#img1');
img1.addEventListener('mouseenter', function(event){
  event.target.style.border = '2px dashed purple';
});


 const img2 = document.querySelector('#img2');
img4.addEventListener('mousedown', function(event){
  event.target.style.opacity = '0';
});


 img2.addEventListener('mouseup', function(event){
  event.target.style.opacity = '1';
});