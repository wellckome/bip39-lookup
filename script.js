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

  // adiciona ao histórico com classe
  const item = document.createElement("div");
  item.textContent = mensagem;
  item.classList.add(classe);
  history.appendChild(item);

  input.value = '';
  input.focus();
}
