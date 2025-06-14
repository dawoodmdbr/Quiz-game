const questions = [
  {
    "question": "This drink contains caffeine.",
    "options": [
      "Mineral water",
      "Orange juice",
      "Coffee",
      "Beer"
    ],
    "correctIndex": 2
  },
  {
    "question": "If a TV program is rated G then this is true.",
    "options": [
      "It contains moderate violence.",
      "It contains mild sexual situations.",
      "It is suitable for all audiences.",
      "It is suitable for young children."
    ],
    "correctIndex": 2
  },
  {
    "question": "The theory of relativity was introduced in physics by this man.",
    "options": [
      "Galileo Galilei",
      "Albert Einstein",
      "Archimedes",
      "Isaac Newton"
    ],
    "correctIndex": 1
  },
  {
    "question": "The symbol for the chemical element iron is this.",
    "options": [
      "I",
      "Fe",
      "Zn",
      "Br"
    ],
    "correctIndex": 1
  },
  {
    "question": "The author of the novel A Portrait of the Artist as a Young Man is this writer.",
    "options": [
      "T. S. Eliot",
      "Samuel Beckett",
      "William Faulkner",
      "James Joyce"
    ],
    "correctIndex": 3
  },
  {
    "question": "The capital of Mongolia is this city.",
    "options": [
      "Davao",
      "Islamabad",
      "Quezon",
      "Ulaanbaatar"
    ],
    "correctIndex": 3
  },
  {
    "question": "Mitochondrias function in cells is to perform this.",
    "options": [
      "To control chemical reactions within the cytoplasm",
      "To store information needed for cellular division",
      "To convert organic materials into energy",
      "To process proteins targeted to the plasma membrane"
    ],
    "correctIndex": 2
  },
  {
    "question": "The US bought Alaska in this year.",
    "options": [
      "1942",
      "1882",
      "1854",
      "1867"
    ],
    "correctIndex": 3
  },
  {
    "question": "The 23rd US President was in office during this period.",
    "options": [
      "1909 - 1913",
      "1889 - 1893",
      "1837 - 1841",
      "1877 - 1881"
    ],
    "correctIndex": 1
  },
  {
    "question": "One of these actors did not star in the 1971 movie A Clockwork Orange.",
    "options": [
      "Michael Bates",
      "Patrick Magee",
      "Warren Brown",
      "Malcolm McDowell"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first Bulgarian state was formed in this year.",
    "options": [
      "429 AD",
      "681 AD",
      "712 AD",
      "651 AD"
    ],
    "correctIndex": 1
  },
  {
    "question": "The 1962 Soccer World Cup tournament was held in this country.",
    "options": [
      "Switzerland",
      "Mexico",
      "Chile",
      "Italy"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Meryas were a probably Finno-Ugric tribe who lived in the region of modern Russia. This is the first historian to mention them.",
    "options": [
      "Eusebius of Caesarea",
      "Jordanes",
      "Priscus",
      "Sima Guang"
    ],
    "correctIndex": 1
  },
  {
    "question": "The word abacus derives from a Hebrew word, meaning this.",
    "options": [
      "Movement",
      "Sky",
      "Dust",
      "Wood"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Chevy Nova sold poorly in Mexico because no va means doesnt go in Spanish.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "A car that gets over 200 miles per gallon is reclaimed by the factory, after its owner calls to congratulate the manufacturers about its excellent performance.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A very complicated Honda Accord commercial required 606 takes and was done without the use of any computer-generated images.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Putting sugar in the gas tank of a carburetor-equipped vehicle will ruin the engine.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Man bought an old motorcycle only to discover that it was once owned by Elvis Presley.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Cars were stolen by thieves who wrote down VINs (car serial numbers)  and used them to obtain duplicate keys through auto dealerships.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "After an earthquake in  1989, a car thief was found crushed under a collapsed freeway overpass in the vehicle hed stolen.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "An artist painted a 60 ft. tall image of a naked woman above a tunnel in Malibu Canyon in 1966.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Police officers who use slimjims to assist locked out motorists have been killed by airbags.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "A speeder caught by photo radar, sends the police a photograph of money to pay his fine.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sean Connery, George Lazenby, Roger Moore, Timothy Dalton and Pierce Brosnan have all played the role of a fictional British spy. Who was that character?",
    "options": [
      "James Bond",
      "Johnny English",
      "Jim Malone",
      "Eliot Ness"
    ],
    "correctIndex": 0
  },
  {
    "question": "Man On The Moon, Amadeus and One Flew Over the Cuckoos Nest are all movies directed by him.",
    "options": [
      "Stanley Kubrick",
      "Milo\u00c5\u00a1 Forman",
      "Pedro Almod\u00c3\u00b3var",
      "Martin Scorsese"
    ],
    "correctIndex": 1
  },
  {
    "question": "Across the Hall, Friends Like Us, Insomnia Caf\u00e9 and Six of One are all working titles of one of famous US TV-series.  Name the series.",
    "options": [
      "Friends",
      "Sex and the City",
      "ALF",
      "One Tree Hill"
    ],
    "correctIndex": 0
  },
  {
    "question": "The common link between these four movies -Chicken Run, Harry Potter, The Mummy Returns and Cast Away, is that...?",
    "options": [
      "They all treat one and the same social problem.",
      "They all are produced by one and the same company.",
      "One and the same actor is starring in all of them.",
      "They all refer to one and the same social class."
    ],
    "correctIndex": 1
  },
  {
    "question": "Three of the following movies are produced by 20th Century Fox. Which is the odd one?",
    "options": [
      "Me, Myself  Irene",
      "Dr. Dolittle 2",
      "Cast Away",
      "House of Wax"
    ],
    "correctIndex": 3
  },
  {
    "question": "David Suchet and Peter Ustinov are two actors who have played the role of the famous detective Sherlock Holmes.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Tom Cruise had a lead role in all, but one of these movies.  Which one?",
    "options": [
      "Rain Man",
      "The Firm",
      "Magnolia",
      "Endless Love"
    ],
    "correctIndex": 3
  },
  {
    "question": "All but one of these statements represents a common bond between the movies, The Terminal and Catch Me if You Can.",
    "options": [
      "They both can be classified as dramas.",
      "They both are produced by Spielberg.",
      "Tom Hanks stars in them both.",
      "Leonardo DiCaprio stars in them both."
    ],
    "correctIndex": 3
  },
  {
    "question": "Brad Pitt starred in all these movies, except one. Can you spot it?",
    "options": [
      "Meet Joe Black",
      "Mr.  Mrs. Smith",
      "Oceans Eleven",
      "The Beach"
    ],
    "correctIndex": 3
  },
  {
    "question": "Robin Williams starred in Mrs. Doubtfire. Another great actor, Dustin Hoffman starred in Tootsie. Both characters pretended to be this.",
    "options": [
      "Women",
      "Dead",
      "Insane",
      "Bed-ridden and sick"
    ],
    "correctIndex": 0
  },
  {
    "question": "A ghost is a supernatural entity thought to be the spirit of a person remaining on Earth after their death to seek revenge.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "There is something specific about Anne Boleyns ghost. What is it?",
    "options": [
      "She does not have a ghost.",
      "Her ghost is male.",
      "Her ghost is without hands.",
      "Her ghost is without a head."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following statements about ghosts is incorrect?",
    "options": [
      "They are always depicted of a human size and shape.",
      "Ghosts do not have a gross physical body.",
      "Sometimes they might manifest their presence by moving other objects or producing noises.",
      "They are usually portrayed as silvery, shadowy and fog-like."
    ],
    "correctIndex": 0
  },
  {
    "question": "The ghost of the Roman Emperor Caligula was said to haunt this place.",
    "options": [
      "Basilica di San Giovanni in Laterano",
      "Amphitheatrum Castrense",
      "The Lamian Gardens of Rome",
      "Great Synagogue of Rome"
    ],
    "correctIndex": 2
  },
  {
    "question": "Ghosts have taken a significant place in literature and art since this period.",
    "options": [
      "Renaissance",
      "Middle Ages",
      "Romanticism",
      "Baroque"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does Suetonius, Geoffrey of Monmouth and Herodotus have in common?",
    "options": [
      "They are three writers that produce modern urban legends.",
      "They are three writers that produced the first urban legends.",
      "They are three ghost from the modern urban legends.",
      "They are three ghosts from the first urban legends."
    ],
    "correctIndex": 1
  },
  {
    "question": "Is there a difference between a poltergeist and a ghost?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Epic of Gilgamesh is the oldest written story, containing a lot of references to the spirits of the dead.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1993 an interesting study about Friday the 13th was published in the British Medical Journal. Its authors investigated if this mystical date is really dangerous. They compared the ratio of traffic volume to the number of vehicular accidents on two different days throughout several years. What was the conclusion of the study?",
    "options": [
      "The number of vehicular accidents is lower on Friday the 13th",
      "The results were inconclusive",
      "Friday the 13th doesnt have any affect on the number of vehicular accidents",
      "Friday the 13th actually affects the number of vehicular accidents"
    ],
    "correctIndex": 3
  },
  {
    "question": "The fear of the fatal date is called this.",
    "options": [
      "Paraskevidekatriaphobia",
      "Aphenphosmphobia",
      "Chronomentrophobia",
      "Coitophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Chinese people believe that 13 is a lucky number.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "There are countless theories about the origins of fear of number 13. One says that the phobia comes from Norse mythology. According to a legend, the 13th god, the god of mischief, turned up at a gathering of the 12 Viking gods and caused the death of Balder the Good.  What was the god of mischief called?",
    "options": [
      "Loki",
      "Tor",
      "Odin",
      "Hod"
    ],
    "correctIndex": 0
  },
  {
    "question": "People fear Friday for many reasons. For example, Jesus Christ was crucified on Friday, the Great Flood began on Friday and Adam and Eve were banned from the Garden of Eden on Friday. Do you know what type of day Friday was in the pagan Roman empire?",
    "options": [
      "Parade day",
      "Tax day",
      "Execution day",
      "Day for prayers"
    ],
    "correctIndex": 2
  },
  {
    "question": "Most estate agents find it difficult to sell a house, numbered thirteen.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The bad name of both Friday and number 13 can be explained by many historical and religious facts. However, the reason why they are linked together to form this powerful superstition, cant be explained so easily. According to one theory, the ill-fame of Friday 13th dates back to 13 October 1307, when King Philip IV of France arrested most of the knights of one famous Order. What was the name of the Order?",
    "options": [
      "The Ancient and Illustrious Order Knights of Malta",
      "Ancient Order Knights of the Mystic Chain",
      "The Knights Templar",
      "Teutonic Order"
    ],
    "correctIndex": 2
  },
  {
    "question": "Female drivers have more traffic accidents on Friday the 13th.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Having in mind the mysterious background of Black Friday, it is quite natural that the TV series Friday the 13th were so popular. The main character, Jason, is one of the biggest celebrities in the world of horror movies. What is Jasons family name?",
    "options": [
      "Hardy",
      "Vorhees",
      "Christy",
      "Burrell"
    ],
    "correctIndex": 1
  },
  {
    "question": "Over any given 400-year cycle the 13th day of the month occurs 4800 times. The 13th most often falls on this day of the week.",
    "options": [
      "Sunday",
      "Monday",
      "Wednesday",
      "Friday"
    ],
    "correctIndex": 3
  },
  {
    "question": "What movie stars George Peppard as a WWI ace pilot?",
    "options": [
      "The Blue Max",
      "The Blue Baron",
      "The Red Baron",
      "The Black Knight"
    ],
    "correctIndex": 0
  },
  {
    "question": "This movie, directed by Stanley Kubrick, stars Malcolm McDowell as Alex DeLarge.",
    "options": [
      "A Backward Peach",
      "A Future of  Red",
      "A Clockwork Orange",
      "Soylent Green"
    ],
    "correctIndex": 2
  },
  {
    "question": "Actors Patrick Swayze, Jennifer Gray, Charlie Sheen and C.Thomas Howell played in both Red Dawn and The Outsiders.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Black Sunday, Michael Lander played by Bruce Dern, conspires with a Palestinian terrorist group to kill masses of innocent people in what way?",
    "options": [
      "by detonating a nuclear device inside the Pentagon",
      "by detonating a bomb, housed in the undercarriage of a blimp, over a football stadium during the Super Bowl",
      "by hijacking a 747 and taking it to Syria",
      "by infecting a water supply with the black plague"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Pretty in Pink, the character played by Molly Ringwald has a guest, named Long Duk Dong, who is a  foreign exchange student.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the film The Hunt For Red October, what was the unique quality of the Russian submarine Red October?",
    "options": [
      "It was a laser guided sub that tracks 24 targets at the same time.",
      "It was built with a revolutionary stealth propulsion system called the caterpillar drive,",
      "Its stealth armor confuses the enemy sonar",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which 1985 comedy film starred Tom Hanks, Jim Belushi and Lori Singer?",
    "options": [
      "The Man With One Red Shoe",
      "The Woman In Red",
      "The Masque of the Red Death",
      "Reds"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the movie Goldfinger, which one of the following characters does not die?",
    "options": [
      "Tilly Masterson",
      "Pussy Galore",
      "Goldfinger",
      "Oddjob"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was unique about The Green Berets, a film starring John Wayne?",
    "options": [
      "None of these",
      "It was John Waynes first movie without a female co-star",
      "It was the only non-western John Wayne movie in color",
      "It was the only Vietnam War film that was produced during the war itself"
    ],
    "correctIndex": 3
  },
  {
    "question": "In White Men Cant Jump, Sidney Deane, played by Wesley Snipes is married to Rosie Perez character, Gloria Clemente.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "One of the first known blondes was this Greek goddess, whose hair was described by Homer as golden.",
    "options": [
      "Demeter",
      "Aphrodite",
      "Hera",
      "Medusa"
    ],
    "correctIndex": 1
  },
  {
    "question": "The hairs of a natural blonde can be described as this.",
    "options": [
      "More than those of a brunette",
      "Thinner than those of a brunette",
      "The same number as those of a brunette",
      "Fewer than those of a brunette"
    ],
    "correctIndex": 0
  },
  {
    "question": "Researchers in England found this to be true of  blond cashiers in supermarkets.",
    "options": [
      "Have frequent technical issues with the registers",
      "Gather greater queues",
      "Receive more tips from customers",
      "Have higher chances of not balancing the register at the end of the day"
    ],
    "correctIndex": 1
  },
  {
    "question": "During The Restoration period blond hair became a symbol of this.",
    "options": [
      "Stupidity",
      "High class",
      "Intelligence",
      "Prostitution"
    ],
    "correctIndex": 3
  },
  {
    "question": "Most fairy tale characters have this color hair.",
    "options": [
      "Blonde",
      "Dark",
      "Green",
      "Red"
    ],
    "correctIndex": 0
  },
  {
    "question": "Blonde hair was important to Hitler, according to him it symbolized this.",
    "options": [
      "Valor",
      "German nationality",
      "Innocence",
      "The purity of the Aryan race"
    ],
    "correctIndex": 3
  },
  {
    "question": "She is regarded as the most famous blonde of all times.",
    "options": [
      "Marlene Dietrich",
      "Eva Brown",
      "Marilyn Monroe",
      "Madonna"
    ],
    "correctIndex": 2
  },
  {
    "question": "Strange as it may be, there are paintings, depicting a blonde one of her.",
    "options": [
      "Madamme Butterfly",
      "Cleopatra",
      "Beyonce",
      "Aretha Franklyn"
    ],
    "correctIndex": 1
  },
  {
    "question": "Red is the color of all these except one.",
    "options": [
      "Danger",
      "Warmth",
      "Passion",
      "Sadness"
    ],
    "correctIndex": 3
  },
  {
    "question": "Red is believed to provoke hunger.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The movie Trois couleurs: Rouge (Three Colors: Red) is about a girl who discovers her neighbour is keen on invading peoples privacy. This is her profession.",
    "options": [
      "Photographer",
      "Teacher",
      "Model",
      "Actress"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Rothschilds were one of the most successful business families in history. Their family name literally means this.",
    "options": [
      "Red Shire",
      "Red Sheath",
      "Red Shield",
      "Red Sheave"
    ],
    "correctIndex": 2
  },
  {
    "question": "Three of the following albums are by the band Red Hot Chili Peppers. Which is the odd one?",
    "options": [
      "Blood Sugar Sex Magik",
      "Freaky Styley",
      "In Another Land",
      "By the Way"
    ],
    "correctIndex": 2
  },
  {
    "question": "Red River College (RRC) is a large and very comprehensive institute of applied learning, located in this city.",
    "options": [
      "Ottawa",
      "Toronto",
      "Vancouver",
      "Winnipeg"
    ],
    "correctIndex": 3
  },
  {
    "question": "Red Lobster is a U.S. chain of seafood restaurants. Its original name was this.",
    "options": [
      "Harbor for Seafood Lovers",
      "Lobster Lovers",
      "Lobster Barbecue",
      "Red Harbor"
    ],
    "correctIndex": 0
  },
  {
    "question": "Manfred Albrecht Freiherr von Richthofen was a German pilot and is still regarded today as the ace of aces. Which of the following pairs (nickname - nation calling him that) is wrong?",
    "options": [
      "Red Battle-Flyer - the Germans",
      "Red Devil - the French",
      "Red Baron - the British",
      "They are all true."
    ],
    "correctIndex": 3
  },
  {
    "question": "Simply Red is a British band. The bands name is related to this soccer team.",
    "options": [
      "Arsenal",
      "Liverpool",
      "Manchester United",
      "Middlesbrough"
    ],
    "correctIndex": 2
  },
  {
    "question": "One of these four countries does not border the Red Sea.",
    "options": [
      "Jordan",
      "Egypt",
      "Oman",
      "Sudan"
    ],
    "correctIndex": 2
  },
  {
    "question": "Internationally, blue is the color of these political parties.",
    "options": [
      "Labour parties",
      "Liberal parties",
      "Communist parties",
      "Conservative parties"
    ],
    "correctIndex": 3
  },
  {
    "question": "The term blue blood, meaning aristocracy or related to aristocracy, originated in this country.",
    "options": [
      "England",
      "Germany",
      "Spain",
      "France"
    ],
    "correctIndex": 2
  },
  {
    "question": "Eiffel 65 is a trio of Italian musicians who play electronic music. One of their biggest hits is Blue (Da Ba Dee). The album featured this hit.",
    "options": [
      "Eiffel 65",
      "Contact!",
      "Europop",
      "Suggested Title - Crash Test"
    ],
    "correctIndex": 2
  },
  {
    "question": "In German the word for blue is used to describe that a person is this.",
    "options": [
      "Married",
      "Crazy",
      "Rich",
      "Drunk"
    ],
    "correctIndex": 3
  },
  {
    "question": "Blue is a British boy band consisting of four members. The song Signed, Sealed, Delivered, Im Yours is performed by them and this musician.",
    "options": [
      "Jim Morrison",
      "Stevie Wonder",
      "Elton John",
      "Steve Lawrence"
    ],
    "correctIndex": 1
  },
  {
    "question": "In The Hitchhikers Guide to the Galaxy there are several references to a super-intelligent shade of the color blue, called this.",
    "options": [
      "Cyan",
      "Volo-loco",
      "Hooloovoo",
      "Gobo"
    ],
    "correctIndex": 2
  },
  {
    "question": "Blue pages are a telephone directory of these.",
    "options": [
      "Business offices",
      "Celebrities home numbers",
      "Brothels numbers",
      "Government offices"
    ],
    "correctIndex": 3
  },
  {
    "question": "This huge company is often referred to as Big Blue.",
    "options": [
      "Hewlett-Packard",
      "Microsoft",
      "IBM",
      "Cisco Systems, Inc."
    ],
    "correctIndex": 2
  },
  {
    "question": "What did electrical engineering professor, Dr. Brent Townshend, invent in 1996?",
    "options": [
      "The 56K modem",
      "Potato Chips",
      "Bookshelf speakers",
      "The remote control locator"
    ],
    "correctIndex": 0
  },
  {
    "question": "What did George Crum invent at the Moon Lake Lodge resort in Saratoga Springs, New York?",
    "options": [
      "The remote control locator",
      "The potato chips",
      "Bookshelf speakers",
      "The 56K modem"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1971, this programmer implemented the first email system capable of sending mail between users on different hosts connected to the ARPANET.",
    "options": [
      "David Thomson",
      "John Tomlinson",
      "Mark Thomson",
      "Ray Tomlinson"
    ],
    "correctIndex": 3
  },
  {
    "question": "This device, named Missing Link,  was invented by twin sisters Kelli and Vanessa Dunn.",
    "options": [
      "The remote control locator",
      "The bookshelf speakers",
      "The 56K modem",
      "The microphone"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1986, this musician, famous for performing the song  Johnny B. Goode, became the first person inducted into the Rock and Roll Hall of Fame.",
    "options": [
      "Bill Haley",
      "Chuck Berry",
      "Elvis Presley",
      "Jerry Lee Lewis"
    ],
    "correctIndex": 1
  },
  {
    "question": "This actor, who plays Dr. Norman in What Lies Beneath, is also a licensed pilot of both planes and helicopters.",
    "options": [
      "John Travolta",
      "Anthony LaPaglia",
      "Ralph Finnes",
      "Harrison Ford"
    ],
    "correctIndex": 3
  },
  {
    "question": "How old was Cio-Cio-San, a character in Giacomo Puccinis opera, Madame Butterfly ?",
    "options": [
      "15",
      "20",
      "19",
      "21"
    ],
    "correctIndex": 0
  },
  {
    "question": "This number is usually associated with the unknown and the bad luck. A fear of this number is known as triskaidekaphobia.",
    "options": [
      "6",
      "13",
      "9",
      "666"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the number of heavens in Islamic tradition. It is also the figurative number of seas.",
    "options": [
      "11",
      "3",
      "4",
      "7"
    ],
    "correctIndex": 3
  },
  {
    "question": "50 years of marriage are known as this.",
    "options": [
      "Pearl anniversary",
      "Diamond anniversary",
      "Gold anniversary",
      "Platinum anniversary"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first Soviet nuclear ballistic submarine was called K-(this number).",
    "options": [
      "18",
      "17",
      "19",
      "21"
    ],
    "correctIndex": 2
  },
  {
    "question": "This is the number of points outlined by president Woodrow Wilson for reconstructing a new Europe following World War I.",
    "options": [
      "12",
      "24",
      "14",
      "27"
    ],
    "correctIndex": 2
  },
  {
    "question": "One of these statements about the enigmatic number 23 is wrong.",
    "options": [
      "Each parent contributes 23 chromosomes to the DNA of a child.",
      "Julius Caesar was stabbed 23 times when he was assassinated.",
      "All statements are in fact true.",
      "The Knights Templar had 23 Grand Masters, the last being Jacques de Molay."
    ],
    "correctIndex": 2
  },
  {
    "question": "According to Douglas Adams book The Hitchhikers Guide to the Galaxy, this number is the answer to the Ultimate Question of Life, the Universe and Everything.",
    "options": [
      "37",
      "53",
      "42",
      "27"
    ],
    "correctIndex": 2
  },
  {
    "question": "Muslims pray to Allah five times a day.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the number of syllables in a haiku (a very short Japanese poetic form).",
    "options": [
      "41",
      "35",
      "28",
      "17"
    ],
    "correctIndex": 3
  },
  {
    "question": "This is the total number of books in the New Testament of the Holy Bible.",
    "options": [
      "27",
      "57",
      "37",
      "17"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this movie Eminem plays the main character, whose name is Jimmy B-Rabbit Smith, Jr.",
    "options": [
      "Torrance Rises",
      "The Wash",
      "8 Mile",
      "The Slim Shady Show"
    ],
    "correctIndex": 2
  },
  {
    "question": "This comedian stars in Who Framed Roger Rabbit (a 1988 motion picture).",
    "options": [
      "Jim Varney",
      "Bob Hoskins",
      "Jim Carrey",
      "Danny DeVito"
    ],
    "correctIndex": 1
  },
  {
    "question": "The young of which of these animals is not called a joey?",
    "options": [
      "dog",
      "opossum",
      "wombat",
      "kangaroo"
    ],
    "correctIndex": 0
  },
  {
    "question": "In these fractions, used by ancient Egyptians, the numerator is 1 and the denominator is a positive integer.",
    "options": [
      "algebraic fractions",
      "decimals",
      "continued fractions",
      "unit fractions"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the informal association of people who can trace their ancestry to the original Virginian colonists from England?",
    "options": [
      "First children of Virginia",
      "First Settlers of Virginia",
      "First Families of Virginia",
      "Founders of Virginia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which collective noun denotes a group of owls?",
    "options": [
      "parliament",
      "descent",
      "dule",
      "covey"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which battleship of the Imperial Japanese Navy was sent on a suicide mission in 1945, during the invasion of Okinawa?",
    "options": [
      "Yamato",
      "Kamikaze",
      "Tojo",
      "Noh"
    ],
    "correctIndex": 0
  },
  {
    "question": "This word deriving from Latin refers to the act of throwing someone or something out of a window.",
    "options": [
      "defenestration",
      "sylvan",
      "peloton",
      "homunculus"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which word was coined by philosopher and theologian, William Whewell in 1833?",
    "options": [
      "holography",
      "magenta",
      "scientist",
      "trastevere"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the first word addressed to Mission Control by Neil Armstrong, when his craft landed on the Moon on July 20, 1969?",
    "options": [
      "One",
      "Buzz",
      "Roger",
      "Houston"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Cretaceous-Tertiary event, also known as KT boundary, refers to what?",
    "options": [
      "a period of massive extinction of species",
      "The destruction of the largest pyramid in the Western hemisphere",
      "the first recorded devastating tsunami",
      "None of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sapphire is usually associated with this month.",
    "options": [
      "November",
      "December",
      "October",
      "September"
    ],
    "correctIndex": 3
  },
  {
    "question": "One of the following pairs (month - the gem associated with it) is wrong.",
    "options": [
      "February - Peridot",
      "December - Turquoise",
      "March - Aquamarine",
      "June - Pearl"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is the diamond linked with a spring month?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "There is a particular connection between birth stones and months.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The birth stones associated with March, September and December can all be found in this color.",
    "options": [
      "Blue",
      "Green",
      "Pink",
      "White"
    ],
    "correctIndex": 0
  },
  {
    "question": "History records the fact that a Roman senator named Nonius chose exile rather than surrender his precious stone to Mark Anthony. This is Nonius gem stone.",
    "options": [
      "Ruby",
      "Opal",
      "Tourmaline",
      "Zircon"
    ],
    "correctIndex": 1
  },
  {
    "question": "In chemistry, if you mix an acid with a base you would get these chemicals.",
    "options": [
      "Water and carbon dioxide",
      "Carbon dioxide and water",
      "Water and a salt",
      "A salt and oxygen"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which was the first car model to sell one million cars in one year?",
    "options": [
      "Corvette",
      "Chevy Impala",
      "Volkswagon Beetle",
      "Toyota Corolla"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which company built the A6M, aka Zero -- the fighter aircraft  that was used in the attack on Pearl Harbor?",
    "options": [
      "Toshiba",
      "Isuzu",
      "Mitsubishi",
      "Mikayashi"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which U.S. President is famous for saying I choose not to run?",
    "options": [
      "Calvin Coolidge",
      "Herbert Hoover",
      "John Tyler",
      "Warren G. Harding"
    ],
    "correctIndex": 0
  },
  {
    "question": "What type of chocolate contains the most  flavonoids and may help lower your cholesterol?",
    "options": [
      "Chocolate with almonds",
      "Milk chocolate",
      "White chocolate",
      "Dark chocolate"
    ],
    "correctIndex": 3
  },
  {
    "question": "How much did the USA pay Russia for Alaska?",
    "options": [
      "$72 million",
      "$720 million",
      "$720,000",
      "$7.2 million"
    ],
    "correctIndex": 3
  },
  {
    "question": "At what temperature is the Fahrenheit temperature equal the Celsius temperature?",
    "options": [
      "0 degrees",
      "-40 degrees",
      "4 degrees",
      "-4 degrees"
    ],
    "correctIndex": 1
  },
  {
    "question": "What musical instrument made jazz performer Lionel Hampton famous?",
    "options": [
      "Trombone",
      "Drums",
      "Clarinet",
      "Vibes"
    ],
    "correctIndex": 3
  },
  {
    "question": "What are the only two landlocked countries in South America ?",
    "options": [
      "Bolivia and Paraguay",
      "Paraguay and Uruguay",
      "Bolivia and Uruguay",
      "Colombia and  Ecuador"
    ],
    "correctIndex": 0
  },
  {
    "question": "The real McCoy refers to the man who invented this.",
    "options": [
      "The train throttle",
      "The sewing machine",
      "The train coupling",
      "The locomotive self-lubricator"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which word means a practitioner of the martial art of Okinawan origin, karate?",
    "options": [
      "Konyico",
      "Karateka",
      "Sojin",
      "Samurai"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these Biblical characters is known to have the greatest number of children?",
    "options": [
      "Jacob",
      "King Saul",
      "David",
      "Joshua"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which device was patented in 1970 by  Douglas Engelbart, an American inventor of Norwegian descent?",
    "options": [
      "The traffic light",
      "The computer mouse",
      "The internal combustion engine",
      "The can opener"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did the famous American crooner Nat King Cole and his daughter Natalie Cole record their hit song, Unforgettable\u00e2\u0080\u009d?",
    "options": [
      "in 1989",
      "Never",
      "in 1990",
      "The date was never officially revealed"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does the Yiddish word Bupkis mean in English?",
    "options": [
      "None",
      "Nothing",
      "Never",
      "Rubbish"
    ],
    "correctIndex": 1
  },
  {
    "question": "In ancient times, which stone was believed to protect from drunkenness?",
    "options": [
      "amethyst",
      "ruby",
      "emerald",
      "onyx"
    ],
    "correctIndex": 0
  },
  {
    "question": "Nicknamed Mighty Mo (or Big Mo), this Iowa-class battleship from the end of World War II was the last battleship built by the United States.",
    "options": [
      "USS Missouri",
      "USS Illinois",
      "USS Idaho",
      "USS Minnesota"
    ],
    "correctIndex": 0
  },
  {
    "question": "British musician, singer, and songwriter Elvis Costello was born Declan Patrick Aloysius MacManus.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year did French mechanic Nicolas Joseph Cugnot invent the first self-propelled road vehicle?",
    "options": [
      "1891",
      "1824",
      "7874",
      "1769"
    ],
    "correctIndex": 3
  },
  {
    "question": "This is the only RB/soul singer asked by Johnny Carson to perform twice in the same week in The Tonight Show.",
    "options": [
      "Gladys Knight",
      "Aretha Franklin",
      "Patti LaBelle",
      "Whitney Houston"
    ],
    "correctIndex": 2
  },
  {
    "question": "3M Company was formed in 1902 in Two Harbors, Minnesota near Lake Superior with the intent of selling sandpaper. The company made $22.923 billion USD in 2006 and is famous for several inventions, including Scotch tape. What does 3M stand for?",
    "options": [
      "The number 3000",
      "Minnesota Mining and Manufacturing Company",
      "The year 3000 A.D.",
      "Michaels, McCallister and Murphy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Having won 6 Tony Awards, including Best Musical, this 1950s production is a modern retelling of the Faust legend. Its main characters are Mr. Applegate, Joe Boyd and Lola.",
    "options": [
      "Hello, Dolly!",
      "The Music Man",
      "Guys and Dolls",
      "Damn Yankees"
    ],
    "correctIndex": 3
  },
  {
    "question": "Born in Vladivostok, Russia in 1920, this Academy Award-winning actor is best know for playing King Mongkut of Siam 4,626 times onstage. He also reprised the role in the film version of the musical.",
    "options": [
      "Telly Savalas",
      "Yul Brenner",
      "Lee J. Cobb",
      "Peter Sellers"
    ],
    "correctIndex": 1
  },
  {
    "question": "This country is a founding member of the European Union and the United Nations and one of the five permanent members of the United Nations Security Council. It is visited by over 75 millions tourists annually.",
    "options": [
      "Germany",
      "France",
      "Spain",
      "England"
    ],
    "correctIndex": 1
  },
  {
    "question": "Originally entitled Desert Song and released in 1972 by the band America, this song was banned in Kansas City for its supposed drug references.",
    "options": [
      "Im Waiting for the Man",
      "A Horse with No Name",
      "Puff the Magic Dragon",
      "Heart of Gold"
    ],
    "correctIndex": 1
  },
  {
    "question": "Author Marianna Mayer describes this mythical creature as the only fabulous beast that does not seem to have been conceived out of human fears. In even the earliest references he is fierce yet good, selfless yet solitary, but always mysteriously beautiful. He could be captured only by unfair means. What creature is this?",
    "options": [
      "Satyr",
      "Griffin",
      "Unicorn",
      "Phoenix"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Shakespearean play is referred to as The Scottish Play or The Scottish King by most actors and theater people since it is considered bad luck to mention the name of the play.",
    "options": [
      "King Lear",
      "Othello",
      "Macbeth",
      "Hamlet"
    ],
    "correctIndex": 2
  },
  {
    "question": "The average person can live this number of days without water.",
    "options": [
      "11",
      "4",
      "21",
      "31"
    ],
    "correctIndex": 0
  },
  {
    "question": "Clocks made before 1687 had only one hand.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The first couple to be shown in bed together on prime time television was this.",
    "options": [
      "Johnny and Mary Kay Stearns",
      "The Simpsons",
      "The Jetsons",
      "The Adams"
    ],
    "correctIndex": 0
  },
  {
    "question": "He was the only US President to win the Pulitzer Prize.",
    "options": [
      "Woodrow Wilson",
      "Dwight D. Eisenhower",
      "Lyndon B. Johnson",
      "John F. Kennedy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Some sources claim the youngest pope was Benedict IX (1032 A.D.), elected at this age.",
    "options": [
      "21",
      "9",
      "16",
      "12"
    ],
    "correctIndex": 3
  },
  {
    "question": "Each king in a deck of playing cards represents a great king from history.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to GlobalNet UK, less than what percentage of 500 Chinese cities surveyed have clean air?",
    "options": [
      "15%",
      "24%",
      "30%",
      "1%"
    ],
    "correctIndex": 3
  },
  {
    "question": "Tegestology is the hobby of collecting this.",
    "options": [
      "Beer mats",
      "Coffee spoons",
      "Bottle labels",
      "Bottle lids"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who invented the ball point pen?",
    "options": [
      "Elias Schaeffer",
      "Elias Howe",
      "John Fitzsimmons Waterman",
      "Jozsef Laszlo Biro"
    ],
    "correctIndex": 3
  },
  {
    "question": "The idea of a helicopter was first documented by this man.",
    "options": [
      "Sikorsky",
      "Einstein",
      "Aristotle",
      "Leonardo Da Vinci"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the first product to have a bar code?",
    "options": [
      "Scotts Tissue",
      "Pez candy",
      "Bounty bar",
      "Wrigleys gum"
    ],
    "correctIndex": 3
  },
  {
    "question": "What do we call a storage place for bees?",
    "options": [
      "A bee zoo",
      "Apiary",
      "Asterciary",
      "Aviary"
    ],
    "correctIndex": 1
  },
  {
    "question": "Former NBA coach Frank Layton once fined small forward Adrian Dantley thirty pieces of silver.  What did Layton say the fine was for?",
    "options": [
      "Being late to three  practices in a row",
      "Betrayal",
      "Asking to be traded",
      "Missing three foul shots in a row"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these elements has the highest melting point?",
    "options": [
      "Nitrogen",
      "Hydrogen",
      "Oxygen",
      "Carbon"
    ],
    "correctIndex": 3
  },
  {
    "question": "King John Sobieski of Poland saved Vienna from Ottoman invaders. In his honor something new was invented.  What was it ?",
    "options": [
      "The Polish saddle",
      "The  epee",
      "Heeled boots",
      "The bagel"
    ],
    "correctIndex": 3
  },
  {
    "question": "It has an unemployment rate  of 15%. According to the 2000 Census it is the poorest of   the 100 largest US Cities.  Which city is it?",
    "options": [
      "Newark",
      "New Haven",
      "Detroit",
      "Boca Raton"
    ],
    "correctIndex": 2
  },
  {
    "question": "This historical event occured in 1881 in the United States. It has been the  story line for at least 4 major motion pictures. What was this event?",
    "options": [
      "The Little Big Horn",
      "The Gunfight at the O.K. Corral",
      "The  Rise of the KKK",
      "The  Attack of the 600"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which President ended Reconstruction ?",
    "options": [
      "Hayes",
      "Grant",
      "Garfield",
      "Arthur"
    ],
    "correctIndex": 0
  },
  {
    "question": "What percentage of women do not wear the correct bra size?",
    "options": [
      "50-75%",
      "20-40%",
      "30-40%",
      "10-15%"
    ],
    "correctIndex": 0
  },
  {
    "question": "How often should a woman change her bra?",
    "options": [
      "every 9 months",
      "every 6 months",
      "every 5 weeks",
      "once a 1year"
    ],
    "correctIndex": 1
  },
  {
    "question": "What price did someone pay for Marilyn Monroes bra that she wore in the 1959 movie Some Like It Hot?",
    "options": [
      "$4,000",
      "$14,000",
      "$10,000",
      "$1,000"
    ],
    "correctIndex": 1
  },
  {
    "question": "What year did the bra first appear?",
    "options": [
      "4000 BC",
      "2000 BC",
      "1000 BC",
      "3000 BC"
    ],
    "correctIndex": 1
  },
  {
    "question": "What year did Mary Phelps Jacobs create the first modern bra after getting mad at her hard bodice? She covered its bones with silk handkerchief and attached it with a couple of cords.",
    "options": [
      "1912",
      "1920",
      "1925",
      "1913"
    ],
    "correctIndex": 3
  },
  {
    "question": "This famous bra brand was introduced to the USA in May 1994.  It started selling at a rate of one every 15 seconds at the initial retail price of $26.",
    "options": [
      "Bali",
      "Wonderbra",
      "La Perla",
      "Victorias Secret"
    ],
    "correctIndex": 1
  },
  {
    "question": "The average woman will wear different bra sizes in her life, due to gravity, pregnancy and weight changes. How many times will she change her size?",
    "options": [
      "8",
      "3",
      "6",
      "5"
    ],
    "correctIndex": 2
  },
  {
    "question": "A woman in the final stage of her pregnancy should not wear under-wired bras.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "There are cases of heterosexual men wearing bras to hide his enlarged chest.  What is the name of the disease that causes this hormonal defect?",
    "options": [
      "Hepatitis",
      "Gynecomastia",
      "Budd-Chiari Syndrome",
      "Caroli Disease"
    ],
    "correctIndex": 1
  },
  {
    "question": "Studies have proven that there is a relation between wearing bras and this disease.   Research found that 3 out of 4 women wearing bras 24 hours a day had the chance to get this disease, while women wearing bras for less than 12 hours a day had a 1 out of 152 chance.",
    "options": [
      "Gynecomastia",
      "Breast cancer",
      "Anemia",
      "Asthma"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the missing word in these lyrics taken from a traditional folk song of the Southern United States?",
    "options": [
      "Jasper",
      "Texas",
      "Kansas",
      "Mine"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Yellow River is the second largest river after the Yangtze in what country?",
    "options": [
      "Australia",
      "Japan",
      "South Africa",
      "China"
    ],
    "correctIndex": 3
  },
  {
    "question": "A yellow ribbon is worn to recognize the struggle that men and women face when battling cancer.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the American states below does not have part of the Yellow Stone National Park in it?",
    "options": [
      "Wyoming",
      "Montana",
      "Idaho",
      "Utah"
    ],
    "correctIndex": 3
  },
  {
    "question": "What type of insects are yellowjackets which live in colonies and build globular paper nests?",
    "options": [
      "ants",
      "crickets",
      "wasps",
      "butterflies"
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of animal is Old Yeller featured in the 1957 classic film Old Yeller?",
    "options": [
      "Panther",
      "Dog",
      "Grizzly Bear",
      "Mountain Lion"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Yellow Sea is connected to what ocean?",
    "options": [
      "Atlantic",
      "Arctic",
      "Indian",
      "Pacific"
    ],
    "correctIndex": 3
  },
  {
    "question": "What company produces and distributes the citrus flavored soft drink Mello Yello?",
    "options": [
      "Pepsi",
      "Coca-Cola",
      "Dr Pepper/Seven Up",
      "Cadbury-Schweppes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Two earthquakes with epicenter in northeast Arkansas, caused landslides and geological changes along the Mississippi River. On what date did these two earthquakes take place?",
    "options": [
      "April 27, 1815",
      "July 23, 1809",
      "August 12, 1823",
      "December 16, 1811"
    ],
    "correctIndex": 3
  },
  {
    "question": "Nails appear on fingers and toes during the 18th week of the development of a fetus.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The term lachanophobia means a fear of what?",
    "options": [
      "vegetables",
      "beds",
      "doors",
      "llamas"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement, concerning the vision of owls is true?",
    "options": [
      "Owls must turn their entire head to change views.",
      "All of these",
      "Owls are far-sighted and unable to clearly see within a few inches of their eyes.",
      "Owls have binocular vision."
    ],
    "correctIndex": 1
  },
  {
    "question": "The oldest surviving violin, date-stamped on the inside, is the Charles IX, made in 1564 by which luthier?",
    "options": [
      "Antonio Stradivari",
      "Pietro Guarneri",
      "Andrea Amati",
      "Andrea Guarneri"
    ],
    "correctIndex": 2
  },
  {
    "question": "The painting Mona Lisa by Leonardo da Vinci was stolen on August 21, 1911.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Slugs have how many tentacles on their head?",
    "options": [
      "8",
      "4",
      "7",
      "3"
    ],
    "correctIndex": 1
  },
  {
    "question": "Moe Berg was a professional baseball player, a catcher. Which one of these statements about him is correct?",
    "options": [
      "He  was the only catcher to catch three no hitters.",
      "He was the last out in Don Larsens perfect game.",
      "He was an international spy.",
      "He was on base when Ruth hit home run number 60."
    ],
    "correctIndex": 2
  },
  {
    "question": "How many legs does a dragonfly have?",
    "options": [
      "8",
      "0",
      "4",
      "6"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the only food that never spoils?",
    "options": [
      "Honey",
      "Potatoes",
      "Pasta",
      "Peanut butter"
    ],
    "correctIndex": 0
  },
  {
    "question": "Although opponents tried to spread rumors that he was in the KKK, this President completely integrated the U.S. Armed Forces.",
    "options": [
      "Andrew Johnson",
      "Lyndon Johnson",
      "Hoover",
      "Truman"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where did the Black Plague  originate?",
    "options": [
      "Turkey",
      "Italy",
      "Russia",
      "India"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was Aristotles teacher?",
    "options": [
      "Plato",
      "Ptolemy",
      "Socrates",
      "Alexander"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was Aristotles most famous student?",
    "options": [
      "Phillippus Magnus",
      "Alexander",
      "Erasmus",
      "Ptolemy"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the largest mountain in the western hemisphere?",
    "options": [
      "McKinley",
      "Pissis",
      "Aconcagua",
      "K2"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the largest city on the worlds largest island?",
    "options": [
      "Rabaul",
      "Frobisher Bay",
      "Godthaab",
      "Weser"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is covered by the 19th amendment to the US constitution?",
    "options": [
      "Voting rights for citizens of Washington, D.C.",
      "Repeal of Prohibition",
      "Voting rights for women",
      "Voting rights for people of Guam"
    ],
    "correctIndex": 2
  },
  {
    "question": "The 1.5 million square mile area, known as the Bermuda Triangle, has its equivalent in the Pacific ocean. What is it called?",
    "options": [
      "Satans Triangle",
      "Dark Triangle",
      "Triangle of Death",
      "Devils Sea"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first mention of any disappearances in the region was made in this year.",
    "options": [
      "1950",
      "1894",
      "1974",
      "1912"
    ],
    "correctIndex": 0
  },
  {
    "question": "The term Bermuda Triangle was popularized by Charles Berlitz in 1964.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Lawrence Kusche was one of the first people to conduct a comprehensive research on the topic of strange disappearances of ships. His conclusions proved to some extent that there was nothing extraordinary about this region.  One of the following statements was not a conclusion that he made.",
    "options": [
      "The number of such disappearances was exaggerated by sloppy research and fuzzy math.",
      "The disappearance of three of the missing ships can be explained through the interference of the US Military Force.",
      "The proportion of losses was no greater than anywhere else.",
      "The number of ships which disappeared in supposedly still, calm weather, did not jibe with press weather reports published at the time."
    ],
    "correctIndex": 1
  },
  {
    "question": "Does the Bermuda Triangle actually have official boundaries?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Bermuda Triangle has been responsible for the disappearances of this number of planes and ships, which have been lost till the end of the 20th century.",
    "options": [
      "78",
      "66",
      "52",
      "113"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was baseball announcer Joe Garagiolas best friend in childhood ?",
    "options": [
      "Stan Musial",
      "Yogi Berra",
      "Red Barber",
      "Chris Schenkel"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ladino is a language composed of  which two other languages ?",
    "options": [
      "Spanish and Portuguese",
      "Spanish and Arabic",
      "Hebrew and Spanish",
      "Portuguese and Italian"
    ],
    "correctIndex": 2
  },
  {
    "question": "King Edward VIII abdicated the English throne for the woman I love. He later became the Gouverneur of what land ?",
    "options": [
      "Fiji",
      "The  Bahamas",
      "Jamaica",
      "Barbados"
    ],
    "correctIndex": 1
  },
  {
    "question": "Excluding Englands cities, which city built the first subway in Europe?",
    "options": [
      "Rome",
      "Paris",
      "Budapest",
      "Barcelona"
    ],
    "correctIndex": 2
  },
  {
    "question": "Al the languages of Europe, except three, are derived from Indian languages, probably Sanskrit or Tamil. Which three are the exceptions?",
    "options": [
      "Norwegian, Danish, and Swedish",
      "Andorran, Catalan, and Provencal",
      "Romanian, Romansch, and English",
      "Hungarian, Estonian, and Finnish"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name all the Scandinavian countries.",
    "options": [
      "Sweden, Norway, Denmark, Finland, Iceland, Lithuania",
      "Sweden, Denmark, Norway, Finland",
      "Sweden, Denmark, Norway, Finland, Iceland",
      "Sweden, Denmark, Norway, Iceland"
    ],
    "correctIndex": 3
  },
  {
    "question": "Alligators and crocodiles exist together in only one place in the world, where?",
    "options": [
      "Samoa",
      "North Carolina",
      "Florida",
      "Australia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What animals were the Canary Islands named after ?",
    "options": [
      "Lions",
      "Dogs",
      "Cats",
      "Canaries"
    ],
    "correctIndex": 1
  },
  {
    "question": "President Kennedy had a secretary named Lincoln and Lincoln had a secretary named Kennedy.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Persian Empire was divided into 20 provinces, each called this.",
    "options": [
      "Satrapy",
      "Larsa",
      "Uruk",
      "Assur"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the first name of the character Masterson in the musical comedy Guys and Dolls?",
    "options": [
      "Uri",
      "Dom",
      "Sky",
      "Job"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the first name of the comedian, who in 1999 became host of The Daily Show?",
    "options": [
      "Stu",
      "Lou",
      "Jon",
      "Ray"
    ],
    "correctIndex": 2
  },
  {
    "question": "Finish the title of the Johnny Cash song, which tells the story of a man who wants to take revenge on his father for giving him a girls name: A Boy Named.....",
    "options": [
      "Amy",
      "Sue",
      "Liz",
      "May"
    ],
    "correctIndex": 1
  },
  {
    "question": "By what nickname was shipping magnate Onasis better known?",
    "options": [
      "Psi",
      "Ari",
      "Soc",
      "Uri"
    ],
    "correctIndex": 1
  },
  {
    "question": "Complete the title of this 1990 film, starring Tom Hanks: ....Versus the Volcano.",
    "options": [
      "Gus",
      "Joe",
      "Pat",
      "Tom"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is the name of one of The Three Stooges?",
    "options": [
      "Moe",
      "Sep",
      "Ham",
      "Lou"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which famous 19th century author had the pen-name Boz?",
    "options": [
      "Mark Twain",
      "Bozzie Haversham",
      "Daniel Defoe",
      "Charles Dickens"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of Ted Dansons character in Cheers?",
    "options": [
      "Dan",
      "Sam",
      "Dom",
      "Joe"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is a character featured in the movie Ghostbusters?",
    "options": [
      "Van",
      "Tom",
      "Ray",
      "Joe"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the first name of the actress who married David Duchovny in 1997?",
    "options": [
      "Lea",
      "Bea",
      "Mia",
      "Tea"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the long-suffering character from the Bibles Old Testament?",
    "options": [
      "Zeb",
      "Job",
      "Set",
      "Uri"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ava and Mia were two of the wives of which famous persons?",
    "options": [
      "Henry VIII",
      "Artie Shaw",
      "Frank Sinatra",
      "Louis XIV"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the name of the cartoon cat that terrorizes the mouse, Jerry?",
    "options": [
      "Gat",
      "Tom",
      "Cat",
      "Gus"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of the bartender character created and played by Jackie Gleason?",
    "options": [
      "Joe",
      "Tom",
      "Sam",
      "Gus"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the first name of the actress who played the main character on Maude?",
    "options": [
      "Amy",
      "Bea",
      "Liz",
      "Pat"
    ],
    "correctIndex": 1
  },
  {
    "question": "This word is used to denote a group of cobras.",
    "options": [
      "Sedge",
      "Knot",
      "Quiver",
      "Bale"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the main symptom of the uncommon blood disorder, known as methemoglobinemia?",
    "options": [
      "10% greater blood volume than normal",
      "Bluish complexion of the skin",
      "Abnormally enlarged lungs",
      "Faster breathing because of lack of haemoglobin"
    ],
    "correctIndex": 1
  },
  {
    "question": "Turtles employ numerous survival techniques,  Which one is not among these natural devices for survival?",
    "options": [
      "Their ability to breathe out of their mouth and out of their anus",
      "Their shells, impervious to attacks by any animals other than humans",
      "Their ability to live both on land and in the water",
      "Their incredible orientation skills - they get back to lay eggs where they were born"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which anatomical term defines the midline groove connecting the upper lip to the nose?",
    "options": [
      "Tachyon",
      "Edaphadium",
      "Serein",
      "Philtrum"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the historic attack on Normandy on June 6, 1944, which was part of World War II military operations of the Allied Powers against Nazi Germany?",
    "options": [
      "Operation Overlord",
      "Operation  Belgrani",
      "Operation Barbarosa",
      "Operation Neptune"
    ],
    "correctIndex": 3
  },
  {
    "question": "Bobby Leach, a circus stuntman from Cornwell, England, famous for surviving a barrel ride over the Niagara Falls, died in what way?",
    "options": [
      "He was one of the first casualties of WWI.",
      "He slipped on a orange peel and died.",
      "He died during an attempt to swim the English Channel.",
      "In 1912 he was aboard the Titanic and drowned."
    ],
    "correctIndex": 1
  },
  {
    "question": "Suppose Mr. Jones works with ANOVA, regression lines, the sign-test, and the Gaussian distribution. What field of mathematics does Mr. Jones work in?",
    "options": [
      "Algebra",
      "Statistics",
      "Geometry",
      "Calculus"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these actions has remained in history as the first official act of President Abraham Lincolns new administration?",
    "options": [
      "Hiring a secretary named Kennedy",
      "Hiring a secretary named Nicolay",
      "Giving Winfield Scott command of the US Army",
      "Abolishing slavery"
    ],
    "correctIndex": 1
  },
  {
    "question": "A mixture of water and honey can be used for what unconventional purpose?",
    "options": [
      "Antifreeze for cars",
      "A treatment for throat infections",
      "A means of greasing a muffin pan",
      "Silver cleaner"
    ],
    "correctIndex": 0
  },
  {
    "question": "What device was invented in the early 1910s by American race-car driver, Ray Harroun?",
    "options": [
      "The internal combustion engine",
      "The brake",
      "The rear view mirror",
      "The tire iron"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to Islamic beliefs, the Devil was created out of what?",
    "options": [
      "Unbreakable rocks",
      "Smokeless fire",
      "Clay",
      "Polluted soil"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first novel of this Nobel Prize-winning author was called Lord of the Flies. The title is a literal English translation of one of the alternate names of the Devil -- Beelzebub.",
    "options": [
      "William Golding",
      "J. R. R. Tolkien",
      "Peter Sinfield",
      "Steven Brust"
    ],
    "correctIndex": 0
  },
  {
    "question": "This man established The Church of Satan. It is an organization that promotes an interesting form of Satanism - everyone views himself as his or her own god and is therefore responsible for his or her own destiny.",
    "options": [
      "Ambrose Bierce",
      "Marquis De Sade",
      "Friedrich Nietzsche",
      "Anton Szandor LaVey"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the 1997 movie Devils Advocate, Keanu Reeves character, Kevin Lomax, starts work in John Miltons huge law firm. Which one of these actors played Milton?",
    "options": [
      "Jeffrey Jones",
      "Al Pacino",
      "Val Kilmer",
      "Robert De Niro"
    ],
    "correctIndex": 1
  },
  {
    "question": "Not surprisingly, the Devil is a major Arcana Tarot card. The image on the card depicts a Satyr standing over two naked human-like demons, who are chained together. What is the interpretation of this Tarot card?",
    "options": [
      "Death",
      "Self bondage",
      "Marriage",
      "Bad luck"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this fifth novel in Anne Rices The Vampire Chronicles, Lestat is offered a job by the devil himself. The Devil explains to him many things about heaven and hell, and reveals some of the secrets of the world. What is the title of the novel?",
    "options": [
      "Tale of the Body Thief",
      "Inferno",
      "Memnoch the Devil",
      "Devils"
    ],
    "correctIndex": 2
  },
  {
    "question": "Sympathy for the Devil is a song, originally released by this British rock band.",
    "options": [
      "Black Sabbath",
      "The Rolling Stones",
      "Queen",
      "Sex Pistols"
    ],
    "correctIndex": 1
  },
  {
    "question": "Humans are the only species that make love face-to-face.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What animal is responsible for the most human deaths in the world?",
    "options": [
      "Great White Shark",
      "Mosquito",
      "Pitbull",
      "Wasp"
    ],
    "correctIndex": 1
  },
  {
    "question": "What book is said to be the most shoplifted?",
    "options": [
      "The Bible",
      "Websters Dictionary",
      "Thesaurus of English Words  Phrases",
      "National Geographic Atlas of the World"
    ],
    "correctIndex": 0
  },
  {
    "question": "What company is generally regarded as the largest toy distributor in the world?",
    "options": [
      "Mattel",
      "Barbie",
      "Fisher Price",
      "McDonalds"
    ],
    "correctIndex": 3
  },
  {
    "question": "What percent of movies released in theaters in 1985 were R-rated?",
    "options": [
      "81%",
      "45%",
      "90%",
      "95%"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Eiffel Tower is 6 inches taller in the summer than in the winter.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Austin, Texas is called The Live Music Capital of the World.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Utah, wine used in wine tasting cannot be swallowed.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the maximum distance between Mars and the Sun?",
    "options": [
      "249,000,000",
      "500,000,000",
      "275,000,000",
      "327,000,000"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which royal abode has had visitations from the ghosts of Thomas Becket, Anne Boleyn, King Henry VIII and Lady Jane Grey amongst many others (including a bear)?",
    "options": [
      "Windsor Castle",
      "Sandringham",
      "The Tower of London",
      "Buckingham Palace"
    ],
    "correctIndex": 2
  },
  {
    "question": "In Native American beliefs, humans could be transformed into a dangerous cannibalistic spirits if they ate human flesh. What is the name given to these creatures?",
    "options": [
      "Wendigo",
      "Banshee",
      "Shaman",
      "Boggart"
    ],
    "correctIndex": 0
  },
  {
    "question": "Once occupied by the Romans and then later the Vikings, which Yorkshire city is said to be the most haunted in Europe if not the world?",
    "options": [
      "Kingston upon Hull",
      "Ripon",
      "Leeds",
      "York"
    ],
    "correctIndex": 3
  },
  {
    "question": "Reports of poltergeist activity date back as far as ancient Roman times.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which famous hoax of the early twentieth century fooled many including Sir Arthur Conan Doyle?",
    "options": [
      "Will-o-the-Wisp",
      "The Amherst haunting.",
      "The Cottingley Fairies.",
      "The Cock Lane ghost."
    ],
    "correctIndex": 2
  },
  {
    "question": "Is the Edgar Allen Poe House in Baltimore supposedly haunted by the ghost of the eponymous author?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of the following is not said to be haunted by the ghost of Abraham Lincoln?",
    "options": [
      "Fords Theatre.",
      "The Lincoln Memorial.",
      "The White House.",
      "The family home in Springfield, Illinois."
    ],
    "correctIndex": 1
  },
  {
    "question": "This seemingly lifelike substance is allegedly extruded from the bodies of mediums. It can be vaporous or solid and is said to smell of ozone. What is it?",
    "options": [
      "Plasma",
      "Endoplasm",
      "Cytoplasm",
      "Ectoplasm"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which two famous ghosts supposedly haunt the Hollywood Roosevelt Hotel?",
    "options": [
      "Douglas Fairbanks and Mary Pickford.",
      "Marilyn Monroe and Montgomery Clift.",
      "Frank Sinatra and Ava Gardner.",
      "Laurel and Hardy."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of the following is not a Japanese ghost or spirit?",
    "options": [
      "zashiki-warashi",
      "ekimmu",
      "mujina",
      "ubume"
    ],
    "correctIndex": 1
  },
  {
    "question": "What make of pistol did actor and Southern sympathizer John Wilkes Booth use to kill President Lincoln?",
    "options": [
      "Derringer",
      "Smith and Wesson",
      "Winchester",
      "Colt"
    ],
    "correctIndex": 0
  },
  {
    "question": "In astronomy, what is a syzygy?",
    "options": [
      "An alignment of 3 celestial bodies",
      "A shooting star",
      "A comet",
      "An eclipse"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these celebrities was named after the Biblical character who was Namomis daughter-in-law?",
    "options": [
      "Moonunit Zappa",
      "Uma Thurman",
      "Oprah Winfrey",
      "Penelope Cruz"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about the way Michelangelo drew the snake in the Sistine Chapel?",
    "options": [
      "The snake is walking",
      "The snake appears to be speaking",
      "The snake is a woman",
      "The snake has no fangs"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the longest river in Asia  Minor?",
    "options": [
      "Tigris",
      "Ganges",
      "Euphrates",
      "Mekong"
    ],
    "correctIndex": 2
  },
  {
    "question": "The  protest march from Philadelphia to Teddy Roosevelts home in 1903 was called this.",
    "options": [
      "The March of the Mill Children",
      "The March of the Veterans",
      "The March of the Unemployed",
      "The March of the Suffrajets"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which was the first jazz single to sell one million copies?",
    "options": [
      "Laura",
      "Take the A Train",
      "In the Mood",
      "Chattanooga Choo-Choo"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following people was a big fan of bowling?",
    "options": [
      "Luther",
      "Mozart",
      "Cromwell",
      "Napolen"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which famous actor was Arthur Millers son-in-law?",
    "options": [
      "Daniel  Day-Lewis",
      "Anthony Hopkins",
      "Kirk Douglas",
      "William Shatner"
    ],
    "correctIndex": 0
  },
  {
    "question": "This United States Army lieutenant general was in command of the American army at the beginning of the American Civil War. He developed the Union strategy popular as the Anaconda Plan, that would be used to defeat the Confederacy.",
    "options": [
      "U.S. Grant",
      "Joseph Longstreet",
      "Robert E. Lee",
      "Winfield Scott"
    ],
    "correctIndex": 3
  },
  {
    "question": "This song, composed by George Harrison, one of the members of the Beatles, caused a plagiarism trial.",
    "options": [
      "Michelle",
      "My Sweet Lord",
      "Woman",
      "Love Me Do"
    ],
    "correctIndex": 1
  },
  {
    "question": "The name of this company, founded by Fusajiro Yamauchi in 1889, roughly translates as leave luck to heaven.",
    "options": [
      "Toshiba",
      "Subaru",
      "Nokia",
      "Nintendo"
    ],
    "correctIndex": 3
  },
  {
    "question": "It is generally accepted that this term, whose usage was reported by Newsweek in 1951, first appeared in Dr. Seusss book If I Ran the Zoo, where it names one of the comical, imaginary animals.",
    "options": [
      "Nerd",
      "Yahoo",
      "Bluetooth",
      "Spam"
    ],
    "correctIndex": 0
  },
  {
    "question": "This country was formerly known as the Republic of Upper Volta. On August 4, 1984, President Thomas Sankara gave it a new name which means the land of upright people.",
    "options": [
      "Burundi",
      "Kyrgyzstan",
      "Burkina Faso",
      "Djibouti"
    ],
    "correctIndex": 2
  },
  {
    "question": "This small agricultural town, whose motto is solidarity in work, is located in Quebec, Canada, near the St. Lawrence River.",
    "options": [
      "Cape Circumcision",
      "Saint-Louis-du-Ha!-Ha!",
      "Broken Back Springs",
      "Readymoney Cove"
    ],
    "correctIndex": 1
  },
  {
    "question": "Chuck Berry recorded this song in 1972 and used to call it My Alma Mater. Mary Whitehouse, a British morality campaigner, made an unsuccessful attempt to get the song banned.",
    "options": [
      "Johnny B. Goode",
      "My Ding-a-Ling",
      "Roll Over Beethoven",
      "Maybelline"
    ],
    "correctIndex": 1
  },
  {
    "question": "This ABC TV series showed the events in an American History class at the fictional Walt Whitman High School in Los Angeles.",
    "options": [
      "704 Hauser",
      "Room 222",
      "Gloria",
      "Maude"
    ],
    "correctIndex": 1
  },
  {
    "question": "This popular African-American group was founded in 1954. Its original members -- OKelly, Rudolph, Ronald and Vernon were from Cincinnati, Ohio.",
    "options": [
      "The Allman Brothers",
      "The Walers",
      "The Who",
      "The Isley Brothers"
    ],
    "correctIndex": 3
  },
  {
    "question": "This scale is used to measure the intensity of a tornado by examining the damage caused by the tornado, when passing over man-made structures.",
    "options": [
      "Fujita",
      "Mercalli",
      "Scoville",
      "Hamilton"
    ],
    "correctIndex": 0
  },
  {
    "question": "The album Paint it Black by the Rolling Stones was released in this year.",
    "options": [
      "1962",
      "1978",
      "1966",
      "1974"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Black Sea is not connected to the Sea of Azov.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The concept of Men in Black (men dressed in black suits claiming to be government agents) can be observed in all of these movies except one.",
    "options": [
      "Memento",
      "A Beautiful Mind",
      "The Matrix",
      "Men In Black"
    ],
    "correctIndex": 0
  },
  {
    "question": "Three of the four players have been recognized as Most Valuable Player of the Chicago White Sox, which bore the nickname The Chicago Black Sox for a while. Who is the odd one?",
    "options": [
      "Ozzie Guill\u00c3\u00a9n",
      "Frank Thomas",
      "Dick Allen",
      "Nellie Fox"
    ],
    "correctIndex": 0
  },
  {
    "question": "One of the following statements concerning black tea is wrong.",
    "options": [
      "In Chinese, black tea is known as brown tea.",
      "Its flavor is stronger than that of most other teas.",
      "It is made from heavily oxidized leaves.",
      "It contains more caffeine than other teas."
    ],
    "correctIndex": 0
  },
  {
    "question": "The Hollywood production Meet Joe Black had 5 wins and 2 nominations.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to Christianity, besides black magic, there is also white magic.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The largest one-day decline in recorded stock market history is called Black Monday and occurred on this date.",
    "options": [
      "September 22, 1964",
      "October 19, 1987",
      "December 8, 1990",
      "November 23, 1982"
    ],
    "correctIndex": 1
  },
  {
    "question": "This force prevents anything from escaping black holes.",
    "options": [
      "Centripetal force",
      "Nuclear force",
      "Centrifugal force",
      "Gravity force"
    ],
    "correctIndex": 3
  },
  {
    "question": "In which city and state was the first motion picture created?",
    "options": [
      "Chicago, IL",
      "Hollywood, CA",
      "Alexandria, VA",
      "West Orange, NJ"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the first movie shown in the White House?",
    "options": [
      "The Sheik",
      "Cabira",
      "Wings",
      "The Birth of a Nation"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which U.S. president had the first bowling alley put in the White House?",
    "options": [
      "Nixon",
      "Eisenhower",
      "Taft",
      "Truman"
    ],
    "correctIndex": 3
  },
  {
    "question": "At one time both Canada and Ireland were governed by people of this same name.",
    "options": [
      "John McKenzie",
      "Sarah Mosely",
      "Mary Robinson",
      "Robert Hall  Briscoe"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these represents the largest group of soldiers?",
    "options": [
      "Company",
      "Battalion",
      "Squad",
      "Platoon"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which was the first nation to become Christian?",
    "options": [
      "Antioch",
      "Romania",
      "Armenia",
      "Rome"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the USA, what is the longest month?",
    "options": [
      "August",
      "January",
      "October",
      "April"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which element is number two in the periodic table, following hydrogen?",
    "options": [
      "Carbon",
      "Lithium",
      "Helium",
      "Oxygen"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which form of cancer is the number one cause of cancer deaths in both men and women in the United States?",
    "options": [
      "Prostate Cancer",
      "Breast Cancer",
      "Lung Cancer",
      "Leukemia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these conditions is the most common reason for a doctor to prescribe Lithium?",
    "options": [
      "Bipolar disorder",
      "Anemia",
      "Diabetes",
      "Glaucoma"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the plural form of dice?",
    "options": [
      "It already is plural",
      "Dicess",
      "Bidice",
      "Dices"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which US President was nicknamed Young Hickory?",
    "options": [
      "Polk",
      "Jackson",
      "Taylor",
      "Martin Van Buren"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which Japanese car brand is also a word in Spanish?",
    "options": [
      "Toyota",
      "Honda",
      "Nissan",
      "Mazda"
    ],
    "correctIndex": 1
  },
  {
    "question": "Pax Romana,  the long period of relative peace experienced by states within the Roman Empire took place between these years.",
    "options": [
      "27BC - 180",
      "33 - 180",
      "180 - 436",
      "145 - 254"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the American version of Monopoly, which are the two most expensive properties?",
    "options": [
      "Boardwalk and Fifth Avenue",
      "Boardwalk and Park Place",
      "Broadway and North Carolina Avenue.",
      "Boardwalk and  Ventnor Avenue"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which decade were sneakers, or tennis shoes invented?",
    "options": [
      "1940s",
      "1890s",
      "1920s",
      "1830s"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which scientist discovered that blood could be separated into blood plasma and red blood cells and the components frozen separately, thus lasting longer?",
    "options": [
      "Karl Landsteiner",
      "Paul Ehrlich",
      "Richard Keating",
      "Charles Drew"
    ],
    "correctIndex": 3
  },
  {
    "question": "What animal is the largest land predator?",
    "options": [
      "Kodiak bear",
      "Elephant",
      "Giant anteater",
      "Man"
    ],
    "correctIndex": 0
  },
  {
    "question": "If you roll two fair dice, what is the probability you will get a seven?",
    "options": [
      "1/36",
      "7/36",
      "1/6",
      "7/6"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the only US President to have never married?",
    "options": [
      "Buchanan",
      "Cleveland",
      "McKinley",
      "Taft"
    ],
    "correctIndex": 0
  },
  {
    "question": "Charles Darwin and this US president were born on the same day of the same year.",
    "options": [
      "Jackson",
      "Andrew Johnson",
      "Abraham Lincoln",
      "Washington"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following best describes heavy water?",
    "options": [
      "Water with several isotopes of hydrogen",
      "Polluted water",
      "Water carrying silt down a river",
      "Water loaded with fluorides"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the scary creature that was tamed in a legend about Saint Martha?",
    "options": [
      "Tarasque",
      "Yomi",
      "Tarabon",
      "Sphinx"
    ],
    "correctIndex": 0
  },
  {
    "question": "This enormous mythical white bird, which appears in 8th-century Middle-Eastern books, is said to be able to lift and eat even elephants.",
    "options": [
      "Medusa",
      "Lordi",
      "Roc",
      "Phoenix"
    ],
    "correctIndex": 2
  },
  {
    "question": "Often referred to as Sasquatch, this unbelievable creature is said to be a large hairy humanoid living in the wild parts of North America.",
    "options": [
      "Bigfoot",
      "Rodan",
      "Bogeyman",
      "Yeti"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of this legendary monster, which appears in Jewish folklore as an animated creature created from inanimate material?",
    "options": [
      "Golem",
      "Grendel",
      "Draka",
      "Kraken"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the other name of the creature, which is often called the Abominable Snowman and is thought to inhabit the Himalayas?",
    "options": [
      "Rodan",
      "Bigfoot",
      "Scylla",
      "Yeti"
    ],
    "correctIndex": 3
  },
  {
    "question": "This strange man-sized beast is thought to have been seen many times in the Point Pleasant area of West Virginia around the late 60s of the twentieth century.",
    "options": [
      "Jabberwock",
      "Ghidorah",
      "Gorgon",
      "Mothman"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the horrible creature, whose name literally translates as goat-sucker from Spanish?",
    "options": [
      "Chimera",
      "Chupacabra",
      "Kitsune",
      "Cthulhu"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to Japanese folklore, this kind of fox is unusual and has special abilities.",
    "options": [
      "Kitsune",
      "Nuckalavee",
      "Gamera",
      "Ghidorah"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of a famous guarding monster in Greek Mythology?",
    "options": [
      "Cerberus",
      "Golem",
      "Hyde",
      "Dagon"
    ],
    "correctIndex": 0
  },
  {
    "question": "Vukodlak is one of the Slavonic names of which scary mythical monster?",
    "options": [
      "Werewolf",
      "Dragon",
      "Vampire",
      "Ghost"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first centerfold of Playboy magazine?",
    "options": [
      "Bette Paige",
      "Joan Crawford",
      "Jayne Mansfield",
      "Marilyn Monroe"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many feet are in a mile?",
    "options": [
      "1770",
      "1000",
      "1665",
      "5280"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1864, the US government issued a two-cent coin. What was so special about this coin ?",
    "options": [
      "It was golden",
      "It was the first to say In God We Trust",
      "It was shunned by the South",
      "It was the first to have a picture of a President on it"
    ],
    "correctIndex": 1
  },
  {
    "question": "Whose real name was Leonard Sly?",
    "options": [
      "Roy Rogers",
      "Leonardo DiCaprio",
      "Gerald Ford",
      "Leonard Nimoy"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where is the Henry Ford museum located?",
    "options": [
      "Detroit",
      "Taos",
      "Greenfield Village",
      "Dearborn"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these great books was first published in 1771?",
    "options": [
      "The Encyclopedia Britannica",
      "Gullivers Travels",
      "Roberts Rules of Order",
      "Paradise Lost"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the original name of the melodramatic musical, West Side Story?",
    "options": [
      "War and Love",
      "East Side Story",
      "The Gangs of New York",
      "Jets and Sharks"
    ],
    "correctIndex": 1
  },
  {
    "question": "If I were to visit the wrist-wrestling capital of the world, where would I go?",
    "options": [
      "Riga, Latvia",
      "Sofia, Bulgaria",
      "Norman, Oklahoma",
      "Petaluma, California."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the only US state to have two Ivy League colleges in it ?",
    "options": [
      "Connecticut",
      "New Jersey",
      "Massachusetts",
      "New York"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which word goes with the Oriental symbol Yang?",
    "options": [
      "Tao",
      "Yin",
      "Sutra",
      "Ying"
    ],
    "correctIndex": 1
  },
  {
    "question": "The student Rosencrantz is coupled with what fellow student?",
    "options": [
      "Hamlet",
      "Waskowitcz",
      "Rabinowski",
      "Guildenstern"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these Disney characters go together?",
    "options": [
      "All of these",
      "Mickey and Minnie",
      "Cinderella and Charming",
      "Lady and Tramp"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who is Shreks sidekick in the films Shrek, Shrek 2, and Shrek the Third?",
    "options": [
      "Puss in Boots",
      "The Frog King",
      "Fairy Godmother",
      "Donkey"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is Harry Potters best friend and schoolmate?",
    "options": [
      "Neville Longbottom",
      "Sirius Black",
      "Albus Dumbledore",
      "Ron Weasley"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was Nero Wolfs legman and confidant?",
    "options": [
      "Dr. Watson",
      "Coleman his butler",
      "Rex Stout",
      "Archie Goodwin"
    ],
    "correctIndex": 3
  },
  {
    "question": "What are the Latin terms that refer to plant and animal life?",
    "options": [
      "etcetera and et alia",
      "flora and fauna",
      "habeas and corpus",
      "ipso and facto"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who were the legendary founders of  the city of Rome?",
    "options": [
      "Romulus and Remus",
      "Castor and Pollux",
      "Troilus and Cressida",
      "Damon and Pythias"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following are old time cartoon characters?",
    "options": [
      "Fibber McGee and Molly",
      "Amos and Andy",
      "Mutt and Jeff",
      "All of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the two famous streets that were the heart of the hippie movement.",
    "options": [
      "Haight and Ashbury",
      "Hollywood and Vine",
      "Times Square and 42nd Street",
      "Washington Square and Alphabet City"
    ],
    "correctIndex": 0
  },
  {
    "question": "What two colors are mixed together to get orange?",
    "options": [
      "Yellow and green",
      "Blue and red",
      "White and blue",
      "Red and yellow"
    ],
    "correctIndex": 3
  },
  {
    "question": "There is no word in the English language that rhymes with orange.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which word refers to a specialized type of building in a garden that is used for the growing of citrus trees?",
    "options": [
      "Orange garden",
      "Orangeton",
      "Orangery",
      "Orange-greenhouse"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year did Stanley Kubrick direct his Oscar-nominated film A Clockwork Orange?",
    "options": [
      "1971",
      "1970",
      "1972",
      "1969"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the nationality of William III of England who was often called William of Orange?",
    "options": [
      "French",
      "Spanish",
      "English",
      "Dutch"
    ],
    "correctIndex": 3
  },
  {
    "question": "What type of insect is the Orange Tip?",
    "options": [
      "Grasshopper",
      "Ladybug",
      "Moth",
      "Butterfly"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Orange River is the longest river in which country?",
    "options": [
      "Canada",
      "Republic of South Africa",
      "Chile",
      "Australia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the essential oil made from the blossom of the bitter orange?",
    "options": [
      "Lavender",
      "Natterdum",
      "Neroli",
      "Orange oilscent"
    ],
    "correctIndex": 2
  },
  {
    "question": "Orange Pekoe is a type of what?",
    "options": [
      "Tropical Fish",
      "Gemstone",
      "Tea",
      "Wildflower"
    ],
    "correctIndex": 2
  },
  {
    "question": "Suleiman the Magnificent personally led Ottoman armies to conquer Belgrade, Rhodes, and most of Hungary.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which famous painter, a representative of the romantic period, delivered the following words: Artists who seek perfection in everything are those who cannot attain it in anything.",
    "options": [
      "Picasso",
      "Modigliani",
      "Renoir",
      "Delacroix"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1927 Austrian baker and confectioner, Eduard Haas invented what?",
    "options": [
      "The electric mixer",
      "AM radio",
      "The CAT scan",
      "PEZ candy"
    ],
    "correctIndex": 3
  },
  {
    "question": "This word refers to the ancient art of aerodynamically stabilizing arrows from materials, such as feathers or modern plastics.",
    "options": [
      "Feathereting",
      "Fletching",
      "Cooperring",
      "Chancelloring"
    ],
    "correctIndex": 1
  },
  {
    "question": "This 7-year-old pilot trainee died in her attempt to become the youngest person to fly a plane across the United States.",
    "options": [
      "Lisa Blair Hathaway",
      "Lisa Dubroff",
      "Jessica Dubroff",
      "Jane Hathaway"
    ],
    "correctIndex": 2
  },
  {
    "question": "What award was given to President George W. Bush in 2004?",
    "options": [
      "The Stillman Award for Leadership",
      "The Raspberry Award for worst leading actor",
      "The Hendley Award for Great Americans",
      "The Thurbridge Award  for Freedom"
    ],
    "correctIndex": 1
  },
  {
    "question": "This island, which is a French territory, is located in the Indian Ocean, east of Madagascar, about 200 km southwest of Mauritius.",
    "options": [
      "Saint Denis",
      "Cilaos",
      "Reunion",
      "San Guadalupe"
    ],
    "correctIndex": 2
  },
  {
    "question": "This movie, directed by Bo Welch, won the 2003 Raspberry award in the category, Worst Excuse for an Actual Movie.",
    "options": [
      "Charlies Angels:Full Throttle",
      "Gigli",
      "Cat in the Hat",
      "From Justin to Kelly"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Chinese city, the capital of Hubei province, lies at the confluence of the Yangtze River and Han River.",
    "options": [
      "Xia Jong",
      "Fujian",
      "Wuhan",
      "Shanghai"
    ],
    "correctIndex": 2
  },
  {
    "question": "This prion disease is also known as laughing sickness due to the outbursts of laughter that mark its second phase.",
    "options": [
      "Creutzfeldt-Jakob Disease",
      "Kuru",
      "Scrapie",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "This US President granted a posthumous pardon to Robert Edward Lee, a general of the Confederate forces during the American Civil War.",
    "options": [
      "Richard Nixon",
      "John Kennedy",
      "Gerald Ford",
      "Lyndon Johnson"
    ],
    "correctIndex": 2
  },
  {
    "question": "This 1968 song, recorded by the Beatles, was written by Paul McCartney, who wanted to cheer up Lennons son, Julian.",
    "options": [
      "Lucy in the Sky with Diamonds",
      "While My Guitar Gently Weeps",
      "Hey Jude",
      "Happy Birthday"
    ],
    "correctIndex": 2
  },
  {
    "question": "What city, nicknamed The Mile-High City, is located on the plains east of the Rocky Mountains?",
    "options": [
      "Aurora, Colorado",
      "Aspen, Colorado",
      "Phoenix, Arizona",
      "Denver, Colorado"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Warren Commission, was established on November 29, 1963 by Lyndon B. Johnson to investigate what?",
    "options": [
      "The war crimes in Vietnam",
      "The shooting at Kensington University",
      "The assassination of John F. Kennedy",
      "The Watergate Scandal"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year did President Franklin Roosevelt give the approval for dropping the first atom bomb on Japan?",
    "options": [
      "He never did",
      "1946",
      "1945",
      "1944"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 2004, this famous show business family became the second clan to have three generations of Oscar winners.",
    "options": [
      "The Douglases",
      "The Coppolas",
      "The Howards",
      "The Weavers"
    ],
    "correctIndex": 1
  },
  {
    "question": "What do American Presidents John Quincy Adams, Rutherford B. Hayes, Benjamin Harrison and George W. Bush all have in common?",
    "options": [
      "They all were re-elected.",
      "They won the electoral vote but not the popular vote.",
      "They all were senators.",
      "They all served as vice-presidents."
    ],
    "correctIndex": 1
  },
  {
    "question": "Gunnery sergeant John Basilone of the US Marine Corps, was awarded the Medal of Honor for what reason?",
    "options": [
      "Outstanding heroism during the attack on Pearl Harbour",
      "Outstanding heroism during the Vietnam War",
      "Outstanding heroism at Guadalcanal during World War II",
      "Outstanding heroism during the Gulf Wars"
    ],
    "correctIndex": 2
  },
  {
    "question": "This annual plant, also called brinjal, is native to southern India and Sri Lanka.",
    "options": [
      "Eggplant",
      "Tomato",
      "Cucumber",
      "Yam"
    ],
    "correctIndex": 0
  },
  {
    "question": "The world-class hospital in Maryland was named after a person whose last name was Hopkins. What was his first name?",
    "options": [
      "Johns",
      "Reed",
      "John",
      "James"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following are well known English puppets?",
    "options": [
      "Kukla Fran and Ollie",
      "Chip and Dale",
      "Thomas and Gerald",
      "Punch and Judy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who were the star-crossed lovers from West Side Story ?",
    "options": [
      "Nardo and Anita",
      "Juan and Juanita",
      "Tony and Maria",
      "Jose and Jorge"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following were an old-time radio duo?",
    "options": [
      "Jack Benny and Dennis Day",
      "George Burns and Gracie Allen",
      "Jack Benny and Mary Livingston",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following are among the top female comedy writers in British television?",
    "options": [
      "Edie and Patsy",
      "Judi Dench and Patricia Rutledge",
      "Saunders and French",
      "Stephanie and Holly Blue"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these is the name of the company that manufactures several first aid remedies?",
    "options": [
      "Johnson and Johnson",
      "Proctor and Gamble",
      "Clark and Lewis",
      "Black and Decker"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these comedy teams consists of a husband and wife, whose son is an Emmy Award-winning actor?",
    "options": [
      "Bergen and McCarthy",
      "Burns and Allen",
      "Shields and Yarnell",
      "Stiller and Meara"
    ],
    "correctIndex": 3
  },
  {
    "question": "Complete the name of the American printmaking firm that produced prints by hand-colored lithography: ........... and Ives.",
    "options": [
      "Crasnston",
      "Cuttler",
      "Commings",
      "Currier"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who were the two teenagers who were transported into various time periods in a series of movies?",
    "options": [
      "George and Henry",
      "Bill and Ted",
      "Joe and Tom",
      "Archie and Reggie"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following are usually part of every restaurant table setting?",
    "options": [
      "Salt and pepper",
      "Bread and butter",
      "Ketchup and mustard",
      "Olive oil and vinegar"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the U.S., the maximum term of an issued patent is this many years, from the earliest claimed filing date.",
    "options": [
      "20",
      "17",
      "7",
      "5"
    ],
    "correctIndex": 0
  },
  {
    "question": "Regardless of its size, approximately this much of an iceberg is visible above the waterline.",
    "options": [
      "3/4",
      "1/3",
      "1/9",
      "1/25"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the game of Scrabble, if a player uses all seven of their letters in a turn, they receive a bonus of how many points?",
    "options": [
      "10",
      "100",
      "50",
      "25"
    ],
    "correctIndex": 2
  },
  {
    "question": "Teams in the NHL and the NBA both usually play this many regular season games.",
    "options": [
      "82",
      "104",
      "55",
      "96"
    ],
    "correctIndex": 0
  },
  {
    "question": "Over the course of the complete works of William Shakespeare, the bard uses this many different words.",
    "options": [
      "29,066",
      "101,009",
      "3030",
      "15,400"
    ],
    "correctIndex": 0
  },
  {
    "question": "Before making the change to a decimal based monetary system, one English guinea was comprised of this many shillings.  Coincidentally, it is also the number of letters in the Italian alphabet.",
    "options": [
      "4",
      "18",
      "29",
      "21"
    ],
    "correctIndex": 3
  },
  {
    "question": "The number of weeks the Barenaked Ladies hit, One Week was #1 on the U.S. Billboard pop chart in 1998.",
    "options": [
      "10",
      "5",
      "1",
      "3"
    ],
    "correctIndex": 2
  },
  {
    "question": "The top price for a ticket to the Super Bowl I in 1967.",
    "options": [
      "$27",
      "$55",
      "$100",
      "$12"
    ],
    "correctIndex": 3
  },
  {
    "question": "Homers epic poems, The Iliad and The Odyssey, are made up of this many books each.",
    "options": [
      "24",
      "3",
      "61",
      "15"
    ],
    "correctIndex": 0
  },
  {
    "question": "What term derives from a Latin word meaning rods bundled around an axe ?",
    "options": [
      "Fascism",
      "Despot",
      "Caesar",
      "Sovereign"
    ],
    "correctIndex": 0
  },
  {
    "question": "At the end of his historic performance at the Monterey Pop Festival in 1967, this musician set his guitar Fender Stratocaster on fire.",
    "options": [
      "Little Richard",
      "Janis Joplin",
      "Jimi Hendrix",
      "Peter Townsend"
    ],
    "correctIndex": 2
  },
  {
    "question": "This rhythm and blues song from 1951 is claimed by the owner of Sun Records, Sam Phillips, to be the first rock and roll song.",
    "options": [
      "Roll With me Henry",
      "Rocket 88",
      "Rock Around the Clock",
      "Its All Right Baby"
    ],
    "correctIndex": 1
  },
  {
    "question": "What American state, known also as the Silver State, is named after a weather condition?",
    "options": [
      "Wyoming",
      "Colorado",
      "Oklahoma",
      "Nevada"
    ],
    "correctIndex": 3
  },
  {
    "question": "During the reign of George III, this British politician held the position of Prime Minister from 1783 to 1801, and again from 1804 until his death.",
    "options": [
      "Pitt the Younger",
      "Pitt the Elder",
      "Thatcher",
      "Churchill"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what year did Nicolas Cugnot invent the first successful steam-powered road vehicle?",
    "options": [
      "1842",
      "1645",
      "1769",
      "1816"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1839, while spending the winter with George Sand in Majorca, this composer completed a work  consisting of 24 short preludes. Each prelude was in a different major or minor key.",
    "options": [
      "Schubert",
      "Schumann",
      "Chopin",
      "Lizst"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Greek word, used in Homers works, means virtue or being the best you can be.",
    "options": [
      "Terre firma",
      "Cantus firmus",
      "Hamartia",
      "Arete"
    ],
    "correctIndex": 3
  },
  {
    "question": "This author wrote a book in which the story is told from the view poin of the mulatto slave Cynara, born on the plantation Tata.  The book is a parody of  the novel Gone with the Wind.",
    "options": [
      "Maya Angelu",
      "Toni Morrisson",
      "Valerie Drew Pierce",
      "Alice Randall"
    ],
    "correctIndex": 3
  },
  {
    "question": "Alban W. Phillips is the discoverer of the Phillips Curve. What does this curve show?",
    "options": [
      "Rising wages favor capital-intensive investments.",
      "Inflation is inversely proportional to unemployment.",
      "Rising wages favor labor-intensive investments.",
      "Property is the real basis for wealth in a capitalistic society."
    ],
    "correctIndex": 1
  },
  {
    "question": "This tall actress is famous for her portrayal of Ripley in the film Alien.",
    "options": [
      "Sigourney Weaver",
      "Heather Graham",
      "Laura Dern",
      "Sarah Silverman"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these books was not  written by Steve Allen?",
    "options": [
      "The Murder Game",
      "Murder in Manhattan",
      "The Talk Show Murders",
      "Murder in the Valley"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to a study published in the Annals of Neurology, people who regularly come into contact with pesticides are 70 % more likely to develop what disease?",
    "options": [
      "Brain Cancer",
      "Alzheimers disease",
      "Jakob-Brezlov disease",
      "Parkinsons disease"
    ],
    "correctIndex": 3
  },
  {
    "question": "Handel, Bach and  Scarlatti were all born in what year?",
    "options": [
      "1685",
      "1789",
      "1785",
      "1613"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the last name of Italian brothers Carlo, Bindo, Alfieri, Ettore, and Ernesto who were all in the automobile business?",
    "options": [
      "Romeo",
      "Peugeot",
      "Ferrari",
      "Maserati"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the correct definition for oxter?",
    "options": [
      "the armpit",
      "having much snow",
      "walrus ivory",
      "to polish"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is true about all objects that emit heat?",
    "options": [
      "They are all composed of plasmas.",
      "They all emit infra-red waves.",
      "They all emit ultraviolet rays.",
      "They obey Snells Law"
    ],
    "correctIndex": 1
  },
  {
    "question": "What did  Wilhelm Schickard invent?",
    "options": [
      "the first automatic calculator",
      "the pneumatic drill",
      "celluloid",
      "the integrated circuit"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which list contains four of the five basic ballet moves?",
    "options": [
      "Cabriole, Arabesque, Pirouettem, Atimitudes",
      "Pirouette, Arabesque, Pas des deux, Grande cabriole",
      "Cabriole, Pirouette, Arabesque , Atimitudes",
      "Fouette, Attitude, Pirouette, Arabesque"
    ],
    "correctIndex": 3
  },
  {
    "question": "The USA owns a territory in the Pacific called  The Commonwealth of the Northern Mariana Islands. What is its capital city?",
    "options": [
      "Pago Pago",
      "Saipan",
      "Agana",
      "Charlotte Amalie"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Kojiki and the Nihon Shoki are the sacred texts of which religion?",
    "options": [
      "Taoism",
      "Sikhism",
      "Shinto",
      "Zoroastrianism"
    ],
    "correctIndex": 2
  },
  {
    "question": "The dram is the monetary unit of this country whose capital city is Yerevan.",
    "options": [
      "Moldova",
      "Azerbaijan",
      "Armenia",
      "Andorra"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Virginia General Assembly was founded in Jamestown in what year?",
    "options": [
      "1774",
      "1719",
      "1819",
      "1619"
    ],
    "correctIndex": 3
  },
  {
    "question": "This city state, also called Ragusa, was first to recognize the independence of the newly formed United States of America.",
    "options": [
      "Vatican",
      "Dubrovnik",
      "Monaco",
      "Malta"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the currency of the Netherlands, before the adoption of the euro?",
    "options": [
      "Gulden",
      "Dinar",
      "Krona",
      "Florin"
    ],
    "correctIndex": 0
  },
  {
    "question": "SMERSH, the organization mentioned in the James Bond film, From Russia with Love, was a real Russian organization.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This US President, who was awarded the Nobel Peace Prize in 2002, graduated from the United States Naval Academy in 1946.",
    "options": [
      "Dwight Eisenhower",
      "Lyndon Johnson",
      "James Carter",
      "Gerald Ford"
    ],
    "correctIndex": 2
  },
  {
    "question": "This US President was an instructor in classical languages. Being ambidextrous, he could simultaneously write in Greek with one hand and in Latin with the other.",
    "options": [
      "Garfield",
      "Chester A. Arthur",
      "Jefferson",
      "Teddy Roosevelt"
    ],
    "correctIndex": 0
  },
  {
    "question": "This abstract strategy board game is the national game of Ghana. The board has two straight rows of six pits or cavities, called houses.",
    "options": [
      "Checkers",
      "Backgammon",
      "Oware",
      "Chess"
    ],
    "correctIndex": 2
  },
  {
    "question": "This English rock musician changed his name to avoid confusion with a singer from the Monkees, who had the same family name.",
    "options": [
      "Elvis Costello",
      "David Crosby",
      "Earl The Monkey  Hinson",
      "David Bowie"
    ],
    "correctIndex": 3
  },
  {
    "question": "Edaphic deserts can be found on some volcanic islands, in parts of Iceland and on the Colorado plateau in the USA. Which of these most accurately defines an edaphic desert?",
    "options": [
      "One that gets less than 2.5 cm of rain a year",
      "One that gets enough rain but still lacks plants",
      "One that is so cold that nothing can grow",
      "One that has been a desert for at least 1 million years"
    ],
    "correctIndex": 1
  },
  {
    "question": "Dactyloscopy, a technique perfected by anthropologist Juan Vucetichs, studies what?",
    "options": [
      "Fingerprints",
      "The shape of human head",
      "Flightless birds",
      "Land dinosaurs"
    ],
    "correctIndex": 0
  },
  {
    "question": "This US city is located at the confluence of the Mississippi River and the Ohio River.",
    "options": [
      "Cairo, Illinois",
      "Pittsburgh, Pennsylvania",
      "Chicago, Illinois",
      "Memphis, Tennessee"
    ],
    "correctIndex": 0
  },
  {
    "question": "A square has four unequal sides.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many are in a Bakers Dozen?",
    "options": [
      "10",
      "12",
      "13",
      "5"
    ],
    "correctIndex": 2
  },
  {
    "question": "Ann has $5.00 and Jeff gives her $2.50, then she goes and buys $3.38 worth of candy. How much money does she have left?",
    "options": [
      "$4.12",
      "$3.92",
      "nothing",
      "$5.00"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Spanish word for dog is pero.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "A lion is part of which animal class?",
    "options": [
      "Mammalia",
      "Amphibia",
      "Aves",
      "Arachnida"
    ],
    "correctIndex": 0
  },
  {
    "question": "What 2 prominent actors did the movie Colors star?",
    "options": [
      "Sean Penn and Robert Duvall",
      "Sean Penn and Robert De Niro",
      "Dennis Hopper and Heath Ledger",
      "Robert Duvall and Aidan Quinn"
    ],
    "correctIndex": 0
  },
  {
    "question": "Nails and hair continue to grow even after you die.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Said to be the first of the Film Noir genre, The Maltese Falcon starred Humphrey Bogart as the one and only Sam Spade.  How many appearances did Bogart make as this character?",
    "options": [
      "3",
      "6",
      "1",
      "4"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Killers was a film based on a short story written by Ernest Hemingway, which starred Burt Lancaster and Ava Gardner.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1971 one of the classics of the Film Noir genre was made in color - Chinatown.  The cast was stellar, as well as the director.  Can you name him?",
    "options": [
      "William Friedkin",
      "John Huston",
      "Roman Polanski",
      "Billy Wilder"
    ],
    "correctIndex": 2
  },
  {
    "question": "Laura is one of the most memorable films made in the Film Noir genre, even more so thanks to Clifton Webbs performance.  What was his film characters name?",
    "options": [
      "Whit Sterling",
      "Jules Amthor",
      "Kaspar Gutman",
      "Waldo Lydecker"
    ],
    "correctIndex": 3
  },
  {
    "question": "A notable movie in the Film Noir genre is Out of the Past.  This movie featured Robert Mitchum as Jeff Bailey, who is forced to confront his past by one unsavory adversary, played by an actor who is not known for his roles playing a heavy.  Name him.",
    "options": [
      "Raymond Burr",
      "Charles Laughton",
      "Kirk Douglas",
      "Vincent Price"
    ],
    "correctIndex": 2
  },
  {
    "question": "The famous fictional modern detective Philip Marlowe was played by many actors over the years, from Humphrey Bogart to Elliot Gould.  Can you name the author who created him.",
    "options": [
      "Dashiell Hammett",
      "Raymond Chandler",
      "Mickey Spilane",
      "Cornell Woolrich"
    ],
    "correctIndex": 1
  },
  {
    "question": "Mildred Pierce put Joan Crawfords name back up there in lights.  It was nominated for several Academy Awards.  Both Ann Blyth and Eve Arden were nominated for Best Supporting Actress.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Body Heat, written and directed by Lawrence Kasdan of Star Wars, has everything; scheming lovers, murder, blackmail and betrayal.  Can you name the actor who played Matty Walkers doomed husband, Edmund?",
    "options": [
      "Richard Crenna",
      "E. G. Marshall",
      "Peter Boyle",
      "Harvey Keitel"
    ],
    "correctIndex": 0
  },
  {
    "question": "Periander of Corinth, Pittacus of Mitylene and Thales of Miletus have something in common. What is it?",
    "options": [
      "They are three of the most famous Greek characters.",
      "They are three of the Seven mathematicians of Greece.",
      "They are the Three princes of Greece.",
      "They are three of the Seven Sages of Greece."
    ],
    "correctIndex": 3
  },
  {
    "question": "These US Presidents - William Henry Harrison, Zachary Taylor, Franklin D. Roosevelt, and Warren G. Harding, all have this in common.",
    "options": [
      "They have been elected without a plurality of popular votes.",
      "They were all democrats.",
      "They died in office of natural causes.",
      "They resigned from office."
    ],
    "correctIndex": 2
  },
  {
    "question": "Three of the listed singers are baritones. Who is the odd one?",
    "options": [
      "Elvis Presley",
      "Roberto Alagna",
      "Robert Goulet",
      "Frank Sinatra"
    ],
    "correctIndex": 1
  },
  {
    "question": "What did Jean Michel Jarre, Ernest Hemingway, Mark Twain, Lord Byron, and Sir Winston Churchill all have for pets?",
    "options": [
      "Cats",
      "Birds",
      "Horses",
      "Dogs"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who is the odd one of the four writers?",
    "options": [
      "Thomas More",
      "Edmund Spenser",
      "Charles Dickens",
      "Christopher Marlowe"
    ],
    "correctIndex": 2
  },
  {
    "question": "Les Barker, Richard Digance and Bill Oddie are famous for being what?",
    "options": [
      "Musical comedians",
      "Radio comedians",
      "Impersonators",
      "Satirists"
    ],
    "correctIndex": 0
  },
  {
    "question": "Paul Ehrlich, Otto Diels, and Hans Fischer are known as what?",
    "options": [
      "German physicists",
      "Austrian biologists",
      "German biologists",
      "German chemists"
    ],
    "correctIndex": 3
  },
  {
    "question": "Tomas Transtr\u00f6mer, Assia Djebar and Raja Rao have won one, what is it?",
    "options": [
      "Bobbitt National Prize for Poetry",
      "Pulitzer Prize for Poetry",
      "Neustadt International Prize for Literature",
      "Nobel Prize in Literature"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which group consists of these three members: Thomas (Tom) Matthew DeLonge on guitar, Markus (Mark) Allan Hoppus on bass, and Travis Landon Barker on drums?",
    "options": [
      "East 17",
      "Take That",
      "Blink-182",
      "Wax"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these psychologists was not a student of Freuds?",
    "options": [
      "Wilhelm Reich",
      "Alfred Adler",
      "Ulrich Neisser",
      "Otto Rank"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which sport is mentioned in Shakespeares Henry V?",
    "options": [
      "Tennis",
      "Golf",
      "Bowling",
      "Darts"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of Sir Isaac Newtons first wife?",
    "options": [
      "Iris Barrow",
      "Elizabeth Rachel Sandal",
      "Mary Chennille",
      "He never had a wife"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first singer to get a Gold Record for a single?",
    "options": [
      "Tex Beneke",
      "Perry Como",
      "Elvis Presley",
      "Frank Sinatra"
    ],
    "correctIndex": 1
  },
  {
    "question": "He was a great silent screen star.  He was well known as the best pie thrower in the movies.  He was a great athlete and did almost all of his own stunts.  He was famous for rarely showing emotion in his face.  Who was he?",
    "options": [
      "Buster Keaton",
      "Joseph Schenck",
      "Charlie  Chaplin",
      "Fatty Arbuckle"
    ],
    "correctIndex": 0
  },
  {
    "question": "Rabbi Levi and Rabbi Abraham ibn Ezra are places on the moon.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What organization was started by Carrie Chapman Catt?",
    "options": [
      "League of Women Voters",
      "National Universal Suffrage League",
      "Democratic National Committee",
      "The Right to Life Party"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which answer best describes how many Congressional Medal of Honor medals were awarded during the Civil War",
    "options": [
      "Less than 600",
      "Between 1200 and 2000",
      "Between 2000 and 4000",
      "Between 600 and 1200"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did Americas military actions in Korea first begin?",
    "options": [
      "1951",
      "1871",
      "1950",
      "1958"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these was supposedly built to house 8 human hairs?",
    "options": [
      "The Torii Pagoda",
      "The Shwedagon Pagoda",
      "The Masudi Temple",
      "The Chenwuku Temple"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who discovered the gyroscope effect, now used for measuring orientation?",
    "options": [
      "Thomas A. Edison",
      "Leon Foucault",
      "Booker T. Washington",
      "Johann Bohenberger"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which one of these authors created the famous fictional White Rabbit which wears a waistcoat and is always worried about being late?",
    "options": [
      "J. R. R. Tolkien",
      "J. K. Rowling",
      "Edgar Allan Poe",
      "Lewis Carrol"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these cartoon characters is Bugs Bunnys rival?",
    "options": [
      "Martian Marvin",
      "All of these",
      "Yosemite Sam",
      "Elmer Fudd"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is characteristic of Rabbit, a fictional character in the series Winnie the Pooh?",
    "options": [
      "Bouncing and confident",
      "Gloomy and pessimistic",
      "Ashamed of being small",
      "Busy and responsible"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Playboy Bunny outfit, worn by waitresses at the Playboy Clubs, consisted of bunny ears, a corset, a collar, cuffs and what else?",
    "options": [
      "Chains",
      "Fluffy tail",
      "Bandana",
      "Whiskers"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which American author wrote the so called Rabbit novels - Rabbit, Run, Rabbit Redux, Rabbit Is Rich, Rabbit At Rest and Rabbit Remembered?",
    "options": [
      "William Faulkner",
      "John Updike",
      "Michael Crichton",
      "Ken Kesey"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who voiced Roger Rabbit in the 1988 movie Who Framed Roger Rabbit?",
    "options": [
      "Charles Fleischer",
      "Bob Hoskins",
      "Mae Questel",
      "Mel Blanc"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who wrote and illustrated the famous childrens book The Tale of Peter Rabbit, first published in 1902?",
    "options": [
      "Hans Christian Andersen",
      "Oscar Wilde",
      "Lewis Carroll",
      "Beatrix Potter"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of the rabbit in Disneys animated movie Bambi?",
    "options": [
      "Flower",
      "Faline",
      "Ronno",
      "Thumper"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who played the role of Jimmy B-Rabbit in the 2002 movie 8 Mile, directed by Curtis Hanson?",
    "options": [
      "Michael Shannon",
      "Kim Basinger",
      "Evan Jones",
      "Eminem"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which characters drink tea together with the March Hare at the neverending tea party in Alices Adventures in Wonderland?",
    "options": [
      "The Duchess and the Mad Hatter",
      "Dinah and the Duchess",
      "The Dormouse and the Mad Hatter",
      "The Gryphon and the Dormouse"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which term is defined as fear of crowds, public places or open areas?",
    "options": [
      "Aviophobia",
      "None of these",
      "Claustrophobia",
      "Agoraphobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which disorder is characterised by a fear of the number 13?",
    "options": [
      "Caligynephobia",
      "Triskaidekaphobia",
      "Anglophobia",
      "Xylophobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which condition is described as a fear of cats?",
    "options": [
      "Cynophobia",
      "Pedophobia",
      "Ailurophobia",
      "Alektorophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What medical term refers to the fear of death or dying?",
    "options": [
      "Dinophobia",
      "Triskadekaphobia",
      "Thanatophobia",
      "Brontophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What term refers to the fear of imperfection?",
    "options": [
      "Atelophobia",
      "Ailurophobia",
      "Autophobia",
      "Arachnophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "A person who is afraid of heights, suffers from what disorder?",
    "options": [
      "Acrophobia",
      "Agoraphobia",
      "Arachnophobia",
      "Anglophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which condition is described as an excessive fear of animals?",
    "options": [
      "Ailurophobia",
      "None of these",
      "Zoophobia",
      "Thalassophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which terms means an irrational fear of the sea or the ocean?",
    "options": [
      "Somniphobia",
      "Selachophobia",
      "None of these",
      "Thalassophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which term refers to the morbid fear of thunderstorms?",
    "options": [
      "Triskadekaphobia",
      "Xylophobia",
      "Chionophobia",
      "Brontophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What condition is characterised by an irrational fear of taking tests?",
    "options": [
      "Placophobia",
      "Chronophobia",
      "Theologicophobia",
      "Testophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Purple is the official color of what Hawaiian Island?",
    "options": [
      "Hawaii",
      "Lanai",
      "Kauai",
      "Maui"
    ],
    "correctIndex": 2
  },
  {
    "question": "What did the Byzantine empresses do in the Purple Chamber?",
    "options": [
      "Give Birth",
      "Have their wedding night",
      "Rest in to be seen by others during their final days of life",
      "Get Married"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which is not a shade of purple?",
    "options": [
      "Heliotrope",
      "Mountbatten pink",
      "Vermilion",
      "Thistle"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which is a successful Australian comedy film?",
    "options": [
      "Sea of Purple",
      "Purple Kangas",
      "Purple Amethyst",
      "Alvin Purple"
    ],
    "correctIndex": 3
  },
  {
    "question": "Of the following, which is a British rock band?",
    "options": [
      "Purple Night",
      "24 Carat Purple",
      "Purpendicular",
      "Deep Purple"
    ],
    "correctIndex": 3
  },
  {
    "question": "Leonard Kessler wrote a childrens book called Mr. Pines Purple House.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Steven Spielbergs movie, The Color Purple,  was nominated for 11 Academy Awards, how many did it actually win?",
    "options": [
      "5",
      "3",
      "0",
      "8"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who were the feuding enemies of the McCoys?",
    "options": [
      "Earps",
      "Harrisons",
      "Daltons",
      "Hat fields"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was Dale Evans married to?",
    "options": [
      "Roy Rogers",
      "Buffalo Bill Cody",
      "Wild Bill Hickcock",
      "Gene Autry"
    ],
    "correctIndex": 0
  },
  {
    "question": "When something is especially cleaned one is said to have applied polish and ..........  to it.",
    "options": [
      "Ajax",
      "Spit",
      "Elbow grease",
      "Cleanser"
    ],
    "correctIndex": 1
  },
  {
    "question": "The two reporters who exposed the Watergate scandal were Bernstein and this person.",
    "options": [
      "Dan Rather",
      "Bob Woodward",
      "Walter Lippman",
      "Harry Smith"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is the title of one of Aesops most famous fables?",
    "options": [
      "The Fox and the Grapes",
      "The Cat and the Rat",
      "The Elephant and the Flea",
      "The Crow and the Scarecrow"
    ],
    "correctIndex": 0
  },
  {
    "question": "The English poet William Blake wrote two beautiful poems concerning what two animals?",
    "options": [
      "The fox and the chickens",
      "The tiger and the lamb",
      "The elephant and the mouse",
      "The lion and the lamb"
    ],
    "correctIndex": 1
  },
  {
    "question": "What are the main ingredients of the traditional English dish Bubble and Squeak?",
    "options": [
      "Potato and cabbage",
      "Fish and ships",
      "Sausage and cabbage",
      "Bacon and eggs"
    ],
    "correctIndex": 0
  },
  {
    "question": "What goes along with love according to a Frank Sinatra hit song?",
    "options": [
      "Broken hearts",
      "Marriage",
      "Pain",
      "Sex"
    ],
    "correctIndex": 1
  },
  {
    "question": "What were the first names of the comedy team of Abbot and Costello?",
    "options": [
      "Abbot and Bob",
      "Dean and Jerry",
      "Bob and Ray",
      "Bud and Lou"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to Dr. Seuss, what goes with ham?",
    "options": [
      "Green eggs",
      "Orange bacon",
      "Pink Sausage",
      "Blue Cheese"
    ],
    "correctIndex": 0
  },
  {
    "question": "Monticello, meaning small mountain in Italian, is the name of an estate near Charlottesville, Virginia, which belonged to which US President?",
    "options": [
      "George",
      "James Madison",
      "Thomas Jefferson",
      "John Adams"
    ],
    "correctIndex": 2
  },
  {
    "question": "Norwegian inventor, Johan Vaaler was granted a patent in Germany, in 1899, for the invention of what?",
    "options": [
      "The paperclip",
      "The dry cell battery",
      "The stapler",
      "Carbon paper"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Japanese words Mizaru, Kikazaru and Iwazaru, which embody the proverbial principle to see no evil, to hear no evil, and to speak no evil refer to what?",
    "options": [
      "The Japanese names for the Biblical characters Shadrack, Meshaxk, and Abendebego.",
      "None of these",
      "The three wise monkeys.",
      "The names of the three diamonds in the Mitsubishi logo."
    ],
    "correctIndex": 2
  },
  {
    "question": "This Italian singer, who  won the San Remo Music Festival twice, became popular in the United States in the 1950s with his song Volare.",
    "options": [
      "Domenico Modugno",
      "Rossano Brazzi",
      "Luigi Tenco",
      "Peppino Gagliardi"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many people signed the US Declaration of Independence on July 4,1776?",
    "options": [
      "2",
      "55",
      "0",
      "1"
    ],
    "correctIndex": 0
  },
  {
    "question": "On July 26, 1948, US President Harry S. Truman issued Executive Order 9981, which established what?",
    "options": [
      "The right of women to vote",
      "The House Committee on Un-American Activities (HUAC)",
      "Equality of treatment and opportunity in the Armed Services for people of all races",
      "None of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "Professor Sir Alec John Jeffreys, who was awarded the Albert Einstein World Award of Science in 1996, is famous for developing what?",
    "options": [
      "Face-recognition software",
      "Techniques for DNA fingerprinting and DNA profiling",
      "The scientific study of fingerprints",
      "The polygraph"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1891, this successful Ohio City businessman made Americas first gasoline-powered automobile.",
    "options": [
      "Durant",
      "Duryea",
      "Lambert",
      "Ford"
    ],
    "correctIndex": 2
  },
  {
    "question": "In this Indo-European language, which has 11 vowels and 35 consonants, postpositions are used instead of prepositions.",
    "options": [
      "Cantonese",
      "Armenian",
      "Arabic",
      "Hindi"
    ],
    "correctIndex": 3
  },
  {
    "question": "This medical term refers to a decrease in the number of circulating leukocytes (white blood cells) in the blood.",
    "options": [
      "Lymphoma",
      "Leukopenia",
      "Leukemia",
      "Leukocytosis"
    ],
    "correctIndex": 1
  },
  {
    "question": "One of these French Kings was not a founder of a royal dynasty.  Which one?",
    "options": [
      "Hugh Capet",
      "Philip VI the Fortunate",
      "Louis XIII the Well-Beloved",
      "Charles the Bald"
    ],
    "correctIndex": 2
  },
  {
    "question": "Elliott Coues, William Brewster and Joel Asaph Allen founded this union in September 1883.",
    "options": [
      "American Botanists Union",
      "American Naturalists Union",
      "American Ornithologists Union",
      "American Zoologists Union"
    ],
    "correctIndex": 2
  },
  {
    "question": "Fyodor Tyutchev, Nikolai Alekseevich Nekrasov and Evgeny Baratynsky were Russian poets and are usually related to this period of Russian literature.",
    "options": [
      "Silver Age",
      "Post-Soviet era",
      "19th century",
      "Soviet era"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following persons was not a Prime Minister of Israel?",
    "options": [
      "Chaim Weizmann",
      "Benjamin Netanyahu",
      "Moshe Sharett",
      "Ehud Barak"
    ],
    "correctIndex": 0
  },
  {
    "question": "Shah Rukh Khan, Kajol, Rani Mukherji, and Salman Khan starred together in one of the following famous Bollywood movies.",
    "options": [
      "Hum Dil De Chuke Sanam",
      "Dilwale Dulhaniya Le Jayenge",
      "Dil To Pagal Hai",
      "Kuch Kuch Hota Hai"
    ],
    "correctIndex": 3
  },
  {
    "question": "Michael Keaton, George Cloony, Christian Bale, and Val Kilmer have all played the role of a super hero. Which is the hero?",
    "options": [
      "Batman",
      "James Bond",
      "Superman",
      "Spider-Man"
    ],
    "correctIndex": 0
  },
  {
    "question": "Woodrow Wilson (the USA), Georges Clemenceau (France) and David Lloyd George (Great Britain) signed a treaty of global importance. Which was the treaty?",
    "options": [
      "Treaty of Brest-Litovsk",
      "Treaty of Berlin",
      "Treaty of Versailles",
      "Treaty of San Stefano"
    ],
    "correctIndex": 2
  },
  {
    "question": "David Seaman, Ian Wright, John Jensen, Dennis Bergkamp, David Platt, Patrick Vieira, Marc Overmars, Fredrik Ljungberg, and Thierry Henry are top players who have all played for one of the following soccer clubs.",
    "options": [
      "Real Madrid CF",
      "Arsenal FC",
      "FC Bayern M\u00fcnchen",
      "AC Milan"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following artists does not produce trance music?",
    "options": [
      "Van Morrison",
      "Delirium",
      "Paul van Dyk",
      "Tito"
    ],
    "correctIndex": 0
  },
  {
    "question": "Jane Fonda, Victoria Beckham and Whitney-Houston are celebrities who openly admit to have had this disorder.",
    "options": [
      "Dysthymic Disorder",
      "Sleep Disorder",
      "Seasonal Affective Disorder (SAD)",
      "Eating Disorder"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the 1957 movie Twelve Angry Men what was the occupation of the character, played by Henry Fonda?",
    "options": [
      "watchmaker",
      "architect",
      "gym teacher",
      "salesman"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which three left-handed US Presidents served in succession?",
    "options": [
      "Herbert Hoover, Franklin Delano Roosevelt, Harry Truman",
      "George H. W. Bush, Bill Clinton, George W. Bush",
      "James Garfield, Herbert Hoover, Gerald Ford",
      "Bill Clinton, George H. W. Bush, Ronald Reagan"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the host as well as the winner of the first Soccer World Cup which was was held in 1930?",
    "options": [
      "Brazil",
      "Italy",
      "Uruguay",
      "Germany"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year were the first Grammy Awards given?",
    "options": [
      "1958",
      "1960",
      "1959",
      "1961"
    ],
    "correctIndex": 2
  },
  {
    "question": "Jane Leeves, who is famous for her roles on Frasier and Seinfeld, first worked for which comedian?",
    "options": [
      "Tom Hendra",
      "Jerry Lewis",
      "Flip Wilson",
      "Benny Hill"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the official residence of the French Prime Minister?",
    "options": [
      "Hotel Jacques Santer",
      "Hotel Poos",
      "Hotel Christia Grobet",
      "Hotel Matignon"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1877 American astronomer Asaph Hall discovered the two moons of Mars. Who was the first writer to mention these moons?",
    "options": [
      "Issac Asimov",
      "Mark Twain",
      "Jonathan Swift",
      "Benjamin Franklin"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first US President to die while in office?",
    "options": [
      "John Tyler",
      "Martin Van Buren",
      "William Henry Harrison",
      "Andrew Jackson"
    ],
    "correctIndex": 2
  },
  {
    "question": "This president, who is often called the Great Emancipator, was the first US President to impose an income tax.",
    "options": [
      "Wilson",
      "Hayes",
      "Lincoln",
      "Jackson"
    ],
    "correctIndex": 2
  },
  {
    "question": "This term, related to the origin of the Universe, was proposed by George Lemaitre, a Belgian Roman Catholic priest and astronomer.",
    "options": [
      "The Milky Way",
      "The Boom",
      "Y-Chromosome",
      "The Big Bang"
    ],
    "correctIndex": 3
  },
  {
    "question": "Pi Day, the day which honors the mathematical constant \u00cf\u0080 (Pi), is celebrated on which date?",
    "options": [
      "August 25",
      "March 14",
      "February 25",
      "January 14"
    ],
    "correctIndex": 1
  },
  {
    "question": "This word is a collective noun, which means a group of ferrets.",
    "options": [
      "bevy",
      "fesnyng",
      "charm",
      "leash"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Hungarian-born American nuclear physicist, called the father of the hydrogen bomb, was a member of the Manhattan Project .",
    "options": [
      "Edward Teller",
      "Robert Oppenheim",
      "Stanislaw Ulam",
      "Albert Einstein"
    ],
    "correctIndex": 0
  },
  {
    "question": "This famous head American football coach at Florida A  M College, used to say: I like my boys to be agile, mobile, and hostile.",
    "options": [
      "Joe Paterno",
      "Knute Rockne",
      "Jake Gaither",
      "Peal Bear Bryant"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which famous person, who received the Kennedy Center Honors in 2000, was born in St. Louis, Missouri?",
    "options": [
      "Thurgood Marshall",
      "Chuck Berry",
      "Harry S. Truman",
      "Bo Didley"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of the US Army Air Force B-29 bomber, that dropped the atomic bomb on Nagasaki, Japan on August 9, 1945?",
    "options": [
      "Enola Gay",
      "Bocks Car",
      "General Belgrano",
      "Memphis Belle"
    ],
    "correctIndex": 1
  },
  {
    "question": "During the Spanish-American War, what US general commanded a division that led the main attack on San Juan Hill?",
    "options": [
      "Jacob Kent",
      "Harry Truman",
      "Stephen Decatur",
      "Teddy Roosevelt"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many teams in the National Football League (NFL) are named for animals?",
    "options": [
      "16",
      "14",
      "12",
      "9"
    ],
    "correctIndex": 1
  },
  {
    "question": "When was the 27the amendment to the U.S. Constitution ratified?",
    "options": [
      "1971",
      "1920",
      "1992",
      "1865"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the original drummer for the Beatles.",
    "options": [
      "Pete Best",
      "Brian Epstein",
      "Richard Starkey",
      "Stu Sutcliffe"
    ],
    "correctIndex": 0
  },
  {
    "question": "Richard Steven Valenzuela, Jiles Perry Richardson, and Charles Hardin Holley are all better known by different professional names. What else do they have in common?",
    "options": [
      "They were all, at different times, married to the same woman.",
      "They died together in a plane crash.",
      "They have all won Academy Awards.",
      "They are all best-selling novelists."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which state was the first to ratify the Constitution of the United States in 1787?",
    "options": [
      "Massachusetts",
      "Rhode Island",
      "Delaware",
      "Pennsylvania"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1997 the Atlanta Braves baseball team started playing its home games at Turner Field. What was Turner Field used for before it was a baseball stadium?",
    "options": [
      "Track and Field",
      "Lacrosse",
      "Soccer",
      "Football"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which country gave the Statue of Liberty to the United States as a centennial gift?",
    "options": [
      "Spain",
      "France",
      "Canada",
      "England"
    ],
    "correctIndex": 1
  },
  {
    "question": "Leonardo da Vinci is well known as the artist who painted the Mona Lisa, but he was also an inventor.  Which modern-day machine is based on one of his concepts?",
    "options": [
      "helicopter",
      "radio",
      "chain saw",
      "blender"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 1970s television sitcom All in the Family, what was the nickname by which Archie called Gloria?",
    "options": [
      "Meathead",
      "Dingbat",
      "Pinko",
      "Little Girl"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the 39th President of the United States?",
    "options": [
      "Ronald Reagan",
      "Bill Clinton",
      "Jimmy Carter",
      "Richard Nixon"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the name of Toyotas first widely available gas-electric hybrid car?",
    "options": [
      "Celica",
      "Camry",
      "Insight",
      "Prius"
    ],
    "correctIndex": 3
  },
  {
    "question": "What rock musicians real name is Gordon Matthew Thomas Sumner?",
    "options": [
      "Bonos",
      "Stings",
      "Kid Rocks",
      "Dave Matthews"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the United States Navy, what is the next rank above Ensign?",
    "options": [
      "2nd Lieutenant",
      "Chief Petty Officer",
      "Lieutenant (junior grade)",
      "Captain"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the official name of Rhode Island, the 13th US state?",
    "options": [
      "The State of Rhode Island and Providence Plantations",
      "The Commonwealth of Rhode Island and Narragansett Bay",
      "The Commonwealth of Rhode Island",
      "The State of Rhode Island and Narragansett Bay"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 1994-2004 television sitcom Friends, which two characters were siblings?",
    "options": [
      "Rachel and Monica",
      "Ross and Chandler",
      "Monica and Ross",
      "Ross and Rachel"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which late-night television host is famous for his amusing Top Ten lists?",
    "options": [
      "Conan OBrien",
      "Craig Ferguson",
      "Jay Leno",
      "David Letterman"
    ],
    "correctIndex": 3
  },
  {
    "question": "In computer jargon, what is FTP?",
    "options": [
      "a programming language",
      "a popular Internet service provider",
      "a way to transfer files",
      "a type of e-mail"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following astronauts was not among the first human beings to orbit the moon?",
    "options": [
      "James Lovell",
      "John Young",
      "Frank Borman",
      "William Anders"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which is the only state whose legal system is not based upon English Common Law?",
    "options": [
      "Hawaii",
      "Alaska",
      "Texas",
      "Louisiana"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first U.S. President born in the USA?",
    "options": [
      "Madison",
      "Van Buren",
      "John Adams",
      "Washington"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which man originated the sentence Go west young man?",
    "options": [
      "Horace Greley",
      "Stephen Austin",
      "John Soule",
      "Buffalo Bill Cody"
    ],
    "correctIndex": 2
  },
  {
    "question": "At what time does Big Ben, in London, have both clock hands together?",
    "options": [
      "At 12 noon and 12 midnight",
      "Only at midnight",
      "Only at noon",
      "Never"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which group of ancient people used a system of strings and knots rather than words, to record their history?",
    "options": [
      "The Mayans",
      "The Edomites",
      "The Incas",
      "The Celts"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which Broadway play is based on Christopher Isherwoods book, I am a camera?",
    "options": [
      "Chicago",
      "Cabaret",
      "South Pacific",
      "The Producers"
    ],
    "correctIndex": 1
  },
  {
    "question": "They can be hinge, movable, immovable, semi-movable, or ball-and-socket. What are they?",
    "options": [
      "Joints",
      "Bolts",
      "Hardware for carpentry",
      "Joists"
    ],
    "correctIndex": 0
  },
  {
    "question": "On November 3, 1896, a British company did this for the first time.",
    "options": [
      "Build an underground, electrically heated home",
      "Issue an auto insurance policy",
      "Develop vulcanized rubber",
      "Set up the millionth telephone in Britain"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is a formicary?",
    "options": [
      "The place where scorpions live",
      "A list of prescribable medicines",
      "A nest of ants",
      "A device to mix chemicals"
    ],
    "correctIndex": 2
  },
  {
    "question": "Philip Bailey, Ronnie Laws, and Maurice White were members of what musical group?",
    "options": [
      "Earth, Wind, and Fire",
      "The Temptations",
      "The Doobees",
      "INXS"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was Henry Pu Yi?",
    "options": [
      "The last of Maos supporters to be killed.",
      "First Asian to win a Nobel Prize.",
      "The first man to win a Pulitzer Prize and a Nobel Prize.",
      "The last Emperor of China."
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first commander of a nuclear submarine?",
    "options": [
      "Mark Clarke",
      "Eugene P. Wilkerson",
      "Lewis Groton",
      "Melvin Carver"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the first food to be microwaved?",
    "options": [
      "Popcorn",
      "A candy bar",
      "Coffee",
      "Frozen corn"
    ],
    "correctIndex": 1
  },
  {
    "question": "The following words originated from what language: canoe, hurricane, and hammock?",
    "options": [
      "Tagalog",
      "Taino",
      "Techetulan",
      "Tanzanian"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of the first successful artificial satellite?",
    "options": [
      "Explorer",
      "None of these",
      "Discoverer",
      "Sputnik 1"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many items are there in a a Bakers Dozen?",
    "options": [
      "15",
      "12",
      "None of these",
      "13"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the Jewish New Year called?",
    "options": [
      "Rosh Ha-Shanah",
      "Yom Kippur",
      "Shabbat",
      "Hanukkah"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the largest city in California?",
    "options": [
      "Sacramento",
      "Long Beach",
      "Los Angeles",
      "San Diego"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these items was not invented by Thomas Edison?",
    "options": [
      "TV",
      "Dictating machine",
      "3-wire electrical system",
      "The electric pen"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these persons was not a woman?",
    "options": [
      "George Sand",
      "George Eliot",
      "Anders Zorn",
      "Isak Dinesen"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which country would you find the worlds largest underground lake?",
    "options": [
      "Ukraine",
      "Poland",
      "USA (Kentucky)",
      "USA (Tennessee)"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where would one find The Bridge of Eggs?",
    "options": [
      "Lima , Peru",
      "Peking, China",
      "Sydney, Australia",
      "The Moon"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first US President with no middle name?",
    "options": [
      "Thomas Jefferson",
      "John Adams",
      "George Washington",
      "Jimmy Carter"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many bones make up the backbone of a human baby?",
    "options": [
      "36",
      "33",
      "24",
      "26"
    ],
    "correctIndex": 1
  },
  {
    "question": "New York City is divided into 5 boroughs. One of these is not part of NYC?",
    "options": [
      "Richmond",
      "The Bronx",
      "Staten Island",
      "Yonkers"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the real name of renowned folk artist, Grandma Moses?",
    "options": [
      "Anna Louise Mason",
      "Mary Elizabeth McCoy",
      "Anna Mary Robertson",
      "Carmen Vital"
    ],
    "correctIndex": 2
  },
  {
    "question": "Exactly one of these statements is true. Which one is true ?",
    "options": [
      "Acids have a pH greater than 6.",
      "The garter snake lays eggs.",
      "Chickens do not have to be impregnated to lay eggs.",
      "Pure water has a pH of exactly 1"
    ],
    "correctIndex": 2
  },
  {
    "question": "At what event was the opera Aida premiered?",
    "options": [
      "The opening of the Suez Canal",
      "The opening of La Scala in Milan",
      "The opening of  the Panama Canal",
      "The  opening of the National Opera House in Rome"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the instant messaging system (or IM), what do the letters SYS mean?",
    "options": [
      "see you soon",
      "seeing your sister",
      "system is down",
      "still your spouse"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of Dr. Seusss famous characters said Save the Trees !!! Let em Grow ! ?",
    "options": [
      "Horton",
      "Sam-I-Am",
      "the Cat in the Hat",
      "the Lorax"
    ],
    "correctIndex": 3
  },
  {
    "question": "Napoleon Dynamite had a favorite animal that he liked to draw.  What was it?",
    "options": [
      "a liger (tiger and lion mix)",
      "a dinosaur",
      "a dragon",
      "a unicorn"
    ],
    "correctIndex": 0
  },
  {
    "question": "How do you say apple in Spanish?",
    "options": [
      "apio",
      "arroz",
      "uva",
      "manzana"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the popular song from 1993 that was featured in the beginning of the movie Benny and Joon .  The video for this song also played at the end of the movie.",
    "options": [
      "Crazy by Patsy Cline",
      "Dancing with Myself  by Billy Idol",
      "We Are Family by Sister Sledge",
      "Im Gonna Be (500 miles) by the Proclaimers"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the Waynes World movie, from where is Wayne and Garths live cable-access show broadcast?",
    "options": [
      "Waynes bedroom",
      "Wayne and Garths school",
      "Garths living room",
      "Waynes basement"
    ],
    "correctIndex": 3
  },
  {
    "question": "Of what country is the kiwi bird a national symbol?  It is also native to that country.",
    "options": [
      "Australia",
      "New Zealand",
      "United Kingdom",
      "Sumatra"
    ],
    "correctIndex": 1
  },
  {
    "question": "If you were a baker, what would you be called in Spanish?",
    "options": [
      "panadero",
      "marinero",
      "carpintero",
      "cerrajero"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the movie What About Bob?, what does Bob have around his neck when he is riding the bus to Lake Winnipesaukee in New Hampshire ?",
    "options": [
      "some anti-bacterial soap",
      "his goldfish Gil in a jar",
      "his lucky rabbits foot",
      "some garlic cloves in a bottle"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the two pets that Chandler Bing and Joey Tribbiani had when they roomed together on the Friends TV show.",
    "options": [
      "a chicken and a duck",
      "a cat and a dog",
      "a pair of gerbils",
      "a fish and a spider"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 2005, there was a Burger King commercial for the Tendercrisp Bacon Cheddar Ranch sandwich that featured the lead singer of a famous band.  Which band was Darius Rucker in?",
    "options": [
      "Hootie and the Blowfish",
      "King Crimson",
      "Pearl Jam",
      "Mike and the Mechanics"
    ],
    "correctIndex": 0
  },
  {
    "question": "What were the names of the twin sons of Jesse and Becky from the Full House TV show?",
    "options": [
      "Anthony and Darren",
      "Tony and T. J.",
      "Alex and Nicky",
      "Dave and Otis"
    ],
    "correctIndex": 2
  },
  {
    "question": "How do you say snow in French?",
    "options": [
      "neige",
      "vent",
      "soleil",
      "pluie"
    ],
    "correctIndex": 0
  },
  {
    "question": "The word for tomato in Spanish is _________ .",
    "options": [
      "el labio",
      "la manzana",
      "el tomate",
      "el escritorio"
    ],
    "correctIndex": 2
  },
  {
    "question": "Comedian Ron White has a famous nickname that he mentions during the Blue Collar Comedy Tour and also on his albums,  What is that delicious nickname?",
    "options": [
      "Tuna Salad",
      "Mac Salad",
      "Tater Salad",
      "Egg Salad"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the Looney Tunes cartoons, there was a little bird who was always trying to catch Foghorn Leghorn,  Whats the name of this brave little brown bird?",
    "options": [
      "Yoyo",
      "Henery Hawk",
      "Booker T.",
      "Sid the Sparrow"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately how much time does it take for light from the Sun to reach the Earths surface?",
    "options": [
      "About 37 minutes",
      "About 1 minute",
      "About 8 minutes",
      "About 29 seconds"
    ],
    "correctIndex": 2
  },
  {
    "question": "What people worshipped the sun god and god of war Huitzilopochtli?",
    "options": [
      "The Aztecs",
      "The Chinese",
      "The Celts",
      "The Cheyenne"
    ],
    "correctIndex": 0
  },
  {
    "question": "What two gases comprise the greater part of the Sun?",
    "options": [
      "Oxygen and hydrogen",
      "Hydrogen and helium",
      "Nitrogen and hydrogen",
      "Nitrogen and oxygen"
    ],
    "correctIndex": 1
  },
  {
    "question": "If you say that you would like the eggs sunny side up, what does that mean?",
    "options": [
      "The yolk is liquid, the eggs are cooked on both sides",
      "The eggs are mixed with cream",
      "The yolk is liquid, the eggs are cooked only on one side",
      "The yolk is hard, the eggs are cooked on both sides"
    ],
    "correctIndex": 2
  },
  {
    "question": "At what approximate speed does the Earth orbit around the Sun?",
    "options": [
      "18 000 km/h (11 184.7 mph)",
      "10 000 km/h (6 213.7 mph)",
      "108 000 km/h (67 108.1 mph)",
      "1000 km/h (621.4 mph)"
    ],
    "correctIndex": 2
  },
  {
    "question": "In English medieval castles and houses, what room was usually called solar room?",
    "options": [
      "A room for solitary activities",
      "A room designed for sunbathing",
      "A room where food was stored",
      "A room where the family gathered for dinner"
    ],
    "correctIndex": 0
  },
  {
    "question": "During the next change in the course of its stellar evolution, what is the Sun expected to evolve into?",
    "options": [
      "Black hole",
      "Red giant",
      "Supernova",
      "White dwarf"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these gods from different mythologies was not a sun god?",
    "options": [
      "Thor",
      "Helios",
      "Sol",
      "Ra"
    ],
    "correctIndex": 0
  },
  {
    "question": "What phenomenon, observed near the North Pole, is caused by the interaction between solar winds and the Earths magnetic field?",
    "options": [
      "Earthquakes",
      "Northern lights",
      "Solar eclipse",
      "Tides"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these calendars does not follow the Earths revolution around the Sun and is not a solar calendar?",
    "options": [
      "Coptic calendar",
      "Islamic calendar",
      "Julian calendar",
      "Gregorian calendar"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which word in this sentence is incorrectly used:  The new trivia mix was answered by Joe and me.",
    "options": [
      "me",
      "answered",
      "trivia",
      "mix"
    ],
    "correctIndex": 3
  },
  {
    "question": "This actor was a founding member of Lee Strasbergs Actors Studio. He became famous as District Attorney Adam Schiff, a part he played for ten seasons on a successful NBC drama series.",
    "options": [
      "Dennis Farina",
      "Tom Bosley",
      "Roy Thinnes",
      "Steven Hill"
    ],
    "correctIndex": 3
  },
  {
    "question": "Of the 13 zodiac constellations, which one is the only constellation not counted as an astrological sign?",
    "options": [
      "Platismouis",
      "Ophiucus",
      "There are only 12 zodiac constellations",
      "Permille"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of these is the motto of  the state of Missouri?",
    "options": [
      "Semper ubi sub ubi",
      "Magnus inter opes inops",
      "Salus populi suprema lex esta",
      "Pares cum paribus facillime congregantur"
    ],
    "correctIndex": 2
  },
  {
    "question": "This British philologist and student of ancient India is famous for his theory of the existence of a relationship among Indo-European languages.",
    "options": [
      "Sir Mark Waverley Park",
      "Sir Malcom Edwards",
      "Jonathan Parker-Knolls",
      "Sir William Jones"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to the religion of Sikhism, it is every Sikhs duty to defeat what five vices?",
    "options": [
      "Religious zealots, political zealots, money lending, sexual allurement and gluttony",
      "Alcohol, pork, money, gold, and diamonds",
      "Ego, anger, greed, attachment, and lust",
      "Drunkenness, lewdness, murder, rape and theft"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Irish hero,spurred on by the French Revolution, is widely regarded as the father of Irish republicans.",
    "options": [
      "Patrick McCormack",
      "Brian Clohessy",
      "Kevin  ODoul",
      "Wolfe Tone"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the Roman counterpart of the Greek god Zeus.",
    "options": [
      "Neptune",
      "Jupiter",
      "Saturn",
      "none of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who wrote and performed the 2005 song Bad Day?",
    "options": [
      "Daniel Powter",
      "Taylor Hicks",
      "Green Day",
      "Alvin"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the Greek god of wine?",
    "options": [
      "Hermes",
      "Hephaestus",
      "Dionysus",
      "Zeus"
    ],
    "correctIndex": 2
  },
  {
    "question": "The comic books The Adventures of Asterix focus on the exploits of a village of ancient Gauls as they resist Greek occupation.",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where is the Baseball Hall of Fame located?",
    "options": [
      "New York, NY",
      "Cooperstown, N.Y",
      "Hoboken, NJ",
      "Canton, OH"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which Hall of Fame is located in Cleveland, Ohio?",
    "options": [
      "Hockey",
      "Rock and Roll",
      "Basketball",
      "Ohio"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which Hall of Fame is located in Oklahoma City, Oklahoma ?",
    "options": [
      "Sooner Hall of Fame",
      "Cowboy Hall of Fame",
      "College Football hall of Fame",
      "Oil Industry Hall of Fame"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which Hall of Fame is located in Stillwater, Oklahoma ?",
    "options": [
      "American Track and Field Hall of Fame",
      "American Softball hall of Fame",
      "National Wrestling Hall of Fame",
      "National Museum of College Football"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where is the Songwriters Hall of  Fame located?",
    "options": [
      "Detroit , Michigan",
      "New York City, NY",
      "Las Vegas, Nevada",
      "Chicago, Illinois"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which city hosts the International Clown Hall of Fame?",
    "options": [
      "West Hollywood, CA",
      "Saratoga, NY",
      "Sarasota, Florida",
      "West Allis, Wisconsin"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where in the USA would you find the Circus Hall of Fame?",
    "options": [
      "Saratoga, NY",
      "Augusta, GA",
      "Sarasota, Florida",
      "Mobile, Alabama"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where is the Hockey Hall of Fame located?",
    "options": [
      "Colorado Springs, Colorado",
      "Toronto, Canada",
      "Goshen, New York",
      "Oklahoma City, Oklahoma"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where is the International Tennis Hall of Fame located?",
    "options": [
      "London, England",
      "New York, NY",
      "Newport, Rhode Island",
      "Paris, France"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where is the Bowling Hall of Fame located?",
    "options": [
      "Saint Louis, MO",
      "Tucson, AZ",
      "Canastota, NY",
      "Stroudsberg, PA"
    ],
    "correctIndex": 0
  },
  {
    "question": "This pop singer, songwriter and pianist, who attended the highly regarded Julliard School of Music, recorded two different versions of the song Breaking Up Is Hard to Do.",
    "options": [
      "Steven Tyler",
      "Neil Sedaka",
      "Neil Diamond",
      "Andy Williams"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1908, this caricaturist, regarded as the father of French animation, made the film Fantasmagorie, which is considered the first fully-animated film ever made.",
    "options": [
      "Andr\u00c3\u00a9 Gill",
      "None of these",
      "Emile Cohl",
      "Patrice de Mac-Mahon"
    ],
    "correctIndex": 2
  },
  {
    "question": "This satellite, launched from Cape Canaveral on January 31, 1958, by the Jupiter-C vehicle, was the first United States Earth satellite.",
    "options": [
      "Explorer I",
      "Titan I",
      "Gemini I",
      "Apollo I"
    ],
    "correctIndex": 0
  },
  {
    "question": "British aircraft manufacturer, Saunders Roe, developed the first practical man-carrying hovercraft, the SR-N1. Its first public demonstration, including a cross-channel run, was made in what year?",
    "options": [
      "1716",
      "1959",
      "1934",
      "1978"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year did Capt. John Alcock and Lt. A.W. Brown make the first nonstop transatlantic flight?",
    "options": [
      "1929",
      "1939",
      "1909",
      "1919"
    ],
    "correctIndex": 3
  },
  {
    "question": "This soul singer recorded the song Dock of the Bay  in 1967,  three days prior to his death in a plane crash.",
    "options": [
      "Bob Dylan",
      "Otis Redding",
      "Paul Banks",
      "Neil Sedaka"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which Major League Baseball pitcher was nicknamed, The Spaceman?",
    "options": [
      "Dennis Rodman",
      "Bill Romanowski",
      "Mark Fidrytch",
      "Bill Lee"
    ],
    "correctIndex": 3
  },
  {
    "question": "This psychiatrist, founder of Analytical Psychology, made the following observation:  The more critical reasoning dominates, the more impoverished life becomes.",
    "options": [
      "Juri Allik",
      "Sigmund Freud",
      "Alfred Adler",
      "Carl Jung"
    ],
    "correctIndex": 3
  },
  {
    "question": "He invented the vulcanized rubber double-tube tire in 1845 and the glass fountain pen in 1849. He also came up with the technique of firing explosive charges using electricity.",
    "options": [
      "Robert William Thomson",
      "Edouard Michelin",
      "B. F. Goodrich",
      "Edouard Goodyear"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the longest continuous stretch of railroad.",
    "options": [
      "Trans-Siberian Railroad",
      "The Orient Express",
      "The Canadian Pacific Railroad",
      "The Alaska-Canadian Railroad"
    ],
    "correctIndex": 0
  },
  {
    "question": "Famous for his work, The Exploration of Cosmic Space by Means of Reaction Devices, he is considered the father of human space flight and the first man to conceive the space elevator -- a hypothetical structure designed to transport material from a planets surface into space.",
    "options": [
      "Pierre Louis De la Mer",
      "Jules Verne",
      "R.H. Goddard",
      "Konstantin Tsiolkovsky"
    ],
    "correctIndex": 3
  },
  {
    "question": "He was ridiculed for preparing in 1863 the first periodic table of the elements arranged in order of relative atomic masses, and pointing out in 1865 the law of octaves, where every eighth element has similar properties.",
    "options": [
      "John Dalton",
      "Pyotr Mendel",
      "Dmitri Mendeleev",
      "John Newlands"
    ],
    "correctIndex": 3
  },
  {
    "question": "It was a war fought because a  Prussian prince was put on the Spanish throne.",
    "options": [
      "The  War of  Prussian Succession",
      "The War of  Spanish Succession",
      "The Iberian Campaign",
      "The Franco-Prussian War"
    ],
    "correctIndex": 3
  },
  {
    "question": "He was arrested and imprisoned in 1849 for engaging in revolutionary activity against the ruler, but became one of his countrys greatest writers.",
    "options": [
      "Dostoevsky",
      "Hugo",
      "Engels",
      "Cervantes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Find the next number in this sequence: 8, 5, 4, 9, 1, 7, ...",
    "options": [
      "0",
      "3",
      "6",
      "2"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first Europeans to see this beautiful Caribbean island were on the boat of  Alonzo Pinzon, who separated from Columbus to explore on his own, in 1492. It is the smallest of the Greater Antilles.  What island is it ?",
    "options": [
      "Barbuda",
      "Puerto Rico",
      "Grand Cayman",
      "Dominica"
    ],
    "correctIndex": 1
  },
  {
    "question": "It was one of the longest running off-Broadway plays. Its orchestra consisted of a harp and a piano. It was written by Tom Jones and Harvey Schmidt.  It originally starred Rita Gardner, Thomas Bruce and Kenneth Nelson.",
    "options": [
      "Hair",
      "When Tony Met Angela",
      "Cats!",
      "The Fantasticks"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these words means dealing with charity or aided by charity?",
    "options": [
      "Eleemosynary",
      "Nescient",
      "Parvenu",
      "Thaumaturgh"
    ],
    "correctIndex": 0
  },
  {
    "question": "U.S. President Hardings administration was rocked by this scandal, involving oil.",
    "options": [
      "Teapot Dome",
      "Livingston-Heathcote",
      "Skull Island",
      "Credit Mobilier"
    ],
    "correctIndex": 0
  },
  {
    "question": "Hammer v. Dagenhart  was an important Supreme Court case, which dealt what topic?",
    "options": [
      "Segragation",
      "The right to privacy",
      "Abortion rights",
      "Child labor vis-a-vis interstate commerce"
    ],
    "correctIndex": 3
  },
  {
    "question": "The terms ahimsa and satyagraha  are generally associated with whom?",
    "options": [
      "Mahatma Gandhi",
      "Angelina Jolie",
      "Buddha",
      "Indira Gandhi"
    ],
    "correctIndex": 0
  },
  {
    "question": "This friend of Vincent Van Gogh and once-successful stockbroker produced the famous work, The Yellow Christ.",
    "options": [
      "Cezanne",
      "Gauguin",
      "Matisse",
      "Pisarro"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which English coin represented one-twentieth of a pound?",
    "options": [
      "Crown",
      "Shilling",
      "Farthing",
      "Pence"
    ],
    "correctIndex": 1
  },
  {
    "question": "The states of Arizona, Utah, New Mexico and Colorado form an exception to what important mathematical theorem?",
    "options": [
      "Continuum Theorem",
      "Fermats Last  Theorem",
      "Goldbachs Theorem",
      "Four Color Theorem"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following types of music are not generally associated with Jamaica?",
    "options": [
      "Mento",
      "Reggae",
      "Ska",
      "Calypso"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Golden State Warriors of the NBA once traded a player and a draft choice for center, Billy Joel Carroll.  Who were the two players they traded?",
    "options": [
      "Dennis Johnson and  JoJo White",
      "Robert Parrish and Kevin McHale",
      "Rick Barry and Fred Hetzel",
      "Cliff Hagan and Easy Ed MCCauley"
    ],
    "correctIndex": 1
  },
  {
    "question": "Three of these people were competitors and / or critics of Newton.  Can you spot the odd one?",
    "options": [
      "Gottfried Leibnitz",
      "Christian Huygens",
      "Issac Barrow",
      "Robert  Hooke"
    ],
    "correctIndex": 2
  },
  {
    "question": "This woman, who was the second wife and queen consort of Henry VIII, is said to have become a headless ghost after her death.",
    "options": [
      "Mary Magdeline",
      "Anne Boleyn",
      "Mary Cox",
      "Anne Cox"
    ],
    "correctIndex": 1
  },
  {
    "question": "The ghost of Archbishop of Canterbury Thomas Becket appeared during the construction of the Twin Towers in the 1920s.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "King Richard III killed his two nephews, which were later reported to have been seen as ghosts. What were their names?",
    "options": [
      "Michael of Knottinghamm and Richard of Shrewsbury",
      "Edward V of England and Richard of Shrewsbury",
      "Edward the V of England and Michael of Knottinghamm",
      "Edward of Shrewsbury and Richard the V of England"
    ],
    "correctIndex": 1
  },
  {
    "question": "The ghost of Lady Jane Grey is known as The Nine Days Queen because of the violent ending of her life.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Biggin Hill in London, that is said to be haunted by ghosts, was what kind of war location in the past?",
    "options": [
      "World War I airbase",
      "Revolutionary War strategy base",
      "World War II airbase",
      "D-Day commandment center"
    ],
    "correctIndex": 2
  },
  {
    "question": "The ghost of the 16th President of the United States Abraham Lincoln is reported to be one of the ghosts that haunt the White House.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Lamian Gardens of Rome are often claimed to be haunted by the ghost of the Roman Emperor Caligula, who died in what way?",
    "options": [
      "Natural causes",
      "Assassination",
      "Suicide",
      "Poisoning"
    ],
    "correctIndex": 1
  },
  {
    "question": "The former prison island of Alcatraz, situated off the coast of San Francisco, is said to be the home to a number of ghosts of prisoners who died there.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Museum of Natural Science in Ottawa, Ontario, Canada is said to be haunted by the ghost of the Canadian Prime Minister Sir Wilfrid Laurier, whose body laid there for some time after his death in 1919.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Extraterrestrial life may be closer than we think. Which of these natural satellites of Saturn is believed to have suitable conditions for existence of life?",
    "options": [
      "Phoebe",
      "Titan",
      "Dione",
      "Atlas"
    ],
    "correctIndex": 1
  },
  {
    "question": "In ufology, how many kinds of close encounters are there in J. Allen Hyneks classification system for observation and interaction with extraterrestrial intelligence within 150 meters (500 feet)?",
    "options": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correctIndex": 2
  },
  {
    "question": "Due to Silicons similarity with Carbon, some scientists have proposed the possibility of Silicon-based life. Which popular TV production propagated the idea?",
    "options": [
      "The Day the Earth Stood Still",
      "The X files",
      "Star Trek",
      "Close Encounters of the Third Kind"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Roswell UFO incident involves the discovery of debris of an alleged extraterrestrial space ship, which had crashed into a field near Roswell, New Mexico, USA. In which year did this happen?",
    "options": [
      "1956",
      "1947",
      "1973",
      "1968"
    ],
    "correctIndex": 1
  },
  {
    "question": "Berkeley Universitys, Search For Extraterrestrial Intelligences project , SETI@Home, is an experiment open for everyone to join. What is SETI@Homes aim?",
    "options": [
      "To bring an alien to each volunteers home",
      "To place radio telescopes at volunteers homes",
      "To use free processing time in volunteers computers to analyze radio data",
      "To train volunteers for space missions"
    ],
    "correctIndex": 2
  },
  {
    "question": "The catch phrase, The Truth Is Out There originated from which of these popular television series, dealing with mysteries and extraterrestrial life?",
    "options": [
      "The First Wave",
      "The Twilight Zone",
      "The X-Files",
      "The Outer Limits"
    ],
    "correctIndex": 2
  },
  {
    "question": "Crop circles, the cause of many contending believes, were adapted by a creative Swedish company for this rather rational purpose.",
    "options": [
      "Crop fertilization",
      "Advertisement",
      "Conceptual modern art",
      "Airplane navigation"
    ],
    "correctIndex": 1
  },
  {
    "question": "How did the alien invasion in Herbert Wells well-known science fiction novel, The War of the Worlds eventually come to a halt?",
    "options": [
      "All nations united and together, repelled the invasion.",
      "The aliens were unexpectedly killed by a terrestrial disease.",
      "The alien invaders took possession of Earth.",
      "Aliens and humans reached an agreement to coexist on Earth."
    ],
    "correctIndex": 1
  },
  {
    "question": "In ufology, what does the black triangle phenomenon refer to?",
    "options": [
      "Strange triangular marks on Mars surface",
      "A type of triangular-shaped UFO",
      "Inexplicable black marks found on rock",
      "A triangular area of frequent UFO or other unusual phenomena sightings"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Dropa affair, one of the most intriguing UFO-related events in the history of ufology, is the supposed crash of an extraterrestrial spaceship about 12 thousand years ago near which of the following regions?",
    "options": [
      "Tasmania",
      "Ecuador",
      "Tibet",
      "Mesopotamia"
    ],
    "correctIndex": 2
  },
  {
    "question": "USA boycotted the 1980 Summer Olympics held in what city?",
    "options": [
      "Tehran",
      "Moscow",
      "Beijing",
      "Prague"
    ],
    "correctIndex": 1
  },
  {
    "question": "In December of 1979 the World Health Organization announced the eradication of what infectious disease?",
    "options": [
      "Measles",
      "Tuberculosis (TB)",
      "Malaria",
      "Small Pox"
    ],
    "correctIndex": 3
  },
  {
    "question": "What video game sparked a huge craze and inspired a TV series which aired on ABC from 1982 to 1984?",
    "options": [
      "Pac-man",
      "Pong",
      "Defender",
      "Space Invaders"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who made an assassination attempt on Ronald Reagan?",
    "options": [
      "James Brady",
      "Lee Harvey Oswald",
      "John Hinckley, Jr.",
      "Jack Ruby"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1983, riding on board the Challenger, she became the first American woman in space.",
    "options": [
      "Judith Resnik",
      "Jerrie Cobb",
      "Sally Ride",
      "Sharon Christa McAuliffe"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1984, they became the first rap group to have an album certified gold.",
    "options": [
      "Sugarhill Gang",
      "Run-D.M.C.",
      "Naughty By Nature",
      "Soul II Soul"
    ],
    "correctIndex": 1
  },
  {
    "question": "What company introduced its popular entertainment system in 1985?",
    "options": [
      "Magnavox",
      "Sega",
      "Nintendo",
      "Atari"
    ],
    "correctIndex": 2
  },
  {
    "question": "Kurt Waldheims Nazi past was revealed as he ran for president of this country, but he still won.",
    "options": [
      "Germany",
      "Austria",
      "Canada",
      "Sweden"
    ],
    "correctIndex": 1
  },
  {
    "question": "Nine years after invading Afghanistan, this country began withdrawing its troops in 1988.",
    "options": [
      "USSR",
      "Iran",
      "Great Britain",
      "Pakistan"
    ],
    "correctIndex": 0
  },
  {
    "question": "What country in Southeast Asia changed its name to Myanmar?",
    "options": [
      "Laos",
      "Cambodia",
      "Ethiopia",
      "Burma"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this part of the world tattooing has been a common practice since antiquity. Featuring elaborate geometrical figures, tattoos were a natural artistic design on the skin of their owner.",
    "options": [
      "Indonesia",
      "Polynesia",
      "Malaysia",
      "The Middle East"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this US state it is illegal to tattoo an unconscious person.",
    "options": [
      "Nevada",
      "Florida",
      "California",
      "Texas"
    ],
    "correctIndex": 3
  },
  {
    "question": "These are the least painful parts of the body to put a tattoo on.",
    "options": [
      "The shoulders",
      "The ankles",
      "Fleshy parts of the arms and legs",
      "The belly and the calf"
    ],
    "correctIndex": 2
  },
  {
    "question": "This will fade a tattoo over time.",
    "options": [
      "Washing substances",
      "Water",
      "The change of skin structure",
      "Sunlight"
    ],
    "correctIndex": 3
  },
  {
    "question": "Although minimal, the risk of transmitting this disease through a tattoo needle exists. This disease can also be transmitted through the ink or dirty equipment and environment.",
    "options": [
      "Tuberculosis",
      "Hepatitis B",
      "Cholera",
      "Mumps"
    ],
    "correctIndex": 1
  },
  {
    "question": "A Tattoo is a wound. It oozes for a couple of days after it has been made. This is not recommended for you to do after you get a tattoo.",
    "options": [
      "Swim and sunbathe",
      "Wash it soap",
      "Eat hot food",
      "Cover it with clothes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Fed up with your tattoo? There is a way to get rid of it. This is the most popular way of tattoo removal.",
    "options": [
      "Laser treatment",
      "Dermabrasion",
      "Surgery",
      "Putting natural-colored ink over the tattoo"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is the reason why Maori women tattoo their faces.",
    "options": [
      "To conceal age wrinkles",
      "To prevent the access of sunlight to their faces",
      "To be more attractive to men",
      "To indicate their social status"
    ],
    "correctIndex": 0
  },
  {
    "question": "There is usually some bleeding during the process of tattooing.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following native American groups of people speak a Southern Athabaskan language?",
    "options": [
      "Arawaks",
      "Alaskans",
      "Arizonans",
      "Apache"
    ],
    "correctIndex": 3
  },
  {
    "question": "What herb, also known as starflower, has five small, blue or pink, triangular-pointed petals?",
    "options": [
      "Basil",
      "Bay",
      "Borage",
      "Berberis"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the British Prime Minister on February 14th 1940?",
    "options": [
      "Chamberlain",
      "Callaghan",
      "Churchill",
      "Canning"
    ],
    "correctIndex": 0
  },
  {
    "question": "What long-running radio and television police drama was created by and starred Jack Webb?",
    "options": [
      "Dragnet",
      "Desperate Housewives",
      "Deadwood",
      "Dynasty"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is a young eel called?",
    "options": [
      "Elver",
      "Eeling",
      "Eelet",
      "Elvis"
    ],
    "correctIndex": 0
  },
  {
    "question": "What record label was established in 1978 and included New Order, The Durutti Column and Happy Mondays in its stable?",
    "options": [
      "Fall records",
      "Fire Records",
      "Factory Records",
      "Fiction records"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which daikaij\u00c5\u00ab (giant monster) most resembles a turtle?",
    "options": [
      "Gigan",
      "Ghidora",
      "Godzilla",
      "Gamera"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which English king was born in Pembroke Castle, Wales in 1457?",
    "options": [
      "Henry IV",
      "Henry I",
      "Henry VIII",
      "Henry VII"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name for fire sacrifice?",
    "options": [
      "Infiltration",
      "Immolation",
      "Impregnation",
      "Innovation"
    ],
    "correctIndex": 1
  },
  {
    "question": "What term refers to the group of militia gunmen in the Darfur region of Sudan thought responsible for the serial massacre, rape and forced displacement in 1990 and 2001-2005?",
    "options": [
      "Jihad",
      "Janjaweed",
      "Jilbab",
      "Jintrap"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the listed words links a World War II destroyer, the band Teenage Fanclub and a murderous clown called Pennywise?",
    "options": [
      "Kendo",
      "Kettle",
      "King",
      "Kiki"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the first name of Mr Burton, who played Geordi La Forge in Star Trek: The Next Generation?",
    "options": [
      "Labatt",
      "Limahl",
      "LeVar",
      "Lamar"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of the listed African countries does not border a sea or an ocean?",
    "options": [
      "Malawi",
      "Madagascar",
      "Mozambique",
      "Mauritania"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which genus of plants does catnip (catmint) belong to?",
    "options": [
      "Nigella",
      "Nepenthes",
      "Nyssa",
      "Nepeta"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which Odd film was set in Northern Ireland?",
    "options": [
      "Odd Jobs",
      "Odd Couple",
      "Odds Against Tomorrow",
      "Odd Man Out"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the following an example of: Madam, Im Adam?",
    "options": [
      "Perambulation",
      "Palindrome",
      "Personalisation",
      "Personification"
    ],
    "correctIndex": 1
  },
  {
    "question": "What word means a baked dish made mainly of eggs and milk?",
    "options": [
      "Quivive",
      "Quoin",
      "Quiche",
      "Quiddich"
    ],
    "correctIndex": 2
  },
  {
    "question": "Complete this famous quotation, attributed to, and denied by, Winston Churchill.",
    "options": [
      "Ropes",
      "Rashes",
      "Rotten biscuits",
      "nt talk to me about naval tradition. Its nothing but ____, sodomy, and the lash.",
      "Rum"
    ],
    "correctIndex": 4
  },
  {
    "question": "Which engineer founded the Institution of Mechanical Engineers in 1847?",
    "options": [
      "Robert Stephenson",
      "Igor Sikorski",
      "George Stephenson",
      "Joseph Strauss"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these fish is least likely to be found in seawater?",
    "options": [
      "Tench",
      "Tuna",
      "Tarpon",
      "Trumpetfish"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following countries has the highest population?",
    "options": [
      "Uruguay",
      "Uganda",
      "Ukraine",
      "Uzbekistan"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these vampire films was directed by horror supremo Wes Craven?",
    "options": [
      "Vampyros Lesbos",
      "Vampire in Brooklyn",
      "Vampires Kiss",
      "Vampires vs. Zombies"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these modern composers was born in South Africa?",
    "options": [
      "John Williams",
      "Niel van der Watt",
      "Andrew Lloyd Webber",
      "Alex Wurman"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following musical artists produces noise music?",
    "options": [
      "Xome",
      "Xmal Deutschland",
      "X",
      "XTC"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which youthful musician(s) is/are associated with the 1980s albums Killing Joke and Whats THIS for...!?",
    "options": [
      "Paul Young",
      "Martin Youth Glover",
      "Musical Youth",
      "Neil Young"
    ],
    "correctIndex": 1
  },
  {
    "question": "What term refers to the study of fermentation?",
    "options": [
      "Zonary",
      "Zigadenus",
      "Zymurgy",
      "Zoolatry"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is entomophobia a fear of?",
    "options": [
      "Dust",
      "Cows",
      "Insects",
      "Birds"
    ],
    "correctIndex": 2
  },
  {
    "question": "What do you call a large group of islands?",
    "options": [
      "Hawaii",
      "Islet",
      "Archipelago",
      "Chanel"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who directed the 1991 film The Silence of the Lambs?",
    "options": [
      "Roman Polanski",
      "Joel Coen",
      "Steven Spielberg",
      "Jonathan Demme"
    ],
    "correctIndex": 3
  },
  {
    "question": "Consuming alcohol raises your body temperature.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many engines does a B-52 Bomber have?",
    "options": [
      "2",
      "8",
      "4",
      "6"
    ],
    "correctIndex": 1
  },
  {
    "question": "The 7 Virtues are:  Temperance, Charity, Diligence, Patience, Kindness, Humility, Chastity.  What are their opposites which are considered the 7 Deadly Sins?",
    "options": [
      "Greed, Anger, Envy, Jealousy, Conciet, Lust, Gluttony",
      "Greed, Anger, Envy, Jealousy, Dominance, Lust, Gluttony",
      "Lust, Gluttony, Greed, Sloth, Wrath, Envy, Pride",
      "Carelessness, Anger, Envy, Jealousy, Conciet, Lust, Gluttony"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Death Penalty for murder was abolished in the United Kingdom in 1965.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This mini-series, starring Native American actors Gordon Tootoosis and Gerald Auger, was produced by Steven Spielberg and got a Golden Globe nomination in 2006.",
    "options": [
      "Into the West",
      "Dances With Wolves",
      "Powwow Highway",
      "Dreamkeeper"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 2002 movie Windtalkers, US Marines used the Navajo language as their unbreakable code.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What actress played the role of a transgender man in the movie Boys Dont Cry?",
    "options": [
      "Helen Hunt",
      "Hilary Swank",
      "Hally Berry",
      "Heather Graham"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the inventor of Tupperware?",
    "options": [
      "Earl Tupper",
      "John Smith",
      "David Silas",
      "Janis Tupperware"
    ],
    "correctIndex": 0
  },
  {
    "question": "What happens to a goldfish when it is kept in the dark?",
    "options": [
      "It turns white.",
      "It goes blind.",
      "It dies.",
      "It turns a paler color."
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the largest country by area in Africa?",
    "options": [
      "Sudan",
      "South Africa",
      "Algeria",
      "Egypt"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following materials is the densest?",
    "options": [
      "Gold",
      "Aluminum",
      "Platinum",
      "Iridium"
    ],
    "correctIndex": 3
  },
  {
    "question": "Blue litmus paper turns red when it comes in contact with alkalines.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Sugar, a naturally occurring nutrient that makes food taste sweet, is classified in chemistry as what?",
    "options": [
      "Nucleic acid",
      "Protein",
      "Lipid",
      "Carbohydrate"
    ],
    "correctIndex": 3
  },
  {
    "question": "Making sugar by evaporating cane juice was developed in about 500 BC, in what country?",
    "options": [
      "China",
      "India",
      "Egypt",
      "Greece"
    ],
    "correctIndex": 1
  },
  {
    "question": "Nowadays, sugar is used in science and manufacturing as what?",
    "options": [
      "Preservative",
      "Bulking agent",
      "All of these",
      "Sweetener"
    ],
    "correctIndex": 2
  },
  {
    "question": "Brown sugar, a type of unrefined or partially refined soft sugar, generally has a lower caloric value than white sugar.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Scientists have proved that one of the health dangers, which ingesting sugar on a habitual basis involves, is the suppression of the activity of which system of the human body?",
    "options": [
      "Sensory system",
      "Immune system",
      "Reproductive system",
      "Cardiovascular system"
    ],
    "correctIndex": 1
  },
  {
    "question": "Lactose is a type of sugar consisting of two subunits (galactose and glucose), found primarily in what food?",
    "options": [
      "Milk",
      "Fruits",
      "Vegetables",
      "Honey"
    ],
    "correctIndex": 0
  },
  {
    "question": "Overconsumption of sugar causes hyperactivity in children, manifested by increased movement, impulsiveness, distractibility, and mood swings.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sugar is important for the proper function of which of these bodily systems?",
    "options": [
      "Cardiovascular system",
      "Endocrine system",
      "Nervous system",
      "Digestive system"
    ],
    "correctIndex": 2
  },
  {
    "question": "Apart from its culinary properties, sugar has many uses in science and manufacturing. It is used for all of the following, except one.",
    "options": [
      "To tan leather, printer inks and dyes.",
      "To harden asphalt.",
      "To increase ice creams freezing point",
      "To help grow penicillin."
    ],
    "correctIndex": 2
  },
  {
    "question": "In 2004 the United States elected their _____ President.",
    "options": [
      "42nd",
      "30th",
      "43rd",
      "40th"
    ],
    "correctIndex": 2
  },
  {
    "question": "There is no water found on any other planet besides Earth.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many US states were there in 1800?",
    "options": [
      "22",
      "3",
      "30",
      "16"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is a tort?",
    "options": [
      "A kind of pie",
      "A type of computer",
      "A law",
      "A type of car"
    ],
    "correctIndex": 2
  },
  {
    "question": "What city did the Indianapolis Colts move from in 1984?",
    "options": [
      "Boston",
      "New England",
      "Baltimore",
      "Los Angeles"
    ],
    "correctIndex": 2
  },
  {
    "question": "Antigua and Barbuda, Belize, and Zimbabwe are three countries which share just one of these four items.",
    "options": [
      "Population less than 30,000 people",
      "Independence gained from the UK",
      "Currency",
      "Border"
    ],
    "correctIndex": 1
  },
  {
    "question": "Three of the following animals are herbivorous. Which is the odd one?",
    "options": [
      "Guinea pig",
      "Beaver",
      "Capybara",
      "Opossum"
    ],
    "correctIndex": 3
  },
  {
    "question": "The acetic acid, the acetylene and the ethene have an equal number of this atom in their molecules.",
    "options": [
      "C",
      "H",
      "Fe",
      "O"
    ],
    "correctIndex": 0
  },
  {
    "question": "Martin Lewis Perl, Riccardo Giacconi, and Georges Charpak all received the Nobel Prize in ....?",
    "options": [
      "Physics",
      "Literature",
      "Chemistry",
      "Medicine"
    ],
    "correctIndex": 0
  },
  {
    "question": "All of these French writers were born before 1900 except one.",
    "options": [
      "Alexandre Dumas",
      "Simone de Beauvoir",
      "Marcel Proust",
      "Gustave Flaubert"
    ],
    "correctIndex": 1
  },
  {
    "question": "Michael Ballack, Franz Beckenbauer, Oliver Kahn, and J\u00c3\u00bcrgen Klinsmann all played for this team.",
    "options": [
      "Wolfsburg",
      "Bayern Munich",
      "Schalke 04",
      "Bayer Leverkusen"
    ],
    "correctIndex": 1
  },
  {
    "question": "Three of these Al Pacino movies were released in the 1970s. Which one was not?",
    "options": [
      "The Godfather: Part II",
      "The Godfather",
      "Scarface",
      "Serpico"
    ],
    "correctIndex": 2
  },
  {
    "question": "All of these gadgets belong to James Bond except one.  Can you spot it?",
    "options": [
      "Batarang",
      "Cigarette lighter (a disguised timed explosive)",
      "Polarizing Sunglasses",
      "Phone Booth Trap"
    ],
    "correctIndex": 0
  },
  {
    "question": "Complete the title of an 80s song by Duran Duran:",
    "options": [
      "... Thursday",
      "... Monday",
      "... Friday",
      "... See ya soon!"
    ],
    "correctIndex": 1
  },
  {
    "question": "Finish the title of a 1988 movie starring Richard Dreyfuss:  Moon Over _____",
    "options": [
      "Middlesburg",
      "Paraguay",
      "Miami",
      "Parador"
    ],
    "correctIndex": 3
  },
  {
    "question": "Finish the title of a song from the Hit TV Series, The Drew Carey Show.",
    "options": [
      "Pittsburgh",
      "Shaker Heights",
      "Parma",
      "Miamisburg"
    ],
    "correctIndex": 2
  },
  {
    "question": "1973 Pink Floyd album,entitled Dark Side of _____.",
    "options": [
      "... the Sun",
      "... Darkness.",
      "... the Moon",
      "... Parapsychology"
    ],
    "correctIndex": 2
  },
  {
    "question": "Finish the title of a 1903 clasic tune:  Shine on...",
    "options": [
      "...Chrome Fenders",
      "...You Crazy Diamond",
      "...Harvest Moon",
      "...In  The Sunshine"
    ],
    "correctIndex": 2
  },
  {
    "question": "The song Moonriver is featured in the musical Grease, starring John Travolta.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Complete the title to this Credence Clearwater Revival tune: Bad Moon ____.",
    "options": [
      "Falling",
      "Rising",
      "Setting",
      "in Aquarius"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the title of a 1979 James Bond film.",
    "options": [
      "Moonspinners",
      "Moonshadow",
      "Moonraker",
      "Moondogs"
    ],
    "correctIndex": 2
  },
  {
    "question": "Two Moon Junction is the title to a 1988 Robert  Zemeckis film.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Did Frank Sinatra write the classic tune Moonlight Becomes You?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following composers wrote the Moonlight Sonata  for piano?",
    "options": [
      "Ludwig von Beethoven",
      "Claude DeBussey",
      "Wolfgang Amadeus Mozart",
      "Igor Stravinsky"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of Frank Zappas daughter?",
    "options": [
      "Dweezil",
      "Moon Beam",
      "Elektra Moon",
      "Moon Unit"
    ],
    "correctIndex": 3
  },
  {
    "question": "This is the title of a 1996 Tom DiCillo film starring John Turturro.",
    "options": [
      "Sun, Moon and Stars",
      "Lunar Landings",
      "Box of Moonbeams",
      "Box of Moonlight"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Union of Burma changed its name in 1989 to the Union of Myanmar.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Barents Sea is named after a Norwegian god.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The official currency of Israel is the New Israeli sheqel (NIS).",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The French Revolution broke out in 1789.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Charles Johnson was a pioneering United States aviator famous for piloting the first solo non-stop flight across the Atlantic Ocean in 1927.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The husband of Catherine the Great was Peter I.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 800 Philip IV the Fair of France was coronated by the Pope.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The bustard is a frog.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Aurora was the ancient Roman equivalent of Eos.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "An average man inhales about 56,000 liters of air per day.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Polar bears possess extremely good eyesight, compared to most land animal species.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Europe and Latin America, a league is a measurement unit of what physical quantity?",
    "options": [
      "Volume",
      "Weight",
      "Distance",
      "Speed"
    ],
    "correctIndex": 2
  },
  {
    "question": "This notable army officer and renowned general of the Confederate forces during the American Civil War, was the first person to graduate from the oldest military academy in the United States, West Point, with no demerits.",
    "options": [
      "Robert E. Lee",
      "George Patton",
      "Omar Bradley",
      "Dwight D. Eisenhower"
    ],
    "correctIndex": 0
  },
  {
    "question": "Because of his notable achievements as a poet, writer, and independence movement leader, Jose Marti is considered the greatest hero of which country?",
    "options": [
      "Spain",
      "Mexico",
      "Cuba",
      "Argentina"
    ],
    "correctIndex": 2
  },
  {
    "question": "The name of this chemical compound, coined by German-Swiss chemist Christian Friedrich Sch\u00c3\u00b6nbein in 1840, comes from the Greek word for smell.",
    "options": [
      "Silicone",
      "Ozone",
      "Osmium",
      "Aroclor"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first automatic electric traffic light with 3 colors was installed in Detroit, Michigan in what year?",
    "options": [
      "1920",
      "1885",
      "1850",
      "1942"
    ],
    "correctIndex": 0
  },
  {
    "question": "The original name of which city is translated as The Great City of Angels\u00e2\u0080\u009d?",
    "options": [
      "Vadodara",
      "Los Angeles",
      "Bangkok",
      "Bogot\u00c3\u00a1"
    ],
    "correctIndex": 2
  },
  {
    "question": "Three of these religious organisations are notorious for their suicides motivated by religious and spiritual beliefs. Mark the odd one.",
    "options": [
      "Order of the Solar Temple",
      "Peoples Temple",
      "THC Ministry",
      "Heavens Gate"
    ],
    "correctIndex": 2
  },
  {
    "question": "Leather can bring out the best in some females.  Which feline fatale said  Youre the second man who killed me this week but Ive got seven lives left.?",
    "options": [
      "Catwoman",
      "Storm",
      "Daredevil",
      "Miss Kitty"
    ],
    "correctIndex": 0
  },
  {
    "question": "Cute little Gertie from E. T.  was no where in evidence when this actress played a evil Lolita",
    "options": [
      "Drew Barrymore",
      "Brooke Shields",
      "Sara Gilbert",
      "Tatum ONeil"
    ],
    "correctIndex": 0
  },
  {
    "question": "What color is a John Deere tractor?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Black"
    ],
    "correctIndex": 2
  },
  {
    "question": "Both male and female mammals have the ability to produce milk.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Approximately how many pounds of food should a normal adult horse consume in a day?",
    "options": [
      "40-50",
      "15-25",
      "5-10",
      "30-35"
    ],
    "correctIndex": 1
  },
  {
    "question": "When should corn (maize) be planted?",
    "options": [
      "Spring",
      "Winter",
      "Fall",
      "Summer"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was meant by spring chickens in the early 1900s?",
    "options": [
      "young male chickens",
      "old male chickens",
      "young female chickens",
      "old female chickens"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many compartments are in a cows stomach?",
    "options": [
      "6",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which is the largest crop for the Americas?",
    "options": [
      "Corn",
      "Wheat",
      "Soybeans",
      "Milo"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which is the correct name for a horse of either sex under the age of one year?",
    "options": [
      "Colt",
      "Yearling",
      "Mare",
      "Foal"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many square yards are there in an acre of land?",
    "options": [
      "4,350",
      "4,520",
      "4,840",
      "4,130"
    ],
    "correctIndex": 2
  },
  {
    "question": "Goats milk is the most consumed milk in the world.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is Willem J. Kolff credited for inventing?",
    "options": [
      "Artificial kidneys and artificial heart",
      "Computer",
      "Heart-Lung machine",
      "CAT scan"
    ],
    "correctIndex": 0
  },
  {
    "question": "Red fescue is a type of what?",
    "options": [
      "Snake",
      "Tree",
      "Grass",
      "Kangaroo"
    ],
    "correctIndex": 2
  },
  {
    "question": "Why are Charles Dickens books so wordy?",
    "options": [
      "He knew he had a short life and wanted to get everything on paper",
      "He got paid by the word",
      "That was the style of the day",
      "He didnt want anyone to say Please Sir! More gruel!"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is a bo diddley?",
    "options": [
      "A sandwich common to poor people",
      "A rock and roll band",
      "A home-made microphone",
      "A home-made guitar"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which woodwind instrument is not made of wood and has no reeds?",
    "options": [
      "Flute",
      "Clarinet",
      "Oboe",
      "Accordion"
    ],
    "correctIndex": 0
  },
  {
    "question": "Wilhelm Kolff invented what device?",
    "options": [
      "Dialysis machine",
      "Football helmet",
      "Linotype machine",
      "PET scan"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which US state is the city of Truth or Consequences located?",
    "options": [
      "Mexico",
      "Utah",
      "New Mexico",
      "Texas"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many bones does a shark have?",
    "options": [
      "0",
      "103",
      "206",
      "100"
    ],
    "correctIndex": 0
  },
  {
    "question": "On what island does King Kong live?",
    "options": [
      "The Island of no Return",
      "The Forbidden Island",
      "Skull  Island",
      "Crater Island"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who invented the armonica, a musical instrument made up of a series of tuned spinning  bowls?",
    "options": [
      "Sir Edward Elgar",
      "Benjamin Franklin",
      "Dean Shostak",
      "Thomas Edison"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the oldest  symphony  orchestra  in the USA?",
    "options": [
      "The Symphony Orchestra of New   Orleans",
      "The New York Philharmonic",
      "The Boston Philharmonic",
      "The Philadelphia  Philharmonic"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these events happened on April 7, 1927?",
    "options": [
      "The first  long distance Television image was sent.",
      "Adolph Hitler made his infamous first attempt to take over Germany.",
      "The New York Stock Exchange fell 67 points (29% then)",
      "The first Easter Parade in was held in New York  City."
    ],
    "correctIndex": 0
  },
  {
    "question": "Who is Katie Hnida?",
    "options": [
      "The first female to be a  professional boxer",
      "The first female to play NCAA Division 1 football",
      "The first  American female to ride on the Space Shuttle",
      "The first female Prime Minister of Ecuador"
    ],
    "correctIndex": 1
  },
  {
    "question": "What did  engineer James Wright  invent in 1943?",
    "options": [
      "The oral polio vaccine",
      "Silly Putty",
      "The first chemical to repel sharks",
      "Acetate cartoon cells"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1957 Major John Glenn, Jr. set an air speed record for the trip from California to New York. How long did the trip take?",
    "options": [
      "3 hours 23 minutes 8.4 seconds",
      "2 hours 19 minutes 4.8 seconds",
      "1 hours 21 minutes 4.8 seconds",
      "1 hour 56 minutes 8.4 seconds"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which mass murderer was the inspiration for the movie character Norman Bates in Psycho and  for Buffalo Bill in Silence of the Lambs?",
    "options": [
      "Ed Gein",
      "Ted Bundy",
      "Rickie Sperko",
      "Jeffrey Dahmer"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of Ghana before the country gained its independence?",
    "options": [
      "The Belgian Congo",
      "Ivory Coast",
      "The Gold Coast",
      "Limpopo"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the last name of the man credited with inventing the modern bicycle?",
    "options": [
      "Bremen",
      "Michaux",
      "Wright",
      "Turnbull"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where is General George Patton buried?",
    "options": [
      "Normandy, France",
      "Arlington National Cemetery",
      "Washington, D.C.",
      "Luxembourg"
    ],
    "correctIndex": 3
  },
  {
    "question": "This author of popular novels, who was a lecturer at Wellesley College, spoke fluent  English, Russian and French and made chess problems in his spare time.",
    "options": [
      "Brecht",
      "Pasternak",
      "Nabokov",
      "Steinbeck"
    ],
    "correctIndex": 2
  },
  {
    "question": "What did Earl Bakk and Clarence W. Lillehie invent in 1957?",
    "options": [
      "Liquid oxygen jet fuel",
      "Internal heart pacemaker",
      "High Definition Television",
      "Artificial heart"
    ],
    "correctIndex": 1
  },
  {
    "question": "Organic chemistry is the scientific study of the organic compounds that by definition contain which element?",
    "options": [
      "Nitrogen",
      "Carbon",
      "Hydrogen",
      "Oxygen"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements regarding the words imply and infer is correct?",
    "options": [
      "All these statements are true",
      "Imply and infer mean exactly the same thing",
      "The speaker implies, the listener infers",
      "The speaker infers, the listener implies"
    ],
    "correctIndex": 2
  },
  {
    "question": "These two states have Miami Universities.",
    "options": [
      "Florida and Georgia",
      "Florida and Ohio",
      "Florida and Alabama",
      "Florida and North Carolina"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which U.S. President settled the North Western border dispute with Canada and England?",
    "options": [
      "Hayes",
      "Polk",
      "Mckinley",
      "Pierce"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Era of Good Feeling is generally applied to describe the national mood of the United States during which years?",
    "options": [
      "1783 - 1805",
      "1805 - 1820",
      "1825 - 1845",
      "1815 - 1825"
    ],
    "correctIndex": 3
  },
  {
    "question": "In music, what does andante refer to?",
    "options": [
      "Stop",
      "Moderately slow",
      "Lively",
      "Very slowly"
    ],
    "correctIndex": 1
  },
  {
    "question": "Benny Goodman, a great clarinetist, was always compared to this great jazz clarinetist, composer, bandleader, and writer.",
    "options": [
      "Cootie Williams",
      "Art Farmer",
      "Bunny Berrigan",
      "Artie Shaw"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Sudanese/American basketball player and activist, 77 (2.31 m) tall, managed to block 397 shots during the 1985-1986 season, thus setting a rookie record.",
    "options": [
      "Yao Ming",
      "Swede Holbrook",
      "Manute Bol",
      "Wilt Chamberlain"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which U.S. President attempted to purchase Cuba from Spain?",
    "options": [
      "Johnson",
      "Pierce",
      "Tyler",
      "Taylor"
    ],
    "correctIndex": 1
  },
  {
    "question": "Great Britains first test tube baby was born in what year?",
    "options": [
      "1962",
      "1980",
      "1978",
      "1975"
    ],
    "correctIndex": 2
  },
  {
    "question": "Devils on Horseback is a type of food.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who invented the first working television system?",
    "options": [
      "Thomas Edison",
      "Alexander Graham Bell",
      "John Logie Baird",
      "Benjamin Franklin"
    ],
    "correctIndex": 2
  },
  {
    "question": "Since 1815, Switzerland has been involved in only a few wars because of its policy of neutrality.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Indian Ink comes from what country?",
    "options": [
      "Japan",
      "United States",
      "India",
      "China"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of Margaret Mitchell\u00e2\u0080\u0099s only book written in 1936?",
    "options": [
      "Death on the Nile",
      "Double Indemnity",
      "Inherit The Wind",
      "Gone With The Wind"
    ],
    "correctIndex": 3
  },
  {
    "question": "The pink ball is worth 6 points in the game of snooker.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What infectious disease can be transmitted by a mosquito bite?",
    "options": [
      "trichnaria",
      "styorrhea",
      "myharia",
      "malaria"
    ],
    "correctIndex": 3
  },
  {
    "question": "This novel written by German author Herman Hesse was published in 1922.",
    "options": [
      "Nirvana",
      "Siddhartha",
      "Sartaka",
      "Samsara"
    ],
    "correctIndex": 1
  },
  {
    "question": "This term of Indian origin refers to ones fate or destiny, as the result of ones actions.",
    "options": [
      "samsara",
      "sarana",
      "nirvana",
      "karma"
    ],
    "correctIndex": 3
  },
  {
    "question": "A character, played by which of these actors/actresses survived in the movie The Poseidon Adventure?",
    "options": [
      "Red Buttons",
      "Shelly Winters",
      "Stella Stevens",
      "Gene Hackman"
    ],
    "correctIndex": 0
  },
  {
    "question": "The character played by which of these actors/actresses did not survive in the disaster movie The Towering Inferno?",
    "options": [
      "Steve McQueen",
      "Susan Blakely",
      "Paul Newman",
      "Robert Wagner"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which cast member of the TV drama Dallas starred in the film Earthquake?",
    "options": [
      "Larry Hagman",
      "Victoria Principal",
      "Patrick Duffy",
      "Mary Crosby"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the movie Armageddon, the character played by Ben Affleck takes the place of Harry S. Stamper, portrayed by Bruce Willis and detonates the bomb that splits the asteroid in two.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the special speaker system used during the 1974 theatrical release of the movie Earthquake?",
    "options": [
      "Tremor speaker simulators",
      "Seismaseats",
      "Sensurround",
      "Tremorsound"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which actor/actress who starred in the film The Poseidon Adventure appeared in the TV series The Hardy Boys/Nancy Drew Mysteries?",
    "options": [
      "Pamela Sue Martin",
      "Pamela Sue Anderson",
      "Roddy McDowell",
      "David Cassidy"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the cause of the fire in the movie The Towering Inferno?",
    "options": [
      "Short circuit in the elevator shaft",
      "A loose lid on a can of kerosene stored in a closet",
      "Faulty electrical wiring",
      "Arson"
    ],
    "correctIndex": 2
  },
  {
    "question": "A cat that was trapped in one of the burning rooms in The Towering Inferno was rescued by security guard played by  O.J. Simpson.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What contributed to the quick tipping over of the luxury ocean liner in the movie The Poseidon Adventure?",
    "options": [
      "There was not enough ballast",
      "Shelley Winters was too close to the starboard side of the boat",
      "Not enough speed when the wall of water hit",
      "Engines were at full power too long so they shut down"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these actors/actresses did not star in the movie Earthquake?",
    "options": [
      "Lorne Greene",
      "Charlton Heston",
      "Ava Gardner",
      "Fred Astaire"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who played the last juror to vote not  guilty in the 1957 movie Twelve Angry Men?",
    "options": [
      "Ed Begley",
      "Lee J. Cobb",
      "Martin Balsam",
      "Ed Begley,Jr."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these famous people  was not an epileptic?",
    "options": [
      "Otto von Bismarck",
      "Vladimir Ilyich Lenin",
      "Rudi Dutschke",
      "F.M. Dostoevsky"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which was the first country to win two consecutive FIFA World Cups in 1958 and 1962?",
    "options": [
      "Italy",
      "France",
      "Argentina",
      "Brazil"
    ],
    "correctIndex": 3
  },
  {
    "question": "Jose Raul Capablanca of Cuba was the first person from the Western Hemisphere to do what?",
    "options": [
      "Be President of the U.N. General  Assembly",
      "Win the World Chess Championship",
      "Win an Olympic  baseball game",
      "Win the Nobel Prize for Literature"
    ],
    "correctIndex": 1
  },
  {
    "question": "Why was a performance by Bob Dylan interrupted in 1998?",
    "options": [
      "A shirtless man with the words Soy Bomb written on his chest leapt on stage.",
      "His lyrics did not pass the decency level required by CBS Television.",
      "Tom Petty had not made it into the stage in time to play the musical bridge in the song.",
      "The show ran 15 minutes over and ABC Television had gone to the evening news."
    ],
    "correctIndex": 0
  },
  {
    "question": "You go into a diner and  you hear the  waitress yell out Cats Eyes. What has someone just ordered?",
    "options": [
      "a breakfast of steak and two eggs",
      "strawberries and cream",
      "tapioca",
      "sunny side eggs"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Peace Symbol, which became an icon of the 1960s anti-war movement, derives from what?",
    "options": [
      "a slightly twisted cross",
      "None of these",
      "two semaphoric signals",
      "an image of a nuclear bomber"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which battleship was used by the US Navy during World War II, the Korean War, and the Vietnam War?",
    "options": [
      "USS New Jersey (BB-62)",
      "USS Arizona (BB-39)",
      "USS Missouri (BB-63)",
      "USS Iowa (BB-61)"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to the Christian  tradition there are 39 books in the Old Testament. How many books are there in the Old Testament according to the Jewish tradition?",
    "options": [
      "39",
      "5",
      "24",
      "65"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first Major League Baseball player born in what was then called Czechoslovakia?",
    "options": [
      "Reno Bertoia",
      "Ernie Orvitz",
      "Elmer Valo",
      "Andy Pafko"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which song was Billy Joels first US Top Ten Hit?",
    "options": [
      "Moivin Out",
      "Just the Way You Are",
      "Piano Man",
      "Shes  Got A Way"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this 2005 documentary film a  large number of famous comedians show how they tell one particular dirty joke.",
    "options": [
      "The Aristocrats",
      "Dirty Rotten Scoundrel",
      "The Elegants",
      "Down and Dirty Comics"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where does the word Rastafarian come from?",
    "options": [
      "It comes from a Taino name",
      "The name of a song",
      "The real name of a king",
      "It means the good religion"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where did the word Melba come from, as in Melba toast and Peach Melba?",
    "options": [
      "The name of the wife of the owner of Cunard Cruise Line.",
      "The name of  the proprietress of Del Monicos Steak House.",
      "The name of Henry Fords wife",
      "The name of an Australian singer"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is the only President who had a patent?",
    "options": [
      "Hoover",
      "Lincoln",
      "Jefferson",
      "Washington"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which US President invented the baseball seventh inning stretch?",
    "options": [
      "Hoover",
      "Taft",
      "Wilson",
      "Harding"
    ],
    "correctIndex": 1
  },
  {
    "question": "To whom did the inventor of the typewriter sell his patent?",
    "options": [
      "A maker of guns",
      "A sewing machine company",
      "Thomas A. Edison",
      "The US government"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which if these is an area in Iraq, and a pilgrimage place for some Muslims?",
    "options": [
      "Tikrit",
      "Mosul",
      "Basra",
      "Karbala"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the mathematical term for the shape of a footballs path, when thrown form one player to another?",
    "options": [
      "Parabola",
      "Catenary",
      "Hyperbola",
      "Ellipse"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who wrote the opera Mozart et Salieri?",
    "options": [
      "Berlioz",
      "Bizet",
      "Rimsky-Korsakov",
      "Saint-Saiens"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Magna Carta went into effect in 1215.  Who signed it?",
    "options": [
      "Eleanor of Aquitaine",
      "King John aka John Lackland",
      "nobody",
      "King Richard the Lion Hearted"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who invented the doll that says Momma?",
    "options": [
      "Henry Ford",
      "Benjamin Banneker",
      "Alexander Graham Bell",
      "Thomas Alva Edison"
    ],
    "correctIndex": 2
  },
  {
    "question": "Find the odd one.",
    "options": [
      "Taurus",
      "Libra",
      "Capricorn",
      "Leo"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following animals is the odd one?",
    "options": [
      "Ram",
      "Hen",
      "Doe",
      "Vixen"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is the the odd one?",
    "options": [
      "Narcissus",
      "Amethyst",
      "Rose",
      "Daisy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which number is the odd one out?",
    "options": [
      "11780",
      "13491",
      "17462",
      "15183"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the odd one.",
    "options": [
      "Viper",
      "Vixen",
      "Adder",
      "Cobra"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is the the odd one?",
    "options": [
      "Wooden",
      "Steel",
      "Lace",
      "Silk"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is the odd one out?",
    "options": [
      "Carnelian",
      "Jonquil",
      "Beryl",
      "Jasper"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following months is the odd one?",
    "options": [
      "April",
      "December",
      "May",
      "July"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these names the odd one?",
    "options": [
      "Ramon Magsaysay",
      "Sergio Osme\u00c3\u00b1a Sr.",
      "Ferdinand Marcos",
      "Elpidio Quirino"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is another name for Ursa Major?",
    "options": [
      "The Great Bear",
      "The Great Tiger",
      "The Great Lion",
      "The Great Boar"
    ],
    "correctIndex": 0
  },
  {
    "question": "September 3rd through 13th in the year 1752 did not exist.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the animals listed below has the longest gestation period?",
    "options": [
      "Rhinoceros",
      "Tiger",
      "Elephant",
      "Boar"
    ],
    "correctIndex": 2
  },
  {
    "question": "What would you be eating if you were served Angels on Horseback?",
    "options": [
      "Prunes wrapped in bacon",
      "Clams wrapped in ham",
      "Oysters wrapped in bacon",
      "Shrimp wrapped in chicken"
    ],
    "correctIndex": 2
  },
  {
    "question": "There are only 10 weight classes in male professional boxing.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which planet is 5th from the sun?",
    "options": [
      "Jupiter",
      "Saturn",
      "Mars",
      "Earth"
    ],
    "correctIndex": 0
  },
  {
    "question": "How old was Bobby Fischer when he won the US chess championship on January 8th 1958?",
    "options": [
      "12",
      "14",
      "22",
      "19"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the previous name of the Los Angeles Dodgers?",
    "options": [
      "The Kansas City Dodgers",
      "The Brooklyn Dodgers",
      "The Bronx Dodgers",
      "The Baltimore Dodgers"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1958, Pope Pius XII designated an Italian saint as the patron saint for television.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How much did Harvard Universitys tuition and fees total for the 1958-1959 school year?",
    "options": [
      "$2,925",
      "$3,225",
      "$1,250",
      "$5,110"
    ],
    "correctIndex": 2
  },
  {
    "question": "On the popular TV show The Honeymooners, Ralph worked as a bus driver for this fictional company.",
    "options": [
      "Cityline Bus Company",
      "Red and Tan Bus Company",
      "Metro Bus Company",
      "Gotham Bus Company"
    ],
    "correctIndex": 3
  },
  {
    "question": "When was Kevin Bacon born?",
    "options": [
      "July 8th 1958",
      "May 8th 1958",
      "April 8th 1960",
      "April 8th 1959"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who won the 1958 Academy Award for Best Actress?",
    "options": [
      "Helen Hayes",
      "Susan Hayward",
      "Althea Gibson",
      "Wendy Miller"
    ],
    "correctIndex": 1
  },
  {
    "question": "What singer won the 1958 Grammy Award for Best Male Vocal Performance?",
    "options": [
      "Perry Como for the song Catch a Falling Star",
      "Bobby Darin for the song Dream Lover",
      "Domenico Mondugno for the song Nel Blu Dipinto",
      "Dick Dale for the song Lets Go Tripping"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was Vice President under President Dwight D. Eisenhower, when the Alaska Statehood Act was signed?",
    "options": [
      "Richard Nixon",
      "Nelson  A Rockafeller",
      "Brian V Mitchell",
      "John L Truman"
    ],
    "correctIndex": 0
  },
  {
    "question": "Hammerfest, which is often referred to as the northernmost town in Europe, is located in this Scandinavian country.",
    "options": [
      "Finland",
      "Switzerland",
      "Sweden",
      "Norway"
    ],
    "correctIndex": 3
  },
  {
    "question": "How large is one micron?",
    "options": [
      "one million meters",
      "one millionth of a kilometer",
      "one million kilometers",
      "one millionth of a meter"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who killed Achilles according to Greek mythology?",
    "options": [
      "Hector aided by the Nereids",
      "Priam aided by Paris",
      "Peleus aided by Thetis",
      "Paris aided by Apollo"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which Latin expression means actions speak louder than words?",
    "options": [
      "quid edere  posseum",
      "mei capelli sunt  flagrantes",
      "non rape me si placet",
      "facta non verba"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which one of these statements was not made by economist Milton Friedman?",
    "options": [
      "Hell hath no fury like a bureaucrat scorned.",
      "Inflation is one form of taxation that can be  imposed without legislation.",
      "For the bureaucrat the world is  a mere object to be manipulated by him.",
      "Governments never learn. Only people learn."
    ],
    "correctIndex": 2
  },
  {
    "question": "The person who developed the popular game Sudoku was from which country?",
    "options": [
      "Switzerland",
      "South Korea",
      "Malaysia",
      "Japan"
    ],
    "correctIndex": 0
  },
  {
    "question": "This red herbivorous mammal is endangered because of habitat loss and human interference.",
    "options": [
      "The Indian Red Badger",
      "Lesser Panda",
      "The Red Fox",
      "The  Asian  Red  Squirrel"
    ],
    "correctIndex": 1
  },
  {
    "question": "This programming language that allowed non-scientists to use computers was developed in 1963 by John Kemeny and Thomas Kurtz.",
    "options": [
      "BASIC",
      "PASCAL",
      "COBOL",
      "Visual BASIC"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many prime numbers are smaller than 23?",
    "options": [
      "8",
      "0",
      "11",
      "12"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is the last name of the two brothers who have each won the Cy Young Award given to the best Major League Baseball pitchers?",
    "options": [
      "Perry",
      "Niekro",
      "Dean",
      "Hernandez"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which month is United States Aquarium Month, Candy Month, Dairy Month and Turkey Lovers Month?",
    "options": [
      "June",
      "November",
      "August",
      "October"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which French artist is considered the founder of Fauvism?",
    "options": [
      "Klee",
      "Monet",
      "Matisse",
      "Manet"
    ],
    "correctIndex": 2
  },
  {
    "question": "When Lincoln delivered his Gettysburg Address he was not  the main speaker. Who was the main speaker?",
    "options": [
      "General Grant",
      "Edward Everett",
      "Mrs. Lincoln",
      "General Meade"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these events came first?",
    "options": [
      "The completion of he first standardized French dictionary",
      "The completion of the first standard English dictionary",
      "The completion of he first standardized Italian dictionary",
      "The first use of the word scientist"
    ],
    "correctIndex": 2
  },
  {
    "question": "The newton (N), named after Sir Isaac Newton in recognition of his work on classical mechanics, is a unit measuring what?",
    "options": [
      "Mass",
      "Speed",
      "Force",
      "Weight"
    ],
    "correctIndex": 2
  },
  {
    "question": "John Howard Lawson, Herbert Biberman, Albert Maltz, Adrian Scott, Sam Ornitz, Dalton Trumbo, Ed Dmytryk, Ring Lardner Jr, Alvah Bessie, and Lester Cole made short speeches to denounce McCarthyism. All of them belonged to a group, known by what name?",
    "options": [
      "The ten spies of the CIA",
      "The ten players of Dr. James Naismith",
      "The Hollywood Ten",
      "The ten judges at the Nuremburg Trials"
    ],
    "correctIndex": 2
  },
  {
    "question": "He reigned until 1725 and carried out a policy of Westernization and expansion, that transformed his country into a major European power.",
    "options": [
      "Peter the Great",
      "Augustus II of Poland",
      "Kemal Ataturk",
      "Frederich the Great"
    ],
    "correctIndex": 0
  },
  {
    "question": "This small, distinct religious community, whose religion resembles Islam, but is influenced by Greek philosophy and other religions, is based mostly in the Middle East. Its members call themselves the People of Monotheism.",
    "options": [
      "The Druze",
      "The Zoroastrians",
      "The Waldentseinians",
      "The BeHab"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Spanish playwright and poet, author of The Dog in the Manger and The Widow from Valencia,  maintained that a writers business is to write so as to make himself understood.",
    "options": [
      "Oscar Nareda",
      "Lope de Vega",
      "Jose Ortega y Gassett",
      "Humberto Robinson"
    ],
    "correctIndex": 1
  },
  {
    "question": "This English shipbuilder, merchant and navigator, whose innovative measures made the new English ships fast and highly maneuverable, was one of the main commanders of the English fleet against the Spanish Armada in 1588.",
    "options": [
      "Martin Hawkins",
      "John Hawkins",
      "Francis Hawkins",
      "William Blake"
    ],
    "correctIndex": 1
  },
  {
    "question": "This form of traditional Japanese theater, which aims to make the audience laugh, is characterised by brief plays, stock characters and exaggerated dialogue.",
    "options": [
      "Kabuki",
      "Lo fat",
      "Kyogen",
      "Noh"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Dutch naval officer, who became a folk hero during the Eighty Years War between the Dutch republic and Spain, sailed out to capture the Spanish treasure fleet in 1628.",
    "options": [
      "Pieter Heyn",
      "Heindrich Van Duten",
      "Henry Hudson",
      "Petyr Stuvessant"
    ],
    "correctIndex": 0
  },
  {
    "question": "The first screen kiss was seen in the short movie The Kiss, shown in what year?",
    "options": [
      "1919",
      "1882",
      "1912",
      "1896"
    ],
    "correctIndex": 3
  },
  {
    "question": "Rene Descartes, who is given credit for the invention of analytic geometry in 1637, may have been preceded in this regard by which French mathematician?",
    "options": [
      "Fourier",
      "Fermat",
      "LaPLace",
      "LaGrange"
    ],
    "correctIndex": 1
  },
  {
    "question": "A war, which was condemned by the United Nations, was fought in 1982 over a group of islands between which two countries?",
    "options": [
      "Grenada and the USA",
      "Panama and the USA",
      "Argentina and Great Britain",
      "Chile and Argentina"
    ],
    "correctIndex": 2
  },
  {
    "question": "In chemistry, this term refers to two elements with the same atomic number, but different atomic weights.",
    "options": [
      "Isotopes",
      "Alleles",
      "Isochronics",
      "Isosceles"
    ],
    "correctIndex": 0
  },
  {
    "question": "This ancient thinker, who was the first person to propose a heliocentric model of the Solar system,  considered that the Earth revolves around the Sun.",
    "options": [
      "Aristades",
      "Hippachus",
      "Heron",
      "Aristarchus"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which geographical term describes a geological formation that slopes down from the center in all directions?",
    "options": [
      "Quean",
      "Quassia",
      "Quaquaversal",
      "Quartan"
    ],
    "correctIndex": 2
  },
  {
    "question": "This US National Park, famous for its mineral waters, is located in southeastern Oklahoma, near the city of Sulphur.",
    "options": [
      "Hot Springs",
      "Yellowstone",
      "Platt",
      "Mesa Verde"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Mars family were the richest American family of 1988, according to Fortune magazine.  They named one of their most successful products after their horse, who was named what?",
    "options": [
      "Snickers",
      "Bounty",
      "MM",
      "Corny"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1915, the great American baseball player of the 1920s, Babe Ruth, hit his first home against which team?",
    "options": [
      "The Yankees",
      "The Red Stockings",
      "The White Sox",
      "The Red Sox"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1982, this major Japanese car manufacturer was the first one to begin production of Japanese cars in the USA.",
    "options": [
      "Mazda",
      "Honda",
      "Toyota",
      "Mitsubishi"
    ],
    "correctIndex": 1
  },
  {
    "question": "You can get lead poisoning from a modern pencil.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year were pencils first mass-produced?",
    "options": [
      "1662 A.D.",
      "476 A.D.",
      "1812 A.D.",
      "1821 A.D."
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is not among the reasons for which most pencils are yellow?",
    "options": [
      "To show that they come from China",
      "To make them easier to see on a desk top",
      "To show that they are top quality",
      "To copy the style of the first pencils made in the USA"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is a real event  in the history of the pencil?",
    "options": [
      "The discovery of rubber in Malaysia in 1823",
      "The discovery of lead in what is now Turkey, ca. 573 A.D.",
      "The discovery that cedar wood has three times the tensile strength of any other wood",
      "The discovery of graphite in Seathwaite, Burrowdale, England"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the famous American writer  whose first job was selling and making pencils?",
    "options": [
      "Henry David Thoreau",
      "John Steinbeck",
      "Benjamin Franklin",
      "Nathaniel Hawthorne"
    ],
    "correctIndex": 0
  },
  {
    "question": "This famous American writer wrote all of the novel Cannery Row in pencil. He claimed to have used 60 pencils a day for his writings.",
    "options": [
      "John Steinbeck",
      "Henry David Thoreau",
      "Ernest Hemingway",
      "Nathaniel Hawthorne"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the first manned rocket flights into space, pencils, not pens, were given to the cosmonauts and astronauts. Why?",
    "options": [
      "They were less dangerous because they contained no metal.",
      "Pencils can write in zero gravity.",
      "They were less affected by lower amounts of oxygen.",
      "Pencils are lighter than pens."
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately how many pencils are sold annually in the USA?",
    "options": [
      "500,000,000",
      "2,000,000,000",
      "200,000,000",
      "20,000,000"
    ],
    "correctIndex": 1
  },
  {
    "question": "A great step forward in the world of pencils was made in 1858. What was it?",
    "options": [
      "Sears-Roebuck began selling pencils in their catalog.",
      "Hyman Lipman began putting an eraser on the end of pencils.",
      "Sarah Teasdale Wallace patented the first indelible pencil.",
      "Irving Kellogg Watson patented the first drawing pencils in different colors."
    ],
    "correctIndex": 1
  },
  {
    "question": "If your pencil has a pinkish grain and little or no smell, then it is probably made from which substance?",
    "options": [
      "incense-cedar",
      "tropical rainforest wood",
      "plastic",
      "non-incense-cedar"
    ],
    "correctIndex": 2
  },
  {
    "question": "If your pencil has a  reddish brown grain and a smell, what does that usually indicate?",
    "options": [
      "It is made of  incense-cedar.",
      "It is made from non-incense-cedar.",
      "It is made from plastic.",
      "It is made of rainforest wood."
    ],
    "correctIndex": 0
  },
  {
    "question": "What happened in the pencil world in 1822?",
    "options": [
      "The eraser was put onto the pencil.",
      "Pencils were made with clips to hold onto a  pocket.",
      "Pencils that wrote in different colors were made.",
      "The mechanical pencil was invented."
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is P.L. Travers most famous literary character?",
    "options": [
      "Frankenstein",
      "Mary Poppins",
      "Scrooge",
      "Scarlett OHara"
    ],
    "correctIndex": 1
  },
  {
    "question": "What event did the terrorists target in the 1977 movie Black Sunday?",
    "options": [
      "Super Bowl",
      "Democratic Convention",
      "Times Square Ball Drop",
      "Macys Thanksgiving Parade"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the occupation of The Greatest American Hero, according to the TV show?",
    "options": [
      "Police officer",
      "Taxi driver",
      "Deep diver",
      "High school teacher"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to the popular song, in what city is the House of the Rising Sun located?",
    "options": [
      "Lexington",
      "New Orleans",
      "San Francisco",
      "Dallas"
    ],
    "correctIndex": 1
  },
  {
    "question": "What color is Johnnie Walkers jacket?",
    "options": [
      "Brown",
      "Pink",
      "Red",
      "Blue"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to a popular 1960s slogan, where would you meet the nicest people?",
    "options": [
      "At the AMC theaters",
      "On a Honda",
      "At Macys",
      "In Las Vegas"
    ],
    "correctIndex": 1
  },
  {
    "question": "On TV, what was the name of Sergeant Prestons horse?",
    "options": [
      "Videl",
      "Rex",
      "Max",
      "Hopper"
    ],
    "correctIndex": 1
  },
  {
    "question": "What movie popularied the phrase Make My Day?",
    "options": [
      "Die Hard",
      "Midnight Run",
      "Total Recall",
      "Sudden Impact"
    ],
    "correctIndex": 3
  },
  {
    "question": "The ending of what Steven Spielberg movie takes place at Devils Tower?",
    "options": [
      "Close Encounters of the Third Kind",
      "E.T: The Extra-Terrestrial",
      "Raiders of the Lost Ark",
      "Saving Private Ryan"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was Shakespeares last play?",
    "options": [
      "A Lovers Complaint",
      "Romeo and Juliet",
      "The Winters Tale",
      "The Tempest"
    ],
    "correctIndex": 3
  },
  {
    "question": "An albatross can fly all day without flapping its wings.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How tall is Chicago\u00e2\u0080\u0099s Sears Tower?",
    "options": [
      "1095 ft (334 m)",
      "1811 ft (552 m)",
      "1211 Ft (369 m)",
      "1453 ft (443 m)"
    ],
    "correctIndex": 3
  },
  {
    "question": "What 1951 film did Humphrey Bogart win an Oscar for?",
    "options": [
      "The Barefoot Contessa",
      "The Caine Mutiny",
      "African Queen",
      "Casablanca"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of Henry VIII\u00e2\u0080\u0099s wives outlived him?",
    "options": [
      "Catharine of Aragon",
      "Anne Boleyn",
      "Catharine Parr",
      "Jane Seymour"
    ],
    "correctIndex": 2
  },
  {
    "question": "The hands and feet have the most bones in the human body.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This actor, whose autobiography was called My Wicked Wicked Ways, starred in the movies Adventures of Robin Hood (1938), Istanbul (1957) and They Died with Their Boots On (1941).",
    "options": [
      "Claude Rains",
      "Errol Flynn",
      "Anthony Quinn",
      "George Reeves"
    ],
    "correctIndex": 1
  },
  {
    "question": "What substance do South American Indians use on the tips of their poison darts?",
    "options": [
      "ammonia",
      "Metrazol",
      "curare",
      "snake venom"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these movies did not win 11 Academy Awards?",
    "options": [
      "The Lord of the Rings: The Return of the King",
      "Braveheart",
      "Titanic",
      "Ben Hur"
    ],
    "correctIndex": 1
  },
  {
    "question": "There is no country in the world whose name begins with this letter of the alphabet.",
    "options": [
      "O",
      "Q",
      "Y",
      "X"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following people was not awarded the Nobel Peace Prize?",
    "options": [
      "Marthin Luther King Jr.",
      "John Paul II",
      "Nelson Mandela",
      "Yasser Arafat"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these US states is not named after a river?",
    "options": [
      "Illinois",
      "Alabama",
      "Iowa",
      "Colorado"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these cities is not a capital of a country in the European Union?",
    "options": [
      "Warsaw",
      "Copenhagen",
      "Lisbon",
      "Zurich"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is not an actual name of a sea?",
    "options": [
      "Red Sea",
      "Yellow Sea",
      "White Sea",
      "Blue Sea"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is not an American writer?",
    "options": [
      "Eugene ONeill",
      "Ernest Hemingway",
      "Joseph Conrad",
      "John Steinbeck"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following battles was not fought during World War Two?",
    "options": [
      "Battle of Guadalcanal",
      "Battle of Kursk",
      "Battle of Jutland",
      "Battle of Tobruk"
    ],
    "correctIndex": 2
  },
  {
    "question": "The flag of which of the countries listed below is not red and white?",
    "options": [
      "Poland",
      "Jamaica",
      "Turkey",
      "Japan"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is not  a prime number?",
    "options": [
      "13",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 3
  },
  {
    "question": "The ancient Roman Empire stretched from modern day Great Britain to Egypt. Which present day country was not part of the Roman Empire?",
    "options": [
      "Poland",
      "Tunisia",
      "Turkey",
      "France"
    ],
    "correctIndex": 0
  },
  {
    "question": "What country has a plain green flag?",
    "options": [
      "Lithuania",
      "Libya",
      "Ireland",
      "Dominica"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to Leonardo da Vinci the color green represented what?",
    "options": [
      "water",
      "wealth",
      "wisdom",
      "earth"
    ],
    "correctIndex": 0
  },
  {
    "question": "Emerald is the birthstone for this month.",
    "options": [
      "May",
      "September",
      "April",
      "July"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the movie The Green Mile, Tom Hanks plays Paul Edgecomb, but he was not the first choice for the role. Who was originally considered for the role?",
    "options": [
      "George Clooney",
      "John Travolta",
      "Bruce Willis",
      "Tim Robbins"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to legend, each leaflet of a 4-leaf clover has a meaning. What does the 1st leaf mean?",
    "options": [
      "Luck",
      "Hope",
      "Strength",
      "Prosperity"
    ],
    "correctIndex": 1
  },
  {
    "question": "Wally the Green Monster is the mascot for which sports team?",
    "options": [
      "Cincinnati Reds",
      "Baltimore Orioles",
      "Boston Red Sox",
      "Chicago White Sox"
    ],
    "correctIndex": 2
  },
  {
    "question": "What album was released by the rock band Weezer in 2001?",
    "options": [
      "The Green Album",
      "Greenage",
      "Rock it Green",
      "Greenation"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Green Lantern is a Marvel comics superhero with a power ring which enables him to control the physical world for as long as his willpower allows.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of person is described by the expression green around the gills?",
    "options": [
      "Physically ill",
      "New at fishing",
      "Gardner novice",
      "Jealous over someone"
    ],
    "correctIndex": 0
  },
  {
    "question": "Zoophobias are some of the most widespread abnormal fears. Which of the following is not a fear associated with animals?",
    "options": [
      "Neophobia",
      "Entomophobia",
      "Cynophobia",
      "Felinophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "This phobia forces people indoors.",
    "options": [
      "Phagophobia",
      "Necrophobia",
      "Heliophobia",
      "Erythrophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Arrange the listed phobias in the following order: fear of clowns, fear of speaking in public, fear of smells, fear of needles.",
    "options": [
      "Osmophobia, Coulrophobia, Trypanophobia, Glossophobia",
      "Glossophobia, Osmophobia, Trypanophobia, Coulrophobia",
      "Coulrophobia, Glossophobia, Osmophobia, Trypanophobia",
      "Trypanophobia, Glossophobia, Osmophobia, Coulrophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does a person who has a gymnophobia fear?",
    "options": [
      "Closed spaces",
      "Nudity",
      "Rivers",
      "Bright colours"
    ],
    "correctIndex": 1
  },
  {
    "question": "Three of the following terms mean one and the same thing - fear of storms. Which is the forth one that is related to sleep?",
    "options": [
      "Keraunophobia",
      "Clinophobia",
      "Brontophobia",
      "Astraphobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following words is a synonym of paraskevidekatriaphobia (fear of Friday the 13th)?",
    "options": [
      "Aphenphosmphobia",
      "Friggatriskaidekaphobia",
      "Triskaidekaphobia",
      "Arachnophobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which word refers to the fear of long words?",
    "options": [
      "Ornithophobia",
      "Hippopotomonstrosesquippedaliophobia",
      "Radiophobia",
      "Hexakosioihexekontahexaphobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following words is related to phobias?",
    "options": [
      "Irrationality",
      "Strength",
      "Genetic",
      "Popularity"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which world denotes a phobia of a small rodent?",
    "options": [
      "Technophobia",
      "Entomophobia",
      "Ophidiophobia",
      "Musophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following terms refers to the fear of being buried alive?",
    "options": [
      "Gephyrophobia",
      "Phagophobia",
      "Taphephobia",
      "Mysophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Hundred Years War -- a series of related conflicts between France and England, started in 1337 and lasted how many years?",
    "options": [
      "100",
      "115",
      "117",
      "116"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the 1957 movie classic, 12 Angry Men, after a preliminary vote it becomes clear that only one of the jurors, Davis, does not see the open and shut nature of the case.  What is Davis juror number and what is his profession?",
    "options": [
      "Juror #8, an architect",
      "Juror #2, a bank clerk",
      "Juror #12, an advertising executive",
      "Juror #10, a garage owner"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to Luke 6:13, Jesus called unto him his disciples, and of them he chose twelve, whom also he named apostles.  Which one did Jesus not choose?",
    "options": [
      "Judas Iscariot",
      "Thomas",
      "Mark",
      "Thaddaeus"
    ],
    "correctIndex": 2
  },
  {
    "question": "Listen to the audio and name the performer.",
    "options": [
      "Phil Collins",
      "David Bowie",
      "John Lennon",
      "Freddie Mercury"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1867, Alfred Nobel introduced the first Pyrotechnic Fuse blasting cap, using what primary explosive to detonate dynamite?",
    "options": [
      "Lead azide",
      "Mercury fulminate",
      "Hydrogen peroxide",
      "Black powder"
    ],
    "correctIndex": 1
  },
  {
    "question": "Buddhism, a religion and philosophy based on the teachings of Siddh\u00c4\u0081rtha Gautama, traces its origins to which country?",
    "options": [
      "Taiwan",
      "Thailand",
      "India",
      "China"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many stars are there on the flag of New Zealand?",
    "options": [
      "22",
      "6",
      "0",
      "4"
    ],
    "correctIndex": 3
  },
  {
    "question": "German-born princess, Sophie Augusta Fredericka of Anhalt-Zerbst, reigned as Empress of what country, from June 28, 1762 until her death?",
    "options": [
      "France",
      "England",
      "Austria",
      "Russia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Until its replacement by the EMS scale, the Medvedev-Sponheuer-K\u00c3\u00a1rn\u00c3\u00adk scale was the most commonly applied scale in Europe, used to measure what?",
    "options": [
      "Hurricane intensity",
      "Wind speed",
      "Ultraviolet radiation",
      "Earthquake intensity"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the legislative branch of the federal government of the United States.",
    "options": [
      "The Senate",
      "The Supreme Court",
      "The Congress of the United States",
      "The House of Representatives"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the Spring of 1967, this city was 700 acres of rock and timber.  In a little more than 6 months it would be transformed in a high-tech city.  It was comissioned by a company, whose mission was simple - to build the biggest and fastest subsonic commercial jetliner ever constructed.",
    "options": [
      "Greenbank, Washington",
      "Walla Walla, Washington",
      "Everett, Washington",
      "Olympia, Washington"
    ],
    "correctIndex": 2
  },
  {
    "question": "To build the 747, The Boeing Co. needed to design and construct a large number of tools.  Approximately how many?",
    "options": [
      "170 000",
      "1 800",
      "270 000",
      "45 000"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Boeing 747 project was so big, that there were no buildings that could house it.  Boeing constructed the largest building in the world for this purpose.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The total assembly of the Boeing 747 would require how many individually numbered and catalogued parts?",
    "options": [
      "300 000",
      "4 000 000",
      "5 000 000",
      "500 000"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Boeing 747 project was bankrolled by the President of an airline company, when in 1965 a downpayment of $250,000,000 was made.  Which was the airline company?",
    "options": [
      "American Airlines",
      "Pan American",
      "Delta",
      "United"
    ],
    "correctIndex": 1
  },
  {
    "question": "The incredibles was a term used during the production of 747 referring to what?",
    "options": [
      "The airlines which put downpayments and helped jumpstart the project",
      "The significant others of the workers",
      "The 20 000 contractors helping Boeing",
      "The rugged team of workers"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first 747 was due to roll out of the production line in which year?",
    "options": [
      "1969",
      "1972",
      "1970",
      "1971"
    ],
    "correctIndex": 0
  },
  {
    "question": "The 747 was the second airplane designed with a cockpit above the deck.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The tail assembly of 747 stands the height of a building of approximately how many stories?",
    "options": [
      "approx. 8 stories",
      "approx. 6 stories",
      "approx. 4 stories",
      "approx. 2 stories"
    ],
    "correctIndex": 1
  },
  {
    "question": "The original 747  was fitted with what kind of jet engines?",
    "options": [
      "General Electric CF6-80C2B1F",
      "Pratt  Whitney JT9D-3",
      "Rolls Royce RB211-524G",
      "Kuznetsov NK-82 turbofans"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first  guest on The Tonight Show  when Johnny Carson was the host?",
    "options": [
      "Bette Midler",
      "Bob Hope",
      "Groucho Marx",
      "Steve Allen"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which statement is not correct?",
    "options": [
      "Kermit the Frog spoke at the funeral of ventriloquist Edgar Bergen.",
      "A cord of wood is 128 cubic feet of wood.",
      "Isaac Van Amburgh is given credit as the first performer to put his head into the mouth of a  living lion.",
      "James Bartley was swallowed whole by a whale, but was rescued and lived another 35  years."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which famous writer introduced the term moron into everyday vocabulary?",
    "options": [
      "Moliere",
      "Voltaire",
      "Shakespeare",
      "Dickens"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first guest host on NBCs Saturday Night Live?",
    "options": [
      "John  Goodman",
      "Howard Cosell",
      "George Carlin",
      "Steve Martin"
    ],
    "correctIndex": 2
  },
  {
    "question": "What do Ronald Reagan, King Henry VIII, Charles Lindbergh, Jerry Stiller, Mel Brooks, and William Shakespeare have in common?",
    "options": [
      "Each can trace his genealogy to Germany.",
      "Each had a sibling named Jane.",
      "Each was married to a woman named  Anne.",
      "Each one was born in a  year ending in a 9."
    ],
    "correctIndex": 2
  },
  {
    "question": "Three of these statements are urban legends. Which is the true statement?",
    "options": [
      "Jackie Robinson was court-martialed because he would not sit in the back of a military bus.",
      "The life span for a tiger in captivity is the same as it is in nature.",
      "Based on the writings in his diaries, Abner Doubleday is given credit for inventing the rules of modern baseball.",
      "Jackie Robinson won the first Rookie of the year Award in 1947."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which list contains the three species of Zebras?",
    "options": [
      "gray zebra, red zebra, plains zebra",
      "mountain zebra, savannah zebra, southern zebra",
      "Garveys zebra, Darwins zebra, gray zebra",
      "Grevys zebra, plains zebra, mountain zebra"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who had Solomons wisdom, Hercules strength, Atlas stamina, Zeus power, Achilles courage, and Mercurys speed?",
    "options": [
      "Captain Marvel",
      "Captain America",
      "The Hulk",
      "Superman"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement is false?",
    "options": [
      "FDR is famous for saying Nothing is so much to be feared as fear.",
      "O.Henry  founded a humorous weekly paper named The Rolling Stone.",
      "Henry David Thoreau is famous for saying Nothing is so much to be feared as fear.",
      "Tennessee Williams was born in Mississippi."
    ],
    "correctIndex": 0
  },
  {
    "question": "In what year did Freud and his collaborator, Josef Breuer publish Studies on Hysteria, a book which contained a number of Breuer and Freuds case studies of hysterics, including their most famous case - Anna O.?",
    "options": [
      "1848",
      "1901",
      "1912",
      "1895"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Scottish engineer was the first person to demonstrate a working television.",
    "options": [
      "Burr Tilstrom",
      "John Logie Baird",
      "Robert Sarnoff",
      "Vladimir Zworykin"
    ],
    "correctIndex": 1
  },
  {
    "question": "This person, who in 1919 became the General Manager of Radio Corporation of America (RCA), claimed  that he was the first person to receive a signal from the sinking Titanic in 1912.",
    "options": [
      "Leonhard Dresdorff",
      "Burr Tilstrom",
      "Capt. Jonas Bray",
      "David Sarnoff"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1494, Luca Pacioli, a close friend of Leonardo da Vinci, wrote the book Summa de arithmetica, geometrica, proportioni et proportionalita, which contained what?",
    "options": [
      "A study of mathematical and artistic proportion",
      "A list of DaVincis inventions",
      "The first biography of DaVinci",
      "A description of a method of keeping accounts, known as Double-entry book-keeping"
    ],
    "correctIndex": 3
  },
  {
    "question": "This English author, whose works include An Essay on Criticism and The Rape of the Lock, directly addressed the major religious, political and intellectual problems of the 18th century.",
    "options": [
      "Ben Johnson",
      "Alexander Pope",
      "Jonathan Swift",
      "Samuel Johnson"
    ],
    "correctIndex": 1
  },
  {
    "question": "In his works, this Greek playwright, whose contribution to the theater was the addition of a second actor to the scenes, focused on mans position in the cosmos, in relation to the gods.",
    "options": [
      "Thucydidies",
      "Sophocles",
      "Aeschylus",
      "Euripides"
    ],
    "correctIndex": 2
  },
  {
    "question": "This artistic and architectural movement, formed by Vladimir Tatlin, dismissed pure art in favor of art used as an instrument for social purposes.",
    "options": [
      "Production Art",
      "Structural Art",
      "Constructivism",
      "Dadaism"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Major League Baseball player, whose uniform with #42 was retired on April 15, 1997 by Major League Baseball, became the first African-American to be inducted into the Baseball Hall of Fame.",
    "options": [
      "Rosy Grier",
      "Jack Roosevelt Robinson",
      "Jim Brown",
      "Jesse Owens"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these singers had a daughter named Natalie?",
    "options": [
      "Yoko Lennon",
      "Nat King Cole",
      "Dean Martin",
      "Frank Sinatra"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the stars of the classic movie Casablanca.",
    "options": [
      "Humphrey Bogart and Ingrid Bergman",
      "James Stewart and June Allyson",
      "Henry Fonda and Maureen OHara",
      "Humphrey Bogart and Lauren Bacall"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which of the New York City boroughs is Rockefeller Center situated?",
    "options": [
      "Brooklyn",
      "Manhattan",
      "Queens",
      "The Bronx"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these groups was formed in Liverpool, England?",
    "options": [
      "The Bee Gees",
      "The Beatles",
      "The Kinks",
      "The Rolling Stones"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who popularized the song Unforgettable in 1951?",
    "options": [
      "Nat King Cole",
      "Humphrey Bogart",
      "Dean Martin",
      "Frank Sinatra"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is the nickname of New York City?",
    "options": [
      "Bogey and Bacall",
      "The Big Apple",
      "Stock Market City",
      "Rockefeller City"
    ],
    "correctIndex": 1
  },
  {
    "question": "What famous fashion designer popularized the little black dress?",
    "options": [
      "Vivienne Westwood",
      "Coco Chanel",
      "Calvin Klein",
      "Christian Dior"
    ],
    "correctIndex": 1
  },
  {
    "question": "What sport was invented by James Naismith in 1891?",
    "options": [
      "soccer",
      "basketball",
      "ice hockey",
      "curling"
    ],
    "correctIndex": 1
  },
  {
    "question": "What temperature, in degrees Celsius, is Absolute Zero?",
    "options": [
      "-32",
      "-135",
      "-273",
      "-356"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which part of the body contains the most gold?",
    "options": [
      "eyelashes",
      "hair",
      "toe nails",
      "finger nails"
    ],
    "correctIndex": 2
  },
  {
    "question": "What are the numbers on a dartboard that flank 17?",
    "options": [
      "16 and 11",
      "0 and 7",
      "2 and 3",
      "18 and 13"
    ],
    "correctIndex": 2
  },
  {
    "question": "What common drink was first named the \u00e2\u0080\u009cEsteemed Brain Tonic and Intellectual Beverage\u00e2\u0080\u009d?",
    "options": [
      "Coca Cola",
      "Tab",
      "Dr Pepper",
      "Sprite"
    ],
    "correctIndex": 0
  },
  {
    "question": "All babies are born with a soft spot on the top of their heads. What is this called?",
    "options": [
      "Raspberry",
      "Soft Spot",
      "Neurocranium",
      "Fontanelle"
    ],
    "correctIndex": 3
  },
  {
    "question": "Does a jellyfish have a brain?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where should one use perfume? Wherever one wants to be kissed. Thats a piece of advice given by what prominent fashion designer?",
    "options": [
      "Elsa Schiaparelli",
      "Christian Dior",
      "Coco Chanel",
      "Crist\u00c3\u00b3bal Balenciaga"
    ],
    "correctIndex": 2
  },
  {
    "question": "What term refers to the science (or art) of kissing?",
    "options": [
      "Philematology",
      "Palilogy",
      "Phlebology",
      "Palynology"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who wrote and performed a song featuring the lyrics: I just want your extra time and your kiss?",
    "options": [
      "Madonna",
      "Michael Jackson",
      "Kylie Minogue",
      "Prince"
    ],
    "correctIndex": 3
  },
  {
    "question": "New Zealand was the first country to give full voting rights to women.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital of Finland?",
    "options": [
      "Prague",
      "Suva",
      "Malabo",
      "Helsinki"
    ],
    "correctIndex": 3
  },
  {
    "question": "Is it true that the maximum score you can get on SAT is 2400?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital and largest city of Austria?",
    "options": [
      "Canberra",
      "Sydney",
      "Stockholm",
      "Vienna"
    ],
    "correctIndex": 3
  },
  {
    "question": "The number Pi is larger than the number 4.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Have the Yankees played in over 30 World Series?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Lightning Mcqueen was the protagonist of what movie?",
    "options": [
      "BAR",
      "Cars",
      "Mcqueen Tales",
      "DDA"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Wii is a game console released by Nintendo.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Is New York City the capital of New York?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "12 squared is 24.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "This plantation located in Louisiana is said to be haunted by the vengeful ghost of a slave named Chloe, who supposedly murdered the wife and daughters of the owner.",
    "options": [
      "Myrtles Plantation",
      "Laura Plantation",
      "Melrose Plantation",
      "Oak Alley Plantation"
    ],
    "correctIndex": 0
  },
  {
    "question": "On this day in 1929, a massacre of mob members outside a warehouse on Clark Street in Chicago occurred. As people walk the street at night they claim to hear the sounds of machine guns and screams.",
    "options": [
      "Christmas Day",
      "Thanksgiving Day",
      "Easter Sunday",
      "Valentines Day"
    ],
    "correctIndex": 3
  },
  {
    "question": "The ghost of this mobster is said to haunt two locations. One of them is a hotel in Las Vegas, the other - a private residence in Beverly Hills.",
    "options": [
      "John Gotti",
      "Al Capone",
      "Frank Costello",
      "Bugsy Siegel"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this Texas town, it is believed that a hill is haunted by the spirits of small children who were killed there. On the way to school one morning a school bus filled with children stalled across railroad tracks. Tragically the bus was hit by an oncoming train and only a few children survived. Today it is reported that cars that stop on this hill are mysteriously pushed up the hill after which small hand prints can be seen along the back and sides of the vehicle. In which Texas town is this hill located?",
    "options": [
      "Houston",
      "Fort Worth",
      "San Antonio",
      "Dallas"
    ],
    "correctIndex": 2
  },
  {
    "question": "In Americas west there are towns that once boomed during the gold rush but are now abandoned. These places known as ghost towns are said to be haunted by the spirits of the people that once inhabited them. One such town is St. Elmos in Denver Colorado. In what year did this town officially die?",
    "options": [
      "1967",
      "1909",
      "1952",
      "1892"
    ],
    "correctIndex": 2
  },
  {
    "question": "This cave located in Tennessee is said to be haunted by the ghost of a local witch, Kate Batt. Kate tormented and haunted the family that lived near this cave for years. The haunting continued until 1820 when the owner died. Many believed he was poisoned by the ghost of Kate. What is the name of this cave?",
    "options": [
      "Bull Cave",
      "Blue Spring Cave",
      "Rumbling Falls Cave",
      "Bell Cave"
    ],
    "correctIndex": 3
  },
  {
    "question": "This monster, who is classified under the family, Homolycanth Ropus, really has a thing about silver bullets. By what other name do we know the character, Lawrence Talbort?",
    "options": [
      "The Zombie",
      "The Wolfman",
      "The Beast",
      "The Mummy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Hes quite the chef but if he asks you to bring a nice Chianti to his little dinner party, better stay home. He is incredibly lethal and totally amoral. He is guilty of murder, seduction and cannibalism. Which monsters only weakness is one pretty FBI agent?",
    "options": [
      "Dr. Victor Frankenstein",
      "Jack Torrance",
      "Michael Myers",
      "Hannibal Lecter"
    ],
    "correctIndex": 3
  },
  {
    "question": "She is a very rude monster.  She sings with her mouth full. What is the name of the human flesh eating plant that sings Feed me Seymour. Feed me all night long.?",
    "options": [
      "Audrey II",
      "Angel",
      "Leech Woman",
      "Christine"
    ],
    "correctIndex": 0
  },
  {
    "question": "Lethality: He will not stop, EVER, until you are dead. What assassin from the year 2029 AD, had you better believe when he says Ill be back.?",
    "options": [
      "Predator",
      "Terminator",
      "Kothoga",
      "Replicant"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the second US president?",
    "options": [
      "Martin Van Buren",
      "John Adams",
      "James Monroe",
      "Thomas Jefferson"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital city of Iceland?",
    "options": [
      "Neyjavicik",
      "Leykjastick",
      "Lolymyestic",
      "Reykjavik"
    ],
    "correctIndex": 3
  },
  {
    "question": "The actresss father created The Today Show, The Wide World of Sports, Your Show of Shows(aka the Sid Caesar Show) and helped  create The Tonight Show.",
    "options": [
      "Sigourney  Weaver",
      "Diane Lane",
      "Debbie Allen",
      "Jobeth Williams"
    ],
    "correctIndex": 0
  },
  {
    "question": "Michael Jordan is often considered the best player the Chicago Bulls ever had but they did not start winning championships until they traded Charles Oakley for this other big man.",
    "options": [
      "Scotty Pippen",
      "Dave Corzine",
      "Dennis Rodman",
      "Bill Cartwright"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first African-American professional baseball player played for Oakland in 1916.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which are the only  two states in the USA that do not allow drivers to pump their own gas?",
    "options": [
      "Utah and Wyoming",
      "New Jersey and Oregon",
      "New Jersey and Utah",
      "Oregon and Wyoming"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is methyphobia?",
    "options": [
      "A fear of explosions",
      "A fear of gases",
      "A fear of pleasure",
      "A fear of alcohol"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the same year that the first Grammy for Rap music was given, this song won for Best Song of the Year and Best Record of the Year and the singer who performed it won the Grammy for Best Performance.",
    "options": [
      "Dont Worry, Be Happy by Bobby McFerrin",
      "Blessings by Betty Winan",
      "Fast Cars by Tracy Chapman",
      "Traces by George Michael"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the meaning of the word labeorphilist?",
    "options": [
      "A lover of experimental science",
      "A collector of beer bottles",
      "A flower that eats insects",
      "An animal that is attracted to sweet smells"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is the correct definition of the word rod?",
    "options": [
      "A unit of measure equal to 16.5 feet",
      "A unit of measure equal to 3 bushels",
      "A unit of measure equal to 6 feet",
      "A unit of measure equal to the distance from a persons nose to his/her outstretched arm"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is Bandar Seri Begawan?",
    "options": [
      "The capital city of an Asian nation",
      "The largest city in the Kurdish section of Iraq",
      "The name of the Prime Minister of a North African nation",
      "The name of a terrorist organization in Afghanistan"
    ],
    "correctIndex": 0
  },
  {
    "question": "I Love You a Bushel and a Peck was a popular song in the 1950s. How much is a bushel and a peck?",
    "options": [
      "ten meters",
      "ten dry gallons",
      "thirty-two gallons",
      "ten tons"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first known use, in English, of the word orange in reference to a color was by this man.",
    "options": [
      "Warren Alfred VI",
      "King JamesII",
      "Devin Knight",
      "King Henry Vlll"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what year did the color burnt orange get its name?",
    "options": [
      "1915",
      "1920",
      "1913",
      "1923"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is orange the national color of the Netherlands?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Orange and this color are the colors of  the holiday Halloween.",
    "options": [
      "White",
      "Purple",
      "Red",
      "Black"
    ],
    "correctIndex": 3
  },
  {
    "question": "Orange is considered a safety color.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where can the Orange River be found ?",
    "options": [
      "Turkey",
      "South Africa",
      "Canada",
      "South Asia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where can you find a city named Orange?",
    "options": [
      "California",
      "All of these",
      "Texas",
      "Florida"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these cats could appear and disappear at will?",
    "options": [
      "Pussy Galore",
      "Puss in Boots",
      "Felix",
      "The Cheshire Cat"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is Mother Gooses cat in the self-titled newspaper comic strip?",
    "options": [
      "Princess",
      "Angel",
      "Attila",
      "The Duchess"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which two cats are the main characters in the Lillian Jackson Braun series?",
    "options": [
      "Koko and Yumyum",
      "Yin and Yang",
      "Kitty Jones and Kat  Smith",
      "Rin and Tintin"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the most villainous cat in the film Cats and Dogs?",
    "options": [
      "Mr. Tinkles",
      "Mrs. Catamaran",
      "Mr. Bojangles",
      "Mrs. Gato"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who is the crime-solving cat hero of the Rita Mae Brown books?",
    "options": [
      "Mrs. Murphy",
      "Old Deuteronomy",
      "Tucker Tee",
      "Mama Morton"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the cat hero described in Shirley Rousseau Murphys books?",
    "options": [
      "Nermal",
      "Joe Grey",
      "Midnight Louie",
      "Pewter"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the cat detective in the Carole Nelson Douglas series set in Las Vegas?",
    "options": [
      "Lucky Louie",
      "Tom Thumb",
      "Mr. Letemride",
      "Midnight Louie"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which famous cat made a guest appearance in the films Shrek 2 and Shrek 3?",
    "options": [
      "Felix the Cat",
      "Tom the Cat",
      "Puss in Boots",
      "Mr. Tinkles"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which story do we meet Grizabella the Glamour Cat?",
    "options": [
      "Cats",
      "Through the Looking Glass",
      "The Cats Paw",
      "The Aristocats"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which film did Pywackett appear?",
    "options": [
      "Bell, Book and Candle",
      "The Cats in the Cradle",
      "The Golden Cat of Atlantis",
      "Old Possums Books of Cats"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was name of the evil cat in Disneys version of Cinderella?",
    "options": [
      "Sneaky Pete",
      "Satan",
      "Old Snakeeyes",
      "Lucifer"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the first cartoon cat that was created for the screen.",
    "options": [
      "Felix",
      "Puddy Tat",
      "Rumple Teaser",
      "Katsenjammer"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which cat is the advertising mascot for the 9Lives cat food?",
    "options": [
      "Garfield",
      "Odie",
      "Mermal",
      "Morris"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of the cat that belonged to Topper in Thorne Smiths fiction?",
    "options": [
      "Brutus",
      "Scallops",
      "Pestilence",
      "Alexander"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following characters made their debut in Old Possums Book of Practical Cats?",
    "options": [
      "Rumpleteazer",
      "Old Deuteronomy",
      "All of these",
      "The Rum Tum Tiger"
    ],
    "correctIndex": 2
  },
  {
    "question": "This law says that if things can go wrong, they jolly well will!",
    "options": [
      "Paddys Law",
      "O Tooles Law",
      "O Learys Law",
      "Murphys Law"
    ],
    "correctIndex": 3
  },
  {
    "question": "If youre a butterfingers and in your haste to get started on the daily chores you drop your breakfast toast, is it more likely to fall with butter side down?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "In every hierarchy each employee tends to rise to the level of his or her incompetence. What name do we give to this phenomenon?",
    "options": [
      "The William Principle",
      "The Matthew Principle",
      "The Peter Principle",
      "The Johnson Principle"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the sophisticated industry of integrated circuits, what does Moores Law say?",
    "options": [
      "The rate of advance will continue to double approximately every 18 months.",
      "Progress will accelerate sharply over the next ten years and then come to a juddering halt.",
      "Progress will continue at a steady rate indefinitely.",
      "The rate of technological progress is bound to slow down in the not too distant future."
    ],
    "correctIndex": 0
  },
  {
    "question": "There is always an easy answer to every human problem - neat, plausible and wrong. What sharp and witty American writer made this observation?",
    "options": [
      "Henry James",
      "H.L. Mencken",
      "Louisa May Alcott",
      "James Fenimore Cooper"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is a ground-breaking law of linguistics first formulated in 1822. It highlights in a most intriguing way how European languages may have evolved since ancient times.",
    "options": [
      "Grimms Law",
      "Kissingers  Law",
      "Einsteins  Law",
      "Schwarzeneggers  Law"
    ],
    "correctIndex": 0
  },
  {
    "question": "Work expands to fill the time available for its completion. Under what name is this law known?",
    "options": [
      "Parkinsons Law",
      "Atkinsons Law",
      "Pattersons Law",
      "Robinsons Law"
    ],
    "correctIndex": 0
  },
  {
    "question": "Youve been working on a job for quite a while and achieved a lot. But now fatigue has set in and you find that despite your best efforts, youre no longer getting the same high level of results. This effect is neatly expressed in which law?",
    "options": [
      "The law of diminishing returns",
      "The law of deteriorating returns",
      "The law of falling returns",
      "The law of declining returns"
    ],
    "correctIndex": 0
  },
  {
    "question": "Political leaders all too often engage in misguided undertakings in the hope of recapturing popular support. Not infrequently this backfires and popularity ratings tumble. This is a simple example of which of the following laws?",
    "options": [
      "The law of divine retribution",
      "The law of unintended consequences",
      "The law of illogical reasoning",
      "The law of just desserts"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the age of most non-synthetic diamonds.",
    "options": [
      "Over seven billion years",
      "Over five billion years",
      "Over six billion years",
      "Over three billion years"
    ],
    "correctIndex": 3
  },
  {
    "question": "It was the largest rough diamond ever found, weighing in at 3 106 carats.",
    "options": [
      "Koh-i-Nor",
      "Malan",
      "Cullinan",
      "Elizabeth"
    ],
    "correctIndex": 2
  },
  {
    "question": "A pure diamond is colorless, but extremely rare. This is the color shade that most diamonds have.",
    "options": [
      "Gray",
      "Yellow",
      "Blue",
      "Green"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the original name of the famous Taylor - Burton diamond, sold for $1,050,000 at an auction.",
    "options": [
      "The Excelsior Diamond",
      "The Regent Diamond",
      "The Cartier diamond",
      "The Sancy Diamond"
    ],
    "correctIndex": 2
  },
  {
    "question": "This is the name of the elongated diamond cut with pointed ends.",
    "options": [
      "Marquise",
      "Heart Shaped",
      "Oval",
      "Princess"
    ],
    "correctIndex": 0
  },
  {
    "question": "At the 2003 MTV music awards these two stars wore diamond necklaces with their initials.",
    "options": [
      "Britney Spears and Madonna",
      "Alicia Keys and Anastasia",
      "Whitney Huston and Mariah Carey",
      "Jeniffer Aniston and Brad Pitt"
    ],
    "correctIndex": 0
  },
  {
    "question": "Gemologists use eleven grades to define clarity. This grade means there are no inclusions or surface blemishes under 10x magnification.",
    "options": [
      "IF (Internally Flawless)",
      "FL (Flawless)",
      "I1 (Imperfect \u0096 Level 1)",
      "VS1 / VS2 (Very Slightly Included)"
    ],
    "correctIndex": 1
  },
  {
    "question": "Diamond is the birthstone of people who were born in this month.",
    "options": [
      "April",
      "March",
      "June",
      "February"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to a belief,  women should wear diamonds on this finger.",
    "options": [
      "The thumb of the right hand",
      "The index finger of the left hand",
      "The middle finger of the left hand",
      "The middle finger of the right hand"
    ],
    "correctIndex": 2
  },
  {
    "question": "When you give a diamond to someone, it represents this.",
    "options": [
      "Affection",
      "Everlasting friendship",
      "Appreciation",
      "Everlasting love"
    ],
    "correctIndex": 3
  },
  {
    "question": "There are two naturally round lakes in the world. One is near Zurich, Switzerland. The other is in this U.S. state.",
    "options": [
      "Minnesota",
      "Wisconsin",
      "Florida",
      "California"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the US Army, this rank is usually in charge of a battalion.",
    "options": [
      "Brigadier General",
      "Lt. Colonel",
      "Captain",
      "Major General"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the famous quote from Rene Descartes that means I think, therefore I am.",
    "options": [
      "Omnia, vincit amor",
      "Vivere est cogitare",
      "Vincit omnia veritas",
      "Cogito, ergo sum"
    ],
    "correctIndex": 3
  },
  {
    "question": "We all hate spam on our computers. What is the computer term for sending spam as an instant messenger message?",
    "options": [
      "Spim",
      "Inspam",
      "Spamage",
      "InstaSpam"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of the first computer game?",
    "options": [
      "Tetris",
      "Myst",
      "Tennis For Two",
      "Pong"
    ],
    "correctIndex": 2
  },
  {
    "question": "When the first Apollo astronauts landed on the moon they left a memento behind. What was it?",
    "options": [
      "A U.N. flag",
      "A hologram of the map of the world",
      "A U.S. silver dollar",
      "A 33-rpm record"
    ],
    "correctIndex": 3
  },
  {
    "question": "I am suffering from poliosis. What is my problem?",
    "options": [
      "Falling of the teeth",
      "Graying of the hair",
      "Shortening due to cartilage deterioration",
      "Slowing of ones life due to age"
    ],
    "correctIndex": 1
  },
  {
    "question": "Over the years we have become accustomed to hearing the train whistle. Who invented the train whistle?",
    "options": [
      "Thomas Jefferson",
      "Edward Land",
      "Thomas Alva Edison",
      "George Washington Whistler"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1916 young Antonio Gentile won a $5 prize for an original drawing. The drawing eventually became this.",
    "options": [
      "The model for Picassos Lady With Guitar",
      "The model for Paramount Studios logo",
      "Mr. Peanut",
      "The Coca Cola bottle"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to The Bible, how long did Jonah stay in the whale (i.e. in the leviathan)?",
    "options": [
      "40 days and 40 nights",
      "0 days and 0 nights",
      "120 years",
      "3 days and 3 nights"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which medal depicts three naked men with their hands on each others shoulders?",
    "options": [
      "The NAMBY Award",
      "The Horatio Alger Prize",
      "The Clio Award",
      "The Nobel Peace Prize"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the United States, firewood is usually sold by the cord. How big is a cord of wood?",
    "options": [
      "128 cubic feet",
      "66 cubic feet",
      "66 feet",
      "128 square feet"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does a noologist study?",
    "options": [
      "Eggs",
      "The human womb",
      "The human mind",
      "Computer vocabulary"
    ],
    "correctIndex": 2
  },
  {
    "question": "This U.S. state is home to the Boggy Bayou Mullet Festival, the Winter Strawberry Capital of the World, and The Shark Tooth Capital of the world.",
    "options": [
      "Mississippi",
      "Louisiana",
      "Hawaii",
      "Florida"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these best describes the meaning of the word, seiche?",
    "options": [
      "Alignment of three or more celestial bodies",
      "Horizontal mass of rock, intruded between older layers of sedimentary rock",
      "Standing wave in a body of water",
      "Change in the Earths magnetic field in and around the source of a tsunami"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the next number in this sequence: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20?",
    "options": [
      "21",
      "23",
      "22",
      "15"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Luddites were a social movement of English workers, who protested against industrial revolution, because they felt that their jobs were threatened.  The movement, which was named after a mythical leader began in this year.",
    "options": [
      "1756",
      "1854",
      "1811",
      "1798"
    ],
    "correctIndex": 2
  },
  {
    "question": "What funds were used in the founding of the British Museum?",
    "options": [
      "A single bequest of Lord Henry Dinsdale",
      "Fund raising among the nobility of Europe",
      "Multiple Royal bequests",
      "National Lottery"
    ],
    "correctIndex": 3
  },
  {
    "question": "It was one of the first TV shows for children.  It featured one human and many puppets, all worked by one man, Burr Tillstrom.  What was its name ?",
    "options": [
      "Howdy Doody",
      "Kukla, Fran and Ollie",
      "Crusader Rabbit and Rags the Tiger",
      "Wonder-Rama"
    ],
    "correctIndex": 1
  },
  {
    "question": "William Moggridge is commonly credited with the creation of the first true laptop computer, in this year.",
    "options": [
      "1979",
      "1984",
      "1963",
      "1634"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Massachusetts born musical composer wrote Sleigh Ride, Holiday for Strings, The Typewriter and Plink, Plank, Plunk.",
    "options": [
      "John Cage",
      "John Fiedler",
      "Leroy Anderson",
      "Walter Piston"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which two American cities boast statues of Popeye the Sailor?",
    "options": [
      "Crystal City, Texas and Chester, Illinois",
      "Petaluma, California and Palm City, Florida",
      "Wiley, Texas and East St. Louis, Illinois",
      "Eureka, California and Kingsville, Texas"
    ],
    "correctIndex": 0
  },
  {
    "question": "This person wrote what historians recognize as the worlds first computer program -- a method for calculating Bernoulli numbers with Charles Babbages analytical engine.",
    "options": [
      "Johnny von Neumann",
      "Benjamin Bannekker",
      "Blaise Pascal",
      "Lord Byrons daughter"
    ],
    "correctIndex": 3
  },
  {
    "question": "What alloy contains copper and zinc, with a content of copper typically more than 50%?",
    "options": [
      "Rutite",
      "Bronze",
      "Stainless Steel",
      "Brass"
    ],
    "correctIndex": 3
  },
  {
    "question": "American athletes Dave DeBusschere, Gene Conley and Del Rice all have what in common?",
    "options": [
      "They played pro baseball and  pro football",
      "They played pro basketball and pro football",
      "They played pro basketball and became team owners",
      "They played pro basketball and pro baseball"
    ],
    "correctIndex": 3
  },
  {
    "question": "Felix Silla has been in many movies and TV shows, however, he played his most favourite role in this TV comedy show from 1964-1966.",
    "options": [
      "The Addams Family",
      "My Favorite Martian",
      "My Mother the Car",
      "The Munsters"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Louisville-born actor was called the busiest actor in Hollywood because he got so many roles in so many movies. His most famous roles were in Deliverance in 1972, Network  in 1976, and Superman in 1978.",
    "options": [
      "Ned Beatty",
      "William Holden",
      "Gene Hackman",
      "Burt Reynolds"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1960, a  #1 hit on the pop charts was the comedy song Please Mr. Custer, I Dont Wanna Go!. Whose song was it?",
    "options": [
      "Bill Hayes",
      "Tommy Hartigans",
      "B.B. Thompsons",
      "Larry Vernes"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which one of these singers was not one of the original Supremes?",
    "options": [
      "Cindy Birdsong",
      "Florence Ballard",
      "Diana Ross",
      "Mary Wilson"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who played the role of Tommy in the 1975 movie Tommy\u00e2\u0080\u009d?",
    "options": [
      "Eric Clapton",
      "Elton John",
      "Roger Daltrey",
      "Keith Moon"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was/were the featured artist/group in Mad Dogs and Englishmen, a 1971 movie about an American music tour?",
    "options": [
      "Elton John",
      "Joe Cocker",
      "The Commitments",
      "The Rolling Stones"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Orlons had a 1963 hit in which they told everyone where all the hippies meet. Where was this, according to the song?",
    "options": [
      "South Street",
      "San Francisco",
      "Greenwich Village",
      "State Street"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which famous rock musician directed Born to Boogie a 1972 movie about English rock band T. Rex?",
    "options": [
      "Elton John",
      "Mickey Finn",
      "Marc Bolan",
      "Ringo Starr"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which was the first song that radio personality and voice actor Casey Kasem played on his radio show Americas Top Forty?",
    "options": [
      "Forget Him",
      "Mama Told Me Not to Come",
      "Mandy",
      "Love Me Tender"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the only Top 40 hit of musician, bandleader, and television impresario Lawrence Welk?",
    "options": [
      "Theme from Exodus",
      "Telstar",
      "Old Cape Cod",
      "Calcutta"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following groups of mammals lay eggs?",
    "options": [
      "Rodentia",
      "Monotremes",
      "Marsupials",
      "Chiroptera"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is found in plant cells, but not in animal cells?",
    "options": [
      "Mitochondria",
      "Cytoplasm",
      "Chloroplast",
      "Ribosomes"
    ],
    "correctIndex": 2
  },
  {
    "question": "James Madison was the 3rd U.S. President.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "If I mix the following ingredients together, what drink would I have?",
    "options": [
      "Moscow Mule",
      "Long Island Ice Tea",
      "Basil Vodka Gimlet",
      "Cosmopolitan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who wrote the book To Kill a Mockingbird?",
    "options": [
      "James Baldwin",
      "Harper Lee",
      "Norman Mailer",
      "Mark Twain"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first recorded use of the word purple in the English language dates back to what year?",
    "options": [
      "AD 1400",
      "AD 975",
      "AD 251",
      "AD 1023"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the Middle Ages, the purple color was used only for royal clothing because the dye was much more expensive than gold. What was the purple dye made from?",
    "options": [
      "Chocolate",
      "squid Ink",
      "Violets",
      "Mollusk"
    ],
    "correctIndex": 3
  },
  {
    "question": "Purple Haze is a song by what famous musician?",
    "options": [
      "John Lennon",
      "Jim Morrison",
      "Janis Joplin",
      "Jimi Hendrix"
    ],
    "correctIndex": 3
  },
  {
    "question": "What famous singer encouraged his fans to come to his concerts dressed in the purple colour?",
    "options": [
      "Hilary Duff",
      "Stephen Tyler",
      "Pink",
      "Prince"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what country does a widow wear purple to mourn her husbands death?",
    "options": [
      "Thailand",
      "Mexico",
      "Canada",
      "United States of America"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who wrote the book The Color Purple that was adapted into a Broadway play?",
    "options": [
      "Betty Pierce",
      "Alice Walker",
      "C.S Lewis",
      "Anne Rice"
    ],
    "correctIndex": 1
  },
  {
    "question": "What famous news reporter was honored with the Purple Heart after he was killed by a Japanese sniper in 1945?",
    "options": [
      "Ernie Pyle",
      "Jack Harrison",
      "Roger Vanderbilt",
      "Mason Hall"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these shades of purple can be found in a box of Crayola Crayons?",
    "options": [
      "Vivid Violet",
      "Royal Purple",
      "Purple Mountains Majesty",
      "All of the Above"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who played the role of Draco Malfoy in the Harry Potter film series?",
    "options": [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Richard Harris",
      "Tom Felton"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was drafted by the Houston Rockets in the first overall selection of the 1984 NBA draft?",
    "options": [
      "Michael Jordan",
      "Hakeem Olajuwon",
      "John Stockton",
      "Charles Barkley"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who portrayed Gabrielle Solis in the TV series Desperate Housewives?",
    "options": [
      "Eva Longoria Parker",
      "Marcia Cross",
      "Felicity Huffman",
      "Teri Hatcher"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was drafted by the Orlando Magic as the 1st overall pick in the 1992 NBA draft?",
    "options": [
      "Shaquille ONeal",
      "Christian Laettner",
      "Alonzo Mourning",
      "Anfernee Hardaway"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who played Elizabeth Brooke McGuire in the television show, Lizzie McGuire?",
    "options": [
      "Lalaine Vergara",
      "Hillary Duff",
      "Hallie Todd",
      "Ashlie Brillault"
    ],
    "correctIndex": 1
  },
  {
    "question": "What actor starred in the movies Billy Madison, Happy Gilmore, Big Daddy, Punch-Drunk Love, Spanglish, Click, and Reign Over Me?",
    "options": [
      "Bradley Whitford",
      "Adam Sandler",
      "Steve Buscemi",
      "Darren McGavin"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who portrayed Harry Potter in each film of the Harry Potter series?",
    "options": [
      "Richard Harris",
      "Tom Felton",
      "Rupert Grint",
      "Daniel Radcliffe"
    ],
    "correctIndex": 3
  },
  {
    "question": "What actor is known for his comedic roles in the movies Wedding Crashers and Zoolander?",
    "options": [
      "Owen Wilson",
      "Bradley Cooper",
      "Christopher Walken",
      "Vince Vaughn"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was actress Sheree Elizabeth Zampino married to from 1992 to 1995?",
    "options": [
      "Will Smith",
      "Terrell Fletcher",
      "James Avery",
      "Alfonso Ribeiro"
    ],
    "correctIndex": 0
  },
  {
    "question": "Titanium melts at 1941\u00c2\u00b0 on what temperature scale?",
    "options": [
      "Kelvin",
      "Newton",
      "Fahrenheit",
      "Celsius"
    ],
    "correctIndex": 0
  },
  {
    "question": "How long is a fortnight?",
    "options": [
      "3 months",
      "2 weeks",
      "4 nights",
      "100 days"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is the symbol for Plutonium on the Periodic Table of Elements?",
    "options": [
      "Pu",
      "P",
      "Pt",
      "Pm"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of Titanics sister ship?",
    "options": [
      "Amerika",
      "Frankfurt",
      "Mesaba",
      "Olympic"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 2006, it was confirmed that there are 9 planets in the Solar System.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "About how many feet are there in one kilometer?",
    "options": [
      "1762",
      "3281",
      "5280",
      "2089"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many pecks are there in a bushel?",
    "options": [
      "5",
      "10",
      "2",
      "4"
    ],
    "correctIndex": 3
  },
  {
    "question": "During what year did Samuel Morse come up with the idea of Morse Code?",
    "options": [
      "1838",
      "1848",
      "1818",
      "1828"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which French phrase can mean tastes differ?",
    "options": [
      "Pret-a-porter",
      "Pour encourager les autres",
      "Chacun a son gout",
      "Idee fixe"
    ],
    "correctIndex": 2
  },
  {
    "question": "Dr. Mary Edwards Walker was the first American women to be awarded what?",
    "options": [
      "The Congressional Medal of Honor",
      "The Nobel Peace Prize",
      "The Pulitzer Prize",
      "The Nobel Prize in Medicine"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which is the most recent volcano formed in the Western Hemisphere ?",
    "options": [
      "Mayon",
      "Paricutin",
      "Yerupaja",
      "Guallatiri"
    ],
    "correctIndex": 1
  },
  {
    "question": "Plato won it twice.  Aristotle, Socrates and Alexander the Great are all said to have been keen observers of it.  Dioxippus was probably the most famous winner of it.  What does this question refer to?",
    "options": [
      "A martial art championship",
      "A literary award",
      "A poetry contest",
      "A debate championship"
    ],
    "correctIndex": 0
  },
  {
    "question": "Former Emperor of Japan, Hirohito, was considered an expert in which of these subjects?",
    "options": [
      "Poetry",
      "Marine biology",
      "Astronomy",
      "Linguistics"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who wrote the poem, In The Naked Bed, In Platos Cave",
    "options": [
      "Delmore Schwartz",
      "Allen Ginsberg",
      "Thilios Parmedes",
      "Langston Hughes"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is an ordinal number?",
    "options": [
      "A number that shows order",
      "A number involving i",
      "A number that shows the number of elements in a set",
      "A number that is less than zero"
    ],
    "correctIndex": 0
  },
  {
    "question": "It is the 1954 Cotton Bowl between Rice and Alabama.  Rices All-American running back, Dicky Moegle, is leading his team to a crushing of the Bart Starr led Alabama team.  On one run, he was stopped on his own 35 yard line, where he was tackled.  The referee blew his whistle and awarded a touchdown.  Why ?",
    "options": [
      "He ran the wrong way",
      "The referee made a mistake on a penalty",
      "He flipped the ball to another player who scored",
      "He was tackled by Tommy Lewis"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who lost the Battle of Marathon?",
    "options": [
      "Xerces I",
      "Darius I",
      "Cyrus I",
      "Parimedes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Historians often attribute Napoleons defeat at Waterloo to which of these reasons?",
    "options": [
      "Napoleon had hemorrhoids",
      "All of these reasons",
      "Wellington took a big risk and it paid off",
      "Marshall Ney had special ties to Wellington and intentionally did not turn Wellingtons right flank"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Michael Curtizs movie, Casablanca, where were the visas to Portugal hidden ?",
    "options": [
      "In Ricks file cabinet",
      "At the Airport",
      "In Ricks white dinner jacket",
      "In Sams piano"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is a major difference between New World monkeys (Platyrrhines) and Old World Monkeys (Cercopithecidae)?",
    "options": [
      "New World Monkeys can hang by their tail",
      "Old world monkeys lack sitting pads.",
      "Old World Monkeys have canines that can chew meat",
      "New World monkeys can not walk on two legs"
    ],
    "correctIndex": 0
  },
  {
    "question": "Francis Galton, half-cousin of Charles Darwin is credited with doing what, to tremendously help law enforcement agencies?",
    "options": [
      "Using his knowledge of insects to tell times of death",
      "Aiding in the capture of top British criminals",
      "Being the first to use fingerprint  identification",
      "Developing the earliest form of DNA testing"
    ],
    "correctIndex": 2
  },
  {
    "question": "Why was the battle of Huai-Hai so important in world history?",
    "options": [
      "It was the  battle that gave control of China to the Mongols",
      "It was the final battle that drove Japan out of China in WWII",
      "It was the last major battle between Chinese Communists and Chinese Nationalists",
      "It was the last major Chinese-aided attack of the Vietnam War"
    ],
    "correctIndex": 2
  },
  {
    "question": "Towards the beginning of the new millennium, who was the oldest person elected US President?",
    "options": [
      "Reagan",
      "John Adams",
      "G. Herbert Bush",
      "William H. Taft"
    ],
    "correctIndex": 0
  },
  {
    "question": "The famous Statue of Liberty lies between New York and New Jersey.  Another, much smaller Statue of Liberty of the same shape is located where?",
    "options": [
      "England",
      "Paris",
      "Canada",
      "Union of South Africa"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which if these most accurately describes the difference between the words farther and further?",
    "options": [
      "Farther means more far and further means more to the fore.",
      "Farther represents a greater distance than further.",
      "There are no differences in use",
      "Farther is used when a known direction is involved; further is in more general."
    ],
    "correctIndex": 0
  },
  {
    "question": "Prior to his rise to power in Spain, what was Francos job?",
    "options": [
      "He was an Associate Professor at Spains College for Infantry Officers",
      "He was in charge of Spains military bases in Morocco",
      "He was in charge of the last Cavalry division in the history of the Spanish Army",
      "He was in charge of the Quartermaster Corps of the Spanish Army"
    ],
    "correctIndex": 1
  },
  {
    "question": "The story of Atlantis dates all the way back to ancient Egypt. The story was first written down by the traveller Solon. But who wrote the only remaining story of the lost continent Atlantis?",
    "options": [
      "Aristotle",
      "Plato",
      "Christopher Columbus",
      "Socrates"
    ],
    "correctIndex": 1
  },
  {
    "question": "Many sailors have seen the Flying Dutchman, a ship doomed to roam the seas forever. Where did the Flying Dutchman reportedly disappear?",
    "options": [
      "Cape of Good Hope",
      "The East Indies",
      "The North Sea",
      "The Atlantic Ocean"
    ],
    "correctIndex": 0
  },
  {
    "question": "On May 28, 1875, 50 students from the Vicksburg High School heard a lady in distress screaming; Help me in the name of God, the men are hurting me. Since then, hundreds of people have reported hearing the same voice. With which event is this ghostly voice associated?",
    "options": [
      "Indian retaliation for the desagration of an Ancient burial ground",
      "The fall of Vicksburgh during the Civil War",
      "The vanishing of  a riverboat",
      "A student prank"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Lutz family - famous as the occupants of the infamous Amityville house - told their story to the writer Jay Anson, who turned it into a best-selling book. Later, a movie was made based on the supposed events that took place in this house. James Brolin played the role of the surveyour George Lutz. He became convinced that the film was jinxed. Did he experience his first haunting experience on the film set?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "After the battle of Waterloo, General Ney of the French army received a death sentence and was reportedly executed by firing squad on December 7th, 1815. However a gentleman called Peter Ney, who died in the year 1846, claimed to be the General.  It was never proven that he actually was the General. However, many things point towards the truth of his claim. Which of thes is not one of them?",
    "options": [
      "On the boat to the US he was spotted and recognized by a former soldier under his command",
      "When he arrived in the US - safe from prosecution - he identified himself as the General, but he was not believed",
      "A famous New York handwriting specialist identified his writing as that of the general",
      "He had surprising knowledge of the family background and the military"
    ],
    "correctIndex": 1
  },
  {
    "question": "This place is haunted by a man,who was brutally murdered. During his lifetime he reportedly participated in seances to contact his dead son, William. The Dutch Queen Wilhelmina encountered this person in the middle of the night, when she was staying at what place?",
    "options": [
      "The Tower of London",
      "The White House",
      "Edinburgh Castle",
      "Ewloe Castle"
    ],
    "correctIndex": 1
  },
  {
    "question": "This entity has been haunting the same area for over 260 years. In this period it has been witnessed 2,000 times. One of the famous eye witnesses - former Spanish King Joseph Bonaparte - saw this flying creature while out hunting. One popular theory is that the creature is the very essence of evil, embodied. What is the name of this creature?",
    "options": [
      "Jersey Devil",
      "Owlman",
      "Mothman",
      "Chupacabra"
    ],
    "correctIndex": 0
  },
  {
    "question": "Tower Green - part of the Tower of London complex - is frequented by the ghost of Lady Salisbury. According to witnesses the last moments of her life are re-enacted in this part of the infamous Tower where she met her doom. How did lady Salisbury die?",
    "options": [
      "She climbed up  jumped from the Tower",
      "She was murdered by rebels",
      "She was axed to death",
      "She was executed by beheading"
    ],
    "correctIndex": 2
  },
  {
    "question": "Every year in Yatesville, Georgia there is a celebration of chitlins, called the Chitlin Hoedown.  What exactly are chitlins?",
    "options": [
      "Bull testicles",
      "Sheep eyes",
      "Cow brains",
      "Pigs intestines"
    ],
    "correctIndex": 3
  },
  {
    "question": "Elvis Presley, often referred to as the King of Rock and Roll, was born in which southern state?",
    "options": [
      "Mississippi",
      "Alabama",
      "Tennessee",
      "North Carolina"
    ],
    "correctIndex": 0
  },
  {
    "question": "This country music singer known for his songs about family and religion, had his most success with song writing.  Writing songs such as Forever and Ever Amen by Randy Travis, When You Say Nothing At All by Keith Whitley and Love Can Build a Bridge by the Judds.  Who is this singer/songwriter?",
    "options": [
      "Paul Overstreet",
      "Mark Chestnutt",
      "Alan Jackson",
      "George Strait"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1897, American scientist John Jacob Abel was able to isolate which of the following?",
    "options": [
      "cocaine",
      "adrenaline",
      "ACTH",
      "human growth hormone"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately how much whole milk does it take to make one gallon of ice cream?",
    "options": [
      "10 pounds",
      "21.2 pounds",
      "4.5 pounds",
      "12 pounds"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which blood constituent is involved in the formation of blood clots but has a shelf-life of only 5 days?",
    "options": [
      "platelets",
      "red blood cells",
      "plasma",
      "white blood cells"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was originally selected to play Leo Bloom in the 1968 comedy film The Producers written by Mel Brooks?",
    "options": [
      "Zero Mostel",
      "Dustin Hoffman",
      "Jimmy Broderick",
      "Luther Adler"
    ],
    "correctIndex": 1
  },
  {
    "question": "Rudolph Walter Wanderone Jr. was a famous player in what sport?",
    "options": [
      "thoroughbred racing",
      "professional wrestling",
      "pool",
      "football"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year did the Catholic Church split with the Orthodox Church?",
    "options": [
      "1645",
      "1054",
      "33",
      "1491"
    ],
    "correctIndex": 1
  },
  {
    "question": "The line There is no Y in Egypt comes from which movie?",
    "options": [
      "Five Graves to Cairo",
      "The Desert Fox",
      "Casablanca",
      "The Battle of El Alamein"
    ],
    "correctIndex": 0
  },
  {
    "question": "This American actor appeared in the first X-Rated movie to be nominated for an Academy Award. His  brother wrote the songs Wild Thing and Angel of the Morning. Two of his children are actors. Who is he?",
    "options": [
      "Robert Duval",
      "John Ford Coley",
      "Dustin Hoffman",
      "Jon Voight"
    ],
    "correctIndex": 3
  },
  {
    "question": "This TV series, which aired in 1982-1983, starred Sarah Jessica Parker, Jami Gertz, Tracy Nelson, and Amy Linker.",
    "options": [
      "Mr. Novak",
      "Square Pegs",
      "Room 222",
      "Welcome Back, Kotter"
    ],
    "correctIndex": 1
  },
  {
    "question": "Alexander Reid, a famous Scottish art dealer, lived with the Van Gogh brothers for over a year and was given two original Van Goghs as a farewell gift. He quickly sold both of them for five pounds. Why?",
    "options": [
      "His father thought they were terrible",
      "They were drawings not paintings",
      "He thought they were terrible",
      "They were actually painted by Theo not by Vincent"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Five Positions, which are the basis of ballet, as well as the starting and ending points for ballet movements, were finally established by Pierre Rameau in what year?",
    "options": [
      "1800",
      "1589",
      "1725",
      "1900"
    ],
    "correctIndex": 2
  },
  {
    "question": "This tragedy, written by  Shakespeare, is often referred to as The Scottish Play by actors, as it was believed that using its actual name in theatre would bring bad luck.",
    "options": [
      "Hamlet",
      "The Merry Wives of Windsor",
      "Macbeth",
      "Othello"
    ],
    "correctIndex": 2
  },
  {
    "question": "An early version of this instrument was invented by Bartolomeo Cristofori of Florence, who was employed by the Medici family.",
    "options": [
      "The piano",
      "The crane",
      "The steam drill",
      "The plow"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Potemkin Villages were fake settlements, erected at the direction of Russian minister Grigori Potemkin, to impress which monarch?",
    "options": [
      "Louis XIV",
      "Peter the Great",
      "Louis XVI",
      "Catherine the Great"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1952, this Republican Senator was awarded the Distinguished Flying Cross, for his service as an aerial photographer and tail gunner during World War II.",
    "options": [
      "Joseph McCarthy",
      "Lyndon Johnson",
      "Robert Taft",
      "James Watson"
    ],
    "correctIndex": 0
  },
  {
    "question": "This ritual is part of the traditions and culture of the Minoan civilization, discovered by archaeologist Sir Arthur Evans.",
    "options": [
      "Fire-dancing",
      "Cockfighting",
      "Bull-leaping",
      "None of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "The term Jomon refers to a historical period in the development of which country?",
    "options": [
      "Greece",
      "Brazil",
      "Egypt",
      "Japan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements about Albert Einstein is not true?",
    "options": [
      "He was awarded the 1921 Nobel Prize for Physics",
      "He formulated the theory of relativity",
      "He took Swiss citizenship in 1901",
      "He wrote the Philosophiae Naturalis Principia Mathematica"
    ],
    "correctIndex": 3
  },
  {
    "question": "The word algorism, which comes from the name of Persian mathematician al-Khwarizmi, refers to which of these?",
    "options": [
      "A binary numeral system where two successive values differ in only one digit",
      "None of these",
      "The rules of performing arithmetic using the decimal system for representing numbers",
      "A numeral system that uses the digits 0 to 7"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Hebrew word kosher , often translated as clean, refers to what kind of food?",
    "options": [
      "That contains no red meat",
      "That has been blessed before processing",
      "That is fit for consumption according to the Books of Leviticus",
      "That contains no pork products"
    ],
    "correctIndex": 2
  },
  {
    "question": "Sunset Boulevard is perhaps one of the greatest movies made about the movies.  It stars a very young handsome William Holden and the one and only Gloria Swanson as Norma Desmond, a reclusive enigmatic silent film star.  It also starred a famous director of the silent era, who played her butler/ex-husband.  Can you pick him from the list?",
    "options": [
      "Fritz Lang",
      "Erich von Stroheim",
      "Desmond Taylor",
      "D. W. Griffith"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1963, Frederico Fellini made a classic film about a harried movie director who had lost his inspiration.  Can you name it?",
    "options": [
      "le Dolce Vita",
      "La Strada",
      "Blow Up",
      "8 1/2"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Bad and the Beautiful (1952) had an all star cast by an all star director, Vincente Minelli.  It was nominated for six Oscars, but only one of the actors won.  Can pick the name of the actor and the category they won for?",
    "options": [
      "Gloria Grahame, Best Actress in a Supporting Role",
      "Gilbert Roland, Best Actor in a Supporting Role",
      "Vincente Minelli, Best Director",
      "Kirk Douglas, Best Actor in a Leading Role"
    ],
    "correctIndex": 0
  },
  {
    "question": "For the 1954 rendition of A Star is Born, both James Mason and Judy Garland were nominated for Oscars in the tops spots \u00e2\u0080\u0093 Best Actor in a Leading Role and Best Actress in a Leading Role.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Hailed as a trash masterpiece and directed by Vincente Minelli, Two Weeks In Another Town is the story about how hard it is to make quality films in Hollywood.  Who played the main character, Jack Andrus?",
    "options": [
      "Edward G. Robinson",
      "Barry Sullivan",
      "Dick Powell",
      "Kirk Douglas"
    ],
    "correctIndex": 3
  },
  {
    "question": "This film written and directed by Preston Sturgess deals with a director of escapist films, who goes looking for escape.",
    "options": [
      "My Travels with Charley",
      "The Day of the Locusts",
      "A Place in the Sun",
      "Sullivans Travels"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which ancient language is often referred to as the the mother of all languages?",
    "options": [
      "Sanskrit",
      "Tamil",
      "Latin",
      "Hebrew"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these commercial organisations was founded in 1947?",
    "options": [
      "Microsoft",
      "Indian Railways",
      "Intel",
      "China Petroleum"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which European city is the headquarters of Interpol located?",
    "options": [
      "Geneva",
      "London",
      "Lyon",
      "Paris"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which layer of the atmosphere do artificial satellites operate?",
    "options": [
      "Medium Earth Orbit",
      "Elliptic Orbit",
      "Low Earth Orbit",
      "High Earth Orbit"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following languages is not an official language of the United Nations?",
    "options": [
      "Chinese",
      "Spanish",
      "German",
      "Russian"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the term Fourth Estate refer to?",
    "options": [
      "Judiciary",
      "Backward country",
      "Parliament",
      "Press"
    ],
    "correctIndex": 3
  },
  {
    "question": "How long does it take for moonlight to reach the Earth?",
    "options": [
      "About 8 minutes",
      "About 3 minutes",
      "Less than 3 seconds",
      "About 30 seconds"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was Lydia Litvyak?",
    "options": [
      "The top female fighter ace of World War II",
      "The first female to get an engineering degree in the USA",
      "The first Polish woman chief of state",
      "The inventor of the silicon chip"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was Leonardo da Vincis art teacher?",
    "options": [
      "Fra Luca Paccioli",
      "Titian",
      "Andrea del Verrocchio",
      "Giotto di Bondone"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who is widely regarded as the father of British Secret Service?",
    "options": [
      "Sir Richard Burton",
      "Christopher Marlowe",
      "Daniel Defoe",
      "Edward Ames, Duke of Harrington"
    ],
    "correctIndex": 2
  },
  {
    "question": "He was first sail the length of the Amazon River and it was on this voyage that the Amazon got its name.",
    "options": [
      "Francisco de Orellana",
      "Pascal",
      "Francisco Pizarro",
      "de Gassett"
    ],
    "correctIndex": 0
  },
  {
    "question": "He invented the idea of an ATM in the late 1930s and persuaded what is now Citicorp to give it a trial.",
    "options": [
      "Luther George Simjian",
      "James Goodfellow",
      "Allen Bred",
      "John Shepherd-Barron"
    ],
    "correctIndex": 0
  },
  {
    "question": "On January 15, 1919, 21 Bostonians drowned but no water was involved.  How can this be explained?",
    "options": [
      "They had influenza so their lungs filled with fluids, drowning them",
      "They drowned as actors in a play about the Titanic",
      "They drowned in molasses",
      "They were drowned in beer"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where is a day longer than a year?",
    "options": [
      "On Mercury",
      "At the North and South Poles",
      "On Mars",
      "On Pluto"
    ],
    "correctIndex": 0
  },
  {
    "question": "It can reach an age far greater than that of any other living thing known - up to nearly 5,000 years.",
    "options": [
      "The Sequoia",
      "Redwood",
      "Western Mushroom",
      "Bristlecone Pine"
    ],
    "correctIndex": 3
  },
  {
    "question": "Carlton Magee invented this often-hated device.",
    "options": [
      "The police siren",
      "The parking meter",
      "The income tax short form",
      "The traffic light"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which continent is the island of Madagascar part of?",
    "options": [
      "South America",
      "Asia",
      "Australia",
      "Africa"
    ],
    "correctIndex": 3
  },
  {
    "question": "In April 2009, Gjorge Ivanov was elected the 4th President of  what country?",
    "options": [
      "Republic of Macedonia",
      "Republic of Lithuania",
      "Republic of the Marshall Islands",
      "Republic of Palau"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what US city is the Lincoln Memorial located?",
    "options": [
      "Wilmington, DE",
      "New York, NY",
      "Washington, DC",
      "Louisville, Kentucky"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which brand of paper is the The Quilted Quicker Picker-upper?",
    "options": [
      "Bounty",
      "Sparkle",
      "Scotts",
      "Browny"
    ],
    "correctIndex": 0
  },
  {
    "question": "On which continent is the geographic region of Central America located?",
    "options": [
      "Central America",
      "North America",
      "South America",
      "All of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "What day marks the start of Easter fasting in Eastern Christianity?",
    "options": [
      "Clean Monday",
      "Good Friday",
      "Palm Sunday",
      "Lazarus Saturday"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is a gadwall?",
    "options": [
      "A submarine",
      "A duck",
      "A cannon",
      "A firewall"
    ],
    "correctIndex": 1
  },
  {
    "question": "What artist wrote and performed the song Tears in Heaven?",
    "options": [
      "Eric Clapton",
      "Billie Holiday",
      "Duke Ellington",
      "Billy Joel"
    ],
    "correctIndex": 0
  },
  {
    "question": "This play was written by Shakespeare on the request of Queen Elizabeth I.",
    "options": [
      "Much Ado About Nothing",
      "The Tempest",
      "Henry VIII",
      "The Merry Wives of Windsor"
    ],
    "correctIndex": 3
  },
  {
    "question": "This was the first  TV show to demand and get $1 million per minute for ads.",
    "options": [
      "Seinfeld",
      "Everyone Loves Raymond",
      "Frasier",
      "Saturday Night Live"
    ],
    "correctIndex": 0
  },
  {
    "question": "German, Italian, French this language, are all official languages of Switzerland.",
    "options": [
      "Catalan",
      "Romansh",
      "Flemish",
      "Suomi"
    ],
    "correctIndex": 1
  },
  {
    "question": "It can be shown that this President is related, either by blood or by marriage, to eleven other Presidents.",
    "options": [
      "Franklin D. Roosevelt",
      "Benjamin Harrison",
      "James Madison",
      "Teddy Roosevelt"
    ],
    "correctIndex": 0
  },
  {
    "question": "This battle represented the farthest Westward advance into Central Europe of the Ottoman Empire.",
    "options": [
      "The Conquest of Vlad, 1529",
      "The Battle of Greece, 1529",
      "The Battle of Belgrade, 1529",
      "The Siege of Vienna, 1529"
    ],
    "correctIndex": 3
  },
  {
    "question": "During this year, the USA had three different Presidents.",
    "options": [
      "1841",
      "1864",
      "1844",
      "1973"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these words means attracting by false, flashy, or tacky charms.",
    "options": [
      "meretricious",
      "faletricious",
      "abstemious",
      "lucretius"
    ],
    "correctIndex": 0
  },
  {
    "question": "He was the founder of the Red Army, as well as a founding member of the Politburo.",
    "options": [
      "Trotsky",
      "Kerensky",
      "Potemkin",
      "Lenin"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of the following is often referred to as The Godfather of Hip Hop?",
    "options": [
      "Grandmaster Funk",
      "Kool DJ Herc",
      "Robinata Troop",
      "U-Roy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Why was Nicolas Appert vital in the success of Napoleon?",
    "options": [
      "He became Field Marshall Ney, head of the Cavalry",
      "He was Napoleons top spy",
      "He was responsible for Napoleons favorite horse",
      "He was one of Napoleons cooks"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to the Bible, the very first Rebecca was married to whom?",
    "options": [
      "Jacob",
      "Issac",
      "Abraham",
      "Abel"
    ],
    "correctIndex": 1
  },
  {
    "question": "Rebecca Romijn played Rogue in the X-Men trilogy.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who played the role of Rebecca Howe on the TV show Cheers?",
    "options": [
      "Kirstie Alley",
      "Rhea Perlman",
      "Shelley Long",
      "Bebe Neuwirth"
    ],
    "correctIndex": 0
  },
  {
    "question": "The character Rebecca Donaldson on the TV show Full House was meant to be a love interest for Danny Tanner but because of her popularity she became Jesse Katsopolis love interest.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which movie does Rebecca De Mornay play a nanny who tries to steal another womans family?",
    "options": [
      "Backdraft",
      "The Hand That Rocks the Cradle",
      "Never Talk to Strangers",
      "Risky Business"
    ],
    "correctIndex": 1
  },
  {
    "question": "When actress Rebecca Schaeffer was murdered by a stalker on July 18, 1989 she had been starring in what TV sitcom?",
    "options": [
      "Murphy Brown",
      "My Sister Sam",
      "Major Dad",
      "My Two Dads"
    ],
    "correctIndex": 1
  },
  {
    "question": "Many years before trivia, during the Devonian period, when trees and forests began to appear for the first time,  there were two types of fish: fish with ray fins and fish with lobe fins.  Which type were able to make their way onto the land and breath air?",
    "options": [
      "Neither",
      "Both",
      "Ray finned fish",
      "Lobe finned fish"
    ],
    "correctIndex": 3
  },
  {
    "question": "Why was there a mutiny on the Russian ship, The Potemkin?",
    "options": [
      "The sailors favored the Communists over the Tsar",
      "The meat was not good",
      "The sailors wanted to help put out a fire in town and the captain refused to let them",
      "The sailors were paid a very low wage"
    ],
    "correctIndex": 1
  },
  {
    "question": "When was the first major use of tanks in a battle?",
    "options": [
      "World War I - Nov 20, 1914",
      "World War II - 1941",
      "World War I - Nov 20, 1917",
      "World War I - Nov 20, 1918"
    ],
    "correctIndex": 2
  },
  {
    "question": "Ren\u00c3\u00a9 Th\u00c3\u00a9ophile Hyacinthe La\u00c3\u00abnnec (1781-1826) invented this important item, still in use today.",
    "options": [
      "The dental drill",
      "The safety pin",
      "The stethoscope",
      "The chalkboard"
    ],
    "correctIndex": 2
  },
  {
    "question": "Of all the symphonies regularly performed, which is the longest?",
    "options": [
      "Stravinskys #14 in B sharp major",
      "Hayden Symphony #78 in C major",
      "Mahlers Symphony #3 in D minor",
      "Beethovens #9 in G minor"
    ],
    "correctIndex": 2
  },
  {
    "question": "During this battle, which took place towards the end of the American Revolutionary War, Lincoln had to surrender along with 3000 troops.",
    "options": [
      "Stroudsburg",
      "Valley Forge",
      "Baltimore",
      "Charleston"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does Greshams Law state?",
    "options": [
      "Stock prices lower when unemployment reaches over 6%",
      "Bad money drives good money out of circulation",
      "Every 2% increase in supply lowers demand by 1%",
      "The first hot dog you eat is always better than the second"
    ],
    "correctIndex": 1
  },
  {
    "question": "In The Office, what alias does Michael Scott often use?",
    "options": [
      "Art Van der Lay",
      "David Wallace",
      "Michael Scarn",
      "Sara Tesasdale"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which list of ranks is in proper order for the US Army?",
    "options": [
      "private-corporal-sergeant-major-captain-colonel",
      "private-corporal-sergeant-lieutenant-major-colonel-general",
      "private-corporal-lieutenant-sergeant-captain-major-general",
      "private-corporal-sergeant-captain-colonel-major"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the English translation of the name of the most famous book written by Nostradamus?",
    "options": [
      "The Future",
      "Prophecies Gleaned from the Bible",
      "Centuries",
      "The Next Coming"
    ],
    "correctIndex": 2
  },
  {
    "question": "Tales of horror first began as an oral tradition - stories told around the hearth. In the story of Beowulf, this vaguely human character is the descendant of the first murderer, Cain. At one point in the story, he kills and eats Hro\u00c3\u00b0gars warriors while they sleep.",
    "options": [
      "Hogwart",
      "Grendel",
      "Pantagruel",
      "Gargantua"
    ],
    "correctIndex": 1
  },
  {
    "question": "With witches, ghosts, and murder this play by Shakespeare has nearly all the elements of horror fiction.  First performed around 1606, it is called simply The Scottish Play by many actors who consider calling the play by its real title bad luck.",
    "options": [
      "Macbeth",
      "King Lear",
      "The Merchant of Venice",
      "The Tempest"
    ],
    "correctIndex": 0
  },
  {
    "question": "Two landmark works of horror released in the 19th century were Frankenstein (1818) by Mary Shelley and Dracula (1897) by this Irish author.",
    "options": [
      "Bram Stoker",
      "W. H. Auden",
      "Lord Byron",
      "Robert Louis Stevenson"
    ],
    "correctIndex": 0
  },
  {
    "question": "The 19th century saw the rise of the ghost story among acclaimed Victorian authors. Which of the following cannot be considered a work of supernatural fiction?",
    "options": [
      "The Turn of the Screw by Henry James",
      "The Canterville Ghost by Oscar Wilde",
      "A Christmas Carol by Charles Dickens",
      "The Luck of Barry Lyndon by William Makepeace Thackeray"
    ],
    "correctIndex": 3
  },
  {
    "question": "Beginning in the 1970s, author Stephen King re-popularized the horror novel. Which of the following novels was NOT written by King?",
    "options": [
      "Carrie",
      "Hideaway",
      "Salems Lot",
      "The Dead Zone"
    ],
    "correctIndex": 1
  },
  {
    "question": "The horror explosion of the 1970s resulted in the infiltration of horror themes in popular music. Which band released the albums Paranoid, Master of Reality, Heaven  Hell, We Sold Our Souls for Rock  Roll, Live Evil, and Sabotage?",
    "options": [
      "Black Sabbath",
      "KISS",
      "Iron Maiden",
      "Alice Cooper"
    ],
    "correctIndex": 0
  },
  {
    "question": "By the mid-1990s, horror movies were in dire need of something new. The standard formulas were becoming tired and old. One of the most successful films of this period, Scream (1996), was basically tongue-in-cheek and poked fun at the now cliche horror film genre. Which actress did NOT appear in Scream?",
    "options": [
      "Neve Campbell",
      "Sarah Michelle Gellar",
      "Drew Barrymore",
      "Courteney Cox"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the Harry Potter series, what are the Dark Lords henchmen known as?",
    "options": [
      "Deathbringers",
      "DA",
      "Order of the Phoenix",
      "Deatheaters"
    ],
    "correctIndex": 3
  },
  {
    "question": "In The Lord of the Rings, what are the Dark Lord Saurons chief henchmen called?",
    "options": [
      "Dragons",
      "Nazgul",
      "Balrogs",
      "Orcs"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following henchmen was the only one to appear in more than one James Bond movie?",
    "options": [
      "Oddjob",
      "Jaws",
      "Pusssy Galore",
      "Goldfinger"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the Mario video game series, Marios arch enemy, Bowser, uses what reptilian creatures as his chief henchmen?",
    "options": [
      "Snakes",
      "Goombas",
      "Raptors",
      "Koopatroopas"
    ],
    "correctIndex": 3
  },
  {
    "question": "What are the henchmen and secret police of the White Witch in the Chronicles of Narnia: The Lion, the Witch, and the Wardrobe?",
    "options": [
      "Wolves",
      "Dwarfs",
      "Minotaurs",
      "Gnomes"
    ],
    "correctIndex": 0
  },
  {
    "question": "During the Roman Empire, the Praetorians were the select few men who secretly carried out the desires of the emperor.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Bram Stokers horror novel, vampires are the henchmen of this Count.",
    "options": [
      "Vlad",
      "Dracula",
      "Van Helsing",
      "Frankenstein"
    ],
    "correctIndex": 1
  },
  {
    "question": "On August 20, 1968 five members of the Warsaw Pact invaded this country to quell the new reforms put in place by this countrys new leader. In what country did Alexander Dubcek try to bring freedom of the press and rights for workers?",
    "options": [
      "Hungary",
      "Ukraine",
      "Poland",
      "Czechoslovakia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What Beatles single, that ran seven minutes, was the first to be released on the Beatles new Apple label?",
    "options": [
      "Let It Be",
      "Hey, Jude",
      "Revolution",
      "The Long and Winding Road"
    ],
    "correctIndex": 1
  },
  {
    "question": "When Anti-war protesters, socialists and Yippes (Youth International Party ) descended on the 1968 Democratic National Convention, the mayor of this city responded by using 12,000",
    "options": [
      "Richard Daley",
      "Jerry Brown",
      "Nelson Rockafeller",
      "John Lindsay"
    ],
    "correctIndex": 0
  },
  {
    "question": "It was after winning the California Democratic Primary that Robert Kennedy was shot at the Ambassador Hotel when he walked into a service area to greet supporters. Who was convicted for the assassination of Robert Kennedy?",
    "options": [
      "Jack Ruby",
      "Lee Harvey Oswald",
      "Sirhan Sirhan",
      "James Earl Ray"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the name of Hermones cat in the Harry Potter series?",
    "options": [
      "Kittywizardodopolis",
      "Dumbledore",
      "Crookshanks",
      "Squeaks"
    ],
    "correctIndex": 2
  },
  {
    "question": "The two female cats that share Joe Greys talents at sleuthing are Dulce and this cat.",
    "options": [
      "Lovelylace",
      "Kit",
      "Kaboodle",
      "Amelia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the father of the fictional black cat Midnight Louie?",
    "options": [
      "Louie Temple Barr",
      "Louis the LVII",
      "Noontime Louie",
      "Three OClock Louie"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which cat is the co-author of Rita Mae Browns Mrs. Murphy series?",
    "options": [
      "Cleopatra",
      "Sneaky Pie Brown",
      "Little Guy",
      "Mrs. Calabash"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of Alices cat in Alice in Wonderland?",
    "options": [
      "Cheshire",
      "Dinah",
      "Dapple-Kit",
      "Rumpleteaser"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the hapless kitty villain who is constantly being outwitted by the little bird Tweety Pie?",
    "options": [
      "Sylvester",
      "Tom",
      "Wil E. Cat",
      "Garfield"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of the cat in Edgar Allen Poes short story The Black Cat?",
    "options": [
      "Midnight",
      "Neptune",
      "Blackie",
      "Pluto"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is Mrs. Murphys best friend in the Rita Mae Brown series?",
    "options": [
      "Puce",
      "Pinky",
      "Kahula",
      "Tucker Tee"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of the First Cat in the Clinton Whitehouse?",
    "options": [
      "Alphie",
      "Monica",
      "Socks",
      "Scallops"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is known as the Vienna Hour in a traditional Sicilian wedding reception?",
    "options": [
      "Desert course",
      "Giving toasts",
      "Giving wedding gifts",
      "Cocktail serving"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this country, friends of the newly weds will do anything to make the first night as hard as possible.",
    "options": [
      "Poland",
      "Germany",
      "China",
      "Norway"
    ],
    "correctIndex": 1
  },
  {
    "question": "The last dance at wedding receptions in Poland is Pani Mloda, also know as this dance.",
    "options": [
      "Jolly",
      "Groom",
      "Money",
      "Funny"
    ],
    "correctIndex": 2
  },
  {
    "question": "Sangria is a drink, traditionally served at Mexican weddings. Sangria contains all these ingredients, except one.",
    "options": [
      "Fruit juice",
      "Tequila",
      "Brandy",
      "Wine"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ceilidh, pronounced /KAY lee/, is a traditional wedding dance in this country.",
    "options": [
      "Scotland",
      "Argentina",
      "Spain",
      "Hungary"
    ],
    "correctIndex": 0
  },
  {
    "question": "At wedding ceremonies in China, both the bride and the groom are dressed in this color.",
    "options": [
      "Blue",
      "Silver",
      "Yellow",
      "Red"
    ],
    "correctIndex": 3
  },
  {
    "question": "At wedding ceremonies in Iran, this object is placed between two candelabras on a spread, to represent  the brightly future of the couple.",
    "options": [
      "Silver plate",
      "Mirror",
      "Lamp",
      "Diamond ring"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this country, wearing orange blossoms on your wedding day is a symbol of virginity.",
    "options": [
      "France",
      "Turkey",
      "Greece",
      "Holland"
    ],
    "correctIndex": 0
  },
  {
    "question": "The term Honeymoon originates from the times when a man and a woman remained in hiding for certain cycles of the moon and did this.",
    "options": [
      "Ate honeydew melons",
      "Chased honey bees",
      "Drank honey wine",
      "Ate honey"
    ],
    "correctIndex": 2
  },
  {
    "question": "Algonquin wedding feasts include many traditional American Indian foods, as well as this type of meat.",
    "options": [
      "Pork",
      "Hare",
      "Horse",
      "Deer"
    ],
    "correctIndex": 3
  },
  {
    "question": "The number one girls name of 2006, Emily, means what?",
    "options": [
      "Princess",
      "Flower",
      "Wealthy",
      "Industrious"
    ],
    "correctIndex": 3
  },
  {
    "question": "Jacob, the most popular boys name of 2006, means one who fishes.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This name, most popular in the 80s and 90s, means wealth, but also clairvoyance or foresight.",
    "options": [
      "Miranda",
      "Sarah",
      "Jessica",
      "Kristen"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the name Zachary mean?",
    "options": [
      "Gods servant",
      "Gift from God",
      "God has remembered",
      "Warlike"
    ],
    "correctIndex": 2
  },
  {
    "question": "The name Ethan was the fourth most popular baby name of 2006, and means what?",
    "options": [
      "Shepherd",
      "Strong, optimistic",
      "Intelligent, wise",
      "Of the forest"
    ],
    "correctIndex": 1
  },
  {
    "question": "Hannah means grace and charm.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This name is of German origin and means protection.",
    "options": [
      "Robert",
      "George",
      "William",
      "Richard"
    ],
    "correctIndex": 2
  },
  {
    "question": "This was the ninth most popular 2006 male baby name. Its origin is not exactly known, but it does come from a Roman family name and it has been suggested that is was derived from the Greek word for flower.",
    "options": [
      "Anthony",
      "Michael",
      "Thomas",
      "Carlos"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the e.e. in the name, e.e. cummings stand for?",
    "options": [
      "Edward Estlin",
      "Edar Eastwood",
      "Edward Elgar",
      "Edgar Edward"
    ],
    "correctIndex": 0
  },
  {
    "question": "The U.S. Supreme Court ruled in 1972, that capital punishment was unconstitutional.  What was the name of the case?",
    "options": [
      "Hammer v. Illinois",
      "Gregg v. Georgia",
      "Dagenhart v. Texas",
      "Furman  v. Florida"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these most accurately describes the school of Thomism?",
    "options": [
      "The attempt to unify protestantism and Catholicism",
      "The attempt to unify Aristotles ideas with those of the Bible",
      "The attempt to unify Newtons mechanics and quantum mechanics",
      "The attempt to unify quantum mechanics and general relativity"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is a genuine mathematical principle?",
    "options": [
      "The Pigeon Hole Principle",
      "The Inner Calculus Principle",
      "The Second Integral Theorem",
      "The Continuum Principle"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these words means  gloomy, dark, sadly dim?",
    "options": [
      "insouciant",
      "qutianous",
      "prolix",
      "tenebrous"
    ],
    "correctIndex": 3
  },
  {
    "question": "People suffering from graphophobia are afraid of what?",
    "options": [
      "Hair",
      "Speaking",
      "Animals",
      "Writing"
    ],
    "correctIndex": 3
  },
  {
    "question": "The fear of women is called hierophobia.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What term stands for the excessive fear of snakes?",
    "options": [
      "Arachnophobia",
      "Agoraphobia",
      "Ophidiophobia",
      "Novercaphobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Thanatophobia is a condition, characterized by an abnormal fear of what?",
    "options": [
      "Death",
      "Needles",
      "Dogs",
      "Insects"
    ],
    "correctIndex": 0
  },
  {
    "question": "What medical term defines the fear of eating?",
    "options": [
      "Phagophobia",
      "Mastophobia",
      "Foodophobia",
      "Emetophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "A person who is excessively afraid of getting married suffers from what phobia?",
    "options": [
      "Wedophobia",
      "Entomophobia",
      "Acrophobia",
      "Gamophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Belonephobia is the irrational fear of needles.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The fear of high objects, drafts, and air-swallowing is known as rhodophobia.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Acrophobia is a term, defined as an excessive fear of what?",
    "options": [
      "Heights",
      "Travel",
      "Water",
      "Light"
    ],
    "correctIndex": 0
  },
  {
    "question": "This medical term is defined as the abnormal fear of darkness, and commonly experienced by children.",
    "options": [
      "Cynophobia",
      "Nightophobia",
      "Zoophobia",
      "Nyctophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Located in the Northwest Territories, what lake empties into the Mackenzie River and is considered the largest lake that is entirely within Canada?",
    "options": [
      "Lake Huron",
      "Great Bear Lake",
      "Lake Superior",
      "Great Slave Lake"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which 1951 Tony winner for Best Musical had its music and lyrics written by Frank Loesser and included such characters as Nathan Detroit, Miss Adelaide, and Sky Masterson?",
    "options": [
      "The Pajama Game",
      "Guys and Dolls",
      "Carousel",
      "South Pacific"
    ],
    "correctIndex": 1
  },
  {
    "question": "After gaining 30 pounds and donning a set of prosthetic teeth, Charlize Theron teamed up with Christina Ricci and won a 2003 Academy Award for Best Actress in the biographical, crime, thriller movie titled Monster. What real life serial killer and prostitute did Charlize portray in this film?",
    "options": [
      "Lizzie Borden",
      "Lynette Squeaky Fromme",
      "Aileen Wournos",
      "Valerie Solanas"
    ],
    "correctIndex": 2
  },
  {
    "question": "Also the name of a famous vodka, Finlandia was a symphonic poem first written in 1899 by what Finnish composer?",
    "options": [
      "Frederic Chopin",
      "Edvard Grieg",
      "Jean Sibelius",
      "Magnus Lindberg"
    ],
    "correctIndex": 2
  },
  {
    "question": "What first full admiral of the Navy, uttered the famous phrase, Damn the torpedoes, full speed ahead!, during the American Civil War at the Battle of Mobile Bay?",
    "options": [
      "Stephen Decatur",
      "David Farragut",
      "Oliver Hazard Perry",
      "John Paul Jones"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the creator of The Prelude, who was the Poet Laureate in England from 1843 to 1850 and comprised a group known as the Lake Poets with Samuel Taylor Coleridge and Robert Southey.",
    "options": [
      "John Donne",
      "Lord Byron",
      "William Wordsworth",
      "Robert Browning"
    ],
    "correctIndex": 2
  },
  {
    "question": "Named after a 19th century British surgeon and anatomist, the Bowmans capsule is located in which organ/s of the human body?",
    "options": [
      "Lungs",
      "Kidneys",
      "Pancreas",
      "Brain"
    ],
    "correctIndex": 1
  },
  {
    "question": "What famous Israeli liqueur comes in a genie shaped bottle and has a distinctive chocolate/orange flavor?",
    "options": [
      "Sabra",
      "Triple Sec",
      "Cointreau",
      "Grand Marnier"
    ],
    "correctIndex": 0
  },
  {
    "question": "Although almost non-existent today, what ancient religion, stemming predominantly from Persia, worshipped Ahura Mazda as an uncreated Creator and God.",
    "options": [
      "Hinduism",
      "Rastafarianism",
      "Zoroastrianism",
      "Taoism"
    ],
    "correctIndex": 2
  },
  {
    "question": "What name was given to the monster created in Mary Shelleys classic novel subtitled The Modern Prometheus?",
    "options": [
      "The monster didnt have a name.",
      "Frankenstein",
      "Dr. Jekyll",
      "Victor"
    ],
    "correctIndex": 0
  },
  {
    "question": "Most heroin-related deaths are not caused by an overdose but by a lethal combination with other drugs in the body.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This heavy metal has the symbol Pb. It is a poisonous neurotoxin that can cause brain and blood disorders.",
    "options": [
      "Mercury",
      "Chloride",
      "Lead",
      "Chromium"
    ],
    "correctIndex": 2
  },
  {
    "question": "Born Charles Dennis Buchinsky in 1921, this The Dirty Dozen and Rider on the Rain actor was known in Italy as Il Brutto (The Ugly One).",
    "options": [
      "Ernest Borgnine",
      "Telly Savalas",
      "Charles Bronson",
      "Donald Pleasence"
    ],
    "correctIndex": 2
  },
  {
    "question": "Actors Dolph Lundgren, Lena Olin, and Ann Margaret hail from this Scandinavian country that joined the European Union in 1995.",
    "options": [
      "Finland",
      "Sweden",
      "Norway",
      "Estonia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name for a layer of gasses that surround a large object and are held in place by the objects gravity?",
    "options": [
      "Atmosphere",
      "Molecular mass",
      "Escape velocity",
      "Surface gravity"
    ],
    "correctIndex": 0
  },
  {
    "question": "Author Dean Koontz was so upset with the 1996 film version of this book that he has demanded creative control over every film based on one of his books.",
    "options": [
      "Watchers",
      "Carrie",
      "Phantoms",
      "Hideaway"
    ],
    "correctIndex": 3
  },
  {
    "question": "This singer sang Etta James song A Sunday Kind of Love on the TV show Star Search in 1990. She hosted a 2004 Saturday Night Live episode featuring a Sex and the City parody, where she played Samantha Jones and revealed she was a man.",
    "options": [
      "Mariah Carey",
      "Britney Spears",
      "Christina Aguilera",
      "P!nk"
    ],
    "correctIndex": 2
  },
  {
    "question": "These omnivorous mammals are native to North America. They carry their young for 65 days and give birth to up to five babies. They live up to 16 years, but their average life expectancy is 2 years due to hunting and traffic deaths.",
    "options": [
      "raccoons",
      "squirrels",
      "deer",
      "coyote"
    ],
    "correctIndex": 0
  },
  {
    "question": "Shortly after WWII, the Centers for Disease Control and Prevention was founded in this city that hosted the 1939 premiere of Gone With the Wind.",
    "options": [
      "Atlanta, GA",
      "Nashville, TN",
      "Birmingham, AL",
      "Raleigh, NC"
    ],
    "correctIndex": 0
  },
  {
    "question": "Relying on a hand crank for power, this gun is considered the first machine gun since it could fire continuously.",
    "options": [
      "Maxim gun",
      "Carronade",
      "Gatling gun",
      "Howitzer"
    ],
    "correctIndex": 2
  },
  {
    "question": "This NFL team, established in 1933, plays its home games in Heinz Field. In 2008, ESPN.com ranked this teams fans as the best in the NFL partly due to their sellout streak of 299 consecutive games.",
    "options": [
      "Chicago Bears",
      "Dallas Cowboys",
      "New York Giants",
      "Pittsburgh Steelers"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which one of the Great Lakes is situated entirely within the United States?",
    "options": [
      "Lake Michigan",
      "Lake Erie",
      "Lake Huron",
      "Lake Superior"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 2007 the Muslims in the world outnumbered the Christians.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these islands is the largest island in the Mediterranean Sea?",
    "options": [
      "Malta",
      "Corfu",
      "Cyprus",
      "Sicily"
    ],
    "correctIndex": 3
  },
  {
    "question": "The North Atlantic Treaty Organization (NATO) was formed in this year.",
    "options": [
      "1949",
      "1945",
      "1941",
      "1950"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the best selling album of all time in the United States as of 2007?",
    "options": [
      "The Eagles Greatest Hits 1971-1975",
      "The Wall, by Pink Floyd",
      "Thriller, by Michael Jackson",
      "Led Zeppelin IV, by Led Zeppelin"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Greek philosopher is known for writing about the fabled land of Atlantis.",
    "options": [
      "Plato",
      "Socrates",
      "Homer",
      "Aristotle"
    ],
    "correctIndex": 0
  },
  {
    "question": "What year did the United States boycott the International Olympic Games?",
    "options": [
      "1972",
      "1976",
      "1984",
      "1980"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who or what is Vinson Massif?",
    "options": [
      "Sanitations third cousin, twice removed",
      "The third king of Sweden",
      "The tallest mountain in Antarctica",
      "a muscle in the human body"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Movie Gone with the Wind was the first feature length film shot entirely in color.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which country has the highest population density in the world as of 2008?",
    "options": [
      "Singapore",
      "Monaco",
      "China",
      "India"
    ],
    "correctIndex": 1
  },
  {
    "question": "John Travoltas mother appeared in the movie Grease.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A chimp named Laika was the first living mammal to orbit the earth.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Wyoming was the first U. S. state to give women the right to vote.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 1989 movie Bill  Teds Excellent Adventure, which historical figure do the boys NOT bring back for their history presentation?",
    "options": [
      "Socrates",
      "George Washington",
      "Billy the Kid",
      "Genghis Khan"
    ],
    "correctIndex": 1
  },
  {
    "question": "When a contestant selects the Daily Double on the game show Jeopardy! what is the least amount the player can wager?",
    "options": [
      "$5",
      "$100",
      "$50",
      "$250"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Greek goddess, daughter of Zeus and Metis, is the virgin patron of Athens. The Parthenon was built as her temple.",
    "options": [
      "Aphrodite",
      "Hera",
      "Athena",
      "Venus"
    ],
    "correctIndex": 2
  },
  {
    "question": "This is the 3rd largest city in Germany and the capital of its largest state, Bavaria.",
    "options": [
      "Hamburg",
      "Nuremberg",
      "Munich",
      "Berlin"
    ],
    "correctIndex": 2
  },
  {
    "question": "This word is Sanskrit for Great Soul, and is used like the title Saint. Some believe that it was first used in 1915 when speaking of Ghandi.",
    "options": [
      "Master",
      "Mahatma",
      "Mehta",
      "Mohandas"
    ],
    "correctIndex": 1
  },
  {
    "question": "This 61* and The Punisher actor was born Thomas Elliott III in Baltimore, MD. He studied at the Lee Strasburg Theatre Institute in Hollywood. He married actress Patricia Arquette in 2004.",
    "options": [
      "Mark Wahlberg",
      "Thomas Jane",
      "Will Patton",
      "Nicolas Cage"
    ],
    "correctIndex": 1
  },
  {
    "question": "The weekly news magazine Newsweek was launched in 1933. It has a worldwide circulation of over 4 million, and is printed in Japanese, Korean, Arabic, English, Polish, Russian, and Spanish. Where is the magazine published?",
    "options": [
      "London",
      "New York City",
      "Chicago",
      "Washington, D.C.,"
    ],
    "correctIndex": 1
  },
  {
    "question": "Before becoming US President in 1981, he was head of a labor union.",
    "options": [
      "Hoover",
      "Truman",
      "Johnson",
      "Reagan"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the full name of the 33rd US President?",
    "options": [
      "Harry S. Truman",
      "Harry Shine Truman",
      "Harry Simpson Truman",
      "Harry Simon Truman"
    ],
    "correctIndex": 0
  },
  {
    "question": "Gangster Al Capone, popular as Scarface, was known by what other nickname?",
    "options": [
      "Snorky",
      "Loverboy",
      "The senator",
      "The fox"
    ],
    "correctIndex": 0
  },
  {
    "question": "This amendment of the United States Constitution, which is part of the Bill of Rights, guards against unreasonable searches and seizures.",
    "options": [
      "Fourth Amendment",
      "Fifth Amendment",
      "Sixth Amendment",
      "Third Amendment"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Hungarian-Austrian physician demonstrated that puerperal fever (also known as childbed fever) was contagious and that its incidence could be considerably reduced by enforcing appropriate hand washing behavior.",
    "options": [
      "Dr. J. Lister",
      "Dr. L. Pastuer",
      "Dr. J. Kirchner",
      "Dr. I. Semmelweis"
    ],
    "correctIndex": 3
  },
  {
    "question": "It is generally accepted that the name of these islands of volcanic origin derives from a Latin term, meaning Island of the Dogs.",
    "options": [
      "The Canary Islands",
      "The Galapagos Islands",
      "Corn Islands",
      "The Solentiname Islands"
    ],
    "correctIndex": 0
  },
  {
    "question": "One of the two species, comprising the chimpanzee genus, is the Common Chimpanzee. What is the name of the other species?",
    "options": [
      "Kalapuor chimpanzee",
      "Lowland chimpanzee",
      "Bonobo chimpanzee",
      "Highland chimpanzee"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Hebrew word refers to a non-human, speechless, animated being from Jewish folklore.",
    "options": [
      "Lemech",
      "Golem",
      "Robot",
      "Emes"
    ],
    "correctIndex": 1
  },
  {
    "question": "This American actress and stand-up comedian, host of a syndicated talk show, wrote an autobiography, entitled My Point...And I Do Have One.",
    "options": [
      "Ellen DeGeneres",
      "Phyillis Diller",
      "Wanda Sykes",
      "Joan Rovers"
    ],
    "correctIndex": 0
  },
  {
    "question": "In trigonometry this law, which generalizes the Pythagorean theorem, is a statement about a general triangle, which relates the lengths of its sides to the cosine of a known angle.",
    "options": [
      "The Archimedean Principle",
      "The Law of Adjacent Hypotenuses",
      "The Rule of Three",
      "The Law of Cosines"
    ],
    "correctIndex": 3
  },
  {
    "question": "Jonathan Larson based his rock musical on the opera La Boheme. What rock musical about young artists and musicians and their struggle, hopes and fears made it to # 2 on Entertainment Weeklys New Classics List?",
    "options": [
      "Hair",
      "The Heidi Chronicles",
      "Jersey Boys",
      "Rent"
    ],
    "correctIndex": 3
  },
  {
    "question": "This 1996 game introduced networked play and 3-D graphics. What game introduced or perfected this landmark first person shooter according to Entertainment Weekly?",
    "options": [
      "Doom",
      "GoldenEye007",
      "Grand Theft Auto",
      "StarCraft"
    ],
    "correctIndex": 0
  },
  {
    "question": "The cow as white as milk",
    "options": [
      "d the slipper as pure as gold.",
      "Wicked",
      "Into the Woods",
      "The Heidi Chronicles",
      "Prelude to a Kiss"
    ],
    "correctIndex": 2
  },
  {
    "question": "Gollum was a marvel of computer graphics in The Lord of the Rings. What actor gave Gollum his movements?",
    "options": [
      "Andy Serkis",
      "Eddie Deezen",
      "Fat Joe",
      "Savion Glover"
    ],
    "correctIndex": 0
  },
  {
    "question": "The best thing about being a woman",
    "options": [
      "Mariah Carey",
      "Beyonce",
      "Madonna",
      "Shania Twain"
    ],
    "correctIndex": 3
  },
  {
    "question": "What Victorian poet is the author of Porphyrias Lover, a poem written in the form of a shocking dramatic monologue?",
    "options": [
      "Robert Hass",
      "Robert Burns",
      "Robert Browning",
      "Robert Frost"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these songs, inducted into the Grammy Hall of Fame, was not recorded by the singer-songwriter, born Robert Allen Zimmerman?",
    "options": [
      "Aint No Mountain High Enough",
      "Mr. Tambourine Man",
      "Like a Rolling Stone",
      "Blowin in the Wind"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which movie, directed by Academy Award-winning director, Robert Zemeckis, includes the often quoted line Life was like a box of chocolates. You never know what youre gonna get.?",
    "options": [
      "The Polar Express",
      "Forrest Gump",
      "What Lies Beneath",
      "Back to the Future"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these actors made his debut at the age of 5 in a movie written and directed by his father?",
    "options": [
      "Robert Duvall",
      "Robert Redford",
      "Robert Downey, Jr.",
      "Robert De Niro"
    ],
    "correctIndex": 2
  },
  {
    "question": "What poet noted for his realistic depictions of rural life received four Pulitzer Prizes?",
    "options": [
      "Robert Kelly",
      "Robert Frost",
      "Robert Browning",
      "Robert L. Hass"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which novel by Scottish writer Robert Louis Stevenson is set during the War of the Roses?",
    "options": [
      "The Master of Ballantrae",
      "The Black Arrow",
      "Strange Case of Dr Jekyll and Mr Hyde",
      "Treasure Island"
    ],
    "correctIndex": 1
  },
  {
    "question": "What actor won an Academy Award in 1980 for portraying a character who loved the smell of napalm in the morning?",
    "options": [
      "Robert Duvall",
      "Robert Redford",
      "Robert De Niro",
      "Robert Young"
    ],
    "correctIndex": 0
  },
  {
    "question": "Robert De Niro won his first Academy Award for the portrayal of this former boxing champion.",
    "options": [
      "Jake LaMotta",
      "James Braddock",
      "Marcel Cerdan",
      "Nino Benvenuti"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the author of the spy thrillers The Bourne Identity, The Bourne Supremacy and The Bourne Ultimatum, which were adapted into movies starring Matt Damon.",
    "options": [
      "Robert J. Sawyer",
      "Robert Kerr",
      "Robert Coover",
      "Robert Ludlum"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to the popular TV show, at what restaurant does Alice work?",
    "options": [
      "Dennys",
      "Burger King",
      "McDonalds",
      "Mels Diner"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of George and Louise Jeffersons son on All in the Family?",
    "options": [
      "Jamar",
      "Keon",
      "Lionel",
      "Tyrone"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first member of The Monkees to quit, shortly after the bands Far East tour in December 1968?",
    "options": [
      "Micky Dolenz",
      "Davy Jones",
      "Peter Tork",
      "Michael Nesmith"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the Dynasty star featured in the December, 1983 issue of Playboy magazine.",
    "options": [
      "Heather Locklear",
      "Joan Collins",
      "Emma Samms",
      "Catherine Oxenberg"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the 1983 movie The Big Chill, which famous magazine did Michael work for?",
    "options": [
      "People",
      "Time",
      "Newsweek",
      "Entertainment Weekly"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of Newsweeks unsuccessful sports publication?",
    "options": [
      "Sports Newsweek",
      "Inside Sports",
      "The Week in Sports",
      "Sports Weekly"
    ],
    "correctIndex": 1
  },
  {
    "question": "On what game show did contestants receive unwanted joke prizes, called zonks?",
    "options": [
      "Family Feud",
      "Lets Make a Deal",
      "Check-Out",
      "The Price is Right"
    ],
    "correctIndex": 1
  },
  {
    "question": "What American star portrayed the character of Viktor Komarovsky in the 1965 drama-romance-war film Doctor Zhivago?",
    "options": [
      "Jack Nicholson",
      "Robert Redford",
      "Rod Steiger",
      "Omar Sharif"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is rock singer Ozzy Osbournes real name?",
    "options": [
      "Oscilius Osbroune",
      "Octavius Osbourne",
      "John Osbourne",
      "James Osbourne"
    ],
    "correctIndex": 2
  },
  {
    "question": "True of False: Jules Vernes real name was Jean-Luc Vernes.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The movie \u00e2\u0080\u009cTo Sir, with Love\u00e2\u0080\u009d stars Sidney Poitier as a teacher confronted with a class of arrogant and provocative students. In what city is the movie set?",
    "options": [
      "Liverpool",
      "San Francisco",
      "London",
      "New York City"
    ],
    "correctIndex": 2
  },
  {
    "question": "What fictional teacher, portrayed by Robin Williams, told his students that, if they felt daring, they could call him O Captain! My Captain!?",
    "options": [
      "Mark Thackeray",
      "John Keating",
      "George Feeny",
      "Jaime Escalante"
    ],
    "correctIndex": 1
  },
  {
    "question": "This movie tells the story of a former U.S. Marine who becomes a teacher nicknamed white bread by her minority students.",
    "options": [
      "Finding Forrester",
      "Dangerous Liaisons",
      "Freedom Writers",
      "Dangerous Minds"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what novel does Charles Dickens depict Mr. Thomas Gradgrind, the teacher who teaches his students nothing but facts?",
    "options": [
      "Hard Times",
      "Dombey and Son",
      "Bleak House",
      "Great Expectations"
    ],
    "correctIndex": 0
  },
  {
    "question": "Now tell your father not to teach you any more. Its best to begin reading with a fresh mind are words Miss Caroline addresses to Jean Louise, the narrator of this novel.",
    "options": [
      "To Kill a Mockingbird",
      "North and South",
      "The Millstone",
      "Jerusalem the Golden"
    ],
    "correctIndex": 0
  },
  {
    "question": "What 2007 movie, based on a true story, ends with a note that Erin Gruwell successfully brought many of her students to graduation and college?",
    "options": [
      "The Ron Clark Story",
      "The Diary of Anne Frank",
      "Freedom Writers",
      "Dangerous Minds"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the Gus Van Sant movie in which Robert Crawford, a haughty literature professor, accuses Jamal Wallace of plagiarism.",
    "options": [
      "Good Will Hunting",
      "Finding Forrester",
      "Beautiful Mind",
      "Dead Poets Society"
    ],
    "correctIndex": 1
  },
  {
    "question": "The movie Stand and Deliver is centered around Jaime A. Escalante, who gave up a steady well-paid job to become a dedicated teacher in a school where rebellion runs. What subject did Mr. Escalante teach?",
    "options": [
      "chemistry",
      "physics",
      "biology",
      "mathematics"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these actors has played both a disruptive student and an inspiring teacher?",
    "options": [
      "Richard Harris",
      "Sidney Poitier",
      "Sean Connery",
      "Hugh Grant"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these films does not tell the story of a real life teacher?",
    "options": [
      "Stand and Deliver",
      "Dangerous Minds",
      "The Principal",
      "The Ron Clark Story"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where is the loch, allegedly inhabited by the notorious Loch Ness Monster?",
    "options": [
      "Wales",
      "Southern Ireland",
      "Northern Scotland",
      "England"
    ],
    "correctIndex": 2
  },
  {
    "question": "Loch Ness is the largest body of water in which huge geologic fault?",
    "options": [
      "Great Glen",
      "Scotia",
      "Augustus",
      "Highlands"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the Scottish Gaelic name of the Loch Ness Monster?",
    "options": [
      "Monstru",
      "Nillie",
      "Neska",
      "Niseag"
    ],
    "correctIndex": 3
  },
  {
    "question": "This town, closely linked to the legend of the Loch Ness monster, lies at the mouth of the river Ness.",
    "options": [
      "Glenny",
      "Urquhart",
      "Aberdeen",
      "Inverness"
    ],
    "correctIndex": 3
  },
  {
    "question": "The exploration of the Loch Ness Monster is related to which field of study?",
    "options": [
      "Phycology",
      "Ornithology",
      "Mycology",
      "Cryptozoology"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Saint is supposed to have seen the Loch Ness Monster and even to have tamed it.",
    "options": [
      "St Columba",
      "St George",
      "St John",
      "St Peter"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the profession of Mr R.K. Wilson, who was claimed to have taken probably the most famous picture of what was supposed to be the Loch Ness Monster?",
    "options": [
      "Teacher",
      "Surgeon",
      "Dentist",
      "Lawyer"
    ],
    "correctIndex": 1
  },
  {
    "question": "This was the leader of the group that searched Loch Ness in the early 1970s and claimed to have made underwater photographs of the monster.",
    "options": [
      "MR Trules",
      "Sir Peter Scott",
      "Professor Jankins",
      "Dr. Robert Rines"
    ],
    "correctIndex": 3
  },
  {
    "question": "What kind of creature was the extinct Plesiosaur, which is usually said to be similar to the monster of Loch Ness?",
    "options": [
      "Dinosaur",
      "Mesozoic reptile",
      "Humanoid",
      "Fish"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which part  of the Loch Ness monster is most noteworthy according to people who claim to have seen it?",
    "options": [
      "Hair",
      "Eyes",
      "Neck",
      "Teeth"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first professional athlete in baseball history to hit a home run and score a touchdown in the same week?",
    "options": [
      "Bo Jackson",
      "Mel Hubbard",
      "Deion Sanders",
      "Jim Thorpe"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which company did Clarence Saunders found in 1916?",
    "options": [
      "Kentucky Fried Chicken",
      "The Piggly Wiggly",
      "Dominos Pizza",
      "Burger King"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which category did Krishna Bhanji win an Academy Award in 1982?",
    "options": [
      "Best Director of a Foreign Film",
      "Video Engineering",
      "Sound Direction",
      "Best Actor"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this movie Robert De Niro plays a timid and artistic NYC police detective. Bill Murray plays the criminal boss and Uma Thurman is a call girl De Niros character falls for.",
    "options": [
      "A Police Story",
      "Paths to Glory",
      "Mad Dog and Glory",
      "Turner and Hooch"
    ],
    "correctIndex": 2
  },
  {
    "question": "In Major League Baseball, who was the first pitcher to win 200 games in his career?",
    "options": [
      "A.G.Spaulding",
      "Walter Johnson",
      "Cy Young",
      "Babe Ruth"
    ],
    "correctIndex": 0
  },
  {
    "question": "1919 saw the first general, city-wide strike in the USA. It involved about 35,000 workers. In which city did this strike occur?",
    "options": [
      "New York, N.Y.",
      "Chicago, Illinois",
      "Seattle, Washington",
      "Memphis, Tennessee"
    ],
    "correctIndex": 2
  },
  {
    "question": "We all have learned that you can tell the age of a tree by the number of rings. Who was the first to discover this fact?",
    "options": [
      "Aristotle",
      "Luther Burbank",
      "Charles Darwin",
      "Leonardo Da Vinci"
    ],
    "correctIndex": 3
  },
  {
    "question": "Erle Stanley Gardner created the great fictional lawyer Perry Mason. On which TV show did the lawyer Perry Mason practice law?",
    "options": [
      "The Flintstones",
      "The Jetsons",
      "The Stanley Show",
      "The Brady Bunch"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Hindu thought, how was Krishna killed?",
    "options": [
      "By poisoning by Shiva",
      "By the abominations of mankind",
      "By an arrow into his heel",
      "By a knife into his heart"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which U.S. writer of detective fiction worked for the famous Pinkerton National Detective Agency?",
    "options": [
      "Mickey Spillane",
      "Mary Higgins Clark",
      "Dashiell Hammett",
      "Louis LAmour"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which is the Sanskrit word for \u00e2\u0080\u009cunion?\u00e2\u0080\u009d",
    "options": [
      "shiva",
      "sri",
      "krishna",
      "yoga"
    ],
    "correctIndex": 3
  },
  {
    "question": "The poor man! He was diagnosed a bilateeral perobital hematoma. What does he have?",
    "options": [
      "Halitosis",
      "Two hernias",
      "Two black eye",
      "A tumor in the center of the brain"
    ],
    "correctIndex": 2
  },
  {
    "question": "What did boxer Jack Johnson, Charlie Chaplin and actor, Errol Flynn all have in common?",
    "options": [
      "They were all charged with the same crime",
      "They all died in Paris",
      "They died of the same causes",
      "They had the same birthday"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where did Copenhagen meet Marengo?",
    "options": [
      "France",
      "Belgium",
      "Sherwood Forrest",
      "Denmark"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which country had the largest prison population for 2006?",
    "options": [
      "The United States",
      "Turkey",
      "Peoples Republic of China",
      "Nigeria"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was given a Honorary Academy Award  in 1967?",
    "options": [
      "Edith Head",
      "John Gilbert",
      "Enos Edward Yakima Canutt",
      "Mary Astor"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the name of Thailand before it was called Thailand?",
    "options": [
      "Singapore",
      "Siam",
      "Macau",
      "Persia"
    ],
    "correctIndex": 1
  },
  {
    "question": "From which radio station was the first national US broadcast made?",
    "options": [
      "KPHI in Philadelphia",
      "WWRL in Chicago",
      "WINS  in New York",
      "KDKA  in Pittsburgh"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the only congressman to vote against going to war against Japan on December 8, 1941?",
    "options": [
      "Forrest",
      "Stewart",
      "Rankin",
      "Wilkie"
    ],
    "correctIndex": 2
  },
  {
    "question": "Rudolph Abel, considered the greatest Russian spy, was caught in the USA and arrested. What event led to his capture?",
    "options": [
      "Another spy confessed and gave his name",
      "He was caught  speeding",
      "He two-timed his mistress",
      "Somebody picked up a nickel"
    ],
    "correctIndex": 3
  },
  {
    "question": "For whom was US pilot, Francis Gary Powers traded?",
    "options": [
      "Paul Konerko",
      "David Ortiz",
      "Rudolph Abel",
      "Jackie Robinson"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first non-Muslim to make the journey from mecca to Medina?",
    "options": [
      "Richard Burton",
      "Robert Stanley",
      "Ronald Kateman",
      "Richard the Lion Hearted"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the last name of the six brothers Carlo, Bindo, Alfieri, Mario, Ettore and Ernesto, who were all involved with automobiles?",
    "options": [
      "Lamborghini",
      "Lancia",
      "Maserati",
      "Ferrari"
    ],
    "correctIndex": 2
  },
  {
    "question": "What business did the Wright brothers, Orville and Wilbur, operate before beginning their aeronautical work?",
    "options": [
      "film company",
      "car company",
      "book store",
      "cycle company"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the Bronte sisters wrote only one novel, which was published under the pseudonym Ellis Bell?",
    "options": [
      "Charlotte and Emily",
      "Charlotte",
      "Anne",
      "Emily"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the actors who portrayed the Brothers Grimm, Wilhelm and Jacob, in the 2005 movie of the same name.",
    "options": [
      "Jude Law and Heath Ledger",
      "Jude Law and Jake Gyllenhaal",
      "Matt Damon and Jake Gyllenhaal",
      "Matt Damon and Heath Ledger"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of Johann Strauss Is sons became known as The Waltz King and was instrumental in popularizing the waltz in Vienna during the 19th century?",
    "options": [
      "Josef Strauss",
      "Eduard Strauss",
      "Johan Strauss II",
      "Ferdinand Strauss"
    ],
    "correctIndex": 2
  },
  {
    "question": "This filmmaker, famous for directing Runaway Train and Tango  Cash, is the brother of Academy Award-winning director Nikita Mikhalkov.",
    "options": [
      "Roman Polanski",
      "Andrey Konchalovsky",
      "Andrei Tarkovsky",
      "Sergei Mikhalkov"
    ],
    "correctIndex": 1
  },
  {
    "question": "After fashion designer Gianni Versace was murdered outside his Miami home, his sister Donatella stepped in as creative director of the fashion label. What is the name of Versaces older brother who became CEO of Gianni Versace S.p.A.?",
    "options": [
      "Francesco",
      "Antonio",
      "Tano",
      "Santo"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which one of Marie Curies two daughters, Irene and Eve, followed in her mothers footsteps and won the Nobel Prize in Chemistry?",
    "options": [
      "neither of them",
      "Eve",
      "Ir\u00c3\u00a8ne",
      "both"
    ],
    "correctIndex": 2
  },
  {
    "question": "What Academy Award-winning movie, directed by the Coen Brothers, features a pregnant small-town police chief?",
    "options": [
      "No Country for Old Men",
      "Fargo",
      "The Big Lebowski",
      "The Man Who Wasnt There"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of the Kennedy brothers became known as The Lion of the Senate?",
    "options": [
      "Edward M. Kennedy",
      "Robert F. Kennedy",
      "Joseph P. Kennedy Jr.",
      "John F. Kennedy"
    ],
    "correctIndex": 0
  },
  {
    "question": "What popular gun was invented by General John  T. Thompson?",
    "options": [
      "the JT assault rifle",
      "johnny gun",
      "sten gun",
      "tommy gun"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is an example of a spoonerism?",
    "options": [
      "Round and round the ragged rock the ragged rascal ran.",
      "Able was I ere I saw Elba.",
      "He is at  the pineapple of his career.",
      "It is kisstomery to cuss the bride."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is a malapropism?",
    "options": [
      "He is at the pineapple of his career.",
      "Round and round the ragged rock the ragged rascal ran.",
      "Water, water everywhere, nor any drop to drink.",
      "Able was I ere I saw Elba."
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is an eponym meaning a traitor to his country?",
    "options": [
      "A quisling",
      "A McCarthy",
      "A cyrano",
      "A ruy lopez"
    ],
    "correctIndex": 0
  },
  {
    "question": "This simple but powerful bomb made out of a gas filled bottle was named after a Soviet politician and diplomat.",
    "options": [
      "A Khrushchev cocktail",
      "A Lenin bomb",
      "A Molotov cocktail",
      "A Kerensky  surprise"
    ],
    "correctIndex": 2
  },
  {
    "question": "An eponym that describes a mens style is derived from the name of this Union general.",
    "options": [
      "General Sheridan",
      "General Burnside",
      "General Tuxedo",
      "General Trouser"
    ],
    "correctIndex": 1
  },
  {
    "question": "Henry Wheeler Shaw is responsible for this eponym.",
    "options": [
      "josh",
      "trouser",
      "scrimshaw",
      "tuxedo"
    ],
    "correctIndex": 0
  },
  {
    "question": "We get the word boycott  from the name of Charles C. Boycott, a terrible  landlord of the 19th Century. Where did he own land?",
    "options": [
      "England",
      "Ireland",
      "Scotland",
      "Massachusetts"
    ],
    "correctIndex": 1
  },
  {
    "question": "We get this word from the name of an infamous hangman.",
    "options": [
      "crane",
      "derrick",
      "tontine",
      "guillotine"
    ],
    "correctIndex": 1
  },
  {
    "question": "This very popular math term comes from the name of the man who wrote the first great algebra textbook.",
    "options": [
      "algebra",
      "algorithm",
      "program",
      "graph"
    ],
    "correctIndex": 1
  },
  {
    "question": "We get this word from the name of a French Ambassador to Portugal.",
    "options": [
      "nicotine",
      "leotard",
      "zinnia",
      "tariff"
    ],
    "correctIndex": 0
  },
  {
    "question": "We get this very popular word from one of Athenas aliases in Greek mythology.",
    "options": [
      "computer",
      "media",
      "lesbian",
      "mentor"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first official Postmaster General of the United States?",
    "options": [
      "Ulmer Pierce Smith",
      "John Jay",
      "Samuel Osgood",
      "Ben Franklin"
    ],
    "correctIndex": 2
  },
  {
    "question": "What group included Nils Lofgren, Ray Bittan, Gary Tallent, and Soozie Tyrell?",
    "options": [
      "The Eagles",
      "The Dave Mathews Band",
      "Aerosmith",
      "The E Street Band"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was Beyonces first hit?",
    "options": [
      "Take Me as I Am",
      "Ring  the Alarm",
      "Dangerously in Love",
      "Let Go"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the first nation to field a battle tank?",
    "options": [
      "The USA",
      "Germany",
      "Austria-Hungary",
      "Britain"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the Bible, he was the first person mentioned to be put into jail.",
    "options": [
      "Barabas",
      "Jeremiah",
      "Joseph",
      "Daniel"
    ],
    "correctIndex": 2
  },
  {
    "question": "It is believed that this was the smallest dinosaur.",
    "options": [
      "Brachiosaurus",
      "Amphicoelias",
      "Compsognathus",
      "Argentinasaurus"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the first web browser that had both graphics and text?",
    "options": [
      "Bob the Dog",
      "Mosaic",
      "Tillie",
      "Gopher"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these was invented by William E. Spicer, a Professor of Engineering at Stanford University?",
    "options": [
      "Night vision goggles",
      "Stealth technology",
      "CrazyGlue",
      "Portable dialysis machines"
    ],
    "correctIndex": 0
  },
  {
    "question": "The team of this country won the first FIFA Womens World Cup.",
    "options": [
      "The USA",
      "Italy",
      "Brazil",
      "Germany"
    ],
    "correctIndex": 0
  },
  {
    "question": "Richard Gere is a direct descendant of the Pilgrims who came to the Western Hemisphere on the Mayflower.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is said to have occurred at Cenacle?",
    "options": [
      "The Last Supper",
      "The assassination of  Arch Duke Francis Ferdinand",
      "The building of the Parthenon",
      "The assassination of Julius Caesar"
    ],
    "correctIndex": 0
  },
  {
    "question": "For over 1000 years most people believed that the sun circled the Earth. The  scientific basis for this  came from the book The Almagest written by this thinker.",
    "options": [
      "Aristarchus",
      "Hipparchus",
      "Aristotle",
      "Ptolemy"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Motown musical quartet, founded in Detroit, Michigan, scored their first #1 hit, I Cant Help Myself (Sugar Pie, Honey Bunch) in 1965.",
    "options": [
      "The Temptetts",
      "The Four Tops",
      "The Temptations",
      "The Drifters"
    ],
    "correctIndex": 1
  },
  {
    "question": "What  does the Latin word facula refer to?",
    "options": [
      "A region of unexplained loss of gravity beneath the earths outer crust",
      "Bright spots or patches on the suns photosphere",
      "A measurement of the suns reflectivity",
      "A dark region on the suns chromosphere"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the chieftain, who in 1816, after the death of his father, seized power over the insignificant Zulu clan and transformed it into a nation?",
    "options": [
      "Dingiswayo",
      "Senzangakhona",
      "Shaka",
      "Impis"
    ],
    "correctIndex": 2
  },
  {
    "question": "Admitted to the United States on January 3, 1959, the 49th state is both the westernmost and the northernmost US state.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This musical comedy, directed by Nancy Walker, is a pseudo autobiography of 1970s disco group, Village People.",
    "options": [
      "Cant Stop the Music",
      "The Peoples Singers",
      "Freddie and His Friends",
      "Join the Action"
    ],
    "correctIndex": 0
  },
  {
    "question": "This short-lived American sitcom aired on CBS in 1995, starring Andrew Dice Clay and Cathy Moriarty.",
    "options": [
      "Burt and Alice",
      "Ford Fairlane",
      "Healeys Class",
      "Bless This House"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Victoria Falls are situated on the Zambezi River, on the border between which two countries?",
    "options": [
      "Tanzania and Zaire",
      "Zambia and Zimbabwe",
      "Kenya and Tanzania",
      "Zambia and Zaire"
    ],
    "correctIndex": 1
  },
  {
    "question": "This award is the oldest and most prominent film award, given annually for Hindi films in India.",
    "options": [
      "The Mombay Gold Award",
      "The Diamond Star Award",
      "The Golden Lotus Award",
      "The Filmfare Award"
    ],
    "correctIndex": 3
  },
  {
    "question": "This town, situated in Hawaii County, is the southernmost town in the United States.",
    "options": [
      "Naalehu",
      "Kamuela",
      "Mililani",
      "Pauoa"
    ],
    "correctIndex": 0
  },
  {
    "question": "This modern amphitheatre, officially opened in 1922, on the site of a natural amphitheatre formerly known as the Daisy Dell, is used primarily for music performances.",
    "options": [
      "Hollywood Bowl",
      "Red Rocks",
      "None of these",
      "Isirium"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why are portholes typically round?",
    "options": [
      "Because a circle gives you the most area for the least perimeter.",
      "To spread out pressure on the the ships covering",
      "For easier and smoother entering from the outside",
      "They are circular by ancient tradition."
    ],
    "correctIndex": 1
  },
  {
    "question": "Matt Groening, the creator of The Simpsons, grew up on a street named what?",
    "options": [
      "Main Street",
      "Springfield Boulevard",
      "Simpson Street",
      "Evergreen Terrace"
    ],
    "correctIndex": 3
  },
  {
    "question": "During World War II, the Polish Second Corps fought bravely against the Axis forces. Which statement about the Second Corps is not true?",
    "options": [
      "They fought at Monte Cassino.",
      "They escaped Europe by going into Iran.",
      "They landed on Normandy Beach an hour after the first wave hit Omaha Beach.",
      "There was a brown bear in the corps."
    ],
    "correctIndex": 3
  },
  {
    "question": "The car in which John Kennedy was riding when he was killed had a bubble top that was not used.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "By what name did Marco Polo call the capital of China, present-day Beijing?",
    "options": [
      "Canton",
      "Cambaluc",
      "Peijing",
      "Nahnjing"
    ],
    "correctIndex": 1
  },
  {
    "question": "Why was Battery D, Harry Truman\u00e2\u0080\u0099s unit in World War I, so devoted to their Captain Harry?",
    "options": [
      "None of the men died because of a battle.",
      "All of these.",
      "Truman always kept his mens safety as primary goal.",
      "Truman never asked them to do anything he wont do."
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first pitcher in major league baseball history to strike out over 3000 batters but to have less than 1000 bases on balls?",
    "options": [
      "Ferguson Jenkins",
      "Don Newcombe",
      "Sandy Koufax",
      "Nolan Ryan"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first host of the popular late-night show Saturday Night (later called Saturday Night Live)?",
    "options": [
      "Steve Martin",
      "George Carlin",
      "Richard Pryor",
      "John Goodman"
    ],
    "correctIndex": 1
  },
  {
    "question": "Let me in!  Im so cold, pleads the ghost of Catherine Earnshaw. In what 1847 novel will you find the story of the doomed lovers Catherine Earnshaw and the wild gypsy Heathcliff?",
    "options": [
      "Lorna Doone",
      "Wuthering Heights",
      "Jane Eyre",
      "Agnes Gray"
    ],
    "correctIndex": 1
  },
  {
    "question": "You know these lovers were fated to meet because Of all the gin joints, in all of the towns, in all of the world, she walks into mine. Rick remembers all the little details - The Germans wore gray, you wore blue. These star crossed lovers even had their song. What song did Sam play when Ilisa asked, Play it, Sam.?",
    "options": [
      "My Heart Will go On",
      "Time in a Bottle",
      "As Time Goes By",
      "Time after Time"
    ],
    "correctIndex": 2
  },
  {
    "question": "What famous Frenchmans dying words were France. Armee. Josephine!?",
    "options": [
      "Louis Philippe",
      "Richelieu",
      "Napoleon",
      "Louis XIV"
    ],
    "correctIndex": 2
  },
  {
    "question": "Television beamed their fairytale wedding to over 270 million viewers on July 29, 1981. Sadly, on August 28, 1996 a divorce was granted to the Peoples Princess  and her once Prince Charming. Who was the Princess referring to when she stated in an interview on the BBC, There were three of us in the marriage, so, it was a bit crowded.?",
    "options": [
      "Wallis Warfield Simpson",
      "Camilla Parker Bowles",
      "Tiggy Legge-Bourke",
      "Alice Keppel"
    ],
    "correctIndex": 1
  },
  {
    "question": "Look for me by moonlight",
    "options": [
      "Danny Deever",
      "Annabel Lee",
      "Curfew Shall Not Ring Tonight",
      "The Highwayman"
    ],
    "correctIndex": 3
  },
  {
    "question": "What color is the sweat of the Hippopotamus?",
    "options": [
      "Red",
      "Clear",
      "Pink",
      "Blue"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the strongest muscle in the body in relation to its size?",
    "options": [
      "Deltoids",
      "Tongue",
      "Gluteus Maximus",
      "Masseter"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these presidents had a pet alligator?",
    "options": [
      "Roosevelt",
      "John Quincy Adams",
      "George Bush",
      "Thomas Jefferson"
    ],
    "correctIndex": 1
  },
  {
    "question": "On the Canadian 2 dollar bill, what flag flies over the parliament building?",
    "options": [
      "US flag",
      "British Flag",
      "UN flag",
      "French Flag"
    ],
    "correctIndex": 0
  },
  {
    "question": "The US Postal Service issued a series of stamps honoring these movies: Beau Geste, Gone With the Wind, The Wizard of Oz, and Stagecoach. What do these films have in common?",
    "options": [
      "They were all released by Warner Brothers.",
      "They all starred Clark Gable.",
      "They all had their premiers in California.",
      "All were all released in the same year."
    ],
    "correctIndex": 3
  },
  {
    "question": "The ages of many men are mentioned in The Bible. Who is the only woman whose age is mentioned in The Bible?",
    "options": [
      "Vashti",
      "Sarah",
      "Ruth",
      "Bathsheba"
    ],
    "correctIndex": 1
  },
  {
    "question": "Can icebergs have blue streaks?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "What useful device was invented by Sylvan Goldman?",
    "options": [
      "The TV remote control",
      "The hair curler",
      "The shopping cart",
      "TiVo"
    ],
    "correctIndex": 2
  },
  {
    "question": "This word can mean: 1) the upper part of a shoe that covers the instep; 2) an improvised accompaniment in music; 3) a seductive woman.",
    "options": [
      "vamp",
      "tramp",
      "truel",
      "hypoxiol"
    ],
    "correctIndex": 0
  },
  {
    "question": "What did Benjamin Green invent in 1944?",
    "options": [
      "Kevlar",
      "The garage door opener.",
      "Coppertone",
      "TiVo"
    ],
    "correctIndex": 2
  },
  {
    "question": "On the Apollo 8 space trip, the astronauts used silly putty to fasten objects.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "When US President James Garfield was assassinated, this famous inventor tried to use his new metal detector to help the surgeons find the bullet.",
    "options": [
      "Nikolai Tesla",
      "Samuel F. B. Morse",
      "Alexander G. Bell",
      "Thomas Alva Edison"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which Amendment  to the US Constitution guarantees the right to privacy?",
    "options": [
      "The Fourteenth",
      "The Fifteenth",
      "It is not guaranteed in the Constitution",
      "The Second"
    ],
    "correctIndex": 2
  },
  {
    "question": "Normal saline solution contains this percentage of salt (NaCl)?",
    "options": [
      "0.9%",
      "9%",
      "4.5%",
      "1.3%"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first guest star to step off the plane on Fantasy Island?",
    "options": [
      "Bill Bixby",
      "Don Knots",
      "Roddy McDowell",
      "Victoria Principal"
    ],
    "correctIndex": 0
  },
  {
    "question": "It is generally accepted that this was the first novel whose manuscript was typed on a typewriter.",
    "options": [
      "The Adventures of Huckleberry Finn",
      "The Adventures of Tom Sawyer",
      "The Great Gatsby",
      "Moby Dick"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the first full length movie to use color?",
    "options": [
      "A Visit to the Seaside",
      "The World, the Flesh And the Devil",
      "The Raven",
      "The Coward"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who made the first chocolate bar?",
    "options": [
      "J. S. Fry  Sons",
      "Nestle",
      "Mars",
      "Hershey"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who is the first State of the Union Address attributed to?",
    "options": [
      "Jefferson Thomas",
      "George Washington",
      "John Adams",
      "James Madison"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is Americas first continuously-published newspaper?",
    "options": [
      "Boston Globe",
      "Boston Star",
      "Boston Herald",
      "Boston News-Letter"
    ],
    "correctIndex": 3
  },
  {
    "question": "When was the first Copper Penny created?",
    "options": [
      "1792",
      "1794",
      "1795",
      "1793"
    ],
    "correctIndex": 0
  },
  {
    "question": "The First Inauguration of a US President included saying the phrase, So help me God, and kissing the Bible after taking the oath. Who was the President that set the precedent?",
    "options": [
      "George Washington",
      "Andrew Jackson",
      "Thomas Jefferson",
      "James Madison"
    ],
    "correctIndex": 0
  },
  {
    "question": "Panama is located in South America.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "8 is the square root of 64.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Naruto Uzumaki, the protagonist of the Naruto series, marries Sakura.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Conakry is the capital of Turkey.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "More than 5 million Jews were killed during the Holocaust.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Greek mythology, Atlas was an Olympian god.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Is Saint Nicolas the patron saint of sailors and merchants in Eastern Orthodox countries?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Was professional wrestler Triple H born in Massachusetts?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "The iPhone is the only 3G phone.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Was the year 1912 a leap year?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Barack Obama is a righty.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the fastest bird of prey?",
    "options": [
      "Harris Hawk",
      "Bald Eagle",
      "Osprey",
      "Peregrine Falcon"
    ],
    "correctIndex": 3
  },
  {
    "question": "What team became the English Premier League champion in the 2006-2007 season?",
    "options": [
      "Liverpool",
      "Manchester United",
      "Arsenal",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many bones does the human spine have?",
    "options": [
      "16",
      "12",
      "48",
      "33"
    ],
    "correctIndex": 3
  },
  {
    "question": "Nonmember Runescape players can go to Taverly and kill a couple of druids. Then they can go to Camelot bank and take out 1,000 gold pennies.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who does not belong to this list of high school dropouts: Julie Andrews, Marlon Brando, Johnny Depp, Demi Moore, Avril Lavigne, Christina Applegate, Jude Law, Leah Remini, John Travolta, Ed Norton.",
    "options": [
      "Avril Lavigne",
      "Leah Remini",
      "Johnny Depp",
      "Ed Norton"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which definition is incorrect?",
    "options": [
      "Halophile - one who has an affinity for direct light.",
      "Petrophile - one who loves or has an affinity for rocks.",
      "Lygophile - one who loves darkness.",
      "Ombrophile - an animal or plant that has an affinity for large amounts of rainfall."
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement  about the phobias of these fictional characters is untrue?",
    "options": [
      "Beatrix Kidd from Kill Bill had an unreasonable fear of being  buried alive.",
      "Ron Weasley from the Harry Potter books had an unreasonable fear of spiders.",
      "Fox Mulder from The X-Files had an unreasonable fear of  fire.",
      "Winston Smith from the book 1984 had an unreasonable fear of birds."
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was on the cover of the first issue of  People magazine?",
    "options": [
      "Elvis Presley",
      "Joseph G. Cannon",
      "Mia Farrow",
      "Lucille Ball"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first actor to play Tarzan?",
    "options": [
      "Johnny Weissmuller",
      "Mike Henry",
      "Ron Ely",
      "Elmo Lincoln"
    ],
    "correctIndex": 3
  },
  {
    "question": "This person, who became public announcer for the New York Yankees in 1951, appeared in the movies 61, It Could Happen to You,  The Scout and Anger Management.",
    "options": [
      "Joe Buck",
      "Phil Rizzuto",
      "Bob Sheppard",
      "Michael Kay"
    ],
    "correctIndex": 2
  },
  {
    "question": "What did French engineer Louis Reard invent in 1946 ?",
    "options": [
      "the first complete fossil of a triceratops",
      "the oversized catchers mitt",
      "the chemical test for prostate cancer (The PSA test)",
      "the Bikini"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of Jim Hensons Muppets was the first one to be a regular on The Jimmy Dean Show?",
    "options": [
      "Rowlf  the Dog",
      "Kermit the Frog",
      "Big Bird",
      "Oscar the Grouch"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement about the name Florence Nightingale Graham is true?",
    "options": [
      "It is the real name of  Billie Holliday.",
      "It is the married name of the famous nurse, Florence Nightingale",
      "It is a pseudonym for the author Agatha Christie.",
      "It is the real name of the famous beauty expert and business woman Elizabeth Arden."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is the alter ego of Iron Man?",
    "options": [
      "Matt Murdock",
      "Hank Williams",
      "Tony Stark",
      "John Johnson"
    ],
    "correctIndex": 2
  },
  {
    "question": "Wolverines real name is James Howlett.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Kurt Wagner is the alter ego of which character?",
    "options": [
      "Spawn",
      "Mockingbird",
      "Wonder Woman",
      "Nightcrawler"
    ],
    "correctIndex": 3
  },
  {
    "question": "Fictional character Barbara Morse graduated from the Georgia Institute of Technology with a Ph.D. in biology and helped rediscover the Super-Soldier formula that created Captain America. She eventually became this super heroine.",
    "options": [
      "Batwoman",
      "Mockingbird",
      "Poison Ivy",
      "Wonder Woman"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is Cat Woman?",
    "options": [
      "Samantha Wayne",
      "Pam Isley",
      "Sarah Connor",
      "Selina Kyle"
    ],
    "correctIndex": 3
  },
  {
    "question": "Spiderman is the alter ego of Jonah Jameson.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Does Xenophobia mean fear of  people you do not know?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "What kind of phobia is defined as fear of high places?",
    "options": [
      "Tapephobia",
      "Acrophobia",
      "Xenophobia",
      "Botophobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What term refers to a phobia that involves fear of men?",
    "options": [
      "Arrhenphobia",
      "Botophobia",
      "Xenophobia",
      "Nosophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Brontophobia is the fear of thunders.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Nyctophobia means fear of darkness.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Claustrophobia means fear of cellars.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ochlophobia is the fear of being shut in.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Botophobia is the term used for the fear of crowds.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The term nosophobia denotes the fear of telling lies.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Does ochlophobia mean fear of diseases?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "This former presidents name was a little bit too close to raygun to start the Star Wars Missle Defense System. Who was this former action hero?",
    "options": [
      "Ronald Reagan",
      "George W. Bush",
      "George Bush",
      "Bill Clinton"
    ],
    "correctIndex": 0
  },
  {
    "question": "William Lioncheate is the name of the George W. Bush appointed Secretary of Housing and Urban Development.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In a pen, what is the object that holds the ink called?",
    "options": [
      "ink composite",
      "ink compress",
      "ink reservoir",
      "ink tube"
    ],
    "correctIndex": 2
  },
  {
    "question": "When was the first fountain pen invented?",
    "options": [
      "1902",
      "1906",
      "1883",
      "1887"
    ],
    "correctIndex": 2
  },
  {
    "question": "Ink changes its color on different paper.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where does the oldest known ink come from?",
    "options": [
      "India and Turkey",
      "England and China",
      "China and India",
      "France and Japan"
    ],
    "correctIndex": 2
  },
  {
    "question": "You are doing a handwriting analysis test. You choose green ink. What does this say about you?",
    "options": [
      "You are very friendly and spiritual.",
      "You have a desire to stand out from the crowd.",
      "You are adaptable and desire harmony.",
      "You enjoy leadership and dominance."
    ],
    "correctIndex": 2
  },
  {
    "question": "If swallowed, ink is harmless.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What are the two classes into which ink is divided?",
    "options": [
      "Printing and Writing",
      "Printing and Office",
      "Writing and Lining",
      "Printing and Balling"
    ],
    "correctIndex": 0
  },
  {
    "question": "This group, formed in the late 1930s, are known for the song If I Didnt Care.",
    "options": [
      "The Ink Boys",
      "The Ink Spots",
      "The Ink Sounds",
      "The Ink Brothers"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this year, Led  Zeppelin  released Stairway to Heaven and  Andrew Lloyd Webbers Jesus Christ Superstar opened.",
    "options": [
      "1971",
      "1977",
      "1973",
      "1975"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where was Nicole Kidman born?",
    "options": [
      "Perth",
      "Wellington",
      "Honolulu",
      "Sydney"
    ],
    "correctIndex": 2
  },
  {
    "question": "Find the correct statement about the monsoons.",
    "options": [
      "They blow East from the Arabian Peninsula in  February and West from the South China Sea in August.",
      "They blow West from Pakistan in February and East  from the Pacific in September.",
      "They blow North from Australia in July and South from Asia in January.",
      "They blow North from The Indian Ocean in January and South from Asia in  August."
    ],
    "correctIndex": 2
  },
  {
    "question": "Natale Cole is the daughter of Nat King Cole. Who was her famous grandfather?",
    "options": [
      "Duke Ellington",
      "Count Basie",
      "Terry Coles",
      "Roger Coles"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the year 632, he succeeded Mohamed and became the First Caliph.",
    "options": [
      "Abu Bakr",
      "Tahallah",
      "Abu Qahafa",
      "al-Zubahr"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the state motto of Rhode Island?",
    "options": [
      "Forward",
      "The Union",
      "Industry",
      "Hope"
    ],
    "correctIndex": 3
  },
  {
    "question": "At what angle is the Earth tilted?",
    "options": [
      "23.5 degrees",
      "90 radians",
      "45 radians",
      "45 degrees"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these states has the biggest area?",
    "options": [
      "Hawaii",
      "Washington, D.C.",
      "Connecticut",
      "Delaware"
    ],
    "correctIndex": 0
  },
  {
    "question": "Tom Hanks co-starred in the TV program Bosom Buddies with this fine actor/juggler.",
    "options": [
      "Christopher Knight",
      "Peter Scolari",
      "Steve Zahn",
      "Tom Everett Scott"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of rock is pumice?",
    "options": [
      "Igneous",
      "Sedimentary",
      "Metamorphic",
      "Conglomerate"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is a real award?",
    "options": [
      "The Ig Nobel Prize",
      "The Poly Pulitzer Prize",
      "The Niagara Falls Literature Award",
      "The Academic Academy Award"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the year 100, there were about 255 square miles per living person on earth. What was that number in  2000?",
    "options": [
      "17.3 square  miles",
      "127.4 square miles",
      "8.2 square miles",
      "64.1 square  miles"
    ],
    "correctIndex": 2
  },
  {
    "question": "This United States Navy aircraft was used widely during the Second World War.",
    "options": [
      "B17 Flying Fortress",
      "F-5 Tiger",
      "P47 Thunderbolt",
      "F4U Corsair"
    ],
    "correctIndex": 3
  },
  {
    "question": "This aircraft is used widely by the Thunderbirds and Air Force Fighter Wings.",
    "options": [
      "F-16",
      "F-14",
      "F-15",
      "F-18"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the first stealth fighter used by the United States Military?",
    "options": [
      "F-22 Raptor",
      "F/A18 Super Hornet",
      "F-5 Tiger",
      "P-47 Thunderbolt"
    ],
    "correctIndex": 0
  },
  {
    "question": "What aircraft was used by the United States Navys Blue Angles demonstration team prior to adopting the F/A18 Super Hornet?",
    "options": [
      "Cessna 182",
      "A-10",
      "A-4",
      "F-4"
    ],
    "correctIndex": 2
  },
  {
    "question": "This aircraft, introduced in 1956, is the main transport plane used by the United States Military.",
    "options": [
      "C-130",
      "Boeing 777",
      "Citation X",
      "Gulf Stream G5"
    ],
    "correctIndex": 0
  },
  {
    "question": "This helicopter was used widely by the U. S. military during the Vietnam War.",
    "options": [
      "Pavelow",
      "Apache",
      "Cobra",
      "Huey"
    ],
    "correctIndex": 3
  },
  {
    "question": "This bomber was introduced in February 1955.",
    "options": [
      "B-17",
      "B-52",
      "F-15",
      "B-29"
    ],
    "correctIndex": 1
  },
  {
    "question": "Before the F/A18 this was the main U.S. Marine Corps fighter/bomber.",
    "options": [
      "Cobra",
      "Thunderbolt",
      "Harrier",
      "Tiger"
    ],
    "correctIndex": 2
  },
  {
    "question": "This stealth aircraft was used during Operation Desert Storm in 1991.",
    "options": [
      "F-22 Raptor",
      "Joint Strike Fighter",
      "F-117 Nighthawk",
      "FA/18 Super Hornet"
    ],
    "correctIndex": 2
  },
  {
    "question": "This aircraft entered service with the United States Navy in 1999.",
    "options": [
      "F-15 Eagle",
      "E-3 Sentry",
      "F-16 Fighting Falcon",
      "F/A18 Super Hornet"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following actors has NOT portrayed the Frankenstein monster?",
    "options": [
      "Randy Quaid",
      "Christopher Lee",
      "Robert DeNiro",
      "Michael Landon"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Czech writer wrote a play called  R.U.R.: Rossums Universal Robots.",
    "options": [
      "Carl Kuchik",
      "Peter Kipchak",
      "Karel Capek",
      "Wilhem Capok"
    ],
    "correctIndex": 2
  },
  {
    "question": "This is a technique or method of dyeing fabrics using wax (to cover parts of the fabric not intended to be dyed).",
    "options": [
      "batik",
      "susak",
      "barak",
      "kurak"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these women is a sculptor famous for works with war-related themes?",
    "options": [
      "Renee Headings",
      "Lin Mae Wang",
      "Lisa Picard",
      "May Howard  Jackson"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement is not true about Madame LaForce, who was a Confederate spy during the American Civil War?",
    "options": [
      "She was a man.",
      "She was French born.",
      "She was a flirt.",
      "She led the take-over of the steamer St. Nicholas in 1861."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which statement about the actor Donald Sutherland is untrue?",
    "options": [
      "He starred as Casanova in Il Casanova di Federico Fellini",
      "He was born in Teddington, Middlesex, England.",
      "He starred as Homer Simpson.",
      "He starred in Alex in Wonderland, which featured Federico Fellini"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these famous baseball players became the first major league player to hit two grand slams in one game?",
    "options": [
      "Tony Lazzeri",
      "Babe Ruth",
      "Lou Gehrig",
      "Bobby Bonds"
    ],
    "correctIndex": 0
  },
  {
    "question": "The animals from which group are often called sea cows?",
    "options": [
      "Enhydra",
      "Odobenidae",
      "Sirenia",
      "Otariidae"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which was the first country in the world to constitutionally abolish its army?",
    "options": [
      "Costa Rica",
      "Gabon",
      "Togo",
      "Estonia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these countries is the oldest independent constitutional republic?",
    "options": [
      "Iceland",
      "Monaco",
      "San Marino",
      "Costa Rica"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which American city is the fast-food restaurants chain McDonalds incorporated?",
    "options": [
      "Phoenix, Arizona",
      "San Bernardino, California",
      "Oak Brook, Illinois",
      "Arcadia, California"
    ],
    "correctIndex": 1
  },
  {
    "question": "This former baseball player, born in Donora, Pa, has 3630 hits in his career - 1815 hits at home and 1815 hits on the road.",
    "options": [
      "Frank Thomas",
      "Ken Griffey, Jr.",
      "Ken Griffey",
      "Stan Musial"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many red balls are in a game of snooker?",
    "options": [
      "3",
      "1",
      "15",
      "8"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what body of water is the island of Malta located?",
    "options": [
      "Mediterranean Sea",
      "Pacific Ocean",
      "Atlantic Ocean",
      "North Sea"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to the Bible, where was Jesus Christ born?",
    "options": [
      "Jerusalem",
      "Erichon",
      "Bethlehem",
      "Egypt"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where is the city of Bahia Blanca located?",
    "options": [
      "Argentina",
      "Colombia",
      "Micronesia",
      "Dominican Republic"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which lake is NOT one of the Great Lakes?",
    "options": [
      "Great Salt Lake",
      "Lake Huron",
      "Lake Michigan",
      "Lake Ontario"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dry air consists mostly of what gas?",
    "options": [
      "Carbon Dioxide",
      "Oxygen",
      "Nitrogen",
      "Argon"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these stories was written by the Brothers Grimm?",
    "options": [
      "The Adventures of Pinocchio",
      "Puss in Boots",
      "Sleeping Beauty",
      "The Frog Prince"
    ],
    "correctIndex": 3
  },
  {
    "question": "What role does the carburetor have in the engine?",
    "options": [
      "Cooling",
      "Mixing air and fuel",
      "Igniting the fuel mixture",
      "Cleaning"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does lacrimation mean?",
    "options": [
      "Psychosis",
      "Shedding Tears",
      "Addiction",
      "Dilation"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the second  song played on MTV?",
    "options": [
      "You Better Run",
      "Hit Me With Your Best Shot",
      "Video Killed the Rock Star",
      "Radio Killed the Video Technician"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was Elvis Presleys second number 1hit?",
    "options": [
      "Dont Be Cruel",
      "Love Me Tender",
      "Hound Dog",
      "Heartbreak Hotel"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which team won the second Super Bowl?",
    "options": [
      "The New York Jets",
      "The Washington Redskins",
      "The Kansas City Chiefs",
      "The Green Bay Packers"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the second book of the Bible?",
    "options": [
      "Acts",
      "Mark",
      "Joshua",
      "Exodus"
    ],
    "correctIndex": 3
  },
  {
    "question": "In which city was Michael Jordans second professional team based?",
    "options": [
      "Baltimore",
      "Washington",
      "Charlotte",
      "Chicago"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which team won the second World Series between the National League and the American League?",
    "options": [
      "Pittsburgh Pirates",
      "New York Giants",
      "Providence Grays",
      "New York Metropolitans"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the second US President  to face impeachment?",
    "options": [
      "William Blount",
      "Andrew Johnson",
      "Richard Nixon",
      "William Clinton"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the second war fought by the USA?",
    "options": [
      "The War against the Barbary Pirates",
      "The Civil War",
      "The War of 1812",
      "The Mexican War"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the second host of the Tonight Show?",
    "options": [
      "Johnny Carson",
      "Steve Allen",
      "Jay Leno",
      "Jack Paar"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was Elizabeth Taylors second husband?",
    "options": [
      "Michael Wilding",
      "Mike Todd",
      "Nick Hilton",
      "Eddie Fisher"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was Frank Sinatras second wife?",
    "options": [
      "Mia Farrow",
      "Ava Gardner",
      "Barbara Marx",
      "Nancy Barbato"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which was the second motion picture  to win the Oscar for Best Movie?",
    "options": [
      "The Broadway Melody",
      "Wings",
      "All Quiet on the Western Front",
      "Cimarron"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is generally considered to be the second longest symphony?",
    "options": [
      "Mozarts Jupiter Symphony",
      "Mahlers Symphony No. 3 in D minor",
      "Shostakovitchs Leningrad Symphony",
      "Beethovens Symphony Number 9 (the Choral)"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the second Republican US President?",
    "options": [
      "Andrew Johnson",
      "Ulysses Grant",
      "Abraham Lincoln",
      "Rutherford B. Hayes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is covered by the second amendment to the US Constitution?",
    "options": [
      "the right to bear arms in order to maintain a militia",
      "the right to not have soldiers living in our houses",
      "the right to a fair and speedy trial",
      "the right to vote"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is true  about  music compact discs?",
    "options": [
      "Americas Greatest Hits is the number one selling CD in the USA.",
      "The hole is the exact size of the Dutch coin called dubbeltje.",
      "The patent behind the compact disc is co-owned by Dick Clark.",
      "Glen Campbells Greatest Hits was the first music CD in the USA."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is not a quote by Groucho Marx?",
    "options": [
      "I have a memory like an elephant. In fact elephants often consult me.",
      "The husband who wants a  perfect marriage should keep his mouth shut and his checkbook open.",
      "Bloods not  thicker than money.",
      "I was married by a judge. I should have asked for the jury."
    ],
    "correctIndex": 0
  },
  {
    "question": "This drink was invented for a party given by Winston Churchills mother.",
    "options": [
      "The Gibson",
      "The Sidecar",
      "The Manhattan",
      "The Sloe Gin Fizz"
    ],
    "correctIndex": 2
  },
  {
    "question": "The USA has an extensive Interstate Highway System. What five state capitals are NOT directly served by this system?",
    "options": [
      "Juneau, Dover, Carson City, Honolulu, Pierre",
      "Juneau, Honolulu, Jefferson City, Carson City, Pierre",
      "Juneau, Honolulu, Salem, Columbia,  Salt Lake City",
      "Juneau, Dover, Jefferson City, Pierre, Carson City"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which best defines the word Sanhedrin?",
    "options": [
      "The condition of being without mental faculties",
      "The religious book on which the Jain religion is based",
      "The ancient spice used in Egypt to counter bad omens",
      "The court of 23  judges biblically required to be present in every city"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is Belle Fourche?",
    "options": [
      "The  geographic center of the United States.",
      "A new dessert created on TV, which contains three types of chocolate, strawberries, and  cranberry marmalade.",
      "The resort voted Number One Vacation Destination  by Forbes Magazine",
      "A very upscale suburb of Paris in which the average house goes for 3,450,000 Euros"
    ],
    "correctIndex": 0
  },
  {
    "question": "By act of Congress, this is the official alcoholic spirit of the USA.",
    "options": [
      "Corn liquor",
      "Gin",
      "Rye",
      "Bourbon"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is Hiroo Onoda?",
    "options": [
      "The last Japanese casualty from World War II",
      "The founder of Mazda",
      "This is the real name of Tojo.",
      "The Japanese fisherman who first sees Godzilla in the movie of the same name"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is lethologica?",
    "options": [
      "Any  word used incorrectly in a sentence.",
      "A physical disease in which the patient does not have enough energy to speak",
      "A psychological disease first identified as a serious condition by Carl Jung",
      "A religious practice involving saying certain Biblical names to counter a sin."
    ],
    "correctIndex": 2
  },
  {
    "question": "The letter J is the last letter added to the Latin alphabet.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which Biblical prophet, mentioned in two books of the Bible, was swallowed by a great leviathan?",
    "options": [
      "Jeroboam",
      "Jonah",
      "Joshua",
      "Jeremiah"
    ],
    "correctIndex": 1
  },
  {
    "question": "He was called Big Train. He was the first baseball player whose last name began with a J to be elected to the Baseball Hall of Fame. Who was he?",
    "options": [
      "Judy Johnson",
      "Ban Johnson",
      "Addie Joss",
      "Walter Johnson"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the poem in which these nonsense words are used: chortled, vorpal, galumphing, and frabjous?",
    "options": [
      "Jabberwocky",
      "Jansonaught",
      "Jerboky",
      "Jessenight"
    ],
    "correctIndex": 0
  },
  {
    "question": "This great boxer, known as the Galveston Giant, was the worlds Heavyweight Champion from 1908-1915.",
    "options": [
      "Jim Jeffries",
      "Jim Johnson",
      "Jack Johnson",
      "Jack Jeffries"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the USA we often see commercials for Subway sandwiches. They usually feature a man who went  from 425 pounds to 190 pounds because of a diet  based on Subways menu. What is his name?",
    "options": [
      "Jared Leto",
      "Jared Nugent",
      "Jared Lamanite",
      "Jared Fogel"
    ],
    "correctIndex": 3
  },
  {
    "question": "This psychiatrist, born in Switzerland in 1875, was one of the founders of analytic psychology.",
    "options": [
      "Johannes Jorenstem",
      "Erik Jung",
      "Yokaim Junster",
      "Carl Gustav Jung"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who killed Jesse James, one of the legendary figures of the Wild West?",
    "options": [
      "Charley Ford",
      "Frank James",
      "John Carradine",
      "Robert Ford"
    ],
    "correctIndex": 3
  },
  {
    "question": "His first name was Jimmy and he was a great defensive back for the San Francisco 49ers from 1961 -1976. He is in the Pro Football Hall of Fame. His brother, Rafer, is more famous as an athlete and as a  part-time special bodyguard. What  is Jimmy and Rafers last name?",
    "options": [
      "Johnson",
      "James",
      "Jameson",
      "Jackson"
    ],
    "correctIndex": 0
  },
  {
    "question": "This was the first country that starts with the letter J to join the United Nations.",
    "options": [
      "Jurasconia",
      "Jamaica",
      "Japan",
      "Jordan"
    ],
    "correctIndex": 3
  },
  {
    "question": "It is one of the oldest religions. Most of its followers live in India, where it began. Adherents believe that each individual is responsible for his/her actions. They believe that each living thing has an eternal soul. What is this religion?",
    "options": [
      "Jensenism",
      "Judaism",
      "Jainism",
      "Jarita Dharma"
    ],
    "correctIndex": 2
  },
  {
    "question": "He won the 2000 Nobel Peace Prize for his work promoting peace and democracy.",
    "options": [
      "Kim Dae Jung",
      "Jo El Karl",
      "Leon Jouhaux",
      "James Jarrod"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was Christine Jorgensen most famous for?",
    "options": [
      "voice-over actor/singer",
      "transgender surgery",
      "mystery writer",
      "photography"
    ],
    "correctIndex": 1
  },
  {
    "question": "They were a group of landed nobility in Prussia  and Eastern Germany. Their name comes from the German for young lord. They formed several aristocratic political groups in Germany.",
    "options": [
      "Jurrsia",
      "Jongres",
      "Junkers",
      "Junists"
    ],
    "correctIndex": 2
  },
  {
    "question": "This sea animal is found in the Atlantic, Pacific and Indian Oceans but is most numerous off Hawaii and Australia. Although it usually weighs about .8 Kg, some individuals actually weigh 3 Kg (over 6.7 pounds.) This animal is blue on top and silver on bottom, often with a blue stripe.",
    "options": [
      "jack-ass shrimp",
      "jack-ass prawn",
      "jack-ass fish",
      "jack-ass skate"
    ],
    "correctIndex": 2
  },
  {
    "question": "WWII is undoubtedly the bloodiest war. This is the number of fatalities it caused.",
    "options": [
      "56.4 million",
      "44.0 million",
      "71.8 million",
      "27.3 million"
    ],
    "correctIndex": 0
  },
  {
    "question": "The most garbage collecting volunteers gathered in this US state.",
    "options": [
      "Ohio",
      "Texas",
      "California",
      "New York"
    ],
    "correctIndex": 2
  },
  {
    "question": "The largest consumption of cigarettes belongs to this country.",
    "options": [
      "Brazil",
      "India",
      "China",
      "The US"
    ],
    "correctIndex": 2
  },
  {
    "question": "The fastest time to eat this number of mince pies is 1 min : 52.67 seconds.",
    "options": [
      "3",
      "13",
      "21",
      "5"
    ],
    "correctIndex": 0
  },
  {
    "question": "This country is the leader in beer consumption (per capita).",
    "options": [
      "USA",
      "Czech Republic",
      "Austria",
      "Germany"
    ],
    "correctIndex": 1
  },
  {
    "question": "The largest burger weighed this much.",
    "options": [
      "6,878 pounds (3,120 kg)",
      "1,111 pounds (504 kg)",
      "6,040 pounds (2,740 kg)",
      "18,388 pounds (8,341kg)"
    ],
    "correctIndex": 2
  },
  {
    "question": "The largest gay and lesbian rights march took place in the capital of this country.",
    "options": [
      "The UK",
      "Canada",
      "France",
      "The US"
    ],
    "correctIndex": 3
  },
  {
    "question": "This country has the highest income tax rate.",
    "options": [
      "Norway",
      "Denmark",
      "Sweden",
      "The US"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the largest employer in the world.",
    "options": [
      "Walmart",
      "United States Postal Service",
      "Indian Railways",
      "Microsoft"
    ],
    "correctIndex": 2
  },
  {
    "question": "This man is the highest earning fashion designer.",
    "options": [
      "Armani",
      "Versace",
      "Chanel",
      "Dior"
    ],
    "correctIndex": 0
  },
  {
    "question": "China is the most populous nation in the world. India is second, and the USA is third. What is the fourth most populous nation in the world?",
    "options": [
      "Russia",
      "Japan",
      "Indonesia",
      "Pakistan"
    ],
    "correctIndex": 2
  },
  {
    "question": "What book did author Douglas Adams describe as the fourth book in the Hitchhiker trilogy?",
    "options": [
      "So Long, and Thanks For All the Fish",
      "The Restaurant at the End of the Universe",
      "Life, the Universe and Everything",
      "The Hitchhikers Guide to the Galaxy"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the fourth US president?",
    "options": [
      "James Madison",
      "James Monroe",
      "John Quincy Adams",
      "Thomas Jefferson"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is referred to as the fourth dimension?",
    "options": [
      "weight",
      "length",
      "time",
      "height"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the fourth estate?",
    "options": [
      "the clergy",
      "the nobles",
      "the commoners",
      "the press"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is referred to by the term fourth world (in contrast to the better-known terms first world, second world and third world?",
    "options": [
      "interplanetary societies",
      "disenfranchised societies",
      "undiscovered societies",
      "global societies"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the fourth amendment to the US Constitution?",
    "options": [
      "The right to not be subject to self incrimination",
      "The right to not be subject to unreasonable searches and seizures",
      "The right to bear arms",
      "The right to not be subject to the quartering of soldiers"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the fourth largest nation in the world in area?",
    "options": [
      "Brazil",
      "USA",
      "Australia",
      "China"
    ],
    "correctIndex": 3
  },
  {
    "question": "We all know that New York, Los Angeles and Chicago are the three largest cities in the USA. What is the fourth largest city in the USA, as measured by metropolitan area (SMSA) according to 2006 US Census Bureau estimates?",
    "options": [
      "Miami",
      "Houston",
      "Philadelphia",
      "Dallas-Fort Worth"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the fourth largest city in Canada (after Toronto, Montreal and Vancouver), as measured by metropolitan area according to 2006 estimates?",
    "options": [
      "Winnipeg",
      "Edmonton",
      "Calgary",
      "Ottawa"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the fourth baseball player to hit 600 home runs in the US major leagues (Babe Ruth, of course, was the first)?",
    "options": [
      "Ken Griffey, Jr.",
      "Barry Bonds",
      "Willie Mays",
      "Sammy Sosa"
    ],
    "correctIndex": 1
  },
  {
    "question": "What nation won the fourth World Cup (of football/soccer) in 1950?",
    "options": [
      "England",
      "Brazil",
      "Uruguay",
      "France"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which river in China caused a flood of mammoth proportions in 1931?",
    "options": [
      "Pearl",
      "Red",
      "Yellow",
      "Tumen"
    ],
    "correctIndex": 2
  },
  {
    "question": "What state was affected by the most powerful earthquake recorded in U.S. history prior to 2000?",
    "options": [
      "Texas",
      "California",
      "Alaska",
      "Nebraska"
    ],
    "correctIndex": 2
  },
  {
    "question": "What European country was affected the worst by the European Heat Wave of 2003?",
    "options": [
      "France",
      "Italy",
      "Germany",
      "Spain"
    ],
    "correctIndex": 0
  },
  {
    "question": "Galveston, Indiana was the site of a deadly tornado in 1900.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following volcanoes caused the most deaths?",
    "options": [
      "Taal",
      "Mount Etna",
      "Mauna Loa",
      "Mount Tambora"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Bhola Cyclone of 1970 destroyed much of Pakistan.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Yellow River in China is prone to flooding.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Indian Ocean Earthquake of 2004 did not spark a tsunami.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What part of the U.S. was hit by the North American Storm Complex of 1993?",
    "options": [
      "West",
      "East",
      "South",
      "North"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where is the Louisiana Museum of Modern Art?",
    "options": [
      "Denmark",
      "New Orleans, Louisiana",
      "Batob Rouge, Louisiana",
      "Shreveport , Louisiana"
    ],
    "correctIndex": 0
  },
  {
    "question": "This became the longest running Broadway play on 9 January, 2006 .",
    "options": [
      "Phantom of the Opera",
      "The Fantasticks",
      "Les Miserables",
      "Mouse Trap"
    ],
    "correctIndex": 0
  },
  {
    "question": "William Moulton Marston was the psychologist who invented the polygraph or lie detector. What else did he create?",
    "options": [
      "The Thematic Apperception test",
      "Wonder Woman",
      "The IQ Test",
      "Behavior Therapy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ketchikan, Alaska holds what distinction?",
    "options": [
      "the highest ratio of males to females of any American city",
      "the highest amount of snow fall in an American city",
      "the highest number of days of precipitation for any American city",
      "the highest zip code for an American city"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where is the only Christopher Wren building in the Western Hemisphere?",
    "options": [
      "in Charleston, South Carolina",
      "in Philadelphia",
      "in The College of William and Mary",
      "in Harvard University"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Muppet Show was banned in Saudi Arabia.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Bernard Webb was a pseudonym used by which famous musician and songwriter?",
    "options": [
      "Paul McCartney",
      "John  Lennon",
      "Peter Asher",
      "none of these  three answers is  correct"
    ],
    "correctIndex": 0
  },
  {
    "question": "Can you name the singer who had a big music hit with Mr. Bojangles.",
    "options": [
      "none of these  answers",
      "Ronald Clyde Crosby",
      "Tom Waites",
      "Willie Nelson"
    ],
    "correctIndex": 1
  },
  {
    "question": "For what is Scottish Sir James Dewar famous?",
    "options": [
      "Writng the screenplay to The 39 Steps.",
      "Standardizing the method to produce Scotch whiskey.",
      "Exporting the first Scotch whiskey to the USA.",
      "Inventing the vacuum flask."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following was not a member of the band Lynryd Skynyrd?",
    "options": [
      "Gary Rossington",
      "Jimmy Farrar",
      "Allen Collins",
      "Rickey Medlocke"
    ],
    "correctIndex": 1
  },
  {
    "question": "The town of Juarez, Mexico is located next to what U.S. city?",
    "options": [
      "San Diego, CA",
      "Laredo, TX",
      "El Paso, TX",
      "Sierra Vista, AZ"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1975 Archie Griffin became the first two-time Heisman Trophy Winner.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Michelangelos statue of David is housed in what city?",
    "options": [
      "Florence",
      "Turin",
      "Rome",
      "Vienna"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which TV series did American rapper Ice-T make his television debut?",
    "options": [
      "Law Order SVU",
      "The District",
      "Thieves",
      "Players"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where did Chicago Bears defensive lineman, William Fridge Perry, play college football?",
    "options": [
      "South Carolina AT",
      "Georgia",
      "Eastern Carolina",
      "Clemson"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the mascot of the University of California at Irvine?",
    "options": [
      "Anteater",
      "Maverick",
      "Gaucho",
      "Banana Slug"
    ],
    "correctIndex": 0
  },
  {
    "question": "This tiny sovereign state, with a territory of about 0.44 square kilometres, is the smallest country in the world.",
    "options": [
      "Vatican City",
      "Andorra",
      "San Marino",
      "Monaco"
    ],
    "correctIndex": 0
  },
  {
    "question": "This President, often called by his opponents His Accidency,  was the first politician to assume the office of US President following the death of his predecessor.",
    "options": [
      "John Tyler",
      "Andrew Johnson",
      "Richard Nixon",
      "James Buchanan"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1565, this German-Swiss naturalist became the first person to document and describe the pencil.",
    "options": [
      "Edward  Naime",
      "William Munroe",
      "Nicolas Conte",
      "Conrad Gesner"
    ],
    "correctIndex": 3
  },
  {
    "question": "Before his death, host of the Tonight Show, Johnny Carson, used to meet Steve Martin, Chevy Chase and Carl Reiner in which club?",
    "options": [
      "The Friars Club",
      "The Hollywood Gourmet Poker Club",
      "The Santa Monica Marina Club",
      "The Bel Air Golf and Country Club"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1879, the Procter  Gamble company created a new brand of soap as a result of what mistake?",
    "options": [
      "A soap maker tried to make shampoo.",
      "A soap maker put the wrong chemicals in the new dish soap, making it corrosive.",
      "A soap maker tried to make the companys new toothpaste yellow.",
      "A soap maker forgot to turn off the soap mixer before going to lunch."
    ],
    "correctIndex": 3
  },
  {
    "question": "What was special about the playing cards that were given to British pilots in World War II?",
    "options": [
      "They secretly listed safe houses to hide in.",
      "They contained the code words to alert British RAF headquarters about anti-aircraft emplacements.",
      "They turned into maps.",
      "They had very sharp edges so they could be used as weapons."
    ],
    "correctIndex": 2
  },
  {
    "question": "Mayday, an emergency code word used internationally as a distress signal, derives from which language?",
    "options": [
      "French",
      "German",
      "English",
      "Italian"
    ],
    "correctIndex": 0
  },
  {
    "question": "Captain Ahab, who is captain of the Pequod, has a 1st mate named Ishmael.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is Han Solos first mate on the Millennium Falcon?",
    "options": [
      "R2-D2",
      "Darth Vader",
      "Chewbacca",
      "Yoda"
    ],
    "correctIndex": 2
  },
  {
    "question": "The fictional USS Sea Tiger was captained by Lt. Cmdr. Matt T. Sherman. Who was the first mate?",
    "options": [
      "Lt. (j.g.) Nicholas Holden",
      "Chief Molumphry",
      "Ens. Stovall",
      "Lt. Dolores Crandall"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first mate of PT-73, that was commanded by Lieutenant Commander Quinton McHale?",
    "options": [
      "Fuji Kobiaji",
      "Ensign Charles Parker",
      "Lt. Elroy Carpenter",
      "Captain Wallace B. Binghamton"
    ],
    "correctIndex": 1
  },
  {
    "question": "Captain Edward J. Smith was captain of Titanic. Who was the first officer?",
    "options": [
      "Archibald Butt",
      "Benjamin Guggenheim",
      "William McMaster Murdoch",
      "John Jacob Astor"
    ],
    "correctIndex": 2
  },
  {
    "question": "David E. Weiss was the first mate of the SS Edmund Fitzgerald. The Captain was Ernest M. McSorley.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was Captain James T. Kirks first mate on the USS Enterprise NCC-1701?",
    "options": [
      "Montgomery Scotty Scott",
      "Dr. Leonard Bones McCoy",
      "Hikaru Sulu",
      "Mr. Spock"
    ],
    "correctIndex": 3
  },
  {
    "question": "The fictional USS Echo was commanded by Lieutenant Rip Crandall. Who was the first mate?",
    "options": [
      "Wilbur F. Vandewater",
      "Tommy J. Hanson",
      "Warren Berlington",
      "Josh Davidson"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first mate of the fictional USS Stingray, commanded by Lieutenant Commander Thomas Dodge?",
    "options": [
      "E.T. Lovacelli",
      "Martin T. Pascal",
      "Yancy Graham",
      "Jefferson Jackson"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is Captain Quints first mate on the Orca?",
    "options": [
      "David Brown",
      "Matt Hooper",
      "Richard Zanuck",
      "Carl Gottlieb"
    ],
    "correctIndex": 1
  },
  {
    "question": "Since its separation from the Roman Catholic church in 1534, this branch of Christianity acts as a mother branch of the worldwide Anglican Communion.",
    "options": [
      "Lutheranism",
      "Sufism",
      "Church of  England",
      "Calvinism"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the three classical types of columns has its capital ornately decorated to look like acanthus leaves?",
    "options": [
      "Ionic",
      "Tonic",
      "Corinthian",
      "Doric"
    ],
    "correctIndex": 2
  },
  {
    "question": "The motto of which US state is The Welfare of the People Shall Be The Supreme Law.?",
    "options": [
      "Washington",
      "Connecticut",
      "Texas",
      "Missouri"
    ],
    "correctIndex": 3
  },
  {
    "question": "The French Foreign Legion was formed in 1831 to conquer which nation ?",
    "options": [
      "Algeria",
      "Morocco",
      "Tunisia",
      "Vietnam"
    ],
    "correctIndex": 0
  },
  {
    "question": "The proteins in dead organisms as well as in body wastes are converted into ammonia by bacteria and fungi. Into what useful product do other bacteria convert this ammonia?",
    "options": [
      "Phosphoric acid",
      "Amino acids",
      "Nitrates",
      "Polypeptides"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the capital city of Bahrain?",
    "options": [
      "Niamey",
      "Bahrain City",
      "Manama",
      "Muscat"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following languages is spoken as primary language by the most people?",
    "options": [
      "German",
      "Italian",
      "Bengali",
      "Russian"
    ],
    "correctIndex": 2
  },
  {
    "question": "Almaty, or Alma-Ata as formerly known, is the largest city and capital of which country?",
    "options": [
      "Krgyzstan",
      "Tajikistan",
      "Kyrgyzstan",
      "Kazakhstan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Under whose rule was the island of Cyprus when it was conquered by the Ottoman Empire in 1571?",
    "options": [
      "France",
      "Greece",
      "The Papal States",
      "Venice"
    ],
    "correctIndex": 3
  },
  {
    "question": "What did NASAs first satellite, Explorer I, find?",
    "options": [
      "That Mars natural satellites were actually captured asteroids",
      "The remains of Sputnik I",
      "The Van Allen radiation belt",
      "Jupiters moon Callisto"
    ],
    "correctIndex": 2
  },
  {
    "question": "What infection\u00e2\u0080\u0099s symptoms are tiny white-headed pimples, usually at the base of hair shafts?",
    "options": [
      "Impetigo",
      "Cellulitis",
      "Folliculitis",
      "Boils"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which Canadian city is the site of the haunted Carleton County Jail, said to be the home of the ghost of Patrick Whelen, hanged for the murder of Thomas DArcy McGee?",
    "options": [
      "Montreal, Quebec",
      "Ottawa, Ontario",
      "Barkerville, British Columbia",
      "Bad Hills, Saskatchewan"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1986, this diamond found in a South African mine beat the record for the worlds largest faceted diamond.",
    "options": [
      "Golden Jubilee",
      "Second Star of Africa",
      "Great Star of Africa",
      "Centtenary"
    ],
    "correctIndex": 0
  },
  {
    "question": "What type of rock is the white marble used to build the Taj Mahal?",
    "options": [
      "Ore",
      "Sedimentary",
      "Metamorphic",
      "Igneous"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what country is picking your nose in public more acceptable than blowing your nose?",
    "options": [
      "France",
      "Phillipines",
      "Japan",
      "Iran"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which South American country can the Nazca Lines be found?",
    "options": [
      "Boliva",
      "Chile",
      "Argentina",
      "Peru"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Una people are the last ones of the lost tribes remaining hidden away in the forest of New Guinea.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What crime was the famous Casanova imprisoned for in 1755?",
    "options": [
      "Theft",
      "Witchcraft",
      "Fraud",
      "Adultory"
    ],
    "correctIndex": 1
  },
  {
    "question": "Despite her long and tempestuous romance with Rhett Butler, the strong-willed Southern belle Scarlett OHara could not overcome her infatuation with this gentleman.",
    "options": [
      "Frank Kennedy",
      "Stuart Tarleton",
      "Ashley Wilkes",
      "Charles Hamilton"
    ],
    "correctIndex": 2
  },
  {
    "question": "What Greek mythological hero eloped with King Menelaus wife, Helen, thus prompting the Trojan War?",
    "options": [
      "Paris",
      "Priam",
      "Hector",
      "Achilles"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to Arthurian legend, Queen Guineveres love affair with this knight of the Round Table led to the downfall of Camelot.",
    "options": [
      "Tristan",
      "Lancelot",
      "Percival",
      "Galahad"
    ],
    "correctIndex": 1
  },
  {
    "question": "What character uttered the following words by the end of Casablanca, one of the most enduring romantic dramas of all time: It doesnt take much to see that the problems of three little people dont amount to a hill of beans in this crazy world.?",
    "options": [
      "Ilsa",
      "Victor Laszlo",
      "Captain Renault",
      "Rick"
    ],
    "correctIndex": 3
  },
  {
    "question": "This novel centers around Florentino Arizas obsession with Fremina Daza who marries a wealthy doctor of medicine, named Juvenal Urbino.",
    "options": [
      "One Hundred Years of Solitude",
      "Like Water for Chocolate",
      "Love in the Time of Cholera",
      "Of Love and Other Demons"
    ],
    "correctIndex": 2
  },
  {
    "question": "What trio of actors, playing characters involved in a love triangle, is not correctly matched with the movie?",
    "options": [
      "The Notebook (2004) - Ryan Gosling, Rachel McAdams, James Marsden",
      "The Graduate (1967) - Anne Bancroft, Dustin Hoffman, Katharine Ross",
      "First Knight - Clive Owen, Keira Knightley, Sean Connery",
      "The V.I.P.s (1963) - Elizabeth Taylor, Richard Burton, Louis Jourdan"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the Oscar-winning movie The English Patient, Geoffrey Cliftons wife, Kathrine, fell in love with Count de Almasy, the man who completely rejects nationalism and tries to erase all ties to countries. What was Almasys nationality?",
    "options": [
      "Hungarian",
      "English",
      "Polish",
      "Austrian"
    ],
    "correctIndex": 0
  },
  {
    "question": "Two young women and an artist, who finds himself attracted to both of them, form one of the love triangles in this Woody Allen movie.",
    "options": [
      "Vicky Cristina Barcelona",
      "Everyone Says I Love You",
      "Melinda and Melinda",
      "A Midsummer Nights Sex Comedy"
    ],
    "correctIndex": 0
  },
  {
    "question": "This author penned a novel centered around the mysterious Jay Gatsby who acquired an immense wealth in the hope of winning back his beloved, who married an old money millionaire, named Tom Buchanan.",
    "options": [
      "Ernest Hemingway",
      "Scott Fitzgerald",
      "Don DeLillo",
      "William Faulkner"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Adrian Lynes movie Unfaithful, Constance (Diane Lane), who is married to Edward (Richard Gere), has a fling with Paul (Olivier Martinez), a mysterious Frenchman who buys and sells used books. How does the movie end?",
    "options": [
      "Constance and Edward confront each other and she subsequently commits suicide.",
      "Constance discovers that Edward has killed Paul and tells him they will get through the crisis together.",
      "Paul murders Edward.",
      "Constance and Edward confront each other and she kills him."
    ],
    "correctIndex": 1
  },
  {
    "question": "According to a study an office desk has nearly 400 times more bacteria than a bathroom toilet.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "A panther and a black leopard are the same animal.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This food has the same chemical as Prozac, and can put a person in a better mood.",
    "options": [
      "Prunes",
      "Cheese",
      "Bananas",
      "Potatoes"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many Earth years add up to a galactic year?",
    "options": [
      "180 Million",
      "250 Million",
      "350 Million",
      "400 Million"
    ],
    "correctIndex": 1
  },
  {
    "question": "Bamboo plants can grow up to 52 inches a day.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the man that had hiccups for nearly 69 years?",
    "options": [
      "Carl Rexfort",
      "John Hannah",
      "Charles Osborne",
      "Rhett Milfrond"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was used to help people hear before the hearing aid was invented?",
    "options": [
      "Ear Headpiece",
      "Ear Trumpet",
      "Ear Windtrophy",
      "Ear Microphone"
    ],
    "correctIndex": 1
  },
  {
    "question": "By the end of what week does an unborn fetus start to develop fingerprints?",
    "options": [
      "16th",
      "18th",
      "15th",
      "20th"
    ],
    "correctIndex": 1
  },
  {
    "question": "This 1998 Independent film was also shot in Death Valley Junction, CA.  What is the correct name of the film?",
    "options": [
      "Tumbleweeds and Aliens",
      "Welcome to Serendipity",
      "Hot Moon",
      "Serendipity"
    ],
    "correctIndex": 1
  },
  {
    "question": "The 1980s film, The Hitcher, starring Rutger Hauer and Jennifer Jason-Leigh, was shot in the same location as which other film?",
    "options": [
      "Hot Moon",
      "Welcome to Serendipity",
      "Baghdad Cafe",
      "Death Valley Days"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the actual name of the hotel where parts of the above mentioned film was shot?",
    "options": [
      "Indian Springs Inn",
      "Baghdad Inn",
      "Longstreet Hotel, Resort and Casino",
      "Amargosa Hotel and Opera House"
    ],
    "correctIndex": 3
  },
  {
    "question": "The 1996 film, Courage Under Fire, starring Denzel Washington and Meg Ryan, was partially filmed in a United States Desert..",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Alabama Hills is a desert location used in many movies.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The 1995 Bruce Springsteen song, The Ghost of Tom Joad gets its title from a character in a book by this author.",
    "options": [
      "John Steinbeck",
      "Agatha Christie",
      "Ernest Hemingway",
      "William Faulkner"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is a synonym for humor based on sexual explicit situations.",
    "options": [
      "blue humor",
      "vitreous humor",
      "baud talk",
      "red humor"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the southernmost capital city?",
    "options": [
      "Perth",
      "Capetown",
      "Sydney",
      "Wellington"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what year was the World Series first broadcast on radio?",
    "options": [
      "1932",
      "1912",
      "1922",
      "1942"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who is the first singer to have two singles that sold over 30 million copies worldwide?",
    "options": [
      "Bruce Springsteen",
      "Yanni",
      "Elton John",
      "Bing Crosby"
    ],
    "correctIndex": 3
  },
  {
    "question": "This standup comedian became famous as the large Massachusetts man attacked by a mugger in the next to last episode of Seinfeld.",
    "options": [
      "Eric Bana",
      "John Caponera",
      "Jimmy Pardo",
      "John Pinette"
    ],
    "correctIndex": 3
  },
  {
    "question": "In terms of population of the city proper, which is the first capital city with over 10,000,000 people?",
    "options": [
      "Karachi",
      "Sao Paulo",
      "New York City",
      "Moscow"
    ],
    "correctIndex": 3
  },
  {
    "question": "What did the Treaty of Maastricht  result in?",
    "options": [
      "The Hundreds Year War ended.",
      "World War II formally ended in Europe.",
      "The United Nations was established.",
      "The European Union was set up."
    ],
    "correctIndex": 3
  },
  {
    "question": "This great inventor loved the number three and would only stay in hotel rooms with a number divisible by three.",
    "options": [
      "T .A. Edison",
      "E. Howe",
      "N. Tesla",
      "M. E. Knight"
    ],
    "correctIndex": 2
  },
  {
    "question": "In terms of ratings, this was the top TV show in the USA for the summer of 2008.",
    "options": [
      "Fringe",
      "Dancing With the Stars",
      "Americas Got Talent",
      "Monk"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1856 the US Army formed the U.S. Army Camel Corps.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In September 2008 a new, very large prime number was found. Approximately how many digits does it have?",
    "options": [
      "Between 6,00 and 8,000",
      "Over 10,000",
      "Between 5000 and 6000",
      "Between 8,00 and 10,000"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was invented by Levi Spear Parmly?",
    "options": [
      "The jet engine",
      "Dental floss",
      "Blue Ray discs",
      "The QWERTYU keyboard"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Olivieri brothers, Pat and Harry, are given credit  for inventing this in 1933.",
    "options": [
      "The Philly cheesesteak",
      "Dental floss",
      "The jet engine",
      "The McDonald quarter-pounder"
    ],
    "correctIndex": 0
  },
  {
    "question": "This town in Illinois became the site of the first Dairy Queen in 1940. It is the hometown of singer Lionel Richie, basketball star George Mikan, and actors Mercedes McCambridge and Anthony Rapp. It is also home to a famous federal prison.",
    "options": [
      "Joliet",
      "Ganamorra",
      "Chicago",
      "Springfield"
    ],
    "correctIndex": 0
  },
  {
    "question": "Eight years before George Washington was elected  President of the USA, this politician was appointed President of the United States by the Continental Congress.",
    "options": [
      "Thomas McKean",
      "Harry Lightfoot Lee",
      "Samuel Adams",
      "John Hancock"
    ],
    "correctIndex": 0
  },
  {
    "question": "This European country is divided into three districts, 12 cantons, and 116 communes.",
    "options": [
      "Belgium",
      "Andorra",
      "Luxembourg",
      "Switzerland"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these came first?",
    "options": [
      "Busch Gardens",
      "Freedomland",
      "Disneyland",
      "Knotts Berry Farm"
    ],
    "correctIndex": 3
  },
  {
    "question": "This day in April is celebrated as Earth Day in many countries.",
    "options": [
      "31",
      "22",
      "12",
      "2"
    ],
    "correctIndex": 1
  },
  {
    "question": "What character attacked nurse Ratched, the main antagonist of the novel One Flew Over the Cuckoos Nest, and nearly choked her to death?",
    "options": [
      "Billy Bibbitt",
      "Randle McMurphy",
      "Chief Bromden",
      "Charles Cheswick"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this novel, set during WWII, Sue Ann Duckett is one of the ward nurses in the hospital where Yossarian gets treated, and later starts a relationship with him.",
    "options": [
      "Slaughterhouse-Five",
      "Catch-22",
      "One Flew Over the Cuckoos Nest",
      "Cats Cradle"
    ],
    "correctIndex": 1
  },
  {
    "question": "What actress portrayed Hana, the French-Canadian nurse who looked after a critically burned man in the Oscar-winning movie The English Patient?",
    "options": [
      "Kristin Scott Thomas",
      "Catherine Deneuve",
      "Juliette Binoche",
      "Audrey Tautou"
    ],
    "correctIndex": 2
  },
  {
    "question": "What song by The Beatles, recorded during the Sgt. Pepper sessions, contains the lyrics:",
    "options": [
      "Help!",
      "hind the shelter in the middle of a roundabout",
      "Strawberry Fields Forever",
      "A Hard Days Night",
      "Penny Lane"
    ],
    "correctIndex": 4
  },
  {
    "question": "In this drama film, Penelope Cruz character, Mia, trains to be a nurse and is anxious to join the anti-fascist forces during the Spanish Civil War.",
    "options": [
      "All About My Mother",
      "Vicky Cristina Barcelona",
      "Head in the Clouds",
      "Vanilla Sky"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the 2001 movie Pearl Harbor, Kate Beckinsales character, Nurse Lt. Evelyn Johnson, is pregnant with a child whose father, Danny (Josh Hartnett) did not survive what event of WWII?",
    "options": [
      "the attack on Pearl Harbor",
      "D-Day",
      "Operation Barbarossa",
      "the Doolittle Raid"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who did Allie Hamilton meet while working as a nurse in the 2004 romance film The Notebook?",
    "options": [
      "her old flame Noah Calhoun",
      "her future fiance Lon Hammond",
      "none of these",
      "her future fiance and eventual husband Lon Hammond"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the nurse in the 2000 comedy film Meet the Parents and its 2004 sequel Meet the Fockers?",
    "options": [
      "Rozalin Focker",
      "Pam Byrnes",
      "Gaylord Focker",
      "Dina Byrnes"
    ],
    "correctIndex": 2
  },
  {
    "question": "This novel by Ernest Hemingway, set during World War I, is told through the point of view of Lieutenant Frederic Henry who falls in love with nurse Catherine Barkley.",
    "options": [
      "The Sun Also Rises",
      "The Snows of Kilimanjaro",
      "For Whom the Bell Tolls",
      "A Farewell to Arms"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of the nurse, portrayed by Julianna Margulies, who attempted suicide in the first season of ER?",
    "options": [
      "Malik McGrath",
      "Wendy Goldman",
      "Lily Jarvik",
      "Carol Hathaway"
    ],
    "correctIndex": 3
  },
  {
    "question": "This duo was formed by Roland Orzabel and Curt Smith in the early 1980s. Their songs Shout and Everybody Wants to Rule the World both hit #1on the US Pop Charts.",
    "options": [
      "Tears for Fears",
      "Dire Straits",
      "Graduate",
      "Air Supply"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is true about President Bill Clintons official portrait?",
    "options": [
      "He is portrayed as being right-handed instead of left-handed.",
      "It is the first official Presidential portrait painted by an African-American.",
      "It is the first official Presidential portrait  not painted by an American citizen.",
      "It is the first official Presidential portrait that had to be redone because of mistakes."
    ],
    "correctIndex": 1
  },
  {
    "question": "This great American literary work was intended to be both a novella and a play. It has been made into a full-length movie at least three times. It hits on themes of mental illness, prejudice, loneliness and brutality. It revolves around two friends named  George and Lennie. What is its title?",
    "options": [
      "Of Mice and Men",
      "To Kill a Mockingbird",
      "In Cold Blood",
      "The Grapes of Wrath"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1995 this person addressed the UN General Assembly in English, French, Spanish, Arabic, Chinese  and Russian.",
    "options": [
      "Mother Teresa",
      "Yuri Andropov",
      "Fidel Castro",
      "Pope John Paul II"
    ],
    "correctIndex": 3
  },
  {
    "question": "Audrey Hepburn, Jean-Claude Van Damme, Django Reinhardt, Toots Thielemans, and Adolphe Sax were all born in this country.",
    "options": [
      "Luxembourg",
      "Belgium",
      "France",
      "The Netherlands"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year did the first brown supermarket grocery bag appear?",
    "options": [
      "1903",
      "1915",
      "1911",
      "1871"
    ],
    "correctIndex": 3
  },
  {
    "question": "This astronaut claimed he was the first man to wet his pants on the moon.",
    "options": [
      "Buzz Aldrin",
      "Gus Grissom",
      "Neil Armstrong",
      "Chuck Rollands"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these was invented by O. Mumford Scott?",
    "options": [
      "Disposable razors",
      "The electric car",
      "Vaseline",
      "Inexpensive weed-free grass seed"
    ],
    "correctIndex": 3
  },
  {
    "question": "When was the first stick antiperspirant patented?",
    "options": [
      "1942",
      "1919",
      "1951",
      "1888"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first painting to sell for more than $100,000,00 was painted by this artist.",
    "options": [
      "Degas",
      "Picasso",
      "Velasquez",
      "Van Gough"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of these people was nicknamed The Iron Butterfly?",
    "options": [
      "Indira Gandhi",
      "Margaret Thatcher",
      "Imelda Marcos",
      "Bella Abzug"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these women was nicknamed The Iron Lady?",
    "options": [
      "Margaret Thatcher",
      "Indira Gandhi",
      "Imelda Marcos",
      "Mother Teresa"
    ],
    "correctIndex": 0
  },
  {
    "question": "She was called The Swedish Nightingale.",
    "options": [
      "Ingrid Bergmann",
      "Jenny Lind",
      "Bjork",
      "Agnetha Faltskog"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these magazines came first?",
    "options": [
      "Highlights for Children",
      "Playboy",
      "Discover",
      "Boys Life"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was MKULTRA?",
    "options": [
      "The code name for a secret CIA mind control project",
      "The code name for Germanys invasion of Poland, setting off World War II",
      "The code name for the secret USA/British coding/decoding device used in Operation Overlord",
      "The code name for the first American action in Operation Iraqi Freedom"
    ],
    "correctIndex": 0
  },
  {
    "question": "This novel told the story of two families, the Hamiltons and the Trasks, living in the Salinas Valley in California.  It is loosely based on Biblical stories.",
    "options": [
      "East of Eden",
      "My Brothers Keeper",
      "The Tree of Life",
      "The Caine Mutiny"
    ],
    "correctIndex": 0
  },
  {
    "question": "William McCord has a star on the Hollywood Walk of Fame. He appeared in the movie The Adventures of Buckaroo Banzai and the soap opera Days of Our Lives. With which singing group did he have his biggest hit?",
    "options": [
      "Billy Vera and the Beaters",
      "The Remains",
      "Dion and the Belmonts",
      "The Hollies"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the first childrens book to be number one on the New York Times Best Seller list?",
    "options": [
      "Madeline",
      "Green Eggs and Ham",
      "Goodnight Moon",
      "Harry Potter and the Goblet of Fire"
    ],
    "correctIndex": 3
  },
  {
    "question": "My source of income is from an inheritance and the Defense industry. Im worth $6.5 billion and first appeared in comic books in 1939.",
    "options": [
      "Bruce Wayne",
      "Lex Luther",
      "Tony Starks",
      "Peter Parker"
    ],
    "correctIndex": 0
  },
  {
    "question": "Coming in at #7 on the Forbes List, worth an estimated $7.2 billion, this 70-year-old fictional character got his money from an inheritance and invested it in media and steel. One of his children is married to the hapless Peter Griffin.",
    "options": [
      "Steven Jobs",
      "Carter Pewterschmidt",
      "Ted Turner",
      "Montgomery Burns"
    ],
    "correctIndex": 1
  },
  {
    "question": "This unit of length, used mostly for maritime and aviation purposes, measures exactly 1.852 km (1.150779 miles).",
    "options": [
      "Furlong",
      "Parsec",
      "Angstrom",
      "Nautical mile"
    ],
    "correctIndex": 3
  },
  {
    "question": "What do these five countries have in common: Nicaragua, the Philippines, Bolivia, Liechtenstein, Saudi Arabia?",
    "options": [
      "They are all located at an altitude above 1400 km.",
      "They are the only producers of zirconium",
      "They are all named after historic personalities",
      "They all use the US dollar as their unit of currency"
    ],
    "correctIndex": 2
  },
  {
    "question": "This American writer and teacher became the first woman US Senator, although she occupied the position for only one day.",
    "options": [
      "Jeanne  Rankin",
      "Hatie Caraway",
      "Rebecca Latimer Felton",
      "Nellie  Taylor Rose"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which collective noun denotes a group of storks?",
    "options": [
      "a rafter",
      "a mustering",
      "a smack",
      "a flight"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is an uncommon English word deriving from the Yiddish word for to drag and means to move something from one place to another with difficulties.",
    "options": [
      "Kibbitz",
      "Glitch",
      "Schlep",
      "Maven"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the next number in the following sequence, having in mind that it is related to positive integers: 1, 0.5, 0.333, 0.25, 0.2, 0.166, 0.142?",
    "options": [
      "0.190",
      "0.125",
      "0.314",
      "0.100"
    ],
    "correctIndex": 1
  },
  {
    "question": "The English language has quite a variety of words for the babies of different animals. What is the proper word for a baby swan?",
    "options": [
      "Weaner",
      "Keet",
      "Sygnet",
      "Chick"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these characters created by French writer Alexandre Dumas is not correctly matched with the novel?",
    "options": [
      "G\u00c3\u00a9rard de Villefort - Twenty Years After",
      "Milady de Winter - The Three Musketeers",
      "DArtagnan - Twenty Years After",
      "La Mole - Queen Margot"
    ],
    "correctIndex": 0
  },
  {
    "question": "Alexander Graham Bell, known as the inventor of the telephone, is also credited with the invention of this device, which was first used after the assassination of President James Garfield.",
    "options": [
      "metal detector",
      "phonograph",
      "audiometer",
      "air conditioning"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement is not true about political philosopher and economist Alexander Hamilton.",
    "options": [
      "He died in a duel.",
      "He served in the American Revolutionary War.",
      "He was United States Secretary of the Treasury under Abraham Lincoln.",
      "He was one of the Founding Fathers."
    ],
    "correctIndex": 2
  },
  {
    "question": "Fashion designer Alexander McQueen, known as the hooligan of English fashion, succeeded John Galliano as head designer at this French fashion house.",
    "options": [
      "Chanel",
      "Christian Lacroix",
      "Dolce  Gabbana",
      "Givenchy"
    ],
    "correctIndex": 3
  },
  {
    "question": "What famous Greek philosopher tutored Alexander the Great and stimulated his interest in science, medicine, philosophy and literature?",
    "options": [
      "Plato",
      "Socrates",
      "Aristotle",
      "Epicurus"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these characters portrayed by actor Alec Baldwin was not a real life person?",
    "options": [
      "Jimmy Swaggart (Great Balls of Fire!)",
      "James Doolittle (Pearl Harbor)",
      "Juan Trippe (The Aviator)",
      "Jack Ryan (The Hunt for Red October)"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1986, Sir Alex Ferguson became manager of this English Premier League soccer club, nicknamed The Red Devils.",
    "options": [
      "Chelsea",
      "Aston Villa",
      "Manchester United",
      "Blackburn Rovers"
    ],
    "correctIndex": 2
  },
  {
    "question": "What author is not correctly matched with the literary work he created?",
    "options": [
      "Alexander Pushkin - Eugene Onegin",
      "Alan Alexander Milne - The Wonderful Wizard of Oz",
      "Alexander Pope - The Rape of the Lock",
      "Alexandre Dumas, p\u00c3\u00a8re - The Count of Monte Cristo"
    ],
    "correctIndex": 1
  },
  {
    "question": "For which of these achievements did Sir Alexander Flemming win the Nobel Prize in Physiology or Medicine in 1945?",
    "options": [
      "the discovery of penicillin",
      "the discovery of the enzyme lysozyme",
      "the introduction of the smallpox vaccine",
      "developing a process which slows microbial growth in foods"
    ],
    "correctIndex": 0
  },
  {
    "question": "Baseball player Alexander Rodriguez, who became the youngest player ever to hit 500 home runs, started his professional career with this team.",
    "options": [
      "Seattle Mariners",
      "New York Yankees",
      "Detroit Tigers",
      "Texas Rangers"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the context of construction, how long is a 2d nail?",
    "options": [
      "1 foot",
      "20 cm",
      "1 cm",
      "1 inch"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which statement below, concerning even numbers, is true?",
    "options": [
      "There are no even irrational numbers",
      "There are no even cardinal numbers",
      "There are no even prime numbers",
      "There are no even perfect numbers"
    ],
    "correctIndex": 0
  },
  {
    "question": "What do we call a horizontal beam used usually for support and walling over a window?",
    "options": [
      "Purlin",
      "Lintel",
      "Screed",
      "Kerf"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who did Time magazine name as \u00e2\u0080\u009cPerson of the Year for 2006?",
    "options": [
      "Nancy Pelosi",
      "Jong Il Kim",
      "Bill Gates",
      "The Internet user"
    ],
    "correctIndex": 3
  },
  {
    "question": "His brother was boxing heavyweight champ. He fought Tyson for the heavyweight title, but lost in an early round KO.  Who was he?",
    "options": [
      "Michal Spinks",
      "Steve Norton",
      "Johnny Fullmer",
      "Danny Lewis"
    ],
    "correctIndex": 0
  },
  {
    "question": "This President was accused of fathering a child in a cloak room of the White House.",
    "options": [
      "Harding",
      "Grant",
      "Jefferson",
      "Van Buren"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these words means someone who believes the self is the most important thing ?",
    "options": [
      "Egoist",
      "Narcissist",
      "A person with OCD",
      "Egotist"
    ],
    "correctIndex": 0
  },
  {
    "question": "This composer hired cliquers to boo his sons early works at their premier. Eventually, the popularity of his sons works overcame the insults of the father and his stooges. Name the father.",
    "options": [
      "Johann  Strauss",
      "Johannes Brahms",
      "Johan Sebastian Bach",
      "Franz Lizst"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the street in New York City, famous for jewels and jewelry?",
    "options": [
      "Madison Avenue",
      "47th street",
      "51st street",
      "Park Avenue"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the world of design and construction, what is Zodiaq?",
    "options": [
      "A material for improving safety glass",
      "An underlayer for granite",
      "A product for wall insulation",
      "A material used for countertops"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what century was the word pink used for the first time?",
    "options": [
      "18th century",
      "16th century",
      "19th century",
      "17th century"
    ],
    "correctIndex": 3
  },
  {
    "question": "When is the expression seeing pink elephants most often used?",
    "options": [
      "when you are dizzy",
      "when you see a ghost",
      "when people are drunk",
      "when going to sleep"
    ],
    "correctIndex": 2
  },
  {
    "question": "Pink is a song by Guns N Roses.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Is the Pink Cadillac the trademark of Mary Kay beauty products?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Pink is the color of what ribbon?",
    "options": [
      "AIDS Awareness ribbon",
      "Ovarian Cancer Awareness ribbon",
      "Breast Cancer Awareness ribbon",
      "Tuberculosis Awareness ribbon"
    ],
    "correctIndex": 2
  },
  {
    "question": "Pink is a line of lingerie by Victorias Secret.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is the Latin word for pink?",
    "options": [
      "Pinkueta",
      "Rosa",
      "Roseus",
      "Pinky"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which city has a Pink Line rail service?",
    "options": [
      "Chicago",
      "Denver",
      "Atlanta",
      "Washington DC"
    ],
    "correctIndex": 0
  },
  {
    "question": "What fashion designer popularized the color known as shocking pink?",
    "options": [
      "CoCo Chanel",
      "Elsa Schiaparelli",
      "Issey Miyake",
      "Vivienne Westwood"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Thailand, pink is associated with what day of the week?",
    "options": [
      "Wednesday",
      "Tuesday",
      "Saturday",
      "Friday"
    ],
    "correctIndex": 1
  },
  {
    "question": "Finish this line from the pirate freecreditreport.com commercial: They say a man should always. . .",
    "options": [
      "bless corn on the cob he wants",
      "make a mess in the mob he haunts",
      "dress for the job he wins",
      "dress for the job he wants"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the pirate freecreditreport.com ad, who stole the mans identity?",
    "options": [
      "a hacker",
      "the Packers",
      "a Quaker",
      "a slacker"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which two kinds of vehicles does the singer want to buy in the new car freecreditreport.com commercial?",
    "options": [
      "a Hummer and a scooter",
      "a Tesla and a Versa",
      "a convertible and an SUV",
      "a Lexus and a Harley"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the new car freecreditreport.com commercial, instead of looking fly and rolling phat, what happens when the boys drive their new car?",
    "options": [
      "legs are sticking to the vinyl and the posses getting laughed at",
      "Megs slicker than vinyl and my boss is getting laid back",
      "pegs are stickin to a rhino and the boss is getting flat",
      "legs are feelin like a rhino and the mosss betting last"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where do the lead singer and his wife live in one of the freecreditreport.com ads?",
    "options": [
      "at a traveling Renaissance Faire",
      "a pleasant suburb",
      "in the back of a fish n chips restaurant",
      "in the basement of her mom and dads"
    ],
    "correctIndex": 3
  },
  {
    "question": "Why couldnt the couple get a loan for a respectable home in one of the freecreditreport.com commercials?",
    "options": [
      "She defaulted on some old credit card.",
      "Some punk opened a credit card in her name.",
      "He had a poor credit score.",
      "His credit was whack."
    ],
    "correctIndex": 0
  },
  {
    "question": "In one of the freecreditreport.com commercials the boys are at the Renaissance Faire. How was the lead singer feeling at the beginning of the song?",
    "options": [
      "impressed",
      "incensed",
      "depressed",
      "regressed"
    ],
    "correctIndex": 2
  },
  {
    "question": "What color are the tights the lead singer is wearing in one of the freecreditreport.com commercials?",
    "options": [
      "yellow",
      "brown",
      "blue",
      "green"
    ],
    "correctIndex": 3
  },
  {
    "question": "In one of the freecreditreport.com commercials, the singers relegated to riding a bicycle for transportation. How is the singer rolling in this ad?",
    "options": [
      "eco-friendly",
      "loaded",
      "life friendly",
      "phat"
    ],
    "correctIndex": 0
  },
  {
    "question": "What three things do rock stars get to have according to a freecreditreport.com commercial?",
    "options": [
      "champagn, credit cards, exotic cards",
      "cramping, Viagra, little scars",
      "champagne, caviar, exotic cars",
      "campaigns, caviar, cattle cars"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first player selected by the Dallas Cowboys in the football draft?",
    "options": [
      "Bedford Wynne",
      "Bob Lilly",
      "Abner Haynes",
      "Don Meredith"
    ],
    "correctIndex": 1
  },
  {
    "question": "This famous song was written about a love letter to a girl named Wendy. The writer loves her, but just has to get out of town.  What is the name of the song?",
    "options": [
      "Born to Run",
      "The Letter",
      "Love on the Rocks",
      "The Streets of This Town"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these countries does not border Georgia?",
    "options": [
      "Armenia",
      "Belarus",
      "Azerbaijain",
      "Turkey"
    ],
    "correctIndex": 1
  },
  {
    "question": "He is a very popular American entertainer.  His wife, Compton Maalak, operates a full service non-profit salon giving free services to women trying to get off welfare and going into jobs.  He was in Beverly Hills Cop II\u00e2\u0080\u009d and voiced a role in Madagascar. Who is he?",
    "options": [
      "Will Smith",
      "Tommy  Tiny  LIster",
      "Eddie Murphy",
      "Chris Rock"
    ],
    "correctIndex": 3
  },
  {
    "question": "The 1927 movie Wings was the first winner of the Best Picture Oscar. Which of these actors was in it?",
    "options": [
      "Ray Milland",
      "Gary Cooper",
      "Brian Donleavy",
      "Charlie Chaplin"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the common between the years 1914, 1918, 1935, 1940, 1941, 1942 and 1943?",
    "options": [
      "In these years, there was no Dali Lama.",
      "In these years no received a Nobel Prize in Literature.",
      "In these years there, Republican and Democratic Parties each had exactly 50 votes in the US Senate.",
      "In those years an extra 1second was added to the year to make the solar year correct."
    ],
    "correctIndex": 1
  },
  {
    "question": "It is generally accepted that paper money was invented in this nation.",
    "options": [
      "India",
      "The Netherlands",
      "Japan",
      "China"
    ],
    "correctIndex": 3
  },
  {
    "question": "He was the first Major League Baseball manager to win a World Series in both the National and American Leagues.",
    "options": [
      "Sparky Anderson",
      "John McGraw",
      "Jim Leyland",
      "Joe Torre"
    ],
    "correctIndex": 0
  },
  {
    "question": "Windows runs most computers. When the first version of the Windows Operating System released?",
    "options": [
      "1981",
      "1961",
      "1991",
      "1971"
    ],
    "correctIndex": 0
  },
  {
    "question": "Almost everyone knows of Hank Aaron, Babe Ruth, Sandy Koufax, Bob Gibson, and Ichiro Suzuki but who was Bill Klem?",
    "options": [
      "The first professional baseball player",
      "The Father of Modern Umpires",
      "The man who replaced Lou Gehrig at first base for the Yankees.",
      "The man who sold Babe Ruth to the Yankees"
    ],
    "correctIndex": 1
  },
  {
    "question": "This person was recognized as the first billionaire.",
    "options": [
      "Hassan Ibn Ganeff",
      "John D. Rockefeller",
      "Andrew Carnegie",
      "Bill Gates"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the creator of the first steam locomotive?",
    "options": [
      "Richard Trevithick",
      "Ronald Von Heldenberger",
      "Robert Fulton",
      "Robert Watts"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sancho Panza was the squire to and the best friend of Don Quixote. What does panza\u00e2\u0080\u009d mean in Spanish?",
    "options": [
      "Fool",
      "Belly",
      "Jester",
      "Compatriot"
    ],
    "correctIndex": 1
  },
  {
    "question": "Finnish, the language spoken by over 94 % of the people of Finland is most closely related to this language.",
    "options": [
      "Danish",
      "Estonian",
      "Russian",
      "Swedish"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which is the author of The Scarlatti Inheritance, The Matarese Cycle, The Osterman Weekend, and The Scorpio Illusion.?",
    "options": [
      "John Grisham",
      "John Tanner",
      "Robert Ludlum",
      "Eric Van Lustbader"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first motion picture that was longer than one hour was made in this country.",
    "options": [
      "Australia",
      "England",
      "France",
      "The USA"
    ],
    "correctIndex": 0
  },
  {
    "question": "When was the first ostrich farm built in the USA?",
    "options": [
      "1906",
      "1956",
      "1926",
      "1886"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first shoes made on separate lasts for left and right shoes were made in this city.",
    "options": [
      "Milan",
      "Rochester",
      "Southhampton",
      "Boston"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is considered the worlds first photojournalist?",
    "options": [
      "Eadweard Muybridge",
      "Jacob Riis",
      "Matthew  Brady",
      "Minor White"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which line the food is not matched with its place of origin?",
    "options": [
      "Spinach - Iran",
      "Peach - Peru",
      "Grapefruit - Barbados",
      "Blueberry - North America"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is listed as the richest person in the world on the 2009 Forbes list?",
    "options": [
      "Carlos Slim Helu",
      "Lawrence Ellison",
      "Warren  Buffett",
      "Bill Gates"
    ],
    "correctIndex": 3
  },
  {
    "question": "In square miles, what is the largest country in the world?",
    "options": [
      "Peoples Republic of China",
      "United States",
      "Russia",
      "Canada"
    ],
    "correctIndex": 2
  },
  {
    "question": "Measured from base to peak, what is the worlds highest mountain?",
    "options": [
      "Chimborazo",
      "Mauna Kea",
      "K2",
      "Mt. Everest"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which country has the highest population density according to 2009 estimates?",
    "options": [
      "Indonesia",
      "India",
      "United States",
      "Peoples Republic of China"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the deepest spot in the oceans?",
    "options": [
      "Kuril-Kamchatka Trench",
      "Philippine Trench",
      "Mariana Trench",
      "Tonga Trench"
    ],
    "correctIndex": 2
  },
  {
    "question": "This city in the United States claims to house the largest ball of twine which was built by millionaire J. C. Payne.",
    "options": [
      "Branson, MO",
      "Lake Nebagamon, WI",
      "Darwin, MN",
      "Cawker City, KS"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the longest running primetime television show in the period 1950-2009?",
    "options": [
      "Monday Night Football",
      "The Simpsons",
      "Hallmark Hall of Fame",
      "60 Minutes"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the fastest ocean animal?",
    "options": [
      "Swordfish",
      "Sailfish",
      "Marlin",
      "Wahoo"
    ],
    "correctIndex": 1
  },
  {
    "question": "This person, who died in 1997, was verified by Guiness World Records as the shortest man on earth?",
    "options": [
      "Younis Edwan",
      "He Pingping",
      "Gul Mohammed",
      "Lin Yu-chih"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to the August 2008 issue of Travel  Leisure, what is the scariest road in the world?",
    "options": [
      "Karakoram Hwy., Pakistan to China",
      "Guoliang Tunnel Road, China",
      "N. Yungas Road, Bolivia",
      "Halsena Hwy., Luzon, Philippines"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does quinunc mean?",
    "options": [
      "A necessary thing",
      "A five-cornered star",
      "A prime example",
      "A busybody"
    ],
    "correctIndex": 3
  },
  {
    "question": "Traditionally the people of the country of Georgia believe that they are descendants of this Biblical personality.",
    "options": [
      "Jonah",
      "Japheth",
      "Jesus",
      "Jeremiah"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Barbary Wars were  fought between the USA and pirates from this part of the world.",
    "options": [
      "The Gulf of Mexico",
      "Somalia and its coast",
      "The Persian Gulf",
      "The Mediterranean Coast of Africa"
    ],
    "correctIndex": 3
  },
  {
    "question": "Under  which US President were the Barbary Wars fought?",
    "options": [
      "James K. Polk",
      "Thomas Jefferson",
      "William McKinley",
      "Teddy Roosevelt"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which two countries are connected  by the Simplon Pass?",
    "options": [
      "Switzerland and Italy",
      "Northern Ireland and Ireland",
      "Canada and The USA",
      "Bulgaria and Romania"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does a la crecy  mean?",
    "options": [
      "Served with butter",
      "Served with sauce",
      "Served with carrots",
      "Served with cheese"
    ],
    "correctIndex": 2
  },
  {
    "question": "On his third voyage to the Western hemisphere, Columbus wrote that he found where the Garden of Eden was. What do we now call the area which Columbus felt was the Garden of Eden ?",
    "options": [
      "Costa Rica",
      "Nassau",
      "Venezuela",
      "Haiti"
    ],
    "correctIndex": 2
  },
  {
    "question": "The exchange of letters between these two people was published in 1933 under the title Why War?.",
    "options": [
      "Hitler and Mussolini",
      "Einstein and Freud",
      "Stalin and Lenin",
      "Franklin and Eleanor Roosevelt"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the approximate distance between the Moon and the Earth?",
    "options": [
      "384,000 miles",
      "93,000,000 miles",
      "384,000 kilometers",
      "384,000 meters"
    ],
    "correctIndex": 2
  },
  {
    "question": "In terms of A.U. (Astronomical Units), how far is the Sun from the Earth?",
    "options": [
      ".92",
      "93 million",
      "1",
      "93"
    ],
    "correctIndex": 2
  },
  {
    "question": "The S.O.S. on SOS cleaning pads stands for Save Our Saucepans.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The first bridge in what would become the USA was built in this state.",
    "options": [
      "New Jersey",
      "Massachusetts",
      "Pennsylvania",
      "Virginia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first female Attorney General of the United States?",
    "options": [
      "Janet Reno",
      "Joanne Pierce",
      "Susan Roley",
      "Clarisa Starling"
    ],
    "correctIndex": 0
  },
  {
    "question": "Clark Gable was in the Army  Air Corps during World War II. Who signed his discharge  papers?",
    "options": [
      "Hap Arnold",
      "John Marshall",
      "Ronald Reagan",
      "George Patton"
    ],
    "correctIndex": 2
  },
  {
    "question": "During World War II, Paul Newman applied to become a fighter  pilot. Why was he rejected?",
    "options": [
      "He did not pass the written test.",
      "He was color blind.",
      "He had an inner ear problem that affected his sense of balance.",
      "He was too short."
    ],
    "correctIndex": 1
  },
  {
    "question": "How big is a firkin?",
    "options": [
      "9 pounds",
      "9 square miles",
      "9 gallons",
      "9 yards"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which statement is true about Mrs. P.F.E. Albee?",
    "options": [
      "She was the first Mary Kay salesperson.",
      "She was the first woman to practice law in the USA.",
      "She was the first Avon lady.",
      "She was the first woman to legally vote in a US Presidential election."
    ],
    "correctIndex": 2
  },
  {
    "question": "Where were the first windmills built?",
    "options": [
      "Peru",
      "Laos",
      "Tunisia",
      "Iran"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 64 AD there were terrible fires in Rome. Which Roman Emperor was busy playing his fiddle while the fires were burning?",
    "options": [
      "Caligula",
      "Nero",
      "None of the Emperors",
      "Vespasian"
    ],
    "correctIndex": 2
  },
  {
    "question": "She  was the first woman to wear high-heeled shoes.",
    "options": [
      "Cleopatra",
      "Joan of Arc",
      "Catherine DeMedici",
      "Queen Elizabeth I"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first Tzar of Russia?",
    "options": [
      "Nicolai Terravinasonoff",
      "Ivan the Terrible",
      "Boris Godenoff",
      "Michael Romanoff"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the first credit card?",
    "options": [
      "Kresges Green Card",
      "Diners Club",
      "Carte Blanc",
      "American Express"
    ],
    "correctIndex": 1
  },
  {
    "question": "She was Johnny Carsons first guest on The Tonight Show with Johnny Carson.",
    "options": [
      "Bette Midler",
      "Joan Rivers",
      "Judy Garland",
      "Joan Crawford"
    ],
    "correctIndex": 3
  },
  {
    "question": "When was the Earths second highest mountain, K2, first climbed?",
    "options": [
      "July 29, 1934",
      "July 29, 1894",
      "July 29, 1944",
      "July 29, 1954"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which statement about fast food restaurants in the USA is not  true?",
    "options": [
      "The first Burger King was opened in Miami.",
      "The first Wendys was opened in Columbus, Ohio.",
      "The first KFC was opened in Salt Lake City.",
      "The first Ben and Jerrys was opened on the campus of Dartmouth University."
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was given the first numbered patent in the USA?",
    "options": [
      "Henry Clinton",
      "Samuel Hopkins",
      "Ben Franklin",
      "Paul Revere"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first person to parachute?",
    "options": [
      "Leonardo Da Vinci",
      "Andres-Jacques Garnerin",
      "Lino LaCedelli",
      "David Gaithier"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which distinction does Annie Moore hold?",
    "options": [
      "She was the first American woman to win a Nobel Prize.",
      "She was the first immigrant  to the USA to pass through Ellis Island.",
      "She was the first American woman to be a dentist.",
      "She was the first American woman to graduate from college."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which was the first womens college in the USA?",
    "options": [
      "Radcliffe",
      "Mt. Holyoke",
      "Douglas",
      "Bryn Mawr"
    ],
    "correctIndex": 1
  },
  {
    "question": "What distinction does Sir Timothy Berners-Lee hold?",
    "options": [
      "He was the first RAF pilot to shoot down a plane.",
      "He is the inventor of the World Wide Web.",
      "He made  the first cell phone call.",
      "He was the first non-American to hold a US patent."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which was the first TV sitcom?",
    "options": [
      "The Goldbergs",
      "Mary Kay and Johnny",
      "I Love Lucy",
      "The Dobkins"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following actors did not appear in the 1996 film Trees Lounge?",
    "options": [
      "Steve Buscemi",
      "Mark Ruffalo",
      "Rockets Redglare",
      "Elizabeth Bracco"
    ],
    "correctIndex": 1
  },
  {
    "question": "Complete the title to this 1989 Wayne Wang comedy:  Life is Cheap...",
    "options": [
      "... Dont Spend It All in One Place.",
      "... Tivo the Good Parts.",
      "... And There Are No Refunds!",
      "... But Toilet Paper is Expensive."
    ],
    "correctIndex": 3
  },
  {
    "question": "This 1980 film by French director Alan Resnais features Gerard Depardieu in a starring role.  The translation of the title in English is loosely:  My Uncle is....",
    "options": [
      "... My Uncle.",
      "... An American.",
      "... Most Avuncular.",
      "... Living Upstairs from Me."
    ],
    "correctIndex": 1
  },
  {
    "question": "Complete the title of this 1993 comedy, directed by Eric Schaffer:  My Lifes...",
    "options": [
      "... in a Mess.",
      "... in Arrears.",
      "...in Couplets.",
      "... in Turnaround."
    ],
    "correctIndex": 3
  },
  {
    "question": "In what city was the popular TV series EastEnders set?",
    "options": [
      "San Francisco",
      "Los Angeles",
      "London",
      "New York"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which use of  the term Wild West is incorrect?",
    "options": [
      "Wild West is the title of several Western movies",
      "Wild West is a Nintendo game",
      "Wild West was a common name for territories west of the Rio Grande river",
      "Wild West is an album of Dottie West"
    ],
    "correctIndex": 2
  },
  {
    "question": "During the Cold War, which city was the capital of West Germany?",
    "options": [
      "Bonn",
      "Munich",
      "West Berlin",
      "Frankfurt"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which is a major US airline and a subsidiary of Delta Air Lines?",
    "options": [
      "Northeast Airlines",
      "Northwest Airlines",
      "Southwest Airlines",
      "Southeast Airlines"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which part of the world is commonly described as Far East?",
    "options": [
      "All Asia",
      "East and Southeast Asia",
      "Oceania",
      "East Siberia"
    ],
    "correctIndex": 1
  },
  {
    "question": "The plot of the famous Brodway musical West Side Story is based on which source?",
    "options": [
      "The musical is a classical western",
      "The Bible",
      "A true story of two Los Angeles teenage gangs",
      "Shakespears Romeo and Juliet"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is an existing country, recognized by United Nations?",
    "options": [
      "East Cyprus",
      "West African Republic",
      "East Timor",
      "West Virginia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who is the author of the novel East of Eden?",
    "options": [
      "Steven Spielberg",
      "Elia Kazan",
      "John Steinbeck",
      "Eugene ONeill"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where is Western University located?",
    "options": [
      "Gunninson, Colorado",
      "Washington, DC",
      "Holland, Michigan",
      "Baku, Azerbaijan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which cities were the original endpoints of the Orient Express railway?",
    "options": [
      "Moscow and Vladivostok",
      "Chicago and Los Angeles",
      "Paris and Istanbul",
      "Tokyo and Kyoto"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the summer of 2006, environmental consultant Mark Diacono planted the first olive grove in England. He claimed that olives can already grow in England for what reason?",
    "options": [
      "Global warming",
      "Acid rain increase",
      "The extension of the European Union",
      "Acid rain decrease"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these is among the Top Ten Inventions of 2005 according to the US Army?",
    "options": [
      "Fido Explosives Detector",
      "Achilles Anti-Aircraft Missile",
      "The G.A.D.G.E.T. Deployable armored personnel vehicle",
      "The R.E.X. anti-spyware computer software"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the music fields Frenchman Francois Tourte is famous for what?",
    "options": [
      "He invented the saxophone in collaboration with Adolphe Sax.",
      "He standardized the size of the violin bow.",
      "He won the first Gorbachov International Music Award",
      "He was one of the first prominent saxophonists of the 19th century."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which US city is nicknamed The Venice of  America?",
    "options": [
      "Fort Lauderdale, Florida",
      "Punta Gorda, Florida",
      "Key West, Florida",
      "Biloxi, Mississippi"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which one of these sciences is the TOE theory studied?",
    "options": [
      "Paleontology",
      "Philosophy",
      "Physics",
      "Biophysics"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which word refers to self-discipline and refraining from worldly pleasures?",
    "options": [
      "Asceticism",
      "Aneurysm",
      "Ableism",
      "Atavism"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which part of the Earth is made up of iron mixed with nickel?",
    "options": [
      "The asthenosphere",
      "The outer core",
      "The inner core",
      "The mantle"
    ],
    "correctIndex": 1
  },
  {
    "question": "This invention that forever altered the development of the American West was patented in 1874 by American farmer Joseph Glidden.",
    "options": [
      "The scanning disk for future TV sets",
      "The toothbrush",
      "Barbed wire",
      "Reinforced concrete"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Hall-H\u00c3\u00a9roult chemical process is used for the production of what?",
    "options": [
      "Zirconium",
      "Aluminum",
      "Titanium",
      "Methane"
    ],
    "correctIndex": 1
  },
  {
    "question": "If the world were a village of 100 people, how many would be female?",
    "options": [
      "60",
      "40",
      "52",
      "46"
    ],
    "correctIndex": 2
  },
  {
    "question": "If the world were a village of 100 people, how many would be white?",
    "options": [
      "18",
      "37",
      "32",
      "25"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 100 people, how many would have a college education?",
    "options": [
      "1",
      "5",
      "14",
      "20"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 100 people, how many would own a computer?",
    "options": [
      "1",
      "5",
      "15",
      "11"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 100 people, how many would be homosexual?",
    "options": [
      "1",
      "31",
      "21",
      "11"
    ],
    "correctIndex": 3
  },
  {
    "question": "If the world were a village of 100 people, how many would be illiterate?",
    "options": [
      "70",
      "50",
      "40",
      "60"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 100 people, how many would suffer from malnutrition?",
    "options": [
      "50",
      "30",
      "20",
      "40"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 100 people, how many would live in substandard housing?",
    "options": [
      "80",
      "20",
      "40",
      "60"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 100 people, how many people would possess 59% of the worlds wealth?",
    "options": [
      "20",
      "2",
      "60",
      "6"
    ],
    "correctIndex": 3
  },
  {
    "question": "If the world were a village of 100 people, how many would be of other religious beliefs besides Christianity?",
    "options": [
      "50",
      "60",
      "70",
      "80"
    ],
    "correctIndex": 2
  },
  {
    "question": "If the world were a village of 100 people, how many would be from the Eastern Hemisphere?",
    "options": [
      "72",
      "86",
      "45",
      "63"
    ],
    "correctIndex": 1
  },
  {
    "question": "What phobia is defined as fear of darkness?",
    "options": [
      "Acousticophobia",
      "Agliophobia",
      "Agraphobia",
      "Achluophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What word means fear of heights?",
    "options": [
      "Batophobia",
      "Bibliophobia",
      "Botanophobia",
      "Bathophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "What phobia is defined as fear of thunder?",
    "options": [
      "Coimetrophobia",
      "Chronomentrophobia",
      "Ceraunophobia",
      "Claustrophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What term means fear of accidents?",
    "options": [
      "Dystychiphobia",
      "Dentophobia",
      "Dikephobia",
      "Dendrophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "What phobia is characterized by fear of pins?",
    "options": [
      "Entomophobia",
      "Ephebiphobia",
      "Enetophobia",
      "Emetophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What word means fear of killers?",
    "options": [
      "Feretrophobia",
      "Foniasophobia",
      "Febriphobia",
      "Frigophobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What phobia is described as fear of marriage?",
    "options": [
      "Gynophobia",
      "Gephysrophobia",
      "Gamophobia",
      "Gerascophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What condition is characterized by fear of men?",
    "options": [
      "Hominophobia",
      "Hormephobia",
      "Homichlophobia",
      "Hodophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "What term means fear of fish?",
    "options": [
      "Iatrophobia",
      "Ideophobia",
      "Ichthyophobia",
      "Iophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the basic chemical compound that table salt is composed of?",
    "options": [
      "Sodium chloride",
      "Sodium bicarbonate",
      "Calcium carbonate",
      "Potassium iodide"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is Fleur de sel?",
    "options": [
      "Natural sea salt",
      "A species of seaweed that live only in sea water with very high salinity",
      "A plant that contains the highest amount of sodium chloride of all plants",
      "A type of salty French biscuits"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these chemical compounds is added to table salt as an anti-caking agent?",
    "options": [
      "Calcium carbonate",
      "All of these",
      "Magnesium carbonate",
      "Tricalcium phosphate"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these condiments has a high salt content and can pretty much fulfill the need for table salt?",
    "options": [
      "Fish sauce",
      "Soy sauce",
      "All of these",
      "Oyster sauce"
    ],
    "correctIndex": 2
  },
  {
    "question": "What chemical is added to table salt in some European countries to prevent tooth decay?",
    "options": [
      "Calcium sulfate",
      "Sodium fluoride",
      "Potassium carbonate",
      "Sodium nitrate"
    ],
    "correctIndex": 1
  },
  {
    "question": "Potassium iodide, sodium iodide, or sodium iodate are added to table salt in order to prevent iodine deficiency. What health problems does iodine deficiency cause?",
    "options": [
      "Skin and bone disorders",
      "Adrenal gland malfunction",
      "Thyroid gland disorders",
      "Cardiovascular problems"
    ],
    "correctIndex": 2
  },
  {
    "question": "Excessive salt consumption can lead to high blood pressure.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the daily salt intake recommended by the Scientific Advisory Committee on Nutrition for the United Kingdom?",
    "options": [
      "4 grams",
      "6 grams",
      "1 gram",
      "2.5 grams"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these medical conditions is linked to excessive salt consumption?",
    "options": [
      "Duodenal ulcers and gastric ulcers",
      "Edema",
      "Osteoporosis",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "There are two main sources of salt - sea water and rock salt.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What astronaut or cosmonaut performed the first space walk on March 18, 1965?",
    "options": [
      "Glenn",
      "Aldrin",
      "Shepherd",
      "Leonov"
    ],
    "correctIndex": 3
  },
  {
    "question": "Some of the most persecuted people in history, they trace their origins to northwestern India or present day Pakistan. The Nazis killed as many as 400,000 of them.  By the 1400s they had spread across Asia Minor and into Egypt, Spain and Germany.  Who are they?",
    "options": [
      "The Sabines",
      "The Creatans",
      "The Slavs",
      "The Roma"
    ],
    "correctIndex": 3
  },
  {
    "question": "The term bibliobibuli refers to people who do what?",
    "options": [
      "Read too much",
      "Use only recycled paper",
      "Use a lot of toilet paper",
      "Do not recycle paper"
    ],
    "correctIndex": 0
  },
  {
    "question": "This American professional basketball player, nicknamed The Pearl, was known for his flamboyant dribbling and play-making.",
    "options": [
      "Tiny Archibald",
      "Earl Monroe",
      "Sam Jones",
      "Paul Silas"
    ],
    "correctIndex": 1
  },
  {
    "question": "In his twelve-volume analysis, this British historian wrote that history was not a continuous climb upward, but a series of  waves or pulses, where civilizations rise, prosper and eventually fall.",
    "options": [
      "Charles Beard",
      "Howard Zinn",
      "Arnold J. Toynbee",
      "Frederick J. Turner"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Harvard dropouts first acting role was in Mystic Pizza, in 1988.  He lived next door to historian, Howard Zinn.",
    "options": [
      "Matt Damon",
      "Mark Ruffalo",
      "Ed Norton",
      "Ed Burns"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1836, German-Dutch farmers in South Africa moved north east through South Africa to establish a colony.  What did they call this march?",
    "options": [
      "The March of the 14,000",
      "The Dutch-Zulu War",
      "The Boer War",
      "The Great Trek"
    ],
    "correctIndex": 3
  },
  {
    "question": "Cardinal Richelieu, the bad guy in many of the works of Dumas, was a brilliant minister for which king?",
    "options": [
      "Louis XIII",
      "Louis XVI",
      "Louis XV",
      "Louis XIV"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which countrys blue division helped Germany on the Eastern front during WWII?",
    "options": [
      "Turkey",
      "Italy",
      "Spain",
      "Japan"
    ],
    "correctIndex": 2
  },
  {
    "question": "Every summer, a special basketball tournament is held in Harlem, NY.  What is the original name of the tournament?",
    "options": [
      "The Harlem Five on Five",
      "The Rucker Tournament",
      "The Entertainers Basketball Classic",
      "The Holcombe Tournament"
    ],
    "correctIndex": 1
  },
  {
    "question": "This 2002 television series followed the lives of 3 families over 4 generations. The Keys, the Crawfords, and the Clarkes were all somehow linked with various alien encounters over the years and the culmination of all this was the birth of Allison Clarke played by Dakota Fanning.",
    "options": [
      "War of The Worlds",
      "Taken",
      "Heroes",
      "V"
    ],
    "correctIndex": 1
  },
  {
    "question": "Can you name the 2004 television series the following quote is from: Me and 4,399 of my closest friends popped out of a ball of light right about here.",
    "options": [
      "Taken",
      "Threshold",
      "V",
      "The 4400"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to articles published in the Journal of American Folklore and the Journal of UFO Studies, abductions generally follow a specific sequence, although most dont involve all of these elements. The sequence is as follows: Capture, Examination, Conference, Tour, Loss of Time, Return, Theophany and Aftermath.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This 1975 television movie, starring James Earl Jones and Estelle Parsons, was based on the supposed abduction in 1961 of an inter racial couple living in New Hampshire.",
    "options": [
      "The UFO Incident",
      "Alien Autopsy",
      "X-Files",
      "Abducted"
    ],
    "correctIndex": 0
  },
  {
    "question": "What are the names of George Costanzas parents on the TV show Seinfeld?",
    "options": [
      "Frank and Estelle",
      "Fred and Jean",
      "Gene and Estelle",
      "Fred and Harriet"
    ],
    "correctIndex": 0
  },
  {
    "question": "The actor who voiced Betty Boop also voiced Popeye.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to geologists, in which era do we live?",
    "options": [
      "Mesozoic",
      "Cenozoic",
      "Simpsonian",
      "Quaternary"
    ],
    "correctIndex": 1
  },
  {
    "question": "This  very successful rock group appeared in an episode of Will and Grace.",
    "options": [
      "Genesis",
      "Bon Jovi",
      "Hall and Oates",
      "The Bangles"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who sang on the first million selling record?",
    "options": [
      "Thomas Alva Edison",
      "Louis Armstrong",
      "Frank Sinatra",
      "Enrico Caruso"
    ],
    "correctIndex": 3
  },
  {
    "question": "When was the Euro currency first launched?",
    "options": [
      "January 1990",
      "January 1985",
      "January 1994",
      "January 1999"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where in the USA can you walk on a telescope?",
    "options": [
      "New York City",
      "Pasadena, California",
      "Guam",
      "Puerto Rico"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is a fluid?",
    "options": [
      "A gas",
      "A gas or a liquid",
      "A liquid",
      "Anything that can produce energy"
    ],
    "correctIndex": 1
  },
  {
    "question": "What do these places have in common: Wake Island, Johnston Atoll, Kingman Reef, Midway Island, Navassa, Baker Island and Jarvis Island?",
    "options": [
      "They are a part of Nirvaau.",
      "They are uninhabited US possessions.",
      "They are UN controlled islands in the Atlantic.",
      "They are sites of famous WWII battles."
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the state motto of North Carolina?",
    "options": [
      "To be rather than to seem",
      "Thus always to tyrants",
      "While I breathe, I hope",
      "By Valor and Arms"
    ],
    "correctIndex": 0
  },
  {
    "question": "Rhode Island, the smallest US State, also has the shortest state motto. What is this one-word motto?",
    "options": [
      "Union",
      "Freedom",
      "Courage",
      "Hope"
    ],
    "correctIndex": 3
  },
  {
    "question": "To which of these countries are the Sami people not indigenous?",
    "options": [
      "Denmark",
      "Finland",
      "Russia",
      "Sweden"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many people die in the final scene of Shakespeares Hamlet?",
    "options": [
      "5",
      "0",
      "6",
      "4"
    ],
    "correctIndex": 3
  },
  {
    "question": "Joe Barry Carroll was drafted by the Golden Gate Warriors in 1980. He was the first choice in that draft. Who did they give up to get him?",
    "options": [
      "Dennis Rodman and John Paxson",
      "Robert Parrish and Kevin McHale",
      "Charles Barkley and Tim McCormick",
      "Michael Jordan"
    ],
    "correctIndex": 1
  },
  {
    "question": "Johnny Storm, a member of the Fantastic Four, goes by what moniker?",
    "options": [
      "Lava Man",
      "The Human Torch",
      "Sparky",
      "Flash"
    ],
    "correctIndex": 1
  },
  {
    "question": "Pamela Lillian Isley is Poisin Ivy.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Matt Murdock, Daredevils alter ego, is deaf.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Steve Rogers is the alter ego of this character.",
    "options": [
      "Cpt America",
      "Cpt Marvel",
      "Spiderman",
      "Superman"
    ],
    "correctIndex": 0
  },
  {
    "question": "Nick Fury is the alter ego of Wolfsbane.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Oliver Queen, who is married to Black Canary, is one of the finest archers ever. Who is his alter ego?",
    "options": [
      "Green Arrow",
      "The Archer",
      "Green Lantern",
      "Archer Man"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sound travels one mile in five seconds in the air, and one mile in how many seconds under water?",
    "options": [
      "ten seconds",
      "five seconds",
      "one second",
      "fifteen seconds"
    ],
    "correctIndex": 2
  },
  {
    "question": "The names of Popeyes four nephews are Pipeye, Peepeye, Pupeye, and Poopeye.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is Barbies full name?",
    "options": [
      "Barbie Mary Doe",
      "Barbara Millicent Roberts",
      "Barbie Madonna Smith",
      "Barbara Monroe Jones"
    ],
    "correctIndex": 1
  },
  {
    "question": "The term Ouija, referring to a talking board, is derived from what?",
    "options": [
      "A board created by Nazis for Hitler meaning Holy Grail",
      "The French oui for yes, and the German ja for yes",
      "An Ancient Egyptian word meaning good luck",
      "Ancient Hebrew meaning spirit talker"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Dibbuk Box, which presumably contained a spirit, was what type of box?",
    "options": [
      "Jewelery Box",
      "Christmas Gift Box",
      "Shoe Box",
      "Wine Cabinet Box"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the most volcanically active body in the Solar System?",
    "options": [
      "Jupiter",
      "Jupiters Moon Io",
      "Earth",
      "Jupiters Moon Europa"
    ],
    "correctIndex": 1
  },
  {
    "question": "A Venus day, the time it takes Venus to rotate once, is approximately how long?",
    "options": [
      "20 Earth hours",
      "10 Earth hours",
      "106 Earth days",
      "243 Earth days"
    ],
    "correctIndex": 3
  },
  {
    "question": "The word berserk referring to Norse warriors, means what in Old Norse?",
    "options": [
      "Warriors Wrath",
      "Warriors Rage",
      "Beer Shirt",
      "Bear Shirt"
    ],
    "correctIndex": 3
  },
  {
    "question": "On average, how much water is used in the USA each day?",
    "options": [
      "About 100 Billion Gallons",
      "About 200 Million Gallons",
      "About 900 Million Gallons",
      "About 340 Billion Gallons"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1871 what major Midwest city burned down in a fire that was deemed one of the largest disasters in the United States?",
    "options": [
      "Cleveland",
      "Chicago",
      "Detroit",
      "St. Louis"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year did the Great Fire of London occur?",
    "options": [
      "1866",
      "1566",
      "1766",
      "1666"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Los Angeles Earthquake of 1916 caused a 3-day fire.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "A fire killed over 1600 people in 1845 in what Chinese city?",
    "options": [
      "Hong Kong",
      "Guangzhou (Canton)",
      "Beijing",
      "Shanghai"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Peshtigo Fire (in Wisconsin and Michigan) occurred on the same day as the Great Chicago Fire.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Oklahoma city saw a race riot that triggered a fire in 1921?",
    "options": [
      "Enid",
      "Ada",
      "Oklahoma City",
      "Tulsa"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Don Paz passenger ferry was on its way to what island in 1987 when it collided with an oil tanker?",
    "options": [
      "Thailand",
      "Jamaica",
      "Singapore",
      "Philippines"
    ],
    "correctIndex": 3
  },
  {
    "question": "There was a fire in South Dakota that destroyed over 90,000 acres.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What U.S. National Park saw a large and very destructive fire in 1988?",
    "options": [
      "Death Valley",
      "Sequoia",
      "Yellowstone",
      "Yosemite"
    ],
    "correctIndex": 2
  },
  {
    "question": "General Slocum was the name of a person involved in the 1904 fire in New York that resulted in over 1000 deaths.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "From which book is this quote: When Gregor Samsa awoke he was transformed into an incredibly large, disgusting vermin.?",
    "options": [
      "Kerouacs On the Road",
      "Kafkas The Metamorphosis",
      "Dostoevsky s Crime and Punishment",
      "Goethes Faustus"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where  would  you  find The Book of Kells?",
    "options": [
      "Glasgow, Scotland",
      "Edinburgh, Scotland",
      "Next to the Book of Durrow",
      "Next to the Blarney Stone"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which plane is the first  jet fighter?",
    "options": [
      "Messerschmidt  M29",
      "Heinkel He 280",
      "F-117A",
      "MiG 12"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which famous novel begins with the sentence: Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show.?",
    "options": [
      "Great Expectations",
      "David Copperfield",
      "The Last of the Mohicans",
      "The Old Man and the Sea"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first person to  use the term atomic bomb?",
    "options": [
      "H.G. Wells",
      "Robert Oppenheimer",
      "Lise Meitner",
      "Enrico Fermi"
    ],
    "correctIndex": 0
  },
  {
    "question": "Canada  is made up of 10 Provinces. How many of them do not border the USA?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which statement is correct?",
    "options": [
      "Graceland, Elvis Presleys home, is the most visited home in the USA.",
      "In Latin Io sperrio discum means While I breathe, I learn.",
      "The Italian government added the expression orbium phonographicorum theca as the  definition for the new Latin word discotheque.",
      "Disko Island is located off the west coast of Greenland."
    ],
    "correctIndex": 3
  },
  {
    "question": "What does a vexillogist study and/or collect  ?",
    "options": [
      "Stamps",
      "Flags",
      "Bones",
      "Letters"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Predator is a type of US Air Force plane. How many people can ride in it ?",
    "options": [
      "3",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first female professor at Princeton University?",
    "options": [
      "Rosalind Yalow",
      "Susan Sontag",
      "Mary Robertson",
      "Hannah Arendt"
    ],
    "correctIndex": 3
  },
  {
    "question": "We all know that when arrested you must be Mirandized. Of what crime or crimes was Mr. Miranda accused?",
    "options": [
      "Murder",
      "Murder and rape",
      "Grand theft",
      "Rape and kidnapping"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these words means biting, sarcastic, acid-mouthed?",
    "options": [
      "Mordant",
      "Chthonic",
      "Quotidian",
      "Puerile"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these weapons is a US Marine infantry  weapon, scheduled for widespread use in starting 2008?",
    "options": [
      "Stryker",
      "M-17A2 rifle",
      "SMAW-NE",
      "Javelin"
    ],
    "correctIndex": 2
  },
  {
    "question": "What do historians call the period of 1730-1759 in American history?",
    "options": [
      "The Primitive Era",
      "The Puritan Era",
      "The Great Awakening",
      "The Era of Good Feelings"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which statement is untrue about the Human Papiloma Virus(HPV)?",
    "options": [
      "The HPV is an STD.",
      "The HPV can cause cancer of the penis.",
      "There is no complete cure for disease caused by the HPV.",
      "About 75% of the strains of the HPV cause cervical cancer."
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1964 Francis Cardinal Spellman banned all Catholic children in the New York Archdiocese from doing this.",
    "options": [
      "Watching too much TV",
      "Watching Elvis Presley",
      "Listening to transistor radios in school",
      "Doing the Twist"
    ],
    "correctIndex": 3
  },
  {
    "question": "Narcissistic is a word that applies to someone who has a pervasive pattern of cruel, demeaning, and aggressive behavior, beginning in early adulthood.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "If a red house is made out of red bricks, a black house is made out of black bricks, and a white house is made out of white bricks, what is a greenhouse made out of?",
    "options": [
      "green bricks",
      "leaves",
      "none of the above",
      "glass"
    ],
    "correctIndex": 3
  },
  {
    "question": "On March 19 2008 President Bushs approval rates  were 31% and 69%. What were his chances of winning the 2008 presidential race?",
    "options": [
      "31%",
      "50%",
      "0%",
      "69%"
    ],
    "correctIndex": 2
  },
  {
    "question": "A man walks up to you and says Everything I say is a lie. Is he telling the truth or lying?",
    "options": [
      "He is lying.",
      "none of these",
      "He is telling the truth.",
      "not enough information"
    ],
    "correctIndex": 0
  },
  {
    "question": "A woman has 7 children. Half of them are boys. Can this be true?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "A farmer and his son are working together. The farmer is carrying one sack of grain and the son is carrying two sacks. Who was carrying the heavier load- the son or the father?",
    "options": [
      "the son",
      "They werent carrying anything.",
      "the same amount",
      "the father"
    ],
    "correctIndex": 3
  },
  {
    "question": "Four can be half of five.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "A man shoots his wife. Then he holds her underwater for 5-10 minutes. Then he hangs her. 30 minutes later they go out to dinner at a 5-star restaurant. How is this possible?",
    "options": [
      "He is a photographer",
      "none of these",
      "He brings her back to life.",
      "He remarries."
    ],
    "correctIndex": 0
  },
  {
    "question": "WETYIAFHKLXVNM",
    "options": [
      "bottom",
      "top",
      "neither",
      "none"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who portrayed Adam Schiff, the Manhattan District Attorney in Law and Order?",
    "options": [
      "Fred Dalton Thompson",
      "Steven Hill",
      "Dann Florek",
      "Steve Zirnkilton"
    ],
    "correctIndex": 1
  },
  {
    "question": "He was the young, honest lawyer who won the case in the movie and novel The Rainmaker.",
    "options": [
      "Rudy Baylor",
      "Ted Buckland",
      "Billy Flynn",
      "Sydney Carton"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of the sleazy lawyer in the musical and movie Chicago?",
    "options": [
      "Rudy Baylor",
      "Billy Flynn",
      "Pete Drucker",
      "Ted Buckland"
    ],
    "correctIndex": 1
  },
  {
    "question": "Atticus Finch was a great, moral man and a fine lawyer who defended Tom Robinson. In which novel and  movie was he a central character?",
    "options": [
      "To Kill a Mockingbird",
      "The Trial",
      "Witness for the Prosecution",
      "Anatomy of a Murder"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 1992 movie, My Cousin Vinnie, Ralph Macchio asks his cousin Vinnie to be his lawyer. What was  Vinnies last name?",
    "options": [
      "Gambini",
      "Giradelli",
      "Gianfredo",
      "Barcolli"
    ],
    "correctIndex": 0
  },
  {
    "question": "The actor who starred as the lawyer in Matlock started out as a real lawyer.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Rumpole from the fabulous British TV series Rumpole of the Bailey likes his job defending people in court and does not want to be a judge. What is Rumpoles first name?",
    "options": [
      "Horace",
      "Leo",
      "Maurice",
      "Lionel"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the hospital lawyer on Scrubs?",
    "options": [
      "Ted Buckland",
      "Phoenix Wright",
      "Billy Flynn",
      "Lionel Huntz"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the top prosecutor, before Jack McCoy got the first chair in the top cases on Law and Order?",
    "options": [
      "Benjamin Stone",
      "Paul Moriarty",
      "Paul Robinette",
      "Bill Flynn"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of the first Assistant District Attorney on Law and Order?",
    "options": [
      "Benjamin Stone",
      "Paul Robinette",
      "Bill Flynn",
      "Michael Moriarty"
    ],
    "correctIndex": 1
  },
  {
    "question": "Perry Mason won his cases. Week after week this D.A. lost to Perry on the TV show.",
    "options": [
      "Billy Flynn",
      "Richard Brooks",
      "Ted Buckland",
      "Hamilton Burger"
    ],
    "correctIndex": 3
  },
  {
    "question": "This lawyers unspoken last thought is, It is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to, than I have ever known.",
    "options": [
      "Sydney Carton",
      "Bradley J. Stevens",
      "Allen Sneed",
      "Joel McCreadle"
    ],
    "correctIndex": 0
  },
  {
    "question": "He was the luckless lawyer for Cosmo Kramer in Seinfeld.",
    "options": [
      "Jimmy Lee Cofield",
      "Joey Chadwick",
      "Jackie Chiles",
      "Johnny Childress"
    ],
    "correctIndex": 2
  },
  {
    "question": "In Will and Grace, Will was a fine lawyer. What was his last name?",
    "options": [
      "Walker",
      "McFarland",
      "Truman",
      "Adler"
    ],
    "correctIndex": 2
  },
  {
    "question": "This lawyer-turned senator, who has the power of flight without machinery, is a character on Heroes.",
    "options": [
      "Nathan Petrelli",
      "Andy Pasdar",
      "Clark Bennett",
      "Gabriel Gray"
    ],
    "correctIndex": 0
  },
  {
    "question": "From which law school did fictional character Elle Woods graduate?",
    "options": [
      "Stanford",
      "Alabama",
      "Cambridge",
      "Harvard"
    ],
    "correctIndex": 3
  },
  {
    "question": "Goren solves every case, but this is the name of the A.D.A. who convicts the perps on Law and Order: Criminal Intent.",
    "options": [
      "Lionel Hutz",
      "Mike Cuthrie",
      "Billy Flynn",
      "Ron Carver"
    ],
    "correctIndex": 3
  },
  {
    "question": "On this TV show the lawyers shingle reads Attorney-at-Law, Ernest Frye - Where Winning Is Everything.",
    "options": [
      "Arrest and Trial",
      "Amen",
      "The Antagonists",
      "Any Day Now"
    ],
    "correctIndex": 1
  },
  {
    "question": "The vanishing hitchhiker is an urban legend about people who suddenly disappear after they have been offered a lift. What kind of person was the vanishing hitchhiker from 1975 who reportedly scared a number of people by vanishing from their vehicles close to the Austrian-German border?",
    "options": [
      "A nun",
      "A teenager",
      "A beautiful young lady",
      "A farmer"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where does the ghost of Bloody Mary appear when summoned according to a popular urban legend?",
    "options": [
      "In the mirror",
      "On the roof",
      "In the closet",
      "Behind a closed door"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the favorite victim of The Hook according to the popular urban legend?",
    "options": [
      "A drunkard",
      "A young couple",
      "An old woman",
      "A naughty child"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the Choking Doberman from the popular urban legend choking on?",
    "options": [
      "A human ear",
      "Human fingers",
      "A hairball",
      "A dolls head"
    ],
    "correctIndex": 1
  },
  {
    "question": "How is the white woman appearing at the Belchen Tunnel in Switzerland described according to the urban legend?",
    "options": [
      "Headless woman wearing a white dress",
      "Pregnant woman in white clothes",
      "African woman in white dress",
      "Old woman in white clothes"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what type of outfit was Resurrection Mary buried according to the popular urban legend from the region of Chicago, Illinois?",
    "options": [
      "Blood-red satin dress",
      "Black lace gown",
      "Bridal gown",
      "White dancing dress"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who tries to warn the driver of the car about the killer in the back seat according to the popular urban legend?",
    "options": [
      "The signs on the road",
      "A wolf appearing on the road",
      "A driver of the car behind",
      "A voice on the radio"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was written on the girls bathroom mirror according to the popular urban legend about the The Licked Hand?",
    "options": [
      "One down, two to go",
      "Humans can lick too",
      "Dont look under the bed",
      "Come here doggie"
    ],
    "correctIndex": 1
  },
  {
    "question": "With what American city is the urban legend about the Sewer alligator mostly associated with?",
    "options": [
      "San Francisco",
      "New York City",
      "Los Angeles",
      "Chicago"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the mysterious murderer from the urban legend known as The Babysitter and the Man Upstairs?",
    "options": [
      "The father of the children",
      "The babysitters boyfriend",
      "A madman",
      "The neighbor"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where does about 90 % of volcanic activity on Earth occur?",
    "options": [
      "Near the equator",
      "Alaska",
      "Under the oceans",
      "Japan"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where would you find the highest tides on Earth?",
    "options": [
      "Bay of Fundy",
      "Hawaii",
      "Cape of Good Hope",
      "Cape Horn"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who wrote The Murders in the Rue Morgue, the book considered the first detective story?",
    "options": [
      "Charles Lennox",
      "Edgar Allan Poe",
      "Jules Verne",
      "Sir Arthur Conan Doyle"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1987 he became the first football coach to have Gatorade splashed on his head.",
    "options": [
      "Barry Switzer",
      "Bill Cowher",
      "Bud Grant",
      "Bill Parcells"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the original version of Layla by Derek and the Dominoes, the guitar riffs were played by these two men.",
    "options": [
      "Eric Clapton and George Harrison",
      "Eric Clapton and Carl Radle",
      "Eric Clapton and Bobby Whitlock",
      "Eric Clapton and Duane Allman"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where was the  first museum in the USA located?",
    "options": [
      "Charleston, S.C.",
      "Philadelphia, PA.",
      "Boston, MA.",
      "Augusta, Maine"
    ],
    "correctIndex": 0
  },
  {
    "question": "What part of the Earths water is fresh water?",
    "options": [
      "between 13% and 20%",
      "between 5% and 11%",
      "between 20% and 22.4%",
      "less than 5%"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1962 John Steinbeck published Travels with Charley: In Search of America. Who was Charley?",
    "options": [
      "Steinbecks pet poodle",
      "Steinbecks son from his marriage to Edith Wharton",
      "Steinbecks wife, Charlotta Pierce",
      "Steinbecks best friend, Charles Kuralt"
    ],
    "correctIndex": 0
  },
  {
    "question": "Although the first paperback books were published in Germany, it was in England that the paperback book first became very popular. This is considered the first paperback novel.",
    "options": [
      "Robinson Crusoe by Daniel Defoe",
      "A Tale of Two Cities by Charles Dickens",
      "Pelham by Edward Bulwer-Lytton",
      "The Adventures of Tom Thumb by Brigham Wise-Dunne"
    ],
    "correctIndex": 2
  },
  {
    "question": "What discovery did Dr. Caspar Wistar make near his house in Gloucester County, New Jersey in 1787?",
    "options": [
      "The first dinosaur bones ever found in the USA.",
      "A note containing a plot by France to conquer the newly formed USA.",
      "The correct formula for methane gas.",
      "The use of ether to anesthetize dental patients."
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following was not a result of the War of the Roses?",
    "options": [
      "The end of the feudal powers of British nobles",
      "Henry VII took power in England.",
      "The defeat of the Spanish Armada",
      "A strong central government in England"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where was the worlds first modern electrically air-conditioned building located?",
    "options": [
      "San Antonio, Texas",
      "Rome, Italy",
      "New York, New York",
      "Barcelona, Spain"
    ],
    "correctIndex": 0
  },
  {
    "question": "If x is positive, then x^2  x.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does querulous mean?",
    "options": [
      "Always mystical",
      "Always complaining",
      "Always dishonest",
      "Always asking questions"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first US President to have vetoed over 600 pieces of legislation?",
    "options": [
      "Andrew Johnson",
      "Richard M. Nixon",
      "Franklin Delano Roosevelt",
      "Andrew Jackson"
    ],
    "correctIndex": 2
  },
  {
    "question": "He was the first person to portray James Bond in a visual medium, thus eliminating actors who voiced James Bond on radio.",
    "options": [
      "Peter Sellers",
      "David Niven",
      "Woody Allen",
      "Barry Nelson"
    ],
    "correctIndex": 3
  },
  {
    "question": "The worlds oldest lake is also the worlds deepest lake. Where would it be found?",
    "options": [
      "Siberia",
      "Between Europe and Asia",
      "Israel",
      "Brazil"
    ],
    "correctIndex": 0
  },
  {
    "question": "What did H. Taylor Howard invent in 1976?",
    "options": [
      "The QWERTYU keyboard",
      "Windows XP",
      "The cell phone",
      "Satellite dish"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the first meal eaten on the moon?",
    "options": [
      "Tang, rib roast, peas and carrots, and sugar cookies",
      "Milk, eggs with cheese, and blueberries",
      "Bacon, sugar cookies and peaches",
      "Tang, chicken breast, and ice cream"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following Steven Spielberg movies broke box office records at its release becoming the highest-grossing movie at the time?",
    "options": [
      "All of these",
      "Jurassic Park",
      "Jaws",
      "E.T. the Extra-Terrestrial"
    ],
    "correctIndex": 0
  },
  {
    "question": "What American actor portrayed Private First Class James Francis Ryan in Steven Spielbergs 1998 movie masterpiece Saving Private Ryan?",
    "options": [
      "Ben Affleck",
      "Tom Hanks",
      "Matt Damon",
      "Jeremy Davies"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the name of Oprah Winfreys character in the 1985 drama movie The Color Purple directed by Steven Spielberg?",
    "options": [
      "Celie",
      "Sofia",
      "Miss Millie",
      "Nettie"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the color of the little girls coat that catches the eye of Oskar Schindler in Steven Spielbergs 1993 movie Schindlers List?",
    "options": [
      "Green",
      "Red",
      "White",
      "Black and white"
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of shark is the scary man-eating monster in the 1975 horror movie Jaws directed by Steven Spielberg?",
    "options": [
      "Tiger shark",
      "Great white shark",
      "Whale shark",
      "Grey shark"
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of dead life form does E.T. revive in the 1982 science fiction movie E.T. the Extra-Terrestrial directed by Steven Spielberg?",
    "options": [
      "A dead mouse",
      "A cut tomato",
      "A dead fish",
      "A dead flower"
    ],
    "correctIndex": 3
  },
  {
    "question": "What kind of animal is seen in the dumbwaiter in one of the funniest scenes from the 1986 comedy movie The Money Pit, produced by Steven Spielberg?",
    "options": [
      "Rat",
      "Koala",
      "Cat",
      "Raccoon"
    ],
    "correctIndex": 3
  },
  {
    "question": "The breathing sound of what animal was used for the breathing of the horrifying Tyrannosaurus rex in Steven Spielbergs 1993 science fiction thriller Jurassic Park?",
    "options": [
      "Alligator",
      "Rhinoceros",
      "Hippopotamus",
      "Whale"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which President of the United States does Anthony Hopkins portray in Steven Spielbergs historical drama Amistad?",
    "options": [
      "John Adams",
      "John Quincy Adams",
      "Abraham Lincoln",
      "Martin Van Buren"
    ],
    "correctIndex": 1
  },
  {
    "question": "Frank William Abagnale, Jr., whose real story inspired the 2002 Spielberg movie Catch Me If You Can, appeared as what character in the movie?",
    "options": [
      "His characters father",
      "A police officer arresting Frank Abagnale, Jr.",
      "The FBI agent who is after his character",
      "Himself"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the Great Lion who is a central character in C. S. Lewis series of fantasy novels The Chronicles of Narnia?",
    "options": [
      "Saraf",
      "Aslan",
      "Sarabi",
      "Sabor"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what childrens novel, written by L. Frank Baum, did the Cowardly Lion make his first appearance?",
    "options": [
      "Peter Pan in Kensington Gardens",
      "The Lion, The Witch and the Wardrobe",
      "The Wonderful Wizard of Oz",
      "Alice in Wonderland"
    ],
    "correctIndex": 2
  },
  {
    "question": "What song composed by Elton John for the movie The Lion King won the 1994 Academy Award for Best Original Song?",
    "options": [
      "Can You Feel the Love Tonight",
      "Circle of Life",
      "I Just Cant Wait to Be King",
      "Youll Be in My Heart"
    ],
    "correctIndex": 0
  },
  {
    "question": "Leo the Lion is the mascot of what Hollywood film studio, founded in 1924?",
    "options": [
      "MGM",
      "Warner Bros.",
      "Paramount Pictures",
      "Dreamworks"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who wrote the novel Young Lions which was adapted into a movie starring Marlon Brando, Montgomery Clift, and Dean Martin?",
    "options": [
      "Theodore Dreiser",
      "Irwin Shaw",
      "Truman Capote",
      "Norman Mailer"
    ],
    "correctIndex": 1
  },
  {
    "question": "What novel by Russian writer Leo Tolstoy opens with this often quoted line: Happy families are all alike; every unhappy family is unhappy in its own way.?",
    "options": [
      "War and Peace",
      "Doctor Zhivago",
      "Crime and Punishment",
      "Anna Karenina"
    ],
    "correctIndex": 3
  },
  {
    "question": "What King of England was nicknamed the Lionheart because of his reputation as a brave military leader and warrior?",
    "options": [
      "Richard I of England",
      "Richard III of England",
      "William I of England",
      "Henry II of England"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who killed the Nemean Lion, one of the most vicious monsters in Greek mythology?",
    "options": [
      "Zeus",
      "Cronus",
      "Heracles",
      "King Eurystheus"
    ],
    "correctIndex": 2
  },
  {
    "question": "What historical drama, set during Christmas 1183, stars Peter OToole as King Henry II and Katharine Hepburn as Queen Eleanor?",
    "options": [
      "Lion of the Desert",
      "The Young Lions",
      "The Lion in Winter",
      "The Wind and the Lion"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name Simbas daughter who is a central character in the Disney film The Lion King II: Simbas Pride.",
    "options": [
      "Nala",
      "Sarafina",
      "Kiara",
      "Sarabi"
    ],
    "correctIndex": 2
  },
  {
    "question": "A shade of what color is the color called jazzberry jam?",
    "options": [
      "Mint green",
      "Golden brown",
      "Fuchsia",
      "Red-violet"
    ],
    "correctIndex": 3
  },
  {
    "question": "The color called pistachio is a shade of this general color.",
    "options": [
      "Green",
      "Brown",
      "Red",
      "Blue"
    ],
    "correctIndex": 0
  },
  {
    "question": "This color is the national color of the Netherlands. In Canada and the United States it is associated with the field of engineering.",
    "options": [
      "Purple",
      "Black",
      "Blue",
      "Orange"
    ],
    "correctIndex": 3
  },
  {
    "question": "The color byzantium is a shade of this color.",
    "options": [
      "Brown",
      "Green",
      "Purple",
      "Black"
    ],
    "correctIndex": 2
  },
  {
    "question": "A variation of what color is the shade called Harlequin?",
    "options": [
      "Blue",
      "Orange",
      "Red",
      "Green"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these terms is used to describe one of the scenarios concerning the end of the world?",
    "options": [
      "Red goo",
      "Brown goo",
      "Yellow goo",
      "Grey goo"
    ],
    "correctIndex": 3
  },
  {
    "question": "This term, denoting an internal organ, also refers to a color which is a mixture of dark brown and grey?",
    "options": [
      "Liver",
      "Lung",
      "Kidney",
      "Spleen"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these colors has the following connotations: warning, fall, warmth, hope, summer, electricity?",
    "options": [
      "Red",
      "Blue",
      "Yellow",
      "White"
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of color is the color named thistle?",
    "options": [
      "Green",
      "Brown",
      "Purple",
      "Yellow"
    ],
    "correctIndex": 2
  },
  {
    "question": "The color coquelicot is a shade of this basic color.",
    "options": [
      "Blue",
      "Green",
      "Yellow",
      "Red"
    ],
    "correctIndex": 3
  },
  {
    "question": "What actress, nicknamed The Divine Sarah, supposedly slept in a coffin, claiming it helped her understand her tragic roles?",
    "options": [
      "Sarah Brightman",
      "Sarah Bernhardt",
      "Sarah Silverman",
      "Sarah Paulson"
    ],
    "correctIndex": 1
  },
  {
    "question": "This comedienne, writer and actress, nicknamed Big S, is famous for performing her act as a caricature of a Jewish-American princess.",
    "options": [
      "Sarah Jessica Parker",
      "Sarah Michelle Gellar",
      "Sarah Paulson",
      "Sarah Silverman"
    ],
    "correctIndex": 3
  },
  {
    "question": "Sarah Jessica Parkers popular character Carrie Bradshaw writes a weekly column called Sex and the City for this newspaper.",
    "options": [
      "The New York Glamour",
      "The New York Fashionista",
      "The New York Observer",
      "The New York Star"
    ],
    "correctIndex": 3
  },
  {
    "question": "What popular nursery rhyme was written by author and editor Sarah Josepha Hale, who campaigned for making Thanksgiving a national holiday in the US?",
    "options": [
      "Peter Peter Pumpkin Eater",
      "Baa Baa Black Sheep",
      "Twinkle, Twinkle, Little Star",
      "Mary Had a Little Lamb"
    ],
    "correctIndex": 3
  },
  {
    "question": "One of the US First Ladies was named Sarah Childress. Who was she married to?",
    "options": [
      "John Quincy Adams",
      "John Tyler",
      "Zachary Taylor",
      "James K. Polk"
    ],
    "correctIndex": 3
  },
  {
    "question": "What actress, named Sarah, is not correctly matched with the TV show in which she appeared?",
    "options": [
      "Sarah Chalke - Scrubs (Dr. Elliot Reid)",
      "Sarah Paulson - All My Children (Kendall Hart)",
      "Sarah Michelle Gellar - Buffy the Vampire Slayer (Buffy)",
      "Sarah Joy Brown - General Hospital (Carly Corinthos)"
    ],
    "correctIndex": 1
  },
  {
    "question": "Sarah Brightman, who became the first artist to hold #1 spots on the Billboard Classical and Dance charts simultaneously, has what type of singing voice?",
    "options": [
      "Alto",
      "Soprano",
      "Contralto",
      "Mezzo Soprano"
    ],
    "correctIndex": 1
  },
  {
    "question": "What title did Sarah Ferguson assume upon marrying Queen Elizabeth IIs second son, Prince Andrew?",
    "options": [
      "Duchess of Edinburgh",
      "Princess Royal",
      "Duchess of York",
      "Princess of York"
    ],
    "correctIndex": 2
  },
  {
    "question": "Whose wife was Sarah according to the Hebrew Bible and the Quran?",
    "options": [
      "Ishmaels",
      "Noahs",
      "Isaacs",
      "Abrahams"
    ],
    "correctIndex": 3
  },
  {
    "question": "What actress and comedienne won an Emmy Award for her satirical portrayal of Sarah Palin in a guest appearance on SNL?",
    "options": [
      "Sarah Silverman",
      "Ellen DeGeneres",
      "Tina Fey",
      "Amy Poehler"
    ],
    "correctIndex": 2
  },
  {
    "question": "What actor depicted King Xerxes in the 2007 American action movie 300?",
    "options": [
      "Rodrigo Santoro",
      "Dominic West",
      "Gerard Butler",
      "David Wenham"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was written with fingerprints on the wall behind the upside-down abstract painting in the 1995 thriller movie Seven?",
    "options": [
      "Help me",
      "Close!",
      "Greed",
      "Death"
    ],
    "correctIndex": 0
  },
  {
    "question": "What actress portrayed the unforgettable Cruella de Vil in the 1996 Walt Disney movie 101 Dalmatians?",
    "options": [
      "Kathleen Turner",
      "Meryl Streep",
      "Anjelica Huston",
      "Glenn Close"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the nickname of Nicolas Cages character Randal Raines in the 2000 action movie Gone in 60 Seconds?",
    "options": [
      "Casablanca",
      "Memphis",
      "Sway",
      "Twister"
    ],
    "correctIndex": 1
  },
  {
    "question": "What plant symbolized the love between Andie and Benjamin in the 2003 romantic comedy How to Lose a Guy in 10 Days?",
    "options": [
      "Fern",
      "Geranium",
      "Thornapple",
      "Rose"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the function the Fifth Element according to the 1997 science fantasy movie The Fifth Element?",
    "options": [
      "It unites the other four elements into organic life.",
      "It joins space and matter.",
      "It destroys the universe when activated.",
      "It creates a bridge between space and time."
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 1999 movie The 13th Warrior, Wendol appears as this animal to frighten his enemies.",
    "options": [
      "Snake",
      "Bear",
      "Wolf",
      "Lion"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these schemes from the 2004 movie Oceans Twelve requires a trained cat to be carried out?",
    "options": [
      "Bakers Dozen",
      "Crazy Larry",
      "Hell in a Handbasket",
      "Soft Shoulder"
    ],
    "correctIndex": 2
  },
  {
    "question": "The government of this country condemned the 1997 movie Seven Years in Tibet and the director and the starring actors were banned from ever visiting the country.",
    "options": [
      "India",
      "China",
      "North Korea",
      "Vietnam"
    ],
    "correctIndex": 1
  },
  {
    "question": "What nickname did the priest and the cemetery gardener give to Ned, the dog in the 2007 suspense movie The Number 23?",
    "options": [
      "The Nightmare",
      "The Spectral Dog",
      "The Devils Pooch",
      "The Guardian of the Dead"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the British ruler at the time of the American Revolution?",
    "options": [
      "Henry VIII",
      "George I",
      "George III",
      "George II"
    ],
    "correctIndex": 2
  },
  {
    "question": "Queen Elizabeth II of Great Britain is allowed by law to go practically anywhere she wants to in Great Britain.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The term piggy bank derives from the word pygg, an orange type of clay that used to be made into jars in which people kept their money.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who usually is in charge of a US Army infantry company?",
    "options": [
      "A sargent",
      "A one-star general",
      "A colonel",
      "A captain"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the value of the smallest valued coin ever issued by the US Treasury?",
    "options": [
      "one half of a cent",
      "one cent",
      "one eighth of a cent",
      "one quarter of a cent"
    ],
    "correctIndex": 0
  },
  {
    "question": "The show Mad Money aired CNBC cable/satellite TV channel on Monday, March 14, 2005 with what host?",
    "options": [
      "Jim Cramer",
      "Joel Kramer",
      "Jack Aronsohn",
      "Jim Aronsohn"
    ],
    "correctIndex": 0
  },
  {
    "question": "What do the children do with their obese mothers dead body in the 1993 drama movie Whats Eating Gilbert Grape?",
    "options": [
      "Lift it with a helicopter",
      "Desert it",
      "Bury it in the back yard",
      "Burn it along with the house"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who does Ken accidentally kill instead of the witness in the 1988 comedy movie A Fish Called Wanda?",
    "options": [
      "A whale",
      "Wanda",
      "His mother",
      "Three dogs"
    ],
    "correctIndex": 3
  },
  {
    "question": "What popular female singer and actress played Elsa Morganthall Strauss-Almerson in the 1999 movie Tea with Mussolini?",
    "options": [
      "Tina Turner",
      "Barbra Streisand",
      "Cher",
      "Madonna"
    ],
    "correctIndex": 2
  },
  {
    "question": "The 2005 movie Pizza My Heart was loosely based on this play by William Shakespeare.",
    "options": [
      "Twelfth Night",
      "Much Ado About Nothing",
      "Romeo and Juliet",
      "Othello"
    ],
    "correctIndex": 2
  },
  {
    "question": "What kind of movie is the 1988 British film The Fruit Machine, also known as Wonderland in the United States?",
    "options": [
      "Animated movie",
      "A biographical account",
      "Comedy movie",
      "Thriller movie"
    ],
    "correctIndex": 3
  },
  {
    "question": "What Academy Award did the 1962 movie Days of Wine and Roses, directed by Blake Edwards, win in 1963?",
    "options": [
      "Best Actress",
      "Best Art Direction",
      "Best Actor",
      "Best Original Song"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the special prize that will be given to one of the golden ticket holders in the 2005 movie Charlie and the Chocolate Factory?",
    "options": [
      "They will inherit the factory.",
      "A chocolate statue",
      "Eternal life",
      "A life supply of chocolate"
    ],
    "correctIndex": 0
  },
  {
    "question": "What American female singer and actress makes a brief appearance in the 1999 comedy American Pie?",
    "options": [
      "Fergie",
      "Mariah Carey",
      "Christina Milian",
      "Cassie"
    ],
    "correctIndex": 2
  },
  {
    "question": "What legendary actress played Holly Golightly in the 1961 movie Breakfast at Tiffanys?",
    "options": [
      "Grace Kelly",
      "Ginger Rogers",
      "Marilyn Monroe",
      "Audrey Hepburn"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the funny name of Judy Greers character in the 1999 comedy-drama movie Jawbreaker?",
    "options": [
      "Fern Mayo",
      "Germ Apes",
      "Hump Scratchington",
      "Perm Pistachio"
    ],
    "correctIndex": 0
  },
  {
    "question": "Retsina, sometimes referred to as the wine of the Gods, is produced in which country?",
    "options": [
      "Germany",
      "France",
      "Greece",
      "Italy"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Polish food specialties, oscypek and bryndza are what  type of food?",
    "options": [
      "Soups",
      "Salads",
      "Cheeses",
      "Cakes"
    ],
    "correctIndex": 2
  },
  {
    "question": "This French soccer player, who in 2001 was transferred from Italian team, Juventus to Spanish club, Real Madrid, won the 2003 FIFA World Player of the Year Award.",
    "options": [
      "Thierry Henry",
      "Zinedine Zidane",
      "Jean-Pierre Papin",
      "Robert Pires"
    ],
    "correctIndex": 1
  },
  {
    "question": "American artist and filmmaker Andy Warhol, a major figure in the Pop Art movement, is of Slovakian origin.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Does Luxembourg, a small landlocked country situated in the north-west of continental Europe, have three official languages: French, German and Luxembourgish?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "This film style, generally used by film-makers with low budgets, originated in Denmark.",
    "options": [
      "Dogma",
      "Comedy",
      "Surrealism",
      "Film Noir"
    ],
    "correctIndex": 0
  },
  {
    "question": "This bloody battle, a turning point in World War II, was won by the Soviets in 1943.",
    "options": [
      "Battle of Leningrad",
      "Battle of Stalingrad",
      "Battle of Moscow",
      "Battle of Kiev"
    ],
    "correctIndex": 1
  },
  {
    "question": "This modern-day European country, once ruled by Khan Asparuh, was acknowledged by the Byzantine Empire in 681.",
    "options": [
      "Republic of Macedonia",
      "Republic of Bulgaria",
      "Republic of Romania",
      "Czech Republic"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Bigfoot of Florida is known by this name.",
    "options": [
      "Ocala Beast",
      "Skunk Ape",
      "Swamp Beast",
      "Miami Monster"
    ],
    "correctIndex": 1
  },
  {
    "question": "Hairy man-apes seem to be everywhere. Which of these names is not used for them?",
    "options": [
      "Yowie",
      "Yeti",
      "Sasquatch",
      "Hairyman"
    ],
    "correctIndex": 3
  },
  {
    "question": "The film The Legend of Boggy Creek was the tale of this creature.",
    "options": [
      "Abominable Swampman",
      "The Fouke Monster",
      "The Creek Thing",
      "Arkansas Beast"
    ],
    "correctIndex": 1
  },
  {
    "question": "The study of unknown animals is known as Cryptozoology.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "A plaster cast of a reclining Bigfoot was taken in September of 2000. What is the cast called?",
    "options": [
      "The Mud Mark",
      "The Skookum Cast",
      "The Sasquatch Impression",
      "The Greenville Ape Wallow"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1958, this man discovered huge footprints left by a mysterious creature around a construction site.",
    "options": [
      "Tom Slick",
      "Jerry Crew",
      "Red Heart",
      "Bob Gimlin"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Bigfoot Lore, who was Albert Ostman?",
    "options": [
      "The first scientist to declare Bigfoot a hoax",
      "A man who claimed to be kidnapped by a Bigfoot",
      "Owner of the Bigfoot restaurant in Portland, Oregon",
      "The first man to see Bigfoot"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which United States President related a story about a murderous Bigfoot in a Wilderness Magazine?",
    "options": [
      "Harry Truman",
      "U.S. Grant",
      "Billy Carter",
      "Teddy Roosevelt"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these men has not written a book about Bigfoot/Sasquatch?",
    "options": [
      "Grover Kranz",
      "Lawrence Hayden",
      "Jeff Meldrum",
      "Peter Byrne"
    ],
    "correctIndex": 1
  },
  {
    "question": "In December, 1968, the corpse of an alleged Bigfoot, encased in a block of ice was examined by cryptozoologists. What was the name given to the specimen in the ice?",
    "options": [
      "Snow Gnome",
      "The Minnesota Iceman",
      "The caveman",
      "Chilly Will"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 2008s Iron Man, Iron Mans suit is made of iron.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following powers does Hancock, from the self-titled movie, not have?",
    "options": [
      "Super sharp nails",
      "X-Ray vision",
      "None of the Above",
      "Super Strength"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of Spider Mans main nemesis in Spider Man 2?",
    "options": [
      "Venom",
      "The Sandman",
      "Doc Oc",
      "The Goblin"
    ],
    "correctIndex": 2
  },
  {
    "question": "What comic book is The Human Torch from?",
    "options": [
      "X-Men",
      "Fantastic Four",
      "Daredevil",
      "The Incredible Hulk"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the Pixar-created family of superheroes?",
    "options": [
      "The Incredibles",
      "X-Men",
      "The Justice League",
      "Fantastic Four"
    ],
    "correctIndex": 0
  },
  {
    "question": "What superhero does Hugh Jackman play in the X-Men series?",
    "options": [
      "The Wolverine",
      "Professor Charles Xavier",
      "Iceman",
      "Colossus"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which company filed for bankruptcy in May 2009 and was partially bought by the US Government to keep production?",
    "options": [
      "General Electric",
      "General Beton",
      "General Motors",
      "General Paper"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the head of the United Nations called?",
    "options": [
      "General Commissioner",
      "UN General",
      "President General",
      "Secretary General"
    ],
    "correctIndex": 3
  },
  {
    "question": "What navy rank corresponds to the rank of land army General in the US military?",
    "options": [
      "Marshal",
      "Commodore",
      "Admiral",
      "Commander"
    ],
    "correctIndex": 2
  },
  {
    "question": "What sport are the Washington Generals associated with?",
    "options": [
      "American Football",
      "Basketball",
      "Baseball",
      "Soccer"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which company developed the computer game Command  Conquer: Generals?",
    "options": [
      "Electronic Arts",
      "Microsoft",
      "NewGame Software",
      "Nintendo"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the correct plural form of Attorney General?",
    "options": [
      "Attorneys General",
      "Attorney Generals",
      "Attorneyes Generales",
      "Attorneys Generals"
    ],
    "correctIndex": 0
  },
  {
    "question": "General Electric, one of the worlds biggest corporations, is active in many market segments. In which of these areas do they NOT operate?",
    "options": [
      "finance",
      "oil drilling",
      "electricity",
      "jet engines"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the protagonist of John Boormans 1998 movie The General?",
    "options": [
      "Pablo Escobar, a Columbian drug lord",
      "Idi Amin, a dictator of Uganda",
      "Gulbuddin Hekmatyar, a Taliban warlord",
      "Martin Cahill, a criminal from Dublin, Ireland"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these leaders was NOT known as Generalissimo?",
    "options": [
      "Augusto Pinochet",
      "Adolf Hitler",
      "Kim Il-sung",
      "Chiang Kai-shek"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the translation of the term \u00c3\u0089tats g\u00c3\u00a9n\u00c3\u00a9raux which was used to refer to the French Parliament?",
    "options": [
      "Military Generals",
      "General law-makers",
      "General Assembly",
      "States General"
    ],
    "correctIndex": 3
  },
  {
    "question": "What word means fear of animals?",
    "options": [
      "Pyrophobia",
      "Xenophobia",
      "Zoophobia",
      "Tachophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What medical term refers to the fear of horses?",
    "options": [
      "Heliophobia",
      "Iatrophobia",
      "Equinophobia",
      "Dendrophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Ephebiphobia is the fear of youth.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is chemophobia?",
    "options": [
      "fear of chemicals",
      "fear of trees",
      "fear of amphibians",
      "fear of angina or choking"
    ],
    "correctIndex": 0
  },
  {
    "question": "What condition is characterized by fear of strangers?",
    "options": [
      "Dendrophobia",
      "Dystychiphobia",
      "Xenophobia",
      "Claustrophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which term means fear of spiders?",
    "options": [
      "Xanthophobia",
      "Vitricophobia",
      "Zelophobia",
      "Arachnophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What medical term means fear of women?",
    "options": [
      "Dendrophobia",
      "Bibliophobia",
      "Anthrophobia",
      "Gynophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Uranophobia is the fear of heaven.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Does gamophobia mean fear of marriage?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Does sciaphobia mean fear of blood?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which company was the first to introduce the consumer camcorder in 1983?",
    "options": [
      "Panasonic",
      "Sony",
      "JVC",
      "Canon"
    ],
    "correctIndex": 1
  },
  {
    "question": "What professional team did hockey great Wayne Gretzky start his career with?",
    "options": [
      "Los Angeles Kings",
      "Edmonton Oilers",
      "St Louis Blues",
      "New York Rangers"
    ],
    "correctIndex": 1
  },
  {
    "question": "Bob Barker was the original host of the very first version of the TV hit game show The Price is Right.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is a group of bears called?",
    "options": [
      "a family",
      "a tribe",
      "a sleuth",
      "a band"
    ],
    "correctIndex": 2
  },
  {
    "question": "The following group of words (as a whole) makes up a palindrome:",
    "options": [
      "man.  A plan.  A canal.  Panama.",
      "False",
      "True"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which African American invented the traffic light?",
    "options": [
      "Otis Boykin",
      "Garrett Morgan",
      "Lewis Latimer",
      "George Washington Carver"
    ],
    "correctIndex": 1
  },
  {
    "question": "What number does the Roman Numeral L represent?",
    "options": [
      "5",
      "5000",
      "50",
      "500"
    ],
    "correctIndex": 2
  },
  {
    "question": "Of the following properties, which is the most expensive in the board game Monopoly (American edition)?",
    "options": [
      "Pacific Avenue",
      "Kentucky Avenue",
      "Marvin Gardens",
      "St. James Place"
    ],
    "correctIndex": 0
  },
  {
    "question": "This show is credited by the Guinness Book of World Records as being the longest-running soap opera. Its 15,000th episode aired on September 7, 2006.",
    "options": [
      "Days of Our Lives",
      "General Hospital",
      "The Guiding Light",
      "One Life to Live"
    ],
    "correctIndex": 2
  },
  {
    "question": "He was the first African-American pitcher in Major League Baseball.",
    "options": [
      "Larry Doby",
      "Dan Bankhead",
      "Joe Black",
      "Don Newcombe"
    ],
    "correctIndex": 1
  },
  {
    "question": "This person was the first African-American to hit a home run in Major League Baseball.",
    "options": [
      "Larry Doby",
      "Dan Bankhead",
      "Jackie Robinson",
      "Monte Irvin"
    ],
    "correctIndex": 1
  },
  {
    "question": "This man invented the alarm clock so he could awake at 4 A.M. every morning.",
    "options": [
      "Levi Hutchins",
      "Satori Koto",
      "Jonathan Larson",
      "Seth Thomas"
    ],
    "correctIndex": 0
  },
  {
    "question": "He invented instant coffee in 1901.",
    "options": [
      "Satori Koto",
      "Karl von Nestle",
      "Eduard Helfenmier",
      "Levi Hutchins"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who invented a process to remove caffeine from coffee for the first time?",
    "options": [
      "Roselius and Wimmer",
      "Rostand and Martin",
      "Banting and Best",
      "Nestle and Sanders"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this game show, created by Merv Griffin in 1964, you always have to say What is...? before you say the answer.",
    "options": [
      "Pyramid",
      "Wheel of Fortune",
      "Family Feud",
      "Jeopardy!"
    ],
    "correctIndex": 3
  },
  {
    "question": "This popular board game is published by Parker Brothers. The board consists of forty spaces containing twenty-eight properties.",
    "options": [
      "Scrabble",
      "Trouble",
      "Monopoly",
      "Sorry!"
    ],
    "correctIndex": 2
  },
  {
    "question": "In this American strategic life-simulation computer game you rule peoples lives. The game was developed by Maxis and published by Electronic Arts.",
    "options": [
      "The Sims",
      "Call of Duty",
      "MaddenNFL",
      "StarCraft"
    ],
    "correctIndex": 0
  },
  {
    "question": "In order to play this game, you need a net, a ball and 6 team players. Most common faults include: causing the ball to touch the ground outside the opponents court and double hit (two consecutive contacts with the ball made by the same player)",
    "options": [
      "Dodgeball",
      "Baseball",
      "Volleyball",
      "Football"
    ],
    "correctIndex": 2
  },
  {
    "question": "Woody and Buzz Light Year are characters from this video game based on a Disney movie.",
    "options": [
      "Jump In!",
      "Toy Story",
      "Camp Rock",
      "Planet 51"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to urban legends, the Titantic sank because it was carrying which of the following?",
    "options": [
      "Jack the Ripper",
      "A man trying to outrun a gypsys curse",
      "A cursed mummy",
      "The Book of the Dead"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to urban legends, at Santa Fes Loretto Chapel, this structure defies the laws of physics, standing without any support.",
    "options": [
      "A 12 foot tall mirror",
      "A stained glass window depicting Jesus",
      "A spiral staircase",
      "A stained glass window depicting St. Joseph"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to urban legends, in Plainfield, Wisconsin the ghosts of two murdered girls return to kill and skin their parents. Why?",
    "options": [
      "The parents murdered them.",
      "The parents didnt tell their subsequent son about his sisters.",
      "The parents didnt report the girls murders.",
      "The parents sold the girls to be murdered."
    ],
    "correctIndex": 1
  },
  {
    "question": "According to popular urban legends, the ghost of an Indiana teen who was killed after 5 other teens pushed her into the sewer will kill anyone who doesnt do which of the following?",
    "options": [
      "Draw a cross on 5 manhole covers",
      "Light a candle in her memory",
      "Repost her story on Myspace",
      "Forward her story by email"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to an urban legend, in Geneva in 2002 an intoxicated groom was suffocated at his bachelor party by which of the following?",
    "options": [
      "Passing out face down on the shag carpet",
      "A strippers large breasts",
      "His jealous best man",
      "His own tie"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to urban legends that spread in 1997, people in this country began pumping air from a bicycle pump into their rectum resulting in their explosion.",
    "options": [
      "The United States",
      "Poland",
      "Thailand",
      "South Africa"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to a story, a teenage girl wears her new pair of shrink-to-fit jeans in the bathtub in order to acheive the perfect fit. Unfortunately, the jeans shrink so much that they kill her with their constricting force. What brand of jeans is responsible?",
    "options": [
      "Levis",
      "Abercrombie  Fitch",
      "Tommy Hilfiger",
      "Calvin Klein"
    ],
    "correctIndex": 0
  },
  {
    "question": "Women who wear their purse straps across their chests are at risk of being beheaded by purse snatchers.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Thieves, rapists, gang members and psychopaths lie in wait under their victims cars and slash their victims Achilles tendon so they cant escape. When did this urban legend begin circulating?",
    "options": [
      "The 1970s",
      "The 1920s",
      "The 1990s",
      "The 1950s"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to an urban legend, an electrical worker is blinded for life when the following item/s fuse(s) to his eyes.",
    "options": [
      "His contact lenses",
      "His welding rod",
      "His goggles",
      "His loose shirt cuff"
    ],
    "correctIndex": 0
  },
  {
    "question": "What term means fear of darkness?",
    "options": [
      "Achluophobia",
      "Acarophobia",
      "Ablutophobia",
      "Acerophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "This word means fear of cats. Meow!",
    "options": [
      "Ailurophobia",
      "Arachnephobia",
      "Alektorophobia",
      "Apiphobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ataxophobia means fear of paying taxes.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Albuminurophobia is defined as fear of albums.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The fear of stars and celestial space is known as astrophobia.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which term means fear of being touched?",
    "options": [
      "Apotemnophobia",
      "Aphenphosmphobia",
      "Anuptaphobia",
      "Antlophobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does amathophobia mean?",
    "options": [
      "fear of dust",
      "fear of numbers",
      "fear of rooms",
      "fear of candles"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does acrophobia mean?",
    "options": [
      "snake",
      "farm",
      "heights",
      "pain"
    ],
    "correctIndex": 2
  },
  {
    "question": "Autophobia means fear of cars.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ataxiophobia means fear of riding a taxi.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which New York City borough is Central Park located?",
    "options": [
      "Manhattan",
      "Queens",
      "Bronx",
      "Brooklyn"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to their mission statement, what is the primary goal of the US Central Intelligence Agency?",
    "options": [
      "Providing national security intelligence to senior US policymakers",
      "Fighting Al-Qaeda",
      "Rescuing US citizens from terrorists around the world",
      "Spying on all aliens on US territory"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these countries is NOT fictional?",
    "options": [
      "Central America",
      "Central Korea",
      "Central African Republic",
      "Central Europe"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the Central Processing Unit (aka CPU) responsible for?",
    "options": [
      "Advising US governments on internal matters",
      "Executing computer programs",
      "Turning crude oil into gasoline",
      "Crime Prevention"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the prevalent language in Central America?",
    "options": [
      "French",
      "Spanish",
      "English",
      "Mayan"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is Comedy Central?",
    "options": [
      "A spin-off of the famous Monty Python group",
      "A film studio owned by Jim Carrey",
      "An American TV station that broadcasts mostly comedy programs",
      "The company that owns rights to all comedy movies on YouTube"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these countries is in Central Europe?",
    "options": [
      "Bulgaria",
      "Poland",
      "Portugal",
      "Belgium"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the position number of a Center in basketball?",
    "options": [
      "1",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 3
  },
  {
    "question": "Not accounting for daylight saving, what is the hour difference between Central Time Zone (CST) in America and Central European Time (CET)?",
    "options": [
      "7 hours",
      "5 hours",
      "9 hours",
      "12 hours"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is Cordillera Central?",
    "options": [
      "City Center in Far East Asian countries",
      "The central mountain range in several Spanish speaking countries",
      "A special undercover police unit in Australia",
      "The geographical center of any country or region"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these US states comes in North and South flavours?",
    "options": [
      "Dakota",
      "Virginia",
      "Washington",
      "New York"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the American Civil War, what were the southern US states referred to as?",
    "options": [
      "Republicans",
      "Democrats",
      "Union",
      "Confederacy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following is the correct name of an African nation?",
    "options": [
      "Republic of North Africa",
      "Federation of South Africa",
      "Federation of North Africa",
      "Republic of South Africa"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is an existing country, recognized by the United Nations?",
    "options": [
      "North Vietnam",
      "North Cyprus",
      "North Korea",
      "North Africa"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following is a major US airline and a subsidiary of Delta Air Lines?",
    "options": [
      "Southwest Airlines",
      "Northeast Airlines",
      "Southeast Airlines",
      "Northwest Airlines"
    ],
    "correctIndex": 3
  },
  {
    "question": "Three of these are not real bodies of water; which one is?",
    "options": [
      "North Sea",
      "Northwest Sea",
      "South Sea",
      "Southeast Sea"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first person to reach both the North and South Poles?",
    "options": [
      "Roald Amundsen",
      "Robert Falcon Scott",
      "Robert Peary",
      "Ernest Shackleton"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the country below which is NOT located in South America.",
    "options": [
      "Surinam",
      "Chile",
      "Panama",
      "Colombia"
    ],
    "correctIndex": 2
  },
  {
    "question": "The green color is considered to be the traditional and most sacred color of this religion.",
    "options": [
      "Roman Catholicism",
      "Buddhism",
      "Hinduism",
      "Islam"
    ],
    "correctIndex": 3
  },
  {
    "question": "The flag of what country consists of a simple green field with no other features?",
    "options": [
      "Libya",
      "Lebanon",
      "Laos",
      "Lithuania"
    ],
    "correctIndex": 0
  },
  {
    "question": "What island is often referred to as the Emerald Isle, the green color being its symbol?",
    "options": [
      "Sicily",
      "Iceland",
      "Jamaica",
      "Ireland"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the expression to wear a green hat mean in popular Chinese culture?",
    "options": [
      "to be a cuckold",
      "to be a peasant",
      "to be a wise person",
      "to be an immature, foolish person"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why do most fish, reptiles, amphibians, and birds appear green?",
    "options": [
      "They are able to change their color in order to camouflage themselves",
      "Because most of them feed on green plants",
      "Their skin contains a specific green pigment",
      "Because of a reflection of blue light coming through an over-layer of yellow pigment"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the green color associated with during the Middle Ages according to some stories from that period?",
    "options": [
      "Lust",
      "Friendship",
      "Rivalry",
      "Royalty"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the other common name of the shade of green known as midnight green?",
    "options": [
      "Hunter green",
      "Teal",
      "Feldgrau",
      "Eagle green"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the first name of Dr. Greene from the popular television series ER, played by actor Anthony Edwards?",
    "options": [
      "Peter",
      "John",
      "Richard",
      "Mark"
    ],
    "correctIndex": 3
  },
  {
    "question": "Due to the presence of trace amounts of this chemical emeralds appear green.",
    "options": [
      "Copper",
      "Mercury",
      "Zinc",
      "Chromium"
    ],
    "correctIndex": 3
  },
  {
    "question": "What character from the famous American sitcom Friends has the last name of Green?",
    "options": [
      "Rachel",
      "Janice",
      "Chandler",
      "Ross and Monica"
    ],
    "correctIndex": 0
  },
  {
    "question": "One angstrom unit equal what length in meters?",
    "options": [
      "0.000001 meters",
      "1,000,000,000 meters",
      "0.0000000001 meters",
      "0.001 meters"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these languages does not belong to the Germanic language family?",
    "options": [
      "Finnish",
      "Icelandic",
      "Swedish",
      "Norwegian"
    ],
    "correctIndex": 0
  },
  {
    "question": "This composer, who lived 1865-1957, was born to a Swedish speaking family in a Russian-owned part of Finland. His compositions include: Valse Triste,  The Swan of Tuonela, and seven fine symphonies. What is the last name of this composer?",
    "options": [
      "Prokofiev",
      "Bull",
      "Grieg",
      "Sibelius"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first Chinese writer to win the Nobel Prize for Literature?",
    "options": [
      "Xia Zhinian",
      "Choi Chi Fung",
      "Gao Xingjian",
      "Cai Zhifeng"
    ],
    "correctIndex": 2
  },
  {
    "question": "This former Prime Minister of India was born in India to a Brahmin family. For a while this leader was a professor of Political Science at the Takshashila University and was one of the first to envision the concept of a unified India.",
    "options": [
      "Chanakya",
      "J. Nehru",
      "M. Gandhi",
      "Indira Gandhi"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many men held the title King of England in 1936?",
    "options": [
      "1 - George V",
      "3 -  George V, Edward VIII, and George VI",
      "2 -  Albert II and George VI",
      "0 - There was a queen"
    ],
    "correctIndex": 1
  },
  {
    "question": "From which language do we get the word tattoo?",
    "options": [
      "Tahitian",
      "Tongan",
      "Maori",
      "Marshallese"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the Hebrew word gaon mean?",
    "options": [
      "Circumcisor",
      "The Old Testament",
      "Genius",
      "Cantor"
    ],
    "correctIndex": 2
  },
  {
    "question": "Iron makes up 35.1 % of Earth. 28.2 % is oxygen. What is the third leading element of Earths composition?",
    "options": [
      "silicon",
      "magnesium",
      "nickel",
      "calcium"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Mississippi is the longest North American river. The Missouri is the second. What is the third longest?",
    "options": [
      "Arkansas",
      "Rio Grande",
      "Colorado",
      "Hudson"
    ],
    "correctIndex": 1
  },
  {
    "question": "In physics, what does Avogadros law state?",
    "options": [
      "At the same mass and pressure, equal volumes of gases contain the same number of molecules.",
      "Volumes of gases containing the same number of molecules have equal pressures.",
      "Volumes of gases containing the same number of molecules have equal pressures and masses.",
      "At the same temperature and pressure, equal volumes of gases contain the same number of molecules."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is greater: the circumference of Earth from pole to pole or the circumference of Earth around the equator?",
    "options": [
      "The polar circumference",
      "The equatorial circumference",
      "None of these",
      "They are equal"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which country has Bratislava as its capital city, and the koruna as its unit of currency?",
    "options": [
      "Slovenia",
      "Slovakia",
      "Macedonia",
      "Latvia"
    ],
    "correctIndex": 1
  },
  {
    "question": "A specimen from which of these species was listed in the Guinness Book of World Records as the longest bony fish alive?",
    "options": [
      "Whale shark",
      "Bluefin tuna",
      "Oarfish",
      "Blue whale"
    ],
    "correctIndex": 2
  },
  {
    "question": "The color named gamboge is a shade of this color.",
    "options": [
      "Grey",
      "Yellow",
      "Blue",
      "Purple"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ube is a shade of this color.",
    "options": [
      "Brick",
      "Mustard",
      "Olive",
      "Lavender"
    ],
    "correctIndex": 3
  },
  {
    "question": "What type of color is the shade called icterine?",
    "options": [
      "Yellow",
      "Green",
      "Red",
      "Blue"
    ],
    "correctIndex": 0
  },
  {
    "question": "A shade of which color is the so-called June bud color?",
    "options": [
      "Orange",
      "Coral",
      "Green",
      "Pink"
    ],
    "correctIndex": 2
  },
  {
    "question": "The color called sepia is a shade of this color.",
    "options": [
      "Silver",
      "Brown",
      "Navy",
      "Plum"
    ],
    "correctIndex": 1
  },
  {
    "question": "What animal was the color taupe named after?",
    "options": [
      "Mole",
      "Horse",
      "Bear",
      "Sparrow"
    ],
    "correctIndex": 0
  },
  {
    "question": "The color xanadu is a shade of this color.",
    "options": [
      "Purple",
      "Yellow",
      "Blue",
      "Grey"
    ],
    "correctIndex": 3
  },
  {
    "question": "What type of color is the shade called saffron?",
    "options": [
      "Yellow",
      "Green",
      "Red",
      "Blue"
    ],
    "correctIndex": 0
  },
  {
    "question": "The name of the color sangria comes from the Spanish word sangre. What does it mean?",
    "options": [
      "Wine",
      "Sorrow",
      "Blood",
      "Tear"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the color of the Dont Walk pedestrian crossing signal in Canada and the United States?",
    "options": [
      "Puce",
      "Coral red",
      "Scarlet",
      "Portland Orange"
    ],
    "correctIndex": 3
  },
  {
    "question": "The national flag of what country consists of a light blue field with a single white star in the center?",
    "options": [
      "Greece",
      "Somalia",
      "Sudan",
      "Singapore"
    ],
    "correctIndex": 1
  },
  {
    "question": "What day of the week is associated with the blue color in Thailand?",
    "options": [
      "Friday",
      "Sunday",
      "Wednesday",
      "Monday"
    ],
    "correctIndex": 0
  },
  {
    "question": "The call of the Blue Jay is often compared to the sound produced by this object.",
    "options": [
      "Rusty pump",
      "Screeching door",
      "Flute",
      "Old trombone"
    ],
    "correctIndex": 0
  },
  {
    "question": "What country employs the blue color as its national sports color, as it denotes secularism?",
    "options": [
      "India",
      "South Korea",
      "Spain",
      "Italy"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to Hindu tradition, the fifth chakra, called Vishuddha and associated with the blue color, is located in this part of the body.",
    "options": [
      "Navel",
      "Neck",
      "Left ring finger",
      "Mouth"
    ],
    "correctIndex": 1
  },
  {
    "question": "In historical atlases published in Germany, Germany is traditionally painted in light blue. What color is traditionally used for England?",
    "options": [
      "Green",
      "Pink",
      "Purple",
      "Yellow"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what country is the presidential residence called The Blue House?",
    "options": [
      "South Korea",
      "Argentina",
      "Greece",
      "France"
    ],
    "correctIndex": 0
  },
  {
    "question": "What shade of the blue color is also called angel blue?",
    "options": [
      "Light blue",
      "Cerulean",
      "Cyan",
      "Ultramarine"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the phrase to be blue (blau sein) mean in German language?",
    "options": [
      "To cheat on your wife",
      "To be drunk",
      "To be pregnant",
      "To be angry"
    ],
    "correctIndex": 1
  },
  {
    "question": "What English word is used in linguistics when discussing the issue of the lack of separate terms for blue and green in many languages?",
    "options": [
      "Glue",
      "Grue",
      "Bleen",
      "Breen"
    ],
    "correctIndex": 1
  },
  {
    "question": "12 x 2 +(6/4) ^2 equals what?",
    "options": [
      "576",
      "26.25",
      "666",
      "56.25"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many Emmy Awards did reporter John Donvan win in the 1990s?",
    "options": [
      "5",
      "he is not a reporter",
      "none",
      "2"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many books are in the Jewish Torah?",
    "options": [
      "5",
      "7",
      "2",
      "3"
    ],
    "correctIndex": 0
  },
  {
    "question": "What word refers to the art or science of making timepieces and measuring time?",
    "options": [
      "horology",
      "timeology",
      "numerology",
      "periodology"
    ],
    "correctIndex": 0
  },
  {
    "question": "Complete the title of a song by the rock group Creedence Clearwater Revival: Proud _____",
    "options": [
      "Harry",
      "Berry",
      "Barry",
      "Mary"
    ],
    "correctIndex": 3
  },
  {
    "question": "What word denotes the government of a nation or state?",
    "options": [
      "municipality",
      "civility",
      "policity",
      "polity"
    ],
    "correctIndex": 3
  },
  {
    "question": "What branch of philosophy or metaphysics deals with the study of being and existence?",
    "options": [
      "causality",
      "epistemology",
      "phenomenology",
      "ontology"
    ],
    "correctIndex": 3
  },
  {
    "question": "The name of the ruby comes from the Latin word ruber, which means what?",
    "options": [
      "Murder",
      "Bright",
      "Red",
      "Blood"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which of these colors do sapphires come?",
    "options": [
      "Yellow",
      "Blue",
      "Green",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What country are the priciest emeralds in the world found?",
    "options": [
      "Peru",
      "Colombia",
      "South Africa",
      "India"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of diamond is the rarest on the planet?",
    "options": [
      "Black",
      "Purple",
      "Orange",
      "Red"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where was the largest aquamarine stone found?",
    "options": [
      "Jamaica",
      "Japan",
      "Iran",
      "Brazil"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these names refers to the precious stone morganite?",
    "options": [
      "All of these",
      "Cesian beryl",
      "Pink emerald",
      "Rose beryl"
    ],
    "correctIndex": 0
  },
  {
    "question": "What statement is true about the precious stone opal?",
    "options": [
      "White and green opals are the most common.",
      "It is a mineraloid gel.",
      "All of these",
      "It usually contains about 3-10% water."
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of topaz is the gemstone of Texas?",
    "options": [
      "Imperial topaz",
      "Orange topaz",
      "Mystic topaz",
      "Blue topaz"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the name of the Koh-i-Noor diamond mean in Persian?",
    "options": [
      "Mountain of light",
      "Eye of the sea",
      "Divine treasure",
      "Soul of a virgin"
    ],
    "correctIndex": 0
  },
  {
    "question": "As a cheaper substitute for which of these precious stones is the synthetic cubic zirconia used?",
    "options": [
      "Peridot",
      "Goshenite",
      "Diamond",
      "Opal"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the first NFL team to win the Super Bowl indoors.",
    "options": [
      "Dallas",
      "Tampa Bay",
      "Miami",
      "Pittsburgh"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the first US city to play a Beatles song on the radio?",
    "options": [
      "Pittsburgh",
      "Memphis",
      "Seattle",
      "Cleveland"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the Hawaiian language this word means woman.",
    "options": [
      "hoaloha (hoe-ah-low-hah)",
      "kane (kah-nay)",
      "wahine (wah-hee-knee)",
      "makuahine (maa-koo-ah-hee-knee)"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was  the first Major League Baseball player to hit four homers in one game and three triples in another game?",
    "options": [
      "Mickey Mantle",
      "Tris Speaker",
      "Willie Mays",
      "Joe Dimaggio"
    ],
    "correctIndex": 2
  },
  {
    "question": "This award-winning composer/arranger has written and arranged the themes for St. Elsewhere, Law and Order, NYPD Blue, Toma, The Rockford Files and several other great TV shows.",
    "options": [
      "Jack Vita",
      "Danny Lux",
      "Danny Elfman",
      "Mike Post"
    ],
    "correctIndex": 3
  },
  {
    "question": "Identical twins have identical fingerprints.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "D-Day refers to one of the biggest military operations in history that took place on June 6, 1944. What was the pass word used by the Allied Forces on that day?",
    "options": [
      "Mickey Mouse",
      "Overlord",
      "Sceptre",
      "Ike"
    ],
    "correctIndex": 0
  },
  {
    "question": "This American city was the site of the first musicians union in the USA. Its zoo housed the lion that roared before every MGM movie. It is called Bluff City. Although it is the largest city in the state it has never been the state capital. What is this city?",
    "options": [
      "Burbank",
      "Newark",
      "Memphis",
      "New York City"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the term for a small, thin piece of skin, especially the skin that comes off the body after a sunburn?",
    "options": [
      "bobo",
      "olea",
      "blype",
      "obol"
    ],
    "correctIndex": 2
  },
  {
    "question": "The TV show Medium revolves around a psychic consultant named Allison Du Bois. True or False: The character is named after a real life psychic consultant called Allison DuBois.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where does the name Kansas come from?",
    "options": [
      "from the Chinook word for the area",
      "from an Apache word meaning small rivers",
      "from the indigenous people of that area of the USA",
      "from a Huron word meaning long space"
    ],
    "correctIndex": 2
  },
  {
    "question": "The word phobia is of Latin origin.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Amathophobia is an irrational fear of what?",
    "options": [
      "thunder  lightning",
      "movement or change",
      "falling in love",
      "dust particles"
    ],
    "correctIndex": 3
  },
  {
    "question": "People suffering from pediophobia would be afraid of which of the following?",
    "options": [
      "Pregnant mothers",
      "Foot doctors",
      "Bicycles",
      "Cabbage patch kids"
    ],
    "correctIndex": 3
  },
  {
    "question": "Aichmophobia is defined as an abnormal fear of what?",
    "options": [
      "algebraic equations",
      "tombstones",
      "atomic explosives",
      "pointy objects"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following terms refers to the abnormal fear of walking or standing erect?",
    "options": [
      "Basiphobia",
      "Basistasiphobia",
      "Stasibasiphobia",
      "Stasiphobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "When expressed by a medical term, containing the word phobia, which one of these has the most letters?",
    "options": [
      "the fear of long words",
      "the fear of kidney disease",
      "the fear of the number 666",
      "the fear of foreign languages"
    ],
    "correctIndex": 0
  },
  {
    "question": "Acrophobia is the fear of flying.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which insect would a myrmecophobic person want to stay away from?",
    "options": [
      "moths",
      "ants",
      "bees",
      "cockroaches"
    ],
    "correctIndex": 1
  },
  {
    "question": "Peladophobia is the fear of this type of people.",
    "options": [
      "balding people",
      "sexual predators",
      "gang members",
      "trash collectors"
    ],
    "correctIndex": 0
  },
  {
    "question": "How did Jane Seymour, wife of King Henry VIII of England, die in 1537?",
    "options": [
      "She was executed.",
      "She committed suicide.",
      "She was poisoned.",
      "Of natural causes"
    ],
    "correctIndex": 3
  },
  {
    "question": "Jane Addams is the founder of this movement in the United States.",
    "options": [
      "Settlement House movement",
      "Womens Rights movement",
      "All of these",
      "Womens Liberation movement"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the birth name of Academy Award-winning actress Jane Fonda?",
    "options": [
      "Lady Jayne Seymour Fonda",
      "Mary Jayne Seymour Fonda",
      "Lady Mary Jane Fonda",
      "Baby Jane Fonda"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these literary works was not written by author Jane Austen?",
    "options": [
      "Sense and Sensibility",
      "Wuthering Heights",
      "All of these",
      "Northanger Abbey"
    ],
    "correctIndex": 1
  },
  {
    "question": "Jane Porter is the love interest of this fictional character.",
    "options": [
      "Batman",
      "Superman",
      "Tarzan",
      "Spiderman"
    ],
    "correctIndex": 2
  },
  {
    "question": "Jane Marple, better known as Miss Marple, is a fictional amateur detective created by this famous author.",
    "options": [
      "Arthur Conan Doyle",
      "Edgar Allan Poe",
      "Raymond Chandler",
      "Agatha Christie"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what 1973 James Bond movie has actress Jane Seymour appeared as a Bond girl?",
    "options": [
      "The Spy Who Loved Me",
      "The Man with the Golden Gun",
      "Diamonds Are Forever",
      "Live and Let Die"
    ],
    "correctIndex": 3
  },
  {
    "question": "Fashion house Hermes named their famous Birkin bag after Jane Birkin. Who is she?",
    "options": [
      "an English actress and singer",
      "a French painter and sculptor",
      "an Italian model",
      "an American tennis player"
    ],
    "correctIndex": 0
  },
  {
    "question": "Lady Jane Grey was the uncrowned Queen of England for what period of time in 1553?",
    "options": [
      "Nine days",
      "Fifteen days",
      "One day",
      "One month"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the Bronte sisters wrote the famous novel Jane Eyre?",
    "options": [
      "Anne Bronte",
      "Elizabeth Bronte",
      "Charlotte Bronte",
      "Emily Bronte"
    ],
    "correctIndex": 2
  },
  {
    "question": "This American beauty was born Marion Levy in New York. She acted in such great movies as The Great Dictator, Modern Times, So Proudly We Hailed, and A Stranger Came Home. Who was this actress whose husbands included Charlie Chaplin, Burgess Meredith and Erich Maria Remarque?",
    "options": [
      "Paulette Goddard",
      "Earth Kitt",
      "Ava Gardner",
      "Myrna Loy"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following did Henry Ford not put into his first cars?",
    "options": [
      "Steering wheel",
      "A place for a second person to sit in front",
      "Reverse gear",
      "Rear seats"
    ],
    "correctIndex": 2
  },
  {
    "question": "This very popular opera singer from Australia lived 1861-1931. She had two foods named after her.",
    "options": [
      "Grace Toff",
      "Nellie Melba",
      "Brigit Nielsen",
      "Jenny Lind"
    ],
    "correctIndex": 1
  },
  {
    "question": "This American-born soprano, nicknamed the Tennessee Nightingale, lived 1898-1947. She was nominated for an Oscar for One Night of Love.",
    "options": [
      "Grace Toff",
      "Nellie Melba",
      "Melba Moore",
      "Grace Moore"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Stegasaurus had a second brain in its back.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The  first computer used for weather research and prediction was MANIAC.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the softest mineral?",
    "options": [
      "Fluorite",
      "Gypsum",
      "Talc",
      "Calcite"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the 1930s, ehe Dust Bowl directly affected these four US states.",
    "options": [
      "Oklahoma, Kansas, Missouri, and Iowa",
      "Texas, Oklahoma, Missouri, and Kansas",
      "Texas. Oklahoma, Kansas, and Iowa",
      "Texas, Oklahoma, New Mexico, and Colorado"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which city used to be called Lutetia?",
    "options": [
      "Paris",
      "Leiden",
      "Madrid",
      "London"
    ],
    "correctIndex": 0
  },
  {
    "question": "This actor is a graduate of Harvard University and of the Yale Drama School. In 1997 he married Angela Bassett. He is known for his role as A.D.A. Ron Carver on Law and Order: Criminal Intent.",
    "options": [
      "Courtney Vance",
      "Vincent DOnofrio",
      "Chris Noth",
      "Eric Bogodsian"
    ],
    "correctIndex": 0
  },
  {
    "question": "John Steinbeck wrote the highly acclaimed novel The Grapes of Wrath. Where does the title come from?",
    "options": [
      "The Battle Hymn of the Republic",
      "A poem by Shakespeare",
      "A famous sermon by Cotton Mather",
      "The Bible"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dwight David Eisenhower was a great US General and the 34th President of the USA. He had thoughts of becoming a football player until he was injured tackling this great athlete.",
    "options": [
      "Jim Brown",
      "Jim Thorpe",
      "O.J. Simpson",
      "Red Grange"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is considered the best selling English-language novel of all times?",
    "options": [
      "And Then There Were None",
      "A Tale of Two Cities",
      "The DaVinci Code",
      "The Hobbit"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these not only cut off pieces of the American flag, but was honored for doing so?",
    "options": [
      "Robert Peary",
      "Benedict Arnold",
      "Jefferson Davis",
      "John Paul Jones"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first player for the Tampa Bay (Devil) Rays?",
    "options": [
      "Chuch LaMar",
      "Tony Saunders",
      "Wilson Alvarez",
      "Larry Rothschild."
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the original source of the Hearst fortune?",
    "options": [
      "Farming",
      "Mining",
      "Newspapers",
      "Oil"
    ],
    "correctIndex": 1
  },
  {
    "question": "What US college football team plays on blue grass?",
    "options": [
      "Boise State",
      "Kentucky",
      "Louisville",
      "Utah State"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where would one find the worlds largest vulture?",
    "options": [
      "South Africa",
      "Australia",
      "California",
      "The Andes"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which word is defined as \u00e2\u0080\u009cthe spiritual attitude of a man to a god and a dog to a man\u00e2\u0080\u009d in Ambrose Bierces satirical book The Devils Dictionary?",
    "options": [
      "Love",
      "Worship",
      "Reverence",
      "Respect"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which quality does satirist Ambrose Bierce define as \u00e2\u0080\u009chideously appareled after the manner of the time and place\u00e2\u0080\u009d in his book The Devils Dictionary?",
    "options": [
      "Fashionable",
      "Stylish",
      "Handsome",
      "Presentable"
    ],
    "correctIndex": 2
  },
  {
    "question": "\u00e2\u0080\u009cAppointing your grandmother to office for the good of the party\u00e2\u0080\u009d is the definition of which of these words in the satirical book by Ambrose Bierce The Devils Dictionary?",
    "options": [
      "Favoritism",
      "Humanitarianism",
      "Socialism",
      "Nepotism"
    ],
    "correctIndex": 3
  },
  {
    "question": "Match this definition to the word it belongs to according to Ambrose Bierce\u00e2\u0080\u0099s book The Devils Dictionary: \u00e2\u0080\u009cThe state or condition of a community consisting of a master, a mistress and two slaves, making in all, two.\u00e2\u0080\u009d",
    "options": [
      "Love",
      "Marriage",
      "Family",
      "Engagement"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which verb is defined as \u00e2\u0080\u009cto put forward a suitable person to incur the mudgobbling and deadcatting of the opposition\u00e2\u0080\u009d in Ambrose Bierce\u00e2\u0080\u0099s satirical book The Devils Dictionary",
    "options": [
      "Nominate",
      "Fire",
      "Promote",
      "Recommend"
    ],
    "correctIndex": 0
  },
  {
    "question": "\u00e2\u0080\u009cThe art of protecting flat surfaces from the weather and exposing them to the critic\u00e2\u0080\u009d is satirist Ambrose Bierce\u00e2\u0080\u0099s definition for which of these activities?",
    "options": [
      "Sculpturing",
      "Repairing",
      "Painting",
      "Safeguarding"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which is the word this definition from Ambrose Bierce\u00e2\u0080\u0099s book The Devils Dictionary refers to: \u00e2\u0080\u009cA man whose qualities, prepared for display like a box of berries in a market -- the fine ones on top -- have been opened on the wrong side. An inverted gentleman\u00e2\u0080\u009d?",
    "options": [
      "Blackguard",
      "Evildoer",
      "Villain",
      "Rogue"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these words is defined as the one unpardonable sin against ones fellows in the book The Devils Dictionary?",
    "options": [
      "Gratitude",
      "Fortune",
      "Success",
      "Faith"
    ],
    "correctIndex": 2
  },
  {
    "question": "Match this definition to the word it belongs in Ambrose Bierce\u00e2\u0080\u0099s book The Devils Dictionary: \u00e2\u0080\u009ca machine which you go into as a pig and come out of as a sausage.\u00e2\u0080\u009d",
    "options": [
      "A Sausage Factory",
      "Life",
      "Marriage",
      "Litigation"
    ],
    "correctIndex": 3
  },
  {
    "question": "In Ambrose Bierces satirical book The Devils Dictionary, what is called \u00e2\u0080\u009cone of the sauces which serve the French in place of a state religion\u00e2\u0080\u009d?",
    "options": [
      "Mayonaise",
      "Ketchup",
      "Hollendaise",
      "Mustard"
    ],
    "correctIndex": 0
  },
  {
    "question": "What other name is commonly used to refer to sweet and sour sauce in China?",
    "options": [
      "The red delight",
      "The peoples sauce",
      "The two opposites in one",
      "Woman and man sauce"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the full name of Charity, the leading character from the popular Broadway musical Sweet Charity?",
    "options": [
      "Charity Mother Hartley",
      "Charitabella Love Huggings",
      "Charity Hope Valentine",
      "Charity Faith Amori"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the original name of the British rock band Sweet before they adopted their final name?",
    "options": [
      "Sugar and Spice",
      "The Sweetshop",
      "Candy",
      "The Sugarcane"
    ],
    "correctIndex": 1
  },
  {
    "question": "The sweet potato is commonly mistaken for this other plant, although the two are not related.",
    "options": [
      "Carrot",
      "Turnip",
      "Yam",
      "Potato"
    ],
    "correctIndex": 2
  },
  {
    "question": "What Biblical prophet inspired the popular gospel song Swing Low, Sweet Chariot, composed by Wallace Willis?",
    "options": [
      "Ezekiel",
      "Jonah",
      "Elijah",
      "Isaiah"
    ],
    "correctIndex": 2
  },
  {
    "question": "What band released Bitter Sweet Symphony on 16 June, 1997 as the first single from their third album Urban Hymns?",
    "options": [
      "Blink-182",
      "Blur",
      "Foo Fighters",
      "The Verve"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of Marilyn Mansons 1995 remix album in which he included his cover of Eurythmics 1983 Sweet Dreams (Are Made of This)?",
    "options": [
      "Portrait of an American Family",
      "Antichrist Superstar",
      "Smells Like Children",
      "The Last Tour on Earth"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the meaning of the idiomatic phrase to have a sweet tooth?",
    "options": [
      "To be excessively sentimental",
      "To be meek and humble",
      "To be talkative and eloquent",
      "To be addicted to sweets"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the other common name of the plant Prunus avium, better known as Sweet cherry?",
    "options": [
      "Wild cherry",
      "Blood cherry",
      "All of these",
      "Crimson cherry"
    ],
    "correctIndex": 0
  },
  {
    "question": "U2s song Sweetest Thing was reportedly written by vocalist Bono as an apology to his wife Ali Hewson for forgetting this.",
    "options": [
      "Forgetting their wedding anniversary",
      "Forgetting her birthday",
      "Forgetting to feed her cat",
      "Forgetting to pick her mother from the airport"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the 1985 horror movie based on the novella Cycle of the Werewolf by Stephen King.",
    "options": [
      "Silver Bullet",
      "Silver Dagger",
      "Silver Crucifix",
      "Silver Knife"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the title of a 1973 song by The Rolling Stones?",
    "options": [
      "Silver Boat",
      "Silver Car",
      "Silver Ride",
      "Silver Train"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which wedding anniversary is celebrated as Silver Wedding Day by old tradition?",
    "options": [
      "35th anniversary",
      "25th anniversary",
      "20th anniversary",
      "30th anniversary"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Australia the expression silvertail is used as a synonym of which of these?",
    "options": [
      "Golddigger",
      "Wealthy",
      "Corrupted",
      "Hypocrite"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which U.S. state is there a region called Silver?",
    "options": [
      "Ohio",
      "Iowa",
      "Texas",
      "Indiana"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 2008, how many nations had aircraft carriers either sea worthy or under construction?",
    "options": [
      "14",
      "9",
      "2",
      "20"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did the first balloon flight in the USA take place?",
    "options": [
      "1839",
      "1793",
      "1855",
      "1903"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which statement is true about King Bladud?",
    "options": [
      "He is the mythical king who tried to fly with wings made out of feathers and wood.",
      "He was the first member of a royal house (Ottoman Empire) to fly in a plane.",
      "He flew the first plane to fly in Asia. (Thailand)",
      "He was the first primate (chimpanzee) to be onboard a spacecraft."
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the first jet fighter to hit Mach 3.2?",
    "options": [
      "Lockheed f-17-Eagle",
      "F-15 Falcon",
      "MIG 25 Foxbat",
      "F-22 Raptor"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which company built the Zero, the top Japanese fighter in World War Two?",
    "options": [
      "Nissan",
      "Tachikowa",
      "Mitsubishi",
      "Nakajima"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the world of airplane technology, what does LOT stand  for?",
    "options": [
      "Long Operational Technology",
      "Lengthy Oppositional Technology",
      "Low Observational Technology",
      "Light Opposing Technology"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which statement is true about Charles Furnas?",
    "options": [
      "He was the designer of the Wright Brothers first plane.",
      "He was the first passenger on an airplane.",
      "He was the pilot of the first jet fighter.",
      "During World War I, he became the first man to shoot down a plane during a war."
    ],
    "correctIndex": 1
  },
  {
    "question": "On May 6, 1937 the Hindenburg exploded as it tried to dock in the Lakehurst Naval Station in New Jersey. Out of the 97 people on the Zeppelin, how many died?",
    "options": [
      "35",
      "90",
      "96",
      "97"
    ],
    "correctIndex": 0
  },
  {
    "question": "Find the incorrect statement about Glenn H. Curtiss.",
    "options": [
      "He was Alexander Graham Bells partner in the aircraft business.",
      "He was the pilot who shot down The Red Baron during World War I.",
      "He founded the Curtis Aeroplane and Motor Corporation.",
      "He was the first person to have a pilots license."
    ],
    "correctIndex": 1
  },
  {
    "question": "What distinction does Elise Raymonde Deroche hold?",
    "options": [
      "She was the first female passenger in an airplane.",
      "She was the first female to fly a balloon.",
      "She was the first member of a royal house to fly in a plane.",
      "She was the first female licensed pilot."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the correct statement about Louis Bleriot?",
    "options": [
      "He was the first person to cross the English Channel in an airplane.",
      "He was the first Commander of the US Air Force.",
      "He was the first professional test pilot.",
      "He became the first US ace during World War I."
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the first pilot to make a flight at night.",
    "options": [
      "Ruth Law",
      "Emil Aubrun",
      "Walter Brookins",
      "Eugene Burton"
    ],
    "correctIndex": 1
  },
  {
    "question": "This famous pilot made the first solo flight from Hawaii to the mainland of the USA.",
    "options": [
      "Amelia Earhart",
      "Howard Hughes",
      "Tex  Johnston",
      "Charles Lindbergh"
    ],
    "correctIndex": 0
  },
  {
    "question": "On January 24, 1984, the Macintosh personal computer was introduced to the world by Apple Inc. How did the Macintosh brand get its name?",
    "options": [
      "The name was formed from the first letters of the Apple team members who invented it.",
      "They named it after its creators late grandfather.",
      "It was named after an apple cultivar.",
      "It was named after its creator."
    ],
    "correctIndex": 2
  },
  {
    "question": "Of what descent is singer and songwriter Duffy, born on 23 June 1984?",
    "options": [
      "Welsh",
      "Irish",
      "Australian",
      "Russian"
    ],
    "correctIndex": 0
  },
  {
    "question": "On July 23, 1984, Vanessa Williams became the first Miss America to give up her crown. What was the reason for this?",
    "options": [
      "She had nude photos in a magazine.",
      "She was accused of bribing the jury.",
      "She was pregnant during the competition.",
      "She was accused of having breast implants."
    ],
    "correctIndex": 0
  },
  {
    "question": "What world-famous female model was born on February 28, 1984?",
    "options": [
      "Gisele B\u00c3\u00bcndchen",
      "Natalia Vodianova",
      "Adriana Lima",
      "Karolina Kurkova"
    ],
    "correctIndex": 3
  },
  {
    "question": "What American Idol finalist was born on March 25, 1984, in Los Angeles, California?",
    "options": [
      "Elliott Yamin",
      "Jennifer Hudson",
      "Katharine McPhee",
      "Kelly Clarkson"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first human birth through embryo transfer was announced on February 3, 1984. Who was in charge of the research team that carried out the project?",
    "options": [
      "Dr. John Buster",
      "Dr. Emily Richardson",
      "Dr. Elliot Smith",
      "Dr. Benjamin Lewis"
    ],
    "correctIndex": 0
  },
  {
    "question": "What NASA astronauts made the first untethered space walk in history in 1984?",
    "options": [
      "Terence T. Henricks and Bruce E. Melnick",
      "Aleksandr Balandin and Vladimir Dzhanibekov",
      "Anna Lee Fisher and Frederick D. Gregory",
      "Bruce McCandless II and Robert L. Stewart"
    ],
    "correctIndex": 3
  },
  {
    "question": "What actress won the Academy Award for Best Actress at the 56th Academy Awards on April 9, 1984 in Los Angeles?",
    "options": [
      "Meryl Streep",
      "Jane Alexander",
      "Julie Walters",
      "Shirley MacLaine"
    ],
    "correctIndex": 3
  },
  {
    "question": "What did United States President Ronald Reagan say on the radio during a voice check on August 11, 1984?",
    "options": [
      "I wanna tell my mama I love her.",
      "We begin bombing in five minutes.",
      "I must tell you, Im wearing white-red-and-blue underpants today.",
      "Wait, do I speak now? Is this thing on?"
    ],
    "correctIndex": 1
  },
  {
    "question": "What legendary Hollywood actress was the second wife of actor Richard Burton, who passed away in 1984?",
    "options": [
      "Grace Kelly",
      "Marilyn Monroe",
      "Audrey Hepburn",
      "Elizabeth Taylor"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where does WALL-E find the plant in the self-titled movie?",
    "options": [
      "In a refrigerator",
      "In a trash can",
      "In a storm shelter",
      "In a greenhouse"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the movie, Short Circuit, what is Number 5s original function?",
    "options": [
      "Security System",
      "Mechanic",
      "A Butler",
      "Weapon"
    ],
    "correctIndex": 3
  },
  {
    "question": "What characters do Haley Joel Osment and Jude Law play in the 2001 sci-fi flick, A.I.: Artificial Intelligence?",
    "options": [
      "A robot and a robot",
      "None of these",
      "A human and a robot",
      "A human and a human"
    ],
    "correctIndex": 0
  },
  {
    "question": "Harrison Ford stars in Blade Runner.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "R2D2 and C3PO are part of what saga?",
    "options": [
      "None of these",
      "Star Wars",
      "Blade Runner",
      "Star Trek"
    ],
    "correctIndex": 1
  },
  {
    "question": "What model of robot does Arnold Schwarzenegger play in the Terminator series?",
    "options": [
      "T-100",
      "T-101",
      "T-1000",
      "T-1001"
    ],
    "correctIndex": 1
  },
  {
    "question": "What movie featured the humanoid robot, named Gort?",
    "options": [
      "The Day the Earth Stood Still",
      "Star Wars Franchise",
      "Short Circuit",
      "Batteries Not Included"
    ],
    "correctIndex": 0
  },
  {
    "question": "How do mermaids enchant people according to legends and myths?",
    "options": [
      "By sprinkling them with magic powder",
      "By dancing",
      "With their eyes",
      "By singing"
    ],
    "correctIndex": 3
  },
  {
    "question": "Why would mermaids drown humans according to popular belief and different stories?",
    "options": [
      "Because they forget humans cant breathe underwater",
      "In attempts to rescue them from drowning",
      "Out of spite",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the mermaid character from Disneys 1989 animated movie The Little Mermaid?",
    "options": [
      "Akasha",
      "Marina",
      "Ariel",
      "Florabelle"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to a popular Greek legend, Thessalonike, the sister of this historical figure, was transformed into a mermaid after her death.",
    "options": [
      "Aristotle",
      "Helen of Troy",
      "Alexander the Great",
      "Orpheus"
    ],
    "correctIndex": 2
  },
  {
    "question": "How are mermaids portrayed in the collection of stories Arabian Nights, or One Thousand and One Nights?",
    "options": [
      "As identical to humans",
      "As having a fish body and a human head",
      "As having a fish tail",
      "As having serpent bodies"
    ],
    "correctIndex": 0
  },
  {
    "question": "What are mermaids generally associated with in British folklore?",
    "options": [
      "They bring luck to those who have seen them.",
      "They make those who have seen them irresistible for the opposite sex.",
      "They bring longevity.",
      "They are considered a bad omen."
    ],
    "correctIndex": 3
  },
  {
    "question": "A mermaid is the symbol of this European city; depicted on its coat of arms, it can be seen on statues throughout the city.",
    "options": [
      "Warsaw",
      "Amsterdam",
      "Rotterdam",
      "Copenhagen"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the mermaid-like creature from Brazilian folklore?",
    "options": [
      "Iara",
      "Rusalka",
      "Aycayia",
      "Nereid"
    ],
    "correctIndex": 0
  },
  {
    "question": "What happens to the Little Mermaid at the end of Hans Christian Andersens fairy tale The Little Mermaid?",
    "options": [
      "She returns to the underwater world and marries a merman.",
      "Her body turns into foam.",
      "She dies and is damned for eternity.",
      "She marries the prince and they live happily ever after."
    ],
    "correctIndex": 1
  },
  {
    "question": "What singer and actress starred in the 1990 dramedy movie Mermaids?",
    "options": [
      "Vanessa Williams",
      "Cher",
      "Madonna",
      "Dolly Parton"
    ],
    "correctIndex": 1
  },
  {
    "question": "Between the 1920s and 1940s, the pink color was considered appropriate for this group of people, but later it became popular with others too.",
    "options": [
      "Boys",
      "Babies",
      "Young women",
      "High-class people"
    ],
    "correctIndex": 0
  },
  {
    "question": "The pink ribbon is associated with raising awareness for what disease?",
    "options": [
      "Skin cancer",
      "Breast cancer",
      "AIDS",
      "Autism"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the French academic dress system, what academic field is symbolized by the redcurrant color -- an extremely red shade of pink?",
    "options": [
      "Theology",
      "Law",
      "Medicine",
      "Arts"
    ],
    "correctIndex": 2
  },
  {
    "question": "What day of the week is associated with the pink color in Thailand?",
    "options": [
      "Friday",
      "Saturday",
      "Monday",
      "Tuesday"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what city a principal of an elementary school got a pink Mohawk haircut on 6 September 2007, as he had promised to do if the students raised the school\u00e2\u0080\u0099s Academic Performance Index by at least 55 points?",
    "options": [
      "Manchester",
      "San Francisco",
      "Houston",
      "Los Angeles"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of books are called novela rosa, or pink novel, in Spain?",
    "options": [
      "Crime novels",
      "Sentimental novels",
      "Erotic novels",
      "Books for little children"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the real name of the American female artist known as Pink?",
    "options": [
      "Pamella",
      "Alecia",
      "Emily",
      "Stacey"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what country is a cake called Pink Panther very popular?",
    "options": [
      "Canada",
      "France",
      "Spain",
      "Switzerland"
    ],
    "correctIndex": 2
  },
  {
    "question": "When did a war start over a postage stamp?",
    "options": [
      "1833",
      "1896",
      "1932",
      "1847"
    ],
    "correctIndex": 2
  },
  {
    "question": "During World War II, no Axis troops landed on any of the 48 American states.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Paul Erdos (pronounced Irr-dish) was a Hungarian mathematician with a very peculiar trait. What is it?",
    "options": [
      "He memorized all the prime numbers from 2 through 5,986,771,223",
      "He has said that he prefers mathematics to sex.",
      "He is the only mathematician to have won an Oscar.",
      "He is a self-taught mathematician - he wrote his Doctor thesis without ever taking a course in any college."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements is not correct?",
    "options": [
      "The Smithsonian Institute is the longest building in the world.",
      "All race horses are considered to have been born on January first.",
      "There is a list of unsolved math problems called the Milenium Problems. Anyone solving them is guaranteed $1,000,000 in prize money.",
      "The same man who invented the toy The Transformers also invented the hole cam, the camera used to see the hole cards on TV poker shows."
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first American novelist  to be considered an imoportant writer by the Europeans?",
    "options": [
      "Washinton Irving",
      "James Fennimore Cooper",
      "Thomas  Howell",
      "John Quincy Adams"
    ],
    "correctIndex": 3
  },
  {
    "question": "What do these  people have in common: both Presidents Bush, actor James Spader, actor Jack Lemmon, actor Humphrey Bogart and writer Edgar Rice  Burroughs?",
    "options": [
      "They all went to the same high school.",
      "They all were in Texas on 9/11/2001.",
      "They are the same Zodiac sign.",
      "They were all born in the same month."
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the lowest point in Europe?",
    "options": [
      "The Caspian Sea",
      "Comedy clubs  in Germany",
      "Gabo de Roca",
      "Gavdos"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which college did William Shakespeare attend?",
    "options": [
      "He did not go to college",
      "Cambridge",
      "UCLA",
      "Stanford"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was Freddie Mercurys real name?",
    "options": [
      "Frederick Von Messner",
      "Farroukh Bulsara",
      "Fernando Mercurio",
      "Fredricio de la Massino"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the term that denotes an airplane accident in which the plane is a total loss?",
    "options": [
      "Burial incident",
      "Decommission accident",
      "Hull loss incident",
      "Finishing accident"
    ],
    "correctIndex": 2
  },
  {
    "question": "Otto Lilienthal, the first person to make repeated successful gliding flights, died after an airplane accident on 10 August 1896. What were the last words he uttered moments before he passed away?",
    "options": [
      "Sacrifices must be made",
      "I am not dying in vain, I am dying in the name of progress",
      "It was all worth it",
      "I gave all I had"
    ],
    "correctIndex": 0
  },
  {
    "question": "US Army Lt. Thomas Selfridge was the first person killed in a powered fixed-wing aircraft. Where did the accident happen?",
    "options": [
      "France",
      "Virginia",
      "Colorado",
      "Pennsylvania"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the most common reason for airplane incidents?",
    "options": [
      "Human error",
      "Overload",
      "Equipment malfunction",
      "Weather conditions"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the main cause for Airline hull loss accidents from 1996 through 2005, according to a study by Boeing?",
    "options": [
      "Flight crew error",
      "Bad weather",
      "Air traffic control",
      "Maintenance"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these airplane disasters is considered the deadliest in history?",
    "options": [
      "The destruction of the World Trade Center",
      "The Charkhi Dadri mid-air collision",
      "The Tenerife disaster",
      "The Hawaiian disaster"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the reason for the Tenerife airplane disaster of March 27, 1977?",
    "options": [
      "The airplane crashed into a hospital",
      "Two airplanes collided on the runway before takeoff",
      "The airplane exploded in midair",
      "Two airplanes collided in midair"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the reason for the 1996 Charkhi Dadri mid-air collision of two airplanes over Haryana, India?",
    "options": [
      "There was a storm and visibility was poor",
      "One of the airplanes was flying at a lower altitude than permitted",
      "Both airplanes were experiencing technical problems before the collision",
      "All of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where did the Turkish Airlines Flight 981 McDonnell Douglas DC-10 crash on On March 3, 1974?",
    "options": [
      "Close to Paris",
      "Nearby Rome",
      "Nearby London",
      "Istanbul"
    ],
    "correctIndex": 0
  },
  {
    "question": "What caused the Air India Flight 182 crash on June 23, 1985, when 329 people passed away?",
    "options": [
      "Miscalculation of the altitude",
      "One of the pilots had a heart attack",
      "Engine malfunction",
      "Bomb explosion on board"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following fears is not of a color?",
    "options": [
      "Leukophobia",
      "Mageirocophobia",
      "Xanthophobia",
      "Porphyrophobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Potophobia is the abnormal fear of what?",
    "options": [
      "potatoes",
      "alcohol",
      "ibuprofen",
      "church"
    ],
    "correctIndex": 1
  },
  {
    "question": "There is an actual medical term for the fear of peanut butter sticking to the roof of ones mouth.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Selachophobia is the fear of this sea creature.",
    "options": [
      "octopus",
      "fish",
      "shark",
      "crab"
    ],
    "correctIndex": 2
  },
  {
    "question": "Samhainophobia is the fear of this holiday.",
    "options": [
      "Valentines Day",
      "Halloween",
      "St. Patricks Day",
      "Christmas"
    ],
    "correctIndex": 1
  },
  {
    "question": "What condition is characterized by fear of hurricanes?",
    "options": [
      "Chirophobia",
      "Lilapsophobia",
      "Pagophobia",
      "Stenophobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Didaskaleinophobia is the fear of animals that have rabies.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Helminthophobia is the fear of what?",
    "options": [
      "of scientific terminology",
      "of not going to heaven",
      "of seeing blood or bloody objects",
      "of being infested with worms"
    ],
    "correctIndex": 3
  },
  {
    "question": "6 am:  My alarm went off and my 4-year-old daughter jumped in bed with me, triggering my pedophobia. What was I afraid of?",
    "options": [
      "Loud noises",
      "Children",
      "Quick movements",
      "Daylight"
    ],
    "correctIndex": 1
  },
  {
    "question": "I ran into the bathroom and decided to brush my teeth. Upon looking up, I panicked due to my spectrophobia. What was I afraid of?",
    "options": [
      "Pimples",
      "Uncombed hair",
      "Wearing no make-up",
      "Mirrors"
    ],
    "correctIndex": 3
  },
  {
    "question": "Upon hearing my screams, my husband stepped out of the shower to make sure I was alright, causing me recoil due to my gymnophobia. What was I afraid of?",
    "options": [
      "Men",
      "Nudity",
      "Getting wet",
      "Water"
    ],
    "correctIndex": 1
  },
  {
    "question": "One of my companion animals entered the bathroom and brought about my ailurophobia. What was I afraid of?",
    "options": [
      "Ferrets",
      "Birds",
      "Dogs",
      "Cats"
    ],
    "correctIndex": 3
  },
  {
    "question": "I ran from my bathroom into the kitchen where I decided to eat breakfast to calm my nerves. Unfortunately, my aichmophobia was provoked when I opened the silverware drawer. What was I afraid of?",
    "options": [
      "Spiders",
      "Pointed objects",
      "Rattling sounds",
      "Crumbs"
    ],
    "correctIndex": 1
  },
  {
    "question": "My husband came downstairs dressed for work, thus setting off my coulrophobia. What was I afraid of?",
    "options": [
      "Hair gel",
      "Uniforms",
      "Clowns",
      "Ties"
    ],
    "correctIndex": 2
  },
  {
    "question": "I ran outside but stopped dead due to my anthophobia. What was I afraid of?",
    "options": [
      "Pollen",
      "Paved roads",
      "Neighbors",
      "Flowers"
    ],
    "correctIndex": 3
  },
  {
    "question": "I tried to run away, but I couldnt get far due to my agyrophobia. What was I afraid of?",
    "options": [
      "Getting a muscle cramp",
      "Crossing roads",
      "Grass",
      "Driving"
    ],
    "correctIndex": 1
  },
  {
    "question": "I decided to return home, but when I walked in the front door there was a party in progress and my choreophobia caused me to panic yet again. What was I afraid of?",
    "options": [
      "Balloons",
      "Loud music",
      "Dancing",
      "Crowds"
    ],
    "correctIndex": 2
  },
  {
    "question": "I ran to my room and my daughter brought me a bowl of vegetable soup, but I couldnt eat it due to my phagophobia. What was I afraid of?",
    "options": [
      "Liquids",
      "Swallowing",
      "Hot objects",
      "Celery"
    ],
    "correctIndex": 1
  },
  {
    "question": "I went to my closet to get dressed for work, but this threw me into a panic due to my decidophobia. What was I afraid of?",
    "options": [
      "Shoes",
      "Making decisions",
      "Clothing",
      "Getting undressed"
    ],
    "correctIndex": 1
  },
  {
    "question": "I sat back down on my bed and looked around my room. This triggered my autophobia. What was I afraid of?",
    "options": [
      "Being late for work",
      "Being alone",
      "Dust",
      "An unmade bed"
    ],
    "correctIndex": 1
  },
  {
    "question": "I was trying to calm myself when my mind settled on my greatest fear, defined as taphopobia. I freaked out. What was I afraid of?",
    "options": [
      "Spiders",
      "Being buried alive",
      "Germs",
      "Needles"
    ],
    "correctIndex": 1
  },
  {
    "question": "Well, it was getting dark and I was worn out from the stress of the day, so I decided to get ready for bed. Sadly, this prompted a panic attack due to my ablutophobia. What was I afraid of?",
    "options": [
      "Going to sleep",
      "The dark",
      "Pajamas",
      "Bathing"
    ],
    "correctIndex": 3
  },
  {
    "question": "What happens to criminal Johnny Clay at the end of the 1956 movie The Killing, directed by Stanley Kubrick?",
    "options": [
      "He commits suicide.",
      "He is arrested.",
      "He gets killed.",
      "He gets married."
    ],
    "correctIndex": 1
  },
  {
    "question": "The plot of the 1968 Stanley Kubrick movie 2001: A Space Odyssey involves a space mission to which planet of the Solar system?",
    "options": [
      "Jupiter",
      "Pluto",
      "Uranus",
      "Mercury"
    ],
    "correctIndex": 0
  },
  {
    "question": "What celebrity couple starred in Stanley Kubricks 1999 neo-noir psychological thriller movie Eyes Wide Shut?",
    "options": [
      "Brad Pitt and Gwyneth Paltrow",
      "Brad Pitt and Jennifer Aniston",
      "Tom Cruise and Penelope Cruz",
      "Tom Cruise and Nicole Kidman"
    ],
    "correctIndex": 3
  },
  {
    "question": "What actor played three different roles in Stanley Kubricks 1964 movie Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb?",
    "options": [
      "George C. Scott",
      "Slim Pickens",
      "Peter Sellers",
      "Sterling Hayden"
    ],
    "correctIndex": 2
  },
  {
    "question": "What actor portrayed rebellious slave Spartacus in Stanley Kubricks 1960 historical movie Spartacus?",
    "options": [
      "Kirk Douglas",
      "Laurence Olivier",
      "Omar Sharif",
      "Tony Curtis"
    ],
    "correctIndex": 0
  },
  {
    "question": "What catchy tagline was used for the theatrical poster of the 1962 movie Lolita, directed by Stanley Kubrick?",
    "options": [
      "How did they ever make a movie of Lolita?",
      "What on earth were they thinking?",
      "Most scandalous film of all time",
      "She was only a child. Until..."
    ],
    "correctIndex": 0
  },
  {
    "question": "What type of movie is the 1987 Stanley Kubrick film Full Metal Jacket?",
    "options": [
      "Sports movie",
      "War movie",
      "Horror movie",
      "Comedy movie"
    ],
    "correctIndex": 1
  },
  {
    "question": "What movie directed by Stanley Kubrick was nominated for seven Academy Awards?",
    "options": [
      "Fear and Desire",
      "2001: A Space Odyssey",
      "Barry Lyndon",
      "Spartacus"
    ],
    "correctIndex": 2
  },
  {
    "question": "What actor starred in Stanley Kubricks 1980 psychological horror movie The Shining?",
    "options": [
      "Dustin Hoffman",
      "Jack Nicholson",
      "Robert De Niro",
      "Christopher Walken"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the last statement made by Alex at the end of the 1971 Stanley Kubrick movie A Clockwork Orange?",
    "options": [
      "I was cured, all right!",
      "Everything looks blurred...",
      "Nothing on this planet is what it seems to be.",
      "I see the tunnel clearly now."
    ],
    "correctIndex": 0
  },
  {
    "question": "In which of these areas is stretching the neck with neck rings practiced?",
    "options": [
      "Australia",
      "North America",
      "Africa and South America",
      "Africa and Asia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these terms denotes an insertion of an object underneath the skin to create a raised design?",
    "options": [
      "All of these",
      "3-D implantation",
      "Subdermal implantation",
      "Pocketing"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these methods is used in tongue splitting, an example of extreme body modification?",
    "options": [
      "Using a scalpel",
      "Using a surgical laser",
      "Tightening of a nylon bind around a tongue piercing",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Trepanation is a term that denotes making a hole in this part of the body.",
    "options": [
      "Hand",
      "Skull",
      "Eyelid",
      "Foot"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what part of the body is the cosmetic procedure known as corneal tattooing done?",
    "options": [
      "Inside of the lower lip",
      "Genitals",
      "Eyeball",
      "Tongue"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which country was eyeball jewelry, or extraocular implantation, developed in 2002?",
    "options": [
      "The United Kingdom",
      "The U.S.A.",
      "India",
      "The Netherlands"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what geographic area is tooth filing practiced?",
    "options": [
      "The Philippines",
      "All of these",
      "Africa",
      "Indonesia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these procedures is done as a form of ear shaping, which often results in a non-human appearance of the ear?",
    "options": [
      "Pointing",
      "All of these",
      "Amputation",
      "Cutting and cropping"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which of these countries was foot binding practiced?",
    "options": [
      "Vietnam",
      "India",
      "Peru",
      "China"
    ],
    "correctIndex": 3
  },
  {
    "question": "What type of body modification is the artificial cranial deformation, in which a part of the body is reshaped by applying force?",
    "options": [
      "Deformation of the fingers",
      "Deformation of the skull",
      "Deformation of the ribs",
      "Deformation of the toes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these actors starred in the 2009 movie Angels  Demons?",
    "options": [
      "Nicolas Cage",
      "Tom Hanks",
      "Robert De Niro",
      "Dustin Hoffman"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who wrote and performed the 1997 hit song Angels?",
    "options": [
      "Sting",
      "Robbie Williams",
      "George Michael",
      "Elton John"
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of plant is the Angelica?",
    "options": [
      "Herb",
      "Tree",
      "Fern",
      "Shrub"
    ],
    "correctIndex": 0
  },
  {
    "question": "Basketball has always been a physical sport. This player is a record breaker for the most personal fouls in one NBA season.",
    "options": [
      "Darryl Dawkins",
      "Moses Malone",
      "Joe Dumars",
      "Wilt  Chamberlin"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1951, this city set a new record for the most fans at a basketball game.",
    "options": [
      "New York City",
      "Melbourne",
      "Berlin",
      "Los Angeles"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which is the largest active volcano on Earth?",
    "options": [
      "Mount Rainier",
      "Mount Etna",
      "Mauna Loa",
      "Merapi"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 2007, where was a new record for the biggest country flag set?",
    "options": [
      "North Korea",
      "Venezuela",
      "Mexico",
      "Israel"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which was the first music album to sell at least 20 million units?",
    "options": [
      "Led Zeppelin - Led Zeppelin IV",
      "Pink Floyd - The Wall",
      "Billy Joel - Greatest HitsVolumes I and II",
      "AC/DC - Back in Black"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 2005, Danny Way became the first person to do this. In the process he attained a speed of over 50 mph. What did he do?",
    "options": [
      "Eject from an SST",
      "Skateboard over the Great Wall of China",
      "High dive from the Eiffel Tower",
      "Shoot out of a submarine torpedo tube"
    ],
    "correctIndex": 1
  },
  {
    "question": "This was the largest active passenger airplane for 2007.",
    "options": [
      "Sukhoi 27",
      "Boeing 757",
      "Airbus A380",
      "Boeing 747"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Freedom of the Seas was the largest cruise ship for 2007. It is owned by Royal Caribbean. Which statement is NOT true about this ship?",
    "options": [
      "It displaces about 160,000 tons.",
      "It can carry 3,634 passengers.",
      "It is about 1,112 feet (340 m) long by 184 feet (56 m) wide.",
      "It is about as tall as the CN Tower."
    ],
    "correctIndex": 3
  },
  {
    "question": "Sportsman Jerry DePoyster is a record breaker in this category.",
    "options": [
      "Fastest 100 yard dash on roller skates",
      "Longest field goal in an NBA game",
      "Shortest punt in the NFL",
      "Worst pass completion record in an NFL season"
    ],
    "correctIndex": 2
  },
  {
    "question": "The worlds largest swimming pool in 2007 was in this country.",
    "options": [
      "Chile",
      "Morocco",
      "North Korea",
      "Venezuela"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who is the first performer/band to have at least 36 Billboard Top Ten albums?",
    "options": [
      "The Beatles",
      "Elvis Presley",
      "The Rolling Stones",
      "Frank Sinatra"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1963 this soundtrack broke the record for the most weeks as the number one album on the Billboard charts.",
    "options": [
      "The Body Guard",
      "West Side Story",
      "Saturday Night Fever",
      "South Pacific"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these performers/bands has had the number one and number two albums on the Billboard chart twice?",
    "options": [
      "The Rolling Stones",
      "Guns n Roses",
      "Pink Floyd",
      "Frank Sinatra"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first performer to have both the Billboard number one and number two album?",
    "options": [
      "Willie Nelson",
      "Frank Sinatra",
      "Bob Newhart",
      "Johnny Mathis"
    ],
    "correctIndex": 2
  },
  {
    "question": "This was the world\u00e2\u0080\u0099s largest university for 2007 (considering total active enrollment.)",
    "options": [
      "Allama Iqbal Open University",
      "The Ohio State University",
      "Indira Gandhi National Open University",
      "Islamic Azad University"
    ],
    "correctIndex": 0
  },
  {
    "question": "This luxury U.S. car make was founded in 1902 from what had remained from the Henry Ford Company, and in 1909 it was bought by General Motors.",
    "options": [
      "Hummer",
      "Cadillac",
      "Ford",
      "Chevrolet"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first passenger car of this Japanese car make was built in 1936. The brand also operates Lexus and Scion.",
    "options": [
      "Honda",
      "Toyota",
      "Nissan",
      "Yamaha"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1889, this French car brand produced its first automobile, a three-wheeled car powered by steam and designed by Leon Serpollet.",
    "options": [
      "Renault",
      "Bugatti",
      "Peugeot",
      "Citroen"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Italian car make, founded in 1963, has a bull on its emblem.",
    "options": [
      "Lamborghini",
      "Ferrari",
      "Maserati",
      "Alfa Romeo"
    ],
    "correctIndex": 0
  },
  {
    "question": "The founder of this German car brand produced the first petrol-powered motorcycle in the world, as well as the first gasoline-powered automobile.",
    "options": [
      "BMW",
      "Porsche",
      "Mercedes-Benz",
      "Opel"
    ],
    "correctIndex": 2
  },
  {
    "question": "This British car make was founded under the name Swallow Sidecar Company in 1922, and is known for its elegant sports cars and luxury saloons.",
    "options": [
      "Jaguar",
      "Bentley",
      "Rolls-Royce",
      "Land Rover"
    ],
    "correctIndex": 0
  },
  {
    "question": "This American car make was founded in 1911, and was purchased by General Motors in 1917.",
    "options": [
      "Hummer",
      "Ford",
      "Chevrolet",
      "Cadillac"
    ],
    "correctIndex": 2
  },
  {
    "question": "The slogan of this Japanese car make, founded on September 24, 1948, is The Power of Dreams.",
    "options": [
      "Nissan",
      "Suzuki",
      "Honda",
      "Yamaha"
    ],
    "correctIndex": 2
  },
  {
    "question": "What German car make, founded in 1931, is famous for its high performance luxury automobiles?",
    "options": [
      "Volkswagen",
      "Mercedes-Benz",
      "BMW",
      "Porsche"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Italian car brand was founded on June 24, 1910 in Milan. Its badge features a red cross and a serpent devouring a human.",
    "options": [
      "Lancia",
      "Fiat",
      "Ferrari",
      "Alfa Romeo"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where did the first reported attacks of the legendary blood-sucking creature called Chupacabra occur?",
    "options": [
      "Puerto Rico",
      "Brazil",
      "Texas, USA",
      "Nicaragua"
    ],
    "correctIndex": 0
  },
  {
    "question": "In February 2004, In Romania the relatives of a dead man called Toma Petre were terrified of the thought that he had become a vampire. What did they do?",
    "options": [
      "They exhumed his corpse.",
      "They hired a priest to keep an eye on his grave at night.",
      "All of these",
      "They planted garlic on his grave and all around the graveyard."
    ],
    "correctIndex": 0
  },
  {
    "question": "What cruel punishment did Vlad III, Prince of Wallachia, who inspired Bram Stokers 1897 novel Dracula, like to impose?",
    "options": [
      "Skinning alive",
      "Impalement",
      "Burning alive",
      "Blood draining"
    ],
    "correctIndex": 1
  },
  {
    "question": "A popular method of finding a vampires grave involved this animal that would supposedly balk at the grave.",
    "options": [
      "Horse",
      "Chicken",
      "Black cat",
      "Wolf"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these plants was believed to scare off vampires and keep them at bay?",
    "options": [
      "Hyacinth",
      "Wild rose",
      "Dandelion",
      "Parsley"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 2006 a female corpse dating from the 16th century was found near Venice. According to archaeologists the presence of this object in the corpses mouth was the result of a vampire-slaying ritual.",
    "options": [
      "An animal bones",
      "A glass piece",
      "A crucifix",
      "A brick"
    ],
    "correctIndex": 3
  },
  {
    "question": "The African vampiric creature, known as Adze, was believed to take the form of this animal in order to hunt children.",
    "options": [
      "Lizard",
      "Firefly",
      "Snake",
      "Bat"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to Slavic belief, what type of death caused the soul to become unclean and potentially transformed a corpse into a vampire?",
    "options": [
      "Early death",
      "Violent death",
      "Death of an unbaptized person",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these diseases has been connected with vampires, as some of the symptoms were interpreted as vampirism?",
    "options": [
      "Plague",
      "Epilepsy",
      "Rabies",
      "Neurosis"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these serial murderers was nicknamed The Vampire of Sacramento, as he drank the blood and ate the remains of his victims?",
    "options": [
      "Joseph Paul Franklin",
      "Joe Ball",
      "Richard Chase",
      "Jeffrey Dahmer"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the famous (infamous?) philosopher who posited the concept of The Superman(Der Ubermensch).",
    "options": [
      "Marx",
      "Kant",
      "Hegel",
      "Nietzche"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the young actor who starred in 2006s Civic Duty and whose nicknames include Superman and Dodi.",
    "options": [
      "Peter Krause",
      "Khaled Abol Naga",
      "Richard Schiff",
      "Ian Tracy"
    ],
    "correctIndex": 1
  },
  {
    "question": "This concept was popularized in Dostoevskys Notes from the Underground, Pushkins Eugene Onegin and in many of the works of Turgenev.",
    "options": [
      "The Super-Tribe",
      "The Superfluous Man",
      "The Total Man",
      "The Super Race"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who played Clark Kent/Superman in the 1948 Superman movie?",
    "options": [
      "Jack Larsen",
      "George Reeves",
      "Christopher Reeves",
      "Kirk Alyn"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does C.W. Ettingers book Man into Superman deal with?",
    "options": [
      "Putting computers into humans",
      "Cryogenics",
      "Transplanting animal organs into humans",
      "Transplanting human organs"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following starred in the movie Superfly?",
    "options": [
      "Ron ONeal",
      "Louis Gossett",
      "Richard Roundtree",
      "Levar Burton"
    ],
    "correctIndex": 0
  },
  {
    "question": "What phobia means fear of making decisions?",
    "options": [
      "Deipnophobia",
      "Defecaloesiophobia",
      "Dementophobia",
      "Decidophobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What phobia is referred as fear of houses?",
    "options": [
      "Dishabiliophobia",
      "Dysmorphophobia",
      "Domatophobia",
      "Doraphobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What term means fear of skin diseases?",
    "options": [
      "Dextrophobia",
      "Dermatosiophobia",
      "Dermatophobia",
      "Dentophobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Dinophobia is defined as fear of stories about dinosaurs.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does demophobia mean?",
    "options": [
      "Fear of insanity",
      "Fear of crowds",
      "Fear of demons",
      "Fear of trees"
    ],
    "correctIndex": 1
  },
  {
    "question": "Elurophobia means fear of cats.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the word for fear of horses?",
    "options": [
      "Equinophobia",
      "Ereuthrophobia",
      "Eremophobia",
      "Epistemophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "This phobia is known as the fear of criticism.",
    "options": [
      "Ephebiphobia",
      "Entomophobia",
      "Enosiophobia",
      "Eosophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Fear of riding a taxi is referred as epistaxiophobia.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is known as the fear of electricity?",
    "options": [
      "Eleutherophobia",
      "Electrophobia",
      "Emetophobia",
      "Enetophobia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What do  the male name Thomas and its derivatives Tom, Thom, Tomas, Tomm all mean?",
    "options": [
      "Brave",
      "Doubt",
      "Soldier",
      "Twin"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the meaning of the names Paul, Paula, Paulina, Pablo, Paulo, Paolo?",
    "options": [
      "Small, humble",
      "Sacred, hallowed",
      "Gtreat",
      "Stubborn, obstinate"
    ],
    "correctIndex": 0
  },
  {
    "question": "What do the names Matthew, Mathew, Matt and Mat mean?",
    "options": [
      "Preacher",
      "God is merciful",
      "Holy star",
      "Gift of God"
    ],
    "correctIndex": 3
  },
  {
    "question": "The popular female names Alice, Alicia and Alisha, all mean what?",
    "options": [
      "Spite",
      "Whole",
      "Incarnation",
      "Nobility"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the meaning of the female names Anastasia, Anastacia, Stacy, Nastassja, Nastia?",
    "options": [
      "Martyr",
      "Angelic",
      "Resurrection",
      "River"
    ],
    "correctIndex": 2
  },
  {
    "question": "The names Robert, Robbie, Rob, Robin, Robyn, Roberto, Bert, refer to what?",
    "options": [
      "Long way",
      "Honorable master",
      "Mighty warrior",
      "Bright fame"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the meaning of the names Emily, Emma, Amelie, Amelia, Em, Emmie?",
    "options": [
      "Spice",
      "Sympathy",
      "Justice",
      "Rival"
    ],
    "correctIndex": 3
  },
  {
    "question": "What do the names Henry, Harry, Harrison, Hal, Hank, Enrique mean?",
    "options": [
      "Home ruler",
      "Victorious warrior",
      "Active in battle",
      "Abundant land"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the origin of the popular feminine names Susanna, Susan, Sue, Suzie, Sanna?",
    "options": [
      "Greek",
      "Persian",
      "Hebrew",
      "Old Germanic"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the meaning of the popular names Joseph, Josephine, Jose, Josef, Joe, Joey?",
    "options": [
      "The Lord is merciful.",
      "The Lord will add.",
      "The Lord is with us.",
      "The Lord loves us."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which set of numbers is most significant to baseball?",
    "options": [
      "3,4,9",
      "1,83,26",
      "9,13,26",
      "1,7,17"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which year is most significant to Napoleon Bonaparte?",
    "options": [
      "1700 AD",
      "1600 AD",
      "1800 AD",
      "2525 AD"
    ],
    "correctIndex": 2
  },
  {
    "question": "Do all of the U.S. Armed Forces have the rank of General?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "There is no limit to how many persons with rank General can be in service in the U.S. Armed Forces at one time.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This U.S. general, born in Little Rock Arkansas, fought in 3 major wars (World War I, World War II, Korean War) and was one of the few men ever to rise to the rank of General of the Army.",
    "options": [
      "Omar Bradley",
      "Dwight Eisenhower",
      "Colin Powell",
      "Douglas MacArthur"
    ],
    "correctIndex": 3
  },
  {
    "question": "Before 2008 a female had not attained the rank of a 4-Star General in U.S. history.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This General, born in Wynnewood Oklahoma, was the U.S. general leading the attack on the Taliban in Afghanistan in response to the September 11th 2001 attacks on the World Trade Center and The Pentagon.",
    "options": [
      "Matthew Ridgeway",
      "Donald Rumsfeld",
      "Tommy Franks",
      "Colin Powell"
    ],
    "correctIndex": 2
  },
  {
    "question": "This famous general is considered to be one of the most gifted tactical commanders in United States history. He excelled at the First Battle of Bull Run (where he received his famous nickname), Antietam, and Fredericksburg. Who is he?",
    "options": [
      "Robert E Lee",
      "Ulysses S. Grant",
      "Tommy Richardson",
      "Thomas Jonathon Jackson"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which general born in New York in 1954 was elected the 10th Commander of the U.S. Central Command?",
    "options": [
      "George Patton",
      "Lloyd Wright",
      "Wesley Clark",
      "David Petraeus"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the cause of the Malaysia Airlines Flight 653 crash on 4 December 1977?",
    "options": [
      "Storm",
      "All of these",
      "Engine malfunction",
      "Hijacking"
    ],
    "correctIndex": 3
  },
  {
    "question": "What caused the tragedy with the Saudia Flight 163 on August 19, 1980?",
    "options": [
      "The pilot fell asleep.",
      "Fog",
      "A bird",
      "Fire"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about the Pan Am Flight 759 disaster that happened on July 9, 1982?",
    "options": [
      "All of these",
      "153 people were killed.",
      "There was only one survivor.",
      "It was flying from Miami to Las Vegas."
    ],
    "correctIndex": 0
  },
  {
    "question": "Where did the South African Airways Flight 295 crash on 28 November 1987?",
    "options": [
      "Madagascar",
      "Mediterranean sea",
      "Indian ocean",
      "Morocco"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the cause of one of the deadliest airplane disasters in history that happened on 26 April 1994 with China Airlines Flight 140?",
    "options": [
      "Overload",
      "Fire",
      "Pilot error",
      "All of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "What did the American Airlines Flight 965 crash into on December 20, 1995 in Colombia?",
    "options": [
      "Another plane",
      "Mountain",
      "Village",
      "Skyscraper"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which of these New York City neighborhoods did the American Airlines Flight 587 crash on November 12, 2001?",
    "options": [
      "Queens",
      "The Bronx",
      "Brooklyn",
      "Manhattan"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the reason for the crash of West Caribbean Airways Flight 708 in Venezuela on August 16, 2005?",
    "options": [
      "Running out of fuel",
      "Engine trouble",
      "Bomb explosion",
      "Hijacking"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where did the TAM Airlines Flight 3054 deadly accident from July 17, 2007 occur?",
    "options": [
      "Jamaica",
      "Brazil",
      "United States",
      "Tahiti"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the destination of the Air France Flight 447 that crashed on June 1, 2009 in the Atlantic Ocean?",
    "options": [
      "Los Angeles, California, USA",
      "Ottawa, Canada",
      "Rio de Janeiro, Brazil",
      "Paris, France"
    ],
    "correctIndex": 3
  },
  {
    "question": "The birthstone of this month is the emerald, and its birth flower is Lily of the Valley.",
    "options": [
      "May",
      "July",
      "September",
      "November"
    ],
    "correctIndex": 0
  },
  {
    "question": "The birthstone of this month is the yellow topaz, and its birth flower is the chrysanthemum.",
    "options": [
      "December",
      "January",
      "March",
      "November"
    ],
    "correctIndex": 3
  },
  {
    "question": "What month has the garnet for its birthstone and the snowdrop for its birth flower?",
    "options": [
      "April",
      "January",
      "March",
      "February"
    ],
    "correctIndex": 1
  },
  {
    "question": "The diamond is chosen as the birthstone of this month.",
    "options": [
      "August",
      "March",
      "April",
      "December"
    ],
    "correctIndex": 2
  },
  {
    "question": "The symbols of this month are the sapphire and the forget-me-not.",
    "options": [
      "September",
      "July",
      "February",
      "December"
    ],
    "correctIndex": 0
  },
  {
    "question": "What month has the pearl for its birthstone and the rose for its birth flower?",
    "options": [
      "May",
      "July",
      "March",
      "June"
    ],
    "correctIndex": 3
  },
  {
    "question": "The amethyst is the symbol and birthstone of this month.",
    "options": [
      "September",
      "April",
      "July",
      "February"
    ],
    "correctIndex": 3
  },
  {
    "question": "The turquoise and poinsettia are symbols of this winter month.",
    "options": [
      "January",
      "February",
      "All of these",
      "December"
    ],
    "correctIndex": 3
  },
  {
    "question": "Narcissus is the birth flower of this month, and its birthstone is the aquamarine.",
    "options": [
      "July",
      "March",
      "May",
      "October"
    ],
    "correctIndex": 1
  },
  {
    "question": "The calendula, or marigold and the opal are the symbols of this month.",
    "options": [
      "November",
      "October",
      "February",
      "June"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which wedding anniversary is celebrated internationally as the Diamond Wedding Anniversary, or Diamond Wedding Day?",
    "options": [
      "60th anniversary",
      "80th anniversary",
      "50th anniversary",
      "40th anniversary"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the term baseball diamond denote?",
    "options": [
      "An award",
      "A female baseball player",
      "Baseball field",
      "A title given to the greatest baseball players"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the meaning of the term blood diamond?",
    "options": [
      "Diamond used for financing wars",
      "Red diamond",
      "Stolen diamond",
      "Diamond for which somebody has died"
    ],
    "correctIndex": 0
  },
  {
    "question": "What geographical area does the Diamond Dove populate?",
    "options": [
      "Australia",
      "Europe",
      "Asia",
      "South America"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the title of the movie in which Marilyn Monroe famously sings the song Diamonds Are a Girls Best Friend?",
    "options": [
      "The Prince and the Showgirl",
      "Some Like It Hot",
      "Gentlemen Prefer Blondes",
      "How to Marry a Millionaire"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the word diamond literally mean?",
    "options": [
      "Magical",
      "Stone",
      "Light",
      "Unbreakable"
    ],
    "correctIndex": 3
  },
  {
    "question": "What actor portrayed James Bond in the 1971 movie Diamonds Are Forever?",
    "options": [
      "George Lazenby",
      "Roger Moore",
      "Timothy Dalton",
      "Sean Connery"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the US, a record can be certified diamond, if it sells this number of copies.",
    "options": [
      "50 million",
      "10 million",
      "5 million",
      "20 million"
    ],
    "correctIndex": 1
  },
  {
    "question": "What Hollywood actor starred in the 2006 movie Blood Diamond?",
    "options": [
      "Leonardo DiCaprio",
      "Tom Cruise",
      "All of these",
      "Johnny Depp"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of a successful American musician, nicknamed The Jewish Elvis?",
    "options": [
      "Neil Diamond",
      "Billy Diamond",
      "Rodger Diamond",
      "Walter Diamond"
    ],
    "correctIndex": 0
  },
  {
    "question": "Topic: Name the Videogame. Characters: Samanosuke Akechi, Princess Yuki,  Nobunaga. What is the right question?",
    "options": [
      "What is Devil May Cry?",
      "What is Tenchu: Wrath of Heaven?",
      "What is Genji: Dawn of the Samurai?",
      "What is Onimusha?"
    ],
    "correctIndex": 3
  },
  {
    "question": "Topic: X-Men: This mutant has the ability to teleport. He has blue skin and a tail. His nickname is Nightcrawler. What is the right question?",
    "options": [
      "Who is Kurt Wagner?",
      "Who is Eric Lensherr?",
      "Who is Scott Summers?",
      "Who is Bobby Drake"
    ],
    "correctIndex": 0
  },
  {
    "question": "Topic: Fast Foods: This restaurant carries Chicken Tenders, Burger Shots and the Double Croissanwich. Ask the right question.",
    "options": [
      "What is Jack in the Box?",
      "What is Wendys?",
      "What is Burger King?",
      "What is Arbys?"
    ],
    "correctIndex": 2
  },
  {
    "question": "Topic: Childrens Books. This series, written by Marc Brown, stars this bespectacled aardvark. What is the right question?",
    "options": [
      "Who is Arthur?",
      "Who is Junie B. Jones?",
      "Who is Captain Underpants?",
      "Who is Curious George?"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Opel company was founded in 1863 and began making cars in 1899. What was the first name of its founder Opel?",
    "options": [
      "Heinrich",
      "Friedrich",
      "Ludwig",
      "Adam"
    ],
    "correctIndex": 3
  },
  {
    "question": "What did Opel manufacture before it began making cars in 1899?",
    "options": [
      "boats and steam engines",
      "sewing machines and bicycles",
      "televisions and motorcycles",
      "radio receivers and airplanes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Opel first showed cars of their own design in 1902 at this motor show in Germany.",
    "options": [
      "Hamburg Motor Show",
      "Internationale Automobil-Ausstellung, Frankfurt",
      "Hanover Motor Show",
      "Auto Mobil International, Leipzig"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these important events in the history of Opel happened in 1924?",
    "options": [
      "Opel installed Germanys first car production line.",
      "all of these",
      "The company was destroyed by a fire.",
      "Opel opened its first factory outside Germany."
    ],
    "correctIndex": 0
  },
  {
    "question": "What company bought Opel in 1931?",
    "options": [
      "FIAT",
      "Darracq S.A.",
      "Chrysler",
      "General Motors"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is the name under which Opel designs are sold in the UK?",
    "options": [
      "Saturn",
      "Vauxhall",
      "Holden",
      "Chevrolet"
    ],
    "correctIndex": 1
  },
  {
    "question": "Soon after WWII, this Opel model was transferred to the Soviet Union and formed the basis for the Soviet car Moskvitch 400/420.",
    "options": [
      "Arena",
      "Vectra",
      "Kadett",
      "Rekord"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the original logo of Opel?",
    "options": [
      "a truck",
      "a zeppelin",
      "none of these",
      "a lightening bolt"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of the light trucks the Opel company began making in 1930?",
    "options": [
      "Man",
      "Blitz",
      "Magirus",
      "Daimler"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where did Opel open a factory in 1982 for production of the Opel Corsa?",
    "options": [
      "Leuven, Belgium",
      "Poznan, Poland",
      "Zaragoza, Spain",
      "Azambuja, Portugal"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Japanese car brand is among the largest automobile producers on the planet. It was founded in 1909 under a slightly different name.",
    "options": [
      "Mazda",
      "Isuzu",
      "Suzuki",
      "Nissan"
    ],
    "correctIndex": 2
  },
  {
    "question": "This French car manufacturer also produces vans, buses, tractors, and trucks. The brand was established in 1899.",
    "options": [
      "None of these",
      "Peugeot",
      "Citroen",
      "Bugatti"
    ],
    "correctIndex": 0
  },
  {
    "question": "This German car brand, founded in 1919, is nicknamed Beamer in English.",
    "options": [
      "Volkswagen",
      "BMW",
      "Opel",
      "Audi"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Italian manufacturer of sports cars was founded in 1929, and in 1947 it started producing street-legal vehicles.",
    "options": [
      "Maserati",
      "None of these",
      "Ferrari",
      "Lamborghini"
    ],
    "correctIndex": 2
  },
  {
    "question": "This British car manufacturer produces high performance vehicles. The company was founded in 1989.",
    "options": [
      "Land Rover",
      "Rolls-Royce",
      "Jaguar",
      "McLaren"
    ],
    "correctIndex": 3
  },
  {
    "question": "This U.S. automobile brand produces off-road vehicles, and was established in 1992.",
    "options": [
      "Ram",
      "Jeep",
      "Maxwell",
      "Hummer"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Japanese car make was established in 1970, but the first automobile of the brand was released in 1917.",
    "options": [
      "Mazda",
      "Nissan",
      "Mitsubishi",
      "Suzuki"
    ],
    "correctIndex": 2
  },
  {
    "question": "This French car make was the first outside of the USA to produce automobiles for mass usage.",
    "options": [
      "Renault",
      "Citroen",
      "None of these",
      "Peugeot"
    ],
    "correctIndex": 1
  },
  {
    "question": "This German car brand was founded by August Horch in 1909.",
    "options": [
      "Opel",
      "BMW",
      "Smart",
      "Audi"
    ],
    "correctIndex": 3
  },
  {
    "question": "What Italian car make was established on July 11, 1899 in Turin, Italy by Giovanni Agnelli?",
    "options": [
      "Lancia",
      "Alfa Romeo",
      "Fiat",
      "Maserati"
    ],
    "correctIndex": 2
  },
  {
    "question": "What were the names of the two eccentric women who lived at the estate known as Grey Gardens?",
    "options": [
      "Edith and Edie Beale",
      "Elizabeth and Victoria Vanderbilt",
      "Natalia and Anna Carlisle",
      "Beatrice and Josephine Rockerfeller"
    ],
    "correctIndex": 0
  },
  {
    "question": "What first lady was the famous cousin of the daughter living at Grey Gardens?",
    "options": [
      "Eleanor Roosevelt",
      "Mamie Eisenhower",
      "Jacqueline Kennedy",
      "Nancy Reagan"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the name of the street on which the Grey Gardens estate was located?",
    "options": [
      "Mallard Way",
      "Lily Pond Lane",
      "Pebblestone Drive",
      "Ocean View Avenue"
    ],
    "correctIndex": 1
  },
  {
    "question": "The village of East Hampton was shocked upon learning that the two eccentric occupants of the dilapidated Grey Gardens estate were harboring not only cats, but what unusual animals in their attic?",
    "options": [
      "Raccoons",
      "Chickens",
      "Bats",
      "Goats"
    ],
    "correctIndex": 0
  },
  {
    "question": "What were the first names of the brothers who directed the documentary about Grey Gardens?",
    "options": [
      "Alfred and David",
      "Albert and John",
      "David and John",
      "Albert and David"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the documentary Grey Gardens, Edie shows a photograph of her younger days as a model and says that it hung in a very unusual place. Where?",
    "options": [
      "At the perfume counter in Tiffanys",
      "In the ladies room at Sax Fifth Avenue",
      "In the elevator at Macys",
      "In the front window of Lord and Taylor"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the name of the friend and neighbor featured in the documentary Grey Gardens who was an accomplished artist and known as the palmist of East Hampton?",
    "options": [
      "Eloise Gardner",
      "Lois Wright",
      "Louise Fletcher",
      "Madam Louise"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which cat was not referenced in the documentary Grey Gardens by either of the women?",
    "options": [
      "Whiskers",
      "Pinky",
      "Champion",
      "Snowflake"
    ],
    "correctIndex": 3
  },
  {
    "question": "The film Grey Gardens premiered at what New York theater?",
    "options": [
      "The Bijou",
      "The Imperial",
      "The Paris",
      "The Berlin"
    ],
    "correctIndex": 2
  },
  {
    "question": "At what New York nightclub did American socialite Little Edie have a cabaret act for about two weeks?",
    "options": [
      "Irma Le Deuce",
      "Reno Sweeny",
      "The Gay Parie",
      "Les Follies"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the color of pure gold, which it maintains without oxidizing in air and water?",
    "options": [
      "Bright yellow",
      "Pale yellow",
      "Pale orange-yellow",
      "Ivory"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about the properties of gold?",
    "options": [
      "It is unaffected by air and moisture",
      "All of these",
      "It is chemically inert",
      "It dissolves in nitric acid"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what form is gold added to some expensive dishes, especially sweets and drinks?",
    "options": [
      "Gold leaf",
      "Gold flakes",
      "All of these",
      "Gold dust"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the treatment of what serious disease is the isotope gold-198 used?",
    "options": [
      "Cancer",
      "Rabies",
      "Alzheimers disease",
      "AIDS"
    ],
    "correctIndex": 0
  },
  {
    "question": "For what medical condition is non-metallic gold beneficial, according to some studies?",
    "options": [
      "Tuberculosis",
      "Rheumatoid arthritis",
      "Inflammation",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these facts refers to gold in its metallic form?",
    "options": [
      "It is the most malleable of all metals",
      "It is not a good conductor of electricity",
      "All of these",
      "I is a good insulator of heat"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which of these everyday activities and industrial areas is gold sometimes used?",
    "options": [
      "All of these",
      "Embroidery",
      "Glass industry",
      "Photography"
    ],
    "correctIndex": 0
  },
  {
    "question": "What country is the largest consumer of gold in the world?",
    "options": [
      "South Africa",
      "India",
      "United Arab Emirates",
      "China"
    ],
    "correctIndex": 1
  },
  {
    "question": "What internal organs are some gold salts, such as potassium gold cyanide, toxic for?",
    "options": [
      "All of these",
      "Brain and skin",
      "Lungs",
      "Kidneys and liver"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these countries is a major producer of gold?",
    "options": [
      "South Africa",
      "China",
      "United States",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "This US states name means People of the south wind. The buffalo and the honeybee are just two of its symbols. It is located equidistant from the Pacific and the Atlantic Ocean. Susanna Salter (the first woman mayor in the US) was elected mayor of a city in this state.",
    "options": [
      "Wyoming",
      "Nebraska",
      "Utah",
      "Kansas"
    ],
    "correctIndex": 3
  },
  {
    "question": "The fastest growing nail is on this finger.",
    "options": [
      "Thumb",
      "Index finger",
      "All nails grow at the same speed",
      "Middle finger"
    ],
    "correctIndex": 3
  },
  {
    "question": "Sound travels more swiftly through air than through steel.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "George Washington, Thomas Jefferson, and John Adams were all avid players of this game.",
    "options": [
      "Hide and seek",
      "Scrabble",
      "Monopoly",
      "Marbles"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this country one out of ten people owns a bicycle.",
    "options": [
      "Belgium",
      "Denmark",
      "Sweden",
      "France"
    ],
    "correctIndex": 1
  },
  {
    "question": "In order to preserve their elaborate coiffures, these women slept with their heads on bags filled with buckwheat chaff.",
    "options": [
      "Oracles in Africa",
      "Queens in Britain",
      "First Ladies in the US",
      "Geishas in Japan"
    ],
    "correctIndex": 3
  },
  {
    "question": "In parts of Japan, if a black cat crosses your path, it means you will be very lucky.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ailurophobia is fear of these animals.",
    "options": [
      "Horses",
      "Cats",
      "Dogs",
      "Fish"
    ],
    "correctIndex": 1
  },
  {
    "question": "Finish the proverb:",
    "options": [
      "...not made.",
      "...but thats not for sure.",
      "..., long live the poets!",
      "...but can also be made."
    ],
    "correctIndex": 0
  },
  {
    "question": "The first product to have a bar code was this.",
    "options": [
      "Gum",
      "Oil",
      "Flour",
      "Wine"
    ],
    "correctIndex": 0
  },
  {
    "question": "All US Presidents have worn glasses.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ernest Vincent Wright wrote a book, called Gadsby, which consisted of 50,000 words, none of which contained this letter.",
    "options": [
      "O",
      "I",
      "E",
      "A"
    ],
    "correctIndex": 2
  },
  {
    "question": "Neil Armstrong stepped on the moon with his right foot on first.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "On average, a 4-year-old child asks approximately this number of questions a day.",
    "options": [
      "126",
      "371",
      "74",
      "437"
    ],
    "correctIndex": 3
  },
  {
    "question": "Benito Mussolini, Napoleon Bonaparte, Alexander the Great, and Julius Caesar were all afraid of these animals.",
    "options": [
      "Dogs",
      "Horses",
      "Cats",
      "Mice"
    ],
    "correctIndex": 2
  },
  {
    "question": "The third largest landowner in New York City.",
    "options": [
      "Donald Trump",
      "City Council",
      "New York University",
      "NYPD"
    ],
    "correctIndex": 2
  },
  {
    "question": "By US law, employees do not have to wash hands after sneezing.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This talk show host and entertainer began his career as a member of Freddy Martins orchestra, but became popular with nightclub audiences as a solo act. His song, Ive Got a Lovely Bunch of Coconuts became a number one hit.",
    "options": [
      "Fred Cordova",
      "Merv Griffin",
      "David Geffen",
      "Jerry Lewis"
    ],
    "correctIndex": 1
  },
  {
    "question": "This group was formed in Detroit, Michigan and its original members were Otis Williams, Melvin Franklin, Paul Williams, Elbridge Al Bryant, and Eddie Kendricks.",
    "options": [
      "The Drifters",
      "The Coasters",
      "The Juve Five",
      "The Temptations"
    ],
    "correctIndex": 3
  },
  {
    "question": "The term hippopotomonstrosesquippedaliophobia means abnormal fear of what?",
    "options": [
      "River animals",
      "Long words",
      "Large animals",
      "Pachyderms"
    ],
    "correctIndex": 1
  },
  {
    "question": "New York Alki was a settlement which became part of which US city?",
    "options": [
      "Atlanta",
      "Orono",
      "Seattle",
      "Savannah"
    ],
    "correctIndex": 2
  },
  {
    "question": "This US city, whose original name was Terminus, is the county seat of Fulton County.",
    "options": [
      "Atlanta",
      "Omaha",
      "Savannah",
      "Orono"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the meaning of the word albedo, which comes from Latin?",
    "options": [
      "A bright region on the suns chromosphere",
      "A value for the reflectivity of an object",
      "A disease afflicting canines in which the fur around the tail falls out",
      "An adjustment to a projectiles flight using retro-rockets"
    ],
    "correctIndex": 1
  },
  {
    "question": "The town of Pilsen, famous for the production of beer, is situated in western Bohemia, in the Czech Republic. It became a town in 1295 when it received its civic charter from which ruler?",
    "options": [
      "Jan Hus",
      "Napoleon",
      "King Wenceslaus II",
      "Rudolf II"
    ],
    "correctIndex": 2
  },
  {
    "question": "In L.A. Dragnet, which is a 2003 remake of the TV series Dragnet, detective Joe Friday was portrayed by which actor?",
    "options": [
      "Ed Burrows",
      "Ed ONeil",
      "Ed Burns",
      "Ed Norton"
    ],
    "correctIndex": 1
  },
  {
    "question": "This actor and director, who took the name Broncho Billy, is best-known as the first star of the Western film genre.",
    "options": [
      "Tim Holt",
      "Max H. Aronson",
      "Tom Mix",
      "Charlie Chaplin"
    ],
    "correctIndex": 1
  },
  {
    "question": "This actor, who graduated from Yale University in 1991, received a Golden Globe for his role in 1996 movie Primal Fear.",
    "options": [
      "Ron Livingston",
      "Edward Norton",
      "Matt Damon",
      "Ed Burns"
    ],
    "correctIndex": 1
  },
  {
    "question": "One of the most important buildings in the US - the White House, was gutted in this year.",
    "options": [
      "1787",
      "1814",
      "1843",
      "1912"
    ],
    "correctIndex": 1
  },
  {
    "question": "The white pages are a telephone directory listing of the telephone numbers of these entities.",
    "options": [
      "Government officials",
      "Businessmen",
      "Policemen",
      "Ordinary subscribers"
    ],
    "correctIndex": 3
  },
  {
    "question": "There is hardly any one who has not heard the fairy-tale of Snow White. Who was it written by?",
    "options": [
      "Gianni Rodari",
      "Charles Perrault",
      "Hans Christian Andersen",
      "Brothers Grimm"
    ],
    "correctIndex": 3
  },
  {
    "question": "The album Whitesnake 1987 by Whitesnake included three of these songs. Which is the odd one?",
    "options": [
      "Here I Go Again",
      "Fool For Your Loving",
      "Still Of The Night",
      "Is This Love"
    ],
    "correctIndex": 1
  },
  {
    "question": "The author of the White Fang is Jack London.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This actor starred in the Hollywood production White Noise (2005).",
    "options": [
      "Tom Hanks",
      "Michael Keaton",
      "Nicolas Cage",
      "John Travolta"
    ],
    "correctIndex": 1
  },
  {
    "question": "If you wish to surrender, you will do one of these white things.",
    "options": [
      "You will drive a white car.",
      "You will visit the White House.",
      "You will wear white underwear.",
      "You will raise a white flag."
    ],
    "correctIndex": 3
  },
  {
    "question": "Doctor Dolittle is the central character of a series of childrens books by this author.",
    "options": [
      "J. K. Rowling",
      "Lewis Carroll",
      "L. Frank Baum",
      "Hugh Lofting"
    ],
    "correctIndex": 3
  },
  {
    "question": "Dr. Ross Geller from the TV show Friends teaches paleontology at this university in New York City.",
    "options": [
      "Rockefeller University",
      "Columbia University",
      "New York University",
      "Fordham University"
    ],
    "correctIndex": 2
  },
  {
    "question": "Dr. Watson is the sidekick of Sherlock Holmes. Do you know his first name?",
    "options": [
      "Oscar",
      "John",
      "George",
      "William"
    ],
    "correctIndex": 1
  },
  {
    "question": "Doctor Zhivago is a character from a novel of the same name by Boris Pasternak. This is the historical background of the story in the book.",
    "options": [
      "The USSRs collapse",
      "WWII",
      "Russian Revolution",
      "Brezhnevs reign"
    ],
    "correctIndex": 2
  },
  {
    "question": "Dr. Susan Calvin, the main character of many short stories, is a robopsychologist.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dr. Quinn, Medicine Woman works in this town.",
    "options": [
      "Boston",
      "Denver",
      "Fort Collins",
      "Colorado Springs"
    ],
    "correctIndex": 3
  },
  {
    "question": "Frankenstein is the name of a doctor from a famous novel by Mary Shelley.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Strange Case of Dr. Jekyll and Mr. Hyde is a novella written by this person.",
    "options": [
      "Robert Louis Stevenson",
      "Thomas Hardy",
      "Neil Gaiman",
      "John Fowles"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which is the only UN member not allowed to be on the Security Council?",
    "options": [
      "The Congo",
      "Israel",
      "Vietnam",
      "Sudan"
    ],
    "correctIndex": 1
  },
  {
    "question": "The sewing machine was invented in a dream.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who drew the first pollitical cartoon published in an American newspaper?",
    "options": [
      "Ben Franklin",
      "Samuel Freeman",
      "Dr. Seuss",
      "Thomas Nast"
    ],
    "correctIndex": 0
  },
  {
    "question": "Of which major city was Tammany Hall the leading political power brokers?",
    "options": [
      "New York",
      "Boston",
      "Detroit",
      "Chicago"
    ],
    "correctIndex": 0
  },
  {
    "question": "Approximately how fast can a sneeze travel?",
    "options": [
      "500 miles an hour",
      "100 miles per hour",
      "100 feet per hour",
      "50 feet an hour"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately how long does it take a fingernail to grow from the base to the tip?",
    "options": [
      "6 days",
      "6 months",
      "6 weeks",
      "2 months"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does an average single fetus acquire at the age of three months?",
    "options": [
      "hair",
      "fingerprints",
      "earlobes",
      "feet"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was Bachs reason in writing the Etudes?",
    "options": [
      "Earn money  - they were sold as study  pieces",
      "Show that the harpsichord was inferior to the piano",
      "Show that he could compose easy pieces, thereby promoting a large number of students to his study",
      "Keep his children occupied"
    ],
    "correctIndex": 3
  },
  {
    "question": "Classical composer Chopin had a lover named George.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why was the name Mercedes added to Benz?",
    "options": [
      "No one knows",
      "To make it more appealing to the French",
      "To make it more feminine",
      "To make it compete with Ford"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which word refers to a person who stuffs and mounts animals for display or study?",
    "options": [
      "Hunter",
      "Taxidermist",
      "None of these",
      "Poacher"
    ],
    "correctIndex": 1
  },
  {
    "question": "M16 is the U.S. military designation for a family of rifles that had a field trial in the early 1960s in what war?",
    "options": [
      "Civil War",
      "Gulf War",
      "Vietnam War",
      "Korean War"
    ],
    "correctIndex": 2
  },
  {
    "question": "This American shoe company, that offered a job to basketball player Chuck Taylor, was opened  in Malden, Massachusetts in 1908.",
    "options": [
      "Nike",
      "Converse",
      "Airbound",
      "Rebound"
    ],
    "correctIndex": 1
  },
  {
    "question": "Tigers are native to what continent?",
    "options": [
      "Australia",
      "Africa",
      "Asia",
      "America"
    ],
    "correctIndex": 2
  },
  {
    "question": "The ampere is a physical unit measuring what?",
    "options": [
      "Resistance in wire",
      "Electric current",
      "Speed of Electrons",
      "Voltage"
    ],
    "correctIndex": 1
  },
  {
    "question": "The cross on the Swiss flag is red.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many balls are on the snooker table at the beginning of the game?",
    "options": [
      "20",
      "15",
      "19",
      "22"
    ],
    "correctIndex": 3
  },
  {
    "question": "Is the word fish both a noun and a verb?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "What bird can be associated with the infectious disease Varicella?",
    "options": [
      "Crane",
      "Hen",
      "Chicken",
      "Blue jay"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the missing word in these lyrics taken from a traditional folk song of the Southern United States?",
    "options": [
      "Texas",
      "Kansas",
      "Jasper",
      "Mine"
    ],
    "correctIndex": 0
  },
  {
    "question": "What are the lights in our homes wired in?",
    "options": [
      "circuits",
      "parallel",
      "pairs",
      "series"
    ],
    "correctIndex": 1
  },
  {
    "question": "The telephone handset has two main parts. One is the mouthpiece or transmitter. What is the other one?",
    "options": [
      "telephone wire",
      "receiver",
      "numbers",
      "handpiece"
    ],
    "correctIndex": 1
  },
  {
    "question": "The traffic lights has three colors. Yellow is in the middle.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many stanzas is The Philippine National Anthem composed of?",
    "options": [
      "4",
      "6",
      "7",
      "5"
    ],
    "correctIndex": 3
  },
  {
    "question": "There are 20 consonants in the English alphabet.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The fat is hot enough to fry in when green smoke rises from the pan.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The normal body temperature is 37.5 \u00baC.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Humans have 33 permanent teeth.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The pitch of the guitar string becomes lower when it is tightened.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many directions does the compass have?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "correctIndex": 3
  },
  {
    "question": "General Santa Anna , loser at San Juancinto and victor at the Alamo, went on to help promote what?",
    "options": [
      "Chewing gum",
      "The Gatling Gun",
      "Tacos",
      "Movies"
    ],
    "correctIndex": 0
  },
  {
    "question": "What type of wood did Noah build the ark out of?",
    "options": [
      "Oak",
      "Ash",
      "Cedar",
      "Gopher"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these animals is considered to have the best immune system?",
    "options": [
      "Vulture",
      "Kangaroo",
      "Asp",
      "Hyman"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these inventions hit the market in 1982?",
    "options": [
      "The flying auto",
      "The  TV remote control",
      "The wireless bra",
      "The compact disk"
    ],
    "correctIndex": 3
  },
  {
    "question": "What album is considered to be the first rap record?",
    "options": [
      "Public Enemys Fight the Power",
      "Ike Turners Jet  88",
      "Sugar Hill Gangss Rappers Delight",
      "Yannick Bruynoghes Big Bills Rap"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who played keyboards on the Beach Boys hits?",
    "options": [
      "Pete  McIntosch",
      "Mike Love",
      "Darryl Dragon",
      "Stan Gibb"
    ],
    "correctIndex": 2
  },
  {
    "question": "Of all the invertebrates, which has the best eyesight?",
    "options": [
      "plankton",
      "octopus",
      "whale",
      "squid"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately what percentage of a jellyfish is water ?",
    "options": [
      "98",
      "95",
      "90",
      "85"
    ],
    "correctIndex": 1
  },
  {
    "question": "In every country in the world, except one, moving the head up and down means yes and moving the head side-to-side means no. In what one nation is that not the case?",
    "options": [
      "Romania",
      "Bulgaria",
      "Kurdistan",
      "Hungary"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was Robert Van Winkle ?",
    "options": [
      "A fictional character who slept for many years",
      "Ice-T",
      "The first winner of the Congressional  Medal of Honor",
      "Vanilla Ice"
    ],
    "correctIndex": 3
  },
  {
    "question": "What did Erik Rotheim invent in 1926?",
    "options": [
      "saccharin",
      "The aerosol spray can",
      "The autopilot",
      "chewing gum"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which is the only US state famous for producing limburger cheese in the Chalet Cheese Co-op factory?",
    "options": [
      "Minnessota",
      "Wisconsin",
      "New York",
      "Ohio"
    ],
    "correctIndex": 1
  },
  {
    "question": "How often can a healthy adult donate blood?",
    "options": [
      "every 6 weeks",
      "every 8 weeks",
      "every 3 months",
      "every 6 months"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which actor plays a 121 years old character who tells a news reporter about his life with the Indians and the battle of Little Big Horn?",
    "options": [
      "Robert Duvall",
      "Gene Hackman",
      "Sir Laurence Olivier",
      "Dustin Hoffman"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who built the famous monument Taj Mahal?",
    "options": [
      "Shah Jehan",
      "Akbar",
      "Aurangzeb",
      "Babur"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which two landlocked countries are surrounded by other landlocked countries?",
    "options": [
      "Liechtenstein and Uzbekistan",
      "Austria and Switzerland",
      "Tajikistan and Liechtenstein",
      "Switzerland and Tajikistan"
    ],
    "correctIndex": 0
  },
  {
    "question": "A tabby is a type of domesticated cat with tiger-like stripes and silky fur. Where does the word tabby come from?",
    "options": [
      "A corruption of Tabitha, a name long associated with cats and the devil",
      "A district of a city in China",
      "A suburb of Baghdad",
      "A corruption of its Latin name"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which movie, set in New York City, was written by Calogero Lorenzo Palminteri and directed by Robert De Niro?",
    "options": [
      "Mad Dog and Glory - 1993",
      "This Boys Life - 1993",
      "Heat - 1995",
      "A Bronx Tale - 1993"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is unusual about the curriculum of St. Helens School in Newbury, Ohio?",
    "options": [
      "Except for Advanced Placement  classes, all classes are taught in Latin.",
      "Studying at least four foreign languages is mandatory.",
      "Unicycling is a mandatory subject.",
      "Although it is a Catholic school, Hebrew is a required subject."
    ],
    "correctIndex": 2
  },
  {
    "question": "Solve for X:",
    "options": [
      "8",
      "24",
      "0",
      "72"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is a moirologist?",
    "options": [
      "A well-dressed woman",
      "A stutterer or stammerer",
      "Someone paid to mourn at a funeral",
      "A trademark used as a generic term"
    ],
    "correctIndex": 2
  },
  {
    "question": "Geologically, we are in the Quaternary Period of the Cenozoic Era. In which geological epoch are we?",
    "options": [
      "Miocene",
      "Eocene",
      "Pliocene",
      "Holocene"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which US state had the most estimated farmland for 2000?",
    "options": [
      "South Dakota",
      "Kansas",
      "Montana",
      "Texas"
    ],
    "correctIndex": 3
  },
  {
    "question": "What invention is credited to American Melville R. Bissell?",
    "options": [
      "Indoor carpeting",
      "The integrated circuit",
      "The carpet sweeper",
      "The vacuum cleaner"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these is best for cooling your mouth if you have just eaten very spicy food?",
    "options": [
      "Water",
      "White wine",
      "Red wine",
      "Milk"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to modern geological theories, there was only one continent about 200 million years ago. What do geologists call it?",
    "options": [
      "Panthalyssia",
      "Pannotia",
      "Pangaea",
      "Rodinia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What are conjugate angles?",
    "options": [
      "Two angles that add up to 90 degrees",
      "Two angles that add up to 360 degrees",
      "Two angles that add up to 180 degrees",
      "Two angles that add up to 0 degrees"
    ],
    "correctIndex": 1
  },
  {
    "question": "Of the 8 major blood types, which is the most common?",
    "options": [
      "AB+",
      "AB-",
      "A+",
      "O+"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which actor sued a Los Angeles magazine for publishing a computer-generated image of him wearing a dress?",
    "options": [
      "Al Pacino",
      "Patrick Swayze",
      "Dustin Hoffman",
      "Weslery Snipes"
    ],
    "correctIndex": 2
  },
  {
    "question": "This country, whose capital city is Tegucigalpa, uses the lempira as its currency.",
    "options": [
      "El Salvador",
      "Bolivia",
      "Nicaragua",
      "Honduras"
    ],
    "correctIndex": 3
  },
  {
    "question": "Ironically the song Video Killed the Radio Star by the Buggles was the first video played on MTV in the USA. Which was the second song aired on the Music Television?",
    "options": [
      "Madonna, Like a Virgin",
      "Dire Straits, Money for Nothing",
      "Michael Jackson, Thriller",
      "Pat Benatar, You Better Run"
    ],
    "correctIndex": 3
  },
  {
    "question": "Neil Armstrong was the first man to walk on the moon on July 20th, 1969. Who was the astronaut that followed him?",
    "options": [
      "John Glenn",
      "Edwin Buzz Aldrin",
      "Charles P. Pete Conrad, Jr.",
      "Edward Smith"
    ],
    "correctIndex": 1
  },
  {
    "question": "John Adams was the second President of the United States. Who was the second Vice-President of the United States?",
    "options": [
      "Thomas Jefferson",
      "John Hancock",
      "John Quincy Adams",
      "Ben Franklin"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Beatles first #1 hit on the US Billboard charts was I Want to Hold Your Hand.  What was their second #1 hit?",
    "options": [
      "Hey Jude",
      "She Loves You",
      "Cant Buy Me Love",
      "Yesterday"
    ],
    "correctIndex": 1
  },
  {
    "question": "George Taliaferro was the second black player ever to be drafted in the NFL.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to the 1990 US census the most common surname is Smith. What is the second most common name?",
    "options": [
      "Brown",
      "Williams",
      "Jones",
      "Johnson"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was Disneys second full length animated film?",
    "options": [
      "Peter Pan",
      "Pinocchio",
      "Cinderella",
      "Snow White and the Seven Dwarfs"
    ],
    "correctIndex": 1
  },
  {
    "question": "The invetor of the first marketed bubble gum, Walter Diemer, was actually an accountant at Fleer Chewing Gum Company in Philadelphia. He did various experiments in his free time. He invented bubble gum by accident, when one of his gum mixtures turned out to be less sticky than the usual chewing gum mixture and easily stretched.  When did he invent the bubble gum?",
    "options": [
      "1955",
      "1915",
      "1935",
      "1928"
    ],
    "correctIndex": 3
  },
  {
    "question": "This was the name of the first bubble gum on the market.",
    "options": [
      "Hubba Bubba",
      "Wrigleys",
      "Dubble Bubble",
      "Bazooka"
    ],
    "correctIndex": 2
  },
  {
    "question": "Bazooka introduced the first bubble gum comics named Bazooka Joe. It was first introduced in this year.",
    "options": [
      "1920",
      "1953",
      "1910",
      "1963"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the most popular color of bubble gum.  When gum had to be released on the market, it was the only color the inventor had on hand.",
    "options": [
      "Blue",
      "Green",
      "White",
      "Pink"
    ],
    "correctIndex": 3
  },
  {
    "question": "If you stick bubble gum in your hair, you can remove it with a small amount of this substance.",
    "options": [
      "Peanut butter",
      "Water",
      "Flour",
      "Alcohol"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is one of the benefits of chewing gum.",
    "options": [
      "Helps taste",
      "Enhances the function of the lungs",
      "Helps resist the urge to smoke",
      "Alleviates stuffed nose"
    ],
    "correctIndex": 2
  },
  {
    "question": "Chewing gum was released in the American market in the early 1900s but became popular in Europe thanks to US soldiers who fought in this war.",
    "options": [
      "Persian Gulf War",
      "Afghanistan war",
      "WW 1",
      "WW 2"
    ],
    "correctIndex": 2
  },
  {
    "question": "Ancient Greeks also had their bubble gum. They chewed the resin of this tree to clean their teeth and freshen their breath.",
    "options": [
      "Ash tree",
      "Mastic tree",
      "Olive tree",
      "Pine tree"
    ],
    "correctIndex": 1
  },
  {
    "question": "To remove gum from clothes or other fabrics you should apply this first.",
    "options": [
      "Hot iron",
      "Ice cube",
      "Oil",
      "Butter"
    ],
    "correctIndex": 1
  },
  {
    "question": "This country has the largest number of gum producers, with over 60 gum factories.",
    "options": [
      "China",
      "USA",
      "Turkey",
      "Russia"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to most theories, when was the color pink invented?",
    "options": [
      "17th century",
      "12th century",
      "19th century",
      "15th century"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why did the inventor of bubble gum make it pink?",
    "options": [
      "It was the only color he had left",
      "He made it pink for his daughter",
      "It was his favorite color",
      "Pink reminded him of his mother"
    ],
    "correctIndex": 0
  },
  {
    "question": "Donald Trump wore a solid pink tie in every episode of The Apprentice.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where was the 1986  movie Pretty in Pink set?",
    "options": [
      "New York",
      "Hollywood",
      "Chicago",
      "Los Angeles"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which is not a cause of the medical problem, Pink eye?",
    "options": [
      "virus infection",
      "chlorine",
      "seasonal pollens",
      "bacteria pneumococci"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these actors played a role in the 1989 movie Pink Cadillac?",
    "options": [
      "Eddie Murphy",
      "Jack Black",
      "Michael Douglas",
      "Jim Carrey"
    ],
    "correctIndex": 3
  },
  {
    "question": "What year was rock singer Pink born?",
    "options": [
      "1983",
      "1969",
      "1979",
      "1971"
    ],
    "correctIndex": 2
  },
  {
    "question": "STOP signs have always been red.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "All of the following are fruits except which one?",
    "options": [
      "corn",
      "orange",
      "cherry",
      "apple"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is the star of a show that debuted on Disney Channel in March 2006?",
    "options": [
      "Miley Cyrus",
      "Lindsay Lohan",
      "Amanda Bynes",
      "Jamie Lynn Spears"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who are the presidents on Mount Rushmore?",
    "options": [
      "Adams, Washington, Johnson, F. Roosevelt",
      "Washington, Jefferson, T. Roosevelt, Lincoln",
      "Washington, Adams, Lincoln, Hamilton",
      "Lincoln, Kennedy, Regan, Washington"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Statue of Liberty was a gift from Italy.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Lassie and Benji are the same breed of dog.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the only American President to be elected to office in the Confederacy ?",
    "options": [
      "John Tyler",
      "Zachary Taylor",
      "Andrew Jackson",
      "Millard Fillmore"
    ],
    "correctIndex": 0
  },
  {
    "question": "Beethovens Fifth Symphony is divided into four movements. What is the name of the opening one?",
    "options": [
      "Allegro con brio",
      "Scherzo: Allegro",
      "Andante con moto",
      "Allegro"
    ],
    "correctIndex": 0
  },
  {
    "question": "For what part of his anatomy was Jimmy Durante famous?",
    "options": [
      "His large nose",
      "His large chin",
      "His large ears",
      "His large girth"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of Ricks cafe in the movie classic, Casablanca?",
    "options": [
      "Ricks",
      "The Red Parrot",
      "Rick and Sams Cafe",
      "Ricks Cafe American"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which baseball pitcher pitched 11 perfect innings, only to lose the game in the 12th?",
    "options": [
      "Warren Sphan",
      "Harvey Haddix",
      "Lew Burdette",
      "Johnnie Sain"
    ],
    "correctIndex": 1
  },
  {
    "question": "Pigs are known for their ability to smell what food really well?",
    "options": [
      "Potatoes",
      "Peanuts",
      "Truffles",
      "Carrots"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Big Ten Conference is a college athletic conference located in the northern United States.  It had this many members, as of the beginning of the new millennium.",
    "options": [
      "12",
      "9",
      "11",
      "10"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the English name for the first book of the Bible?",
    "options": [
      "Genesis",
      "Exodus",
      "Mathew",
      "Luke"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which month is celebrated as Black History Month?",
    "options": [
      "January",
      "April",
      "March",
      "February"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1902 the first movie house opened in the USA, in this city.",
    "options": [
      "Menlo Park",
      "Los Angeles",
      "Pittsburgh",
      "New York City"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1386, a cow in France was executed by public hanging for the murder of a child.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many eyelids do camels have on each of their eyes?",
    "options": [
      "2",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following animals transmits the most diseases?",
    "options": [
      "wasp",
      "bee",
      "housefly",
      "ant"
    ],
    "correctIndex": 2
  },
  {
    "question": "Is Olympus Mons taller than Mt. Everest?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Square watermelons are grown in Japan.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was/were the first passenger/s on a hot air balloon?",
    "options": [
      "s rooster",
      "all of these",
      "a duck",
      "sheep"
    ],
    "correctIndex": 1
  },
  {
    "question": "What animals multiply so quickly that in 18 months they can have over million descendants?",
    "options": [
      "worms",
      "grasshoppers",
      "rats",
      "snakes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Legend has it that MMs were made for what soldiers?",
    "options": [
      "Spanish soldiers",
      "French soldiers",
      "Japanese soldiers",
      "American soldiers"
    ],
    "correctIndex": 3
  },
  {
    "question": "Fleas can jump 130 times their own height.",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Complete this famous quotation, attributed to, and denied by, Winston Churchill.",
    "options": [
      "Rum",
      "Ropes",
      "Rashes",
      "nt talk to me about naval tradition. Its nothing but ____, sodomy, and the lash.",
      "Rotten biscuits"
    ],
    "correctIndex": 0
  },
  {
    "question": "Complete the title of an 80s song by Duran Duran:",
    "options": [
      "... See ya soon!",
      "... Thursday",
      "... Monday",
      "... Friday"
    ],
    "correctIndex": 2
  },
  {
    "question": "Finish the title of a song from the Hit TV Series, The Drew Carey Show.",
    "options": [
      "Parma",
      "Miamisburg",
      "Shaker Heights",
      "Pittsburgh"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who provided the voices of the characters in the Radio Program Amos n Andy from 1928 to 1960?",
    "options": [
      "Pranklin Pierce and John Pierce",
      "Amos Rogers and Andrew Brown",
      "Freeman Gosden and Charles Correll",
      "John Paul and George Ringo"
    ],
    "correctIndex": 2
  },
  {
    "question": "Bud Abbott and Lou Costello were a comedy team that lasted for 20 years, from the 1930s through the 1950s. What famous baseball routine are they best known for?",
    "options": [
      "The Ump is Blind!",
      "Whos on First?",
      "Whos Playing Who?",
      "Whos your Daddy?"
    ],
    "correctIndex": 1
  },
  {
    "question": "This comedy duo started as a nightclub act in the late 1940s and made several successful movies in the 1950s before breaking up for good in 1956.",
    "options": [
      "Dean Martin and Jerry Lewis",
      "John Jacobs and Frank Sinatra",
      "Frank Sinatra and Dean Martin",
      "Dan Rowan and Dick Martin"
    ],
    "correctIndex": 0
  },
  {
    "question": "Before he started making movies in Hollywood, Dudley Moore was part of a comedy duo in Great Britain in the late 60 and early 70s. What was his partners name?",
    "options": [
      "Peter Baker",
      "Peter Cook",
      "Less Parks",
      "Jim Jackson"
    ],
    "correctIndex": 1
  },
  {
    "question": "This comedy troupe started Something Completely Different on BBC Channel 1 in 1969.",
    "options": [
      "Monty Pythons Flying Circus",
      "Oscar Alices Comedy Revue",
      "Arsenic and Old Laces",
      "The Benny Hill Show"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Not Ready For Primetime Players debuted on Saturday Night Live in 1975. Which of these was not part of the original cast?",
    "options": [
      "Garrett Morris",
      "Jim Belushi",
      "Jane Curtin",
      "Chevy Chase"
    ],
    "correctIndex": 1
  },
  {
    "question": "This musical group debuted on Saturday Night Live in 1978 and released an album called Briefcase Full of Blues that same year.",
    "options": [
      "The Blues Brothers",
      "Sunglasses and Briefcases",
      "Dead Men Walking",
      "The Killer Bees"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Canadian comedy troupe started out in 1984 and included actor Dave Foley.",
    "options": [
      "New kids on the Block",
      "Big kids in the Hood",
      "Kids in the Hall",
      "Kids in the Attic"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many keys are on a piano?",
    "options": [
      "56",
      "80",
      "98",
      "88"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many stories does the Empire State Building have?",
    "options": [
      "102",
      "100",
      "150",
      "109"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many legs does a spider have?",
    "options": [
      "8",
      "6",
      "4",
      "10"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many planets are in the Solar System?",
    "options": [
      "10",
      "15",
      "8",
      "12"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many stripes are on the American Flag?",
    "options": [
      "11",
      "13",
      "15",
      "12"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many North American Great Lakes are there?",
    "options": [
      "8",
      "4",
      "6",
      "5"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many arms does the octopus have?",
    "options": [
      "8",
      "14",
      "12",
      "10"
    ],
    "correctIndex": 0
  },
  {
    "question": "Approximately how many people attended the soccer match between Uruguay and Brazil during the 1950 FIFA World Cup tournament?",
    "options": [
      "300,000",
      "500,000",
      "1,000,000",
      "199,800"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many teeth does and adult have?",
    "options": [
      "28",
      "30",
      "32",
      "26"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which famous book by British writer H.G. Wells presents the Martians as having octopus-like bodies?",
    "options": [
      "I Robot",
      "War of the Worlds",
      "The Island of Doctor Moreau",
      "The Martian Chronicles"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1971 David Bowies song Life on Mars? appeared on which of his albums?",
    "options": [
      "Hunky Dory",
      "Young Americans",
      "Space Oddity",
      "Earthling"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which 1996 animated live-action film featured cartoon character Marvin the Martian?",
    "options": [
      "Toy Story",
      "Spiderman",
      "Space Jam",
      "Robots"
    ],
    "correctIndex": 2
  },
  {
    "question": "The 1950 book The Martian Chronicles, describing the conflict between the colonists from Earth and the aboriginal Martians, was written by which author?",
    "options": [
      "Ray Bradbury",
      "Arthur Clarke",
      "Douglas Adams",
      "Isaac Asimov"
    ],
    "correctIndex": 0
  },
  {
    "question": "On the 2006 album Stadium Arcadium by the Red Hot Chili Peppers, which song is about the death of  bassist Fleas dog?",
    "options": [
      "Wet Sand",
      "Death of a Martian",
      "Tell Me Baby",
      "Dani California"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Roman god of war Mars corresponds to which god from the Greek mythology?",
    "options": [
      "Ares",
      "Zeus",
      "Hades",
      "Hermes"
    ],
    "correctIndex": 0
  },
  {
    "question": "When were the 107 episodes of the American sitcom My Favorite Martian first aired?",
    "options": [
      "In the 1960s",
      "In the 1980s",
      "In the 1990s",
      "In the 1950s"
    ],
    "correctIndex": 0
  },
  {
    "question": "Approximately how long is the Martian solar day?",
    "options": [
      "48 hours 30 minutes",
      "12 hours 35 minutes",
      "15 hours",
      "24 hours 39 minutes"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who wrote the music for Brian de Palmas 2000 movie Mission to Mars?",
    "options": [
      "Howard Shore",
      "Ennio Morricone",
      "Goran Bregovic",
      "Slash"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which feature on the surface of Mars inspired Iron Maidens song Face in The Sand, included in their album Dance Of Death?",
    "options": [
      "The Skull on Mars",
      "The Martian Belt",
      "The Red Eye",
      "The Face on Mars"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the father of Jem and Scout in the novel To Kill a Mockingbird?",
    "options": [
      "Harper Lee",
      "Bob Jones",
      "Boyd Smith",
      "Atticus Finch"
    ],
    "correctIndex": 3
  },
  {
    "question": "Stan Smith is married to Francine and is the father of Hayley and Steve in this popular cartoon.",
    "options": [
      "The Fairly Odd Parents",
      "All in the Family",
      "The Simpson",
      "American Dad!"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the cartoon Augie Doggie and Doggie Daddy, Doggie Daddy spoke like what entertainer?",
    "options": [
      "Charlie Chan",
      "George Burns",
      "Jimmy Durante",
      "Bill Cosby"
    ],
    "correctIndex": 2
  },
  {
    "question": "What classic song is often played at weddings during the brides dance with her father?",
    "options": [
      "White Wedding",
      "Poppa Dont Preach",
      "Daddys Little Girl",
      "Now and Forever"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who portrays Nicoles (Staci Keanan) two fathers on the TV sitcom My Two Dads?",
    "options": [
      "Tony Randall and Jack Klugman",
      "Walter Matthau and Art Carney",
      "Paul Reiser and Greg Evigan",
      "Matthew Broderick and Nathan Lane"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following is not an original member of The Mamas  the Papas?",
    "options": [
      "John Phillips",
      "Jill Gibson",
      "Denny Doherty",
      "Cass Elliot"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which group recorded the hit single Sugar Daddy in 1971?",
    "options": [
      "Jackson 5",
      "Bread",
      "Journey",
      "The Mamas and the Papas"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the British sitcom about the Home Guard during World War II?",
    "options": [
      "McHales Navy",
      "Dads Army",
      "Fathers Flyboys",
      "Pops Platoon"
    ],
    "correctIndex": 1
  },
  {
    "question": "Daddy Warbucks is a character in this popular musical that opened in April 21, 1977.",
    "options": [
      "Annie",
      "Xanadu",
      "Phantom of the Opera",
      "Cats"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who wrote Jude the Obscure, The Mayor of Casterbridge, and Far From the Madding Crowd?",
    "options": [
      "Thomas Hardy",
      "William Shakespeare",
      "Walter Scott",
      "Matthew Arnold"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the first Broadway comedy to run for over 5500 performances?",
    "options": [
      "Grease",
      "Hello Dolly",
      "Oh! Calcutta",
      "Drat, the Cat"
    ],
    "correctIndex": 2
  },
  {
    "question": "This malleable, ductile, gray-white metal is very valuable. It is used in jewelry, in the production of electrical equipment, and in automobile emission systems. Certain compounds of this metal have  shown to be effective in destroying tumors.",
    "options": [
      "Bronze",
      "Copper",
      "Manganese",
      "Platinum"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where was the first American-made motorcycle manufactured?",
    "options": [
      "Birmingham, Alabama",
      "Savannah, Georgia",
      "Springfield , Massachusetts",
      "Kansas City, Missouri"
    ],
    "correctIndex": 2
  },
  {
    "question": "The great medieval artist, Albrect Durer wrote a textbook in this subject.",
    "options": [
      "Architecture",
      "Civil Engineering",
      "Cooking",
      "Geometry"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this language, jo reggelt means good morning and Beszel angolul means Do you speak English?",
    "options": [
      "Romanian",
      "Hungarian",
      "Russian",
      "Croatian"
    ],
    "correctIndex": 1
  },
  {
    "question": "This country is a democratic, parliamentary republic that has over 1500 islands, 700 rivers and streams, and 1000 lakes. During the winter, the shortest day is only 6 hours long. Smoked trout is a typical food  there.",
    "options": [
      "Sweden",
      "Montenegro",
      "Denmark",
      "Estonia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is regarded as the first professional (American style) football player?",
    "options": [
      "William Heffelfinger",
      "Red Grange",
      "Jay Berwanger",
      "Jim Thorpe"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ross Rebagliati, Karine Ruby, Gian Simmen, Nicola Thost, Anton Pogue, Stacia Hookman, Steve Persons, and Sabrina Sadeghi are prominent names in this  sport.",
    "options": [
      "Snowboarding",
      "Skiing",
      "Figure skating",
      "Team handball"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where was the first iron bridge built?",
    "options": [
      "Milton, Massachusetts",
      "Paris, France",
      "Coalbrookdale, England",
      "Brussels, Belgium"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where will you find the first public park in the USA?",
    "options": [
      "Philadelphia, Pennsylvania",
      "Boston, Massachusetts",
      "Charleston, South Carolina",
      "Pawtucket, Rhode Island"
    ],
    "correctIndex": 1
  },
  {
    "question": "What did Norman Breakey invent?",
    "options": [
      "The electric alarm clock",
      "The electric typewriter",
      "The QWERTYU keyboard",
      "The paint roller"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first European child, born in the Western Hemisphere, was born in what would become this country/state.",
    "options": [
      "Canada",
      "Cuba",
      "Virginia",
      "Barbados"
    ],
    "correctIndex": 0
  },
  {
    "question": "He was the first child born in the White House in Washington, D.C.",
    "options": [
      "James  Franklin Jefferson",
      "James  Lee Washington",
      "James Quincy Adams",
      "James Madison Randolph"
    ],
    "correctIndex": 3
  },
  {
    "question": "A 1672 painting in Dobarsko in this country depicts Jesus in a rocket ship.",
    "options": [
      "Croatia",
      "Hungary",
      "Estonia",
      "Bulgaria"
    ],
    "correctIndex": 3
  },
  {
    "question": "Elena Andrionovna was born to Andrian Nikolayev and Valentina Tereshkova. Which statement is true about her?",
    "options": [
      "Both her parents had been in outer space.",
      "She was the first child born after the demise of the USSR.",
      "She was the first child born by a surrogate mother.",
      "She was the first child born in the offices of the KGB."
    ],
    "correctIndex": 0
  },
  {
    "question": "The capital city of this country was once known as The Little Paris of Eastern Europe.",
    "options": [
      "Bulgaria",
      "Latvia",
      "Croatia",
      "Romania"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Krahule hill , known as the geographic center of Europe, is it located in this country.",
    "options": [
      "Slovakia",
      "Austria",
      "Montenegro",
      "Slovenia"
    ],
    "correctIndex": 0
  },
  {
    "question": "The very advanced ocean liner, The Queen Mary II, was built in this country.",
    "options": [
      "France",
      "Greece",
      "Liberia",
      "Ireland"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is Aconcagua the tallest mountain in North America?",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the deepest lake in the world?",
    "options": [
      "Caspian Sea",
      "Baikal",
      "Issyk-Kul",
      "Tanganyika"
    ],
    "correctIndex": 1
  },
  {
    "question": "Does Turkey belong only in Asia?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Greenland is part of this country.",
    "options": [
      "Denmark",
      "Iceland",
      "Norway",
      "United Kingdom"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the largest country in the world?",
    "options": [
      "Russia",
      "USA",
      "China",
      "Canada"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the largest sea in the world?",
    "options": [
      "Caribbean Sea",
      "Mediterranean Sea",
      "Bering Sea",
      "South China Sea"
    ],
    "correctIndex": 3
  },
  {
    "question": "What country is generally regarded as the oldest republic in the world?",
    "options": [
      "France",
      "San Marino",
      "Bulgaria",
      "Denmark"
    ],
    "correctIndex": 1
  },
  {
    "question": "This word means a detailed record of a persons life.",
    "options": [
      "Denouement",
      "Dreeour",
      "Dossier",
      "Deluge"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the location of the final battle of the First Indo-China War between France and Vietnam?",
    "options": [
      "Dien Thu",
      "Dien Tet Hue",
      "Dien Bien Phu",
      "Dien Phu Wei"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to Greek mythology, he was the best friend of Pythias.",
    "options": [
      "Damion",
      "Daconias",
      "Draco",
      "Desmond"
    ],
    "correctIndex": 0
  },
  {
    "question": "Complete this quote: Apres moi , le ......",
    "options": [
      "Direz",
      "Denouement",
      "Deluge",
      "Dirge"
    ],
    "correctIndex": 2
  },
  {
    "question": "What term refers to the events following the climax in a dramatic play?",
    "options": [
      "Denorment",
      "Delouges",
      "Delarges",
      "Denouement"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the meaning of dyspepsia?",
    "options": [
      "Near-sightedness",
      "A disease that is characterized by difficulty in reading",
      "A recurrent  pain, hardness or ache in the upper abdomen",
      "A religious calendar used by several non-Western groups"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these is NOT a state capital?",
    "options": [
      "Dover",
      "Des Moines",
      "Denver",
      "Dallas"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is a doula?",
    "options": [
      "A non-professional person who assists a woman during the time of  giving birth and during the postpartum period",
      "A summer home in Russia.",
      "A ballet movement",
      "A highly -trained computer technician who advises web designers in the silicon-valley  of France"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is a name of a Truffaut movie?",
    "options": [
      "Day for Night",
      "Days of  Leaud",
      "Days in Calabria",
      "Days in Algiers"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is the word in Jewish folklore for a spirit that inhabits the soul and body of a dead person.",
    "options": [
      "Dibbenhook",
      "DBennior",
      "Daven",
      "Dybbuk"
    ],
    "correctIndex": 3
  },
  {
    "question": "The following citation is taken from this novel of F. Scott Fitzgerald.",
    "options": [
      "Tender Is the Night",
      "The Great Gatsby",
      "The Beautiful and Damned",
      "This Side of Paradise"
    ],
    "correctIndex": 1
  },
  {
    "question": "What author of fiction wrote the eight novels known as The Kent Family Chronicles?",
    "options": [
      "John Jakes",
      "Langston Hughes",
      "Mark Twain",
      "Ernest Hemingway"
    ],
    "correctIndex": 0
  },
  {
    "question": "What British singer recorded her biggest hit, Downtown in 1964?",
    "options": [
      "Myleene Klass",
      "Amy Winehouse",
      "Petula Clark",
      "Lulu"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the 1978 thriller in which a Nazi death-camp doctor attempts to clone Adolf Hitler.",
    "options": [
      "Heaven Can Wait",
      "The Boys from Brazil",
      "Foul Play",
      "Every Which Way But Loose"
    ],
    "correctIndex": 1
  },
  {
    "question": "Excluding map supplements and special editions, how many issues of The National Geographic Magazine are published each year?",
    "options": [
      "12",
      "52",
      "36",
      "24"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who wrote the collection of 100 novellas known as The Decameron?",
    "options": [
      "Emperor Huizong",
      "Eilhart von Oberge",
      "Alfonso VII of Le\u00c3\u00b3n",
      "Giovanni Boccaccio"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who became famous in 1957 with the Jamaican folk song, The Banana Boat Song?",
    "options": [
      "Charlie Parker",
      "Max Roach",
      "Harry Belafonte",
      "Miles Davis"
    ],
    "correctIndex": 2
  },
  {
    "question": "Under what name is the Mr. Clean brand name known in Germany?",
    "options": [
      "Mister Sauber",
      "Herr Steril",
      "Mr. Wunderbar",
      "Meister Proper"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what 1960s ABC series do the characters attack, harass and wreak havoc on Field Marshal Rommels vaunted Afrika Korps?",
    "options": [
      "The Rat Patrol",
      "The Mod Squad",
      "Gunsmoke",
      "M.A.S.H"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which video game console is credited with popularizing the use of game cartridges in 1977?",
    "options": [
      "ColecoVision",
      "Atari 2600",
      "NES/Famicom",
      "Sega Master System"
    ],
    "correctIndex": 1
  },
  {
    "question": "The top grossing movie of 1985 was Back to the Future, trailed closely by two movies, starring this man.",
    "options": [
      "Sylvester Stallone",
      "Tom Cruise",
      "Eddie Murphy",
      "Arnold Schwarzenegger"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sharks rarely attack humans.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many teeth do slugs have?",
    "options": [
      "3,000",
      "2,000",
      "1,000",
      "None"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these fruits has a variety called Abraham Lincoln?",
    "options": [
      "Nectarine",
      "Tomato",
      "Peach",
      "Watermelon"
    ],
    "correctIndex": 1
  },
  {
    "question": "How big was the first telephone book?",
    "options": [
      "1 page",
      "50 pages",
      "100 pages",
      "10 pages"
    ],
    "correctIndex": 0
  },
  {
    "question": "The average US penny stays in circulation for 50 years.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "You can fry an egg on a sidewalk when it reaches how many degrees Fahrenheit?",
    "options": [
      "143",
      "158",
      "167",
      "172"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the first song transmitted from space to Earth?",
    "options": [
      "Space Oddity",
      "Happy Birthday",
      "The I Love Lucy Theme Song",
      "There has been no song transmitted from space to Earth."
    ],
    "correctIndex": 1
  },
  {
    "question": "Spit can freeze in mid-air at the North Pole.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Potato flavored ice cream can be bought in Idaho.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How much air do apples contain?",
    "options": [
      "1/25",
      "1/50",
      "1/10",
      "1/75"
    ],
    "correctIndex": 0
  },
  {
    "question": "When Anti-war protesters, socialists and Yippes (Youth International Party ) descended on the 1968 Democratic National Convention, the mayor of this city responded by using 12,000",
    "options": [
      "Jerry Brown",
      "Nelson Rockafeller",
      "John Lindsay",
      "Richard Daley"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which was the first Disney production to show the death of a main character?",
    "options": [
      "Bambi",
      "Lion King",
      "Pocahontas",
      "Peter Pan"
    ],
    "correctIndex": 1
  },
  {
    "question": "On the show Law and Order, Detective Lenny Briscoe was a New York City policeman for over 30 years. In that time, how many times did he shoot a person?",
    "options": [
      "76",
      "0",
      "1",
      "13"
    ],
    "correctIndex": 1
  },
  {
    "question": "Exactly half of the US states have an even number of letters in their name.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who created the first billion dollar company?",
    "options": [
      "Andrew Carnegie",
      "Alexander Farkas",
      "Samuel Walton",
      "J.P. Morgan"
    ],
    "correctIndex": 3
  },
  {
    "question": "What do these people have in  common: Star Jones, Randy Jackson, President Dwight David Eisenhower, Carnie Wilson, Diego Maradona?",
    "options": [
      "They have all had gastric bypass surgery.",
      "They have all appeared on the long running BBC show Leaders of Our Times.",
      "They have all been cited by the UN for their work with  UNICEF.",
      "They have all received  he Legiondaire Grand Award."
    ],
    "correctIndex": 0
  },
  {
    "question": "Nabisco makes animal crackers in a plant located in this state.",
    "options": [
      "Utah",
      "Ohio",
      "Massachusetts",
      "New Jersey"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the first American city to fluoridate its water system?",
    "options": [
      "Grand Rapids, Michigan",
      "San Miguel, California",
      "Yonkers, New York",
      "Colorado Springs, Colorado"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these was the name of a London street which housed a prison?",
    "options": [
      "Clink",
      "Brailey",
      "Gow",
      "Gaol"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the first European nation to grant women the right to vote?",
    "options": [
      "Finland",
      "Norway",
      "Austria",
      "Ireland"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the Dionysia?",
    "options": [
      "The ancient Athenian celebration in honor of Dionysus",
      "The ancient Greek name for  what we call The Parthenon",
      "A classical Greek drama that was rewritten by Shakespeare as A Midsummers Nights Dream",
      "The ancient Spartan creed of the warrior"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which term would best describe all the people on this list: Lincoln Steffens, Ida Tarbell, Jack Anderson, Jack Newfield, Ray Stannard Baker, Wayne Barret, Richard Behar?",
    "options": [
      "Spoonerists",
      "Positivists",
      "Playwrights",
      "Muckrakers"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first transcontinental car trip, S.F. to NYC, was made in 1906. How long did it take?",
    "options": [
      "52  days",
      "5 weeks",
      "2 weeks",
      "52 hours"
    ],
    "correctIndex": 0
  },
  {
    "question": "Select the year in which these vents took place: Petroleum production began in the Middle East, the Cubs beat the Tigers in the World Series, and the Montreal Wanderers won the Stanley Cup.",
    "options": [
      "1924",
      "1916",
      "1932",
      "1908"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which 1955 movie won four Academy Awards?",
    "options": [
      "Marty",
      "Forrest Gump",
      "Crash",
      "The Wizard of Oz"
    ],
    "correctIndex": 0
  },
  {
    "question": "What disease do the following famous people share: Menachem Begin, Halle Berry, Carol Channing, Miles Davis, Ella Fitzgerald, Ray Kroc, Arthur Ashe, and Ty Cobb?",
    "options": [
      "Rheumatic fever",
      "Irritated  bowel syndrome",
      "Dyslexia",
      "Diabetes"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which two of these musicians were born in Lafayette, Indiana?",
    "options": [
      "Axl Rose and Shannon Hoon",
      "Michael Stipe and Curt Cobain",
      "Kurt Cobain and Shannon Hoon",
      "Axl Rose and Michael Stipe"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 1995 movie Mr. Hollands Opus, Mr. Holland teaches young Gertrude Lang to play the clarinet piece Stranger on the Shore. Who wrote this famous piece?",
    "options": [
      "James Byars",
      "Donald Byron",
      "Acker Bilk",
      "Toots Thielman"
    ],
    "correctIndex": 2
  },
  {
    "question": "The USA is divided into states. England is divided into counties. Which country is divided into departments?",
    "options": [
      "India",
      "France",
      "Ireland",
      "Taiwan"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which actress and dancer appeared in Bon Jovis video Always?",
    "options": [
      "Kiersten Dunst",
      "Katie Holmes",
      "Claire Danes",
      "Keri Russell"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which list is in increasing order regarding size?",
    "options": [
      "Squad, Platoon, Company, Brigade",
      "Squad, Platoon, Battalion, Company",
      "Platoon, Company, Regiment , Battalion",
      "Platoon, Squad, Company, Regiment"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1920 Edward P. Eddie Eagan won the first Olympic boxing gold medal for the USA. In 1932, he won a second gold Olympic medal in which sport?",
    "options": [
      "Wrestling",
      "Bobsledding",
      "Greco-Roman Wrestling",
      "The Shot Put"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which state is famous for being the site of a series of major earthquakes in 1811 and 1812?",
    "options": [
      "Hilo, Hawaii",
      "New Madrid, Missouri",
      "San Francisco, California",
      "Trenton, New Jersey"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was in total eclipse according to Bonnie Tylers 1983 hit?",
    "options": [
      "The soul",
      "The moon",
      "The Sun",
      "The heart"
    ],
    "correctIndex": 3
  },
  {
    "question": "What group was popular in the 1960s with the hits Yummy Yummy Yummy and Chewy Chewy?",
    "options": [
      "Velvet Underground",
      "The Rolling Stones",
      "The Ohio Express",
      "The Beatles"
    ],
    "correctIndex": 2
  },
  {
    "question": "Nixon received a higher percentage of the popular vote during his losing bid for the presidency than when he won in 1968.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Woody Allen movie depicts a future with robot butlers?",
    "options": [
      "Match Point",
      "Stardust Memories",
      "Cassandras Dream",
      "Sleeper"
    ],
    "correctIndex": 3
  },
  {
    "question": "What nations gas group, PEMEX, made headlines in 1974?",
    "options": [
      "United Arab Emirates",
      "Venezuela",
      "Mexico",
      "Panama"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first vice president from the Republican Party?",
    "options": [
      "Thomas Jefferson",
      "John Tyler",
      "Hannibal Hamlin",
      "John Adams"
    ],
    "correctIndex": 2
  },
  {
    "question": "What future senator was the first Ph.D. on the moon?",
    "options": [
      "John W. Young",
      "David Scott",
      "Alan Shepard",
      "Harrison H. Schmitt"
    ],
    "correctIndex": 3
  },
  {
    "question": "What TV cat had the motto I hate meeces to pieces?",
    "options": [
      "Mr. Jinks",
      "Miss Puss",
      "Sonja",
      "Katz"
    ],
    "correctIndex": 0
  },
  {
    "question": "What company introduced the Radarange, the first countertop home microwave oven, in 1967?",
    "options": [
      "Amana",
      "Kennmore",
      "GE",
      "Tappan"
    ],
    "correctIndex": 0
  },
  {
    "question": "What magazine selects The Person of the Year?",
    "options": [
      "Newsweek",
      "Sports Illustrated",
      "Time",
      "Rolling Stones"
    ],
    "correctIndex": 2
  },
  {
    "question": "In three of these countries corruption is widely spread. Which is the odd country?",
    "options": [
      "Romania",
      "Russia",
      "Iceland",
      "Ukraine"
    ],
    "correctIndex": 2
  },
  {
    "question": "Christianity is not the main religion in this country.",
    "options": [
      "Armenia",
      "Uruguay",
      "Sri Lanka",
      "East Timor"
    ],
    "correctIndex": 2
  },
  {
    "question": "Czech Republic, Luxembourg and the UK were among the countries with most obese people in the beginning of the new century.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ireland, New Zealand and Japan are three countries with very high consumption of this drink.",
    "options": [
      "Brandy",
      "Coffee",
      "Coca-cola",
      "Tea"
    ],
    "correctIndex": 3
  },
  {
    "question": "Ireland and Nigeria are considered to be among the countries with most adults, regularly attending church services. The citizens of one of this country also go to church regularly.",
    "options": [
      "Finland",
      "Russia",
      "Poland",
      "Japan"
    ],
    "correctIndex": 2
  },
  {
    "question": "Usually more than 10 million tourists visit three of these countries annually. Which is the odd one?",
    "options": [
      "Poland",
      "Belgium",
      "Mexico",
      "Italy"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the beginning of the new millennium New Zealand, Australia and the UK were among the countries with highest consumption of cannabis.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Malawi, Nigeria and Botswana, the official language is this.",
    "options": [
      "English",
      "French",
      "Portuguese",
      "Spanish"
    ],
    "correctIndex": 0
  },
  {
    "question": "This country is not a federal republic.",
    "options": [
      "Laos",
      "Austria",
      "Ethiopia",
      "Pakistan"
    ],
    "correctIndex": 0
  },
  {
    "question": "San Marino, Denmark and Norway are among the countries with most _____  per capita.",
    "options": [
      "Personal computers",
      "Television sets",
      "Credit cards",
      "Cell phones"
    ],
    "correctIndex": 0
  },
  {
    "question": "The word diamond comes from the ancient Greek word \u00e2\u0080\u009cadamas\u00e2\u0080\u009d meaning what translated in English?",
    "options": [
      "Everlasting",
      "Powerful",
      "Brilliant",
      "Invincible"
    ],
    "correctIndex": 3
  },
  {
    "question": "The diamond is the hardest known natural material on Earth.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "About half of the 26,000 kg diamonds mined annually originate from which continent?",
    "options": [
      "Asia",
      "South America",
      "Europe",
      "Africa"
    ],
    "correctIndex": 3
  },
  {
    "question": "Although seemingly different, the diamond and the graphite are both allotropes of one and the same chemical element. Which one?",
    "options": [
      "Nitrogen",
      "Carbon",
      "Oxygen",
      "Iron"
    ],
    "correctIndex": 1
  },
  {
    "question": "Diamonds\u00e2\u0080\u0099 properties are commonly measured by the so called \u00e2\u0080\u009cfour Cs.\u00e2\u0080\u009d What do the four Cs stand for?",
    "options": [
      "Chemical balance, color, clarity and carat",
      "Carat, capacity, color and clarity",
      "Cut, calcification, carat, and cut",
      "Carat, clarity, color, and cut"
    ],
    "correctIndex": 3
  },
  {
    "question": "In order for a natural diamond to form, it must be exposed to what specific conditions?",
    "options": [
      "High pressure and high temperature",
      "High pressure and absence of light",
      "Comparatively low pressure and high temperature",
      "High pressure and comparatively low temperature"
    ],
    "correctIndex": 3
  },
  {
    "question": "What physical property of the diamond do carats measure?",
    "options": [
      "Purity",
      "Mass",
      "Cut",
      "Color"
    ],
    "correctIndex": 1
  },
  {
    "question": "Diamond formation is a very slow process. It is estimated that most diamonds found in nature are of what approximate age?",
    "options": [
      "1 \u00e2\u0080\u0093 3 billion years old",
      "100 \u00e2\u0080\u0093 200 million years old",
      "30 \u00e2\u0080\u0093 40 billion years old",
      "100 000 \u00e2\u0080\u0093 200 000 years old"
    ],
    "correctIndex": 0
  },
  {
    "question": "Travis Metcalfe, an astronomer at the Harvard-Smithsonian Center for Astrophysics, has presented a fascinating theory: he believes the largest diamond known is located where?",
    "options": [
      "In Earth\u00e2\u0080\u0099s core",
      "On the moon\u00e2\u0080\u0099s dark side",
      "At the bottom of the Mariana Trench",
      "In a near star\u00e2\u0080\u0099s core"
    ],
    "correctIndex": 3
  },
  {
    "question": "What did the US government buy for the Native Alaskans in 1891?",
    "options": [
      "Motorized sleds",
      "The basis of their caribou herd",
      "A fire truck",
      "Ice boxes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Alaska, Texas and California are the three largest states in the USA. Which are the next two largest states?",
    "options": [
      "Montana and New Mexico",
      "Georgia and Iowa",
      "Wyoming and Iowa",
      "Montana and Georgia"
    ],
    "correctIndex": 0
  },
  {
    "question": "On the sitcom Third Rock  from the Sun, John Lithgow plays Dick Solomon. What is his occupation on Earth?",
    "options": [
      "Advertising writer",
      "Professor of Anthropology",
      "Professor of Physics",
      "Unemployed"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these musicians was not among the first class inducted into the Jazz Hall of Fame?",
    "options": [
      "Ray Charles",
      "Earl Hines",
      "Benny Carter",
      "Art Tatum"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1992 there was a petition signed by 30,000 people to change the name of Maui, Hawaii to Gilligan.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The original name of the Beatles song, Eleanor Rigby, was Miss Daisy Hawkins.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many continents are owned by only one nation?",
    "options": [
      "0",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first US police force to buy a police car was also the first to have a police motorcycle squad.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Thomas Harris created this terrible fictional murderer.",
    "options": [
      "Michael  Everett",
      "Garland  Saunderson",
      "Jason Thomas",
      "Hannibal Lecter"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which famous writer is not paired with the correct pseudonym?",
    "options": [
      "Ellery Queen-Erle Stanley Gardner",
      "Ellis Bell-Emily Bronte",
      "Richard Bachman-Stephen King",
      "Ernest V. Trueblood-William Faulkner"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 1994 film, Pulp Fiction, these actors portray Jules Winfield and Vincent  Vega.",
    "options": [
      "Ving Rhames and John Travolta",
      "Bruce Willis and Phil Lamarr",
      "Samuel L. Jackson and John Travolta",
      "Ving Rhames and Samuel L. Jackson"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the first rock group to play at New Yorks Carnegie Hall?",
    "options": [
      "America",
      "The Who",
      "The Beatles",
      "Chicago"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the Hindu word Krishna mean?",
    "options": [
      "the lord",
      "dark or dark blue",
      "daylight",
      "my lord"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first woman to have a gold record?",
    "options": [
      "Teresa Brewer",
      "Connie  Francis",
      "Judy Garland",
      "Shirley Temple"
    ],
    "correctIndex": 2
  },
  {
    "question": "How were the dimensions of American battleships determined?",
    "options": [
      "They had to be lower than the Golden Gates bridge and small enough to go through the Panama Canal.",
      "They had to be large enough to carry the minimum of 278 people but small enough to go through the Suez Canal.",
      "They had to be less than 111 feet tall and less than 11 feet wide.",
      "They had to be lower than the Brooklyn Bridge and small enough to go through the Panama  Canal."
    ],
    "correctIndex": 3
  },
  {
    "question": "The moves in this sport include Barani, Triffus, Miller, and Randy.",
    "options": [
      "Figure Skating",
      "Ballroom Dancing",
      "Trampoline",
      "BMX"
    ],
    "correctIndex": 2
  },
  {
    "question": "As a protest to the British Tea Tax, colonial Americans used this for making tea.",
    "options": [
      "Hay",
      "Goldenrod",
      "Persian Root",
      "Strawberries"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did Russia declare war against Japan during World  War II?",
    "options": [
      "Two days after the bombing of Hiroshima",
      "The day after the Battle of Kursk",
      "The day after the Battle of Stalingrad",
      "Two days after Germany surrendered."
    ],
    "correctIndex": 0
  },
  {
    "question": "This word can mean a social upstart or a social climber.",
    "options": [
      "Selcouth",
      "Zabern",
      "Pronk",
      "Rastaquouere"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these famous buildings is located on the Quai dOrsay, in Paris?",
    "options": [
      "The French Ministry of Foreign Affairs",
      "The Tomb of Napoleon",
      "The Picasso Museum of Paris",
      "The Eiffel Tower"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which US President signed the law, which established the Congressional Medal of Honor - the highest military decoration awarded by the United States?",
    "options": [
      "Lincoln",
      "Grant",
      "A. Johnson",
      "John Adams"
    ],
    "correctIndex": 0
  },
  {
    "question": "What did Jethro Tull invent in 1701, while he was living in Crowmarsh Gifford, a village in Oxfordshire, England?",
    "options": [
      "The combine machine",
      "The telescope",
      "The first modern rifle",
      "The seed drill"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these was introduced in Britain by Lady Mary Wortley, who was a prolific writer of diaries, essays and poems?",
    "options": [
      "The piano playing",
      "Musical modulation",
      "Smallpox innoculation",
      "The literary salon"
    ],
    "correctIndex": 2
  },
  {
    "question": "This island was originally called Van Diemens Land in honor of Anthony van Diemen.",
    "options": [
      "Australia",
      "Indonesia",
      "Tasmania",
      "New Zealand"
    ],
    "correctIndex": 2
  },
  {
    "question": "This statesman, born in Houghton Hall, Norfolk in 1676, is generally regarded as the first Prime Minister of Great Britain.",
    "options": [
      "David Gladstone",
      "Henry Cavendish",
      "Benjamin Disraeli",
      "Robert Walpole"
    ],
    "correctIndex": 3
  },
  {
    "question": "This person, who was High King of Ireland from 1002 to 1014, is popular as the ruler who managed to unify the regional leaders of Ireland, in order to free the land from Danish occupation.",
    "options": [
      "Brian Boru",
      "Henry II",
      "Campbell of Munster",
      "Patrick of Kearney"
    ],
    "correctIndex": 0
  },
  {
    "question": "This book, which bears the printed date 11th May 868, is known as the oldest-dated printed book.",
    "options": [
      "The Gutenburg Bible",
      "The Diamond Sutra scroll",
      "The first history of China",
      "The Book of the Dead"
    ],
    "correctIndex": 1
  },
  {
    "question": "After three unsuccessful runs, this socialist was elected President in 1970.",
    "options": [
      "Salvador Allende",
      "Miquel Noriega",
      "Dmitri Kerensky",
      "Ivan Beria"
    ],
    "correctIndex": 0
  },
  {
    "question": "The tradition of placing the wedding ring on the third finger of the left hand originates from ancient Egypt, where they believed that a vein in this finger ran directly to the heart.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Anglo-Saxon times the bride stood on the left of the groom to allow him to keep his right sword hand free so that he could fight off anyone trying to kidnap the bride.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The tradition of the white wedding dress dates back hundreds of years. It was worn to symbolize the virginity of the bride.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The kiss at the end of the wedding ceremony expresses a Christian belief and symbolizes the swapping of souls between the bride and the groom.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The tradition of proposing with a diamond engagement ring can be dated back to 1477 when the Archduke Maximilian of Hamburg gave one to Mary of Burgundy.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "At weddings it is common for people to toast the bride or groom. The term toast originates from Italy where it was common to place a piece of bread in the bottom of a wine cup for flavor.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The custom of all bridesmaids dressing alike was started to ensure that bride would stand out and be the center of attention on the alter.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The wedding cake originated in ancient Rome where it was thrown at the bride or broken over her head as a sign of fertility.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In ancient times, it was common for the groom to abduct his bride. The honeymoon originated as a way for the bride and groom to go into hiding after the wedding, to keep the brides family from finding her.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The bride traditionally wears a veil, because it is considered bad luck for the groom to see the bride before the wedding.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which 1968 film starred Jane Fonda as a scantily-clad sci-fi heroine?",
    "options": [
      "Bambi Meets Godzilla",
      "Bandolero!",
      "Bullitt",
      "Barbarella"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the more common name for the superfood Vaccinium oxycoccos?",
    "options": [
      "Cranberry",
      "Cauliflower",
      "Courgette",
      "Cress"
    ],
    "correctIndex": 0
  },
  {
    "question": "If bactrian equals two, what equals one?",
    "options": [
      "Dromedary",
      "Diamond",
      "Daschund",
      "Dynasty"
    ],
    "correctIndex": 0
  },
  {
    "question": "In May 2008, this painter set a new world record for sale value of a painting by a living artist when Benefits Supervisor Sleeping was sold for $33.6 million. What is his/her name?",
    "options": [
      "Lucian Freud",
      "Simon Francis",
      "Clinton Ford",
      "Brian Froud"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which World War One battles were the first ever fought by the Australian and New Zealand Army Corps (ANZAC) as a joint force?",
    "options": [
      "Galicia battles",
      "Gallipoli battles",
      "Ghent battles",
      "Georgetown battles"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the anvil-shaped bone in the middle ear that along with the malleus and stapes allow us to hear?",
    "options": [
      "Incense",
      "Inca",
      "Inuit",
      "Incus"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the second most important vegetable fibre after cotton that is woven to make coarse cloth and sacks?",
    "options": [
      "Juniper",
      "Jade",
      "Jet",
      "Jute"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which 1994 film featured Jean Reno as a hitman who worked out of Little Italy in New York City and offered sanctuary to a young girl when her family was murdered by corrupt Drug Enforcement Agency agents?",
    "options": [
      "Leo",
      "L\u00c3\u00a9on",
      "Lenny",
      "L\u00c3\u00a9olo"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name for a vocal musical composition for between two and eight singers, written in the Renaissance and early Baroque eras and often performed without musical accompaniment?",
    "options": [
      "Magnificat",
      "Mass",
      "Madrigal",
      "Mambo"
    ],
    "correctIndex": 2
  },
  {
    "question": "For which hobby would you need frames, hoops and canvas?",
    "options": [
      "Needlepoint",
      "Nudism",
      "Newsletter printing",
      "Netball"
    ],
    "correctIndex": 0
  },
  {
    "question": "What O-word can be added to each of the following to make a new meaningful word:",
    "options": [
      "Old",
      "Oaf",
      "Oat",
      "Out"
    ],
    "correctIndex": 3
  },
  {
    "question": "The fruit of this deciduous shrub or small tree is a berry 5 - 12 cm (2 \u00e2\u0080\u0093 4.7 inches) in diameter, with thick red skin and about 600 seeds.",
    "options": [
      "Pear",
      "Pomegranate",
      "Persimmon",
      "Pawpaw"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which actress played the part of Teresa di Vicenzo in the James Bond film On Her Majestys Secret Service?",
    "options": [
      "Nadja Regin",
      "Diana Rigg",
      "Denise Richards",
      "Tanya Roberts"
    ],
    "correctIndex": 1
  },
  {
    "question": "What toxic chemical was released in the Tokyo subway by the Aum Shinrikyo sect in 1995?",
    "options": [
      "Strychnine",
      "Sulphur trioxide",
      "Sodium cyanide",
      "Sarin"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which character from J. R. R. Tolkien\u00e2\u0080\u0099s The Lord of The Rings: The Two Towers was also known as Fangorn and was the oldest of his kind?",
    "options": [
      "Th\u00c3\u00a9oden",
      "Tobold Old Toby Hornblower",
      "Treebeard",
      "Tom Bombadil"
    ],
    "correctIndex": 2
  },
  {
    "question": "What commonplace object has parts called stretcher, runner and rib?",
    "options": [
      "Underwear",
      "Umbrella",
      "Underlay",
      "Urn"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which country gained independence from the UK and France in 1980 and has a national anthem entitled Yumi, Yumi, Yumi?",
    "options": [
      "Venezuela",
      "Virgin Islands",
      "Vanuatu",
      "Vietnam"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which actor played the sinister Gabriel Sylar Gray in the TV series Heroes?",
    "options": [
      "Zachary Quinto",
      "Zachery Ty Bryan",
      "Zac Efron",
      "Zach Braff"
    ],
    "correctIndex": 0
  },
  {
    "question": "As a child, this singer allegedly witnessed a car accident in the desert, where a family of Native Americans were injured. He considered this incident to be the most impactful event in his life and often referred to it in his poems and songs.",
    "options": [
      "Jimi Hendrix",
      "Jimmy Somerville",
      "James Brown",
      "Jim Morrison"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the author of The Asian Saga, a series of six epic novels centering on Europeans in Asia.",
    "options": [
      "Henry James",
      "James White",
      "James Joyce",
      "James Clavell"
    ],
    "correctIndex": 3
  },
  {
    "question": "What guitarist and singer fronted a band whose debut album was titled Are You Experienced?",
    "options": [
      "James Cagney",
      "James Brown",
      "Jimi Hendrix",
      "Jim Morrison"
    ],
    "correctIndex": 2
  },
  {
    "question": "James Dean received the first official posthumous Academy Award nomination for Best Actor for his performance in this movie.",
    "options": [
      "East of Eden",
      "Giant",
      "Trouble Along the Way",
      "Rebel Without a Cause"
    ],
    "correctIndex": 0
  },
  {
    "question": "Although this author spent much of his life outside his native Ireland, his landmark novels Ulysses and A Portrait of the Artist as a Young Man are set in Dublin.",
    "options": [
      "James Clavell",
      "James William Mitchell",
      "James Joyce",
      "James Munro"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these actors, named James, is not correctly matched with an Oscar-nominated role he played?",
    "options": [
      "James Oliver Cromwell - Farmer Arthur Hoggett in Babe",
      "James Caan - Santino Sonny Corleone in The Godfather.",
      "James Stewart - Paul Biegler in Anatomy of a Murder",
      "James Jim Carrey - Truman Burbank in The Truman Show"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these US Presidents had the shortest tenure?",
    "options": [
      "James Carter",
      "James Madison",
      "James A. Garfield",
      "James K. Polk"
    ],
    "correctIndex": 2
  },
  {
    "question": "What prolific 19th century novelist wrote The Leatherstocking Tales, a series of novels featuring frontiersman Natty Bumppo?",
    "options": [
      "James Flint",
      "James Fenimore Cooper",
      "James Clavell",
      "James Ellroy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these accomplishments was not made by Captain James Cook, an English explorer, navigator and cartographer?",
    "options": [
      "He explored a group of small islands in the heart of Polynesia which were later named after him.",
      "He was the first to map Newfoundland.",
      "He was the first European to visit the Hawaiian Islands.",
      "In 1774, he became the first explorer to sight Antarctica."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which statement, regarding James VI of Scotland and James I of England, is true?",
    "options": [
      "They are one and the same person.",
      "They are father and son.",
      "They are brothers.",
      "They lived two centuries apart and are not related."
    ],
    "correctIndex": 0
  },
  {
    "question": "Who wrote, directed, and starred in the 1981 movie The Four Seasons?",
    "options": [
      "Alan Alda",
      "Glen Ford",
      "Robert DeNiro",
      "Len Carriou"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who  wrote the concertos called The Four Seasons?",
    "options": [
      "Vivaldi",
      "Schumann",
      "Mozart",
      "Corelli"
    ],
    "correctIndex": 0
  },
  {
    "question": "What do we call the longest day of the year?",
    "options": [
      "The winter equinox",
      "The summer equinox",
      "The summer solstice",
      "The winter solstice"
    ],
    "correctIndex": 2
  },
  {
    "question": "When does the vernal equinox occur in the Northern Hemisphere?",
    "options": [
      "September 20, 21, or 22",
      "December 20, 2, or 22",
      "March 20, 21, or 22",
      "June 20, 21, or 22"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where in the USA would you find the place that in 1921 set a North American record for the largest snowfall in a 24-hour period?",
    "options": [
      "Alaska",
      "North Dakota",
      "Vermont",
      "Colorado"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is a tuque?",
    "options": [
      "A type of bikini that became very popular around 2004.",
      "A type of winter snow that falls horizontally in very high latitudes.",
      "A type of fruit that used to be called a winter peach",
      "A winter hat typically worn in Canada."
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the famous Welsh poet who wrote the poem The Boys of Summer.",
    "options": [
      "James Joyce",
      "Theodore Roethke",
      "e.e. cummings",
      "Dylan Thomas"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of The Eagles lead singer and drummer who wrote the song The Boys of Summer?",
    "options": [
      "Joe Walsh",
      "Don Henley",
      "Tim Schmit",
      "Glen Frey"
    ],
    "correctIndex": 1
  },
  {
    "question": "The book The Boys of Summer tells the story of this baseball team.",
    "options": [
      "The New York Yankees",
      "The Saint Louis Cardinals",
      "The Brooklyn Dodgers",
      "The Boston Celtics"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which season did ancient Greeks celebrate Mothers Day?",
    "options": [
      "Winter",
      "Summer",
      "Fall",
      "Spring"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1955 pianist Roger Williams had an instrumental hit with this record.",
    "options": [
      "Autumn Leaves",
      "Summertime",
      "The Summer Wind",
      "Why Do I Have Spring Fever"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Scandinavian mythology this is the equivalent of the apocalypse.",
    "options": [
      "rekjavak",
      "odinthorisagak",
      "ragnarok",
      "rasnajivarak"
    ],
    "correctIndex": 2
  },
  {
    "question": "Look for me by moonlight",
    "options": [
      "Curfew Shall Not Ring Tonight",
      "The Highwayman",
      "Annabel Lee",
      "Danny Deever"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who composed and performed the ballad Goodbye Yellow Brick Road?",
    "options": [
      "Michael Bolton",
      "Elton John",
      "The Beatles",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "A major earthquake struck this city in 1906, killing almost 3,000 people.",
    "options": [
      "Taipei",
      "Wellington",
      "Tokyo",
      "San Francisco"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following was not a game show host?",
    "options": [
      "Steve Allen",
      "Chuck Barris",
      "Louie Anderson",
      "Walter Bradley"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many English words (not proper nouns) begin with dw?",
    "options": [
      "3",
      "6",
      "4",
      "5"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which former US President said I know Im getting better at golf because I hit  fewer spectators.",
    "options": [
      "George W. Bush",
      "Ford",
      "Carter",
      "Eisenhower"
    ],
    "correctIndex": 1
  },
  {
    "question": "A book claiming that the story of Wilhelm Tell was just a myth was burned at the stake in Switzerland.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Spanish is an official language of this African country.",
    "options": [
      "Morocco",
      "Mozambique",
      "Equatorial Guinea",
      "Chad"
    ],
    "correctIndex": 2
  },
  {
    "question": "Find the quote by Federico Fellini.",
    "options": [
      "An idea does not pass from one language to another without change.",
      "All language is like a wonderfully long script.",
      "A different language is a different vision of life.",
      "Drawing on my fine command of language, I said nothing."
    ],
    "correctIndex": 2
  },
  {
    "question": "In Greek it is Sayapo, in Lakota it is Techihhila, in Lithuanian it is Tave myliu, in Albanian it is te dua. What is it in English?",
    "options": [
      "I need help",
      "Hello",
      "I love you",
      "Good morning"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the 14th Century, Moscow replaced this city as the cultural center of Russia.",
    "options": [
      "Kiev",
      "Leningrad",
      "Riga",
      "St. Petersburg"
    ],
    "correctIndex": 0
  },
  {
    "question": "A very common greeting in India is namaste or namaskar. What does it mean?",
    "options": [
      "I bow  to you.",
      "I pray your family is complete.",
      "May you be blessed.",
      "How are  you?"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is telesophobia?",
    "options": [
      "Fear of being last",
      "Fear of religious ceremonies",
      "Fear of being ignored",
      "Fear of being first"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ellis Island was the location of the entry facility used by many immigrants to enter the USA. When did the facility operate?",
    "options": [
      "1890-1923",
      "1889-1936",
      "1892-1954",
      "1884-1939"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year did the last veteran of the American Civil War die?",
    "options": [
      "1944",
      "1949",
      "1958",
      "1936"
    ],
    "correctIndex": 2
  },
  {
    "question": "Eddie Slovik was a soldier killed during World War II. How did he die?",
    "options": [
      "He was the last US soldier to die in World War II.",
      "He was the first soldier killed on D-Day.",
      "He was shot by the US for desertion.",
      "He was the only American prisoner of war in Hiroshima when the A-bomb fell."
    ],
    "correctIndex": 2
  },
  {
    "question": "How did Jerome Napoleon Charles Bonaparte, the last member of the Bonaparte family, die?",
    "options": [
      "He died of starvation in a German prisoner.",
      "He drowned off the coast of the Island of Elba.",
      "He died a natural death in 1995 at the age of 106.",
      "He died of injuries sustained when he tripped over his dogs leash."
    ],
    "correctIndex": 3
  },
  {
    "question": "In how many ways can ough be pronounced in English?",
    "options": [
      "16",
      "13",
      "1",
      "8"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does antepenultimate mean?",
    "options": [
      "next to last",
      "last",
      "middle",
      "second from last"
    ],
    "correctIndex": 3
  },
  {
    "question": "Find the correct statement.",
    "options": [
      "Irrupt means to break up.",
      "Irrupt is not a real English word.",
      "Irrupt means  to break in or rush in.",
      "Irrupt means to come before."
    ],
    "correctIndex": 2
  },
  {
    "question": "Lawrence Bohune was the first doctor in the British Colony of Virginia. When did he arrive?",
    "options": [
      "1689",
      "1704",
      "1610",
      "1622"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first person to show that blood moved from the heart  to the lungs and back?",
    "options": [
      "ibn-al-Nasif",
      "Leonardo Da Vinci",
      "William Harvey",
      "William Herschel"
    ],
    "correctIndex": 0
  },
  {
    "question": "He was the first person nominated for the Oscar for Producer (Best Picture), Director, Actor and Screenwriter for the same movie.",
    "options": [
      "John Huston",
      "Otto Preminger",
      "William Wyler",
      "Orson Welles"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the first movie for the Olsen twins?",
    "options": [
      "Little Rascals",
      "Little Man",
      "The Wizard",
      "Going Overboard"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where did the word golf originate?",
    "options": [
      "Ireland",
      "Canada",
      "Italy",
      "Scotland"
    ],
    "correctIndex": 3
  },
  {
    "question": "Coca Cola was originally green.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the late 1980s which television station did Rosie ODonnell work for?",
    "options": [
      "CBS",
      "MTV",
      "ABC",
      "VH1"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the sitcom Cheers what was the name of the restaurant that sat above the bar?",
    "options": [
      "Melvins",
      "Mickeys",
      "Minnies",
      "Melvilles"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following was invented by a woman?",
    "options": [
      "circular saw",
      "street-cleaning machine",
      "all of these",
      "windshield wipers"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what 1997 movie does the following exchange take place?",
    "options": [
      "A Few Good Men",
      "As Good as It Gets",
      "rol Connelly: ...Thats maybe the best compliment of my life.",
      "Scent of a Woman",
      "Somethings Gotta Give"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following planets is not named after a Roman god?",
    "options": [
      "Neptune",
      "Jupiter",
      "Uranus",
      "Mars"
    ],
    "correctIndex": 2
  },
  {
    "question": "What Rolling Stones member made a cameo appearance in the 2007 movie Pirates of the Caribbean: At Worlds End?",
    "options": [
      "Keith Richards",
      "Charlie Watts",
      "Mick Jagger",
      "Bill Wyman"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these famous American authors is not a Pulitzer Prize winner?",
    "options": [
      "Thornton Wilder",
      "Mark Twain",
      "Edith Wharton",
      "Margaret Mitchell"
    ],
    "correctIndex": 1
  },
  {
    "question": "This landlocked Alpine country, whose official Latin name is Confoederatio Helvetica, is a federation of relatively autonomous cantons.",
    "options": [
      "Austria",
      "Switzerland",
      "Belgium",
      "Liechtenstein"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the Crimean war, which lasted from 28 March 1854 until 1856, an alliance of the United Kingdom, France, the Ottoman Empire and Piedmont-Sardinia fought against which country?",
    "options": [
      "Germany",
      "Russia",
      "Italy",
      "Austria"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which statement about Gee Jon, who died on February 8, 1924, at the age of 29, is true?",
    "options": [
      "He was the last person released from an American internment camp",
      "He was the first American who died in the Northern Expedition in China",
      "He was the first identical twin to survive separation",
      "He was the first person in the USA executed by lethal gas"
    ],
    "correctIndex": 3
  },
  {
    "question": "German chemist Martin Klaproth discovered uranium in what year?",
    "options": [
      "1891",
      "1938",
      "1789",
      "678"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Voltaic pile, known as the first modern electric battery, was invented by Alessandro Volta in what year?",
    "options": [
      "1459",
      "1800",
      "1890",
      "1902"
    ],
    "correctIndex": 1
  },
  {
    "question": "This leader, who ruled the Holy Roman Empire from 1792 until 1806, is known as the last Holy Roman Emperor.",
    "options": [
      "Francis II",
      "Wilhelm XII of Saxony",
      "Francis Ferdinand I of Austria",
      "Wilhelm I of Prussia"
    ],
    "correctIndex": 0
  },
  {
    "question": "On December 3rd 1967, South African surgeon Christiaan Barnard succeeded in performing what?",
    "options": [
      "The first human heart transplant",
      "The first brain operation",
      "The first lung transplant",
      "The first kidney transplant"
    ],
    "correctIndex": 0
  },
  {
    "question": "The famous Leporello Catalogue Aria is from which Mozart opera?",
    "options": [
      "Don Giovanni",
      "La Boheme",
      "Cosi Fan Tutti",
      "La Traviata"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Greek word hamartia, used in Aristotles Poetics, means what?",
    "options": [
      "Incredible strength",
      "Drama",
      "A broken heart",
      "A fatal flaw"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who directed the 1931 musical comedy Le Million, in which the storyline centers on a lottery ticket?",
    "options": [
      "Ernest Lubitsch",
      "Josef von Sternberg",
      "Charlie Chaplin",
      "Rene Clair"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what city was the first , free, public high school opened?",
    "options": [
      "Orono",
      "Charleston",
      "Boston",
      "Philadelphia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What company sold the first quartz wristwatch?",
    "options": [
      "Bulova",
      "Seiko",
      "Omega",
      "Casio"
    ],
    "correctIndex": 1
  },
  {
    "question": "A clay tablet, which dates from around 2300 bce is on display at the museum in Konya, Turkey. What is on the tablet?",
    "options": [
      "The earliest known math text.",
      "The earliest known map",
      "The earliest known accounting ledger.",
      "The earliest known portrait."
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the first town built by Europeans in the Western Hemisphere?",
    "options": [
      "Porto Espana",
      "Santo Domingo",
      "Isabella",
      "Hispaniola"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1948 several cities in the USA had comic books burnt publicly.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the 2004  Dennis Quaid / Sela Ward movie The Day After Tomorrow, books are burned in order to avoid freezing. Why were some characters in the movie angry?",
    "options": [
      "They only burned religious books.",
      "They burned the encyclopedias first.",
      "They burned the oldest books first.",
      "They did not burn the furniture."
    ],
    "correctIndex": 3
  },
  {
    "question": "The exprssion The dog days of summer  was first used because of this.",
    "options": [
      "A false idea about the effect of animals on the world",
      "A description of how dogs pant",
      "An astronomical idea",
      "A superstition"
    ],
    "correctIndex": 2
  },
  {
    "question": "In Irish it is Taim ingra leat. In Hebrew it is Ani ohev otah. In Hungarian it is Sz eretiek. In Dutch it is ik houd van jou. What is it in English?",
    "options": [
      "I love you.",
      "How are you today?",
      "Good morning",
      "Sleep well."
    ],
    "correctIndex": 0
  },
  {
    "question": "Robert Todd Lincoln Beckwith was the last of the Lincoln line. When did he die?",
    "options": [
      "1898",
      "1927",
      "1956",
      "1985"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the last state to put photos on drivers licenses?",
    "options": [
      "New Jersey",
      "Hawaii",
      "Alaska",
      "New York"
    ],
    "correctIndex": 3
  },
  {
    "question": "Brian Hayes coined the term umop-episdn.  What does it mean?",
    "options": [
      "A computer glitch",
      "Alien language",
      "Topsy-turvy",
      "A mishmash of languages"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Portland Alien Museum is dedicated to studying alien life and life forms.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Petite Danseuse de Quartorze Ans by Edgar Degas is a painting depicting a 14-year-old dancer.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what city was the first permanent drama theater in Europe opened?",
    "options": [
      "Malaga, Spain",
      "Vilna, Lithuania",
      "Rotterdam, The Netherlands",
      "Bucharest, Romania"
    ],
    "correctIndex": 0
  },
  {
    "question": "The first professional sports organization in the USA was formed in this city.",
    "options": [
      "Boston",
      "Baltimore",
      "Charleston",
      "Cleveland"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does sagination mean?",
    "options": [
      "The act of fattening up",
      "The state of being pale",
      "The state of being morose",
      "The act of bleeding"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who won the first chess tournament in the USA?",
    "options": [
      "Adolph Anderssen",
      "John Marshall",
      "Paul Morphy",
      "Henry  Bird"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who is considered the Father of Modern Dentistry?",
    "options": [
      "Horace Wells",
      "Lucien Hobbs",
      "Norman Kingsley",
      "Pierre Fauchard"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is Darlene Iskra famous for?",
    "options": [
      "She was the first female architect to design a skyscraper.",
      "She was the first female winner of the Pulitzer Prize in Feature Writing",
      "She was the first woman to command a US Navy ship during a war.",
      "She was the first US female to demand the right to vote."
    ],
    "correctIndex": 2
  },
  {
    "question": "Andreas Gruenintzig was the doctor who first  performed this procedure.",
    "options": [
      "Thyroidectomy",
      "Bone marrow transplant",
      "Lung transplant",
      "Angioplasty"
    ],
    "correctIndex": 3
  },
  {
    "question": "Finish the nursery rhyme:",
    "options": [
      "pickled pickles",
      "pickles",
      "pickled peppers",
      "Peppers"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who does Michael Corleone give the kiss of death in one of the most memorable scenes of the movie Godfather II?",
    "options": [
      "Kay Corleone",
      "Sonny Corleone",
      "Tom Hagen",
      "Fredo Corleone"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to the New Testament, which of the 12 Apostles gave Jesus a kiss, known as the kiss of betrayal?",
    "options": [
      "Thaddeus",
      "Judas",
      "Bartholomew",
      "Simon the Zealot"
    ],
    "correctIndex": 1
  },
  {
    "question": "This actress, best known for playing Ilsa Lund in one of the most popular romantic dramas, defined a kiss as a lovely trick designed by nature to stop speech when words become superfluous.",
    "options": [
      "Greta Garbo",
      "Elizabeth Taylor",
      "Ingrid Bergman",
      "Katherine Hepburn"
    ],
    "correctIndex": 2
  },
  {
    "question": "What movie soundtrack features Seals Grammy Award-winning song Kiss from a Rose?",
    "options": [
      "GoldenEye",
      "French Kiss",
      "Batman Forever",
      "Braveheart"
    ],
    "correctIndex": 2
  },
  {
    "question": "What Shakespearean comedy inspired Cole Porters musical Kiss Me, Kate?",
    "options": [
      "The Taming of the Shrew",
      "Measure for Measure",
      "Twelfth Night",
      "Alls Well That Ends Well"
    ],
    "correctIndex": 0
  },
  {
    "question": "What fictional character in a romantic drama were the following words addressed to: Open your eyes and look at me. No, I dont think I will kiss you. Although you need kissing badly. Thats whats wrong with you. You should be kissed, and often, and by someone who knows how.?",
    "options": [
      "Ilsa Lund (Casablanca)",
      "Scarlett OHara (Gone with the Wind)",
      "Allie Hamilton (The Notebook)",
      "Rose DeWitt  (Titanic)"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ace Frehley, one of the original members of Kiss, created the bands iconic logo, in which the letters SS look like lightning bolts. In which of these countries have Kiss used a modified version of their logo in order to avoid controversy?",
    "options": [
      "Australia",
      "Germany",
      "Russia",
      "USA"
    ],
    "correctIndex": 1
  },
  {
    "question": "A kunik is an intimate way of greeting that involves pressing the nose and upper lip against the skin of the other person. What group of people is this form of greeting typically associated with?",
    "options": [
      "Pygmies in Central Africa",
      "Eskimos",
      "Native Americans in the US",
      "Tasmanian Aborigines"
    ],
    "correctIndex": 1
  },
  {
    "question": "What character in the movie Casablanca was interrupted by Rick while singing, You must remember this / A kiss is still a kiss / A sigh is just a sigh ...?",
    "options": [
      "Ilsa",
      "Captain Renault",
      "Victor Laszlo",
      "Sam"
    ],
    "correctIndex": 3
  },
  {
    "question": "This actress and singer, who performed her first adult on-screen kiss in the 1940 movie Little Nelly Kelly, wrote a love poem containing the lines:",
    "options": [
      "Liza Minneli",
      "t into my heart",
      "t my soul.",
      "Ava Gardner",
      "Judy Garland",
      "Lauren Bacall"
    ],
    "correctIndex": 4
  },
  {
    "question": "What was the name of the first 3-D film?",
    "options": [
      "The Strange Boy",
      "The Power of Love",
      "The Power of the Thing",
      "It Flew to Earth"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which was the first TV series regularly broadcast in color?",
    "options": [
      "Bonanza",
      "Gunsmoke",
      "The Flintstones",
      "Hawaii 5-0"
    ],
    "correctIndex": 0
  },
  {
    "question": "Nuclear fusion is the production of energy from the splitting of certain atoms.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The nickname of this U.S. state is The Equality State. Its motto is Equal Right.",
    "options": [
      "Colorado",
      "Wyoming",
      "Maryland",
      "Vermont"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the first message spelled out in a neon sign?",
    "options": [
      "Neon",
      "Eat at Joes",
      "The Sahara",
      "Enter"
    ],
    "correctIndex": 0
  },
  {
    "question": "This persons goddaughter is Gwyneth Paltrow and he hired her for her first role, Wendy in Hook. Who is he?",
    "options": [
      "Robert Zemeckis",
      "Brian DePalma",
      "Steven Spielberg",
      "Ridley Scott"
    ],
    "correctIndex": 2
  },
  {
    "question": "Edward Nigma was the name of which fictional character?",
    "options": [
      "Friday",
      "Professor  Moraiarity",
      "The Riddler",
      "The  Joker"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many miles per gallon did the 1908 Ford Model T get?",
    "options": [
      "10-15",
      "25-30",
      "20-25",
      "15-20"
    ],
    "correctIndex": 1
  },
  {
    "question": "The members of this band included Sgt. Floyd   Pepers, Janice, Zoot, Animal, and Lips.",
    "options": [
      "The  Zoot Sims Big Band",
      "Dr. Teeth and Electric Mayhem",
      "The Fabulous Baker brothers",
      "Nylon"
    ],
    "correctIndex": 1
  },
  {
    "question": "At what temperature does water begin to boil on top of Mount Everest?",
    "options": [
      "150 degrees Fahrenheit",
      "212 degrees Fahrenheit",
      "150 degrees Centigrade",
      "0 degrees Kelvin"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is the name of the computer program developed by the Hollywood division of the Los Angeles Police Department to create a  database of crimes, criminals, and all related information.",
    "options": [
      "ROBBER-E",
      "BEAT/COP",
      "HITMAN",
      "BOOK-EM"
    ],
    "correctIndex": 2
  },
  {
    "question": "What do Lou Gehrig, the four Beatles, Beethoven, Bach and Mr. Spock have in common?",
    "options": [
      "They are asteroids.",
      "They have stars on the New York City Walk of Fame.",
      "They are enshrined in the US Hall of Fame in New York City.",
      "They are stars."
    ],
    "correctIndex": 0
  },
  {
    "question": "What do you add to steel to make it stainless?",
    "options": [
      "Copper",
      "Zinc",
      "Bronze",
      "Chromium"
    ],
    "correctIndex": 3
  },
  {
    "question": "This word can mean to jump straight up or a foolish and/or weak person.",
    "options": [
      "Zaber",
      "Pronk",
      "Clouth",
      "Phenalk"
    ],
    "correctIndex": 1
  },
  {
    "question": "This actor played Murphy Brown\u00e2\u0080\u0099s son in the Murphy Brown sitcom.",
    "options": [
      "Scott Bryce",
      "Haley Joel Osmont",
      "Jake Gyllendall",
      "Jay Thomas"
    ],
    "correctIndex": 1
  },
  {
    "question": "How did Michael Moore finance his movie \u00e2\u0080\u009eRoger and Me?\u00e2\u0080\u009d",
    "options": [
      "He sold hunting equipment.",
      "He sold over 100% of the film to investors",
      "He ran bingo games.",
      "He managed a Walmart in Flint, Michigan."
    ],
    "correctIndex": 2
  },
  {
    "question": "U.S. antitrust lawyers took Microsoft to court claiming that the company tried to use its monopolistic power to destroy this computer language.",
    "options": [
      "JAVA",
      "LINUS",
      "LOTUS",
      "COBOL"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which singer led The Nude Tour?",
    "options": [
      "Issac Hayes",
      "Jewel",
      "Ashanti",
      "Prince"
    ],
    "correctIndex": 3
  },
  {
    "question": "He was the first NHL player to buy his former team.",
    "options": [
      "Mario Lemieux",
      "Wayne Gretsky",
      "Gordie Howe",
      "Patrick Roy"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which super computer lost a match to Garry Kasparov?",
    "options": [
      "Cycletrone-Check",
      "Cray-1",
      "Deep Blue",
      "Super Check"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the Arabic term, Maghrib represent?",
    "options": [
      "City of the believers",
      "Place of peace",
      "Prison",
      "Sunset prayers"
    ],
    "correctIndex": 3
  },
  {
    "question": "Widely known as Crazy Bet, she was a famous Union spy in the American Civil War.",
    "options": [
      "Betty Carson",
      "Elizabeth Jenkins",
      "Elizabeth Garrison",
      "Elizabeth Van Lew"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Pendleton Civil Service Reform Act, which established the United States Civil Service Commission, was drafted during the office of which President?",
    "options": [
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Chester A. Arthur",
      "Williaam Howard Taft"
    ],
    "correctIndex": 2
  },
  {
    "question": "The melody of which 1951 pop song was written by a politician who was awarded the Nobel Peace Prize?",
    "options": [
      "All in the Game",
      "Lets Fall in Love",
      "Rock Around the Clock",
      "I Cant Help Falling in Love With You"
    ],
    "correctIndex": 0
  },
  {
    "question": "The famous Japanese cherry trees were planted in Washington, D.C., around the Tidal Basin at the request of which US First Lady?",
    "options": [
      "Betty Ford",
      "Anna Eleanor Roosevelt",
      "Helen Taft",
      "Lou Henry Hoover"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the Latin proverb, Dum spiro, spero, mean in English?",
    "options": [
      "Do to others the same as you do to yourself.",
      "I know that I dont know anything.",
      "Dont look a gift horse in the mouth.",
      "While I breath, I hope"
    ],
    "correctIndex": 3
  },
  {
    "question": "You are given a bag with 10 marbles, four red marbles and six blue marbles. You select one at random. What is the probability  that the marble you select is either blue or green?",
    "options": [
      "6 out of ten",
      "0",
      "4 out of ten",
      "2  out of ten"
    ],
    "correctIndex": 0
  },
  {
    "question": "This French mathematician, physicist, and religious philosopher, author of the Lettres provinciales, stated the following: There are truths on this side of the Pyranees, which are falsehoods on the other.",
    "options": [
      "Blaise Pascal",
      "Democritus",
      "Francis Mayron",
      "Rene Descartes"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Irish playwright, novelist and poet wrote the following line in his famous play Waiting for Godot: We are all born mad. Some remain so.",
    "options": [
      "Samuel Beckett",
      "Thomas Hardy",
      "Marcel Proust",
      "Bernard Shaw"
    ],
    "correctIndex": 0
  },
  {
    "question": "The standing long jump and the standing high jump were once Olympic sports.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This soul singer and songwriter, often called Silky Smooth because of his rich baritone, is famous for his hits Rainy Night in Georgia, Fools Rush In, This Time of the Year.",
    "options": [
      "Jackie Wilson",
      "David Ruffin",
      "Brook Benton",
      "Sam Cook"
    ],
    "correctIndex": 2
  },
  {
    "question": "This city, known also as Anvil City, is situated  in Northwest Alaska.",
    "options": [
      "Stockton",
      "Palmer",
      "Barrow",
      "Nome"
    ],
    "correctIndex": 3
  },
  {
    "question": "Easter Island, an island in the south Pacific Ocean, is a territory of which country?",
    "options": [
      "The United States",
      "Peru",
      "Ecuador",
      "Chile"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Walden Pond, made famous by writer, naturalist, and philosopher Henry David Thoreau, is located in which US state?",
    "options": [
      "Alaska",
      "Washington",
      "North Carolina",
      "Massachusetts"
    ],
    "correctIndex": 3
  },
  {
    "question": "The dialectic of this philosopher is most often characterized as a three-step process of  thesis, antithesis, synthesis. According to his concept, a thesis would cause the creation of its antithesis and this would eventually result in a synthesis.",
    "options": [
      "Marx",
      "Nietzsche",
      "Kant",
      "Hegel"
    ],
    "correctIndex": 3
  },
  {
    "question": "In Freuds psychoanalytic theory, the defense mechanism in which anxiety-producing or unacceptable emotions are replaced by their direct opposites is defined by which term?",
    "options": [
      "Hysteria",
      "Positivism",
      "Reaction formation",
      "Transference"
    ],
    "correctIndex": 2
  },
  {
    "question": "Bloomsday is a secular holiday, which commemorates the life of Irish writer James Joyce and the fictitious events in his novel Ulysses. Bloomsday is celebrated annually, on what date?",
    "options": [
      "October 19",
      "December 24",
      "June 16",
      "July 3"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the Latin phrase ceteris paribus mean?",
    "options": [
      "All other things being equal",
      "Let the seller beware",
      "Let the buyer beware",
      "The case can not stand"
    ],
    "correctIndex": 0
  },
  {
    "question": "This medical term refers to a disease-causing protein agent that contains no genetic material.",
    "options": [
      "Prion",
      "Lemma",
      "Papule",
      "Alper"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Russian city, founded by Grand Duke George II of Russia in 1221, was called Gorky from 1932 to 1990.",
    "options": [
      "Nizhny Novgorod",
      "Okastock",
      "Vladivostock",
      "St. Okasburgh"
    ],
    "correctIndex": 0
  },
  {
    "question": "What song by The Beatles, recorded during the Sgt. Pepper sessions, contains the lyrics:",
    "options": [
      "Strawberry Fields Forever",
      "hind the shelter in the middle of a roundabout",
      "Help!",
      "Penny Lane",
      "A Hard Days Night"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which animal is the record holder for the largest male genital organ-to-body length ratio in nature?",
    "options": [
      "Starfish",
      "Horse",
      "Slug",
      "Elephant"
    ],
    "correctIndex": 2
  },
  {
    "question": "The purpose of the striped fur of most tigers species is camouflage.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The California state flag originally featured a wolf.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "A day on Venus is equal to how many Earth days?",
    "options": [
      "23",
      "119",
      "243",
      "306"
    ],
    "correctIndex": 2
  },
  {
    "question": "A fly flies slower when the sun is behind the clouds.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is it true that starfish can see with the help of the two eyes at the end of each leg?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which great composer wrote Wellingtons Victory , which included cannons, drums, and a lot of  brass?",
    "options": [
      "Mendelssohn",
      "Beethoven",
      "Schumann",
      "Schubert"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which was the first sub-Saharan African nation to gain its freedom?",
    "options": [
      "Ghana",
      "Somalia",
      "Malawi",
      "Gabon"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which US state is the Bicycle Museum of America located?",
    "options": [
      "Ohio",
      "Indiana",
      "Massachusetts",
      "North Carolina"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement is untrue about Luxembourg?",
    "options": [
      "Its original wealth came from the iron mines in the region.",
      "It is a duchy.",
      "Its capital, Esch-sur-Alzette, is not its largest city.",
      "It is often grouped with the Benelux group of European nations."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these famous Russian politicians was also famed as a literary critic?",
    "options": [
      "Khrushchev",
      "Trotsky",
      "Lenin",
      "Stalin"
    ],
    "correctIndex": 1
  },
  {
    "question": "Queen Elizabeth II was coronated Queen in 1953. Whom did she directly succeed?",
    "options": [
      "George VI",
      "Edward VIII",
      "George V",
      "Elizabeth Bowes-Lyon"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who is considered the first American to be killed in the Cold War?",
    "options": [
      "Alan Funt",
      "Allen Dulles",
      "William Donovan",
      "John Birch"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1078, a battle between two rulers was averted because of a chess game.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Elmer Valo, a Major League Baseball player and coach, is one of the few American major leaguers born in this country.",
    "options": [
      "Germany",
      "The Czech Republic",
      "Surinam",
      "Serbia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following political figures was the first to fight a war as President of the United States?",
    "options": [
      "James Monroe",
      "Thomas Jefferson",
      "Andrew Jackson",
      "George Washington"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which was the first racehorse to run the Kentucky Derby in less than 2 minutes?",
    "options": [
      "Secretariat",
      "Cigar",
      "Man OWar",
      "Seabiscuit"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which English king had wives called Catherine, Anne, Jane, Anne, Catherine and Catherine, in that order?",
    "options": [
      "Henry the Seventh",
      "William the Fifth",
      "Charles the Fourth",
      "Henry the Eighth"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of the robot in the 1986 comedy sci-fi film Short Circuit and its 1988 sequel Short Circuit 2?",
    "options": [
      "Johnny 5",
      "C-3PO",
      "Apollo 440",
      "Sentinel 7"
    ],
    "correctIndex": 0
  },
  {
    "question": "This novella by H.P. Lovecraft was published in 1936 and is about a hybrid race of human/ fish/ frog people who inhabit a small town in Massachusetts.",
    "options": [
      "Something Wicked This Way Comes",
      "The Deep Ones",
      "The Shadow Over Innsmouth",
      "The Gods of Pegana"
    ],
    "correctIndex": 2
  },
  {
    "question": "There is no cure for this disease that is characterized by the death of muscle cells and tissue. Diagnosis is often based on the results of a muscle biopsy.",
    "options": [
      "Scoliosis",
      "Multiple sclerosis",
      "Cerebral palsy",
      "Muscular dystrophy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Twilight Zone is a term used by the United States Air Force to describe the border between day and night on a planetary body.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This song about a paralyzed war veteran whose wife cheats on him was written by Mel Tillis and performed by Kenny Rogers and the First Edition in 1969. It has also been recorded by CAKE, The Killers, Waylon Jennings, Roger Miller and Wolfsheim.",
    "options": [
      "Leave the Bourbon on the Shelf",
      "Ruby, Dont Take Your Love to Town",
      "Reuben James",
      "Never There"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many colonies formed United States of America in 1776?",
    "options": [
      "51",
      "50",
      "13",
      "7"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the correct formal name of the country known as the UK?",
    "options": [
      "United Kingdom of Great Britain and Northern Ireland",
      "Great Britain",
      "United Kingdom of England, Scotland, Wales and Northern Ireland",
      "Union of Kingdoms of England and Scotland"
    ],
    "correctIndex": 0
  },
  {
    "question": "This English city is home to a top European soccer team, which contains the word United in its name and is nicknamed The Red Devils.",
    "options": [
      "Glasgow",
      "Liverpool",
      "Manchester",
      "London"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the full name of the Benetton fashion brand?",
    "options": [
      "United Benetton Designers",
      "United Colors of Benetton",
      "Benetton Fashion Union",
      "Benetton Union"
    ],
    "correctIndex": 1
  },
  {
    "question": "What city is the capital of the European Union?",
    "options": [
      "Brussels",
      "Strasbourg",
      "Luxembourg",
      "The EU has no official capital."
    ],
    "correctIndex": 3
  },
  {
    "question": "What city is the capital of the United Arab Emirates?",
    "options": [
      "Al Riyadh",
      "Dauha",
      "Abu Dhabi",
      "Dubai"
    ],
    "correctIndex": 2
  },
  {
    "question": "What airport is the largest hub of United Airlines?",
    "options": [
      "OHare in Chicago",
      "Metropolitan in Detroit",
      "Dallas Fort Worth",
      "La Guardia in New York"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the meaning of soviet, as in Soviet Union?",
    "options": [
      "Socialistic",
      "Council",
      "Communist",
      "Republic"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the full name of UTC, the company that manufactures Sikorsky helicopters?",
    "options": [
      "United Technologies Corporation",
      "United Tennessee Company",
      "Union of high-Technology Corporations",
      "Union of Texas Craft-makers"
    ],
    "correctIndex": 0
  },
  {
    "question": "WETYIAFHKLXVNM",
    "options": [
      "top",
      "none",
      "neither",
      "bottom"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first person to be crowned Czar of Russia?",
    "options": [
      "Nicholas III",
      "Alexander IV",
      "Ivan the Terrible",
      "Mikhail Romanov"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the first play Shakespeare wrote?",
    "options": [
      "The Tempest",
      "A Midsummers Night Dream",
      "Hamlet",
      "Henry VI, Part One"
    ],
    "correctIndex": 3
  },
  {
    "question": "What do Oscar Robertson (ex-NBA All-Star) and Roy Orbison (the great singer/songwriter) have in common?",
    "options": [
      "The same birthplace",
      "The same nickname",
      "The same birthdate",
      "The same wife"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which country was Carlos Mencia born?",
    "options": [
      "Guatemala",
      "Ecuador",
      "Nicaragua",
      "Honduras"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is a bibliopole?",
    "options": [
      "Someone who buys books",
      "Someone who loves books",
      "Someone who hates books",
      "Someone who sells books"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the Papstiche Schweizergarde?",
    "options": [
      "The formal name for the Alps",
      "A 500 year-old brewery in Basel, Switzerland",
      "A garden in Switzerland dedicated to peace",
      "A 500 year-old organization of Swiss guards"
    ],
    "correctIndex": 3
  },
  {
    "question": "The square root of a number is always smaller than that number.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why are Cipriano dela Valera and Casiodoro de Reina famous in the Spanish-speaking world?",
    "options": [
      "They are responsible for the first translation of  Don Quixote into English.",
      "They are responsible for the most popular Spanish version of the Bible.",
      "They are the publishers of the top-selling Spanish-language newspapers in  the USA.",
      "They are the top stars of Spanish-language television in the USA."
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the dancer described in the following lyrics?",
    "options": [
      "Mr. Bojangles",
      "Mr Butterbeans",
      "Mr Wiggle",
      "Mr. Greenjeans"
    ],
    "correctIndex": 0
  },
  {
    "question": "The following group of words (as a whole) makes up a palindrome:",
    "options": [
      "man.  A plan.  A canal.  Panama.",
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What musician is often referred to as The Man in Black?",
    "options": [
      "Seal",
      "Will Smith",
      "Johnny Cash",
      "Prince"
    ],
    "correctIndex": 2
  },
  {
    "question": "What kind of object does the term black hole refer to in physics?",
    "options": [
      "A collapsed star",
      "All of these",
      "A space storm",
      "A gap between time and space"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is black color, or kuro, associated with in Japanese tradition?",
    "options": [
      "Experience",
      "Age",
      "All of these",
      "Nobility"
    ],
    "correctIndex": 2
  },
  {
    "question": "What day is commonly called Black Friday in the United States?",
    "options": [
      "The Friday after Easter",
      "The first Friday of the year",
      "The Friday after Thanksgiving",
      "Friday the 13th"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the black color associated with in Native American tradition?",
    "options": [
      "Storms",
      "War",
      "Soil",
      "Death"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the meaning of the expression the new black in the fashion world?",
    "options": [
      "Something old-fashioned",
      "Something that is completely unwearable",
      "Something considered very trendy and a fashion basic",
      "Something returning in fashion after long absence"
    ],
    "correctIndex": 2
  },
  {
    "question": "The members of what subculture have adopted a preference for the black color?",
    "options": [
      "Hippie",
      "All of these",
      "Hip hop",
      "Goth"
    ],
    "correctIndex": 3
  },
  {
    "question": "What female musician won five Grammy Awards for her album and song Back to Black?",
    "options": [
      "Beyonce Knowles",
      "Amy Winehouse",
      "Christina Aguilera",
      "Alicia Keys"
    ],
    "correctIndex": 1
  },
  {
    "question": "The outbreak of what deadly disease is often referred to as Black Death?",
    "options": [
      "Tuberculosis",
      "Plague",
      "Malaria",
      "Cholera"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name used for black tea in Chinese, Korean and Japanese languages?",
    "options": [
      "Crimson tea",
      "Grey tea",
      "Purple tea",
      "Brown tea"
    ],
    "correctIndex": 0
  },
  {
    "question": "Mixing what colors will result in a brown color?",
    "options": [
      "Red and black",
      "All of these",
      "Black and yellow",
      "Black and orange"
    ],
    "correctIndex": 1
  },
  {
    "question": "What planet has brown clouds floating over its surface?",
    "options": [
      "Jupiter",
      "Neptune",
      "Uranus",
      "Saturn"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is James Browns honorific nickname?",
    "options": [
      "King of Jazz",
      "Godfather of Soul",
      "King of the Blues",
      "Chairman of the Board"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does the term browning refer to in cooking?",
    "options": [
      "All of these",
      "Caramelization",
      "Removing excess fat from meat by heating",
      "Maillard reaction"
    ],
    "correctIndex": 0
  },
  {
    "question": "What song by Irish band U2 contains the line, Blue-eyed boy meets a brown-eyed girl?",
    "options": [
      "The One",
      "Beautiful Day",
      "The Sweetest Thing",
      "Elevation"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the name of the brownish pigment that gives coloration to the human skin, iris and hair?",
    "options": [
      "Mezamine",
      "Melanin",
      "Melamine",
      "Methylamine"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the brown aura associated with in parapsychology?",
    "options": [
      "Spite",
      "Disease",
      "Greed",
      "Serenity"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the most important ingredient for preparing brownies, a type of American dessert?",
    "options": [
      "Chocolate",
      "Coffee",
      "Brown sugar",
      "Molasses"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the literal meaning of the Japanese word Chairo which denotes a brown color?",
    "options": [
      "Tea color",
      "Earth color",
      "Chestnut color",
      "Wood color"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the popular song written by American composer Joseph Winner in 1869?",
    "options": [
      "Little Brown Jug",
      "Little Brown Bug",
      "Little Brown Child",
      "Little Brown Chair"
    ],
    "correctIndex": 0
  },
  {
    "question": "Complete the title of this 1983 song by Prince:",
    "options": [
      "Camaro",
      "Corvette",
      "Impala",
      "Malibu"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which U.S. state is nicknamed The Golden State?",
    "options": [
      "Alaska",
      "Florida",
      "Colorado",
      "California"
    ],
    "correctIndex": 3
  },
  {
    "question": "What Academy Award-winning actress starred in the 1981 movie On Golden Pond?",
    "options": [
      "Meryl Streep",
      "Katharine Hepburn",
      "Susan Sarandon",
      "Elizabeth Taylor"
    ],
    "correctIndex": 1
  },
  {
    "question": "What actor portrayed agent James Bond in the 1964 movie Goldfinger?",
    "options": [
      "Timothy Dalton",
      "Sean Connery",
      "Roger Moore",
      "George Lazenby"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which wedding anniversary is known as the Golden Wedding Anniversary, or Golden Wedding Day?",
    "options": [
      "60th anniversary",
      "50th anniversary",
      "40th anniversary",
      "25th anniversary"
    ],
    "correctIndex": 1
  },
  {
    "question": "Of what animal is the legendary Golden Fleece from Greek mythology?",
    "options": [
      "Cow",
      "Dragon",
      "Goat",
      "Ram"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what field is the Golden Duck Award given annually?",
    "options": [
      "Childrens science fiction",
      "Egocentric celebrities",
      "Politicians who waste government money",
      "Animated short films"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 1000 people, how many would be from Asia?",
    "options": [
      "125",
      "505",
      "610",
      "450"
    ],
    "correctIndex": 2
  },
  {
    "question": "If the world were a village of 1000 people, how many would be from the African continent?",
    "options": [
      "24",
      "149",
      "85",
      "239"
    ],
    "correctIndex": 1
  },
  {
    "question": "If the world were a village of 1000 people, how many would be from the North American continent?",
    "options": [
      "79",
      "152",
      "224",
      "363"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 1000 people, how many would speak Mandarin as their first language?",
    "options": [
      "26",
      "74",
      "432",
      "132"
    ],
    "correctIndex": 3
  },
  {
    "question": "If the world were a village of 1000 people, how many would speak English as their first language?",
    "options": [
      "352",
      "59",
      "154",
      "659"
    ],
    "correctIndex": 1
  },
  {
    "question": "If the world were a village of 1000 people, how many would speak Hindi as their first language?",
    "options": [
      "101",
      "5",
      "21",
      "463"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 1000 people, how many would be non-religious (that is: Atheist, Agnostic, Secular Humanist, No preference)?",
    "options": [
      "482",
      "2",
      "23",
      "171"
    ],
    "correctIndex": 3
  },
  {
    "question": "If the world were a village of 1000 people, how many would be in the workforce?",
    "options": [
      "762",
      "895",
      "484",
      "225"
    ],
    "correctIndex": 2
  },
  {
    "question": "if the world were a village of 1000 people, how many would be age 65 or older?",
    "options": [
      "223",
      "195",
      "74",
      "364"
    ],
    "correctIndex": 2
  },
  {
    "question": "If the world were a village of 1000 people, how many would be doctors?",
    "options": [
      "16",
      "29",
      "1",
      "5"
    ],
    "correctIndex": 2
  },
  {
    "question": "If the world were a village of 1000 people, how many would be teachers?",
    "options": [
      "7",
      "16",
      "89",
      "36"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 1000 people, how many would own an automobile?",
    "options": [
      "425",
      "200",
      "70",
      "350"
    ],
    "correctIndex": 2
  },
  {
    "question": "If the world were a village of 1000 people, what would the life expectancy of the villagers be?",
    "options": [
      "76",
      "66",
      "82",
      "71"
    ],
    "correctIndex": 1
  },
  {
    "question": "If the world were a village of 1000 people, how many acres of land would be in the village?",
    "options": [
      "6000",
      "12000",
      "4000",
      "25000"
    ],
    "correctIndex": 0
  },
  {
    "question": "If the world were a village of 1000 people, what would the per capita income (in USD, Atlas method) of the villagers be?",
    "options": [
      "$12500",
      "$7000",
      "$45000",
      "$26000"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these terms means fear of pins and needles?",
    "options": [
      "Batrachophobia",
      "Batophobia",
      "Barophobia",
      "Belonephobia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Bathophobia means fear of taking a bath.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Bibliophobia means fear of reading the bible.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which term means fear of gravity?",
    "options": [
      "Barophobia",
      "Basophobia",
      "Bolshephobia",
      "Bacillophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "What word means fear of prostitutes or venereal disease?",
    "options": [
      "Cynophobia",
      "Cyclophobia",
      "Cypridophobia",
      "Cymophobia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Catoptrophobia is defined as fear of mirrors.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Cancerophobia is a condition characterized by fear of malignant growth.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What word means fear of newness or novelty?",
    "options": [
      "Cainophobia",
      "Carcinophobia",
      "Caligynephobia",
      "Cancerophobia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Chiraptophobia means fear of snow.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What should be done according to a Russian superstition when someone has left the house and gone on a long journey?",
    "options": [
      "An extra dish is left on the table.",
      "Their radio or TV should not be turned off until they come back.",
      "Their room and their possessions should not be cleaned up until they have arrived.",
      "Their room should be locked up so that nobody would enter."
    ],
    "correctIndex": 2
  },
  {
    "question": "There is a Russian tradition of spitting three times to chase away bad luck, similar to knocking on wood. Where should one spit?",
    "options": [
      "In front of their feet",
      "Over their right shoulder",
      "Over their left shoulder",
      "Through their crossed fingers"
    ],
    "correctIndex": 2
  },
  {
    "question": "What should one do on examination day in order not to chase away good luck according to Russian superstition?",
    "options": [
      "One should not cut their nails.",
      "All of these",
      "One should not wear anything new.",
      "One should not make their bed."
    ],
    "correctIndex": 1
  },
  {
    "question": "What kind of presents are considered to be taboo according to Russian superstition?",
    "options": [
      "Perfumes",
      "Black objects",
      "Sharp objects",
      "Baby clothes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where shouldnt unmarried people sit if they dont want to stay single for a long time according to Russian superstition?",
    "options": [
      "At the corner of the table",
      "At a crossroad",
      "Under the table",
      "Under an oak tree"
    ],
    "correctIndex": 0
  },
  {
    "question": "What should a stranger say when seeing a baby less that an year old according to Russian tradition?",
    "options": [
      "They should not speak or smile",
      "Oh, what an ugly child!",
      "May you grow tall and healthy!",
      "May God guide your way!"
    ],
    "correctIndex": 1
  },
  {
    "question": "How is a latecomer punished in Russian traditions?",
    "options": [
      "They are seated away from the table.",
      "They are not allowed to sit.",
      "They are forced to drink a full glass of alcohol.",
      "They are forbidden to take off their coat."
    ],
    "correctIndex": 2
  },
  {
    "question": "What will happen very soon if the cat is washing its face according to Russian beliefs?",
    "options": [
      "Guests will come.",
      "It is going to rain.",
      "Somebody will die.",
      "Someone will get pregnant."
    ],
    "correctIndex": 0
  },
  {
    "question": "What does sneezing while talking mean according to Russian superstition?",
    "options": [
      "The person is telling the truth.",
      "They will be healthy and will live long.",
      "The sneezing person is lying.",
      "The sneezing person will receive money soon."
    ],
    "correctIndex": 0
  },
  {
    "question": "What will happen if a fork or a spoon falls on the ground according to Russian superstition?",
    "options": [
      "A female guest will come.",
      "A male child will be born in the house.",
      "The person who dropped it will have to work very hard.",
      "The crops will be abundant."
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following movies does not star Will Ferrell?",
    "options": [
      "Mrs. Doubtfire",
      "Super star",
      "Zoolander",
      "Elf"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the first routine that Chazz Michael Michaels and Jimmy MacElroy do together in the movie Blades of Glory?",
    "options": [
      "Dont Want to Miss a Thing",
      "Together",
      "Fire and Water",
      "Fire and Ice"
    ],
    "correctIndex": 3
  },
  {
    "question": "How was the FIFA World Cup Won in 2006?",
    "options": [
      "None of these",
      "The winner was decided by the end of the regular time.",
      "penalty kick shootout",
      "One team won in overtime."
    ],
    "correctIndex": 2
  },
  {
    "question": "If there is a one way street and there are two cars going the opposite direction, is either of the drivers breaking the law?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why did King Oedipus marry his mother according to the Greek legend?",
    "options": [
      "To keep their riches withing the family",
      "Because he fell in love with her",
      "He didnt known she was his mother.",
      "Because the gods forced him to do it"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the actor who starred in the 2007 drama movie There Will Be Blood.",
    "options": [
      "Kevin Spacey",
      "Sean Penn",
      "Keanu Reeves",
      "Daniel Day-Lewis"
    ],
    "correctIndex": 3
  },
  {
    "question": "What blood song did Michael Jackson release in 1997?",
    "options": [
      "Blood on the Bar",
      "Blood on the Scene",
      "Blood on My Hands",
      "Blood on the Dance Floor"
    ],
    "correctIndex": 3
  },
  {
    "question": "What actor starred as mercenary Danny Archer in the 2006 movie Blood Diamond?",
    "options": [
      "Tom Cruise",
      "Ben Affleck",
      "Leonardo DiCaprio",
      "Jamie Foxx"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the title of a 1971 Academy Award-nominated movie directed by John Schlesinger?",
    "options": [
      "Monday Bloody Monday",
      "Sunday Bloody Sunday",
      "Wednesday Bloody Wednesday",
      "Thursday Bloody Thursday"
    ],
    "correctIndex": 1
  },
  {
    "question": "What female musician released the single Red Blooded Woman in 2004?",
    "options": [
      "Beyonce Knowles",
      "Britney Spears",
      "Christina Aguilera",
      "Kylie Minogue"
    ],
    "correctIndex": 3
  },
  {
    "question": "What action star played the lead role in the 1988 movie Bloodsport?",
    "options": [
      "Arnold Schwarzenegger",
      "Sylvester Stallone",
      "Bruce Willis",
      "Jean-Claude Van Damme"
    ],
    "correctIndex": 3
  },
  {
    "question": "The term cheiromancy, also known as palm reading, is derived from Greek. What does it literally mean?",
    "options": [
      "Secrets of the hand",
      "Fortune telling",
      "Skin testing",
      "Hand divination"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what country is the art of palm reading believed to have originated?",
    "options": [
      "Greece",
      "India",
      "Persia",
      "China"
    ],
    "correctIndex": 1
  },
  {
    "question": "What characteristics of the palm are explored by palm readers to predict the future or estimate the personality of its owner?",
    "options": [
      "The fingers of the hand",
      "The lines of the skin",
      "All of these",
      "The bumps of the skin"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to a theory, palm readers should explore only the left hand of people which of the following people?",
    "options": [
      "Unmarried people",
      "Women",
      "Men",
      "Children"
    ],
    "correctIndex": 1
  },
  {
    "question": "What classification of the hands do modern palmists most often use to define the personality of the owner?",
    "options": [
      "All of these",
      "By elements",
      "By seasons",
      "By animals"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is not within the lines of the palm explored by palm readers?",
    "options": [
      "Life line",
      "Head line",
      "Heart line",
      "Past line"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the Sun line of the human palm associated with in palmistry?",
    "options": [
      "Relationships",
      "Future",
      "Fame",
      "Children"
    ],
    "correctIndex": 2
  },
  {
    "question": "Cheirognomy is part of chiromancy, or palm reading. What is the object of its study?",
    "options": [
      "The mounts of the palm",
      "The fingers",
      "The feet and toes",
      "The fingernails"
    ],
    "correctIndex": 0
  },
  {
    "question": "How are the people having rectangular palms, flushed skin and short fingers classified according to palmistry?",
    "options": [
      "Dragon",
      "Storm",
      "Fire",
      "Summer"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which line of the palm is traditionally examined first by palm readers?",
    "options": [
      "Heart line",
      "Life line",
      "Sun line",
      "Mercury line"
    ],
    "correctIndex": 0
  }
];