document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.hidden = false;

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("open");
}

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("open", !expanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});

const mobileViewport = window.matchMedia("(max-width: 760px)");
mobileViewport.addEventListener("change", closeMenu);

const filters = document.querySelector(".project-filters");
const projectCards = document.querySelectorAll(".project-card");
const projectStatus = document.querySelector("#project-status");
filters.hidden = false;

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  filters.querySelectorAll("button").forEach((filter) => {
    const selected = filter === button;
    filter.classList.toggle("active", selected);
    filter.setAttribute("aria-pressed", String(selected));
  });

  let visibleCount = 0;
  projectCards.forEach((card) => {
    const visible = button.dataset.filter === "all" || card.dataset.category === button.dataset.filter;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  projectStatus.textContent = `${visibleCount} ${visibleCount === 1 ? "project" : "projects"} shown.`;
});

if ("IntersectionObserver" in window) {
  const sectionLinks = navLinks.querySelectorAll('a[href^="#"]');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });

  document.querySelectorAll("main > section[id]").forEach((section) => {
    sectionObserver.observe(section);
  });
}
