// Simboli della slot machine
const symbols = ["🐶", "🦁", "🦦", "🐲"];

// Simbolo del jackpot come immagine
const jackpotSymbol = '<img src="jackpot-image.jpeg" alt="Jackpot" class="jackpot-icon">';

// Variabili di stato
let spinCount = 0;

// Elementi HTML
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const spinButton = document.getElementById("spinButton");
const retryButton = document.getElementById("retryButton");
const popup = document.getElementById("popup");
const winScreen = document.getElementById("winScreen");
const spinSound = document.getElementById("spinSound");
const winSound = document.getElementById("winSound");

// Funzione per far girare i rulli
function spinReels() {
  spinSound.play();

  // Animazione casuale dei rulli
  let interval = setInterval(() => {
    reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  }, 100);

  // Dopo 2 secondi, ferma i rulli e mostra il risultato
  setTimeout(() => {
    clearInterval(interval);
    spinCount++;

    if (spinCount === 1) {
      // Primo giro: niente jackpot
      reel1.textContent = symbols[0];
      reel2.textContent = symbols[1];
      reel3.textContent = symbols[2];
      popup.classList.remove("hidden");
    } else {
      // Secondo giro: jackpot
      reel1.innerHTML = jackpotSymbol;
      reel2.innerHTML = jackpotSymbol;
      reel3.innerHTML = jackpotSymbol;
      popup.classList.add("hidden");
      winScreen.classList.remove("hidden");
      winSound.play();
    }
  }, 2000);
}

// Eventi sui bottoni
spinButton.addEventListener("click", spinReels);
retryButton.addEventListener("click", spinReels);
