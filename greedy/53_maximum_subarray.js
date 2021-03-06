// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.


// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

var maxSubArray = function(nums) {
    let maxNum = -Infinity
    let sum = 0
    
    for(let i = 0; i < nums.length; i++){
//      compare previous contiguous sum with current number
        sum = Math.max(sum + nums[i], nums[i])
//      check if the current number is the greatest sum
        maxNum = Math.max(maxNum, sum)
    }
    
    return maxNum
};

// Time Complexity : O(n)
// Space Complexity: O(1)