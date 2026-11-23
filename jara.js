
// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});


// Close menu after clicking a link

document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});


// ============================
// BACK TO TOP BUTTON
// ============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ============================
// CONTACT FORM
// ============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please complete all fields!");
        return;
    }

    // Ganti dengan email aktif milikmu
    const myEmail = "zahra@example.com";

    const subject = encodeURIComponent(
        "Portfolio Message from " + name
    );

    const body = encodeURIComponent(
        "Nama: " + name +
        "\nEmail: " + email +
        "\n\nPesan:\n" + message
    );

    window.location.href =
        "mailto:" + myEmail +
        "?subject=" + subject +
        "&body=" + body;

});


// ============================
// REVEAL ANIMATION ON SCROLL
// ============================

const revealElements = document.querySelectorAll(
    ".about-container, .skill-card, .project-card, .interest-card, .contact-container"
);

const revealObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {

    element.classList.add("reveal");
    revealObserver.observe(element);

});


// ============================
// CURRENT YEAR
// ============================

const footerCopy = document.querySelector(".footer-copy");

footerCopy.textContent =
    "© " + new Date().getFullYear() +
    " Zahra Talita. All Rights Reserved.";
