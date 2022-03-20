/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    const strarr = s.split('');
    for (let i; i < s.length; i++) {
        let numberArr: string;
        if (isNumber(strarr[i])) {
            numberArr+=strarr[i];
        }else if(strarr[i]=='-'||strarr[i]=='+'){
            numberArr+=strarr[i];
        }else{
            const tempNumberArr=numberArr;
            numberArr=''
            return Number(tempNumberArr);
        }
    }
};

function isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }
}
// @lc code=end

