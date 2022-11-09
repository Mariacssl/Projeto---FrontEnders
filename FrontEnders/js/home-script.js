document.querySelector("#vlibras")
document.querySelector("body > div.alert.alert-dismissible.text-center.cookiealert.show > div")




$('#botao').click(function(){
    $(".cookie").hide();
});




const typing = document.querySelector("#text-dinamico")

const messages = ['Praticidade' , 'Automação', 'Beleza', 'Identidade']

let messageIndex = 0
let characterIndex = 0 
let currentMessage = ''
let currentCharacters = ''

const type = () => {
    if ( messageIndex === messages.length) {
        messageIndex = 0
    }

    currentMessage = messages[ messageIndex]
    currentCharacters = currentMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacters

    if (currentCharacters.length === currentMessage.length){
        messageIndex++
        characterIndex = 0
    }

}

setInterval(type, 350)




