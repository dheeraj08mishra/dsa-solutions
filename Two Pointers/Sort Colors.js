/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // Brute force count 0,1,2
  // let zero = 0, one = 0, two = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === 0) {
  //         zero++;
  //     }
  //     else if (nums[i] === 1) {
  //         one++;
  //     }
  //     else if (nums[i] === 2) {
  //         two++;
  //     }
  // }

  // for (let i = 0; i < nums.length; i++) {
  //     if (i < zero) {
  //         nums[i] = 0;
  //     } else if (i < zero + one) {
  //         nums[i] = 1;
  //     } else if (i < zero + one + two) {
  //         nums[i] = 2;
  //     }
  // }

  let start = (mid = 0),
    end = nums.length - 1;
  while (mid <= end) {
    if (nums[mid] === 0) {
      let temp = nums[start];
      nums[start] = nums[mid];
      nums[mid] = temp;
      start++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      let temp = nums[mid];
      nums[mid] = nums[end];
      nums[end] = temp;
      end--;
    }
  }
  return nums;
};
