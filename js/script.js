const quizData = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Lyon", "Marseille", "Bordeaux"],
        answer: "Paris"
    },
    {
        question: "Quel est le plus grand océan sur Terre ?",
        options: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"],
        answer: "Océan Pacifique"
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Victor Hugo", "Émile Zola", "Honoré de Balzac", "Gustave Flaubert"],
        answer: "Victor Hugo"
    },
    {
        question: "Quel est le plus petit pays du monde ?",
        options: ["Monaco", "Vatican", "San Marin", "Liechtenstein"],
        answer: "Vatican"
    },
    {
        question: "Quel est l'élément chimique dont le symbole est O ?",
        options: ["Or", "Osmium", "Oxygène", "Oganesson"],
        answer: "Oxygène"
    },
    {
        question: "Quelle est la planète la plus proche du Soleil ?",
        options: ["Terre", "Mars", "Vénus", "Mercure"],
        answer: "Mercure"
    },
    {
        question: "Quel peintre est connu pour avoir coupé une partie de son oreille ?",
        options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Leonardo da Vinci"],
        answer: "Vincent van Gogh"
    },
    {
        question: "Quel est le plus grand désert du monde ?",
        options: ["Désert du Sahara", "Désert de Gobi", "Désert de Kalahari", "Désert de l'Antarctique"],
        answer: "Désert de l'Antarctique"
    },
    {
        question: "Quelle est la langue la plus parlée dans le monde ?",
        options: ["Anglais", "Espagnol", "Chinois", "Hindi"],
        answer: "Chinois"
    },
    {
        question: "Quel est le plus haut sommet du monde ?",
        options: ["Mont Everest", "Mont Blanc", "K2", "Mont Kilimandjaro"],
        answer: "Mont Everest"
    },
    {
        question: "Qui a inventé l'ampoule électrique ?",
        options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"],
        answer: "Thomas Edison"
    },
    {
        question: "Quel est le plus long fleuve du monde ?",
        options: ["Amazonie", "Nil", "Yangtsé", "Mississippi"],
        answer: "Nil"
    },
    {
        question: "Quel est l'organe le plus grand du corps humain ?",
        options: ["Foie", "Cœur", "Peau", "Poumon"],
        answer: "Peau"
    },
    {
        question: "Qui a peint la fresque de la chapelle Sixtine ?",
        options: ["Raphaël", "Michel-Ange", "Donatello", "Leonardo da Vinci"],
        answer: "Michel-Ange"
    },
    {
        question: "Quelle est la capitale de l'Australie ?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
    },
    {
        question: "Quel est le pays le plus peuplé du monde ?",
        options: ["Inde", "États-Unis", "Indonésie", "Chine"],
        answer: "Chine"
    },
    {
        question: "Qui est l'auteur de 'La Recherche du temps perdu' ?",
        options: ["Albert Camus", "Marcel Proust", "Jean-Paul Sartre", "Simone de Beauvoir"],
        answer: "Marcel Proust"
    },
    {
        question: "Quelle est la capitale du Japon ?",
        options: ["Osaka", "Kyoto", "Hiroshima", "Tokyo"],
        answer: "Tokyo"
    },
    {
        question: "Quel est le plus grand pays en superficie ?",
        options: ["États-Unis", "Canada", "Chine", "Russie"],
        answer: "Russie"
    },
    {
        question: "Qui a découvert la pénicilline ?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
        answer: "Alexander Fleming"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', loadNextQuestion);

function loadNextQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');
    const scoreContainer = document.getElementById('score');

    // Hide the next button
    nextBtn.style.display = 'none';

    if (currentQuestionIndex >= quizData.length) {
        questionContainer.textContent = "Quiz Over!";
        optionsContainer.innerHTML = `Final Score: ${score}`;
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionBtn);
    });

    scoreContainer.textContent = `Score: ${score}`;
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const optionsContainer = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    optionsContainer.querySelectorAll('.option').forEach(optionBtn => {
        if (optionBtn.textContent === currentQuestion.answer) {
            optionBtn.style.backgroundColor = 'green';
        } else {
            optionBtn.style.backgroundColor = 'red';
        }
        optionBtn.disabled = true;
    });

    currentQuestionIndex++;
    nextBtn.style.display = 'block';
}