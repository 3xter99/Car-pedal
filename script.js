let t1, t2;

let start = false
const engine = new Audio('./audio/engine.mp3');
const car = new Audio('./audio/car.mp3');
engine.loop = true;
engine.volume = 0.2;
document.querySelector('.start').addEventListener('click', function () {
    if (start === false) {
        start = true;
        this.innerHTML = 'stop';
        engine.play();
        document.querySelector('.treadle').addEventListener('click', pushTreadle);
        document.querySelector('.progress-line').style.width = '100px';
        t1 = clearTimeout(t1);
        t2 = clearTimeout(t2);
        car.pause();
        car.currentTime = 0;
    }
    else {
        start = false;
        this.innerHTML = 'start';
        engine.pause();
        document.querySelector('.treadle').removeEventListener('click', pushTreadle);
        document.querySelector('.progress-line').style.width = '0px'
    }

});

function pushTreadle() {
    t1 = clearTimeout(t1);
    t2 = clearTimeout(t2);
    this.classList.add('treadle-push');
    car.play();
    document.querySelector('.progress-line').style.width = '300px';
    stopTreadle();
}

function stopTreadle() {
    t1 = setTimeout(() => {
        document.querySelector('.treadle').classList.remove('treadle-push');
        document.querySelector('.progress-line').style.width = '100px';
    }, 1000);
    t2 = setTimeout(() => {
        car.pause();
        car.currentTime = 0;
    }, 1500);

}
