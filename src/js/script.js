document.addEventListener("DOMContentLoaded", function () {
  // Create raindrops only for the rain theme
  function createRaindrops() {
    const rainContainer = document.querySelector(".rain");
    if (!rainContainer) return;
    
    // Clear existing raindrops
    rainContainer.innerHTML = '';
    
    const numDrops = 50; // Adjust the number of raindrops as needed

    for (let i = 0; i < numDrops; i++) {
      const drop = document.createElement("div");
      drop.classList.add("raindrop");

      // Random horizontal position (0% to 100%)
      drop.style.left = Math.random() * 100 + "%";

      // Random animation duration between 0.5s and 1.5s
      const duration = Math.random() * 1 + 0.5;
      drop.style.animationDuration = duration + "s";

      // Randomize the animation delay so drops don't fall in sync
      drop.style.animationDelay = Math.random() * 5 + "s";

      // Random raindrop height between 10px and 20px
      const dropHeight = Math.random() * 10 + 10;
      drop.style.height = dropHeight + "px";

      rainContainer.appendChild(drop);
    }
  }

  // Initial creation
  createRaindrops();

  // Recreate raindrops when theme changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'data-theme') {
        if (document.documentElement.getAttribute('data-theme') === 'rain') {
          createRaindrops();
        }
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });
});
