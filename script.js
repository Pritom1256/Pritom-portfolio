document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Activation Toggle Logic
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Dynamic Navbar Scroll Highlighting Module
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        currentSectionId = section.id;
      }
    });

    navItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Smooth Scroll Trigger Optimization
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // ─── Scroll Reveal Animation Engine (Bhaiyer original functionality) ───
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4.2; // Adjusted trigger threshold

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("active");
      }
    });
  };

  // Run on scroll and initial render setup
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // First call to show elements already visible on load
});