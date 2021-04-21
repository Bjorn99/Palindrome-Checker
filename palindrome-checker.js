const magicalwords = document.querySelector('#magicalword');
const subBtn = document.querySelector('#submit-btn');
const dispElm = document.querySelector('#display-message');

const functionName = (args) => {

}


subBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const str = magicalwords.value;
  const reversed = str.split('').reverse().join('');
  console.log(dispElm)
  if (str === reversed) {
    dispElm.style.color = '#0EF686';
    dispElm.textContent = `PALINDROME`;
    } else {
      dispElm.style.color = 'orange';
      dispElm.textContent =  `NOT PALINDROME`;
    }
})
//Palindrome-checker using JS//

