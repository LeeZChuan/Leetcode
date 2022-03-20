/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    const ans: string[] = [];
    DFS(-1, ans, 2 * n, '('); // 开始必须为左括号
    return ans;
};

// 深度遍历
function DFS(sum: number, ans: string[], limit: number, bracket: string) {
    if (sum < -limit || sum >= 1 || bracket.length > limit) { // 左、右括号过多，超过长度都不可行
        return;
    }
    if (bracket.length === limit && sum === 0) { // 左右括号个数一致且长度符合要求
        ans.push(bracket);
        return;
    }
    DFS(sum + 1, ans, limit, bracket + ')');
    DFS(sum - 1, ans, limit, bracket + '(');
}

// @lc code=end

