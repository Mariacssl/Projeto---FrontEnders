document.querySelector("#vlibras")

//confirmação de senha
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;








const form = document.getElementById('form-cad');
const formDois = document.getElementById('pure-form');


const reque = document.querySelectorAll ('.form-control');
const spanss = document.querySelectorAll('.span-required');

const btn = document.querySelector ('submit');

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;



formDois.addEventListener("submit", (event) =>{
  event.preventDefault();
  nameValidate();
  emailValidate();
  rgValidate()
  mainPasswordValidate();

});/*

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  emailValidate();
  rgValidate()
  mainPasswordValidate();
});


*/


function setError(cadastro){
  reque[cadastro].style.border = '1px solid #e63636';
  spanss [cadastro].style.display = 'block';
};

function removeError(cadastro){
  reque[cadastro].style.border = '';
  spanss [cadastro].style.display = 'none';
};


function nameValidate(){
  if(reque[0].value.length < 3) 
  {
      setError(0);
  }
  else
  {
      removeError(0);
  }

};





function emailValidate(){
  if (!emailRegex.test(reque[1].value))
  {
      setError(1);
  }
  else
  {
      removeError(1);
  }

};


function rgValidate(){
  if(reque[2].value.length < 5) 
  {
      setError(2);
  }
  else
  {
      removeError(2);
  }

}



function mainPasswordValidate(){
  if(reque[4].value.length < 8) 
  {
      setError(4);
  }
  else
  {
      removeError(4);
      comparePassword();
  }

}

function comparePassword(){
  if(reque[4].value == reque[5].value && reque[5].value.length >=8 )
  {
    removeError(5);

  }
  else
  {
    setError(5);
  }
};
