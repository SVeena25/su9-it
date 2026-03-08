const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (statusEl) {
      statusEl.textContent = "Thanks! I will reply within one business day.";
    }
    form.reset();
  });
}
