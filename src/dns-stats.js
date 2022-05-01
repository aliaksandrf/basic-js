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
  let answer = {};

  let arrTemp = [];

  domains.forEach((item) =>{
    arrTemp.push(item.split('.').reverse());
  });

  arrTemp.forEach ((item) =>{
    let dnsTemp = '';
    for (let i = 0; i < item.length; i++) {
      dnsTemp += '.' + item[i];
      if(!(dnsTemp in answer)) {
        answer[dnsTemp] = 1;
      } else {
        answer[dnsTemp]++;
      }
    }
  })

  console.log(arrTemp);
  console.log(answer);
  return answer;
   
  
  
  
  
  //throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
 }

module.exports = {
  getDNSStats
};
