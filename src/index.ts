/**
 * @description index
 * @author anissa
 */
import './array-rotate'
//  o(1)
function fn(obj = {}, key = '') {
    return obj[key as keyof typeof obj];
}
//  o(n)
function fn2(array = []) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }
}
//  o(n^2)
function fn3(array = []) {
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length; j++) {
            const element = array[j];

        }
    }
}
console.info("hello")

export default fn;