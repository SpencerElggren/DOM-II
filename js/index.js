
// HEADER
const titleColor = document.querySelector(".logo-heading");
titleColor.addEventListener("click" , function(event) {
        titleColor.style.color = "yellow";
        event.stopPropagation();
    });

const titleback = document.querySelector(".main-navigation");
titleback.addEventListener("click" , () => titleback.style.backgroundColor = "green");
titleback.addEventListener("dblclick" , () => titleback.style.backgroundColor = "white");

document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("mouseover" , () => el.style.transform = "scale(1.5)")});

document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("mouseleave" , () => el.style.transform = "scale(1)")});

document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("click" , () => el.preventDefault())});

const head = document.querySelector(".intro h2");
head.addEventListener("mouseenter" , () => head.textContent = "Bienvenidos!");
head.addEventListener("mouseout" , () => head.textContent = "Welcome to the Fun Bus!");

const head2 = document.querySelector(".text-content h2");
head2.addEventListener("mousemove" , () => head2.textContent = "Vamonos");

const page = document.querySelector("body");

page.addEventListener("select" , () => page.style.color = "red" );

const firstPic = document.querySelector(".intro img");

firstPic.addEventListener("scroll" , () => firstPic.style.border = "5px solid red");

const secPic = document.querySelector(".img-content");

// window.onbeforeunload = function(){
//     return 'Are you sure you want to leave?';
// };

