
const daysEl = document.getElementById("days");

function countdown()
{
    const dataFinalEl = document.getElementById("dataFinal").valueAsDate;
    const finalDate = new Date(dataFinalEl);
    const dataInicialEl = document.getElementById("dataInicial").valueAsDate;
    const inicioDate = new Date(dataInicialEl);


    const totalSeconds = (finalDate - inicioDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);

    daysEl.innerHTML = days; 
}
function formatTime(time)
{
    return time < 10 ? `0$(time)`: time;
}
setInterval(countdown, 1000);

