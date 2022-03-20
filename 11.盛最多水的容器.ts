/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let result = 0;
    for (let l = 0, r = height.length - 1; l < r;) {
        const lv = height[l];
        const rv = height[r];
        const res = Math.min(lv, rv) * (r - l);
        result = Math.max(res, result);
        if (height[l] > height[r]) {
            while (l < r && height[r] <= rv) {
                r--;
            }
        } else {
            while (l < r && height[l] <= lv) {
                l++;
            }
        }
    }
    return result;
}

// @lc code=end

