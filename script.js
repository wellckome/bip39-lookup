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
