function scrollToAbout() {
  document.querySelector(".about").scrollIntoView({
    behavior: "smooth"
  });
}

// Simple animation effect on load
window.onload = function () {
  console.log("Portfolio loaded successfully 🚀");
};

// Optional: card click effect (fun interaction)
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", function () {
    alert("You clicked on: " + card.innerText);
  });
});