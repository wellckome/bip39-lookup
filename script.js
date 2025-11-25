const input   = document.getElementById('numberInput');
const result  = document.getElementById('result');
const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

// começa no tema escuro
body.classList.add('dark');

function pesquisar() {
  const num = parseInt(input.value, 10);

  // remove classes antigas
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

function limpar() {
  input.value = '';
  input.focus();
  result.textContent = 'Digite um número e pressione Enter';
  result.classList.remove("valid", "invalid");
}

// Evento para Enter
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    pesquisar();
  }
});

// Alternar tema claro/escuro
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  function setTheme(theme) {
  const body = document.body;
  body.className = theme; // troca direto a classe do body
}

// exemplo: botões para alternar
document.getElementById('btnDark').onclick   = () => setTheme('dark');
document.getElementById('btnLight').onclick  = () => setTheme('light');
document.getElementById('btnBlue').onclick   = () => setTheme('blue');
document.getElementById('btnPurple').onclick = () => setTheme('purple');
document.getElementById('btnGold').onclick   = () => setTheme('gold');

});
