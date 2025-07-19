document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.closest('.articles-section');
            const moreArticles = section ? section.querySelector('.more-articles') : null;

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
});