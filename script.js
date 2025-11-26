import { avisosNumero, avisosPalavra } from './avisos.js';

// --- Mostrar blocos e avisos ---
function mostrarNumero() {
  const container = document.querySelector('.container');
  const obs = document.getElementById('observacao');

  document.getElementById('blocoNumero').style.display = 'block';
  document.getElementById('blocoPalavra').style.display = 'none';

  obs.style.display = 'block';
  obs.innerHTML = avisosNumero;

  document.getElementById('result').style.display = 'block';
  document.getElementById('wordResult').style.display = 'none';
  document.getElementById('result').textContent = '';

  document.getElementById('numberInput').focus();

  // ✅ aumenta container
  container.style.maxWidth = '850px';

  // Timer para esconder aviso e reduzir container
  setTimeout(() => {
    obs.style.display = 'none';
    container.style.maxWidth = '650px';
  }, 10000);
}

function mostrarPalavra() {
  const container = document.querySelector('.container');
  const obs = document.getElementById('observacao');

  document.getElementById('blocoNumero').style.display = 'none';
  document.getElementById('blocoPalavra').style.display = 'block';

  obs.style.display = 'block';
  obs.innerHTML = avisosPalavra;

  document.getElementById('wordResult').style.display = 'block';
  document.getElementById('result').style.display = 'none';
  document.getElementById('wordResult').textContent = '';

  document.getElementById('wordInput').focus();

  // ✅ aumenta container
  container.style.maxWidth = '850px';

  // Timer para esconder aviso e reduzir container
  setTimeout(() => {
    obs.style.display = 'none';
    container.style.maxWidth = '650px';
  }, 10000);
}

// --- Eventos dos botões ---
document.getElementById('btnNumero').addEventListener('click', mostrarNumero);
document.getElementById('btnPalavra').addEventListener('click', mostrarPalavra);

// --- Pesquisa por número ---
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
    input.value = '';
    input.focus();
    return;
  }

  const word = words[num]; // words.js precisa estar carregado
  if (word) {
    result.textContent = `${num} → ${word}`;
    result.classList.add("valid");
  } else {
    result.textContent = "Não encontrado. Verifique o número.";
    result.classList.add("invalid");
  }

  input.value = '';
  input.focus();
}

// --- Pesquisa por palavra ---
function pesquisarPalavra() {
  const palavra = wordInput.value.trim().toLowerCase();
  wordResult.classList.remove("valid", "invalid");

  if (!palavra) {
    wordResult.textContent = "Digite uma palavra.";
    wordResult.classList.add("invalid");
    wordInput.value = '';
    wordInput.focus();
    return;
  }

  const index = words.indexOf(palavra);
  if (index !== -1) {
    wordResult.textContent = `${palavra} → número ${index}`;
    wordResult.classList.add("valid");
  } else {
    wordResult.textContent = "Palavra inválida. Use uma da lista BIP39.";
    wordResult.classList.add("invalid");
  }

  wordInput.value = '';
  wordInput.focus();
}

// --- Eventos Enter ---
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') pesquisar();
});

wordInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') pesquisarPalavra();
});
