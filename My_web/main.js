function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}
function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}

/* Scroll animation */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("show");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

/* Navbar background change on scroll */
window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});