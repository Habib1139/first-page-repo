
document.getElementById('input-field').addEventListener('keyup', function(event){
    const text = event.target.value;
   
    const habib = document.getElementById('btn-habib');
    if(text==='habib'){
        habib.removeAttribute('disabled');
    }
    else{
        habib.setAttribute('disabled', true)
    }
})

document.getElementById('btn-habib').addEventListener('click', function(){
    const secret = document.getElementById('secret-text');
    secret.style.display='none';
})