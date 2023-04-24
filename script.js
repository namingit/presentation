// Get all navigation links
var links = document.querySelectorAll("nav ul li a");

//ScrollToTop button
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const footer = document.querySelector("footer");

function toggleScrollToTopBtn() {
    if (window.pageYOffset > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        scrollToTopBtn.style.bottom = footer.offsetHeight + 20 + "px";
    } else {
        scrollToTopBtn.style.bottom = "20px";
    }
}

window.addEventListener("scroll", toggleScrollToTopBtn);

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
