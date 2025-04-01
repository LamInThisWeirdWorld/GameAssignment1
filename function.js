const button = document.getElementById('button');
const firstMessage = "Hi, nice to meet you. How can I call you?";
button.addEventListener('click', function() {
    textPrinter('displayText', firstMessage, 50);
});

function textPrinter(destination, message, speed) {
    let index = 0;
    var letterDisplay = setInterval(function() {
        document.getElementById(destination).innerHTML += message.charAt(index);
        index++;
        if (index > textDisplayContent.length) {
            clearInterval(letterDisplay);
        }
    }, speed);
}


