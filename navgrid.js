function initializeViewMoreButtons() {
    const buttons = document.querySelectorAll('.view-more-btn');

    if (buttons.length === 0) {
        // If buttons don't exist yet, try again
        setTimeout(initializeViewMoreButtons, 100);
        return;
    }

    buttons.forEach(button => {
        // Check if this button already has a listener to avoid duplicates
        if (button.hasAttribute('data-initialized')) return;

        button.setAttribute('data-initialized', 'true');
        button.addEventListener('click', () => {
            const moreArticles = document.querySelector('.more-articles');

            if (!moreArticles) return;

            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                moreArticles.classList.add('hidden');
                button.textContent = 'View More';
                button.setAttribute('aria-expanded', 'false');
                moreArticles.setAttribute('aria-hidden', 'true');
            } else {
                moreArticles.classList.remove('hidden');
                button.textContent = 'View Less';
                button.setAttribute('aria-expanded', 'true');
                moreArticles.setAttribute('aria-hidden', 'false');
            }
        });
    });
}

// Try to initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeViewMoreButtons);

// Also try to initialize after a short delay in case content loads later
setTimeout(initializeViewMoreButtons, 500);