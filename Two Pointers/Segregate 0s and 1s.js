// User function Template for javascript

/**
 * Given an array arr consisting of only 0's and 1's in random order. Modify the array in-place to segregate 0s onto the left side and 1s onto the right side of the array.

Examples :

Input: arr[] = [0, 0, 1, 1, 0]
Output: [0, 0, 0, 1, 1]
Explanation:  After segregation, all the 0's are on the left and 1's are on the right. Modified array will be [0, 0, 0, 1, 1].
Input: arr[] = [1, 1, 1, 1]
Output: [1, 1, 1, 1]
Explanation: There are no 0s in the given array, so the modified array is [1, 1, 1, 1]
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

 * @param {number[]} arr

*/

class Solution {
  segregate0and1(arr) {
    // code here
    let start = 0,
      end = arr.length - 1;
    while (start < end) {
      while (arr[start] === 0 && start < end) {
        start++;
      }
      while (arr[end] === 1 && start < end) {
        end--;
      }

      if (start < end) {
        arr[start] = 0;
        arr[end] = 1;
        start++;
        end--;
      }
    }

    return arr;
  }
}
