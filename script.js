const categories = [
  { category: "Animais", words: ["Cachorro", "Gato", "Elefante", "Macaco", "Tigre"] },
  { category: "Objetos", words: ["Bola", "Cadeira", "Mesa", "Relógio", "Óculos"] },
  { category: "Profissões", words: ["Médico", "Professor", "Bombeiro", "Engenheiro", "Padeiro"] },
  { category: "Ações", words: ["Correr", "Pular", "Dançar", "Escrever", "Cantar"] }
];

let roundTime = 60, totalRounds = 15, currentTeam = 1, scores = [0, 0], roundsPlayed = [0, 0];
let timer, currentWords = [];

// DOM Elements
const configScreen = document.getElementById("configScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");
const wordDisplay = document.getElementById("wordDisplay");
const timerDisplay = document.getElementById("timer");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const currentTeamDisplay = document.getElementById("currentTeam");
const correctButton = document.getElementById("correctButton");
const nextTeamButton = document.getElementById("nextTeamButton");

// Iniciar Jogo
document.getElementById("startButton").addEventListener("click", () => {
  roundTime = parseInt(document.getElementById("roundTime").value);
  totalRounds = parseInt(document.getElementById("rounds").value);
  configScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  resetWords();
  startRound();
});

// Reiniciar Palavras
function resetWords() {
  currentWords = categories.flatMap(c => c.words);
}

// Sorteia Palavra
function getRandomWord() {
  if (currentWords.length === 0) resetWords();
  const index = Math.floor(Math.random() * currentWords.length);
  return currentWords.splice(index, 1)[0];
}

// Inicia Rodada
function startRound() {
  wordDisplay.textContent = `Sua palavra é da categoria "${categories[0].category}": ${getRandomWord()}`;
  correctButton.disabled = false;
  nextTeamButton.classList.add("hidden");
  startTimer();
}

// Temporizador
function startTimer() {
  let timeLeft = roundTime;
  timerDisplay.textContent = `Tempo: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Tempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endRound();
    }
  }, 1000);
}

// Acertou
correctButton.addEventListener("click", () => {
  scores[currentTeam - 1]++;
  updateScores();
  wordDisplay.textContent = `Sua palavra é da categoria "${categories[0].category}": ${getRandomWord()}`;
});

// Termina Rodada
function endRound() {
  correctButton.disabled = true;
  nextTeamButton.classList.remove("hidden");
}

// Próxima Equipe
nextTeamButton.addEventListener("click", () => {
  roundsPlayed[currentTeam - 1]++;
  if (roundsPlayed[0] >= totalRounds && roundsPlayed[1] >= totalRounds) {
    endGame();
    return;
  }
  currentTeam = currentTeam === 1 ? 2 : 1;
  currentTeamDisplay.textContent = `Equipe ${currentTeam} está jogando!`;
  startRound();
});

// Atualiza Placar
function updateScores() {
  score1.textContent = scores[0];
  score2.textContent = scores[1];
}

// Fim do Jogo
function endGame() {
  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  document.getElementById("finalScore").textContent = `Equipe 1: ${scores[0]} | Equipe 2: ${scores[1]}`;
  document.getElementById("winner").textContent = scores[0] > scores[1] ? "Equipe 1 Venceu!" : "Equipe 2 Venceu!";
}
