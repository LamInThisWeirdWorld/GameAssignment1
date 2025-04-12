function textPrinter(destination, message, speed, callback) {
    let index = 0;
    const displayElement = document.getElementById(destination);
    displayElement.innerHTML = "";
    var letterDisplay = setInterval(function() {
        displayElement.textContent += message.charAt(index);
        index++;
        if (index >= message.length) {
            clearInterval(letterDisplay);
            if (callback) callback();
        }
    }, speed);
}

let start = document.getElementById("start");
