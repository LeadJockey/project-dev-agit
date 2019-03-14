/**
 * @param {Number} range 
 * get data form 0 to range(100 default)
 */
export const getRandomNumber = (range) => Math.round(Math.random() * (range || 100))