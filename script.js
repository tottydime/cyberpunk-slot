const symbols = ["🐶", "🦁", "🦦", "🐲"];
const jackpotSymbol = '<img src="jackpot-image.jpeg" alt="Jackpot" class="jackpot-icon">';

let spinCount = 0;
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const spinButton = document.getElementById("spinButton");
const retryButton = document.getElementById("retryButton");
const popup = document.getElementById("popup");
const winScreen = document.getElementById("winScreen");
const spinSound = document.getElementById("spinSound");
const winSound = document.getElementById("winSound");
const coin = document.getElementById("coin");
const instruction = document.querySelector(".touch-instruction");
const mainTitle = document.getElementById("mainTitle");
const winMessage = document.querySelector(".win-message");
const jackpotImage = document.getElementById("jackpotImage");

coin.addEventListener("click", () => {
  spinButton.disabled = false;
  instruction.textContent = "Ready to spin!";
  spinSound.play().then(() => spinSound.pause()).catch(() => {});
  winSound.play().then(() => winSound.pause()).catch(() => {});
});

function spinReels() {
  spinSound.currentTime = 0;
  spinSound.play().catch(() => {});

  reel1.classList.add("spinning");
  reel2.classList.add("spinning");
  reel3.classList.add("spinning");

  let interval = setInterval(() => {
    reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    reel1.classList.remove("spinning");
    reel2.classList.remove("spinning");
    reel3.classList.remove("spinning");

    spinCount++;

    if (spinCount === 1) {
      reel1.textContent = symbols[0];
      reel2.textContent = symbols[1];
      reel3.textContent = symbols[2];
      popup.classList.remove("hidden");
    } else {
      reel1.innerHTML = jackpotSymbol;
      reel2.innerHTML = jackpotSymbol;
      reel3.innerHTML = jackpotSymbol;
      popup.classList.add("hidden");
      winScreen.classList.remove("hidden");
      winMessage.classList.remove("hidden");
      jackpotImage.classList.remove
