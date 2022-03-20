/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    // 两次循环
    // for (let i = 0; i < nums.length; i++) {
    //     if (i + 1 > nums.length - 1) {
    //         console.log('不存在该数组');
    //         break;
    //     } else {
    //         for (let j = i + 1; j < nums.length; j++) {
    //             if (nums[i] + nums[j] == target) {
    //                 return [i, j];
    //             }
    //         }
    //     }
    // }

    // 使用做差的方式进行查找
    // for (let i = 0; i < nums.length; i++) {
    //     const cutNumber = target - nums[i]
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (cutNumber === nums[j]) {
    //             return [i, j]
    //         }
    //     }
    // }

    // 使用map的方式进行查找
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const ret = target - nums[i];
        if (map.has(ret)) {
            return [map.get(ret), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];

};
// @lc code=end

