import cipher from './cipher.js';




//src/index.js: aqui você deve escutar os eventos de DOM, chamar cipher.encode() e cipher.decode().
//aqui você deve escutar os eventos de DOM, chamar cipher.encode() e cipher.decode().


const textareaEncrypt = document.getElementById('encrypt-area');
const textareaDecrypt = document.getElementById('decrypt-area');
const keyEncrypt = document.getElementById('key-encrypt')
const keyDecrypt = document.getElementById('key-decrypt')
const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');

textareaEncrypt.addEventListener('keyup',(valorTextarea)=>{
    let letter = valorTextarea.target
    letter.value= letter.value.toUpperCase()
})

//BOTÃO PARA CRIPTOGRAFAR
encryptButton.addEventListener('click', encryptText);
function encryptText(){
let key = keyEncrypt.value
let message = textareaEncrypt.value
cipher.encode(key,message)

}


//BOTÃO PARA DESCRIPTOGRAFAR
decryptButton.addEventListener('click', decryptText)
function decryptText(){
alert('ok!')

console.log(textareaDecrypt.value)
textareaEncrypt.value = textareaDecrypt.value
}