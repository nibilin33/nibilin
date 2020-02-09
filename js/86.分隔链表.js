/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var left = new ListNode(0);
    var right = new ListNode(0);
    var preHead = left;
    var preRight = right;
    while(head) {
        if(head.val >= x) {
            right.next = head;
            right = right.next;
        }else{
            left.next = head;
            left = left.next;
        }
        head = head.next;
    };
    right.next = null;
    left.next = preRight.next;
    return preHead.next;
};
// @lc code=end

