"use-strict";

const bioButton = document.querySelectorAll(".team-bio");

bioButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    const siblingElement = event.target.nextElementSibling;
    // siblingElement.classList.remove("hide-bio");
    const elementIcon = event.target.querySelector(".bio-arrow");
    if (elementIcon.getAttribute("name") === "arrow-down-outline") {
      elementIcon.setAttribute("name", "arrow-up-outline");
    } else {
      elementIcon.setAttribute("name", "arrow-down-outline");
    }
    //console.log(elementIcon.getAttribute("name"));
    siblingElement.classList.toggle("show-bio");
  });
});
