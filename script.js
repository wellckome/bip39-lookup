const input       = document.getElementById('numberInput');
const result      = document.getElementById('result');
const wordInput   = document.getElementById('wordInput');
const wordResult  = document.getElementById('wordResult');

// Pesquisa por número
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

// Pesquisa por palavra
function pesquisarPalavra() {
  const palavra = wordInput.value.trim().toLowerCase();
  wordResult.classList.remove("valid", "invalid");

  const index = words.indexOf(palavra);

  if (index !== -1) {
    wordResult.textContent = `${palavra} → número ${index}`;
    wordResult.classList.add("valid");
  } else {
    wordResult.textContent = "Palavra inválida. Digite uma palavra da lista BIP39.";
    wordResult.classList.add("invalid");
  }

  wordInput.value = '';
  wordInput.focus();
}

// Função limpar
function limpar() {
  input.value = '';
  input.focus();
  result.textContent = 'Digite um número e pressione Enter';
  result.classList.remove("valid", "invalid");

  wordInput.value = '';
  wordResult.textContent = 'Digite uma palavra e pressione Enter';
  wordResult.classList.remove("valid", "invalid");
}

// Eventos Enter
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    pesquisar();
  }
});

wordInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    pesquisarPalavra();
  }
});

