// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });
});
