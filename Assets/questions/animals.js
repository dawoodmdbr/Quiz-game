const questions = [
  {
    "question": "Three of these animals hibernate. Which one does not?",
    "options": [
      "Mouse",
      "Sloth",
      "Frog",
      "Snake"
    ],
    "correctIndex": 1
  },
  {
    "question": "All of these animals are omnivorous except one.",
    "options": [
      "Fox",
      "Mouse",
      "Opossum",
      "Snail"
    ],
    "correctIndex": 3
  },
  {
    "question": "Three of these Latin names are names of bears. Which is the odd one?",
    "options": [
      "Melursus ursinus",
      "Helarctos malayanus",
      "Ursus minimus",
      "Felis silvestris catus"
    ],
    "correctIndex": 3
  },
  {
    "question": "These are typical Australian animals except one.",
    "options": [
      "Platypus",
      "Dingo",
      "Echidna",
      "Sloth"
    ],
    "correctIndex": 3
  },
  {
    "question": "Representatives of three of these species produce venom of their own. Which is the odd species?",
    "options": [
      "Lizards",
      "Scorpions",
      "Frogs",
      "Mosquitos"
    ],
    "correctIndex": 3
  },
  {
    "question": "Three of these species shed their skin. Which one does not?",
    "options": [
      "Penguins",
      "Snakes",
      "Insects",
      "Crustaceans"
    ],
    "correctIndex": 0
  },
  {
    "question": "All dogs, cats and birds are colorblind.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "All of these animals have large ears (relative to their size) except one.",
    "options": [
      "Polar bears",
      "Foxes",
      "Bats",
      "Elephants"
    ],
    "correctIndex": 0
  },
  {
    "question": "This percentage of all snakes on Earth are lethal to humans.",
    "options": [
      "10%",
      "20%",
      "15%",
      "25%"
    ],
    "correctIndex": 2
  },
  {
    "question": "Snakes are this kind of animals.",
    "options": [
      "Herbivorous",
      "Omnivorous",
      "Carnivorous",
      "Vegetarian"
    ],
    "correctIndex": 2
  },
  {
    "question": "Snakes consume their food by means of this process.",
    "options": [
      "Breathing",
      "Absorption",
      "Swallowing",
      "Chewing"
    ],
    "correctIndex": 2
  },
  {
    "question": "Snakes reproduce only by laying eggs.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Snakes are deaf.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Snake skin is covered in scales.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Snakes belong to the following category.",
    "options": [
      "Invertebrates",
      "Lizards",
      "Reptiles",
      "Mammals"
    ],
    "correctIndex": 2
  },
  {
    "question": "A specialist in snakes is called one of these.",
    "options": [
      "Pisciculturist",
      "Ornithologist",
      "Ophiologist",
      "Herpetologist"
    ],
    "correctIndex": 2
  },
  {
    "question": "One of the following snakes does not belong to the Viperidae family.",
    "options": [
      "Horned adder",
      "Grass snake",
      "Viper",
      "Asp"
    ],
    "correctIndex": 1
  },
  {
    "question": "Snakes are very likely to attack us, regardless of whether they feel threatened or not.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Cobras are venomous snakes of family Elapidae, that generally inhabit regions of these two continents.",
    "options": [
      "South America and Asia",
      "Asia and Africa",
      "Asia and Australia",
      "South America and Australia"
    ],
    "correctIndex": 1
  },
  {
    "question": "The cobras most recognizable feature is its hood, a flap of skin and muscle behind the head, believed to serve this purpose.",
    "options": [
      "Balance control",
      "Heat collection from sun rays",
      "Camouflage",
      "More threatening appearance"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Cobra is at the top of the food chain, with only two main predators -- one is man and the other is this animal.",
    "options": [
      "Jackal",
      "Mongoose",
      "Lynx",
      "Eagle"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is where the Cobras ribs are situated.",
    "options": [
      "Behind its head",
      "In its chest, around the middle of the body",
      "Cobras have no ribs",
      "In its tale"
    ],
    "correctIndex": 0
  },
  {
    "question": "The King Cobra feeds almost exclusively on other snakes, even toxic ones.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "A baby cobra is fully able to defend itself in as little as this many hours after being born.",
    "options": [
      "3",
      "12",
      "48",
      "72"
    ],
    "correctIndex": 0
  },
  {
    "question": "What type of dog did Richard Nixon receive from a Texan while he was a candidate for Vice President?",
    "options": [
      "German Shepherd",
      "Cocker Spaniel",
      "Golden Retriever",
      "Welsh Corgy"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of Socks companion at the White House during the Clinton Administration?",
    "options": [
      "Buddy",
      "Shoes",
      "Bailey",
      "Buster"
    ],
    "correctIndex": 0
  },
  {
    "question": "President Fords dog was named Freedom.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these Presidents had the most pets?",
    "options": [
      "Franklin Delano Roosevelt",
      "Theodore Roosevelt",
      "Bill Clinton",
      "Woodrow Wilson"
    ],
    "correctIndex": 1
  },
  {
    "question": "What breed is known as the favourite breed of Queen Elizabeth II?",
    "options": [
      "Border Collie",
      "Old English Sheepdog",
      "Welsh Corgi",
      "Australian Cattle Dog"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the name of Fraisers fathers dog on the hit TV show set in Seattle?",
    "options": [
      "Niles",
      "Marty",
      "Eddie",
      "Skip"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of these sea mammals is not in the endangered species lists?",
    "options": [
      "Fin Whale",
      "Pilot whale",
      "Blue Whale",
      "Humpback Whale"
    ],
    "correctIndex": 1
  },
  {
    "question": "This endangered turtle is the biggest of all living turtles, reaching a length of over 2.7 m (8.8 ft) and weight of 900 kg (2,000 lb).",
    "options": [
      "Leatherback Sea Turtle",
      "Kemps Ridley Turtle",
      "Hawksbill Sea Turtle",
      "Mesoamerican River Turtle"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the rarest and most endangered of all wolves.",
    "options": [
      "Red Wolf",
      "Ethiopian Wolf",
      "Black-backed Wolf",
      "Gray Wolf"
    ],
    "correctIndex": 0
  },
  {
    "question": "The endangered Komodo dragon is the largest living lizard in the world, growing to an average length of 2-3 meters (10 feet).",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This species of great apes with long arms and reddish hair suffer habitat destruction due to logging, mining and forest fires.",
    "options": [
      "Gorilla",
      "Baboons",
      "Orangutan",
      "Chimpanzee"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the natural habitat of the snows leopard, that was hunted down for its beautiful fur, as a result of which its population went down to 1,000 animals in the 1960s?",
    "options": [
      "North America",
      "Central Asia and North America",
      "Central Asia",
      "Europe and North America"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Asian Elephant, the only living species of the genus Elephas, is the bigger relative of the African Elephant.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This freshwater mammal, found only in the Yangtze River, is the most endangered (even possibly extinct) cetacean and one of the most endangered species in the world.",
    "options": [
      "Ganges River Dolphin",
      "Chinese River Dolphin",
      "La Plata Dolphin",
      "Amazon River Dolphin"
    ],
    "correctIndex": 1
  },
  {
    "question": "This small nocturnal animal, whose natural habitat are the deserts of Northern Africa, is known to jump not only for hunting or protection, but also for pleasure.",
    "options": [
      "Cape Fox",
      "Red Fox",
      "Bengal Fox",
      "Fennec"
    ],
    "correctIndex": 3
  },
  {
    "question": "Jack jumper ants, yellowish-orange carnivorous ants named after their characteristic jumpy motions, can be found only on which continent?",
    "options": [
      "North America",
      "Australia",
      "Africa",
      "Asia"
    ],
    "correctIndex": 1
  },
  {
    "question": "This small, graceful member of the antelope family is an extraordinary jumper - while leaping, it touches the rocky terrain of its South African habitats only with the tip of its hooves, resembling a dance.",
    "options": [
      "Oribi",
      "Roan Antelope",
      "Scimitar Oryx",
      "Klipspringer"
    ],
    "correctIndex": 3
  },
  {
    "question": "Although the jumping viper, a chiefly nocturnal snake, is one of the most powerful jumpers of the snake family, capable of rising up to 1 meter (3 feet) during a strike, its poison is not lethal to humans.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Zoophobia is the fear of animals.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The hummingbird is the worlds smallest bird.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these animals swims the fastest?",
    "options": [
      "Flounder",
      "Shark",
      "Dolphin",
      "Jellyfish"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which word refers to the sound peacocks make?",
    "options": [
      "Scream",
      "Squill",
      "Squeak",
      "Squall"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ancient Japanese thought this animal caused earthquakes.",
    "options": [
      "Birds",
      "Spiders",
      "Snakes",
      "Frogs"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many types of bats are there?",
    "options": [
      "900",
      "700",
      "500",
      "200"
    ],
    "correctIndex": 0
  },
  {
    "question": "Chocolate cannot kill a dog.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This animal can clean its own ears with its 21-inch tongue.",
    "options": [
      "Lizard",
      "Elephant",
      "Lion",
      "Giraffe"
    ],
    "correctIndex": 3
  },
  {
    "question": "It has been estimated that in Australia, there are about twice as many kangaroos as there are people.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the fastest animal on 6 legs?",
    "options": [
      "Ladybug",
      "Cockroach",
      "Beetle",
      "Ant"
    ],
    "correctIndex": 1
  },
  {
    "question": "Sheep are similar to cows in that they have a stomach which contains four chambers.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is a female sheep called or known as?",
    "options": [
      "ewe",
      "colt",
      "fleece",
      "ram"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the white tigers scientific name?",
    "options": [
      "Pantha",
      "Panthera tigis",
      "Panthera tiger",
      "Panthera tigris"
    ],
    "correctIndex": 3
  },
  {
    "question": "Can tigers live to be 20 years old?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "All tigers have stripes.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is not a type of chipmunk?",
    "options": [
      "Bushy-tailed",
      "Long-eared",
      "Eastern",
      "Sonoma"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is not an actual breed of horse?",
    "options": [
      "Sioux",
      "Russian Trotter",
      "Belgian",
      "Murgese"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is not a breed of dog?",
    "options": [
      "Pom-a-poo",
      "Lakeland terrier",
      "Fox terrier",
      "Ferret terrier"
    ],
    "correctIndex": 3
  },
  {
    "question": "One of these is not a true breed of cat. Which one?",
    "options": [
      "Pixie-bob",
      "Maine coon",
      "Ragdoll",
      "French Twist"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is not a type of beetle?",
    "options": [
      "Long-horn beetle",
      "Stag beetle",
      "Flea beetle",
      "Burrowing beetle"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following is not a type of spider?",
    "options": [
      "Glass spider",
      "Trapdoor spider",
      "Brown recluse spider",
      "Bird-dropping spider"
    ],
    "correctIndex": 0
  },
  {
    "question": "All but one of the following are true types of bears. Which is the odd one?",
    "options": [
      "Moon bear",
      "Brown bear",
      "Black bear",
      "Sun bear"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is not an actual breed of sheep?",
    "options": [
      "Scottish black-face",
      "Dakota",
      "Hampshire",
      "Merino"
    ],
    "correctIndex": 1
  },
  {
    "question": "One of these is not a true breed of chicken. Which one?",
    "options": [
      "Hamburg",
      "Plymouth Rock",
      "Leghorn",
      "Red-tailed"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following is not a breed of pig?",
    "options": [
      "Norwegian Yorkshire",
      "Vietnamese pot-belly",
      "Ridgeback",
      "Tokyo-X"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is a group of lions called?",
    "options": [
      "Family",
      "Group",
      "School",
      "Pride"
    ],
    "correctIndex": 3
  },
  {
    "question": "There are more males then females in a pride.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Generally, how many times in an interval of 5 hours do lions mate?",
    "options": [
      "1",
      "5",
      "20",
      "10"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the breed of animal created from the crossing of a male lion and a female tiger?",
    "options": [
      "Tigon",
      "Tiges",
      "Ligon",
      "Liger"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the breed of animal created from the crossing of a female lion and a male tiger?",
    "options": [
      "Tigen",
      "Liger",
      "Tigon",
      "Liges"
    ],
    "correctIndex": 2
  },
  {
    "question": "What do male lions have which females do not possess?",
    "options": [
      "An extra tooth",
      "A mane",
      "Longer nails",
      "Distinguished eyes"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the average lifespan of a lion living in the wild?",
    "options": [
      "20 - 30 years",
      "Less than 10 years",
      "10 -15 years",
      "Greater than 30 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "Are male lions are generally stronger then female lions?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Female lions hunt in a group.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Cats twitch the tips of their tails slightly when hunting or when angry, while stronger twitching indicates what?",
    "options": [
      "Stress",
      "Displeasure",
      "Boredom",
      "Playfulness"
    ],
    "correctIndex": 1
  },
  {
    "question": "If a cat pushes its face against your head, this means what?",
    "options": [
      "Impatience",
      "Submission",
      "Acceptance",
      "Aggression"
    ],
    "correctIndex": 2
  },
  {
    "question": "Cats generally purr when they are happy, but they can also be heard purring in what other situation?",
    "options": [
      "When they are distressed or in pain",
      "When they are hunting or playing",
      "When they are hungry or thirsty",
      "When they are lonely or angry"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many different vocalization sounds does a cat make?",
    "options": [
      "100",
      "200",
      "50",
      "150"
    ],
    "correctIndex": 0
  },
  {
    "question": "All cats are born with green eyes.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A cats front paws have 5 toes and their back paws have 4.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the largest  eagle ever found on Earth?",
    "options": [
      "Golden Eagle",
      "Haasts Eagle",
      "Harpy Eagle",
      "Bald Eagle"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which term refers to the group formed by frogs and amphibians?",
    "options": [
      "Drosophillia",
      "Herps",
      "Mollusks",
      "Nematodes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which statement about elephants is untrue?",
    "options": [
      "Elephants sleep standing up",
      "Elephants cry",
      "There are some pink elephants in India",
      "Elephants do not have great memories"
    ],
    "correctIndex": 3
  },
  {
    "question": "All pigs are classified as un-Kosher meaning they can not be eaten by Jewish people.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is alektorophobia?",
    "options": [
      "The unreasonable fear of birds of prey",
      "The unreasonable fear of roaches",
      "The unreasonable fear of chickens",
      "The unreasonable fear of sharks"
    ],
    "correctIndex": 2
  },
  {
    "question": "How do scientists calculate the age of a fish?",
    "options": [
      "They count all the teeth in the fishs mouth.",
      "They measure the size of the fish and compare that to the average size of that type of  fish.",
      "They count the growth rings on the ear bone.",
      "They count the teeth in the fishs lower lip."
    ],
    "correctIndex": 2
  },
  {
    "question": "Pound for pound, humans are not the strongest animals. What is considered the strongest species, pound for pound?",
    "options": [
      "The Hercules beetle",
      "The leaf-cutting ant",
      "The red ant",
      "The atlas roach"
    ],
    "correctIndex": 0
  },
  {
    "question": "Human beings have 23 pairs of  chromosomes. Which animal has the most chromosomes?",
    "options": [
      "minke whale",
      "millipedes",
      "elephants",
      "hermit crabs"
    ],
    "correctIndex": 3
  },
  {
    "question": "What type of animal is a lamprey?",
    "options": [
      "worm",
      "fish",
      "insect",
      "amphibian"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the first book by Darwin that directly dealt with evolution?",
    "options": [
      "Essay on the Principles of Population",
      "Totem and Taboo",
      "On the Origins of the Species",
      "The Descent of Man and the Selection in Relation to Sex"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these animals has the largest paws?",
    "options": [
      "An average mountain lion",
      "An average nematode",
      "An average lynx",
      "An average lichen"
    ],
    "correctIndex": 2
  },
  {
    "question": "Sharks can only be found in salt water.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The smallest species of shark in the world is the Dwarf Lanternfish.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Sharks must eat continually in order to survive.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Sharks can have up to nine gills on each side of their body.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Rays and Skates are types of sharks.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sharks have poor vision.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "More shark attacks occur during the day than at night.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "If attacked by a shark it is recommended that you punch the shark in the nose.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sharks are immune to cancer.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The dogfish is actually a common species of small shark.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Despite the myth that Chihuahuas were descendants of the royal dog of the Aztecs, it is also believed that Spanish trade merchants brought Chihuahuas to which of these countries?",
    "options": [
      "Venezuela",
      "United States",
      "Brazil",
      "Mexico"
    ],
    "correctIndex": 3
  },
  {
    "question": "What maximum height at the withers can Chihuahuas reach?",
    "options": [
      "24 inches (60 cm)",
      "15 inches (38 cm)",
      "12 inches (30 cm)",
      "9 inches (22 cm)"
    ],
    "correctIndex": 1
  },
  {
    "question": "Chihuahuas come in three colors: brindle, black, and camel.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Chihuahuas are the only dogs to be born with what?",
    "options": [
      "An extra leg tendon",
      "Hairless inner ears",
      "An incomplete skull",
      "Two extra canine teeth"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the average lifespan of Chihuahuas?",
    "options": [
      "8 - 12 years",
      "8- 18 years",
      "8 - 26 years",
      "8 - 15 years"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Chihuahua Gidget is famous for what reason?",
    "options": [
      "Paris Hilton has it as a pet.",
      "It was a fill-in mascot for the Georgia Bulldogs.",
      "It was a mascot for Taco Bell.",
      "It was a mascot for Taco John."
    ],
    "correctIndex": 2
  },
  {
    "question": "The Chihuahua is the smallest dog breed in the world.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Chihuahuas are prone to hypoglycemia (low blood sugar).",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the word \u201chippopotamus\u201d mean?",
    "options": [
      "Water pig",
      "Fat horse",
      "River horse",
      "River pig"
    ],
    "correctIndex": 2
  },
  {
    "question": "For their size hippos are pretty fast runners and are much faster than humans.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How long in years is the life span of an average wild hippopotamus?",
    "options": [
      "10-20",
      "40-50",
      "30-40",
      "20-30"
    ],
    "correctIndex": 1
  },
  {
    "question": "Hippos secrete a red substance known as blood sweat that protects them from the sun.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Hippos are related to cetaceans (whales and porpoises).",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Spectacled bear makes its habitat around the Andes tropical basin.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is the basic food of the sea. Billions upon billions of these organisms live in the sea.",
    "options": [
      "Seaweed",
      "Plankton",
      "Crabs",
      "Shrimp"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the result of the gravitational pull from the moon and sun.",
    "options": [
      "Migration of certain species of whales",
      "Tides",
      "Shoreline",
      "Waves"
    ],
    "correctIndex": 1
  },
  {
    "question": "These creatures look like flowers as they grow attached to rocks. Their tentacles open like fleshy petals and contract whenever danger is near.",
    "options": [
      "Kelp",
      "Jellyfish",
      "Sponges",
      "Sea Anemones"
    ],
    "correctIndex": 3
  },
  {
    "question": "This sea animal, widely considered the most valuable shellfish, is common in shallow, warmer waters of all oceans.",
    "options": [
      "Oyster",
      "Shrimp",
      "Scallop",
      "Lobster"
    ],
    "correctIndex": 0
  },
  {
    "question": "This crab is not really a crab, but an arthropod. Its closest relative is the spider.",
    "options": [
      "Fiddler Crab",
      "Horseshoe crab",
      "Spider Crab",
      "Rock Crab"
    ],
    "correctIndex": 1
  },
  {
    "question": "These worms are not in fact worms, but bivalves. They enter wood as larvae, where they remain and grow, burrowing through the wood.",
    "options": [
      "Sea Mice",
      "Ribbon Worms",
      "Lugworms",
      "Shipworms"
    ],
    "correctIndex": 3
  },
  {
    "question": "Squid and octopus are mollusks.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Pacific lobster has large pincers and a spiny shell.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Also called Sea Biscuit, this animal lives in deeper water half-buried in the sand.",
    "options": [
      "Sand Dollar",
      "Star Fish",
      "Scallop",
      "Mussel"
    ],
    "correctIndex": 0
  },
  {
    "question": "The red kangaroo appears on the Coat of Arms of Australia together with what other endemic Australian animal?",
    "options": [
      "Emu",
      "Platypus",
      "Dingo",
      "Koala"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these mammals was brought to Australia by humans?",
    "options": [
      "The echidna",
      "The dingo",
      "The koala",
      "The Tasmanian tiger"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following statements about echidnas, mammals native to Australia, is wrong?",
    "options": [
      "Echidnas are covered with spines.",
      "Echidnas have snouts.",
      "Echidnas lay eggs.",
      "Echidnas are marsupials."
    ],
    "correctIndex": 3
  },
  {
    "question": "The diet of the koala consists mainly of what plant species?",
    "options": [
      "Eucalyptus",
      "Bamboo",
      "Willow",
      "Cork Oak"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these Australian reptiles is the largest living crocodile in the world?",
    "options": [
      "The thorny devil",
      "The weedy sea dragon",
      "The blue-tongued skink",
      "The saltwater crocodile"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Australian monotreme lays eggs and has a remarkable sense of electroception.",
    "options": [
      "Platypus",
      "Red kangaroo",
      "Dingo",
      "Emu"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which Australian animal is the largest living carnivorous marsupial on Earth?",
    "options": [
      "The Tasmanian tiger",
      "The Tasmanian devil",
      "The platypus",
      "The red kangaroo"
    ],
    "correctIndex": 1
  },
  {
    "question": "Qantas, Australias largest airline company, has what Australian animal on its red-and-white logo?",
    "options": [
      "Koala",
      "Kangaroo",
      "Emu",
      "Tasmanian devil"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the difference between the male and the female Galah, a cockatoo bird native to Australia?",
    "options": [
      "There is no difference between them.",
      "Males and females have different eye colour.",
      "Galah males are crested.",
      "Galah females have shorter tails."
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the average weight of the Tasmanian Pygmy Possum?",
    "options": [
      "About 250g",
      "About 50g",
      "About 100g",
      "About 7g"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which lizard can squirt blood from the corners of its eyes in order to confuse and drive back its enemies?",
    "options": [
      "Anole",
      "Gila monster",
      "Horned lizard",
      "Komodo dragon"
    ],
    "correctIndex": 2
  },
  {
    "question": "The venomous lizard Gila monster was named after what?",
    "options": [
      "The Gila River basin",
      "The Gila Expedition 1857",
      "Alberto Gilardino",
      "Gilligans Island"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Komodo dragon, the largest living lizard on Earth, lives in which part of the world?",
    "options": [
      "North America",
      "Indonesia",
      "South-western China",
      "Madagascar"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which term refers to the self-defense mechanism which allows lizards to break off their tails when captured?",
    "options": [
      "Apotemnophilia",
      "Autonomy",
      "Autotomy",
      "Autism"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements about geckos is true?",
    "options": [
      "Geckos have toe pads which help them climb smooth vertical surfaces.",
      "All of these",
      "Geckos can make chirping sounds.",
      "Geckos feed on insects."
    ],
    "correctIndex": 1
  },
  {
    "question": "Chameleons are lizards that can change their colour. What does Chameleon mean in Greek?",
    "options": [
      "Green melon",
      "Karma lion",
      "Colourful",
      "Earth lion"
    ],
    "correctIndex": 3
  },
  {
    "question": "Geckos have immovable eyelids and cant blink. How do they keep their eyes clean?",
    "options": [
      "A tiny insect lives under their eyelids and cleans their eyes.",
      "They lick their own eyes.",
      "They dip their eyes in water.",
      "They cover their eyes with their toes."
    ],
    "correctIndex": 1
  },
  {
    "question": "The lizards which do not have legs are commonly known by what name?",
    "options": [
      "Glass lizards",
      "Monitor lizards",
      "Skinks",
      "Iguanas"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these lizard species is not endangered?",
    "options": [
      "Eastern Bearded Dragon",
      "Blunt-nosed Leopard Lizard",
      "Mona Ground Iguana",
      "Komodo Dragon"
    ],
    "correctIndex": 0
  },
  {
    "question": "No lizard species live on which continent?",
    "options": [
      "South America",
      "Antarctica",
      "Europe",
      "Asia"
    ],
    "correctIndex": 1
  },
  {
    "question": "This shark is considered a filter- feeder. Its diet consists mainly of plankton, krill, and macro-algae.",
    "options": [
      "whale shark",
      "bull shark",
      "great white shark",
      "pygmy shark"
    ],
    "correctIndex": 0
  },
  {
    "question": "This sharks white belly and grey back make it difficult for prey to spot.",
    "options": [
      "hammerhead shark",
      "tiger shark",
      "great white shark",
      "whale shark"
    ],
    "correctIndex": 2
  },
  {
    "question": "Sharks have no bones.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Have sharks been around for about 400 million years?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these sharks has a flat body like a stingray?",
    "options": [
      "basking shark",
      "blue shark",
      "blacktip reef shark",
      "angel shark"
    ],
    "correctIndex": 3
  },
  {
    "question": "This shark was believed to be extinct, until it was found on the coast of Japan in 1898.",
    "options": [
      "cookie cutter shark",
      "mako shark",
      "goblin shark",
      "angel shark"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which shark is the fastest swimmer?",
    "options": [
      "goblin shark",
      "mako shark",
      "nurse shark",
      "sandtiger shark"
    ],
    "correctIndex": 1
  },
  {
    "question": "The zebra shark is very small and gentle and can be kept close to other fish.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the common name for baby sharks?",
    "options": [
      "calves",
      "pecks",
      "cubs",
      "pups"
    ],
    "correctIndex": 3
  },
  {
    "question": "Two thirds of a sharks brain is dedicated to its sense of smell.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many recognized giraffe subspecies exist?",
    "options": [
      "6",
      "7",
      "9",
      "5"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these is not a subspecies of giraffe?",
    "options": [
      "Somali Giraffe",
      "Rothschilds Giraffe",
      "Kordofan Giraffe",
      "East African Giraffe"
    ],
    "correctIndex": 3
  },
  {
    "question": "How long is a giraffes gestation period?",
    "options": [
      "18 - 20 months",
      "10 months",
      "14- 15 months",
      "9 months"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many pounds of leaves can a giraffe consume daily?",
    "options": [
      "60 pounds",
      "100 pounds",
      "140 pounds",
      "210 pounds"
    ],
    "correctIndex": 2
  },
  {
    "question": "Giraffes need less sleep than nearly every other animal.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Giraffes were once thought to be a cross between a camel and a leopard.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What group of dogs does the beagle belong to?",
    "options": [
      "retrievers",
      "setters",
      "hound",
      "terriers"
    ],
    "correctIndex": 2
  },
  {
    "question": "The beagle was developed mainly for tracking what animal?",
    "options": [
      "squirrels",
      "rabbits",
      "raccoons",
      "coyotes"
    ],
    "correctIndex": 1
  },
  {
    "question": "About how many years have beagles been around?",
    "options": [
      "2,000",
      "5,000",
      "4,000",
      "3,000"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following cartoon dogs was a beagle?",
    "options": [
      "Courage",
      "Scooby Doo",
      "Snoopy",
      "Clifford"
    ],
    "correctIndex": 2
  },
  {
    "question": "The beagle is not a good choice for a childrens pet because it is aggressive.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the typical lifespan of the beagle?",
    "options": [
      "20 years",
      "15 years",
      "7 years",
      "12 years"
    ],
    "correctIndex": 3
  },
  {
    "question": "Beagles are sometimes used for termite detection in Australia.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Are beagles easy to housebreak?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "What type of coat do beagles have?",
    "options": [
      "long",
      "short",
      "medium",
      "depends on the dog"
    ],
    "correctIndex": 2
  },
  {
    "question": "The puggle is a mix between a beagle and what dog?",
    "options": [
      "papillion",
      "puli",
      "poodle",
      "pug"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what country was the goldfish first domesticated?",
    "options": [
      "Egypt",
      "China",
      "Japan",
      "India"
    ],
    "correctIndex": 1
  },
  {
    "question": "A goldfish can reach a weight of almost 10 lbs (4.5 kg)",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "How long can a goldfish live in optimal conditions?",
    "options": [
      "5 years",
      "8 years",
      "10 years",
      "20 years"
    ],
    "correctIndex": 3
  },
  {
    "question": "The world record for the oldest goldfish is 49 years.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Europe goldfish were first introduced to what country?",
    "options": [
      "France",
      "England",
      "Italy",
      "Portugal"
    ],
    "correctIndex": 3
  },
  {
    "question": "What color goldfish were most prized by the Chinese royalty several centuries ago?",
    "options": [
      "Silver",
      "Yellow",
      "Orange",
      "Red"
    ],
    "correctIndex": 1
  },
  {
    "question": "Goldfish can die from overeating.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is it true that goldfish only have a 3-second memory?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "What color are wild goldfish?",
    "options": [
      "Silver",
      "Orange",
      "Yellow",
      "Green"
    ],
    "correctIndex": 3
  },
  {
    "question": "Goldfish are good parents. They nurse and protect their young until they grow up enough to defend themselves.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "This bird is the fastest animal on the planet in its hunting method, the stoop.",
    "options": [
      "Bald Eagle",
      "Red-tailed Hawk",
      "Peregrine Falcon",
      "Golden Eagle"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Barn Owl likes to sleep all day long.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Red-tailed Hawks are hunted in the USA because of their frequent attacks on domestic animals.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "These raptors are known for their unusually social behavior. They even hunt in groups while the majority of raptors are solitary hunters.",
    "options": [
      "Golden Eagle",
      "Turkey Vulture",
      "Spotted Owl",
      "Harris Hawk"
    ],
    "correctIndex": 3
  },
  {
    "question": "This animal is the largest of the deer family and can be found in the northern parts of North America.",
    "options": [
      "Gazelle",
      "Moose",
      "White Tailed Deer",
      "Elk"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these animals cannot be found in North America?",
    "options": [
      "Flamingo",
      "Walrus",
      "Dingo",
      "Beaver"
    ],
    "correctIndex": 2
  },
  {
    "question": "This bear, also known as a Silvertip bear, is native to North America.",
    "options": [
      "Panda Bear",
      "Polar Bear",
      "Red Panda Bear",
      "Grizzly Bear"
    ],
    "correctIndex": 3
  },
  {
    "question": "The coyote lives in North America and also goes by this name.",
    "options": [
      "Desert Dog",
      "Prairie Wolf",
      "Prairie Dog",
      "Small Wolf"
    ],
    "correctIndex": 1
  },
  {
    "question": "This North American animal is at the top of the food chain in the arctic region.",
    "options": [
      "Walrus",
      "Polar Bear",
      "Arctic Fox",
      "Penguin"
    ],
    "correctIndex": 1
  },
  {
    "question": "This mammal is known for its black fur with a white stripe and for its apparent odor.",
    "options": [
      "Sloth",
      "Ferret",
      "Skunk",
      "Weasel"
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of animal is the cottonmouth?",
    "options": [
      "Mouse",
      "Snake",
      "Bat",
      "Lizard"
    ],
    "correctIndex": 1
  },
  {
    "question": "This creature belongs to the rodent family and is covered in sharp spines or quills.",
    "options": [
      "Nutria",
      "Armadillo",
      "Kiwi",
      "Porcupine"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many species of skunk exist?",
    "options": [
      "6",
      "8",
      "13",
      "11"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many young skunks can be born in one litter?",
    "options": [
      "1-10",
      "1-5",
      "1-7",
      "1-4"
    ],
    "correctIndex": 2
  },
  {
    "question": "What do skunks eat in the wild?",
    "options": [
      "All of these",
      "Insects",
      "Meat",
      "Fruit"
    ],
    "correctIndex": 0
  },
  {
    "question": "How much of an effective range do skunks odor glands have?",
    "options": [
      "15 feet",
      "10 feet",
      "8 feet",
      "20 feet"
    ],
    "correctIndex": 0
  },
  {
    "question": "Can skunks be trained to make good pets?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sometimes skunks kill domestic animals.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many subspecies of Red Fox are found in India?",
    "options": [
      "2",
      "None. Red Fox are not native to India.",
      "1",
      "3"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these coat colors is not found in wild Red Fox populations?",
    "options": [
      "Golden",
      "Spotted",
      "Red",
      "Black"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the top speed that the Red Fox can reach?",
    "options": [
      "25 mph",
      "35 mph",
      "45 mph",
      "55 mph"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these are eaten by the Red Fox?",
    "options": [
      "Insects",
      "worms",
      "All of these",
      "eggs"
    ],
    "correctIndex": 2
  },
  {
    "question": "How long is the Red Foxs lifespan in the wild?",
    "options": [
      "3 years",
      "8 years",
      "6 years",
      "10 years"
    ],
    "correctIndex": 0
  },
  {
    "question": "Fox hunting was made illegal in the U.K. in 2005.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Do foxes hibernate in winter?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately how long is a Red Foxs gestation period?",
    "options": [
      "89 days",
      "55 days",
      "40 days",
      "34 days"
    ],
    "correctIndex": 1
  },
  {
    "question": "Is the Red Fox a protected species in most parts of the world?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is an adult male rooster known as?",
    "options": [
      "Rooster",
      "Buck",
      "Hen",
      "Foul"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the word used for someone that is afraid of chickens?",
    "options": [
      "Xenophobic",
      "Chickopobic",
      "Alektorphobic",
      "Avianphobic"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following is not a breed of chicken?",
    "options": [
      "Australorp",
      "Cubalaya",
      "Houdan",
      "Chinese Crested"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Silkie chicken is the newest known breed.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many beats per minute does a chickens heart usually beat?",
    "options": [
      "100-234",
      "147-189",
      "280-315",
      "95-124"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following color of egg is incorrect for a chicken egg?",
    "options": [
      "black",
      "white",
      "pink",
      "blue"
    ],
    "correctIndex": 0
  },
  {
    "question": "All domestic chickens can be traced back to which bird?",
    "options": [
      "The Wild Turkey",
      "The Macaw",
      "The Red Jungle Fowl",
      "The Amazon Rain Forest Chicken"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following characters is a chicken?",
    "options": [
      "Dori",
      "Foghorn Leghorn",
      "Daffy",
      "Kermit"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the average lifespan of a lion in the wild?",
    "options": [
      "6-9 years",
      "20-24 years",
      "10-14 years",
      "15-20 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "The lion is the largest member of the cat species.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Most lions only survive in Africa. But a population of the much endangered Asiatic lion lives in India. How many estimated lions live in India as of 2007?",
    "options": [
      "300",
      "550",
      "1,500",
      "3,000"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the average maximal speed a lion can reach?",
    "options": [
      "35 mph / 56 km/h",
      "45 mph / 72 km/h",
      "20 mph / 32 km/h",
      "40 mph / 64 km/h"
    ],
    "correctIndex": 0
  },
  {
    "question": "Lions are inactive about 20 hours per day.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately what amount of meat does an adult male lion\u2019s diet require per day?",
    "options": [
      "10 lbs. (4.5 kg)",
      "5 lbs. (2.2 kg)",
      "15 lbs. (6.8 kg)",
      "25 lbs. (11 kg)"
    ],
    "correctIndex": 2
  },
  {
    "question": "Like most mammals lions can only breed with one male ensuring that the offspring belong to just one male.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately how long is a lions gestation period?",
    "options": [
      "200 days",
      "30 days",
      "120 days",
      "60 days"
    ],
    "correctIndex": 2
  },
  {
    "question": "Do white lions exsist in the wild?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "All penguins are found exclusively in the Southern Hemisphere.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many species of penguins live in warm or even tropical environments?",
    "options": [
      "0",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 3
  },
  {
    "question": "The larger the penguin species, the colder the region in which it is found.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is the largest species of penguins?",
    "options": [
      "King Penguin",
      "Giant Penguin",
      "Emperor Penguin",
      "Royal Penguin"
    ],
    "correctIndex": 2
  },
  {
    "question": "Fossil records have shown a species of giant penguin that once stood 4 feet high.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the word penguin mean?",
    "options": [
      "Fat",
      "Black and White",
      "Swimmer",
      "Bird"
    ],
    "correctIndex": 0
  },
  {
    "question": "Large penguins can dive nearly 2,000 feet.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these animals is NOT a natural predator of penguins?",
    "options": [
      "Leopard Seal",
      "Polar Bear",
      "Stellars Sea Eagle",
      "Orca (Killer Whale)"
    ],
    "correctIndex": 1
  },
  {
    "question": "Penguins secrete salt from their nostrils.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where can the polar bear be found?",
    "options": [
      "South Pole",
      "Antartica",
      "Arctic",
      "All of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "Polar bears are among penguins\u2019 most dangerous natural enemies.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What color is a polar bears skin?",
    "options": [
      "Black",
      "White",
      "Pink",
      "Yellow"
    ],
    "correctIndex": 0
  },
  {
    "question": "A polar bear has white fur.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Approximately how many wild polar bears are estimated to live across the Arctic?",
    "options": [
      "20,000",
      "100,000",
      "150,000",
      "60,000"
    ],
    "correctIndex": 0
  },
  {
    "question": "Can polar bears be other colors besides white?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to Guinness Book of World Records, the heaviest wild bear was caught in 1960 and weighed 1,960 lbs (890 kg). What was its length?",
    "options": [
      "Over 11 feet (3,40 m) tall",
      "Over 12 feet (3,70 m) tall",
      "Over 9 feet (2,70 m) tall",
      "Over 10 feet (3 m) tall"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to statistics from the past 3 decades of the 20th century, there is a significant drop in polar bears\u2019 size.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "A polar bear is used as the marketing icon for which of these popular products?",
    "options": [
      "Maytag Freezers",
      "Hoods Ice Cream",
      "Popsicles",
      "Klondike Bars"
    ],
    "correctIndex": 3
  },
  {
    "question": "Brown Bear/polar bear hybrids occur naturally in the wild.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "All dinosaurs were cold-blooded reptiles.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The smallest dinosaur known to science was the size of a chicken.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "All birds are descendants of dinosaurs.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Pterodactyls were large flying dinosaurs.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Humans and human descendants hunted dinosaurs for food.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Some dinosaurs swam in the oceans.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Mammals lived alongside dinosaurs.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "All dinosaurs died out due to a meteor hitting the Earth.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Tyrannosaurus Rex means Tyrant Lizard King.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The giant four-legged dinosaurs such as Apatosauras and Diplodocus are known as Theropods.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Labrador breed comes in 3 different colors.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Labrador Retriever is considered a medium-sized dog. How much does it weigh when fully grown?",
    "options": [
      "65 - 110 pounds",
      "40 - 55 pounds",
      "55 - 80 pounds",
      "20 - 60 pounds"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the estimated average lifespan of a crocodile?",
    "options": [
      "80+ years",
      "50+ years",
      "90+ years",
      "70+ years"
    ],
    "correctIndex": 3
  },
  {
    "question": "On which of these continents can you find the Salt Water Crocodile?",
    "options": [
      "Africa",
      "South America",
      "Australia",
      "North America"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 2006, a crocodile housed at the Australia Zoo, was estimated to be 130 years old.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "A crocodile bite strength is up to how many pounds psi (per square inch)?",
    "options": [
      "3000 psi",
      "5000 psi",
      "700 psi",
      "1500 psi"
    ],
    "correctIndex": 0
  },
  {
    "question": "Crocodiles sex is determined by the temperature of their nest.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is NOT a species of crocodile?",
    "options": [
      "Nile Crocodile",
      "Mugger Crocodile",
      "American Crocodile",
      "African Crocodile"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to data from the year 2001, crocodiles were the second leading cause of animal related death worldwide, second to venomous snakes.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the average incubation period of crocodile eggs?",
    "options": [
      "50 days",
      "80 days",
      "120 days",
      "25 days"
    ],
    "correctIndex": 1
  },
  {
    "question": "Beavers are the second largest rodents in the world after which animal?",
    "options": [
      "Muskrat",
      "Mountain Marmot",
      "Capybara",
      "Sea Otter"
    ],
    "correctIndex": 2
  },
  {
    "question": "In Europe, the European Beaver (Castor fiber) was almost wiped out. It was driven to near extinction because of its fur and its scent gland that was used for medicinal purposes.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "A beaver will build a dam even in dried up waterways if a recording of rushing water is played.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The North American Beaver is Canadas National symbol that adorns which Canadian coin?",
    "options": [
      "Penny",
      "Nickle",
      "Quarter",
      "Dime"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the 17th century a ban was placed on eating meat during lent but the beaver meat was not included in that ban.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the gestation period of a beaver?",
    "options": [
      "2 months",
      "3 months",
      "6 months",
      "4 months"
    ],
    "correctIndex": 3
  },
  {
    "question": "Can a beaver hold its breath underwater for more than 30 minutes?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "Butterflies need the warmth of the sun in order to fly. They cannot possibly fly if the temperature is below this.",
    "options": [
      "60 F (16 C)",
      "80 F (27 C)",
      "70 F (21 C)",
      "50 F (10 C)"
    ],
    "correctIndex": 3
  },
  {
    "question": "You can kill a butterfly if you hold its wings.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Butterflies taste their food through this organ.",
    "options": [
      "The wings",
      "Their faceted eyes",
      "The proboscis",
      "The legs"
    ],
    "correctIndex": 3
  },
  {
    "question": "Butterflies do not have lungs. They breathe trough this organ.",
    "options": [
      "The proboscis",
      "The abdomen",
      "The eyes",
      "The legs"
    ],
    "correctIndex": 1
  },
  {
    "question": "The butterfly is a relative to the crab and the lobster.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is what mostly attracts a butterfly to a flower.",
    "options": [
      "The flowers nectar",
      "The flowers color",
      "The flowers shape",
      "The flowers smell"
    ],
    "correctIndex": 0
  },
  {
    "question": "The expression social butterfly is often used to describe a woman. It means that she does this.",
    "options": [
      "Uses too much cosmetics",
      "Behaves quite self-conceited",
      "Flits from one person to another",
      "Wears clothes with bright colors"
    ],
    "correctIndex": 2
  },
  {
    "question": "Why does your cat interrupt you and want petting when youre on the phone?",
    "options": [
      "your cat thinks you are talking to him/ her",
      "to annoy you",
      "to be a part of your telephone call",
      "your cats is jealous that youre talking to someone else"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why do cats seem to be attracted to the one person who doesnt like cats?",
    "options": [
      "Kitty wants to annoy them",
      "Kitty thinks that person has food",
      "Kitty wants to win them over",
      "Kitty sees that person as unintimidating"
    ],
    "correctIndex": 3
  },
  {
    "question": "Cats are so curious because they are always looking for food.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Cats only purr when they are happy.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Why do cats suddenly race through the house?",
    "options": [
      "They feel a change in the weather.",
      "They have an overflow of pent-up energy.",
      "They want to get your attention.",
      "They feel the presence of a ghost."
    ],
    "correctIndex": 1
  },
  {
    "question": "Why does a cat rub against your leg?",
    "options": [
      "Because she/ he really likes you.",
      "Because it feels good.",
      "To mark you by depositing his/ her scent",
      "To show he/ she trusts you"
    ],
    "correctIndex": 2
  },
  {
    "question": "Why does a cat bury his/ her waste?",
    "options": [
      "To show their dominance",
      "To protect their trail from predators",
      "Because they are so territorial.",
      "Because they are very clean animals."
    ],
    "correctIndex": 1
  },
  {
    "question": "A cats memory is about half as retentive as a dogs.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why do cats always want in when they are out, and out when thery are in?",
    "options": [
      "To re-mark their scent",
      "To annoy you",
      "Because they have pent-up energy",
      "Because they are bored"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why do cats like to sleep in the sun?",
    "options": [
      "To make up for the drop in body temperature when they sleep",
      "To keep from shedding so much",
      "It reminds them of being kittens",
      "Because they can hear better when they are warm"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why do cats go crazy over catnip?",
    "options": [
      "Because it smells like a cat in heat",
      "Because it smells like prey",
      "Because it smells like tasty food",
      "Because it is an aphrodisiac"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many known species of earthworm exist worldwide?",
    "options": [
      "3,000",
      "2,500",
      "5,500",
      "1,000"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Giant Gippsland Earthworm, the largest species of earthworm, can reach nearly 10 feet in length.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many hearts does a typical earthworm have?",
    "options": [
      "2",
      "10",
      "4",
      "8"
    ],
    "correctIndex": 1
  },
  {
    "question": "Worm casts (waste) is richer in nutrients and essential particles than the first 6 inches of topsoil.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Is soil pollution one of the biggest threats to earthworms?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Why do earthworms come to the surface after rainstorms?",
    "options": [
      "The temperature on the surface is cooler.",
      "They cant take the acid rain.",
      "They can drown if their holes fill up.",
      "No one knows for sure but there are four theories trying to explain this behaviour."
    ],
    "correctIndex": 3
  },
  {
    "question": "Rich soil may contain up to 100,000 earthworms per square acre.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many species of earthworm are native to Australia?",
    "options": [
      "650",
      "450",
      "250",
      "850"
    ],
    "correctIndex": 0
  },
  {
    "question": "One of the biggest threats to earthworm survival in the UK is the New Zealand Roundworm which feeds on earthworms.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many million of earthworms were exported from Canada and sold worldwide in 1980?",
    "options": [
      "225 million",
      "260 million",
      "370 million",
      "100 million"
    ],
    "correctIndex": 2
  },
  {
    "question": "To which animal class do octopuses belong?",
    "options": [
      "Mollusk",
      "Coleoid",
      "Nautiloid",
      "Cephalopod"
    ],
    "correctIndex": 3
  },
  {
    "question": "As far as disguising is concerned, octopuses are among the most proficient species in nature.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Octopuses can live in fresh water.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following animals is the least related to the octopus?",
    "options": [
      "Scallop",
      "Snail",
      "Eel",
      "Clam"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many arms do octopuses have?",
    "options": [
      "8",
      "5",
      "0",
      "2"
    ],
    "correctIndex": 0
  },
  {
    "question": "Octopuses are known to kill sharks.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Octopuses can not be kept as pets.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Approximately how tall is a grizzly bear when standing on its hind legs?",
    "options": [
      "9 feet (2.7 m)",
      "7 feet (2.1 m)",
      "6 feet (1.8 m)",
      "8 feet (2.4 m)"
    ],
    "correctIndex": 3
  },
  {
    "question": "Grizzly bears can be found in Europe and North America.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which country is the grizzly bear listed as a threatened species?",
    "options": [
      "U.S.",
      "Germany",
      "Canada",
      "Sweden"
    ],
    "correctIndex": 0
  },
  {
    "question": "Grizzly bears are strict carnivores.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Although the grizzly bear is on the flag of this state, the last grizzly was shot there in 1922.",
    "options": [
      "Nevada",
      "California",
      "Oregon",
      "Idaho"
    ],
    "correctIndex": 1
  },
  {
    "question": "The grizzly bear is a subspecies of the brown bear.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these do grizzly bears eat?",
    "options": [
      "Moose",
      "Berries",
      "Fish",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Grizzly bears hibernate through the winter.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many fatal brown and grizzly bear attacks have been reported between 1900 and 2003 in North America?",
    "options": [
      "175",
      "53",
      "542",
      "257"
    ],
    "correctIndex": 1
  },
  {
    "question": "Should you feed a small dog, such as a miniature poodle, the same amount of food you should a large dog, for example a great dane?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "A water bowl should be kept within easy access for your dog at all times.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these things is something you should never feed your dog?",
    "options": [
      "Coconuts",
      "Chocolate",
      "Milk",
      "Raw meat"
    ],
    "correctIndex": 1
  },
  {
    "question": "As a general rule, the bigger a dog is the more it should be exercised (walks, playing fetch, etc.)",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is only a dog food brand?",
    "options": [
      "Eukanuba",
      "Cesar",
      "Iams",
      "Purina"
    ],
    "correctIndex": 1
  },
  {
    "question": "Dogs sweat through their skin, like humans.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "A dog should never be left with a child under this age because the child may injure the dog or him/herself.",
    "options": [
      "ten",
      "seven",
      "three",
      "five"
    ],
    "correctIndex": 3
  },
  {
    "question": "The dodos other name was The Robert Don.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What were the dodos closest living relatives in nature?",
    "options": [
      "Chickens",
      "Pigeons",
      "Parrots",
      "Turkeys"
    ],
    "correctIndex": 1
  },
  {
    "question": "Are their any complete dodo specimens anywhere in the world?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year was the dodo discovered?",
    "options": [
      "1627",
      "1605",
      "1681",
      "1598"
    ],
    "correctIndex": 3
  },
  {
    "question": "There is an intact dodo egg specimen housed in the East London museum in South Africa.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what year did the dodo become extinct?",
    "options": [
      "1705",
      "1789",
      "1681",
      "1803"
    ],
    "correctIndex": 2
  },
  {
    "question": "The dodo was able to grow so large and become flightless because of the lack of natural predators on the island it inhabited.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Are there any complete dodo skeletons anywhere in the world?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "The does \u201ccheetah\u201d mean translated from Sanskrit?",
    "options": [
      "Fast",
      "Spotted One",
      "Lightning",
      "Stealth cat"
    ],
    "correctIndex": 1
  },
  {
    "question": "The highest recorded speed a cheetah has obtained is 80 mph (130 km/h.)",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What are cheetahs that have mutated patterning that creates blotches instead of spots called?",
    "options": [
      "King Cheetahs",
      "Smudge Cheetahs",
      "Black Cheetahs",
      "Striped Cheetahs"
    ],
    "correctIndex": 0
  },
  {
    "question": "Cheetahs are only found in Africa.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is not a sound made by cheetahs?",
    "options": [
      "Hiss",
      "Yelp",
      "Roar",
      "Purr"
    ],
    "correctIndex": 2
  },
  {
    "question": "Unlike most cats, cheetahs prefer to hunt during the day.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The ruler of the Mughal Empire Akbar the Great was very enamored with cheetahs and it is said he kept a stable of how many of these cats?",
    "options": [
      "5,000",
      "750",
      "1,000",
      "500"
    ],
    "correctIndex": 2
  },
  {
    "question": "The gestation period of a cheetah is about 90-95 days.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the typical lifespan of the cheetah?",
    "options": [
      "25-40 years",
      "15-25 years",
      "5-10 years",
      "10-20 years"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 2007 the amount of cheetahs left in the wild dropped to what number?",
    "options": [
      "12,000",
      "20,000",
      "30,000",
      "5,000"
    ],
    "correctIndex": 0
  },
  {
    "question": "Are frogs reptiles?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "What frog is the most poisonous?",
    "options": [
      "Cane Toad",
      "Dart Frog",
      "Corroboree Frog",
      "Red-Eyed tree frog"
    ],
    "correctIndex": 1
  },
  {
    "question": "Baby frogs are called pups.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these types of frogs shares its name with an animal that is not a frog?",
    "options": [
      "horned frog",
      "leopard frog",
      "tree frog",
      "arrow frog"
    ],
    "correctIndex": 0
  },
  {
    "question": "Do all frogs live their whole life in water?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "The African Bullfrog is the largest frog.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Are Red-eyed Tree Frogs carnivores?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the smallest frog?",
    "options": [
      "Red-Eyed Tree frog",
      "Brazilian Gold Frog",
      "Cane Toad",
      "Monte Iberia Eleuth"
    ],
    "correctIndex": 1
  },
  {
    "question": "There are frogs that can fly (or make fly-like movements)",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Do frogs have gills?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Frogs can breathe underwater.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many species of zebra are known to exist?",
    "options": [
      "6",
      "4",
      "3",
      "5"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of these is not a species of zebra?",
    "options": [
      "Savanna Zebra",
      "Cape Mountain Zebra",
      "Grevys Zebra",
      "Plains Zebra"
    ],
    "correctIndex": 0
  },
  {
    "question": "Can a zebra be ridden if trained properly?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "How tall is a typical zebra at the shoulder?",
    "options": [
      "4 feet (1.2 m)",
      "6 feet (1.8 m)",
      "5 1/2 feet (1.6 m)",
      "3 feet (0.9 m)"
    ],
    "correctIndex": 0
  },
  {
    "question": "Zebras are related to rhinos.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How fast can a zebra run?",
    "options": [
      "30 mph (50 km/h)",
      "25 mph (40 km/h)",
      "50 mph (80 km/h)",
      "40 mph (65 km/h)"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these are not a function of a zebras stripes?",
    "options": [
      "A warning sign to other zebras",
      "Identification within the herd",
      "Heat dissipation",
      "Confusion of predators"
    ],
    "correctIndex": 0
  },
  {
    "question": "How long can a zebra live in captivity?",
    "options": [
      "30 years",
      "20 years",
      "40 years",
      "15 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "This type of ant causes a lot of allergic reactions in the USA.",
    "options": [
      "Jack Jumper  ant",
      "Bulldog ant",
      "Western brown ant",
      "Fire ant"
    ],
    "correctIndex": 3
  },
  {
    "question": "This type of ant is considered the most venomous of all insects.",
    "options": [
      "Western brown ant",
      "Bulldog ant",
      "Jack jumper ant",
      "Fire ant"
    ],
    "correctIndex": 2
  },
  {
    "question": "About how long have ants been around on Earth?",
    "options": [
      "8 million years",
      "45 milllion years",
      "60 million years",
      "25 million years"
    ],
    "correctIndex": 2
  },
  {
    "question": "The largest ant colony is located on the Ishikari coast of Hokkaido. Approximately how many ants are there in this colony?",
    "options": [
      "300,000,000",
      "30,000,000",
      "700,000,000",
      "1,500,000"
    ],
    "correctIndex": 0
  },
  {
    "question": "What are the three basic parts of an ants body?",
    "options": [
      "Antennae, abdomen, thoraces",
      "Head, mesosoma, metasoma",
      "Head, abdomen, metasoma",
      "Head, thorax, somatomy"
    ],
    "correctIndex": 1
  },
  {
    "question": "All of these substances but one are a safe way to get rid of ants in the house. Which is the odd one?",
    "options": [
      "Cider vinegar",
      "Windex mixed with ivory soap",
      "Wine",
      "Whole cloves"
    ],
    "correctIndex": 2
  },
  {
    "question": "What do we call the type of ants that plant seeds to grow food?",
    "options": [
      "Formicadae",
      "Thresher ants",
      "Farmer ants",
      "Harvester ants"
    ],
    "correctIndex": 3
  },
  {
    "question": "Carpenter ants have become a problem because of the wood they eat.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is special about the red ants of the Southwestern USA and Central and South America?",
    "options": [
      "They can live in temperatures from 11 degrees Centigrade to 51 degrees Centigrade.",
      "They can live for six days without food or water.",
      "They can change color.",
      "They steal larvae for slaves."
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1966 was found the first ant fossil. From which geological period did it come from?",
    "options": [
      "Cretaceous",
      "Pennsylvannian",
      "Pre-Fermaceous",
      "Jurasic"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement about ants is untrue?",
    "options": [
      "Anteaters prefer ants to any other type of food.",
      "An ant colony will eat its own larvae if there is no other food around.",
      "Bullet ants are considered to have the most painful sting.",
      "Ants are sometimes put into Thai salads."
    ],
    "correctIndex": 0
  },
  {
    "question": "Warner Brothers highest grossing film of 1954 was about enormous ants that threatened a small town in the USA. What was the title of this movie?",
    "options": [
      "Ants!",
      "Them!",
      "Invasion",
      "Invaders"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many species of flamingo are native to the Americas?",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "correctIndex": 3
  },
  {
    "question": "A flamingo\u2019s feathers can change color depending on its diet.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What do you call a group of flamingos?",
    "options": [
      "Family",
      "Pink",
      "Flock",
      "Pat"
    ],
    "correctIndex": 3
  },
  {
    "question": "All flamingos have 12 black flight feathers at the tips of each wing.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these flamingo species is not native to the Americas?",
    "options": [
      "Chilean Flamingo",
      "Andean Flamingo",
      "Lesser Flamingo",
      "James Flamingo"
    ],
    "correctIndex": 2
  },
  {
    "question": "Why do flamingos often stand on one leg?",
    "options": [
      "To keep their feet from becoming waterlogged.",
      "To keep feet from getting tired.",
      "To stir up as little silt from bottom as possible.",
      "Noone knows for sure."
    ],
    "correctIndex": 3
  },
  {
    "question": "Are baby flamingos pink?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "What decade did the pop culture icon the plastic lawn flamingo come into existence?",
    "options": [
      "40s",
      "60s",
      "30s",
      "80s"
    ],
    "correctIndex": 1
  },
  {
    "question": "Once the dingo was introduced to Australia, the Thylacine population decreased steadily until the only viable populations were on the Island of Tasmania.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Are Thylacines marsupials?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "When was the last reported killing of a Thylacine in Australia?",
    "options": [
      "1930",
      "1880",
      "1900",
      "1910"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of the zoo in which the last known Thylacine was placed in 1936?",
    "options": [
      "Hobart Zoo",
      "Queensland Zoo",
      "Queen Elizabeth Zoological Gardens",
      "Australia Zoo"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why were Thylacines called Tigers?",
    "options": [
      "because of the vicious way in which they killed their prey",
      "because they looked like cats",
      "because of their mean disposition",
      "because of the stripes on their back"
    ],
    "correctIndex": 3
  },
  {
    "question": "Was there ever any evidence found after 1936 that Thylacines may have still been living in Australia?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "It was proven that Thylacines killed some sheep in 1957.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the fine for shooting a Thylacine?",
    "options": [
      "$10,000",
      "$1,000",
      "$3,000",
      "$5,000"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what year were Thylacines classified as extinct?",
    "options": [
      "1986",
      "1979",
      "1974",
      "1965"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1984 what famous mogul offered a $100,000 reward for proof of the continued existence of Thylacines?",
    "options": [
      "Donald Trump",
      "Rupert Murdock",
      "Ted Turner",
      "Bill Gates"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is a pangolin?",
    "options": [
      "A scaly ant-eating mammal",
      "A poisonous snake",
      "A type of fish",
      "A type of waterfowl"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the Malaysian word pangolin mean?",
    "options": [
      "Armor",
      "Roll into a ball",
      "Walking Pinecone",
      "Scaly Anteater"
    ],
    "correctIndex": 1
  },
  {
    "question": "Pangolins have no teeth.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The tongue of a pangolin is so long that it is anchored to its pelvis.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Are pangolins related to anteaters and armadillos?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "Can pangolins walk on their hind legs?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements concerning the way in which pangolins defend themselves is false?",
    "options": [
      "They run away very quickly.",
      "They spray a noxious odor like a skunk.",
      "They curl up in a ball.",
      "They attack by slashing their long claws or whipping their tails."
    ],
    "correctIndex": 0
  },
  {
    "question": "The armor plates of pangolins are made of tough bone.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many young pangolins can an adult pangolin have at one time?",
    "options": [
      "1-2",
      "3-4",
      "4-5",
      "2-3"
    ],
    "correctIndex": 0
  },
  {
    "question": "Although not all bear subspecies are vicious, there is a tendency for increase in bear attacks due to this factor.",
    "options": [
      "Destruction of bears natural habitat",
      "Pollution",
      "Genetical mutation of bears",
      "Hunting"
    ],
    "correctIndex": 0
  },
  {
    "question": "Despite sharks\u2019 bad reputation thanks to movies out of 300 species of sharks only this much are known to have attacked and killed a man.",
    "options": [
      "4",
      "10",
      "2",
      "11"
    ],
    "correctIndex": 0
  },
  {
    "question": "Although jellyfish may seem to you calm and harmless, an encounter with some species may leave you in excruciating pain and even kill you in minutes. Which of the following species of jellyfish is venomous enough to kill a man?",
    "options": [
      "Sea nettle",
      "Mastigias",
      "Box jellyfish",
      "Medusa Jellyfish"
    ],
    "correctIndex": 2
  },
  {
    "question": "We\u2019ve seen these animals as friendly and approachable but the truth is that they\u2019re unpredictable. What is the average number of fatalities a year elephants cause?",
    "options": [
      "150-200",
      "20-40",
      "300-500",
      "1000-1500"
    ],
    "correctIndex": 2
  },
  {
    "question": "Hippopotamuses may seem slow, lazy and bulky but in fact are one of the most dangerous African animals. Which of the following should you avoid in order to prevent a hippopotamus attack?",
    "options": [
      "Standing between the hippopotamus and its calf",
      "All of these",
      "Surprising the hippopotamus",
      "Blocking the hippopotamus\u2019 way"
    ],
    "correctIndex": 1
  },
  {
    "question": "Crocodiles like to stay motionless in water and wait for the perfect time to strike. These powerful prehistoric creatures annually give what estimated number of fatalities?",
    "options": [
      "1000-1500",
      "50-100",
      "100-200",
      "600-800"
    ],
    "correctIndex": 3
  },
  {
    "question": "If you happen to be near a big cat (e.g. lion, tiger, lynx) that seems to be about to attack you, which of the following shouldn\u2019t you do in any case?",
    "options": [
      "Scream and shout",
      "Try to look larger than you really are",
      "Turn back and run",
      "Stare at its eyes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Although only a small percent of scorpions are venomous to people, 800 to 2000 human deaths each year are caused by scorpions. During which part of the day are these creatures most active?",
    "options": [
      "Morning",
      "All day",
      "Noon",
      "Night"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following statements about snakes is not true?",
    "options": [
      "Snakes can strike upto half their length.",
      "A fully grown king cobra can rear up so it looks a human in the eyes.",
      "Not all venomous snakes are capable of killing a man.",
      "Snakes will attack almost always they sense the presence of a human."
    ],
    "correctIndex": 3
  },
  {
    "question": "Surprisingly, the number one killer among animals with about 2-3 million human fatalities a year is a tiny insect. Which is it?",
    "options": [
      "Bee",
      "Mosquito",
      "Tsetse fly",
      "Wasp"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many species of rhinoceros survive in the wild?",
    "options": [
      "2",
      "5",
      "4",
      "3"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is NOT a species of rhinoceros?",
    "options": [
      "African Rhino",
      "Indian Rhino",
      "Javan Rhino",
      "Sumatran Rhino"
    ],
    "correctIndex": 0
  },
  {
    "question": "The deaths caused by rhinos in India and Nepal exceed the total number of deaths caused by leopards and tigers.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Throughout the period from the 1970s to the end of the 20th century, the rhinoceros numbers declined by approximately what percentage?",
    "options": [
      "50%",
      "90%",
      "60%",
      "75%"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Asian folklore the rhinoceros would stomp out fires in the jungle.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the life span of a rhino?",
    "options": [
      "15 years",
      "40 years",
      "20 years",
      "30 years"
    ],
    "correctIndex": 1
  },
  {
    "question": "The species name White Rhinoceros is the result of mis-translation of the word white.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the gestation period of a rhino?",
    "options": [
      "12 months",
      "16 months",
      "20 months",
      "24 months"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the #1 reason for the rhinos decline worldwide?",
    "options": [
      "Disease",
      "Farming",
      "Predators",
      "Poaching"
    ],
    "correctIndex": 3
  },
  {
    "question": "Hyenas are only found in Africa.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Hyenas are most closely related to what creatures?",
    "options": [
      "Badger",
      "Bears",
      "Cats",
      "Mongoose"
    ],
    "correctIndex": 3
  },
  {
    "question": "Hyenas were domesticated and eaten in ancient Egypt.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which of these African environments are hyenas NOT found?",
    "options": [
      "Desert",
      "Forests",
      "Mountains",
      "Grasslands"
    ],
    "correctIndex": 0
  },
  {
    "question": "Are male hyenas the dominant members of their groups?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is not a species of hyena?",
    "options": [
      "Brown",
      "Striped",
      "Golden",
      "Spotted"
    ],
    "correctIndex": 2
  },
  {
    "question": "Are spotted hyenas considered an endangered species?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is a group of hyenas called?",
    "options": [
      "Pack",
      "Posse",
      "Giggle",
      "Clan"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to the Medieval Bestiary hyenas have the ability to change their sex.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What country was home to the Moa?",
    "options": [
      "New Zealand",
      "Puerto Rico",
      "Indonesia",
      "Madagascar"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many species of Moa are known to have existed?",
    "options": [
      "3-5",
      "5-7",
      "10-13",
      "11-15"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Moa was unique because even though it was a bird it had no wings.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the main reason for the extinction of the Moa?",
    "options": [
      "It was hunted by man for food.",
      "There was not enough room on the island for so many large birds",
      "It could easily be caught by predators.",
      "It got to large to support itself."
    ],
    "correctIndex": 0
  },
  {
    "question": "What animal was the number one predator of the Moa?",
    "options": [
      "They had no predator they were too large",
      "An extinct species of eagle",
      "An extinct species of lion",
      "An extinct species of wolf"
    ],
    "correctIndex": 1
  },
  {
    "question": "Was the male Moa larger than the female?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is the Moa related to the kiwi, a living species of flightless bird from New Zealand?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what year were the first Moa remains discovered by Europeans?",
    "options": [
      "1765",
      "1857",
      "1839",
      "1724"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these European countries is not home to any wild native reindeer?",
    "options": [
      "Finland",
      "Switzerland",
      "Russia",
      "Scotland"
    ],
    "correctIndex": 1
  },
  {
    "question": "Both male and female reindeer grow antlers.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately how many miles per year can the North American caribou travel?",
    "options": [
      "11,000",
      "1,000",
      "3,000",
      "7,000"
    ],
    "correctIndex": 2
  },
  {
    "question": "Reindeer are strict herbivores (vegetarians).",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Approximately how many reindeer live in Eurasia?",
    "options": [
      "10 million",
      "5 million",
      "15 million",
      "1 million"
    ],
    "correctIndex": 1
  },
  {
    "question": "Siberians  use reindeer to ride on.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is not a species of reindeer?",
    "options": [
      "Woodland carribou",
      "Northern caribou",
      "Arctic reindeer",
      "Mountain reindeer"
    ],
    "correctIndex": 1
  },
  {
    "question": "Are reindeer antlers used as a food by humans?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many species of pigeons and doves exist?",
    "options": [
      "200",
      "375",
      "300",
      "250"
    ],
    "correctIndex": 2
  },
  {
    "question": "Pigeon and dove fossils are regularly found giving us a lot of information on pigeon evolution?",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Pigeons are master nest builders.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why are pigeon nests or eggs rarely seen?",
    "options": [
      "Pigeons are cliff dwellers and build their nests in high places.",
      "Pigeons do their best to conceal nests.",
      "Pigeons are picky and only build nests high up in certain types of trees.",
      "Pigeons dont build nests."
    ],
    "correctIndex": 0
  },
  {
    "question": "Pigeons were so valuable in wartime that some won medals for their service.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Pigeons are only one of seven species to pass the mirror test, which tests if animals recognize their own reflected image.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the common name for the pigeon that we see in the city streets and in our backyards?",
    "options": [
      "Mourning Dove",
      "Rock Dove",
      "Common Dove",
      "Fancy Dove"
    ],
    "correctIndex": 1
  },
  {
    "question": "Dinosaurs lived during which geologic era?",
    "options": [
      "Cretazoic",
      "Protozoic",
      "Holozoic",
      "Mesozoic"
    ],
    "correctIndex": 3
  },
  {
    "question": "The word dinosaur is a combination of two Greek words. One word  means lizard. What does the other word mean?",
    "options": [
      "Terrifying",
      "Herbivorous",
      "Godlike",
      "Beautiful"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dinosaurs once roamed Colorado and Wyoming.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the theropod dinosaur with a long head, flat snout, and large sickle-shaped claw on the second toe of each foot.",
    "options": [
      "Stegosaurus",
      "Velociraptor",
      "Tyrannosaur",
      "Raptor"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the prehistoric reptile of the late Jurassic and Cretaceous period with featherless wing membrane.  It is believed this reptile flew.",
    "options": [
      "Bronchialsaurus",
      "Accipitridae Raptor",
      "dactylic raptor",
      "Pterodactyl"
    ],
    "correctIndex": 3
  },
  {
    "question": "The name brontosaurus is derived from the Greek words sauros, which means lizard, combined with another word. What does the word bronte mean?",
    "options": [
      "Large",
      "Long neck",
      "Poetic",
      "Thunder or roar"
    ],
    "correctIndex": 3
  },
  {
    "question": "The species Tyrannosaurus Rex  was herbivorous.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these dinosaurs had dorsal plates and spikes?",
    "options": [
      "Heloderma  suspectum",
      "H. horridum",
      "Hydrodamalis gigans",
      "Stegosaurus"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to history/science/geology, dinosaurs became extinct approximately how many years ago?",
    "options": [
      "10 million",
      "25 million",
      "80 million",
      "65 million"
    ],
    "correctIndex": 3
  },
  {
    "question": "This reptile, endemic to new Zealand, is the only surviving rhynchocephalian.",
    "options": [
      "Perisssodactyl",
      "None of these",
      "Kephalosaurus",
      "Tuatara"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which one of these movies tells the story of Littlefoot, an Apatosaurus in search of the Great Valley where dinosaurs can live in peace?",
    "options": [
      "Walking With Dinosaurs",
      "Jurassic Park",
      "King Kong",
      "The Land Before Time"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these books about prehistoric animals and dinosaurs was written by Arthur Conan Doyle?",
    "options": [
      "Dinosaur Planet",
      "Jurassic Park",
      "Dinotopia",
      "The Lost World"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the 1980s, who voiced the character of Dino, the pet dinosaur in the animated series The Flintstones?",
    "options": [
      "Frank Welker",
      "Mel Blanc",
      "Jean Vander Pyl",
      "Alan Reed"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the book Jurassic Park, the fictional island Isla Nublar, where recreated dinosaur species live, is situated in which part of the world?",
    "options": [
      "Near Costa Rica",
      "Near Japan",
      "Near Chile",
      "Near Spain"
    ],
    "correctIndex": 0
  },
  {
    "question": "The BBC series Walking with Dinosaurs, which won three Emmy Awards, consisted of how many parts?",
    "options": [
      "12",
      "3",
      "6",
      "2"
    ],
    "correctIndex": 2
  },
  {
    "question": "The design of the Japanese fictional monster Godzilla was based on the characteristics of which dinosaur?",
    "options": [
      "Stegosaurus",
      "All of these",
      "Tyrannosaurus",
      "Iguanodon"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the cartoon Dinosaucers, Bronto Thunder is what kind of dinosaur?",
    "options": [
      "An evolved Apatosaurus",
      "An evolved Stegosaurus",
      "An evolved Archaeopteryx",
      "An evolved Triceratops"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is Dinotopia, the fictional place where humans and dinosaurs live together in James Gurneys books and Hallmarks mini series?",
    "options": [
      "A planet",
      "A hidden island",
      "A mountain",
      "A large volcano"
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of celestial body is the 9949 Brontosaurus?",
    "options": [
      "Asteroid",
      "Planet",
      "Star",
      "Black hole"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the meaning of the term Triceratops, referring to a dinosaur genus discovered in 1888 in North America?",
    "options": [
      "Three heads",
      "Beast with three tails",
      "Three-tongued beast",
      "Three horns on the face"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which one of these dinosaurs was bigger than a dog?",
    "options": [
      "Saltopus",
      "Parvicursor",
      "Microraptor",
      "Triceratops"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the scientific classification of animals, what does the term Dinosauria signify?",
    "options": [
      "A family",
      "A superorder",
      "A genus",
      "A kingdom"
    ],
    "correctIndex": 1
  },
  {
    "question": "Fossils of a Velociraptor attacking a Protoceratops, proving that dinosaurs attacked and ate each other, were discovered in which part of the world in 1971?",
    "options": [
      "Death Valley",
      "The Gobi Desert",
      "The Balkans",
      "Bernissart, Belgium"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of these dinosaurs was carnivorous?",
    "options": [
      "Eoraptor",
      "Diplodocus",
      "Maiasaura",
      "Triceratops"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these dinosaurs was herbivorous?",
    "options": [
      "Velociraptor",
      "Protoceratops",
      "Tyrannosaurus",
      "Allosaurus"
    ],
    "correctIndex": 1
  },
  {
    "question": "No dinosaur fossils have been found on which one of these continents?",
    "options": [
      "Antarctica",
      "Europe",
      "Africa",
      "None of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many fingers did the Tyrannosaurus rex have on its forelimbs?",
    "options": [
      "4",
      "3",
      "5",
      "2"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first evidence of herding behaviour among dinosaurs was discovered in 1878 in which part of the world?",
    "options": [
      "USA",
      "Argentina",
      "Belgium",
      "China"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of these statements about the Seismosaurus, the Earth-shaking lizard, is wrong?",
    "options": [
      "It could reach 33 meters in length.",
      "It was recognized as a species in 1991.",
      "Its hind legs were shorter than its front legs.",
      "It was herbivorous."
    ],
    "correctIndex": 2
  },
  {
    "question": "How long is the average lifespan of an elephant?",
    "options": [
      "70 years",
      "15 years",
      "110 years",
      "35 years"
    ],
    "correctIndex": 0
  },
  {
    "question": "Just like humans, apes and dolphins, elephants can recognize themselves in a mirror.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Until what age can the female elephant (called a cow) produce offspring?",
    "options": [
      "50 years",
      "15 years",
      "75 years",
      "7 years"
    ],
    "correctIndex": 0
  },
  {
    "question": "Elephants always give birth to twins.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Elephants express joy by spinning in circles, trumpeting, roaring, screaming, urinating, and flapping their ears. In which of these cases will an elephant not act this way?",
    "options": [
      "when meeting a friend (elephant or human)",
      "when playing games",
      "after the death of an elderly elephant",
      "after the birth of a new baby elephant"
    ],
    "correctIndex": 2
  },
  {
    "question": "Elephants sometimes have stillborn births, but are not bothered by the loss since the baby was never alive.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Mammoths are members of the elephant family.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many species of elephant exist today?",
    "options": [
      "1",
      "6",
      "5",
      "3"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many individual muscles are in an elephants trunk?",
    "options": [
      "2,000",
      "10,000",
      "40,000",
      "500"
    ],
    "correctIndex": 2
  },
  {
    "question": "When swimming, an elephant will use its trunk as a snorkel.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Elephants intertwine their trunks with the trunks of other elephants, much like a handshake. What does an elephant not do with its trunk?",
    "options": [
      "caress a baby elephant",
      "drink through it like through a straw",
      "place food in their mouth",
      "grab enemies and fling them away"
    ],
    "correctIndex": 1
  },
  {
    "question": "Elephants spend 16 hours a day collecting and eating food, an average of 400 lbs of food a day. But their bodies do not digest 100% of the food. How much of the food does the elephants body digest?",
    "options": [
      "40%",
      "80%",
      "60%",
      "20%"
    ],
    "correctIndex": 0
  },
  {
    "question": "It has been reported that in the period 1992-2008, Ringling Bros. and Barnum  Bailey Circus had at least this many elephant deaths caused by abuse and neglect.",
    "options": [
      "24",
      "0",
      "1",
      "7"
    ],
    "correctIndex": 0
  },
  {
    "question": "An elephants brain is half the size of the human brain.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Through what body part can an elephant NOT hear?",
    "options": [
      "feet",
      "skin",
      "trunk",
      "ears"
    ],
    "correctIndex": 1
  },
  {
    "question": "Only female elephants were used in battle, because male elephants were too difficult to tame and train.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Islamic history, 570 A.D. was The Year of the Elephant. Which of these happened in that year?",
    "options": [
      "The Qur\u2019an was written in book form",
      "Muhammad received his first revelation",
      "Muhammad was born",
      "Muhammad became ill and died"
    ],
    "correctIndex": 2
  },
  {
    "question": "An elephants tusks grow continuously, about 7 inches a year.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which is true about elephants?",
    "options": [
      "The elephant is a good jumper.",
      "The elephant is not a protected species.",
      "An elephants skin is 2.5 inches thick.",
      "The elephant is a good swimmer."
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the only marsupial in the world that has a backwards pouch?",
    "options": [
      "kangaroo",
      "echidna",
      "koala",
      "wombat"
    ],
    "correctIndex": 3
  },
  {
    "question": "Salt water crocodiles belong to the amphibian group.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This reef, that extends along the east coast of Australia, is home to countless animals and is considered one of the wonders of the natural world.",
    "options": [
      "Great Barrier Reef",
      "Division Reef",
      "Australia Reef",
      "Surfer Reef"
    ],
    "correctIndex": 0
  },
  {
    "question": "The female of this species is sometimes called a Blue Flyer, because of its bluish coloration.",
    "options": [
      "white heron",
      "emu",
      "red kangaroo",
      "kookaburra"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of these is NOT a type of wombat?",
    "options": [
      "Common",
      "Southern Hairy Nosed",
      "Arid Central",
      "Northern Hairy Nosed"
    ],
    "correctIndex": 2
  },
  {
    "question": "Echidnas can swim.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The echidnas diet consists mainly of this group of animals.",
    "options": [
      "Mammals",
      "Insects",
      "Fish",
      "Birds"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where does the kookaburra, a common Australian bird, get its name from?",
    "options": [
      "The food it eats",
      "The aboriginal name for it",
      "Its appearance",
      "The sound it makes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these animals is NOT native to Australia?",
    "options": [
      "Frilled-neck lizard",
      "Kangaroo",
      "Dingo",
      "Bilby"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the word Triceratops mean?",
    "options": [
      "Three Big Horns",
      "Big Horned Beast",
      "Three Horned Head",
      "Three Horned Face"
    ],
    "correctIndex": 3
  },
  {
    "question": "Triceratops was a voracious meat eater and would consume hundreds of pounds of meat a day.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How much is Triceratops thought to have weighed?",
    "options": [
      "Between 13,000 and 26,000 lbs",
      "Between 1,000 and 9,000 lbs",
      "Between 50,000 and 75,000 lbs",
      "Between 110,000 and 140,000 lbs"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is there any evidence that Triceratops lived in herds?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year was Triceratops first discovered?",
    "options": [
      "1894",
      "1888",
      "1885",
      "1906"
    ],
    "correctIndex": 1
  },
  {
    "question": "Triceratops is the official State Dinosaur of which state?",
    "options": [
      "Utah",
      "Oregon",
      "Wyoming",
      "Nevada"
    ],
    "correctIndex": 2
  },
  {
    "question": "Triceratops fossils have been found on three continents.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "It is thought that Triceratops was able to run how fast?",
    "options": [
      "40 mph",
      "15 mph",
      "20 mph",
      "30 mph"
    ],
    "correctIndex": 1
  },
  {
    "question": "The proper spelling of this insect\u2019s name is preying mantis even though it is commonly referred to as praying mantis.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the word \u201cmantis\u201d mean?",
    "options": [
      "Savage insect",
      "Killer or hunter",
      "Prophet or fortuneteller",
      "Leaflike"
    ],
    "correctIndex": 2
  },
  {
    "question": "Female mantes (the plural for mantis) are larger than males.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Can a praying mantis change color?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "A large mantis can feed on birds or small mammals.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what year was the Praying mantis placed on the Endangered Species List?",
    "options": [
      "1972",
      "1970",
      "1974",
      "1976"
    ],
    "correctIndex": 3
  },
  {
    "question": "You can go to jail for intentionally killing a praying mantis as it is an endangered species.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The praying mantis lives only up to one year.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the meaning of the name Stegosaurus?",
    "options": [
      "Tank Lizard",
      "Roof Lizard",
      "Spike Lizard",
      "Spike Tail"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Stegosaurus had no teeth.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many bony plates did a Stegosaurus have embedded on its back?",
    "options": [
      "11",
      "17",
      "9",
      "15"
    ],
    "correctIndex": 1
  },
  {
    "question": "Stegosaurus had a brain about the size of an orange.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the length of an average Stegosaurus?",
    "options": [
      "20-28 feet (6-8.5 m)",
      "30-40 feet (9.2-12.2 m)",
      "26-30 feet (8-9.2 m)",
      "34-38 feet (10.4-11.5 m)"
    ],
    "correctIndex": 2
  },
  {
    "question": "Did the Stegosaurus have more bones in its tail than any other Jurassic Dinosaur?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the average weight of a Stegosaurus?",
    "options": [
      "8,000 lbs. (3.6 tonnes)",
      "6,000 lbs. (2.7 tonnes)",
      "6,800 lbs. (3 tonnes)",
      "7,400 lbs. (3.3 tonnes)"
    ],
    "correctIndex": 2
  },
  {
    "question": "The spikes on the tail of a Stegosaurus are called \u201cthagomizers\u201d and are a reference to the Gary Larsons comic strip Far Side.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the average height of a stegosaurus?",
    "options": [
      "9 feet (2.7 m)",
      "8 feet (2.4 m)",
      "10 feet (3 m)",
      "12 feet (12.6 m)"
    ],
    "correctIndex": 0
  },
  {
    "question": "Stegosaurus had back legs that were twice as long as its front legs.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Stegosaurus had the strongest front legs in the dinosaur world.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many subspecies of the tiger are left nowadays?",
    "options": [
      "8",
      "6",
      "2",
      "3"
    ],
    "correctIndex": 1
  },
  {
    "question": "Is the tiger the largest cat out of the Big Cat group?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Sumatran tiger is the smallest of all tigers.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Caspian tiger is believed to have become extinct.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many cubs are usually in a tigers litter?",
    "options": [
      "1-6 cubs",
      "3-4 cubs",
      "1-2 cubs",
      "2-4 cubs"
    ],
    "correctIndex": 1
  },
  {
    "question": "How long is the gestation period of a tiger?",
    "options": [
      "16 weeks",
      "22 weeks",
      "10 weeks",
      "14 weeks"
    ],
    "correctIndex": 0
  },
  {
    "question": "Can tigers swim up to 4 miles?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Are tigers known to kill more humans than any other cat?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Turtles can breathe in water.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many living species of bears are there?",
    "options": [
      "4",
      "10",
      "6",
      "8"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Coyote is also known as The Prairie Wolf.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which country does the Clydesdale horse originate from?",
    "options": [
      "Scotland",
      "Ireland",
      "Spain",
      "England"
    ],
    "correctIndex": 0
  },
  {
    "question": "What famous beer brand uses the Clydesdale horse as its mascot?",
    "options": [
      "Anheuser-Busch",
      "Fosters",
      "Upland",
      "Heineken"
    ],
    "correctIndex": 0
  },
  {
    "question": "A Clydesdale horse can weight up to 1,000 pounds (500 kg).",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Clydesdale horses are known for having white fur covering their hooves on all four of their legs.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What year was the Clydesdale Horse Society formally founded?",
    "options": [
      "1925",
      "1901",
      "1887",
      "1885"
    ],
    "correctIndex": 2
  },
  {
    "question": "What class of horse breed does the Clydesdale horse belong to?",
    "options": [
      "Draft Horse",
      "Carriage Horse",
      "Farm Horse",
      "Saddle Horse"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Clydesdale is a very active horse.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What year was the Clydesdale horse introduced to North America?",
    "options": [
      "1636",
      "1715",
      "1525",
      "1800"
    ],
    "correctIndex": 1
  },
  {
    "question": "Over 600 Clydesdale horses are registered every year in the United States.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How long does a Clydesdale horse\u2019s pregnancy last?",
    "options": [
      "9 months",
      "24 Months",
      "15 Months",
      "11 Months"
    ],
    "correctIndex": 3
  },
  {
    "question": "This dog breed, which originated in Mongolia and China, has very thick fluffy fur and a blue-black tongue.",
    "options": [
      "Chow Chow",
      "Jonangi",
      "Kai Ken",
      "Hokkaido"
    ],
    "correctIndex": 0
  },
  {
    "question": "The representatives of this dog breed are small, have long white silky fur and are also known as Roman Ladies Dogs.",
    "options": [
      "Maltese",
      "Norrbottenspets",
      "Phalene",
      "Mudi"
    ],
    "correctIndex": 0
  },
  {
    "question": "What common name does the dog breed New Guinea Highland Dog have?",
    "options": [
      "Singer",
      "Prowler",
      "Wrestler",
      "Swimmer"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what color does the Pekingese dog breed come?",
    "options": [
      "Light gold",
      "White",
      "Black",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Pomeranian female dog should be a little larger than the male.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what European country did the Rough Collie dog breed originate?",
    "options": [
      "Scotland",
      "Germany",
      "Ireland",
      "France"
    ],
    "correctIndex": 0
  },
  {
    "question": "What dog breed has an elongated body, very short legs, short shiny coat and a long snout?",
    "options": [
      "Dogo Guatemalteco",
      "Dachshund",
      "English Foxhound",
      "Elo"
    ],
    "correctIndex": 1
  },
  {
    "question": "This extremely large and tall German dog breed has a very short shiny coat and strong muscular body with a majestic posture.",
    "options": [
      "German Mastiff",
      "Boarhound",
      "Great Dane",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "In which European country did the Dalmatian dog breed originate?",
    "options": [
      "Croatia",
      "Netherlands",
      "Italy",
      "Denmark"
    ],
    "correctIndex": 0
  },
  {
    "question": "This dog breed, developed in England, has an egg-shaped head, small eyes, and very strong muscular body with smooth short fur and short legs.",
    "options": [
      "Bull Terrier",
      "Cairn Terrier",
      "English Shepherd",
      "Wire Fox Terrier"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the literal meaning of the word carnivore which has a Latin origin?",
    "options": [
      "Blood drinker",
      "Animal killer",
      "Meat eater",
      "Monster"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about carnivorous organisms in general?",
    "options": [
      "They feed on vertebrate animals.",
      "All of these",
      "They feed through scavenging.",
      "They feed on invertebrate animals."
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the meaning of the term apex predator which is related to carnivorous animals?",
    "options": [
      "A predator that has no predators itself.",
      "A very skilled predator that is highly specialized in killing animals.",
      "It is a term for a human being.",
      "An animal which consumes the highest number of animal species."
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the definition of the term hypercarnivore?",
    "options": [
      "It is a synonym for apex carnivore.",
      "A predator that feeds on carnivorous animals.",
      "It is a term that refers to humans.",
      "An animal whose diet consists exclusively of meat."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these methods do carnivorous plants use for capturing their prey?",
    "options": [
      "Rapid leaf movements",
      "A sticky mucilage",
      "Vacuum sucking into a bladder",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the diet of the Great Blue Heron, found in North and Central America, consist of?",
    "options": [
      "All of these",
      "Birds",
      "Reptiles",
      "Small mammals"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about the diet of coyotes?",
    "options": [
      "All of these",
      "60% of their diet consists of mammals.",
      "They eat insects.",
      "They do not eat prairie dogs."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these characteristics is generally associated with carnivorous animals, particularly predators?",
    "options": [
      "Aggressive behavior",
      "Claws",
      "Sharp teeth",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about the consumption of plant material by carnivores?",
    "options": [
      "All of these",
      "Carnivores consume feces of herbivores to get nutrients.",
      "Carnivores consume some plant material in order to get minerals, vitamins and fiber.",
      "Carnivores ingest the plant material the need along with their herbivorous prey."
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the term facultative carnivore mean?",
    "options": [
      "It is a synonym for scavenger.",
      "Animal that has all characteristics of carnivores but is a herbivore.",
      "A carnivore that also consumes plant food.",
      "It is a synonym for omnivore."
    ],
    "correctIndex": 2
  },
  {
    "question": "The box turtle has a hinge on the bottom of its shell.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The average lifespan of a box turtle is about 20 years.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Box turtles are carnivores.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The state of Indiana has strict laws against collecting and capturing box turtles from the wild.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "When a box turtle is taken out of the wild, it can spend years and sometimes its entire life looking for its home.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Male box turtles tend to be larger than females.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Box turtles are safe to eat.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many box turtle species are there in North America?",
    "options": [
      "4",
      "1",
      "9",
      "2"
    ],
    "correctIndex": 0
  },
  {
    "question": "Box turtles are the most common terrestrial turtle in the eastern United States.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What color eyes do male box turtles commonly have?",
    "options": [
      "blue",
      "green",
      "red",
      "black"
    ],
    "correctIndex": 2
  },
  {
    "question": "What city is known as the White Squirrel Capital of the World, since it is home to the largest colony of albino squirrels?",
    "options": [
      "Marionville, Missouri",
      "Olney, Illinois",
      "Columbus, Ohio",
      "Kenton, Tennessee"
    ],
    "correctIndex": 1
  },
  {
    "question": "Whiteflies generally feed on what?",
    "options": [
      "Fruit",
      "Insects",
      "Leaves",
      "Carrion"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these white foxes populates the polar zone of the Northern Hemisphere?",
    "options": [
      "White Fox",
      "Arctic Fox",
      "All of these",
      "Snow Fox"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what novel one of the main characters is a white whale hunted by a whaling ship?",
    "options": [
      "North Against South",
      "Moby-Dick",
      "Twenty Thousand Leagues Under the Sea",
      "The Purchase of the North Pole"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of insect is often referred to as a white ant, although it is not related to the ant species?",
    "options": [
      "A type of small spider",
      "Termite",
      "Head louse",
      "A type of albino wasp"
    ],
    "correctIndex": 1
  },
  {
    "question": "The White Snake is a fairy tale included in the collection of fairy tales by this author.",
    "options": [
      "Andrew Lang",
      "Brothers Grimm",
      "Oscar Wilde",
      "Hans Christian Andersen"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the meaning of the figurative expression a white elephant?",
    "options": [
      "Something that is idolized but that does not exist",
      "An extraordinary person",
      "A pricey and useless possession",
      "A chimera"
    ],
    "correctIndex": 2
  },
  {
    "question": "The representatives of the Old Danish Pointer breed are white, with markings of this other color on their coat.",
    "options": [
      "Grey",
      "Brown",
      "All of these",
      "Black"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these dog breeds originated in Hungary?",
    "options": [
      "Pumi",
      "Puli",
      "Mudi",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what Latin American country did the Chihuahua dog breed originate?",
    "options": [
      "Mexico",
      "Cuba",
      "Guatemala",
      "Nicaragua"
    ],
    "correctIndex": 0
  },
  {
    "question": "To what group of dog breeds does the Beagle dog breed belong?",
    "options": [
      "Terrier group",
      "Toy group",
      "Herding group",
      "Hound group"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what country did the American Akita dog breed originate?",
    "options": [
      "Canada",
      "Japan",
      "China",
      "United States"
    ],
    "correctIndex": 1
  },
  {
    "question": "This dog breed, considered one of the first sighthound dog breeds, has very long fur and is quite tall, with long legs and ears.",
    "options": [
      "Canadian Pointer",
      "Bolognese",
      "Afghan Hound",
      "Airedale Terrier"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what northern country did the Siberian Husky dog breed originate?",
    "options": [
      "Norway",
      "Finland",
      "Russia",
      "Alaska, USA"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Papillon is a small dog breed of the Toy group. What does the word Papillon mean in French?",
    "options": [
      "Butterfly",
      "Cherry",
      "Flower",
      "Angel"
    ],
    "correctIndex": 0
  },
  {
    "question": "This dog, which was once used as a personal defense dog, police dog and war dog, is often mistakenly believed to be very aggressive.",
    "options": [
      "Field Spaniel",
      "Doberman Pinscher",
      "Elo",
      "Finnish Spitz"
    ],
    "correctIndex": 1
  },
  {
    "question": "This dog breed was developed as a gun dog in Canada?",
    "options": [
      "Mountain Cur",
      "Pharaoh Hound",
      "Lakeland Terrier",
      "Labrador Retriever"
    ],
    "correctIndex": 3
  },
  {
    "question": "Is the cheetah the only animal on land that can turn while running?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Cheetahs have been domesticated and tamed.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the mortality rate of a cheetah cub growing to adulthood?",
    "options": [
      "50% die",
      "15% die",
      "65% die",
      "95% die"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is another name for a nutria?",
    "options": [
      "Beaver",
      "Muskrat",
      "Rat",
      "Coypu"
    ],
    "correctIndex": 3
  },
  {
    "question": "Nutrias belong to the rodent family.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The nutria is native to which continent?",
    "options": [
      "Europe",
      "South America",
      "Africa",
      "North America"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the average weight of an adult nutria?",
    "options": [
      "15-25 lbs.",
      "5-10 lbs.",
      "Over 30 lbs.",
      "10-20 lbs."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following is a characteristic of the nutria?",
    "options": [
      "Webbed front feet",
      "Huge black eyes",
      "Large orange teeth",
      "Flat beaver like tale"
    ],
    "correctIndex": 2
  },
  {
    "question": "The nutria is a herbivorous animal.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What do farmers raise nutrias for?",
    "options": [
      "Their fur is very valuable.",
      "Their huge teeth can be sold as jewelry.",
      "They can use their oil for shampoos and lotions.",
      "Their milk is very nutritious."
    ],
    "correctIndex": 0
  },
  {
    "question": "Nutria meat is lean and low in what?",
    "options": [
      "Iron",
      "Sodium",
      "Cholesterol",
      "Fiber"
    ],
    "correctIndex": 2
  },
  {
    "question": "What time of year do nutrias breed?",
    "options": [
      "In the winter months",
      "All year round",
      "In the Fall",
      "In the spring"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is a common nickname for the Yorkshire Terriers?",
    "options": [
      "Yorkie",
      "They have no nickname.",
      "Yorkle",
      "Shorky"
    ],
    "correctIndex": 0
  },
  {
    "question": "Yorkshire Terrier show dogs have a height standard.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the approximate weight standard, that a Yorkshire Terrier show dog cannot go over?",
    "options": [
      "7 lbs",
      "10 lbs",
      "No standard",
      "2 lbs"
    ],
    "correctIndex": 2
  },
  {
    "question": "Yorkshire Terriers are the smallest breed of dog in the world.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the Yorkshire Terriers average lifespan?",
    "options": [
      "5 - 8 years",
      "11 - 13 years",
      "15 - 18 years",
      "99 - 101 years"
    ],
    "correctIndex": 1
  },
  {
    "question": "What place did the Yorkshire Terrier take in the AKC registered breed popularity in the USA in 2008?",
    "options": [
      "1st",
      "50th",
      "2nd",
      "79th"
    ],
    "correctIndex": 2
  },
  {
    "question": "Venomous and poisonous are two different terms. What does the term venomous refer to?",
    "options": [
      "Animals that inject venom",
      "Animals that are deadly when eaten",
      "Plants and animals that secrete venom and are harmful when touched",
      "All of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about the slow loris, a primate which is both poisonous and venomous?",
    "options": [
      "All of these",
      "It covers its young with a toxin to keep them from being eaten.",
      "It has a venomous bite.",
      "It secretes a toxin from the glands on the inside of its elbows."
    ],
    "correctIndex": 0
  },
  {
    "question": "The Brazilian wandering spiders are included in Guinness World Records 2007 as the worlds most venomous spiders. How do they inject their venom?",
    "options": [
      "By stinging",
      "By biting",
      "All of these",
      "By urticating hairs"
    ],
    "correctIndex": 1
  },
  {
    "question": "What creature is considered the most venomous on the planet?",
    "options": [
      "Fat-tailed scorpion",
      "Killer bee",
      "Box jellyfish",
      "Cone snail"
    ],
    "correctIndex": 2
  },
  {
    "question": "The stonefish is an extremely venomous type of fish that lives in the coastal regions of Indo-Pacific oceans. How does it inject its venom?",
    "options": [
      "With its sharp teeth",
      "With its tail fin",
      "With its pectoral fin",
      "With its dorsal fin"
    ],
    "correctIndex": 3
  },
  {
    "question": "The name of cobras, which are very venomous, comes from the Portuguese cobra de capello. What does this mean?",
    "options": [
      "Snake with hood",
      "Poisonous hat",
      "Poisonous nose",
      "Snake with nose"
    ],
    "correctIndex": 0
  },
  {
    "question": "Venomous mammals do exist, although they are very rare. Which of these mammals is venomous?",
    "options": [
      "European Mole",
      "Cuban Solenodon",
      "All of these",
      "Platypus"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Northern Short-tailed Shrew is a small venomous mammal that populates this area.",
    "options": [
      "Europe",
      "Central America and the northern parts of South America",
      "North America",
      "North and Northeast Asia"
    ],
    "correctIndex": 2
  },
  {
    "question": "How do fire ants, a type of venomous ants, introduce their venom?",
    "options": [
      "All of these",
      "Through biting",
      "Through biting and then spraying the wound with venom",
      "Through stinging"
    ],
    "correctIndex": 3
  },
  {
    "question": "What kind of animal is the venomous Gila monster that is indigenous to southwestern United States and northern Mexico?",
    "options": [
      "Lizard",
      "Invertebrate",
      "Frog",
      "Mammal"
    ],
    "correctIndex": 0
  },
  {
    "question": "What phylum do jellyfish belong to?",
    "options": [
      "Arthropoda",
      "Chordata",
      "Cnidaria",
      "Mollusca"
    ],
    "correctIndex": 2
  },
  {
    "question": "Jellyfish are vertebrates.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A sea wasp is a jellyfish.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these body systems do jellyfish NOT have?",
    "options": [
      "osmoregulatory",
      "respiratory",
      "circulatory",
      "all of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is a group of jellyfish called?",
    "options": [
      "herd",
      "bloom",
      "school",
      "pack"
    ],
    "correctIndex": 1
  },
  {
    "question": "Jellyfish are fish.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How is the body of the jellyfish oxygenated?",
    "options": [
      "osmosis",
      "active transport",
      "diffusion",
      "photosynthesis"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the deadliest jellyfish in the world?",
    "options": [
      "Box Jellyfish",
      "Lions Mane Jellyfish",
      "Moon Jellyfish",
      "Sea Nettle"
    ],
    "correctIndex": 0
  },
  {
    "question": "Do adult jellyfish reproduce asexually?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is the wolfs scientific name Canis lupus pallipes?",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to statistics, how are wolves killed today?",
    "options": [
      "By people",
      "By hunters and poachers",
      "By poison and areal hunters",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many different types of wolves including sub-species are there around the world?",
    "options": [
      "Over 100",
      "44",
      "9",
      "3"
    ],
    "correctIndex": 2
  },
  {
    "question": "How long is the female gestation period in wolves?",
    "options": [
      "90 days",
      "25 days",
      "63 days",
      "200 days"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the most amount of wolf pups ever recorded in a litter?",
    "options": [
      "4 pups",
      "5 pups",
      "14 pups",
      "10 pups"
    ],
    "correctIndex": 2
  },
  {
    "question": "At what age does a wolf usually leave its pack?",
    "options": [
      "5-6 years",
      "2-3 years",
      "1-2 years",
      "3-4 years"
    ],
    "correctIndex": 1
  },
  {
    "question": "Wolves can live in snowy areas at certain times of the year?",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Do wolves have a social structure?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "The blue whale is the largest animal, but what is the largest toothed whale on the planet?",
    "options": [
      "Cuviers Beaked Whale",
      "Orca",
      "All of these",
      "Sperm whale"
    ],
    "correctIndex": 3
  },
  {
    "question": "What Gorilla is the largest primate on the planet?",
    "options": [
      "Mountain Gorilla",
      "Western Lowland Gorilla",
      "Eastern Lowland Gorilla",
      "Cross River Gorilla"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the largest living bird of prey on the planet?",
    "options": [
      "Philippine Eagle",
      "Booted Eagle",
      "Lappet-faced Vulture",
      "Eurasian Black Vulture"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the largest fish in existence?",
    "options": [
      "Manta ray",
      "Whale shark",
      "Ocean sunfish",
      "Basking shark"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the largest mollusk and the largest invertebrate in the world?",
    "options": [
      "Giant African snail",
      "North Pacific Giant Octopus",
      "Colossal squid",
      "Giant squid"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the largest living terrestrial organism on the planet?",
    "options": [
      "African Forest Elephant",
      "Asian Elephant",
      "African Bush Elephant",
      "Indian Elephant"
    ],
    "correctIndex": 2
  },
  {
    "question": "Approximately how much does a typical female vampire bat weigh?",
    "options": [
      "8 oz.",
      "1.5 oz.",
      "5 oz.",
      "1 lb."
    ],
    "correctIndex": 1
  },
  {
    "question": "Out of 200 vampire bats, approximately how many have rabies?",
    "options": [
      "5",
      "25",
      "10",
      "1"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the average lifespan of a vampire bat?",
    "options": [
      "20-25 years",
      "5-10 years",
      "40-50 years",
      "70-80 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where are vampire bats mostly found?",
    "options": [
      "Australia",
      "Mexico, Central America and South America",
      "Asia",
      "Africa"
    ],
    "correctIndex": 1
  },
  {
    "question": "Vampire bats have poor eyesight.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Vampire bats can be quite tame, and even friendly to humans.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Vampire bats blood-sucking does not hurt the bitten animal.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "A vampire bat will die if it doesnt find blood for how many nights in a row?",
    "options": [
      "2",
      "5",
      "1",
      "7"
    ],
    "correctIndex": 0
  },
  {
    "question": "Do vampire bats ever roost alone?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "How do wolves mark their territory?",
    "options": [
      "By urinating",
      "By defecating",
      "By rubbing against objects",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What actor directed and starred in the popular 1990 movie Dances with Wolves?",
    "options": [
      "Sean Connery",
      "Kevin Costner",
      "Mel Gibson",
      "Harrison Ford"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the largest wolf species on the planet as well as the largest wild representative of the Canidae family?",
    "options": [
      "Grey wolf",
      "Polar wolf",
      "Black wolf",
      "Red wolf"
    ],
    "correctIndex": 0
  },
  {
    "question": "Wolf pups are usually born with irises of this color, which changes with time.",
    "options": [
      "Black",
      "Golden",
      "Green",
      "Blue"
    ],
    "correctIndex": 3
  },
  {
    "question": "What animal is considered the major enemy of the wolf in the wild, apart from humans?",
    "options": [
      "Bear",
      "Other wolves",
      "Eagle",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of wolf is White Fang from Jack Londons popular novel White Fang?",
    "options": [
      "Grey wolf",
      "White wolf",
      "Wolf hybrid",
      "Red wolf"
    ],
    "correctIndex": 2
  },
  {
    "question": "Wolves do not wag their tails as dogs do when they are happy.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what European city is the popular bronze statue Capitoline Wolf located?",
    "options": [
      "Madrid",
      "Paris",
      "London",
      "Rome"
    ],
    "correctIndex": 3
  },
  {
    "question": "What animals do wolves generally prefer to feed on?",
    "options": [
      "Rodents",
      "Birds",
      "Fish",
      "Ungulates"
    ],
    "correctIndex": 3
  },
  {
    "question": "To what continent is the unique Maned Wolf endemic?",
    "options": [
      "Asia",
      "Africa",
      "South America",
      "Europe"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which animals have the most unique species endemic to Australia?",
    "options": [
      "Amphibians",
      "Mammals",
      "Insects",
      "Reptiles"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements about the Australian fauna is true?",
    "options": [
      "Australia is the only continent that has more venomous than non-venomous snake species",
      "Two of the five known species of monotremes live in Australia",
      "All of these",
      "Placental mammals are relatively rare in Australia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What animal is the largest macropod and one of Australias heraldic animals?",
    "options": [
      "Pademelon",
      "Red kangaroo",
      "Grey kangaroo",
      "Quokka"
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of animal is the Spotted wobbegong?",
    "options": [
      "Fish",
      "Reptile",
      "Amphibian",
      "Marsupial"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the common name of the Quoll, a carnivorous marsupial native to Australia and Papua New Guinea?",
    "options": [
      "Native cat",
      "Native rat",
      "Native fox",
      "Native dog"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these areas is the Black Salamander endemic to?",
    "options": [
      "Hawaii",
      "United States",
      "Australia",
      "India"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is true about the Western black widow spider?",
    "options": [
      "The female always eats the male after mating.",
      "It is extremely venomous.",
      "It is native to Madagascar.",
      "All of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of food does the Lesser Vasa Parrot, also known as Black Parrot, feed on?",
    "options": [
      "Fruit",
      "Insects",
      "All of these",
      "Carrion"
    ],
    "correctIndex": 0
  },
  {
    "question": "How did the Black Mamba snake get its name?",
    "options": [
      "Because of its color",
      "Because its eggs are black",
      "Because its mouth is black",
      "Because its venom is black"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these names refers to the Asian black bear, a close relative of the American black bear?",
    "options": [
      "Himalayan black bear",
      "All of these",
      "Tibetan black bear",
      "Moon bear"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Black wolf is actually a color variant of which wolf species?",
    "options": [
      "White wolf",
      "None of these",
      "Brown wolf",
      "Grey wolf"
    ],
    "correctIndex": 3
  },
  {
    "question": "The name Lumbriculus variegatus, or blackworm, refers to a few worm species. In what way do they reproduce?",
    "options": [
      "By parthenogenesis",
      "With eggs",
      "All of these",
      "By regeneration"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about the Black dog, a ghost-like creature popular in the folklores of the British Isles?",
    "options": [
      "It is believed to appear at night.",
      "It is associated with the Devil.",
      "It is considered a portent of death.",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about the Black garden ant?",
    "options": [
      "Each colony has only one queen.",
      "It is found in Europe.",
      "All of these",
      "It is found in North America and Asia."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about the Black Iberian Pig?",
    "options": [
      "It is indigenous to the Mediterranean.",
      "It is a rodent.",
      "All of these",
      "It is not actually black."
    ],
    "correctIndex": 0
  },
  {
    "question": "What animal is is the only strictly-marine herbivorous mammal in the world?",
    "options": [
      "Dugong",
      "All of these",
      "Sea pig",
      "Sea cow"
    ],
    "correctIndex": 1
  },
  {
    "question": "This animal is considered a marine mammal because it lives on the sea ice most of the year.",
    "options": [
      "Polar bear",
      "All of these",
      "Walrus",
      "Polar fox"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Hooded Seal is a marine mammal that populates this geographic area.",
    "options": [
      "North and northeast Pacific",
      "All of these",
      "Central and western North Atlantic",
      "North Indian Ocean"
    ],
    "correctIndex": 2
  },
  {
    "question": "This animal is the heaviest member of its family, and also one of the smallest marine mammals.",
    "options": [
      "Sea pig",
      "Sea otter",
      "Polar mouse",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these marine mammals matches the description: Very large body, has tusks and whiskers?",
    "options": [
      "Tusked seal",
      "Elephant seal",
      "Walrus",
      "Polar bear"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Humpback Whale, one of the largest marine mammals, feeds in this season.",
    "options": [
      "Spring and winter",
      "Winter",
      "Summer",
      "Fall"
    ],
    "correctIndex": 2
  },
  {
    "question": "This extraordinary marine mammal is often considered a whale, but it is actually a dolphin.",
    "options": [
      "All of these",
      "Killer Whale",
      "Blackfish",
      "Seawolf"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dolphins are considered some of the most intelligent animals on the planet. How are they classified according to their diet?",
    "options": [
      "They are specialized eaters.",
      "They are carnivores.",
      "They are herbivores.",
      "They are omnivores."
    ],
    "correctIndex": 1
  },
  {
    "question": "This marine mammal is known as the pilot whale, but it is not actually a whale. What type of animal is it?",
    "options": [
      "Walrus",
      "Seal",
      "Dolphin",
      "Otter"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these animals are among the many marine mammals that use songs for the purposes of communication?",
    "options": [
      "All of these",
      "Blue Whale",
      "Humpback whale",
      "Beluga"
    ],
    "correctIndex": 0
  },
  {
    "question": "Translated in English, what does the name of the chinchilla mean?",
    "options": [
      "Little Chilean",
      "Little Chincha",
      "Little Chile",
      "Of Chincha"
    ],
    "correctIndex": 1
  },
  {
    "question": "The natural habitat of the Chinchilla is this region in South America.",
    "options": [
      "Tierra del Fuego",
      "The Atacama Desert",
      "The Amazon River basin",
      "The Andes"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the wrong statement about chinchilla breeding?",
    "options": [
      "Chinchilla litters predominately consist of twins.",
      "Chinchillas can breed any time of the year.",
      "Little chinchillas are born furred and with eyes open.",
      "Chinchillas have a 45-day gestation period."
    ],
    "correctIndex": 3
  },
  {
    "question": "Chinchillas have a wide range of hearing - 5 Hz to 60 kHz",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "To which chinchilla species do most of the domestic chinchillas belong?",
    "options": [
      "None of these",
      "Chinchilla lanigera",
      "Giant Chinchilla",
      "Chinchilla brevicaudata"
    ],
    "correctIndex": 1
  },
  {
    "question": "Chinchillas are great pets for children - they are animals of very friendly nature and love to be held.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In nature, chinchillas can be found in only one color. Which one is it?",
    "options": [
      "Grey",
      "Black",
      "Brown",
      "Beige"
    ],
    "correctIndex": 0
  },
  {
    "question": "Chinchillas should be bathed with warm water at least once a week.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following should be avoided in the pet chinchillas diet?",
    "options": [
      "Fresh vegetables",
      "Hay",
      "Water",
      "Raisin"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these physiological features does the chinchilla lack?",
    "options": [
      "The ability to sweat",
      "The ability to sneeze",
      "The ability to jump",
      "The ability to swallow"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the two types of Chinese Crested dogs.",
    "options": [
      "Water and Runner",
      "Hairless and Hound",
      "Sporty and Spotted",
      "Hairless and Powderpuff"
    ],
    "correctIndex": 3
  },
  {
    "question": "The two types of Chinese Crested dogs are born in separate litters, they cannot come from the same litter.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which breed group does the Chinese Crested dog belong to?",
    "options": [
      "Sporting",
      "Hound",
      "Toy",
      "Non-Sprint"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Chinese Crested dog does not require much exercise.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following behaviors is not typical for the Chinese Crested dog?",
    "options": [
      "Pant to keep cool",
      "Bark",
      "Lift a leg to urinate",
      "Wag their tail when happy"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Chinese Crested dog is very timid.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A Chinese Crested dogs ears are not cropped.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The origin of the Chinese Crested dog is unknown, but according to some sources it may have come from which of these places?",
    "options": [
      "Canada and USA",
      "Thailand and Egypt",
      "Mexico and Africa",
      "Japan and China"
    ],
    "correctIndex": 2
  },
  {
    "question": "Chinese Crested dogs are very suspicious of strangers and can make very good watchdogs.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "A hairless Chinese Crested dog needs to be protected from which of the following?",
    "options": [
      "Sunburn",
      "Winter Wind",
      "Dry Skin",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What term is commonly used to denote a group of foxes?",
    "options": [
      "Earth",
      "Troop",
      "All of these",
      "Skulk"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the meaning the word which stands for fox in many languages?",
    "options": [
      "Fur",
      "Nose",
      "Cunning",
      "Tail"
    ],
    "correctIndex": 3
  },
  {
    "question": "How are most foxes generally classified according to their diet?",
    "options": [
      "Omnivores",
      "Specialized eaters",
      "Insectivores",
      "Carnivores"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these names refers to the Crab-eating Fox, a medium-sized fox found in the central part of South America?",
    "options": [
      "Forest Fox",
      "Wood Fox",
      "Common Fox",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What fox species is considered to be the smallest on the planet?",
    "options": [
      "Short-Tailed Fox",
      "Fennec Fox",
      "Island Fox",
      "Coast Fox"
    ],
    "correctIndex": 1
  },
  {
    "question": "What notable feature does the Fennec Fox possess, that makes it easily recognizable?",
    "options": [
      "It has no tail",
      "Bluish fur",
      "Very large ears",
      "Red eyes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these names belongs to the fox species that is the second smallest fox species in the world, slightly smaller than a domestic cat?",
    "options": [
      "Short-Tailed Fox",
      "All of these",
      "Coast Fox",
      "California Channel Island Fox"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to Chinese mythology, what shape do fox spirits known as huli jing take in the real world?",
    "options": [
      "Cats",
      "Children",
      "Bushes",
      "Women"
    ],
    "correctIndex": 3
  },
  {
    "question": "which of these stories and books have a fox character involved in the storyline?",
    "options": [
      "Pippi Longstocking",
      "The Adventures of Pinocchio",
      "The Little Match Girl",
      "Thumbelina"
    ],
    "correctIndex": 1
  },
  {
    "question": "What eminent musician released his album The Fox in 1981?",
    "options": [
      "Tom Johnes",
      "Elton John",
      "Barry White",
      "Julio Iglesias"
    ],
    "correctIndex": 1
  },
  {
    "question": "Chipmunks are small squirrel-like rodents belonging to the genus Tamias. What does the Greek word tamias mean?",
    "options": [
      "Storer",
      "Nibbler",
      "Squirrel",
      "Stripes"
    ],
    "correctIndex": 0
  },
  {
    "question": "What would some species of  porcupine consume in order to supply calcium ans salts?",
    "options": [
      "Nails",
      "All of these",
      "Tiny rocks",
      "Bones"
    ],
    "correctIndex": 3
  },
  {
    "question": "What defense tactic does the chinchilla use in order to escape from its predators, which include birds of prey, skunks, felines, snakes and canines?",
    "options": [
      "Playing dead",
      "Squeaking",
      "Scratching",
      "Spraying urine"
    ],
    "correctIndex": 3
  },
  {
    "question": "What rodent, closely related to the chinchilla and guinea pig, is also known as the Brush-Tailed Rat and is native to Chile?",
    "options": [
      "Gerbil",
      "Degu",
      "White-tailed Antelope Squirrel",
      "Prairie dog"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Capybara is the largest rodent in the world. What is the meaning of its name, derived from a word of the Guaran\u00ed language?",
    "options": [
      "Master of the grasses",
      "River keeper",
      "Rabbit pig",
      "Water squirrel"
    ],
    "correctIndex": 0
  },
  {
    "question": "The acouchis, small diurnal rodents found along riverbanks in the Amazon Rainforest, usually feed on this type of food.",
    "options": [
      "Insects",
      "Grass",
      "Fruit",
      "Nuts"
    ],
    "correctIndex": 2
  },
  {
    "question": "Guinea pigs are very intelligent, highly social animals that use special vocalization to communicate. What does their whistling or wheeking sound express?",
    "options": [
      "Excitement",
      "Danger or pain",
      "Discomfort",
      "Warning"
    ],
    "correctIndex": 0
  },
  {
    "question": "Groundhogs are mostly herbivorous rodents that sometimes eat animal matter. What kind of animals would they feed on?",
    "options": [
      "Larvae",
      "Grasshoppers",
      "All of these",
      "Snails"
    ],
    "correctIndex": 2
  },
  {
    "question": "What kind of unique activity is characteristic of the African Pygmy Mouse, the smallest rodent in the world?",
    "options": [
      "It sings at night.",
      "It disguises its young using leaves.",
      "It starts dancing when it feels threatened by a predator.",
      "It piles up pebbles in front of its burrow."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about rodent species in general?",
    "options": [
      "All of these",
      "The Latin word rodere, from which rodent originates, means rat.",
      "Rodents have canine teeth only on their lower jaw.",
      "Rodents do not vomit."
    ],
    "correctIndex": 3
  },
  {
    "question": "To which of these geographical areas are hummingbirds indigenous?",
    "options": [
      "North and South America",
      "Europe",
      "Africa and Asia",
      "Australia and Tasmania"
    ],
    "correctIndex": 0
  },
  {
    "question": "How did Hummingbirds get their interesting name?",
    "options": [
      "None of these",
      "They are named after their discoverer, Michael Hummings.",
      "Because of their singing",
      "Because of the noise they produce when they fly"
    ],
    "correctIndex": 3
  },
  {
    "question": "Hummingbirds are the only birds on the planet to have this amazing ability.",
    "options": [
      "They can stay without water for as many as 30 days.",
      "All of these",
      "They can carry food that is 3 times heavier than their own weight.",
      "They can fly backwards."
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the major type of food that Hummingbirds depend on for their survival?",
    "options": [
      "All of these",
      "Seeds",
      "Buds",
      "Nectar"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following statements is true about Hummingbirds?",
    "options": [
      "Hummingbirds heart can beat as fast as 300 times per minute.",
      "When Hummingbirds are flying they have the fastest metabolism of all animals, except for insects.",
      "All of these",
      "Hummingbirds often consume very large amounts of food and they are not able to lift off."
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the term for the state of temporary hibernation that Hummingbirds enter when food is not available?",
    "options": [
      "Hush",
      "Stupor",
      "Stillness",
      "Torpor"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the reason for Hummingbirds short life-span?",
    "options": [
      "Their fast metabolic rate",
      "They have many predators.",
      "They often get poisoned when feeding on nectar or insects.",
      "Their small size"
    ],
    "correctIndex": 0
  },
  {
    "question": "The usage of raw sugars, including brown sugar, is not recommended when preparing artificial nectar for Hummingbirds. Why?",
    "options": [
      "All of these",
      "Raw sugars contain iron.",
      "Raw sugars contain zinc.",
      "They contain harmful heavy metals."
    ],
    "correctIndex": 1
  },
  {
    "question": "Aztecs are known for wearing hummingbird talismans which symbolize which of the following?",
    "options": [
      "Skill at arms",
      "Energy",
      "Sexual potency",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "How did the smallest bird in the world, the Bee Hummingbird, get its name?",
    "options": [
      "Because of its black-and-yellow plumage",
      "Because it is approximately the size of a large bee",
      "Because of the sound it make with its wings",
      "Because it feeds on bees"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where does the Giant Cowbird, a passerine bird found in South America, lay its eggs?",
    "options": [
      "In other birds nests",
      "On rocks",
      "On balconies",
      "On the ground"
    ],
    "correctIndex": 0
  },
  {
    "question": "The vicuna, a South American animal, is a close relative of this other animal.",
    "options": [
      "Iguana",
      "Llama",
      "Tarantula",
      "Chinchilla"
    ],
    "correctIndex": 1
  },
  {
    "question": "What common name is used to denote the dolphin species Sotalia fluviatilis, indigenous to South America?",
    "options": [
      "Tucuxi",
      "Bufeo gris",
      "All of these",
      "Bufeo negro"
    ],
    "correctIndex": 2
  },
  {
    "question": "What color is the head of the South American stork Jabiru, whose body is predominantly white?",
    "options": [
      "Purple",
      "Green",
      "Black",
      "Red"
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of animal is the Gold tegu, found in South America?",
    "options": [
      "Reptile",
      "Insect",
      "Deer",
      "Primate"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the smallest species of deer in the world, found only in South America?",
    "options": [
      "Northern Pudu",
      "Marsh Deer",
      "Southern Pudu",
      "Antifer"
    ],
    "correctIndex": 0
  },
  {
    "question": "What makes the Scarlet Macaw, a parrot species indigenous to South America, unsuitable for a pet?",
    "options": [
      "It is very demanding.",
      "It is extremely noisy.",
      "It is a high maintenance pet.",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the South American snake Lachesis muta, commonly known as South American bushmaster, do when it feels threatened?",
    "options": [
      "It starts vibrating its tail.",
      "It spreads its neck.",
      "It hisses and dances.",
      "All of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about the capybara, the largest rodent on the planet, indigenous to South America?",
    "options": [
      "Its front legs are a little longer than the rear legs.",
      "None of these",
      "It has 16 teeth.",
      "It has a short tail."
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of mammal is the Culpeo?",
    "options": [
      "Beaver",
      "Wild cat",
      "Wild dog",
      "Fox"
    ],
    "correctIndex": 2
  },
  {
    "question": "Tiger sharks usually hunt alone.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The tiger shark is considered highly dangerous to humans.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The tiger shark reaches a length of 10 ft to 20 ft.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Unlike most sharks, the tiger shark does not grow a replacement tooth every time one is lost.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is a characteristic of the tiger shark?",
    "options": [
      "They can breath above water.",
      "They have eyelids.",
      "They give birth to live young.",
      "They have body hair."
    ],
    "correctIndex": 2
  },
  {
    "question": "What time of day does the tiger shark usually hunt?",
    "options": [
      "They hunt at different times throughout the day",
      "Early morning",
      "Nighttime",
      "Mid morning"
    ],
    "correctIndex": 2
  },
  {
    "question": "Tiger sharks are know to eat garbage that is thrown in the water by humans.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Tiger sharks give birth to up to 12 live young at a time.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How long is the gestation period for a female tiger shark?",
    "options": [
      "15-16 months",
      "20-21 months",
      "10-12 weeks",
      "9-10 Months"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is one of the nicknames of the tiger shark?",
    "options": [
      "Garbage Can of the Deep",
      "Predators  that will kill",
      "Wastebasket of the Sea",
      "Killers of the Ocean"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the Latin word  omnivore stand for?",
    "options": [
      "Fast eater",
      "Eating constantly",
      "Eating whatever",
      "Eating everything"
    ],
    "correctIndex": 3
  },
  {
    "question": "Most bear species are omnivores and their diet consists mainly of what?",
    "options": [
      "Tubers",
      "Leaves",
      "Grass",
      "Mast"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is NOT true about the Common Raven, a popular omnivorous bird?",
    "options": [
      "It wouldnt reject carrion",
      "It would feed on animal feces",
      "It wouldnt eat birds",
      "It feeds on human food waste"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these is not within the natural diet of the omnivorous Eastern Box Turtle?",
    "options": [
      "Small amphibians",
      "Earthworms",
      "Snails",
      "Carrion"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is true about raccoons?",
    "options": [
      "They do not produce enough saliva to moisten their food",
      "They use their front paws to examine their food and remove unwanted parts",
      "Only wild raccoons douse their food",
      "All of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the main food source for the sloth, an omnivorous mammal living in Central and South America?",
    "options": [
      "Small reptiles",
      "Leaves",
      "Insects",
      "Fruit"
    ],
    "correctIndex": 1
  },
  {
    "question": "What bizarre food would pigs occasionally eat, being omnivores?",
    "options": [
      "Tree bark",
      "Their young",
      "Rotting carcasses",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Skunks, which are omnivorous mammals, are one of the primary predators of these animals.",
    "options": [
      "Moles",
      "Termites",
      "Honeybees",
      "Salamanders"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the prevailing color of the fur of the Tasmanian devil?",
    "options": [
      "Grey",
      "White",
      "Brown",
      "Black"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what part of their body do Tasmanian devils store body fat?",
    "options": [
      "Abdomen",
      "Neck",
      "Tail",
      "Back"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the meaning of the word Sarcophilus, the name of the genus that the Tasmanian devil belongs to?",
    "options": [
      "Devil creature",
      "Blood-lover",
      "Dog-like",
      "Meat-lover"
    ],
    "correctIndex": 3
  },
  {
    "question": "At what time of the day are Tasmanian devils most active?",
    "options": [
      "At night",
      "Early morning",
      "At noon",
      "During the daytime"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about Tasmanian devils?",
    "options": [
      "They are predominantly solitary animals",
      "They live in couples",
      "They live in groups",
      "None of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the Tasmanian devil do when it feels stressed or threatened?",
    "options": [
      "It starts screaming",
      "It plays dead",
      "It produces a strong odour",
      "It attacks"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements are wrong about the reproduction of the Tasmanian devil?",
    "options": [
      "The female gives birth to 20-30 young",
      "Gestation lasts 21 days",
      "The female has six nipples",
      "None of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of food do Tasmanian devils prefer in the wild?",
    "options": [
      "Sheep",
      "Carrion",
      "Insects",
      "Fish"
    ],
    "correctIndex": 1
  },
  {
    "question": "In May 2009 the Tasmanian devil was declared to be endangered because this disease had almost wiped out its population.",
    "options": [
      "AIDS",
      "Facial cancer",
      "Kawasaki disease",
      "Rabies"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the Tasmanian devil cartoon character from Looney Tunes by Warner Bros.?",
    "options": [
      "Taz",
      "Tess",
      "Devlin",
      "Tassie"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these are a part of an ant colony?",
    "options": [
      "All of these",
      "Drones",
      "Soldiers",
      "Workers"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these behaviors is typical of ant societies?",
    "options": [
      "Ability to solve complicated problems",
      "Communication between individuals",
      "Division of labor",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Termites are not actually ants.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is true about ants diet?",
    "options": [
      "All ants are herbivores.",
      "All ants are carnivores.",
      "Most ant species are carnivores.",
      "Most ants are omnivores."
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the usual size range of mature ants?",
    "options": [
      "From 1.5 to 12 millimeters",
      "From 3.5 to 61 millimeters",
      "From 2 to 33 millimeters",
      "From 0.75 to 52 millimeters"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following statements is true about ants eyes and eyesight?",
    "options": [
      "The eyesight of most ants ranges from poor to average, and a number of species that live underground are completely blind.",
      "All of these",
      "Ants have compound eyes which consist of multiple small lenses.",
      "Ants have three simple eyes called ocelli on the top of their heads that detect light levels and polarization"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many legs do ants have?",
    "options": [
      "10",
      "6",
      "8",
      "4"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ants communicate through pheromones.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these ways of defence and attack do ants use?",
    "options": [
      "All of these",
      "Injecting or spraying chemicals",
      "Stinging",
      "Biting"
    ],
    "correctIndex": 0
  },
  {
    "question": "This chemical is found in the venom of most ants and some other insects.",
    "options": [
      "Formaldehyde",
      "Saxitoxin",
      "Formic acid",
      "Cyanic acid"
    ],
    "correctIndex": 2
  },
  {
    "question": "Some small spider species, as well as the young of larger species, are known for floating in the wind. What is this activity commonly known as?",
    "options": [
      "Skydiving",
      "Jetting",
      "Drifting",
      "Ballooning"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these mollusks is able to glide over in air for up to 50 meters (164 feet)?",
    "options": [
      "Oyster",
      "Squid",
      "Octopus",
      "Slug"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what ocean can the 50 species of Exocoetidae, also known as flying fish, be found?",
    "options": [
      "Atlantic ocean",
      "All of these",
      "Indian ocean",
      "Pacific ocean"
    ],
    "correctIndex": 1
  },
  {
    "question": "Of all the gliding animals, which one is the one best glider?",
    "options": [
      "Sifaka",
      "Flying lemurs",
      "All of these",
      "Flying squirrels"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which  frog is a skilled glider, able to make two types of turns midair?",
    "options": [
      "Malayan flying frog",
      "Benjamins gliding frog",
      "Wallaces Flying Frog",
      "Chinese gliding frog"
    ],
    "correctIndex": 3
  },
  {
    "question": "Some mammals are able to glide and parachute, but bats are the only ones capable of flying.  What is the name of the membrane that forms the surface of their wings?",
    "options": [
      "Reticulum",
      "Patagium",
      "Corticulum",
      "Flagellum"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what geographical region can you find the Paradise Flying Snake, also called Paradise Tree Snake?",
    "options": [
      "Central and South America",
      "North America",
      "Australia",
      "Asia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What kind of organism is the Greater Glider, a gliding animal indigenous to Australia?",
    "options": [
      "Reptile",
      "Fish",
      "Amphibian",
      "Mammal"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where are the gliding membranes of the Draco lizard species positioned?",
    "options": [
      "Between their fingers and toes",
      "Between its front and hind legs",
      "They do not have a gliding membrane",
      "On their elongated ribs"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these species of geckos is able to glide in the air after jumping or falling from a tree?",
    "options": [
      "Gold dust day gecko",
      "Ptychozoon",
      "Uroplatus fimbriatus",
      "Leopard gecko"
    ],
    "correctIndex": 1
  },
  {
    "question": "The large tsetse fly, found in Africa, feeds on what?",
    "options": [
      "All of these",
      "Blood",
      "Carrion",
      "Nectar"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of animal is the serval?",
    "options": [
      "Canine",
      "Ungulate",
      "Reptile",
      "Feline"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the largest crocodilian in Africa?",
    "options": [
      "Gharial",
      "Slender-snouted Crocodile",
      "Nile crocodile",
      "Saltwater crocodile"
    ],
    "correctIndex": 2
  },
  {
    "question": "What body part of the giraffe can indicate its gender?",
    "options": [
      "Tongue",
      "Teeth",
      "Horns",
      "Eyes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Adult Goliath beetles, found in Africas tropical forests, feed on what?",
    "options": [
      "Leaves and grasses",
      "Insects and other invertebrates",
      "Fruits and tree sap",
      "Carrion"
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of animal is the dik-dik, indigenous to Africa?",
    "options": [
      "Cricket",
      "Wild cat",
      "Rodent",
      "Antelope"
    ],
    "correctIndex": 3
  },
  {
    "question": "In cetaceans, the species identification \u201crorqual\u201d comes from the Norwegian word \u201crorhval\u201d which means \u201cfurrow.\u201d These furrows are obvious on all rorqual whales. Which of the following is not a rorqual whale?",
    "options": [
      "Beluga whale",
      "Sei whale",
      "Bryde\u2019s whale",
      "Minke whale"
    ],
    "correctIndex": 0
  },
  {
    "question": "Right and gray whales have been over-fished almost to extinction. Which of the following is a gray or right whale?",
    "options": [
      "Bowhead whale",
      "Blue whale",
      "Sperm whale",
      "Narwhal"
    ],
    "correctIndex": 0
  },
  {
    "question": "Narwhals and belugas make up separate subspecies of cetaceans. However, taxonomists often include in it a dolphin which lives in Indo-Pacific waters. What is the name of this dolphin?",
    "options": [
      "Irrawaddy dolphin",
      "Bottlenose dolphin",
      "Boto",
      "Risso\u2019s dolphin"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which whale expels a reddish-brown fluid when threatened, much like an octopus?",
    "options": [
      "Dwarf sperm whale",
      "Pygmy sperm whale",
      "Andrew\u2019s beaked whale",
      "Fin whale"
    ],
    "correctIndex": 1
  },
  {
    "question": "Males of this whale species have one tooth that can grow to be 10 feet (3 m) long.",
    "options": [
      "Strapped-tooth whale",
      "Narwhal",
      "Long-finned pilot whale",
      "Blainville\u2019s beaked whale"
    ],
    "correctIndex": 1
  },
  {
    "question": "The largest family of whales is the beaked whales (Ziphiidae). Most of the scarce information about this family has been found from dead specimens. Their teeth are the most distinctive aspect of these whales; most have only 2-4 oversized teeth. Which whale\u2019s teeth erupt from bulges in the lower jaw?",
    "options": [
      "Stejneger\u2019s beaked whale",
      "Longman\u2019s beaked whale",
      "Blainville\u2019s beaked whale",
      "Arnoux\u2019s beaked whale"
    ],
    "correctIndex": 2
  },
  {
    "question": "The family \u201cdelphinidae\u201d include which kind of cetacean?",
    "options": [
      "Rorqual whales",
      "Southern right whales",
      "Porpoises",
      "Dolphins"
    ],
    "correctIndex": 3
  },
  {
    "question": "The family \u201cphocoenidae\u201d describe which group of cetacean?",
    "options": [
      "Indus and Ganges river dolphins",
      "Porpoises",
      "Beaked whales",
      "Dolphins"
    ],
    "correctIndex": 1
  },
  {
    "question": "These cetaceans live off the southern coast of South America and can be found up to 150 miles (240 km) up the Amazon River. They are colored pale blue with a white underside. What is their name?",
    "options": [
      "Tuxici",
      "Amazon dolphin",
      "South American dolphin",
      "Franciscana"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sometimes called the \u201chooked-finned\u201d porpoise, this animal has a barely noticeable beak. It lives in the deep waters of the northern latitudes between North America and Asia, and is a very fast swimmer (up to 20 mph / 32 km/h). What is its name?",
    "options": [
      "Dusky dolphin",
      "Dall\u2019s porpoise",
      "Pacific white-sided dolphin",
      "Pantropical dolphin"
    ],
    "correctIndex": 2
  },
  {
    "question": "The representatives of this type of dolphins have very small eyes, making them virtually blind. They rely on echolocation to find food and swim in turbid waters. They include the baiji and boto. What are they called?",
    "options": [
      "Oceanic dolphins",
      "River dolphins",
      "Muddy dolphins",
      "Blind dolphins"
    ],
    "correctIndex": 1
  },
  {
    "question": "This family of cetaceans has representatives like the vaquita, the harbor, and spectacled type. They are shy and stay away from boats; however, they are particularly susceptible to fishing lines, nets, and other pollution. Which is the family?",
    "options": [
      "Pilot whales",
      "River dolphins",
      "Porpoises",
      "Dolphins"
    ],
    "correctIndex": 2
  },
  {
    "question": "This oceanic dolphin has distinctive yellow patches on its sides. It is mostly found in the northern latitudes of the Atlantic Ocean.",
    "options": [
      "Atlantic white-sided dolphin",
      "Hector\u2019s dolphin",
      "Atlantic yellow-sided dolphin",
      "Common dolphin"
    ],
    "correctIndex": 0
  },
  {
    "question": "This popular dolphin often herds fish onto the beach in order to eat the stranded fish. As a result, the teeth on one side (usually the right) are worn down due to eating sand as well as the fish. Which is this dolphin?",
    "options": [
      "Stranded dolphin",
      "Bottlenose dolphin",
      "Right-sided dolphin",
      "Spotted dolphin"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following do orca NOT do with their food?",
    "options": [
      "Regurgitate it for their young",
      "Throw it",
      "Use it as a teaching tool for young orca",
      "Slam it on the surface of the water"
    ],
    "correctIndex": 0
  },
  {
    "question": "What animal is considered the smallest mammal in length on the planet?",
    "options": [
      "None of these",
      "Pygmy Jerboa",
      "Kittis Hog-nosed Bat",
      "Etruscan Shrew"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Microraptor, the smallest known non-avian dinosaur, inhabited this modern day area during the early Cretaceous Period 130-125.5 million years ago.",
    "options": [
      "Madagascar",
      "China",
      "Australia",
      "Canada"
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of animal is the smallest known reptile on the planet?",
    "options": [
      "Lizard",
      "Snake",
      "Turtle",
      "Gecko"
    ],
    "correctIndex": 3
  },
  {
    "question": "This tiny frog is the smallest amphibian in the world.",
    "options": [
      "Monte Iberia Eleuth",
      "Brazilian Gold Frog",
      "Rana Minuscula",
      "Small Frog"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of insect is the smallest known insect on the planet?",
    "options": [
      "Cockroach",
      "Wasp",
      "Ant",
      "Fly"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these tiny bugs is considered the smallest beetle in the world?",
    "options": [
      "None of these",
      "Scydosella musawasensis",
      "Nanosella",
      "Vitusella fijiensis"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of animal is the smallest vertebrate?",
    "options": [
      "Mammals",
      "Reptiles",
      "Amphibians",
      "Fish"
    ],
    "correctIndex": 3
  },
  {
    "question": "The smallest turtle in the world, the Speckled Padloper Tortoise, inhabits which of these areas?",
    "options": [
      "South Asia",
      "North Australia",
      "South America",
      "South Africa"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where is its natural habitat of the smallest bird on the planet, the Bee Hummingbird?",
    "options": [
      "Hawaii",
      "All of these",
      "Cuba and the Isle of Youth",
      "Madagascar"
    ],
    "correctIndex": 2
  },
  {
    "question": "What bacterium is believed to be the smallest living organism that is capable to grow and reproduce independently?",
    "options": [
      "Staphylococcus aureus",
      "Escherichia coli",
      "Carsonella ruddii",
      "Mycoplasma genitalium"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the diet of most penguin species primarily consist of?",
    "options": [
      "Krill",
      "All of these",
      "Squid",
      "Fish"
    ],
    "correctIndex": 1
  },
  {
    "question": "The largest penguin species on the planet is the Emperor Penguin. What is the smallest one?",
    "options": [
      "All of these",
      "Blue Penguin",
      "Little Penguin",
      "Fairy Penguin"
    ],
    "correctIndex": 0
  },
  {
    "question": "There are various theories for the origin of the word penguin, such the Latin word pinguis, which means what?",
    "options": [
      "Diver",
      "Upright",
      "Swimmer",
      "Fat"
    ],
    "correctIndex": 3
  },
  {
    "question": "What color is the crest on the head of the Southern Rockhopper Penguin, which is known for having red eyes?",
    "options": [
      "Bright blue",
      "Yellow",
      "Red",
      "Green and blue"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these penguin species is the closest relative of the Magellanic Penguin?",
    "options": [
      "African Penguin",
      "All of these",
      "Galapagos Penguin",
      "Humboldt Penguin"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the common name of the Eudyptes schlegeli penguin species that have a white face and live in the waters surrounding Antarctica?",
    "options": [
      "King Penguin",
      "All of these",
      "Emperor Penguin",
      "Royal Penguin"
    ],
    "correctIndex": 3
  },
  {
    "question": "The sound of what musical instrument does the call of the Macaroni Penguin resemble?",
    "options": [
      "Trumpet",
      "Saxophone",
      "Flute",
      "Ocarina"
    ],
    "correctIndex": 0
  },
  {
    "question": "Most penguin species are piscivorous, meaning what?",
    "options": [
      "They do not drink water",
      "They have a tubular body shape",
      "They feed primarily on fish",
      "An aquatic animal"
    ],
    "correctIndex": 2
  },
  {
    "question": "What notable feature does the Gentoo Penguin possess which makes it easily recognizable?",
    "options": [
      "A white stripe on the top of its head",
      "A longer blue tail",
      "A red crest on its head",
      "A yellow spot on its abdomen"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the special talent of the penguin Mumble from the 2006 animated movie Happy Feet?",
    "options": [
      "Shoe making",
      "Singing",
      "Break dancing",
      "Tap dancing"
    ],
    "correctIndex": 3
  },
  {
    "question": "What large mammal is the national animal of India?",
    "options": [
      "Water Buffalo",
      "Bengal tiger",
      "Indian Rhinoceros",
      "Indian Elephant"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of Indian animals are included in the so-called Big Four selection?",
    "options": [
      "Poisonous snakes",
      "Largest insects",
      "Most dangerous animals",
      "Largest land animals"
    ],
    "correctIndex": 0
  },
  {
    "question": "What interesting physical feature does the Nicobar Bulbul, endemic to the Nicobar Islands of India, possess?",
    "options": [
      "It has a bright red beak.",
      "Its tail is very long and yellow.",
      "Its eyes are purple.",
      "It has a dark cap on its head."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is not true about the Indian Elephant?",
    "options": [
      "It has a smaller trunk than the African Elephant.",
      "All of these",
      "Its abdomen is quite large compared to its skull, unlike African elephants.",
      "It has larger ears than the African Elephant."
    ],
    "correctIndex": 1
  },
  {
    "question": "What interesting resting posture does the Indian Treeshrew, a.k.a. Madras Treeshrew, have?",
    "options": [
      "Sprawling on the ground as if its dead",
      "With its tail resting on its head",
      "Cuddling its rear legs",
      "Hanging upside down from a branch"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of animal is the Indian Flying-fox, found in India, Bangladesh, China, and other parts of Asia?",
    "options": [
      "Bat",
      "Fox",
      "Squirrel",
      "Primate"
    ],
    "correctIndex": 0
  },
  {
    "question": "Box Turtles are solitary creatures who neither want nor need companions.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Turtles have poor vision and cannot see in color.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the winter, many turtles enter a dormant state called torpor which resembles hibernation .",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Turtles are cold-blooded, meaning their internal temperature varies according to their outside environment.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The largest turtles are aquatic.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Sea turtles have glands near their eyes that filter the salt out of sea water.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Turtles can stick out their tongues to catch food.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The inner layer of the turtles shell contains 60 bones-- including parts of the turtles ribs and backbone.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "A turtles eggs are leathery and soft.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "A turtles lungs quickly break down, becoming less and less efficient over its lifetime.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Only sea turtles do not care for their young.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Turtles can breathe underwater.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "All aquatic turtles have flippers instead of feet.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "All turtles withdraw their head into their shell by contracting their neck to the side.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A turtles upper shell is called the plastron.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A turtles skin is made of scales, just like the skin of other reptiles.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the only place in the world you can see platypuses in the wild?",
    "options": [
      "South-eastern Asia",
      "Australia and Tasmania",
      "Hawaii Island",
      "South America"
    ],
    "correctIndex": 1
  },
  {
    "question": "How do platypuses reproduce?",
    "options": [
      "None of these",
      "Platypuses reproduce asexually.",
      "Platypuses lay eggs.",
      "Platypuses are metatherian."
    ],
    "correctIndex": 2
  },
  {
    "question": "How does the platypus feed its young for the first three to four months?",
    "options": [
      "The mother is feeding them with insects.",
      "The mother is breastfeeding them.",
      "The young rely on their yolk sacs for food.",
      "The mother is lactating, but she has no teats."
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the weight range of normal mature platypuses?",
    "options": [
      "Between 3.2 and 4.6 kg",
      "From 2.5 to 5.5 kg",
      "Between 0.5 to 2.8 kg",
      "From 0.7 to 2.4 kg"
    ],
    "correctIndex": 3
  },
  {
    "question": "Platypuses are venomous.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Platypuses use this method to detect their prey.",
    "options": [
      "They rely on their well-developed sense of smell.",
      "Platypuses rely mainly on their hearing.",
      "They use electrolocation.",
      "They rely on their exceptional eyesight."
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the normal life span of a platypus in the wild?",
    "options": [
      "Up to 22 years",
      "Up to 11 years",
      "Around 2 years",
      "About 4 years"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is true about the diet of the platypus?",
    "options": [
      "Platypuses are carnivores.",
      "Platypuses are herbivores.",
      "Platypuses are specialized eaters.",
      "Platypuses are omnivores."
    ],
    "correctIndex": 0
  },
  {
    "question": "The platypus needs to eat around 10% of its own weight every day.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the normal body temperature of a healthy platypus?",
    "options": [
      "Around 22\u00b0C",
      "Around 28\u00b0C",
      "Between 35\u00b0C and 37\u00b0C",
      "About 32\u00b0C"
    ],
    "correctIndex": 3
  },
  {
    "question": "What geographical region are chinchillas native to?",
    "options": [
      "Asia",
      "Africa",
      "North America",
      "South America"
    ],
    "correctIndex": 3
  },
  {
    "question": "How is the chinchilla classified according to the peak of its activeness throughout the day?",
    "options": [
      "None of these",
      "Nocturnal",
      "Crepuscular",
      "Duirnal"
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of food do chinchillas prefer to feed on in the wild?",
    "options": [
      "Plants",
      "All of these",
      "Insects",
      "Fruits"
    ],
    "correctIndex": 1
  },
  {
    "question": "What name is used for the social groups that chinchillas form when living in the wild?",
    "options": [
      "Schools",
      "Herds",
      "Flocks",
      "Troops"
    ],
    "correctIndex": 1
  },
  {
    "question": "What chinchilla species has become extinct as a result of fur hunting?",
    "options": [
      "All of these",
      "Long-tailed Chinchilla",
      "Giant Chinchilla",
      "Red-nosed Chinchilla"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which of these studies are chinchillas used as animal models?",
    "options": [
      "Studies of vocalization",
      "Eyesight studies",
      "Studies of the auditory system",
      "Studies of the reproductive system"
    ],
    "correctIndex": 2
  },
  {
    "question": "If the ears of a chinchilla turn red, it is a sign of this condition.",
    "options": [
      "It is pregnant.",
      "The animal is in heat.",
      "The animal is disturbed or angry.",
      "Overheating"
    ],
    "correctIndex": 3
  },
  {
    "question": "What kind of sounds do baby chinchillas produce in order to show their parents that they are hungry?",
    "options": [
      "Hissing",
      "Chirps",
      "Barks",
      "Clucking"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the literal translation of the word lanigera in the name of the chinchilla species Chinchilla lanigera?",
    "options": [
      "Long-tailed",
      "Having long ears",
      "Sleeping in straw",
      "Wearing a woolen coat"
    ],
    "correctIndex": 3
  },
  {
    "question": "This cat breed, developed by American breeder Ann Baker, is large and has blue eyes and soft fluffy coat with point coloration.",
    "options": [
      "Ragdoll",
      "LaPerm",
      "Egyptian Mau",
      "Savannah"
    ],
    "correctIndex": 0
  },
  {
    "question": "This large cat breed, created in the United States, has rabbit-like fur of medium length, rectangular body, and a fatty pad in the lower abdomen.",
    "options": [
      "Balinese",
      "California Spangled Cat",
      "Munchkin",
      "Ragamuffin"
    ],
    "correctIndex": 3
  },
  {
    "question": "This cat breed occurred naturally, most probably in Egypt. It has silky short fur with special ticked coloration.",
    "options": [
      "Korat",
      "Sphynx",
      "Abyssinian",
      "Burmilla"
    ],
    "correctIndex": 2
  },
  {
    "question": "This very old cat breed, which occurred naturally in Turkey, has a slender body with medium length fur, usually white.",
    "options": [
      "Ocicat",
      "Cymric",
      "Selkirk Rex",
      "Turkish Angora"
    ],
    "correctIndex": 3
  },
  {
    "question": "This cat breed, which appeared naturally in Thailand, has a slim body and short fur with point coloration.",
    "options": [
      "Himalayan",
      "Siamese",
      "Korat",
      "Burmese"
    ],
    "correctIndex": 1
  },
  {
    "question": "This hairless cat breed originated in Russia.",
    "options": [
      "Don Sphynx",
      "Donskoy",
      "Don Hairless",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "This cat breed occurred in Thailand, has very slim elongated body, short fur and very large ears.",
    "options": [
      "Oriental Shorthair",
      "Selkirk Rex",
      "Singapura",
      "Siamese"
    ],
    "correctIndex": 0
  },
  {
    "question": "This exotic cat breed was developed in Kenya by crossbreeding between a Serval and a domestic cat.",
    "options": [
      "Bengal",
      "Maine Coon",
      "Egyptian Mau",
      "Savannah"
    ],
    "correctIndex": 3
  },
  {
    "question": "This cat breed with curly hair appeared as a natural mutation in the United States.",
    "options": [
      "Selkirk Rex",
      "LaPerm",
      "Kurilian Bobtail",
      "American Curl"
    ],
    "correctIndex": 1
  },
  {
    "question": "What cat breed, which originated in France, has thick waterproof grey fur, gold-colored eyes and large muscular body?",
    "options": [
      "Chartreux",
      "Chausie",
      "Pixie-bob",
      "LaPerm"
    ],
    "correctIndex": 0
  },
  {
    "question": "To what geographic area is the ostrich native?",
    "options": [
      "Asia",
      "Africa",
      "South America and Africa",
      "Europe and Africa"
    ],
    "correctIndex": 1
  },
  {
    "question": "The feathers of adult male ostriches are primarily of this color.",
    "options": [
      "White",
      "Gray",
      "Brown",
      "Black"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many toes do ostriches have?",
    "options": [
      "One toe",
      "Two toes",
      "Tree toes",
      "Five toes"
    ],
    "correctIndex": 1
  },
  {
    "question": "What important internal organ does the ostrich lack?",
    "options": [
      "Liver",
      "Gallbladder",
      "Spleen",
      "All of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "What defense method do ostriches use when they are attacked or feel threatened?",
    "options": [
      "All of these",
      "They bury their heads in the sand.",
      "Kicking",
      "They use their wings to beat the enemy."
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the diet of ostriches consist of?",
    "options": [
      "Insects",
      "All of these",
      "Seeds",
      "Grass"
    ],
    "correctIndex": 1
  },
  {
    "question": "What unusual anatomical feature does the male ostrich possess?",
    "options": [
      "It has four testicles.",
      "It has a copulatory organ.",
      "It has a very small horn on its head.",
      "All of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which is the largest subspecies of ostrich on the planet?",
    "options": [
      "Southern Ostrich",
      "Masai Ostrich",
      "Red-necked Ostrich",
      "Middle Eastern Ostrich"
    ],
    "correctIndex": 2
  },
  {
    "question": "Unlike other ostriches, this subspecies of ostrich has small feathers on its head.",
    "options": [
      "Arabian Ostrich",
      "Masai Ostrich",
      "Somali Ostrich",
      "North African Ostrich"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which subspecies of ostrich became extinct around 1966?",
    "options": [
      "Red-necked Ostrich",
      "Middle Eastern Ostrich",
      "Southern Ostrich",
      "Somali Ostrich"
    ],
    "correctIndex": 1
  },
  {
    "question": "What are the anatomical differences between African elephants and Asian elephants?",
    "options": [
      "All of these",
      "In the tusks",
      "In the ears",
      "In the body size"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which elephant subspecies is the largest on the planet?",
    "options": [
      "Sri Lankan Elephant",
      "Indian Elephant",
      "Forest Elephant",
      "Savanna Elephant"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the smallest elephant subspecies on the planet?",
    "options": [
      "Forest Elephant",
      "Sumatran Elephant",
      "Indian Elephant",
      "Sri Lankan Elephant"
    ],
    "correctIndex": 1
  },
  {
    "question": "What elephant species has two fingerlike projections at the end of its trunk?",
    "options": [
      "Asian Elephant",
      "All of these",
      "African Elephant",
      "Sri Lankan Elephant"
    ],
    "correctIndex": 2
  },
  {
    "question": "The tusks of mature elephants stop growing when the animal reaches a certain age.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the diet of elephants mostly consist of?",
    "options": [
      "Leaves",
      "Twigs",
      "Grasses",
      "Tree bark"
    ],
    "correctIndex": 2
  },
  {
    "question": "What statement is true about elephants mammary glands?",
    "options": [
      "They have two pairs of mammary glands.",
      "None of these",
      "They have one pair of mammary glands.",
      "They have only one mammary gland."
    ],
    "correctIndex": 2
  },
  {
    "question": "How long does the gestation period of elephants last?",
    "options": [
      "22 months",
      "30 months",
      "18 months",
      "12 months"
    ],
    "correctIndex": 0
  },
  {
    "question": "How do elephants protect their skin from the aggressive UV-radiation?",
    "options": [
      "By wallowing in their own feces",
      "By hiding in the shadow of thick branches",
      "By wallowing in mud",
      "None of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "Why isnt the baby elephant able to control its trunk?",
    "options": [
      "All of these",
      "Because it is too heavy for it",
      "Because it cannot feel it",
      "Because it lacks muscle tone"
    ],
    "correctIndex": 3
  },
  {
    "question": "Cockroaches belong to the order Blattaria. What is the meaning of the Latin word blatta?",
    "options": [
      "Cockroach",
      "Annoying",
      "Fast",
      "Pest"
    ],
    "correctIndex": 0
  },
  {
    "question": "Apart from the American cockroach, what other cockroach species is among the best-known pests?",
    "options": [
      "Oriental cockroach",
      "Asian cockroach",
      "German cockroach",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What type of animal is the cockroach when classified according to the peak of its activeness?",
    "options": [
      "Diurnal",
      "None of these",
      "Nocturnal",
      "Crepuscular"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about the anatomy of cockroaches?",
    "options": [
      "They have two ocelli, or simple eyes.",
      "They have two long antennae on their heads.",
      "All of these",
      "They have large compound eyes."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about cockroaches?",
    "options": [
      "They are wingless and have six legs.",
      "They have two pairs of wings and six legs.",
      "They have two wings and eight legs.",
      "They have have two wings and six legs."
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of interesting noise are cockroaches known to produce when they feel threatened?",
    "options": [
      "Hissing",
      "Crackling",
      "Whistling",
      "All of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "What organs do cockroaches use for the purpose of respiration?",
    "options": [
      "All of these",
      "Gills",
      "Lungs",
      "Tracheae"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about the reproduction of cockroaches?",
    "options": [
      "All of these",
      "Male roaches use court rituals to attract the female.",
      "A few species can reproduce through parthenogenesis, or without the need of fertilization.",
      "Males and females attract each other through pheromones."
    ],
    "correctIndex": 0
  },
  {
    "question": "How are cockroaches classified according to the way they deliver their young?",
    "options": [
      "They are viviparous.",
      "All of these",
      "They are ovoviviparous.",
      "They are oviparous."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is true about the cockroaches ability to survive in hard times?",
    "options": [
      "They are able to slow down their heart rate.",
      "Cockroaches can survive radiation up to 15 times stronger than the lethal dose for humans.",
      "Some roaches can survive without food for about one month.",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "The pregnancy of this animal lasts from 2 to 3 years depending on the altitude it inhabits.",
    "options": [
      "Spanish Imperial Eagle",
      "Asian Elephant",
      "All of these",
      "Alpine Salamander"
    ],
    "correctIndex": 3
  },
  {
    "question": "These animals are usually monogamous and both parents take care of their young.",
    "options": [
      "Hedgehogs",
      "Swans",
      "All of these",
      "Wolves"
    ],
    "correctIndex": 1
  },
  {
    "question": "For which of these animals is the following description true: The gestation period lasts 35\u201358 days. Smaller species have 5-6 babies, and larger species - 3-4 babies. The young are born blind.",
    "options": [
      "Hedgehog",
      "Lizard",
      "Fox",
      "Rabbit"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following statements is true about scorpions?",
    "options": [
      "They give birth to their young one by one.",
      "They lay the eggs and they hatch almost immediately.",
      "They lay eggs which hatch after 2 weeks.",
      "None of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Gastric-brooding frog is an extinct species that is famous for this unique way of incubating its eggs.",
    "options": [
      "The mother keeps the eggs inside her mouth until they hatch.",
      "The female keeps the fertilized eggs in pouches along her abdomen.",
      "The female keeps the eggs between her rear legs until they hatch.",
      "The mother swallows the eggs and incubates them inside her stomach."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about the Jacksons Chameleon?",
    "options": [
      "It lays about 15-30 eggs that hatch in 10 days.",
      "It gives birth to 8-30 live young.",
      "It lays about 5-10 eggs that hatch immediately.",
      "It gives birth to 2-3 live young."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is true about the Echidna, an egg-laying mammal?",
    "options": [
      "The female lays 1 egg that hatches immediately.",
      "The female lays 1 egg which she incubates in her pouch.",
      "The female lays 3-5 eggs and incubates them for 26 days.",
      "The female lays 2 eggs that are incubated by the male for 22 days."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is true about the German cockroach?",
    "options": [
      "The female carries her eggs in a capsule.",
      "The female lays about 40 eggs.",
      "All of these",
      "In rare cases live births can occur."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about the Seahorse?",
    "options": [
      "All of these",
      "The male Seahorse has a brooding pouch on the front side of his body.",
      "The male and the female stay together for life.",
      "The female produces dozens to thousands of eggs."
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about the King Penguin?",
    "options": [
      "They are serially monogamous.",
      "Both parents take part in the incubation.",
      "All of these",
      "The female lays 1 single egg."
    ],
    "correctIndex": 2
  },
  {
    "question": "What name is commonly used to refer to the guinea pig?",
    "options": [
      "Netty",
      "Poppy",
      "Willy",
      "Cavy"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many times per year is a healthy female guinea pig able to give birth?",
    "options": [
      "Twice",
      "Seven times",
      "Five times",
      "Once"
    ],
    "correctIndex": 2
  },
  {
    "question": "What geographic area did the guinea pig originate from?",
    "options": [
      "South America",
      "Africa",
      "Australia and New Guinea",
      "North America"
    ],
    "correctIndex": 0
  },
  {
    "question": "What term is commonly used to refer to the young of the guinea pig?",
    "options": [
      "Pups",
      "Kits",
      "Calves",
      "Piglets"
    ],
    "correctIndex": 0
  },
  {
    "question": "What type of food does the guinea pig naturally feed on?",
    "options": [
      "Grass",
      "Grains",
      "Green leaved",
      "Nuts"
    ],
    "correctIndex": 0
  },
  {
    "question": "The guinea pig is unable to produce this substance in its own body and gets it from its food.",
    "options": [
      "Saliva",
      "Vitamin C",
      "Stomach acid",
      "Digestive enzymes"
    ],
    "correctIndex": 1
  },
  {
    "question": "What plant is poisonous for guinea pigs and should never be offered to them?",
    "options": [
      "All of these",
      "All plants growing from a bulb",
      "Bracken",
      "Wild celery"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this 2009 Walt Disney action comedy movie the main characters are guinea pigs.",
    "options": [
      "G-Force",
      "The Fast and the Furry",
      "Darwin",
      "Fluffy Spies"
    ],
    "correctIndex": 0
  },
  {
    "question": "What actor voiced the guinea pig character called Rodney in the 1998 comedy movie Dr. Dolittle?",
    "options": [
      "Jim Carrey",
      "Chris Tucker",
      "Eddie Murphy",
      "Chris Rock"
    ],
    "correctIndex": 3
  },
  {
    "question": "The representatives of what guinea pig breed have extremely long hair that never stops growing all over their bodies?",
    "options": [
      "Teddy",
      "Texel",
      "Abyssinian",
      "Peruvian"
    ],
    "correctIndex": 3
  },
  {
    "question": "To what continent are raccoons native?",
    "options": [
      "North America",
      "South America",
      "Australia",
      "Both Americas"
    ],
    "correctIndex": 0
  },
  {
    "question": "Captive raccoons are known for performing this vacuum activity.",
    "options": [
      "Dousing their food",
      "Scratching their belly",
      "Playing dead",
      "All of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these regarding the reproduction of raccoons is correct?",
    "options": [
      "Pregnancy can last from 54 to 70 days.",
      "The male brings food for the young.",
      "None of these",
      "Females usually give birth to only one kit."
    ],
    "correctIndex": 0
  },
  {
    "question": "What animal is a major predator for wild raccoons?",
    "options": [
      "Coyote",
      "Bald eagle",
      "Bobcat",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Raccoons are omnivorous animals but they have a preference for this type of food.",
    "options": [
      "Invertebrates",
      "Birds",
      "Fruits and nuts",
      "Fish"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the most important sense for raccoons?",
    "options": [
      "Vision",
      "Sense of smell",
      "Hearing",
      "Sense of touch"
    ],
    "correctIndex": 3
  },
  {
    "question": "Why is it not recommended to be keep raccoons as pets?",
    "options": [
      "They have and intense odor.",
      "Their fur promotes allergies.",
      "They transmit many diseases.",
      "They can be aggressive."
    ],
    "correctIndex": 3
  },
  {
    "question": "What have raccoons been mostly hunted for throughout history?",
    "options": [
      "Their fur",
      "Their bones",
      "Their meat",
      "Their fat"
    ],
    "correctIndex": 0
  },
  {
    "question": "What popular cartoon character from a 1995 animated movie keeps a raccoon as a pet?",
    "options": [
      "Simba",
      "Shrek",
      "Pocahontas",
      "Mulan"
    ],
    "correctIndex": 2
  },
  {
    "question": "Studies of raccoons intelligence have shown that raccoons are capable of performing this activity.",
    "options": [
      "Opening locks",
      "Understanding spoken words",
      "Painting",
      "Differentiating sounds"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Ramphotyphlops braminus, a harmless blind snake species, found in Africa and Asia, is often mistaken for this animal.",
    "options": [
      "Black mamba",
      "Dog-faced water snake",
      "Elephant Trunk Snake",
      "Earthworm"
    ],
    "correctIndex": 3
  },
  {
    "question": "How are the young Box turtles classified according to their diet, which differs from the diet of mature Box turtles?",
    "options": [
      "Specialized eaters",
      "Omnivores",
      "Carnivores",
      "Herbivores"
    ],
    "correctIndex": 2
  },
  {
    "question": "What distinctive feature is characteristic of the crocodile species called gharial, or Indian gavial?",
    "options": [
      "Very short tail",
      "Red spots on its back",
      "Narrow snout",
      "Purple scales"
    ],
    "correctIndex": 2
  },
  {
    "question": "How did the glass lizard, also known as glass snake, get its interesting name?",
    "options": [
      "It can climb on glass.",
      "Its eyes are glass-like.",
      "It is almost transparent.",
      "It breaks easily."
    ],
    "correctIndex": 3
  },
  {
    "question": "What other common name is used for the New Caledonian bumpy gecko, a reptile found only on the southern end of the island of New Caledonia?",
    "options": [
      "All of these",
      "Gargoyle gecko",
      "Devil gecko",
      "Horny gecko"
    ],
    "correctIndex": 1
  },
  {
    "question": "This snake, the only existing member of its family, can be found in Mexico and has a very muscular body and a shovel-shaped snout.",
    "options": [
      "All of these",
      "Dwarf boa",
      "Pipe snake",
      "Loxocemidae bicolor"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is unique about the reptile called tuatara, which is endemic to New Zealand and is sometimes called living fossils?",
    "options": [
      "It has a well-developed third eye.",
      "All of these",
      "It has two rows of teeth in the upper jaw.",
      "It is able to hear though it has no ears."
    ],
    "correctIndex": 3
  },
  {
    "question": "What feature of the turtle species Dermochelys coriacea makes it easily distinguishable from all the other sea turtles?",
    "options": [
      "It has a very long tail.",
      "It has no shell.",
      "Its body has very vivid colors.",
      "It has a horn on its head."
    ],
    "correctIndex": 1
  },
  {
    "question": "In what geographical area is the Rock monitor lizard, or Legavaan, found?",
    "options": [
      "South America",
      "New Guinea",
      "Australia",
      "Africa"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the smallest extant species of crocodilian on the planet?",
    "options": [
      "Smooth-fronted Caiman",
      "Musky Caiman",
      "Spectacled Caiman",
      "Yacare Caiman"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where is the natural habitat of sloths?",
    "options": [
      "Central and South Asia",
      "Central and South America",
      "Australia and the island of Tasmania",
      "South Africa"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is true about the sloths diet?",
    "options": [
      "Sloths are carnivores.",
      "Sloths are autotrophic organisms.",
      "Sloths are herbivores.",
      "Sloths are omnivores."
    ],
    "correctIndex": 3
  },
  {
    "question": "Sloths have this number of toes and fingers depending on the family they belong to.",
    "options": [
      "Two or three",
      "Sloths do not have toes.",
      "Four or five",
      "One or two"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the the body length of an average mature sloth from head to tail?",
    "options": [
      "90-100 centimeters",
      "70-80 centimeters",
      "30-40 centimeters",
      "50-60 centimeters"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many hours of sleep do sloths normally need per day?",
    "options": [
      "20-22 hours",
      "12-13 hours",
      "Less than 10 hours",
      "15-18 hours"
    ],
    "correctIndex": 2
  },
  {
    "question": "About 50% of the weight of a well-fed sloth comprises of the food in its stomach.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How long does it take for a sloth to digest its food completely?",
    "options": [
      "1 week",
      "More than 2 weeks",
      "A month or more",
      "About 3 months"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these names does not refer to a sloth?",
    "options": [
      "Ritto",
      "Rit",
      "Rikki-Tikki-Tavi",
      "Ridette"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many babies do female sloths give birth to per one pregnancy?",
    "options": [
      "Four",
      "Three",
      "One",
      "Two"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following statements is wrong?",
    "options": [
      "There are seven living species of sloths.",
      "Two-toed sloths have only six cervical vertebrae instead of seven.",
      "Sloths hairs grow away from their extremities instead of towards them.",
      "Three-toed sloths have nine cervical vertebrae instead of seven."
    ],
    "correctIndex": 0
  },
  {
    "question": "What type of mammal is the kangaroo?",
    "options": [
      "Monotreme",
      "All of these",
      "Amniote",
      "Marsupial"
    ],
    "correctIndex": 3
  },
  {
    "question": "What term is used to refer to the young of the kangaroo?",
    "options": [
      "Joey",
      "Mary",
      "Jack",
      "Wally"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which kangaroo species is the largest on the planet?",
    "options": [
      "Antilopine Kangaroo",
      "Western Grey Kangaroo",
      "Eastern Grey Kangaroo",
      "Red Kangaroo"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the difference between the digestion of kangaroos and the digestion of ruminants?",
    "options": [
      "Nothing",
      "Kangaroos need to consume some animal matter to provide essential digestive bacteria.",
      "Kangaroos do not release methane.",
      "Kangaroos digest plant matter five times faster than ruminants do."
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the diet of all kangaroos consist of in general?",
    "options": [
      "All of these",
      "Plant matter",
      "Fungi",
      "Plant and animal matter"
    ],
    "correctIndex": 1
  },
  {
    "question": "Apart from jumping, kangaroos are known for fleeing from predators using this tactic.",
    "options": [
      "All of these",
      "Playing dead",
      "Climbing",
      "Swimming"
    ],
    "correctIndex": 3
  },
  {
    "question": "What kangaroo species set a record by moving with 64 kilometers per hour (40 mph)?",
    "options": [
      "Eastern Grey Kangaroo",
      "Great Grey Kangaroo",
      "All of these",
      "Forester Kangaroo"
    ],
    "correctIndex": 2
  },
  {
    "question": "Male Western Grey Kangaroos were nicknamed Stinkers because they have this kind of odor.",
    "options": [
      "Sour cabbage",
      "Curry",
      "Garlic",
      "Gasoline"
    ],
    "correctIndex": 1
  },
  {
    "question": "How do male kangaroos fight to win the privilege to fertilize the female?",
    "options": [
      "They push each other.",
      "All of these",
      "They kick each other.",
      "They hit each other by boxing."
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the meaning of the word kangaroo according to legend?",
    "options": [
      "I dont know.",
      "Look at this!",
      "I dont understand you.",
      "What is this?"
    ],
    "correctIndex": 2
  },
  {
    "question": "What other common name is used for a mudpuppy?",
    "options": [
      "Water Canine",
      "Waterdog",
      "Mud Dog",
      "Salamander"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of animal is a mudpuppy?",
    "options": [
      "skink",
      "eel",
      "fish",
      "salamander"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the average lifespan of a mudpuppy?",
    "options": [
      "2 years",
      "5 years",
      "11 years",
      "35 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "Mudpuppies breathe through gills when they are young and when they mature they use their lungs.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about the mudpuppy?",
    "options": [
      "They are nocturnal.",
      "They live in and out of the water.",
      "They are poisonous.",
      "Their lifecycle is divided into three stages."
    ],
    "correctIndex": 0
  },
  {
    "question": "Mudpuppies are carnivores.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which of the following states will you not find the mudpuppy?",
    "options": [
      "Texas",
      "Indiana",
      "Kentucky",
      "Ohio"
    ],
    "correctIndex": 0
  },
  {
    "question": "Mudpuppies hibernate in the winter months.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How long is the average mudpuppy?",
    "options": [
      "1 1/2 -3 inches",
      "5-7 inches",
      "12 inches",
      "13-16 inches"
    ],
    "correctIndex": 3
  },
  {
    "question": "The mudpuppy can produce noise.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Wombats are endemic to this geographical area.",
    "options": [
      "Australia and Tasmania",
      "South America",
      "Madagascar",
      "Indonesia and the Philippines"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the diet of wombats consist of in general?",
    "options": [
      "Small vertebrates",
      "Insects",
      "Plants",
      "All of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many babies does the female wombat give birth to every spring?",
    "options": [
      "Three",
      "Four",
      "Two",
      "One"
    ],
    "correctIndex": 3
  },
  {
    "question": "What unusual anatomical feature do wombats possess?",
    "options": [
      "Their pouch faces backwards.",
      "They dont have a spleen.",
      "They dont have eyelids.",
      "All of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "Wombats have an incredibly fast metabolism.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these wombat species is also known as Coarse-haired Wombat?",
    "options": [
      "Southern Hairy-nosed Wombat",
      "Northern Hairy-nosed Wombat",
      "Common Wombat",
      "None of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "What way of defence do wombats use when they feel threatened?",
    "options": [
      "All of these",
      "Running",
      "Climbing on trees",
      "Kicking"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the smallest wombat species on the planet?",
    "options": [
      "Northern Hairy-nosed Wombat",
      "Southern Hairy-nosed Wombat",
      "Common Wombat",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "What should a person do to escape the attack of a wombat in the wild?",
    "options": [
      "Climb a tree",
      "Run",
      "Play dead",
      "Jump in a river"
    ],
    "correctIndex": 0
  },
  {
    "question": "This species, also known as Yaminon, is the largest wombat species on the planet.",
    "options": [
      "Northern Hairy-nosed Wombat",
      "Northern Hairy-nosed Wombat",
      "Common Wombat",
      "None of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "On which continent can you find the turltle-dove during most of the year?",
    "options": [
      "Australia",
      "Antarctica",
      "South America",
      "Europe"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which continent does the turtle-dove migrate to in the colder winter months?",
    "options": [
      "Africa",
      "Australia",
      "North America",
      "Asia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following statements is true about the turtle-dove?",
    "options": [
      "They are not related to the pigeon.",
      "They have never been domesticated.",
      "They are flightless",
      "They are viewed as a symbol of love."
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the expected lifespan of a turtle-dove?",
    "options": [
      "28 years",
      "9 months",
      "7 years",
      "20 years"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the incubation period for turtle-dove eggs?",
    "options": [
      "7 weeks",
      "17-25 days",
      "12-14 days",
      "1 month"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following makes the turtle-dove different from other birds?",
    "options": [
      "They suck to drink instead of tilting their heads back.",
      "When they hatch they can fly within 2 days.",
      "They cannot make any sound.",
      "They can fly backwards."
    ],
    "correctIndex": 0
  },
  {
    "question": "The turtle-dove is closely related to the raven.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What are the main colors of turtle-doves?",
    "options": [
      "Dark orange and gray",
      "Brown and gray",
      "Pale yellow and some black",
      "blue and red"
    ],
    "correctIndex": 1
  },
  {
    "question": "The name of the turtle-dove is derived from the sound it produces.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Turtle-doves tend to eat in their nests and high in the trees.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is not true about the vision of bats?",
    "options": [
      "Most smaller bat species are blind.",
      "All of these",
      "All bat species are able to detect UV light.",
      "All bat species have underdeveloped eyesight."
    ],
    "correctIndex": 1
  },
  {
    "question": "What important bone-building mineral do the cartilage of bats finger bones lack, which makes them very flexible?",
    "options": [
      "Potassium",
      "Magnesium",
      "Calcium",
      "Iron"
    ],
    "correctIndex": 2
  },
  {
    "question": "What do megabats, also called flying foxes, feed on?",
    "options": [
      "All of these",
      "Carrion",
      "Insects",
      "Fruit and nectar"
    ],
    "correctIndex": 3
  },
  {
    "question": "How do most bat species spend the cold winter months?",
    "options": [
      "They migrate south to to regions with warmer climates.",
      "They do not change their behavior in the winter.",
      "None of these",
      "They hibernate."
    ],
    "correctIndex": 3
  },
  {
    "question": "A bat is featured on the coat of arms of this Spanish city.",
    "options": [
      "Palma de Mallorca",
      "Fraga",
      "Valencia",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What status does the bat have in Chinese folklore and tradition?",
    "options": [
      "It is believed to be an incarnated spirit.",
      "It is a symbol of happiness and longevity.",
      "It is considered a bad omen.",
      "It is considered simply a pest."
    ],
    "correctIndex": 1
  },
  {
    "question": "What city in the US state of Texas is a home of the largest bat colony in North America during the summer?",
    "options": [
      "Morton",
      "Austin",
      "Houston",
      "Pittsburg"
    ],
    "correctIndex": 1
  },
  {
    "question": "What name is commonly used when referring to the bat species Vampyrum spectrum, also known as False Vampire Bat?",
    "options": [
      "Phantom Bat",
      "Spectral Bat",
      "All of these",
      "Ghostly Bat"
    ],
    "correctIndex": 1
  },
  {
    "question": "What bat species is considered the largest in the world?",
    "options": [
      "Livingstone\u2019s Fruit Bat",
      "Fijian Monkey-faced Bat",
      "Hammer-headed bat",
      "Golden-capped fruit bat"
    ],
    "correctIndex": 3
  },
  {
    "question": "What other common name is used for the Kittis Hog-nosed Bat, the smallest bat species in the world?",
    "options": [
      "Wasp bat",
      "Hummingbird bat",
      "Bumblebee bat",
      "Ladybug bat"
    ],
    "correctIndex": 2
  },
  {
    "question": "During what geological time period did the ammonites evolve?",
    "options": [
      "The Devonian period",
      "The Silurian period",
      "The Triassic period",
      "The Carboniferous period"
    ],
    "correctIndex": 0
  },
  {
    "question": "The nautilus is the closest living relative of the ammonite.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the largest known species of ammonite, which was found in Germany in 1895.",
    "options": [
      "Parapuzosia seppenradensis",
      "Allonautilus perforatus",
      "Nautilus pompilius",
      "Parapuzosia bradyi"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the greatest depth the shell of a nautilus can withstand before imploding?",
    "options": [
      "800 meters",
      "100 meters",
      "300 meters",
      "187 meters"
    ],
    "correctIndex": 0
  },
  {
    "question": "Were the shells of all ammonites coiled?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the average lifespan of a nautilus?",
    "options": [
      "10 years",
      "20 years",
      "2 years",
      "40 years"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ammonites lived on the ocean floor.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ammonites became extinct at the end of what geological period?",
    "options": [
      "Cretaceous",
      "Jurassic",
      "Triassic",
      "Permian"
    ],
    "correctIndex": 0
  },
  {
    "question": "What flower remedy would be most beneficial to a stand-offish horse that gets irritated quickly and has a hard time accepting change?",
    "options": [
      "Birch",
      "Cerery",
      "Beech",
      "Cerato"
    ],
    "correctIndex": 2
  },
  {
    "question": "Aspen is beneficial to a horse that is nervous and anxious, shies at invisible objects in a familiar arena and bolts for no reason.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Rescue remedy is a combination of Rock Rose, Star of Bethlehem, Impatiens, Cherry Plum and Clematis essences.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "All Bach flower remedies can be used by people.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Up to how many different Bach remedies can you combine?",
    "options": [
      "4",
      "as many as you want to",
      "1",
      "7"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Cerato essence is suitable for horses that withhold their emotions despite suffering from a pain or disease.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is used as a cleansing remedy?",
    "options": [
      "Cherry Plum",
      "Gentian",
      "None of these",
      "Crab Apple"
    ],
    "correctIndex": 3
  },
  {
    "question": "Salix vitellina is the scientific name of this essence usually given to a horse that appears to sulk, goes into moods and refuses any sort of attention.",
    "options": [
      "Wild Rose",
      "Wild Oat",
      "Willow",
      "Water Violet"
    ],
    "correctIndex": 2
  },
  {
    "question": "What kind of animals are the colugos, or cobegos, which is found only in Asia?",
    "options": [
      "Mammals",
      "Reptiles",
      "Birds",
      "Amphibians"
    ],
    "correctIndex": 0
  },
  {
    "question": "What other name is commonly used for the Japanese Macaque, a monkey native to Japan?",
    "options": [
      "Snow Monkey",
      "All of these",
      "Whistling Monkey",
      "Storm Monkey"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these Asian tortoise species is a very popular pet in many countries around the world?",
    "options": [
      "Cuora",
      "Russian Tortoise",
      "Keeled Box Turtle",
      "Rafetus"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the color of the legs, bill and eye rims of the Green Magpie, a small Asian bird with bright green plumage?",
    "options": [
      "Purple",
      "Blue",
      "Red",
      "Bright pink"
    ],
    "correctIndex": 2
  },
  {
    "question": "To which Asian country is the Giant Panda native?",
    "options": [
      "Indonesia",
      "India",
      "Japan",
      "China"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the smallest bat species on the planet, endemic to the Asian continent?",
    "options": [
      "Mouse-tailed Bat",
      "Sucker-footed Bat",
      "Bulldog Bat",
      "Kittis Hog-nosed Bat"
    ],
    "correctIndex": 3
  },
  {
    "question": "What name is used for the enigmatic bovid mammal Kting Voar, which is believed to populate Cambodia and Vietnam in Asia?",
    "options": [
      "Snake-eating Cow",
      "Lizard-eating Goat",
      "All of these",
      "Frog-chewing Sheep"
    ],
    "correctIndex": 0
  },
  {
    "question": "What sense of the Malayan Tapir, also called Asian Tapir, is underdeveloped?",
    "options": [
      "Eyesight",
      "Hearing",
      "Smell",
      "Touch"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many horns does the Indian Rhinoceros, found only in Asia, have on its snout?",
    "options": [
      "None",
      "Two",
      "Three",
      "One"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the favorite food of the Fairy-bluebird, which is found only in Asia?",
    "options": [
      "Goji berries",
      "Grasshoppers",
      "All of these",
      "Figs"
    ],
    "correctIndex": 3
  },
  {
    "question": "What term is used the denote the terrestrial stage of the development of the young newt?",
    "options": [
      "Eft",
      "Imago",
      "Elf",
      "Larva"
    ],
    "correctIndex": 0
  },
  {
    "question": "To what country is the Rhinoderma rufum, a species of frog from the family Rhinodermatidae, endemic?",
    "options": [
      "India",
      "United States",
      "Chile",
      "Brazil"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the literal translation of the Greek word amphibios, from which the modern word amphibian originated?",
    "options": [
      "Water and land",
      "Both kinds of life",
      "Two in one",
      "Water and air"
    ],
    "correctIndex": 1
  },
  {
    "question": "What interesting characteristic do all amphibians called caecilians share?",
    "options": [
      "They have no legs.",
      "They are hermaphrodites.",
      "They have four eyes.",
      "They have external ears."
    ],
    "correctIndex": 0
  },
  {
    "question": "What animal does the greater siren, a nocturnal amphibian, resemble externally?",
    "options": [
      "An eel",
      "A lizard",
      "A gecko",
      "A frog"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is wrong about the Glass frogs from the amphibian family Centrolenidae?",
    "options": [
      "They are arboreal animals.",
      "They are found mainly in Australia and Tasmania.",
      "All of these",
      "Their skin is transparent."
    ],
    "correctIndex": 1
  },
  {
    "question": "What other interesting name is used commonly to refer to the Purple frog, an amphibian endemic to the Western Ghats in India?",
    "options": [
      "Pignose Frog",
      "Chicken frog",
      "All of these",
      "Mole frog"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the diet of the Eastern Tiger Salamander mainly consist of?",
    "options": [
      "Shrimp",
      "Leaves",
      "Insects",
      "Fish"
    ],
    "correctIndex": 2
  },
  {
    "question": "What behavior is typical of the Argentine horned frog, also known as Argentine wide-mouthed frog?",
    "options": [
      "It never stops moving.",
      "It sings almost incessantly.",
      "It would eat up anything that comes in its eyesight.",
      "All of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where does the female Suriname Toad keep its eggs until they develop into young frogs?",
    "options": [
      "In its vocal sac",
      "Between its hind legs",
      "On its back",
      "In its stomach"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many orders of trilobite are there?",
    "options": [
      "9",
      "3",
      "15",
      "10"
    ],
    "correctIndex": 3
  },
  {
    "question": "What order of trilobite was the only one to survive the Devonian mass extinction?",
    "options": [
      "Proetida",
      "None of these",
      "Phacopida",
      "Lichida"
    ],
    "correctIndex": 0
  },
  {
    "question": "Approximately how many species of trilobite existed over the duration of the Paleozoic?",
    "options": [
      "12,000",
      "9,000",
      "17,000",
      "18,000"
    ],
    "correctIndex": 2
  },
  {
    "question": "Trilobites developed one of the first complex visual systems.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Not all trilobites had eyes.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What genus and species did the largest complete trilobite fossil ever found belong to?",
    "options": [
      "None of these",
      "Isotelus rex",
      "Isotelus maximus",
      "Isotelus brachycephalus"
    ],
    "correctIndex": 1
  },
  {
    "question": "The pygidium refers to what section of a trilobites body?",
    "options": [
      "The head",
      "None of these",
      "The thorax",
      "The tail"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following is believed to be an ancestor of the trilobites?",
    "options": [
      "Onega",
      "None of these",
      "Spriggina",
      "Trichophycus"
    ],
    "correctIndex": 2
  },
  {
    "question": "Did some trilobites filter-feed as a means of obtaining food?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "To what geographical region is the Aye-aye indigenous?",
    "options": [
      "Madagascar",
      "New Zealand",
      "Tasmania",
      "Hawaii"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about the lemur Aye-aye?",
    "options": [
      "It is the second smallest primate on the planet.",
      "It is the second largest primate in the world.",
      "It is the smallest nocturnal primate in the world.",
      "It is the largest nocturnal primate on the planet."
    ],
    "correctIndex": 3
  },
  {
    "question": "What physical feature does the lemur Aye-aye share with rodents, leading to its original classification in order Rodentia?",
    "options": [
      "Very large incisors",
      "Inability to vomit",
      "All of these",
      "Similarities in the digestive system"
    ],
    "correctIndex": 0
  },
  {
    "question": "What unusual physical characteristic does the lemur Aye-aye possess?",
    "options": [
      "Its pupils are constantly dilated.",
      "It has 4 nipples.",
      "It has extremely long fingers.",
      "All of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what places does the nocturnal Aye-aye sleep during the daytime?",
    "options": [
      "On a branch, covering its body with a big leaf",
      "Hanging from a branch.",
      "On trees",
      "In holes in the ground"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about the reproduction of the Aye-aye?",
    "options": [
      "None of these",
      "The baby stays with its mother for a year.",
      "Pregnancy lasts about 4 months.",
      "It reaches reproductive age at 3 - 3.5 years."
    ],
    "correctIndex": 0
  },
  {
    "question": "Where did the name of the Aye-aye originate from according to common hypothesis?",
    "options": [
      "All of these",
      "From the Malagasy expression for I dont know",
      "From the sound made by the animal",
      "From an exclamation"
    ],
    "correctIndex": 0
  },
  {
    "question": "How is the lemur Aye-aye classified according to its diet?",
    "options": [
      "Herbivore",
      "Omnivore",
      "Carnivore",
      "Specialized eater"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the Aye-aye traditionally associated with according to ancient Malagasy legends?",
    "options": [
      "Future marriage",
      "Rain",
      "Luck",
      "Death"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the Aye-aye character from the 2005 animated comedy movie Madagascar?",
    "options": [
      "Maurice",
      "Marty",
      "Mort",
      "King Julien"
    ],
    "correctIndex": 0
  },
  {
    "question": "To what geographic area is the koala endemic?",
    "options": [
      "Tasmania",
      "Australia and Tasmania",
      "Australia",
      "Australia and New Guinea"
    ],
    "correctIndex": 2
  },
  {
    "question": "What unique feature do the the fingers of the koala possess?",
    "options": [
      "There are six fingers on each leg.",
      "They have fingerprints.",
      "All of these",
      "Each finger consist of 10 bones."
    ],
    "correctIndex": 1
  },
  {
    "question": "What does the diet of the koala almost exclusively consist of?",
    "options": [
      "Eucalyptus leaves",
      "Grass",
      "All of these",
      "Insects"
    ],
    "correctIndex": 0
  },
  {
    "question": "What term is used to refer to the infant koala, as well as to any other baby marsupial?",
    "options": [
      "Jerry",
      "Joey",
      "Jimmy",
      "Jelly"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is true about koalas?",
    "options": [
      "All of these",
      "Keeping a koala as a pet is legal in the USA.",
      "They were nearly erased from the planet due to hunting in the early 20th century.",
      "In August 1927, 100 000 koalas were killed."
    ],
    "correctIndex": 2
  },
  {
    "question": "This fictional koala character, created by author Dorothy Wall, fist appeared in the 1933 book Jacko - the Broadcasting Kookaburra.",
    "options": [
      "Nutsy",
      "Jeremy",
      "Noozles",
      "Blinky Bill"
    ],
    "correctIndex": 3
  },
  {
    "question": "What unusual anatomical characteristic does the koala possess?",
    "options": [
      "The female has two vaginas.",
      "The female has two uteri.",
      "The make has a bifurcated penis.",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "The koala is the only animal species on the planet to possess this quality.",
    "options": [
      "All of these",
      "It sleeps with open eyes.",
      "When its hungry, it starts sucking on its tail.",
      "Its brain size is extremely reduced."
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the Greek word Phascolarctos, denoting the genus to which koalas belong, mean?",
    "options": [
      "Ash-colored",
      "Pouch bear",
      "Doesnt drink",
      "Monkey bear"
    ],
    "correctIndex": 1
  },
  {
    "question": "When anxious, the koala produces a loud sound similar to the cry made by this creature.",
    "options": [
      "Baby bear",
      "Crow",
      "Human baby",
      "Rabbit"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the literal meaning of the word giraffe considering its Arabic origin?",
    "options": [
      "Unbelievable",
      "Ambiguous",
      "Scary",
      "Tall"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is wrong?",
    "options": [
      "All of these",
      "The giraffe is the largest ruminant.",
      "The giraffe is the only surviving member of its family.",
      "The giraffe is the only surviving member of its genus."
    ],
    "correctIndex": 3
  },
  {
    "question": "What term is used for the behavior exhibited by male giraffes that are engaged in a fight?",
    "options": [
      "Hoofing",
      "Tailing",
      "Necking",
      "Horning"
    ],
    "correctIndex": 2
  },
  {
    "question": "Giraffes sometimes use their extremely long blue tongues for this purpose.",
    "options": [
      "Cleaning insects from their face",
      "Stealing eggs from birds nests",
      "Playing games with other giraffes",
      "All of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these giraffe subspecies is easily distinguished by the very light colored spots on its body?",
    "options": [
      "All of these",
      "South African Giraffe",
      "Somali Giraffe",
      "West African Giraffe"
    ],
    "correctIndex": 3
  },
  {
    "question": "The horns of which giraffes are very often bald on top?",
    "options": [
      "Babies",
      "Females",
      "Males",
      "Very old giraffes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Of all mammals, giraffes require the least amount of which of the following?",
    "options": [
      "Vitamins",
      "Food",
      "Water",
      "Sleep"
    ],
    "correctIndex": 3
  },
  {
    "question": "This artiodactyl mammal is the closest surviving relative of the giraffe.",
    "options": [
      "Okapi",
      "Tapir",
      "Llama",
      "Zebra"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the largest living subspecies of giraffe on the planet?",
    "options": [
      "Masai Giraffe",
      "South African Giraffe",
      "Rothschild Giraffe",
      "Nubian Giraffe"
    ],
    "correctIndex": 0
  },
  {
    "question": "What method of defense do giraffes most often employ against predator attacks?",
    "options": [
      "None of these",
      "Kicking",
      "They use their horns",
      "Standing still"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does the name of the zebra literally mean?",
    "options": [
      "Wild ass",
      "Funny horse",
      "Striped",
      "Black-and-white"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the senses of zebras is generally underdeveloped and the animal cannot rely very much on it?",
    "options": [
      "Smell",
      "None of these",
      "Hearing",
      "Eyesight"
    ],
    "correctIndex": 1
  },
  {
    "question": "What animal is the number one predator of zebras?",
    "options": [
      "Jackal",
      "Lion",
      "Hyena",
      "Crocodile"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the term denoting a group of zebras that live together?",
    "options": [
      "Harem",
      "Pack",
      "Stud",
      "Herd"
    ],
    "correctIndex": 0
  },
  {
    "question": "Unfortunately this fictional dog is constantly bullied by his buddy cat.",
    "options": [
      "Snoopy",
      "Lucky",
      "Goofy",
      "Odie"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which cartoon dog is one of Mickey Mouses best friends?",
    "options": [
      "Happy",
      "Minnie",
      "Doggie",
      "Goofy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which Rough Collie was awarded a star on the Hollywood Walk of Fame?",
    "options": [
      "Odie",
      "Honey",
      "Lassie",
      "Beauty"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the real name of the dog who first played the fictitious dog Benji in the series of Benji films?",
    "options": [
      "Benji",
      "Higgins",
      "Arnold",
      "Lassie"
    ],
    "correctIndex": 1
  },
  {
    "question": "This dog, whose name means barker in Russian, became the first living creature from Earth to enter orbit.",
    "options": [
      "Mandy",
      "Laika",
      "Lucky",
      "Sporty"
    ],
    "correctIndex": 1
  },
  {
    "question": "This dog, who first showed up in a Bud Light Beer Super Bowl ad, had a black circle around one eye.",
    "options": [
      "Spuds MacKenzie",
      "Blue MacKenzie",
      "Long John",
      "Spottie"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the Red Baron hunting Beagle from Charles Schultz popular comic strip, Peanuts.",
    "options": [
      "Scooby",
      "Lassie",
      "Odie",
      "Snoopy"
    ],
    "correctIndex": 3
  },
  {
    "question": "This cartoon Great Dane often needs his nephew headstrong nephew to protect him.",
    "options": [
      "Scooby",
      "Odie",
      "Scrappy",
      "Snoopy"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is the most distinctive feature of one of the largest marine creatures, which is also known to be the best diver - the sperm whale?",
    "options": [
      "Its huge vivid eyes",
      "Its extremely long tail",
      "Its enormous head",
      "The unique curvatures of its fins"
    ],
    "correctIndex": 2
  },
  {
    "question": "Giant squids, for long believed to be mythical creatures, are a type of deep-ocean dwelling squid that can grow to a tremendous size. The giant squid also holds the record for the largest organ, in which of these bodily systems?",
    "options": [
      "Digestive system",
      "Visual system",
      "Auditory system",
      "Reproductive system"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Herman Melvilles Moby-Dick, the leading character Ahab, consumed with the desire for revenge for his lost leg, mindlessly pursues a whale nicknamed Moby Dick. What type of whale is Moby Dick, according to the book?",
    "options": [
      "Sperm whale",
      "Baleen whale",
      "Blue whale",
      "Humpback whale"
    ],
    "correctIndex": 0
  },
  {
    "question": "This member of the oceanic dolphin family, named for its versatile predatory habits, cannot be mistaken with any other sea creature, due to its distinctive coloration - black back, white chest, sides, and a patch above and behind each eye.",
    "options": [
      "Killer whale",
      "Humpback dolphin",
      "Pilot whale",
      "Spinner dolphin"
    ],
    "correctIndex": 0
  },
  {
    "question": "In marine science, ichthyology, branch of zoology closely related to marine biology and oceanography, is the study of what?",
    "options": [
      "Microscopic marine life",
      "Fish",
      "Marine mammals",
      "Marine plant life"
    ],
    "correctIndex": 1
  },
  {
    "question": "Devilfish, a large species of ray, also called manta, was named such due to which of these characteristic features?",
    "options": [
      "Its pointed tail",
      "Two pointed lobes on each side of the head",
      "Its hunting habits",
      "Extended, winglike fins"
    ],
    "correctIndex": 1
  },
  {
    "question": "Periplaneta americana, Blattella germanica and Gromphadorhina portentosa are all species of this insect.",
    "options": [
      "House fly",
      "Cockroach",
      "Stick Insect",
      "Butterfly"
    ],
    "correctIndex": 1
  },
  {
    "question": "It is the national insect of Canada and the state insect of Texas.",
    "options": [
      "Ladybug",
      "Cricket",
      "Praying Mantis",
      "Monarch butterfly"
    ],
    "correctIndex": 3
  },
  {
    "question": "Many Royal Navy and US Navy ships are named after this fearful insect. Not just that, but an F/A-18 aircraft and a Honda motorcycle also carry its name.",
    "options": [
      "Tarantula",
      "Cicada",
      "Hornet",
      "Yellowjacket"
    ],
    "correctIndex": 2
  },
  {
    "question": "The scarab, a sacred beetle to Ancient Egyptians, is commonly known as what?",
    "options": [
      "Dung Beetle",
      "Stag Beetle",
      "June Bug",
      "Noble Chafer"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the common length of a full grown male Komodo Dragon?",
    "options": [
      "11 feet",
      "8 feet",
      "6 feet",
      "9 feet"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Komodo Dragon is NOT native to which of these islands?",
    "options": [
      "Rinca",
      "Flores",
      "Gili Motang",
      "Savalhi"
    ],
    "correctIndex": 3
  },
  {
    "question": "How heavy was the largest verified wild Komodo Dragon?",
    "options": [
      "154 lbs.",
      "275 lbs.",
      "200 lbs.",
      "365 lbs."
    ],
    "correctIndex": 3
  },
  {
    "question": "The Komodo Dragon is venomous.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the top speed that a Komodo Dragon can reach?",
    "options": [
      "13 mph",
      "6 mph",
      "10 mph",
      "27 mph"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Komodo Dragon is only one of 3 species of venomous lizards in the world.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these American zoos does NOT house Komodo Dragons?",
    "options": [
      "Honolulu Zoo",
      "Disneys Animal Kingdom",
      "Memphis Zoo",
      "Bronx Zoo"
    ],
    "correctIndex": 3
  },
  {
    "question": "Female Komodo Dragons can lay eggs without any contact with males.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How fast can a black bear run?",
    "options": [
      "61km/hour",
      "48 km/hour",
      "39 km/hour",
      "53 km/hour"
    ],
    "correctIndex": 1
  },
  {
    "question": "Are all bears omnivores?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is not a nickname for a polar bear?",
    "options": [
      "White bear",
      "Great bear",
      "Northern bear",
      "Sea bear"
    ],
    "correctIndex": 1
  },
  {
    "question": "At what age can grizzly bears start to mate?",
    "options": [
      "9 years",
      "1 and a half year",
      "7 weeks",
      "4 and a half year"
    ],
    "correctIndex": 3
  },
  {
    "question": "Do polar bears live in Antarctica?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many years does a mother grizzly stay with her cubs?",
    "options": [
      "5 months to 10 months",
      "1and a half to 3 and a half years",
      "6 weeks to 1 year",
      "7-8 years"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many polar bear subspecies are there?",
    "options": [
      "0",
      "3",
      "5",
      "1"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these animals usually preys on black bear cubs?",
    "options": [
      "Hedgehog",
      "Garden snake",
      "Cougar",
      "Dog"
    ],
    "correctIndex": 2
  },
  {
    "question": "What of these members of the bear family is the largest?",
    "options": [
      "Black bear",
      "Panda",
      "Grizzly bear",
      "Polar bear"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where do orphaned grizzly cubs Grinder and Coola live?",
    "options": [
      "Yukon",
      "Northwest Territories",
      "British Columbia",
      "Ontario"
    ],
    "correctIndex": 2
  },
  {
    "question": "There are just 2 species of turkey in the world.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Are wild turkeys very good fliers?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Turkeys are named after the country of Turkey.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many eggs does a turkey usually lay?",
    "options": [
      "8-15",
      "4-12",
      "6-13",
      "4-8"
    ],
    "correctIndex": 0
  },
  {
    "question": "Turkeys like to roost high in trees at night.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Turkeys were once threatened with extinction in America.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Did all Indian tribes of North America eat turkeys or consider them to be edible?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Male turkeys are monogamous and will stay with one female for life.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A cats sense of hearing is much more sensitive than that of a human or a dog.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "How fast can a domestic cat sprint?",
    "options": [
      "15 MPG",
      "30 MPH",
      "17 MPH",
      "25 MPH"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements if true about a cat?",
    "options": [
      "Their urine glows under a black light.",
      "Normal body temperature for a a cat is 95 degrees Fahrenheit.",
      "They take about 50 breaths per minute.",
      "They walk on the bottoms of their feet."
    ],
    "correctIndex": 0
  },
  {
    "question": "The nose pad of a cat is unique like the human fingerprint.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to a survey, what percentage of American cat owners admit to blow drying their feline after giving it a bath?",
    "options": [
      "15%",
      "70%",
      "25%",
      "5%"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which type of cat is almost always female?",
    "options": [
      "Calico",
      "White",
      "Persian",
      "Siamese"
    ],
    "correctIndex": 0
  },
  {
    "question": "Cats have 517 of these in their entire body.",
    "options": [
      "Claws",
      "Whiskers",
      "Muscles",
      "Bones"
    ],
    "correctIndex": 2
  },
  {
    "question": "Indoor cats tend to live longer.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What year was the very first cat show held?",
    "options": [
      "1895",
      "1926",
      "1877",
      "1901"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is not one of the most popular names for female cats in the USA?",
    "options": [
      "Missy",
      "Pumpkin",
      "Socks",
      "Tigger"
    ],
    "correctIndex": 2
  },
  {
    "question": "Finish this old phrase:",
    "options": [
      "climbs the curtains",
      "takes a message",
      "thinks its dinner time",
      "runs away from you"
    ],
    "correctIndex": 1
  },
  {
    "question": "On what continent can aardvarks be found?",
    "options": [
      "Africa",
      "Asia",
      "South America",
      "Australia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Are aardvarks an endangered species?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the scientific name for an aardvark?",
    "options": [
      "Troglodytes pan",
      "Orycteropus afer",
      "Loxodonta aficanus",
      "Muscous domesticus"
    ],
    "correctIndex": 1
  },
  {
    "question": "Aardvark is a word coming from the Afrikaans/Dutch that literally translates as what?",
    "options": [
      "Long Nose",
      "Ant Eater",
      "Pig Like",
      "Earth Pig"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many young can an adult aardvark have at one time?",
    "options": [
      "6",
      "up to one dozen",
      "only 1",
      "3"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the gestation period for an aardvark?",
    "options": [
      "1 full year",
      "9 months",
      "3 months",
      "7 months"
    ],
    "correctIndex": 3
  },
  {
    "question": "Are aardvarks nocturnal animals?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Aardvarks have more olfactory nerves than other mammals.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these statements about aardvarks is false?",
    "options": [
      "Aardvarks are hunted for meat.",
      "Aardvarks are color blind.",
      "Aardvarks are nocturnal.",
      "Aardvarks only eat termites."
    ],
    "correctIndex": 3
  },
  {
    "question": "What color was the aardvark from the Pink Panther cartoon?",
    "options": [
      "Red",
      "Blue",
      "Pink",
      "Gray"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the gestation period of a dolphin?",
    "options": [
      "Varies by species",
      "16 months",
      "9 months",
      "12 months"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Orca (Killer Whale) is the largest species of dolphin.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is NOT a species of dolphin?",
    "options": [
      "Eastern Dolphin",
      "Orca",
      "Pilot whale",
      "False Killer Whale"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dolphins are only found in the ocean.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What year was named by the United Nations as the Year of the Dolphin?",
    "options": [
      "1985",
      "2007",
      "2000",
      "1999"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately, how many species of dolphins exist?",
    "options": [
      "20",
      "40",
      "30",
      "12"
    ],
    "correctIndex": 1
  },
  {
    "question": "Are all dolphins considered whales?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where in the world can you find the dolphin known as the Boto?",
    "options": [
      "Asia",
      "Australia",
      "South America",
      "North America"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the scientific name of the Common Raccoon?",
    "options": [
      "Procyon cancrivorus",
      "Procyon nelus",
      "Procyon lotor",
      "Procyon insularis"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these in NOT a species of raccoon?",
    "options": [
      "Common Raccoon",
      "Tree Raccoon",
      "Tres Marias Raccoon",
      "Crab Eating Raccoon"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Toronto, Canada the raccoon has become a great urban pest, only exceeded by the Gray Squirrel.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is the raccoon native to Europe?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Are badgers related to weasels?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many young can an adult badger have at one time?",
    "options": [
      "1-8",
      "just 1",
      "1-5",
      "1-2"
    ],
    "correctIndex": 2
  },
  {
    "question": "The badger can be found in every part of the lower 48 states.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Can you find badgers in Europe?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is not a part of the badgers diet?",
    "options": [
      "Insects",
      "Birds",
      "Ground squirrels",
      "Rattlesnakes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Badgers like to use one den all year round.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Are badgers the largest native carnivores found in the UK?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "The expression badgering someone\u201d came from the cruel sport of badger baiting.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following octopuses could most easily kill a human?",
    "options": [
      "The Common Octopus",
      "The Blue Ringed Octopus",
      "The Giant Pacific Octopus",
      "Seven Armed Octopus"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many hearts do most octopi have?",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following best defines the octopus related word midden?",
    "options": [
      "a pile of shells",
      "a burrow in the sand used as a den",
      "a hole in the rock face or corral used as a den",
      "a chemical in the ink sprayed from an octopus siphon"
    ],
    "correctIndex": 0
  },
  {
    "question": "Octopi live alone all their lives except when mating.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The octopus is considered the smartest invertebrate.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is the name for an octopuss tongue?",
    "options": [
      "Siphon",
      "Hemetoy",
      "Mantle",
      "Radula"
    ],
    "correctIndex": 3
  },
  {
    "question": "Octopuses have excellent vision. Which of the following statements about an octopuss vision is NOT true?",
    "options": [
      "They can see well at night.",
      "They can see in depth.",
      "They can make out size and shape very well.",
      "They can see in color."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following octopi has the scientific name Enteroctopus Dofleini?",
    "options": [
      "None of these",
      "Giant Pacific Octopus",
      "Common Octopus",
      "Blue Ringed Octopus"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following words is NOT related to the octopus?",
    "options": [
      "Chemoreceptors",
      "Chromatophores",
      "Ambush",
      "Tentacles"
    ],
    "correctIndex": 3
  },
  {
    "question": "What two continents did Smilodon inhabit?",
    "options": [
      "North and South America",
      "Europe and Asia",
      "Europe and Africa",
      "Asia and Africa"
    ],
    "correctIndex": 0
  },
  {
    "question": "How much could a full-grown Smilodon weigh?",
    "options": [
      "525 lbs.",
      "350 lbs.",
      "450 lbs.",
      "400 lbs."
    ],
    "correctIndex": 2
  },
  {
    "question": "Is it believed that Smilodon was a social animal?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which species of Smilodon was the largest?",
    "options": [
      "Smilodon fatalis",
      "Smilodon populator",
      "Smilodon locor",
      "Smilodon gracilis"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately how long ago did Smilodon become extinct?",
    "options": [
      "5,000 years",
      "20,000 years",
      "10,000 years",
      "15,000 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Tomato Frog is native to the eastern coast of Madagascar.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What king of habitat do Tomato Frogs live in?",
    "options": [
      "in the snowy mountain tops",
      "in marshes, shallow pools, flooded meadows, and wetlands",
      "in dessert areas that are very arid and dry",
      "in the salty ocean"
    ],
    "correctIndex": 1
  },
  {
    "question": "Tomato Frogs existence is threatened due to what reason?",
    "options": [
      "Habitat destruction",
      "Their legs are used for food in fine dining restaurants.",
      "They are hunted for their oils that are used as a skin moisturizer.",
      "Flooding"
    ],
    "correctIndex": 0
  },
  {
    "question": "Tomato Frogs tend to hit sexual maturity in about 9-14 months.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Male Tomato Frogs are bright red.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Female Tomato Frogs are larger than male Tomato Frogs.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "When Tomato Frogs are in captivity at a zoo, what kind of food are they fed?",
    "options": [
      "Grass, seaweed, and other vegetation",
      "Small fish, such as minnows and guppies",
      "Vitamin-dusted crickets and mealworms.",
      "The same food they would eat in the wild"
    ],
    "correctIndex": 2
  },
  {
    "question": "Tomato Frogs lay their eggs in the water during rainy seasons.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The life span of a Tomato Frog is 15-35 years.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "When the Tomato Frog is threatened its skin secretes a thick substance containing a toxin.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The manatee is a marine mammal.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The manatee has a tail similar in shape to that of the dolphin.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Manatees range in weight from 900 to 1200 pounds (400-550 kg.)",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Manatees are found more commonly in Caribbean, Mexico, and Florida waters. Why?",
    "options": [
      "The water is cool.",
      "There is a better food variety.",
      "The water is warm.",
      "The water is salty."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these do manatees use to communicate with their calves and other manatees?",
    "options": [
      "Sounds",
      "All of these",
      "Touch",
      "Movement"
    ],
    "correctIndex": 1
  },
  {
    "question": "Due to the presence of a specific protein in the blood plasma octopuses have this unusual blood color.",
    "options": [
      "Blue",
      "Black",
      "Bright green",
      "Fluorescent pink"
    ],
    "correctIndex": 0
  },
  {
    "question": "Some animals have an inborn instinct to swallow gastroliths in order to improve the breaking down of food inside their stomachs. What kind of objects are gastroliths?",
    "options": [
      "Rocks",
      "Plants that are rich in digestive enzymes",
      "Insects",
      "Excrements"
    ],
    "correctIndex": 0
  },
  {
    "question": "Parthenogenesis (from Greek - virgin creation), an asexual way of reproduction without the need of fertilization, occurs naturally in these animals.",
    "options": [
      "All of these",
      "Birds",
      "Reptiles",
      "Fish"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of  the following statements is true about mosquitoes?",
    "options": [
      "Only female mosquitoes suck blood.",
      "Only male mosquitoes suck blood.",
      "All mosquitoes on the planet drink blood.",
      "Only baby mosquitoes drink blood."
    ],
    "correctIndex": 0
  },
  {
    "question": "What kind of respiratory organs do lungfish have?",
    "options": [
      "They have both lungs and gills.",
      "Lungfish do not have any respiratory organs. They absorb oxygen through their skin.",
      "They breathe only with gills.",
      "They do not have gills, they use their lungs for respiration."
    ],
    "correctIndex": 0
  },
  {
    "question": "Cockroaches are among the most resilient creatures on our planet. But how long can they survive without air?",
    "options": [
      "60 minutes",
      "45 minutes",
      "10 minutes",
      "2 hours"
    ],
    "correctIndex": 1
  },
  {
    "question": "Human skin has the unique ability to acquire a darker shade when exposed to UV-rays. What animals share this ability with us?",
    "options": [
      "Dolphins and seals",
      "Chimpanzees and gorillas",
      "Pigs and hammerhead sharks",
      "All reptiles and anthropoid apes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Koalas almost exclusively feed on this type of food.",
    "options": [
      "Bottle tree leaves",
      "Tea tree leaves",
      "Eucalyptus leaves",
      "Bamboo leaves"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following statements is true about snails?",
    "options": [
      "None of these",
      "Snails do have tooth-like formations.",
      "Snails do not have any teeth or tooth-like formations.",
      "Snails have real teeth very similar to those of mammals."
    ],
    "correctIndex": 1
  },
  {
    "question": "Some sharks hardly ever stop swimming during their whole existence. What is the reason for this?",
    "options": [
      "Some sharks are very desirable hosts for small parasitic creatures. Those sharks are constantly trying to escape from them by incessant swimming.",
      "Sharks are highly anxious and easily agitated animals. They cannot stay in the same place for more than a few seconds.",
      "Sharks are cold-blooded animals. If they stop moving their body temperature will decrease too much and will cause hypothermia, which can be lethal.",
      "Some sharks have lost the ability to pump water through their gills, so they need to keep moving in order to stay alive"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Mimic Leatherjacket, found in the tropical marine waters throughout the Indo-Pacific, mimics which poisonous fish?",
    "options": [
      "Red Bass",
      "Hogfish",
      "Saddled Puffer",
      "Stonefish"
    ],
    "correctIndex": 2
  },
  {
    "question": "This primitive shark, with a brown thin eel-like body, has six pairs of gill slits and trident-like teeth.",
    "options": [
      "Frilled shark",
      "Tiger shark",
      "Bull shark",
      "Sharpnose seven-gill shark"
    ],
    "correctIndex": 0
  },
  {
    "question": "This fish, which resembles the Angel fish, is recognized by its brightly coloured and patterned body, as well as by the dark band across its eyes.",
    "options": [
      "Butterfly fish",
      "Purple queen",
      "Cichlid",
      "Clown fish"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Parrot fish, found in the Atlantic Indian and Pacific Ocean reefs, was given its name for what reason?",
    "options": [
      "Because of the shape of its body",
      "Because it can fly a few metres above water",
      "Because its body is in different flashy colours",
      "Because of its beak-like mouth"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the other name of Mola mola, a fish generally considered to be the most massive bony fish in the world?",
    "options": [
      "Filefish",
      "Ocean Sunfish",
      "Pufferfish",
      "Triggerfish"
    ],
    "correctIndex": 1
  },
  {
    "question": "When threatened, this fish, also known as balloonfish, increases in size by swallowing water or air.",
    "options": [
      "Bowfin",
      "Porcupinefish",
      "Bichir",
      "Oar fish"
    ],
    "correctIndex": 1
  },
  {
    "question": "The zebrafish (Girella zebra), which can be recognised by its pale body and yellow fins, is endemic to which region?",
    "options": [
      "Amazon River Basin",
      "Australian waters",
      "The Caribbean",
      "Japan waters"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Flashlight fish, has a light-producing organ, which contains luminescent bacteria. Where is this organ located?",
    "options": [
      "On the dorsal fin of the fish",
      "Below the eye of the fish",
      "Above the eye of the fish",
      "Between the eyes of the fish"
    ],
    "correctIndex": 1
  },
  {
    "question": "The catfishes Physailia pellucida and Kryptopterus bicirrhis, found in the mid-waters of Southeast Asia, use what kind of camouflage?",
    "options": [
      "Transparency",
      "Change their colour",
      "Mimic algae",
      "Mimic poisonous fish"
    ],
    "correctIndex": 0
  },
  {
    "question": "Giant Pandas eat oranges and bananas.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Is the Giant Panda an endangered species?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Giant Panda and which of the following serve as an Asian countrys national emblem?",
    "options": [
      "The dragon",
      "The Golden Lion Tamarin",
      "The Chinese alligator",
      "The South China Tiger"
    ],
    "correctIndex": 0
  },
  {
    "question": "Do Giant Pandas hibernate?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the gestation period of the Giant Panda?",
    "options": [
      "40-50 days",
      "60-90 days",
      "90-120 days",
      "95-160 days"
    ],
    "correctIndex": 3
  },
  {
    "question": "This animal is the second most expensive for zoos to maintain after the Giant Panda.",
    "options": [
      "Lion",
      "Elephant",
      "Giraffe",
      "Bear"
    ],
    "correctIndex": 1
  },
  {
    "question": "The giant pandas diet is 99% this.",
    "options": [
      "bananas",
      "fish",
      "honey",
      "bamboo"
    ],
    "correctIndex": 3
  },
  {
    "question": "Pandas live in the mountains in the Sichuan, Shaanxi, and Gansu provinces in this country.",
    "options": [
      "Mongolia",
      "Thailand",
      "China",
      "Korea"
    ],
    "correctIndex": 2
  },
  {
    "question": "At birth, pandas weigh about 4 ounces and are the size of a stick of butter. Which of these is NOT true about a newborn panda?",
    "options": [
      "They are grey in color.",
      "They nurse up to 14 times a day.",
      "They are hairless.",
      "They are blind."
    ],
    "correctIndex": 0
  },
  {
    "question": "Pandas do not hibernate.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Pandas live and travel together.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Pandas spend 10-16 hours a day eating, the rest of the time they are usually resting. When are pandas most active?",
    "options": [
      "at dusk and at dawn",
      "between 10am and 2pm",
      "between 2p and 10pm",
      "only at night"
    ],
    "correctIndex": 0
  },
  {
    "question": "When a panda is born, it is impossible to tell if it is male or female. How old is the panda before its gender is known?",
    "options": [
      "3 months",
      "1 year",
      "4 years",
      "6 months"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these is TRUE about pandas?",
    "options": [
      "They belong to the raccoon family.",
      "They are poor climbers.",
      "They were unknown to the Western world until the 1600s.",
      "They are carnivores."
    ],
    "correctIndex": 3
  },
  {
    "question": "How long does a panda usually live in captivity?",
    "options": [
      "10 - 15 years",
      "80 - 90 years",
      "20 - 30 years",
      "55 - 65 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "The panda is the symbol of this conservation organization, formed in 1961.",
    "options": [
      "Leave It Wild",
      "The Conservation Society",
      "The African Conservation Foundation",
      "The World Wildlife Fund"
    ],
    "correctIndex": 3
  },
  {
    "question": "The panda has an enlarged wristbone that works as an opposable thumb.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Pandas are known to roar.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the 1930s movie King Kong, the giant ape battles a pterodactyl.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many stomachs does a starfish have?",
    "options": [
      "1",
      "0",
      "2",
      "5"
    ],
    "correctIndex": 2
  },
  {
    "question": "A starfish cannot regenerate a lost arm.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "All starfish have 5 arms.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which country is the Gohongaze Starfish considered an edible delicacy?",
    "options": [
      "China",
      "Italy",
      "New Zealand",
      "Japan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Starfish are capable of both asexual and sexual reproduction.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Starfish are fast moving creatures.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A starfish is a type of fish.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "There are two classes of starfish. Name them.",
    "options": [
      "Salt Stars and Fresh Stars",
      "Soft Stars and Hard Stars",
      "Sea Star and Brittle Stars",
      "Common Stars and Rare Stars"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these is not a relative of the starfish?",
    "options": [
      "Sea Urchin",
      "Sea Cucumber",
      "Sand Dollar",
      "Sea Horse"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is located on the end of every arm of a starfish?",
    "options": [
      "Ear",
      "Whisker",
      "Eye",
      "Mouth"
    ],
    "correctIndex": 2
  },
  {
    "question": "Scorpions are active at night in order to avoid which of their predators?",
    "options": [
      "Mice",
      "Lizards",
      "All of these",
      "Centipedes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Raccoons are usually nocturnal animals, and they are famous for dousing their food before eating it. This is actually an activity that imitates foraging for food at shores. What is the term for such an activity?",
    "options": [
      "Vacuum activity",
      "Vain activity",
      "All of these",
      "False activity"
    ],
    "correctIndex": 0
  },
  {
    "question": "What sense helps kiwis find food in the dark?",
    "options": [
      "All of these",
      "Sense of smell",
      "Eyesight",
      "Hearing"
    ],
    "correctIndex": 1
  },
  {
    "question": "Kakapo is a nocturnal parrot indigenous to New Zealand. Due to its resemblance to this nocturnal animal, it is also called by its name.",
    "options": [
      "Raccoon",
      "Cat",
      "Rat",
      "Owl"
    ],
    "correctIndex": 3
  },
  {
    "question": "Mink are mainly active at night and they do not hibernate. Which of these animals is a predator of the American Mink?",
    "options": [
      "All of these",
      "Wolf",
      "Owl",
      "Coyote"
    ],
    "correctIndex": 0
  },
  {
    "question": "What animal is the largest nocturnal prosimian on the planet?",
    "options": [
      "Gorilla",
      "Mantled Guereza",
      "Aye-aye",
      "Olive Baboon"
    ],
    "correctIndex": 2
  },
  {
    "question": "Catfish are bony fish that are active in the nighttime. How did they get their interesting name?",
    "options": [
      "They have barbels that remind of cat whiskers.",
      "They like to rub against objects like cats do.",
      "They have cat eyes.",
      "All of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "Fireflies are known for their ability to produce light of this color.",
    "options": [
      "Yellow",
      "All of these",
      "Pale red",
      "Green"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Ocelot is a nocturnal cat that is also called by this name in certain regions.",
    "options": [
      "All of these",
      "McKenneys Wildcat",
      "Jaguarete",
      "Painted Leopard"
    ],
    "correctIndex": 0
  },
  {
    "question": "Tapeti is a nocturnal cottontail rabbit that is indigenous to these areas.",
    "options": [
      "Central and South America",
      "Australia and Tasmania",
      "South Asia",
      "South Africa and Madagascar"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the average speed dolphins can reach?",
    "options": [
      "25.5 km/hr",
      "14.5 km/hr",
      "16.5 km/hr",
      "38.5 km/hr"
    ],
    "correctIndex": 2
  },
  {
    "question": "How deep can a bottlenose dolphin dive?",
    "options": [
      "300 meters",
      "800 meters",
      "1250 meters",
      "700 meters"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many different species of dolphins are there in the world?",
    "options": [
      "15",
      "48",
      "32",
      "12"
    ],
    "correctIndex": 2
  },
  {
    "question": "Is dolphins sense of hearing superior to that of humans?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "How do dolphins generally sleep if they are in the wild?",
    "options": [
      "None of these",
      "like land mammals",
      "They dont sleep at all.",
      "with only one brain hemisphere in slow-wave sleep"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the smallest species of dolphin?",
    "options": [
      "Maui Dolphin/Hectors Dolphin",
      "The Spinner Dolphin",
      "The Pacific White-Sided Dolphin",
      "The Bottlenose Dolphin"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about squirrels?",
    "options": [
      "Some squirrel species are omnivorous.",
      "Most squirrels are active in the daytime.",
      "They cannot digest cellulose.",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about the tongue of the giraffe?",
    "options": [
      "The animal uses it as a tool to remove insects from its face.",
      "All of these",
      "It is about 18 inches (45 centimeters) long.",
      "It is tough."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is true about elephants?",
    "options": [
      "All of these",
      "Their diet consists of 80% tree leaves.",
      "They are able to digest 40% of their food.",
      "They spend 8-10 hours a day eating."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about grasshoppers?",
    "options": [
      "They have salivary glands.",
      "Their digestive tract secretes digestive enzymes.",
      "They have two antennae on their heads.",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these foods does the Canada goose include in its diet?",
    "options": [
      "Green vegetation",
      "All of these",
      "Grains",
      "Seaweeds"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is true about the digestive system of the Hoatzin, a herbivorous tropical bird?",
    "options": [
      "All of these",
      "It has teeth that it uses for mastication.",
      "It has four stomachs.",
      "It breaks down its food through bacterial fermentation."
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the meaning of the term graminivore?",
    "options": [
      "an animal that feeds on fruit",
      "an animal that feeds on seaweed",
      "an animal that feeds on grass",
      "an animal that feeds on tree leaves"
    ],
    "correctIndex": 2
  },
  {
    "question": "What kind of herbivorous animals are the granivores?",
    "options": [
      "Animals that feed on buds",
      "All of these",
      "Animals that feed on seeds",
      "Animals that feed on fruit"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about the diet of Green iguanas?",
    "options": [
      "All of these",
      "Young iguanas are known to eat the feces of mature iguanas.",
      "Wild iguanas sometimes eat bird eggs.",
      "They are primarily herbivorous."
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about the diet of the Sumatran rhinoceros?",
    "options": [
      "It feeds mainly in the morning and before dusk.",
      "It consumes about 220 lb (100 kg) of food daily.",
      "All of these",
      "Its diet is rich in protein and poor in fiber."
    ],
    "correctIndex": 0
  },
  {
    "question": "Which continents does the natural habitat of the jaguar span upon?",
    "options": [
      "Europe and Africa",
      "South America and Africa",
      "Africa and Asia",
      "North and South America"
    ],
    "correctIndex": 3
  },
  {
    "question": "The jaguars extremely powerful bite, which can pierce through a turtles shell, makes it the mammal with the strongest jaw in the animal kingdom.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following statements is not true about the reproduction of jaguars?",
    "options": [
      "Jaguars gestation period is 93 - 105 days.",
      "Female jaguars reach maturity earlier than males.",
      "Both males and females provide parenting of the cubs.",
      "Jaguars mate throughout the whole year."
    ],
    "correctIndex": 2
  },
  {
    "question": "How can jaguars be described in terms of social activity?",
    "options": [
      "Solitary",
      "Sociable",
      "Group animals",
      "None of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "In jaguars society only male animals hunt while females look after the cubs.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "All but one of the following activities are generally untypical for jaguars. Choose the one most natural to them.",
    "options": [
      "Starting to eat their prey from the fleshy abdominal area",
      "Stalking and ambushing their prey",
      "Chasing their prey",
      "Attacking humans"
    ],
    "correctIndex": 1
  },
  {
    "question": "In nature adult jaguars are apex predators in the food chain. What does this mean?",
    "options": [
      "They are not preyed on by other predators.",
      "They feed only on other predators.",
      "They do not hunt on other predators.",
      "Besides hunting they also feed on plants."
    ],
    "correctIndex": 0
  },
  {
    "question": "The jaguar is the national animal of which of the following countries?",
    "options": [
      "Brasil",
      "Nicaragua",
      "Peru",
      "Costa Rica"
    ],
    "correctIndex": 0
  },
  {
    "question": "Jaguars closely resemble which other big cats in physical appearance?",
    "options": [
      "Tiger",
      "Cheetah",
      "Puma",
      "Leopard"
    ],
    "correctIndex": 3
  },
  {
    "question": "Jaguars appearance seems to vary across regions and habitats. How do forest jaguars differ from the jaguars in open areas?",
    "options": [
      "Forest jaguars are generally darker and larger",
      "Forest jaguars are generally and more spotted",
      "Forest jaguars are generally darker and smaller",
      "Forest jaguars are generally larger and lighter in fur color"
    ],
    "correctIndex": 2
  },
  {
    "question": "What continent does the large Griffon Vulture inhabit?",
    "options": [
      "Asia",
      "All of these",
      "Europe",
      "Africa"
    ],
    "correctIndex": 1
  },
  {
    "question": "What common name is used to refer to the scavenging animals, representatives of the order Opiliones?",
    "options": [
      "Waterbugs",
      "Sweepers",
      "Bumblebees",
      "Harvestmen"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the literal meaning of the word raccoon, which originates from the Algonquin word ahrah-koon-em and denotes a scavenging mammal?",
    "options": [
      "One who grasps with their hand just like a human",
      "One who rubs, scrubs and scratches with its hands",
      "One who eats whatever is in front of them",
      "One who washes their hands and their food before eating"
    ],
    "correctIndex": 1
  },
  {
    "question": "What term is mainly used in literature to refer to a group of crows?",
    "options": [
      "A mug",
      "A plunder",
      "A gaggle",
      "A murder"
    ],
    "correctIndex": 3
  },
  {
    "question": "What term refers to the animal that is the result of crossbreeding between a male coyote and a female dog?",
    "options": [
      "All of these",
      "Coypup",
      "Coydog",
      "Dogote"
    ],
    "correctIndex": 2
  },
  {
    "question": "What do the beetles from the genus Nicrophorus do after finding a carcass?",
    "options": [
      "They remain right next to it and protect it violently.",
      "They bury it.",
      "They wait for it to decompose.",
      "They tear it into small pieces."
    ],
    "correctIndex": 1
  },
  {
    "question": "What hyena species is the largest surviving on the planet?",
    "options": [
      "Aardwolf",
      "Spotted Hyena",
      "Striped Hyena",
      "Brown Hyena"
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of animals are the Yellow jackets, the scavenging and predatory animals belonging to the genera Vespula and Dolichovespula?",
    "options": [
      "Flies",
      "Wasps",
      "All of these",
      "Bees"
    ],
    "correctIndex": 1
  },
  {
    "question": "Lions may be skilled predators, but they would also eat carrion. What animal is the lions preferred food?",
    "options": [
      "Rhinoceros",
      "Hippopotamus",
      "Elephant",
      "Wildebeest"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these names is commonly used for the carrion flies, belonging to the family Calliphoridae?",
    "options": [
      "All of these",
      "Greenbottle",
      "Blow-flies",
      "Cluster flies"
    ],
    "correctIndex": 0
  },
  {
    "question": "The diet of most parrots consists of this type of food.",
    "options": [
      "Buds",
      "Fruit",
      "All of these",
      "Seeds"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about the parrots breeding habits?",
    "options": [
      "None of these",
      "Parrots are polygamous.",
      "Parrots are polyandrous.",
      "Parrots are monogamous."
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the color of the eggs of all parrot species?",
    "options": [
      "White",
      "Green",
      "Multicolored",
      "Blue"
    ],
    "correctIndex": 0
  },
  {
    "question": "Parrots are considered the most intelligent birds on the planet along with these birds.",
    "options": [
      "Ravens",
      "All of these",
      "Jays",
      "Crows"
    ],
    "correctIndex": 1
  },
  {
    "question": "These parrots are believed to be the best at imitating sounds and human speech.",
    "options": [
      "Lory",
      "Amazon Parrot",
      "Cockatoo",
      "African Grey Parrot"
    ],
    "correctIndex": 3
  },
  {
    "question": "Larger parrot species have longer life spans than smaller ones. What is the average life span of a large parrot?",
    "options": [
      "Up to 80 years",
      "20-25 years",
      "Up to 50 years",
      "14-15 years"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the predominant color in Amazon Parrots plumage?",
    "options": [
      "Yellow",
      "White",
      "Green",
      "Blue"
    ],
    "correctIndex": 2
  },
  {
    "question": "The heaviest parrot species on the planet is the Kakapo. What is the average weight that a normal mature Kakapo can reach?",
    "options": [
      "1.5 to 2 kg",
      "2 to 4 kg",
      "2.5 to 3 kg",
      "2 to 2.5 kg"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these makes Cockatoos different from other parrot species?",
    "options": [
      "They have a gall bladder.",
      "All of these",
      "They are not so colorful as other parrots.",
      "They have a headcrest."
    ],
    "correctIndex": 1
  },
  {
    "question": "Lories and lorikeets have special tongues with brush-like tips for feeding on very small insects.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "This cat breed has a wild markings and is a crossbreed between an Asian Leopard Cat and a domestic cat.",
    "options": [
      "Bengal",
      "Ocicat",
      "Savannah",
      "California Spangled Cat"
    ],
    "correctIndex": 0
  },
  {
    "question": "This old breed of cat has long fur. It originated in the Middle East, and some of its representatives have a flat face.",
    "options": [
      "Siamese",
      "Chinchilla",
      "Himalayan",
      "Persian"
    ],
    "correctIndex": 3
  },
  {
    "question": "This hairless cat has a dog-like face and folded ears.",
    "options": [
      "Sphynx",
      "Donskoy",
      "Peterbald",
      "Ukrainian Levkoy"
    ],
    "correctIndex": 3
  },
  {
    "question": "This large cat was is the result of crossbreeding between a domestic cat and a Jungle Cat.",
    "options": [
      "All of these",
      "Jungle Curl",
      "Chausie",
      "Mountain Cougar"
    ],
    "correctIndex": 0
  },
  {
    "question": "This cat breed originated in Russia and has a short fluffy tail.",
    "options": [
      "Kurilian Bobtail",
      "Siberian",
      "Russian Blue",
      "Manx"
    ],
    "correctIndex": 0
  },
  {
    "question": "This cat breed is believed to have developed naturally in China. It has short golden brown fur with the so-called broken striped pattern and a large strong body.",
    "options": [
      "Dragon Li",
      "Oriental Bicolour",
      "Korat",
      "Cymric"
    ],
    "correctIndex": 0
  },
  {
    "question": "What cat breed, also called the Greyhound of the cats, has no hair except for down?",
    "options": [
      "Don Sphynx",
      "Oriental Bicolour",
      "Cornish Rex",
      "Sokoke"
    ],
    "correctIndex": 2
  },
  {
    "question": "What cat breed has very thick short fur, large round eyes, round head and chubby cheeks?",
    "options": [
      "Colorpoint Shorthair",
      "British Shorthair",
      "Selkirk Rex",
      "European Shorthair"
    ],
    "correctIndex": 1
  },
  {
    "question": "This breed of cat has a round head, large round eyes and very small ears bended forward and downward.",
    "options": [
      "American Curl",
      "Scottish Fold",
      "Toyger",
      "Ussuri"
    ],
    "correctIndex": 1
  },
  {
    "question": "This old large cat breed occurred naturally in Europe. It has waterproof thick fluffy fur and can survive very cold weather.",
    "options": [
      "Norwegian Forest Cat",
      "Persian",
      "Squitten",
      "Ragamuffin"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the communities formed by rabbits living together?",
    "options": [
      "Herds",
      "Schools",
      "Flocks",
      "Warrens"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about the difference between rabbits and hares?",
    "options": [
      "Hares live above the ground.",
      "All of these",
      "Unlike rabbits, hares are born with hair and are able to see.",
      "Hares have longer ears than rabbits."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is true about the digestive tract of rabbits?",
    "options": [
      "Their cecum, together with the large intestine, comprises about 25-30% of rabbits digestive tract.",
      "They are hindgut digesters.",
      "All of these",
      "Their cecum is about 5 times bigger than their stomach."
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the common name of cecotropes, products of the cecum which rabbits reingest to get nutrients?",
    "options": [
      "Rabbit pellets",
      "False feces",
      "All of these",
      "Night feces"
    ],
    "correctIndex": 3
  },
  {
    "question": "Rabbits vomit often to get rid of whatever their stomach is unable to digest.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these types of food do rabbits prefer to include  in their daily diet?",
    "options": [
      "Grass",
      "Leafy weeds",
      "Forbs (such as sunflowers)",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about the behavior of rabbits?",
    "options": [
      "They are very easily startled.",
      "They run and hide immediately when they feel threatened.",
      "They are always alert.",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name used for young rabbits?",
    "options": [
      "Kittens",
      "Fluffles",
      "Puppies",
      "Conies"
    ],
    "correctIndex": 0
  },
  {
    "question": "What are rabbits associated with in Aztec mythology?",
    "options": [
      "Drunkenness",
      "Parties",
      "All of these",
      "Fertility"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the place of rabbits in Japanese tradition and mythology?",
    "options": [
      "They are despised as being too timid.",
      "They are believed to inhabit the Moon.",
      "They are considered omnipotent.",
      "Rabbits are not a part of Japanese mythology."
    ],
    "correctIndex": 1
  },
  {
    "question": "Scorpions are not found naturally in this geographical area.",
    "options": [
      "Australia",
      "Europe",
      "New Zealand",
      "All of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "What name is used to refer to the scorpion species also known as Omdurman scorpion, and Israeli desert scorpion?",
    "options": [
      "Bonebreaker",
      "Windchaser",
      "Deathstalker",
      "Nightkiller"
    ],
    "correctIndex": 2
  },
  {
    "question": "Scorpions are known to glow when exposed to this type of light.",
    "options": [
      "All of these",
      "Infrared light",
      "Laser light",
      "Blacklight"
    ],
    "correctIndex": 3
  },
  {
    "question": "What distinctive anatomical characteristic do the scorpions from the Hemiscorpiidae family possess, which makes them easily recognizable?",
    "options": [
      "They have only four legs.",
      "Their sting is intense red",
      "Their body is flat and broad.",
      "All of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "There is a separate species of scorpions which have two tails, with a venomous sting on each tail.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where does the female scorpion raise its young?",
    "options": [
      "On her back",
      "In the roots of plants",
      "Under her abdomen",
      "In burrows in the ground"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is wrong about the reproduction of scorpions?",
    "options": [
      "Most scorpions reproduce through parthenogenesis.",
      "All of these",
      "Most scorpion species are hermaphrodites.",
      "Most scorpions reproduce asexually."
    ],
    "correctIndex": 1
  },
  {
    "question": "What does the diet of scorpions usually consist of?",
    "options": [
      "Insects",
      "All of these",
      "Worms and maggots",
      "Plant matter"
    ],
    "correctIndex": 0
  },
  {
    "question": "What type of behavior is characteristic of scorpion species?",
    "options": [
      "Photophobic behavior",
      "Hydrophobic behavior",
      "All of these",
      "Phonophobic behavior"
    ],
    "correctIndex": 0
  },
  {
    "question": "Scorpion venom is regarded as a potential source of chemicals that can be used in the treatment of this disease.",
    "options": [
      "Autoimmune disorders",
      "Cancer",
      "Multiple sclerosis",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What common name is used to refer to the insects from the subfamily Triatominae, mainly found in the Americas?",
    "options": [
      "Kissing bugs",
      "Lollipop bugs",
      "Microphone bugs",
      "Pretty bugs"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the largest extant butterfly species on the planet?",
    "options": [
      "Rajah Brookes Birdwing",
      "Goliath Birdwing",
      "Queen Alexandras Birdwing",
      "Cairns Birdwing"
    ],
    "correctIndex": 2
  },
  {
    "question": "Why were the insects known as snakeflies given this interesting name?",
    "options": [
      "They hiss.",
      "They have a venomous bite.",
      "Their body is elongated.",
      "They have snake skin color patterns on their back."
    ],
    "correctIndex": 2
  },
  {
    "question": "What distinctive anatomical feature does the beetle species Trogodendron fasciculatum possess?",
    "options": [
      "Bright yellow antennae",
      "A green W mark on the back",
      "Very large red eyes",
      "Its abdomen is blue"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the flamboyant flower beetle, also known as striped love beetle, feed on?",
    "options": [
      "Insects",
      "Nectar",
      "Blood",
      "Carrion"
    ],
    "correctIndex": 1
  },
  {
    "question": "What belief about the European hornet, the largest European eusocial wasp, is widespread among the people who are afraid of it?",
    "options": [
      "If it stings you, youll never have children.",
      "If it stings you on the arm or leg, that limb has to be amputated.",
      "Three stings can kill an adult human, and seven can kill a horse.",
      "Stinging results in deep sleep that you may never wake up from."
    ],
    "correctIndex": 2
  },
  {
    "question": "To what geographical area is the Ctenomorphodes chronus, a species of stick insect, endemic?",
    "options": [
      "All of these",
      "Madagascar",
      "South America",
      "Australia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What kind of substance does the female redeye cicada prefer for laying eggs into?",
    "options": [
      "Dead animal matter",
      "Animal and human hair",
      "Plant tissue",
      "Living animal organisms"
    ],
    "correctIndex": 2
  },
  {
    "question": "What part of their body do the insects from order Archaeognatha use to spring up into the air?",
    "options": [
      "Antennae",
      "Front legs",
      "Hind legs",
      "Tail"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the literal translation of the Greek word Embioptera, which denotes an order of insects, also known as webspinners?",
    "options": [
      "Small wings",
      "None of these",
      "Yarn knitter",
      "Lively wings"
    ],
    "correctIndex": 3
  }
];