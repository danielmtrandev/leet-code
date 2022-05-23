// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.


var topKFrequent = function(nums, k) {
    let hashMap = {}
    
    for(let i = 0; i < nums.length; i++){
        // console.log(nums[i])
        hashMap[nums[i]] = hashMap[nums[i]] + 1 || 1
    }
    console.log(hashMap)
    
    let arr = Object.keys(hashMap)
    arr.sort((a,b) => hashMap[b] - hashMap[a])
    return arr.slice(0,k);
};