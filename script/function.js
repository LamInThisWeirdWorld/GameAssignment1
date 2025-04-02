const start = document.getElementById('start');
const choice = document.getElementsByClassName('choice');
const firstMessage = 'Hi, nice to meet you.\nWho are you?';
const firstExit = "Have a nice day";
const choiceButtonContainer = document.getElementById("choiceButtonContainer");
const title = document.getElementsByClassName("title");
// const restart = document.getElementById("restart");

//function to print the text letter by letter
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

//function to add a button on the fly
function addButton(choice, step) {
    let button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice");
    button.classList.add(step);
    choiceButtonContainer.appendChild(button);

    //respond when a button was clicked
    button.addEventListener('click', function() {
        choiceButtonContainer.style.display = 'none';
        if (button.classList.contains("2")) {
            textPrinter('displayText', firstExit, 100, function () {
                start.style.display = "block";
                start.innerHTML = "restart";
                start.classList.remove("active");
                choiceButtonContainer.innerHTML = "";
            })
        } else {
            
        };
    });
}


//Basically it gonna work like this, we would have a choice-tree choice that gonna lead to 
//different situation, at the moment i make 2 but we might have more than that.
//There would be some options that lead to the end of the choice-tree before it hit
//the end of the story, in that case we can restart the whole and play again. Or should
//i add a "rethink" button to go back to the previous step? I'm not sure how to do
//that just yet.

//during the "choice" we can both introduce our story as well as game mechanics? maybe? lol

//About the css part, i'm thinking about adding some animation for text. Making them appear
//blast or glitch for example (?). 

//We can make a JSON file to implement the storyline, it might include a list of choice 
//messages, and actions.

//maybe have to split this js into function and evenListener for a more "elegant" look



