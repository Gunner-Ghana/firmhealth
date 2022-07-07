"use-strict";
const featureIconButton = document.querySelectorAll(".feature-icon");

featureIconButton.forEach((selectedButton) => {
  selectedButton.addEventListener("click", function (e) {
    e.preventDefault();
    const clickedIcon = e.target;
    const featureSectionParent = clickedIcon.closest(".feature-section");
    const clickedParent = e.target.closest(".feature-first");
    const description = clickedParent.querySelector(".feature-description");

    const selectedElement = featureSectionParent.querySelector(
      ".feature-first-after-click"
    );

    // // const selectedElementDescription = selectedElement.querySelector(
    // //   ".feature-description"
    // // );
    //

    if (
      selectedElement !== null &&
      !selectedElement.isEqualNode(clickedParent)
    ) {
      // featureSectionParent.classList.remove("feature-after-click");
      // selectedElement.classList.remove("feature-first-after-click");
      // const selectedElementDescription = selectedElement.querySelector("p");
      // selectedElementDescription.classList.remove("show");
      // selectedElement.classList.remove("feature-first-after-click");
      // selectedElementDescription.remove("show");
      return;
    }
    //featureSectionParent.classList.remove("feature-before-click");
    featureSectionParent.classList.toggle("feature-after-click");
    // clickedParent.classList.remove("feature-first-before-click");
    clickedParent.classList.toggle("feature-first-after-click");
    description.classList.toggle("show");
    //console.log(featureSectionParent.classList[2]);
    if (clickedIcon.getAttribute("name") === "add-circle") {
      clickedIcon.setAttribute("name", "close-circle");
    } else {
      clickedIcon.setAttribute("name", "add-circle");
    }
  });
});
