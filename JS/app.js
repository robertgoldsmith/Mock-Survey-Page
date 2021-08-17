console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.scrollTop);
// scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
// clientHeight is the inner height of the visible (onscreen)element, including padding
// scrollTop is the measurement of pixels that have been scrolled (offscreen) 

// ------------------------------------------------

const progressBar = document.querySelector(".progress-bar");


function getProgress() {
  let topPos = document.documentElement.scrollTop;
  let remaining = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let percentage = (topPos / remaining) * 100;
  
  progressBar.style.width = percentage + "%";
}


document.addEventListener("scroll", function() {
  getProgress();
});