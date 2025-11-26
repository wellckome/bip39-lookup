// Alternância entre blocos e observação
function mostrarNumero() {
  document.getElementById('blocoNumero').style.display = 'block';
  document.getElementById('blocoPalavra').style.display = 'none';
  const obs = document.getElementById('observacao');
  obs.style.display = 'block';
  obs.innerHTML =
    "<p>⚡ Na pesquisa por número, você vai digitar o número correspondente à sua seed phrase para restaurar sua carteira.</p>" +
    "<p>⚡ Ou seja, na prática você guardará uma série de números que não te dá correspondência com seed phrase; guarde-as como milhar da loteria.</p>";
}

function mostrarPalavra() {
  document.getElementById('blocoNumero').style.display = 'none';
  document.getElementById('blocoPalavra').style.display = 'block';
  const obs = document.getElementById('observacao');
  obs.style.display = 'block';
  obs.innerHTML =
    "<p>⚡ Na pesquisa por palavra, você vai digitar a palavra correspondente à sua seed phrase para fazer backup dos números.</p>" +
    "<p>⚡ Ou seja, na prática você guardará uma série de números que não te dá correspondência com seed phrase; guarde-as como milhar da loteria.</p>";
}

// Seletores
const input = document.getElementById('numberInput');
const result = document.getElementById('result');
const wordInput = document.getElementById('wordInput');
const wordResult = document.getElementById('wordResult');

const MAX = 2048;

function pesquisar() {
  const num = parseInt(input.value, 10);
  result.classList.remove("valid", "invalid");

  if (!Number.isInteger(num) || num < 1 || num > MAX) {
    result.textContent = "Número inválido. Digite entre 1 e 2048.";
    result.classList.add("invalid");

    // ✅ limpa o campo mesmo em caso de erro
    input.value = '';
    input.focus();
    return;
  }

  const word = words[num]; // usa direto, pois words[1] = abandon
  if (word) {
    result.textContent = `${num} → ${word}`;
    result.classList.add("valid");
  } else {
    result.textContent = "Não encontrado. Verifique o número.";
    result.classList.add("invalid");
  }

  // ✅ também limpa quando válido
  input.value = '';
  input.focus();
}

function pesquisarPalavra() {
  const palavra = wordInput.value.trim().toLowerCase();
  wordResult.classList.remove("valid", "invalid");

  if (!palavra) {
    wordResult.textContent = "Digite uma palavra.";
    wordResult.classList.add("invalid");

    // ✅ limpa o campo mesmo em caso de erro
    wordInput.value = '';
    wordInput.focus();
    return;
  }

  const index = words.indexOf(palavra);
  if (index !== -1) {
    wordResult.textContent = `${palavra} → número ${index}`; // já é o número correto
    wordResult.classList.add("valid");
  } else {
    wordResult.textContent = "Palavra inválida. Use uma da lista BIP39.";
    wordResult.classList.add("invalid");
  }

  // ✅ limpa sempre
  wordInput.value = '';
  wordInput.focus();
}

// Eventos Enter
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') pesquisar();
});

wordInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') pesquisarPalavra();
});
