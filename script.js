// Script pour le quiz de géométrie
// Liste des questions, choix possibles et réponse correcte
const questions = [
  {
    question: "La somme des angles intérieurs d'un triangle est :",
    choices: ["90°", "180°", "360°", "270°"],
    answer: "180°",
  },
  {
    question: "Combien de côtés a un quadrilatère ?",
    choices: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Un angle droit mesure combien de degrés ?",
    choices: ["45°", "60°", "90°", "120°"],
    answer: "90°",
  },
  {
    question: "Les côtés opposés d'un rectangle sont :",
    choices: ["égaux et parallèles", "perpendiculaires", "courbes", "irréguliers"],
    answer: "égaux et parallèles",
  },
  {
    question: "Un triangle équilatéral a combien de côtés égaux ?",
    choices: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    question: "Quelle est la somme des angles intérieurs d'un quadrilatère ?",
    choices: ["180°", "270°", "360°", "540°"],
    answer: "360°",
  },
  {
    question: "Un carré est un type particulier de :",
    choices: ["parallélogramme", "triangle", "pentagone", "trapèze"],
    answer: "parallélogramme",
  },
  {
    question: "Combien d'angles droits possède un carré ?",
    choices: ["1", "2", "3", "4"],
    answer: "4",
  },
  {
    question: "Un triangle isocèle a au moins combien de côtés égaux ?",
    choices: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Dans un triangle rectangle, l'hypoténuse est :",
    choices: ["le côté le plus long", "le côté le plus court", "un angle", "un point"],
    answer: "le côté le plus long",
  },
  {
    question: "Un quadrilatère dont une seule paire de côtés opposés est parallèle s'appelle :",
    choices: ["trapèze", "rectangle", "carré", "losange"],
    answer: "trapèze",
  },
  {
    question: "Combien de diagonales possède un quadrilatère ?",
    choices: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Dans un triangle scalène, les côtés sont :",
    choices: ["tous différents", "tous égaux", "deux égaux", "pas de côtés"],
    answer: "tous différents",
  },
  {
    question: "Un angle obtus est un angle de :",
    choices: ["plus de 90°", "exactement 90°", "moins de 90°", "180°"],
    answer: "plus de 90°",
  },
  {
    question: "Comment s'appelle un quadrilatère aux quatre côtés de même longueur mais pas forcément à angles droits ?",
    choices: ["losange", "rectangle", "carré", "trapèze"],
    answer: "losange",
  },
  {
    question: "La somme des angles adjacents sur une ligne droite est :",
    choices: ["90°", "180°", "270°", "360°"],
    answer: "180°",
  },
  {
    question: "Combien d'axes de symétrie possède un rectangle ?",
    choices: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Si deux côtés d'un triangle sont égaux, il est :",
    choices: ["équilatéral", "isocèle", "scalène", "rectangle"],
    answer: "isocèle",
  },
  {
    question: "Un angle aigu est un angle de :",
    choices: ["moins de 90°", "plus de 90°", "exactement 90°", "plus de 180°"],
    answer: "moins de 90°",
  },
  {
    question: "Un triangle ayant un angle de 90° est appelé :",
    choices: ["triangle obtus", "triangle aigu", "triangle rectangle", "triangle scalène"],
    answer: "triangle rectangle",
  },
  {
    question: "Comment s'appelle un quadrilatère avec deux paires de côtés parallèles et des angles pas nécessairement à 90° ?",
    choices: ["parallélogramme", "trapèze", "carré", "rectangle"],
    answer: "parallélogramme",
  },
  {
    question: "Dans un losange, les diagonales sont :",
    choices: ["perpendiculaires", "parallèles", "égales", "aucune de ces réponses"],
    answer: "perpendiculaires",
  },
  {
    question: "Dans un rectangle, les diagonales sont :",
    choices: ["égales", "perpendiculaires", "parallèles", "aucune de ces réponses"],
    answer: "égales",
  },
  {
    question: "Dans un triangle équilatéral, chaque angle mesure :",
    choices: ["45°", "60°", "90°", "120°"],
    answer: "60°",
  },
  {
    question: "Un angle plat mesure :",
    choices: ["180°", "90°", "360°", "45°"],
    answer: "180°",
  },
  {
    question: "Combien de diagonales possède un hexagone ?",
    choices: ["6", "7", "9", "12"],
    answer: "9",
  },
  {
    question: "Comment s'appelle un triangle avec tous les angles aigus ?",
    choices: ["triangle obtus", "triangle scalène", "triangle aigu", "triangle rectangle"],
    answer: "triangle aigu",
  },
  {
    question: "Quel quadrilatère a quatre angles droits et quatre côtés égaux ?",
    choices: ["rectangle", "losange", "carré", "trapèze"],
    answer: "carré",
  },
];

let shuffledQuestions;
let currentQuestionIndex;
let score;

const questionElement = document.getElementById('question');
const choicesContainer = document.getElementById('choices-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

// Démarre le quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  // Mélanger les questions pour varier l'ordre
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  showQuestion();
}

// Afficher la question courante et ses choix
function showQuestion() {
  resetState();
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionElement.innerText = `Question ${currentQuestionIndex + 1} : ${currentQuestion.question}`;
  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.innerText = choice;
    button.classList.add('choice');
    // Marque la bonne réponse
    if (choice === currentQuestion.answer) {
      button.dataset.correct = true;
    }
    button.addEventListener('click', selectAnswer);
    choicesContainer.appendChild(button);
  });
}

// Réinitialise l'état de l'interface pour la prochaine question
function resetState() {
  nextButton.classList.add('hidden');
  while (choicesContainer.firstChild) {
    choicesContainer.removeChild(choicesContainer.firstChild);
  }
}

// Traite la sélection de la réponse par l'utilisateur
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(choicesContainer.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
    button.disabled = true;
  });
  if (correct) {
    score++;
  }
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    nextButton.classList.remove('hidden');
  } else {
    showScore();
  }
}

// Applique la couleur en fonction de la correction de la réponse
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.style.backgroundColor = '#4CAF50';
    element.style.color = '#ffffff';
  } else {
    element.style.backgroundColor = '#f44336';
    element.style.color = '#ffffff';
  }
}

// Réinitialise les couleurs
function clearStatusClass(element) {
  element.style.backgroundColor = '';
  element.style.color = '';
}

// Gestionnaire de clic pour le bouton suivant
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  showQuestion();
});

// Gestionnaire de clic pour recommencer le quiz
restartButton.addEventListener('click', startQuiz);

// Affiche le score final et masque les questions
function showScore() {
  document.getElementById('quiz-container').classList.add('hidden');
  resultContainer.classList.remove('hidden');
  scoreElement.innerText = `Vous avez obtenu ${score} sur ${shuffledQuestions.length} !`;
}

// Lancement initial du quiz lorsque la page est chargée
document.addEventListener('DOMContentLoaded', startQuiz);