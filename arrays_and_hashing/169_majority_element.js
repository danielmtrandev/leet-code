// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109


// P: array of integers
// R: return number that appears the most frequent in the array (n / 2)
// E: nums = [3,2,3] >>> 3 //// [2,2,1,1,1,2,2] >>> 2
// P:


var majorityElement = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1
    }
    
    for(let [key,value] of Object.entries(obj)){
        if(value > (nums.length / 2)){
            return key
        }
    }
    
};