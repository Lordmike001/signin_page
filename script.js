const EmailInput = document.getElementById("emailInput");
const BtnSignIn = document.getElementById("signInBtn");
const PasswordInp = document.querySelector("#passwordInp");

const accounts=[
    {email:"user@gmail.com",
        password:"User1234"
    },
    {email:"mike@gmail.com",
        password:"Mike1234"},
    {email:"victory@gmail.com",
        password:"Victory1234"}
]

const mediumPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function CheckEmail(event) {

  if (EmailInput.value === "") {
    event.preventDefault();
    alert("Email cannot be empty");

  } else if (PasswordInp.value === "") {
    event.preventDefault();
    alert("Password cannot be empty");

  } else if (!emailRegex.test(EmailInput.value)) {
    event.preventDefault();
    alert("Enter a valid email address");

  } else if (!mediumPasswordRegex.test(PasswordInp.value)) {
    event.preventDefault();
    alert("Password must contain uppercase, lowercase, a number, and be at least 8 characters");

  } else {

    const validLogin = accounts.some(account =>
      account.email === EmailInput.value &&
      account.password === PasswordInp.value
    );

    if (validLogin) {
      alert("Login successful");
    } else {
      event.preventDefault();
      alert("Incorrect email or password");

      EmailInput.value = "";
      PasswordInp.value = "";
    }
  }
}

BtnSignIn.addEventListener("click", CheckEmail);