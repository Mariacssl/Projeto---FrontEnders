document.querySelector("#vlibras")


const form = document.getElementById('form');
const campos = document.querySelectorAll ('.required');
const spans = document.querySelectorAll('.span-required'); 
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    emailValidate();
    mainPasswordValidate();
});


function setError(login){
    campos[login].style.border = '1px solid #e63636';
    spans [login].style.display = 'block';
};

function removeError(login){
    campos[login].style.border = '';
    spans [login].style.display = 'none';
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

function mainPasswordValidate(){
    if(campos[1].value.length < 8) 
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }

}