/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return;
    flatten(root.left);
    flatten(root.right);
    if(root.left){
        var left = root.left;
        var right = root.right;
        root.right = left;
        while(left.right) {
            left = left.right;
        }
        left.right = right;
        root.left = null;
    }
};
// @lc code=end

