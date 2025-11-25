// Exemplo com algumas palavras (substitua pelo array completo de 2048 palavras BIP39)
const bip39Words = [
  "abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse",
  "access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act",
  // ... continue até "zoo" (ou use a lista em português)
];

let tentativas = 0;

function pesquisar() {
  const input = document.getElementById("numberInput");
  const result = document.getElementById("result");
  const counter = document.getElementById("counter");
  const num = parseInt(input.value, 10);

  tentativas++;
  counter.textContent = `Tentativas: ${tentativas}`;

  if (!isNaN(num) && num >= 1 && num <= bip39Words.length) {
    result.textContent = bip39Words[num - 1];
    result.style.color = "limegreen"; // ✅ verde quando válido
  } else {
    result.textContent = "Número inválido. Digite entre 1 e 2048.";
    result.style.color = "red"; // ❌ vermelho quando inválido
  }

  // 🔑 limpa SEMPRE o campo após a tentativa
  input.value = '';
}

function limpar() {
  const input = document.getElementById("numberInput");
  const result = document.getElementById("result");
  const counter = document.getElementById("counter");
  input.value = '';
  result.textContent = 'Digite um número e pressione Enter';
  result.style.color = "#eee"; // volta ao padrão
  tentativas = 0;
  counter.textContent = "Tentativas: 0";
}

// 🔑 Captura a tecla Enter no input
document.getElementById("numberInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});
