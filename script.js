// Exemplo com algumas palavras (substitua pelo array completo de 2048 palavras BIP39)
const bip39Words = [
  "abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse",
  "access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act",
  // ... continue até "zoo" (ou use a lista em português)
];

function pesquisar() {
  const num = parseInt(document.getElementById("numberInput").value, 10);
  if (num >= 1 && num <= bip39Words.length) {
    document.getElementById("result").textContent = bip39Words[num - 1];
  } else {
    document.getElementById("result").textContent = "Número inválido. Digite entre 1 e 2048.";
  }
}

function limpar() {
  document.getElementById("numberInput").value = '';
  document.getElementById("result").textContent = 'Digite um número e pressione Enter';
}

// 🔑 Captura a tecla Enter no input
document.getElementById("numberInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});
