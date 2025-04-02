fetch('choice_questions.json')
  .then(response => response.json())
  .then(data => {
    let currentStep = 'start';
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');

    function displayStep(step) {
      const node = data.questions[step];
      storyElement.textContent = node.text;
      choicesElement.innerHTML = '';

      Object.keys(node.choices).forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => displayStep(node.choices[choice]);
        choicesElement.appendChild(button);
      });
    }
    
    displayStep(currentStep);
  })
  .catch(error => console.error("Error loading story:", error));
