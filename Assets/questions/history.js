const questions = [
  {
    "question": "In which US state is the active Mount Rainier volcano located?",
    "options": [
      "Michigan",
      "Ohio",
      "Washington",
      "New York"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1990, this 5000 year old body was found in the Alps. Scientists discovered some tattoos on his leg which indicated that acupuncture was used as far back as the Copper-stone Age.",
    "options": [
      "Big Foot",
      "Sasquatch",
      "Nessie",
      "Oetzi"
    ],
    "correctIndex": 3
  },
  {
    "question": "After unsuccessful  talks about oil production and debt repayment, Iraq occupied Kuwait.  In January 1991 the US launched an air attack against military targets in Iraq and Kuwait in this operation.",
    "options": [
      "Matador",
      "BOLERO",
      "Determined Force",
      "Desert Storm"
    ],
    "correctIndex": 3
  },
  {
    "question": "It is the process of producing identical copies of a DNA segment asexually.  In 1996 the first successful one of an animal was made. The animals name was Dolly.  Dolly later died, but Richard Seed announced that he intended try it on humans.",
    "options": [
      "Organ Transplant",
      "Cloning",
      "Bloodless Surgery",
      "Laser Surgery"
    ],
    "correctIndex": 1
  },
  {
    "question": "This kind of music became largely popular in Europe and America in the 1990s. It is a melodic, free form combination between techno and house, having hypnotic qualities. The first distinctive track of this kind was Age Of Love, released in 1990.",
    "options": [
      "Electro",
      "Trance",
      "Techno",
      "Dance"
    ],
    "correctIndex": 1
  },
  {
    "question": "This womans death was arguably the most shocking one of the decade. She died in 1997 in a car crash while evading paparazzi. The woman was taken to a hospital, but the two-hour efforts of surgeons to save her life were unsuccessful.",
    "options": [
      "Greta Garbo",
      "Nancy Marchand",
      "Madam C. J. Walker",
      "Princess Diana"
    ],
    "correctIndex": 3
  },
  {
    "question": "This union, made up of European countries, was established by the Maastricht Treaty in 1992. Starting as a trade body it is now an economic and political partnership between its members.",
    "options": [
      "American Labor Union",
      "Oxford Union",
      "The European Union",
      "European Trade Union"
    ],
    "correctIndex": 2
  },
  {
    "question": "Although the first one was sent in 1971, it became widely popular in 1998. Its popularity caused explosive growth of the internet.",
    "options": [
      "The Chat programs",
      "The URL",
      "The E-mail",
      "The Website"
    ],
    "correctIndex": 2
  },
  {
    "question": "Impeachment stands for quickly removing dangerously criminal officials from high office. The Impeachment Trial in the Senate for this US President commenced on January 7, 1999.",
    "options": [
      "George Bush",
      "Ronald Reagan",
      "Bill Clinton",
      "Richard Nixon"
    ],
    "correctIndex": 2
  },
  {
    "question": "On August 17, 1999 this disaster took the lives of 15 000 and injured 23 000 people in western Turkey.",
    "options": [
      "Earthquake",
      "Tsunami",
      "Avalanche",
      "Volcano eruption"
    ],
    "correctIndex": 0
  },
  {
    "question": "These became more advanced and more popular in the 1990, with some of the most influential ones being  the Super Nintendo Entertainment System, the Sony Playstation, and the Sega Dreamcast.",
    "options": [
      "Dating sites",
      "Virtual reality systems",
      "Video Game consoles",
      "Computer games"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Punic Wars were a series of three wars fought between these two powers.",
    "options": [
      "Rome and Athens",
      "Athens and Sparta",
      "Carthage and Athens",
      "Rome and Carthage"
    ],
    "correctIndex": 3
  },
  {
    "question": "The 1938 incorporation of Austria in Greater Germany under the Nazi Regime is known as this.",
    "options": [
      "Ansatz",
      "Abwer",
      "Anschluss",
      "Ahnentafel"
    ],
    "correctIndex": 2
  },
  {
    "question": "Henry Kissinger held this US post from 1974 to 1977.",
    "options": [
      "President of the Senate",
      "Speaker of the House of Representatives",
      "National Security Advisor",
      "Secretary of State"
    ],
    "correctIndex": 3
  },
  {
    "question": "One of these cities has been Japans capital in the past.",
    "options": [
      "Kyoto",
      "Yokohama",
      "Hiroshima",
      "Osaka"
    ],
    "correctIndex": 0
  },
  {
    "question": "Anne of Austria was the mother of Louis XIV of France (the Sun King).",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Valeria Messalina was the third wife of this Roman emperor.",
    "options": [
      "Caligula",
      "Tiberius",
      "Nero",
      "Claudius"
    ],
    "correctIndex": 3
  },
  {
    "question": "Philip II of France, Richard I of England and Frederick I led this campaign.",
    "options": [
      "Childrens Crusade",
      "Albigensian Crusade",
      "Fourth Crusade",
      "Third Crusade"
    ],
    "correctIndex": 3
  },
  {
    "question": "Yu the Great was the legendary first Chinese monarch of this dynasty.",
    "options": [
      "Xia Dynasty",
      "Qing (Manchu) Dynasty",
      "Ming Dynasty",
      "Yuan Dynasty"
    ],
    "correctIndex": 0
  },
  {
    "question": "This German general was nicknamed The Desert Fox due to the skillful military campaigns he waged in North Africa, during World War II.",
    "options": [
      "Erwin Rommel",
      "Hermann Goring",
      "George Patton",
      "Bernard Montgomery"
    ],
    "correctIndex": 0
  },
  {
    "question": "The term Blitzkrieg, referring to swift, sudden military offensive, is translated as Thunder War.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many landing beaches were there in the 1944 Normandy Invasion, known as Operation Overlord?",
    "options": [
      "Four",
      "Six",
      "Five",
      "Three"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the name of the first jet-powered fighter used in World War II?",
    "options": [
      "P-51",
      "Hurricane",
      "Me-262",
      "MIG-3"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which member of the Nazi Party was known as Adolph Hitlers first architect of the Third Reich?",
    "options": [
      "Rudolph Hess",
      "Albert Speer",
      "Hermann Goring",
      "Joseph Mengele"
    ],
    "correctIndex": 1
  },
  {
    "question": "The British evacuation from which French port was codenamed Operation Dynamo, in 1940?",
    "options": [
      "Brest",
      "Cherbourg",
      "Dunkirk",
      "Toulon"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which American politician said the following about liberty: They that can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.\u00e2\u20ac\u009d?",
    "options": [
      "Benjamin Franklin",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "George Washington"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which US President delivered the following words: Ask not what your country can do for you, ask what you can do for your country.?",
    "options": [
      "William J. Clinton",
      "Franklin D. Roosevelt",
      "Abraham Lincoln",
      "John F. Kennedy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which US President said these words: A democracy is nothing more than mob rule, where fifty-one percent of the people may take away the rights of the other forty-nine.?",
    "options": [
      "Abraham Lincoln",
      "Thomas Jefferson",
      "Benjamen Franklin",
      "John F. Kennedy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which US President made the following statement: America stands for liberty, for the pursuit of happiness and for the unalienable right for life. This right to life cannot be granted or denied by government because it does not come from the government, it comes from the creator of life.?",
    "options": [
      "George W. Bush",
      "Thomas Jefferson",
      "John Adams",
      "George Washington"
    ],
    "correctIndex": 0
  },
  {
    "question": "These words were spoken by Jed Babbin, a former deputy undersecretary of defence in the first Bush administration, on January 30, 2003: Going to war without France is like going deer hunting without an accordion. You just leave a lot of useless noisy baggage behind.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which great American leader made the following statement: Any people anywhere, being inclined and having the power, have the right to rise up, and shake off the existing government, and form a new one that suits them better. This is a most valuable - a most sacred right - a right, which we hope and believe, is to liberate the world.\u00e2\u20ac\u009d?",
    "options": [
      "Benjamin Franklin",
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson"
    ],
    "correctIndex": 1
  },
  {
    "question": "The M1 Carbine is the most mass produced small arm weapon in the United States. Even though it was mainly produced by the Inland Division of General Motors, its design belongs to this famous company.",
    "options": [
      "Winchester",
      "Kalashnikov",
      "GIAT Industries",
      "Magnum Research Inc."
    ],
    "correctIndex": 0
  },
  {
    "question": "How many Medal of Honor citations have been issued during the Vietnam War?",
    "options": [
      "245",
      "345",
      "153",
      "120"
    ],
    "correctIndex": 0
  },
  {
    "question": "One of the worlds greatest generals. By  the age of 30 he ruled almost half of the world. This great leader died at the peak of his campaign at the age of 33.  His was taught by Aristotle.",
    "options": [
      "Alexander The Great",
      "Darius",
      "Julius Caesar",
      "Augustus"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Carthaginian general marched from Spain to Rome across the Alps.  14,000 of his 40,000 troops died because of the harsh climate.  Later, he won the Battle of Cannae.",
    "options": [
      "Augustus",
      "Gaius Marius",
      "Lesius Quietus",
      "Hannibal"
    ],
    "correctIndex": 3
  },
  {
    "question": "His saying, Veni Vidi Vici (I came I saw I conquered) is known all over the world.  His war feats clothed him with glory giving him political power.",
    "options": [
      "Marcus Antonius",
      "Julius Caesar",
      "Augustus",
      "Darius"
    ],
    "correctIndex": 1
  },
  {
    "question": "This American general  led the invasion of Normandy.  He was also an American president from 1953 to 1961.",
    "options": [
      "Dwight Eisenhower",
      "George S. Patton",
      "MacArthur",
      "William H. Simpson"
    ],
    "correctIndex": 0
  },
  {
    "question": "He was one of the best military officers of Russia during the World War II and involved in the taking of Berlin.",
    "options": [
      "Lavr Kornilov",
      "Georgi Zhukov",
      "Alexander Samsonov",
      "Nicholas Nikolaevich"
    ],
    "correctIndex": 1
  },
  {
    "question": "The siege of Leningrad lasted just 1 month.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Along with the French general, this British general also led the campaign in Northern Africa during the World War II.  He was accused of not fighting bravely enough, after his lack of success in Operation Lightfoot.",
    "options": [
      "Dwight Eisenhower",
      "Bernard Montgomery",
      "Georg Stumme",
      "John White"
    ],
    "correctIndex": 1
  },
  {
    "question": "This island was Englands first overseas colony.",
    "options": [
      "Rhodes",
      "Newfoundland",
      "Iceland",
      "Greenland"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1962 Jamaica gained full independence from the United Kingdom, but before even becoming a British colony, Jamaica was possession of this country.",
    "options": [
      "Spain",
      "Portugal",
      "Russia",
      "Italy"
    ],
    "correctIndex": 0
  },
  {
    "question": "Barbados has never been a British colony.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Australia was officially settled in 1788 as the penal colony of New South Wales. Over the course of the 19th century this many new self-governing Crown Colonies were established on the continent.",
    "options": [
      "4",
      "5",
      "3",
      "12"
    ],
    "correctIndex": 1
  },
  {
    "question": "One of  the results of the Second Anglo-Dutch War, between England and the United Netherlands, was that the city of New Amsterdam was renamed to this.",
    "options": [
      "New York",
      "New Jersey",
      "New Mexico",
      "New Orleans"
    ],
    "correctIndex": 0
  },
  {
    "question": "Sri Lanka was not considered part of the British Raj.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Slavery was outlawed in all British colonies in this year.",
    "options": [
      "1812",
      "1912",
      "1834",
      "1738"
    ],
    "correctIndex": 2
  },
  {
    "question": "On July 1, 1997, the former British colony of Hong Kong reunified with the Peoples Republic of China. This man was the last governor of Hong Kong.",
    "options": [
      "Henry Tang",
      "Chris Patten",
      "Tung Chee Hwa",
      "Donald Tsang"
    ],
    "correctIndex": 1
  },
  {
    "question": "Britain was not interested in African territories and thus has never controlled any.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the nickname of Tom Cruises character in Top Gun?",
    "options": [
      "Goose",
      "Iceman",
      "Maverick",
      "Viper"
    ],
    "correctIndex": 2
  },
  {
    "question": "What NBA team won their 16th NBA Championship title on June 8,1986?",
    "options": [
      "Boston Celtics",
      "Houston Rockets",
      "L.A. Lakers",
      "Chicago Bulls"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these songs was not on Bon Jovis chart-topping 1986 album Slippery When Wet?",
    "options": [
      "Ill Be There for You",
      "Never Say Goodbye",
      "Livin on a Prayer",
      "Wanted Dead Or Alive"
    ],
    "correctIndex": 0
  },
  {
    "question": "When this significant event took place on January 28, 1986, students worldwide saw it on live television.",
    "options": [
      "A nuclear reactor at the Chernobyl nuclear plant explodes",
      "Space Shuttle Challenger explodes",
      "The United States Senate allows its debates to be televised",
      "Pope John Paul II officially visits the Synagogue of Rome"
    ],
    "correctIndex": 1
  },
  {
    "question": "The New York Mets were World Champions in baseball in the 1986 world series.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of these actors was not in the Academy Award winning Oliver Stone film Platoon?",
    "options": [
      "Tom Berenger",
      "Charlie Sheen",
      "Johnny Depp",
      "Tom Cruise"
    ],
    "correctIndex": 3
  },
  {
    "question": "On what album released in 1986 would I find the following lyrics:",
    "options": [
      "True Stories - Talking Heads",
      "Control - Janet Jackson",
      "Raising Hell - Run DMC",
      "True Colors - Cyndi Lauper"
    ],
    "correctIndex": 1
  },
  {
    "question": "What southern sitcom, which debuted in 1986, are the following characters from: Julia, Suzanne, Mary Jo, Charlene, Anthony and Bernice?",
    "options": [
      "Designing Women",
      "Mamas Family",
      "Its A Living",
      "The Golden Girls"
    ],
    "correctIndex": 0
  },
  {
    "question": "This was an attempt to establish the use of the metric system in the United States. However it was not accepted and the US never converted.",
    "options": [
      "The 1975 Metric Conversion Act",
      "IEEE Conversion RFC",
      "The Common management interface protocol",
      "ANSI Metric Conversions"
    ],
    "correctIndex": 0
  },
  {
    "question": "This suspension bridge collapsed due to resonance - a twisting pattern never seen before, took the bridge down.",
    "options": [
      "The John Hancock Bridge",
      "Willamette River Pedestrian Bridge",
      "The Tacoma Narrows Bridge",
      "The Golden Gate Bridge"
    ],
    "correctIndex": 2
  },
  {
    "question": "In early 1985 the manufacturer of this drink changed the recipe of the product, but after months of complaints, it was forced by the consumers to restore the original formula.",
    "options": [
      "Coca Cola",
      "Pepsi",
      "Yoo-hoo",
      "Dr. Pepper"
    ],
    "correctIndex": 0
  },
  {
    "question": "At the time, this was the most complex ship, employing safety measures unseen before.  She was double-bottomed and separated into 16 watertight compartments. Nevertheless, she sank on her maiden voyage.",
    "options": [
      "Titanic",
      "Britanic",
      "Andrea Doria",
      "The Empress of Ireland"
    ],
    "correctIndex": 0
  },
  {
    "question": "This rap artist, born Stanley Kirk Burrell was known for his lavish tours and catchy hooks.  However, his attempted restyling as a gangsta-rapper was a failure",
    "options": [
      "MC Hammer",
      "Marky Mark",
      "Busta Rhymes",
      "Vanilla Ice"
    ],
    "correctIndex": 0
  },
  {
    "question": "This aircraft was proposed by Boeing in the 80s, but never entered production due to excessive noise from its unducted fan engines and high production costs.",
    "options": [
      "Spruce Goose flying boat",
      "Boeing 7J7",
      "Boeing Business Jet",
      "Boeing 737"
    ],
    "correctIndex": 1
  },
  {
    "question": "This tank was built during World War II, but had weight and speed issues.  It never saw battle.",
    "options": [
      "Panzerkampfwagen VIII Maus",
      "Sturmpanzer IV Brummb\u00e4r",
      "M3A5 Grant",
      "Heavy Tank Charron 2C"
    ],
    "correctIndex": 0
  },
  {
    "question": "This 15,000 ton, German-built ship maintained a route from Tallinn to Stockholm.  In 1994, it sunk to the bottom of the Baltic Sea due to a badly designed bow door.",
    "options": [
      "Estonia Ferry",
      "Blak Bark of Ostend",
      "Barge of Calais",
      "Castor to Circe"
    ],
    "correctIndex": 0
  },
  {
    "question": "Three of these political events occurred in the 80s. Which one happened earlier?",
    "options": [
      "The Collapse of the Soviet Union",
      "The USA invades Panama",
      "The Winter of Discontent in the UK",
      "The Velvet Revolution in Czechoslovakia"
    ],
    "correctIndex": 2
  },
  {
    "question": "All of these famous political leaders lost their power in the 80s, except one. Can you spot him?",
    "options": [
      "Augusto Pinochet",
      "Ceausescu",
      "Francois Mitterrand",
      "Gustav Husak"
    ],
    "correctIndex": 2
  },
  {
    "question": "The AIDS epidemic was identified and named before 1980.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Mel Gibson starred in all of the following four movies. However, only one of them was produced during the 80s.  Which one?",
    "options": [
      "Forever Young",
      "Mad Max",
      "Lethal Weapon 3",
      "Lethal Weapon 2"
    ],
    "correctIndex": 3
  },
  {
    "question": "The TV-series Taxi was first released during this period.",
    "options": [
      "1990s",
      "1960s",
      "1970s",
      "1980s"
    ],
    "correctIndex": 2
  },
  {
    "question": "One of these TV productions was not released in the 80s.",
    "options": [
      "Dynasty",
      "The Cosby Show",
      "Saturday Night Live",
      "L.A. Law"
    ],
    "correctIndex": 2
  },
  {
    "question": "Michael Keatons debut was in the 80s.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Celtic chieftain fought Julius Caesar in Gaul, in the first century B.C.?",
    "options": [
      "Vercingetorix",
      "Odoacer",
      "Hasdrubal",
      "Leonidas"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Merovingian became king in the fifth century A.D.?",
    "options": [
      "Arpad",
      "Clovis",
      "Ethelred",
      "Belisarius"
    ],
    "correctIndex": 1
  },
  {
    "question": "Archaic French is still spoken in the area of this once French colony, lost to the British in 1763.",
    "options": [
      "Quebec",
      "Senegal ( West Africa)",
      "Haiti",
      "Cambodia"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what year did the French Revolution begin?",
    "options": [
      "1789",
      "1693",
      "1724",
      "1637"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what year was Napoleon Bonaparte crowned emperor of France?",
    "options": [
      "1807",
      "1804",
      "1810",
      "1801"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year did the French pull out of Indochina?",
    "options": [
      "1949",
      "1964",
      "1954",
      "1970"
    ],
    "correctIndex": 2
  },
  {
    "question": "What statesman became the first President, under the Fifth Republic of France, in 1959?",
    "options": [
      "Albert Lebrun",
      "Vincent Auriol",
      "Charles De Gaulle",
      "Rene Coty"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year was Francois Mitterrand elected President of  France?",
    "options": [
      "1975",
      "1987",
      "1993",
      "1981"
    ],
    "correctIndex": 3
  },
  {
    "question": "What French monarch was known as the Sun King?",
    "options": [
      "Louis X",
      "Charles VII",
      "Louis XIV",
      "Henry III"
    ],
    "correctIndex": 2
  },
  {
    "question": "Although he spent 32 years as a criminal, this Wild West rogue killed only a single person. He was mainly engaged in robbing banks and became the first criminal to use an automobile for his escape.",
    "options": [
      "Burt Alvord",
      "Henry Starr",
      "Cherokee Bill",
      "Frank Canton"
    ],
    "correctIndex": 1
  },
  {
    "question": "This man killed his first victim at the age of 12. By the time he was 15 he had become an expert shot. As he was almost 6 feet tall, strong and quick in shooting, people were afraid of him. However, the $1,300 reward made some ordinary citizens work out an elaborate plan to capture him.",
    "options": [
      "Dutch Charley",
      "Billy the Kid",
      "Butch Cassidy",
      "Cherokee Bill"
    ],
    "correctIndex": 3
  },
  {
    "question": "This famous outlaw was very friendly and most of his shooting was done in self defense. He became an outlaw after someone murdered his employer, Tunstall, whom he loved as a father. At Tunstalls funeral, this outlaw swore that he would kill every man who had been involved in the Tunstalls murder.",
    "options": [
      "Jesse James",
      "Billy the Kid",
      "Juan Flores",
      "Frank Jackson"
    ],
    "correctIndex": 1
  },
  {
    "question": "While in charge of the guardhouse at San Carlos, this outlaw left his post to chase a man whom he considered responsible for his fathers death. When he came back, he argued with his superior and shot him in the leg. Arizona territorial legislature offered a $5,000 cash reward, but he was never captured.",
    "options": [
      "Johnny Behind the Deuse",
      "Pearl Hart",
      "Apache Kid",
      "Frank Jackson"
    ],
    "correctIndex": 2
  },
  {
    "question": "His first crime was breaking into a store and taking a pair of pants, leaving a message that he would pay later.  He went on to steal cattle from farmers, and later robbed the San Miguel Valley Bank robbery in Telluride, escaping with $20,000.",
    "options": [
      "Daniel Boone",
      "Pancho Villa",
      "Butch Cassidy",
      "Buffalo Bill"
    ],
    "correctIndex": 2
  },
  {
    "question": "Although this criminal, who acted with his brother, would rob banks and trains, he was a favourite of the press of his day. In various journalistic materials he was often presented as the contemporary Robin Hood. It was a fact that he preferred to rob rich people, but it was simply because they had more money.",
    "options": [
      "Jesse James",
      "Bill Miner",
      "Joaquin Murieta",
      "Jim Reed"
    ],
    "correctIndex": 0
  },
  {
    "question": "After his father was killed, this man sought revenge. He joined Quantrills fighting force. It was reported that he often frothed at his mouth in his almost psychopathic rage in battles. Some sources say he had a silk string with knots for every shot Yankee.",
    "options": [
      "Jim Murphy",
      "Billy the Kid",
      "William Bloody Bill Anderson",
      "Sundance Kid"
    ],
    "correctIndex": 2
  },
  {
    "question": "This man was known as the Mexican Robin Hood. He set up a band of 5 members, all with the same first name. His band is credited with stealing more than $100,000 in gold and over 100 horses.",
    "options": [
      "Belle Star",
      "Nathaniel Reed Texas Jack",
      "George Newcomb Bitter Creek",
      "Joaquin Murietta"
    ],
    "correctIndex": 3
  },
  {
    "question": "This criminal was active during the Gold Rush. He was famous for leaving poems in the place of the gold that he had stolen. He never robbed valuables from the passengers of the stagecoaches, he preferred treasure boxes.",
    "options": [
      "Henry Clay White",
      "Cyrus Skinner",
      "Bob Younger",
      "Black Bart"
    ],
    "correctIndex": 3
  },
  {
    "question": "This man was nicknamed the King of the Cowboys after he took part in the gun fight at the OK Corral in Tombstone, Arizona. When in 1879 he went West in Arizona, he achieved still more infamy, as the main antagonist of Wyatt Earp.",
    "options": [
      "Johnny Ringo",
      "Tom Starr Uncle Tom",
      "Jim Murphy",
      "Lee H. Musgrove"
    ],
    "correctIndex": 0
  },
  {
    "question": "In August of 2005, a Category 4  hurricane devastated the Gulf coast of the U.S.,  leaving much of the city of New Orleans flooded and without power.  Name the hurricane responsible for this widespread swath of destruction.",
    "options": [
      "Rita",
      "Louise",
      "Katrina",
      "Isabella"
    ],
    "correctIndex": 2
  },
  {
    "question": "On May 22, 1987, a multiple vortex tornado devastated this small Texas town.",
    "options": [
      "Saragosa",
      "Texarcico",
      "Northumberland",
      "Zeetop"
    ],
    "correctIndex": 0
  },
  {
    "question": "The towns of Dana, Enfield, Greenwich, and Prescott, Massachusetts were all disincorporated on April 28, 1938, because of the following.",
    "options": [
      "It was agreed upon by a consensus of the 4 towns populace, to disincorporate due to flagging economic conditions.",
      "All 4 towns were destroyed in a massive fire, and the area was rebuilt as a distant suburb of Boston.",
      "The land was needed for a large reservoir.",
      "A major railroad  company secured rights to the land and built a rail line through the heart of all 4 towns."
    ],
    "correctIndex": 2
  },
  {
    "question": "Jonestown, Guyana, home to the Peoples Temple religious cult,  was virtually wiped off the map in November of 1978, when the cult leader induced 900 of his followers to drink cyanide laced Kool - Aid.  What was this cult leaders name?",
    "options": [
      "Rev Dr. Parker Smalling",
      "Rev. Alloyuishius Gant",
      "Rev. Jim Jones",
      "Rev. Donald Dunforth"
    ],
    "correctIndex": 2
  },
  {
    "question": "Muscogee, Florida was once a thriving village located 20 miles NW of Pensacola, Florida.  It was founded in 1857, yet by 1928 it was all but abandoned.  What was the cause of this towns demise?",
    "options": [
      "It was a haven for circus performers until 1925, when the circus left for Sarasota, and the performers followed.",
      "It was a lumber mill town, and in 1928, the mills were sold.",
      "It was a town largely dependent on the fishing industry, which experienced an economic downturn in the early 1920s.",
      "It was flooded to make way for a canal which is part of the Inter - Coastal Waterway."
    ],
    "correctIndex": 1
  },
  {
    "question": "Sinepuxent, a town on the eastern shore of Maryland, was destroyed by a tornado in 1818, and never rebuilt.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Napoleon, Arkansas, a once thriving river town situated near the confluence of the Arkansas and Mississippi rivers, was flooded by the two rivers, but was successfully rebuilt.",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "New Burlington, Ohio was once a community located in NW Clinton County, Ohio.  It was flooded when the U.S. Government  flooded Caesar Creek in order to construct a reservoir.  When did this take place?",
    "options": [
      "1960s",
      "Late 1880s",
      "1970s",
      "1930s"
    ],
    "correctIndex": 2
  },
  {
    "question": "Achilles, Kansas was a thriving town whose heyday ran from the 1870s to approximately 1915.   By the year 1930, it was all but defunct.  What was responsible for this towns demise?",
    "options": [
      "It became one of the casualties of The Great Depression.",
      "It was largely devastated by a tornado in late 1915, and never recovered economically.",
      "It was bypassed by the railroad.",
      "It was requisitioned by the U.S. Army Corp. of Engineers, and slated to be flooded  in 1930."
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1988, this talk show host once brought out 67 pound of animal fat to show how much weight they lost.",
    "options": [
      "Oprah Winfrey",
      "Johnny Carson",
      "David Letterman",
      "Rikki Lake"
    ],
    "correctIndex": 0
  },
  {
    "question": "This musician sang about an Uptown Girl in 1983.",
    "options": [
      "Bryan Adams",
      "Paul Simon",
      "Elton John",
      "Billy Joel"
    ],
    "correctIndex": 3
  },
  {
    "question": "Mr. Rogers, from the childrens television show Mr. Rogers Neighborhood, once donated a sweater his mother made him to the Smithsonian National Museum of American History.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Amy Carter, daughter of former president Jimmy Carter, was arrested in 1987 for protesting against campus CIA recruitment.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This group is known for their 1984 song Were Not Gonna Take It.",
    "options": [
      "Quiet Riot",
      "Ratt",
      "Rough Cutt",
      "Twisted Sister"
    ],
    "correctIndex": 3
  },
  {
    "question": "What term did hippies use to refer to the institutions and structures they rejected?",
    "options": [
      "The Power",
      "The System",
      "The Reign",
      "The Establishment"
    ],
    "correctIndex": 3
  },
  {
    "question": "The term Summer of Love, associated with the hippie counterculture movement, refers to the summer of what year?",
    "options": [
      "1965",
      "1971",
      "1970",
      "1967"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these artists did not participate in the Woodstock festival, an event regarded as the high point of the hippie movement?",
    "options": [
      "Jimi Hendrix",
      "Bob Dylan",
      "Joe Cocker",
      "Janis Joplin"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this 1979 movie, Claude Bukowski, a boy from Oklahoma, visits New York City and befriends a group of hippies before being sent to an Army training camp.",
    "options": [
      "The Misfits",
      "Hair",
      "The Strawberry Statement",
      "Yellow Submarine"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which American novelist, held Acid Tests in the 1960s, together with his circle of friends, known as the Merry Pranksters?",
    "options": [
      "Norman Mailer",
      "Kurt Vonnegut",
      "Joseph Heller",
      "Ken Kesey"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Free Speech Movement was a student protest that began in 1964 on the campus of which university?",
    "options": [
      "University of California, Berkeley",
      "California State University, Los Angeles",
      "Anderson University, Indiana",
      "Florida International University"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which British band released the hit single Hippy Hippy Shake in 1963?",
    "options": [
      "The Swinging Blue Jeans",
      "The Kinks",
      "The Rolling Stones",
      "The Hollies"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these 1960s famous hippie gatherings did not take place in San Francisco?",
    "options": [
      "The Human Be-In",
      "The Summer of Love",
      "Nambassa",
      "The Love Pageant Rally"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which 1970 book includes advice on such topics as growing marijuana, starting a pirate radio station and stealing food?",
    "options": [
      "To Sail Beyond the Sunset",
      "Stranger in a Strange Land",
      "The Cat Who Walks Through Walls",
      "Steal This Book"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1969, John Lennon and Yoko Ono held two, week-long Bed-Ins for Peace. In which city was their first Bed-In?",
    "options": [
      "Amsterdam",
      "Los Angeles",
      "Montreal",
      "New York City"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Vietnam War is viewed not just as a conflict between South Vietnam and North Vietnam, but as a conflict of ideology between the communist block and western values. Which of these countries did not belong to the coalition of forces that supported the western-oriented, South Vietnam?",
    "options": [
      "The United Kingdom",
      "Australia",
      "New Zealand",
      "South Korea"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Academy Award-winning film, directed by Oliver Stone, is based on the autobiographical book of Ron Kovic, a Vietnam War veteran, who became an anti-war activist.",
    "options": [
      "Born on the 4th of July",
      "Platoon",
      "Apocalypse Now",
      "Hair"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is the code name of the bombing operation in North Vietnam, carried out by the US armed forces, which lasted between 1965 and 1968.",
    "options": [
      "Operation Farmgate",
      "Operation Rolling Thunder",
      "Operation Urgent Fury",
      "Operation Arc Light"
    ],
    "correctIndex": 1
  },
  {
    "question": "This US President introduced his policy of \u00e2\u20ac\u02dcvietnamization\u00e2\u20ac\u2122- enabling the South Vietnamese to take more responsibility for fighting the war on their own.",
    "options": [
      "Lyndon Johnson",
      "Richard Nixon",
      "Harry Truman",
      "John Kennedy"
    ],
    "correctIndex": 1
  },
  {
    "question": "This communist offensive, launched on January 30, 1968, which comprised attacks on major cities and military bases throughout South Vietnam, was named after an important Vietnamese public holiday.",
    "options": [
      "Tet Offensive",
      "Ram offensive",
      "Ngay Offensive",
      "Ong offensive"
    ],
    "correctIndex": 0
  },
  {
    "question": "Shooting at anti-war demonstrators at this university on May 4, 1970, triggered a nationwide student strike across America.",
    "options": [
      "University of Maryland",
      "Western Washington University",
      "Kent State University",
      "University of Montana"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the route running from South Vietnam through Laos and Cambodia into North Vietnam, used by North Vietnamese for sending soldiers to the south and for supplying the NLF (National Liberation Front ).",
    "options": [
      "Bao Dai Trail",
      "Diem Trail",
      "Chi Thien Trail",
      "Ho Chi Minh Trail"
    ],
    "correctIndex": 3
  },
  {
    "question": "This American diplomat and statesman served as a National Security Advisor and later as a Secretary of State. He was awarded the 1973 Nobel Peace Prize for his role in negotiating a ceasefire and US withdrawal from the war in Vietnam.",
    "options": [
      "Dean Rusk",
      "Henry Kissinger",
      "Robert McNamara",
      "William Westmoreland"
    ],
    "correctIndex": 1
  },
  {
    "question": "This American was sentenced to life in prison, because in 1968 he led the My Lai massacre of Vietnamese civilians, including women, children and elderly men.",
    "options": [
      "Clark Clifford",
      "John Kerry",
      "William Calley",
      "Ernest Medina"
    ],
    "correctIndex": 2
  },
  {
    "question": "In this film, set during the Vietnam war, the following words are delivered by Lieutenant Colonel Bill Kilgore:  You smell that? Do you smell that? Napalm, son. Nothing else in the world smells like that. I love the smell of napalm in the morning.",
    "options": [
      "The Deer Hunter",
      "Apocalypse Now",
      "Platoon",
      "Casualties of War"
    ],
    "correctIndex": 1
  },
  {
    "question": "Two months after South Carolina seceded from the Union on December 21, 1860, Mississippi, Florida, Alabama, Georgia, and North Carolina voted to secede as well.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What Union General in charge was defeated during the First Battle of Bull Run, the first major land battle of the American Civil War?",
    "options": [
      "Fremont",
      "Hunter",
      "McClellan",
      "McDowell"
    ],
    "correctIndex": 3
  },
  {
    "question": "During the American Civil War, in April 1862, Union Flag Officer David Farragut, who was in command of the West Gulf Blockading Squadron, took control of which vital port of the South?",
    "options": [
      "Tampa",
      "New Orleans",
      "Mobile",
      "Charleston"
    ],
    "correctIndex": 1
  },
  {
    "question": "After the death of this Confederate general on on May 10, 1863, General Lee remarked, I have lost my right arm.",
    "options": [
      "Pickett",
      "Jackson",
      "Boregaurd",
      "Armstrong"
    ],
    "correctIndex": 1
  },
  {
    "question": "What African American Regiment helped to assault Fort Wagner in South Carolina during the American Civil War?",
    "options": [
      "31st Connecticut",
      "22nd Pennsylvania",
      "52nd New York",
      "54th Massachusetts"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which general commanded the Confederate forces at the Battle of Gettysburg, that started on July 1, 1863?",
    "options": [
      "George Meade",
      "George Pickett",
      "Robert E. Lee",
      "James Longstreet"
    ],
    "correctIndex": 2
  },
  {
    "question": "Ulysses S. Grant and Robert E. Lee served together in which military conflict, regarded as a prelude to the American Civil War?",
    "options": [
      "Indian War",
      "Mexican War",
      "Harpers Ferry",
      "Bleeding Kansas"
    ],
    "correctIndex": 1
  },
  {
    "question": "What play was President Lincoln watching at Fords Theatre, when he was assassinated by a Southern sympathizer from Maryland?",
    "options": [
      "Othello",
      "Our American Cousin",
      "Our Fair Lady",
      "Macbeth"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Battle of Worcester, the Battle of Hopton Heath, and the Battle of Winceby are just three of the battles during this civil war.",
    "options": [
      "Irish Civil War",
      "English Wars of the Roses",
      "American Civil War",
      "English Civil War"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Battle of Grunwald, the Battle of Chojnice, and the Battle of Swiecin are three battles fought during this war.",
    "options": [
      "Breton War of Succession",
      "Onin War",
      "War of Scottish Independence",
      "Thirteen Years War"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Battle of Ludford Bridge, the First Battle of St Albans, and the Battle of Blore Heath are three battles fought during this war.",
    "options": [
      "Norman Conquest",
      "Hundred Years War",
      "Swabian War",
      "Wars of the Roses"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Battle of Sandepu, the Battle of Mukden, and the Battle of Dairen are just three of the battles fought during this war.",
    "options": [
      "Russo-Japanese War",
      "Long March in China",
      "Second Sino-Japanese War",
      "First Sino-Japanese War"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Battle of Passchendaele, the Battle of Cer, and the Battle of the Frontiers were fought during this war.",
    "options": [
      "WWI",
      "Turco-Italian War",
      "Polish-Soviet War",
      "Czechoslovak-Polish War"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Battle of El Alamein, the Battle of Narvik, and the Battle of Crete were fought during this war.",
    "options": [
      "WWI",
      "WWII",
      "Great Poland Uprising",
      "Polish-Lithuanian War"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Battle of the Nile, the Battle of Radzyn, and the Battle of Aspern-Essling.",
    "options": [
      "The Great Game",
      "Napoleonic Wars",
      "Wars of Scottish Independence",
      "Ten Great Campaigns"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Battle of Custoza, the Battle of Palestro, and the Battle of Calatafimi.",
    "options": [
      "Italian Independence wars",
      "Turco-Italian War",
      "Italian Wars",
      "Second Italo-Abyssinian War"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Battle of Uji, the Battle of Dan-no-ura, and the Battle of Muroyama were all fought during this war.",
    "options": [
      "First Sino-Japanese War",
      "Genpei War",
      "Wars of Sengoku Period in Japan",
      "Russo-Japanese War"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Battle of Ap Bac, the Battle of Dak To, and the Battle of Hamburger Hill.",
    "options": [
      "Korean War",
      "Ogaden War",
      "Vietnam War",
      "Indonesia-Malaysia confrontation"
    ],
    "correctIndex": 2
  },
  {
    "question": "The allies of WW2 initially consisted of three countries, which were later joined by others. Which of these countries never joined the Allies?",
    "options": [
      "Japan",
      "Italy",
      "China",
      "France"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which was the formal reason for the end of World War II, on September 2, 1945?",
    "options": [
      "The surrender of Germany",
      "The number of civilians that had died",
      "The usage of an increased number of atomic weapons",
      "The formal surrender of Japan"
    ],
    "correctIndex": 3
  },
  {
    "question": "What two countries were invaded by Germany on 9 April 1940?",
    "options": [
      "Norway and Great Britain",
      "Norway and France",
      "France and Denmark",
      "Norway and Denmark"
    ],
    "correctIndex": 3
  },
  {
    "question": "In which month of 1940 did the Soviet Union occupy Latvia, Lithuania, and Estonia?",
    "options": [
      "May",
      "June",
      "August",
      "September"
    ],
    "correctIndex": 1
  },
  {
    "question": "On 28 October 1940, launching the invasion from bases in Albania, Italy invaded this country.",
    "options": [
      "Greece",
      "Bulgaria",
      "Checzoslovakia",
      "France"
    ],
    "correctIndex": 0
  },
  {
    "question": "Nazi Germanys attempt at invading the Soviet Union, known as Operation Barbarossa, started on what date?",
    "options": [
      "22 July, 1941",
      "22 June, 1941",
      "22 June, 1940",
      "22 August, 1941"
    ],
    "correctIndex": 1
  },
  {
    "question": "This strategic meeting between the heads of the governments of the United Kingdom and the United States took place from December 22, 1941 to January 14, 1942.",
    "options": [
      "The Arcadia Conference",
      "The Yalta Conference",
      "The Allied Conference",
      "The Strategic Conference"
    ],
    "correctIndex": 0
  },
  {
    "question": "What happened on July 14,1789?",
    "options": [
      "Japan opened ports to international shipping",
      "Argentina gained independence from Spanish rule",
      "The American Revolution ended",
      "A mob of French peasants stormed the Bastille and started the French Revolution"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these events occurred on November  22, 1963?",
    "options": [
      "The United States bombed North Vietnam for the first time",
      "Robert F. Kennedy was assassinated in Los Angeles",
      "John F. Kennedy was assassinated in Dallas",
      "The Beatles performed first concert in the US"
    ],
    "correctIndex": 2
  },
  {
    "question": "The date November 11, 1918 is famous with what event?",
    "options": [
      "The first case of Asian flu was reported in the USA",
      "Marie Curie discovered Radium",
      "World War I ended",
      "Adolf  Hitler was born"
    ],
    "correctIndex": 2
  },
  {
    "question": "What historical event took place on October 14, 1066 AD?",
    "options": [
      "The Vikings landed in America",
      "The Muslims retook Jerusalem",
      "The Chinese first used fireworks in battle",
      "England was conquered by the Normans in the Battle of Hastings"
    ],
    "correctIndex": 3
  },
  {
    "question": "What happened on July 4, 1826?",
    "options": [
      "Andrew Jackson resigned as President",
      "Russia declared war on Turkey, starting the Crimean War",
      "The Mexican army crossed into Texas",
      "Both Thomas Jefferson and John Adams died"
    ],
    "correctIndex": 3
  },
  {
    "question": "What historical event occurred on March 15, 44 BC?",
    "options": [
      "Julius Caesar was assassinated by members of the Roman senate",
      "The first calendar was started by the Mayans in Central America",
      "Korea gained independence from Japan",
      "Mark Antony married Cleopatra"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these events took place on June 18, 1815?",
    "options": [
      "The noble gas Neon was discovered",
      "Russia claimed the territory of Alaska",
      "Napoleon was beaten at Waterloo",
      "Andrew Jackson and his troops defeated the British at New Orleans"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following events happened on March,1692?",
    "options": [
      "An earthquake in Mexico killed over 10,000",
      "The Salem witch trials began in New England",
      "General Braddock was killed by the French",
      "The Indians sold Manhattan Island to the Dutch"
    ],
    "correctIndex": 1
  },
  {
    "question": "The date July 2, 1937 is remembered with what event?",
    "options": [
      "Japan bombed Shanghai, off the coast of China, killing over 2,000",
      "Amelia Earhart and her co-pilot disappeared flying across the Pacific Ocean",
      "The Spanish Civil War ended",
      "Charles Lindbergh crossed the Atlantic"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these events occurred on December 29, 1170 AD?",
    "options": [
      "Thomas Becket, Archbishop of Canterbury, was slain in his church",
      "Mongols crossed the Danube river into Hungary",
      "Danish ships landed at Greenland and claimed it as a province",
      "Black Plague began in Genoa, Italy"
    ],
    "correctIndex": 0
  },
  {
    "question": "With what nations military did the US conduct desert exercises in 1981?",
    "options": [
      "Iraq",
      "Saudi Arabia",
      "Egypt",
      "Iran"
    ],
    "correctIndex": 2
  },
  {
    "question": "The US mining of what nations harbors created a congressional frenzy in April of 1984 and was  a case heard by the International Court of Justice?",
    "options": [
      "Japan",
      "Qatar",
      "Panama",
      "Nicaragua"
    ],
    "correctIndex": 3
  },
  {
    "question": "The US Federal Governments deficit in 1983 exceeded $250 billion?",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what state was Claus von Bulow prosecuted?",
    "options": [
      "Rhode Island",
      "Arkansas",
      "Illinois",
      "Virginia"
    ],
    "correctIndex": 0
  },
  {
    "question": "President Reagan was shot in 1981 as he left this hotel.",
    "options": [
      "Ritz-Carlton, Washington DC",
      "The Washington Hilton",
      "The St. Regis Washington DC",
      "Park Hyatt, Washington"
    ],
    "correctIndex": 1
  },
  {
    "question": "By 1983, less than 10% of all movie theaters in America had only one of these.",
    "options": [
      "Stadium seating theater",
      "Ticket register",
      "Concession stand",
      "Screen"
    ],
    "correctIndex": 3
  },
  {
    "question": "What major comic book character underwent a costume change in 1984, wearing a suit that was black and white instead of blue and red?",
    "options": [
      "Superman",
      "Spiderman",
      "Captain America",
      "Batman"
    ],
    "correctIndex": 1
  },
  {
    "question": "Iran invaded Iraq in 1981.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Battle of Gettysburg was fought on these dates.",
    "options": [
      "July 1-2-3, 1863",
      "June 28-29-30, 1863",
      "September 4-5-6, 1863",
      "July 10-11-12, 1863"
    ],
    "correctIndex": 0
  },
  {
    "question": "Robert E. Lee commanded the Confederate army at Gettysburg. Who led the Union forces?",
    "options": [
      "George Meade",
      "Winfield Scott",
      "Daniel Sickles",
      "Ulysses Grant"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these landmarks could not be found on the Gettysburg battlefield?",
    "options": [
      "Little Round Top",
      "Devils Den",
      "Hells Half Acre",
      "Seminary Ridge"
    ],
    "correctIndex": 2
  },
  {
    "question": "This twenty-year-old was the only civilian killed during the Battle of Gettysburg.",
    "options": [
      "Benjamin Bryan",
      "Michael Cordori",
      "Wesley Culp",
      "Jennie Wade"
    ],
    "correctIndex": 3
  },
  {
    "question": "This 70-year-old citizen of Gettysburg grabbed his rifle during the first day of the battle and joined the Unions Iron Brigade. Not surprisingly, he was the only civilian to take part in the battle itself.",
    "options": [
      "Donald Pfanz",
      "Richard Sommers",
      "John Proctor",
      "John Burns"
    ],
    "correctIndex": 3
  },
  {
    "question": "General Lees three corps commanders at Gettysburg were Longstreet,  A.P. Hill and who else?",
    "options": [
      "Richard Ewell",
      "Richard Garnett",
      "Issac Trimble",
      "Johnston Pettigrew"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Union general was killed by a sniper on the first day of the Battle of Gettysburg.",
    "options": [
      "Abner Doubleday",
      "Joshua Chamberlain",
      "John Reynolds",
      "John Sedgwick"
    ],
    "correctIndex": 2
  },
  {
    "question": "This cavalry officer commanded the Union cavalry at Gettysburg.",
    "options": [
      "George Custer",
      "John Buford",
      "Judson Kilpatrick",
      "Wesley Merritt"
    ],
    "correctIndex": 1
  },
  {
    "question": "Abraham Lincoln signed the Emancipation Proclamation shortly after the Battle of Gettysburg.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "WW II started on September 1, 1939 when Germany invaded which country?",
    "options": [
      "Poland",
      "The Soviet Union",
      "Austria",
      "Czechoslovakia"
    ],
    "correctIndex": 0
  },
  {
    "question": "At the beginning of WW II, The British and the French were so surprised by the swiftness of the German attack on its neighbor that for some time no response ensued. This period lasted till May, 1940 and is known by what name?",
    "options": [
      "Phony War",
      "Blitzkrieg",
      "Anschluss",
      "Boer War"
    ],
    "correctIndex": 0
  },
  {
    "question": "In February 1945, Churchill, Roosevelt and Stalin met in Yalta to discuss the future of  post - war Europe. The Yalta Conference produced important decisions, one of which stated that there would be free elections in Czechoslovakia.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This operation, led by General Dwight Eisenhower, was launched on 8 November 1942 and it was aimed at gaining control over Morocco and Algeria.",
    "options": [
      "Operation Overlord",
      "Operation Anthropoid",
      "Operation Torch",
      "Operation Countenance"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Tripartite Pact was signed on September 27, 1940 by Germany, Italy and Japan. Later, three more countries joined - Hungary, Romania and Bulgaria. When did Bulgaria join the pact?",
    "options": [
      "November 20, 1940",
      "March 3, 1941",
      "November 23, 1940",
      "March 1, 1941"
    ],
    "correctIndex": 3
  },
  {
    "question": "This May 1942 battle was the first one to be fought only by aircraft carriers.",
    "options": [
      "Battle of the Coral Sea",
      "Battle of Midway",
      "Battle of the Aleutian Islands",
      "Battle of the Leyte Gulf"
    ],
    "correctIndex": 0
  },
  {
    "question": "Even though mainland Britain was not actually invaded in World War II, it had prepared a resistance movement, known under what name?",
    "options": [
      "Home Guard",
      "Dukes",
      "Auxiliary Units",
      "Partisans"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who accepted the surrender of the German military forces in Northwest Germany, Holland and Denmark on May 4, 1945?",
    "options": [
      "General Zhukov",
      "General Jacques Leclerc",
      "General Montgomery",
      "General George Marshall"
    ],
    "correctIndex": 2
  },
  {
    "question": "Before committing suicide, Adolf Hitler appointed his successors. Schwerin von Krosigk was one of them.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which plane was the first operational turbojet to take part in WW II?",
    "options": [
      "Heinkel He 178",
      "Gloster Meteor",
      "Messerschmitt 262",
      "Arado Ar 234"
    ],
    "correctIndex": 2
  },
  {
    "question": "During World War I Germany built and used one of the biggest guns in military history, Big Bertha. It fired 2,100 lb (820 kg) shells at a range of 15 km (9.3 miles) and was used in the assault of Verdun. Big Bertha was named after this member of the designers family.",
    "options": [
      "His mother",
      "His wife",
      "His grandmother",
      "His mother-in-law"
    ],
    "correctIndex": 1
  },
  {
    "question": "Even though Bertha was a formidable gun, this one was even bigger. Paris Gun was used to bombard Paris during World War I. What was its main purpose?",
    "options": [
      "To demolish large buildings",
      "To kill as many civilians as possible",
      "To bombard important bunkers",
      "To attack the morale of enemy soldiers"
    ],
    "correctIndex": 3
  },
  {
    "question": "Lange Max (long Max) was a World War I German cannon officially called 38cm SKL/45.  Long Max was derived from the Paris Gun.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "One of the most accomplished ballistics engineers, Gerald Bull, was head of project HARP. The Pentagon and the Canadian Department of National Defence joined efforts in this project, trying to study ballistics of re-entry vehicles at low cost. They used 16 inch (406 mm) 50 caliber gun, which was later extended to 100 calibers (40 m), to fire shells toward the Atlantic at 3600 m/s. Do you know what HARP stood for?",
    "options": [
      "Hazard Assessment of Rocket Propellants",
      "Helping to Attract and Recruit Project",
      "Highly Autonomous Roving Projectile",
      "High Altitude Research Project"
    ],
    "correctIndex": 3
  },
  {
    "question": "During World War I and II, this German family created some of the biggest guns in the world. In the years of WW I they sold cannons to the the Entente as well as the Central Powers. Their work became the center for German rearmament after 1933 (when Hitler came to power).",
    "options": [
      "Krupp",
      "Nathan",
      "Kramer",
      "Gustav"
    ],
    "correctIndex": 0
  },
  {
    "question": "Two of the German K5(E) guns were called Anzio Annes, because they shelled the coast of Anzio during WW II.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Six gigantic guns were created during World War II, with the help of general Karl Baker. They were called Karl Monsers and were used in the Brest-Litovsk and Warsaw uprisings. What was their other deployment during the War?",
    "options": [
      "The defence of Berlin",
      "The siege of Stalingrad",
      "The siege of Moscow",
      "The siege of Sevastopol"
    ],
    "correctIndex": 3
  },
  {
    "question": "This is the biggest gun ever to be completed. It was 43 m (141 feet) long, weighed 1350 tons and fired 7 ton shells at range of 40 km (25 miles). It was capable of piercing a meter (3.3 feet) of steel or 7 meters (23 feet) of concrete. One of the two ever built guns of this type was called Schwerer Gustav. What was the name of the other one?",
    "options": [
      "Sturmtiger",
      "Leopold",
      "Robert",
      "Dora"
    ],
    "correctIndex": 3
  },
  {
    "question": "Tsar Pushka, the biggest cannon of its time, was created in Russia in 1586 and was later used to defend the Kremlin.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Gerald Bull took part in another supergun program - project Babylon. He supplied the plans for a series of gigantic guns, but fortunately only one of them (the smallest one) was completed. This person commissioned the project.",
    "options": [
      "William Clinton",
      "Saddam Hussein",
      "Slobodan Milosevic",
      "Yasser Arafat"
    ],
    "correctIndex": 1
  },
  {
    "question": "The 1990s introduced us all to grunge music. Which popular grunge band are known for their 1994 song Black Hole Sun?",
    "options": [
      "Alice in Chains",
      "Nirvana",
      "Soundgarden",
      "Pearl Jam"
    ],
    "correctIndex": 2
  },
  {
    "question": "On what cartoon from the 90s did we meet the characters Tommy, Angelica, and Chuckie?",
    "options": [
      "Animaniacs",
      "Hey Arnold!",
      "Rugrats",
      "Rockos Modern Life"
    ],
    "correctIndex": 2
  },
  {
    "question": "John Gray wrote the popular book Men Are From Mars, Women Are From Venus.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This independent horror film tells the story of 3 student filmmakers who get lost in the woods and are tormented by a legend witch.",
    "options": [
      "The Amityville Curse",
      "Bad Moon",
      "Army of Darkness",
      "The Blair Witch Project"
    ],
    "correctIndex": 3
  },
  {
    "question": "On August 12 of this year, the Major League Baseball players went on strike which resulted in the cancellation of the World Series.",
    "options": [
      "1991",
      "1993",
      "1994",
      "1996"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year did the popular sitcom, Friends, first air?",
    "options": [
      "1994",
      "1992",
      "1993",
      "1995"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which movie star was featured in the only movie about the Vietnam War that was made during the war?",
    "options": [
      "John Wayne",
      "Forest Whitaker",
      "Tom Cruise",
      "Tom Berenger"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Hollywood veteran played Sgt. Muldoon in a 1968 movie about the war in Vietnam.",
    "options": [
      "Jim Hutton",
      "Tim Hutton",
      "Aldo Ray",
      "R. Lee Ermey"
    ],
    "correctIndex": 2
  },
  {
    "question": "This 1978 movie was about a group of American soldiers who went to fight in Vietnam. They could get out of combat if they threw a soccer match, but they refused to do so.",
    "options": [
      "Full Metal Jacket",
      "Pork Chop Hill",
      "Hamburger Hill",
      "The Boys in Company C"
    ],
    "correctIndex": 3
  },
  {
    "question": "This actor, who starred in the movie Good Morning, Vietnam, also acted in the TV series Walker: Texas Ranger.",
    "options": [
      "Chuck Norris",
      "Noble Willingham",
      "R. Lee Ermey",
      "John McGinty"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which Vietnam movie featured Tom Cruise, Tom Berenger and Willem Dafoe?",
    "options": [
      "Full Metal Jacket",
      "Born on the Fourth of July",
      "Platoon",
      "Hamburger Hill"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who directed the 1986 movie Platoon?",
    "options": [
      "Oliver Stone",
      "Willem Dafoe",
      "Brian DePalma",
      "Tom Berenger"
    ],
    "correctIndex": 0
  },
  {
    "question": "The  main actors in Platoon had to go through a 14-day military boot camp.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who directed the 1989 movie Casualties of War?",
    "options": [
      "Brian DePalma",
      "Oliver Stone",
      "Stanley Kubrick",
      "Ray Kellogg"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who directed the 1987 film Full Metal Jacket?",
    "options": [
      "Oliver Stone",
      "Roy Kovic",
      "Stanley Kubrick",
      "Brian DePalma"
    ],
    "correctIndex": 2
  },
  {
    "question": "For his role as Pvt. Pyle in Full Metal Jacket, Vincent DOnofrio, had to gain 70 pounds. This broke the previous record for weight gained by a featured actor for a role. Who had held this record?",
    "options": [
      "Marlon Brando",
      "John Wayne",
      "Robert De Niro",
      "Al Pacino"
    ],
    "correctIndex": 2
  },
  {
    "question": "This 1989 movie was about an injured Vietnam War veteran who became an anti-war protester.",
    "options": [
      "Full Metal Jacket",
      "Hamburger Hill",
      "Born on the Fourth of July",
      "Casualties of War"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these movies did not feature R. Lee Ermey?",
    "options": [
      "Full Metal jacket",
      "Apocalypse Now",
      "The Boys in Company C",
      "Platoon"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who directed the 1979 movie Apocalypse Now?",
    "options": [
      "Francis Ford Coppola",
      "Oliver Stone",
      "Brian DePalma",
      "Stanley Kubrick"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Orient Express, a long-distance passenger train that has become a synonym with luxury travel, made its first run on October 4, 1883. This was the final destination of its first route.",
    "options": [
      "Viena",
      "Ankara",
      "Ruse",
      "Istanbul"
    ],
    "correctIndex": 3
  },
  {
    "question": "On October 7, 1982,  this show made its debut in Broadway at the Winter Garden Theatre. It eventually closed after nearly 18 years on September 10, 2000.",
    "options": [
      "Aida",
      "The Phantom of the Opera",
      "Cats",
      "Sunset Boulevard"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Great Chicago Fire, one of the worst disasters of the nineteenth century, started on October 8, 1871. The fire destroyed approximately 17,450 buildings, killed 250 people and left another 90,000 homeless, before it was extinguished on this date.",
    "options": [
      "October 24",
      "October 10",
      "October 14",
      "October 18"
    ],
    "correctIndex": 1
  },
  {
    "question": "On October 11, 1968, NASA launched Apollo 7, the first manned Apollo mission.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "On October 16, 1978, the Papal Conclave elected Karol J\u00c3\u00b3zef Wojty\u00c5\u201aa, who became known as Pope John Paul II. How old was he when this happened?",
    "options": [
      "48",
      "68",
      "38",
      "58"
    ],
    "correctIndex": 3
  },
  {
    "question": "On October 18, 1968,  a police raid on John Lennon and Yoko Onos apartment revealed 168 grams of marijuana. This is what happened to Lennon and Ono as a result.",
    "options": [
      "The evidence mysteriously disappeared and the case was dismissed",
      "They were found guilty and were sent to prison",
      "They were found not guilty and released, due to Lennons great contribution to British music",
      "They plead guilty and were fined \u00c2\u00a3150"
    ],
    "correctIndex": 3
  },
  {
    "question": "What year did the Holocaust begin?",
    "options": [
      "1929",
      "1945",
      "1946",
      "1933"
    ],
    "correctIndex": 3
  },
  {
    "question": "Holocaust is a Greek word, originally meaning sacrifice by fire.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Not only Jews were targeted by Hitler, but also the Gypsies and the mentally and physically disable.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Beginning with racially discriminatory laws in Germany, the Nazi campaign expanded to the mass murder of a great part of European Jews.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The armed uprising in the Warsaw ghetto in April-May 1943 was one of the most forceful Jewish uprising in the organized resistance to the Nazis.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Although the Warsaw Ghetto Uprising wasnt successful, it was the first significant uprising in German-occupied Europe during WW II.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is widely recognized as the leader of the Warsaw Ghetto Uprising during WW II?",
    "options": [
      "Mordechai Anielewicz",
      "Chaim Rumkowski",
      "Henry Morgentaler",
      "Hilary Minc"
    ],
    "correctIndex": 0
  },
  {
    "question": "During WW II, Polish-Jewish industrialist Chaim Rumkowski was the leader of the Lodz Ghetto.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "At the end of the Nazi rule, Hitler expressed his sincere regret for all the deaths he and his subordinates had caused during the Holocaust.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following was the first Roman emperor to convert to Christianity in 313 AD?",
    "options": [
      "Constantine",
      "Marcus Aurelius",
      "Nerva",
      "Commodus"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which writer witnessed the eruption of Mt. Vesuvius in 79 AD?",
    "options": [
      "Pliny the Younger",
      "Pompey the Great",
      "Plautus",
      "Plutarch"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which Roman Emperor wrote The Meditations that was actually a sort of personal diary?",
    "options": [
      "Constantine",
      "Hadrian",
      "Marcus Aurelius",
      "Julius Caesar"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the great Roman orator who created a Latin stylebook which is still used in Latin classes today?",
    "options": [
      "Cicero",
      "Nerva",
      "Marcus Aurelius",
      "Constantine"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Ancient Rome, who were the Lares?",
    "options": [
      "Household spirits of dead ancestors",
      "The elite corps of the Roman army",
      "The Muses",
      "The Roman counterpart of the Greek Furies"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these poets wrote many poems of love and manners widely read by Ancient Romans?",
    "options": [
      "Cato",
      "Ovid",
      "Plutarch",
      "Virgil"
    ],
    "correctIndex": 1
  },
  {
    "question": "This invention (named by Edward Jenner) is not an object, but a process of administering live, albeit weakened, microbes to people.",
    "options": [
      "Mastectomy",
      "Decompression",
      "Ophthalmoscopy",
      "Vaccination"
    ],
    "correctIndex": 3
  },
  {
    "question": "The optical telegraph (a collective term) preceded the electrical telegraph. It was much faster than riding couriers in to deliver messages over long distances. One of these is not an optical telegraph.",
    "options": [
      "Semaphores",
      "Morse code",
      "Ship flags",
      "Smoke signals"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to some theories, the parachute was invented in 1783 by Sebastien Lenormand in France. Two years later, Jean-Pierre Blanchard demonstrated it as a means of safely getting down on earth from this.",
    "options": [
      "Tree",
      "Cliff",
      "Building",
      "Balloon"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first military submarine (Turtle) could accommodate this number of people.",
    "options": [
      "3",
      "1",
      "2",
      "0 as it was unmanned"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1807, Robert Fulton used a steam engine to power the first commercially successful one of these.",
    "options": [
      "Steam ship",
      "Steam car",
      "Steam locomotive",
      "Steam factory"
    ],
    "correctIndex": 0
  },
  {
    "question": "The spinning jenny is a multi-spool spinning wheel invented in 1764 in this country.",
    "options": [
      "France",
      "England",
      "Germany",
      "The US"
    ],
    "correctIndex": 1
  },
  {
    "question": "Charlie Chaplins movie The Gold Rush, which took in more than $4,250,000 at the box office in 1925, was set in his city.",
    "options": [
      "Denver",
      "Otago",
      "Klondike",
      "Transvaal"
    ],
    "correctIndex": 2
  },
  {
    "question": "Most gold rushes began with the discovery of placer gold by a single man or a party of people. Which one of these statements about placer mining is wrong?",
    "options": [
      "Placer mining is not used any more",
      "Placer gold is mined without tunneling",
      "Hydrostatic pressure is used whenever possible",
      "Placer gold deposits are usually found near big rivers and mountain streams"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these famous writers took part in the Klondike Gold Rush?",
    "options": [
      "Ernest Hemingway",
      "Jack London",
      "Maine Reed",
      "Mark Twain"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Colorado Gold Rush of 1859 was followed by a silver boom (a period of great silver mining).",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "One man who made a fortune out of gold rushes was Levi Strauss. He developed the concept of this.",
    "options": [
      "Electric lamp",
      "Mattock",
      "Denim",
      "Explosives"
    ],
    "correctIndex": 2
  },
  {
    "question": "This technique for extracting gold was discovered by chemist Carl Wilhelm Scheele in 1783, and was later developed in 1887 by John Seward MacArthur.",
    "options": [
      "Gold cyanidation",
      "Gold zincanization",
      "Hydraulic mining",
      "Gold panning"
    ],
    "correctIndex": 0
  },
  {
    "question": "Many people seeking an easy fortune emigrated to California, USA during the California Gold Rush (1848-1858). The gold rush was sparked by the discovery of gold near this city.",
    "options": [
      "San Francisco",
      "San Diego",
      "Los Angeles",
      "Sacramento"
    ],
    "correctIndex": 3
  },
  {
    "question": "The San Francisco 49ers are an NFL team named after the prospectors that took part in the California Gold Rush.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "One of the earliest gold rushes was probably the Spanish search for the mythical city of El Dorado. According to early legends, the King of the Muiscas would do this as part of a religious ceremony.",
    "options": [
      "Drink liquid gold",
      "Give away gold to everybody",
      "Cover himself with gold dust",
      "Turn whatever he touches into gold"
    ],
    "correctIndex": 2
  },
  {
    "question": "The nickname of Wisconsin, \u00e2\u20ac\u0153Badger State\u00e2\u20ac?, was given to it in irony, because no gold rushes occurred in the region.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following was NOT an Egyptian pharaoh?",
    "options": [
      "Akhenaten",
      "Imhotep",
      "Seti",
      "Ramses I"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which was the first Egyptian pyramid?",
    "options": [
      "The Red pyramid",
      "The Great pyramid",
      "The Bent Pyramid",
      "The Step Pyramid"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was Cleopatras ethnic background?",
    "options": [
      "Roman",
      "Macedonian",
      "Upper Egyptian",
      "Lower Egyptian"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who unified Upper and Lower Egypt?",
    "options": [
      "Thutmose III",
      "Kahfre",
      "Imhotep",
      "Menes"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following was referred to as the Gift of the Nile?",
    "options": [
      "The annual Nile flood",
      "Egypt",
      "The development of writing",
      "The creation of civilization"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where is the Nile Delta located?",
    "options": [
      "Lake Victoria in central Africa",
      "at the source of the river",
      "Upper Egypt",
      "Lower Egypt"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first king in history to foster a belief in one God?",
    "options": [
      "Tutankhamen",
      "Ramses II",
      "Akhenaten",
      "Khufu"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many distinct kingdoms were there in Ancient Egypt?",
    "options": [
      "one",
      "four",
      "two",
      "three"
    ],
    "correctIndex": 3
  },
  {
    "question": "Incestuous royal marriages were common in Ancient Egypt.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Former Enron executive Kenneth Lay died of a heart attack at the age of 66 on July 5, 2006.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "On what day in July did the Space Shuttle Discovery touch down on Earth after a 13-day trip to the International Space Station?",
    "options": [
      "July 10, 2006",
      "July 17, 2006",
      "July 11, 2006",
      "July 12, 2006"
    ],
    "correctIndex": 1
  },
  {
    "question": "On what date in August did the Israeli and Hezbolah conflict end with a ceasefire?",
    "options": [
      "August 20, 2006",
      "August 14, 2006",
      "August 2, 2006",
      "August 8, 2006"
    ],
    "correctIndex": 1
  },
  {
    "question": "On what date in September of 2006 did Steve Irwin the Crocodile Hunter die due to a stingray attack?",
    "options": [
      "September 4",
      "September 2",
      "September 6",
      "September 8"
    ],
    "correctIndex": 0
  },
  {
    "question": "This bagged vegetable was recalled on September 16, 2006 after E. coli affected people in 19 U. S. states.",
    "options": [
      "Celery",
      "Spinach",
      "Carrots",
      "Lettuce"
    ],
    "correctIndex": 1
  },
  {
    "question": "On October 9, 2006, this Internet company announced its purchase of the popular YouTube site?",
    "options": [
      "Amazon",
      "Ebay",
      "Yahoo",
      "Google"
    ],
    "correctIndex": 3
  },
  {
    "question": "On October 19, 2006 Nissan Motor Company recalled 80,000 cars in U.S. due to what defects?",
    "options": [
      "in the air bags",
      "in the ignition key",
      "in the door locks",
      "in the seatbelts"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was chosen to be the 2006 Time Magazines Person of the Year?",
    "options": [
      "Me",
      "You",
      "The Democrats",
      "George W. Bush"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the last Tsar of Russia, King of Poland and Grand Duke of Finland?",
    "options": [
      "Alexander III",
      "Alexander II",
      "Nicholas II",
      "Peter I"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these refers to the lower house of the Russian Parliament ?",
    "options": [
      "Duma",
      "Red House",
      "Reichstag",
      "Storting"
    ],
    "correctIndex": 0
  },
  {
    "question": "During the Russian Revolution in 1917, which of these people belonged to the Mensheviks?",
    "options": [
      "Lev Kamenev",
      "Joseph Stalin",
      "Pavel Axelrod",
      "Matvei Muranov"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the title of Karl Marxs influential treatise on political economy, first published in 1867?",
    "options": [
      "Crime and Punishment",
      "War and Peace",
      "Capital",
      "Communism"
    ],
    "correctIndex": 2
  },
  {
    "question": "In his testament, Lenin stated that he did not approve of Joseph Stalin having so much power and that he didnt want him to rule Russia.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Bolshevik revolutionary and Marxist theorist Leon Trotsky was assassinated in which country?",
    "options": [
      "France",
      "Mexico",
      "Bulgaria",
      "Russia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Alexander Kerensky was the first Prime Minister of the Russian Provisional Government in 1917.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "During the Russian Revolution of 1917, which city was capital of Russia?",
    "options": [
      "Volgograd",
      "Kiev",
      "Saint Petersburg",
      "Moscow"
    ],
    "correctIndex": 2
  },
  {
    "question": "In January of 2006, 12 miners were killed in the Sago Mine Disaster, which occurred in which U.S. state?",
    "options": [
      "Pennsylvania",
      "Virginia",
      "West Virginia",
      "Ohio"
    ],
    "correctIndex": 2
  },
  {
    "question": "On what date in January 2006 did legendary radio talk show host Howard Stern begin his much publicized satellite radio show on Sirius?",
    "options": [
      "9th",
      "16th",
      "4th",
      "2nd"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which NFL team won Super Bowl XL on February 5, 2006?",
    "options": [
      "New England Patriots",
      "Seattle Seahawks",
      "Philadelphia Eagles",
      "Pittsburgh Steelers"
    ],
    "correctIndex": 3
  },
  {
    "question": "In which European country were the 2006 Winter Olympics held?",
    "options": [
      "Switzerland",
      "France",
      "Germany",
      "Italy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Was 2006 a leap (intercalary) year?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which film won the Best Picture award at the 2006 Academy Awards?",
    "options": [
      "Brokeback Mountain",
      "Crash",
      "King Kong",
      "March of the Penguins"
    ],
    "correctIndex": 1
  },
  {
    "question": "The 2006 film See No Evil, released on May 19, stars what famous WWE wrestler?",
    "options": [
      "Goldberg",
      "Undertaker",
      "Kane",
      "Shawn Michaels"
    ],
    "correctIndex": 2
  },
  {
    "question": "On May 28, 2006 Barry Bonds hit his 715th career homerun against which National League team?",
    "options": [
      "San Diego Padres",
      "New York Mets",
      "Atalanta Braves",
      "Colorado Rockies"
    ],
    "correctIndex": 3
  },
  {
    "question": "The North and South (between Maryland and Pennsylvania) were separated by what famous line?",
    "options": [
      "The Dixon Divide",
      "The Underground Railroad",
      "The Line of Freedom",
      "The Mason-Dixon Line"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which northern state was last to make slavery illegal?",
    "options": [
      "New York",
      "New Jersey",
      "Pennsylvania",
      "They all made it illegal at the same time"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was President of the USA when the Korean War began?",
    "options": [
      "Dwight Eisenhower",
      "Harry Truman",
      "John Kennedy",
      "Franklin D. Roosevelt"
    ],
    "correctIndex": 1
  },
  {
    "question": "Approximately how long was The Spanish-American War?",
    "options": [
      "2 years",
      "3 years",
      "11-12 months",
      "3-4 months"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which war, fought in the 20th century, is sometimes referred to as The Forgotten War?",
    "options": [
      "World War I",
      "Gulf War",
      "Korean War",
      "Spanish-American War"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Cold War was one of the deadliest wars of all time.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which battle, fought in Europe during WWII, started on December 16, 1944?",
    "options": [
      "Battle of the Bulge",
      "Battle of Normandy (D-Day)",
      "Battle of Berlin",
      "Battle of Stalingrad"
    ],
    "correctIndex": 0
  },
  {
    "question": "In World War II, 80% of the deaths were on the Allied side.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The United States gained almost half of the territory of Mexico after the Mexican War from 1846\u00e2\u20ac\u201c1848.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "North Vietnamese troops entered this South Vietnamese city, marking the unofficial end to the Vietnam War in 1975.",
    "options": [
      "Saigon",
      "Dong Nam Bo",
      "Vinh",
      "Nha Trang"
    ],
    "correctIndex": 0
  },
  {
    "question": "What event sparked the beginning of the United States War on Terror?",
    "options": [
      "World Trade Center bombing of 1993",
      "The terrorist attacks of September 11",
      "George W. Bushs victory in the 2000 election",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is the longest war in American history?",
    "options": [
      "Civil War",
      "Gulf War",
      "Vietnam War",
      "American Revolution"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Allies and Axis were the two main opponent powers in the Second World War. Which of these leaders and his country were on the side of the Axis powers?",
    "options": [
      "Benito Mussolini",
      "Franklin Delano Roosevelt",
      "Winston Churchill",
      "Dwight Eisenhower"
    ],
    "correctIndex": 0
  },
  {
    "question": "This politician was the British Prime Minister who declared war on Germany in 1939.",
    "options": [
      "Winston Churchill",
      "Neville Chamberlain",
      "Erwin Rommel",
      "Kurt Student"
    ],
    "correctIndex": 1
  },
  {
    "question": "Operation Torch was planned to bring Morocco and Algiers under the Allies\u00e2\u20ac\u2122 domination. Who was the general in charge of the operation?",
    "options": [
      "Paul Tibbets",
      "Chuichi Nagumo",
      "Erwin Rommel",
      "Dwight Eisenhower"
    ],
    "correctIndex": 3
  },
  {
    "question": "The attack on Pearl Harbour was carried out on December 7, 1941, causing the United States to enter the war on the side of the Allies. Who was president of the USA at that time?",
    "options": [
      "Winston Churchill",
      "Theodore Roosevelt",
      "Franklin D. Roosevelt",
      "William McKinley"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following leaders was not present at  The Yalta Conference that took place in February 1945.",
    "options": [
      "Winston Churchill",
      "Franklin Roosevelt",
      "Joseph Stalin",
      "Mao Zedong"
    ],
    "correctIndex": 3
  },
  {
    "question": "This German military leader led the Sixth Army at the siege of Stalingrad. After months of siege, he was defeated and surrendered to the Russians.",
    "options": [
      "Friedrich Paulus",
      "Karl Donitz",
      "Joseph Goebbels",
      "Heinrich Himmler"
    ],
    "correctIndex": 0
  },
  {
    "question": "In August 1944, the German forces in Paris surrendered to this French general who led a military unit from Normandy.",
    "options": [
      "Darlan",
      "Zedong",
      "Leclerc",
      "Patton"
    ],
    "correctIndex": 2
  },
  {
    "question": "This major Nazi leader, called by his supporters \u00e2\u20ac\u0153Fuhrer\u00e2\u20ac\u009d (leader), committed suicide in his bunker on April 30, 1945 in order not to be caught by the Allied forces.",
    "options": [
      "Adolf Hitler",
      "Friedrich Paulus",
      "Reinhard Heydrich",
      "Benito Mussolini"
    ],
    "correctIndex": 0
  },
  {
    "question": "During World War II, this politician was the powerful leader of the Soviet Union, the country which suffered a record death toll in the war.",
    "options": [
      "Joseph Stalin",
      "Vyacheslav Molotov",
      "Nikita Khruschev",
      "Leonid Brezhnev"
    ],
    "correctIndex": 0
  },
  {
    "question": "This man became U.S. Secretary of State after the Second World War. He developed a reconstruction plan, later named after him, to help the European countries recover after the war.",
    "options": [
      "F. D. Roosevelt",
      "George Marshall",
      "Dwight Eisenhower",
      "Karl Donitz"
    ],
    "correctIndex": 1
  },
  {
    "question": "In February 1992 this treaty was signed. It established the European Union.",
    "options": [
      "Merger Treaty",
      "Maastricht Treaty",
      "Treaty of Rome",
      "Treaty of Amsterdam"
    ],
    "correctIndex": 1
  },
  {
    "question": "One of these historically influential political books was first published in February 1848. Its authors are Friedrich Engels and Karl Marx.",
    "options": [
      "The Holy Family",
      "The Communist Manifesto",
      "Revolution and Counter-Revolution in Germany",
      "Das Kapital"
    ],
    "correctIndex": 1
  },
  {
    "question": "In February 1997 the first movie without commercial interruption was shown on US TV. This is the movie.",
    "options": [
      "Saving Private Ryan",
      "Schindlers List",
      "Back to the Future",
      "The Civil War"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first book edition of the detective story, The Valley of Fear, was released in February 1915. This is its author.",
    "options": [
      "Raymond Chandler",
      "Agatha Christie",
      "Sir Arthur Conan Doyle",
      "Dashiell Hammett"
    ],
    "correctIndex": 2
  },
  {
    "question": "In February of this year, the last episode of M*A*S*H was broadcast.",
    "options": [
      "1979",
      "1985",
      "1983",
      "1974"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Battle of Stalingrad ended in February 1943.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In February 1924 President Woodrow Wilson died at this age.",
    "options": [
      "41",
      "67",
      "82",
      "70"
    ],
    "correctIndex": 1
  },
  {
    "question": "In February 1952, the first Dont Walk sign was installed in this city.",
    "options": [
      "Washington",
      "Chicago",
      "Los Angeles",
      "New York City"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Yalta Conference ended in February 1945 . Do you know when it started?",
    "options": [
      "December 1944",
      "February 1945",
      "January 1945",
      "November 1944"
    ],
    "correctIndex": 1
  },
  {
    "question": "The English director Alfred Hitchcocks first suspense film was released in February 1927. This was the name of the movie.",
    "options": [
      "The Manxman",
      "Murder!",
      "The Lodger",
      "The 39 Steps"
    ],
    "correctIndex": 2
  },
  {
    "question": "The greatest fame for this actress, who passed away in 2000, came when she starred as Margaret Pynchon opposite Edward Asner in Lou Grant.",
    "options": [
      "Nancy Marchand",
      "Nancy Sinatra",
      "Nancy Reagan",
      "Nancy Walker"
    ],
    "correctIndex": 0
  },
  {
    "question": "What star of Willow\u00e2\u20ac\u009d  who passed away in 2000, founded the organization Little People of America in 1957?",
    "options": [
      "Jerald Laverne",
      "Jerry Lavish",
      "Billy Marty",
      "Billy Barty"
    ],
    "correctIndex": 3
  },
  {
    "question": "This actor, who died in 2000, played the role of Major Frank Burns on the TV series M.A.S.H.",
    "options": [
      "Harry Morgan",
      "Larry Gelbert",
      "Alan Alda",
      "Larry Linville"
    ],
    "correctIndex": 3
  },
  {
    "question": "His first film role was The Kentuckian. His Broadway appearance in Neil Simons Odd Couple launched his career, but many remember him as one of the Grumpy Old Men. Who was this great actor?",
    "options": [
      "Jack Lemmon",
      "Burgess Meredith",
      "Ozzie Davis",
      "Walter Mattheau"
    ],
    "correctIndex": 3
  },
  {
    "question": "American cartoonist and creator of the comic strip Peanuts, Charles Schulz died in 2000.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "He made films from 1916 to 1939 and was married to Joan Crawford. His fathers name helped him launch his career, however Charlie Chaplin took a liking to him and the rest is history. What is the name of this actor who passed away in 2000?",
    "options": [
      "Clark Gable",
      "Spencer Tracy",
      "Douglas Fairbanks Jr.",
      "Buster Keaton"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year did the following events take place: Jonas Salk began testing his polio vaccine on volunteers, including his wife, his children and himself. The first animal, a tadpole, was cloned. The New York Yankees defeated the Brooklyn Dodgers in the World Series.",
    "options": [
      "1956",
      "1950",
      "1952",
      "1954"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of these events did not happen in the same year as the others?",
    "options": [
      "The novel Peyton Place was published",
      "Barry Gordy, Jr. invested $700 in founding Motown Records",
      "Allen Ginsberg publishes the book Howl and Other Poems",
      "Elvis Presley recorded the song Hound Dog"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first person to be U.S. President of 50 states?",
    "options": [
      "Kennedy",
      "Nixon",
      "Eisenhower",
      "Truman"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these events did not occur in 1957?",
    "options": [
      "Sputnik III was launched and circled the Earth eleven times.",
      "Leave It to Beaver, a TV show about  idyllic American life, first aired.",
      "Charles Van Doren won $129,000 on the TV show Twenty-One.",
      "The great Jackie Robinson retired from baseball"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who commanded the three B-52 Stratofortresses which made the first globe-circling nonstop flight in 1957?",
    "options": [
      "Major General Archie J. Old",
      "Lt. Col. Alan Shepard",
      "Col. Carl  V. Jaeger",
      "General William W. Donavan"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which list contains only countries which formed the European Economic Community?",
    "options": [
      "Spain, France, Austria, West Germany, Finland, and Portugal",
      "Denmark, Sweden, The Netherlands, England, Belgium, and Luxembourg",
      "Sweden, France, Italy, Austria, West Germany, and Spain",
      "France, West Germany, Italy, The Netherlands, Belgium, and Luxembourg"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which Ohio-born singer was famous with the hits Music! Music! Music!, Molasses, Molasses, and Youll Never Get Away?",
    "options": [
      "Shelly Fabres",
      "Teresa Brewer",
      "Brenda Lee",
      "Connie Francis"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these events did not  happen in 1950?",
    "options": [
      "CBS got an FCC license to broadcast in color nation-wide.",
      "Both Pillsbury and general Mills begin selling cake mixes.",
      "Charles Schultz introduces Peanuts .",
      "General Dwight D. Eisenhower is elected President."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which one of these events did not happen in 1955?",
    "options": [
      "The McGuire Sisters have a #1 hit with Sincerely.",
      "Rosa Parks refuses to give up her seat to a white woman in Montgomery, Alabama.",
      "The Korean War is formally ended.",
      "The American Federation of Labor and the Congress of Industrial Organizations merged"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following statements is not correct?",
    "options": [
      "Burt Lancaster starred in Vera Cruz, His Majesty OKeefe and Apache.",
      "Expresso Bongo, Rock, Rock, Rock,  and Hot Rod Girl were all popular teenage movies in the 1950s.",
      "The movie The Third Man was a financial flop when it  was released in 1951.",
      "The 1955 movie,Marty, became the shortest film to win the Best Movie Oscar."
    ],
    "correctIndex": 2
  },
  {
    "question": "One of the most famous cases of poisoning is that of the Bulgarian Georgi Markov, who was poisoned by ricin. The latter was inserted into his body through this.",
    "options": [
      "Stabbing with an umbrella",
      "Taking ricin by mistake",
      "Eating a cake with ricin in it",
      "Inhaling ricin vapours"
    ],
    "correctIndex": 0
  },
  {
    "question": "One of the most popular fictional cases of poisoning occurs in the movie Arsenic and Old Lace, based on a play by this playwright.",
    "options": [
      "David Mamet",
      "David Auburn",
      "Joseph Kesselring",
      "Edward Albee"
    ],
    "correctIndex": 2
  },
  {
    "question": "A fictional case of poisoning is observed in Agatha Christies And Then There Were None. In the novel, this character dies of poisoning.",
    "options": [
      "Dr. Edward George Armstrong",
      "Emily Brent",
      "William Henry Blore",
      "Philip Lombard"
    ],
    "correctIndex": 1
  },
  {
    "question": "Arsenic became a popular murder weapon in the Middle Ages, because symptoms resembled those of this disease.",
    "options": [
      "Pneumonia",
      "Plague",
      "Cholera",
      "Leprosy"
    ],
    "correctIndex": 2
  },
  {
    "question": "There is a theory that Napoleon Bonaparte was poisoned with this substance.",
    "options": [
      "Ethanol",
      "Formaldehyde",
      "Arsenic",
      "Strychnine"
    ],
    "correctIndex": 2
  },
  {
    "question": "Clare Boothe Luce (the American ambassador to Italy in the years just following World War II) died of arsenic poisoning.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Until the French Revolution, this torture device was used to execute those accused of treason. It was also used on nobles to provide a swift and humane death.",
    "options": [
      "Rack",
      "Iron Maiden",
      "Guillotine",
      "Hanging cage"
    ],
    "correctIndex": 2
  },
  {
    "question": "This instrument of torture was thrust into the victims\u00e2\u20ac\u2122 chin and sternum rendering them motionless.",
    "options": [
      "The Princes Prod",
      "The Sorcerers Staff",
      "The Kings Spear",
      "The Heretics Fork"
    ],
    "correctIndex": 3
  },
  {
    "question": "This pyramid-shaped seat was used to extract confessions from the victims who were placed on top of it.",
    "options": [
      "The Iron Spike",
      "The Swing of Death",
      "The Point of No Return",
      "The Judas Cradle"
    ],
    "correctIndex": 3
  },
  {
    "question": "This torture device was used to rip the victim\u00e2\u20ac\u2122s flesh to shreds. Once this was accomplished, the victim would be left to dangle alive, with arms bound, left at the mercy of flies and other insects.",
    "options": [
      "The shredder",
      "Cats claws",
      "The claw",
      "Cats paws"
    ],
    "correctIndex": 3
  },
  {
    "question": "The head crusher was used as a swift and humane form of execution for the nobleman. It was designed in such a manner that upon impact it would cause immediate death of its victim.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This mobile chamber was used all over Europe as a final resting place for criminals who survived other torture devices. The victims of this device would often starve to death.",
    "options": [
      "The hanging cage",
      "The death dorm",
      "The iron cage",
      "The death chamber"
    ],
    "correctIndex": 0
  },
  {
    "question": "This device was commonly used on witches who were believed to be carrying the Satan\u00e2\u20ac\u2122s child.",
    "options": [
      "The pear",
      "The sword",
      "The blade",
      "The saw"
    ],
    "correctIndex": 3
  },
  {
    "question": "He was one of the founders of the YIPPIES and helped announce the candidacy of Pigasus the Pig in Chicago during the 1968 Democratic National Convention. Who was the author of Steal This Book?",
    "options": [
      "Abbie Hoffman",
      "Bobby Seale",
      "Tom Hayden",
      "David Dellinger"
    ],
    "correctIndex": 0
  },
  {
    "question": "Just like Ivory Soap, his product was supposed to be over 99% pure. This gentleman, the grandson of a United States Senator, was the first underground chemist to produce pure LSD in mass quantity. Who was the sound man and chemist for the Grateful Dead?",
    "options": [
      "Wavey Gravey",
      "Owsley Stanley",
      "Country Joe",
      "Jerry Garcia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What  woman became the third female to make the FBIs 10 Most Wanted List on August 18th 1970 when she went on the run after her alleged participation in the kidnapping and murder of Judge Harold Harley from the Marin County Hall of Justice?",
    "options": [
      "Susan Saxe",
      "Ruth Eisemann-Schier",
      "Bernadine Dorn",
      "Angela Davis"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1970, in a span of 72 hours, how many women made the FBIS 10 Most Wanted List?",
    "options": [
      "5",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2
  },
  {
    "question": "Tin soldiers and Nixon coming",
    "options": [
      "University of California at Berkley",
      "Boston College",
      "Ohio State University",
      "Kent State University"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the first great Greek tragic playwright who is now acknowledged as the Father of Drama?",
    "options": [
      "Aeschylus",
      "Aesop",
      "Euripides",
      "Sophocles"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which Greek historian is known as the Father of History?",
    "options": [
      "Plato",
      "Herodotus",
      "Titus",
      "Isocrates"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which Athenian politician and general led the disastrous attack on Spartan bases in Sicily?",
    "options": [
      "Spartacus",
      "Galen",
      "Alcibiades",
      "Leonidas"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the father of Alexander the Great?",
    "options": [
      "Hercalesian III",
      "Triton",
      "Philip II",
      "Lysander"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the king of Sparta and leader of the 300 Spartans at the famous battle at Thermopylae?",
    "options": [
      "Aristides",
      "Pericles",
      "Leonidas",
      "Philip I"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name Alexander the Greats favorite horse.",
    "options": [
      "Xerxes",
      "Sargon",
      "Bucephalus",
      "Hammurabi"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the statesman who re-codified the laws of Athens to make them more humane, and set the city on the road to democracy?",
    "options": [
      "Pericles",
      "Draco",
      "Phidias",
      "Solon"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which Athenian sculptor, who worked almost exclusively with bronze, created the classic statue, The Discus Thrower?",
    "options": [
      "Polyclitus",
      "Myron",
      "Phidias",
      "Hesoid"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the faithful wife of Odysseus who waited 20 years for his return from the Trojan War?",
    "options": [
      "Penelope",
      "Mentor",
      "Aspasia",
      "Telemachus"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Victorian politician, best remembered as the originator of the modern police force, sought to repeal the Corn Laws as a measure to fight the Irish potato famine.",
    "options": [
      "George Anning",
      "Sir Robert Peel",
      "Sir Arthur Wellesly",
      "Lord Goderich"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Great Exhibition, a symbol of the Victorian Age, was held in London in what year?",
    "options": [
      "1900",
      "1862",
      "1850",
      "1851"
    ],
    "correctIndex": 3
  },
  {
    "question": "This British engineer is best known as the creator of the Great Western Railway, during the Victorian Age.",
    "options": [
      "R.P. Brereton",
      "Isambard Kingdom Brunel",
      "Henry Robinson Palmer",
      "George Stephenson"
    ],
    "correctIndex": 1
  },
  {
    "question": "This woman was a Victorian era feminist, especially concerned with the welfare of working girls.",
    "options": [
      "Anne Clough",
      "Josephine Butler",
      "Emily Davies",
      "Frances Buss"
    ],
    "correctIndex": 1
  },
  {
    "question": "This person attempted to assassinate Queen Victoria during her first pregnancy.",
    "options": [
      "John William Bean",
      "Edward Oxford",
      "John Francis",
      "William trounce"
    ],
    "correctIndex": 1
  },
  {
    "question": "Issued during the Victorian period, it is the name of the worlds first official adhesive postage stamp.",
    "options": [
      "Penny Red",
      "Penny Gold",
      "Penny Black",
      "Penny Blue"
    ],
    "correctIndex": 2
  },
  {
    "question": "This vessel, one of the symbols of progress during the Victorian Era, was the first steam ship purposely built for Atlantic crossing.",
    "options": [
      "SS Sirius",
      "SS British Queen",
      "SS Great Britain",
      "SS Great Western"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Salvation Army, a world-wide charity organization, was established in what year?",
    "options": [
      "1835",
      "1895",
      "1865",
      "1885"
    ],
    "correctIndex": 2
  },
  {
    "question": "He served as the head of the London Metropolitan Police during the period of the Jack the Ripper Murders.",
    "options": [
      "Godfrey Lushington",
      "Sir Charles Warren",
      "James Monro",
      "Sir Edmund Henderson"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the British socialist intellectual movement, among whose members was the famous Irish playwright Bernard Shaw.",
    "options": [
      "Victorian Socialist Society",
      "League for Social Reconstruction",
      "Fabian Society",
      "The Fellowship of the New Life"
    ],
    "correctIndex": 2
  },
  {
    "question": "This famous siege took place in 1453 under the command of Sultan Mehmed II. It marked the end of the Eastern Roman Empire and made Ottoman rule over the Balkans and Eastern Mediterranean inevitable. Although the city was one of the richest in the world and was thought to be impregnable, Mehmed II marched through its streets and was later nick-named the Conqueror. What was the name of this great city?",
    "options": [
      "Constantinople",
      "Damascus",
      "Rome",
      "Vienna"
    ],
    "correctIndex": 0
  },
  {
    "question": "Christopher Columbus reached the Americas in 1492, dooming the fate of native inhabitants. The siege of Tenochtitlan marked the end of one of the mightiest American civilizations- the Aztec Empire. This was the name of the conquistador that defeated the Aztecs.",
    "options": [
      "Francisco Pizarro",
      "Pedro de Alvarado",
      "Hernan Cortes",
      "Panfilo de Narvaez"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Axis powers besieged Malta during World War II, because the headquarters of the Royal Navy Mediterranean Fleet was there.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Jeanne dArc was a 17-year old girl with no knowledge on military strategics. However, her self-sacrifice and strong belief in God inspired many French victories in the Hundred Years War. This siege was her first victory.",
    "options": [
      "The siege of Paris",
      "The siege of Patay",
      "The siege of Orleans",
      "The siege of Calais"
    ],
    "correctIndex": 2
  },
  {
    "question": "Certainly one of the most famous sieges is the siege of Troy. Although archaeologists are not sue whether or not it really happened, there is evidence that the siege is not merely mythological. According to legends, who killed the Greek hero Achilles?",
    "options": [
      "Paris",
      "Priam",
      "Ajax",
      "Hector"
    ],
    "correctIndex": 0
  },
  {
    "question": "During the siege of Paris of the Franco-Prussian War, the French forces were victorious.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "This city was besieged twice- once in 1854 by the Ottoman Empire and a second time in 1942 by Germany. During the second siege, the defenders were attacked by the largest gun ever to be completed. The Germans even used gas against the defenders of the city and yet it withstood the siege for 250 days.",
    "options": [
      "Paris",
      "Sevastopol",
      "Moscow",
      "Warsaw"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1847 Veracruz, one of the most important Mexican seaports, was besieged for 20 days. The beginning of the siege was marked when this country conducted its first large-scale amphibious assault on it.",
    "options": [
      "France",
      "Argentina",
      "Great Britain",
      "The United States"
    ],
    "correctIndex": 3
  },
  {
    "question": "The siege of Sarajevo, one of  the longest sieges in the history of modern warfare lasted almost 4 years.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "German forces besieged the city of Leningrad for 900 days, trying to gain control without success. The bravery of the defenders of the city became the symbol of the Soviet struggle against Nazi Germany, but the exact number of Russian casualties is unknown- some estimate that 1.5 million people died, mostly of starvation. Which of these Soviet generals is credited with the defense of Leningrad?",
    "options": [
      "Marshal Zhukov",
      "Marshal Timoshenko",
      "Marshal Shaposhnikov",
      "Marshal Tukhachevsky"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Concert for Bangladesh was the first celebrity concert and musical project to raise money worldwide for the needy. Eric Clapton, Badfinger, Billy Preston and Ravi Shankar appeared. Bob Dylan made an unannounced appearance to play his first concert in two years. Who organized the Concert for Bangladesh?",
    "options": [
      "Willie Nelson",
      "Ringo Starr",
      "George Harrison",
      "Bono"
    ],
    "correctIndex": 2
  },
  {
    "question": "On April 30, 1975 Marine Master Sergeant John Valdez was the last Marine on the last helicopter out of this capital city. From what city did Master Sergeant Valdezs departure signal the last official military presence in Vietnam.",
    "options": [
      "Phnom Penh",
      "Hanoi",
      "Khe Sanh",
      "Saigon"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what was billed as the Battle of the Sexes, tennis champ Billie Jean King didnt show any love as she won this match in straight sets. Who did Billie Jean King beat to win the Battle of the Sexes?",
    "options": [
      "Vitas Gerulaitis",
      "Bobby Riggs",
      "Bjorn Borg",
      "Jimmy Conners"
    ],
    "correctIndex": 1
  },
  {
    "question": "On February 28, 1983 a record 105.9 million viewers tuned in to watch the last show of this programs eleven-year run.",
    "options": [
      "Roots",
      "MASH",
      "Dallas",
      "Gunsmoke"
    ],
    "correctIndex": 1
  },
  {
    "question": "First photographed by Richard Avedon, this campaign was one of the most famous and successful ad campaigns of the 70s. The ads features beautiful black and white photos of Judy Garland, Marlene Dietrich, Lauren Bacall and Barbra Streisand. What company asked the question What Becomes a Legend Most?",
    "options": [
      "Psychedelic Furs",
      "Famous Furs LTD",
      "Blackglama",
      "Ritz Furs"
    ],
    "correctIndex": 2
  },
  {
    "question": "It was just the musical chords of E and F played alternately back and forth but even to this day",
    "options": [
      "Halloween",
      "Jaws",
      "E.T.",
      "Jurassic Park"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many people were murdered as a result of the Salem Witch Trials?",
    "options": [
      "40",
      "1000",
      "2000",
      "20"
    ],
    "correctIndex": 3
  },
  {
    "question": "Durong the Salem Witch Trials, those accused of witchcraft were burned at the stake.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How old was Giles Cory when he was pressed to death?",
    "options": [
      "74",
      "103",
      "81",
      "29"
    ],
    "correctIndex": 2
  },
  {
    "question": "Dorothy Good, who was the youngest person to be accused of witchcraft, was how old?",
    "options": [
      "12",
      "an infant",
      "4",
      "21"
    ],
    "correctIndex": 2
  },
  {
    "question": "To what prominent religious group did the majority of people of Salem Village belong during the time of the notorious Salem witch trials in the 17th century?",
    "options": [
      "Calvinists",
      "Puritans",
      "Protestants",
      "Catholics"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which well-known author changed his name as a result of the Salem Witch Trials?",
    "options": [
      "Jane Austen",
      "Arthur Miller",
      "Theodore Geisel",
      "Nathaniel Hawthorn"
    ],
    "correctIndex": 3
  },
  {
    "question": "Witchcraft was used as the explanation for a sickness that afflicted some of the village girls in Salem. Historians now believe that the girls hallucinations may have been caused by eating moldy bread.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first man to be accused of witchcraft?",
    "options": [
      "Samuel Good",
      "Giles Cory",
      "John Proctor",
      "George Burroughs"
    ],
    "correctIndex": 2
  },
  {
    "question": "Death Hill was the name of the sight of execution during the Salem witch trials.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "John Walsh, host of Americas Most Wanted, is the father of kidnapped and murdered six-year-old, Adam Walsh.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Li Ka Shing, a Hong Kong businessman and one of the worlds richest men, paid an extremely large ransom for the safe return of his son, Victor Li Tzar. How much did he pay?",
    "options": [
      "$1,500,500.00",
      "144,000,000.00",
      "$125,000,000.00",
      "134,000,000.00"
    ],
    "correctIndex": 3
  },
  {
    "question": "The son of this famous singer was kidnapped on December 8, 1963 at Harrahs Lake Tahoe.",
    "options": [
      "Joey Bishop",
      "Dean Martin",
      "Andy Williams",
      "Frank Sinatra"
    ],
    "correctIndex": 3
  },
  {
    "question": "On May 2 1982,  the British nuclear submarine HMS Conqueror fired two torpedoes at the Argentine warship.  323 men of the 1,093 crew were killed on impact.",
    "options": [
      "General Belgrano",
      "Bismarck",
      "Fascination",
      "Lusitania"
    ],
    "correctIndex": 0
  },
  {
    "question": "On July 30, 1865 along the beaches of California, off Crescent City, a summer storm developed and this ship came across a submerged pinnacle known as The Dragons Teeth.",
    "options": [
      "Titanic",
      "Saratoga",
      "Queen Mary",
      "Brother Jonathan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Two years after Titanics tragic sinking - In the summer of 1914 - this ship started a journey from Quebec harbor to England.  A heavy fog hid the horizon and she was hit by the Storstad, a Norwegian collier. Only 465 of the 1500 people onboard survived.",
    "options": [
      "Half Moon",
      "The Empress of Ireland",
      "Queen Elizabeth",
      "Endeavour"
    ],
    "correctIndex": 1
  },
  {
    "question": "This vessel sunk in lake Michigan in 1919, after a fire on board got out of control.",
    "options": [
      "Louisiana",
      "Carrington",
      "Fleetwing",
      "Frank OConnor"
    ],
    "correctIndex": 3
  },
  {
    "question": "In a shipwreck known as this, a Chinese merchant ship carrying  porcelain sank near an island in South Male Atoll In the 16th century.",
    "options": [
      "Cape of Good Hope Wreck",
      "Prazer E Allegria Wreck",
      "Persia Merchant Wreck",
      "Guraidhoo Wreck"
    ],
    "correctIndex": 3
  },
  {
    "question": "On May 7th, 1915 this famous ship was hit by a torpedo near the shore of Queenstown, Ireland. It sank in 15 minutes.",
    "options": [
      "Andrea Doria",
      "Lusitania",
      "Britannic",
      "Titanic"
    ],
    "correctIndex": 1
  },
  {
    "question": "On November 8, 1843 this ship left Lisbon, Portugal, with 84 convicts and headed for Goa, India. Near Cape of Good Hope the ship was taken by a strong current and was driven too close to the shore. She then struck the reef off Muli Island in Mulaku Atoll.",
    "options": [
      "The Empress of Ireland",
      "Titanic",
      "The Ravestein",
      "The Prazer e Allegria"
    ],
    "correctIndex": 3
  },
  {
    "question": "During a hot night in  August 1658, this ship was wrecked on Maamakunudhoo Atoll, while en route to Bengal. There was a small treasure onboard this ship: eight chests of silver and gold from West Africa.",
    "options": [
      "The Persia Merchant",
      "Santa Maria",
      "Adventure",
      "Queen Annes Revenge"
    ],
    "correctIndex": 0
  },
  {
    "question": "Said unsinkable, this ship started her maiden voyage with 2,220 passengers aboard in 1912. Unfortunately this was her first and her last voyage - she hit an iceberg and sank.",
    "options": [
      "The Empress of Ireland",
      "Titanic",
      "Queen Annes Revenge",
      "Blackbeards Ship"
    ],
    "correctIndex": 1
  },
  {
    "question": "On July 19, 1545 King Henry VIII prepared to watch the new pride of his fleet sail out to engage the French.  However, he ended up watching a disaster as this heavy ship heeled over and rapidly capsized when water poured into the lower gun ports.",
    "options": [
      "Mary Rose",
      "Belgrano",
      "Queen Mary",
      "Lusitania"
    ],
    "correctIndex": 0
  },
  {
    "question": "The First Triumvirate is the name historians give to the unofficial political alliance between what three man?",
    "options": [
      "Marcus Licinius Crassus, Gnaeus Pompeius Magnus and Gaius Julius Caesar",
      "Gaius Julius Caesar, Anthony and Gnaeus Pompeius Magnus",
      "Octavius, Lepidus and Anthony",
      "Octavius, Lepidus and Gnaeus Pompeius Magnus"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which temperature scale came first, Fahrenheit or Celsius?",
    "options": [
      "They were developed at  the same time",
      "They were developed so close together that no one knows",
      "Fahrenheit",
      "Celsius"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year was slavery banned in the British colonies?",
    "options": [
      "1802",
      "1833",
      "1864",
      "1865"
    ],
    "correctIndex": 1
  },
  {
    "question": "Samuel Colt patented his revolver in this year, and later built the first industrialized firearm factory.",
    "options": [
      "1855",
      "1825",
      "1845",
      "1835"
    ],
    "correctIndex": 3
  },
  {
    "question": "Although it had been around for a long time, it was not until this person used chloroform, that it became a popular anesthetic.",
    "options": [
      "Dr. Elizabeth Blackwell",
      "Mary Todd Lincoln",
      "Queen Victoria",
      "Sarah Bernhard"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first photograph is considered to be an image produced by the French inventor Nic\u00c3\u00a9phore Ni\u00c3\u00a9pce, in what year?",
    "options": [
      "1865",
      "1546",
      "1837",
      "1826"
    ],
    "correctIndex": 3
  },
  {
    "question": "When was the first internal combustion engine to run on a mixture of explosive gas and air designed?",
    "options": [
      "1876",
      "1794",
      "1859",
      "1879"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first Balfour Declaration, UKs committment to the establishment of a Jewish national home was issued in what year?",
    "options": [
      "1947",
      "1936",
      "1905",
      "1917"
    ],
    "correctIndex": 3
  },
  {
    "question": "Having been forgotten on the Treaty of Versailles and remaining legally at war, this country signed an official treaty with Germany, thus officially ending WW I .",
    "options": [
      "Andorra",
      "Spain",
      "Portugal",
      "Luxembourg"
    ],
    "correctIndex": 0
  },
  {
    "question": "What product was registered with the United States Patent and Trademark Office on October 27 in 1970, by the Van Brode Milling Company?",
    "options": [
      "Velcro",
      "Spork",
      "Crazy Glue",
      "Wonderball"
    ],
    "correctIndex": 1
  },
  {
    "question": "This engineer, architect and industrialist invented the rotary lathe, used in plywood manufacturing.",
    "options": [
      "Thomas Edison",
      "Alfred Nobel",
      "Henry Ford",
      "Immanuel Nobel"
    ],
    "correctIndex": 3
  },
  {
    "question": "This tool was originally made in Germany, but in 1896, after 5 years of hard work, Karl Elsener doubled its features.",
    "options": [
      "The lawn sprinkler",
      "The circular saw",
      "The Swiss army knife",
      "The electric chair"
    ],
    "correctIndex": 2
  },
  {
    "question": "This engineer, sometimes called The Father of Cool, invented the modern air conditioning system, soon after he graduated from Cornell University in 1901.",
    "options": [
      "Willis Carrier",
      "Thomas Adams",
      "George Alcorn",
      "Andrew Alford"
    ],
    "correctIndex": 0
  },
  {
    "question": "What object, often regarded as a symbol of American consumerism, was designed in 1957 by Don Featherstone, who was later awarded the Ig Nobel Prize, a parody of the Nobel Prize?",
    "options": [
      "Velcro",
      "The cordless router",
      "The smiley face",
      "The pink flamingo lawn ornament"
    ],
    "correctIndex": 3
  },
  {
    "question": "Peter Lymburner Robertson received a patent in 1909 for the invention of what tool?",
    "options": [
      "The electric chair",
      "The automatic swimming pool filter",
      "The swiveling lawn sprinkler",
      "The square-headed screwdriver"
    ],
    "correctIndex": 3
  },
  {
    "question": "What device was invented in 1879 by James Ritty, the owner of a tavern in Dayton, Ohio?",
    "options": [
      "The electric chair",
      "The microwave oven",
      "The jukebox",
      "The cash register"
    ],
    "correctIndex": 3
  },
  {
    "question": "She was the first African American woman to get a patent. It was issued on July 14, 1885, for a cabinet bed.",
    "options": [
      "Bessie Coleman",
      "Rosemarry Donalds",
      "Emily Edwards",
      "Sarah Goode"
    ],
    "correctIndex": 3
  },
  {
    "question": "This American woman, who worked as a physical therapist, invented a device that could be used by veteran soldiers, who had lost their arms. It was an electrical apparatus that could deliver food through a tube.",
    "options": [
      "Billie M. Merriwether",
      "Barbara Carruthers",
      "Bessie Blount Griffin",
      "Bethany Alcott"
    ],
    "correctIndex": 2
  },
  {
    "question": "He was the inventor of condensed milk. In 1874 he died in Texas, in a county which was posthumously named after him.",
    "options": [
      "Immanuel Nobel",
      "Jack Johnson",
      "Karl K. Schumlegel",
      "Gail Borden"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the real name of General Stonewall Jackson?",
    "options": [
      "Robert Edward Jackson",
      "Thomas Jonathan Jackson",
      "Henry David Jackson",
      "Nathan Bedford Jackson"
    ],
    "correctIndex": 1
  },
  {
    "question": "Before the Civil War, Stonewall Jackson  was a professor of artillery and natural philosophy at which institute of higher learning?",
    "options": [
      "West Point",
      "Sandhurst",
      "Virginia Military Institute",
      "The Citadel"
    ],
    "correctIndex": 2
  },
  {
    "question": "General Jackson acquired his nickname of Stonewall at which Civil War battle?",
    "options": [
      "Seven Pines",
      "Chancellorsville",
      "Fair Oaks",
      "Bull Run"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which general gave Stonewall Jackson his nickname?",
    "options": [
      "Robert E. Lee",
      "Pierre G. Beauregard",
      "Joseph Johnston",
      "Barnard E. Bee"
    ],
    "correctIndex": 3
  },
  {
    "question": "During the early months of 1862, General Stonewall Jackson led a successful campaign in which region?",
    "options": [
      "Red River Valley",
      "The Shenandoah Valley",
      "Tennessee Valley",
      "The Peninsula"
    ],
    "correctIndex": 1
  },
  {
    "question": "Stonewall Jackson was wounded by his own men at which battle?",
    "options": [
      "Gettysburg",
      "Wilsons Creek",
      "Chancellorsville",
      "New Market"
    ],
    "correctIndex": 2
  },
  {
    "question": "Stonewall Jacksons mortal wound necessitated the amputation of which limb?",
    "options": [
      "right leg",
      "right arm",
      "left arm",
      "left leg"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where was Stonewall Jacksons body buried?",
    "options": [
      "West Point cemetery",
      "Lexington, VA",
      "The Chancellorsville battlefield",
      "Hollywood Cemetery in Richmond"
    ],
    "correctIndex": 1
  },
  {
    "question": "General Stonewall Jackson did not participate at which of these battles?",
    "options": [
      "White Oak Swamp",
      "Fredericksburg",
      "Cross Keys",
      "Gettysburg"
    ],
    "correctIndex": 3
  },
  {
    "question": "General Stonewall Jackson was a graduate of the Virginia Military Institute.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first evidence of human existence in Europe dates back to approximately how many years ago?",
    "options": [
      "50 000",
      "100 000",
      "10 000",
      "35 000"
    ],
    "correctIndex": 3
  },
  {
    "question": "Homer set his epics in the last phase of the Bronze Age in ancient Greece. What is this phase called?",
    "options": [
      "Archaic Greece",
      "Hellenistic Greece",
      "Mycenaean Greece",
      "Classical Greece"
    ],
    "correctIndex": 2
  },
  {
    "question": "Alexander the Great is a son of this European ruler.",
    "options": [
      "Demetrius II",
      "Amyntas IV",
      "Theodosius I",
      "Philip II"
    ],
    "correctIndex": 3
  },
  {
    "question": "The First Triumvirate was a secret pact in Ancient Rome aimed at controlling the Republic. It was formed in the mid-1st century BC by three great men - Pompey, Crassus, and who else?",
    "options": [
      "Julius Caesar",
      "Julio-Claudian",
      "Octavian",
      "Mark Antony"
    ],
    "correctIndex": 0
  },
  {
    "question": "Under what ruler was Christianity officially acknowledged in the Roman Empire?",
    "options": [
      "Nero",
      "Diocletian",
      "Julian",
      "Constantine I"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 395 the Roman Empire was divided into two: the Western Roman Empire centered around Ravenna, and the Eastern Roman Empire centered around Constantinople. Who was the last emperor of a united Roman Empire?",
    "options": [
      "Constantine II",
      "Romulus Augustus",
      "Marcus Aurelius",
      "Theodosius I"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Roman empire was revived when Pope Leo III crowned a king of the Franks as Imperator Augustus on 25 December 800. Under what name is this king known?",
    "options": [
      "William the Conqueror",
      "Louis the Pious",
      "Charlemagne",
      "Alexander the Great"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Black Death, one of the deadliest infectious diseases in history,  took the lives of between 25-50 million people in Europe. What writer depicts the lives of people at that time?",
    "options": [
      "Giovanni Boccaccio in The Decameron",
      "Dante in Divine Comedy",
      "Erasmus in In Praise of Folly",
      "Sir Thomas More in Utopia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who started the movement of Protestant Reformation in Europe?",
    "options": [
      "Martin Luther",
      "John Calvin",
      "Erasmus",
      "Ulrich Zwingli"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what country did the Industrial Revolution start?",
    "options": [
      "Germany",
      "Italy",
      "Great Britain",
      "France"
    ],
    "correctIndex": 2
  },
  {
    "question": "What did Joseph Woodland and  Bernard Silver patent in 1952?",
    "options": [
      "the velcro",
      "the Univac computer",
      "the barcode",
      "Silly Putty"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the early 1950s, which of the following became the third country to have an atomic bomb?",
    "options": [
      "England",
      "France",
      "Russia(the USSR)",
      "The Peoples Republic of China"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which event did not occur in the same year as the other three?",
    "options": [
      "UNIVAC becomes the first mass-produced computer.",
      "Color Television is introduced.",
      "Theodore Geisel writes Cat in the Hat.",
      "Atomic power is introduced."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which event did not occur in the 1950s?",
    "options": [
      "TANG breakfast drink is introduced.",
      "Bobby Fisher becomes the World Champion in chess.",
      "The Frisbee is successfully marketed in the USA.",
      "The first successful test of a hydrogen bomb was done at Enewetak"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1957 Jimmy Hoffa became president of which union?",
    "options": [
      "American Brotherhood of Coal Miners",
      "The AFL-CIO",
      "United Federation of Teachers",
      "International Brotherhood of Teamsters"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which US space ship discovered the Van Allen Radiation Belt in 1958?",
    "options": [
      "Explorer I",
      "Telstar I",
      "Titan I",
      "Apollo I"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was Elvis Presleys first motion picture?",
    "options": [
      "Love Me Tender",
      "Giant",
      "Viva Las Vegas",
      "Jailhouse Rock"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 1958 NFL Championship Game, the Colts played against the Giants. Which statement is untrue about the game?",
    "options": [
      "The game was the first NFL Championship to go into sudden-death overtime.",
      "Mel Triplett scored a 1 yard TD run.",
      "The Giants quarterback, Y.A.Tittle, threw a TD pass to Frank Gifford for the Giants first score.",
      "The game was won by the Baltimore Colts on a 2 yard run by Alan Ameche."
    ],
    "correctIndex": 2
  },
  {
    "question": "The Boston Celtics were the dominant professional basketball team in the 1950s. Which one of these  never played for the Celtics in the 1950s?",
    "options": [
      "Jack Nichols",
      "K.C. Jones",
      "Frank Ramsey",
      "Walter Dukes"
    ],
    "correctIndex": 3
  },
  {
    "question": "On which show did Elvis Presley make his first TV appearance?",
    "options": [
      "The Dorsey Brothers Stage Show",
      "Milton Berles Texaco Star Theater",
      "The Ed Sullivan Show",
      "The Steve Allen Tonight Show"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these was not part of the Million Dollar Quartet, formed in 1956 by Sun Records?",
    "options": [
      "Carl Perkins",
      "Jerry Lee Lewis",
      "Johnny Cash",
      "Willie Nelson"
    ],
    "correctIndex": 3
  },
  {
    "question": "What society, that inhabited southern Mesopotamia, is widely regarded as the earliest civilization on Earth?",
    "options": [
      "Minoan",
      "Zapotec",
      "Phoenicia",
      "Sumer"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Rosetta stone helped scientists to decipher the alphabet of this ancient civilization.",
    "options": [
      "Ancient China",
      "Ancient Rome",
      "Ancient Greece",
      "Ancient Egypt"
    ],
    "correctIndex": 3
  },
  {
    "question": "On what Mediterranean island did the Minoan civilization arise?",
    "options": [
      "Cyprus",
      "Corsica",
      "Crete",
      "Corfu"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the predominating religion in the Achaemenid Empire, one of the first Persian empires?",
    "options": [
      "Rastafarianism",
      "Zoroastrianism",
      "Hinduism",
      "Shamanism"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which was the largest empire in pre-Columbian America?",
    "options": [
      "Maya",
      "Toltec",
      "Inca",
      "Zapotec"
    ],
    "correctIndex": 2
  },
  {
    "question": "This civilization arose in Central Mexico and its members spoke the Nahuatl language .",
    "options": [
      "Olmec",
      "Norte Chico",
      "Toltec",
      "Aztec"
    ],
    "correctIndex": 3
  },
  {
    "question": "Harappan was the mature phase of this civilization that flourished in the river valleys in Sindh province of Pakistan, extending westward into Balochistan province, and in West India.",
    "options": [
      "Indus Valley Civilization",
      "Ancient China",
      "Mali Empire",
      "Canaan"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to legend, Ancient Rome was founded by the brothers Romulus and Remus who were raised by what animal?",
    "options": [
      "Monkey",
      "Wolf",
      "Bear",
      "Tiger"
    ],
    "correctIndex": 1
  },
  {
    "question": "Four colossal statues guard the temple Abu Simbel of what Egyptian pharaoh?",
    "options": [
      "Nebhepetre Mentuhotep II",
      "Mentuhotep II",
      "Tutankhamun",
      "Ramesses II"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the first civilization to make use of the alphabet that is believed to be the ancestor of all modern alphabets?",
    "options": [
      "Indus Valley Civilization",
      "Sumer",
      "Arab",
      "Phoenicia"
    ],
    "correctIndex": 3
  },
  {
    "question": "The country of Russia was named for the Vikings.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Vikings adopted Christianity around 1000 AD.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Women could also be Vikings.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Vikings never plundered religious or holy sites.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the age of the Vikings, Viking ships were the most technologically advanced.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In Viking culture all men were expected to carry weapons.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Loki was the Viking God of lies.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first recorded Viking raid in Britain was in 763.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Leif Eriksson also known as Leif the Lucky is thought to have been the first European to land in North America.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The father of all Norse or Viking gods was Thor the God of Thunder.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "WWII began on September 1, 1939, when Germany invaded this country.",
    "options": [
      "France",
      "Austria",
      "Russia",
      "Poland"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first underground metro in North America, the Boston subway, was opened on September 1 of  this year.",
    "options": [
      "1911",
      "1906",
      "1916",
      "1897"
    ],
    "correctIndex": 3
  },
  {
    "question": "On September  1, 1983 Korean Air Flight KAL-007 was shot down after entering Soviet airspace (this is true).   Some of the passengers and crew survived the crash.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "On September 1, 1979, Pioneer 11 became the first spacecraft to visit Mercury.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "On September 1, 1957, this Grammy Award - winning singer was born.  She began her career as lead singer for the Miami Sound Machine.",
    "options": [
      "Mary J. Blige",
      "Gloria Estefan",
      "Aaliyah",
      "Toni Basil"
    ],
    "correctIndex": 1
  },
  {
    "question": "The passenger pigeon was one of the most common birds in the world- it is estimated that there were about five billion in the United States alone. The last passenger pigeon died on September 1, 1914 in this zoo.",
    "options": [
      "The Giza Zoo",
      "The Kabul Zoo",
      "The Philadelphia Zoo",
      "The Cincinnati Zoo"
    ],
    "correctIndex": 3
  },
  {
    "question": "On September 1, 1985, at a depth of 2 miles (3,8 km), south-east of Newfoundland, the wreck of the Titanic was discovered. Jean-Louis Michel was one of the two people who led the expedition. He was the other one.",
    "options": [
      "Evan Forde",
      "Dr. Robert Ballard",
      "Jacques-Yves Cousteau",
      "Charles David Keeling"
    ],
    "correctIndex": 1
  },
  {
    "question": "Moammar Qaddafi and a group of officers staged a coup detat against King Idris on 1st of  September 1969 (this is true). The coup was unsuccessful and Qaddafi was sent to prison.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "On September 1, 2004, in a small Russian town, armed terrorists took hundreds of schoolchildren and adults hostage. What was the name of the town?",
    "options": [
      "Chita",
      "Beslan",
      "Rostov",
      "Kirishi"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first Crusade was initiated by Emperor Alexius I, when he appealed to Pope Urban II for help in defending against the Muslims.   Alexius I was the ruler of this great empire.",
    "options": [
      "The Holy Roman Empire",
      "The Byzantine Empire",
      "The Chinese Empire",
      "The Western Roman Empire"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Kingdom of Jerusalem was established after the first Crusade.  Godfrey of Bouillon was chosen to be King, but he refused the title and took this one instead.",
    "options": [
      "Slayer of the Muslims",
      "Defender of the Holy City",
      "Defender of the Holy Land",
      "Defender of the Holy Sepulchre"
    ],
    "correctIndex": 3
  },
  {
    "question": "The second Crusade, launched in 1145, was the most successful of all Crusades.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Fourth Crusade (1202\u00e2\u20ac\u201c1204) was called upon by Pope Innocent II and was originally intended to retake Jerusalem by conquering this country.",
    "options": [
      "Bulgaria",
      "Turkey",
      "Egypt",
      "The Byzantine Empire"
    ],
    "correctIndex": 2
  },
  {
    "question": "One of the most brutal crusades was the Albigensian Crusade (this is true). The aim of this crusade was to eliminate the religion of the Cathars.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Jews saw the Crusades as great help and welcomed knights as heroes.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The crusaders considered themselves sort of pilgrims and so, before joining a Crusade, they swore a vow to do this.",
    "options": [
      "Not to steal any gold",
      "To successfully reach Jerusalem",
      "To preach Christianity to Muslim prisoners",
      "To kill at least ten Muslims"
    ],
    "correctIndex": 1
  },
  {
    "question": "The military power of the Teutonic Order was broken after the Battle of Grunwald, after a defeat by these two countries.",
    "options": [
      "Poland and Estonia",
      "Poland and Lithuania",
      "Poland and Switzerland",
      "Poland and Turkey"
    ],
    "correctIndex": 1
  },
  {
    "question": "This largest Christian military order was established in the aftermath of the First Crusade and is widely known as this.",
    "options": [
      "The Knights of St. John",
      "The Knights Templar",
      "The Order of Aviz",
      "Ordo Draconis"
    ],
    "correctIndex": 1
  },
  {
    "question": "All of the Crusades were called upon by Popes.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "NASA was established in this year, on July 29.",
    "options": [
      "1952",
      "1949",
      "1958",
      "1962"
    ],
    "correctIndex": 2
  },
  {
    "question": "The four events in this question took place on  February 4. However, one of the pairs (event - the year in which it happened) is wrong.",
    "options": [
      "First U.S. helicopter was shot down in Vietnam - 1962",
      "Bank of the U.S. Shut Down - 1841",
      "Patty Hearst was kidnapped - 1976",
      "The Yalta Conference commenced - 1945"
    ],
    "correctIndex": 2
  },
  {
    "question": "One of these events did not take place on March 19.",
    "options": [
      "Nevada legalized gambling",
      "Americas first recorded bank robbery took place",
      "General Fromm was executed for plot against Hitler",
      "Indira Gandhi led India"
    ],
    "correctIndex": 3
  },
  {
    "question": "The mass suicide in Jonestown took place on this day in 1978.",
    "options": [
      "November 18",
      "October 13",
      "November 13",
      "October 18"
    ],
    "correctIndex": 0
  },
  {
    "question": "One of these events did not take place during December.",
    "options": [
      "Napoleon died in exile",
      "Bush ordered US troops to Somalia",
      "Irish free state was declared",
      "The Prohibition in the US ended"
    ],
    "correctIndex": 0
  },
  {
    "question": "One of these events did not take place on a summer day.",
    "options": [
      "Admiral Nelson was buried at St. Pauls Cathedral",
      "President Adams settled in a new capital",
      "Donald Duck debuted",
      "The 1936 Summer Olympics"
    ],
    "correctIndex": 0
  },
  {
    "question": "1783 Treaty of Paris was signed on this day.",
    "options": [
      "November 5",
      "December 6",
      "October 4",
      "September 3"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Treaty of Brest-Litovsk was signed on March 3, 1918.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Magellan set out on his voyage around the world on this day.",
    "options": [
      "March 3, 1522",
      "October 12, 1512",
      "January 21, 1532",
      "September 20, 1519"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1799, Napoleon began his campaign to conquer the Ottoman Empire, but was eventually defeated at this city.",
    "options": [
      "Alexandria",
      "Acco",
      "Bagdhad",
      "Istanbul"
    ],
    "correctIndex": 1
  },
  {
    "question": "The English Navigation Acts were a series of laws which restricted foreign shipping. Resentment against the Navigation Acts was a cause for which war?",
    "options": [
      "The English Civil War",
      "The Anglo-Dutch Wars",
      "The Boer War",
      "The Anglo-Berber War"
    ],
    "correctIndex": 1
  },
  {
    "question": "What precipitated the 1969 six-day war between El Salvador and Honduras?",
    "options": [
      "Import tariffs on Honduran goods exported into El Salvador",
      "Import tariffs on Salvadoran goods exported into Honduras",
      "A soccer game",
      "Control over the oil reserves in the Gulf of Fonseca"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the Battle of Gaugamela, 331 B.C. , Alexander the Great of Macedonia defeated which king?",
    "options": [
      "Cyrus the Great",
      "Leonidas of Sparta",
      "Marcellus Germanicus",
      "Darius III"
    ],
    "correctIndex": 3
  },
  {
    "question": "F. D. Toussaint Louverture, a freed self-educated slave, was one of the leaders of which uprising?",
    "options": [
      "Sandanista Uprising",
      "Rebellion of Martinique",
      "Haitian Revolt",
      "Revolution of  Devils Island"
    ],
    "correctIndex": 2
  },
  {
    "question": "What conflict was initiated by a self-proclaimed mystic, named Hong Xiuquan, who claimed that he was the new Messiah?",
    "options": [
      "Taiping Rebellion",
      "Turko-Russian War",
      "Opium Wars",
      "Boxer Revolution"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this 751 A.D. military conflict between Islamic forces and Chinese forces, the Chinese were completely defeated.",
    "options": [
      "Talas War",
      "Sino-Turkish War",
      "Opium War",
      "Boxer Revolution"
    ],
    "correctIndex": 0
  },
  {
    "question": "This conflict, which lasted from 1839 to 1842, is regarded as a trade-inspired war between Great Britain and the Qing Empire in China.",
    "options": [
      "The War of the Roses",
      "The First Opium War",
      "The Shanghai Revolution",
      "Boxer Rebellion"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Great Northern War was the war fought between a coalition of Russia, Denmark-Norway and Saxony-Poland one side and Sweden on the other side. The coalition attacked Sweden in what year?",
    "options": [
      "1942",
      "1700",
      "1917",
      "1864"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Battle of Cr\u00c3\u00a9cy, which took place on 26 August 1346, was one of the most important battles of a war conflict between which two countries?",
    "options": [
      "France and England",
      "France and Flanders",
      "France and Spain",
      "France and Prussia"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this film, the Vietnam War veteran, played by Roy Scheider experienced a war flashback, involving the execution of an enemy soldier.",
    "options": [
      "Blue Thunder",
      "Blackhawk Down",
      "Jaws II",
      "A Bridge  Too Far"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of the 1989 film, directed by Brian De Palma, in which a Vietnamese girl is kidnapped, raped and murdered by US troops?",
    "options": [
      "Platoon",
      "The Village",
      "Apocalypse Now",
      "Casualties of War"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this movie the main character experiences a flashback in which he is tied in a crucifying position and being slowly slashed with a large knife.",
    "options": [
      "First Blood",
      "Uncommon Valor",
      "Iron Eagle",
      "Rambo III"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which country occupied Vietnam from the end of WW II to 1954, setting the scene for a civil war between North and South Vietnam?",
    "options": [
      "India",
      "Holland",
      "China",
      "France"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Henry House can be found on which Civil war battlefield?",
    "options": [
      "South Mountain",
      "Petersburg",
      "Cedar Creek",
      "Bull Run"
    ],
    "correctIndex": 3
  },
  {
    "question": "Elkhorn Tavern is located on which battlefield?",
    "options": [
      "Pea Ridge",
      "Chickamauga",
      "Franklin",
      "Wilsons Creek"
    ],
    "correctIndex": 0
  },
  {
    "question": "Hornets Nest is associated with which battlefield?",
    "options": [
      "Shiloh",
      "Corinth",
      "Chattanooga",
      "Iuka"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Burnside Bridge is related to which Civil War battlefield?",
    "options": [
      "Glorietta Pass",
      "Chantilly",
      "Cheat Mountain",
      "Antietam"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Maryes Heights are a landmark, found on which battlefield?",
    "options": [
      "Cold Harbor",
      "Chancellorsville",
      "Fair Oaks",
      "Fredericksburg"
    ],
    "correctIndex": 3
  },
  {
    "question": "On which battlefield was Lookout Mountain a dominant feature?",
    "options": [
      "Chattanooga",
      "Peachtree Creek",
      "Mechanicsville",
      "Seven Pines"
    ],
    "correctIndex": 0
  },
  {
    "question": "Farmland, owned by the McPherson family, the Cordori family, the Spangler family, the Culp family, and the Rose family is part of which battlefield?",
    "options": [
      "Cedar Mountain",
      "Gettysburg",
      "Franklin",
      "Bull Run"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where was the Mule Shoe located?",
    "options": [
      "The WIlderness",
      "Murfreesboro",
      "Spotsylvania",
      "Appomattox"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Crater is a famous landmark, located on which battlefield?",
    "options": [
      "Fair Oaks",
      "Petersburg",
      "Seven Pines",
      "Red River"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where is the Field of Lost Shoes located?",
    "options": [
      "Lynchburg",
      "McDowell",
      "Kernstown",
      "New Market"
    ],
    "correctIndex": 3
  },
  {
    "question": "On what date did the Mayflower leave port?",
    "options": [
      "September 13",
      "September 20",
      "September 16",
      "September 6"
    ],
    "correctIndex": 3
  },
  {
    "question": "Before its trans-Atlantic voyage the Mayflower was a merchant ship travelling between England and other European countries. What was its primary cargo?",
    "options": [
      "rum",
      "wine",
      "livestock",
      "guns"
    ],
    "correctIndex": 1
  },
  {
    "question": "It is estimated that the crew of the Mayflower consisted of how many people?",
    "options": [
      "25-30",
      "10-20",
      "30-50",
      "5-10"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the Mayflowers estimated length?",
    "options": [
      "80-100 feet",
      "90-110 feet",
      "115-130 feet",
      "100-125 feet"
    ],
    "correctIndex": 1
  },
  {
    "question": "How wide was the Mayflower estimated to be?",
    "options": [
      "40 feet",
      "25 feet",
      "20 feet",
      "35 feet"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many days did it take the Mayflower to make the crossing from England to America?",
    "options": [
      "66 days",
      "80 days",
      "77 days",
      "70 days"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many passengers were aboard the Mayflower when it crossed the Atlantic?",
    "options": [
      "93",
      "100",
      "102",
      "90"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where did the pilgrims aboard the Mayflower intend to settle?",
    "options": [
      "in Virginia",
      "in Pennsylvania",
      "in Ohio",
      "in New York"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Mayflower returned to England in 1621.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the 1982 film Airplane 2: The Sequel the space shuttle was called the Mayflower 1.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "After the Romans left in 412-413 AD present-day Netherlands was populated by the Franks, Saxons and what other tribe?",
    "options": [
      "Jutes",
      "Goths",
      "Angles",
      "Frisians"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to a legend, what preacher was killed by pagans at the northern city of Dokkum in 754?",
    "options": [
      "Clovis",
      "Patrick (Patricius)",
      "Radboud",
      "Bonifatius"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1596, navigator Cornelis de Houtman set  foot on the shore of  what future colonial possession?",
    "options": [
      "Dutch East Indies (Indonesia)",
      "New Netherlands (North America)",
      "Ceylon (Shri Lanka)",
      "Surinam (Dutch Guyana)"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Dutch city was repeatedly plundered by the Vikings?",
    "options": [
      "Dorestad",
      "Roodeschool",
      "Elburg",
      "Goes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dutch independence from Spain (1648) was recognized in this Treaty.",
    "options": [
      "Treaty of Soissons",
      "Treaty of Antwerp",
      "Treaty of Beijing",
      "Treaty of Munster"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first Dutch railway opened in this year -- the same year Belgian independence was recognized by the Dutch.",
    "options": [
      "1839",
      "1870",
      "1802",
      "1895"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Liberal statesman was Prime Minister of the Netherlands in the mid 19th century?  He drafted constitutional changes following the Paris Revolution of 1848.",
    "options": [
      "Anton Adriaan Mussert",
      "Johan Rudolf Thorbecke",
      "Henri Gerard Winkelman",
      "Pieter Jelles Troelstra"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the second wife (1879) of King William the Third of Netherlands? Her only daughter, Wilhelmina ascended the throne on September 6th, 1898 at the age of eighteen.",
    "options": [
      "Emma",
      "Constance",
      "Valerie",
      "Odette"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the nickname of William, Prince of Orange, Count of Nassau (Willem, Prins van Oranje, Graaf van Nassau), killed in 1584 in the city of Delft?",
    "options": [
      "The Conqueror",
      "The Wealthy",
      "The Bold",
      "The Silent"
    ],
    "correctIndex": 3
  },
  {
    "question": "Most people thought a flight to the Moon would be impossible. Many developments had to take place, before it could even be seriously considered. One such development was the launch of the first artificial satellite in space, by the Soviet Union. What was the satellites name?",
    "options": [
      "Sputnik One",
      "Vostok One",
      "Luna One",
      "Spusk One"
    ],
    "correctIndex": 0
  },
  {
    "question": "This was the second NASA space project. It helped develop the techniques, that made the famous Apollo missions possible. This spacecraft, the most sophisticated of its time, was launched by a converted Titan 2 rocket.",
    "options": [
      "Voyager",
      "Gemini",
      "Atlas",
      "Mercury"
    ],
    "correctIndex": 1
  },
  {
    "question": "Luna 1 was the first spacecraft to land on the Moon.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "President Kennedy once said I believe this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the moon and returning him safely to the Earth. This was the goal of the Apollo project. Which one of these rockets was used to launch the Apollo spacecraft?",
    "options": [
      "Titan",
      "Atlas",
      "Saturn",
      "Ariane"
    ],
    "correctIndex": 2
  },
  {
    "question": "The project of the Soviet Union, that aimed at the Moon, was the Luna programme. Although all of the Luna missions were unmanned, they were pioneers in many space explorations. Which one of these missions was the first to take pictures of the far side of the Moon?",
    "options": [
      "Luna 9",
      "Luna 2",
      "Luna 3",
      "Luna 12"
    ],
    "correctIndex": 2
  },
  {
    "question": "Neil Armstrong, Edwin Aldrin and Bill Anders were the three astronauts on Apollo 11.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "On October 24, 1960 a rocket exploded on a launchpad at Baikonur Cosmodrome and caused the death of over 100 military personnel, engineers, and technicians.  While once thought to have been space related, it later became known that the accident was connected with the development of a new Intercontinental Ballistic Missile. The incident was covered up by the Soviet government and did not emerge until the 1990s.   What is this incident known as?",
    "options": [
      "R-16 conspiracy",
      "Korolev disaster",
      "Yangel incident",
      "Nedelin catastrophe"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Apollo project suffered some serious setbacks. Apollo 13 was supposed to be the third manned mission to land on the Moon. However, when the spacecraft was 321,860 km (199,994.5 miles) away from the Earth, an accident took place. The mission was canceled and the crew returned to Earth, proving that the spacecraft was capable of dealing with major crisis. What was the cause of this accident.",
    "options": [
      "Problem with the main engine",
      "Meteoroid impact",
      "Explosion of one of the oxygen tanks",
      "Problem with the auxiliary thrusters"
    ],
    "correctIndex": 2
  },
  {
    "question": "The mission of Luna 24 was to collect soil samples from the Moon.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This was the first joint flight of the two rivals in the race to the Moon. It was also the first international manned spaceflight. A Soviet and an American spacecraft were joined to test the compatibility of their rendezvous and docking systems.",
    "options": [
      "Apollo-Soyuz",
      "Apollo-Luna",
      "Mercury-Salyut",
      "Gemini-Voskhod"
    ],
    "correctIndex": 0
  },
  {
    "question": "Napoleon started his military career in the cavalry.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "This was Napoleons perfect battle.",
    "options": [
      "Friedland",
      "Jena",
      "Waterloo",
      "Austerlitz"
    ],
    "correctIndex": 3
  },
  {
    "question": "Napoleon Bonaparte usually wore a uniform of the following rank.",
    "options": [
      "King",
      "Colonel",
      "General",
      "Marshal"
    ],
    "correctIndex": 1
  },
  {
    "question": "Napoleon Bonaparte had no children to succeed him.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Napoleon Bonapartes body still lies in Saint Helena, where he was buried.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Mameluke was Napoleons constant attendant.",
    "options": [
      "Roustam",
      "Tommy",
      "Karageorgio",
      "Maltesta"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 79 BC, a major cloud appeared over mount Vesuvius. The eruption that would follow, would forever be linked to the demise of Pompeji. However, this was not the only city buried beneath ash and mud. What other town was devastated by the eruption?",
    "options": [
      "Herculaneum",
      "Napoli",
      "Misenum",
      "Stabiae"
    ],
    "correctIndex": 0
  },
  {
    "question": "This 1755 disaster was widely believed to be Gods wrath. After this disaster, the Inquisition came down even harder on the non-believers. In Spain and Portugal non-Catholics were forced to baptize, in England and Sweden official days of fasting were proclaimed. Voltaire mentioned this disaster in his Novel Candide.",
    "options": [
      "The Lisbon Earthquake",
      "The Black Plague",
      "The fall of Constantinople",
      "Famine due to poor harvests"
    ],
    "correctIndex": 0
  },
  {
    "question": "This disaster, which took place in 1883, caused a tsunami with up to 50 m high waves. It struck the coasts of Java and Sumatra, flooding approximately 300 towns and killing 36.000 people. What was the direct cause?",
    "options": [
      "The Explosion of Krakatau",
      "Earth/Sea Quake",
      "Extreme tides",
      "Nucleair testing"
    ],
    "correctIndex": 0
  },
  {
    "question": "The famous rhyme I had a little bird. Its name was Enza. I opened the window. And In-flew-Enza refers to what disaster?",
    "options": [
      "The Sleeping Disease",
      "Ebola",
      "The Spanish Flu",
      "The Bird flu"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the year 1770, the worst ever famine in history struck this region, considered to be one of the most densely populated areas on Earth.",
    "options": [
      "Indonesia",
      "Bengal",
      "China",
      "India"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1931 a big flood hit this country/area causing the deaths of approximately 850.000 - 4.000.000 people.",
    "options": [
      "The flooding of the Volga - Russia",
      "Tsunami - Indonesia",
      "The flooding of the Nile - Egypt",
      "The Yellow River flooding - China"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1991, a cyclone, unofficially known as Cyclone Gorky, struck this country leaving at least 138.000 people dead.",
    "options": [
      "China",
      "Bangladesh",
      "Srilanka",
      "Indonesia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What caused the Queen of the Sea train disaster which killed 1700 passengers?",
    "options": [
      "Two trains collided on the Tokaido Main Line in Yokohama, Japan.",
      "After the 2004 Earthquake and subsequent Tsunami this train was washed away from a Srilankan coastal track.",
      "The brakes on an overfilled troop train returning from the front in 1917could not take the weight of the many wagons.",
      "A cyclone hit the train in Bihar, India, while it was crossing a bridge. It derailed and plunged into the river below."
    ],
    "correctIndex": 1
  },
  {
    "question": "General Ishii Shiros name is often connected with his experiments with germs and bio-weapons. Which one of the following is the correct name of the headquarters of the Japanese Biological Warfare Unit 731 during World War II?",
    "options": [
      "Pangfen",
      "Pingfen",
      "Pingfan",
      "Pangfan"
    ],
    "correctIndex": 2
  },
  {
    "question": "General Dwight Eisenhower headed an operation whose aim was to gain control of Morocco and Algiers. What was the name of the operation?",
    "options": [
      "Operation Torchlight",
      "Operation Torch",
      "Operation Lantern",
      "Operation Cresset"
    ],
    "correctIndex": 1
  },
  {
    "question": "Hitler promoted General Friedrich Paulus in February 1943, in an attempt to lift his spirits. What was his promotion?",
    "options": [
      "Senior Marshal",
      "Senior Field Marshal",
      "Field Marshal",
      "Marshal"
    ],
    "correctIndex": 2
  },
  {
    "question": "General Erwin Rommel led German forces during World War II. Which of the following countries was his battlefield?",
    "options": [
      "Libya",
      "All of these countries",
      "France",
      "Poland"
    ],
    "correctIndex": 1
  },
  {
    "question": "The following words belong to which famous World War II general: Crete was the grave of the German parachutists.\u00e2\u20ac\u009d?",
    "options": [
      "General Henri Giraud",
      "General Friedrich Paulus",
      "General Kurt Student",
      "General Erwin Rommel"
    ],
    "correctIndex": 2
  },
  {
    "question": "General Jacques Leclercs division received the surrender of the German forces at the Gare Montparnasse and liberated Paris on what date?",
    "options": [
      "25 August 1944",
      "11 August 1944",
      "19 August 1944",
      "15 August 1944"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following names is a name of a French general during World War II?",
    "options": [
      "Henri Giraud",
      "Arnaud Giraud",
      "Jean Giraud",
      "Oliver Giraud"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Army Corps of Polish general Franciszek Kleeberg, that was named Samodzielna Grupa Operacyjna Polesie, capitulated after the Battle of Kock. What is the exact date of this event?",
    "options": [
      "6 November, 1940",
      "6 October, 1939",
      "16 October, 1939",
      "26 October, 1941"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1943, General Friedrich Paulus was in charge of the German forces in which area?",
    "options": [
      "Egypt",
      "Caucasus",
      "the Netherlands",
      "Paris"
    ],
    "correctIndex": 1
  },
  {
    "question": "US General Patton, leader of the Third Army was famous for which of the following?",
    "options": [
      "his battle diaries",
      "his peevish temper",
      "his war journals",
      "his reckless sense of humour"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following combinations (astronaut - spacecraft - launch date - landing site) correctly presents the voyage of the first man to travel in space?",
    "options": [
      "Yuri Gagarin - Vostok 6 - 1961 - Karaganda region",
      "Gherman Titov - Vostok 1 - 1962 - Karaganda region",
      "Yuri Gagarin - Vostok 1 - 1961 - Kazakhstan",
      "Gherman Titov - Vostok 6 - 1962 - Kazakhstan"
    ],
    "correctIndex": 2
  },
  {
    "question": "Valentina Tereshkova was the first woman to fly in space. Her mission took place on June 16, 1963. How long was her flight?",
    "options": [
      "3 days, 11 hours, 50 minutes",
      "4 days, 22 hours, 10 minutes",
      "1 days, 22 hours, 50 minutes",
      "2 days, 22 hours, 50 minutes"
    ],
    "correctIndex": 3
  },
  {
    "question": "The  first space tourist was this businessman.",
    "options": [
      "Toyohiro Akiyama",
      "Mark Shuttleworth",
      "Dennis Tito",
      "Lance Bass"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first animal launched into space was one of these.",
    "options": [
      "Monkey",
      "Mouse",
      "Guinea pig",
      "Dog"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many miles represent a light year?",
    "options": [
      "Nearly six trillion",
      "Nearly six million",
      "Nearly two trillion",
      "Nearly two million"
    ],
    "correctIndex": 0
  },
  {
    "question": "The roots of the word knight are connected to cniht, an Old English word meaning this.",
    "options": [
      "Hangman",
      "Stable-lad",
      "Page boy",
      "Prison-breaker"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the tax, which knights had to pay in order to avoid going to war.",
    "options": [
      "The tax of scutage",
      "The tax of war",
      "The tax of freedom",
      "The tax of chivalry"
    ],
    "correctIndex": 0
  },
  {
    "question": "Pas dArmes was a tournament, in which knights were dared to fight.  If knights refused to fight, they had to leave this behind as a sign of humiliation.",
    "options": [
      "Spurs",
      "Helmet",
      "Clothes",
      "Horse"
    ],
    "correctIndex": 0
  },
  {
    "question": "Originally, any knight could bestow knighthood on a man.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Don Quixote de la Mancha is a fictional knight from the self-titled novel, written by this author.",
    "options": [
      "Dante Alighieri",
      "Giuseppe Tomasi di Lampedusa",
      "Arthur Conan Doyle",
      "Miguel de Cervantes"
    ],
    "correctIndex": 3
  },
  {
    "question": "Ritter is a title similar to that of a Knight, used in this country.",
    "options": [
      "Poland",
      "Germany",
      "Bulgaria",
      "France"
    ],
    "correctIndex": 1
  },
  {
    "question": "By the end of the 13th century, knights were required to swear allegiance.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The legends of King Arthur and the Round Table are some of the most famous tales about knights. Who was the head of the table?",
    "options": [
      "Lancelot",
      "Nobody",
      "Merlin",
      "Arthur"
    ],
    "correctIndex": 1
  },
  {
    "question": "In order to become a knight nowadays, you would have to be given the title in royal recognition, or to belong to an order. In the UK the knight is styled Sir and the female -- this.",
    "options": [
      "Dame",
      "Lady",
      "Knightess",
      "Baroness"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the French governmental structure until the French Revolution?",
    "options": [
      "Dictatorship",
      "Constitutional monarchy",
      "Absolute monarchy",
      "Republic"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the Crimean War, France, the United Kingdom, the Kingdom of Sardinia, and the Ottoman Empire fought against what country?",
    "options": [
      "Kingdom of Prussia",
      "Hapsburg Empire",
      "Kingdom of Italy",
      "Imperial Russia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What term refers to the competition between Britain, France and Germany over African territory between the 1880s and the beginning of World War I in 1914?",
    "options": [
      "The African War",
      "Franco-Prussian War",
      "The Scramble for Africa",
      "New Imperialism"
    ],
    "correctIndex": 2
  },
  {
    "question": "What state succeeded the Austrian Empire in 1867?",
    "options": [
      "Austria-Hungary",
      "German Confederation",
      "Archduchy of Austria",
      "First Austrian Republic"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first wife of Napol\u00c3\u00a9on Bonaparte and the first Empress of the French?",
    "options": [
      "Marie Louise of Austria",
      "Louise Catherine El\u00c3\u00a9onore Denuelle de la Plaigne",
      "Jos\u00c3\u00a9phine de Beauharnais",
      "Marie, Countess Walewski"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where was Napoleon finally defeated on June 18, 1815?",
    "options": [
      "Aspern-Essling",
      "Waterloo",
      "Niemen River",
      "Moscow"
    ],
    "correctIndex": 1
  },
  {
    "question": "The First Word War began after the assassination of what European royal heir?",
    "options": [
      "Archduke Karl Ludwig of Austria",
      "Archduke Franz Ferdinand of Austria",
      "Maximilian, Duke of Hohenberg,",
      "Prince Ernst von Hohenberg"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the last Tsar of Russia, who abdicated after the February Revolution of 1917.",
    "options": [
      "Alexander III of Russia",
      "Nicholas II of Russia",
      "Nicholas I",
      "Alexander I"
    ],
    "correctIndex": 1
  },
  {
    "question": "This organization, established in Paris, 1951, was the predecessor of the European Union.",
    "options": [
      "European Economic Community",
      "European Atomic Energy Community",
      "European Defence Community",
      "European Coal and Steel Community"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Treaty on European Union, that proclaims the creation of the European Union, was signed on February 7, 1992 in this city.",
    "options": [
      "Belfast",
      "Geneva",
      "Paris",
      "Maastricht"
    ],
    "correctIndex": 3
  },
  {
    "question": "Men were first to wear jewels.  They considered them to be this.",
    "options": [
      "A part of their uniform",
      "Barometers",
      "Objects of womens desire",
      "Amulets"
    ],
    "correctIndex": 3
  },
  {
    "question": "The tradition of engagement rings was started by Maximilian of Austria. He gave one such ring to her.",
    "options": [
      "Mary Queen of Scots",
      "Bloody Mary",
      "Marie-Antoinette",
      "Mary of Burgundy"
    ],
    "correctIndex": 3
  },
  {
    "question": "This type of pattern is common in traditional Chinese womens clothing.",
    "options": [
      "Horse",
      "Peony",
      "Rose",
      "Star"
    ],
    "correctIndex": 1
  },
  {
    "question": "She popularized the mini.",
    "options": [
      "Marilyn Monroe",
      "Twiggy",
      "Mary Quant",
      "Marie Brizzard"
    ],
    "correctIndex": 2
  },
  {
    "question": "This type of female figure was fashionable in the 20s.",
    "options": [
      "Voluptuous",
      "Coca-cola",
      "Masculine",
      "Nude"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Marcel Wave is one of these.",
    "options": [
      "A fashionable way to shake you head",
      "A hair style",
      "A way to fold your skirt",
      "A type of hat"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is a kind of body adornment that Indian women use. It became popular in many countries after Madonna adopted it.",
    "options": [
      "Bindi",
      "Tattoo",
      "Eyebrow shaping",
      "Skin jeweller"
    ],
    "correctIndex": 0
  },
  {
    "question": "He created Chanel No. 5 for Coco Chanel.",
    "options": [
      "Ernest Beaux",
      "Ralph Lauren",
      "Yves Saint Laurent",
      "Jean Patou"
    ],
    "correctIndex": 0
  },
  {
    "question": "The first traces of womens underwear were found on this island.",
    "options": [
      "Australia",
      "Wales",
      "Madagascar",
      "Crete"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first bra was announced in this fashion magazine.",
    "options": [
      "Vogue",
      "Glamour",
      "Marie Claire",
      "Elle"
    ],
    "correctIndex": 0
  },
  {
    "question": "What city became the capital after the unification of Germany in 1990?",
    "options": [
      "Bonn",
      "Berlin",
      "Bremen",
      "Dresden"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1990 the new NC-17 replaced the X movie rating. What does NC stand for?",
    "options": [
      "Need Consideration",
      "Non Conforming",
      "No Children",
      "Need Confirmation"
    ],
    "correctIndex": 2
  },
  {
    "question": "What nation, subject of the 1994 Operation Uphold Democracy, is the only nation whose independence was gained as part of a successful slave rebellion?",
    "options": [
      "Haiti",
      "Gabon",
      "Barbados",
      "Nigeria"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1996 President Clinton was re-elected as the first two-term Democrat since what former US President?",
    "options": [
      "Dwight D. Eisenhower",
      "Jimmy Carter",
      "Franklin Roosevelt",
      "Ronald Reagan"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1996, TWA Flight 800 exploded and crashed into the Atlantic Ocean shortly after take off, killing all 230 aboard.  The flight was bound from New York to what popular European destination?",
    "options": [
      "Paris",
      "Vienna",
      "Athens",
      "London"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which country transferred sovereignty of Hong Kong to China in 1997?",
    "options": [
      "Japan",
      "France",
      "USA",
      "Great Britain"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first cloned mammal, Dolly, was named after country singer Dolly Parton.  Why?",
    "options": [
      "Dolly Parton had just released a single named Dolly",
      "Dolly Parton is famously busty",
      "Dolly Parton was an outspoken supporter of  stem cell research",
      "Dolly Parton was the embryologists favorite singer"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what movie does the protagonist call the police about the Watergate break-in, invent the smiley, and make millions on Apple Computer stock thinking he has invested in produce?",
    "options": [
      "Unforgiven",
      "American Beauty",
      "Forrest Gump",
      "The English Patient"
    ],
    "correctIndex": 2
  },
  {
    "question": "What Mariah Carey and quartet Boyz II Men song remained at the top of the U.S. Billboard Hot 100 for 16 weeks?",
    "options": [
      "One Sweet Day",
      "Hero",
      "Without You",
      "Dreamlover"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1994, which political party won the majority in the US congress for the first time in 40 years?",
    "options": [
      "Republican Party",
      "Constitution Party",
      "Democratic Party",
      "Libertarian Party"
    ],
    "correctIndex": 0
  },
  {
    "question": "This was the first accident of its kind in the race for space. On 27 January 1967, the crew of this spacecraft (Virgil I. Gus Grissom, Edward H. White II and  Roger B. Chaffee) were performing a flight simulation on ground.   5:40, a communication failure suddenly occurred and the astronauts began working on it. Unexpectedly, at 6:31 PM, a fire broke out consuming all on-board. What was the name of the mission?",
    "options": [
      "Apollo 1",
      "Mercury 2",
      "Gemini 1",
      "Gemini 9"
    ],
    "correctIndex": 0
  },
  {
    "question": "This was the first space disaster in USSR as well as the first in-flight accident in the history of manned spaceflight. On 23 April 1967 Soyuz 1 was launched, carrying one astronaut. Shortly after, trouble began and Soyuz 1 was deorbited. Due to problems with the parachutes, the sole crew member was killed on his way back, his capsule hitting the ground at high velocity. What was the name of this astronaut?",
    "options": [
      "Valery Bykovsky",
      "Vladimir Komarov",
      "Aleksei Yeliseyev",
      "Yuri Gagarin"
    ],
    "correctIndex": 1
  },
  {
    "question": "The death of Michael J. Adams on-board the X-15-3 rocket plane is internationally recognized as a spaceflight accident.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "On 23 March 1961, Valentin Bondarenko was training in a special low pressure chamber filled with pure oxygen. An unexpected occurrence killed Bondarenko, making him the first space related casualty. What caused his death?",
    "options": [
      "Bondarenko dropped an alcohol soaked cloth onto an electric hotplate",
      "The oxygen in the chamber was suddenly sucked out",
      "The pressure suddenly became too high",
      "The chamber suddenly collapsed"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Soviets, having lost the race for the Moon, redirected their efforts towards the construction of space stations. They became quite good at this uneasy task, but also experienced a great deal of problems. Due to a fatal malfunction of a valve, all three crew members of this space station died.",
    "options": [
      "Soyuz 7",
      "Soyuz 6",
      "Soyuz 1",
      "Soyuz 11"
    ],
    "correctIndex": 3
  },
  {
    "question": "\u00d0?n oxygen tank in the service module of Apollo 13 exploded, when the spacecraft was 199,995 miles (321,860 km) away from Earth. However, all crewmembers returned home safely.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The European Space Agency (ECA) had some setbacks too. Two workers died, while inspecting the umbilical mast of the launch pad of Ariane 5. Later,  Luc Celle and  Jean-Claude Dhainaut were reported to have died of asphyxiation, because of a nitrogen leak.  When did this accident take place?",
    "options": [
      "13 May 2005",
      "12 June 1989",
      "5 May 1995",
      "6 December 1996"
    ],
    "correctIndex": 2
  },
  {
    "question": "On October 24, 1960 a rocket exploded on a launchpad at Baikonur Cosmodrome. Fortunately there were no casualties.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the 70s NASA began a project to create a reusable space vehicle and the first Shuttle, Columbia, was launched in 1981. Five years later, on 28 January 1986, Space Shuttle Challenger exploded 73 seconds after launch.   Challenger was the first flight of the TISP program. What does TISP stand for?",
    "options": [
      "Teaching Initiative Space Program",
      "Top Inverted Space-wing Program",
      "Thrust Injection Solar Propulsion",
      "Teacher In Space Program"
    ],
    "correctIndex": 3
  },
  {
    "question": "On 1 February Space Shuttle Columbia re-entered Earths atmosphere after completing its 16-day mission.  All vehicle data was lost at 207,135 ft above the Earth at Mach 18.3 (about 12,500 mph) when the Columbia Space Shuttle broke up over north-central Texas.  What nationalities were the 7 brave astronauts on board Columbia?",
    "options": [
      "Five Americans, one Israeli and one Indian",
      "Six Americans and one Indian",
      "Six Americans and one Israeli",
      "Four Americans, two Russians and one Israeli"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which church official commissioned Michelangelo, to paint the ceiling of the Sistine Chapel, the residence of the Pope in the Vatican city?",
    "options": [
      "Pope Linus",
      "Pope Alexander I",
      "Pope Julius II",
      "Pope Silvester I"
    ],
    "correctIndex": 2
  },
  {
    "question": "Jacques Cartier, a notable discoverer of the Renaissance period, was the first French explorer to reach Quebec in which year?",
    "options": [
      "1524",
      "1530",
      "1534",
      "1544"
    ],
    "correctIndex": 2
  },
  {
    "question": "This English Renaissance musician was one of the first composers to write anthems set to English words?",
    "options": [
      "Guillaume Dufay",
      "John Dunstable",
      "Thomas Tallis",
      "Leonel Palmer"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Italian poet, considered one of the fathers of the Renaissance, is also regarded as the father of alpinism.",
    "options": [
      "Castiglione",
      "Machiavelli",
      "Petrarch",
      "Dante"
    ],
    "correctIndex": 2
  },
  {
    "question": "The statue of David, the first free-standing nude statue since ancient times, was created by the Renaissance sculptor Donatello from what material?",
    "options": [
      "clay",
      "marble",
      "bronze",
      "granite"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which Renaissance mapmaker was the first to make a map of the British Isles?",
    "options": [
      "Galileo",
      "Nicolaus Copernicus",
      "Gerardus Mercator",
      "Rene Descartes"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Renaissance typographer established the Aldine Press, famous for the introduction of the Italics?",
    "options": [
      "Cipriano de Rore",
      "Aldus Manutius",
      "Henrich Isaac",
      "Christopher Tye"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Renaissance musician was the first composer to use a folk song in mass, a group of songs in honor of God.",
    "options": [
      "Paollo Uccello",
      "Benozzo Gozzoli",
      "Jan Joest",
      "Guillaume Dufay"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following Renaissance artists wrote I Commentari,a document regarded as the first autobiography of an artist?",
    "options": [
      "Masolino da Panicole",
      "Michelozzo di Bartolommeo",
      "Lorenzo Ghiberti",
      "Piero di Cosimo"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Renaissance figure of Polish origin was the first rector of what is today the Vilnius State University.",
    "options": [
      "Nicolaus Copernicus",
      "Stefan Batory",
      "Szyman Starowalski",
      "Piotr Skarga"
    ],
    "correctIndex": 3
  },
  {
    "question": "Samurai is a caste of warriors, that came into existence when the Japanese shogunate was formed. The translation of the word samurai is those who serve in close attendance to nobility. Samurai warriors that didnt serve any lord were called this.",
    "options": [
      "Kenin",
      "Uruwashii",
      "Musha",
      "Ronin"
    ],
    "correctIndex": 3
  },
  {
    "question": "As samurai warriors were supposed to set a good example to those beneath them - they were bound by Bushido, a strict ethic code. Bushido means way of the warrior and one of its central points states that a samurai must be completely loyal towards this person.",
    "options": [
      "The shogun",
      "His daimyo",
      "His kaishaku",
      "The emperor"
    ],
    "correctIndex": 1
  },
  {
    "question": "Commiting suicide by performing seppuku, was the only way for a disgraced samurai to gain his honor once again.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Samurai warriors usually carried two swords- a big and a small one. The small one was called wakizashi and was the honour blade of the samurai. He would carry it everywhere and would even sleep with his wakizashi under his pillow.  What was the name of the big sword of the samurai?",
    "options": [
      "Katana",
      "Jo",
      "Naginata",
      "Yari"
    ],
    "correctIndex": 0
  },
  {
    "question": "Due to the many movies and books, based on stories about honorable samurai warriors, many people have been fascinated by the Japanese culture. This movie of the great film director Akira Kurosawa served as an inspiration for the western A Fistful Of Dollars. It tells the story of a former samurai, involved in a towns gang war.",
    "options": [
      "Abarembo Shogun",
      "Yojimbo",
      "The Seven Samurai",
      "The Hidden Fortress"
    ],
    "correctIndex": 1
  },
  {
    "question": "One ceremony was extremely important for every samurai - Genpuku. In this ceremony, a samurai changed his child name to an adult one and received his first swords. Only then the samurai could marry. Genpuku would be held as early as this age.",
    "options": [
      "18",
      "15",
      "9",
      "12"
    ],
    "correctIndex": 3
  },
  {
    "question": "Every samurai sword had to be tested on the corpse of an animal, before it could be used in battle.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "During the 13th century Japan was invaded twice. The first battles caught samurais unprepared and almost wiped them out, but they improved their tactics and saved Japan by building a defensive stone wall and attacking at night. This was the country that tried to conquer Japan.",
    "options": [
      "China",
      "Mongolian Empire",
      "Russian Empire",
      "England"
    ],
    "correctIndex": 1
  },
  {
    "question": "Samurai warriors were not just regular men- they were aristocrats, who developed their own culture. In the 14th century their education began to include flower arrangements..",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The decline of samurai warriors began in this period of Japanese history. Even though they were still allowed to carry their swords and could behead any commoner not willing to pay proper respect, they were no longer warriors. Samurai became bureaucrats and administrators, because there were no wars to fight and no rebellions to suppress.",
    "options": [
      "Heian Period",
      "Feudal Period",
      "Edo Period",
      "Sengoku Period"
    ],
    "correctIndex": 2
  },
  {
    "question": "1867 was the year of the resignation of the last shogun. The emperor became once again the leader of Japan and in 1871 the privileges of the Samurai caste were taken away. This caused many social problems, because samurai warriors represented nearly 8% of the population of Japan at that time. What was the name of this famous, last shogun?",
    "options": [
      "Tokugawa Ieyasu",
      "Takamori Saigo",
      "Toyotomi Hideyoshi",
      "Tokugawa Yoshinobu"
    ],
    "correctIndex": 3
  },
  {
    "question": "Although their privileges were abolished, these noble warriors were still determined to protect Japan from becoming dependent on the Western World. In 1877, the rebellious samurai gathered under the command of Saigo Takamori. Their weaponry was inferior and their army was highly outnumbered, but they didnt give up. They suffered many casualties and the last survivors fought to death in this battle.",
    "options": [
      "The Battle of Sekigahara",
      "The Battle of Omi",
      "The Battle of Mikawa",
      "The Battle of Shiroyama"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who or what was a medieval fief?",
    "options": [
      "A thief",
      "A vassal who had his vassals",
      "A small castle",
      "Land held by a vassal"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was a serf in the Middle Ages?",
    "options": [
      "A free peasant",
      "A farmer who was not free",
      "A craft apprentice",
      "A landowner"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which medieval unit of volume is the largest?",
    "options": [
      "Bushel",
      "Tun",
      "Gallon",
      "Quarter"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the Middle Ages, the most commonly used monetary system was based on Livre, Sou and Dernier. Which relation between them is correct?",
    "options": [
      "1d = 12s = 144l",
      "1l = 20s = 240d",
      "1s = 100l = 1000d",
      "1l = 60d = 720s"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which language was NOT commonly spoken by inhabitants of the Holy Roman Empire during the Middle Ages?",
    "options": [
      "Polish",
      "German",
      "Italian",
      "Spanish"
    ],
    "correctIndex": 3
  },
  {
    "question": "At the battle of Hastings (1066) an army of Normans, led by William the Conqueror, defeated the Anglo-Saxon forces. Who actually were Normans?",
    "options": [
      "Vikings from Norway",
      "A mixture of Dutch, French and Spanish",
      "Vikings who settled in Normandy and spoke French",
      "French"
    ],
    "correctIndex": 2
  },
  {
    "question": "How was land usually divided in the medieval 3-field system?",
    "options": [
      "One-third of a manors land was cultivated with wheat, one-third with barley or other crop, one-third was left for meadows. Every year the fields were rotated.",
      "Actually there was no 3-field system, land was cultivated at random.",
      "One-third of all farming land in a given country belonged to the crown, one-third to the church, one-third to knights.",
      "One-third of a manors land belonged to the landowner (liege), one-third to the landholder (vassal), one-third to the church."
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was a bailiff in the Middle Ages?",
    "options": [
      "A sheriff, responsible for collecting taxes",
      "A person who was not able to pay his/her debts",
      "A person appointed by a landholder to manage the village, fields and livestock",
      "A priest of non-noble origin"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which animals were better for medieval farming?",
    "options": [
      "Oxen, as they are stronger than horses",
      "Horses, as they are faster than oxen",
      "People in the Middle Ages did not know how to use animals in farming.",
      "None is better than the other, both oxen and horses were used"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who would typically own a 100-acre piece of land during medieval times?",
    "options": [
      "An unfree farmer",
      "A poor knight or a wealthy free peasant",
      "A wealthy knight",
      "A poor peasant"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which language was the medieval lingua franca?",
    "options": [
      "Latin",
      "German",
      "French",
      "English"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which entity was ruled by Frederic Barbarossa?",
    "options": [
      "the Catholic Church",
      "France",
      "the Holy Roman Empire",
      "England"
    ],
    "correctIndex": 2
  },
  {
    "question": "Peace in our time were the famous words by Chamberlain when he returned to the UK from which meeting?",
    "options": [
      "Conference of Teheran",
      "Conference of Munich",
      "Conference of Washington",
      "Conference of Yalta"
    ],
    "correctIndex": 1
  },
  {
    "question": "On May 10th 1940, Germany invaded France, Belgium, the Netherlands and Luxembourg. Which country bore the main thrust?",
    "options": [
      "The Netherlands",
      "Belgium",
      "France",
      "Luxembourg"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the objective of Operation Sea Lion?",
    "options": [
      "The conquest of Britain",
      "Mining of the Norwegian coast to avoid German invasion",
      "Cutting British supplies at sea",
      "Commando raid on Dieppe to test Atlantic Wall defenses"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Battle for Stalingrad is widely considered to be the turning point in the war against Germany, since for the first time in the war, a German army was decisively defeated. However, another battle would be decisive for the outcome of WW2. Which battle was this?",
    "options": [
      "The Ardennes offensive - 1944",
      "D-Day in Normandy",
      "The Battle of Kursk",
      "Operation Market Garden"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where did the biggest amphibious operation during WW2 take place?",
    "options": [
      "Italy",
      "Okinawa",
      "Normandy",
      "Africa"
    ],
    "correctIndex": 1
  },
  {
    "question": "During the German Blitzkrieg in the West (1940), Italy was initially reluctant to aid its ally and stayed on the sideline.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the importance of the Allied victory at Remagen during WW2?",
    "options": [
      "The allies showed that they could co-operate in unison, despite the many nationalities.",
      "The allies were able to force large number of German forces to surrender.",
      "The allies managed to get bridgeheads over the Rhine river.",
      "The allies got hold of the Industrial Ruhr area."
    ],
    "correctIndex": 2
  },
  {
    "question": "In their attempt to knock Italy out of WW2, the Allies met a fierce competitor on the Italian peninsula. Which German general gave the Allies such a hard time?",
    "options": [
      "Guderian",
      "Rommel",
      "Kesselring",
      "Paulus"
    ],
    "correctIndex": 2
  },
  {
    "question": "At the Naval battle of Mers-El-Kebir in 1940, the British Navy made a devastating blow against the Italian Navy.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What did rich Egyptian women place on top of their heads and kept it there all day?",
    "options": [
      "A small mirror",
      "A cone of scented grease",
      "A jewel made of serpents skin",
      "A golden pendant"
    ],
    "correctIndex": 1
  },
  {
    "question": "In ancient Japan geichas were famous for their fashion coiffures. However, it was difficult to preserve them during sleep. Still they managed to keep their complex hairdos. How?",
    "options": [
      "Using skilled stylists",
      "Using a night cap",
      "Using pillows filled with buckwheat chaff",
      "Using a special mousse"
    ],
    "correctIndex": 2
  },
  {
    "question": "Roman women were jealous of the captive-women from the German tribes that their men captured. That is why they used to cut off the captives long blond braids and used them as this.",
    "options": [
      "Home decoration",
      "Dress ornamentation",
      "Pillow filling",
      "Part of their own hair"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first bodice was invented not to dress women, but to make them more attractive to men by pushing breast up and out. Where was it invented?",
    "options": [
      "In Russia",
      "In Italy",
      "In Spain",
      "On the island of Crete"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first woman said to wear trousers?",
    "options": [
      "Paula Abdul",
      "Sarah Bernhardt",
      "Gretta Garbo",
      "Elizabeth Taylor"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did the term milliner appear for the first time?",
    "options": [
      "In 1786",
      "In 1694",
      "In 1529",
      "In 1342"
    ],
    "correctIndex": 2
  },
  {
    "question": "Besides white, what two colors were popular for a wedding dress a few centuries ago?",
    "options": [
      "Green and yellow",
      "Blue and pink",
      "Grey and purple",
      "Red and orange"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who introduced the pollover sweater?",
    "options": [
      "Yves Saint Laurent",
      "Christian Dior",
      "Gian Franco Ferre",
      "Coco Channel"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who were first to wear something like mens underwear?",
    "options": [
      "American Indians",
      "Romans",
      "Greeks",
      "Egyptians"
    ],
    "correctIndex": 3
  },
  {
    "question": "When was the first pull-on mens underwear invented ?",
    "options": [
      "Around 7th century",
      "Around 18th century",
      "Around 15th century",
      "Around 13th century"
    ],
    "correctIndex": 3
  },
  {
    "question": "This chocolate flavored milk drink, test-marketed by Nestle in 2002, was an utter failure.",
    "options": [
      "Elmers Favorite",
      "MIlkochoc",
      "Chocolilk",
      "Choglit"
    ],
    "correctIndex": 3
  },
  {
    "question": "In order  to get the  Generation-X car buyers, this cross-over SUV was made by GM from 2001-2005. It was a financial failure.",
    "options": [
      "Pontiac Sunbird",
      "Montana",
      "Pontiac Aztek",
      "FireStar"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Edsel was a terrible dud for Ford Motor Co. How was the name derived?",
    "options": [
      "It was the name of  Henry Fords first grandchild.",
      "It was the maiden name of Henry Fords first wife.",
      "It was the name of one of Henry Fords sons",
      "It was the maiden name of Henry Fords second wife."
    ],
    "correctIndex": 2
  },
  {
    "question": "He was an otherwise great inventor but his car was a total flop. It featured a gas gauge that made a loud  whistle when the gas supply was low. Who was this inventor of the vacuum tube, an invention that led to the development of radio?",
    "options": [
      "Guillermo Marconi",
      "Robert Sarnoff",
      "Thomas A. Edison",
      "Lee Deforest"
    ],
    "correctIndex": 3
  },
  {
    "question": "It  was still the custom in the 1960s for  many people to not eat meat on Fridays. McDonalds could not stand to lose these customers on Friday so this product was developed.",
    "options": [
      "The Big Soy Burger",
      "The  Friday Soy Burger",
      "The Hula Burger",
      "The Meatless Chunk"
    ],
    "correctIndex": 2
  },
  {
    "question": "This movie featured two of the biggest stars of 1986. They were a married couple form 1985-1989. George Harrison also appeared in the movie. Although the movie was beautifully filmed, it was a critical and financial flop.",
    "options": [
      "Town and Country",
      "Waterworld",
      "Shanghai Surprise",
      "Ishtar"
    ],
    "correctIndex": 2
  },
  {
    "question": "He was an important inventor and a much criticized teacher. When he tried to invent a plane, it looked like a flying bee-hive and did not perform well. Who was this man who wanted a law to ban deaf people from marrying?",
    "options": [
      "Don Ameche",
      "Nikolai Tesla",
      "Thomas Alva Edison",
      "Alexander Graham Bell"
    ],
    "correctIndex": 3
  },
  {
    "question": "Funky Fries was a brand name of frozen French Fries developed by the Ore-Ida subsidy of Heinz Foods. Which of the following was not a flavor of Funky Fries?",
    "options": [
      "Chocolate",
      "Strawberry",
      "Cinna-Stiks",
      "Blue"
    ],
    "correctIndex": 1
  },
  {
    "question": "Water World and The Postman were two of the biggest flops in movie history. Who was the star of both of these films?",
    "options": [
      "Sean Penn",
      "Ben Affleck",
      "George Clooney",
      "Kevin Costner"
    ],
    "correctIndex": 3
  },
  {
    "question": "Panasonic developed the VHS type of tape and Sony developed this type.",
    "options": [
      "BetaMax",
      "Aquaos",
      "TriType",
      "True-Tape"
    ],
    "correctIndex": 0
  },
  {
    "question": "Geographically, Mayan cities were mainly situated in which of these locations?",
    "options": [
      "The central parts of South America",
      "The West coast of North America",
      "Central America",
      "Southeast Asia"
    ],
    "correctIndex": 2
  },
  {
    "question": "In Mesoamerican chronology, this period of time is dubbed Classic Era, and marks the peak of the cities of the Maya southern lowlands.",
    "options": [
      "800 BC -100 BC",
      "500 BC - 200 AD",
      "300 AD - 900 AD",
      "50 AD - 600 AD"
    ],
    "correctIndex": 2
  },
  {
    "question": "Classic Maya kings carried this title, meaning supreme and sacred ruler.",
    "options": [
      "Ahu hai",
      "Ahau hai",
      "K\u00e2\u20ac\u2122ul ahau",
      "Kul ahu"
    ],
    "correctIndex": 2
  },
  {
    "question": "Ixtab, wife of Chamer was the Maya goddess of this, regarded as an honor by the Mayan people.",
    "options": [
      "Torture",
      "Birth",
      "Death",
      "Suicide"
    ],
    "correctIndex": 3
  },
  {
    "question": "Maya ritual ceremonies were particularly noted for which one of these reasons?",
    "options": [
      "Impressive dance performances",
      "Cruel sacrifices",
      "Long duration",
      "Colorful body painting"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these is the most recognizable feature of Maya architecture?",
    "options": [
      "Round windows of ceremonial premises",
      "Giant stepped pyramids",
      "Hemisphere monuments",
      "Round temples"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Mayan language is still alive and spoken by about 300,000 people.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Mayas used a special kind of shorthand for easier counting, which consisted of these three main symbols.",
    "options": [
      "Ellipse, dot and bar",
      "Triangle, circle and square",
      "Empty circle, filled circle and dot",
      "Ellipse, circle and triangle"
    ],
    "correctIndex": 0
  },
  {
    "question": "Due to the lack of natural resources, the Mayans were not familiar with this material, which helped in the advancement of many other civilizations.",
    "options": [
      "Wood",
      "Clay",
      "Iron",
      "Copper"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the 4th century, the Mayas were among the first civilizations to use what in their counting system?",
    "options": [
      "Fractions",
      "Substraction",
      "The number zero",
      "Decimal point"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following was NOT a result of the failed attempt to rescue American hostages during the Iran hostage crisis of 1980?",
    "options": [
      "The formation of U.S. Army\u00e2\u20ac\u2122s 160th Special Operations Aviation Regiment",
      "The relocation of the US Embassy in Iran",
      "The creation of  US Special Operations Command (USSOCOM)",
      "The plan for a second rescue mission, Operation Credible Sport"
    ],
    "correctIndex": 1
  },
  {
    "question": "What Turkish assassin shot and wounded Pope John Paul II in 1981?",
    "options": [
      "Eren Gungor",
      "Ibrahim Kas",
      "Mehmet Topuz",
      "Mehmet Ali Agca"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was shot and killed at Manila airport, the Phillippines in 1983?",
    "options": [
      "Malcolm X",
      "Benazir Bhutto",
      "Jimmy Carter",
      "Benigno Aquino, Jr."
    ],
    "correctIndex": 3
  },
  {
    "question": "Iran invaded Iraq on 22 September, 1980.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What countrys civilian airliner was shot down by a Russian fighter jet in 1983?",
    "options": [
      "South Korea",
      "USA",
      "Japan",
      "China"
    ],
    "correctIndex": 0
  },
  {
    "question": "1981 marked the launch of this first spaceworthy NASA shuttle.",
    "options": [
      "Atlantis",
      "Challenger",
      "Columbia",
      "Enterprise"
    ],
    "correctIndex": 2
  },
  {
    "question": "This city was elected to host the 1984 summer Olympics without a vote -- it was the only city to submit a bid.",
    "options": [
      "Moscow",
      "Tehran",
      "Montreal",
      "Los Angeles"
    ],
    "correctIndex": 3
  },
  {
    "question": "1987 brought this black day for the US stock market.",
    "options": [
      "Tuesday",
      "Monday",
      "Friday",
      "Thursday"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1989 this actress, in partnership with the Ameritech Pension fund, purchased the town of Braselton, GA for $20 million.",
    "options": [
      "Kim Baysinger",
      "Goldie Hawn",
      "Kathleen Turner",
      "Sigourney Weaver"
    ],
    "correctIndex": 0
  },
  {
    "question": "1982 saw the murders associated with this over-the-counter drug.",
    "options": [
      "Aspirin",
      "Excedrin",
      "Zantac",
      "Tylenol"
    ],
    "correctIndex": 3
  },
  {
    "question": "Some academics consider World War I and II as two major parts of a single conflict. How many years apart were the two wars?",
    "options": [
      "25",
      "20",
      "23",
      "21"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Battle of Normandy, also known as Operation Overlord, was the largest sea borne invasion of World War II.  Operation Overlord started with D-Day on 6 June 1944. What does the \u00e2\u20ac\u0153D\u00e2\u20ac\u009d in D-Day stand for?",
    "options": [
      "Deliverance",
      "Day",
      "Death",
      "Doom"
    ],
    "correctIndex": 1
  },
  {
    "question": "\u00e2\u20ac\u0153Sitzkrieg\u00e2\u20ac\u009d is a term referring to the first period of WW II that lasted until May 1940. This period is also known as what?",
    "options": [
      "Outer War",
      "Phony War",
      "Weird War",
      "Coined War"
    ],
    "correctIndex": 1
  },
  {
    "question": "United Nations, known initially as United Nations Organization, was founded as a result of the Yalta Conference, which took place on what date?",
    "options": [
      "7 to 9 April 1945",
      "26 to 30 June 1945",
      "2 to 13 May 1945",
      "4 to 11 February 1945"
    ],
    "correctIndex": 3
  },
  {
    "question": "During World War II, apart from concentration and labor camps, there were extermination camps, also known as Death Camps. What was the number of the major death camps, built for the purposes of the Holocaust?",
    "options": [
      "7",
      "10",
      "8",
      "5"
    ],
    "correctIndex": 0
  },
  {
    "question": "After the end of World War II, the European Recovery Plan (Recovery Plan for the reconstruction of Europe) was created. It was established by US Secretary of State George Marshall and is better known as The Marshall Plan.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "China and The United States officially declared war on Japan, how many days after the attack on Pearl Harbor?",
    "options": [
      "One",
      "Seven",
      "Ten",
      "Two"
    ],
    "correctIndex": 0
  },
  {
    "question": "On 11 December 1941, Germany declared war on the United States, hoping that Japan would consecutively support the attack on the Soviet Union.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What were the nicknames of the two atomic bombs dropped over Japan on 6 August 1945 and 9 August 1945?",
    "options": [
      "Bomb 1 and Bomb 2",
      "Mother-in-law and Father-in-law",
      "Sandman and Assassin",
      "Little Boy and Fat Man"
    ],
    "correctIndex": 3
  },
  {
    "question": "During World War II, resistance was formed in every occupied country. What was the name of the resistance movement that the British were preparing, in case the country was occupied?",
    "options": [
      "Auxiliary Units",
      "Complementary Units",
      "Subsidiary Movement",
      "Auxiliary Detachments"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which Central European country fought alongside the Allies on all European and African fronts during WW II and was left on the eastern side of the curtain at the Yalta Conference?",
    "options": [
      "Poland",
      "Hungary",
      "Romania",
      "Greece"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which country was divided into East and West during the Cold War?",
    "options": [
      "Czechoslovakia",
      "Germany",
      "Austria",
      "Poland"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which nation revolted against Soviet-imposed policies in 1956?",
    "options": [
      "Ukraine",
      "Poland",
      "Hungary",
      "Czechoslovakia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which country was invaded by the Soviet Army in 1968?",
    "options": [
      "Afghanistan",
      "Poland",
      "Hungary",
      "Czechoslovakia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which nations catholic bishops issued the famous letter to their German counterparts, in which they forgave and asked for forgiveness?",
    "options": [
      "Hungary",
      "Poland",
      "Romania",
      "Czechoslovakia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of the organization of Central and Eastern European communist states, established as a counterweight against NATO?",
    "options": [
      "Warsaw Pact",
      "Paris Treaties",
      "Council of Mutual Economic Assistance",
      "National Peoples Army"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which country did the Solidarno\u00c5\u203a\u00c4\u2021 (Solidarity) movement start?",
    "options": [
      "East Germany",
      "Czechoslovakia",
      "Hungary",
      "Poland"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which freedom movement leader was also a writer and dramatist?",
    "options": [
      "Vaclav Havel",
      "Mikhail Gorbatchev",
      "Lech Wa\u00c5\u201a\u00c4\u2122sa",
      "Erich Honnecker"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which Pope was credited with igniting the freedom movement in Poland and eventually in the whole Eastern European region?",
    "options": [
      "John Paul I",
      "Benedict XVI",
      "John Paul II",
      "John XXIII"
    ],
    "correctIndex": 2
  },
  {
    "question": "When did the Berlin Wall fall, ending symbolically the Cold War?",
    "options": [
      "1991",
      "1992",
      "1990",
      "1989"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these dictators was the last to die?",
    "options": [
      "Francisco Franco",
      "Joseph Stalin",
      "Benito Mussolini",
      "Adolph Hitler"
    ],
    "correctIndex": 0
  },
  {
    "question": "On December 7, 1942 the Japanese attacked Pearl Harbor.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What prominent figure in Nazi Germany was Adolf Hitlers deputy in the Nazi Party?",
    "options": [
      "Heinrich Himmler",
      "Rudolph Hess",
      "None of these",
      "Joseph Goebbels"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the only tank battle fought during the so called Winter War (1939-1940)?",
    "options": [
      "Battle of Honkaniemi",
      "Battle of Narvik",
      "Battle of Dunkirk",
      "Battle of Kollaa"
    ],
    "correctIndex": 0
  },
  {
    "question": "What effective submachine gun was also known as the Schmeisser?",
    "options": [
      "MG42",
      "MP40",
      "MP44",
      "MG32"
    ],
    "correctIndex": 1
  },
  {
    "question": "Che Guevara was a Marxist revolutionary, who took part in the Cuban Revolution under the command of Fidel Castro. Where did Che Guevara die?",
    "options": [
      "Russia",
      "Argentina",
      "Cuba",
      "Bolivia"
    ],
    "correctIndex": 3
  },
  {
    "question": "The French Revolution began in 1789 with the storming of this building and ended in 1799 after succeeding to overthrow the absolute monarchy in France.",
    "options": [
      "The Tuileries Palace",
      "The Conciergerie",
      "The Bastille prison",
      "The Sorbonne"
    ],
    "correctIndex": 2
  },
  {
    "question": "One of the events that led to the American Revolution was the Boston Tea Party. On 16 December 1773 a group of Boston residents (the group was called Sons of Liberty) destroyed the cargo of three British ships. Which one of these men didnt take part in the event?",
    "options": [
      "William Molineux",
      "Samuel Adams",
      "Samuel Graves",
      "Leonard Pitt"
    ],
    "correctIndex": 2
  },
  {
    "question": "The second stage of the Russian Revolution of 1917 was the October Revolution, the first communist revolution of the 20th century. This revolutionary led the assault on the Winter Palace.",
    "options": [
      "Vladimir Antonov-Ovseenko",
      "Vladimir Ilyich Ulyanov - Lenin",
      "Iosif Vissarionovich Dzughashvili",
      "Alexander Fedorovich Kerensky"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Great Cultural Revolution was a revolutionary uprising of students and workers in China, led by Mao Zedong. It officially ended in 1969, but there are statements that this period continued up until the arrest of the Gang Of Four. One of the founding members of the gang was Maos ____",
    "options": [
      "brother",
      "wife",
      "son",
      "mother"
    ],
    "correctIndex": 1
  },
  {
    "question": "Rosa Luxemburg and Karl Liebknecht took part in the German Revolution of 1919.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Romanian Revolution of 1989 was a series of violent riots and protests. It aimed at overthrowing of the Communist regime of Nicolae Ceausescu. What was the name of Ceausescus wife, later executed together with her husband?",
    "options": [
      "Elena",
      "Zoia",
      "Ana",
      "Lea"
    ],
    "correctIndex": 0
  },
  {
    "question": "This rebellion broke in 1857 in _____, fighting against the British colonial control over the country. It is sometimes referred to as the Sepoy Mutiny or the Sepoy Rebellion.",
    "options": [
      "Niger",
      "Botswana",
      "India",
      "Australia"
    ],
    "correctIndex": 2
  },
  {
    "question": "On 23 July 1961 the Sandinista National Liberation Front was organized in Nicaragua. This marked the beginning of the fight against the dictatorship of this family and led to the Nicaraguan Revolution.",
    "options": [
      "Somoza",
      "Amador",
      "Ortega",
      "Saavedra"
    ],
    "correctIndex": 0
  },
  {
    "question": "In the beginning of the 19th century, Simon Bolivar fought for the independence of countries like Venezuela, Colombia, Ecuador, Peru, Panama and Bolivia. On 24 July 1983 this man founded the Movimiento Bolivariano Revolucionario 200 in Venezuela and 15 years later, became president.",
    "options": [
      "Pedro Carmona",
      "Hugo Chavez",
      "Francisco de Miranda",
      "Carlos Andres Perez"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first Russian tsar of the Romanov dynasty?",
    "options": [
      "Nicholas",
      "Alexander",
      "Michael",
      "Serge"
    ],
    "correctIndex": 2
  },
  {
    "question": "What city was the Russian capital before Tsar Peter the Great founded St. Petersburg?",
    "options": [
      "Odessa",
      "Moscow",
      "Kiev",
      "Novgorad"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which ruler was crowned the first Tsar of All the Russias?",
    "options": [
      "Boris Gudunov",
      "Peter the Great",
      "Ivan the Great",
      "Ivan the Terrible"
    ],
    "correctIndex": 3
  },
  {
    "question": "By the time Nicholas II was crowned tsar in 1896, the Russian Empire was the largest country in the world.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was Empress of Russia from 1741 to 1762?",
    "options": [
      "Alexandra",
      "Sophia",
      "Elizabeth",
      "Anne"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which Russian Empress brought Rasputin into the center of the Imperial court?",
    "options": [
      "Alexandra",
      "Maria",
      "Catherine",
      "Elizabeth"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was Tsarskoye Selo?",
    "options": [
      "The Tsarist legislature",
      "The residence of the imperial family south of St. Petersburg",
      "The site of a famous Russian battle",
      "The true last name of the members of the Romanov dynasty"
    ],
    "correctIndex": 1
  },
  {
    "question": "What American product from the 50s was advertised with roadside signs reading slogans such as:",
    "options": [
      "beauty show?",
      "Old Spice",
      "Colgate Shave Gel",
      "Aqua Velva",
      "Burma Shave"
    ],
    "correctIndex": 4
  },
  {
    "question": "The average income in the United States in 1952 was $3,515.00. What was the average price of a house at that time?",
    "options": [
      "$2,000.00",
      "$16,800.00",
      "$50,000.00",
      "$10,000.00"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year was the first microwave oven manufactured by Tappan and offered in the USA for $1300.00?",
    "options": [
      "1957",
      "1955",
      "1954",
      "1956"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1956 Bette Nesmith Graham invented Mistake Out which later became known by what name?",
    "options": [
      "Liquid Paper",
      "Post-it Notes",
      "Erasermate Pens",
      "White Out"
    ],
    "correctIndex": 0
  },
  {
    "question": "The song American Pie by Don McLean concerns a plane crash which took place on February 3, 1959.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "A musical version of Carrie, the Stephen King story, was a huge flop on Broadway.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these was NOT a Broadway flop?",
    "options": [
      "Teaneck Tanzi: The Venus Fly Trap (1983)",
      "Frankenstein (1981)",
      "The Medusa (1981)",
      "Moose Murders( 1983)"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1991 Pfizer came out with the medicine Sildenafil, designed to stop angina pectoris. It was a flop as it had little effect on angina. What was good about this medicine?",
    "options": [
      "It lead to the development of Oxycontin.",
      "It was an inexpensive medicine that could lower LDL cholesterol.",
      "It was an inexpensive medicine that could lower HDL cholesterol.",
      "It lead to the development of Viagra."
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1993 Chevy Chase got his own talk show. How many episodes of The Chevy Chase Show were aired?",
    "options": [
      "one",
      "four",
      "three",
      "two"
    ],
    "correctIndex": 0
  },
  {
    "question": "This great 1949 movie was remade into a 2006 movie flop starring Sean Penn,  James Gandolfini, Kate Winslet, Jude Law, and Anthony Hopkins.",
    "options": [
      "The Interpreter",
      "Crossing Over",
      "21 Grams",
      "All the Kings Men"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these was NOT an invention idea on Seinfeld?",
    "options": [
      "A shaker that had both ketchup and mustard",
      "A Pakistani restaurant in Manhattan",
      "A rubber oil container to help fight oil spills",
      "An alarm clock that told you the sports scores when it went off."
    ],
    "correctIndex": 3
  },
  {
    "question": "How long was the Hundred Years War?",
    "options": [
      "116 years",
      "80 years",
      "101 years",
      "100 years"
    ],
    "correctIndex": 0
  },
  {
    "question": "You probably know the term Blitzkrieg (lightning war), which refers to a quick invasion. But what does Sitzkrieg mean?",
    "options": [
      "Sitting War",
      "Cold War",
      "Slowly War",
      "Long War"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which ancient countries battled each other during the Punic Wars?",
    "options": [
      "Athens and Sparta",
      "Macedonia and Egypt",
      "Greece and Persia",
      "Rome and Carthage"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which war was fought by El Salvador and Honduras in 1969?",
    "options": [
      "Basketball War",
      "Football War",
      "Rugby War",
      "Baseball War"
    ],
    "correctIndex": 1
  },
  {
    "question": "There have been many wars in the Balkans. Which one was known as the First Balkan War?",
    "options": [
      "The war between the Balkan League (Serbia, Montenegro, Greece and Bulgaria) and the Ottoman Empire in 1912-13",
      "The war in Bosnia and Herzegovina after the breakup of Yugoslavia in 1992",
      "The Greek War of Independence in 1821",
      "World War I"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which wars were fought in XV century England?",
    "options": [
      "Wars of the Tulips",
      "Wars of the Roses",
      "Wars of the Sunflowers",
      "Wars of the Lilies"
    ],
    "correctIndex": 1
  },
  {
    "question": "Against which country were the two Gulf Wars fought?",
    "options": [
      "Israel",
      "Iran",
      "Vietnam",
      "Iraq"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Boer Wars were fought by the British Empire against which colonists?",
    "options": [
      "French in Louisiana",
      "Spanish in the Caribbean",
      "Portuguese in India",
      "Dutch in South Africa"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which wars are known as Reconquista?",
    "options": [
      "The conquering of todays Latin America by Spain and Portugal",
      "The war between US and Mexico in the beginning of the XIX century",
      "The colonization of the Indian Peninsula by Portuguese, Dutch and later British colonists",
      "The expansion of Christian kingdoms at the expense of Muslim states on the Iberian Peninsula"
    ],
    "correctIndex": 3
  },
  {
    "question": "Against which of the following were the medieval Crusades fought?",
    "options": [
      "Against Jewish communities across Europe only",
      "Against Moors on the Iberian Peninsula only",
      "Against Turks in the Holy Land only",
      "Against anybody the Pope would declare an enemy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Were was the First Turkish-Portuguese War fought in 1509?",
    "options": [
      "In the Indian Ocean",
      "In Portugal",
      "In Turkey",
      "On Cyprus and other islands of the Mediterranean"
    ],
    "correctIndex": 0
  },
  {
    "question": "After the 80 Years War (XVI-XVII century) a new colonial power was born in Europe. Which one?",
    "options": [
      "Spain",
      "Portugal",
      "Germany",
      "The Netherlands"
    ],
    "correctIndex": 3
  },
  {
    "question": "This singer, who sang the theme song for Rawhide, died on 6th February 2007 at the age of 93.",
    "options": [
      "Frankie Vallee",
      "Lorne Greene",
      "Frankie Laine",
      "Frankie Avalon"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the author of Slaughterhouse-Five who died April 11th 2007 at the age of 84.",
    "options": [
      "Mickey Rourke",
      "Kurt Vonnegut",
      "Art Buchwald",
      "Kurt Waldheim"
    ],
    "correctIndex": 1
  },
  {
    "question": "She was Miss Moneypenny in 14 of the James Bond films.",
    "options": [
      "Lon Andrews",
      "Catherine Snab",
      "Sydney Andrews",
      "Lois Maxwell"
    ],
    "correctIndex": 3
  },
  {
    "question": "She was Esmeralda on Bewitched.",
    "options": [
      "Alice Ghostley",
      "Angela Riverton",
      "Cathy Bates",
      "Angela Channing"
    ],
    "correctIndex": 0
  },
  {
    "question": "He was 69 at the time of his death in April 2007. He sang Monster Mash. You remember, it was a graveyard smash.",
    "options": [
      "Bobby Pickens",
      "Bobby Picks",
      "Boris Pickett",
      "Boris Pickens"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the patron of Athens during its Golden Age?",
    "options": [
      "Plato",
      "Pericles",
      "Alexander the Great",
      "Socrates"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Golden age of Athens occurred between which two wars?",
    "options": [
      "Punic and Peloponnesian",
      "Peloponnesian and Spartan",
      "Spartan and Punic",
      "Persian and Peloponnesian"
    ],
    "correctIndex": 3
  },
  {
    "question": "Socrates started the first true school of philosophy.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of the famous market place in Athens?",
    "options": [
      "Acropolis",
      "Agora",
      "Academia",
      "Lyceum"
    ],
    "correctIndex": 1
  },
  {
    "question": "During which war did the Battle of Marathon take place?",
    "options": [
      "Peloponnesian",
      "Parthian",
      "Punic",
      "Persian"
    ],
    "correctIndex": 3
  },
  {
    "question": "What kind of government did Athens have during the Golden Age?",
    "options": [
      "Direct Democracy",
      "Aristocracy",
      "Absolute Monarchy",
      "Oligarchy"
    ],
    "correctIndex": 0
  },
  {
    "question": "Hippocrates was known as the father of history.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following was NOT an order of Greek column?",
    "options": [
      "Corinthian",
      "Ostrakon",
      "Ionic",
      "Doric"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which playwright of Ancient Greece is generally regarded as the father of drama?",
    "options": [
      "Socrates",
      "Sophocles",
      "Aeschylus",
      "Aristophanes"
    ],
    "correctIndex": 2
  },
  {
    "question": "This was a 1961 United States-planned and funded landing, which aimed at overthrowing the government of Fidel Castro, marked the climax of anti-Cuban US actions during  the Cold War. What was the name of this invasion?",
    "options": [
      "The Bay of Cows invasion",
      "The Bay of Cattle invasion",
      "The Bay of  Dogs invasion",
      "The Bay of Pigs invasion"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the Soviet General Secretary during the Cuban Missile Crisis in October 1962?",
    "options": [
      "Joseph Stalin",
      "Nikita Khrushchev",
      "Nikolai Bulganin",
      "Leonid Brezhnev"
    ],
    "correctIndex": 1
  },
  {
    "question": "During the period of the Cold War, there was a conflict between the Democratic Republic of Vietnam and Republic of Vietnam, known as The Vietnam War (1957\u00e2\u20ac\u201c1975).",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Soviet war in Afghanistan which started in 1979, continued for how many years?",
    "options": [
      "2 years",
      "7 years",
      "9 years",
      "5 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these countries was not part of the Warsaw Pact of 1955 ?",
    "options": [
      "Romania",
      "Czechoslovakia",
      "Poland",
      "Yugoslavia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of the political liberalization in Czechoslovakia, which started on January 5 and lasted until August 20, 1968?",
    "options": [
      "Prague Autumn",
      "Prague Summer",
      "Prague Winter",
      "Prague Spring"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Autumn of Nations is the series of events in Central and Eastern Europe in the autumn of 1989, when the communist regime in satellite states of the Soviet Union, collapsed within a  few months, marking the end of the Cold War.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of these countries was not one of the Allies during WW II?",
    "options": [
      "France",
      "Poland",
      "United Kingdom",
      "Italy"
    ],
    "correctIndex": 3
  },
  {
    "question": "WW II broke out in 1939 with the German invasion of Poland. What month did this invasion take place?",
    "options": [
      "March",
      "September",
      "December",
      "February"
    ],
    "correctIndex": 1
  },
  {
    "question": "The North African Campaign, also known as The Desert War, began in 1940. It included campaigns fought in several African countries. Which of the following was not one of the locations of the North African Campaign?",
    "options": [
      "Algeria",
      "South Africa",
      "Egypt",
      "Libya"
    ],
    "correctIndex": 1
  },
  {
    "question": "Operation Barbarossa, which began on June 22, 1941, was the code name of the German invasion of which country?",
    "options": [
      "Denmark",
      "the Netherlands",
      "Luxembourg",
      "the Soviet Union"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the German word Blitzkrieg mean?",
    "options": [
      "holy war",
      "lightning war",
      "patriotic war",
      "speed war"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did the United States enter World War II?",
    "options": [
      "1942",
      "1940",
      "1943",
      "1941"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1945, Churchill, Stalin and Roosevelt made arrangements for post-war Europe. Where did the conference take place?",
    "options": [
      "Versailles",
      "Hawaii",
      "Yalta",
      "Warsaw"
    ],
    "correctIndex": 2
  },
  {
    "question": "On 6 August 1945 the B-29 Enolo Gay, piloted by Colonel Paul Tibet, dropped an atomic bomb on Hiroshima, effectively destroying it. What was that bomb called?",
    "options": [
      "August Storm",
      "Flying Tiger",
      "Little Boy",
      "Torch"
    ],
    "correctIndex": 2
  },
  {
    "question": "What term is generally used to describe the genocide of approximately six million European Jews during World War II?",
    "options": [
      "Einsatzgruppen",
      "the Holocaust",
      "the Enigma",
      "Death-camp"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to statistics, approximately how many people lost their lives in World War II?",
    "options": [
      "52 million",
      "42 million",
      "72 million",
      "62 million"
    ],
    "correctIndex": 3
  },
  {
    "question": "One of the months of the year is named after this man.",
    "options": [
      "Neither",
      "Both",
      "Alexander the Great",
      "Julius Caesar"
    ],
    "correctIndex": 3
  },
  {
    "question": "This man became the leader of his country at the age of 20.",
    "options": [
      "Julius Caesar",
      "Neither",
      "Alexander the Great",
      "Both"
    ],
    "correctIndex": 2
  },
  {
    "question": "This man is famous for the quote, I came, I saw, I conquered.",
    "options": [
      "Neither",
      "Julius Caesar",
      "Alexander the Great",
      "Both"
    ],
    "correctIndex": 1
  },
  {
    "question": "This man conquered modern day Afghanistan and modern day France.",
    "options": [
      "Julius Caesar",
      "Both",
      "Alexander the Great",
      "Neither"
    ],
    "correctIndex": 3
  },
  {
    "question": "This man won battles in Greece, Africa, and the Middle East.",
    "options": [
      "Alexander the Great",
      "Neither",
      "Both",
      "Julius Caesar"
    ],
    "correctIndex": 2
  },
  {
    "question": "This man invaded modern day Great Britain.",
    "options": [
      "Julius Caesar",
      "Alexander the Great",
      "Neither",
      "Both"
    ],
    "correctIndex": 0
  },
  {
    "question": "This mans name is linked to a common medical procedure.",
    "options": [
      "Neither",
      "Julius Caesar",
      "Both",
      "Alexander the Great"
    ],
    "correctIndex": 1
  },
  {
    "question": "This mans biological son became famous after his death.",
    "options": [
      "Both",
      "Julius Caesar",
      "Neither",
      "Alexander the Great"
    ],
    "correctIndex": 2
  },
  {
    "question": "This man visited the other mans tomb.",
    "options": [
      "Alexander the Great",
      "Neither",
      "Both",
      "Julius Caesar"
    ],
    "correctIndex": 3
  },
  {
    "question": "This man was portrayed by British actor Rex Harrison in the1963 movie Cleopatra.",
    "options": [
      "Alexander the Great",
      "Both",
      "Julius Caesar",
      "Neither"
    ],
    "correctIndex": 2
  },
  {
    "question": "What warrior king and his 300 Spartans held back the Persian army for two days in one of historys most heroic last stands?",
    "options": [
      "Odysseus",
      "Achilles",
      "Leonidas",
      "Xerxes"
    ],
    "correctIndex": 2
  },
  {
    "question": "What Chinese warrior and strategist wrote The Art of War?",
    "options": [
      "Sun Bin",
      "Sun Tzu",
      "Mao Zedong",
      "Genghis Khan"
    ],
    "correctIndex": 1
  },
  {
    "question": "It was in a dream before the Battle of Milvian Bridge that a vision of God appeared to this Roman warrior. The vision was followed by the words In this sign shall thou conquer.  What leader, after having a Christian monograph painted on the shields of his army, defeated Maxentius and reunited the Eastern and Western Roman Empire?",
    "options": [
      "Constantine the Great",
      "Marcus Aurelius",
      "Alexander the Great",
      "Emperor Licinius"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Soviet General and Hero of the Soviet Union led the Red Army during the Battle of Stalingrad and the Battle of Kursk?",
    "options": [
      "Vasliy Blyukher",
      "Field Marshall Von Manstein",
      "Walther Model",
      "Marshal Georgy Zhukov"
    ],
    "correctIndex": 3
  },
  {
    "question": "One of historys most daring and able naval commanders, this admiral signaled his fleet at the Battle of Trafalgar by a flag that read England expects that every man will do his duty . What naval commander gave the supreme sacrifice at the Battle of Trafalgar while defeating the navies of the French and Spanish?",
    "options": [
      "Horatio Nelson",
      "Arthur Wellesley, Duke of Wellington",
      "John Paul Jones",
      "James Wolfe"
    ],
    "correctIndex": 0
  },
  {
    "question": "He was the bravest and strongest Greek warrior in the Trojan War. He died when Apollo helped guide Pariss arrow to this warrior only vulnerable spot?",
    "options": [
      "Patroclus",
      "Agamemnon",
      "Hector",
      "Achilles"
    ],
    "correctIndex": 3
  },
  {
    "question": "Stormd at with shot and shell,",
    "options": [
      "Lord Harlech",
      "Major Richard Ormsby Gore",
      "Captain Jenyns",
      "Lord Cardigan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Perhaps the greatest  warrior-king in Roman history, what warrior summed up his victory in these three words, Veni, Vidi, Vici. ?",
    "options": [
      "Julius Caesar",
      "Mark Anthony",
      "Marcus Aurelius",
      "Octavian"
    ],
    "correctIndex": 0
  },
  {
    "question": "The US, Britain and Germany were the main belligerents at Normandy during WWII, but three other nations had troops there who fought in their own organized national units. Which of the following was NOT one of those three nations?",
    "options": [
      "Canada",
      "Poland",
      "Japan",
      "France"
    ],
    "correctIndex": 2
  },
  {
    "question": "Mulberry was the code name for two artificial harbors built in sections and towed across the English Channel to provide a place for supplies to be landed at Normandy for the invading troops. They were very useful at first but their usefulness was greatly reduced after about two weeks when the following occurred.",
    "options": [
      "The Allies captured the port at Brest and no longer needed the Mulberries.",
      "A violent storm heavily damaged the Mulberries.",
      "The wear and tear of constant use made the Mulberries deteriorate greatly.",
      "The German air force successfully staged a massive bombing raid on the Mulberries."
    ],
    "correctIndex": 1
  },
  {
    "question": "To aid the Normandy invasion Stalin, the Soviet leader, agreed to do the following.",
    "options": [
      "Have his air force carry out numerous air attacks on targets in Germany during the Normandy invasion",
      "Send Soviet troops to Britain to act as a reserve if needed",
      "Launch an attack on the eastern front to keep the Germans from moving troops from the East to the western front",
      "Release all prisoners from East European nations who wished to join the Allies at Normandy"
    ],
    "correctIndex": 2
  },
  {
    "question": "During WWII, American troops assaulted two beaches at Normandy. Three other beaches with code names Gold, Sword and Juno were assaulted by troops who mostly came from these two nations.",
    "options": [
      "France and Poland",
      "Britain and France",
      "Britain and Canada",
      "Britain and Australia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which American Indian tribe was predominantly located in North Georgia?",
    "options": [
      "Iroquois",
      "Creek",
      "Cherokee",
      "Seminal"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which U.S. state saw the bloodiest fighting of the Civil War?",
    "options": [
      "Georgia",
      "Tennessee",
      "Virginia",
      "Maryland"
    ],
    "correctIndex": 2
  },
  {
    "question": "From 1847 to 1923, there were eight U. S. Presidents hailing from this state.",
    "options": [
      "Virginia",
      "Ohio",
      "New York",
      "Maryland"
    ],
    "correctIndex": 1
  },
  {
    "question": "Benjamin Franklin was almost killed by electrocution.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which German-American physicist is credited for advising U.S. President Franklin Roosevelt to start the development of an atomic bomb?",
    "options": [
      "Albert Einstein",
      "Benjamin Franklin",
      "Osborne Reynolds",
      "William Gilbert"
    ],
    "correctIndex": 0
  },
  {
    "question": "The American Flag was raised on Mount Surabachi on Iwo Jima in 1944.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What U.S. President gave a speech beginning with the phrase Four score and seven years ago?",
    "options": [
      "Ronald Reagan",
      "Theodore Roosevelt",
      "George Washington",
      "Abraham Lincoln"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is one of the reasons why the United States entered World War I?",
    "options": [
      "Mexico attacked the United States.",
      "France lost the war.",
      "Germany tried to persuade Mexico to enter the war.",
      "Germany asked the United States."
    ],
    "correctIndex": 2
  },
  {
    "question": "Under whose administration did the United States send large numbers of troops to Vietnam?",
    "options": [
      "John Kennedy",
      "Richard Nixon",
      "Gerald Ford",
      "Lyndon Johnson"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 221 BC Zheng of the Qin Dynasty defeated the last independent Chinese state, the State of Qi, and thus unified China. The same year he named himself Shi Huangdi, which means this.",
    "options": [
      "The Conqueror",
      "Mightiest One",
      "First Emperor",
      "The Unifier"
    ],
    "correctIndex": 2
  },
  {
    "question": "The name of the first capital of the Empire, near which the tomb of the first Chinese emperor- Qin Shi Huang had been built.",
    "options": [
      "Xianyang",
      "Changan",
      "Sui",
      "Shaanxi"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Qin Dynasty was the first dynasty to embrace Confucianism.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Silk Road  dynasty succeeded the Qin Dynasty.",
    "options": [
      "Zhou Dynasty",
      "Ming Dynasty",
      "Sui Dynasty",
      "Han Dynasty"
    ],
    "correctIndex": 3
  },
  {
    "question": "On 18 June 618, Gaozu took the throne, established the Tang Dynasty and opened a new age of prosperity. During the Tang Dynasty, this religion became predominant in China.",
    "options": [
      "Christianity",
      "Hinduism",
      "Islam",
      "Buddhism"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Song Dynasty (960-1279) ruled over all of the territories of China.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Yuan Dynasty was the first foreign dynasty to rule over all of China. It was officially established by this Mongolian ruler in 1271 and ruled over China until 1368.",
    "options": [
      "Kublai Khan",
      "Batu Khan",
      "Genghis Khan",
      "Ogedei Khan"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Ming Dynasty established the Forbidden City in Beijing. Do you know what ming means in Chinese?",
    "options": [
      "bright",
      "cruel",
      "conqueror",
      "builder"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Forbidden City, lying at the center of Beijing, was the imperial palace during the Ming and Qing Dynasties. Yellow was the symbol of the royal family so the roofs, the decorations and even the bricks on the ground in the Forbidden city are yellow. But there is one exception- the roof of the royal library. What color is it?",
    "options": [
      "blue",
      "black",
      "white",
      "red"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Qing Dynasty was the last  imperial dynasty of China. As a result of the 1911 revolution, a new Republic of China was established  and this is what happened to the last Chinese emperor, Hsuan Tung.",
    "options": [
      "He was exiled",
      "He abdicated",
      "He was assassinated",
      "He fled to England"
    ],
    "correctIndex": 1
  },
  {
    "question": "Ulysses S. Grants wife, Julia Dent Grant, had a cousin who was a CSA General. What was his name?",
    "options": [
      "Braxton Bragg",
      "James Longstreet",
      "Nathan Bedford Forrest",
      "P.G.T. Beauregard"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who gave the sermon at President Lincolns funeral?",
    "options": [
      "Rev. J.C. Harrison",
      "Bishop Cavenaugh",
      "Dr. Phineas D. Gurley",
      "Dr. John W. Cunningham"
    ],
    "correctIndex": 2
  },
  {
    "question": "The commander of the Unions 24th Massachusetts Colored Infantry was Colonel Robert Gould Shaw.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "How long did the Battle of Gettysburg last?",
    "options": [
      "3 days",
      "2 days",
      "7 days",
      "4 days"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many civilians were killed in the Battle of Gettysburg?",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "correctIndex": 1
  },
  {
    "question": "What state has the most soldiers buried at the Gettysburg National Cemetery?",
    "options": [
      "Michigan",
      "Pennsylvania",
      "New York",
      "Massachusetts"
    ],
    "correctIndex": 2
  },
  {
    "question": "Steve Bochco had many successes on TV. However, this 1990 ABC police drama, that also featured the cast breaking out in song, was a failure.",
    "options": [
      "Cop Rock",
      "City Cop",
      "Cop Song",
      "A Policemans Day"
    ],
    "correctIndex": 0
  },
  {
    "question": "This 2003 movie won seven Razzies. It had an all-star cast that included Al Pacino, Lainie Kazan, Christopher Walken and a very hot couple. What is the name of this flop directed and written by Martin Brest?",
    "options": [
      "Gigli",
      "Shanghai Express",
      "Town and Country",
      "Shanghai Surprise"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1985 New Coke was introduced. For many reasons it  was a great flop and the company went back to regular coke. How was New Coke different from regular coke?",
    "options": [
      "It was sweeter.",
      "It had more lime and less lemon.",
      "It had more caffeine.",
      "It was enriched with vitamins A,C, and D."
    ],
    "correctIndex": 0
  },
  {
    "question": "Gary Marshall has had many big hits on TV and in the movies. However, in 1972 he directed and produced this big flop.",
    "options": [
      "Convoy",
      "Me and the Chimp",
      "Hey Landlord",
      "The Psycho Private"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Broadway show with a book and lyrics by Ira Levin opened in 1965 after 11 previews and much rewriting. It starred Lesley Ann warren, Elliot Gould, Beth Howland, and Charles Durning. What was the name of this Victorian melodrama?",
    "options": [
      "Sweeny Todd",
      "Day In Day Out",
      "The Adventures of Pluto Nash",
      "Drat! The Cat!"
    ],
    "correctIndex": 3
  },
  {
    "question": "It was a 1995 movie about a female pirate, played by Geena Davis, who races other pirates to find hidden  gold. It starred Frank Langella, Mathew Modine, Maury Chaykin and Stan Shaw.",
    "options": [
      "Skull Island",
      "Cutthroat Island",
      "Pirate Survivors",
      "Pirate Wars"
    ],
    "correctIndex": 1
  },
  {
    "question": "It could not miss. It was directed by the great Elaine May. It featured Charles Grodin, Isabelle Adjani, Tess Harper, Carol Kane, Jack Weston, and, oh yes, Dustin Hoffman and Warren Beatty. It was a total flop. What was the name of this comedy?",
    "options": [
      "Shanghai Surprise",
      "Big Town",
      "Playing the Hilton",
      "Ishtar"
    ],
    "correctIndex": 3
  },
  {
    "question": "This movie was begun in 1998 but released in 2001. Its big all-star cast included Warren Beatty,  Diane Keaton, Charlton Heston, Gary Shandling, Andie MacDowell, Goldie Hawn and Jenna Elfman. It was  designed to be a simple romantic comedy about making lifes big  decisions. It is now considered to be one of the biggest movie flops.",
    "options": [
      "The Postman",
      "Ishtar",
      "Heavens gate",
      "Town and Country"
    ],
    "correctIndex": 3
  },
  {
    "question": "Love Boat was a big TV hit, so a copy of it would be a big hit, too, right? This 1979 copy of Love Boat was to be based on the adventures, lives and loves of passengers on a train. What was the name of this nine-episode flop?",
    "options": [
      "The Century Express",
      "Super Train",
      "The Big Train",
      "Cross Country Express"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1983, Apple sold its famous Lisa computer. It featured the first Graphic User Interface(GUI), a processor that allowed multitasking, the first mouse, a 5 MHz processor (very fast for the time), and a  large memory. Which of these is not one of the reasons for which it was not a success?",
    "options": [
      "NASA refused to buy it.",
      "Steve Jobs was forced off the project.",
      "It was too big and too bulky",
      "It cost  over $9,900."
    ],
    "correctIndex": 0
  },
  {
    "question": "This TV game show is regarded as one of the biggest flops in the history of television. It lasted for one episode. One of its titles was The Jackie Gleason Show. It featured Jackie Gleason, Art Carney, Arthur Treacher, Bobby Darin, Pat Carrol and Mickey Rooney. What was the premise of the show?",
    "options": [
      "Three guest stars tried to figure out what a series of paintings was about .",
      "Four guest stars tried to decipher the name of a famous person from a series of  doodles.",
      "Three guest stars tried to determine a contestants job from a series of photos.",
      "Four guests stuck their heads into holes in a large piece of cardboard. The guest stars tried  to guess what the picture was about."
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the most contested (captured, recaptured) town in the U.S. Civil War?",
    "options": [
      "Bethesda",
      "Richmond",
      "Winchester",
      "Hampton Roads"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where did General Shermans March to the Sea begin and end?",
    "options": [
      "Atlanta to Savannah",
      "Richmond to Savannah",
      "Richmond to New Orleans",
      "Charlotte to Savannah"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the first state to secede from the Union?",
    "options": [
      "Virginia",
      "South Carolina",
      "Georgia",
      "North Carolina"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was U.S. Grant doing at the outbreak of the Civil War?",
    "options": [
      "None of these",
      "Working in the family business",
      "Had a command out West",
      "Going to West Point"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the last state to secede from the Union?",
    "options": [
      "Tennessee",
      "Louisiana",
      "Arkansas",
      "Texas"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many Union soldiers were killed during the bombardment of Fort Sumter in Charleston Harbor?",
    "options": [
      "1",
      "4",
      "2",
      "None"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1962 President Kennedy of the US and Chairman Khrushchev of the Soviet Union were able to peacefully end a confrontation which might have led to a nuclear war. Where was this crisis centered?",
    "options": [
      "Israel",
      "Korea",
      "Berlin",
      "Cuba"
    ],
    "correctIndex": 3
  },
  {
    "question": "Early in his administration this US President survived being shot by an assassin and even showed a sense of humor when he told his wife, Honey, I forgot to duck.",
    "options": [
      "Nixon",
      "Carter",
      "Ford",
      "Reagan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Children, and many adults too, were happy when the first Disneyland opened in California in this year.",
    "options": [
      "1949",
      "1955",
      "1967",
      "1962"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1954 Roger Bannister became the first person in history to do which of the following?",
    "options": [
      "win Noble Prizes in three different categories",
      "orbit the earth",
      "None of these",
      "run a mile in under four minutes"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the 1960s, Humans finally achieved an age-old dream of landing on the Moon. Who was the first person to set foot on the Moon and in what year did this happen?",
    "options": [
      "Michael Collins, 1968",
      "Neil Armstrong, 1969",
      "Buzz Aldrin, 1966",
      "Buzz Aldrin, 1967"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Zodiak killer is a suspect in the murders of Lindsay Cutshall and Jason S. Allen who were murdered in their sleeping bags on Fish Head Beach in Jenner, California in August 2004?",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "When did the Allies capture Tobruk during World War II?",
    "options": [
      "1943",
      "1939",
      "1941",
      "1942"
    ],
    "correctIndex": 3
  },
  {
    "question": "During WWII, upon leaving the Philippines, American general Douglass Mcarthur said I will never return.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What nickname did Erwin Rommel get during World War II?",
    "options": [
      "Desert Fox",
      "Stealth",
      "The Mole",
      "The African Liberator"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what month in 1945 did Japan surrender to the US?",
    "options": [
      "October",
      "September",
      "January",
      "December"
    ],
    "correctIndex": 1
  },
  {
    "question": "What day in 1944 is referred to as D-Day?",
    "options": [
      "June 6",
      "August 2",
      "June 10",
      "May 9"
    ],
    "correctIndex": 0
  },
  {
    "question": "Did Warsaw surrender to German troops in 1940?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "Was the Soviet Union part of the Axis Powers during World War II?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "During World War II, Japan was one of the Axis powers.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where did the D-Day invasion occur?",
    "options": [
      "Normandy",
      "Cherbourg",
      "Minsk",
      "Warsaw"
    ],
    "correctIndex": 0
  },
  {
    "question": "When did the Germans invade Yugoslavia and Greece during World War II?",
    "options": [
      "1939",
      "1943",
      "1941",
      "1999"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what month of 1941 did Nazi Germanys invasion of the Soviet Union start?",
    "options": [
      "August",
      "March",
      "July",
      "June"
    ],
    "correctIndex": 3
  },
  {
    "question": "The grave of Jesse James was exhumed in 1995 and it was found out that the person buried there was actually Jesse James.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Soviet cosmonaut Yuri Gagarin, who in 1961 became the first human to enter outer space, died in 1968. What was the cause of his death?",
    "options": [
      "He developed AIDS and was not treated.",
      "He was killed in an car accident.",
      "He was killed in a plane crash.",
      "A plane he was piloting was shot down by Chechen rebels."
    ],
    "correctIndex": 2
  },
  {
    "question": "American astronaut John Glenn piloted the first American manned orbital mission, aboard Friendship 7 on February 20, 1962.  What actor performed a song, dedicated to him?",
    "options": [
      "Charleton Heston",
      "Walter Brennan",
      "Nat King Cole",
      "Perry Como"
    ],
    "correctIndex": 1
  },
  {
    "question": "On October 24, 1960, over 100 people died in the Soviet Union, in a rocket explosion that was not reported until the 1990s.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Russian cosmonaut was likely to have been the third or fourth person in space, but was dismissed from the cosmonaut corps in 1963, because of drunkenness and disorderly behavior at Chkalovskiy station.",
    "options": [
      "Vladimir Komarov",
      "Aleksei Leonov",
      "Grigori Nelyubov",
      "Alexi Petronov"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first person who lost his life in a space flight was the Soviet cosmonaut, Vladimir M. Komarov. How did he die?",
    "options": [
      "The capsule of his Soyuz 1 spacecraft burned upon re-entry, due to damage to the heat shields.",
      "His Soyuz 1 capsule landed on hard ground rather than making a soft, water landing.",
      "His Soyuz 1 capsule burnt up in space because the heat shields were inadequate.",
      "The parachutes on his Soyuz 1 capsule did not deploy and the hard entry caused his death."
    ],
    "correctIndex": 3
  },
  {
    "question": "What astronaut almost drowned in 1961, when his Liberty Bell 7 capsule sank upon splashdown in the Pacific Ocean?",
    "options": [
      "Jim Lovell",
      "Ed White",
      "Roger Chaffee",
      "Gus Grissom"
    ],
    "correctIndex": 3
  },
  {
    "question": "On September 23, 1999, the Mars Climate Orbiter, whose mission was to study the Martian weather, climate, and water, crashed on the Martian surface, instead of starting to orbit around the planet. What was the reason for this accident?",
    "options": [
      "The atmospheric stresses and friction were greater than expected.",
      "A mechanical fault in the protective shield",
      "Confusion in the system of units in the navigation of the spacecraft",
      "Mars gravitation forces were greater than expected."
    ],
    "correctIndex": 2
  },
  {
    "question": "This year was fatal for Russian space exploration, because after a normal re-entry of the capsule of the Soyuz 11 mission, the ground team opened the capsule to find the crew dead.",
    "options": [
      "1984",
      "1971",
      "1982",
      "1989"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these statements about the state of the human body during space flights has been proven?",
    "options": [
      "Astronauts tend to have memory problems during longer flights.",
      "Astronauts tend to have elevated testosterone levels in space.",
      "Astronauts tend to have a reduced amount of testosterone in space.",
      "Astronauts tend to have a decreased capacity for exercise and brain activity when in outer space."
    ],
    "correctIndex": 2
  },
  {
    "question": "On February 1, 2003, during the Space Shuttle Columbia disaster, the entire seven-member crew died. However, something on the shuttle survived the crash. What was it?",
    "options": [
      "Some rod-shaped bacteria",
      "A mouse",
      "An android",
      "Some worms"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the first state to secede from the Union.",
    "options": [
      "Georgia",
      "Virginia",
      "Tennessee",
      "South Carolina"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first person in space?",
    "options": [
      "Alexey Ivanovich",
      "Alan Shepard",
      "John Glen",
      "Yuri Gagarin"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is the first president of the U. S. in the 21st century?",
    "options": [
      "Bill Clinton",
      "Al Gore",
      "Barrack Obama",
      "George W. Bush"
    ],
    "correctIndex": 0
  },
  {
    "question": "The battle that is generally considered the turning point of the Pacific War was fought on and near this island.",
    "options": [
      "Palau",
      "Midway",
      "Iwo Jima",
      "Kiska"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Doolittle raid was the first time the US bombed Japan in the Pacific War. The bombers were launched from an aircraft carrier but the Japanese did not know where the bombers came from. What place did President Roosevelt facetiously name as the place where the bombers had come from?",
    "options": [
      "an underground air base in China",
      "Utopia",
      "Shangri-La",
      "The North Pole"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where did the Japanese and Americans fight for about six months in 1942 before the Japanese were finally defeated and their advance in the Solomon Islands stopped?",
    "options": [
      "Kiska",
      "Guadalcanal",
      "New Britain",
      "Tarawa"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what sea were the combined naval forces of the US, Britain, Netherlands and Australia decisively defeated by the Japanese Navy as they advanced in Southeast Asia in 1942?",
    "options": [
      "Java Sea",
      "Arafura Sea",
      "South China Sea",
      "Timor Sea"
    ],
    "correctIndex": 0
  },
  {
    "question": "The kamikaze, Japanese suicide planes that crashed into Allied ships, first made a systematic appearance in 1944 during the fighting near this location.",
    "options": [
      "Makin Atol",
      "Tarawa",
      "the Philippines",
      "Palau"
    ],
    "correctIndex": 2
  },
  {
    "question": "This island, captured by US forces in 1944, was close enough for B29 bombers to fly round trip to Japan. A major air base was built there from which many B29 bombing attacks were launched and the planes carrying the atomic bombs took off.",
    "options": [
      "Mindanao",
      "Palau",
      "Tinian",
      "Guam"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the only major city in the Pacific theater of operations in which there was major urban warfare between US and Japanese forces?",
    "options": [
      "Beijing",
      "Port Moresby",
      "Manila",
      "Taipei"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Japanese city had a large section burned out in a fire storm started by a large B29 air raid in March 1945. Although statistics are inadequate to judge conclusively, the raid may have killed as many people in one night as were killed by the atomic bomb at Hiroshima.",
    "options": [
      "Sapporo",
      "Tokyo",
      "Osaka",
      "Kyoto"
    ],
    "correctIndex": 1
  },
  {
    "question": "The British and their allies were shocked in 1942 when the Japanese captured a British colonial city that was supposed to be so well fortified as to be immune to attack. What was that city?",
    "options": [
      "Mandalay",
      "Hong Kong",
      "Singapore",
      "Darwin"
    ],
    "correctIndex": 2
  },
  {
    "question": "The last major battle of World War Two was also the one that caused the most casualties to the US and their allies (mostly British) in the Pacific War. Where was this battle fought?",
    "options": [
      "Philippines",
      "Guam",
      "Okinawa",
      "Iwo Jima"
    ],
    "correctIndex": 2
  },
  {
    "question": "During World War Two, General MacArthurs US forces, with help from Australian forces, methodically and skillfully drove the Japanese from the second largest island in the world. What is that island?",
    "options": [
      "New Guinea",
      "Luzon",
      "Sumatra",
      "Australia"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1944 the US Navy air arm effectively destroyed the Japanese naval air power by sinking three Japanese aircraft carriers and shooting down about 600 Japanese planes in a battle the Americans nicknamed the turkey shoot. In what sea, which gives the battle its name, did this happen?",
    "options": [
      "Sea of Japan",
      "Philippine Sea",
      "East China Sea",
      "Celebes Sea"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what body of water was a naval battle fought in 1942 in which, for the first time in history, the ships of both sides never saw each other?",
    "options": [
      "Leyte Gulf",
      "Sulu Sea",
      "Gulf of Papua",
      "Coral Sea"
    ],
    "correctIndex": 3
  },
  {
    "question": "How long did Hitlers Third Reich last?",
    "options": [
      "14 years",
      "12 years",
      "6 years",
      "4 years"
    ],
    "correctIndex": 1
  },
  {
    "question": "During WWII Joseph Stalin was leader of the Soviet Union. His name, Stalin, means Man of Power.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Adolf Hitlers father, Alois, changed his last name to Hitler. What was his original last name?",
    "options": [
      "Von Poppen",
      "Schicklgruber",
      "Hindenburg",
      "Van Poppen"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the code name for the invasion of Japan during WWII, which was never undertaken due to the end of the war?",
    "options": [
      "Cupcake",
      "Downwind",
      "Triton",
      "Downfall"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Soviet Union declared war on Japan on August 1, 1945.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The title of Hitlers book Mein Kampf means My Story.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these countries was not neutral during WWII?",
    "options": [
      "Portugal",
      "Greece",
      "Spain",
      "Switzerland"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was Geli Raubel?",
    "options": [
      "One of Hitlers nieces",
      "One of Hitlers secretaries",
      "One of Hitlers secret agents",
      "One of Hitlers sisters"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of the airplane that dropped the a-bomb over Nagasaki  on August 9, 1945?",
    "options": [
      "Little Boy",
      "Angela Heart",
      "Bocks Car",
      "Enola Gay"
    ],
    "correctIndex": 2
  },
  {
    "question": "During WWII, the SS formed a unit called the Werewolves to resist allied occupation forces.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who led the Vichy regime in France during WWII?",
    "options": [
      "Marshall Petain",
      "General Jean Martine Dubois",
      "General Lemoines",
      "Henri Desqueres"
    ],
    "correctIndex": 0
  },
  {
    "question": "During the Nuremberg trails, 30% of the defendants claimed the Holocaust never occurred, the remainder claimed they were just following orders.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the last Inca Emperor, who defeated his older half-brother in a civil war and took the throne?",
    "options": [
      "Tupac Hualpa",
      "Atahualpa",
      "Huayna Capac",
      "Huascar"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the language of the Inca Empire, used by the Catholic Church to preach to Indians in the Andes area?",
    "options": [
      "Sepik-Ramu",
      "Mairasi",
      "Quechua",
      "Amto-Musan"
    ],
    "correctIndex": 2
  },
  {
    "question": "This American explorer, a former member of the US Senate, rediscovered the Inca settlement of Machu Picchu.",
    "options": [
      "Hiram Bingham",
      "Richard Basset",
      "Dean Barkley",
      "Judah Benjamin"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Spanish conquistador, the founder of the City of Lima, conquered the Inca Empire.",
    "options": [
      "Gonzalo Pizarro",
      "Hernan Cortes",
      "Francisco Pizarro",
      "Alonso de Ojeda"
    ],
    "correctIndex": 2
  },
  {
    "question": "This kingdom, the largest in the Late Intermediate period of the cultural history of Peru, was eventually conquered by the Inca Empire in 1493.",
    "options": [
      "Chimor",
      "Chan Chan",
      "Wanka",
      "Moche"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Battle of Cajamarca, in which the last Inca emperor was captured, took place in which year?",
    "options": [
      "1530",
      "1532",
      "1555",
      "1560"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the god of mountains in the Inca mythology?",
    "options": [
      "Kon (Kan)",
      "Chasca",
      "Apo (Apu)",
      "Paricia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What did the Inca officials wear in order to indicate their status?",
    "options": [
      "sword",
      "hat",
      "tunic",
      "belt"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many provincial regions did the Inca Empire have?",
    "options": [
      "2",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 3
  },
  {
    "question": "This title, which in English means the only one,  was used by the ruler of the Inca Empire.",
    "options": [
      "Manco Inca",
      "Sapa Inca",
      "Tupac Inca",
      "Titu Inca"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the scene of the last major battle of the Peloponnesian War?",
    "options": [
      "Actium",
      "Epirus",
      "Aegospotami",
      "Salamis"
    ],
    "correctIndex": 2
  },
  {
    "question": "Agamemnon, one of the most notable heroes of Greek mythology, was a ruler of Mycenae.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This town, after which an Olympic event was named, was the site of a battle where the Athenian army defeated the Persians in 490 BC.",
    "options": [
      "Decathlos",
      "Pentathos",
      "Marathon",
      "Javelinos River"
    ],
    "correctIndex": 2
  },
  {
    "question": "In early 6th century BC, the city states of Akragas, Gela, and Syracuse sent ships to the city of Himera in west Sicily, where they defeated an invading force coming from where?",
    "options": [
      "Egypt",
      "Crete",
      "Carthage",
      "Rome"
    ],
    "correctIndex": 2
  },
  {
    "question": "Ancient Greece was the birthplace of the chariot.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the result of the Athenian invasion of Syracuse during the Peloponnesian War?",
    "options": [
      "The Athenians were defeated.",
      "Syracuse was destroyed and Sparta later surrendered.",
      "The Romans defeated both sides and took over Sicily.",
      "Carthage invaded and controlled western Sicily."
    ],
    "correctIndex": 0
  },
  {
    "question": "Alexander the Great commanded the Macedonian army and defeated Athens, Thebes and their allies at the Battle of Chaeronea (338 BC).",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "A story says that a Spartan wife gave this advice to her husband, upon his departure for the battlefield.",
    "options": [
      "None of these",
      "May Zeus strengthen you and return you home safely.",
      "May the blood of your enemies be as red as your cloak.",
      "Come home with your shield or upon it."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following city states was not on the territory of present-day Greece?",
    "options": [
      "Sparta",
      "Troy",
      "Athens",
      "Argos"
    ],
    "correctIndex": 1
  },
  {
    "question": "To what dynasty did Cleopatra, the last Pharaoh of Ancient Egypt, belong?",
    "options": [
      "Julio-Claudian",
      "Vespasian",
      "Flavian",
      "Ptolemaic"
    ],
    "correctIndex": 3
  },
  {
    "question": "How did Cleopatra present herself to Julius Caesar when he seized the Egyptian capital in 48 BC ?",
    "options": [
      "rolled into a Persian carpet",
      "riding a camel",
      "dressed as the goddess Aphrodite",
      "with a snake around her neck"
    ],
    "correctIndex": 0
  },
  {
    "question": "During Cleopatras reign it was believed that she was the re-incarnation and embodiment of this goddess of wisdom.",
    "options": [
      "Athena",
      "Artemis",
      "Anuket",
      "Isis"
    ],
    "correctIndex": 3
  },
  {
    "question": "Cleopatras son by Julius Caesar, who reigned, as a child, jointly with his mother, was nicknamed Caesarion. What does Caesarion mean?",
    "options": [
      "Future Caesar",
      "Little Caesar",
      "Second Caesar",
      "Son of Caesar"
    ],
    "correctIndex": 1
  },
  {
    "question": "What future emperor of the Roman Empire had Cleopatra and Julius Caesars son, Caesarion, executed?",
    "options": [
      "Mark Antony",
      "Octavian",
      "Marcus Aurelius",
      "Theodosius I"
    ],
    "correctIndex": 1
  },
  {
    "question": "Cleopatra formed an alliance with Mark Anthony, one of the triumvirs who ruled Rome following Caesars death. How many children did Mark Anthony and Cleopatra have?",
    "options": [
      "2",
      "none",
      "3",
      "1"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who wrote the tragedy Antony and Cleopatra, which centers on Cleopatra and Mark Antonys relationship from the time of the Parthian War until Cleopatras suicide?",
    "options": [
      "William Shakespeare",
      "Christopher Marlowe",
      "Ben Jonson",
      "George Bernard Shaw"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who defeated Mark Antony and Cleopatra at the Battle of Actium, the last engagement in the Final War of the Roman Republic?",
    "options": [
      "Ptolemy XIII",
      "Julius Caesar",
      "Titus Andronicus",
      "Octavian"
    ],
    "correctIndex": 3
  },
  {
    "question": "After Cleopatra and Anthonys death, who became guardian of their children?",
    "options": [
      "Octavia Minor, Anthonys fourth wife",
      "Octavian",
      "Cleopatras oldest son, Caesarion",
      "The children were executed."
    ],
    "correctIndex": 0
  },
  {
    "question": "How did Cleopatra commit suicide according to ancient sources?",
    "options": [
      "by stabbing herself with a sword",
      "by stabbing herself with a poisoned arrow",
      "by inducing an asp to bite her",
      "by swallowing poison"
    ],
    "correctIndex": 2
  },
  {
    "question": "The word Calendar comes form Latin kalendae. What does this word mean?",
    "options": [
      "The day of spring equinox",
      "The day of summer solstice",
      "Last day of the year",
      "First days of each month"
    ],
    "correctIndex": 3
  },
  {
    "question": "The internationally accepted civil calendar is called Gregorian. After who was it named?",
    "options": [
      "Pope Gregory XIII",
      "Historian Gregory of Tours",
      "Scientist Gregor Mendel",
      "Pope Gregory the Great"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many months in the Gregorian calendar have 31 days?",
    "options": [
      "5",
      "7",
      "6",
      "4"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Gregorian Calendar was introduced in 1582. Which one of these countries was among the first to adopt it?",
    "options": [
      "Russia",
      "England",
      "France",
      "Poland-Lithuania"
    ],
    "correctIndex": 3
  },
  {
    "question": "Why is the 9th month of the Gregorian calendar called September?",
    "options": [
      "After Septimus Severus - a Roman Emperor",
      "September was the 7th month in Roman calendar",
      "After Septimus Weasley",
      "Septimus in Latin means ninth"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Gregorian calendar replaced the Julian over 400 year ago. Which religion is still using the Julian calendar?",
    "options": [
      "Islam",
      "Hinduism",
      "Orthodox Christianity",
      "Judaism"
    ],
    "correctIndex": 2
  },
  {
    "question": "From what is the English word Friday derived?",
    "options": [
      "Free, as Friday used to be the day of rest",
      "Anglo-Saxon the fifth day",
      "Friesland, a region in the Netherlands",
      "Old English day of Frige"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the etymology of the month August?",
    "options": [
      "Augustus means 6th in Latin and the month was 6th in the Roman calendar",
      "Augustus means horrific in Latin. August was the month when Rome burnt",
      "It was named to honor Roman Emperor Octavian August",
      "Auguste was a ship that sank in August 1761"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which statement about year 2009 is not true?",
    "options": [
      "It is year 1430 in Islamic calendar",
      "It is the year of the ox in Chinese calendar",
      "Hebrew year 5770 starts on 18 September 2009",
      "It is a leap year"
    ],
    "correctIndex": 3
  },
  {
    "question": "A week denotes 7 days. Where/when weeks were 10 days long?",
    "options": [
      "For ancient Balts",
      "During French Revolution",
      "During the October Revolution in Russia",
      "In Mayan Empire"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did the Battle of Trenton take place?",
    "options": [
      "December 24, 1776",
      "December 25, 1776",
      "December 24, 1775",
      "December 26, 1776"
    ],
    "correctIndex": 3
  },
  {
    "question": "During the Battle of Trenton, Americans managed to surprise the Hessian Garrison because Hessian soldiers were hungover and tired from the Christmas celebration.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of the tough Colonel who commanded the Hessian Garrison during the Battle of Trenton?",
    "options": [
      "Heinrich Bannerman",
      "Ernst Von Klieg",
      "Johann Rall",
      "Karl Stern"
    ],
    "correctIndex": 2
  },
  {
    "question": "The crossing of the Delaware, that preceded the Battle of Trenton, was aided by a regiment of boatmen from this Massachusetts town.",
    "options": [
      "Wooster",
      "Boston",
      "Marblehead",
      "Salem"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many men did Washington have in his attack force during the Battle of Trenton?",
    "options": [
      "3500",
      "7000",
      "2400",
      "1256"
    ],
    "correctIndex": 2
  },
  {
    "question": "Was there a second battle in the town of Trenton on January 17, 1777?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "What were Washingtons passwords for the crossing of the Delaware River and the attack on Trenton?",
    "options": [
      "Victory and Liberty",
      "Liberty or Death",
      "Victory or Death",
      "Let Us Roll"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Battle of Trenton lasted over three hours.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "At the time of the Battle of Trenton, the Hessian garrison numbered some 1500 men. Twenty soldiers were killed and eighty wounded. About how many soldiers were taken prisoner?",
    "options": [
      "250",
      "900",
      "75",
      "600"
    ],
    "correctIndex": 1
  },
  {
    "question": "The commander of the Hessian Garrison during the Battle of Trenton was taken to Philadelphia where he was questioned by the Congress on January 7th, 1777.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "At the time of the Battle of Trenton, some Hessians were quartered in a stone building that is now a Trenton museum. What is the name of this museum?",
    "options": [
      "St. Anthonys Church",
      "The Old Barracks Museum",
      "Battlefield House",
      "The Stone House"
    ],
    "correctIndex": 1
  },
  {
    "question": "Holland means what in the ancient Dutch language?",
    "options": [
      "Land of  wood",
      "Land of  palm trees",
      "Land of  volcanoes",
      "Land of  deserts"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Batavian led the ill-fated uprising against the Romans AD 69-70?",
    "options": [
      "Atilla",
      "Claudius Civilis",
      "Dipo Negoro",
      "Spartacus"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what year was the Dutch Labour Party (S.D.A.P.) founded?",
    "options": [
      "1850",
      "1928",
      "1894",
      "1872"
    ],
    "correctIndex": 2
  },
  {
    "question": "What period of time during the Eighty Years War (1568- 1648) is referred to as the Twelve Years Truce?",
    "options": [
      "1635 to 1647",
      "1598 to 1610",
      "1569 to 1581",
      "1609 to 1621"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the Netherlands, who headed the famous postwar Cabinet of 1948 - 1958?",
    "options": [
      "Barend Biesheuvel",
      "Victor Marynen",
      "William Drees",
      "Pieter Gerbrandy"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who became the first female Cabinet minister of Holland in 1956?",
    "options": [
      "Kenau Hasselaar",
      "Wilhelmina Drucker",
      "Margarita Klompe",
      "Aletta Jacobs"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which king of England is not the title character of a Shakespearean play?",
    "options": [
      "Richard III",
      "Henry VIII",
      "Henry VII",
      "Richard II"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which great journey was funded by an English king?",
    "options": [
      "Giovanni da Verrazzanos to Manhattan (1524)",
      "Ferdinand Magellans round trip around the world (1519-1521)",
      "Giovanni Cabotos to Newfoundland (1497)",
      "Christopher Columbuss to the West Indies (1492)"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the connection between Mary Stuart (Queen of Scots) and Bloody Mary (Queen of England)?",
    "options": [
      "Mary Stuarts grandmother, Margaret Tudor, was an aunt of the English Mary.",
      "They were the same person.",
      "Bloody Mary had the Scottish Mary beheaded",
      "They were both daughters of Henry VIII (but had different mothers)."
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the connection between James I of England and James VI of Scotland?",
    "options": [
      "Their boyish fight at St Andrews University sparked a war that eventually led to the unification of Scotland and England.",
      "They were the same person.",
      "James I was the great-grandfather of James VI.",
      "They were both illegitimate sons of Elisabeth I."
    ],
    "correctIndex": 1
  },
  {
    "question": "Who or what destroyed the Great Spanish Armada in 1588?",
    "options": [
      "A hurricane off the coast of Ireland",
      "Admiral Nelson at Trafalgar",
      "Francis Drakes attack in the English Channel",
      "Dutch warships"
    ],
    "correctIndex": 0
  },
  {
    "question": "Shakespeares theater, The Globe, was destroyed by fire in 1613. Which Queen saw its reopening?",
    "options": [
      "Elisabeth I",
      "Anne",
      "Victoria",
      "Elisabeth II"
    ],
    "correctIndex": 3
  },
  {
    "question": "When James, brother of king Charles II, married Mary of Modena, who was Catholic, the English Parliament wanted James to do what?",
    "options": [
      "Renounce his rights to the English throne",
      "Force her to become Anglican or Presbyterian",
      "Divorce her",
      "Abstain from having sex with his wife"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the last successful foreign invasion of Britain?",
    "options": [
      "Spanish in 1588",
      "Dutch in 1688",
      "German in 1940",
      "Norman in 1066"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where did Scotland unsuccessfully try to establish a colony?",
    "options": [
      "Uganda",
      "Panama",
      "Kiribati",
      "Alaska"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who can be regarded as the only military dictator of England?",
    "options": [
      "England never had a dictator.",
      "Oliver Cromwell",
      "Guy Fawkes",
      "Winston Churchill"
    ],
    "correctIndex": 1
  },
  {
    "question": "The House of Windsor was founded by King George V in 1917 when he changed the name of his family to Windsor. What was the original name of his family?",
    "options": [
      "German",
      "Dutch",
      "Norman",
      "Ancient English"
    ],
    "correctIndex": 0
  },
  {
    "question": "What decade witnessed the publishing of Charles Darwins The Origin of Species, and the first official game of baseball?",
    "options": [
      "1890s",
      "1850s",
      "1800s",
      "1790s"
    ],
    "correctIndex": 1
  },
  {
    "question": "This decade saw the end of the Napoleonic Wars in Europe and the Year Without a Summer.",
    "options": [
      "1780s",
      "1870s",
      "1810s",
      "1900s"
    ],
    "correctIndex": 2
  },
  {
    "question": "What decade was nicknamed the Mauve Decade, and saw the discovery of the X-rays by Wilhelm Rontgen?",
    "options": [
      "1920s",
      "1940s",
      "1820s",
      "1890s"
    ],
    "correctIndex": 3
  },
  {
    "question": "During this decade the first modern railway opened, and Beethovens Ninth Symphony premiered in Vienna.",
    "options": [
      "1870s",
      "1820s",
      "1790s",
      "1890s"
    ],
    "correctIndex": 1
  },
  {
    "question": "The prototype telephone, the light bulb and the phonograph were all invented during this decade.",
    "options": [
      "1840s",
      "1820s",
      "1870s",
      "1890s"
    ],
    "correctIndex": 2
  },
  {
    "question": "What decade saw the the end of the Enlightenment, the invention of canned food, and the publishing of the atomic theory?",
    "options": [
      "1800s",
      "1880s",
      "1840s",
      "1860s"
    ],
    "correctIndex": 0
  },
  {
    "question": "Mark Twain published Adventures of Huckleberry Finn, and Robert Louis Stevenson published Treasure Island and The Strange Case of Dr Jekyll and Mr Hyde during this decade.",
    "options": [
      "1850s",
      "1780s",
      "1820s",
      "1880s"
    ],
    "correctIndex": 3
  },
  {
    "question": "During this decade the submarine was invented, Alfred Nobel invented dynamite, and the American Civil War broke.",
    "options": [
      "1890s",
      "1830s",
      "1810s",
      "1860s"
    ],
    "correctIndex": 3
  },
  {
    "question": "This decade saw the first postage stamp, the first electrical telegraph and the first use of general anesthesia in an operation.",
    "options": [
      "1890s",
      "1780s",
      "1860s",
      "1840s"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 5th century AD, a child hostage exchange was arranged, to keep peace between the Huns and the Romans.  Attila, future king of the Huns was sent to the Roman court in exchange for which Roman hostage?",
    "options": [
      "Flavius Aetius",
      "Bleda",
      "Honorius",
      "Flavius Constantinus"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the relationship between Attila and Bleda who ruled the Huns together until 445?",
    "options": [
      "They were not related",
      "They were cousins",
      "They were brothers",
      "They were father and son"
    ],
    "correctIndex": 2
  },
  {
    "question": "Because of the plundering and devastations across Europe, Attila the Hun came to be called by what nickname?",
    "options": [
      "The Scourge of God",
      "The Savage",
      "The King of War",
      "The Bane of the Huns"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 452, this influential Roman Pope participated in the negotiations with the Huns near Mantua and dissuaded Attila the Hun from devastating Rome.",
    "options": [
      "Pope Leo I",
      "Pope Urban III",
      "Pope Benedict V",
      "Pope Nicholas II"
    ],
    "correctIndex": 0
  },
  {
    "question": "To form an alliance against Attilas Huns, in 451 the Romans combined armies with which Visigoth leader?",
    "options": [
      "Sigfrid II",
      "Athelred",
      "Harald",
      "Theodoric I"
    ],
    "correctIndex": 3
  },
  {
    "question": "Attila the Huns palace and headquarters in Europe were situated on the territory of which modern country?",
    "options": [
      "Greece",
      "Spain",
      "Bulgaria",
      "Hungary"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this Germanic legend, turned into an operatic tetralogy by Richard Wagner, Attila the Hun appears by the name Etzel.",
    "options": [
      "Havamal",
      "The Poems of Ossian",
      "Silmarillion",
      "Song of the Nibelungen"
    ],
    "correctIndex": 3
  },
  {
    "question": "Honoria, sister of the Roman Emperor, broke the peaceful relations between Rome and Attila the Hun  by trying to do what?",
    "options": [
      "Marry Valentinian III",
      "Kill Attila",
      "Kill Valentinian III",
      "Marry Attila"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 451, Flavius A\u00c3\u00abtius, in alliance with the Visigoths, finally defeated Attila the Hun. Where did the famous battle take place?",
    "options": [
      "Near the Volga river",
      "In the Transilvanian woods",
      "Near the Black Sea",
      "On the Catalaunian Fields"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 453, Attila the Hun died in his room on the night of his wedding to which woman?",
    "options": [
      "Ildico",
      "Kriemhild",
      "Honoria",
      "Gudrun"
    ],
    "correctIndex": 0
  },
  {
    "question": "He said: If you want to make a lot of money, invent something that will enable Europeans to cut each others throats.",
    "options": [
      "Hiram Maxim",
      "Thomas  Alva Edison",
      "James Puckle",
      "Leonardo Da Vinci"
    ],
    "correctIndex": 0
  },
  {
    "question": "In World War I, the machine gun combined with this invention was responsible for most of the battle casualties.",
    "options": [
      "James Gliddens invention",
      "Samuel Colts invention",
      "James Puckles invention",
      "Alfred Nobels invention"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where was the assault rifle invented?",
    "options": [
      "in Italy",
      "in Mexico",
      "in Germany",
      "in Russia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following was invented by Hiram Maxim?",
    "options": [
      "The automatic pistol",
      "The sniper rifle",
      "The silencer",
      "The assault  rifle"
    ],
    "correctIndex": 2
  },
  {
    "question": "He was responsible for the invention of the caterpillar tractor, which was the basis of the tank.",
    "options": [
      "John Deere",
      "James B. Hill",
      "James Puckle",
      "Samuel Browning"
    ],
    "correctIndex": 1
  },
  {
    "question": "The operational jet fighter was invented during this war.",
    "options": [
      "The Spanish Revolution",
      "The Korean War",
      "World War I",
      "World War II"
    ],
    "correctIndex": 3
  },
  {
    "question": "When was the first automatic revolver produced?",
    "options": [
      "Between 1889 and 1891",
      "Between 1923 and 1924",
      "Between 1901 and 1903",
      "Between 1961 and 1963"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what year was the first mass produced multishot pistol patented?",
    "options": [
      "1912",
      "1835",
      "1862",
      "1879"
    ],
    "correctIndex": 1
  },
  {
    "question": "When was a telescopic sight first put on a rifle?",
    "options": [
      "1931",
      "1880",
      "1789",
      "1939"
    ],
    "correctIndex": 1
  },
  {
    "question": "Why is the Borchardt pistol of 1893 considered an important invention?",
    "options": [
      "It was the first pistol to have a separate ammo magazine.",
      "It was the first pistol approved for use by the Swiss Guard to help guard the Pope.",
      "It was the first pistol that was not made of metal.",
      "It was the first pistol to have an effective range of over 60 yards."
    ],
    "correctIndex": 0
  },
  {
    "question": "Although it  looks a lot like the World War II bazooka, the US Army Javelin anti-armor weapon has this advantage over other weapons of its type.",
    "options": [
      "It is only 50% the weight of similar weapons.",
      "It uses much cheaper munitions.",
      "It leaves no heat  trail.",
      "It is about 50% the cost of similar weapons."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which is the odd one out?",
    "options": [
      "SWORDS",
      "Dragon",
      "Predator",
      "TALON"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these European nations did not come under Soviet domination in the five years following the end of World War Two?",
    "options": [
      "Romania",
      "Yugoslavia",
      "Czechoslovakia",
      "Poland"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1946 George Kennan, a Russian specialist in the US embassy in Moscow, sent a long telegram to Washington. His telegram was very persuasive and is given much credit for the US adopting this kind of policy.",
    "options": [
      "policy of conciliation",
      "policy of confrontation",
      "policy of containment",
      "policy of isolationism"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Marshall Plan of 1947 offered massive economic aid to help war-devastated nations in Europe. However, communist controlled Eastern Europe received none of the aid for what reason?",
    "options": [
      "The US Congress stipulated that no aid could be given to communist nations.",
      "Western European nations refused to participate in the plan if Eastern European communist nations were included.",
      "The Soviet dictator Stalin refused to allow any communist controlled nation of Eastern Europe to receive Marshall Plan aid",
      "War damage in Eastern Europe was relatively small."
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the main purpose of the Truman Doctrine, that was first announced in 1947?",
    "options": [
      "containment of communism",
      "US support for the United Nations Organization for maintaining world peace",
      "keeping the US isolated from conflicts in Europe and Asia",
      "economic aid to European allies and Japan"
    ],
    "correctIndex": 0
  },
  {
    "question": "Why did President Truman relieve General MacArthur of command of UN forces in the Korean War?",
    "options": [
      "because MacArthur wanted to withdraw all UN forces below the 38th parallel in Korea",
      "because MacArthur publicly criticized his commander-in-chiefs (President Trumans) policy of limited war in Korea",
      "because MacArthur refused to allow bombing attacks on communist bases in China",
      "because MacArthur advocated counterattacking communist forces in Europe to relieve pressure on Korea"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who did Soviet leader Joseph Stalin appoint as his successor before his death in 1953?",
    "options": [
      "Nobody",
      "Khrushchev",
      "Bulganin",
      "Beria"
    ],
    "correctIndex": 0
  },
  {
    "question": "How long did the United States keep the monopoly on the atomic bomb?",
    "options": [
      "four years until 1949",
      "seven years until 1952",
      "one year until 1946",
      "ten years until 1955"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is the best reason why the KMT (Nationalists) under Chiang Kai-shek were defeated by the communists in the civil war following World War Two and forced to flee to Taiwan in 1949?",
    "options": [
      "The only support for the KMT was from Chinese peasants.",
      "The US refused to give any aid to the KMT.",
      "The communist forces greatly outnumbered the KTM and were better equipped.",
      "There was much corruption and inefficiency in the KMT leadership."
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the military alliance made up of the Soviet Union and the communist nations of Eastern Europe.",
    "options": [
      "Commintern",
      "The Moscow Treaty Organization",
      "The Warsaw Pact",
      "The Alliance of Socialist Nations"
    ],
    "correctIndex": 2
  },
  {
    "question": "What two US Presidents served during the first decade of the Cold War?",
    "options": [
      "Roosevelt, Truman",
      "Eisenhower, Kennedy",
      "Kennedy, Nixon",
      "Truman, Eisenhower"
    ],
    "correctIndex": 3
  },
  {
    "question": "What European nation received US aid  to try to put down the communist insurgency in Indochina in the late 1940s and early 1950s?",
    "options": [
      "Britain",
      "Netherlands",
      "Belgium",
      "France"
    ],
    "correctIndex": 3
  },
  {
    "question": "For a few years in the mid-1950s relations between the Soviet Union and the United States became less tense.  What is this period of time called?",
    "options": [
      "the thaw",
      "the age of reason",
      "detente",
      "the good years"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these were known as Stalins Organs?",
    "options": [
      "DPM",
      "The MIG-3 fighter",
      "Katyusha Rocket Launchers",
      "The T-34 tank"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was in charge of the 1st Polish Independent Parachute Brigade during operation Market Garden?",
    "options": [
      "Major General Roy Urquhart",
      "Major General Sosabowski",
      "Lieutenant General Brian Horrocks",
      "Brigadier General Hackett"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many Americans were killed in the capture of Makin Atoll in 1943?",
    "options": [
      "218",
      "66",
      "37",
      "152"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the nickname of the Italian Royal Army officer who led military expeditions in Africa during World War II?",
    "options": [
      "the Killer of Libya",
      "the Butcher of Ethiopia",
      "the Murderer of Ethiopia",
      "the Slaughterer of Libya"
    ],
    "correctIndex": 1
  },
  {
    "question": "What two Japanese carriers attacked the Aleutian islands on June 3rd 1942?",
    "options": [
      "Zuikaku and Shokaku",
      "Junyo and Ryujo",
      "Junyo and Soryu",
      "Soryu and Shokaku"
    ],
    "correctIndex": 1
  },
  {
    "question": "What general was killed by shrapnel in the Battle of Okinawa in 1945?",
    "options": [
      "General Jonathan Wainwright",
      "General Simon Buckner, Jr.",
      "General Douglas MacArthur",
      "General Walter Krueger"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where did Joseph Goebbels, one of Hitlers closest associates, earned his PH.D.?",
    "options": [
      "University of Basel",
      "Berlin University",
      "Heidelberg University",
      "University of Rostock"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where did General Mark Wayne Clark die?",
    "options": [
      "Charleston, South Carolina, USA",
      "London, England",
      "Munich, Germany",
      "Naples, Italy"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who developed the deadly V-2 combat rocket during World War II and where was it built?",
    "options": [
      "John Voelker, Nordhausen",
      "Albert Einstein, Hamburg",
      "Heinrich Gerstrond, Frankfurt",
      "Werner von Braun, Nordhausen"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the Middle Ages this type of complexion was very fashionable and everybody was trying to achieve it.",
    "options": [
      "Yellowish skin",
      "Dead-pale white skin",
      "Bronze sunkissed tan",
      "Flushed pinkish complexion"
    ],
    "correctIndex": 1
  },
  {
    "question": "During the Dark Ages, this magical ingredient was put into creams because it helped people achieve the desired complexion.",
    "options": [
      "Sulfur",
      "Lead",
      "Carbon",
      "Copper"
    ],
    "correctIndex": 1
  },
  {
    "question": "It was believed in the Middle Ages that dilated pupils are infinitely enchanting. To dilate their pupils people used the juice of this plant as eye drops.",
    "options": [
      "Water lily",
      "Poisonous ivy",
      "Belladonna",
      "Nettle"
    ],
    "correctIndex": 2
  },
  {
    "question": "In the Middle Ages, the large forehead was considered a sign of grandeur and wisdom thats why people used this common method to enlarge their foreheads.",
    "options": [
      "They shaved off a strip of hear above the forehead.",
      "None of these",
      "They bleached the hairline above the forehead.",
      "They plucked the hair above their forehead."
    ],
    "correctIndex": 3
  },
  {
    "question": "This hair color was very fashionable in medieval times. Women applied special mixtures to their hair and stayed in the sunlight for hours to achieve it.",
    "options": [
      "Chocolate Brown",
      "Platinum blonde",
      "Deep red",
      "Venetian blonde"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following is true about medieval makeup?",
    "options": [
      "Makeup was very heavy and greasy and clogged the skin pores.",
      "All of these",
      "Both men and women used makeup.",
      "Makeup was applied very generously."
    ],
    "correctIndex": 1
  },
  {
    "question": "What did people do in medieval times to make their skin appear more translucent?",
    "options": [
      "They painted blood vessels on their skin.",
      "They used medications to enlarge their blood vessels.",
      "They never liked translucent skin.",
      "They made cuts in their skin."
    ],
    "correctIndex": 0
  },
  {
    "question": "These marks were a huge craze in the Middle Ages.",
    "options": [
      "Pimples",
      "Moles",
      "Warts",
      "Scars"
    ],
    "correctIndex": 1
  },
  {
    "question": "Medieval people had very weird tastes when it came to eyebrows. Artificial eyebrows made from this material were in fashion.",
    "options": [
      "Mouse skin",
      "Horse skin",
      "Feathers",
      "Silk fabric"
    ],
    "correctIndex": 0
  },
  {
    "question": "For medieval people beauty marks had very special meanings. Which of these statements is true?",
    "options": [
      "All of these",
      "Beauty marks above the lip meant coquetry.",
      "Beauty marks around the eyes meant passion.",
      "Beauty marks on the forehead meant grandeur."
    ],
    "correctIndex": 0
  },
  {
    "question": "When did the Cuban Missile Crisis occur?",
    "options": [
      "April 1963",
      "November 1961",
      "October 1962",
      "August 1964"
    ],
    "correctIndex": 2
  },
  {
    "question": "The US  became convinced that Soviet nuclear missiles were in Cuba by which of the following?",
    "options": [
      "photos taken by a U-2 spy plane",
      "a Cuban defectors report and pictures of missiles sites",
      "a CIA spys report",
      "Soviet announcement of the instillation of nuclear missiles in Cuba"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who were the leaders of the US and the Soviet Union during the Cuban Missile Crisis?",
    "options": [
      "Johnson, Brezhnev",
      "Johnson, Khrushchev",
      "Kennedy, Khrushchev",
      "Eisenhower, Stalin"
    ],
    "correctIndex": 2
  },
  {
    "question": "During the Cold War, in the first week after discovering the nuclear missiles in Cuba, the US did which of the following?",
    "options": [
      "debated with the Soviet Union in the United Nation concerning the legality of the nuclear missiles in Cuba",
      "demanded immediate withdrawal of the missiles or the US would invade Cuba",
      "threatened nuclear attack on the Soviet Union if the Soviet nuclear missiles were not removed from Cuba",
      "made no public mention of the missiles in Cuba"
    ],
    "correctIndex": 3
  },
  {
    "question": "During the Cuban Missile Crisis, the US President and his advisors ultimately decided that their best immediate response to the Soviet nuclear missiles in Cuba would be to blockade Cuba. Why did they think this was the best decision?",
    "options": [
      "Stronger measures such as bombing the missile sites could later be used if the blockade failed.",
      "All of these",
      "The US had superior naval and military power in the Caribbean area.",
      "A blockade was less likely to risk nuclear war than other options under consideration."
    ],
    "correctIndex": 1
  },
  {
    "question": "The US gained some legality for their blockade of Cuba during the Cuban Missile Crisis, when they received strong approval and support from this organization.",
    "options": [
      "The United Nations",
      "The Organization of American States",
      "The North Atlantic Treaty Organization",
      "The European Union"
    ],
    "correctIndex": 1
  },
  {
    "question": "What statement is true about the Soviet response to the US blockade of Cuba during the Cuban Missile Crisis?",
    "options": [
      "The Soviet Union attempted to run the blockade but stopped when three Soviet ships were sunk.",
      "The Soviet Union accepted the blockade as legal and made no attempt to have it removed.",
      "The Soviet Union turned back from the blockade their cargo ships that were carrying military materials.",
      "The Soviet Union tried to sink US warships using torpedoes from submarines but failed to sink any US ships."
    ],
    "correctIndex": 2
  },
  {
    "question": "There was only one death as a result of military action during the Cuban Crisis. When did it occur?",
    "options": [
      "when a US ship was damaged by a torpedo fired by a Soviet submarine",
      "when an American U-2 spy plane was shot down over Cuba",
      "when a Cuban soldier was killed during a fight between US warplanes and Cuban antiaircraft guns",
      "when the US fired on a Soviet ship at the blockade line"
    ],
    "correctIndex": 1
  },
  {
    "question": "How did the US show that it was not fabricating a story about Soviet nuclear missiles in Cuba during the Cuban Missile Crisis?",
    "options": [
      "by releasing information about the missiles gathered by Cuban opponents of Castro",
      "by showing pictures in the United Nations Security Council of the missiles taken by US aircraft",
      "None of these",
      "by getting testimony of the presence of Soviet nuclear missiles from United Nation observers from neutral nations"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Cuban Missile Crisis was finally resolved when the following agreement was reached.",
    "options": [
      "The US promised (secretly) to remove its nuclear missiles that were near the Soviet Union in Turkey.",
      "The US would promise never to invade Cuba.",
      "All of these",
      "The Soviets would remove their nuclear missiles from Cuba."
    ],
    "correctIndex": 2
  },
  {
    "question": "What decade was nicknamed the Jazz Age in the United States, Canada and the United Kingdom?",
    "options": [
      "1960s",
      "1820s",
      "1920s",
      "1940s"
    ],
    "correctIndex": 2
  },
  {
    "question": "During this decade Soviet leader Joseph Stalin died, the European Common Market was established and the Korean War broke out and ended.",
    "options": [
      "1990s",
      "1950s",
      "1980s",
      "1960s"
    ],
    "correctIndex": 1
  },
  {
    "question": "What decade saw the launch of the Internet for mass usage, the fall of the the Soviet Union and the implementation of the Euro currency?",
    "options": [
      "2000s",
      "1980s",
      "1990s",
      "1970s"
    ],
    "correctIndex": 2
  },
  {
    "question": "During this decade the RMS Titanic sank on its debut voyage, World War I broke out, and Albert Einstein published his theory of general relativity.",
    "options": [
      "1910s",
      "1900s",
      "1920s",
      "1940s"
    ],
    "correctIndex": 0
  },
  {
    "question": "During this decade World War II ended, India gained independence from Great Britain, and Israel was established.",
    "options": [
      "1940s",
      "1920s",
      "1950s",
      "1960s"
    ],
    "correctIndex": 0
  },
  {
    "question": "During this decade, MTV was launched, the Chernobyl accident happened, and NBA star Michael Jordan rose to fame.",
    "options": [
      "1990s",
      "1980s",
      "1970s",
      "1960s"
    ],
    "correctIndex": 1
  },
  {
    "question": "What decade saw the Great Depression, Adolf Hitlers election as Chancellor of Germany, and the outbreak of World War II?",
    "options": [
      "1950s",
      "1920s",
      "1940s",
      "1930s"
    ],
    "correctIndex": 3
  },
  {
    "question": "During this decade there was an oil crisis, the Apollo 13 space mission was carried out, and the first modern computers were invented.",
    "options": [
      "1960s",
      "1980s",
      "1970s",
      "1990s"
    ],
    "correctIndex": 2
  },
  {
    "question": "In this decade the Panama Canal was built, mass production of the automobile began, and the home phonograph became popular.",
    "options": [
      "1900s",
      "1930s",
      "1940s",
      "1920s"
    ],
    "correctIndex": 0
  },
  {
    "question": "Martin Luther King, Jr., John F. Kennedy and Robert F. Kennedy were assassinated during this decade.",
    "options": [
      "1940s",
      "1950s",
      "1970s",
      "1960s"
    ],
    "correctIndex": 3
  },
  {
    "question": "More than seventy million people were killed in this war, which made it the deadliest conflict of all time.",
    "options": [
      "Vietnam War",
      "Napoleonic Wars",
      "World War I",
      "World War II"
    ],
    "correctIndex": 3
  },
  {
    "question": "This war, which took place in Europe in the first half of the 17th century, is one of the deadliest conflicts in history.",
    "options": [
      "Franco-Prussian War",
      "Mexican\u00e2\u20ac\u201cAmerican War",
      "Napoleonic Wars",
      "Thirty Years War"
    ],
    "correctIndex": 3
  },
  {
    "question": "The participants in this war never came to the point of a direct military clash, but fought indirectly through espionage, propaganda and competition in various fields.",
    "options": [
      "Chinese Civil War",
      "Korean War",
      "Cold War",
      "Second Sino-Japanese War"
    ],
    "correctIndex": 2
  },
  {
    "question": "These wars were fought in France between French Catholics and Protestants in the second half of the 16th century.",
    "options": [
      "Franco-Prussian Wars",
      "Napoleonic Wars",
      "Huguenot Wars",
      "Thirty Years Wars"
    ],
    "correctIndex": 2
  },
  {
    "question": "This war started on June 25, 1950 as a civil war and grew into a proxy war between the participants in the Cold War.",
    "options": [
      "Secret War",
      "Korean War",
      "First Indochina War",
      "Vietnam War"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Triple Entente and the Triple Alliance were the belligerent parties in this war which broke out in 1914.",
    "options": [
      "World War I",
      "The War to End All Wars",
      "The Great War",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "These wars were fought between 1803 and 1815, and included the famous battles of Austerlitz and Waterloo.",
    "options": [
      "French Revolutionary Wars",
      "Napoleonic Wars",
      "Huguenot Wars",
      "Franco-Prussian War"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the Punic wars was fought between 264 and 241 BC in Sicily and Africa?",
    "options": [
      "Fourth Punic War",
      "Second Punic War",
      "Third Punic War",
      "First Punic War"
    ],
    "correctIndex": 3
  },
  {
    "question": "These wars for the English throne were fought between 1455 and 1485.",
    "options": [
      "English Civil War",
      "War of the two brothers",
      "All of these",
      "Wars of the Roses"
    ],
    "correctIndex": 3
  },
  {
    "question": "This war took place between September 26, 1959 and April 30, 1975 as part of the Cold War conflict.",
    "options": [
      "Vietnam War",
      "Korean War",
      "Secret War",
      "American phase"
    ],
    "correctIndex": 0
  },
  {
    "question": "During WWII rubber was in short supply since the Japanese took over some of the best rubber producing areas. What measures were taken in the US to curtail the use of rubber by civilians?",
    "options": [
      "Speed limits on highways were lowered to reduce wear on tires.",
      "Gasoline was rationed to reduce travel and therefore reduce wear on tires.",
      "All of these",
      "Tires were rationed."
    ],
    "correctIndex": 2
  },
  {
    "question": "Before the attack on Pearl Harbor, WWII had been fought for well over two years in Europe and even longer between Japan and China. Though officially neutral, what did the US do to help friendly nations?",
    "options": [
      "Sent US Marines to help the Chinese nationalists",
      "Sent part of the US Army Air Force fleet of B17 bombers to help the British",
      "Provided the Soviet Union with raw materials",
      "Protected British convoys in the Atlantic"
    ],
    "correctIndex": 3
  },
  {
    "question": "What did American children often do during WWII to contribute to the war effort?",
    "options": [
      "They took part in basic military training",
      "Gathered scrap metal, rubber, etc. that could be recycled.",
      "They worked part time in munitions factories.",
      "Provided aircraft observers to help their adult counterparts spot enemy airplanes."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following US cities was hit by shell fire or bombing during WWII?",
    "options": [
      "Honolulu",
      "All of These",
      "Charleston SC",
      "San Francisco"
    ],
    "correctIndex": 0
  },
  {
    "question": "President Roosevelt met with other Allied leaders several times at several places during WWII. Which is the only leader he met in the White House in Washington?",
    "options": [
      "Chiang Kai-shek",
      "Winston Churchill",
      "Charles de Gaulle",
      "Joseph Stalin"
    ],
    "correctIndex": 1
  },
  {
    "question": "What statement is true about the US Presidential election scheduled in the midst of the war for November 1944?",
    "options": [
      "It was canceled and Roosevelt allowed to continue as President.",
      "It had five voting days instead of one to give people a better chance to vote.",
      "It was delayed until the Japanese surrender.",
      "It was carried out without any significant changes."
    ],
    "correctIndex": 3
  },
  {
    "question": "During WWII, famous athletes, movie stars, and other celebrities often made appearances to encourage Americans to do which of the following?",
    "options": [
      "Write letters to servicemen",
      "Buy war bonds",
      "Enlist in the armed forces",
      "Follow the rationing rules"
    ],
    "correctIndex": 1
  },
  {
    "question": "During WWII, this major weapons development project had facilities in New Mexico, Washington state, and Oak Ridge, Tennessee.",
    "options": [
      "Phosphine gas",
      "Atomic bomb",
      "Jet planes",
      "B-29 bomber"
    ],
    "correctIndex": 1
  },
  {
    "question": "During WWII, besides money, what else did you need in order to buy a scarce product such as gasoline in the US?",
    "options": [
      "A certificate from the national rationing bureau",
      "A ration coupon for the product",
      "A sworn statement that the product was essential to you",
      "A US citizens ID card"
    ],
    "correctIndex": 1
  },
  {
    "question": "During WWII, the booming defense industries and the shortage of labor opened substantial new job opportunities in the US for this group of people.",
    "options": [
      "Neither",
      "Both",
      "African Americans",
      "Women"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Christmas song, first sung by Bing Crosby, became number one on the hit parade and a favorite of troops abroad in the Christmas seasons of 1942 through 1944.",
    "options": [
      "White Christmas",
      "Jingle Bells",
      "Ill be home for Christmas",
      "Sleigh Ride"
    ],
    "correctIndex": 0
  },
  {
    "question": "What year did George Washington win his first victory against Hessian Soldiers at Trenton New Jersey?",
    "options": [
      "1775",
      "1777",
      "1778",
      "1776"
    ],
    "correctIndex": 3
  },
  {
    "question": "When did the American Civil War break out?",
    "options": [
      "1863",
      "1862",
      "1861",
      "1860"
    ],
    "correctIndex": 2
  },
  {
    "question": "What year did \u00e2\u20ac\u0153Custers Last Stand (Battle of the Little Bighorn) take place?",
    "options": [
      "1868",
      "1876",
      "1877",
      "1875"
    ],
    "correctIndex": 1
  },
  {
    "question": "What year did the Wright Brothers fly at Kitty Hawk, North Carolina?",
    "options": [
      "1904",
      "1901",
      "1903",
      "1900"
    ],
    "correctIndex": 2
  },
  {
    "question": "What year marks Halleys Comet first appearance in the 20th century?",
    "options": [
      "1905",
      "1909",
      "1920",
      "1910"
    ],
    "correctIndex": 3
  },
  {
    "question": "What year did Franklin D. Roosevelt and Adolph Hitler come to power?",
    "options": [
      "1933",
      "1932",
      "1938",
      "1930"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Hindenburg Disaster in Lakehurst, New Jersey took place in the same year that the fabric Nylon was invented. What year was that?",
    "options": [
      "1940",
      "1935",
      "1936",
      "1937"
    ],
    "correctIndex": 3
  },
  {
    "question": "When did the Cuban Missile Crisis start?",
    "options": [
      "1962",
      "1964",
      "1958",
      "1960"
    ],
    "correctIndex": 0
  },
  {
    "question": "What year was Ronald Reagan elected President of the United States for the first time?",
    "options": [
      "1988",
      "1980",
      "1984",
      "1976"
    ],
    "correctIndex": 1
  },
  {
    "question": "What year did Rita Hayworth, Fred Astaire and Liberace die?",
    "options": [
      "1987",
      "1986",
      "1985",
      "1990"
    ],
    "correctIndex": 0
  },
  {
    "question": "On October 13th, 1941, former Axis power, Italy, declared war on Germany.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "October 13th 1582 does not exist in Poland.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Sound of Silence singer was born on October 13th in 1941.",
    "options": [
      "Art Garfunkel",
      "Sonny Bono",
      "Paul Simon",
      "Bob Dylan"
    ],
    "correctIndex": 2
  },
  {
    "question": "On October 13th, 1971, Major League Baseball history was made when the first night game of a World Series was played between the Pittsburgh Pirates and this team.",
    "options": [
      "Boston Red Sox",
      "Baltimore Orioles",
      "Texas Rangers",
      "Houston Astros"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the French-language daily newspaper in Canada, whose first edition hit the streets of Montreal on October 13th, 1884.",
    "options": [
      "L Aquillon",
      "La Liberte",
      "Nouvelles de TVA",
      "La Presse"
    ],
    "correctIndex": 3
  },
  {
    "question": "This really really big variety show host died on October 13th in 1974.",
    "options": [
      "Johnny Carson",
      "Steve Allen",
      "Ed Sullivan",
      "Jack Jones"
    ],
    "correctIndex": 2
  },
  {
    "question": "Until 1494, wars were protracted and relatively bloodless, the sieges of towns slow and uncertain. However, war erupted in 1494 when the massive use of cannon made sieges last hours. To what event does this refer?",
    "options": [
      "The French invasion of Italy",
      "The Ottoman siege of Constantinople",
      "The French invasion of the English held counties of  Normandy  Aquitaine",
      "The Dutch siege of  s Hertogenbosch"
    ],
    "correctIndex": 0
  },
  {
    "question": "From 1594 onwards, the development of Volley Fire began to have a critical impact. Count William Louis wrote a letter, describing what he had learned from the drill practice used by the Ancient Roman armies, as described by writers such as Aelian. To whom did he send this letter?",
    "options": [
      "John Bingham",
      "Gustavus Adolphus",
      "Count Maurice",
      "Louis de Motgomery"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which country in Europe had the first large permanent military force in Europe?",
    "options": [
      "Sweden",
      "Prussia",
      "Spain",
      "France"
    ],
    "correctIndex": 2
  },
  {
    "question": "Galleys undoubtedly revolutionized the War at Sea, the main reason being the far superior fire power over any other sea-going ship at the time. On October 7th, 1571 for the first time galleys were in the forefront of a major sea battle. Which battle was this?",
    "options": [
      "The Battle of Lepanto",
      "The Battle of Gravelines",
      "The Battle of Svensksund",
      "The Battle of Terheyden"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is meant by Brandschatzung (translated as Firemoney)?",
    "options": [
      "Pillaging occupied territory in order to obtain supplies for the army",
      "Supplying an army under the threat of being accused as heretics",
      "Hiring mercenary armies as protection against pillaging",
      "Demanding supplies under threat of torching or pillaging"
    ],
    "correctIndex": 3
  },
  {
    "question": "The period between 1500 - 1800 saw wars transform from wars of attrition to wars of extermination.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what battle did the Highlanders have their last successful charge?",
    "options": [
      "Bonnie Prince Charlie at  Falkirk in 1745-46 campaign",
      "Heights of Abraham in 1759",
      "Marquis of Motnrose  Alastair MacColla at Kilsyth in 1644-45 campaign",
      "Claverhouse at Killiecrankie in 1689"
    ],
    "correctIndex": 1
  },
  {
    "question": "King Frederick V of Bohemia is often referred to as the Winter King because of his short reign.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "To what period does the Terror refer to?",
    "options": [
      "The rule of the Legislative Assembly - 1791 - 1792",
      "The rule of the National Constitutional Assembly - 1789 - 1791",
      "The rule of the Directory - 1795 - 1799",
      "The rule of the Legislative Assembly - 1793 - 1794"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1598 the Imjin war in Asia ended with a devestating defeat of the Japanese Navy by the Allied Korean and Chinese Navies, ending the Japanese invasion of Korea. In what battle was the Japanese fleet decisively defeated?",
    "options": [
      "The battle of Hansan-do",
      "The battle of Noryang",
      "The battle of Sacheon",
      "The battle of Okpo"
    ],
    "correctIndex": 1
  },
  {
    "question": "What did the name Caligula originally refer to?",
    "options": [
      "a type of Roman shield",
      "a type of pasta",
      "little boots",
      "toy sword"
    ],
    "correctIndex": 2
  },
  {
    "question": "Caligula succeeded this emperor, who died in March of 37 A.D.",
    "options": [
      "Tiberius",
      "Claudius",
      "Nero",
      "Augustus"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the centurion who assassinated Caligula?",
    "options": [
      "Cassius Longinus",
      "Septimus Severus",
      "Julius Nerva",
      "Cassius Chaerea"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of Caligulas pet horse?",
    "options": [
      "Succubus",
      "Alemmani",
      "Incitatus",
      "Equus"
    ],
    "correctIndex": 2
  },
  {
    "question": "Caligula almost caused a crisis in the  province of Judea, when he ordered that an image of himself be placed in the Jewish temple in Jerusalem.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who played Caligula in the self-titled movie, released by Penthouse International in 1979?",
    "options": [
      "Peter O Toole",
      "Malcolm McDowell",
      "Peter Cushing",
      "John Gielguld"
    ],
    "correctIndex": 1
  },
  {
    "question": "The French were first to use chemical weapons, during the  World War I.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which submarine was used by the Germans on May 7,1915, during the attack on one of the most impressive luxury ships ever built, the ocean liner RMS Lusitania?",
    "options": [
      "U - 20",
      "U - 21",
      "U - 88",
      "U - 15"
    ],
    "correctIndex": 0
  },
  {
    "question": "The main use of this air craft was in reconnaissance over the North Sea and the Baltic during World War I.",
    "options": [
      "Fighter planes",
      "Strategic bombers",
      "Spy balloons",
      "Zeppelins"
    ],
    "correctIndex": 3
  },
  {
    "question": "This chemical weapon was first used during World War I in the Second Battle of Ypres, April 22, 1915, when the Germans attacked French, Canadian and Algerian troops.",
    "options": [
      "Phosgene",
      "Mustard gas",
      "Tear gas",
      "Chlorine"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first effective depth charge, developed in 1916, was a 300-pound (140 kg) barrel-like casing, containing high explosive.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1982 the US Patent Office issued a patent  for a face mask that was designed to stop people from eating.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1976 the US Patent Office issued a patent for an inflatable rug.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1999 the US Patent Office issued a patent for a bird diaper.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The United States Supreme Court declared that this man invented the radio.",
    "options": [
      "H. Hertz",
      "N. Tesla",
      "A. G. Bell",
      "G. Marconi"
    ],
    "correctIndex": 1
  },
  {
    "question": "What do the letters in laser stand for?",
    "options": [
      "Long amplitude static electric rays",
      "Light amplification by stimulated emission of radiation",
      "Low amplitude synchronous electric rays",
      "Light amplification and synchronic electric radiance"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who made the first light bulb?",
    "options": [
      "William Coolidge",
      "N. Tesla",
      "Thomas A. Edison",
      "Joseph Swan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is given credit for inventing the neon light?",
    "options": [
      "Peter Hewitt",
      "Georges Claude",
      "William Coolidge",
      "Thomas Alva Edison"
    ],
    "correctIndex": 1
  },
  {
    "question": "A standard, incandescent light bulb emits light when a filament is heated. How does a fluorescent bulb  work?",
    "options": [
      "Light is emitted when a mercury filament reacts with great pressure inside a glass bulb.",
      "Light is emitted when argon gas reacts with an electrical current.",
      "Light is emitted when solar energy reacts with a silk thread.",
      "Light is emitted when mercury vapor is heated."
    ],
    "correctIndex": 3
  },
  {
    "question": "Who made the first flashlight?",
    "options": [
      "Joshua Lionel Cowen",
      "John Evinrude",
      "Peter Hewitt",
      "Nickola Tesla"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1793 Claude Chappe made the first system of communicating over long distances via flags. What word refers to such a system?",
    "options": [
      "Vexiollogy",
      "Lagoforms",
      "Vexiophone",
      "Semaphore"
    ],
    "correctIndex": 3
  },
  {
    "question": "Samuel F. B. Morse invented the telegraph key.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What did Ivan Getting and Bradford Parkinson develop?",
    "options": [
      "The transistor radio",
      "The automatic transmission for automobiles",
      "FM radio",
      "GPS"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following was introduced by the Western Union Compnay in 1933?",
    "options": [
      "Travellers checks",
      "The singing telegam",
      "International telegraphy",
      "Sending money across the country by wire."
    ],
    "correctIndex": 1
  },
  {
    "question": "Who had the great idea of putting  a bell on the telephone so people would know that someone was calling?",
    "options": [
      "Alexander Graham Bell",
      "N. Tesla",
      "Thomas Watson",
      "Elisha Gray"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which statement is true about the Regency?",
    "options": [
      "It was the first auto with an automatic transmission.",
      "It was the first cell phone.",
      "It was the first auto with a moon roof.",
      "It was the first transistor radio."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these was an invention of Charles Strite?",
    "options": [
      "The food  processor",
      "The pop-up toaster",
      "The electric oven",
      "The flush toilet"
    ],
    "correctIndex": 1
  },
  {
    "question": "The elograph, which was invented  in 1971, was the basis of what device?",
    "options": [
      "The computer  monitor",
      "The polygraph (lie detector)",
      "Touch screen technology",
      "The World-Wide  Web"
    ],
    "correctIndex": 2
  },
  {
    "question": "What everyday item was invented by Will Mueller in 1935?",
    "options": [
      "Automatic telephone answering machine",
      "Fax machine",
      "Electric door bell",
      "Automobile automatic transmission"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these games came first?",
    "options": [
      "Madden NFL",
      "Frogger",
      "Super Mario brothers",
      "Tetris"
    ],
    "correctIndex": 1
  },
  {
    "question": "The acronym ANZAC means Australian New Zealand Army Corps.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The term digger, was applied to Australian soldiers because they dug trenches at Gallipoli to escape enemy fire.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Before arriving at Gallipoli, the Anzacs trained in what country?",
    "options": [
      "Greece",
      "Egypt",
      "Syria",
      "Libya"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1915, the Anzacs were supposed to land at Cape Tepe but they landed two kilometres to the north.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these conditions were not present at Gallipoli at the time of World War I?",
    "options": [
      "In winter, the weather was freezing with temperatures often falling below zero. Rain and snow made life miserable for the soldiers.",
      "In summer, Gallipoli was very hot and dry with an inadequate supply of water.",
      "The soldiers lived in trenches which they dug themselves while under fire from the enemy.",
      "The trenches were always kept clean by the soldiers to lessen the outbreak of diseases."
    ],
    "correctIndex": 3
  },
  {
    "question": "This official Australian war historian was responsible for creating the Anzac legend of resourcefulness, mateship and courage.",
    "options": [
      "C. W. Denton",
      "C. E. W. Benson",
      "C.E.W. Bean",
      "C. W. Thompson"
    ],
    "correctIndex": 2
  },
  {
    "question": "When the Anzacs evacuated the Gallipoli Peninsula in December 1915, 25 men were killed as they climbed into the boats that were waiting to take them to the ships offshore.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Battle of Lone Pine was an important battle of the Gallipoli campaign. How many Anzacs died to capture Lone Pine?",
    "options": [
      "Over 1500",
      "Over 3000",
      "Over 2000",
      "Over 4000"
    ],
    "correctIndex": 2
  },
  {
    "question": "Private John Simpson Kirkpatrick was a soldier who during WWI rescued wounded men from the battlefield and brought them to the beach on his donkey Duffy to be evacuated. He was killed on 19th May 1915.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these triggered World War I in 1914?",
    "options": [
      "Delays and misunderstandings in diplomatic communications",
      "Fervent and uncompromising nationalism",
      "The assasination of Archduke Franz Ferdinand in Sarajevo",
      "The competition between two or more countries for military supremacy"
    ],
    "correctIndex": 2
  },
  {
    "question": "Following the outbreak of the First World War in 1914, which army opened the Western Front by invading Belgium and Luxembourg?",
    "options": [
      "French army",
      "Canadian army",
      "British army",
      "German army"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the name of the  decisive conflict between the Russian Empire and the German Reich which opened the Eastern front  on August 1914?",
    "options": [
      "Battle of the Vistula River",
      "Battle of Grunwald",
      "Battle of Tannenberg",
      "Battle of Lemberg"
    ],
    "correctIndex": 2
  },
  {
    "question": "During World War I, Ottoman Empire joined Germany and Austria-Hungary on 20 May 1882 to form the Triple Alliance.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the other name of  the Dardanelles Campaign of 1915, which resulted in a major victory of  the Ottoman Empire against combined British and French forces?",
    "options": [
      "Battle of Megiddo",
      "Battle of Sarikamis.",
      "Battle of Gallipoli",
      "Battle of Sari Bair"
    ],
    "correctIndex": 2
  },
  {
    "question": "Austria was the first country to sign an armistice in 1918 which led to the end of the World  War I .",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Loss of life was limited during the 1906 San Francisco earthquake as it occurred shortly after 5:00 pm, so many people were not in their homes.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "This San Francisco native, who was the Mayor of San Francisco at the time of the 1906 earthquake and fire, was also the first Union Labor mayor in US history.",
    "options": [
      "Jesse Cook",
      "Dennis Sullivan",
      "George Pardee",
      "Eugene Schmitz"
    ],
    "correctIndex": 3
  },
  {
    "question": "The devastating Ham and Eggs Fire of 1906 was started when a skillet of ham and eggs was left burning for at least five hours when a family fled a crumbling building. This fire destroyed the City Hall of San Francisco, since there was no water to put it out.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What memorial was dedicated on May 30, 1922?",
    "options": [
      "Lincoln Memorial",
      "Washington Monument",
      "Marine Corps Memorial",
      "Jefferson Memorial"
    ],
    "correctIndex": 0
  },
  {
    "question": "What state became the 32nd state of the Union on May 11, 1858?",
    "options": [
      "California",
      "Kansas",
      "Minnesota",
      "Oregon"
    ],
    "correctIndex": 2
  },
  {
    "question": "What blockbuster movie opened on May 25, 1977?",
    "options": [
      "Star Wars",
      "The Godfather",
      "The Godfather Part II",
      "Jaws"
    ],
    "correctIndex": 0
  },
  {
    "question": "What did Levi Strauss receive a patent for on May 20, 1873?",
    "options": [
      "Steam Engine with Coal-Fired Pistons",
      "Ballpoint Pen with Replaceable Cartridges",
      "Denim Pants with Copper Rivets",
      "Sewing Machine with Foot Pedals"
    ],
    "correctIndex": 2
  },
  {
    "question": "On May 23, 1934, bank robbers Bonnie Parker and Clyde Barrow were gunned down in this state.",
    "options": [
      "Louisiana",
      "Oklahoma",
      "Texas",
      "Kansas"
    ],
    "correctIndex": 0
  },
  {
    "question": "On May 14, 1904, the first Olympic Games to be held in the U.S. opened in what city?",
    "options": [
      "St. Louis",
      "Chicago",
      "Los Angeles",
      "Lake Placid"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Yankee legends consecutive game streak of 2,130 came to an end on May 2, 1939.",
    "options": [
      "Joe Dimaggio",
      "Babe Ruth",
      "Lou Gehrig",
      "Mickey Mantle"
    ],
    "correctIndex": 2
  },
  {
    "question": "England declared war on France on 15 May 1756 starting the Seven Years War which was also known as the French and Indian War in America.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Hong Kong ceded to the British and John F. Kennedy was inaugurated on this day.",
    "options": [
      "March 14",
      "April 2",
      "November 23",
      "January 20"
    ],
    "correctIndex": 3
  },
  {
    "question": "Sir Arthur Conan Doyle was born in this year, on May 22.",
    "options": [
      "1859",
      "1861",
      "1863",
      "1865"
    ],
    "correctIndex": 0
  },
  {
    "question": "The U.S. acquired Spanish Florida on the 22th day of this month in 1819.",
    "options": [
      "June",
      "October",
      "February",
      "April"
    ],
    "correctIndex": 2
  },
  {
    "question": "Just one of these events took place on October 13.",
    "options": [
      "Italy declared war on Germany.",
      "John Lennon was born.",
      "Isaac Singer won the Nobel Prize.",
      "Professional revolutionary Che Guevara was executed in Bolivia."
    ],
    "correctIndex": 0
  },
  {
    "question": "Three of these events took place at the beginning of the year in which they occurred. Which is the odd one?",
    "options": [
      "Apollo 14 departed for the moon (1971)",
      "King George III died (1820)",
      "First McDonalds opened in Soviet Union (1990)",
      "Cary Grant died (1986)"
    ],
    "correctIndex": 3
  },
  {
    "question": "Mikhail Gorbachev was picked to succeed Chernenko in this year.",
    "options": [
      "1983",
      "1985",
      "1987",
      "1981"
    ],
    "correctIndex": 1
  },
  {
    "question": "Dalai Lama began his exile on March 31, 1950.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The first volume of this novel was published on September 30, 1868.",
    "options": [
      "The Pickwick Papers",
      "Little Women",
      "The Hunchback of Notre-Dame",
      "Three Men in a Boat"
    ],
    "correctIndex": 1
  },
  {
    "question": "One of these four people was not born on April 1.",
    "options": [
      "Otto von Bismarck",
      "King George II of Greece",
      "Abraham Maslow",
      "Method Man"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this year Cy Young threw the first perfect game in modern baseball history, movie star Cary Grant was born, and Give My Regards to Broadway was initiated in a Broadway theater.",
    "options": [
      "1908",
      "1904",
      "1906",
      "1900"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this year sprinter Jesse Owens was born, the Philadelphia Athletics won the World Series, and Dr. Jekyll and Mr. Hyde came out as a silent film.",
    "options": [
      "1915",
      "1913",
      "1912",
      "1919"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this year George Martin, English producer of The Beatles, was born, Fox Film bought the Movietone system for recording sound onto tape, and Joe Paterno, longtime coach of Pennsylvania State Universitys college football team was born.",
    "options": [
      "1926",
      "1929",
      "1923",
      "1927"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this year the Dow Jones Industrial Average reached its lowest level of the Great Depression, bottoming out at 41.22, Tarzan the Ape Man opened,and the Winter Olympics were held in Lake Placid, New York.",
    "options": [
      "1936",
      "1937",
      "1932",
      "1931"
    ],
    "correctIndex": 2
  },
  {
    "question": "In this year Casablanca premiered at the Hollywood Theater in New York City, Paul McCartney was born, and the St. Louis Cardinals beat the New York Yankees in the World Series.",
    "options": [
      "1942",
      "1946",
      "1940",
      "1944"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this year Elvis Presley appeared on the Ed Sullivan show for the third time, the Brooklyn Dodgers moved to L.A., and The Bridge on the River Kwai was released.",
    "options": [
      "1957",
      "19951",
      "1954",
      "1955"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this year the New York Jets of the American Football League beat the favored Baltimore Colts of the National Football League 16-7 in Super Bowl III, Butch Cassidy and the Sundance Kid came out, and Stevie Wonder came out with I Dont Know Why.",
    "options": [
      "1969",
      "1967",
      "1966",
      "1968"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this year Notre Dame beat UCLA 71-70 in mens college basketball ending the Bruins 88-game winning streak, The Way We Were by Barbra Streisand was the number 1 song, and The Godfather II came out.",
    "options": [
      "1970",
      "1974",
      "1972",
      "1973"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this year the U.S.A. upset the Soviet Union in Olympic hockey, Call Me by Blondie was the #1 song, and Star Wars: Episode V - The Empire Strikes Back came out.",
    "options": [
      "1983",
      "1986",
      "1980",
      "1982"
    ],
    "correctIndex": 2
  },
  {
    "question": "In this year the Green Bay Packers won the Super Bowl, Foolish Games/You Were Meant for Me by Jewel was the number 2 song, and the movie Titanic came out.",
    "options": [
      "1992",
      "1999",
      "1995",
      "1997"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what month are the World Health Day and Buddhas Birthday celebrated?",
    "options": [
      "June",
      "February",
      "September",
      "April"
    ],
    "correctIndex": 3
  },
  {
    "question": "Patriot Day is celebrated in this month in the USA, in memory of the casualties in the September 11 attacks.",
    "options": [
      "November",
      "August",
      "September",
      "October"
    ],
    "correctIndex": 2
  },
  {
    "question": "In this month Martin Luther King, Jr. Day is celebrated in the United States and Australia Day is celebrated in Australia.",
    "options": [
      "December",
      "November",
      "February",
      "January"
    ],
    "correctIndex": 3
  },
  {
    "question": "This is the World Blindness Awareness Month, and Halloween is celebrated on its last day. It is also called Red because of the Russian revolution of 1917.",
    "options": [
      "October",
      "June",
      "November",
      "February"
    ],
    "correctIndex": 0
  },
  {
    "question": "In this month, Julius Caesar was killed, and International Womens Day and Saint Patricks Day are celebrated.",
    "options": [
      "August",
      "April",
      "June",
      "March"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this month the USA celebrates its Independence Day.",
    "options": [
      "October",
      "June",
      "April",
      "July"
    ],
    "correctIndex": 3
  },
  {
    "question": "Napoleon Bonaparte was born in this month, which marks the official end of the Second World War.",
    "options": [
      "February",
      "June",
      "May",
      "August"
    ],
    "correctIndex": 3
  },
  {
    "question": "Valentines Day is celebrated in this month, which is also Black History Month in Canada and the United States.",
    "options": [
      "February",
      "March",
      "July",
      "May"
    ],
    "correctIndex": 0
  },
  {
    "question": "In many countries Labor Day is observed in this month, which is also dedicated to the Blessed Virgin Mary in Roman Catholic tradition.",
    "options": [
      "March",
      "May",
      "April",
      "October"
    ],
    "correctIndex": 1
  },
  {
    "question": "Thermopylae, the site of the historic Battle of Thermopylae, was what type of area?",
    "options": [
      "It was a narrow pass",
      "It was heavily forested",
      "It was a hilltop",
      "It was a wide open plain"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these statements is true about the Battle of Artemisium?",
    "options": [
      "It was the battle where king Darius was defeated",
      "It was the final naval battle that destroyed the Greek fleet",
      "It was the battle before the sacking of Athens",
      "It was the naval battle that  took place at Thermopylae"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the historic Battle of Thermopylae, who is Ephialtes?",
    "options": [
      "A greek hero",
      "A persian hero",
      "A greek traitor",
      "A persian traitor"
    ],
    "correctIndex": 2
  },
  {
    "question": "When was this headline breaking news:",
    "options": [
      "June 13, 1994",
      "May 10, 1994",
      "May 13, 1994",
      "June 10, 1994"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who created the concept of the Dark Ages in the 1330s?",
    "options": [
      "Johan Huizinga",
      "Dorothy Sayers",
      "Petrarch",
      "Flavio Biondo"
    ],
    "correctIndex": 2
  },
  {
    "question": "What Renaissance humanist historian coined the term Middle Age?",
    "options": [
      "Leonardo Bruni",
      "Dante",
      "Flavio Biondo",
      "Petrarch"
    ],
    "correctIndex": 2
  },
  {
    "question": "When did the West Roman Empire cease to exist?",
    "options": [
      "506 AD",
      "458 AD",
      "413 AD",
      "476 AD"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these was the legal successor to the classical Roman Empire?",
    "options": [
      "The Western Roman Empire",
      "Greece",
      "The Eastern Roman Empire",
      "Italy"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the language of science in the ancient world?",
    "options": [
      "Sumerian",
      "Egyptian",
      "Latin",
      "Greek"
    ],
    "correctIndex": 3
  },
  {
    "question": "What period in the Middle Ages marked a renewed interest in Classical Antiquity?",
    "options": [
      "900 AD",
      "800 AD",
      "1000 AD",
      "700 AD"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did the Christianisation of Germanic tribes begin?",
    "options": [
      "in the 5th century",
      "in the 4th century",
      "in the 7th century",
      "in the 6th century"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did the great migration of the Slavs begin?",
    "options": [
      "in the 7th century",
      "in the 9th century",
      "in the 8th century",
      "in the 10th century"
    ],
    "correctIndex": 0
  },
  {
    "question": "When did Boniface III, the first Bishop of Rome, begin to bear the title Pope?",
    "options": [
      "599 AD",
      "617 AD",
      "601 AD",
      "607 AD"
    ],
    "correctIndex": 3
  },
  {
    "question": "When did a pandemic, known as the Plague of Justinian, afflict the Byzantine Empire?",
    "options": [
      "548-549 AD",
      "527-528 AD",
      "535-536 AD",
      "541-542 AD"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the term \u00e2\u20ac\u0153Paleozoic\u00e2\u20ac\u009d mean?",
    "options": [
      "Recent life",
      "Middle life",
      "Ancient life",
      "Age of ancient life"
    ],
    "correctIndex": 2
  },
  {
    "question": "What term refers to the raise in biodiversity that occurred during the early Paleozoic era?",
    "options": [
      "Biodiversity Boom",
      "None of these",
      "Mass radiation of life",
      "Cambrian Explosion"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following is not a period of the Paleozoic era?",
    "options": [
      "Silurian",
      "Permian",
      "Cambrian",
      "Paleogene"
    ],
    "correctIndex": 3
  },
  {
    "question": "The atmospheric oxygen content during the late Paleozoic era was greater than that of today.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which animal is often used as an index fossil for identifying Paleozoic strata?",
    "options": [
      "Dimetrodon",
      "None of the above",
      "Dinosaur",
      "Trilobite"
    ],
    "correctIndex": 3
  },
  {
    "question": "The oldest confirmed fossil of a reptile belonged to what animal?",
    "options": [
      "Dimetrodon",
      "Westlothiana",
      "Petrolacosaurus",
      "Hylonomus"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first terrestrial plants evolved during the Silurian period. Which of the following is an example of these primitive floras?",
    "options": [
      "None of these",
      "Cooksonia",
      "Archaeopteris",
      "Lepidodendron"
    ],
    "correctIndex": 1
  },
  {
    "question": "Mammal like reptiles were common by the end of the Paleozoic.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What event signaled the end of the Paleozoic?",
    "options": [
      "The evolution of the dinosaurs",
      "None of these",
      "The evolution of humans",
      "A large mass extinction at the end of the Permian period"
    ],
    "correctIndex": 3
  },
  {
    "question": "In which country did the name Gustav originate?",
    "options": [
      "Norway",
      "Sweden",
      "Finland",
      "Denmark"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which ancient nation is the name Gustav related to?",
    "options": [
      "Huns",
      "Scythians",
      "Goths",
      "Vikings"
    ],
    "correctIndex": 2
  },
  {
    "question": "Gustav has been a common name for Swedish monarchs since the reign of Gustav Vasa or Gustav I.",
    "options": [
      "England",
      "Spain",
      "Denmark",
      "Germany"
    ],
    "correctIndex": 2
  },
  {
    "question": "This Swedish city was founded by Gustav II Adolf, who was known by the Latinized name Gustavus Adolphus and was King of Sweden from 1611 until his death.",
    "options": [
      "Stockholm",
      "Goteborg",
      "Malmo",
      "Lund"
    ],
    "correctIndex": 1
  },
  {
    "question": "Charles X Gustav (Karl X Gustaf) was a descendant of the House of Palatinate-Zweibr\u00c3\u00bccken. On July 10, 1655, he left Sweden to engage in the Second  Northern War (1655-1660) which started with the occupation of D\u00c3\u00bcnaburg by the Swedes on July 1, 1655. Eventually his armies occupied most of this European country.",
    "options": [
      "Prussia",
      "Lithuania",
      "Russia",
      "Poland"
    ],
    "correctIndex": 3
  },
  {
    "question": "Gustav III of Sweden, a member of a House of Holstein-Gottorp, was assassinated at a midnight masquerade at the Royal Swedish Opera in Stockholm on March 16, 1792. This became the basis of Eugene Scribes libretto for the opera Un Ballo in Maschera (A Masked Ball). Who composed the opera?",
    "options": [
      "Gioachino Rossini",
      "Giuseppe Verdi",
      "Gaetano Donizetti",
      "Giacomo Puccinis"
    ],
    "correctIndex": 1
  },
  {
    "question": "Gustav IV Adolf of Sweden voluntarily abdicated in the winter of 1808 when Russia invaded Sweden and Denmark declared war. By early 1809 Sweden lost almost a third of the Swedish realm and a quarter of its population to the Russians. The territory which the Russians occupied is in this modern country.",
    "options": [
      "Finland",
      "Latvia",
      "Lithuania",
      "Poland"
    ],
    "correctIndex": 0
  },
  {
    "question": "Gustaf V of Sweden, the last Swedish king to intervene directly in the politics of the country, was also a devoted sportsman, playing in tournaments under the pseudonym Mr G. In 1980, King Gustaf was elected into the International Hall of Fame of this sport.",
    "options": [
      "Chess",
      "Polo",
      "Golf",
      "Tennis"
    ],
    "correctIndex": 3
  },
  {
    "question": "Most of the powers of the Swedish monarchy died with Gustaf VI Adolf who had two major interests in life besides his country: archeology and this science.",
    "options": [
      "Astronomy",
      "Physics",
      "Music",
      "Botany"
    ],
    "correctIndex": 3
  },
  {
    "question": "King Carl XVI Gustaf ascended to the throne on September 15, 1973, after the death of his grandfather, King Gustaf VI Adolf. Carl XVI Gustaf, who is probably best known as the presenter of the Nobel Prizes,",
    "options": [
      "Hemophilia",
      "Dyslexia",
      "Epilepsy",
      "Asthma"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these are not characteristic of Gothic architecture?",
    "options": [
      "dark or brown walls",
      "ribbed vaults",
      "flying buttresses",
      "pointed arches"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which of the following present-day countries was Gothic language spoken?",
    "options": [
      "Germany",
      "France",
      "England",
      "Italy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Hitler, like several conquerors before him, faced the daunting task of crossing the English Channel and invading Britain. Which of the following was the only conqueror to successfully do this?",
    "options": [
      "William I of Normandy",
      "Louis XIV of France",
      "Napoleon",
      "Philip II and the Spanish Armada"
    ],
    "correctIndex": 0
  },
  {
    "question": "The final German goal of the Battle of Britain was a successful invasion of Britain, but before that the Germans had to achieve this intermediate goal.",
    "options": [
      "Gaining air superiority over the English channel so that a German invasion fleet could cross the channel protected by the German air force.",
      "Destroying the British arms manufacturing industries",
      "Destroying the French underground guerrilla warfare",
      "Defeating the British surface fleet in a great sea battle"
    ],
    "correctIndex": 0
  },
  {
    "question": "Never in the field of human conflict has so much been owed by so many to so few.\u00e2\u20ac\u2122 In this famous quote by Winston Churchill who were the few he was referring to?",
    "options": [
      "British military leaders",
      "British fighter pilots",
      "British scientists",
      "Anti-German spies in France and Belgium"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these was an advantage the British had in the Battle of Britain?",
    "options": [
      "The British Army was a constant threat to make raids on German supply facilities and bases in France.",
      "The British Navy was able to shoot down many German planes as they flew over the English Channel.",
      "The British had a larger number of fighter planes than the Germans.",
      "British pilots forced to parachute from damaged planes often landed on friendly territory and could return to action soon afterward."
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these countries fought on the side of Britain during the Battle of Britain?",
    "options": [
      "Canada",
      "The Soviet Union",
      "the United States",
      "Belgium"
    ],
    "correctIndex": 0
  },
  {
    "question": "How was Catherine the Great of Russia related to Petar III?",
    "options": [
      "She was his cousin",
      "She was his wife.",
      "She was his daughter",
      "She was his sister"
    ],
    "correctIndex": 1
  },
  {
    "question": "Franz Joseph I reigned as King of Hungary, King of Bohemia and Emperor of Austria.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What King of England had his nephews put into the Tower of London?",
    "options": [
      "Henry VIII",
      "Richard III",
      "William I the Conqueror",
      "Eduard IV"
    ],
    "correctIndex": 1
  },
  {
    "question": "How were Napoleon Bonaparte and Napoleon III related?",
    "options": [
      "They were not related.",
      "Grandfather and grandson",
      "Uncle and nephew",
      "Father and son"
    ],
    "correctIndex": 2
  },
  {
    "question": "This King of the Franks conquered Italy and was crowned Imperator Augustus on 25 December 800.",
    "options": [
      "Wilhelm the Great",
      "Charles the Great",
      "Constantine the Great",
      "Peter the Great"
    ],
    "correctIndex": 1
  },
  {
    "question": "What English Queen was daughter of Henry VIII and Anne Boleyn?",
    "options": [
      "Catherine II",
      "Louse Elizabeth",
      "Elizabeth I",
      "Anne"
    ],
    "correctIndex": 2
  },
  {
    "question": "What monarch transformed the Tsardom of Russia into the Russian Empire?",
    "options": [
      "Alexander I (The Blessed)",
      "Peter I the Great",
      "Paul I",
      "Constantine I"
    ],
    "correctIndex": 1
  },
  {
    "question": "What dynasty ruled France before the Capetian dynasty?",
    "options": [
      "Hapsburg dynasty",
      "Carolingian dynasty",
      "Merovingian dynasty",
      "Bourbon dynasty"
    ],
    "correctIndex": 1
  },
  {
    "question": "Frederick I Barbarossa, who was crowned Holy Roman Emperor in 1155, belonged to what royal dynasty?",
    "options": [
      "Austrian Habsburgs",
      "Hohenstaufen",
      "Spanish Habsburg",
      "German Habsburgs"
    ],
    "correctIndex": 1
  },
  {
    "question": "What King of France was popularly known as the Sun King?",
    "options": [
      "Louis XVI",
      "Louis X",
      "Louis XV",
      "Louis XIV"
    ],
    "correctIndex": 3
  },
  {
    "question": "What Civil War battle ended on July 3, 1863 with a Union victory?",
    "options": [
      "Gettysburg",
      "Appomattox Courthouse",
      "Antietam",
      "Second Bull Run"
    ],
    "correctIndex": 0
  },
  {
    "question": "What General was named Commander of the UN forces in Korea on July 8, 1950?",
    "options": [
      "Douglas MacArthur",
      "Matthew Ridgway",
      "Omar Bradley",
      "George Patton"
    ],
    "correctIndex": 0
  },
  {
    "question": "What song hit # 1 on the Billboard Charts on July 9, 1955?",
    "options": [
      "Rock around the Clock",
      "The Twist",
      "Johnny B Good",
      "Teddy Bear"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was sworn in as the 13th President on July 10, 1850 following the death of President Zachary Taylor?",
    "options": [
      "Franklin Pierce",
      "James Buchanan",
      "Millard Fillmore",
      "James Polk"
    ],
    "correctIndex": 2
  },
  {
    "question": "On July 11, 1804, V.P. Aaron Burr fatally wounded this famous founding father in a duel.",
    "options": [
      "Alexander Hamilton",
      "Thomas Jefferson",
      "John Hancock",
      "James Madison"
    ],
    "correctIndex": 0
  },
  {
    "question": "What city opened the first Worlds Fair in the United States on July 14, 1853?",
    "options": [
      "St. Louis",
      "Chicago",
      "New York City",
      "Boston"
    ],
    "correctIndex": 2
  },
  {
    "question": "What famous department chain closed it last stores on July 17, 1997?",
    "options": [
      "Woolworths",
      "Burdines",
      "Montgomery Ward",
      "Eckerds"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was shot and killed by federal agents on July 22, 1934?",
    "options": [
      "Al Capone",
      "Bonnie Parker",
      "John Dillinger",
      "Bugsy Malone"
    ],
    "correctIndex": 2
  },
  {
    "question": "What federal institution was founded on July 26, 1908?",
    "options": [
      "NSA",
      "CIA",
      "FBI",
      "OSS"
    ],
    "correctIndex": 2
  },
  {
    "question": "What President signed legislation on July 29, 1958 to create NASA?",
    "options": [
      "Truman",
      "Eisenhower",
      "Kennedy",
      "Nixon"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the original meaning of the term samurai in Japanese language?",
    "options": [
      "Those who are sons of the warrior dragon",
      "Those who listen to the wind whispering in the trees",
      "Those who follow the way of the sword",
      "Those who serve in close attendance to nobility"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the term seppuku, connected with the culture of Japanese samurai, refer to?",
    "options": [
      "Suicide",
      "A vow",
      "Silence kept before a battle",
      "A weapon"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the slightly curved single-edged sword used by Japanese samurai warriors?",
    "options": [
      "Yari",
      "Katana",
      "Yumi",
      "Teppo"
    ],
    "correctIndex": 1
  },
  {
    "question": "What Eastern philosophy has greatly influenced the Japanese samurai culture?",
    "options": [
      "Jainism",
      "Sufism",
      "Zoroastrianism",
      "Buddhism"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who would arrange the marriage of the Japanese samurai by tradition?",
    "options": [
      "His parents",
      "The brides parents",
      "Someone with the same or higher rank",
      "He would do it himself"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the term for the person who was usually the master of the Japanese samurai?",
    "options": [
      "Daisho",
      "Daimyo",
      "Wakizashi",
      "Jigai"
    ],
    "correctIndex": 1
  },
  {
    "question": "Bushido is the philosophy and code of conduct of the Japanese samurai. What does the word Bushido literally mean?",
    "options": [
      "Way of the heart",
      "Way of the warrior",
      "Way of the sword",
      "Way of honor"
    ],
    "correctIndex": 1
  },
  {
    "question": "What English sailor is believed to be the first Caucasian to receive the honor of becoming a samurai?",
    "options": [
      "Francis Drake",
      "John Smith",
      "John Franklin",
      "William Adams"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what century is James Clavells samurai novel Shogun set?",
    "options": [
      "Tenth century",
      "Fifteenth century",
      "Seventeenth century",
      "Twelfth century"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Japanese samurai warriors were mostly illiterate in the past.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "When was the Battle of Antietam fought?",
    "options": [
      "August, 1862",
      "October, 1862",
      "September, 1862",
      "December, 1862"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the Union commander at the Battle of Antietam?",
    "options": [
      "Phil Kearney",
      "Israel Richardson",
      "George Thomas",
      "George McClellan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which Union general, wounded in the foot at Antietam, would, within six months time, be the commander of the Army of the Potomac?",
    "options": [
      "John Sedgwick",
      "Ambrose Burnside",
      "Joe Hooker",
      "Samuel Crawford"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many soldiers - Union and Confederate - were casualties at Antietam?",
    "options": [
      "20,000",
      "25,000",
      "23,000",
      "17,000"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these landmarks would NOT be found on the Antietam battlefield?",
    "options": [
      "Sherfys Peach Orchard",
      "West Woods",
      "East Woods",
      "Millers Cornfield"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the Confederate commander at the Battle of Antietam?",
    "options": [
      "Stonewall Jackson",
      "George B. McClellan",
      "James Longstreet",
      "Robert E. Lee"
    ],
    "correctIndex": 3
  },
  {
    "question": "How long did the Battle of Antietam last?",
    "options": [
      "7 days",
      "5 days",
      "1 day",
      "3 days"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who served as President of the Confederate States of America at the time of the Battle of Antietam?",
    "options": [
      "Jefferson Davis",
      "George Davis",
      "Alexander Stephens",
      "George W. Randolph"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which battle preceded the Battle of Antietam?",
    "options": [
      "Battle of Chickamauga",
      "The Second Battle of Bull Run",
      "The Battle of Chancellorsville",
      "The Battle of Gettysburg"
    ],
    "correctIndex": 1
  },
  {
    "question": "During what century is the King Arthur believed to have lived?",
    "options": [
      "10th century AD",
      "6th century AD",
      "8th century AD",
      "4th century AD"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Byzantine period began in this century which also saw the  Valerians massacre of Christians.",
    "options": [
      "2nd century BC",
      "6th century AD",
      "3rd century AD",
      "3rd century BC"
    ],
    "correctIndex": 2
  },
  {
    "question": "Nostradamus, Martin Luther and Elizabeth I of England lived during what century?",
    "options": [
      "13th century AD",
      "14th century AD",
      "18th century AD",
      "16th century AD"
    ],
    "correctIndex": 3
  },
  {
    "question": "The first novel ever is believed to have been written in this century by the Japanese Lady Murasaki Shikibu.",
    "options": [
      "5th century AD",
      "2nd century BC",
      "3rd century AD",
      "11th century AD"
    ],
    "correctIndex": 3
  },
  {
    "question": "Julius Caesar, Marcus Antonius, and Cleopatra VII of Egypt all lived in this century.",
    "options": [
      "1st century AD",
      "1st century BC",
      "3rd century AD",
      "3rd century BC"
    ],
    "correctIndex": 1
  },
  {
    "question": "What century marked the fall of the Western Roman Empire?",
    "options": [
      "9th century AD",
      "5th century AD",
      "3rd century AD",
      "7th century AD"
    ],
    "correctIndex": 1
  },
  {
    "question": "During this century, the condom, the land mine and the sandpaper were invented.",
    "options": [
      "17th century AD",
      "15th century AD",
      "3rd century AD",
      "13th century AD"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what century were the fountain pen, shaving soap and street lamps invented?",
    "options": [
      "12th century AD",
      "14th century AD",
      "9th century AD",
      "16th century AD"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what century did the Black Death kill about one third of the European population?",
    "options": [
      "4th century AD",
      "14th century AD",
      "8th century AD",
      "10th century AD"
    ],
    "correctIndex": 1
  },
  {
    "question": "In this century, the decline of the Classical Maya civilization began, and Charlemagne was crowned the first Holy Roman Emperor by Pope Leo III.",
    "options": [
      "13th century AD",
      "11th century AD",
      "8th century AD",
      "16th century AD"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the term Mesozoic mean?",
    "options": [
      "Ancient life",
      "Middle life",
      "Age of ancient reptiles",
      "Recent life"
    ],
    "correctIndex": 1
  },
  {
    "question": "The base of the Mesozoic is established by what major event in the history of life on Earth?",
    "options": [
      "A mass extinction 251 million years ago",
      "The formation of a super-continent",
      "An increase in biodiversity",
      "None of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "Oxygen levels during the Mesozoic were lower than todays levels.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What super-continent began to rift apart during the Mesozoic era?",
    "options": [
      "Pangaea",
      "Euramerica",
      "Rodinia",
      "None of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "What marine reptiles evolved during the Triassic period and thrived during much of the Mesozoic era?",
    "options": [
      "Ichthyosaurs",
      "Pliosaurs",
      "Plesiosaurs",
      "Dinosaurs"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ichthyosaurs, plesiosaurs, pliosaurs, moasaurs, are pterosaurs are dinosaurs.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following describes the climate of the Triassic period?",
    "options": [
      "Temperate",
      "Tropical",
      "None of these",
      "Arid"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following was a large inland sea that covered much of central North America during the Late Cretaceous period?",
    "options": [
      "Atlantic Ocean",
      "Iapetus Ocean",
      "Western Interior Seaway",
      "Hudson Seaway"
    ],
    "correctIndex": 2
  },
  {
    "question": "What event signalled the end of the Mesozoic era?",
    "options": [
      "The evolution of humans",
      "The evolution of flowering plants",
      "None of these",
      "A large mass extinction at the end of the Cretaceous"
    ],
    "correctIndex": 3
  },
  {
    "question": "Dinosaurs first evolved during the middle Triassic period approximately how many years ago?",
    "options": [
      "248 million years ago",
      "190 million years ago",
      "225 million years ago",
      "251 million years ago"
    ],
    "correctIndex": 2
  },
  {
    "question": "Several hundred specimens of this species of dinosaur were discovered at Ghost Ranch.",
    "options": [
      "Coelophysis bauri",
      "Triceratops horridus",
      "Eoraptor lunensis",
      "Tyrannosaurus rex"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dinosaurs once existed on every continent except Antarctica.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the early reptile creatures that evolved during the late Permian period and eventually gave rise to the dinosaurs and other creatures during the Mesozoic.",
    "options": [
      "Thecodontians",
      "Crocodilians",
      "None of these",
      "Dinosauria"
    ],
    "correctIndex": 0
  },
  {
    "question": "Did all dinosaurs become extinct at the end of the Cretaceous period 65 million years ago?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "An incomplete skeleton of this dinosaur was discovered in 1900.",
    "options": [
      "Oviraptor",
      "Tyrannosaurus",
      "Albertosaurus",
      "Dynamosaurus"
    ],
    "correctIndex": 1
  },
  {
    "question": "Tyrannosaurus is more closely related to smaller predatory dinosaurs such as Velociraptor than to the more massive carnosaurs such as Allosaurus.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What genus of dinosaur contains what could be the largest dinosaur ever?",
    "options": [
      "None of these",
      "Apatosaurus",
      "Brachiosaurus",
      "Amphicoelias"
    ],
    "correctIndex": 3
  },
  {
    "question": "Did dinosaurs become extinct due to a large asteroid impact?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does the term Cenozoic mean?",
    "options": [
      "Mammalian life",
      "Ancient life",
      "Recent life",
      "Middle life"
    ],
    "correctIndex": 2
  },
  {
    "question": "How many epochs is the Cenozoic era divided into?",
    "options": [
      "7",
      "2",
      "None of these",
      "6"
    ],
    "correctIndex": 0
  },
  {
    "question": "This subcontinent collided with Eurasia 55 million years ago.",
    "options": [
      "Greenland",
      "Indian subcontinent",
      "None of these",
      "Middle-eastern subcontinent"
    ],
    "correctIndex": 1
  },
  {
    "question": "Grass did not evolve during the Cenozoic era.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Horses evolved in North America during the Cenozoic era but became extinct there 10,000 years ago.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first true Homo sapiens (human) appeared in Africa about how many years ago?",
    "options": [
      "5 million years ago",
      "12,000 years ago",
      "250,000 years ago",
      "1 million years ago"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Messinian salinity crisis occurred when the Mediterranean sea evaporated completely during the Pliocene epoch.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "All recorded historical events occurred during this epoch.",
    "options": [
      "Pliocene",
      "Miocene",
      "Holocene",
      "Pleistocene"
    ],
    "correctIndex": 2
  },
  {
    "question": "What event signalled the end of the Cenozoic?",
    "options": [
      "None of these",
      "The evolution of humans",
      "The Cenozoic has not ended.",
      "A large mass extinction"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the term Precambrian mean?",
    "options": [
      "Middle life",
      "Before-Cambrian",
      "Recent life",
      "Ancient life"
    ],
    "correctIndex": 1
  },
  {
    "question": "When did the earth form?",
    "options": [
      "12 billion years ago",
      "3.8 billion years ago",
      "4.5 billion years ago",
      "250 million years ago"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where do the oldest rocks on Earth come from?",
    "options": [
      "Narryer Gneiss Terrane",
      "None of these",
      "The Nuvvuagittuq greenstone belt",
      "Acasta Gneiss"
    ],
    "correctIndex": 2
  },
  {
    "question": "Approximately what age are the oldest known fossils?",
    "options": [
      "4.5 billion years old",
      "2.5 billion years old",
      "540 million years old",
      "3.8 billion years old"
    ],
    "correctIndex": 3
  },
  {
    "question": "About 2.7 billion years ago Stromatolites were widespread in the Precambrian seas and still exist in hypersaline areas such as Shark Bay, Australia.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The appearance of free oxygen in the atmosphere caused a mass extinction of anaerobic organisms.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Multicellular organisms evolved during what period of the Mesoproterozoic era?",
    "options": [
      "Calymmian",
      "Ectasian",
      "Stenian",
      "Ediacaran"
    ],
    "correctIndex": 1
  },
  {
    "question": "Animals did not evolve during the Precambrian.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What event signalled the end of the Precambrian?",
    "options": [
      "None of these",
      "The evolution of organisms with hard shells",
      "The Precambrian has not ended",
      "A large mass extinction that occurred 542 million years ago"
    ],
    "correctIndex": 1
  },
  {
    "question": "What did Benjamin Franklin do in 1752?",
    "options": [
      "Fell and broke his hip",
      "Invented exercise / dance",
      "Stopped publishing Poor Richards Almanac",
      "Proved lightning is electricity"
    ],
    "correctIndex": 3
  },
  {
    "question": "When did Francis Drake enter San Francisco bay and what country did he claim it for?",
    "options": [
      "1579 - Britain",
      "1536 - France",
      "1603 - Portugal",
      "1610 - Spain"
    ],
    "correctIndex": 0
  },
  {
    "question": "When did Boston become a settlement and who led it?",
    "options": [
      "1502 - William James",
      "1630 - John Winthrop",
      "1590 - Charles H. Connelly III",
      "1610 - James Kennedy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Harvard College was founded in what year?",
    "options": [
      "1790",
      "1802",
      "1636",
      "1785"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one happened to the U.S. in 1791?",
    "options": [
      "War started with Canada",
      "Bill of Rights goes into effect",
      "1st recorded UFO sighting by an American",
      "Benedict Arnold found guilty of being a traitor"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one happened to the U.S. in 1774?",
    "options": [
      "Noah Webster publishes his American dictionary",
      "Rhode Island abolished slavery",
      "The Boston Massacre",
      "The Bill of Rights goes into effect"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one happened to the U.S. in 1796?",
    "options": [
      "Nat Turner led slave rebellion in Virginia",
      "Lewis and Clark begin westward survey",
      "George Carlin was born",
      "George Washington gives his farewell address"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Erie Canal is a canal in New York State, United States, that runs from the Hudson River to Lake Erie, connecting the Great Lakes with the Atlantic Ocean.  The entire canal was opened in which year?",
    "options": [
      "1904",
      "1800",
      "1825",
      "1862"
    ],
    "correctIndex": 2
  },
  {
    "question": "Was there a Black Hawk War?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "When was the first U.S. adhesive postage stamp sold?",
    "options": [
      "1747",
      "1690",
      "1847",
      "1790"
    ],
    "correctIndex": 2
  },
  {
    "question": "The lefty, Henry Ford, founded the Ford Motor Company. Finish this quote and find out how he defined quality.",
    "options": [
      "...everyone is looking.",
      "...you want to.",
      "...no one is looking.",
      "...you are told to."
    ],
    "correctIndex": 2
  },
  {
    "question": "On what album released in 1986 would I find the following lyrics:",
    "options": [
      "True Stories - Talking Heads",
      "Control - Janet Jackson",
      "True Colors - Cyndi Lauper",
      "Raising Hell - Run DMC"
    ],
    "correctIndex": 1
  },
  {
    "question": "This fashionable head accessory was hip from the very beginning of the 80s until their end.",
    "options": [
      "Hairpins",
      "Artificial braids",
      "Headband",
      "Artificial comb"
    ],
    "correctIndex": 2
  },
  {
    "question": "This style dominated both music and fashion in the late 70s and early 80s. The Sex Pistols and The Exploited were just some of bands that had great influence on mens and womens look.",
    "options": [
      "Trance",
      "Reggae",
      "House",
      "Punk"
    ],
    "correctIndex": 3
  },
  {
    "question": "As a popular style in the beginning of the 80s it became somewhat politically bound, these started appearing as common clothing adornments.",
    "options": [
      "Fringes",
      "Artificial stains",
      "Artificial patches",
      "Political and social slogans"
    ],
    "correctIndex": 3
  },
  {
    "question": "1983 was the year when this style of clothing finally went out of style.",
    "options": [
      "Punk",
      "Disco",
      "Reggae",
      "Grunge"
    ],
    "correctIndex": 1
  },
  {
    "question": "This famous perfume was released in 1985. Its fragrance is made up of coriander, plum, anise, rosewood, rose, tuberose, honey, cinnamon, orange blossom, blackcurrant and red currant with a base of ambergris, laudanum and opoponax.",
    "options": [
      "Coco",
      "Obsession",
      "Charlie",
      "Poison"
    ],
    "correctIndex": 3
  },
  {
    "question": "The style that became popular after the mid 80s includes ragged T-shirts, acid washed and torn jeans, cheap shirts, rubber bracelets, lots of hairspray and neon earrings.",
    "options": [
      "House",
      "Punk",
      "Disco",
      "Grunge"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1987 Nike introduced these trainers that enable the wearer to jump higher.",
    "options": [
      "Cortez",
      "Max 95",
      "BW",
      "Air"
    ],
    "correctIndex": 3
  },
  {
    "question": "This type of pants became the craze in the mid 80s. They had zippered patch pockets and zippered ankles.",
    "options": [
      "Boxers",
      "Parachute pants",
      "Blue jeans",
      "Charlestone"
    ],
    "correctIndex": 1
  },
  {
    "question": "These trinkets were often sold in a pack of 10-15. They were made of lightweight metal and came in gold, silver or color hues.",
    "options": [
      "Necklaces",
      "Bangle bracelets",
      "Plastic earrings",
      "Neon rings"
    ],
    "correctIndex": 1
  },
  {
    "question": "In order to be trendy in the 80s you should do this with your hair.",
    "options": [
      "Bleach it",
      "Cut it really short",
      "Straighten it",
      "Put it in a bun"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which nickname did Thomas Jonathan Jackson earn after managing to hold off the Union forces back at Henry House Hill?",
    "options": [
      "Tom Fool",
      "Stonewall",
      "Old Blue Light",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "General Grant said that the final charge at Cold Harbor was the only action he regretted taking during the war.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Civil War produced a number of technical innovations. One of the following was not used in this war.",
    "options": [
      "Mines",
      "Tanks",
      "Submarine",
      "Observation Balloons"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Union general earned the nickname The Rock of Chickamauga.",
    "options": [
      "Smith",
      "Thomas",
      "Sherman",
      "Rosecrans"
    ],
    "correctIndex": 1
  },
  {
    "question": "Did the opposing armies often fraternize and call each other Johnny Reb and Billy Yank?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dixie was composed in 1859 by this man.",
    "options": [
      "Daniel Decatur Emmett",
      "Jeff Davis",
      "Joel Chandler Harris",
      "Scott Joplin"
    ],
    "correctIndex": 0
  },
  {
    "question": "He was in command at the critical point in the Battle of Gettysburg?",
    "options": [
      "John Reynolds",
      "Joshua Chamberlain",
      "Winfield Scott Hancock",
      "Dan Sickles"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what state did pope John Paul II and president Reagan meet in May, 1984?",
    "options": [
      "Hawaii",
      "California",
      "Connecticut",
      "Alaska"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the Ohio senator who made an unsuccessful bid for presidency in 1984.",
    "options": [
      "Reubin OD. Askew",
      "John H. Glenn Jr.",
      "Alan M. Cranston",
      "George S. McGovern"
    ],
    "correctIndex": 1
  },
  {
    "question": "What company unveiled the unsuccessful PCjr?",
    "options": [
      "Tandy",
      "Apple",
      "Commodore",
      "International Business Machines (IBM)"
    ],
    "correctIndex": 3
  },
  {
    "question": "What US presidents centennial birthday was celebrated in 1984?",
    "options": [
      "Harry S Truman (1945-1953)",
      "Herbert Hoover (1929-1933)",
      "Franklin D. Roosevelt (1933-1945)",
      "Dwight D. Eisenhower (1953-1961)"
    ],
    "correctIndex": 0
  },
  {
    "question": "What countrys elections pit Jose Napoleon Duarte against Roberto DAubuisson in the first freely elected presidency of more than 50 years.",
    "options": [
      "El Salvador",
      "Panama",
      "Guatemala",
      "Ecquador"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was the first man to ride the space shuttle into orbit twice?",
    "options": [
      "Byron Lichtenberg",
      "Bob Crippen",
      "John Glen",
      "John Young"
    ],
    "correctIndex": 3
  },
  {
    "question": "Whose visit to South Korea in May of 1984 promoted the tightest security in that nations history?",
    "options": [
      "Ronald Reagan",
      "Mikhail Gorbachev",
      "Fidel Castro",
      "Pope John Paul II"
    ],
    "correctIndex": 3
  },
  {
    "question": "What brand of sweetener did G. D. Searle  Co. put on the market in 1983?",
    "options": [
      "Equal",
      "Sweet N Low",
      "Splenda",
      "NutraSweet"
    ],
    "correctIndex": 3
  },
  {
    "question": "In World War II, the Axis and the Allies were the two main rival powers. Which of these countries was not a member of the Axis?",
    "options": [
      "Hungary",
      "Italy",
      "Japan",
      "Greece"
    ],
    "correctIndex": 3
  },
  {
    "question": "Adolf Hitler was the leader of Nazi Germany and the head of which German party?",
    "options": [
      "National Christian-Democratic party",
      "National German Communist party",
      "National Socialist German Workers party",
      "Conservative Peoples party"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the aim of The Molotov-Ribbentrop pact, signed on 23 August 1939 between Germany and the Soviet Union?",
    "options": [
      "Mutual economic support",
      "Division of the spheres of interest",
      "A united attack against Great Britain",
      "Creating a Nazi-Soviet Federation"
    ],
    "correctIndex": 1
  },
  {
    "question": "Until which event did the US remain neutral in the Second World War?",
    "options": [
      "Operation Barbarossa",
      "The Pearl Harbor attack",
      "The Siege of Leningrad",
      "The battle of Kursk"
    ],
    "correctIndex": 1
  },
  {
    "question": "Arbeit macht frei was a popular German slogan during World War II, placed mainly on the entrances of which of these?",
    "options": [
      "German concentration camps",
      "German factories",
      "German schools",
      "German field hospitals"
    ],
    "correctIndex": 0
  },
  {
    "question": "This significant battle on the WW II  Eastern front is largely regarded as the largest armed conflict of all time.",
    "options": [
      "The battle of Leningrad",
      "The battle of Kursk",
      "The battle of Sevastopol",
      "The battle of Moscow"
    ],
    "correctIndex": 1
  },
  {
    "question": "What happened on D-day, 6th June,1944?",
    "options": [
      "Victory over Japan was announced.",
      "Operation Overlord started.",
      "Nazi Germany was declared defeated.",
      "The end of World War II was announced."
    ],
    "correctIndex": 1
  },
  {
    "question": "What 1945 conference considered the final plans for the defeat of Germany and postwar Europe?",
    "options": [
      "Yalta Conference",
      "Tehran Conference",
      "Dumburton Oaks Conference",
      "Potsdam Conference"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where did the official Japanese surrender on 2nd September 1945 take place?",
    "options": [
      "Berlin",
      "Potsdam",
      "USS Missouri",
      "Washington, DC"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which organization did the Allies create in 1945 in order to maintain peace after World War II?",
    "options": [
      "The United Nations",
      "The European Union",
      "The League of Nations",
      "The North-Atlantic Treaty Organisation (NATO)"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who are the two ancient Greek architects who designed the Parthenon, a temple regarded as one of the worlds greatest cultural monuments.",
    "options": [
      "Eugenius and Arcadius",
      "Theodosius and Delos",
      "Iktinos and Kallikrates",
      "Theotokos and Pisisitratus"
    ],
    "correctIndex": 2
  },
  {
    "question": "What ancient Greek vessel was used to mix wine and water?",
    "options": [
      "krater",
      "hydria",
      "amphorae",
      "kylix"
    ],
    "correctIndex": 0
  },
  {
    "question": "This ancient Greek construction, regarded as one the Seven Wonders of the World, was carved by the famed classical sculptor Phidias.",
    "options": [
      "The Statue of Zeus at Olympia",
      "Hagia Sophia",
      "The Mausoleum of Maussollos at Halicarnassus",
      "The Lighthouse of Alexandria"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the name of the ancient Greek wrestling school, which was later used  for delivering lectures and conducting intellectual conversations?",
    "options": [
      "bouleuterion",
      "corycelum",
      "gymnasium",
      "palaestra"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the ancient Greek society, these women were high-class entertainers, much like the Japanese geisha.",
    "options": [
      "pallakae",
      "gynaekes",
      "porne",
      "hetaerae"
    ],
    "correctIndex": 3
  },
  {
    "question": "This ancient Greek, despite having a speech impediment, was one of the greatest orators in his time.",
    "options": [
      "Aristonikos",
      "Didymos",
      "Aristarchos",
      "Demosthenes"
    ],
    "correctIndex": 3
  },
  {
    "question": "This ancient Greek wrote The Histories, a document considered the first work of history in Western literature.",
    "options": [
      "Herodotus",
      "Diodorus",
      "Xenophon",
      "Thucydides"
    ],
    "correctIndex": 0
  },
  {
    "question": "This ancient Greek philosopher, a teacher of  Aristotle, was the founder of the Academy in Athens.",
    "options": [
      "Parmenides",
      "Democritus",
      "Plato",
      "Socrates"
    ],
    "correctIndex": 2
  },
  {
    "question": "This ancient Greek playwright was the earliest of the three classical Greek tragedians, the other two being Sophocles and Euripides.",
    "options": [
      "Phrynicus",
      "Aeschylus",
      "Choerilus",
      "Aristeas"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which structure served as a market place in an acnient Greek polis or city-state?",
    "options": [
      "miki",
      "kottabos",
      "agora",
      "agoranomos"
    ],
    "correctIndex": 2
  },
  {
    "question": "The 1998 film, Theres Something About Mary, helped make this model turned actress one of the highest paid actresses in Hollywood. Who said Is that ...is that hair gel?",
    "options": [
      "Hilary Swank",
      "Drew Barrymore",
      "Cameron Diaz",
      "Reese Witherspoon"
    ],
    "correctIndex": 2
  },
  {
    "question": "This world famous haute couture designer moved to Miami when he was selected as the costume designer for Miami Vice. What designer was gunned down outside his house by spree killer Andrew Cunanan?",
    "options": [
      "Givenchy",
      "Versace",
      "Ferre",
      "Gucci"
    ],
    "correctIndex": 1
  },
  {
    "question": "On June 17, 1994 actor and football legend O. J. Simpson, instead of turning himself into the authorities to be charged for the murder of his wife Nicole and her friend Ron Goldman, led the police on a slow speed chase on Interstate 405. O. J. Simpson was a passenger in the white Ford Bronco. Who drove the white Bronco?",
    "options": [
      "Robert Kardashian",
      "Robert Shapiro",
      "John McKay",
      "Al Cowlings"
    ],
    "correctIndex": 3
  },
  {
    "question": "Always a bridesmaid and never a bride. No more!  What daytime soap actress won an Emmy",
    "options": [
      "Melody Thomas Scott",
      "Jeanne Cooper",
      "Eileen Fulton",
      "Susan Lucci"
    ],
    "correctIndex": 3
  },
  {
    "question": "Many in Hollywood were nervous when this lady was arraigned on charges of pandering and tax evasion on August 9, 1993. Who was known as the Hollywood Madam or Madam to the Stars?",
    "options": [
      "Sydney Biddle Barrows",
      "Heidi Fleiss",
      "Polly Adler",
      "Mona Stangley"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these movies won all five of the top categories: Best Picture, Best Actor, Best Actress, Best Director and Best Screenplay?",
    "options": [
      "The English Patient",
      "Silence of the Lambs",
      "Forrest Gump",
      "Schindlers List"
    ],
    "correctIndex": 1
  },
  {
    "question": "May 10, 1996 is considered the single deadliest day in the history of Mount Everest. Eight people lost their lives, including famed Everest mountain guides Rob Hall and Scott Fischer. Outside Magazine had contracted a writer to be a part of Rob Halls accent of Mount Everest. What writer turned his experience on Mount Everest into the non-fiction bestseller Into Thin Air?",
    "options": [
      "Jon Krakauer",
      "Beak Weathers",
      "Anatoli Boukreev",
      "Sebastian Junger"
    ],
    "correctIndex": 0
  },
  {
    "question": "This invention by Karl Benz in 1886 revolutionized the world of transportation and soon became the main means of transport globally.",
    "options": [
      "Train",
      "Ship",
      "Automobile",
      "Airplane"
    ],
    "correctIndex": 2
  },
  {
    "question": "This invention was first used in 1969 at UCLA as a means of communication between engineers and scientists associated with academics or government. It was not available for public use until the 1990\u00e2\u20ac\u2122s.",
    "options": [
      "E-mails",
      "The Telephone",
      "The Internet",
      "Two-Way Radio"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1908, this city became the first in the United States to institute chlorination of its water. Prior to this the death rate due to water born diseases, such as typhoid fever and cholera, were extremely high.",
    "options": [
      "Chicago, Illinois",
      "New York City, New York",
      "Boston, Massachusetts",
      "Jersey City, New Jersey"
    ],
    "correctIndex": 3
  },
  {
    "question": "When did telephone companies first begin establishing trial networks, that use fibre instead of copper cables to carry live telephone traffic?",
    "options": [
      "in 1997",
      "in 1982",
      "in 1972",
      "in 1977"
    ],
    "correctIndex": 3
  },
  {
    "question": "The invention of the internal combustion engine greatly increased the demand for which natural resource?",
    "options": [
      "Natural gas",
      "Water",
      "Coal",
      "Petroleum"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1955, Borax III became the first nuclear power plant to utilize nuclear fission to supply an entire town with electricity. Which town was that?",
    "options": [
      "Avila Beach, California",
      "Owego, New York",
      "Arco, Idaho",
      "Hahnville, Louisiana"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first use of air conditioning for personnel comfort was in 1902, in which New York City building?",
    "options": [
      "Metropolitan Life Tower",
      "Empire State Building",
      "Woolworth Building",
      "New York Stock Exchange"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1895, this German physicist invented the use of electromagnetic radiation to take images of bones and organs inside the human body, which later led to the invention of the X-Ray Machine.",
    "options": [
      "Paul Lauterbur",
      "Peter Mansfield",
      "Wilhelm Conrad R\u00c3\u00b6ntgen",
      "Godfrey Newbold Hounsfield"
    ],
    "correctIndex": 2
  },
  {
    "question": "Earl Hindman, who passed away in 2003, was the man behind the fence in the American sitcom Home Improvement.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which Academy Award winning American actor who died in 2003 played Ed Norton on The Honeymooners?",
    "options": [
      "Paul Lynde",
      "Jackie Gleason",
      "Art Carney",
      "Rodney Dangerfield"
    ],
    "correctIndex": 2
  },
  {
    "question": "This flamboyantly-dressed announcer on The Price Is Right died on October 27th, 2003 in Los Angeles.",
    "options": [
      "Gene Rayburn",
      "Randy Miller",
      "Gene Olson",
      "Rod Roddy"
    ],
    "correctIndex": 3
  },
  {
    "question": "This western character actor was in the role of Deputy Jake in Support Your Local Sheriff with James Garner. Before his death on 20 October 2003, he often played the villain in westerns and openly said it was because of his lazy eye.",
    "options": [
      "Boots Randolph",
      "Jack Elam",
      "Pat Hingle",
      "Dan Haggerty"
    ],
    "correctIndex": 1
  },
  {
    "question": "Actor Lee Marvin who starred in the Death Wish movies succumbed to cancer in 2003.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This sassy matronly housekeeper on Give Me A Break! was 54 when she died in 2003.",
    "options": [
      "Bev Carter",
      "Barb Streisand",
      "Bette Midler",
      "Nell Carter"
    ],
    "correctIndex": 3
  },
  {
    "question": "Tin soldiers and Nixon coming",
    "options": [
      "Ohio State University",
      "Kent State University",
      "Boston College",
      "University of California at Berkley"
    ],
    "correctIndex": 1
  },
  {
    "question": "The most famous battle of the Hundred Years War between England and France resulted in a massive French army being defeated by a much smaller English army, led by King Henry V. Where did this battle take place?",
    "options": [
      "Harfleur",
      "Agincourt",
      "The Somme",
      "Calais"
    ],
    "correctIndex": 1
  },
  {
    "question": "What battle of 1781 resulted in a decisive victory of the American army against Great Britain and caused the British government to negotiate an end of the American Revolutionary War?",
    "options": [
      "Battle of Yorktown",
      "Battle of Valley Forge",
      "Battle of Bunker Hill",
      "Battle of Saratoga"
    ],
    "correctIndex": 0
  },
  {
    "question": "It began on July 1st, 1916, and is considered by many, the most devastating battle of World War I, resulting in more than one million casualties.",
    "options": [
      "Battle of Ypres",
      "Battle of the Somme",
      "Battle of Verdun",
      "Battle of Galipoli"
    ],
    "correctIndex": 1
  },
  {
    "question": "What city-state was the primary rival of Athens during the Peloponnesian war of 431 BC?",
    "options": [
      "Byzantium",
      "Sumer",
      "Sparta",
      "Babylon"
    ],
    "correctIndex": 2
  },
  {
    "question": "During the Wars of Scottish Independence, this 1314 battle resulted in a decisive Scottish victory over England.",
    "options": [
      "Battle of Falkirk",
      "Battle of Culloden",
      "Battle of Bannockburn",
      "Battle of Inverness"
    ],
    "correctIndex": 2
  },
  {
    "question": "The First Indochina War came to a dramatic and unexpected end when over 7,000 French soldiers were killed at which small Vietnamese village?",
    "options": [
      "Dien Bien Phu",
      "Hanoi",
      "Hue",
      "Khe Sanh"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which battle of the Korean War in started on September 15, 1950 when United States marines launched a massive attack on a South Korean port?",
    "options": [
      "Battle of Hungnam",
      "Battle of Seoul",
      "Battle of Inchon",
      "Battle of Pusan"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following is not associated with the Battle of Gettysburg, the bloodiest battle of the American Civil War?",
    "options": [
      "Picketts Charge",
      "Cemetery Ridge",
      "Bloody Lane",
      "Little Round Top"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which countries were Israels enemies during the 1967 Arab-Israeli War, also known as the Six-Day War?",
    "options": [
      "Turkey, Jordan, Oman",
      "Syria, Jordan, Iraq",
      "Egypt, Syria, Turkey",
      "Egypt, Syria, Jordan"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Charge of the Light Brigade, which remained in history as a rather incompetent and unsuccessful cavalry charge, led by Lord Cardigan, occurred during which military conflict?",
    "options": [
      "The Boer War",
      "The Crimean War",
      "The Franco-Prussian War",
      "The Boxer Rebellion"
    ],
    "correctIndex": 1
  },
  {
    "question": "It was just the musical chords of E and F played alternately back and forth but even to this day",
    "options": [
      "Halloween",
      "E.T.",
      "Jaws",
      "Jurassic Park"
    ],
    "correctIndex": 2
  },
  {
    "question": "During Operation Barbarossa, which began on June 22, 1941, the Red Army was found unprepared for a possible attack for what reason?",
    "options": [
      "The aviation units were not dispersed and ready for a battle",
      "All of these",
      "There was a disorganization in the armor units",
      "Stalin didnt believe that the Third Reich was going to attack only two years after signing the Molotov-Ribbentrop Pact"
    ],
    "correctIndex": 1
  },
  {
    "question": "The British colony of Hong Kong was finally defeated by Japanese Forces in December, 1941 on Christmas day. The locals called that day by what name?",
    "options": [
      "Bloody Christmas",
      "None of these",
      "Black Christmas",
      "Sad Christmas"
    ],
    "correctIndex": 2
  },
  {
    "question": "On 18 February 1943, Joseph Goebbels gave a speech, aiming to persuade the Germans not to give up Nazi idealism. The speech was delivered in front of which building, located near Potzdamer Platz?",
    "options": [
      "Brandenburg Gate",
      "Berliner Dom",
      "Berlin Sportpalast",
      "Reichstag Building"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which top Nazi Leader, considered a possible successor of Hitler, chief of the Reich Main Security Office, and Reich governor of Bohemia and Moravia, was killed during Operation Anthropoid?",
    "options": [
      "Martin Bormann",
      "Heinrich Himmler",
      "Reinhard Heydrich",
      "Ernst Kaltenbrunner"
    ],
    "correctIndex": 2
  },
  {
    "question": "Winston Churchill made the following statement about the battle that occurred between October 23 and November 3, 1942: Now this is not the end, it is not even the beginning of the end. But it is, perhaps, the end of the beginning. Name the battle.",
    "options": [
      "First Battle of El Alamein",
      "Attack on Pearl Harbor",
      "Operation Anthropoid",
      "Second Battle of El Alamein"
    ],
    "correctIndex": 3
  },
  {
    "question": "This major battle that the Germans failed during WW II became the largest armored engagement of all time, and included the most costly single day of aerial warfare in history.",
    "options": [
      "The battle in Berlin",
      "Operation Bagration in Belarus",
      "The battle of Kursk",
      "The battle of Normandy"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the name of the bomb dropped over Nagasaki during WW II?",
    "options": [
      "None of these",
      "Fat Man",
      "Small Head",
      "Little Boy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Rosie the Riveter was a character that represented all the women joining the workforce during World War II, when the factories were empty and needed staff. The picture of Rosie could be seen on many posters and stamps all of which had what slogan?",
    "options": [
      "We can do it!",
      "Women can work!",
      "We are strong!",
      "Women support the war effort!"
    ],
    "correctIndex": 0
  },
  {
    "question": "This organization, often referred to as a predecessor of the European Union, was founded after WW II to prevent the outbreak of such conflicts.",
    "options": [
      "European Peace Institute",
      "European Anti War Committee",
      "European Commission",
      "European Coal and Steel Community"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Cold war, which began in 1947 was a consequence of World War II. Who were the leaders of the two superpowers (The USA and the Soviet Union) at the beginning of the Cold War?",
    "options": [
      "Truman and Stalin",
      "Eisenhower and Kruschev",
      "Eisenhower and Stalin",
      "Molotov and Roosevelt"
    ],
    "correctIndex": 0
  },
  {
    "question": "What war began in 1914?",
    "options": [
      "Russo-Japanese war",
      "World War I",
      "World War II",
      "Spanish-American war"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first hot air balloon was created in 1783.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "When was the first rollercoaster built?",
    "options": [
      "1884",
      "1939",
      "1929",
      "1892"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was Time Magazines Person of the Year for 2007?",
    "options": [
      "Al Gore",
      "J. K. Rowling",
      "Vladimir Putin",
      "Hu Jintao"
    ],
    "correctIndex": 2
  },
  {
    "question": "People Magazine named a 2007 Star of the Year. This star is the new face of Versace, plays around with a Grand-Am race car and became the father of two. Who is this Prince Charming?",
    "options": [
      "Johnny Depp",
      "Brad Pitt",
      "Tiger Woods",
      "Patrick Dempsey"
    ],
    "correctIndex": 3
  },
  {
    "question": "What gentleman made the cover of Details Magazine and was ranked # 7 as a Good Father in Details Magazines 50 Most Influential Men Under 45?",
    "options": [
      "Sean Combs",
      "Barack Obama",
      "Brad Pitt",
      "Kevin Federline"
    ],
    "correctIndex": 3
  },
  {
    "question": "What author broke the record for book sales when the last book in her famous series sold 15 million copies in 24 hours?",
    "options": [
      "Dan Brown",
      "Norman Mailer",
      "C. S. Lewis",
      "J. K. Rowling"
    ],
    "correctIndex": 3
  },
  {
    "question": "Time Magazine made a list of The Ten Best Buzzwords of 2007. The #1 Buzzword was a noun meaning an older woman who romantically pursues younger men.  What was Time Magazines # 1 Buzzword in 2007?",
    "options": [
      "Vixen",
      "Fox",
      "Cougar",
      "Badger"
    ],
    "correctIndex": 2
  },
  {
    "question": "The movie No Country for Old Men based on the novel by Cormac McCarthy was on many list of 10 Best Films of the Year and won Best Picture from the National Board of Review and the Critics Choice Awards.  Who directed No Country for Old Men?",
    "options": [
      "The Coen Brothers",
      "Clint Eastwood",
      "Tim Burton",
      "Sean Penn"
    ],
    "correctIndex": 0
  },
  {
    "question": "Together at last! Late Show with David Letterman won the # 1 spot in The 10 Best TV Ads.",
    "options": [
      "Drew Barrymore",
      "Oprah Winfrey",
      "Steve Jobs",
      "Madonna"
    ],
    "correctIndex": 1
  },
  {
    "question": "In college football, 2007 may well be remembered as the year of the upset. On October 13, November 23, 24 and December 1st both the # 1and # 2 teams in the US suffered upsets and the 2007 regular season ended with Pitts shocking  win over West Virginia. But it was the defeat of Michigan, the fifth ranked team in the nation, by a 1-AA team that has been touted by many as the greatest upset in college football history. What team became the first 1-AA team to beat a ranked 1- A team?",
    "options": [
      "Appalachian State University",
      "Montana State",
      "University of Delaware",
      "The Citadel"
    ],
    "correctIndex": 0
  },
  {
    "question": "If you cant do the time, dont commit the crime. Which of the following celebrities spent the LEAST amount of time in jail in 2007?",
    "options": [
      "Nicole Richie",
      "Michelle Rodrigues",
      "Paris Hilton",
      "Lindsay Lohan"
    ],
    "correctIndex": 0
  },
  {
    "question": "The town of Hastings, where the Battle of Hastings took place, is located in which county?",
    "options": [
      "Kent",
      "Surrey",
      "East Sussex",
      "West Sussex"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who conquered England as a result of the Battle of Hastings?",
    "options": [
      "The Normans",
      "The Romans",
      "The Vikings",
      "The Scots"
    ],
    "correctIndex": 0
  },
  {
    "question": "William the Conqueror was crowned King William I in Westminster Abbey, about two months after the Battle of Hastings.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which Anglo-Saxon King of England died at the Battle of Hastings?",
    "options": [
      "Charles II",
      "Charles I",
      "Richard III",
      "Harold II"
    ],
    "correctIndex": 3
  },
  {
    "question": "How many minutes did President Bush remain seated, reading My Pet Goat in a 3rd-grade classroom in Florida, after he was first told  America is under attack on September 11, 2001?",
    "options": [
      "2 minutes",
      "5 Minutes",
      "1 minute",
      "10 minutes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Lawrence Wright, author of The Looming Tower, a new account of Al Qaedas attack on the U.S., reveals that the Afghans fighting alongside bin Laden in the 1980s considered him what?",
    "options": [
      "a religious zealot",
      "a strategic genius",
      "a courageous warrior",
      "useless"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the flight number of the hijacked plane that crashed in rural Pennsylvania on September 11, 2001?",
    "options": [
      "United 175",
      "American 11",
      "American 77",
      "United 93"
    ],
    "correctIndex": 3
  },
  {
    "question": "The events of 9/11 occurred on the Tuesday after Labor Day.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "The CIA knew Al Qaeda operatives met secretly in Malaysia in January 2001, and that later two of them, eventual 9/11 hijackers, entered the U.S. When did the CIA share this with the FBI?",
    "options": [
      "August, 2001",
      "June 2000",
      "January, 2001",
      "February, 2000"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where did an FBI investigator argue futilely with his bosses a month before 9/11, by saying: Im trying to keep someone from taking a plane and crashing into the World Trade Center.?",
    "options": [
      "Riyadh, Saudi Arabia",
      "Washington, DC",
      "Minneapolis",
      "Baghdad, Iraq"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the Arabic term Al Qaeda mean?",
    "options": [
      "the revenge",
      "the base, or foundation",
      "the struggle",
      "justice"
    ],
    "correctIndex": 1
  },
  {
    "question": "U.S. military air defence jets scrambled into action as soon as news arrived that the first hijacked Boeing 727 had hit one of the twin World Trade Center towers on 9/11.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How did former FBI anti-terrorist squad leader John ONeill die on 9/11?",
    "options": [
      "He was attending a meeting in the portion of  the Pentagon that was struck by one of the hijacked planes.",
      "He was in the midst of new duties as head of security at the World Trade Center.",
      "He was helping firemen rescue people trapped on the top floors of the South Tower when it collapsed.",
      "He was a passenger on the plane that crashed in Pennsylvania."
    ],
    "correctIndex": 1
  },
  {
    "question": "The Shuttle consisted of 2.5 million parts, including more than 1,000 plumbing valves, 1,400 circuit breakers and 230 miles of wire. The most complex job of building the Shuttle went to this company in Southern California.  They had to design and assemble the orbiter itself.",
    "options": [
      "Space Systems LORAL",
      "Rockwell International",
      "SAIC",
      "Raytheon Systems"
    ],
    "correctIndex": 1
  },
  {
    "question": "When America grew more entrenched in Vietnam and struggled with racial and economic problems at home, many voters and politicians alike believed the space program should be abandoned altogether.  Some of Richard Nixons closest advisors however, convinced him that the shuttle should be built.  They gave this as an example of how a reusable space vehicle would be used, and Nixon liked it.",
    "options": [
      "The Shuttle would launch nuclear missiles from space",
      "The Shuttle would captire Soviet satellites",
      "The Shuttle would spy on enemies",
      "The Shuttle would help build a space station"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the morning of September 17, 1976 the Shuttle manufacturer treated the world to a glimpse of the future; a test model of the orbiter, one not intended for space flight, rolled out of their Palmdale, CA plant.  What name had the designers given this model?",
    "options": [
      "Enterprise",
      "Millennium Falcon",
      "Discovery",
      "Columbia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Space Shuttles are transported to the launch pad on this slow-moving 6,000,000 pound (approx. 2,725,000 kg) vehicle.  Fully loaded, it moves at a rate of 1 mph.",
    "options": [
      "Big Bertha Transporter",
      "Shuttle Tracked Vehicle",
      "Tracked Shuttle Transporter",
      "Shuttle Crawler Transporter"
    ],
    "correctIndex": 3
  },
  {
    "question": "It takes this long after liftoff, before the orbiter starts circling Earth at 17,500mph (28,000km/h).",
    "options": [
      "19 minutes",
      "3 minutes",
      "8 minutes",
      "50 seconds"
    ],
    "correctIndex": 2
  },
  {
    "question": "This once white and now orange part breaks up, as it falls through the intense heat of the Earths atmosphere.  It is the only expendable part of the Shuttle.",
    "options": [
      "Top O-ring of the fuel tank",
      "External Rocket Booster",
      "External Fuel Tank",
      "Phase 1 Engine"
    ],
    "correctIndex": 2
  },
  {
    "question": "NASA selected this astronaut to command the first Columbia flight.  He was a veteran of two Gemini and two Apollo missions and considered to be NASAs most experienced astronaut at the time.",
    "options": [
      "John Young",
      "Byron Lichtenberg",
      "John Glenn",
      "Bob Crippen"
    ],
    "correctIndex": 0
  },
  {
    "question": "Prior to every Space Shuttle flight, a series of events take place at Floridas Kennedy Space Center.  The Shuttle is rolled out of its processing hanger on a 96-wheel transporter and carried to this 525 ft. tall building, originally built to assemble Saturn V rockets.",
    "options": [
      "Modules Integration Facility (MIF)",
      "Final Inspection Room (FIP)",
      "Themal Tile Processing Plant (TTPP)",
      "Vehicle Asembly Building (VAB)"
    ],
    "correctIndex": 3
  },
  {
    "question": "On Columbias first mission,  the crew noticed something very disturbing after opening the 60 ft. long payload bay doors.",
    "options": [
      "One of the radiators attached to the doors was loose",
      "The doors would not close back",
      "The left door slightly bent",
      "Thermal tiles were missing"
    ],
    "correctIndex": 3
  },
  {
    "question": "January 16, 2003.  The crew of Americas 113th space shuttle mission exit the crew quarters on the 3rd floor of the operations and checkout building at Kennedy Space Center in Florida.  They take their traditional walk to the transporter van, that will carry them to the launch pad.  How old was shuttle Columbia at that time?",
    "options": [
      "21 years",
      "16 years",
      "19 years",
      "22 years"
    ],
    "correctIndex": 3
  },
  {
    "question": "During takoff on Columbias first mission, did the crew notice debree from the fuel tank flying past their window?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "During the days spent in orbit, the astronauts of Columbias last mission conducted dozens of experiments dedicated to improving life on Earth.   Exactly how many days did the astronauts spend in orbit?",
    "options": [
      "10",
      "14",
      "16",
      "20"
    ],
    "correctIndex": 2
  },
  {
    "question": "On February 1, 2003 at 9:29am flight director Leroy Cain declared a contingency and asked Bill Foster, who was working ground control that day, to lock the doors. Contingency is a NASA term which meant this.",
    "options": [
      "There was a suspected saboteur",
      "Personnel had to work overtime till communication was restored",
      "Interferece was preventing radio communication",
      "The Shuttle had been lost"
    ],
    "correctIndex": 3
  },
  {
    "question": "What Civil War general is alleged to have sucked on lemons before going into a battle?",
    "options": [
      "James Longstreet",
      "Robert E. Lee",
      "JEB Stuart",
      "Thomas Jackson"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first official casualty of the American Civil War?",
    "options": [
      "Pvt. Daniel Hough",
      "Pvt. Stephen Lang",
      "Pvt. Peter Hermit",
      "Pvt. Harry Cruble"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was Ulysses S. Grants first battle, fought against Confederate General Gideon J. Pillow?",
    "options": [
      "Fort Henry",
      "Shiloh",
      "Belmont",
      "Fort Donelson"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who commanded the Union cavalry corps at the battle of Gettysburg?",
    "options": [
      "Phil Sheridan",
      "Alfred Pleasanton",
      "Judson Kilpatrick",
      "George Armstrong Custer"
    ],
    "correctIndex": 1
  },
  {
    "question": "At what battle of the American Civil War did Generals U.S. Grant, William T. Sherman, George H. Thomas, and Joseph Hooker all fight at once?",
    "options": [
      "Chickamauga",
      "Vicksburg",
      "Chattanooga",
      "Gettysburg"
    ],
    "correctIndex": 2
  },
  {
    "question": "At what battle of the American Civil War did Native American forces first participate in military action?",
    "options": [
      "Pea Ridge",
      "Poison Spring",
      "Wilsons Creek",
      "Westport"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Union naval ship sank Confederate raider CSS Alabama during the American Civil War?",
    "options": [
      "USS Washington",
      "USS New York",
      "USS Monitor",
      "USS Kearsarge"
    ],
    "correctIndex": 3
  },
  {
    "question": "There were more people killed at Pearl Harbor on December 7, 1941 than there were some 60 years later in the terrorist attacks of September 11, 2001.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In April, 2004, then-National Security Advisor Condoleezza Rice told the 9/11 Commission: I do not remember any reports to us, a kind of strategic warning, that planes might be used as weapons.  What fact refutes Dr. Rices statement?",
    "options": [
      "A year before 9/11, the CIA briefed President Bush and the Cabinet about terrorists in flight school.",
      "Rice had drafted her own memo about hijacking dangers before she served in the Bush administration.",
      "A plot like this was depicted in the movie Top Gun.",
      "Two years before 9/11, in an Air Force training exercise, jet pilots practiced shooting down a hijacked commercial aircraft before it could crash into civilian targets."
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1996, U.S. anti-terrorist investigators learned of an organization called al-Qaeda for the very first time from which one of the following?",
    "options": [
      "Sudanese informer",
      "captured Taliban fighter",
      "Israeli Mossad agent",
      "released American hostage"
    ],
    "correctIndex": 0
  },
  {
    "question": "Osama bin Laden is the scion of a huge, wealthy, long-established Saudi Arabian clan.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Osama bin Laden is a striking figure, well over six feet tall.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The first major act of terrorism attributed to bin Ladens al-Qaeda group was in 1998 when it blew up which of these?",
    "options": [
      "U.S. embassies in Tanzania and Kenya",
      "USS Cole destroyer in Yemen",
      "Khobar Towers housing complex in Dhahran, Saudi Arabia",
      "a parking garage of the World Trade Center"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many al-Qaeda terrorists were involved in the near-destruction of the $1billion guided-missile destroyer USS Cole, which was protected by some 70 tons of armor shielding?",
    "options": [
      "1",
      "2",
      "10",
      "5"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many days before 9/11 did George W. Bush receive a Presidents Daily Brief intelligence report entitled Bin Laden Determined to Strike in U.S.?",
    "options": [
      "365 days",
      "90 days",
      "200 days",
      "35 days"
    ],
    "correctIndex": 3
  },
  {
    "question": "What country did Osama bin Laden live in and operate al-Qaeda from before he found sanctuary back in Afghanistan?",
    "options": [
      "Sudan",
      "Saudi Arabia",
      "Yemen",
      "Iraq"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following proved to be the greatest obstacle to saving lives in New York Citys 9/11 rescue efforts at the World Trade Center towers?",
    "options": [
      "poor building design",
      "lack of disaster training",
      "outdated fire department radios",
      "poor leadership"
    ],
    "correctIndex": 2
  },
  {
    "question": "What American product from the 50s was advertised with roadside signs reading slogans such as:",
    "options": [
      "beauty show?",
      "Burma Shave",
      "Old Spice",
      "Aqua Velva",
      "Colgate Shave Gel"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which is the most accurate number of casualties (including killed, wounded or lost) of World War II?",
    "options": [
      "11,147,000",
      "16,354,000",
      "7,457,000",
      "9,127,000"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1942 there was a terrible ammonium nitrate explosion that killed 20 people. Where did it occur?",
    "options": [
      "Cleveland, Ohio",
      "Tesserendo, Belgium",
      "in the Atlantic Ocean on a cargo ship",
      "Ludwig ,Germany"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement is true about Pete Gray, who played outfield for the St. Louis Browns during World War II?",
    "options": [
      "Gray was legally  blind in one  eye.",
      "Gray had only one arm.",
      "Gray was the only person to lead in home runs while playing for a last place  team.",
      "During this period Gray was the only  player to hit 50 homers in one  year."
    ],
    "correctIndex": 1
  },
  {
    "question": "What did Walter Morrison invent in 1948?",
    "options": [
      "the Frisbee",
      "the microwave",
      "Doppler Radar",
      "the solar battery"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these events did not  occur in 1947?",
    "options": [
      "The Dead Sea Scrolls are found.",
      "Chuck Yeager breaks the sound barrier.",
      "The United Nations is founded.",
      "The Polaroid Camera is invented."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these did not happen in 1941?",
    "options": [
      "The siege of Leningrad began.",
      "Mount Rushmore was finished.",
      "The Jeep was invented.",
      "The microwave was invented"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which statement is untrue about Jackie Robinson, who broke the color barrier in professional baseball in 1947?",
    "options": [
      "He also integrated the city of Stamford, Connecticut.",
      "His older brother was considered the best athlete in the family but was forced to take a job as a sanitation worker in Los Angeles because of segregation.",
      "He played three sports for UCLA.",
      "When Walter Alston signed him, both Alston and Robinson received death threats."
    ],
    "correctIndex": 3
  },
  {
    "question": "In the 1940s the USA began  the Manhattan Project to build the first Atomic bomb. The first part of this project  was to split the atom. It was accomplished by a team led by great Enricco Fermi. Where was it done?",
    "options": [
      "Chicago, Illinois.",
      "Roswell, New Mexico.",
      "Bikini Atoll, Marshall Islands.",
      "Los Arbeles, Arizona."
    ],
    "correctIndex": 0
  },
  {
    "question": "The 1945 Nobel Prize in Physiology and Medicine went to three men from Oxford University who played a significant role in the discovery and development of penicillin and its use as an antibiotic. Which of these scientists did not share this prize?",
    "options": [
      "Sir Howard Walter Florey",
      "Ernst Boris Chain",
      "Sir Alexander Fleming",
      "Paul Winchell"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which famous metaphor did Winston Churchill use in the 1940s to describe what Russia did to Eastern Europe after WWII?",
    "options": [
      "The Russian Winter of  No Dissent.",
      "The Soviet Bloc",
      "The Soviet Gulags",
      "The Iron Curtain"
    ],
    "correctIndex": 3
  },
  {
    "question": "There was fighting in the Revolutionary War for more than a year before the United States declared independence from Britain.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where were the first shots of the American Revolutionary War fired?",
    "options": [
      "Charleston, South Carolina",
      "Lexington, Massachusetts",
      "near the city of New York",
      "Newark, New Jersey"
    ],
    "correctIndex": 1
  },
  {
    "question": "What term refers to the body of delegates from the colonies who met during the Revolutionary War until a constitutional government was finally formed near the end of the war?",
    "options": [
      "the Council of States",
      "the Executive Committee of the United States",
      "The Continental Congress",
      "the Congress of the United Colonies"
    ],
    "correctIndex": 2
  },
  {
    "question": "Why is July 4th, 1776 considered the birthday of the United States?",
    "options": [
      "because the signing of the Declaration of Independence began on that day",
      "because on that day the British recognized US independence",
      "because on that day all thirteen former colonies finally agreed to a constitution for their new government",
      "because on that day the Americans had their first victory over the British at Boston"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is NOT true about the Battle of Saratoga in 1777?",
    "options": [
      "It was the first major victory for the Americans.",
      "The American victory convinced the French to give the Americans substantial aid.",
      "British General Burgoyne invading from Canada lost his entire army.",
      "General George Washington was wounded while directing the American troops."
    ],
    "correctIndex": 3
  },
  {
    "question": "The American victory in this battle is often called the turning point of the Revolutionary War in the South.",
    "options": [
      "Battle of Kings Mountain",
      "Battle of Charleston",
      "Battle of Princeton",
      "Battle of Camden"
    ],
    "correctIndex": 0
  },
  {
    "question": "How did the French aid the American patriots during the Revolutionary War?",
    "options": [
      "by allowing the French fleet to aid the Americans at a critical point of the war",
      "by providing substantial amounts of military supplies",
      "by sending part of the French Army to America",
      "all of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What statement is true about John Paul Jones who fought in the American Revolutionary War?",
    "options": [
      "He used guerrilla warfare against the British.",
      "He was able to get several Indian tribes to fight against the British.",
      "He was successful in naval warfare against the British.",
      "He captured several British forts in Canada."
    ],
    "correctIndex": 2
  },
  {
    "question": "What statement is true about the Treaty of Paris of 1783?",
    "options": [
      "It recognized US independence.",
      "It granted territory to the US from the Atlantic Ocean to the Pacific Ocean.",
      "All of these",
      "It formed a permanent alliance between France and the US."
    ],
    "correctIndex": 0
  },
  {
    "question": "Stormd at with shot and shell,",
    "options": [
      "Lord Cardigan",
      "Captain Jenyns",
      "Major Richard Ormsby Gore",
      "Lord Harlech"
    ],
    "correctIndex": 0
  },
  {
    "question": "We may have not known the meaning of",
    "options": [
      "Brown-eyed Lady",
      "Lady Marmalade",
      "Sexy Sadie",
      "Lady Godiva"
    ],
    "correctIndex": 1
  },
  {
    "question": "The pros:  this pet needed no watering, feeding, worming or grooming.  You could go on a six month vacation and never have to ask your neighbor to take care of this pet.  The cons:  this pet could only learn how to stay and  was very, very boring.  Thanks to Gary Dahl, what pet sold over 1,000,000 in 1975?",
    "options": [
      "Chia Pet",
      "Elmo",
      "Pet Rock",
      "Invisible Dog"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where would you be if you heard Tattoo yell out,  Ze plane!  Ze plane!",
    "options": [
      "Hawaii Five O",
      "Gilligans Island",
      "Fantasy Island",
      "Love Boat"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following is NOT a quote from Saturday Night Live?",
    "options": [
      "Nanoo nanoo!",
      "We are two wild and crazy guys!",
      "Im Chevy Chase and youre not.",
      "Jane, you ignorant slut!"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ever since the Napoleonic wars, conscript troops were blamed for a lack of professionalism and could not be trusted. However, this changed at the 1866 battle at...?",
    "options": [
      "Schleswig Holstein",
      "Koniggratz",
      "Palermo",
      "Paris"
    ],
    "correctIndex": 1
  },
  {
    "question": "This 1899 -1902 war marked the beginning of the decline of the British Empire",
    "options": [
      "Rebellion in India",
      "The War of independence - Ireland",
      "The Boer War - South Africa",
      "The Boxer uprising - China"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1905 the Russian fleet engaged the Japanese fleet in front of the Korean coast. In order to reach Korea, the Russian fleet had to cross half of the world from their western ports. Believing they were battling Japanese torpedo boats in the North Sea, the Russian fleet mistakenly attacked British fishing ships.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1853 the Crimean War began.  Which country was not part of the coalition against Russia?",
    "options": [
      "France",
      "United Kingdom",
      "Austria",
      "Kingdom of Piedmont"
    ],
    "correctIndex": 2
  },
  {
    "question": "This conflict ended in a humiliating defeat for China and forced the opening of 5 ports to international trade; Canton, Shanghai, Foochow, Ningpo, and Amoy. Which conflict was it?",
    "options": [
      "The 2nd Sin--Japanese War 1937 - 1945",
      "The Korean War 1950 - 1953",
      "The Vietnam invasion - 1979",
      "The first Opium War 1839 - 1842"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Civil War raged between 1967 - 1970, costing an estimated 1 million people their lives. In the aftermath the Non-Governmental Organization Medicins sans Frontiere was created in 1971. In which country did this civil war take place?",
    "options": [
      "Cambodia",
      "Congo",
      "Algeria",
      "Nigeria"
    ],
    "correctIndex": 3
  },
  {
    "question": "This conflict lead to the start of a period which is referred to as The Catastrophe by the defeated. Which conflict is this?",
    "options": [
      "The Soviet Annexation of the Baltic States; Estonia, Lithuania  Latvia - 1940",
      "The Kashmir Conflict - 1947",
      "The Arab-Israel War - 1948",
      "The Armenian uprisal - 1915"
    ],
    "correctIndex": 2
  },
  {
    "question": "On April 24th 1916 an uprising took place in this country in an attempt to gain independence from the UK.  Where did this uprising take place?",
    "options": [
      "India; The Sepoy Mutiny",
      "Ireland; The Easter Uprising",
      "The Palestine Mandate ; Zionist Uprising",
      "Egypt; The Urabi revolt"
    ],
    "correctIndex": 1
  },
  {
    "question": "When and where did the Velvet Revolution take place?",
    "options": [
      "2000 ; Belgrade ; Yugoslavia",
      "2003 ; Tbilisi ; Georgia",
      "1989 ; Tiananmen Square, Beijing; China",
      "1989 ; Prague ; Czechoslovakia"
    ],
    "correctIndex": 3
  },
  {
    "question": "The United Islamic Front for the Salvation of Afghanistan is also known as?",
    "options": [
      "Northern Alliance",
      "Al-Qaeda",
      "Taliban",
      "Amir al-MuMinin"
    ],
    "correctIndex": 0
  },
  {
    "question": "During his lifetime Montesquieu (1689 -1755) was an outright critic of the French Absolutism. He put this forward in books like Lettres Persanes (Persian Letters - 1721). He also developed his own view on an ideal political system which he described in his Lesprit des Lois (on the Spirit of Laws -1748). What political system was he envisioning?",
    "options": [
      "Autocracy",
      "Constitutional Monarchy",
      "Liberalism",
      "Democracy"
    ],
    "correctIndex": 1
  },
  {
    "question": "In June 1812, Napoleon Bonaparte and his Grand Armee suddenly invaded Russia at Nemel. After victories at Smolensk and Borodino, Napoleon managed to conquer Moscow without a fight. It was the start of the end of his army. After Russian refusals to come to terms and a big fire in Moscow, Napoleon was forced to retreat. The retreat turned into a complete disaster when crossing the Berezina river in November 1812. At what place did this crossing take place?",
    "options": [
      "Borodino",
      "Studjanka",
      "Moscow",
      "Smolensk"
    ],
    "correctIndex": 1
  },
  {
    "question": "On September 27th, 1779 this politician was appointed by American Congress to start negotiating peace with the British.",
    "options": [
      "Ben Franklin",
      "Thomas Jefferson",
      "John Jay",
      "John Adams"
    ],
    "correctIndex": 3
  },
  {
    "question": "Between 1639 and 1858 Japan was largely isolated from the outside world. The port of Nagasaki was only open to Dutch and Chinese ships. In 1858 Commander Perry forced the Japanese Shogun to stop preventing trade. What was one of the results of this event?",
    "options": [
      "A rise to power of the Shogunate",
      "The assassination of  Tokugawa Yoshinobu",
      "The loss of Nagasaki to a foreign power",
      "The Meiji Restoration"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1861 Italy was finally (largely) unified with Victor Emmanuel II assuming the title of King of Italy. Who became the first Prime Minister of Italy?",
    "options": [
      "Camillo di Cavour",
      "Giuseppe Garibaldi",
      "Bettino Ricasoly",
      "Giuseppe Mazzini"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1876 the International Comittee of the Red Cross came into being. Which battle witnessed by one of the founders led to the foundation of the Red Cross?",
    "options": [
      "The battle of Antietam September 27th, 1862",
      "The battle of Sedan September 1st, 1870",
      "The battle of Solferino June 24th, 1859",
      "The battle of Bezzeca July 21st, 1866"
    ],
    "correctIndex": 2
  },
  {
    "question": "What happened at Prokhorovka on July 12th, 1943?",
    "options": [
      "The biggest infantry engagement of WW II",
      "The launch of Operation Kutzov",
      "The biggest Tank batlle of WW II",
      "The launch of Operation Citadel"
    ],
    "correctIndex": 2
  },
  {
    "question": "July 1969 will go into history as the month man first set foot on the Moon. However, in that same month and year another momentous event took place. Which event was that?",
    "options": [
      "The Beatles give their last public performance",
      "The Nixon Doctrine is declared",
      "A coup in Libya brings to power Colonel Khadaffi",
      "The Woodstock Festival"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the War of Laws?",
    "options": [
      "The Iraqis democratic government attempt to get an acceptable constitution",
      "ANCs attempt to change the discrimination laws in South Africas Apartheid regime",
      "The EU attempt to override local Member State law",
      "The implementation of National legislation laws vs. Soviet Union laws"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the dividing line between North and South Korea after World War Two?",
    "options": [
      "the 17th parallel",
      "the 49th parallel",
      "There was never any dividing line established.",
      "the 38th parallel"
    ],
    "correctIndex": 3
  },
  {
    "question": "When did the Korean War begin?",
    "options": [
      "in 1946, when Korean communist guerrillas began attacking non-communist groups throughout Korea",
      "in 1949, when Chinese communists crossed the border into northern Korea and attempted to take over the entire nation",
      "in 1953 when the US-backed South Korean army invaded communist North Korea",
      "in 1950 when communist North Korea suddenly attacked non-communist South Korea"
    ],
    "correctIndex": 3
  },
  {
    "question": "Early in the Korean War, communist forces drove deep into South Korea until they were finally stopped at the perimeter surrounding this city near the southern end of Korea.",
    "options": [
      "Pusan",
      "Pyongyang",
      "Osaka",
      "Seoul"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was US President during most of the Korean War?",
    "options": [
      "Eisenhower",
      "Truman",
      "Kennedy",
      "Roosevelt"
    ],
    "correctIndex": 1
  },
  {
    "question": "During the Korean War, after stopping the original communist invasion the anti-communist forces, commanded by General MacArthur, steadily drove the North Koreans back deep into North Korea. Then the war had a new development as Communist Chinese forces attacked in force. What is the most probable reason why the Chinese decided to enter the war?",
    "options": [
      "MacArthurs air forces bombed communist supply bases in China.",
      "The Chinese saw this as a chance to defeat the Americans and invade Japan.",
      "Anti-communist forces crossed over the North Korean-China border in several places.",
      "MacArthurs aggressive policies and proclamations made the Chinese fear that they themselves might be attacked by the anti-communist forces."
    ],
    "correctIndex": 3
  },
  {
    "question": "During the Korean War, why was General MacArthur fired as commander of the anti-communist forces in Korea by the President (who is also commander-in-chief of US armed forces)?",
    "options": [
      "MacArthur refused to attack Chinese bases in China.",
      "MacArthur publicly disagreed with the Presidents policy of limited war in Korea.",
      "The American public demanded a more effective commander.",
      "MacArthur refused to cooperate with NATO forces."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which statement is true about the Chinese entry into the Korean War?",
    "options": [
      "It caused the Nationalist forces of Taiwan to enter the war against Communist China.",
      "It led to US bombing of targets in China.",
      "It pushed the anti-communist forces back rapidly all the way into South Korea.",
      "It had little effect on the course of the war."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which statement regarding the consequences of the Korean War is true?",
    "options": [
      "When the war ended, China had gained some territory and special economic concessions from North Korea.",
      "When the war ended, the South had gained a large part of North Korean territory.",
      "When the war ended, the North had gained a large part of South Korean territory.",
      "When the war ended, no nation made any significant gain in territory or economic concessions. The dividing line between North and South was almost the same as when the war began."
    ],
    "correctIndex": 3
  },
  {
    "question": "After conquering the vast majority of Western Europe, early in  World War II, the German High Command ordered the construction of a string of fortifications known as the Atlantic Wall. Parts of these barrier systems included mines, barbed wire, casemates and imitation stones. What were these imitation stones?",
    "options": [
      "Stone walls suggesting the presence of bunkers",
      "Circular machine gun emplacements",
      "Camouflaged bunkers",
      "Pointed stakes just under water level, to sink landing craft"
    ],
    "correctIndex": 2
  },
  {
    "question": "During the 1945 siege of Berlin by Russian forces, rumors spread among the German refugees in the Berlin Underground, that Russian T-34 tanks had entered the Underground.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1944 the Allies launched a very ambitious airborne and ground campaign into the Netherlands, codenamed Operation Market Garden.  Who was in direct charge of the 1st British Airborne Division?",
    "options": [
      "Montgommery took personal control",
      "Gen. Horrocks",
      "Ltn. Gen. Boy Browning",
      "Maj. Gen. Urquhart"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1944 the Allies launched Operation Overlord starting the liberation of Europe. When troops entered the beaches and caught their first prisoners, they were surprised to hear this language.",
    "options": [
      "Russian",
      "Finnish",
      "Hungarian",
      "Japanese"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the objective of Operation Hailstone that was launched in 1944 by the United States Navy?",
    "options": [
      "Attack on Truk Atoll",
      "Attack on Okinawa",
      "Attack on Iwo Jima",
      "Raid on Tokyo"
    ],
    "correctIndex": 0
  },
  {
    "question": "During World war II, Singapores defenses were so strong that it was considered to be the Gibraltar of the Pacific. However the city fell to the Japanese relatively easy on February 15th 1942. What was the main reason for this?",
    "options": [
      "The Japanese assaulted Singapore over land.",
      "A night-time Amphibious assault caught the defenders off-guard.",
      "Pro-Japanese resistance groups caused havoc in the city, leaving the defenders confused.",
      "Superior Japanese Naval forces bombarded the defenders into submission."
    ],
    "correctIndex": 0
  },
  {
    "question": "During World War II V-2 Rockets were never aimed at targets outside the UK.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the objective of Operation Husky launched in 1943?",
    "options": [
      "The capture of Sicily",
      "The bombardment of the Monte Casino Cloister",
      "The landings at Anzio",
      "The final defeat of German forces in Africa"
    ],
    "correctIndex": 0
  },
  {
    "question": "In May 1941 the Germans used airborne divisions to invade the Island of Crete. Who was the commander of these forces?",
    "options": [
      "General  Hans Sponeck",
      "General Albert Kesselring",
      "General Kurt Student",
      "Major Otto Skorzeny"
    ],
    "correctIndex": 2
  },
  {
    "question": "What was the codename for the amphibious assault on Normandy, France on 6 June 1944?",
    "options": [
      "Husky",
      "Neptune",
      "Torch",
      "Avalanche"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who assassinated Robert F. Kennedy on June 5, 1968?",
    "options": [
      "Charles Guiteau",
      "Sirhan Sirhan",
      "Gavrilo Princip",
      "James Earl Ray"
    ],
    "correctIndex": 1
  },
  {
    "question": "What cartoon character made his film debut on June 9, 1934?",
    "options": [
      "Daffy Duck",
      "Mickey Mouse",
      "Donald Duck",
      "Pluto"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was the first horse to claim the United States Triple Crown of Thoroughbred Racing on June 11, 1919?",
    "options": [
      "Secretariat",
      "Sir Barton",
      "Affirmed",
      "War Admiral"
    ],
    "correctIndex": 1
  },
  {
    "question": "This corporation, initially known as the Computing-Tabulating-Recording Company, was incorporated on June 15, 1911.",
    "options": [
      "Texas Instruments",
      "Hewlitt Packard",
      "Price Waterhouse",
      "IBM"
    ],
    "correctIndex": 3
  },
  {
    "question": "What holiday was first celebrated on June 19, 1910?",
    "options": [
      "Memorial Day",
      "Mothers Day",
      "Fathers Day",
      "Flag Day"
    ],
    "correctIndex": 2
  },
  {
    "question": "On June 21, 1788 the US Constitution became the law of the land when ratified by New Hampshire.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What president signed legislation providing for an 8-hour work-day applicable to federal employees on June 25, 1868?",
    "options": [
      "Ulysses S. Grant",
      "Andrew Johnson",
      "Abraham Lincoln",
      "Andrew Jackson"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who assassinated Austrian Archduke Franz Ferdinand and his wife on June 28, 1914?",
    "options": [
      "Charles Guiteau",
      "Leon Czolgosz",
      "Gavrilo Princip",
      "Sirhan Sirhan"
    ],
    "correctIndex": 2
  },
  {
    "question": "What soap opera moved from radio to television on June 30, 1952?",
    "options": [
      "General Hospital",
      "Young and the Restless",
      "Guiding Light",
      "Days of our Lives"
    ],
    "correctIndex": 2
  },
  {
    "question": "In Greek mythology, Patroclus donned Achilles armor to fight against the Trojans and was killed by Hector.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "How did the Greeks overtake the city of Troy during the Trojan War?",
    "options": [
      "The Trojans surrendered.",
      "They used a wooden hollow horse.",
      "They destroyed the walls of the city.",
      "Achilles killed the Trojan soldiers."
    ],
    "correctIndex": 1
  },
  {
    "question": "Scythian monk Dennis the Little, who lived in the sixth century invented this.",
    "options": [
      "Numbering years according to the life of Jesus",
      "The concepts of  Feudalism",
      "The horse-pulled plow",
      "Taking a census every decade"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these was invented by US assistant commissioner Kathy Adams?",
    "options": [
      "Stealth technology for airplanes",
      "Fabric softeners",
      "The reality TV show",
      "The expression Y2K"
    ],
    "correctIndex": 3
  },
  {
    "question": "It can be difficult to both hold a string instrument and play it. Which of these musicians holds a patent for a device used for holding a stringed instrument?",
    "options": [
      "Bob Dylan",
      "Tom Petty",
      "Denny Dougherty",
      "Eddie Van Halen"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which famous person holds a patent for a cardiac pulse monitor?",
    "options": [
      "Lawrence Welk",
      "Jay Leno",
      "Paul Winchell",
      "Zeppo Marx"
    ],
    "correctIndex": 3
  },
  {
    "question": "What famous person got a patent in 2002 for a device used to tune drumheads?",
    "options": [
      "Buddy Rich",
      "Marlon Brando",
      "Johnny Carson",
      "Richard Feynmann"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which famous person holds a patent for the design of  an ash tray?",
    "options": [
      "Johnny Carson",
      "Axl Rose",
      "Rachel Carson",
      "Lawrence Welk"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1951 this famous actor was awarded a patent for the design of a blowout toy. He was very famous for his musical comedies.",
    "options": [
      "James Arness",
      "Danny Kaye",
      "Johnny Carson",
      "Marlon Brando"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these people holds a patent for the design of a certain toy figure?",
    "options": [
      "Paul Winchell",
      "Lawrence Welk",
      "Fred Rogers",
      "George Lucas"
    ],
    "correctIndex": 3
  },
  {
    "question": "This actor, who was the voice of Roger Rabbit in 1988 and did voice work in Polar Express, got  a patent for a toy adapted for pulling and stretching.",
    "options": [
      "Patrick Wharton",
      "Fred Watson",
      "Hank Azari",
      "Charles Fleischer"
    ],
    "correctIndex": 3
  },
  {
    "question": "This person worked in a patent office while in graduate school and is the co-holder of patent # 1781541 for a refrigerator.",
    "options": [
      "Albert Einstein",
      "Franz Kafka",
      "Vince McMahn",
      "Herbert Hoover"
    ],
    "correctIndex": 0
  },
  {
    "question": "Few people know that this person holds a patent for a type of disposable child\u00e2\u20ac\u2122s diaper.",
    "options": [
      "Jamie Lee Curtis",
      "Gary Burghoff",
      "Elizabeth Taylor",
      "Betty White"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these people holds several patents for fishing lures?",
    "options": [
      "Jamie Lee Curtis",
      "Gary Burghoff",
      "Jonathan Winters",
      "Charlton Heston"
    ],
    "correctIndex": 1
  },
  {
    "question": "Under his real name this person holds patent #140245 for an improved method for scrapbooking.",
    "options": [
      "Abraham Lincoln",
      "Harry Houdini",
      "Mark Twain",
      "Charles Dickens"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of one these people holds patent #1370316 for a divers suit?",
    "options": [
      "Herbert Hoover",
      "Abraham Lincoln",
      "Harry Houdini",
      "Mark Twain"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which musician holds a patent for an electronic device that helps a composer, a musician, or a conductor to interactively select parts of a musical score?",
    "options": [
      "Darryl The Captain Dragon",
      "Harry Connick, Jr.",
      "Henry Mancini",
      "Johnny Mercer"
    ],
    "correctIndex": 1
  },
  {
    "question": "If you recall well the performances of these men, it won\u00e2\u20ac\u2122t be hard to guess which one of them holds a patent for a device that allows a performer to lean forward past his center of gravity.",
    "options": [
      "Axl Rose",
      "Gene Simmons",
      "Chaim Witz",
      "Michael Jackson"
    ],
    "correctIndex": 3
  },
  {
    "question": "This man holds a patent for a special Jacuzzi-type of spa bath for women that includes a chair, a circulation valve, and a device for eliminating the dirty water.",
    "options": [
      "Joseph Abrahams",
      "Jerry Lewis",
      "Marcel Marceau",
      "Penn Jillette"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these people was issued patent # 6469 for a new method of buoying vessels over shoals?",
    "options": [
      "Andrew Jackson",
      "Stephen Decateur",
      "Herbert Hoover",
      "Abraham Lincoln"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1974, this lady got a patent for a pantyhose with a shaping band for cheeky derriere relief.",
    "options": [
      "Michelle Pfeiffer",
      "Eartha Kitt",
      "Donna Mills",
      "Julie Newmar"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Great Pyramid of Giza is believed to have been built as the tomb of this Egyptian pharaoh.",
    "options": [
      "Amenhotep",
      "Ramses",
      "Tut",
      "Khufu"
    ],
    "correctIndex": 3
  },
  {
    "question": "What was the original height of the Great Pyramid?",
    "options": [
      "481 feet",
      "565 feet",
      "380 feet",
      "600 feet"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Great Pyramid is one of the pyramids of the Giza pyramid complex. Which monument is NOT a part of that complex?",
    "options": [
      "The Pyramid of Khafre",
      "The Great Sphinx",
      "The Pyramid of Menkaure",
      "The Pyramid of Amenemhet I"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where in Egypt are the Pyramids of Giza situated?",
    "options": [
      "In Abu Simbel, Southern Egypt",
      "Near the Gulf of Aqaba",
      "In the very heart of Egypt",
      "On the outskirts of Cairo"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the estimated frame of time in which the Great Pyramid was constructed?",
    "options": [
      "more than 40 years",
      "10 - 15 years",
      "15 - 20 years",
      "30 - 40 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of the Pyramids of Giza has visibly retained its polished limestone casing at its apex?",
    "options": [
      "The Pyramid of Khafre",
      "The Great Pyramid of Giza",
      "The Pyramid of Djedefre",
      "One of the Queens Pyramids"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which peculiarity of the Great Pyramid interior distinguishes it from the other pyramids?",
    "options": [
      "The ascending passages and upper chambers",
      "The larger number of its chambers",
      "The underground chamber",
      "Its wider and longer passages"
    ],
    "correctIndex": 0
  },
  {
    "question": "What common feature do all of the entrances of the Pyramids in Giza share?",
    "options": [
      "They all face the exact north.",
      "They all face the exact west.",
      "They all face the Nile River bank.",
      "They are all oriented towards the Sphinx."
    ],
    "correctIndex": 0
  },
  {
    "question": "Towards the end of the 14th century, vandalized by an angered Sufi Muslim, the Great Sphinx of Giza lost what essential piece.",
    "options": [
      "Its nose",
      "Its wings",
      "Its headdress",
      "Its tail"
    ],
    "correctIndex": 0
  },
  {
    "question": "What word refers to the hundreds of flat-roofed Egyptian tombs built round the Pyramids of Giza?",
    "options": [
      "Pyramidions",
      "Mastabas",
      "Ben-bens",
      "Stelas"
    ],
    "correctIndex": 1
  },
  {
    "question": "When was this headline breaking news:",
    "options": [
      "May 10, 1994",
      "June 10, 1994",
      "June 13, 1994",
      "May 13, 1994"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Alamo mission was captured on this day in 1836.",
    "options": [
      "June 16",
      "March 6",
      "June 1",
      "April 1"
    ],
    "correctIndex": 1
  },
  {
    "question": "Sam Houston avenged the deaths of those killed at the Alamo in this battle.",
    "options": [
      "Battle of Galiad",
      "Battle of San Antonio",
      "Battle of San Jacinto",
      "Battle of Goliad"
    ],
    "correctIndex": 2
  },
  {
    "question": "How did General Santa Anna escape during the battle with Sam Houston (only to be caught the next day)?",
    "options": [
      "He pretended to be dead in the grass.",
      "He jumped in his Buick and headed to the river.",
      "He switched uniforms with someone else.",
      "He was dressed as a peasant."
    ],
    "correctIndex": 3
  },
  {
    "question": "Who portrayed Davy Crockett in the 1960 movie The Alamo?",
    "options": [
      "Clark Gable",
      "John Wayne",
      "Jimmy Stewart",
      "Richard Widmark"
    ],
    "correctIndex": 1
  },
  {
    "question": "What Dukes of Hazzard star played Thumblerig the Gambler in the 1960 movie The Alamo?",
    "options": [
      "Denver Pyle",
      "Andy Griffith",
      "James Best",
      "Boss Hogg"
    ],
    "correctIndex": 0
  },
  {
    "question": "Dennis Quaid played Sam Houston in the 2004 movie The Alamo.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Richard Widmark played Jim Bowie in the 1960 movie The Alamo.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Gustav has been a common name for Swedish monarchs since the reign of Gustav Vasa or Gustav I.",
    "options": [
      "Germany",
      "Spain",
      "England",
      "Denmark"
    ],
    "correctIndex": 3
  },
  {
    "question": "King Carl XVI Gustaf ascended to the throne on September 15, 1973, after the death of his grandfather, King Gustaf VI Adolf. Carl XVI Gustaf, who is probably best known as the presenter of the Nobel Prizes,",
    "options": [
      "Epilepsy",
      "Dyslexia",
      "Hemophilia",
      "Asthma"
    ],
    "correctIndex": 1
  },
  {
    "question": "Never in the field of human conflict was so much owed by so many to so few. These words uttered by Winston Churchill refer to the bravery of the men serving in the British Royal Air Force. What is the name given to the air warfare that was carried out by the powerful Luftwaffe against the RAF",
    "options": [
      "Battle of Midway",
      "Battle of Normandy",
      "Battle of Brittany",
      "Battle of Britain"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Crusaders lost the Battle of Hattin because of the stupidity of King Guy of Jerusalem who insisted on marching the Crusaders in heavy armor through arid, waterless land and demanding the enemy come out and fight like good Christian soldiers. What Muslin leader was able to lead his quick, mobile cavalry to victory over the Knights Templar and the army of the Crusaders?",
    "options": [
      "Emir Abd-ar-Rahman",
      "Ali Pasha",
      "Hannibal",
      "Saladin"
    ],
    "correctIndex": 3
  },
  {
    "question": "It was on September 18,1862 that General Robert E. Lee and the Confederate Army of Northern Virgina battled General George McClellan on a cornfield near Sharpsburg, Maryland. What is the name of the battle that is often called the bloodiest single day of warfare in American history?",
    "options": [
      "Second Bull Run",
      "Fredericksburg",
      "Shiloh",
      "Antietam"
    ],
    "correctIndex": 3
  },
  {
    "question": "What brilliant Carthaginian general defeated the Romans in the Second Punic War at the Battle of Cannae in 216 B.C.?",
    "options": [
      "Paullus",
      "Alexander",
      "Hannibal",
      "Xerxes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Duke Kazimir of Stettin, a member of the Teutonic Knights, insulted King Wladislaw II of Poland when he demanded the King come out and fight like a man. King Wladislaw answered when, by 7:00 p.m. July 15, 1410, 18,000 of the Order of Teutonic Knights were dead or dying and 14,000 of the Order were taken prisoner. Can you name this battle?",
    "options": [
      "Battle of Agincourt",
      "Battle of Tours",
      "Battle of Blenheim",
      "Battle of Tannenberg"
    ],
    "correctIndex": 3
  },
  {
    "question": "Operation Barbarossa is the largest land invasion in history. The superior German army moved further and faster than any other army in the history of modern warfare. But it was in the house-to-house and factory-to-factory fighting that the mighty German Sixth Army was defeated. What battle was the turning point for the Eastern Front in World War II?",
    "options": [
      "Battle of Kursk",
      "Battle of Stalingrad",
      "The Somme",
      "Battle of Narva"
    ],
    "correctIndex": 1
  },
  {
    "question": "In a few minutes of time, skill and luck met over the waters of the Pacific in June 1942. American SBD Dauntless dive bombers from the USS Yorktown and Enterprise struck three Japanese carriers and put them out of action. In what decisive battle did the Japanese lose the carriers Kaga, Soryu, Akagi and the Hiryu?",
    "options": [
      "Battle of Midway",
      "Doolittle Raid",
      "Battle of Wake Island",
      "Battle of the Coral Sea"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Tet Offensive was the first major defeat for the US/ARVN military forces in the Vietnam War.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "During this century Constantine I ruled, and Kama Sutra was created.",
    "options": [
      "6th century AD",
      "1st century BC",
      "4th century AD",
      "2nd century BC"
    ],
    "correctIndex": 2
  },
  {
    "question": "During this century the French Revolution began, and the United States Declaration of Independence was signedd.",
    "options": [
      "16th century AD",
      "17th century AD",
      "19th century AD",
      "18th century AD"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this century paper was first produced by Chinese people, and the Silk Road between Europe and Asia was created.",
    "options": [
      "4th century BC",
      "3rd century AD",
      "2nd century BC",
      "2nd century AD"
    ],
    "correctIndex": 2
  },
  {
    "question": "In this century, the Muslim conquests began, and the population on the planet was reduced to approximately 208 million people.",
    "options": [
      "4th century AD",
      "10th century AD",
      "13th century AD",
      "7th century AD"
    ],
    "correctIndex": 3
  },
  {
    "question": "During what century did Ramesses III, Pharaoh of Egypt, live, rule and die?",
    "options": [
      "12th century BC",
      "7th century BC",
      "2nd century BC",
      "5th century BC"
    ],
    "correctIndex": 0
  },
  {
    "question": "This century saw the discovery of the Americas and of a sea route along Cape of Good Hope to India.",
    "options": [
      "9th century AD",
      "17th century AD",
      "13th century AD",
      "15th century AD"
    ],
    "correctIndex": 3
  },
  {
    "question": "In this century gunpowder was first used in a battle, and lions become extinct in Europe.",
    "options": [
      "5th century AD",
      "10th century AD",
      "2nd century AD",
      "14th century AD"
    ],
    "correctIndex": 1
  },
  {
    "question": "Roman Emperors Caligula, Augustus, Claudius and Nero lived in this century.",
    "options": [
      "2nd century BC",
      "2nd century AD",
      "1st century AD",
      "1st century BC"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Great Fire of London and the Great Plague of London occurred in this century.",
    "options": [
      "17th century AD",
      "9th century AD",
      "15th century AD",
      "7th century AD"
    ],
    "correctIndex": 0
  },
  {
    "question": "What century witnessed the reign of the so-called Five Good Emperors of Rome?",
    "options": [
      "3rd century AD",
      "2nd century AD",
      "3rd century BC",
      "4th century AD"
    ],
    "correctIndex": 1
  },
  {
    "question": "What movie won the Academy Award for Best Picture at the 61st Academy Awards ceremony held on March 27, 1989?",
    "options": [
      "My Left Foot: The Story of Christy Brown",
      "Working Girl",
      "Rain Man",
      "Driving Miss Daisy"
    ],
    "correctIndex": 2
  },
  {
    "question": "What British actor was born on 23 July, 1989 in London, United Kingdom?",
    "options": [
      "Daniel Radcliffe",
      "Jamie Waylett",
      "Nicholas Hoult",
      "Hugh Mitchell"
    ],
    "correctIndex": 0
  },
  {
    "question": "American actress Bette Davis, who passed away on October 6, 1989, was the the first woman to be presented with this award by the American Film Institute.",
    "options": [
      "Best Actress Award",
      "Free Spirit Award",
      "Lifetime Achievement Award",
      "All of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "Who was awarded the 1989 Nobel Prize for Peace?",
    "options": [
      "The 14th Dalai Lama, Tenzin Gyatso",
      "Mikhail Sergeyevich Gorbachev",
      "Nelson Mandela",
      "Yasser Arafat"
    ],
    "correctIndex": 0
  },
  {
    "question": "What notable event happened in New York City on November 7, 1989?",
    "options": [
      "The city was visited by the Pope.",
      "A grizzly bear on the loose fell asleep on Times Square.",
      "An earthquake struck the city.",
      "The first African American mayor of the city was elected."
    ],
    "correctIndex": 3
  },
  {
    "question": "What American Idol winner was born on December 22, 1989 in Phoenix, Arizona?",
    "options": [
      "Jordin Sparks",
      "Carrie Underwood",
      "Kelly Clarkson",
      "Kris Allen"
    ],
    "correctIndex": 0
  },
  {
    "question": "What popular artist passed away on January 23, 1989?",
    "options": [
      "Man Ray",
      "Max Ernst",
      "Pablo Picasso",
      "Salvador Dali"
    ],
    "correctIndex": 3
  },
  {
    "question": "What name is commonly used to refer to the political events that took place in 1989 and are also known as Revolutions of 1989?",
    "options": [
      "Autumn of Nations",
      "The Red Veil",
      "The Liberty Wave",
      "All of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "What American rapper was born on October 4, 1989 in New York City?",
    "options": [
      "Lil Mama",
      "Chris Brown",
      "Soulja Boy",
      "Bow Wow"
    ],
    "correctIndex": 0
  },
  {
    "question": "The first full-length episode of this popular TV sitcom premiered on Fox on December 17, 1989.",
    "options": [
      "Full House",
      "Step By Step",
      "ALF",
      "The Simpsons"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who named the Cambrian period?",
    "options": [
      "Charles D. Walcott",
      "Adam Sedgwick",
      "None of these",
      "Charles Lyell"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Cambrian period lasted from 490 million years ago to 443 million years ago.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What term refers to the raise of biodiversity that occurred during the Cambrian period?",
    "options": [
      "Biodiversity Boom",
      "None of these",
      "Mass radiation of life",
      "Cambrian Explosion"
    ],
    "correctIndex": 3
  },
  {
    "question": "This animal, which lived during the early Cambrian period, is possibly one of the first fish to evolve.",
    "options": [
      "Haikouichthys",
      "Coccosteus",
      "Kimberella",
      "Cephalaspis"
    ],
    "correctIndex": 0
  },
  {
    "question": "During the Cambrian little or nothing lived on land.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Anomalocaris was a predatory arthropod of the Cambrian period which could reach a length of 100 cm or more.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What ocean separated Laurentia from Baltica and Siberia during the Cambrian.",
    "options": [
      "Paleo-Tethys ocean",
      "Iapetus ocean",
      "Panthalassic ocean",
      "Rheic ocean"
    ],
    "correctIndex": 1
  },
  {
    "question": "What caused the Cambrian-Ordovician mass extinction?",
    "options": [
      "A drop in oxygen levels during the late Cambrian",
      "Glaciation",
      "None of these",
      "Global warming"
    ],
    "correctIndex": 1
  }
];