document.getElementById('moveButton').addEventListener('click', function() {
    const movableDiv = document.getElementById('movableDiv');
    const divWidth = movableDiv.clientWidth;
    const containerWidth = document.querySelector('.container').clientWidth;

    let currentPosition = 0;
    const interval = setInterval(() => {
        if (currentPosition + divWidth < containerWidth) {
             movableDiv.style.left = currentPosition + 'px';
             currentPosition += 5;
          
        } else {
            clearInterval(interval);
        }
    }, 10);
});
