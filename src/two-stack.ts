/**
 * @description 两个栈 一个队列
 * @author anissa
 */

export class MyQueue {
    private stack1: number[] = [];
    private stack2: number[] = [];
    //入队只有一步，向数组push
    add(n: number) {
        this.stack1.push(n)
    }
    //出队有三布，先push到1，再从1pop到2，再从2出队，剩余的pop到1
    delete(): number | null {
        let res;
        const stack1 = this.stack1;
        const stack2 = this.stack2;
        //将stack1所有元素移动到stachk2
        while (stack1.length) {
            //后进先出
            const n = stack1.pop();
            if (n != null) {
                stack2.push(n)
            }
        }
        //stack2 pop
        res = stack2.pop();
        //将stack2的所有元素还给stack1
        while (stack2.length) {
            //后进先出
            const n = stack2.pop();
            if (n != null) {
                stack1.push(n)
            }
        }
        return res || null
    }

    //长度 方法前面加get 就可以通过属性的方式获取这个方法 比如obj.length
    get length(): number {
        return this.stack1.length
    }
}

//功能测试
// const q=new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)