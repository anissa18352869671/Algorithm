/**
 * @description 反转单向链表test
 * @author anissa
 */

import { ILinkListNode, createLinkList,reverseLinkList } from './reverse-link-list'

describe('反转单向链表',()=>{
    it('单个元素',()=>{
        const node:ILinkListNode={value:100};
        const node1=reverseLinkList(node);
        //对象、数组的对比用toEqual，数字、字符串的对比用toBe
        expect(node1).toEqual({value:100})
    })

    it('正常情况',()=>{
        const node=createLinkList([100,200,300]);
        const node1=reverseLinkList(node);
        //对象、数组的对比用toEqual，数字、字符串的对比用toBe
        expect(node1).toEqual({value:300,next:{value:200,next:{value:100}}})
    })
})