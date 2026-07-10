const title = "Aurora Grand";

const heroTitle =
document.getElementById("heroTitle");

let index = 0;

function typeHero(){

    if(index < title.length){

        heroTitle.innerHTML += title.charAt(index);

        index++;

        setTimeout(typeHero,140);

    }

}

setTimeout(typeHero,800);
console.log("Script loaded!");
// ============================
// Fade Up Animation
// ============================

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.2
});

fadeElements.forEach((element) => {
    observer.observe(element);
});
// ============================
// Active Navigation Link
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
// ============================
// Hero Button
// ============================

document
.getElementById("heroButton")
.addEventListener("click", () => {

    document
    .getElementById("rooms")
    .scrollIntoView({
        behavior:"smooth"
    });

});
// ============================
// Azure Button
// ============================

document
.getElementById("discoverSerenity")
.addEventListener("click", () => {

    document
    .getElementById("wellness")
    .scrollIntoView({
        behavior:"smooth"
    });

});
// ============================
// Wellness Button
// ============================

document
.getElementById("wellnessButton")
.addEventListener("click", () => {

    document
    .getElementById("contact")
    .scrollIntoView({
        behavior:"smooth"
    });

});
// ============================
// Contact Button
// ============================

document
.getElementById("contactButton")
.addEventListener("click", () => {


});
// ============================
// Room Buttons
// ============================

const roomButtons = document.querySelectorAll(".book-room");

roomButtons.forEach(button => {

    button.addEventListener("click", () => {


    });

});
/* ===========================
        Luxury Gallery
=========================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

const previousImage = document.getElementById("previousImage");

const nextImage = document.getElementById("nextImage");

let currentImage = 0;

function showImage(index){

    lightboxImage.src = galleryImages[index].src;

    lightboxImage.alt = galleryImages[index].alt;

}

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentImage=index;

        showImage(currentImage);

        lightbox.classList.add("active");

    });

});

nextImage.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    showImage(currentImage);

});

previousImage.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    showImage(currentImage);

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowRight"){

        nextImage.click();

    }

    if(e.key==="ArrowLeft"){

        previousImage.click();

    }

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});
/* ===========================
      BOOKING MODAL
=========================== */

const bookingModal = document.getElementById("bookingModal");
const closeBooking = document.getElementById("closeBooking");
const bookingCloseButton = document.getElementById("bookingCloseButton");

document.querySelectorAll(".book-room").forEach(button=>{

    button.addEventListener("click",()=>{

        bookingModal.classList.add("active");

    });

});

document.getElementById("contactButton").addEventListener("click",()=>{

    bookingModal.classList.add("active");

});

closeBooking.addEventListener("click",()=>{

    bookingModal.classList.remove("active");

});

bookingCloseButton.addEventListener("click",()=>{

    bookingModal.classList.remove("active");

});

bookingModal.addEventListener("click",(e)=>{

    if(e.target===bookingModal){

        bookingModal.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        bookingModal.classList.remove("active");

    }

});
/* ===========================
        CURSOR GLOW
=========================== */

const glow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

    glow.style.opacity="1";

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

document.addEventListener("mouseleave",()=>{

    glow.style.opacity="0";

});
/* ===========================
      GOLD PARTICLES
=========================== */

const particles=document.getElementById("particles");

for(let i=0;i<40;i++){

    const particle=document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.animationDuration=(10+Math.random()*12)+"s";

    particle.style.animationDelay=Math.random()*8+"s";

    particle.style.width=(2+Math.random()*5)+"px";

    particle.style.height=particle.style.width;

    particles.appendChild(particle);

}
/*==========================
   LUXURY TESTIMONIAL SLIDER
===========================*/

const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showTestimonial(index){

    cards.forEach(card=>card.classList.remove("active"));

    dots.forEach(dot=>dot.classList.remove("active"));

    cards[index].classList.add("active");

    dots[index].classList.add("active");

}

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showTestimonial(current);

    });

});

setInterval(()=>{

    current++;

    if(current>=cards.length){

        current=0;

    }

    showTestimonial(current);

},5000);

showTestimonial(0);
/*==========================
      MOBILE MENU
===========================*/

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});
document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});