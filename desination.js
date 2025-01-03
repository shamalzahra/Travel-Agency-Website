/* Client slider functionality */
document.addEventListener("DOMContentLoaded", () => {
    const ones = document.querySelectorAll(".one");
    const prevv = document.getElementById("clientpre");
    const forward = document.getElementById("clientfor");
    const total = document.querySelector(".total"); // Assuming `.total` is a single element
    let currentIndex = 0; // Start index for visible cards
    const visibleCount = 4; // Number of cards to show at a time

    // Function to update visible cards
    function updateCards() {
        ones.forEach((one, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCount) {
                one.classList.add("visible");
            } else {
                one.classList.remove("visible");
            }
        });
    }

    // Function to handle background image change on click
    ones.forEach((one) => {
        one.addEventListener("click", () => {
            const back = window.getComputedStyle(one).backgroundImage;
            if (total) {
                total.style.backgroundImage = back;
                total.classList.add("totalcla")
            }
        });
    });

    // Function to show the previous set of cards
    function showPreviousSet() {
        currentIndex = (currentIndex - visibleCount + ones.length) % ones.length;
        updateCards();
    }

    // Function to show the next set of cards
    function showNextSet() {
        currentIndex = (currentIndex + visibleCount) % ones.length;
        updateCards();
    }

    // Initialize the slider
    updateCards();

    // Add event listeners for navigation buttons
    prevv.addEventListener("click", showPreviousSet);
    forward.addEventListener("click", showNextSet);
});
