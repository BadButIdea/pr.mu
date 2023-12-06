
let horoscopes = {
    today: {
        Овен: "У Овна сегодня...",
        Телец: "У Тельца сегодня...",
        Близнецы: "У Близнецов сегодня...",
        Рак: "У Рака сегодня...",
        Лев: "У Льва сегодня...",
        Дева: "У Девы сегодня...",
        Весы: "У Весов сегодня...",
        Скорпион: "У Скорпиосегодня...",
        Стрелец: "У Стрельца сегодня...",
        Козерог: "У Козерога сегодня...",
        Водолей: "У Водолея сегодня...",
        Рыбы: "У Рыб сегодня..."
    },
    tomorrow: {
        Овен: "У Овна завтра...",
        Телец: "У Тельца завтра...",
        Близнецы: "У Близнецов завтра...",
        Рак: "У Рака завтра...",
        Лев: "У Льва завтра...",
        Дева: "У Девы завтра...",
        Весы: "У Весов завтра...",
        Скорпион: "У Скорпиозавтра...",
        Стрелец: "У Стрельца завтра...",
        Козерог: "У Козерога завтра...",
        Водолей: "У Водолея завтра...",
        Рыбы: "У Рыб завтра..."
    },
    afterTomorrow: {
        Овен: "У Овна послезавтра...",
        Телец: "У Тельца послезавтра...",
        Близнецы: "У Близнецов послезавтра...",
        Рак: "У Рака послезавтра...",
        Лев: "У Льва послезавтра...",
        Дева: "У Девы послезавтра...",
        Весы: "У Весов послезавтра...",
        Скорпион: "У Скорпиопослезавтра...",
        Стрелец: "У Стрельца послезавтра...",
        Козерог: "У Козерога послезавтра...",
        Водолей: "У Водолея послезавтра...",
        Рыбы: "У Рыб послезавтра..."
    }
};
let birth = document.getElementById('birth');
let choose = document.getElementById('days');
let button = document.querySelector('button');
let text = document.querySelector('h2');

button.addEventListener('click', () => {
    let day;
    let zodiac;
    for (let option of choose) {
        if(option.selected) {
            day = option.value
        }
    }
    let birthdate = birth.value;
    if(birthdate) {
        zodiac = getSign(new Date(birthdate))
    }
    let sign = horoscopes[day][zodiac];
    text.textContent = sign;
});
function getSign(birth) {
    let day = birth.getDate();
    let month = birth.getMonth() + 1;
     if ((day >= 21  && month == 3 ) || (day <=19  && month == 4)) {
         return "Овен";
     } else if ((day >= 20  && month == 4) || (day <= 20  && month == 5)) {
         return "Телец";
     } else if ((day >= 21  && month == 5) || (day <= 21  && month == 6)) {
         return "Близнецы";
     } else if ((day >= 22  && month == 6) || (day <= 22  && month == 7)) {
         return "Рак";
     } else if ((day >= 23  && month == 7) || (day <= 22  && month == 8)) {
         return "Лев";
     } else if ((day >= 23  && month == 8) || (day <= 22  && month == 9)) {
         return "Дева";
     } else if ((day >= 23  && month == 9) || (day <= 23  && month == 10)) {
         return "Весы";
     } else if ((day >= 24  && month == 10) || (day <= 21  && month == 11)) {
         return "Скорпион";
     } else if ((day >= 22  && month == 11) || (day <= 21  && month == 12)) {
         return "Стрелец";
     } else if ((day >= 22  && month == 12) || (day <= 20  && month == 1)) {
         return "Козерог";
     } else if ((day >= 21  && month == 1) || (day <=20  && month == 2)) {
         return "Водолей";
     } else {
         return "Рыбы";
     }
 }