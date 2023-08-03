document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function scrollToElement() {
  var elmnt = document.getElementById("contact");
  elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
}
