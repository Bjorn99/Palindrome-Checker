const magicalwords = document.querySelector('#magicalword');
const subBtn = document.querySelector('#submit-btn');
const dispElm = document.querySelector('#display-message');




subBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const str = magicalwords.value;
  console.log(dispElm)
  if (str.replace(/[\W_]/g, "").toLowerCase() ===
  str
    .replace(/[\W_]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("")) {
    dispElm.style.color = '#0EF686';
    dispElm.textContent = `PALINDROME`;
    } else {
      dispElm.style.color = 'orange';
      dispElm.textContent =  `Oops! It's NOT A PALINDROME`;
    }
})

function success() {
  if(magicalwords.value==="") { 
             subBtn.disabled = true; 
         } else { 
             subBtn.disabled = false;
         }
     }
//Palindrome-checker using JS//

