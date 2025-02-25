
// Sidebar
function dropDown() {
    let toggle = document.querySelector(".sidebar");
    let overlay = document.querySelector(".overlay");
    toggle.classList.toggle("show");
    overlay.classList.toggle("pop");
}

// Close tab
function closeTab() {
    window.close();
}


// SLider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});