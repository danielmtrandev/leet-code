// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]


// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.


var groupAnagrams = function(strs) {
    //     create hashmap to track each anagram group
        let hashMap = {}
        for(let i = 0 ; i < strs.length; i++){
    //         split then sort to make the key value pairing easier to match for the conditional Ex: eat, tea, ate >>> 'a', 'e', 't' / 'a', 'e', 't' / 'a', 'e'. 't' 
            let key = strs[i].split('').sort();
    //         if hashmap doesn't contain key, create one with empty array value
            if(!hashMap[key]){
                hashMap[key] = [];
            }
    //         otherwise push the element into that current key's array
            hashMap[key].push(strs[i])
        }
        return Object.values(hashMap)
        
        // INPUT: ["eat","tea","tan","ate","nat","bat"]
        // console.log(hashMap):
        // {
        //     'a,e,t': [ 'eat', 'tea', 'ate' ],
        //     'a,n,t': [ 'tan', 'nat' ],
        //     'a,b,t': [ 'bat' ]
        // }
        // Object.values(hashMap):
        // [["eat","tea","ate"],["tan","nat"],["bat"]]

        
    };