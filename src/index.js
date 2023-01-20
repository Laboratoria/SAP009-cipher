import cipher from './cipher.js';


alert('ok')

//src/index.js: aqui você deve escutar os eventos de DOM, chamar cipher.encode() e cipher.decode().
//aqui você deve escutar os eventos de DOM, chamar cipher.encode() e cipher.decode().


const textareaEncrypt = document.getElementById('encrypt-area');
const textareaDecrypt = document.getElementById('decrypt-area');
const encrypt = document.getElementById('encrypt');
const decrypt = document.getElementById('decrypt');

//BOTÃO PARA CRIPTOGRAFAR
encrypt.addEventListener('click', encryptText);
function encryptText(){
alert('ok')

textareaDecrypt.value = textareaEncrypt.value
let message = textareaEncrypt.value
console.log(message)

}


//BOTÃO PARA DESCRIPTOGRAFAR
decrypt.addEventListener('click', decryptText)
function decryptText(){
alert('ok!')

console.log(textareaDecrypt.value)
textareaEncrypt.value = textareaDecrypt.value
}