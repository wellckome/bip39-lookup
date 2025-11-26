// Alternância entre blocos e observação
function mostrarNumero() {
  document.getElementById('blocoNumero').style.display = 'block';
  document.getElementById('blocoPalavra').style.display = 'none';
  const obs = document.getElementById('observacao');
  obs.style.display = 'block';
  obs.innerHTML =
    "<p>⚡ Na pesquisa por número, você vai digitar o número correspondente à sua seed phrase para restaurar sua carteira.</p>" +
    "<p>⚡ Ou seja, na prática você guardará uma série de números que não te dá correspondência com seed phrase,  guarde-as com segurança.</p>";
}

function mostrarPalavra() {
  document.getElementById('blocoNumero').style.display = 'none';
  document.getElementById('blocoPalavra').style.display = 'block';
  const obs = document.getElementById('observacao');
  obs.style.display = 'block';
  obs.innerHTML =
    "<p>⚡ Na pesquisa por palavra, você vai digitar a palavra correspondente à sua seed-phrase para fazer backup dos números.</p>" +
    "<p>⚡ Ou seja, na prática você guardará uma série de números que não te dá correspondência com seed-phrase , guarde-as como milhar da loteria.</p>" +
    "<p>⚡ Más lembre-se que o ideal e ter sempre uma hidden wallet com uma passphrase.</p>";
}

// Eventos Enter
const input = document.getElementById('numberInput');
const result = document.getElementById('result');
const wordInput = document.getElementById('wordInput');
const wordResult = document.getElementById('wordResult');

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

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') pesquisar();
});

wordInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') pesquisarPalavra();
});
