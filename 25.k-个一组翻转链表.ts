/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 使用数组的方式进行翻转
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;//没有元素
    let list: Array<number> = [];//存储数组
    let now: ListNode = head;//循环指针
    while (now) {
        list.push(now.val);//依次循环加入数组
        now = now.next;
    }
    if (k > list.length) return head;//k大于数组则返回原链表
    let result: Array<number> = [];//结果数组
    for (let i = 0; i < list.length; i += k) {
        let arr = list.slice(i, i + k);
        if (arr.length === k) arr = arr.reverse();//反转k个数
        result = [...result, ...arr];//存入结果数组
    }
    if (result.length === 0) return head;//结果数组长度为0则返回原链表
    let res: ListNode = new ListNode(result.shift());
    now = res;
    while (result.length > 0) {
        now.next = new ListNode(result.shift());//依次循环生成结果链表
        now = now.next;
    }
    return res;
};


// 先实现反转[a, b)的函数，最后返回的节点为[b-1, a]。
// 将链表以k长度反转，起点为a，终点为b前进k次。
// 反转后a节点即为反转后的尾节点，尾节点的next指向下一次反转的头节点，即反转[a, b)函数的结果。

function reverse(a ,b){
    let pre = null, current = a, next = a;
    while(current !== b){
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if(head === null) return null;

    let a = head, b = head;
    for(let i = 0;i < k;i++){
        if(b === null) return head;
        b= b.next;
    }

    const newHead = reverse(a, b);

    a.next = reverseKGroup(b, k);

    return newHead;
};
// @lc code=end

