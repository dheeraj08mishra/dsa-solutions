/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.
Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  let freq1 = new Array(26).fill(0);
  let freq2 = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    let base = "a".charCodeAt(0);
    freq1[s1.charCodeAt(i) - base]++;
    freq2[s2.charCodeAt(i) - base]++;
  }

  if (freq1.toString() === freq2.toString()) return true;
  let start = 0,
    end = s1.length;

  while (end < s2.length) {
    let base = "a".charCodeAt(0);
    freq2[s2.charCodeAt(end) - base]++;
    freq2[s2.charCodeAt(start) - base]--;
    if (freq1.toString() === freq2.toString()) return true;
    start++;
    end++;
  }
  return false;
};
