// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    return s.split('').sort().join('') === t.split('').sort().join('') ? true : false
    
};

// OR

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    let hashMap = {};
//     create hashmap to keep track of all characters and how many times they occur in the first input string, new encounter = 1, while previously encountered is + 1 
    for(let i = 0; i < s.length; i++){
        hashMap[s[i]] = hashMap[s[i]] + 1 || 1
    }
    
//     loop through second input, if hashmap doesn't contain a char of the second input string, then it is not an anagram
    for(let i = 0; i < t.length; i++){
        if(!hashMap[t[i]]){
            return false
        }
        hashMap[t[i]]--
    }
    return true;
};