const roles = [
  "Frontend Developer",
  "React & Next.js Developer",
  "UI Developer",
  "Full-Stack Developer",
];

const roleEl = document.getElementById("role-cycler");

if (roleEl) {
  let current = 0;

  const cycle = () => {
    current = (current + 1) % roles.length;

    roleEl.style.opacity = "0";
    roleEl.style.transform = "translateY(6px)";

    setTimeout(() => {
      roleEl.textContent = roles[current];
      roleEl.style.opacity = "1";
      roleEl.style.transform = "translateY(0)";
    }, 300);
  };

  roleEl.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  setInterval(cycle, 2800);
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);

sections.forEach((section) => observer.observe(section));

const toggles = document.querySelectorAll(".project-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    const body = toggle.nextElementSibling;

    // Collapse all others
    toggles.forEach((other) => {
      if (other !== toggle) {
        other.setAttribute("aria-expanded", "false");
        const otherBody = other.nextElementSibling;
        if (otherBody) otherBody.hidden = true;
      }
    });

    // Toggle this one
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    if (body) body.hidden = isExpanded;
  });
});
