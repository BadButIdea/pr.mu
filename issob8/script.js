let events = {
    2000: [
        {
            date:'20.01.2000',
            name: 'событие 1',
            description: "описание события 1"
        },
        {
            date:'21.01.2000',
            name:"событие 2",
            description:"описание события 2"
        }
        
    ],
    2001:[
            {
            date:'20.01.2001',
            name: 'событие 1',
            description: "описание события 1"
            },
            {
                date:'21.01.2001',
                name:"событие 2",
                description:"описание события 2"
            }
    ],
    2002: [
        {
            date:'20.01.2002',
            name: 'событие 1',
            description: "описание события 1"
        },
        {
            date:'21.01.2002',
            name:"событие 2",
            description:"описание события 2"
        }
    ],
};
let input = document.getElementById('input');
let table = document.getElementById('table');
input.addEventListener('keydown',()=>{
    if(event.key == 'Enter'){
        let year = input.value;
        if(events[year]){
            table.textContent = '';
            for (let event of events[year]) {
                let tr = document.createElement('tr');
                let td;  
                td = document.createElement('td');
                td.textContent = event.date;
                tr.appendChild(td);
                
                td = document.createElement('td');
                td.textContent = event.name;
                tr.appendChild(td);
                
                td = document.createElement('td');
                td.textContent = event.description;
                tr.appendChild(td);
                
                table.appendChild(tr);
            }
        }
    }
})