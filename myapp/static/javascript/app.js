// Containers
const jobCards = document.querySelectorAll(".job-card");

// const jobHearder = document

// classes for the job card
// const jobCardTitle = document.querySelector(".job-card-title");

document.addEventListener("DOMContentLoaded", function () {
  const moreJobsButton = document.getElementById("more-jobs");
  const testElement = document.getElementById("test");

  // moreJobsButton.addEventListener("click", function () {
  //   testElement.style.display = "none";
  // });
});

// jobCards.forEach(function (jobCard) {
//   jobCard.addEventListener("click", function (e) {
//     const clicked = e.target.closest(".job-lists");
//     console.log(clicked);

//   });
// });

// document.querySelectorAll('.job-card').forEach(function(card) {
//   const title = card.querySelector('.job-card-title').textContent.trim();
//   const company = card.querySelector('.job-card-company').textContent.trim();
//   const type = card.querySelector('.job-card-type').textContent.trim();
//   const pay = card.querySelector('.job-card-pay').textContent.trim();
//   const description = card.querySelector('.work-summary .summary p').textContent.trim();
//   const location = card.querySelector('.job-card-location').textContent.trim();

//   card.setAttribute('data-title', title);
//   card.setAttribute('data-company', company);
//   card.setAttribute('data-type', type);
//   card.setAttribute('data-pay', pay);
//   card.setAttribute('data-description', description);
//   card.setAttribute('data-location', location);
// });

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

    // const
    // if (again) console.log("hi");
    // const Title = e.target.closest("job-card-title");
    console.log(clicked);

    // const title = jobCardTitle;
    // console.log(title);
    // const company = jobCardCompany;
    // console.log(company);
    // const type = card.getAttribute("data-type");
    const pay = card.getAttribute("data-pay");
    // const description = card.getAttribute("data-description");
    // const location = card.getAttribute("data-location");
    // if (
    //   applyWorkSection.style.display == "none" ||
    //   applyWorkSection.style.display === ""
    // ) {
    //   applyWorkSection.style.display = "block";
    // } else {
    //   applyWorkSection.style.display = "none";
    // }

    // applyWorkSection.style.display=="none" ? "block" : "none";
    applyWorkSection.style.display =
      applyWorkSection.style.display === "none" ? "block" : "none";

    applyWorkSection.innerHTML = `
      <div class="company-info">
        <h1>${jobCardTitle}</h1>
        <p>${jobCardCompany}</p>
        <p>${jobCardType}</p>
        <p>To apply, you have to create an account</p>
        <div class="job-card-footer">
          <button class="job-card-button">Apply now</button>
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
