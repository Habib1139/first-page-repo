function newPinGenerate(){
    const newPin = Math.round(Math.random()*10000);
    return newPin;
}

function getNewPin(){
    const getPin = newPinGenerate();
    const  getNew = getPin + '';
   
    if(getNew.length == 4){
        return getPin;
    }
    else{
        getNewPin()
    }
}

document.getElementById('pin-generate').addEventListener('click', function(){
    const pin =  getNewPin();
    const curreentPin = document.getElementById('pin-field');
    curreentPin.value=pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const calculatorEvant = event.target.innerText;
    const pinField = document.getElementById('pin-value');
    if(calculatorEvant=='C'){
        pinField.value = '';
    }
    else{
        const priviousNumber = pinField.value;
        const newNumber = priviousNumber + calculatorEvant;
        pinField.value = newNumber;
    }
    
}) 