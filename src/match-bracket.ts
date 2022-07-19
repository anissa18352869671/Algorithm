/**
 * 括号判断
 * 遇到左括号就压栈
 * 遇到右括号是否匹配就出栈
 * 判断栈是否为0，0就是true，否则就是false
 */
/**
 * 判断左右括号是否匹配
 * left左括号
 * right右括号
 */
function isMatch(left: string, right: string): boolean {
    if (left === '{' && right === '}') return true
    if (left === '(' && right === ')') return true
    if (left === '[' && right === ']') return true
    return false
}
/**
 * 判断是否匹配
 * @param str str
 * 
 */
export function matchBracket(str: string): boolean {
    const length = str.length;
    if (length === 0) return true;
    const stack = [];
    const leftSymbols = '({[';
    const rightSymbols = ')]}';
    for (let i = 0; i < length; i++) {
        const s = str[i];
        if (leftSymbols.includes(s)) {
            //左括号压栈
            stack.push(s)
        } else if (rightSymbols.includes(s)) {
            //右括号，判断栈顶（是否出栈）
            const top = stack[stack.length - 1];
            if (isMatch(top, s)) {
                stack.pop();
            }else{
                return false
            }
        }

    }
    return stack.length === 0
}

//功能测试
// const str ='{a(b[c])de}f'

// console.info(matchBracket(str));