// Function to show the selected page and hide others
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(pageId).classList.add('active');

    // Scroll to top of the page
    window.scrollTo(0, 0);
}

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your order! We will contact you shortly to confirm the details.');
    this.reset();
});

// Set minimum date for order form to today
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }
});