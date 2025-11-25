let tentativas = 0;

function pesquisar() {
  const input   = document.getElementById("numberInput");
  const result  = document.getElementById("result");
  const counter = document.getElementById("counter");
  const history = document.getElementById("history");
  const num     = parseInt(input.value, 10);

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

  // adiciona ao histórico
  const item = document.createElement("div");
  item.textContent = mensagem;
  item.classList.add(classe);
  history.appendChild(item);

  // limpa e volta foco
  input.value = '';
  input.focus();
}

function limpar() {
  const input   = document.getElementById("numberInput");
  const result  = document.getElementById("result");
  const counter = document.getElementById("counter");
  const history = document.getElementById("history");

  input.value = '';
  input.focus();
  result.textContent = 'Digite um número e pressione Enter';
  result.style.color = "#eee";
  tentativas = 0;
  counter.textContent = "Tentativas: 0";
  history.innerHTML = '';
}

document.getElementById("numberInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});

document.getElementById("clearBtn").addEventListener("click", limpar);
