

document.addEventListener("DOMContentLoaded",  function() {

let index = 0;

const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slide').length;

document.querySelector('.next').onclick = () => {



index++;

if (index >= total) index = 0;

slides.style.transform = `translateX(-${index * 100}%)`;

};

document.querySelector('.prev').onclick = () => {


index--;

if(index<0) index = total - 1;

slides.style.transform = `translateX(-${index * 100}%)`;


};

});