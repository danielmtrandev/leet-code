// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.



// P: array of integers and single integer
// R: returning indices of two numbers from array that add up to single integer
// E: nums = [2,7,11,15], target = 9 >>> return [0,1] (indices of nums) because 2 + 7 = 9 (target)
// P: nested loop to iterate through nums twice simultaneously while starting on different indexes, then use conditional to check if array element values equal target value


let twoSum = function(nums, target) {
    //     first loop through array nums, starts on 0 index
        for(let i = 0; i < nums.length; i++){  
    //      second loop through array array nums, starts on 1st index 
            for(let j = i + 1; j < nums.length; j++){
    //          assign sum of nums[i] and nums[j] values to variable "sum"
                let sum = nums[i] + nums[j];
    //          conditional to check if value of sum equals to value of "target" parameter 
                if(sum === target ){
    //            return indices of nums elements that added up to "sum"
                  return [i,j];
                }
            }
        }
    }