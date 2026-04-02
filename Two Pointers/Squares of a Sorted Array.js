/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let p1 = 0,
    p2 = n - 1,
    p3 = n - 1;
  let res = new Array(n);
  while (p1 <= p2) {
    if (Math.abs(nums[p1]) > Math.abs(nums[p2])) {
      res[p3] = nums[p1] * nums[p1];
      p3--;
      p1++;
    } else {
      res[p3] = nums[p2] * nums[p2];
      p3--;
      p2--;
    }
  }
  return res;
};
