//back to top
const button = document.getElementById('back-to-top-button');
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

// Show/hide the button based on the user's scroll position
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 300) {
        // Show the button when user scrolls down 300px from the top
        button.style.display = 'block';
    } else {
        // Hide the button when user is at the top
        button.style.display = 'none';
    }
});
button.addEventListener('click', scrollToTop);
