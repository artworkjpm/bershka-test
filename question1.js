/* Create a function in JavaScript ES6 that given an array of integers, it returns the highest value in that array. */
const array1 = [1, 3, 2, 13, 2100, 302, -40];
const getHightestValue = (array) => {
    return Math.max(...array);
}
console.log(getHightestValue(array1));