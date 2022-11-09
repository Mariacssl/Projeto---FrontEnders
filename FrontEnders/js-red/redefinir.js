document.querySelector("#vlibras")


const formu = document.getElementById('formulario');
const campos = document.querySelectorAll ('.required');
const spans = document.querySelectorAll('.span-required'); 
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


formu.addEventListener('submit', (event) =>{
    event.preventDefault();
    emailValidate();
   
});


function setError(redefinir){
    campos[redefinir].style.border = '1px solid #e63636';
    spans [redefinir].style.display = 'block';
};

function removeError(redefinir){
    campos[redefinir].style.border = '';
    spans [redefinir].style.display = 'none';
};

function emailValidate(){
    if (!emailRegex.test(campos[0].value))
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }

};
