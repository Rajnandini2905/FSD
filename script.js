// Simple hover active effect (optional)
const cards = document.querySelectorAll(".info-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});
// Optional: Card click animation or future expansion
document.querySelectorAll(".portfolio-card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.98)";
    setTimeout(() => {
      card.style.transform = "translateY(-8px)";
    }, 150);
  });
});
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    msg.style.color = "red";
    msg.textContent = "Please fill in all fields.";
  } else {
    msg.style.color = "green";
    msg.textContent = "Thank you! Your message has been sent.";
    form.reset();
  }
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change icon
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.classList.remove("bi-moon");
    themeToggle.classList.add("bi-sun");
  } else {
    themeToggle.classList.remove("bi-sun");
    themeToggle.classList.add("bi-moon");
  }
});

document.body.classList.toggle("dark-theme");
