// 1. Show a greeting based on the current time
const greeting = document.querySelector("#greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning ! Welcome to KAREN ONG XIN TZE portfolio.";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon ! Welcome to KAREN ONG XIN TZE portfolio.";
} else {
  greeting.textContent = "Good evening ! Welcome to KAREN ONG XIN TZE portfolio.";
}

// 2. Switch between light and dark themes
const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Use light theme";
  } else {
    themeButton.textContent = "Use dark theme";
  }
});

// 3 and 4. Update the progress bar and show the back-to-top button
const progressBar = document.querySelector("#progress-bar");
const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  const pageHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent =
    pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;

  progressBar.style.width = scrollPercent + "%";

  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

// Scroll smoothly to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 5. Highlight the navigation link when it is clicked
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});