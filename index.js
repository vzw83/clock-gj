let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.querySelector('#start');
startButton.addEventListener('click', () => {

    // console.log("tik-tak");

    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
    
});


const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click',  () => {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
    const clock = document.querySelector('#clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    // console.log(now);
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

