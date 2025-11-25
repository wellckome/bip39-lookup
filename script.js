// Exemplo com algumas palavras (substitua pelo array completo de 2048 palavras BIP39)
const bip39Words = [
  "abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse",
  "access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act",
  // ... continue até "zoo" (ou use a lista em português)
];

function pesquisar() {
  const input = document.getElementById("numberInput");
  const result = document.getElementById("result");
  const num = parseInt(input.value, 10);

  if (num >= 1 && num <= bip39Words.length) {
    result.textContent = bip39Words[num - 1];
    result.style.color = "green"; // ✅ verde quando válido
    input.value = ''; // limpa o campo
  } else {
    result.textContent = "Número inválido. Digite entre 1 e 2048.";
    result.style.color = "red"; // ❌ vermelho quando inválido
    input.value = ''; // limpa também quando inválido
  }
}

function limpar() {
  const input = document.getElementById("numberInput");
  const result = document.getElementById("result");
  input.value = '';
  result.textContent = 'Digite um número e pressione Enter';
  result.style.color = "black"; // volta ao padrão
}

// 🔑 Captura a tecla Enter no input
document.getElementById("numberInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});
