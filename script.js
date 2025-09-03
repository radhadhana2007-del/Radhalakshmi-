// Scroll Animation

const sections = document.querySelectorAll("section");

const revealOnScroll = () => {

  sections.forEach(section => {

    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {

      section.classList.add("show");

    }

  });

};

window.addEventListener("scroll", revealOnScroll);

// Run once on load

revealOnScroll();