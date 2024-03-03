const check = () => {
  const usernameElement = document.getElementById("username");
  if (!usernameElement || usernameElement.value === "") {
    document.getElementById("labe").innerHTML =
      "<p>Could not find the username element or the username is empty.</p>";
    return;
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(usernameElement.value)) {
    document.getElementById("labe").innerHTML =
      "<p>Valid email address: " + usernameElement.value + "</p>";
  } else {
    document.getElementById("labe").innerHTML =
      "<p>Not a valid email address.</p>";
  }
  const passwordElement = document.getElementById("pwd");
  const repasswordElement = document.getElementById("repwd");

  if (
    passwordElement &&
    passwordElement.value &&
    (repasswordElement && repasswordElement.value) !== ""
  ) {
    const password = passwordElement.value;
    const repassword = repasswordElement.value;

    const passwordIsValid = validatePassword(password);

    if (passwordIsValid) {
      passwordElement.innerHTML = "<p>Valid password.</p>";
    } else {
      passwordElement.innerHTML =
        "<p>Invalid password. Please meet the requirements (e.g., minimum length, complexity).</p>";
    }
  } else {
    passwordElement.innerHTML =
      "<p>Password element not found or is empty.</p>";
  }
  if (password != repassword) {
    passwordElement.innerHTML = "<p> invalide password.</p>";
  }
};

// Replace with your actual password validation logic (e.g., using a function)
function validatePassword(password) {
  // Implement your password validation criteria here
  // (e.g., minimum length, character types, etc.)
  // return true/false;
}
