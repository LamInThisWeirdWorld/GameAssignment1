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