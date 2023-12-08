import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Lift from "./demos.js";
import { Link } from "react-router-dom";

function registerUser() {
  var user = document.getElementById("userName").value;
  var first = document.getElementById("firstName").value;
  var last = document.getElementById("lastName").value;

  var errorElement = document.getElementById("error");
  var successElement = document.getElementById("success");

  // Check if any field is empty
  if (user === "" || first === "" || last === "") {
    errorElement.textContent = "Cannot leave these fields empty";
    errorElement.style.color = "red";
    return false;
  }

  // Perform additional validation or registration logic as needed

  // If all checks pass, display success message and clear input fields
  successElement.textContent = "Registration successful!";
  errorElement.textContent = "";
  document.getElementById("userName").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";

  // Optionally, you can redirect to another page after successful registration
  return true;
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/new-account">Account</Link>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Lift />
    </div>
  );
};

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
