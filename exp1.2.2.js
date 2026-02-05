const select = document.getElementById("category");
const cards = document.querySelectorAll(".card");

select.addEventListener("change", function () {
    const value = this.value;

    cards.forEach(card => {
        if (value === "all") {
            card.style.display = "block";
        } 
        else if (card.classList.contains(value)) {
            card.style.display = "block";
        } 
        else {
            card.style.display = "none";
        }
    });
});
