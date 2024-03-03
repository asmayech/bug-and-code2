const check = () => {
    // 1. Retrieve username element and validate its existence & value:
    const usernameElement = document.getElementById("username");
    if (!usernameElement || usernameElement.value === "") {
      document.getElementById("labe").innerHTML = "<p>Could not find the username element or the username is empty.</p>";
      return; // Exit the function if username is invalid to prevent further checks
    }
  
    // 2. Define email regular expressio    n (consider using a more robust one):
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Updated regex
  
    // 3. Perform email validation and update message accordingly:
    if (emailRegex.test(usernameElement.value)) {
      document.getElementById("labe").innerHTML = "<p>Valid email address: " + usernameElement.value + "</p>";
    } else {
      document.getElementById("labe").innerHTML = "<p>Not a valid email address.</p>";
    }
   
  };
  