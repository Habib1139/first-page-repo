document.getElementById('btn-plus').addEventListener('click', function(){
    const quantityField = document.getElementById('quantity-field');
    const quantityFieldString = quantityField.value;
    const quantityTotal = parseInt(quantityFieldString);
    const quantityUpdate = quantityTotal + 1;
    quantityField.value = quantityUpdate;

    const priceField= document.getElementById('price-total');
    priceField.innerText = quantityUpdate * 100;
})

document.getElementById('btn-minus').addEventListener('click', function(){
    const inputField = document.getElementById('quantity-field');
    const inputFieldString = inputField.value;
    const priviousQuantity = parseInt(inputFieldString);

    const newQuantity = priviousQuantity - 1 ;
    inputField.value = newQuantity;
    
    const priceField = document.getElementById('price-total');
    priceField.innerText = newQuantity * 100;
})