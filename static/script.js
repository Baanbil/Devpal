function checkPalindrome() {
    // Get the input value from the text box
    const word = document.getElementById("input").value.trim().toLowerCase();

    // Reverse the input word
    const reverseWord = word.split("").reverse().join("");

    // Compare original word with its reversed version
   /* if (word === reverseWord) {
        document.getElementById("display").innerText = `${word} is a palindrome`;
        document.getElementById("display").style.color = "green"
    } else {
        document.getElementById("display").innerText = `${word} is not a palindrome`;
        document.getElementById("display").style.color = "red"
    }
}

function submit(){
  if(event.key === "Enter"){
    checkPalindrome();
  }
}*/

function toggleTheme(){
    const button = document.getElementById("button");
    if(button.innerText === "Dark"){ 
        button.innerText = "Light"; 
        document.getElementById("myH1").style.color = "khaki"
        document.getElementById("div").style.border = "32px solid khaki"
        document.getElementById("text").style.color = "khaki"
        button.style.border = "1px solid white"
        document.body.style.backgroundColor = "black";
    } else { 
        button.innerText = "Dark";
        document.body.style.backgroundColor = "khaki";
        document.getElementById("myH1").style.color = "black"
        document.getElementById("div").style.border = "32px solid black"
        document.getElementById("text").style.color = "black"
        button.style.border = "1px solid black"
    }
}