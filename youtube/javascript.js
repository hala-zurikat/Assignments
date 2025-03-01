const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if dark mode is already set
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save user preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});
