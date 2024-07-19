// Containers
const jobCards = document.querySelectorAll(".job-card");
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const titleNames = document.querySelectorAll(".job-card-title");
const allTitleNameArr = [];
const all = titleNames.forEach((title) => {
  return allTitleNameArr.push(title.innerHTML);
});

/////////////////////////////////////////////////////////////////////////////
// ----Search Button-----------------------

inputBox.addEventListener("keyup", function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    // console.log("hi");
    result = allTitleNameArr.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
  if (!result.length) {
    resultsBox.innerHTML = "";
  }
});

const display = function (result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "<li>";
  });
  resultsBox.innerHTML = "<ul>" + content.join("") + "<ul>";
};

const selectInput = function (list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = "";
};
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const moreJobsButton = document.getElementById("more-jobs");
  const testElement = document.getElementById("test");
});

const applyWorkSection = document.getElementById("apply-job-section");
document.querySelectorAll(".job-card").forEach(function (card) {
  // applyWorkSection.innerHTML = "";
  card.addEventListener("click", function (e) {
    // Selecting a specific job card
    const clicked = e.target.closest(".job-card");

    const jobCardTitle = clicked.querySelector(".job-card-title").textContent;
    const jobCardCompany = clicked
      .querySelector(".job-card-company")
      .textContent.trim();
    const jobCardSummary = clicked.querySelector(".summary").textContent.trim();
    const jobCardLocation = clicked
      .querySelector(".job-card-location")
      .textContent.trim();
    const jobCardType = clicked
      .querySelector(".job-card-type")
      .textContent.trim();
    const jobCardLevel = clicked
      .querySelector(".job-card-level")
      .textContent.trim();
    const jobCardFunction = clicked
      .querySelector(".job-card-function")
      .textContent.trim();
    const jobCardEducation = clicked
      .querySelector(".job-card-education")
      .textContent.trim();
    console.log(clicked);
    const pay = card.getAttribute("data-pay");
    applyWorkSection.style.display =
      applyWorkSection.style.display === "none" ? "block" : "none";

    applyWorkSection.innerHTML = `
      <div class="company-info">
        <h1>${jobCardTitle}</h1>
        <p>${jobCardCompany}</p>
        <p>${jobCardType}</p>
        <p>To apply, you have to create an account</p>
        <div class="job-card-footer">
          <a href="{% url 'apply' %}" ><button class="job-card-button">Apply now</button> </a> 
        </div>
      </div>
      <div class="work-description">
        <div>
          <h1>Job Details</h1>
          <div class="details">
            <p>Pay</p>
            <p>${pay}</p>
          </div>
          <div class="details">
            <p>Job Type</p>
            <p>${jobCardType}</p>
          </div>
          <hr>
          <div class="details">
            <p>Job Description</p>
            <p>${jobCardSummary}</p>
          </div>
          <hr>
          <div class="details">
            <p>Job location</p>
            <p>${jobCardLocation}</p>
          </div>
        </div>
      </div>
    `;
  });
});
