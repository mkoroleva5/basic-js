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
  type = true;
  constructor(type = true) {
    this.type = type;
  }

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  encrypt(string, key) {
    if (!string || !key) {
			throw new Error('Incorrect arguments!');
		}

    let strArr = string.toUpperCase();
    let keyArr = key.toUpperCase();
    let resultArr = '';
    let j = 0;
    for (let i = 0; i < strArr.length; i++) {
      let strIndex = this.alphabet.indexOf(strArr[i]);
      let keyIndex = this.alphabet.indexOf(keyArr[j]);
      if (strIndex === -1) {
        resultArr += strArr[i];
      } else {
        let letters = this.alphabet[((this.alphabet.length + (strIndex + keyIndex)) % this.alphabet.length)];
        resultArr += letters;
        j++;
        if (j >= key.length) j = j % keyArr.length;
      }
    }

    if (this.type) {
      return resultArr;
    } else {
      return resultArr.split('').reverse().join('');
    }
  }

  decrypt(string, key) {
    if (!string || !key) {
			throw new Error('Incorrect arguments!');
		}

    let strArr = string.toUpperCase();
    let keyArr = key.toUpperCase();
    let resultArr = [];
    let j = 0;
    for (let i = 0; i < strArr.length; i++) {
      let strIndex = this.alphabet.indexOf(strArr[i]);
      let keyIndex = this.alphabet.indexOf(keyArr[j]);
      if (strIndex === -1) {
        resultArr += strArr[i];
      } else {
        let letters = this.alphabet[((this.alphabet.length + (strIndex - keyIndex)) % this.alphabet.length)];
        resultArr += letters;
        j++;
        if (j >= key.length) j = j % keyArr.length;
      }
    }
    
    if (this.type) {
      return resultArr;
    } else {
      return resultArr.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
