const cipher = { 
    encode: function encryptMessage(offset, string){
        for(let i =  0 ; i < string.length ; i++){
            console.log(string[i])
        }
    }
    
    
    
    
    ,
    decode: function decryptMessage(){

    }};



export default cipher;

//cipher.encode(offset, string);
// offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.

//cipher.decode(offset, string);
 //offset é o número de posições que queremos mover para a esquerda no alfabeto e string é a mensagem (texto) que queremos decifrar.


