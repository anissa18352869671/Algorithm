/**
 * @description array-rotate
 * @author anissa
 * 
 */

/**
 * 旋转数组 k 布 pop shift
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate1(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length)

    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if (n) {
            // o(n)的时间复杂度
            arr.unshift(n)//数组是一个有序结构，unshift会非常慢shift、splice
        }
    }
    return arr
}

/**
  * 旋转数组 k 布 使用concat
  * @param arr arr
  * @param k k
  * @returns arr
  */
export function rotate2(arr: number[], k: number): number[] {
    const length = arr.length;
    if (!k || length == 0) return arr;
    const step = Math.abs(k % length);
    //负数为从后取
    const part1 = arr.slice(-step);
    const part2 = arr.slice(0, length - step);
    const part3 = part1.concat(part2);
    return part3;
}

//功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;

// const result = rotate2(arr, k);
// console.info(result)

//性能测试
const arr1 = [],arr2=[];
for (let i = 0; i < 10 * 10000; i++) {
    arr1.push(i);
}
for (let i = 0; i < 10 * 10000; i++) {
    arr2.push(i);
}
// console.time('rotate1');
// rotate1(arr1, 9 * 10000);
// console.timeEnd('rotate1');

// console.time('rotate2');
// rotate2(arr2, 9 * 10000);
// console.timeEnd('rotate2');