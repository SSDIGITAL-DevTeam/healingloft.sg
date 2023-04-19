const parent = document.getElementById("parent");
const heading = document.getElementsByClassName("heading");
const text = document.getElementsByClassName("text");

parent.addEventListener("mouseover", () => {
    heading.style.display = "none";
    text.classList.remove("hidden");
});

parent.addEventListener("mouseout", () => {
    heading.style.display = "block";
    text.classList.add("hidden");
});
