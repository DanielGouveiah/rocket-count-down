const timerDias = document.querySelector("[data-timer='dias']");
const timerHoras = document.querySelector("[data-timer='horas']");
const timerMinutos = document.querySelector("[data-timer='minutos']");
const timerSegundos = document.querySelector("[data-timer='segundos']");

const dataFinal = new Date("dec 25 2022");
const dataAtual = new Date();

const tempoAte = dataFinal.getTime() - dataAtual.getTime();
const tempoTotal = tempoAte / (24 * 60 * 60 * 1000);

const timer = {
  dias: Math.floor(tempoTotal),
  horas: 24 - dataAtual.getHours(),
  minutos: 60 - dataAtual.getMinutes(),
  segundos: 60 - dataAtual.getSeconds(),
};

function formatNumber(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function timerCont(timer) {
  if (timer.horas === 0) {
    timer.dias = timer.dias - 1;
    timer.horas = 24;
  }
  if (timer.minutos === 0) {
    timer.horas = timer.horas - 1;
    timer.minutos = 60;
  }
  if (timer.segundos === 0) {
    timer.minutos = timer.minutos - 1;
    timer.segundos = 60;
  }
  return (timer.segundos -= 1);
}

function formatTimer() {
  timerCont(timer);
  timerDias.innerText = formatNumber(timer.dias);
  timerHoras.innerText = formatNumber(timer.horas);
  timerMinutos.innerText = formatNumber(timer.minutos);
  timerSegundos.innerText = formatNumber(timer.segundos);
}

setInterval(() => {
  formatTimer();
}, 1000);
