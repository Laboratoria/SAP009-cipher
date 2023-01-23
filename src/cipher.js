const cipher = {
  encode: function (offset,string){
    let result="";
    for (let i = 0; i < string.length; i++) {
      //const letterCode = " ";
      let letterChanged = " ";
   
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        //letterCode = string.charCodeAt(i);
        letterChanged = (string.charCodeAt(i) - 65 + offset) % 26 + 65;

        //console.log(string.charCodeAt(i), "+", offset, "=", letterChanged, "=>", String.fromCharCode(letterChanged));

        //console.log(String.fromCharCode(letterCode));
        result = result + String.fromCharCode(letterChanged);
      } else {
        //console.log(string[i]);

        //console.log('não é');
        //console.log("else:", string.charCodeAt(i));
      }
    }
    //console.log(result);
    return result;
  },
  decode: function (offset,string){
    let result = "";

    for (let i = 0; i < string.length; i++) {


      //const letterCode = "";
      let letterChanged = "";


      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        //console.log("if: ", string.charCodeAt(i));
        //letterCode = string.charCodeAt(i);
        letterChanged = (string.charCodeAt(i) + 65 - offset) % 26 + 65;

        //console.log(string.charCodeAt(i), "+", offset, "=", letterChanged, "=>", String.fromCharCode(letterChanged));

        //console.log(String.fromCharCode(letterCode));
        result = result + String.fromCharCode(letterChanged);


      } else {
        //console.log(string[i]);

        //console.log('não é');
        //console.log("else:", string.charCodeAt(i));

      }






    }
    //console.log(result);
    return result;

  }
};



export default cipher;

//cipher.encode(offset, string);
// offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.

//cipher.decode(offset, string);
//offset é o número de posições que queremos mover para a esquerda no alfabeto e string é a mensagem (texto) que queremos decifrar.


