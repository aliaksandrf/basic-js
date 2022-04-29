const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(days) {
  if (days == null) return "Unable to determine the time of year!";
  if (isNaN(Date.parse(days))) {
    throw new Error ("Invalid date!");
  }

  try {
    if (days.getYear() == undefined) {
      throw new Error ("Invalid date!");
    }
  } catch {
    throw new Error ("Invalid date!");
  }


  
  let month = days.getMonth();
  
  return (month < 2 || month == 11) ? "winter" : 
               (month < 5) ? "spring" :
               (month < 8) ? "summer" : "autumn (fall)";




  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
