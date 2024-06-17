let pwdBox = document.querySelector(".pwd-box");
let slider = document.querySelector(".slider");
let sliderValue = document.querySelector(".slider-value");
let pwdGenBtn = document.querySelector(".pwd-gen-btn");
let lowerCase = document.querySelector("#lowercase");
let upperCase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let copyIcon = document.querySelector("#copy-icon");

//line 7 defaults to 8 when not sliding and when sliding event listener change the value
sliderValue.innerHTML = slider.value;
slider.addEventListener("input", () => {
  sliderValue.innerHTML = slider.value;
  lowerCase.checked = false;
  upperCase.checked = false;
  numbers.checked = false;
  symbols.checked = false;
});

pwdGenBtn.addEventListener("click", () => {
  if (
    !lowerCase.checked &&
    !upperCase.checked &&
    !numbers.checked &&
    !symbols.checked
  ) {
    alert("Please select at least one checbox to generate a password!!");
  } else {
    pwdBox.value = generatePassword();
  }
});

let lowerChars = "abcdefghijklmopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbersChars = "0123456789";
let symbolsChars = "!@#$%^&*()_+~|?/+";

function generatePassword() {
  let password = ""; // to store final password
  let allChars = ""; // to store intermediate password

  allChars += lowerCase.checked ? lowerChars : "";
  allChars += upperCase.checked ? upperChars : "";
  allChars += numbers.checked ? numbersChars : "";
  allChars += symbols.checked ? symbolsChars : "";

  for (i = 1; i <= slider.value; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return password;
}

copyIcon.addEventListener("click", () => {
  if (pwdBox.value != "" || pwdBox.value.length >= 1) {
    navigator.clipboard.writeText(pwdBox.value);
    copyIcon.innerHTML = "check";
    copyIcon.title = "Password Copied";
    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "Copy to clipboard";
    }, 1000);
  }
});
