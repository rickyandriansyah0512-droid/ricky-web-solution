// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuToggle.innerHTML = "✕";
  } else {
    menuToggle.innerHTML = "☰";
  }
});

// AUTO CLOSE MENU MOBILE
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.innerHTML = "☰";
  });
});

// ACTIVE NAVBAR ON SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.style.background = "rgba(2,6,23,0.92)";
    navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,0.35)";
  } else {
    navbar.style.background = "rgba(2,6,23,0.78)";
    navbar.style.boxShadow = "none";
  }
});

// SMOOTH REVEAL ANIMATION
const revealElements = document.querySelectorAll(
  ".service-card, .portfolio-card, .feature-item, .process-card, .testimonial-card, .faq-item, .contact-card"
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 80) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// RATING SYSTEM
const ratingButtons = document.querySelectorAll(
  "#ratingStars button"
);

let selectedRating = 0;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = button.dataset.rating;

    ratingButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    for (let i = 0; i < selectedRating; i++) {
      ratingButtons[i].classList.add("active");
    }
  });
});

// FORM SUBMIT
const ratingForm = document.getElementById("ratingForm");
const ratingResult = document.getElementById("ratingResult");

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;

  if (selectedRating === 0) {
    alert("Silakan pilih rating terlebih dahulu.");
    return;
  }

  ratingResult.innerHTML =
    `Terima kasih <strong>${nama}</strong>! ` +
    `Penilaian <strong>${selectedRating} bintang</strong> berhasil dikirim.`;

  ratingForm.reset();

  ratingButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  selectedRating = 0;
});

// TYPING EFFECT HERO
const heroTitle = document.querySelector(".hero h1 span");

const texts = [
  "Bisnis Modern Anda",
  "Website Premium",
  "Digital Branding",
  "Company Profile",
  "Landing Page Modern"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  heroTitle.textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      erase();
    }, 1800);

    return;
  }

  setTimeout(type, 90);
})();

function erase() {
  letter = currentText.slice(0, --index);

  heroTitle.textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 300);
    return;
  }

  setTimeout(erase, 45);
}

// COUNTER ANIMATION
const counters = document.querySelectorAll(".hero-stats strong");

let counterStarted = false;

function runCounter() {
  if (counterStarted) return;

  counters.forEach((counter) => {
    const text = counter.innerText;

    if (!isNaN(parseInt(text))) {
      const target = parseInt(text);
      let current = 0;

      const updateCounter = () => {
        current += 2;

        if (current >= target) {
          counter.innerText = target + "%";
        } else {
          counter.innerText = current + "%";
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    }
  });

  counterStarted = true;
}

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".hero-stats");

  if (!statsSection) return;

  const top = statsSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    runCounter();
  }
});

// FAQ AUTO CLOSE
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      faqItems.forEach((other) => {
        if (other !== item) {
          other.open = false;
        }
      });
    }
  });
});

// PARALLAX HERO EFFECT
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const floatingCards = document.querySelectorAll(".floating-card");

  floatingCards.forEach((card, index) => {
    const speed = (index + 1) * 0.08;
    card.style.transform =
      `translateY(${scrollY * speed}px)`;
  });
});

// LOADING SCREEN
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// PREVENT RIGHT CLICK
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// PREVENT F12
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.shiftKey && e.key === "J") ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});

console.log(
  "%cRicky Web Solution",
  "color:#38bdf8;font-size:24px;font-weight:bold;"
);

console.log(
  "%cWebsite Loaded Successfully",
  "color:#22c55e;font-size:14px;"
);