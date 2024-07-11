document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector(".menu-btn i");
  const navbarMenu = document.querySelector(".navbar .menu");
  const scrollBtn = document.querySelector(".scroll-up-btn");

  // Menu toggle
  document.querySelector(".menu-btn").addEventListener("click", function() {
      navbarMenu.classList.toggle("active");
      menuBtn.classList.toggle("active");
  });

  // Sticky Navbar
  window.addEventListener("scroll", function() {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("sticky", window.scrollY > 20);

      // Scroll-up button show/hide
      if (this.scrollY > 500) {
          scrollBtn.classList.add("show");
      } else {
          scrollBtn.classList.remove("show");
      }
  });

  // Scroll-up button functionality
  scrollBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
