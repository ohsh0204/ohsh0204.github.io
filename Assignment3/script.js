window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // chainging the color  if the section is now watched
    if (
      scrollPosition > sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      section.style.opacity = "1"; // changed opacity
    } else {
      section.style.opacity = "0.8"; // base opacity
    }
  });
});
// to make opacity based transition effect
