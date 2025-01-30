const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "Images/Nature.jpg") {
    myImage.setAttribute("src", "Images/ocean.jpg");
  } else {
    myImage.setAttribute("src", "Images/Nature.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  if(!myName){
    setUserName();
  }
  else{
  myHeading.textContent = `Hello ${myName}, lets explore nature :)`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Experience Nature Virtually, User`;
}
myButton.addEventListener("click", function() {setUserName()});


