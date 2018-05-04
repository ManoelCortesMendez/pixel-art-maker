/*Use IIFE to avoid polluting global scope*/
(function () {
    /*Get elements*/
    const setSizeButton = document.getElementById('set-size-button');
    const widthInputField = document.getElementById('width-input-field');
    const heightInputField = document.getElementById('height-input-field');
    const table = document.getElementById('canvas');
    const colorPicker = document.getElementById('color-input');
    const colorPickerContainer = document.getElementById('container-color-input');
    let colorPicked = "#000000";

    /*Declare functions*/
    function makeGrid (aWidth, aHeight) {
        for (let i = 0; i < aHeight; i++) {
            const row = table.appendChild(document.createElement('tr'));
            for (let j = 0; j < aWidth; j++) {
                row.appendChild(document.createElement('td'));
            }
        }
    }

    /*Add event listeners*/
    setSizeButton.addEventListener('click', function () {
        makeGrid(widthInputField.value, heightInputField.value);
    });
    /*Trigger listener on input color change*/
    colorPicker.addEventListener('input', function () {
        colorPicked = this.value;
        colorPickerContainer.style.background = colorPicked;
    });
    
})();
