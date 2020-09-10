const mainform = document.querySelector('.say-hello-form');
const command = mainform.querySelector('.say-hello-keys');
const display = document.querySelector('.say-hello-display');
const txtDisplay = document.querySelector('#name');
const preSelectedName = document.querySelector('.pre-selected');
var temp = null;

command.addEventListener('click', e => {
    if (e.target.matches('button')) {
    const key = e.target;                       //get button pressed as key
    const action = key.dataset.action;      //get data action type of key pressed
    

    console.log(preSelectedName);

        if (action === "display-hello"){
            if (display.textContent === ' '){
                display.textContent = "Hello World";
            } else {
                display.textContent = "Hello " + display.textContent;
            }
        temp = null;
        }


        if (action === "submit-name"){
            display.textContent = txtDisplay.value;
            temp = null;
        }

        if (action === "say-Hello"){
            if (display.textContent !== ' ' && temp !== null)
                display.textContent = "Hello " + temp;
            }

        if (action === "say-GoodBye"){
            if (key.textContent === 'sayGoodbye'){    
                if (display.textContent !== ' ' && temp !== null){
                    display.textContent = "Goodbye " + temp;
                    key.textContent = "Clear";
                }
            } else    
            if (key.textContent === 'Clear'){
                display.textContent = ' ';
                key.textContent = "sayGoodbye";
            }
        }

        if (action === "pre-input"){
            if(key.id === 'name1'){
                temp = key. textContent;
                display.textContent = key.textContent;
            }
            else
            if(key.id === 'name2'){
                temp = key. textContent;
                display.textContent = key.textContent;
            }
            else
            if(key.id === 'name3'){
                temp = key. textContent;
                display.textContent = key.textContent;
            }
            console.log(key.textContent); 
        }
    }
})