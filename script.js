document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.elements.name.value.trim();
      const phone = form.elements.phone.value.trim();
      const email = form.elements.email.value.trim();

      if (!name || !phone || !email) {
        status.textContent = "Пожалуйста, заполните обязательные поля.";
        return;
      }

      status.textContent = "Заявка отправлена успешно. Мы свяжемся с вами в ближайшее время.";
      form.reset();
    });
  }
});
