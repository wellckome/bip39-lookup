let tentativas = 0;

const input   = document.getElementById('numberInput');
const result  = document.getElementById('result');
const clearBtn= document.getElementById('clearBtn');
const counter = document.getElementById('counter');
const history = document.getElementById('history');

function pesquisar() {
  const num = parseInt(input.value, 10);
  tentativas++;
  counter.textContent = `Tentativas: ${tentativas}`;

  let mensagem, classe;
  if (!isNaN(num) && num >= 1 && num <= words.length - 1) {
    mensagem = `${num} → ${words[num]}`;
    classe = "valid";
    result.textContent = mensagem;
    result.style.color = "limegreen";
  } else {
    mensagem = `❌ ${num} inválido`;
    classe = "invalid";
    result.textContent = "Número inválido. Digite entre 1 e 2048.";
    result.style.color = "red";
  }

  const item = document.createElement("div");
  item.textContent = mensagem;
  item.classList.add(classe);
  history.appendChild(item);

  input.value = '';
  input.focus();
}

function limpar() {
  input.value = '';
  input.focus();
  result.textContent = 'Digite um número e pressione Enter';
  result.style.color = "#eee";
  tentativas = 0;
  counter.textContent = "Tentativas: 0";
  history.innerHTML = '';
}

// Eventos
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    pesquisar();
  }
});

clearBtn.addEventListener('click', limpar);
