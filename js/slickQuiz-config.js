// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test your knowledge about Versailles!",
        "main":    "<p class='quizhead'>Think you're now an expert on the Palace? Find out!</p>",
        "results": "<h5>Learn More</h5><p>If you want more information about the Palace of Versailles, visit its <a href='http://en.chateauversailles.fr/homepage'>official website!</a></p>",
        "level1":  "Sun King",
        "level2":  "Le Dauphin, king-to-be",
        "level3":  "Duke",
        "level4":  "Valet",
        "level5":  "Peasant" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Who  decided to enlarge Versailles?",
            "a": [
                {"option": "Louis XVI",      "correct": false},
                {"option": "Queen Elizabeth II",     "correct": false},
                {"option": "Louis XIV",      "correct": true},
                {"option": "Napoleon",     "correct": false} // no comma here
            ],
            "correct": "<p><img style='float:right; width:30%' src='images/louisxiv.jpg'><span>That's right!</span> Louis XIV was also called the Sun King.</p>",
            "incorrect": "<p><img style='float:right; width:30%' src='images/louisxiv.jpg'><span>Uhh no.</span> So many kings it's hard to tell who's who! But Louis XIV was the best, and he proved it by building Versailles.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single true answer
            "q": "Who designed the gardens?",
            "a": [
                {"option": "Le Vau",               "correct": false},
                {"option": "Le N&ocirc;tre",   "correct": true},
                {"option": "Fouquet",               "correct": false},
                {"option": "Marie Antoinette", "correct": false} // no comma here
            ],
           "correct": "<p><img style='float:right; width:20%' src='images/andrelenotre.jpg'><span>Well done!</span>Andr&eacute; Le N&ocirc;tre is the one and only who invented the famous 'jardins &agrave; la francaise'. Le Vau, along with Jules Hardouin Mansart, was also an architect and worked on Versailles but he did not create the gardens. Marie-Antoinette was the Queen during the French Revolution. And Fouquet was the owner of the castle which inspired Versailles, Vaux-le-Vicomte. Unfortunately for him, Louis XIV was jealous of his palace and sent him to jail, before ordering an even better castle: Versailles.</p>",
            "incorrect": "<p><img style='float:right; width:20%' src='images/andrelenotre.jpg'><span>Uhh no.</span>Andr&eacute; Le N&ocirc;tre is the one and only who invented the famous 'jardins &agrave; la francaise'. Le Vau, along with Jules Hardouin Mansart, was also an architect and worked on Versailles but he did not create the gardens. Marie-Antoinette was the Queen during the French Revolution. And Fouquet was the owner of the castle which inspired Versailles, Vaux-le-Vicomte. Unfortunately for him, Louis XIV was jealous of his palace and sent him to jail, before ordering an even better castle: Versailles.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these kings lived in the Palace of Versailles?",
            "a": [
                {"option": "Louis XVI",           "correct": true},
                {"option": "Louis XX",                  "correct": false},
                {"option": "Louis XV",  "correct": true},
                {"option": "Henri IV",          "correct": true} // no comma here
            ],
            "correct": "<p><img style='float:right; width:30%' src='images/liberty.jpg'><span>Brilliant!</span>Louis XV and his grandson Louis XVI were the last kings to live in Versailles. Henri IV is their ancestor, and Louis XX is their descendant. If France were still a monarchy, he would be the king. Unfortunately for him, France is a Republique and is ruled by a President. (The painting you can see here is 'Liberty leading the People', by Delacroix, and symbolizes freedom during Revolution)</p>",
            "incorrect": "<p><img style='float:right; width:30%' src='images/liberty.jpg'><span>Not Quite.</span>Louis XV and his grandson Louis XVI were the last two kings to live in Versailles. Henri IV is their ancestor, and Louis XX is their descendant. If France were still a monarchy, he would be the king. Unfortunately for him, France is a Republique and is ruled by a President. (The painting you can see here is 'Liberty leading the People', by Delacroix, and symbolizes freedom during Revolution)</p>" // no comma here
        },
        { // Question 4
            "q": "How many mirrors were used to make the Hall of Mirrors?",
            "a": [
                {"option": "3",    "correct": false},
                {"option": "357",     "correct": true},
                {"option": "100009",      "correct": false},
                {"option": "Who the heck decided to count these mirrors?",   "correct": false} // no comma here
            ],
            "correct": "<p><img style='float:right; width:20%' src='images/galeriedesglaces.jpg'><span>Perfect!</span> There are 17 archs, each composed of 21 mirrors, so in total 357 mirrors! At the time it was built, mirrors were very expensive, so the 'Hall of Mirrors' was a very impressive artwork, admired by all the guests Louis XIV invited in his palace.</p>",
            "incorrect": "<p><img style='float:right; width:20%' src='images/galeriedesglaces.jpg'><span>Woops.</span> There are 17 archs, each composed of 21 mirrors, so in total 357 mirrors! At the time it was built, mirrors were very expensive, so the 'Hall of Mirrors' was a very impressive artwork, admired by all the guests Louis XIV invited in his palace.</p>" // no comma here
        },
        { // Question 5
            "q": "How long did the Sun King rule?",
            "a": [
                {"option": "72 years",    "correct": true},
                {"option": "20 years",     "correct": false},
                {"option": "2 days",     "correct": false},
                {"option": "100 years",     "correct": false} // no comma here
            ],
            "correct": "<p><img style='float:right; width:20%' src='images/leroisoleil.jpg'><span>Good Job!</span>Louis XIV became king in 1643 when his father died, in 1643. Because he was only 3 years old, his mother Anne and Cardinal Mazarin ruled the kingdom, waiting for him to be old enough. In 1661, Mazarin died and Louis XIV decided to rule by himelf, without any first minister. He declared 'I am the State' and created an absolute monarchy. He is also known for his support to all forms of art (music, painting, theater...). His reign is one of the longest and one of the most important in the history of Europe!</p>",
            "incorrect": "<p><img style='float:right; width:20%' src='images/leroisoleil.jpg'><span>Fail!</span>Louis XIV became king in 1643 when his father died, in 1643. Because he was only 3 years old, his mother Anne and Cardinal Mazarin ruled the kingdom, waiting for him to be old enough. In 1661, Mazarin died and Louis XIV decided to rule by himelf, without any first minister. He declared 'I am the State' and created an absolute monarchy. He is also known for his support to all forms of art (music, painting, theater...). His reign is one of the longest and one of the most important in the history of Europe!</p>" // no comma here
        } // no comma here
    ]
};