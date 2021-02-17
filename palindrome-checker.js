//Palindrome-checker using JS//
// 1. Read the checker string as parameter.//
function palindromeCheck(checker) {
  // 2. Convert the checker string as array.//
  checker_array = checker.split("")
  //3. Reverse the array and convert to string.//
  let checkerOutput = checker_array.reverse().join("");
  // 4. Compare the checker string and the reversed string. If same, you have a paindrome.//
  if (checker = checkerOutput) {
    console.log(checker, "is palindrome");
  } else {
    console.log(checker, "is not palindrome");
  }
}

palindromeCheck("TENET");
palindromeCheck("MOON");
palindromeCheck("POP");
