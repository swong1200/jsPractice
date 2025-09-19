// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
function reverseNum(num) {
  let res = '';
  const str = num.toString();
  for (const char of str) {
    res = char + res;
  }
  return Number(res);
}

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

function palindrome(str) {
  let i = 0,
    j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

function allCombos(str) {
  const res = [];

  const helper = (cur, str) => {
    if (str.length < 1) {
      if (cur.length > 0) {
        res.push(cur);
      }
      return;
    }
    const curStr = str.slice(1);
    console.log(curStr);
    helper(cur + str[0], curStr);
    helper(cur, curStr);
  };

  helper('', str);
  return res;
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabetical(str) {
  return str.split('').sort().join('');
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter
// of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
function firstUC(str) {
  const arr = str.split(' ');
  let res = '';

  for (let i = 0; i < arr.length; i++) {
    const first = arr[i][0].toUpperCase();
    const rest = arr[i].slice(1);
    if (i === arr.length - 1) {
      res += first + rest;
    } else {
      res += first + rest + ' ';
    }
  }

  return res;
}

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

function longest(str) {
  let res = '';
  const arr = str.split(' ');

  for (const word of arr) {
    if (word.length > res.length) {
      res = word;
    }
  }

  return res;
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

function countVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (const char of str) {
    if (vowels.has(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function primeCheck(num) {
  const half = Math.floor(num / 2);

  for (let i = half; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number,
// string, and undefined.

function findType(arg) {
  return typeof arg;
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrixMN(matrix) {
  return [matrix.length, matrix[0].length];
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4
function secondHighestLowest(arr) {
  const low = 0,
    high = arr.length - 1;
  const sorted = arr.sort((a, b) => a - b);

  return [sorted[low + 1], sorted[high - 1]];
}

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal
// to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and
// 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1
// + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by
// the perfect numbers 496 and 8128.
function isPerfect(num) {
  const half = Math.floor(num / 2);
  const divisors = new Set();

  for (let i = half; i > 0; i--) {
    if (num % i === 0) {
      divisors.add(i);
    }
  }

  const sum = [...divisors].reduce((acc, curVal) => acc + curVal);
  return num === sum;
}

// 13. Write a JavaScript function to compute the factors of a positive integer.
function factors(num) {
  const half = Math.floor(num / 2);
  const factorSet = new Set();

  for (let i = half; i > 0; i--) {
    if (num % i === 0) {
      factorSet.add(i);
    }
  }

  return [...factorSet];
}

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1
function amountToCoins(amount) {
  const coins = [25, 10, 5, 2, 1];
  const res = [];
  let i = 0;
  let remaining = amount;

  while (remaining > 0 && i < coins.length) {
    if (coins[i] <= remaining) {
      res.push(coins[i]);
      remaining = remaining - coins[i];
    }

    if (coins[i] > remaining) {
      i++;
    }
  }
  return res;
}

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.
function bToThePowerOfN(b, n) {
  return b ** n;
}

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "theuroouoertheo"
function uniqueChars(str) {
  // return the string with the unique characters removed
  const charMap = {};
  let newStr = '';

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]] !== 1) {
      newStr += str[i];
    }
  }

  return newStr;
}

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified
// string.
function numberOfChars(str) {
  const charMap = {};
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it
// finds the desired value.

// assumes the array is sorted and returns the index of the target
function binarySearch(nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      return mid;
    } else {
      if (target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
}

// 19. Write a JavaScript function that returns array elements larger than a number.

function larger(arr, target) {
  const res = [];

  for (const el of arr) {
    if (el > target) {
      res.push(el);
    }
  }

  return res;
}

// 20. Write a JavaScript function that generates a string id (specified length) of random
// characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function password(len) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let res = '';

  for (let i = 0; i < len; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    res += chars[randomNumber];
  }

  return res;
}

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]
function allSubsets(array, len) {
  const res = [];

  const helper = (start, ss) => {
    if (ss.length === len) {
      res.push([...ss]);
      return;
    }

    for (let i = start; i < array.length; i++) {
      ss.push(array[i]);
      helper(i + 1, ss);
      ss.pop();
    }
  };

  helper(0, []);
  return res;
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the
// function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3
function letterCounter(str, letter) {
  let count = 0;

  for (const char of str) {
    if (char === letter) {
      count++;
    }
  }

  return count;
}

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'
function firstNotRepeatedChar(str) {
  const charMap = {};
  let first = null;

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) {
      charMap[str[i]].push(i);
    } else {
      charMap[str[i]] = [i];
    }
  }

  for (const key in charMap) {
    if (charMap[key].length === 1) {
      if (first === null) {
        first = charMap[key][0];
      } else {
        first = Math.min(first, charMap[key][0]);
      }
    }
  }

  return str[first];
}

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestCountryName(arr) {
  let longestName = null;
  for (const country of arr) {
    if (longestName === null) {
      longestName = country;
    } else {
      if (country.length > longestName.length) {
        longestName = country;
      }
    }
  }
  return longestName;
}

// 26. Write a JavaScript function to find longest substring in a given string without repeating
// characters.
function longestSubStr(str) {
  let l = 0;
  const set = new Set();
  let count = 0;
  let res;

  for (let r = 0; r < str.length; r++) {
    if (set.has(str[r])) {
      // while loop to move l
      while (l < r) {
        if (str[l] === str[r]) {
          l++;
          break;
        } else {
          // need to remove chars from set
          set.delete(str[l]);
          l++;
        }
      }
    } else {
      set.add(str[r]);
      if (r - l + 1 > count) {
        count = r - l + 1;
        res = str.slice(l, r + 1);
      }
    }
  }

  return res;
}

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or
// longest symmetric factor problem is the problem of finding a maximum-length contiguous
// substring of a given string that is also a palindrome. For example, the longest palindromic
// substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be
// unique; for example, in the string "abracadabra", there is no palindromic substring with length
// greater than three, but there are two palindromic substrings with length three, namely, "aca"
// and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is,
// all substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.

function longestPal(str) {
  let count = 0;
  let longest;
  let store = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        store.push(str.slice(i, j + 1));
      }
    }
  }

  for (const word of store) {
    if (palindrome(word)) {
      if (word.length > count) {
        count = word.length;
        longest = word;
      }
    }
  }

  return longest;
}
console.log(longestPal('abracadabra'));
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function functionUser(fn, data) {
  return fn(data);
}

// 29. Write a JavaScript function to get the function name.
function getName() {
  return getName.name;
}
