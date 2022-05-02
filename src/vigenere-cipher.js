const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.template = /[^a-z]/;
  }

  encrypt(msg, key) {
    if (!msg || !key) {
      throw Error('Incorrect arguments!');
    }
    
    let msgLower = msg.toLowerCase();
    let keyString = '';    
    let encryptMsg = '';
    let count = 0;

    for (let i = 0; i < msgLower.length; i++) {
      if (this.template.test(msgLower[i])) {
        keyString += msgLower[i];
      } else {
        if (count === key.length) {
          count = 0;
        }
        keyString += key[count].toLowerCase();
        count++;      
      }        
    }

    for (let i = 0; i < msgLower.length; i++) {
      if (this.template.test(msgLower[i])) {



        encryptMsg += msgLower[i]; 

      } else {

        let cipher = [...this.alphabet];
        let indexColumn = this.alphabet.indexOf(msgLower[i]);
        let indexRow = this.alphabet.indexOf(keyString[i]);
        
        cipher = cipher.slice(indexRow).concat(cipher.slice(0, indexRow));
        encryptMsg += cipher[indexColumn];
      }
    }

    encryptMsg = encryptMsg.toUpperCase();

    if(this.type) {
      return encryptMsg;
    } else {
      return encryptMsg.split('').reverse().join('');
    }


  }

  decrypt(msg, key) {
    if (!msg || !key) {
      throw Error('Incorrect arguments!');
    }


    let msgLower = msg.toLowerCase();
    let keyString = '';    
    let decryptMsg = '';
    let count = 0;

    for (let i = 0; i < msgLower.length; i++) {
      if (this.template.test(msgLower[i])) {

        keyString += msgLower[i];

      } else {

        if (count === key.length) {
          count = 0;

        }
        keyString += key[count].toLowerCase();
        count++;      
      }  
    }

    for (let i = 0; i < msgLower.length; i++) {

      if (this.template.test(msgLower[i])) {
        decryptMsg += msgLower[i];

      } else {
        let cipher = [...this.alphabet];
        let indexRow = this.alphabet.indexOf(keyString[i]);
        cipher = cipher.slice(indexRow).concat(cipher.slice(0, indexRow));

        let indexColumn = cipher.indexOf(msgLower[i]);
        
        decryptMsg += this.alphabet[indexColumn];
      }
    }

    decryptMsg = decryptMsg.toUpperCase();

    if(this.type) {
      return decryptMsg;
    } else {
      return decryptMsg.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
