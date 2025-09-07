

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      status.textContent = "✅ Thank you! Your message has been sent.";
      form.reset();
    } else {
      status.textContent = "❌ Oops! There was a problem submitting your form.";
    }
  } catch (error) {
    status.textContent = "❌ Oops! Something went wrong.";
  }
});







    // Get all sections and nav links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // adjust for navbar height
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });


 
  const btn = document.getElementById("backToTop");
  window.onscroll = function () {
    btn.style.display = document.documentElement.scrollTop > 200 ? "block" : "none";
  };
  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });


