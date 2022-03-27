/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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

//此题和归并排序的思路一样，按照归并排序的思路写就行了，差异在于归并两个有序列表和归并两个
// 有序链表的不同，但是也不复杂，利用虚拟头节点一个个合并就行了。
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) {
        return null
    } else if (lists.length === 1) {
        return lists[0]
    }
    let middle = lists.length >> 1
    let left: Array<ListNode | null> = lists.slice(0, middle)
    let right: Array<ListNode | null> = lists.slice(middle)
    let sortedList: ListNode | null = mergeKLists(left)
    let sortedRight: ListNode | null = mergeKLists(right)

    return merge(sortedList, sortedRight)
};

function merge(a: ListNode | null, b: ListNode | null): ListNode | null {
    let dummyHead: ListNode = new ListNode(null)
    let p: ListNode = dummyHead
    let left: ListNode | null = a, right: ListNode | null = b
    while (left && right) {
        if (left.val > right.val) {
            p.next = right
            right = right.next
        } else {
            p.next = left
            left = left.next
        }
        p = p.next
    }
    // 处理剩余的
    if (left) {
        p.next = left
    }

    if (right) {
        p.next = right
    }
    return dummyHead.next
}
// @lc code=end

