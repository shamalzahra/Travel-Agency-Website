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
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;

  function updateCards() {
      cards.forEach((card, index) => {
          card.classList.remove("active", "next1", "prev");
          if (index === currentIndex) {
              card.classList.add("active");
          } else if (index === (currentIndex + 1) % cards.length) {
              card.classList.add("next1");
          } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
              card.classList.add("prev");
          }
      });
  }

  function showPreviousCard() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCards();
  }

  function showNextCard() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCards();
  }

  // Initialize the slider
  updateCards();

  // Add event listeners for buttons
  prevButton.addEventListener("click", showPreviousCard);
  nextButton.addEventListener("click", showNextCard);
});

/*client wala slider*/
document.addEventListener("DOMContentLoaded", () => {
    const ones = document.querySelectorAll(".one");
    const prevv = document.getElementById("clientpre");
    const forward = document.getElementById("clientfor");
    let currentIndex = 0; // Start index for visible cards
    const visibleCount = 4; // Number of cards to show at a time

    function updateCards() {
        ones.forEach((one, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCount) {
                one.classList.add("visible");
            } else {
                one.classList.remove("visible");
            }
        });
    }

    function showPreviousSet() {
        currentIndex = (currentIndex - visibleCount + ones.length) % ones.length;
        updateCards();
    }

    function showNextSet() {
        currentIndex = (currentIndex + visibleCount) % ones.length;
        updateCards();
    }

    // Initialize the slider
    updateCards();

    // Add event listeners for buttons
    prevv.addEventListener("click", showPreviousSet);
    forward.addEventListener("click", showNextSet);
});

  
