let menu = document.querySelector(".menu-wrapper");
let OpenMobleMenu = document.querySelector(".toggle");
let closeMoblieMenuBtn = document.querySelector(".close");
let link = document.querySelectorAll(".menu-item");
const scrollUp = document.querySelector("#scroll-up");

function openMenu() {
  menu.classList.add("open");
}

function closeMenu() {
  menu.classList.remove("open");
}

//show up function
function scrollup() {
  if (scrollY >= 350) {
    scrollUp.classList.add("show-scroll-up");
  } else {
    scrollUp.classList.remove("show-scroll-up");
  }
}

OpenMobleMenu.addEventListener("click", openMenu);
closeMoblieMenuBtn.addEventListener("click", closeMenu);
link.forEach((linkPath) => {
  linkPath.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", scrollup);

// Animation using Gsap
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".trigger-animation");

// sections.forEach((section, index) => {
//   ScrollTrigger.create({
//     trigger: section, // Element that triggers the animation
//     start: "top 20%",
//     end: "top 80%",
//     toggleActions: "play none none none",
//     markers: true, // Show markers for debugging
//     scrub: 1,
//   });
// });

sections.forEach((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
      // markers: true,
      // scrub: false, // Optional: smooth scrubbing of the animation
    },
  });

  tl.to(".left-part", { y: 0, opacity: 1, duration: 1 }, "+=1");
  tl.to(".hero-dish", { y: 0, opacity: 1, duration: 1 }, "-=1");
  tl.to(".burger-image", { y: 0, opacity: 1, duration: 1 }, "-=1");
  tl.to(".hero-burger", { y: 0, opacity: 1, duration: 1 });
  tl.to(".home-ingredient", { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
  tl.to(".recipe-image", { x: 0, opacity: 1, duration: 1 }, "+=1");
  tl.to(".recipe-data", { x: 0, opacity: 1, duration: 1 }, "-=1");
  tl.to(".burger-box", { scale: 1, opacity: 1, duration: 1, stagger: 0.2 });
  tl.to(".contact-box", { opacity: 1, duration: 1 });
});
