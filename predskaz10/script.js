let predictions = {
    goods: ['Интуиция не подведет тебя в этом году.',
            'Тебя ожидает интересная поездка.',
            'Ожидают кардинальные изменения.',
            'Успешным будет любое начатое дело.'
        ],
    bads: ['Вам пора отдохнуть.',
          'Hадежды и планы сбудутся, но не у вас.',
          'Если в течение 15 секунд не крикнешь УРА!, то все пропало!'
        ]
};

let timer = document.querySelector('#timer');
let text  = document.querySelector('#text');
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let length = predictions.goods.length + predictions.bads.length
let random;
let timerId;
start.addEventListener('click', function() {
    this.classList.remove('active');
    stop.classList.add('active');
    
    timerId = setInterval(function() {
        timer.textContent = random = getRandomInt(1,length);
    }, 100);
});

stop.addEventListener('click', function() {
    this.classList.remove('active');
    clearInterval(timerId);
    if (random>=4) {
        text.textContent = predictions.bads[getRandomInt(0,3)];
        text.classList.add('red')
    }
    else {
        text.textContent = predictions.goods[random];
        text.classList.add('green')
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}