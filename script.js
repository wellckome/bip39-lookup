const input   = document.getElementById('numberInput');
const result  = document.getElementById('result');

function pesquisar() {
  const num = parseInt(input.value, 10);

  if (!isNaN(num) && num >= 1 && num <= words.length - 1) {
    result.textContent = `${num} → ${words[num]}`;
    result.style.color = "limegreen";
  } else {
    result.textContent = "Número inválido.";
    result.style.color = "red";
  }

  input.value = '';
  input.focus();
}

function limpar() {
  input.value = '';
  input.focus();
  result.textContent = 'Digite um número e pressione Enter';
  result.style.color = "#eee";
}

// Evento para Enter
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    pesquisar();
  }
});
