const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctIndex: 0,
        explanation:
            "Mars is called the Red Planet due to the iron oxide (rust) on its surface which gives it a reddish appearance.",
    },
    {
        question: "Who developed the theory of relativity?",
        options: [
            "Isaac Newton",
            "Albert Einstein",
            "Galileo Galilei",
            "Niels Bohr",
        ],
        correctIndex: 1,
        explanation:
            "Albert Einstein developed the theory of relativity, fundamentally changing our understanding of space and time.",
    },
    {
        question: "Which is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctIndex: 1,
        explanation: "2 is the smallest and only even prime number.",
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctIndex: 2,
        explanation: "Plants absorb carbon dioxide (CO₂) for photosynthesis.",
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correctIndex: 1,
        explanation:
            "The Sahara is located in Northern Africa and is the largest hot desert in the world.",
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correctIndex: 2,
        explanation:
            "Tokyo is the capital of Japan and one of the most populous cities in the world.",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Zinc"],
        correctIndex: 1,
        explanation: "The symbol 'O' stands for Oxygen on the periodic table.",
    },
    {
        question: "What is H2O commonly known as?",
        options: ["Salt", "Water", "Hydrogen", "Oxygen"],
        correctIndex: 1,
        explanation: "H2O is the chemical formula for water.",
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctIndex: 3,
        explanation:
            "As of recent discoveries, Saturn has more confirmed moons than any other planet.",
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Elephant", "Tiger", "Lion", "Cheetah"],
        correctIndex: 2,
        explanation:
            "The lion is often referred to as the King of the Jungle due to its majestic appearance and dominance.",
    },
    {
        question: "What does 'www' stand for in a website browser?",
        options: [
            "World Web Wide",
            "Wide Web World",
            "World Wide Web",
            "Web World Wide",
        ],
        correctIndex: 2,
        explanation:
            "'www' stands for World Wide Web, the system of interlinked hypertext documents accessed via the internet.",
    },
    {
        question: "Which organ pumps blood through the body?",
        options: ["Lungs", "Brain", "Heart", "Kidneys"],
        correctIndex: 2,
        explanation:
            "The heart pumps blood throughout the body, supplying oxygen and nutrients.",
    },
    {
        question: "Which country gifted the Statue of Liberty to the USA?",
        options: ["England", "France", "Germany", "Italy"],
        correctIndex: 1,
        explanation:
            "France gifted the Statue of Liberty to the USA in 1886 as a symbol of friendship.",
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Iron", "Mercury", "Gold", "Copper"],
        correctIndex: 1,
        explanation:
            "Mercury is the only metal that remains liquid at standard room temperature.",
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
        correctIndex: 3,
        explanation:
            "The Nile River is traditionally considered the longest river in the world, though some debate exists with the Amazon.",
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Process Unit",
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Print Unit",
        ],
        correctIndex: 1,
        explanation:
            "CPU stands for Central Processing Unit, often referred to as the brain of the computer.",
    },
    {
        question: "Which natural satellite orbits Earth?",
        options: ["Phobos", "Europa", "Moon", "Titan"],
        correctIndex: 2,
        explanation: "The Moon is Earth's only natural satellite.",
    },
    {
        question: "Which instrument measures earthquakes?",
        options: ["Thermometer", "Barometer", "Seismograph", "Altimeter"],
        correctIndex: 2,
        explanation:
            "A seismograph detects and records seismic waves from earthquakes.",
    },
    {
        question:
            "Which vitamin is produced when a person is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctIndex: 3,
        explanation:
            "Vitamin D is synthesized in the skin through exposure to sunlight.",
    },
    {
        question: "Which scientist is known for the laws of motion?",
        options: ["Newton", "Darwin", "Einstein", "Tesla"],
        correctIndex: 0,
        explanation:
            "Sir Isaac Newton formulated the three fundamental laws of motion.",
    },
    {
        question: "Which is the most spoken language in the world?",
        options: ["English", "Spanish", "Hindi", "Mandarin"],
        correctIndex: 3,
        explanation:
            "Mandarin Chinese is the most spoken language by number of native speakers.",
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correctIndex: 2,
        explanation:
            "The Pacific Ocean is the largest and deepest ocean on Earth.",
    },
    {
        question: "Which device is used to measure temperature?",
        options: ["Barometer", "Thermometer", "Seismograph", "Micrometer"],
        correctIndex: 1,
        explanation: "A thermometer is used to measure temperature.",
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "95°C", "100°C", "110°C"],
        correctIndex: 2,
        explanation: "Water boils at 100°C at standard atmospheric pressure.",
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Venus", "Mars", "Mercury"],
        correctIndex: 3,
        explanation: "Mercury is the closest planet to the Sun.",
    },
    {
        question: "Which blood cells help in clotting?",
        options: [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "Plasma",
        ],
        correctIndex: 2,
        explanation:
            "Platelets are cell fragments that help in blood clotting by forming a plug at the injury site.",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctIndex: 2,
        explanation:
            "Japan is called the Land of the Rising Sun due to its location east of the Asian continent.",
    },
    {
        question: "Which is the hardest natural substance on Earth?",
        options: ["Iron", "Diamond", "Quartz", "Granite"],
        correctIndex: 1,
        explanation: "Diamond is the hardest known natural material on Earth.",
    },
    {
        question: "Which gas do humans need to breathe in to survive?",
        options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
        correctIndex: 2,
        explanation:
            "Humans need oxygen to survive, as it's essential for cellular respiration.",
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound", "Franc"],
        correctIndex: 2,
        explanation: "The currency of the UK is the British Pound Sterling.",
    },
    {
        question: "Which continent is the largest by land area?",
        options: ["Africa", "Asia", "Europe", "North America"],
        correctIndex: 1,
        explanation:
            "Asia is the largest continent by both area and population.",
    },
    {
        question: "Which part of the plant conducts photosynthesis?",
        options: ["Roots", "Stem", "Leaves", "Flowers"],
        correctIndex: 2,
        explanation:
            "Leaves contain chlorophyll and are the primary site of photosynthesis.",
    },
    {
        question: "How many bones are in the adult human body?",
        options: ["206", "201", "210", "215"],
        correctIndex: 0,
        explanation: "An adult human body typically has 206 bones.",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "Oscar Wilde",
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
        ],
        correctIndex: 1,
        explanation: "'Romeo and Juliet' was written by William Shakespeare.",
    },
    {
        question: "What type of animal is a Komodo dragon?",
        options: ["Mammal", "Bird", "Reptile", "Amphibian"],
        correctIndex: 2,
        explanation:
            "The Komodo dragon is a species of large lizard, making it a reptile.",
    },
    {
        question: "Which country has the most population?",
        options: ["USA", "India", "China", "Russia"],
        correctIndex: 2,
        explanation:
            "As of now, China has the highest population, though India is close behind.",
    },
    {
        question: "Which part of the cell contains genetic material?",
        options: ["Cytoplasm", "Cell membrane", "Nucleus", "Mitochondria"],
        correctIndex: 2,
        explanation:
            "The nucleus stores DNA and controls genetic functions in a cell.",
    },
    {
        question:
            "Which famous scientist developed the laws of planetary motion?",
        options: ["Copernicus", "Kepler", "Galileo", "Einstein"],
        correctIndex: 1,
        explanation:
            "Johannes Kepler formulated the laws describing planetary motion.",
    },
    {
        question: "Which food is the main source of energy for the human body?",
        options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
        correctIndex: 2,
        explanation: "Carbohydrates are the body's primary energy source.",
    },
    {
        question: "Which organ filters blood in the human body?",
        options: ["Lungs", "Liver", "Kidneys", "Stomach"],
        correctIndex: 2,
        explanation: "The kidneys filter waste products from the blood.",
    },
    {
        question: "What is the process of water turning into vapor called?",
        options: ["Condensation", "Evaporation", "Precipitation", "Freezing"],
        correctIndex: 1,
        explanation:
            "Evaporation is the process where water turns into vapor due to heat.",
    },
    {
        question: "Which language has the most native speakers?",
        options: ["English", "Spanish", "Mandarin", "Hindi"],
        correctIndex: 2,
        explanation: "Mandarin Chinese has the most native speakers worldwide.",
    },
    {
        question: "Which mammal lays eggs?",
        options: ["Kangaroo", "Bat", "Platypus", "Dolphin"],
        correctIndex: 2,
        explanation: "The platypus is a rare mammal that lays eggs.",
    },
    {
        question: "Which is the coldest place on Earth?",
        options: ["Siberia", "Alaska", "Greenland", "Antarctica"],
        correctIndex: 3,
        explanation:
            "Antarctica is the coldest place on Earth, with record lows below -89°C.",
    },
    {
        question: "Which scientist is known for the theory of evolution?",
        options: [
            "Isaac Newton",
            "Charles Darwin",
            "Gregor Mendel",
            "Einstein",
        ],
        correctIndex: 1,
        explanation:
            "Charles Darwin proposed the theory of natural selection in evolution.",
    },
    {
        question: "Which continent has no permanent population?",
        options: ["Asia", "Antarctica", "Australia", "Europe"],
        correctIndex: 1,
        explanation:
            "Antarctica has no permanent population, only temporary research stations.",
    },
    {
        question: "Which country invented paper?",
        options: ["Egypt", "China", "Greece", "India"],
        correctIndex: 1,
        explanation: "Paper was invented in ancient China around 105 AD.",
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Mars", "Jupiter", "Saturn", "Uranus"],
        correctIndex: 2,
        explanation:
            "Saturn is known for its prominent and visible ring system.",
    },
    {
        question: "Which is the only bird that can fly backward?",
        options: ["Sparrow", "Hummingbird", "Owl", "Eagle"],
        correctIndex: 1,
        explanation:
            "The hummingbird is capable of flying backward due to its unique wing motion.",
    },
    {
        question: "What is the largest internal organ in the human body?",
        options: ["Brain", "Liver", "Heart", "Lungs"],
        correctIndex: 1,
        explanation:
            "The liver is the largest internal organ and performs over 500 functions.",
    },
];
