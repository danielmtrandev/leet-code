// Given a string s, find the length of the longest substring without repeating characters.


// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    //     current longest substring
        let longest = 0;
    //     start of current substring
        let start = 0;
    //     hashmap to keep track of characters in the current substring
        let hashMap = {};
        for(let i = 0; i < s.length; i++){
            // console.log(s[i])
            let char = s[i]
            if(hashMap[char]){
    //             if character is already in the hashmap, then it has been encountered before
    //             that means we need to update the start of the current substring
                start = Math.max(start, hashMap[char]);
            }
    //      adds current character to the hashmap
            hashMap[char] = i + 1;
    //         updates the current longest substring
            longest = Math.max(longest, i - start + 1);
        }
        return longest;
        
    };