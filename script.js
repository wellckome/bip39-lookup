let tentativas = 0;

function pesquisar() {
  const input   = document.getElementById("numberInput");
  const result  = document.getElementById("result");
  const counter = document.getElementById("counter");
  const num     = parseInt(input.value, 10);

  tentativas++;
  counter.textContent = `Tentativas: ${tentativas}`;

  if (!isNaN(num) && num >= 1 && num <= words.length - 1) {
    result.textContent = `${num} → ${words[num]}`;
    result.style.color = "limegreen";
  } else {
    result.textContent = "Número inválido. Digite entre 1 e 2048.";
    result.style.color = "red";
  }

  input.value = '';
  input.focus();
}

function limpar() {
  const input   = document.getElementById("numberInput");
  const result  = document.getElementById("result");
  const counter = document.getElementById("counter");

  input.value = '';
  input.focus();
  result.textContent = 'Digite um número e pressione Enter';
  result.style.color = "#eee";
  tentativas = 0;
  counter.textContent = "Tentativas: 0";
}

document.getElementById("numberInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});
