import { avisosNumero, avisosPalavra } from './avisos.js';


// Alternância entre blocos e observação
export function mostrarNumero() {
  document.getElementById('blocoNumero').style.display = 'block';
  document.getElementById('blocoPalavra').style.display = 'none';

  const obs = document.getElementById('observacao');
  obs.style.display = 'block';
  obs.innerHTML = avisosNumero;

  // limpa resultados anteriores
  document.getElementById('result').textContent = '';
  document.getElementById('wordResult').textContent = '';

  // coloca o foco no campo de número
  document.getElementById('numberInput').focus();
}

export function mostrarPalavra() {
  document.getElementById('blocoNumero').style.display = 'none';
  document.getElementById('blocoPalavra').style.display = 'block';

  const obs = document.getElementById('observacao');
  obs.style.display = 'block';
  obs.innerHTML = avisosPalavra;

  // limpa resultados anteriores
  document.getElementById('result').textContent = '';
  document.getElementById('wordResult').textContent = '';

  // coloca o foco no campo de palavra
  document.getElementById('wordInput').focus();
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

    input.value = '';
    input.focus();
    return;
  }

  const word = words[num]; // words[1] = abandon
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

// Eventos Enter
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') pesquisar();
});

wordInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') pesquisarPalavra();
});
// no final do script.js
document.getElementById('btnNumero').addEventListener('click', mostrarNumero);
document.getElementById('btnPalavra').addEventListener('click', mostrarPalavra);

