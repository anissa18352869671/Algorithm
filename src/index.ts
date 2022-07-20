/**
 * @description index
 * @author anissa
 */
// import './array-rotate'
// import './match-bracket'
// import './two-stack'
import './reverse-link-list'
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

// const n1 = {
//     value: 100,
//     next:n2
// }
// const n2 = {
//     value: 200,
//     next:n3,
//     prev:n1
// }
// const n3 = {
//     value: 300,
//     next:n4,
//     prev:n2
// }
// const n4 = {
//     value: 400,
//     prev:n3
// }
export default fn;