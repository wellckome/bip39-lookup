// script.js — versão sem módulos (funciona offline total)

// Tempo global dos avisos
const TEMPO_AVISO = 15; // segundos
let avisoIntervalo = null;

// Cache de elementos
const container = document.querySelector('.container');
const obs = document.getElementById('observacao');
const contador = document.getElementById('contadorAviso');

const blocoNumero = document.getElementById('blocoNumero');
const blocoPalavra = document.getElementById('blocoPalavra');

const input = document.getElementById('numberInput');
const result = document.getElementById('result');
const wordInput = document.getElementById('wordInput');
const wordResult = document.getElementById('wordResult');

const btnNumero = document.getElementById('btnNumero');
const btnPalavra = document.getElementById('btnPalavra');

const MAX = 2048;

// Função para parar contador e esconder badge
function pararContador() {
  if (avisoIntervalo) {
    clearInterval(avisoIntervalo);
    avisoIntervalo = null;
  }
  contador.style.display = 'none';
}

// Mostrar aviso + contador
function mostrarAviso(mensagem, duracaoSegundos) {
  pararContador();

  let tempoRestante = duracaoSegundos;

  obs.style.display = 'block';
  obs.innerHTML = `<div class="aviso-texto">${mensagem}</div>`;

  contador.style.display = 'inline-block';
  contador.textContent = `⏳ ${tempoRestante} s...`;

  container.style.maxWidth = '850px';

  avisoIntervalo = setInterval(() => {
    tempoRestante--;
    if (tempoRestante <= 0) {
      clearInterval(avisoIntervalo);
      avisoIntervalo = null;
      obs.style.display = 'none';
      contador.style.display = 'none';
      container.style.maxWidth = '850px';
      return;
    }
    contador.textContent = `⏳ ${tempoRestante} s...`;
  }, 1000);
}

// Mostrar pesquisa por número
function mostrarNumero() {
  blocoNumero.style.display = 'block';
  blocoPalavra.style.display = 'none';
  result.style.display = 'block';
  wordResult.style.display = 'none';
  result.textContent = '';
  result.classList.remove('valid', 'invalid');
  input.value = '';
  input.focus();
  mostrarAviso(avisosNumero, TEMPO_AVISO);
}

// Mostrar pesquisa por palavra
function mostrarPalavra() {
  blocoNumero.style.display = 'none';
  blocoPalavra.style.display = 'block';
  wordResult.style.display = 'block';
  result.style.display = 'none';
  wordResult.textContent = '';
  wordResult.classList.remove('valid', 'invalid');
  wordInput.value = '';
  wordInput.focus();
  mostrarAviso(avisosPalavra, TEMPO_AVISO);
}

// Pesquisa por número
function pesquisar() {
  const num = parseInt(input.value, 10);
  result.classList.remove('valid', 'invalid');

  // Validação correta: número inteiro entre 1 e 2048
  if (!Number.isInteger(num) || num < 1 || num > 2048) {
    result.textContent = 'Número inválido. Digite entre 1 e 2048.';
    result.classList.add('invalid');
    input.value = '';
    input.focus();
    return;
  }

  // Ajuste de índice: número 1 → índice 0
  const word = words[num - 1];

  if (word) {
    result.textContent = `${num} → ${word}`;
    result.classList.add('valid');
  } else {
    result.textContent = 'Não encontrado. Verifique o número.';
    result.classList.add('invalid');
  }

  input.value = '';
  input.focus();
}

// Pesquisa por palavra
function pesquisarPalavra() {
  const palavra = wordInput.value.trim().toLowerCase();
  wordResult.classList.remove('valid', 'invalid');

  if (!palavra) {
    wordResult.textContent = 'Digite uma palavra.';
    wordResult.classList.add('invalid');
    wordInput.value = '';
    wordInput.focus();
    return;
  }

  // Busca na lista global `words`
  let index = -1;
  if (typeof words !== 'undefined') {
    index = words.indexOf(palavra);
  }

  if (index !== -1) {
    wordResult.textContent = `${palavra} → número ${index + 1}`;
    wordResult.classList.add('valid');
  } else {
    wordResult.textContent = 'Palavra inválida. Use uma da lista BIP39.';
    wordResult.classList.add('invalid');
  }

  wordInput.value = '';
  wordInput.focus();
}

// Eventos
btnNumero.addEventListener('click', mostrarNumero);
btnPalavra.addEventListener('click', mostrarPalavra);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') pesquisar();
});

wordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') pesquisarPalavra();
});

// Garantir estado inicial limpo
function esconderAviso() {
  obs.style.display = 'none';
  pararContador();
  container.style.maxWidth = '850px';
}