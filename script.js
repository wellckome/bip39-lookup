const input   = document.getElementById('numberInput');
const result  = document.getElementById('result');
const themeSelect = document.getElementById('themeSelect');

// Função de pesquisa
function pesquisar() {
  const num = parseInt(input.value, 10);
  result.classList.remove("valid", "invalid");

  if (!isNaN(num) && num >= 1 && num <= words.length - 1) {
    result.textContent = `${num} → ${words[num]}`;
    result.classList.add("valid");
  } else {
    result.textContent = "Número inválido. Digite entre 1 e 2048.";
    result.classList.add("invalid");
  }

  input.value = '';
  input.focus();
}

// Função limpar
function limpar() {
  input.value = '';
  input.focus();
  result.textContent