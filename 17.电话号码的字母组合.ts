/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
const letterCombinations = (digits: string): string[] => {
    // 笛卡尔积
  if (digits === "") {
    return []
  }
  // 拨号键盘
  const keymap: any = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const s = digits.split("").map((d) => keymap[d]);
  let result: any[] = [];
  let stack: any[] = [];
  let point = 0;

  const loop = () => {
    for (let i = 0, array = s[point++]; i < array.length; i++) {
      stack.push(array[i]);
      if (point == digits.length) {
        result.push(stack.join(""));
      } else {
        loop();
        point--;
      }
      stack.pop();
    }
  };
  loop();
  return result;
};


// @lc code=end

