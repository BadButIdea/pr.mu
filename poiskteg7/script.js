let tags = {
    "b": "Задает полужирное начертание отрывка текста, не придавая акцент или важность выделенному.",
    "br": "Перенос текста на новую строку.",
    "input": "Создает многофункциональные поля формы, в которые пользователь может вводить данные.",
    }

let p = document.querySelector('p')
let input = document.querySelector('input')
input.addEventListener('keypress', () => {
    if (event.key === 'Enter') {
        let tag = input.value;
        if (tags[tag]) { 
            input.value = '';
            p.textContent = tags[tag]
        }
            

     }})
