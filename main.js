// ===== MOBILE NAV TOGGLE =====
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("open");
    }
  });
}

// ===== SMOOTH SCROLL TO CONTACT =====
const scrollButtons = document.querySelectorAll(".js-scroll-contact");
const contactSection = document.querySelector("#contact");

scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== CALL NOW BUTTONS =====
const callButtons = document.querySelectorAll(".js-call-now");
callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "tel:+917250064934";
  });
});

// ===== YEAR IN FOOTER =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
