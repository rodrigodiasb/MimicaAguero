const categories = [
  { category: "Animais", words: ["Cachorro", "Gato", "Elefante", "Leão", "Tigre", "Cavalo", "Macaco", "Pato", "Galinha", "Porco",
        "Ovelha", "Vaca", "Boi", "Tartaruga", "Peixe", "Jacaré", "Cobra", "Sapo", "Coelho", "Rato",
        "Lobo", "Urso", "Coruja", "Papagaio", "Galo", "Avestruz", "Pombo", "Tigre", "Golfinho", "Tubarão",
        "Cervo", "Guepardo", "Pantera", "Hipopótamo", "Girafa", "Zebra", "Rinoceronte", "Camelo", "Anta",
        "Raposa", "Esquilo", "Tatu", "Arraia", "Bicho-preguiça", "Panda", "Gavião", "Águia", "Lêmure", 
        "Lontra", "Foca", "Leopardo", "Jacaré", "Polvo", "Lula", "Caranguejo", "Lagarto", "Morcego", 
        "Pinguim", "Ornitorrinco", "Estrela-do-mar", "Cavalo-marinho", "Flamingo", "Pelicano", "Arraia", 
        "Bicho-pau", "Grilo", "Borboleta", "Formiga", "Besouro", "Aranha", "Escorpião", "Mosca", "Abelha", 
        "Vespa", "Cigarra", "Gafanhoto", "Caracol", "Lesma", "Coral", "Pirarucu", "Jacutinga", "Cutia", 
        "Tamanduá", "Onça-pintada", "Javali", "Mico-leão", "Baleia", "Carpa", "Suricato", "Lagartixa", 
        "Gambá", "Quati", "Lobo-guará", "Canguru"] },
  { category: "Objetos", words: ["Relógio", "Cadeira", "Guarda-chuva", "Bola", "Laptop", "Mochila", "Caneta", "Lápis", "Tesoura", "Livro",
        "Óculos", "Fone de ouvido", "Garrafa", "Sapato", "Chapéu", "Televisão", "Celular", "Chave", "Mesa", 
        "Copo", "Prato", "Faca", "Colher", "Cama", "Tapete", "Sofá", "Espelho", "Quadro", "Vela", "Carro", 
        "Bicicleta", "Moto", "Fogão", "Geladeira", "Ventilador", "Ar-condicionado", "Chuveiro", "Pia", "Balão", 
        "Bússola", "Bateria", "Lixeira", "Lanterna", "Varal", "Aspirador", "Carregador", "Microfone", "Controle remoto",
        "Videogame", "Skate", "Patins", "Mouse", "Teclado", "Monitor", "Tablet", "Capacete", "Violão", "Guitarra",
        "Trompete", "Violino", "Tambor", "Prancha de Surf", "Mala", "Varinha mágica", "Lâmpada", "Cortina", 
        "Tapete de Yoga", "Câmera", "Drone", "Bússola", "Pneu", "Martelo", "Serrote", "Espada", "Binóculos", 
        "Florete", "Escudo", "Faqueiro", "Caixa de som", "Banheira", "Jarro", "Almofada", "Edredom", "Cadeado", 
        "Chinelo", "Balde", "Churrasqueira", "Cavalo de balanço", "Troféu", "Roupa de cama", "Colchão", 
        "Rede de dormir", "Espremedor de frutas", "Cofre", "Grampeador", "Clip", "Torre Eiffel em miniatura"] },
  { category: "Profissões", words: ["Bombeiro", "Professor", "Médico", "Engenheiro", "Advogado", "Carpinteiro", "Piloto", "Chef de Cozinha",
        "Policial", "Dentista", "Arquiteto", "Enfermeiro", "Mecânico", "Ator", "Cantor", "Garçom", "Caminhoneiro",
        "Jornalista", "Fotógrafo", "Cientista", "Astronauta", "Vendedor", "Motorista", "Pedreiro", "Veterinário",
        "Psicólogo", "Marceneiro", "Padeiro", "Pescador", "Bailarino", "Costureira", "Eletricista", "Agricultor",
        "Coveiro", "Político", "Designer", "Advogado", "Barbeiro", "Analista de Sistemas", "Nutricionista",
        "Tradutor", "Segurança", "Lixeiro", "Juiz", "Geólogo", "Bibliotecário", "Corretor de Imóveis", "Estilista",
        "Programador", "Dublador", "Investigador", "Esteticista", "Personal Trainer", "Pedagogo", "Manicure", 
        "Astrônomo", "Mágico", "Zelador", "Piloto de Fórmula 1", "Estilista", "Eletricista", "Operador de Caixa", 
        "Assistente Social", "Taxista", "Guarda Florestal", "Físico", "Químico", "Sushiman", "Técnico de TI", 
        "Soldador", "Segurança Patrimonial", "Motorista de Aplicativo", "Caçador", "Maquiador", "Sapateiro", 
        "Enólogo", "Treinador de Animais", "Barman", "Técnico em Enfermagem", "Editor de Vídeo", "Cientista de Dados", 
        "Relojoeiro", "Investigador Criminal", "Cartógrafo", "Marceneiro", "Gerente de Projetos", "Consultor", 
        "Piloto de Helicóptero", "Administrador", "Encanador", "Montador de Móveis", "Professor de Educação Física", 
        "Escritor", "Youtuber", "Streamer", "Atendente de Telemarketing", "Mergulhador Profissional", "Engraxate"] },
  { category: "Ações", words: ["Correr", "Pular", "Cozinhar", "Dormir", "Nadar", "Dançar", "Ler", "Cantar", "Escrever", "Comer",
        "Beber água", "Escalar", "Falar no telefone", "Navegar na internet", "Jogar bola", "Bater palmas",
        "Chorar", "Sorrir", "Brincar", "Abraçar", "Aplaudir", "Limpar a casa", "Passar roupa", "Pintar",
        "Digitar", "Lavar o rosto", "Tomar banho", "Andar de bicicleta", "Fazer exercícios", "Meditar",
        "Assistir TV", "Cortar cabelo", "Tocar violão", "Subir escadas", "Dirigir", "Desenhar", "Assobiar",
        "Saltar de paraquedas", "Acenar", "Escovar os dentes", "Tirar fotos", "Comprar", "Vestir roupas",
        "Tirar sapatos", "Ninar bebê", "Fazer bolo", "Trocar lâmpada", "Chutar", "Atender porta", "Jogar videogame",
        "Fazer flexões", "Carregar peso", "Arremessar bola", "Surfar", "Pular corda", "Pintar as unhas", 
        "Acender fogueira", "Colher flores", "Trocar pneu", "Lustrar sapato", "Fazer malabarismo", "Patinar", 
        "Praticar ioga", "Empinar pipa", "Carregar criança", "Pescando", "Chutar bola", "Dar cambalhota", 
        "Soprar velas", "Fazer sinal de silêncio", "Tocar piano", "Fazer brigadeiro", "Trocar roupa", "Fazer nó"] }
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
  currentWords = categories.flatMap(c => c.words.map(word => ({ category: c.category, word })));
}

// Sorteia Palavra
function getRandomWord() {
  if (currentWords.length === 0) resetWords();
  const index = Math.floor(Math.random() * currentWords.length);
  return currentWords.splice(index, 1)[0]; // Retorna um objeto { category, word }
}

// Inicia Rodada
function startRound() {
  const { category, word } = getRandomWord();
  wordDisplay.textContent = `Sua palavra é da categoria "${category}": ${word}`;
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
  const { category, word } = getRandomWord();
  wordDisplay.textContent = `Sua palavra é da categoria "${category}": ${word}`;
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

  if (scores[0] > scores[1]) {
    document.getElementById("winner").textContent = "Equipe 1 Venceu!";
  } else if (scores[1] > scores[0]) {
    document.getElementById("winner").textContent = "Equipe 2 Venceu!";
  } else {
    document.getElementById("winner").textContent = "Empate! As duas equipes se saíram muito bem!";
  }
}

