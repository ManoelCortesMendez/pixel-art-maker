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
    const clearButton = document.getElementById('clear');

    /*Declare functions*/
    // TODO: if I don't use input object, I shouldn't use table obj in fun
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
        table.innerHTML = ''; //Reset table to empty
        makeGrid(widthInputField.value, heightInputField.value);
    });
    /*Trigger listener on input color change*/
    colorPicker.addEventListener('input', function () {
        colorPicked = this.value;
        colorPickerContainer.style.background = colorPicked;
    });
    // TODO: Change listeners to call dedicated functions? Or leave as is?
    table.addEventListener('click', function (event) {
        if (event.target.nodeName === 'TD') {
            const cellClicked = event.target;
            cellClicked.style.background = colorPicked;
        }
    });
    clearButton.addEventListener('click', function() {
        for (const row of table.children) {
            for (const col of row.children) {
                col.style.background = "#FFFFFF";
            }
        }
    });
})();
