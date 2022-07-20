/**
 * @description 反转单向链表
 * @author anissa
 */

//interface定义类型的
export interface ILinkListNode {
    value: number
    next?: ILinkListNode
}

/**
 * @description 反转单向链表 并返回反转之后的head node
 * @param listNode list head node
 */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
    //定义三个指针
    let prevNode: ILinkListNode | undefined = undefined;
    let curNode: ILinkListNode | undefined = undefined;
    let nextNode: ILinkListNode | undefined = listNode;
    //以next node为主遍历链表
    while (nextNode) {
        //第一个元素，删除next，防止循环引用（反转了第一个就没有next了）
        if(curNode&&!prevNode){
            delete curNode.next
        }

        //反转指针(当前的下一个就是prev)
        if(curNode&&prevNode){
            curNode.next=prevNode
        }
        //整体向后移动指针
        prevNode=curNode;
        curNode=nextNode;
        //?.意思属性没有的话就返回空
        //@ts-ignore
        nextNode=nextNode?.next;
    }
    //!. 指忽略报错，强制语法，当nextNode空时，curNode尚未设置next
    curNode!.next=prevNode;

    return curNode!
}

/**
 * 根据数组创建单向链表
 * @param arr number arr
 * 
 */
export function createLinkList(arr: number[]): ILinkListNode {
    const length = arr.length;
    if (length === 0) throw new Error('arr is empty')
    //arr:[100,200,300]
    //{value:300}
    //{next:200,value:{value:300}}
    //{next:100,value:{next:200,value:{value:300}}}
    //从后往前逐步生成，先生成的是最后一个节点没有next
    let curNode: ILinkListNode = {
        value: arr[length - 1]
    }
    if (length === 1) {
        return curNode
    }
    for (let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }
    return curNode;
}

// const arr=[100,200,300,400,500]
// const list=createLinkList(arr);
// console.info(list)

// const list1=reverseLinkList(list);
// console.info({
//     list1:list1
// })
