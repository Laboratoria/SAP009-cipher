const cipher = {
  encode: function (offset,string){
    if(offset === null || string === [] || offset === 0 || string === 0){
      throw new TypeError;
    }
    let result="";
    for (let i = 0; i < string.length; i++) {
      
      let letterChanged = " ";
      if(string.charCodeAt(i)<65 || string.charCodeAt(i) > 90){
        result += string.charAt(i);
      }
   
      else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
       
        letterChanged = (string.charCodeAt(i) - 65 + offset) % 26 + 65;

      
        result = result + String.fromCharCode(letterChanged);
      } 
    }
    //console.log(result);
    return result;
  },
  decode: function (offset,string){
    if((offset === null || string === [] || offset === 0 || string === 0)){
      throw new TypeError;
    }
    let result = "";

    for (let i = 0; i < string.length; i++) {

      let letterChanged = "";

      
      if(string.charCodeAt(i)<65 || string.charCodeAt(i) > 90){
        result += string.charAt(i);
      }
   
      else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {

        letterChanged = (string.charCodeAt(i) + 65 - offset) % 26 + 65;

        result = result + String.fromCharCode(letterChanged);


      } 

    }
    return result;

  }
};



export default cipher;

//cipher.encode(offset, string);
// offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.

//cipher.decode(offset, string);
//offset é o número de posições que queremos mover para a esquerda no alfabeto e string é a mensagem (texto) que queremos decifrar.


