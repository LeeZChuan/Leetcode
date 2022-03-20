/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    const maxNumber = Math.pow(2, 31) - 1;
    const minNumber = -Math.pow(2, 31);
    let resultstr: string;
    if (x >= 0) {
        const str = Math.abs(x).toString();
        resultstr = charAtSplit(str);
        if (Number(resultstr) <= maxNumber) {
            return Number(resultstr);
        } else {
            return 0;
        }
    } else {
        const str = Math.abs(x).toString();
        resultstr = charAtSplit(str);
        if (-Number(resultstr) >= minNumber) {
            return -Number(resultstr);
        } else {
            return 0;
        }
    }


};
// 方法一：字符串分割
function mathSplit(str: string) {
    return str.split('').reverse().join('');
}

// 方法二：使用for循环遍历然后使用chartAt方法进行替换；
function charAtSplit(str: string) {
    let nameArr = str.split('');
    let resultStr = '';
    for (let i = nameArr.length - 1; i >= 0; i--) {
        resultStr += str.charAt(i);
    }
    return resultStr
}
// @lc code=end

