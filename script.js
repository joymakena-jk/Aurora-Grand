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
const bookingFormView = document.getElementById("bookingFormView");
const bookingConfirmView = document.getElementById("bookingConfirmView");
const bookingForm = document.getElementById("bookingForm");
const roomTypeSelect = document.getElementById("roomType");

const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");
const todayISO = new Date().toISOString().split("T")[0];
checkInInput.min = todayISO;
checkOutInput.min = todayISO;

checkInInput.addEventListener("change", () => {
    checkOutInput.min = checkInInput.value || todayISO;
});

function resetBookingModal(){
    bookingFormView.style.display = "block";
    bookingConfirmView.classList.remove("active");
    bookingForm.reset();
    checkInInput.min = todayISO;
    checkOutInput.min = todayISO;
}

function openBookingModal(preselectedRoom){

    resetBookingModal();

    if(preselectedRoom){
        roomTypeSelect.value = preselectedRoom;
    }

    bookingModal.classList.add("active");

}

document.querySelectorAll(".book-room").forEach(button=>{

    button.addEventListener("click",()=>{

        const roomCard = button.closest(".room-card");
        const roomName = roomCard ? roomCard.querySelector("h3").textContent.trim() : null;

        const matchedOption = roomName
            ? Array.from(roomTypeSelect.options).find(opt => opt.textContent.startsWith(roomName))
            : null;

        openBookingModal(matchedOption ? matchedOption.value : null);

    });

});

document.getElementById("contactButton").addEventListener("click",()=>{

    openBookingModal();

});

bookingForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    bookingFormView.style.display = "none";
    bookingConfirmView.classList.add("active");

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
   SCROLL PROGRESS BAR
===========================*/

const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    scrollProgress.style.width = percent + "%";

});

/*==========================
   STAT COUNTERS
===========================*/

const statNumbers = document.querySelectorAll(".stat-number");

function animateCounter(el){

    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const startTime = performance.now();

    function tick(now){

        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        el.textContent = Math.floor(eased * target).toLocaleString();

        if(progress < 1){
            requestAnimationFrame(tick);
        } else {
            el.textContent = target.toLocaleString();
        }

    }

    requestAnimationFrame(tick);

}

const statObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            animateCounter(entry.target);
            statObserver.unobserve(entry.target);
        }

    });

}, { threshold: 0.5 });

statNumbers.forEach(el => statObserver.observe(el));

/*==========================
      MOBILE MENU
===========================*/

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    const isOpen = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);

});
document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

/*==========================
   KEYBOARD SUPPORT FOR
   CUSTOM BUTTON CONTROLS
===========================*/

document.querySelectorAll('[role="button"]').forEach(control => {

    control.addEventListener("keydown", (e) => {

        if(e.key === "Enter" || e.key === " "){

            e.preventDefault();
            control.click();

        }

    });

});
