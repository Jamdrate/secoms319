import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Lift from "./demos.js";
import App from "./App.js";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const confirmLogin = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var validuser = "";
    var validpass = "";

    //Checks if both username and password are empty
    if (username === "" && password === "") {
      document.getElementById("error").textContent =
        "Cannot leave these fields blank";
      error.style.color = "red";
      return false; //Prevent form submission

      //checks if either username or password is incorrect
    }
    if (username != validuser || password != validpass) {
      document.getElementById("error").textContent =
        "Wrong username or password";
      error.style.color = "red";
      return false; //Prevent form submission
    }

    //clears any existing error messages
    document.getElementById("error").textContent = "";
  };

  const registerUser = () => {
    var newuser = document.getElementById("username").value;
    var newpass = document.getElementById("password").value;
    var userName = document.getElementById("personName").value;

    //check if username and password meet requirements(password min length of 8)
    if (userName === "" || newpass === "" || newuser === "") {
      document.getElementById("error").textContent =
        "Cannot leave these fields empty";
      error.style.color = "red";
      return false;

      //checks if the password is at least 8 characters long
    }
    if (newpass.length < 8) {
      document.getElementById("error").textContent =
        "Password must be at least 8 characters long";
      error.style.color = "red";
      return false; //Prevent form submission
    }

    //if all checks pass, display success message and clears input fields
    document.getElementById("success").textContent = "Registration successful!";
    document.getElementById("error").textContent = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("personName").value = "";
    return true;
  };

  const backToLogin = () => {
    window.location.href = "./login.html";
  };

  return (
    <div>
      <h1>Titan Lifts</h1>
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <span id="error" style={{ color: "red" }}>
            {error}
          </span>
          <span id="success" style={{ color: "green" }}>
            {success}
          </span>
        </div>
        <br />
        <div>
          <button type="button" onClick={confirmLogin}>
            Enter
          </button>
          <button type="button" onClick={registerUser}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));

// function confirmLogin() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   var validuser = "";
//   var validpass = "";

//   //Checks if both username and password are empty
//   if (username === "" && password === "") {
//     document.getElementById("error").textContent =
//       "Cannot leave these fields blank";
//     error.style.color = "red";
//     return false; //Prevent form submission

//     //checks if either username or password is incorrect
//   }
//   if (username != validuser || password != validpass) {
//     document.getElementById("error").textContent = "Wrong username or password";
//     error.style.color = "red";
//     return false; //Prevent form submission
//   }

//   //checks if password is less than 8 characters long
//   // if (password.length < 8) {
//   //   document.getElementById("error").textContent="Password must be at least 8 characters long";
//   //   error.style.color ="red";
//   //   return false;   //prevent form submission
//   // }

//   //clears any existing error messages
//   document.getElementById("error").textContent = "";
// }

// function registerUser() {
//   var newuser = document.getElementById("username").value;
//   var newpass = document.getElementById("password").value;
//   var userName = document.getElementById("personName").value;

//   //check if username and password meet requirements(password min length of 8)
//   if (userName === "" || newpass === "" || newuser === "") {
//     document.getElementById("error").textContent =
//       "Cannot leave these fields empty";
//     error.style.color = "red";
//     return false;

//     //checks if the password is at least 8 characters long
//   }
//   if (newpass.length < 8) {
//     document.getElementById("error").textContent =
//       "Password must be at least 8 characters long";
//     error.style.color = "red";
//     return false; //Prevent form submission
//   }

//   //if all checks pass, display success message and clears input fields
//   document.getElementById("success").textContent = "Registration successful!";
//   document.getElementById("error").textContent = "";
//   document.getElementById("username").value = "";
//   document.getElementById("password").value = "";
//   document.getElementById("personName").value = "";
//   return true;
// }

// function backToLogin() {
//   window.location.href = "./login.html";
// }
