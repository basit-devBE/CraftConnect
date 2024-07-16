

document.addEventListener("DOMContentLoaded", function() {
    const moreJobsButton = document.getElementById("more-jobs");
    const testElement = document.getElementById("test");
  
    moreJobsButton.addEventListener("click", function() {
      testElement.style.display = "none";
    });
  });
  