// # Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// # You must write an algorithm with O(log n) runtime complexity.


// # Example 1:
// # Input: nums = [1,3,5,6], target = 5
// # Output: 2

// # Example 2:
// # Input: nums = [1,3,5,6], target = 2
// # Output: 1

// # Example 3:
// # Input: nums = [1,3,5,6], target = 7
// # Output: 4


// # Constraints:

// # 1 <= nums.length <= 104
// # -104 <= nums[i] <= 104
// # nums contains distinct values sorted in ascending order.
// # -104 <= target <= 104


var searchInsert = function(nums, target) {
    // loop through nums array
    for(let i = 0; i < nums.length; i++){
        // if current element equals target value, return index of current element
        if(nums[i] == target){
            return nums.indexOf(nums[i])
        }
        // if not, push target value into nums array, sort it so it can be in the correct index / order, then return the index of the newly inserted element that equals the target value
        else{
            nums.push(target)
            nums.sort((a,b) => a - b)
            
            return nums.indexOf(nums.find(x => x == target))
        }
    }
};