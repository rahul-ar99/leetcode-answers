/*
7. Reverse Integer


Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 
Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21



// ----------------------- answer ------------------------
*/

 /**
 * 
 * 
 * @param {number}
 * @return {number}
 */
var reverse = function(x) {
    // string of x assign to var a
    var a = x.toString();
    // create empty array for reverse that number and split
    list = [];
    // add values into list 
    for (let i of a) {
        list.unshift(i);
    }
    // join array into string
    list = list.join("");

    // string to number
    list = parseInt(list);
    //first condition return number is between -2^31 to 2^31 
    if(list>2**31){
        return 0
    }


    if (x < 0) {
        // if input no is negative value then return it negative value
        return 0 - list;
    } else {
        // input is positive return positive value
        return list;
    }
};
