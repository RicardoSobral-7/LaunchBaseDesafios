const modalOverlay = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".modal-close");
const cards = document.querySelectorAll(".card");
const maximize = document.querySelector(".maximize");


for(let card of cards){
    card.addEventListener("click", () => {
        const siteId = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${siteId}`;
    });
}


closeModal.addEventListener("click", ()=>{
    modalOverlay.classList.remove("active");
    if (modalOverlay.firstElementChild.classList.contains("maximize-screen")) {
        modalOverlay.firstElementChild.classList.remove("maximize-screen");
    }
    modalOverlay.querySelector("iframe").src = "";
});

maximize.addEventListener("click",() =>{
    modalOverlay.firstElementChild.classList.toggle("maximize-screen");
})


