document.querySelector("#vlibras")
document.querySelector("body > div.alert.alert-dismissible.text-center.cookiealert.show > div")

$('a.button').click(function(){
  $('.cookiealert-container').animate({ 
    opacity:0,
    width:0,
 },500);
});