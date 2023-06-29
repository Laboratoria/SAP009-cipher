import cipher from './cipher.js';

const textareaEncrypt = document.getElementById('encrypt-area');
const textareaDecrypt = document.getElementById('decrypt-area');
const keyEncrypt = document.getElementById('key-encrypt')
const keyDecrypt = document.getElementById('key-decrypt')
const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');
const clearEncript = document.getElementById('clear-encrypt');
const clearDecript = document.getElementById('clear-decrypt');

//Transformar as letras em maiúsculas
textareaEncrypt.addEventListener('keyup',(valorTextarea)=>{
  const letter=valorTextarea.target;
  letter.value= letter.value.toUpperCase();
})
textareaDecrypt.addEventListener('keyup',(valorTextarea)=>{
  const letter = valorTextarea.target;
  letter.value= letter.value.toUpperCase();
})

//BOTÃO PARA CRIPTOGRAFAR
encryptButton.addEventListener('click', encryptText);
function encryptText(){
  if(textareaEncrypt.value ==="" ||keyEncrypt.value === ""){
    alert('Preencha todos os campos para codificar!')
  }else{
    const key = Number(keyEncrypt.value);
    const message = textareaEncrypt.value;
    textareaDecrypt.value = cipher.encode(key,message)
  }

}


//BOTÃO PARA DESCRIPTOGRAFAR
decryptButton.addEventListener('click', decryptText)
function decryptText(){
  if(textareaDecrypt.value ==="" ||keyDecrypt.value === ""){
    alert('Preencha todos os campos para decodificar!')
  }else{
    const key = Number(keyDecrypt.value)
    const message = textareaDecrypt.value
    textareaEncrypt.value = cipher.decode(key,message)
  }
}

//BOTÃO PARA LIMPAR
clearDecript.addEventListener('click', ()=>{
  textareaDecrypt.value= "";
  keyDecrypt.value="";
})

clearEncript.addEventListener('click', ()=>{
  textareaEncrypt.value = "";
  keyEncrypt.value="";
})
