/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    // 先进行合并排序然后对数组进行除法，然后得到对应的结果
    function NumAscSort(a: number, b: number) {
        return a - b;
    }
    const newNums = [...nums1, ...nums2];
    
    const rightNumarry = newNums.sort(NumAscSort);

    // 对数组长度对2取余，如果为true那么就执行中位数合并操作
    if (rightNumarry.length % 2 == 0) {
        const center = rightNumarry.length / 2;
        const result=(rightNumarry[center-1] + rightNumarry[center]) / 2
        return result;
    } else {
    // 否则执行计算数组中位数
        return rightNumarry[(rightNumarry.length + 1) / 2-1];
    }
};
// @lc code=end

