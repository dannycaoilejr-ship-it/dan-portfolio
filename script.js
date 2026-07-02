// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:'smooth'

        });

    });

});


// ==============================
// Sticky Navbar Shadow
// ==============================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        nav.style.boxShadow="none";

    }

});


// ==============================
// Scroll Reveal Animation
// ==============================

const hidden=document.querySelectorAll(

'.skill-card,.project-card,.about-container,.contact-box'

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hidden.forEach(el=>observer.observe(el));


// ==============================
// Hero Typing Effect
// ==============================

const heroTitle=document.querySelector(".hero-left h2");

const texts=[

"Java Developer",

"Web Developer",

"Problem Solver",

"Software Engineer"

];

let textIndex=0;

let charIndex=0;

let deleting=false;

function typeEffect(){

const current=texts[textIndex];

if(!deleting){

heroTitle.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}

else{

heroTitle.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

textIndex=(textIndex+1)%texts.length;

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


// ==============================
// Button Hover Animation
// ==============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-8px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});


// ==============================
// Console Message
// ==============================

console.log("Danny Caoile Portfolio Loaded Successfully");

/* Scroll Reveal */

.skill-card,
.project-card,
.about-container,
.contact-box{

opacity:0;

transform:translateY(50px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

