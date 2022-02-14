// pin generater
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{ 
    const prevoiusNumber = calcInput.value;
    const newNumber = prevoiusNumber + number;
    calcInput.value = newNumber;
    }
})
function verifyPiy() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const fail = document.getElementById('notify-fail');
    const success = document.getElementById('notify-success');
    if(pin == typedNumbers){
        success.style.display='block';
        fail.style.display = 'none';
    }
    else{
        fail.style.display = 'block';
        success.style.display='none';
    }
}