// Lista de palavras BIP39 (exemplo parcial, substitua pelo array completo)
const bip39Words = [
  "abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse",
  "access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act",
  // ... continue até a última palavra (2048)
];

// contador global
let tentativas = 0;

function pesquisar() {
  const input   = document.getElementById("numberInput");
  const result  = document.getElementById("result");
  const counter = document.getElementById("counter");
  const num     = parseInt(input.value, 10);

  // incrementa sempre que o usuário tenta
  tentativas++;
  counter.textContent = `Tentativas: ${tentativas}`;

  if (!isNaN(num) && num >= 1 && num <= bip39Words.length) {
    result.textContent = `${num} → ${bip39Words[num - 1]}`;
    result.style.color = "limegreen"; // ✅ verde quando válido
  } else {
    result.textContent = "Número inválido. Digite entre 1 e 2048.";
    result.style.color = "red"; // ❌ vermelho quando inválido
  }

  // limpa SEMPRE o campo após a tentativa
  input.value = '';
}

function limpar() {
  const input   = document.getElementById("numberInput");
  const result  = document.getElementById("result");
  const counter = document.getElementById("counter");

  input.value = '';
  result.textContent = 'Digite um número e pressione Enter';
  result.style.color = "#eee"; // volta ao padrão
  tentativas = 0; // zera contador
  counter.textContent = "Tentativas: 0";
}

// Captura Enter no campo de número
document.getElementById("numberInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});
