const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 * const reverseMachine = new VigenereCipheringMachine(false);
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  static #alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  #direct;

  constructor(direct = true) {
    this.#direct = direct;
  }

  #scaleKey(phrase, key) {
    const phraseAlphaLen = phrase.replace(/[^a-z]/gi, '').length;
    return key.padEnd(phraseAlphaLen, key);
  }

  #process(phrase, key, encrypt = true) {
    if (!phrase || !key) {
      throw TypeError('Incorrect arguments!');
    }
    const alpha = VigenereCipheringMachine.#alpha;
    const scaledKey = this.#scaleKey(phrase, key);
    let j = 0;

    const res = [...phrase].map((ch) => {
      if (!/[a-z]/i.test(ch)) {
        return ch;
      }
      const phraseCharIdx = alpha.indexOf(ch.toUpperCase());
      const keyCharIdx = alpha.indexOf(scaledKey[j].toUpperCase());
      j += 1;

      const idx = encrypt
        ? (phraseCharIdx + keyCharIdx) % alpha.length
        : (phraseCharIdx + alpha.length - keyCharIdx) % alpha.length;

      return alpha[idx];
    });

    return this.#direct ? res.join('') : res.reverse().join('');
  }

  encrypt(phrase, key) {
    return this.#process(phrase, key);
  }

  decrypt(cipher, key) {
    return this.#process(cipher, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
