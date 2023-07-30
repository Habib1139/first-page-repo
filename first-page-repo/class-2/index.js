document.getElementById('input-field').addEventListener('keyup', function(event){
    const test= event.target.value;
   
    const deleteButton = document.getElementById('btn-delete');
    if(test==='delete'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }
})

document.getElementById('btn-delete').addEventListener('click', function(){
    const secret = document.getElementById('secret-text');
    secret.style.display = 'none';
})