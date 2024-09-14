const magicalwords = document.querySelector('#magicalword');
const subBtn = document.querySelector('#submit-btn');
const dispElm = document.querySelector('#display-message');


// Funny messages for non-palindromes
const funnyMessages = [
  "That's not a palindrome! It’s more like a 'palin-nope'.",
  "Oops! This word is not a palindrome. It’s a 'no-lindrome'!",
  "Not a palindrome! It’s just a regular word, like 'banana'!",
  "Yikes! This one is definitely not a palindrome. It's a 'palin-don't'!",
  "Not a palindrome! It's as confused as a chameleon in a bag of Skittles!",
  "This word is not a palindrome! It’s more like a 'palin-don’t-try-again'!",
  "Sorry, but that’s not a palindrome. It’s a 'palin-uh-oh'!",
  "Not a palindrome! It’s just a word that forgot how to mirror itself!",
  "This word is a 'palin-what-was-I-thinking'!",
  "Not a palindrome! It’s like a boomerang that forgot how to come back!",
  "Oops! This word is a 'palin-why-not' instead of a palindrome!",
  "Not a palindrome! It’s more like a 'palin-what-is-this'!",
  "Sorry, but that’s not a palindrome. It’s a 'palin-where-did-it-go'!",
  "Not a palindrome! It’s like a pizza without toppings—just plain wrong!",
  "Oops! This word is a 'palin-why-bother' instead of a palindrome!",
  "Not a palindrome! It’s like a cat trying to bark!",
  "This word is a 'palin-what-a-mess'!",
  "Oops! This word is a 'palin-why-so-serious' instead of a palindrome!",
  "Not a palindrome! It’s as lost as a sock in the laundry!",
  "This word is a 'palin-try-again-later'!"
];



subBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const str = magicalwords.value.trim();
  const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
  const isPalindrome = cleanedStr === cleanedStr.split("").reverse().join("");
  
  if (isPalindrome) {
    dispElm.style.color = '#0EF686';
    dispElm.textContent = `PALINDROME`;
  } else {
    dispElm.style.color = '#8E0E41';
    // Select a random funny message from the array
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    dispElm.textContent = randomMessage;
  }
});

function success() {
  if (magicalwords.value === "") { 
             subBtn.disabled = true; 
         } else { 
             subBtn.disabled = false;
         }
     }
//Palindrome-checker using JS//

// Enable button on input change
magicalwords.addEventListener('input', success)