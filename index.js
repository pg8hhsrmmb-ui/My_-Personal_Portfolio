// 1. Show a greeting based on the current time
const greeting = document.querySelector("#greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning! Welcome to My Portfolio.";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon! Welcome to My Portfolio.";
} else {
  greeting.textContent = "Good evening! Welcome to My Portfolio.";
}

// 2. Update the progress bar and show the back-to-top button
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

// 3. Scroll smoothly to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 4. Highlight the navigation link when it is clicked
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// 5. Show the current year
document.querySelector("#current-year").textContent =
  new Date().getFullYear();