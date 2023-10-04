var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  // TODO: Create user object from submissio
  const personSignUp = {
    name: {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim()
    },
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  }
  console.log("Person Signup: " + JSON.stringify(personSignUp));
  console.log("Name = " + personSignUp.name.firstName + " " + personSignUp.name.lastName);
  console.log("email = " + personSignUp.email);
  console.log("Password = " + personSignUp.password);
  // TODO: Set new submission to local storage 
  localStorage.setItem("personSignUp", JSON.stringify(personSignUp));
  const storedPerson = localStorage.getItem("personSignUp");
  console.log("Stored Person Signup: " + storedPerson);
  // console.log("Stored Name = " + storedPerson.name.firstName + " " + storedPerson.name.lastName);
  // console.log("Stored email = " + storedPerson.email);
  // console.log("Stored Password = " + storedPerson.password);

});
