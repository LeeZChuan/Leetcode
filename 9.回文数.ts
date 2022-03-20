/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    const numberstr = x.toString();
    const reverseNumberstr = numberstr.split('').reverse().join('');
    if (reverseNumberstr == numberstr) {
        return true;
    } else {
        return false;
    }

};
// @lc code=end

