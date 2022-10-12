const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};
  for (let i = 0; i < domains.length; i++) {
    let item = domains[i].split('.').reverse();
    for (let j = 0; j < item.length; j++) {
      let dns = item.slice(0, j + 1).join('.');
      dns.concat(['.', dns]);
      dns = '.' + dns;
      if (object[dns]) object[dns]++;
      else object[dns] = 1;
    }
  }
  return object;
}

module.exports = {
  getDNSStats
};
