document.addEventListener('DOMContentLoaded', () => {
    const likeIcons = document.querySelectorAll('.like-section i');

    likeIcons.forEach(likeIcon => {
        likeIcon.addEventListener('click', () => {
            const contador = likeIcon.nextElementSibling;
            let count = parseInt(contador.textContent);
            count++;
            contador.textContent = count;
        });
    });
});