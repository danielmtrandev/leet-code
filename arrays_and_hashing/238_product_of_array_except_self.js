// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


// The array that is returned should be a multiplication of all values except the index that we are currently on:

// let input = [1,2,3,4]
// input[0] = 1 >>> 1x2, 1x3, 1x4, NOT 1x1
// input[1] = 2 >>> 2x1, 2x3, 2x4, NOT 2x2
// input[2] = 1 >>> 3x2, 3x1, 3x4, NOT 3x3
// input[3] = 1 >>> 4x3, 4x2, 4x1, NOT 4x4 

// 1 array with incremental multiplication from left, 1 array with incremental multiplication from right.

// at the start index of these arrays, we'll have 1 (as no multiplication prior to it).

// left arr = [1, (1)x1, (1x1)x2, (1x1x2)x3] = [1, 1, 2, 6]

// right arr = [(1x4x3)x2, (1x4)x3, (1)x4 ,1] = [24, 12, 4, 1]

// now, at each index, in left array, we'll have mutiple of left elements prior that index.

// In right array, we'll have mutiple of right elements ahead of that index.

// So, we'll multiply [1, 1, 2, 6] X  [24, 12, 4, 1] at each index.

// Result = [24, 12, 8, 6]




var productExceptSelf = function(nums) {
    let result = [];
    let multiplier = 1; // has to be one, or all products will be 0
    for(let i = 0; i < nums.length; i++){
        result[i] = multiplier; // right array
        multiplier *= nums[i]
        
    }
    multiplier = 1; // resetting multiplier
    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= multiplier; // right array * left array
        multiplier *= nums[i]
    }
    
    return result
};