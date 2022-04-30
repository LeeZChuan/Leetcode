/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
    // 如果头节点是空那么就返还head链表
    if (head === null || head.next === null) {
        return head;
    }

    // 第二个节点
    const next = head.next;
    // 将下一组头节点传入
    // head指向下一组节点头节点(经过交换后，head变成了尾部，所以head指向下一组开始)
    head.next = swapPairs(next.next);
    // 第二个节点指向head
    next.next = head;
    // next变成了头节点
    return next;
};
// @lc code=end

