

function generatePin(){
    const randomPin = Math.round(Math.random()*10000)
    return randomPin; 
}

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('pin-generate').addEventListener('click', function(){
    const currentPin = getPin();
    
    const pinField = document.getElementById('pin-field');
    pinField.value= currentPin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText
    
    const pinValue =  document.getElementById('pin-value');
 

    if(number == 'C'){
        pinValue.value = '';
    }
    else{
        const priviousNumber = pinValue.value;
        const newNumber = priviousNumber + number;
        pinValue.value = newNumber;
    }
})