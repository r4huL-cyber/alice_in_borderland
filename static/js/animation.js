document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".card-bg");
  const suits = ["♦", "♥", "♠", "♣"];

  for (let i = 0; i < 30; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerText = suits[Math.floor(Math.random() * suits.length)];
    card.style.left = Math.random() * 100 + "vw";
    card.style.animationDuration = 5 + Math.random() * 5 + "s";
    bg.appendChild(card);
  }
});
