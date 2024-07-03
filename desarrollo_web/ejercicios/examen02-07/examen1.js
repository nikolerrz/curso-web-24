document.querySelectorAll('.cuadrado').forEach(square => {
    square.addEventListener('mouseover', (event) => {
        document.body.style.backgroundColor = event.target.style.backgroundColor;
    });

    square.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = '';
    });
});
