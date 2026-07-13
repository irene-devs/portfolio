// ================================
// Typing Animation
// ================================

const text = [
    "Frontend Web Developer",
    "Networking Enthusiast",
    "Cybersecurity Enthusiast",
    "BSc Information Technology Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const typingElement = document.getElementById("typing");

    if(typingElement){
        typingElement.textContent = letter;
    }

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,120);

    }

})();


// ================================
// Scroll To Top Button
// ================================

const topButton = document.createElement("button");

topButton.id = "topBtn";

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.onscroll = function(){

    if(document.body.scrollTop > 300 ||
       document.documentElement.scrollTop > 300){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

};

topButton.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ================================
// Highlight Active Navigation
// ================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ================================
// Fade-in Animation on Scroll
// ================================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
".achievement-card,.education-card,.certificate-card,.project-card,.service-card,.contact-card"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ================================
// Console Message
// ================================

console.log("Welcome to Irene Mwende's Portfolio!");