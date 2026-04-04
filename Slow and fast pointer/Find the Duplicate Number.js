/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and using only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [3,3,3,3,3]
Output: 3

 * @param {number[]} nums
 * @return {number}
 * 
 * 
 */
var findDuplicate = function (nums) {
  // slow fast pointer approach use karenge phle slow ko ek se and fast ko 2 se update karenge
  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[fast];
    fast = nums[fast];
    if (slow == fast) break; /// find the cycle
  }

  slow = nums[0];

  while (slow !== fast) {
    /// to find first meeting point
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
