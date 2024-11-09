document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetPosition = document.getElementById(targetId).offsetTop;
    
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}
