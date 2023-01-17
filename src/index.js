/*import cipher from './cipher.js';

console.log(cipher);*/

//src/index.js: aqui você deve escutar os eventos de DOM, chamar cipher.encode() e cipher.decode().

//BOTÃO PARA CRIPTOGRAFAR
const encrypt = document.getElementById('encrypt')
encrypt.addEventListener('click', encryptText)

function encryptText(){
alert('ok')
}


//BOTÃO PARA DESCRIPTOGRAFAR
const decrypt = document.getElementById('decrypt')
decrypt.addEventListener('click', decryptText)

function decryptText(){
alert('ok!')
}