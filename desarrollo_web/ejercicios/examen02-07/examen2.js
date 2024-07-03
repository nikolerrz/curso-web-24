document.getElementById('colorSelector').addEventListener('change', function() {
    const selectedColor = this.value;
    const colorBox = document.getElementById('colorBox');
    
    colorBox.style.backgroundColor = selectedColor;
    colorBox.value = capitalizeFirstLetter(selectedColor);
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
