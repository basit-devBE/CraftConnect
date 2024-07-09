

document.addEventListener("DOMContentLoaded", function() {
    const moreJobsButton = document.getElementById("more-jobs");
    const testElement = document.getElementById("test");
  
    moreJobsButton.addEventListener("click", function() {
      testElement.style.display = "none";
    });
  });

  


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
  

  document.querySelectorAll('.job-card').forEach(function(card) {
    card.addEventListener('click', function() {
      const title = card.getAttribute('data-title');
      const company = card.getAttribute('data-company');
      const type = card.getAttribute('data-type');
      const pay = card.getAttribute('data-pay');
      const description = card.getAttribute('data-description');
      const location = card.getAttribute('data-location');
  
      const applyWorkSection = document.getElementById('apply-job-section');
  
      applyWorkSection.innerHTML = `
        <div class="company-info">
          <h1>${title}</h1>
          <p>${company}</p>
          <p>${type}</p>
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
              <p>${type}</p>
            </div>
            <hr>
            <div class="details">
              <p>Job Description</p>
              <p>${description}</p>
            </div>
            <hr>
            <div class="details">
              <p>Job location</p>
              <p>${location}</p>
            </div>
          </div>
        </div>
      `;
  
      if (applyWorkSection.style.display == 'none' || applyWorkSection.style.display === '') {
        applyWorkSection.style.display = 'block';
      } else {
        applyWorkSection.style.display = 'none';
      }
    });
  });
  
  
