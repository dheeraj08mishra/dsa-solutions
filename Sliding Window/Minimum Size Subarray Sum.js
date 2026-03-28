/**
 * 
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

 * @param {number} target
 * @param {number[]} nums
 * @return {number} 
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let start = 0,
    end = 0;
  let length = 0;
  while (end < nums.length) {
    sum = sum + nums[end];
    while (sum >= target) {
      length =
        length === 0 ? end - start + 1 : Math.min(length, end - start + 1);
      sum = sum - nums[start];
      start++;
    }
    end++;
  }
  return length;
};
