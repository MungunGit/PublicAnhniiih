/* ************************* Toggle Style Switcher ************************* */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//! Hide Style - Switcher on scroll
window.addEventListener('scroll', () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ************************* change colors ************************* */
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled","true");
        }
    })
}
 /* ************************* Typing animation ************************* */
 var typed = new Typed(".typing", {
    strings:[" " ,"Hologram Design", "Web PS Hologram Design", "Video Editor",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})

/* ************************* Holo animation ************************* */
var holo = new Typed(".holo", {
    strings:[" " ,"Hologram Design", "Web PS Hologram Design", "Video Editor",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})

/* ************************* Contact sub-title animation ************************* */
var sub = new Typed(".contact-sub-title", {
    strings:[" " ,"I'M VERY RESPOSIVE TO MESSAGES"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})

//! slide

var a = 0;

setInterval(() => {
  var elm = document.getElementById("dad");
  elm.style.left = -20 * (a % 4) + "px";
  a++;
}, 1000);


//! slide
// let b = 0;
// setInterval(() => {
//   var g = [];
//   g[0] = document.getElementById("dad");
//   g[1] = document.getElementById("dad");
//   g[2] = document.getElementById("dad");
//   for (let i = 0; i < g.length; i++) {
//     const elm = g[i];
//     if (b === i) {
//       elm.style.opacity = 1;
//     } else {
//       elm.style.opacity = 0;
//     }
//   }
//   b = b + 1 > g.length - 1 ? (b = 0) : b + 1;
// }, 5000);


