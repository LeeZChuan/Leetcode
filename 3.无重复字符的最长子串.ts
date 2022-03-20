/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let map = new Map();
    let maxnum = 0, i = 0, j = 0;
    while (j < s.length) {
        i = map.has(s[j]) ? Math.max(map.get(s[j]) + 1, i) : i;
        map.set(s[j], j++);
        maxnum = Math.max(j - i, maxnum);
    }
    return maxnum;
};
// @lc code=end

