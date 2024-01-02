const options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    removeStyles();
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
    // console.log(e.target.parentNode.firstElementChild);
    console.log(e.target);

    if (
      e.target == option.firstElementChild ||
      e.target == option ||
      e.target == option.lastElementChild
    ) {
      option.firstElementChild.classList.add("grayscale");
    }
  });
});

const removeStyles = () => {
  options.forEach((option) => {
    option.classList.remove("active");
    option.firstElementChild.classList.remove("grayscale");
  });
};
