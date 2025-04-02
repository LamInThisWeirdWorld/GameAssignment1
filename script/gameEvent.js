//when the start button was clicked
start.addEventListener('click', function() {
    if (start.classList.contains("active")) return; 
    start.classList.add("active");
    start.style.display = "none";
    // title.style.display = "none";
    textPrinter('displayText', firstMessage, 70, function() {
        choiceButtonContainer.style.display = "block";
        addButton("Someone who cares", "1");
        addButton("Assignment marker", "2");
    });
});