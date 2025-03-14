document.addEventListener("DOMContentLoaded", function() {
  // Get theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check if user has previously selected a theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  
  // Toggle between themes when button is clicked
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'rain' ? 'office' : 'rain';
    
    // Update theme attribute
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
  });
});
