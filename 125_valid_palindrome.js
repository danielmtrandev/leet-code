// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


var isPalindrome = function(s) {
    // since s is a string input that could contain symbols other than letters;
    // we use regex as a reference point to replace any non-letters with spaces in newStr

    const regex = /[^A-Za-z0-9]/g;
    const newStr = s.replace(regex, "");
    let pali = newStr.split('').reverse().join('') 
    if(pali.toLowerCase() === newStr.toLowerCase()){
        return true
    }
    else{
        return false
    }
    console.log(pali)
};