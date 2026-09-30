// Get elements
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");

// a. Get input value when button is clicked [1]
greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  // c. If empty, display "Please enter your name" [1]
  if (name === "") {
    message.textContent = "Please enter your name";
  } else {
    // b. Display Hello, NAME inside paragraph [2]
    message.textContent = `Hello, ${name}`;
  }
});