

// sticky header
const siteHeader = document.querySelector(".site-header");
function stickyOnScroll() {
  if (window.scrollY >= siteHeader.offsetHeight) {
    siteHeader.classList.add("sticky-header");
    document.body.style.paddingTop = `${siteHeader.offsetHeight}px`;
  } else {
    siteHeader.classList.remove("sticky-header");
    document.body.style.paddingTop = null;
  }
}

// Menu toggle
const menuToggle = document.querySelector('#menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

function menuFn() {
  if (document.body.classList.contains('body-menu-open')) {
    document.body.classList.remove('body-menu-open')
    primaryNav.style.paddingTop = null;
  } else {
    document.body.classList.add('body-menu-open')
    primaryNav.style.paddingTop = `${siteHeader.offsetHeight}px`
  }
}

menuToggle.addEventListener("click", menuFn);

// menu nav click jump to section
const navLinks = document.querySelectorAll('.primary-nav-list a');
navLinks.forEach(navLink => {
  navLink.addEventListener('click', (e) => {
    menuFn()
  })
})

// accordion function
function accordionFn() {
  if (window.innerWidth < 1024) {
    const accordionTitles = document.querySelectorAll(".team-card-header");
    accordionTitles.forEach((accordionTitle, i) => {
      accordionTitle.addEventListener("click", () => {
        if (accordionTitle.parentElement.parentElement.classList.contains("is-open")) {
          accordionTitle.parentElement.parentElement.classList.remove("is-open");
          accordionTitle.nextElementSibling.style.maxHeight = null
        } else {
          const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
          accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
            accordionTitleWithIsOpen.classList.remove('is-open')
            accordionTitleWithIsOpen.querySelector('.team-card-body').style.maxHeight = null
          });
          accordionTitle.parentElement.parentElement.classList.add("is-open");
          accordionTitle.nextElementSibling.style.maxHeight = `${accordionTitle.nextElementSibling.scrollHeight}px`
        }
      });
    });
  }
}

// Apply for window scroll
window.addEventListener("scroll", function () {
  stickyOnScroll()
});

// Apply for window resize
window.addEventListener("resize", function () {
  accordionFn()
});

// Apply for window load
window.addEventListener("DOMContentLoaded", function () {
  accordionFn()
});

