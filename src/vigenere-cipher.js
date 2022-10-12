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
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(string, key) {
    if (!string || !key) {
			throw new Error('Incorrect arguments!');
		}

    let strArr = string.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let resultArr = [];
    let j = 0;
    for (let i = 0; i < strArr.length; i++) {
      let strIndex = this.alphabet.indexOf(strArr[i]);
      if (strIndex === -1) {
        resultArr.push(strArr[i]);
      } else {
        if (j >= key.length) j = j % keyArr.length;
        let keyIndex = this.alphabet.indexOf(keyArr[j]);
        let letters = this.alphabet[((this.alphabet.length + (strIndex + keyIndex)) % this.alphabet.length)];
        resultArr.push(letters);
        j++;
      }
    }
    if (this.type) {
      return resultArr.join('');
    } else {
      return resultArr.reverse().join('');
    }
  }

  decrypt(string, key) {
    if (!string || !key) {
			throw new Error('Incorrect arguments!');
		}

    let strArr = string.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let resultArr = [];
    let j = 0;
    for (let i = 0; i < strArr.length; i++) {
      let strIndex = this.alphabet.indexOf(strArr[i]);
      if (strIndex === -1) {
        resultArr.push(strArr[i]);
      } else {
        if (j >= key.length) j = j % keyArr.length;
        let keyIndex = this.alphabet.indexOf(keyArr[j]);
        let letters = this.alphabet[((this.alphabet.length + (strIndex - keyIndex)) % this.alphabet.length)];
        resultArr.push(letters);
        j++;
      }
    }
    if (this.type) {
      return resultArr.join('');
    } else {
      return resultArr.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
