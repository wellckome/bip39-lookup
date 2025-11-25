const input   = document.getElementById('numberInput');
const result  = document.getElementById('result');


const themeSelect = document.getElementById('themeSelect');

themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  document.body.className = selectedTheme;
});


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
  result.textContent = 'Digite um número e pressione Enter';
  result.classList.remove("valid", "invalid");
}

// Evento Enter
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    pesquisar();
  }
});

// Função para trocar tema
function setTheme(theme) {
  document.body.className = theme;
}

// Botões de tema
document.getElementById('btnDark').onclick   = () => setTheme('dark');
document.getElementById('btnLight').onclick  = () => setTheme('light');
document.getElementById('btnBlue').onclick   = () => setTheme('blue');
document.getElementById('btnPurple').onclick = () => setTheme('purple');
document.getElementById('btnGold').onclick   = () => setTheme('gold');
