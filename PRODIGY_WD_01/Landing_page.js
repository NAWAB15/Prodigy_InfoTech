document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return false;
  } 
  if (phone === "") {
    alert("please enter your phone number");
    return false;
  }

  if (email === "") {
    alert("Please enter your email.");
    return false;
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  } 

  if (message === "") {
    alert("Please enter your message.");
    return false;
  }

  // If all validations pass, you can submit the form or perform further actions
  alert("Form submitted successfully!");
  return true;
}

function isValidEmail(email) {
  // Basic email validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
