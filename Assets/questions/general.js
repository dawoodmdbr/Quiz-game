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
  }
]