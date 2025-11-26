import { avisosNumero, avisosPalavra } from './avisos.js';

// Tempo global dos avisos
const TEMPO_AVISO = 30; // segundos
let avisoIntervalo = null; // controla o contador ativo

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

// Constantes
const MAX = 2048;

// Função para parar contador e esconder badge
function pararContador() {
  if (avisoIntervalo) {
    clearInterval(avisoIntervalo);
    avisoIntervalo = null;
  }
  contador.style.display = 'none';
}

// Função genérica para mostrar aviso + contador (badge fora dos avisos)
function mostrarAviso(mensagem, duracaoSegundos) {
  // limpa qualquer contador anterior
  pararContador();

  let tempoRestante = duracaoSegundos;

  // aviso à esquerda
  obs.style.display = 'block';
  obs.innerHTML = `<div class="aviso-texto">${mensagem}</div>`;

  // badge do contador centralizada
  contador.style.display = 'inline-block';
  contador.textContent = `Este aviso fechará em ${tempoRestante} segundos...`;

  // expande container enquanto há aviso
  container.style.maxWidth = '850px';

  // inicia contador regressivo
  avisoIntervalo = setInterval(() => {
    tempoRestante--;
    if (tempoRestante <= 0) {
      // fim imediato quando chega a zero
      clearInterval(avisoIntervalo);
      avisoIntervalo = null;
      obs.style.display = 'none';
      contador.style.display = 'none';
      container.style.maxWidth = '500px';
      return;
    }
    contador.textContent = `Este aviso fechará em ${tempoRestante} segundos...`;
  }, 1000);
}

// Mostrar pesquisa por número
function mostrarNumero() {
  // alterna visibilidade dos blocos
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
  // alterna visibilidade dos blocos
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

  if (!Number.isInteger(num) || num < 1 || num > MAX) {
    result.textContent = 'Número inválido. Digite entre 1 e 2048.';
    result.classList.add('invalid');
    input.value = '';
    input.focus();
    return;
  }

  // words.js deve expor um array global "words" com 2048 itens (BIP39)
  const word = (typeof words !== 'undefined') ? words[num] : null;

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

  const index = (typeof words !== 'undefined') ? words.indexOf(palavra) : -1;

  if (index !== -1) {
    wordResult.textContent = `${palavra} → número ${index}`;
    wordResult.classList.add('valid');
  } else {
    wordResult.textContent = 'Palavra inválida. Use uma da lista BIP39.';
    wordResult.classList.add('invalid');
  }

  wordInput.value = '';
  wordInput.focus();
}

// Eventos de clique dos botões
btnNumero.addEventListener('click', mostrarNumero);
btnPalavra.addEventListener('click', mostrarPalavra);

// Eventos Enter
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') pesquisar();
});
wordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') pesquisarPalavra();
});

// Segurança: ao esconder observação manualmente, garanta estado limpo
function esconderAviso() {
  obs.style.display = 'none';
  pararContador();
  container.style.maxWidth = '500px';
}

// Exporte se precisar usar em outros módulos (opcional)
// export { mostrarNumero, mostrarPalavra, pesquisar, pesquisarPalavra, esconderAviso };
