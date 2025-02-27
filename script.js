
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

// Cards
let cards = [
    {
        link: "https://store.epicgames.com/en-US/p/red-dead-redemption-2",
        banner: "../images/cards/card1.jpg",
        title: "Red Dead Redemption 2",
        devs: "Rockstar Games",
        price: {
            sale: "-35%",
            old: "€27.99",
            new: "€18.19"
        }
    },
    {
        link: "https://store.epicgames.com/en-US/p/cyberpunk-2077--phantom-liberty",
        banner: "../images/cards/card2.jfif",
        title: "Cyberpunk 2077: Phantom Liberty",
        devs: "CD PROJEKT RED",
        price: {
            sale: "-35%",
            old: "€27.99",
            new: "€18.19"
        }
    }
];

let content = "";

for (let i = 0; i < cards.length; i++) {
    content += `
        <a href="${cards[i].link}" target="_blank" class="card">
            <img src="${cards[i].banner}" alt="image">

            <div class="card-data">
                <p class="title" style="font-weight: 600;">${cards[i].title}</p>
                <p class="devs" style="color: #ffffffa6;">${cards[i].devs}</p>
                
                <div class="price">
                    <p class="sale">${cards[i].price.sale}</p>
                    <p class="old">${cards[i].price.old}</p>
                    <p class="new" style="font-weight: 600;">${cards[i].price.new}</p>
                </div>
            </div>
        </a>
    `;
}

document.getElementById("cards").innerHTML = content;


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