const contents = document.querySelectorAll(".content");
// Skip to the final state
window.skipToEnd = function () {
    isSkipped = true; // Set the skip flag to true

    // Immediately hide the overlay
    overlay.style.opacity = "0";
    overlay.style.display = "none";

    // Immediately show all content
    contents.forEach((content) => {
        content.style.display = "block";
    });

    document.getElementById("skip-button").style.display = "none"; // Hide the skip button
};

function myFunction() {
var NAME = document.getElementById("NAME").value.trim(); // Trim whitespace
var text;

if (!NAME) {
  text = "You didn’t even try... Do you even care?";
} else if (NAME.toLowerCase() === "professor") {
  text = "Professor... You always had the answers. Why are you silent now? Tell me where he is!";
} else if (NAME.toLowerCase() === "god") {
  text = "God? If you’re listening, why won’t you help me find him?";
} else if (NAME.toLowerCase() === "angel") {
  text = "An angel? No... I don’t need hope. I need the truth.";
} else if (NAME.toLowerCase() === "demon") {
  text = "A demon? Maybe that’s all I am... just a shadow of something worse.";
} else if (NAME.toLowerCase() === "me" || NAME.toLowerCase() === "i") {
  text = "You? You don’t know what it’s like to lose someone like this.";
} else if (NAME.toLowerCase() === "brother") {
  text = "My brother... He’s out there. I can feel it. I just need to find him before it’s too late.";
} else if (NAME.toLowerCase() === "tom" || NAME.toLowerCase() === "anya" || NAME.toLowerCase() === "kate" || NAME.toLowerCase() === "david") {
text = "You think this is a game? You sit there, safe behind your screen, while I’m losing everything. Tell me... what gives you the right?";
} else if (NAME.toLowerCase() === "elliot") {
  text = "Yes, I’m Elliot. And I won’t stop until I find my twin brother.";
} else {
  text = `${NAME}, do you even exist? Or are you just another voice in my head?`;
}

// Add a slow typing effect for a more introspective feel
let demoElement = document.getElementById("demo");
demoElement.innerHTML = ""; // Clear previous text
let i = 0;

function typeWriter() {
  if (i < text.length) {
      demoElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 75); // Adjust typing speed here
  }
}

typeWriter();
}

function handleButtonClick() {
const button = document.getElementById("my-button");
button.disabled = true; // Disable the button
button.style.cursor = "not-allowed"; // Change cursor to indicate it's disabled
button.style.opacity = "0.5"; // Optional: Reduce opacity to show it's disabled

myFunction(); // Call your existing function

// Re-enable the button after 5 seconds (5000ms)
setTimeout(() => {
    button.disabled = false;
    button.style.cursor = "pointer"; // Restore cursor
    button.style.opacity = "1"; // Restore opacity
}, 10000);
}
setInterval(function() {
    var div = document.querySelector("#counter");
    var count = div.textContent * 1 - 1;
    div.textContent = count;
    if (count <= 0) {
        window.location.replace("errorPage.html");
    }
}, 1000);

setTimeout(() => {
    const overlay = document.getElementById("overlay");
    overlay.style.opacity = "0"; // Transition to 60% opacity
    overlay.style.display = "none";
    document.getElementById("skip-button").style.display = "none";
}, 5000);

setTimeout(() => {
     // Select all elements with the class "content"
    contents.forEach((content) => {
        content.style.display = "block";
    });
}, 4500);

// Function to navigate back to torch.html
function goBack() {
            window.location.href = "intro.html";
    }
    function goBack2() {
      window.location.href = "uDontExist.html";
}
function goBack3() {
  window.location.href = "uDontExist2.html";
}
function goBack4() {
  window.location.href = "uDontExist3.html";
}

function goNext() {
  window.location.href = "uDontExist2.html";
}
function goNext2() {
  window.location.href = "uDontExist3.html";
}
function goNext3() {
  window.location.href = "uDontExist4.html";
}
function goNext4() {
  window.location.href = "errorPage.html";
}

