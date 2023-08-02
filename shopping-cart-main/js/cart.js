//Add even handler
document.getElementById('btn-plus').addEventListener('click', function(){
    //add input field 
    const quantityField = document.getElementById('quantity-field');
    //get value
    const quantityFieldString = quantityField.value;
    const previousQuantity = parseInt(quantityFieldString)
    //increment value
    let newQuantity = previousQuantity + 1;
    //set value
    quantityField.value = newQuantity;
    //total price 
    let priceTotalPhone = document.getElementById('total-price');
    priceTotalPhone.innerText = newQuantity * 1219;  
    //subtotal
    const subTotalValue = document.getElementById('sub-total');
    const subTotalValueString = subTotalValue.innerText;
    const subTotalIntValue = parseInt(subTotalValueString);
    const subTotal = subTotalIntValue + 1219;
    subTotalValue.innerText = subTotal;
    //give me tax
    const taxValue= document.getElementById('tax');
    const taxValueString = taxValue.innerText;
    const taxValueInt = parseFloat(taxValueString);
    
    const tax = subTotal * .1;
    taxValue.innerText = Math.floor(tax);
    //intotal amount for total price and tax
    const totalValue= document.getElementById('in-total');
    const totalValueString = totalValue.innerText;
    const totalValueInt = parseInt(totalValueString);

    const inTotal = subTotal - tax;
    totalValue.innerText = inTotal
    
})
document.getElementById('btn-minus').addEventListener('click', function(){
    const quantityField = document.getElementById('quantity-field');
    const quantityFieldString = quantityField.value;
    const previousQuantity = parseInt(quantityFieldString)

    const newQuantity = previousQuantity - 1;
    quantityField.value = newQuantity;

   let priceTotalPhone = document.getElementById('total-price');
    priceTotalPhone.innerText = newQuantity * 1219;

    const subTotalValue = document.getElementById('sub-total');
    const subTotalValueString = subTotalValue.innerText;
    const subTotalIntValue = parseInt(subTotalValueString);
    const subTotal = subTotalIntValue - 1219;
    subTotalValue.innerText = subTotal;

    const taxValue= document.getElementById('tax');
    const taxValueString = taxValue.innerText;
    const taxValueInt = parseFloat(taxValueString);
    
    const tax = subTotal * .1;
    taxValue.innerText = Math.floor(tax);

    const totalValue= document.getElementById('in-total');
    const totalValueString = totalValue.innerText;
    const totalValueInt = parseInt(totalValueString);

    const inTotal = subTotal - tax;
    totalValue.innerText = inTotal

})


document.getElementById('btn-plus-case').addEventListener('click', function(){
    const quantityField = document.getElementById('quantity-field-case');
    const quantityFieldString = quantityField.value;
    const previousQuantity = parseInt(quantityFieldString)

    const newQuantity = previousQuantity + 1;
    quantityField.value = newQuantity;

    let priceTotalCase = document.getElementById('total-price-case');
    priceTotalCase.innerText = newQuantity * 59;

    const subTotalValue = document.getElementById('sub-total');
    const subTotalValueString = subTotalValue.innerText;
    const subTotalIntValue = parseInt(subTotalValueString);

    const subTotal = subTotalIntValue + 59;
    subTotalValue.innerText = subTotal;

    
    const taxValue= document.getElementById('tax');
    const taxValueString = taxValue.innerText;
    const taxValueInt = parseFloat(taxValueString);
    
    const tax = subTotal * .1;
    taxValue.innerText = Math.floor(tax);

    const totalValue= document.getElementById('in-total');
    const totalValueString = totalValue.innerText;
    const totalValueInt = parseInt(totalValueString);

    const inTotal = subTotal - tax;
    totalValue.innerText = inTotal
   
    
})
document.getElementById('btn-minus-case').addEventListener('click', function(){
    const quantityField = document.getElementById('quantity-field-case');
    const quantityFieldString = quantityField.value;
    const previousQuantity = parseInt(quantityFieldString)

    const newQuantity = previousQuantity - 1;
    quantityField.value = newQuantity;

   let priceTotalCase = document.getElementById('total-price-case');
    priceTotalCase.innerText = newQuantity * 59;

    const subTotalValue = document.getElementById('sub-total');
    const subTotalValueString = subTotalValue.innerText;
    const subTotalIntValue = parseInt(subTotalValueString);

    const subTotal = subTotalIntValue - 59;
    subTotalValue.innerText = subTotal;
    
    
    const taxValue= document.getElementById('tax');
    const taxValueString = taxValue.innerText;
    const taxValueInt = parseFloat(taxValueString);
    
    const tax = subTotal * .1;
    taxValue.innerText = Math.floor(tax);

    const totalValue= document.getElementById('in-total');
    const totalValueString = totalValue.innerText;
    const totalValueInt = parseInt(totalValueString);

    const inTotal = subTotal - tax;
    totalValue.innerText = inTotal
})





