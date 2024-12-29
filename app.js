let pre = document.getElementById("pre");
let forw = document.getElementById("forw");
let banner = document.querySelector(".banner");
let images = document.querySelectorAll(".banner2 img");

console.log("Elements selected:", pre, forw, banner, images);

let currentIndex = 0;

pre.addEventListener("click", () => {
    // Decrement the index and loop back if necessary
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    banner.style.backgroundImage = `url(${images[currentIndex].src})`;
    });

forw.addEventListener("click", () => {
    // Increment the index and loop back if necessary
    currentIndex = (currentIndex + 1) % images.length;
    banner.style.backgroundImage = `url(${images[currentIndex].src})`;
    
});
//sliderexplore worls wala
/*
document.addEventListener("DOMContentLoaded", () => {
    const sets = document.querySelectorAll(".set");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const itemsPerPage = 3;
    let currentIndex = 0;
  
    // Function to display the current set of divs
    function showCurrentSet() {
      sets.forEach((set, index) => {
        if (index >= currentIndex && index < currentIndex + itemsPerPage) {
          set.classList.add("active");
        } else {
          set.classList.remove("active");
        }
      });
    }
  
    // Next button functionality
    nextBtn.addEventListener("click", () => {
      currentIndex += itemsPerPage;
      if (currentIndex >= sets.length) {
        currentIndex = 0; // Reset to the start if we exceed the last set
      }
      showCurrentSet();
    });
  
    // Previous button functionality
    prevBtn.addEventListener("click", () => {
      currentIndex -= itemsPerPage;
      if (currentIndex < 0) {
        currentIndex = Math.max(0, sets.length - itemsPerPage); // Go to the last set
      }
      showCurrentSet();
    });
  
    // Initial display
    showCurrentSet();
  });
  */