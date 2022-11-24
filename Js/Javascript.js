// ************************* Toggle Style Switcher ************************* 
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
//? ************************* change colors ************************* 
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
 //* ************************* Typing animation ************************* 
 
 var typed = new Typed(".typing", {
    strings:[" " ,"Hologram Design", "Web PS Hologram Design", "Video Editor",],
    typeSpeed:105,
    BackSpeed:55,
    loop:true,
})

//? ************************* Holo animation ************************* 
var holo = new Typed(".holo", {
    strings:[" " ,"Hologram Design", "Web PS Hologram Design", "Video Editor",],
    typeSpeed:105,
    BackSpeed:55,
    loop:true,
})

//* ************************* Contact sub-title animation ************************* 
var sub = new Typed(".contact-sub-title", {
    strings:[" " ,"I'M VERY RESPOSIVE TO MESSAGES"],
    typeSpeed:105,
    BackSpeed:55,
    loop:true,
})

//? ************************* Slide ************************* 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });