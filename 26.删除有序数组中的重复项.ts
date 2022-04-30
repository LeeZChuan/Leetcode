/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    for (let i = nums.length; i > 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1)
        }
    }
    return nums.length
};
// @lc code=end

