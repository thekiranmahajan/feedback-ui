const options = document.querySelectorAll(".option");
const container = document.getElementById("container");
const btn = document.getElementById("btn");
let feedback = "";

const removeStyles = () => {
  options.forEach((option) => {
    option.classList.remove("active");
    option.firstElementChild.classList.remove("grayscale");
  });
};
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    removeStyles();
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
    // console.log(e.target.parentNode.firstElementChild);
    // console.log(e.target);
    if (
      e.target == option.firstElementChild ||
      e.target == option ||
      e.target == option.lastElementChild
    ) {
      option.firstElementChild.classList.add("grayscale");
    }
    feedback = e.target.innerText || e.target.parentNode.innerText;
    // console.log(feedback);
  });
});

const submission = () => {
  let customPara = "";

  if (feedback === "CSS") {
    customPara =
      '"Why do CSS developers make good gardeners? Because they have a style for every element and know how to make things bloom beautifully!"';
  }
  if (feedback === "JavaScript") {
    customPara =
      '"Why do JavaScript developers prefer dark mode? Because light attracts bugs, but in the dark, their code shines!"';
  } else {
    customPara =
      '"Why did the HTML tag feel philosophical? Because it was always <span style="font-weight: bold;">&lt;em&gt;</span>phasizing the importance of being  <span style="font-weight: bold;">&lt;strong&gt;</span> in the structure of life!"';
  }

  if (feedback !== "") {
    container.innerHTML = ` <div
        style="
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 10px 15px;
        "
      >
        <p style="margin-bottom: 20px; text-align: center">Thank you for your valuable feedback</p>
        <strong
          style="
           
            padding: 10px 50px;
            display: flex;
            align-items: center;
          "
          >Feedback:${" "} ${feedback}
          <img
            style="height: 20px; margin-left: 10px"
            src="./images/${feedback}.png"
            alt=""
          />
        </strong>
        <div style="margin-top: 30px; width: 85%; text-align: justify">
                  <p>${customPara}</p>
          
        </div>
        <button style="margin-top: 20px" class="btn" id="btn" onclick=" location.reload()">Back</button>
      </div>`;
  }
};

btn.addEventListener("click", submission);
