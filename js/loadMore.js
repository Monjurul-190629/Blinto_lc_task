window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.testimonial-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const cards = container.querySelectorAll('.testimonial-card');

    function initializeTestimonials() {
        if (window.innerWidth <= 600) {
            // Hide all cards after the 3rd one
            cards.forEach((card, index) => {
                if (index > 3) {
                    card.style.display = 'none';
                } else {
                    card.style.display = 'block';
                }
            });
            loadMoreBtn.style.display = 'inline-block'; // Show Load More button
        } else {
            // Show all cards on desktop
            cards.forEach(card => {
                card.style.display = 'block';
            });
            loadMoreBtn.style.display = 'none'; // Hide Load More button
        }
    }

    loadMoreBtn.addEventListener('click', () => {
        // Show all cards when Load More is clicked
        cards.forEach(card => {
            card.style.display = 'block';
        });
        loadMoreBtn.style.display = 'none'; // Hide Load More button
    });

    // Initialize on page load
    initializeTestimonials();

    // Re-initialize on window resize (mobile to desktop switching)
    window.addEventListener('resize', initializeTestimonials);
});

