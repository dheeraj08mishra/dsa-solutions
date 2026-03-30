/**
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sNew = "",
    tNew = "";
  let i = 0,
    j = 0;

  while (i < s.length) {
    if (s[i] === "#") {
      if (sNew.length > 0) {
        sNew = sNew.slice(0, -1);
      }
    } else {
      sNew += s[i];
    }
    i++;
  }

  while (j < t.length) {
    if (t[j] === "#") {
      if (tNew.length > 0) {
        tNew = tNew.slice(0, -1);
      }
    } else {
      tNew += t[j];
    }
    j++;
  }

  return sNew === tNew;
};
