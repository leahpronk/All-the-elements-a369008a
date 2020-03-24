let h1 = document.querySelector("h1");
let title = document.querySelector("title");
title.innerText = h1.innerText;

h1.classList;
h1.classList.add('h1');

let h3 = document.querySelectorAll("h3");
h3.forEach(function(element) {
    element.classList.add('h3')
})
