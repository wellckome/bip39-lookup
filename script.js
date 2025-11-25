// Lista de palavras BIP39 (exemplo parcial)
const bip39Words = [
  "abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse",
  // ... até 2048
];

let tentativas = 0; // contador global

function pesquisar() {
  const input = document.getElementById("numberInput");
  const result = document.getElementById("result");
  const counter = document.getElementById("counter"); // pega o div do contador
  const num = parseInt(input.value, 10);

  // incrementa sempre que o usuário tenta
  tentativas++;
  counter.textContent = `Tentativas: ${tentativas}`;

  if (!isNaN(num) && num >= 1 && num <= bip39Words.length) {
    result.textContent = `${num} → ${bip39Words[num - 1]}`;
    result.style.color = "limegreen";
  } else {
    result.textContent = "Número inválido. Digite entre 1 e 2048.";
    result.style.color = "red";
  }

  input.value = ''; // limpa sempre
}

function limpar() {
  const input = document.getElementById("numberInput");
  const result = document.getElementById("result");
  const counter = document.getElementById("counter");
  input.value = '';
  result.textContent = 'Digite um número e pressione Enter';
  result.style.color = "#eee";
  tentativas = 0; // zera contador
  counter.textContent = "Tentativas: 0";
}

// Captura Enter
document.getElementById("numberInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});
