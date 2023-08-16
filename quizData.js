// quizData.js
var quizQuestions = [
    {
      question: "Considere el conjunto X = {2, 6, 7} y una métrica d. ¿Cuál de las siguientes afirmaciones es completamente falsa?",
      options: ["d(6,7)=0", "d(2,2)=0", "d(2,6)=7", "d(7,6)=2"],
      correctAnswer: 0,
      feedback: "Las métricas son funciones no negativas, simétricas y cumplen la desigualdad del triángulo y la propiedad de identidad."
    },
    {
      question: "Sea X = (1, 5] y d(x, y) = |x - y|. ¿Cuál de los siguientes conjuntos es abierto",
      options: ["(1, 5]", "(1, 4]", "[2, 4)", "[2, 4]"],
      correctAnswer: 0,
      feedback: "Recuerde la definición de topología"
    },
    {
      question: "Sea X = (1, 5] y d(x, y) = |x - y|. ¿Cuál de los siguientes conjuntos no es cerrado?",
      options: ["[2, 4)", "[2, 4]", "(1, 4]", "(1, 5]"],
      correctAnswer: 0,
      feedback: "Recuerde la definción de cerrado."
    }
  ];
 
  function randomizeOptions(question) {
    let options = [...question.options];
    let correctOption = options[question.correctAnswer];
    let randomizedOptions = [];
    
    while (options.length) {
      let randomIndex = Math.floor(Math.random() * options.length);
      randomizedOptions.push(options[randomIndex]);
      options.splice(randomIndex, 1);
    }
  
    // Find the new index of the correct option after shuffling
    let newCorrectIndex = randomizedOptions.indexOf(correctOption);
  
    return {
      ...question,
      options: randomizedOptions,
      correctAnswer: newCorrectIndex
    };
  }
  

 
  
  for (let i = 0; i < quizQuestions.length; i++) {
    quizQuestions[i] = randomizeOptions(quizQuestions[i]);
  }
   
  let container = document.getElementById('quizContainer');

  quizQuestions.forEach((question, qIndex) => {
    let questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.setAttribute('data-question', qIndex);
  
    let questionTitle = document.createElement('h2');
    questionTitle.textContent = question.question;
    questionDiv.appendChild(questionTitle);
  
    question.options.forEach((option, oIndex) => {
      let optionDiv = document.createElement('div');
      
      let radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'answer' + qIndex;
      radio.value = oIndex;
      
      let label = document.createElement('label');
      label.textContent = option;
      
      optionDiv.appendChild(radio);
      optionDiv.appendChild(label);
      
      let feedback = document.createElement('div');
      feedback.className = 'feedback';
      feedback.setAttribute('data-feedback', oIndex);
      feedback.textContent = (oIndex === question.correctAnswer) ? "Correct!" : "Wrong!";
      optionDiv.appendChild(feedback);
      
      questionDiv.appendChild(optionDiv);
    });
  
    container.appendChild(questionDiv);
  });
  
  let points = 0;

  document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function(e) {
        //... existing code ...

        let selectedQuestion = quizQuestions[e.target.closest('.question').getAttribute('data-question')];
        let selectedOption = parseInt(e.target.value);

        if (selectedOption === selectedQuestion.correctAnswer) {
            points++; // Increment the points
        }

        //... remaining code ...
    });
});

