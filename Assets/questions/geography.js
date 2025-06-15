const questions = [
  {
    "question": "What is the capital of Afghanistan?",
    "options": [
      "Tirana",
      "Kabul",
      "Dushanbe",
      "Tashkent"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Sydney",
      "Melbourne",
      "Ottawa"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the capital of Belgium?",
    "options": [
      "Amsterdam",
      "Luxemburg",
      "Brussels",
      "Stockholm"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the capital of Greece?",
    "options": [
      "Ankara",
      "Athens",
      "Sofia",
      "Thessaloniki"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital of Italy?",
    "options": [
      "Venice",
      "Rome",
      "Naples",
      "Milan"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital of Israel?",
    "options": [
      "Tel Aviv",
      "Kabul",
      "Jerusalem",
      "Islamabad"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Frankfurt",
      "Berlin",
      "Munich",
      "Hamburg"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital of Norway?",
    "options": [
      "Stockholm",
      "Helsinki",
      "Oslo",
      "Copenhagen"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the capital and largest city of Hawaii, the 50th US state?",
    "options": [
      "Little Rock",
      "Dover",
      "Frankfort",
      "Honolulu"
    ],
    "correctIndex": 3
  },
  {
    "question": "When the streams Biya and Katun join in Altai Krai, they form this mighty river. It is located in West Siberia, Russia and has many names- the Siberian Tatars call it Omar or Umar, the Samoyedes- Kolta or Kuay and to the Ostiaks it is known as the As, Yag, Kolta and Yema. It joins the Irtysh river, forming the longest river flow in Russia. What is its name?",
    "options": [
      "Ural",
      "Volga",
      "Ob",
      "Lena"
    ],
    "correctIndex": 2
  },
  {
    "question": "Although the Amazon river is generally regarded as the second-longest in the world, it is the river with greatest total flow, carrying more than the Mississippi, Nile, and Yangtze rivers combined.  It ends in the Atlantic Ocean, but it is believed to begin its long journey from this mountain peak.",
    "options": [
      "Nevado Mismi",
      "Misti",
      "Cotopaxi",
      "Mount Chimborazo"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is the longest river in Asia and its Chinese name, Chang Jiang, is literally translated to Long River. The critically endangered Chinese River Dolphin and Chinese paddlefish live only in this river. It takes its source in the Qinghai Province, flows for 6,380km (3964miles) and finally empties into the East China Sea. What is the name of this river?",
    "options": [
      "Irtysh",
      "Huai River",
      "Yangtze",
      "Mekong"
    ],
    "correctIndex": 2
  },
  {
    "question": "Huang He is the second-longest river in China. Its source is in the Kunlun Mountains at 4,500m (14,764 feet) above sea level. Due to the silts that the river carries, the color of its waters becomes so unnatural that it gave the name of the river . What is the color of the waters of Huang He?",
    "options": [
      "Brown",
      "Orange",
      "Yellow",
      "Red"
    ],
    "correctIndex": 2
  },
  {
    "question": "It is the second-longest river in the United States. The longest one, Missouri, joins it to form the longest river flow in North America. This river flows through ten states- Minnesota, Wisconsin, Iowa, Illinois, Missouri, Kentucky, Arkansas, Tennessee, Mississippi and Louisiana and mouths into the Gulf of Mexico. I am not going to ask you about its name, but about its source. What is the origin of the Mississippi river?",
    "options": [
      "Lake Superior",
      "Lake Pepin",
      "Lake Itasca",
      "Cass Lake"
    ],
    "correctIndex": 2
  },
  {
    "question": "This is the twelfth-longest river in the world. It runs through China, Myanmar, Thailand, Laos, Cambodia and Vietnam. There are various theories about the source and the exact length of the river because there are several effluents of it that are too difficult to explore. Due to the many rapids and waterfalls, as well as the extreme changes in the flow of the river, sailing is extremely difficult. What is the name of this river?",
    "options": [
      "Mekong",
      "Saskatchewan",
      "Angara",
      "Brahmaputra"
    ],
    "correctIndex": 0
  },
  {
    "question": "The longest river in Europe is Volga. But do you know which is the second longest one? It flows through several major European cities, such as Ulm, Vienna, Bratislava, Budapest and Belgrade. The river empties in the Black Sea on the terrirories of Romania and Ukraine.",
    "options": [
      "Don",
      "Dniepr",
      "Danube",
      "Emba"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Ganges river is considered to be a holy in India. There is a Hindu legend that the river was created from the sweat of the feet of Vishnu, collected by Brahma. According to Hindu beliefs, if you bathe in the waters of Ganges, it will wash away your sins. However this is not very hygienic, as the river is badly polluted by cremated corpses, carcasses, waste from factories and more.  Where does this river empty?",
    "options": [
      "The Bay of Bengal",
      "Lop Nur",
      "The Quarry Bay",
      "Kara Sea"
    ],
    "correctIndex": 0
  },
  {
    "question": "Victoria Falls is one of the most spectacular waterfalls in the world. The falls are named after Queen Victoria by David Livingstone, the explorer who visited them in 1855. The falls are 128 m (420 ft) high and are situated on this river.",
    "options": [
      "Zambezi",
      "Congo",
      "Gambia",
      "Orange"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Nile is generally considered the longest river in the world.  The source of this mighty river remained unknown for centuries. Finally Lake Victoria was decided to be its source, although there are other theories. Lake Victoria is located on the territories of these three countries.",
    "options": [
      "Sudan, Ethiopia and Kenya",
      "Zambia, Angola and Sudan",
      "Uganda, Kenya and Tanzania",
      "Egypt, Morocco and Zimbabwe"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the line, which is the same distance from the North Pole and South Pole and runs horizontally around the world.",
    "options": [
      "Tropic of Capricorn",
      "Equator",
      "Tropic of Cancer",
      "Prime Meridian"
    ],
    "correctIndex": 1
  },
  {
    "question": "What term refers to the horizontal line, 23.5 degrees S, which passes through South America, Africa, and Australia?",
    "options": [
      "Tropic of Cancer",
      "Prime Meridian",
      "Tropic of Capricorn",
      "Equator"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which continents are entirely in the Southern Hemisphere?",
    "options": [
      "South America, Africa, and Australia",
      "Australia and Antarctica",
      "South America, Australia and Antarctica",
      "South America and Australia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which continents (landmasses, not peripheral islands) are entirely in the Northern Hemisphere?",
    "options": [
      "North America and Europe",
      "Europe, Africa and Asia",
      "North America, Africa, and Asia",
      "North America, Europe, and Asia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which continents are entirely in the Western Hemisphere?",
    "options": [
      "North America, Europe, and Asia",
      "Europe, Asia, Africa, Australia",
      "Australia and Antarctica",
      "North America and South America"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which feature on a map helps determine direction?",
    "options": [
      "a key",
      "a legend",
      "a compass rose",
      "a scale"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these is not a type of map projection?",
    "options": [
      "Robinson",
      "Crusoe",
      "Mercator",
      "Interrupted"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these continents is largest (by territory)?",
    "options": [
      "South America",
      "Antarctica",
      "North America",
      "Europe"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these countries is smallest (by territory)?",
    "options": [
      "Seychelles",
      "Liechtenstein",
      "San Marino",
      "Marshall Islands"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these US cities is largest (by population)?",
    "options": [
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these mountains is highest?",
    "options": [
      "Puncak Jaya",
      "Mount McKinley",
      "Mount Elbrus",
      "Mount Kilimanjaro"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these lakes is deepest?",
    "options": [
      "Caspian Sea",
      "Malawi or Nyasa",
      "Tanganyika",
      "Issyk-Kul"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these rivers is longest?",
    "options": [
      "Lena",
      "Huang",
      "Amur",
      "Ob-Irtysh"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these seas is largest?",
    "options": [
      "Bering",
      "Arabian Sea",
      "Mediterranean",
      "Gulf of Mexico"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these deserts is largest?",
    "options": [
      "Chihuahuan",
      "Syrian",
      "Thar",
      "Great Sandy"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these inhabited places is wettest?",
    "options": [
      "Moulein",
      "Sylhet",
      "Baguio",
      "Lae"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these oceans has the greatest depth?",
    "options": [
      "Pacific Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean"
    ],
    "correctIndex": 0
  },
  {
    "question": "The rivers - the Tajo, the Ebro, the Duero, and the Guadiana, are located in this country.",
    "options": [
      "Columbia",
      "Portugal",
      "Spain",
      "Brazil"
    ],
    "correctIndex": 2
  },
  {
    "question": "The volcanoes - Akan, Aso, Mount Fuji and Rausu are located in this country.",
    "options": [
      "Japan",
      "Malaysia",
      "North Korea",
      "Indonesia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Onega, Khanka and Chudskoye are three of the many lakes in this country.",
    "options": [
      "Kazakhstan",
      "Mongolia",
      "Ukraine",
      "Russia"
    ],
    "correctIndex": 3
  },
  {
    "question": "The valleys of the Yellow River and the Pearl River are two of the seven main national valleys in this country.",
    "options": [
      "Burma",
      "China",
      "Thailand",
      "India"
    ],
    "correctIndex": 1
  },
  {
    "question": "Pico da Bandeira, Pico do Cruzeiro and Pedra da Mina are three of the numerous mountains located in this South American country.",
    "options": [
      "Argentina",
      "Chili",
      "Brazil",
      "Peru"
    ],
    "correctIndex": 2
  },
  {
    "question": "Chauvet Cave and Meyrieres Cave are two caves located in this European state.",
    "options": [
      "France",
      "Netherlands",
      "Spain",
      "Belgium"
    ],
    "correctIndex": 0
  },
  {
    "question": "Kainji Lake and Lake Chad are considered lakes of this country.",
    "options": [
      "Niger",
      "Nigeria",
      "Cameroon",
      "Chad"
    ],
    "correctIndex": 1
  },
  {
    "question": "Mitchell, Jardine, Staaten, Flinders, Leichhardt, and Nicholson are just few of the rivers in this country.",
    "options": [
      "Indonesia",
      "Australia",
      "Papua New Guinea",
      "New Zealand"
    ],
    "correctIndex": 1
  },
  {
    "question": "Kaskaspakte, Akka and Sielmmacohkka are three mountains in this country.",
    "options": [
      "Norway",
      "Finland",
      "Denmark",
      "Sweden"
    ],
    "correctIndex": 3
  },
  {
    "question": "Dasht-e Kavir and Kavir-e Lut are deserts located in this Asian country.",
    "options": [
      "India",
      "Iran",
      "Pakistan",
      "Iraq"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which two countries border the Dead Sea?",
    "options": [
      "Jordan and Israel",
      "Lebanon and Jordan",
      "Syria and Jordan",
      "Lebanon and Israel"
    ],
    "correctIndex": 0
  },
  {
    "question": "Is it true that Yasseir Arafat became chairman of the Palestinian Liberation Organization in 2004?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 1
  },
  {
    "question": "What are the three Benelux countries?",
    "options": [
      "Belgium, Netherlands and Luxembourg",
      "Finland, Sweden and Denmark",
      "The U.S.A., Canada and Mexico",
      "Honduras, Nicaragua and Belize"
    ],
    "correctIndex": 0
  },
  {
    "question": "Did the 13 colonies declare their independence in 1776?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Europe is the smallest continent.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What are the Tropic of Cancer and the Tropic of Capricorn?",
    "options": [
      "Lines of latitude",
      "Lines of longitude",
      "Parallel to the Greenwhich Meridian",
      "None of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which statement about the emu and the kangaroo is not true?",
    "options": [
      "Both are indigenous only to Australia.",
      "Both are on the national emblem of Australia.",
      "Both are incapable of flying.",
      "Both are incapable of  walking backwards."
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the former name of the city of Istanbul ?",
    "options": [
      "Constantinople",
      "Persia",
      "Zaire",
      "Siam"
    ],
    "correctIndex": 0
  },
  {
    "question": "Where would you find the shortest river in the world?",
    "options": [
      "Wales",
      "Ecuador",
      "Tasmania",
      "Montana"
    ],
    "correctIndex": 3
  },
  {
    "question": "What major geographical feature is located at 23.5 degrees North latitude?",
    "options": [
      "The Equator",
      "The Arctic Circle",
      "The Tropic of Capricorn",
      "The Tropic of Cancer"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which would be found at 39 degrees 43 minutes North latitude?",
    "options": [
      "The Tropic of Cancer",
      "The Tropic of Capricorn",
      "The majority of the Mason-Dixon Line.",
      "The border between Canada and  Washington State."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which country held the record for the highest birth rate in the 2005 world statistics?",
    "options": [
      "Niger",
      "Uganda",
      "Mali",
      "Vatican City"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many US states border the Gulf of Mexico?",
    "options": [
      "4",
      "3",
      "5",
      "10"
    ],
    "correctIndex": 2
  },
  {
    "question": "Measuring at the Equator, what is the closest approximation of the Earths circumference?",
    "options": [
      "24,900,000 miles",
      "24,900 miles",
      "249,000 miles",
      "2,490,000 miles"
    ],
    "correctIndex": 1
  },
  {
    "question": "The people of which country watched the most TV per week in 2005?",
    "options": [
      "Thailand",
      "The Philippines",
      "The USA",
      "Egypt"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many US states border the Pacific Ocean?",
    "options": [
      "11",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of these ski resorts is not located in the Alps?",
    "options": [
      "Kitzbuhel",
      "Zermatt",
      "Mont-Tremblant",
      "Chamonix-Mont-Blanc"
    ],
    "correctIndex": 2
  },
  {
    "question": "The tallest mountain peak in the US is Mount McKinley. This is the second tallest.",
    "options": [
      "Mount Saint Elias",
      "Glacier Peak",
      "Mount Washington",
      "Gannett Peak"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these mountains is not a volcano?",
    "options": [
      "Mauna Kea",
      "Mount St. Helens",
      "Mount Vesuvius",
      "Mount Aspiring"
    ],
    "correctIndex": 3
  },
  {
    "question": "The highest mountain peak on our planet is Mount Everest. It was first climbed by Edmund Hillary and Tenzing Norgay on May 29, 1953. What is the home country of Sir Edmund Hillary?",
    "options": [
      "United Kingdom",
      "The United States",
      "France",
      "New Zealand"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which saltwater lake, bordered on the west by Azerbaijan and Russia, is the largest inland body of water in the world?",
    "options": [
      "Tanganyika",
      "Victoria",
      "Baikal",
      "Caspian Sea"
    ],
    "correctIndex": 3
  },
  {
    "question": "This country, situated in North Europe, has almost 200 000 lakes - more than any other country in the world.",
    "options": [
      "Finland",
      "Sweden",
      "The Netherlands",
      "Georgia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which body of water, situated in Southern Siberia, is the deepest and oldest freshwater lake on Earth?",
    "options": [
      "Onega",
      "Ladoga",
      "Huron",
      "Baikal"
    ],
    "correctIndex": 3
  },
  {
    "question": "This water body, which is South Americas largest freshwater lake, is the highest commercially navigable lake.",
    "options": [
      "Nyasa",
      "Nicaragua",
      "Titicaca",
      "Michigan"
    ],
    "correctIndex": 2
  },
  {
    "question": "This country has more than 60% of worlds lakes due to its special drainage system.",
    "options": [
      "Australia",
      "Russia",
      "Canada",
      "The USA"
    ],
    "correctIndex": 2
  },
  {
    "question": "This freshwater-lake island, with a surface area of 2,766 km\u00b2, is the biggest on Earth.",
    "options": [
      "Islandlake",
      "Ainslie",
      "Manitoulin Island",
      "Isle of Wight"
    ],
    "correctIndex": 2
  },
  {
    "question": "What Canadian lake is the largest in the world, located on an island?",
    "options": [
      "Nettilling Lake",
      "Aral",
      "Winnipeg",
      "Michigan"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is the lowest lake on Earth, situated at about 400 meters below sea level on the border between Israel and Jordan.",
    "options": [
      "Issyk-Kul",
      "Balkhash",
      "Urmia",
      "Dead Sea"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which tiny lake located in Tibet is the highest lake on Earth?",
    "options": [
      "Lhagba Pool",
      "Rush Lake",
      "Laguna Lobato",
      "Poquentica Lake"
    ],
    "correctIndex": 0
  },
  {
    "question": "With a surface area of about 82,000 km\u00b2, this lake between Ontario and Minnesota is the largest single freshwater lake in the world.",
    "options": [
      "Turkana",
      "Michigan",
      "Lake Superior",
      "Onega"
    ],
    "correctIndex": 2
  },
  {
    "question": "The word volcano comes from the name of the Roman god of fire, Vulcan. Who is the analogue of Vulcan in Greek mythology?",
    "options": [
      "Hephaestus",
      "Helios",
      "Hermes",
      "Zeus"
    ],
    "correctIndex": 0
  },
  {
    "question": "If magma contains more than 65% silica, the lava is called this.",
    "options": [
      "felsic or acidic",
      "thick",
      "mafic or basic",
      "dense"
    ],
    "correctIndex": 0
  },
  {
    "question": "Phreatic eruptions occur when the temperature of magma is relatively low and it solidifies very quickly, sometimes blocking the vent of the volcano.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Yellowstone Caldera is considered a supervolcano because within the past two million years it has erupted extremely violently three times . The most recent eruption occurred this long ago, and spread volcanic ash over most of the North American continent.",
    "options": [
      "1,510,000 years",
      "40,000 years",
      "640,000 years",
      "17,000 years"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following states of America is an inland one and has an official motto that does not come from Latin?",
    "options": [
      "Montana",
      "Virginia",
      "Oklahoma",
      "South Carolina"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following states has an official motto In God we trust, which is also the official motto of the United States of America?",
    "options": [
      "Georgia",
      "Washington",
      "South Dakota",
      "Florida"
    ],
    "correctIndex": 3
  },
  {
    "question": "Three of these US states have an official motto related to liberty. Spot the odd one.",
    "options": [
      "Iowa",
      "Oklahoma",
      "New Jersey",
      "New Hampshire"
    ],
    "correctIndex": 1
  },
  {
    "question": "This famous Latin maxim, which is the official motto of South Carolina, means While I breathe, I hope.",
    "options": [
      "Si quaeris peninsulam amoenam circumspice",
      "Nil sine numine",
      "Salus populi suprema lex esto",
      "Dum spiro spero"
    ],
    "correctIndex": 3
  },
  {
    "question": "Three of the following US states have a motto consisting of one single word in English. Which one does not belong to the group?",
    "options": [
      "Utah",
      "Texas",
      "West Virginia",
      "Rhode Island"
    ],
    "correctIndex": 2
  },
  {
    "question": "North to the Future is the official motto of this US state, which is the largest in area.",
    "options": [
      "Texas",
      "Alaska",
      "Nevada",
      "Colorado"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following maxims, meaning The people rule, is the official state motto of Arkansas?",
    "options": [
      "Esto perpetua",
      "Regnat populus",
      "Dirigo",
      "Ditat Deus"
    ],
    "correctIndex": 1
  },
  {
    "question": "This famous exclamation, which has been attributed to ancient scientist Archimedes, is the official state motto of California.",
    "options": [
      "Excelsior!",
      "Virtute et armis",
      "Ad astra per aspera",
      "Eureka"
    ],
    "correctIndex": 3
  },
  {
    "question": "The official motto of this state in the Pacific Northwest of the United States comes from Chinook Jargon.",
    "options": [
      "Wisconsin",
      "Washington",
      "Pennsylvania",
      "New York"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these states has an official motto that doesnt include the word rights in it?",
    "options": [
      "Iowa",
      "Indiana",
      "Wyoming",
      "Alabama"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which volcano, located on Ross Island, Antarctica, is the southernmost active volcano on Earth?",
    "options": [
      "Mayon Volcano",
      "Cold Bay Volcano",
      "Mount Erebus",
      "Teide"
    ],
    "correctIndex": 2
  },
  {
    "question": "This volcano, which is the largest in Europe, is located on the largest island in the Mediterranean Sea.",
    "options": [
      "Mount Etna",
      "Hekla",
      "El Misti",
      "Santorini"
    ],
    "correctIndex": 0
  },
  {
    "question": "Popocat\u00e9petl, a volcano whose name means Smoking Mountain, is 70 km away from the capital of which American country?",
    "options": [
      "Mexico",
      "Peru",
      "Canada",
      "Argentina"
    ],
    "correctIndex": 0
  },
  {
    "question": "Mount Vesuvius, that is notorious for the destruction of two Roman cities in the year 79, was linked most closely to which hero and demigod?",
    "options": [
      "Asclepius",
      "Apollo",
      "Zeus",
      "Hercules"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the biggest extinct volcano in Ecuador, situated in the Andes mountain.",
    "options": [
      "Chimborazo",
      "Ojos Del Salado",
      "Llullaillaco",
      "Cotopaxi"
    ],
    "correctIndex": 0
  },
  {
    "question": "This dormant volcano, which is 66 km northeast of Tehran, is the symbol of Iranian resistance against foreign rule.",
    "options": [
      "Mount Hood",
      "Krakatoa",
      "Mount Damavand",
      "Krafla"
    ],
    "correctIndex": 2
  },
  {
    "question": "This active volcano, whose name means long mountain in Hawaiian, is one of the five peaks that form the Island of Hawaii.",
    "options": [
      "Cotopaxi",
      "Mauna Loa",
      "Mount Kea",
      "Hekla"
    ],
    "correctIndex": 1
  },
  {
    "question": "What volcano located on the island of Tenerife represents the highest mountain on Spanish territories?",
    "options": [
      "Teide",
      "Stromboli",
      "Santorini",
      "Duvalo"
    ],
    "correctIndex": 0
  },
  {
    "question": "The name of this volcano, located on the Alaska Peninsula, means new eruption.",
    "options": [
      "Newatsa",
      "Mount Rainier",
      "Novarupta",
      "Mount Hood"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which is the volcanically active region that is situated in a famous national US park and has a territory of 55 kilometers by 72 kilometers?",
    "options": [
      "Yosemite Valley",
      "Yellowstone Caldera",
      "Mount Shasta",
      "Cold Bay Volcano"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where is the southernmost point in all 50 states?",
    "options": [
      "Texas",
      "Hawaii",
      "Florida",
      "California"
    ],
    "correctIndex": 1
  },
  {
    "question": "And where is the lowest point in the USA, North America, and western hemisphere? I need the state and national park name.",
    "options": [
      "Maine, Acadia NP",
      "California, Death Valley NP",
      "Arizona, Grand Canyon NP",
      "Wyoming, Yellowstone NP"
    ],
    "correctIndex": 1
  },
  {
    "question": "The state with the largest area in the lower 48 is?",
    "options": [
      "California",
      "Texas",
      "Montana",
      "Arizona"
    ],
    "correctIndex": 1
  },
  {
    "question": "England, Norway, Belgium and Denmark all border this sea.",
    "options": [
      "Baltic sea",
      "Black sea",
      "North sea",
      "Aegean sea"
    ],
    "correctIndex": 2
  },
  {
    "question": "Towards the beginning of the new millennium, three of these four countries had a population of approximately 32 million people. Which is the odd one?",
    "options": [
      "Algeria",
      "Kenya",
      "Colombia",
      "Morocco"
    ],
    "correctIndex": 2
  },
  {
    "question": "Canada, the United States and China are three countries whose total area is approximately 12 million sq km.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The US is one of the leading countries in the number plastic surgery procedures.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "In the beginning of the new millennium, Russias, Iraqs and Saudi Arabias oil reserves were above 100 billion bbl.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "USA is considered to be one of the most popular destinations, where thousands of immigrants come to seek asylum. Just one of these four states is similar in to USA in this respect.",
    "options": [
      "France",
      "Finland",
      "Japan",
      "Portugal"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ireland, Germany and Austria are famous for the high consumption of this alcohol.",
    "options": [
      "Brandy",
      "Beer",
      "Wine",
      "Vodka"
    ],
    "correctIndex": 1
  },
  {
    "question": "Dominica, New Zealand and Finland are three countries with high crime rates.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "All of these countries and commonwealth territories have a high divorce rate except one.",
    "options": [
      "Puerto Rico",
      "Russia",
      "Sri Lanka",
      "Qatar"
    ],
    "correctIndex": 2
  },
  {
    "question": "This island is well known in scientific fields for being home of five percent of the worlds plant and animal species, with 80% of them unique to it. The island is also the fourth biggest on Earth, with population of about 17,500,000 people.",
    "options": [
      "Greenland",
      "Madagascar",
      "New Guinea",
      "Tasmania"
    ],
    "correctIndex": 1
  },
  {
    "question": "In Greek mythology, this island is the legendary birthplace of the goddess of beauty, love, and passion, the charming Aphrodite, where according to the legend, she emerged from the sea foam.",
    "options": [
      "Crete",
      "Cyprus",
      "Limnos",
      "Rhodes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Because of its spectacular nature forms, one of this insular countrys islands has been a set for the filming of many movie productions, including the highly successful, Lord of the Rings and The Chronicles of Narnia.",
    "options": [
      "The Philippines",
      "New Zealand",
      "Indonesia",
      "New Guinea"
    ],
    "correctIndex": 1
  },
  {
    "question": "Despite being the largest in the world, this island is sparsely populated, due to its unfavourable climate.",
    "options": [
      "Greenland",
      "New Guinea",
      "Victoria Island",
      "Madagascar"
    ],
    "correctIndex": 0
  },
  {
    "question": "Being the most populous in the world, with bigger population than Australia and Antarctica, the density of this islands inhabitants forced the countrys government to start transmigration programs, aimed at resettling people to other, less-crowded parts of the country.",
    "options": [
      "Java",
      "Sumatra",
      "Borneo",
      "Sulawesi"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is the largest island in the Mediterranean Sea, famous for one of the worlds most active volcanoes - Etna.",
    "options": [
      "Sicily",
      "Crete",
      "Sardinia",
      "Corse"
    ],
    "correctIndex": 0
  },
  {
    "question": "Al Nakheel Properties, one of the leading real estate developers in Dubai and creator of the worldwide famous Palm Islands, is also the initiator of another grand project of artificial islands, which resembles the shape of what?",
    "options": [
      "A seashell",
      "The globe",
      "A human face",
      "A dolphin"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following is a traditional Vietnamese clothing, worn primarily by women?",
    "options": [
      "Qipao",
      "\u00c1o d\u00e0i",
      "Nhu",
      "Raglan"
    ],
    "correctIndex": 1
  },
  {
    "question": "The gowni is a typical national costume in which African country?",
    "options": [
      "Tanzania",
      "Malawi",
      "Uganda",
      "Indonesia"
    ],
    "correctIndex": 0
  },
  {
    "question": "These knee-breeches made of leather are a traditional Bavarian garment.",
    "options": [
      "Kilt",
      "Lederhosen",
      "Kisen",
      "Wrestlers"
    ],
    "correctIndex": 1
  },
  {
    "question": "Hijab, which is also a term meaning barrier, is worn as a traditional clothing in which countries?",
    "options": [
      "African",
      "European",
      "Arabic",
      "Latin"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these national costumes is closely related to Sikhism - a religion that comes from 16th-century northern India?",
    "options": [
      "Khalsa",
      "Sari",
      "Turban",
      "Sayyid"
    ],
    "correctIndex": 2
  },
  {
    "question": "Barong is the embroidered formal garment of which country in South-East Asia?",
    "options": [
      "Russia",
      "Indonesia",
      "The Philippines",
      "Japan"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these national costumes does not belong to a European nation?",
    "options": [
      "Hanfu",
      "Tracht",
      "Kilt",
      "Kroje"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of the following national costumes is not Chinese?",
    "options": [
      "Kente cloth",
      "Qipao",
      "Cheongsam",
      "Mao suit"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these pieces of clothing is worn on the head?",
    "options": [
      "Fez",
      "Mitumba",
      "Koto",
      "Kiondo"
    ],
    "correctIndex": 0
  },
  {
    "question": "Three of the enlisted national garments are African, while the fourth one is Norwegian. Which one?",
    "options": [
      "Sanafil",
      "Bunad",
      "Dashiki",
      "Boubou"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to the legend, which of these is a part of the Three Fortunate Concealments that protect Britain from any danger coming from the sea?",
    "options": [
      "The head of Bran the Blessed",
      "Stone of Destiny",
      "The Dragons",
      "The bones of Gwerthefyr the Blessed"
    ],
    "correctIndex": 0
  },
  {
    "question": "While driving or walking down Kings Cross Road and Farringdon Road in London few people are aware that unseen beneath them runs which river?",
    "options": [
      "River Thames",
      "River Avon (Shakespeares Avon)",
      "River Rhodda",
      "River Fleet"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who made the statue of King Richard I outside the Houses of Parliament in Old Palace Yard in London?",
    "options": [
      "John Doubleday",
      "Baron Carlo Marochetti",
      "Sir George Frampton",
      "Joseph Edgar Boehm"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Great Pavement, a hidden, unknown to most tourists and seldom-displayed treasure, is located in which building in London?",
    "options": [
      "Buckingham Palace",
      "Tate Gallery",
      "St Jamess Palace",
      "Westminster Abbey"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Jewel Tower, built in 1366, is physically separated from the Palace of Westminster in London.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The famous department store Harrods that occupies an entire block is located on which road in London?",
    "options": [
      "Abbey Road",
      "Threadneedle Street",
      "Brompton Road",
      "Fleet Street"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Old Royal Observatory, which is a part of the National Maritime Museum in London, was built in what year?",
    "options": [
      "1675",
      "1765",
      "1567",
      "1657"
    ],
    "correctIndex": 0
  },
  {
    "question": "This famous writer, whose house was at 17 Gough Square in London, said: When a man is tired of London, he is tired of life, for there is in London all life can afford.",
    "options": [
      "Charles Dickens",
      "Dr Samuel Johnson",
      "Thomas Chestre",
      "Tomas John Dibdin"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Badwater basin, the lowest point in North America, is located in which US valley?",
    "options": [
      "Sun Valley",
      "Death Valley",
      "Big Smoky Valley",
      "Hudson Valley"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Big Smoky Valley, that runs between the Toiyabe Range and the Toquima Range, is located in which US state?",
    "options": [
      "Minnesota",
      "Indiana",
      "Oregon",
      "Nevada"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Grand Valley is an extended populated agricultural valley located along which US river?",
    "options": [
      "Alabama River",
      "Mississippi River",
      "Colorado River",
      "Missouri River"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which scenic US valley was described by conservationist John Muir in the following way: (...) None can escape its charms. Its natural beauty cleans and warms like a fire, and you will be willing to stay forever in one place like a tree.?",
    "options": [
      "Willamette Valley",
      "Yosemite Valley",
      "Sun Valley",
      "Yakima Valley"
    ],
    "correctIndex": 1
  },
  {
    "question": "This densely populated valley in the state of Utah is enclosed by steep mountains in every direction except the northwest.",
    "options": [
      "St. Lawrence Valley",
      "Livermore Valley",
      "Las Vegas Valley",
      "Salt Lake Valley"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Shenandoah Valley in western Virginia derives its name from a Native American expression meaning what?",
    "options": [
      "Beautiful Daughter of the Fields",
      "Beautiful Mother of the Fruits",
      "Beautiful Mother of the Land",
      "Beautiful Daughter of the Stars"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Sonoma Valley in California is famous in the USA for its long-lived and high quality wine industry.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Menomonee Valley along the Menomonee River in Milwaukee, Wisconsin has what peculiar shape?",
    "options": [
      "S-shape",
      "Y-shape",
      "U-shape",
      "V-shape"
    ],
    "correctIndex": 2
  },
  {
    "question": "Owens Valley, the arid ranching valley of the Owens River, stretches for approximately 75 miles (120 km) on the territory of which US state?",
    "options": [
      "California",
      "Arkansas",
      "Alabama",
      "Arizona"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to the 2000 Census, what is the approximate population of The Bronx, New York?",
    "options": [
      "530,000",
      "1.3 million",
      "930,000",
      "130,000"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who was the first European to see The Bronx, NY?",
    "options": [
      "Henry Hutchinson",
      "Jonas Bronck",
      "Henry Hudson",
      "Jonas Valerian"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of these statements is true about The Bronx, NY?",
    "options": [
      "The only borough with a zoo",
      "The only borough  that has no colleges",
      "The only borough that is not an island",
      "The highest  borough above sea level ."
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1643, a Native American uprising killed this unauthorized Puritan preacher of a dissident church discussion group, and pioneer in Rhode Island and the Bronx.",
    "options": [
      "Peter Cooper",
      "Richard Morris",
      "Anne Hutchinson",
      "Roger Williams"
    ],
    "correctIndex": 2
  },
  {
    "question": "This oldest house in The Bronx, build in 1748, is New York Citys first house museum, operated since 1897 as a public museum by The National Society of Colonial Dames in the State of New York.",
    "options": [
      "Valerian House",
      "Van Cortlandt House",
      "Throgs Neck",
      "Fordam Arms"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1776, 400 British and Hessian troops land in The Bronx.  A group of 400 American troops held them off while Washington got the main army away safely.  What was this battle called ?",
    "options": [
      "The Battle of Pells Point",
      "The Battle of Throgs Neck",
      "The Battle of Eastchester",
      "The Battle of The Bronx"
    ],
    "correctIndex": 0
  },
  {
    "question": "The first college in The Bronx, known as this today, was built in 1884.",
    "options": [
      "Mercy College",
      "Manhattan College",
      "Fordham University",
      "Lehman College"
    ],
    "correctIndex": 2
  },
  {
    "question": "Edgar Allen Poe wrote this famous poem in The Bronx in 1846.",
    "options": [
      "Call Me Ishmal",
      "Our American War",
      "Annabel Lee",
      "Hiawatha"
    ],
    "correctIndex": 2
  },
  {
    "question": "In 1899, this  world famous institution was opened in The Bronx.",
    "options": [
      "Columbia University",
      "The U.S. Olympic Hall of Fame",
      "The Bronx Zoo",
      "The American Hall of Fame"
    ],
    "correctIndex": 2
  },
  {
    "question": "This world famous building opened in The Bronx in 1923.",
    "options": [
      "The Top of the Sixes",
      "Yankee Stadium",
      "The Louis Morris Building",
      "The Shlump Towers"
    ],
    "correctIndex": 1
  },
  {
    "question": "What are the colors on the flag of  The Bronx, NY?",
    "options": [
      "Red, White, Blue",
      "Blue, White, Green",
      "Blue, White, Orange",
      "Red, Green, Orange"
    ],
    "correctIndex": 2
  },
  {
    "question": "Little Rock is the capital and most populous city of this US state.",
    "options": [
      "Arkansas",
      "Wichita",
      "Kansas",
      "Topeka"
    ],
    "correctIndex": 0
  },
  {
    "question": "What US state borders the states of Virginia, Kentucky, Ohio, Pennsylvania and Maryland?",
    "options": [
      "Tennessee",
      "Virginia",
      "West Virginia",
      "North Carolina"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which US state is nicknamed The Pine Tree State?",
    "options": [
      "New Hampshire",
      "Missouri",
      "Massachusetts",
      "Maine"
    ],
    "correctIndex": 3
  },
  {
    "question": "The southern region of what US state is known as Little Egypt?",
    "options": [
      "Virginia",
      "Illinois",
      "Ohio",
      "Maryland"
    ],
    "correctIndex": 1
  },
  {
    "question": "The capital city of this US state is Trenton, and its largest city is Newark.",
    "options": [
      "Montana",
      "New Hampshire",
      "New Mexico",
      "New Jersey"
    ],
    "correctIndex": 3
  },
  {
    "question": "The name of which American state means red people in the Choctaw language?",
    "options": [
      "Ohio",
      "Oklahoma",
      "North Dakota",
      "Oregon"
    ],
    "correctIndex": 1
  },
  {
    "question": "What US state is known as The Volunteer State?",
    "options": [
      "Utah",
      "Delaware",
      "Tennessee",
      "Colorado"
    ],
    "correctIndex": 2
  },
  {
    "question": "The flag of what US state features a gold torch and nineteen stars on a blue rectangular field?",
    "options": [
      "Illinois",
      "Idaho",
      "Indiana",
      "Iowa"
    ],
    "correctIndex": 2
  },
  {
    "question": "What US state is known as the Peach State?",
    "options": [
      "Louisiana",
      "Georgia",
      "Montana",
      "Connecticut"
    ],
    "correctIndex": 1
  },
  {
    "question": "The name of this US state means flat water and is derived from the name of the Platte River that flows through the state.",
    "options": [
      "Montana",
      "Nebraska",
      "Utah",
      "Oklahoma"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which country is known as \u00d6sterreich in their native language?",
    "options": [
      "Bulgaria",
      "Germany",
      "Austria",
      "The Netherlands"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which countrys capital city is considered de facto capital of the European Union?",
    "options": [
      "UKs",
      "Hollands",
      "Belgiums",
      "Frances"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which country has the river Danube as most of its northern border?",
    "options": [
      "Austria",
      "Hungary",
      "Bulgaria",
      "Romania"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which EU member is divided into a Greek and a Turkish part?",
    "options": [
      "Greece",
      "Slovenia",
      "Cyprus",
      "Bulgaria"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which countrys first president was V\u00e1clav Havel, a writer and dramatist?",
    "options": [
      "Hungary",
      "Poland",
      "Czech Republic",
      "Slovakia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which Nordic country was first to enter the European Union?",
    "options": [
      "Denmark",
      "Sweden",
      "Finland",
      "Norway"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which European Union member is home to Santa Claus?",
    "options": [
      "Finland",
      "Cyprus",
      "Turkey",
      "Sweden"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the EU founding members is the country of Libert\u00e9, \u00c9galit\u00e9, Fraternit\u00e9?",
    "options": [
      "France",
      "UK",
      "Germany",
      "Italy"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which European Union member has the greatest number of islands?",
    "options": [
      "Greece",
      "Italy",
      "UK",
      "Denmark"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which country is the only member of the European Union that is partly located in Africa?",
    "options": [
      "France",
      "UK",
      "Spain",
      "Malta"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which EU member has a significant part of its territory below sea level?",
    "options": [
      "Belgium",
      "The Netherlands",
      "Poland",
      "Estonia"
    ],
    "correctIndex": 1
  },
  {
    "question": "This European Union member was once known for huge migration of its people, mainly to the US and UK. Nowadays, however, it attracts many immigrants from new EU members.",
    "options": [
      "Spain",
      "Ireland",
      "Italy",
      "Germany"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which EU member was the largest country in Europe in XIV century, but now has land area of just 65 000 sq. km?",
    "options": [
      "Denmark",
      "Lithuania",
      "Austria",
      "Netherlands"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which mini country was among the European Union founding members?",
    "options": [
      "Luxembourg",
      "Malta",
      "Monaco",
      "Liechtenstien"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which European Union member the native people make up only 60% of the total population?",
    "options": [
      "Poland",
      "Austria",
      "Latvia",
      "France"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which former British colony joined the European Union in 2004?",
    "options": [
      "Gibraltar",
      "Ireland",
      "Syria",
      "Malta"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which country is the biggest contributor to the European Union budget?",
    "options": [
      "UK",
      "Germany",
      "Italy",
      "France"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which country has twice rejected European Union membership in national referendums?",
    "options": [
      "Poland",
      "Norway",
      "Turkey",
      "UK"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which European Union member was the first country to reject communist rule and thus sparkle the liberation of so called Eastern Block?",
    "options": [
      "Czech Republic",
      "Romania",
      "Germany",
      "Poland"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where is the European Unions westernmost point not counting overseas territories?",
    "options": [
      "In Spains Canary islands",
      "In Portugals Azores islands",
      "In Iceland",
      "In Ireland"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which EU member state was known to the ancient Greeks and Romans as Dacia?",
    "options": [
      "Macedonia",
      "Bulgaria",
      "Romania",
      "Slovenia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which country is the youngest independent state to be a member of the European Union? (It has been an independent country only since 1993.)",
    "options": [
      "Montenegro",
      "Slovenia",
      "Slovakia",
      "Cyprus"
    ],
    "correctIndex": 2
  },
  {
    "question": "In May 2004 the European Union accepted 10 new countries. Which of them was first to adopt the Euro as its national currency?",
    "options": [
      "Slovenia",
      "Poland",
      "Slovakia",
      "Estonia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which country associated with banking is not a member of the European Union?",
    "options": [
      "Luxembourg",
      "UK",
      "Austria",
      "Switzerland"
    ],
    "correctIndex": 3
  },
  {
    "question": "In which country is the European Union\u2019s biggest lake located?",
    "options": [
      "In Finland",
      "In Poland",
      "In Sweden",
      "In Hungary"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which Muslim country was recognized as a candidate for accession in the EU on December 12th, 1999 at the Helsinki summit of the European Council?",
    "options": [
      "Israel",
      "Morocco",
      "Syria",
      "Turkey"
    ],
    "correctIndex": 3
  },
  {
    "question": "All but three European Union official languages are from the Indo-European family. They are Finnish, Estonian and which other language?",
    "options": [
      "Greek",
      "Hungarian",
      "Polsih",
      "Bulgarian"
    ],
    "correctIndex": 1
  },
  {
    "question": "Most of the European Union members are also part of a Schengen Agreement that allows their citizens to travel without passports across the member states. Which EU member is outside of the Schengen group?",
    "options": [
      "Lithuania",
      "UK",
      "Poland",
      "Denmark"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which member of the European Union completely surrounds two countries that are outside of the club?",
    "options": [
      "Austria",
      "France",
      "Spain",
      "Italy"
    ],
    "correctIndex": 3
  },
  {
    "question": "The head of John the Baptist can be seen in the Amiens Cathedral.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Wat Chiang Man is a temple in Thailand. In it, fifteen of these animals represent a sea of unformed matter upon which the cosmos of the Chedi floats.",
    "options": [
      "Fish",
      "Monkeys",
      "Birds",
      "Elephants"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Shaolin temples are perhaps the Buddhist monasteries best known in the West. The word Shaolin means this.",
    "options": [
      "Blue Sky",
      "Silent Soul",
      "Young Forest",
      "Pure Water"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which EU country or US state is not entirely situated on (an) island(s)?",
    "options": [
      "UK",
      "Hawaii",
      "Rhode Island",
      "Cyprus"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which country or state was the first to be attacked in WWII?",
    "options": [
      "Denmark",
      "Hawaii",
      "Poland",
      "US Virgin Islands"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where was the colonial settlement New Amsterdam located?",
    "options": [
      "UK",
      "New Jersey",
      "Holland",
      "The state of New York"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is the largest in terms of area?",
    "options": [
      "Georgia",
      "Florida",
      "Germany",
      "Finland"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these peaks is the highest?",
    "options": [
      "Grossglockner (Austria)",
      "McKinley (Alaska)",
      "Mont Blanc (France)",
      "Mount Elbert (Colorado)"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following metropolitan areas is the largest in terms of population?",
    "options": [
      "London",
      "New York City",
      "Paris",
      "Los Angeles"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which river, flowing entirely through a single country or state, is the longest?",
    "options": [
      "Vistula (Poland)",
      "Loire (France)",
      "Iowa (Iowa)",
      "Illinois (Illinois)"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the location of the worlds largest particle physics laboratory, established in 1954?",
    "options": [
      "In the EU",
      "Both have laboratories of equal size.",
      "In the US",
      "In neither of them"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following countries and states shares its name with its capital city?",
    "options": [
      "New York",
      "Malta",
      "Luxembourg",
      "Oklahoma"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these cities was established first?",
    "options": [
      "New York City (New York)",
      "Copenhagen (Denmark)",
      "Madrid (Spain)",
      "Boston (Massachusetts)"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following flags doesnt include a cross?",
    "options": [
      "the flag of Mississippi",
      "the flag of the UK",
      "the flag of Denmark",
      "the flag of Alaska"
    ],
    "correctIndex": 3
  },
  {
    "question": "Birmingham is the most populous city of which country or US state?",
    "options": [
      "Austria",
      "Alabama",
      "the UK",
      "Utah"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which one of these is not a Greek Mediterranean island?",
    "options": [
      "Minorca",
      "Lemnos",
      "Crete",
      "Santorini"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these Mediterranean islands is the smallest in area?",
    "options": [
      "Corsica",
      "Cyprus",
      "Crete",
      "Corfu"
    ],
    "correctIndex": 3
  },
  {
    "question": "What two colors are featured on the flag and coat of arms of Malta, a country consisting of seven Mediterranean islands?",
    "options": [
      "Green and black",
      "Yellow and purple",
      "White and red",
      "Blue and yellow"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of these Mediterranean islands, belonging to Italy, is the largest in area?",
    "options": [
      "Sardinia",
      "Procida",
      "Capri",
      "Ischia"
    ],
    "correctIndex": 0
  },
  {
    "question": "This island, on which the volcano Etna is situated, is the largest Mediterranean island.",
    "options": [
      "Sicily",
      "Corsica",
      "Rhodes",
      "Sardinia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which French Mediterranean island is the birthplace of Napol\u00e9on Bonaparte?",
    "options": [
      "Cyprus",
      "Gozo",
      "Corsica",
      "Montecristo"
    ],
    "correctIndex": 2
  },
  {
    "question": "Complete the lyrics of this 1999 hit single by the Vengaboys, referring to a Spanish island:",
    "options": [
      "Ibiza",
      "Majorca",
      "Formentera",
      "Cabrera"
    ],
    "correctIndex": 0
  },
  {
    "question": "On April 11, 2002, Al-Qaeda carried out a terrorist attack near a synagogue on which Tunisian island?",
    "options": [
      "Djerba",
      "Yalikavak",
      "Salih Ada",
      "Kargi Adasi"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these Mediterranean islands does not belong to the group of the Balearic Islands?",
    "options": [
      "Ibiza",
      "Mallorca",
      "Capri",
      "Formentera"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these Mediterranean islands belongs to Croatia and is home of the endangered Griffon Vulture?",
    "options": [
      "Filfla",
      "Procida",
      "Cres",
      "Gorgona"
    ],
    "correctIndex": 2
  },
  {
    "question": "What motto do North Carolina license plates carry?",
    "options": [
      "The Old North State",
      "First In Flight",
      "Nothing Finer",
      "Tarheel State"
    ],
    "correctIndex": 1
  },
  {
    "question": "North Carolina has been well represented on the American Idol TV series Which contestant from the state became Americas Idol in 2004?",
    "options": [
      "Fantasia Barrino",
      "Kerrier Ann Pickler",
      "Clay Aiken",
      "Taylor Hicks"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1838 the Federal Indian Removal Policy was forced into effect by The Treaty of New Echota. Twenty Cherokee Indians, none elected officials of the Cherokee Nation, signed over all Cherokee Territory east of the Mississippi for five million dollars. The Cherokee Indians were then forced to march from their home in the mountain of North Carolina to Okalahoma. This journey became know by what name?",
    "options": [
      "Journey of No Return",
      "Trail of Tears",
      "Cherokee Death March",
      "March of Sorrow"
    ],
    "correctIndex": 1
  },
  {
    "question": "This military complex in North Carolina is one of the largest in the world and home to the 82 Airborne, the Golden Knights, and U.S. Army Special Operations Command.",
    "options": [
      "Fort Bragg",
      "Fort Campbell",
      "Fort Polk",
      "Fort Dix"
    ],
    "correctIndex": 0
  },
  {
    "question": "Riga is the capital of which Baltic country?",
    "options": [
      "Estonia",
      "Lithuania",
      "Belarus",
      "Latvia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What country gained independence from the British Mandate for Palestine in 1948?",
    "options": [
      "Syria",
      "Sierra Leone",
      "Jordan",
      "Israel"
    ],
    "correctIndex": 3
  },
  {
    "question": "What city is the capital of Madagascar?",
    "options": [
      "Antananarivo",
      "Toamasina",
      "Harare",
      "Maputo"
    ],
    "correctIndex": 0
  },
  {
    "question": "What river encountered during the Lewis and Clark expedition (1804-1806) flows directly into the Pacific Ocean between Washington and Oregon?",
    "options": [
      "Missouri",
      "Snake",
      "Columbia",
      "Colorado"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which explorer was the first to reach the South Pole?",
    "options": [
      "Richard Byrd",
      "Sir Robert Falcon Scott",
      "Roald Amundsen",
      "Sir Ernest Henry Shackleton"
    ],
    "correctIndex": 2
  },
  {
    "question": "What sea captain claimed British possession of the eastern part of Australia in 1770 naming it New South Wales?",
    "options": [
      "James Cook",
      "Horatio Nelson",
      "Cuthbert Collingwood",
      "Arthur Phillip"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what South American country was Che Ernesto Guevara born?",
    "options": [
      "Paraguay",
      "Argentina",
      "Bolivia",
      "Suriname"
    ],
    "correctIndex": 1
  },
  {
    "question": "Near what sea was the ancient city of Troy located ?",
    "options": [
      "Aegean",
      "Mediterranean",
      "Ionian",
      "Adriatic"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these rivers runs through the Czech Republic and Germany?",
    "options": [
      "Elbe River",
      "Rhine River",
      "Danube River",
      "Rhone River"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name the European co-principality whose heads of state are the President of France and the Bishop of Urgel.",
    "options": [
      "Andorra",
      "Vatican City",
      "San Marino",
      "Malta"
    ],
    "correctIndex": 0
  },
  {
    "question": "After World War II, this country was split into two states which were not reunited until 1990.",
    "options": [
      "France",
      "Spain",
      "Austria",
      "Germany"
    ],
    "correctIndex": 3
  },
  {
    "question": "Mount Erebus is a volcano located on this continent.",
    "options": [
      "Antarctica",
      "Europe",
      "South America",
      "Asia"
    ],
    "correctIndex": 0
  },
  {
    "question": "Rastafarianism is a religion that venerates Haile Selassie as a god. Haile Selassie was the emperor of the third most populous country in Africa. Name that country.",
    "options": [
      "Libya",
      "Ethiopia",
      "Mozambique",
      "Gabon"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name Asias most densely populated country which has about three million people and an area of less than 250 square miles (402 km\u00b2).",
    "options": [
      "Hokkaido",
      "Taiwan",
      "Laos",
      "Singapore"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what city in Switzerland is the headquarters of the World Trade Organization (WTO) located?",
    "options": [
      "Geneva",
      "Berne",
      "Born",
      "Bamako"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is a ridge of coral in the sea called?",
    "options": [
      "Atoll",
      "Coral Reef",
      "None of these",
      "Coral Island"
    ],
    "correctIndex": 1
  },
  {
    "question": "Jenin is the largest city in the West Bank.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "It has been found that the black mineral soil from the Dead Sea area of Israel helps maintain a good, young complexion. What is the name of the Israeli company that exports beauty products from the Dead Sea area?",
    "options": [
      "Naot",
      "Kfar Gideon",
      "Rafaele",
      "Ahava"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Dead Sea Scrolls, found in caves at Qumran, are believed to have been made by a group of people called what?",
    "options": [
      "BHais",
      "Sircurai",
      "Essenes",
      "Sarafai"
    ],
    "correctIndex": 2
  },
  {
    "question": "It is practically impossible to drown unwillingly in the Dead Sea.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "To which countrys territory does the Dead Sea belong?",
    "options": [
      "Egypt and Israel share ownership",
      "Israel and Jordan share ownership",
      "Israels territory",
      "Saudi Arabias territory"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the average salinity of the Dead Sea?",
    "options": [
      "11 %",
      "30 %",
      "49 %",
      "54 %"
    ],
    "correctIndex": 1
  },
  {
    "question": "What body of water feeds the Dead Sea?",
    "options": [
      "The Euphrates River",
      "The Mediterranean Ocean",
      "The Red Sea",
      "The Jordan River"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Bible tells the story of a woman that was turned into a pillar of salt near the Dead Sea. Who was her famous husband?",
    "options": [
      "Issac",
      "Abraham",
      "Pharoah",
      "Lot"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Dead Sea, the lowest point on Earth, is how far below sea level?",
    "options": [
      "349  meters",
      "418 meters",
      "517  meters",
      "2608 meters"
    ],
    "correctIndex": 1
  },
  {
    "question": "What was the name of the great fortification built in 37-31 BC by Roman king Herod I on a high hill above the Dead Sea?",
    "options": [
      "Masada",
      "Kadesh-Barnea",
      "Herods Citadel",
      "Vespasians Citadel"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Dead Sea is part of the Great Rift Valley. How far does this valley extend in length?",
    "options": [
      "6700 miles",
      "697 miles",
      "1697 miles",
      "3700 miles"
    ],
    "correctIndex": 3
  },
  {
    "question": "No animals or plants live in the Dead Sea .",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What famous California prison was home to Charles Manson?",
    "options": [
      "The Bastille",
      "Sing Sing",
      "Joliet",
      "Folsom"
    ],
    "correctIndex": 3
  },
  {
    "question": "American politician John McCain was incarcerated at the infamous Hoa Loa Prison, ironically called Hanoi Hilton.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Rosenbergs, who were convicted of conspiracy, were held at what prison?",
    "options": [
      "Folsom",
      "Alcatraz",
      "Attica",
      "Sing Sing"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Tower of London was built primarily to function as a fortress, a royal palace and a prison.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Attica Prison was the locale of a 1975 riot that resulted in 38 deaths.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Nelsons Column, built to commemorate Admiral Horatio Nelsons death, is a monument in this famous London square.",
    "options": [
      "Soho Square",
      "Leicester Square",
      "Piccadilly Circus",
      "Trafalgar Square"
    ],
    "correctIndex": 3
  },
  {
    "question": "Tiananmen Square, which has been the site of a number of political events and student protests, is located in what Chinese city?",
    "options": [
      "Beijing",
      "Shanghai",
      "Guangzhou",
      "Taipei"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Kremlin, a historic fortified complex at the heart of Moscow, overlooks this square to the east.",
    "options": [
      "Black Square",
      "Azadi Square",
      "Palace Square",
      "Red Square"
    ],
    "correctIndex": 3
  },
  {
    "question": "What iconic world landmark, sometimes called the Crossroads of the World, was formerly named Longacre Square?",
    "options": [
      "Grosvenor Square",
      "Times Square",
      "Madison Square",
      "St Jamess Square"
    ],
    "correctIndex": 1
  },
  {
    "question": "What famous square is located in Vatican City, the papal enclave within Rome?",
    "options": [
      "Campo dei Fiori",
      "St. Pauls Square",
      "St. Peters Square",
      "Piazza San Marco"
    ],
    "correctIndex": 2
  },
  {
    "question": "Grand Place, which is known for its large flower carpet, is the main square of this capital European city.",
    "options": [
      "Berlin",
      "Paris",
      "Strasbourg",
      "Brussels"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which square is not correctly matched with the capital city in which it is located?",
    "options": [
      "Red Square - Moscow",
      "Senate Square - Helsinki",
      "Azadi Square - Karachi",
      "Leicester Square - London"
    ],
    "correctIndex": 2
  },
  {
    "question": "Piazza San Marco (St Marks Square), which Napoleon allegedly called The drawing room of Europe, is the principal square of this Italian city.",
    "options": [
      "Florence",
      "Venice",
      "Rome",
      "Milan"
    ],
    "correctIndex": 1
  },
  {
    "question": "What city in Eastern Europe, often associated with the story of Dracula, is also famous for Revolution Square, which was the site of a 1989 revolt?",
    "options": [
      "Bucharest",
      "Warsaw",
      "Budapest",
      "Prague"
    ],
    "correctIndex": 0
  },
  {
    "question": "What former president has addressed more than a million people on many occasions on Plaza de la Revoluci\u00f3n in Havana?",
    "options": [
      "Benito Mussolini",
      "Fidel Castro",
      "Salvador Allende",
      "Francisco Franco"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the sea that borders the Netherlands?",
    "options": [
      "Red Sea",
      "Black Sea",
      "North Sea",
      "Mediterranean Sea"
    ],
    "correctIndex": 2
  },
  {
    "question": "What are the three colours of the national flag of the Netherlands from top to bottom?",
    "options": [
      "Red, white, and blue",
      "Blue, yellow, and red",
      "Red, blue, and white",
      "Green, red, and white"
    ],
    "correctIndex": 0
  },
  {
    "question": "Rotterdam, located in the province of South Holland, is a major Dutch port.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Gouda and Edam are famous types of Dutch cheeses.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital city of the Netherlands?",
    "options": [
      "Amsterdam",
      "Amersfort",
      "The Hague",
      "Zwolle"
    ],
    "correctIndex": 0
  },
  {
    "question": "What two countries border the Netherlands?",
    "options": [
      "Germany and Lithuania",
      "Germany and France",
      "France and Belgium",
      "Belgium and Germany"
    ],
    "correctIndex": 3
  },
  {
    "question": "The name \u201cHolland\u201d is equivalent to the name the Netherlands.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Dutch is the official language of the Netherlands. What is the second official language of the country?",
    "options": [
      "Low Saxon",
      "Frisian",
      "French",
      "English"
    ],
    "correctIndex": 1
  },
  {
    "question": "Demographically, the Netherlands matches which of this characteristics?",
    "options": [
      "All of these",
      "Its population is first in average height in the world.",
      "It is one of most densely populated countries in the world.",
      "It is one of the most densely cabled countries in the world."
    ],
    "correctIndex": 0
  },
  {
    "question": "What Mediterranean island is divided between a Greek community and a Turkish community (although the latter is not internationally recognized as a separate entity)?",
    "options": [
      "Cyprus",
      "Crete",
      "Corsica",
      "Malta"
    ],
    "correctIndex": 0
  },
  {
    "question": "What South American island is shared by Chile and Argentina?",
    "options": [
      "Islas Malvinas",
      "Tierra Del Fuego",
      "Islas Galapagos",
      "Isla De Pascua"
    ],
    "correctIndex": 1
  },
  {
    "question": "What island is shared by Indonesia and the nation of East Timor?",
    "options": [
      "Timor",
      "New Guinea",
      "Borneo",
      "Flores"
    ],
    "correctIndex": 0
  },
  {
    "question": "What European island is partially occupied by a neighbouring island nation, which has led to centuries of dispute?",
    "options": [
      "Sardinia",
      "Sicily",
      "Iceland",
      "Ireland"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these islands is shared by three countries?",
    "options": [
      "Luzon",
      "Ireland",
      "Madagascar",
      "Borneo"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the island shared by Haiti and the Dominican Republic?",
    "options": [
      "Ile dHaiti",
      "Hispaniola",
      "Isla Dominica",
      "Carib Island"
    ],
    "correctIndex": 1
  },
  {
    "question": "What island is shared by the nations of Indonesia and Papua New Guinea?",
    "options": [
      "Bougainville",
      "New Guinea",
      "Timor",
      "Borneo"
    ],
    "correctIndex": 1
  },
  {
    "question": "This tiny Caribbean island is shared by France and the Netherlands.",
    "options": [
      "St. Lucia",
      "St. Mark",
      "St. Martin",
      "St. Bartholomew"
    ],
    "correctIndex": 2
  },
  {
    "question": "The tiny island of M\u00e4rket / M\u00e4rketin in the Baltic Sea is shared by these two nations.",
    "options": [
      "Sweden and Denmark",
      "Finland and Estonia",
      "Finland and Russia",
      "Finland and Sweden"
    ],
    "correctIndex": 3
  },
  {
    "question": "The island of Sebatik, located east of Borneo, is shared by Indonesia and what other nation?",
    "options": [
      "The Philippines",
      "Singapore",
      "Malaysia",
      "Brunei"
    ],
    "correctIndex": 2
  },
  {
    "question": "The word \u2018ocean\u2019 is of Greek origin.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which is the smallest ocean?",
    "options": [
      "The Atlantic Ocean",
      "The Indian Ocean",
      "The Southern Ocean",
      "The Arctic Ocean"
    ],
    "correctIndex": 3
  },
  {
    "question": "What portion of the Earth\u2019s surface do oceans cover?",
    "options": [
      "More than two thirds",
      "One third",
      "Half of it",
      "One fourth"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Marianas Trench, the deepest location on the surface of the Earths crust, lies in this ocean.",
    "options": [
      "The Pacific Ocean",
      "The Southern Ocean",
      "The Indian Ocean",
      "The Atlantic Ocean"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Dead Sea is actually a lake.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Pacific Ocean is the largest of the Earths oceanic divisions. Its name is derived from the Latin name Mare Pacificum which has the following meaning.",
    "options": [
      "The Peaceful Sea",
      "The Lonely Sea",
      "The Smooth Sea",
      "The Lonely Sea"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which one of these Asian rivers does not flow into the Indian Ocean?",
    "options": [
      "Zambezi",
      "Saigon",
      "Indus",
      "Ganges"
    ],
    "correctIndex": 1
  },
  {
    "question": "What sea is known to be the only sea without shores?",
    "options": [
      "The Sargasso Sea",
      "The Norwegian Sea",
      "The Labrador Sea",
      "The Celtic Sea"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Bering Sea is a part of which ocean?",
    "options": [
      "The Arctic Ocean",
      "The Pacific Ocean",
      "The Indian Ocean",
      "The Atlantic Ocean"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Mediterranean Sea is connected to the Atlantic Ocean by this strait.",
    "options": [
      "The Strait of Gibraltar",
      "The Dardanelles",
      "Strait of Magellan",
      "Strait of Dover"
    ],
    "correctIndex": 0
  },
  {
    "question": "The famous \u00cele Notre-Dame, an artificial island built from earth excavated for a metropolitan railway, is located in which country?",
    "options": [
      "England",
      "Canada",
      "France",
      "Switzerland"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the popular name of the artificial island in Tokyo Bay, whose name is Yume No Shima in Japanese?",
    "options": [
      "Dream Island",
      "Water Lilly",
      "Wind Island",
      "Sun Island"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the Peruvian floating islands, located in Lake Titicaca?",
    "options": [
      "Chaka",
      "Laka",
      "Uros",
      "Barro"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which man-made island, located to the southwest of Singapore, was created by joining several natural islands?",
    "options": [
      "Formoza",
      "Jurong Island",
      "Spiral Island",
      "Neeltje-Jans"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the artificial island located in the Gatun Lake portion of the Panama Canal?",
    "options": [
      "Thilafushi",
      "Shui Keng Teng",
      "Chubu",
      "Barro Colorado Island"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which 20-kilometre artificial island, situated in the river Danube, was nicknamed the Copa Kagrana?",
    "options": [
      "Peberholm",
      "Burj al-Arab",
      "Odaiba",
      "Donauinsel"
    ],
    "correctIndex": 3
  },
  {
    "question": "Rokko island, constructed between 1973 and 1992, is an artificial island situated in which country?",
    "options": [
      "France",
      "China",
      "The Netherlands",
      "Japan"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which artificial island is situated in San Francisco Bay, between San Francisco and Oakland?",
    "options": [
      "Hulhumal\u00e9",
      "Treasure Island",
      "Port Island",
      "Flakfortet"
    ],
    "correctIndex": 1
  },
  {
    "question": "This artificial island, whose name literally means Pepper Islet, is part of the Oresund Bridge, connecting Denmark with Sweden.",
    "options": [
      "Peberholm",
      "Kansai",
      "Flakfortet",
      "Palm Islands"
    ],
    "correctIndex": 0
  },
  {
    "question": "Spiral Island, a small Mexican artificial floating island, was situated on the coast of which sea?",
    "options": [
      "The Black Sea",
      "The Caribbean Sea",
      "The Aegean Sea",
      "The North Sea"
    ],
    "correctIndex": 1
  },
  {
    "question": "The history of EU began on 25th of March 1957 when the European Economic Community was formed. What is the founding act called?",
    "options": [
      "Treaty of Paris",
      "Schengen Agreement",
      "Schuman Declaration",
      "Treaty of Rome"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which country was not among the founding states of the European Economic Community (the European Union predecessor)?",
    "options": [
      "Luxembourg",
      "Italy",
      "France",
      "UK"
    ],
    "correctIndex": 3
  },
  {
    "question": "When did Ireland join the European Union?",
    "options": [
      "1995",
      "1973",
      "1960",
      "1986"
    ],
    "correctIndex": 1
  },
  {
    "question": "The citizens of which country rejected the idea of joining the EU in 1972 and again in 1994?",
    "options": [
      "Norway",
      "Denmark",
      "Iceland",
      "Finland"
    ],
    "correctIndex": 0
  },
  {
    "question": "The EU has been a western club for most of its history. But which of these western countries has stayed out of the EU?",
    "options": [
      "Belgium",
      "Spain",
      "Switzerland",
      "Luxembourg"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which former Yugoslavian republic was the first to be admitted to the European Union?",
    "options": [
      "Macedonia",
      "Serbia",
      "Croatia",
      "Slovenia"
    ],
    "correctIndex": 3
  },
  {
    "question": "The 6th European Union enlargement took place on May 1 2004. How many countries were admitted then?",
    "options": [
      "8",
      "12",
      "10",
      "14"
    ],
    "correctIndex": 2
  },
  {
    "question": "Many countries held national referenda before joining the European Union. Which of the following nations showed the highest support for joining (92% in favour)?",
    "options": [
      "Poland",
      "Ireland",
      "Lithuania",
      "Slovakia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What kind of agreement is the Schengen Agreement?",
    "options": [
      "It is a visionary chapter about a further EU enlargement.",
      "It allows EU citizens to travel without passports within the EU borders.",
      "It regulates the relationships with non-EU countries, especially Russia.",
      "It introduced a common currency - the Euro."
    ],
    "correctIndex": 1
  },
  {
    "question": "When did the euro become the official currency of the Eurozone?",
    "options": [
      "1999",
      "1994",
      "2002",
      "2004"
    ],
    "correctIndex": 2
  },
  {
    "question": "The flag of which US state features a white American Bison on a blue field?",
    "options": [
      "Nevada",
      "Wyoming",
      "Texas",
      "South Dakota"
    ],
    "correctIndex": 1
  },
  {
    "question": "The name of which US state means large creek in the Seneca language?",
    "options": [
      "Idaho",
      "Ohio",
      "Texas",
      "Wisconsin"
    ],
    "correctIndex": 1
  },
  {
    "question": "Montgomery is the capital city of this US state, and its largest city is Birmingham.",
    "options": [
      "Arizona",
      "Alaska",
      "Arkansas",
      "Alabama"
    ],
    "correctIndex": 3
  },
  {
    "question": "Everglades National Park is located in this US state.",
    "options": [
      "Hawaii",
      "Nevada",
      "Georgia",
      "Florida"
    ],
    "correctIndex": 3
  },
  {
    "question": "The state drink of this US state is milk, its state bird is the Western Meadowlark, its state flower is the Wild Prairie Rose, and its state slogan is Legendary.",
    "options": [
      "North Dakota",
      "South Dakota",
      "North Carolina",
      "South Carolina"
    ],
    "correctIndex": 0
  },
  {
    "question": "According to one theory, the name of this US state comes from the French word for hurricane.",
    "options": [
      "Arizona",
      "Oregon",
      "Colorado",
      "Vermont"
    ],
    "correctIndex": 1
  },
  {
    "question": "Baton Rouge is the capital of what US state?",
    "options": [
      "New Hampshire",
      "Maine",
      "Louisiana",
      "North Carolina"
    ],
    "correctIndex": 2
  },
  {
    "question": "The largest city in what US state hosts Summerfest, or The Worlds Largest Music Festival?",
    "options": [
      "New Jersey",
      "Wisconsin",
      "Kentucky",
      "Maryland"
    ],
    "correctIndex": 1
  },
  {
    "question": "The name of this US state means great river and its symbol is the magnolia tree.",
    "options": [
      "Missouri",
      "Massachusetts",
      "Mississippi",
      "Minnesota"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which US state has been nicknamed The First State, The Small Wonder, Blue Hen State, and The Diamond State?",
    "options": [
      "Pennsylvania",
      "Virginia",
      "Delaware",
      "New York"
    ],
    "correctIndex": 2
  },
  {
    "question": "The smallest monkey on earth is found in the Philippines.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Ifugao Rice Terraces are  located in Luzon, in the Philippines. If it were possible to place them end to  end, how long would they extend?",
    "options": [
      "1,500 miles",
      "5,800 miles",
      "8,000 miles",
      "1,400 miles"
    ],
    "correctIndex": 3
  },
  {
    "question": "What are the largest cities in the Philippines in terms of land area?",
    "options": [
      "Manila and Davao City",
      "Zamballes and Puerto Princesa City",
      "Zamballes and Manila",
      "Davao City and Puerto Princesa City"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Philippines has the worlds largest deposit of heavy water which can be used for atomic energy, in spectroscopy, and as an automobile fuel. What makes heavy water different from water?",
    "options": [
      "An extra hydrogen molecule",
      "One  less hydrogen molecule making it HO not H2O",
      "An extra oxygen molecule",
      "The presence of deuterium"
    ],
    "correctIndex": 3
  },
  {
    "question": "From 1888-1889, American traders Simon and Thomas Metcalfe brought some men from Manila to the Western Hemisphere. Which state did they bring them to?",
    "options": [
      "California",
      "Mexico",
      "Oregon",
      "Alaska"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first  female  President of the Philippines?",
    "options": [
      "Eleanor Concepcion",
      "Louiza Rizal",
      "Ramona  Magsaysay",
      "Corazon Aquino"
    ],
    "correctIndex": 3
  },
  {
    "question": "Who is the first Filipino-American to become Governor of a US state?",
    "options": [
      "Franklin  Rakata",
      "Jose Nisperos",
      "Jose Rizal",
      "Benjamin Cayetano"
    ],
    "correctIndex": 3
  },
  {
    "question": "On December 7, 1941 the Japanese launched a sneak attack on Pearl Harbor. On that day they also launched a similar attack on this American airbase in the Philippines.",
    "options": [
      "Subic Bay, Luzon, Philippines",
      "Capas Air Base,Tarlac, Philippines",
      "Angeles, Pampanga, Philippines",
      "Clark Air Force Base, Pampanga, Philippines"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which best  describes the religious distribution of the populace of the Philippines?",
    "options": [
      "82% Catholic, 9% Protestant, 5% Muslim and  3 % Buddhist",
      "92 % Catholic, 7 % Muslim, 1% all others",
      "57 % Muslim, 40 % Protestant, 1 % Catholic",
      "41% Catholic, 38 % Muslim, 10% Buddhist , 9 % Protestant"
    ],
    "correctIndex": 0
  },
  {
    "question": "This US President was born in South Carolina although he lived in Tennessee when he became president.",
    "options": [
      "William Henry Harrison",
      "Zachary Taylor",
      "Andrew Jackson",
      "Jimmy Carter"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of the following states borders South Carolina?",
    "options": [
      "Alabama",
      "Tennessee",
      "Virginia",
      "Georgia"
    ],
    "correctIndex": 3
  },
  {
    "question": "In 1860 South Carolina became the first state to secede from the Union.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "South Carolina is the state whose shape most closely resembles a triangle.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What South Carolina Senator lived to be one hundred years old while still holding office?",
    "options": [
      "Strom Thurmond",
      "Mike Mansfield",
      "James, (Jimmy)  Byrnes",
      "Fritz Hollings"
    ],
    "correctIndex": 0
  },
  {
    "question": "Francis Marion fought the British in the swamps of South Carolina during the Revolutionary War, using guerrilla tactics, that the communist Vietcong in Vietnam would have understood well. For this Marion was given the following nickname.",
    "options": [
      "The Swamp Fox",
      "The Yankee Ghost",
      "The Carolina Gamecock",
      "The Fighting Gator"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Grand Strand is a long stretch of sandy beach situated near which of the following?",
    "options": [
      "Hilton Head",
      "Follie Beach",
      "Myrtle Beach",
      "Charleston"
    ],
    "correctIndex": 2
  },
  {
    "question": "The city of Fargo is the largest city in which of these U.S. states?",
    "options": [
      "North Carolina",
      "South Dakota",
      "North Dakota",
      "South Carolina"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the capital city of the U.S. state of Washington.",
    "options": [
      "Seattle",
      "Olympia",
      "Madison",
      "Boise"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which U.S. state has been nicknamed The Cornhusker State?",
    "options": [
      "Nevada",
      "Ohio",
      "Nebraska",
      "Wyoming"
    ],
    "correctIndex": 2
  },
  {
    "question": "Topeka is the capital city of which U.S. state?",
    "options": [
      "Kansas",
      "Arkansas",
      "Missouri",
      "Colorado"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these nicknames refers to the U.S. state of Idaho?",
    "options": [
      "Emerald State",
      "Pearl State",
      "Gem State",
      "Golden State"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the name of the U.S. state of Utah mean in the Ute language?",
    "options": [
      "Spirits of the rivers",
      "Children of the winds",
      "People of the mountains",
      "Land around the great lake"
    ],
    "correctIndex": 2
  },
  {
    "question": "Saint Paul is the capital city of what US state?",
    "options": [
      "Missouri",
      "Minnesota",
      "Mississippi",
      "None of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Black Sea drains into the Atlantic Ocean via the Sea of Marmara and the Mediterranean Sea on the South West. On the other, North East side of the Black Sea, there is a small sea which is connected to the Black Sea via the Strait of Kerch. Name this sea.",
    "options": [
      "The White Sea",
      "The Caspian Sea",
      "The Aral Sea",
      "The Sea of Azov"
    ],
    "correctIndex": 3
  },
  {
    "question": "Six countries are located along the Black Sea border. Which one among them has the longest Black Sea coast line (not including the Sea of Azov coast line)?",
    "options": [
      "Romania",
      "Turkey",
      "Russia",
      "Ukraine"
    ],
    "correctIndex": 1
  },
  {
    "question": "Not counting Istanbul, which of these cities is located on Bosphorus on the side of the Sea of Marmara and is the biggest city on the coast of the Black Sea?",
    "options": [
      "Trabzon, Turkey",
      "Sukhumi, Georgia",
      "Varna, Bulgaria",
      "Odessa, Ukraine"
    ],
    "correctIndex": 3
  },
  {
    "question": "The names of three large rivers flowing into the Black Sea begin with a letter D. Danube, the largest of the three, flows through ten European countries and enters the Black Sea in Romania. The other two end their flow in this country.",
    "options": [
      "Bulgaria",
      "Turkey",
      "Ukraine",
      "Russia"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Black Sea city of Sukhumi is the capital of this republic that proclaimed its independence from Georgia in the 90s.",
    "options": [
      "Ajaria",
      "Iberia",
      "Ossetia",
      "Abkhazia"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Black Sea, whose waters are known to be meromictic, is the largest water basin in the world where water layers do not intermix, and, thus, lack the dissolved form of what?",
    "options": [
      "Salt",
      "Nitrogen",
      "Oxygen",
      "Hydrogen Sulfide"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Crimean peninsula has been under the control of multiple powers over the centuries. Although it is considered to be an autonomous republic, it is a part of this nation.",
    "options": [
      "Ukraine",
      "Romania",
      "Bulgaria",
      "Russia"
    ],
    "correctIndex": 0
  },
  {
    "question": "From the viewpoint of physical geography and ecology, the Ukrainian territories to the north of the Black Sea are known to contain what?",
    "options": [
      "Low hills and forests",
      "Steppes or plains",
      "Mountains",
      "Sand desert"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Black Sea reaches the maximum depth of 2,210 m. Its neighbor, the Sea of Azov, is unique in terms of sea depth for what reason?",
    "options": [
      "Its floor sinks constantly because it is located on a large basalt plate.",
      "It is the shallowest sea in the world.",
      "It has almost perfectly flat sea floor with a depth of 1370 m.",
      "It has no established sea floor, it changes constantly with currents."
    ],
    "correctIndex": 1
  },
  {
    "question": "All these entities are located around the Black Sea except for one. Name the exception.",
    "options": [
      "Ural mountains",
      "Balkan peninsula",
      "Caucasus mountains",
      "Anatolia"
    ],
    "correctIndex": 0
  },
  {
    "question": "The summit ridge of Mount Everest marks the border between which two Asian countries?",
    "options": [
      "India and China",
      "Nepal and India",
      "China and Georgia",
      "China and Nepal"
    ],
    "correctIndex": 3
  },
  {
    "question": "The locals of Nepal call the highest mount in the world - Mount Everest -  Sagarmatha. What is the meaning of this name in Sanskrit?",
    "options": [
      "Holy Mountain",
      "Ice Zone",
      "Leader Among the Others",
      "Head of the Sky"
    ],
    "correctIndex": 3
  },
  {
    "question": "The highest mountain in the world is named after Sir George Everest, a famous Welshman. What was his profession?",
    "options": [
      "Defender of human rights",
      "Actor",
      "Surveyor and geographer",
      "President"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Himalayan range, part of which is Mount Everest, stretches across five different countries in Asia. Which of the following countries is not among them?",
    "options": [
      "Israel",
      "Bhutan",
      "Pakistan",
      "India"
    ],
    "correctIndex": 0
  },
  {
    "question": "Edmund Hillary, the first mountaineer to reach mount Everest, was from what country?",
    "options": [
      "The USA",
      "Great Britain",
      "Norway",
      "New Zealand"
    ],
    "correctIndex": 3
  },
  {
    "question": "What nationality was mathematician and surveyor Radhanath Sikdar, who was the first person to measure the height of Everest?",
    "options": [
      "Bengali-Indian",
      "Chinese",
      "Pakistani",
      "Tibetan"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following paths is one of the two most popular climbing routes to Mount Everest?",
    "options": [
      "The south ridge from Tibet",
      "The east ridge from Pakistan",
      "The west ridge from India",
      "The southeast ridge from Nepal"
    ],
    "correctIndex": 3
  },
  {
    "question": "What nationality was Junko Tabei - the first woman to reach the peak of Mount Everest?",
    "options": [
      "Japanese",
      "Chinese",
      "Indian",
      "Nepalese"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Italian climber, who was in the first expedition to reach Mount Everest without oxygen tanks, later became the first person to climb the summit alone.",
    "options": [
      "Reinhold Messner",
      "Laurie Skreslet",
      "Jerzy Kukuczka",
      "Tim Macartney"
    ],
    "correctIndex": 0
  },
  {
    "question": "The term death zone refers to high altitudes, where the amount of oxygen cannot sustain human life and altitude acclimatization becomes impossible.  While this definition still applies, mount Everests death zone is significantly more difficult to survive.  Why?",
    "options": [
      "Visibility is decreased due to constant snowstorms",
      "Extremely low temperatures result in quick freezing of body parts",
      "High wind velocity causes deadly avalanches",
      "Polar bears pose a serious threat to climbers"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the largest island on the planet in terms of territory?",
    "options": [
      "Madagascar",
      "Sumatra",
      "Greenland",
      "New Guinea"
    ],
    "correctIndex": 2
  },
  {
    "question": "This island, located north of Australia, is the second-largest island on the planet.",
    "options": [
      "Tasmania",
      "New Guinea",
      "South Island",
      "Sri Lanka"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the third-largest island on the planet, and it is also known as Kalimantan.",
    "options": [
      "Bali",
      "Borneo",
      "Taiwan",
      "Java"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the fourth-largest island in the world, and it is home to 5% of the plant and animal species on the planet.",
    "options": [
      "Jamaica",
      "Madagascar",
      "Tasmania",
      "Cuba"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the largest European island, and the ninth-largest island on the planet.",
    "options": [
      "Sicily",
      "Sardinia",
      "None of these",
      "Cyprus"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the largest island of Canada, and the fifth-largest island in the world?",
    "options": [
      "Victoria Island",
      "Baffin Island",
      "Banks Island",
      "Devon Island"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the most populous island in the world?",
    "options": [
      "Java",
      "Cuba",
      "Borneo",
      "Honshu"
    ],
    "correctIndex": 0
  },
  {
    "question": "This island is located in the Indian Ocean and is also known as Ceylon.",
    "options": [
      "Borneo",
      "Taiwan",
      "Sumatra",
      "Sri Lanka"
    ],
    "correctIndex": 3
  },
  {
    "question": "The capital of this island country is Kingston.",
    "options": [
      "Jamaica",
      "Haiti",
      "Hispaniola",
      "Cuba"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the largest island in the Mediterranean Sea?",
    "options": [
      "Crete",
      "Corsica",
      "Sicily",
      "Cyprus"
    ],
    "correctIndex": 2
  },
  {
    "question": "The geographic North and South Poles are at fixed locations and have not moved.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which nation claims ownership of the South Pole?",
    "options": [
      "Russia",
      "No nation does.",
      "France",
      "The USA"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1728, he became the first person to sail into the Arctic Ocean and proved that Asia and North America are not joined by land.",
    "options": [
      "Cook",
      "Bering",
      "Scott",
      "Peary"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is given credit  for being the first person to reach the North Pole?",
    "options": [
      "Peary",
      "Bering",
      "Amundsen",
      "Scott"
    ],
    "correctIndex": 0
  },
  {
    "question": "What happened at the North Pole on August 3, 1958?",
    "options": [
      "The northernmost US city, Naavetau, was founded.",
      "The first airport in the Arctic was built.",
      "A submarine travelled underwater under the Pole.",
      "The last Arctic Moa was killed."
    ],
    "correctIndex": 2
  },
  {
    "question": "The first time Antarctica was officially visited is a subject of controversy. Three people have claimed to have achieved this feat. Which of these is not one them?",
    "options": [
      "Edward Bransfield",
      "Nathaniel B. Palmer",
      "Fabian von Bellinghausen",
      "James Cook"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which statement is true about the explorer and glaciologist Albert P. Crary?",
    "options": [
      "He was the first person to set foot on Antarctica.",
      "He was the first pilot to fly across the South Pole.",
      "He was the first person to build a home above the Arctic Circle.",
      "He was the first person to reach both the North and South Poles."
    ],
    "correctIndex": 3
  },
  {
    "question": "Who was the first person to reach the South Pole?",
    "options": [
      "Scott",
      "Amundsen",
      "Henson",
      "Peary"
    ],
    "correctIndex": 1
  },
  {
    "question": "The temperature at the North Pole is higher than the temperature at the South Pole.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Few animals inhabit the North Pole. Which of these types of animals can never be seen there?",
    "options": [
      "Penguins",
      "Bears",
      "Birds",
      "Fish"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 2000, microbes were found at the South Pole.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What river, draining into the Caspian Sea, is the longest in Europe?",
    "options": [
      "Danube",
      "Ural",
      "Dnieper",
      "Volga"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where are the origins of the Rhine?",
    "options": [
      "Switzerland",
      "Austria",
      "Belgium",
      "Germany"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the longest river in France?",
    "options": [
      "Loire",
      "Maine",
      "Odet",
      "Erdre"
    ],
    "correctIndex": 0
  },
  {
    "question": "What river rises in the northwestern Czech Republic, flows through Germany and into the North Sea?",
    "options": [
      "Elbe",
      "Viskan",
      "Morava",
      "Oste"
    ],
    "correctIndex": 0
  },
  {
    "question": "What river named after a mythological figure is the longest river of Great Britain?",
    "options": [
      "Trent",
      "Great Ouse",
      "Thames",
      "Severn"
    ],
    "correctIndex": 3
  },
  {
    "question": "What river flows through ten European countries and is the longest in the European Union?",
    "options": [
      "Rhine",
      "Dnieper",
      "Danube",
      "Elbe"
    ],
    "correctIndex": 2
  },
  {
    "question": "What river that flows through Spain and Portugal is the longest river on the Iberian Peninsula?",
    "options": [
      "Guadiana",
      "Duero",
      "Guadalquivir",
      "Tagus"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the longest river in Poland and the ninth longest in Europe?",
    "options": [
      "Wda",
      "Nogat",
      "Vistula",
      "Dunajec"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what country does the River Po rise?",
    "options": [
      "France",
      "Italy",
      "Belgium",
      "Switzerland"
    ],
    "correctIndex": 1
  },
  {
    "question": "This bridge, that spans the Tagus River, is the longest bridge in Europe.",
    "options": [
      "Vizcaya Bridge",
      "Guadiana International Bridge",
      "Vasco da Gama Bridge",
      "Merida Bridge"
    ],
    "correctIndex": 2
  },
  {
    "question": "How would you say What is your name? in Tagalog?",
    "options": [
      "Ilang taong gulang ka na?",
      "Ano ang ginagawa mo?",
      "Ano ang pangalan mo?",
      "Saan ka nakatira?"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Filipino word Bulaklak means flower in English.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What does the Filipino word lungsod mean in English?",
    "options": [
      "market",
      "city",
      "island",
      "province"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Filipino word pangalan means name in English. What does the word pangngalan mean?",
    "options": [
      "address",
      "adjective",
      "noun",
      "verb"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Filipino word maganda means beautiful in English.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What Filipino word means money in English?",
    "options": [
      "tindahan",
      "mura",
      "pera",
      "wala"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the Filipino word salita mean in English?",
    "options": [
      "word",
      "phrase",
      "sentence",
      "meaning"
    ],
    "correctIndex": 0
  },
  {
    "question": "How will you say I Love You in Filipino?",
    "options": [
      "Mahal Kita",
      "Ikaw Na Nga",
      "Sino Ka",
      "Hindi Ko Alam"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who is considered the Father of Filipino Language?",
    "options": [
      "Gloria Macapagal-Arroyo",
      "Ferdinand Marcos",
      "Emilio Aguinaldo",
      "Manuel Quezon"
    ],
    "correctIndex": 3
  },
  {
    "question": "This western half of this island is part of Indonesia, while the eastern half is a nation which gained independence in 2002, following hundreds of years of European colonialism and 25 years of Indonesian occupation.",
    "options": [
      "Borneo",
      "Sumatra",
      "Timor",
      "Celebes"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which Indonesian island is shared by four Indonesian provinces and two other nations: the eastern half of Malaysia and the tiny oil-rich sultanate of Brunei?",
    "options": [
      "New Guinea",
      "Sumatra",
      "Borneo",
      "Flores"
    ],
    "correctIndex": 2
  },
  {
    "question": "These islands were the original spice islands, which have drawn traders from all over the world for thousands of years, and were a major factor in causing the European age of exploration, as explorers set out to find the fabled East Indies.",
    "options": [
      "Ternate, Tidore and Banda",
      "Timor, Flores and Sumba",
      "Celebes and New Guinea",
      "Sumatra and Borneo"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which Indonesian island was in the news in 2003 when the remains of an extinct variety of small hominids (popularly referred to as Hobbits), measuring about 3 feet in height, were found there?",
    "options": [
      "Sumatra",
      "New Guinea",
      "Timor",
      "Flores"
    ],
    "correctIndex": 3
  },
  {
    "question": "This island, the second largest in the world, is shared by Indonesia and another country. Because of its impenetrable swamps, jungles and towering mountains, it wasnt explored by outsiders until the past 100 years, and new tribes of humans with stone-age societies are still being discovered in the interior.",
    "options": [
      "New Guinea",
      "Flores",
      "Celebes",
      "Sumatra"
    ],
    "correctIndex": 0
  },
  {
    "question": "This island is the third largest in Indonesia, and is probably known for its coffee. It is also home to unique (and endangered) species of elephants, tigers, and rhinoceroses. It is also one of two islands which have indigenous orangutans.",
    "options": [
      "Timor",
      "Sumatra",
      "New Guinea",
      "Celebes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these describes best the location of the volcanic island of Krakatau (sometimes erroneously called Krakatoa), which had a well-known and devastating eruption on August 23, 1883?",
    "options": [
      "West of New Guinea",
      "East of Java",
      "Between Java and Sumatra",
      "Off the coast of Borneo"
    ],
    "correctIndex": 2
  },
  {
    "question": "This volcano, located on the island of Sumbawa, erupted in 1815, generally regarded as the largest volcanic eruption in recorded history. The eruption killed thousands, and changed global climatic patterns.",
    "options": [
      "Merapi",
      "Krakatau",
      "Mandiri",
      "Tambora"
    ],
    "correctIndex": 3
  },
  {
    "question": "Wichita, the county seat of Sedgwick County, is nicknamed what?",
    "options": [
      "Air Capital",
      "Mountain Capital",
      "Plain Capital",
      "River capital"
    ],
    "correctIndex": 0
  },
  {
    "question": "Wichita, a major aircraft manufacturing hub and cultural center, is the capital of Kansas.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "This multifunctional facility is located at 225 West Douglas, Wichita, Kansas.",
    "options": [
      "Exploration Place",
      "None of these",
      "Century II Convention center",
      "Hyatt hotel"
    ],
    "correctIndex": 2
  },
  {
    "question": "McConnell Air Force Base is a United States Air Force base located in Sedgwick County, near Wichita, Kansas.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the European peninsula on which Italy is located?",
    "options": [
      "Scandinavian Peninsula",
      "Iberian Peninsula",
      "Italian Peninsula",
      "Balkan Peninsula"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the capital and largest city of Italy?",
    "options": [
      "Milan",
      "Genoa",
      "Rome",
      "Venice"
    ],
    "correctIndex": 2
  },
  {
    "question": "What large mountain range is located entirely within the territory of Italy?",
    "options": [
      "Alps",
      "Andes",
      "Apennines",
      "Carpathians"
    ],
    "correctIndex": 2
  },
  {
    "question": "Italy is a major world exporter of which of the following?",
    "options": [
      "All of these",
      "Sport and luxury vehicles",
      "Motor vehicles",
      "Fashion items"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the meaning of the Italian word riavvolgere, from which the name of the popular Italian dish ravioli originated?",
    "options": [
      "Poor peasant",
      "Onion",
      "To wrap",
      "To indulge"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these colors is not present on the national flag of the Italian Republic?",
    "options": [
      "White",
      "Red",
      "Blue",
      "Green"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the title of the national anthem of the Italian Republic?",
    "options": [
      "The Italian Anthem",
      "The Song of the Italians",
      "Italia, Land of Glory",
      "Italian Dream"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the meaning of the name of Italy according to scientists who have studied its origin?",
    "options": [
      "Land of the holy water",
      "Land of the lamb",
      "Land of young cattle",
      "Land of mountains"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the shape of the Italian Peninsula?",
    "options": [
      "Skull",
      "Boot",
      "Dog",
      "Hand"
    ],
    "correctIndex": 1
  },
  {
    "question": "In which of these years did the Italian national football team win the FIFA World Cup?",
    "options": [
      "1982",
      "2006",
      "All of these",
      "1938"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first European to explore the Chesapeake Bay surrounded by modern day Maryland and Virginia was the Italian Giovanni da Verrazzano.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Maryland is well known as a colony of religious tolerance.  It was the first American colony to fully accept practitioners of which religion?",
    "options": [
      "Quakers",
      "Presbyterians",
      "Catholics",
      "Jews"
    ],
    "correctIndex": 2
  },
  {
    "question": "Maryland Day is celebrated every year on what date?",
    "options": [
      "The first day of crab season",
      "Preakness Saturday",
      "March 25th",
      "March 1st"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which was the seat of colonial government in Maryland until 1708?",
    "options": [
      "Annapolis",
      "Port Tobacco",
      "Baltimore",
      "St. Mary\u2019s City"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Mason Dixon Line is a demarcation line surveyed between 1763 and 1767 by Charles Mason and Jeremiah Dixon to determine what?",
    "options": [
      "The boundary between the confederacy and the union",
      "The boundary between the slave states and free states",
      "The boundary between Maryland and Pennsylvania",
      "The boundary between southern colonies and northern colonies"
    ],
    "correctIndex": 2
  },
  {
    "question": "What are Maryland\u2019s two official state nicknames?",
    "options": [
      "\u201cThe Old Line State\u201d and \u201cThe Free State\u201d",
      "\u201cThe Crab State\u201d and \u201cOur Chesapeake Heritage\u201d",
      "\u201cThe Crab State\u201d and \u201cThe Old Line State\u201d",
      "\u201cThe Free State\u201d and \u201cOur Chesapeake Heritage\u201d"
    ],
    "correctIndex": 0
  },
  {
    "question": "Maryland derives its name from its Catholic founders, who named the state after which historic person?",
    "options": [
      "Mary, Queen of Scots",
      "Mary Magdalene",
      "The Virgin Mary",
      "Queen Henrietta Maria of France"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the state sport of Maryland?",
    "options": [
      "Steeplechase",
      "Jousting",
      "Lacrosse",
      "Horse racing"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following famous people is NOT a Marylander?",
    "options": [
      "John Wilkes Booth",
      "Frederick Douglass",
      "Tom Clancy",
      "Valerie Bertinelli"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the state flower of Maryland?",
    "options": [
      "Mountain Laurel",
      "Peach Blossom",
      "Black-eyed Susan",
      "Flowering Dogwood"
    ],
    "correctIndex": 2
  },
  {
    "question": "How tall is Mount Everest?",
    "options": [
      "8,859 m",
      "8,849 m",
      "8,850 m",
      "8,840 m"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the Tibetan name of Mt. Everest?",
    "options": [
      "Appa Sherpa",
      "Sagarmatha",
      "Chomolungma",
      "Temba Tsheri"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Sanskrit name of Mt. Everest is Devgiri.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The easier and more frequently-used of the two main routes for climbing Mount Everest is the Northeast Ridge (or North Col Route).",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "The term Death Zone refers to what altitude?",
    "options": [
      "above 8,100 m",
      "above 8,000 m",
      "above 7,900 m",
      "above 7,500 m"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is considered to be the final major hurdle before reaching the summit of Mt. Everest from the South Col Route?",
    "options": [
      "Hillary Step",
      "First Step, Second Step and Third Step",
      "Kangshung face",
      "Lhotse face"
    ],
    "correctIndex": 0
  },
  {
    "question": "Has anyone landed an aircraft or helicopter on the summit of Mt. Everest?",
    "options": [
      "Yes",
      "No"
    ],
    "correctIndex": 0
  },
  {
    "question": "Part of the Southeast Ridge Route for climbing Mt. Everest is the Lhotse Face in which Camp III is established. There are 14 peaks over 8,000 meters. Where does Lhotse rank?",
    "options": [
      "4",
      "3",
      "8",
      "13"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who is the first American to ascend all fourteen peaks over 8,000m without oxygen?",
    "options": [
      "Reinhold Messner",
      "Peter Habeler",
      "Ed Viesturs",
      "George Mallory"
    ],
    "correctIndex": 2
  },
  {
    "question": "During Roman occupation, this city, popular nowadays as the Heaven of Romance, was called Lutetia.",
    "options": [
      "Venice",
      "Paris",
      "London",
      "Rome"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what European city are Piazza San Marco and Canale Grande located?",
    "options": [
      "Venice",
      "Lisbon",
      "Madrid",
      "Florence"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what country will you find the impressive Neuschwanstein Castle, which was the inspiration for Sleeping Beauty Castle at Disneyland Park?",
    "options": [
      "Denmark",
      "Austria",
      "Germany",
      "England"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the birthplace of Johann Strauss II, also known as The Waltz King?",
    "options": [
      "Salzburg",
      "Vienna",
      "Berlin",
      "Prague"
    ],
    "correctIndex": 1
  },
  {
    "question": "What popular tourist destination stands at the foot of the Maritime Alps?",
    "options": [
      "Monte Carlo",
      "Verona",
      "Vatican City",
      "Lisbon"
    ],
    "correctIndex": 0
  },
  {
    "question": "This city, situated on the River Vltava, is sometimes called the mother of cities, the city of a hundred spires and the golden city.",
    "options": [
      "Athens",
      "Rome",
      "Prague",
      "Bucharest"
    ],
    "correctIndex": 2
  },
  {
    "question": "What city is home of Broadway Theatre?",
    "options": [
      "Washington",
      "Boston",
      "New Orleans",
      "New York"
    ],
    "correctIndex": 3
  },
  {
    "question": "This island in the Pacific Ocean is surrounded by a lagoon and a barrier reef.",
    "options": [
      "Bora Bora",
      "Cyprus",
      "Thasos",
      "Tupai"
    ],
    "correctIndex": 0
  },
  {
    "question": "The city of Casablanca, which is the setting of the classic 1942 movie, starring Humphrey Bogart and Ingrid Bergman, is located in what African country?",
    "options": [
      "Egypt",
      "Morocco",
      "Tunisia",
      "Algeria"
    ],
    "correctIndex": 1
  },
  {
    "question": "What islands are knows as \u201cThe beautiful garland in the Indian Ocean\u201d?",
    "options": [
      "Aeolian Islands",
      "Pontine Islands",
      "Flegrean Islands",
      "Maldives Islands"
    ],
    "correctIndex": 3
  },
  {
    "question": "This island, located in the Caribbean Sea, is the largest island of an archipelago called Greater Antilles. The city of Havana is located on it.",
    "options": [
      "Cuba",
      "Hispaniola",
      "Haiti",
      "Jamaica"
    ],
    "correctIndex": 0
  },
  {
    "question": "This island, also known as Formosa, is the largest island of the Republic of China.",
    "options": [
      "Matsu",
      "Taiwan",
      "Penghu",
      "Honshu"
    ],
    "correctIndex": 1
  },
  {
    "question": "What island, located in the North Pacific Ocean, is also known as the Big Island?",
    "options": [
      "Cuba",
      "Haiti",
      "Hawaii",
      "Maui"
    ],
    "correctIndex": 2
  },
  {
    "question": "This island country whose capital is Nicosia is the third-largest Mediterranean island.",
    "options": [
      "Cyprus",
      "Crete",
      "Malta",
      "Lesbos"
    ],
    "correctIndex": 0
  },
  {
    "question": "This island is one of Indonesias 33 provinces.",
    "options": [
      "Java",
      "Sumatra",
      "Bali",
      "Lombok"
    ],
    "correctIndex": 2
  },
  {
    "question": "This European island is situated in the North Atlantic Ocean, south of the Arctic Circle. Its largest city is Reykjavik.",
    "options": [
      "Iceland",
      "Ireland",
      "Greenland",
      "None of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "This is the sixth largest island in the world, and the largest island that is entirely in Indonesia.",
    "options": [
      "Sumatra",
      "New Guinea",
      "Java",
      "Borneo"
    ],
    "correctIndex": 0
  },
  {
    "question": "This island, sometimes called island of inspiration, is part of a very large country, and has a unique fauna.",
    "options": [
      "Hawaii",
      "Tasmania",
      "Madagascar",
      "Greenland"
    ],
    "correctIndex": 1
  },
  {
    "question": "Valletta is the capital city of this island country in the Mediterranean.",
    "options": [
      "Majorca",
      "Malta",
      "Corsica",
      "Cyprus"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the largest of the Canary Islands.",
    "options": [
      "Tenerife",
      "Gran Canaria",
      "La Palma",
      "Montana Clara"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the capital and largest city of Spain?",
    "options": [
      "Madrid",
      "Rome",
      "Milan",
      "Valencia"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the meaning of the name of Spain according to a popular theory?",
    "options": [
      "Land of rabbits",
      "All of these",
      "Edge",
      "Land of the setting sun"
    ],
    "correctIndex": 1
  },
  {
    "question": "Spain does not share a border with which one of these countries?",
    "options": [
      "Germany",
      "Portugal",
      "France",
      "Andorra"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the official language spoken on the territory of Spain?",
    "options": [
      "All of these",
      "Spanish and Galician",
      "Spanish and Basque",
      "Spanish"
    ],
    "correctIndex": 3
  },
  {
    "question": "When is the national holiday called Hispanic Day celebrated annually in Spain?",
    "options": [
      "October 12",
      "August 15",
      "December 6",
      "December 8"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the title of the national anthem of Spain?",
    "options": [
      "My Precious Kingdom",
      "God Save Spain",
      "Proud Spain",
      "The Royal March"
    ],
    "correctIndex": 3
  },
  {
    "question": "What are the colors of the three vertical stripes on the national flag of Spain?",
    "options": [
      "Blue, white, blue",
      "Yellow, red and black",
      "Red, yellow, red",
      "White, blue and red"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the main ingredient of the traditional Spanish dish paella?",
    "options": [
      "Lentils",
      "Rice",
      "Dough",
      "Potatoes"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these popular musicians was not born in Spain?",
    "options": [
      "Paco de Lucia",
      "Shakira",
      "Alejandro Sanz",
      "Enrique Iglesias"
    ],
    "correctIndex": 1
  },
  {
    "question": "Spanish painter and sculptor Pablo Picasso is known for co-founding what art movement?",
    "options": [
      "Cubism",
      "Expressionism",
      "Surrealism",
      "Neorealism"
    ],
    "correctIndex": 0
  },
  {
    "question": "In which section of Israel is Eilat located?",
    "options": [
      "East",
      "West",
      "South",
      "North"
    ],
    "correctIndex": 2
  },
  {
    "question": "When was the city of Eilat founded?",
    "options": [
      "1951",
      "1939",
      "1941",
      "1929"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the population of Eilat according to the Israel Central Bureau of Statistics end of 2004 census?",
    "options": [
      "45,800",
      "179,400",
      "79,200",
      "129,700"
    ],
    "correctIndex": 0
  },
  {
    "question": "What best describes the climate of Eilat?",
    "options": [
      "Hot and dry all year",
      "Humid and hot  summers and humid and cool winters",
      "Humid, hot summers and dry, cool winters",
      "Hot, dry summers and humid, cool winters"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which city is a sister city to Eilat?",
    "options": [
      "Hollywood, Florida",
      "West Palm Beach, Florida",
      "Los Angeles, California",
      "Boca Raton, Florida"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which is the major source of revenue for the Eilat area?",
    "options": [
      "Agriculture",
      "Tourism",
      "Jewelry",
      "Mining"
    ],
    "correctIndex": 1
  },
  {
    "question": "Israels major airport is located near Eilat.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which four countries can be seen from Eilat?",
    "options": [
      "Israel, Egypt, Saudi Arabia, Yemen",
      "Israel, Egypt, Jordan, Saudi Arabia",
      "Israel, Jordan, Syria, Lebanon",
      "Israel, Egypt, Jordan, Syria"
    ],
    "correctIndex": 1
  },
  {
    "question": "In 1967, Egypt effectively blockaded Eilat by closing this area to Israel.",
    "options": [
      "The Golan Heights",
      "The Sinai Peninsula",
      "The Straits of Tiran",
      "The Suez Canal"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Peace Treaty between Jordan and Israel was signed near Eilat. In what year did this happen?",
    "options": [
      "October, 2004",
      "October,1968",
      "October, 1975",
      "October, 1994"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where does the Freedom Trail begin and end?",
    "options": [
      "Kings Chapel, Bunker Hill Monument",
      "Trinity Church, Long Wharf",
      "Boston Public Gardens, Old North Church",
      "Boston Common, Charlestown Navy Yard"
    ],
    "correctIndex": 3
  },
  {
    "question": "On October 24, 1901, Annie Edson Taylor became the first person to go over the Niagara Falls in a barrel as a publicity stunt. How old was she at the time?",
    "options": [
      "63",
      "23",
      "43",
      "33"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the famous Niagara boat called?",
    "options": [
      "Niagara-on-the-Lake",
      "Lady Horseshoe",
      "Maid of the Mist",
      "Lady of the Mist"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name the smallest of the three waterfalls that make up the Niagara Falls.",
    "options": [
      "Bridal Veil Falls",
      "There are only two waterfalls that make up the Niagara Falls.",
      "Goat Falls",
      "Horseshoe"
    ],
    "correctIndex": 0
  },
  {
    "question": "Approximately what percentage of the water of the Niagara River flows over the Horseshoe Falls?",
    "options": [
      "70%",
      "90%",
      "50%",
      "10%"
    ],
    "correctIndex": 1
  },
  {
    "question": "The flow of the water over the American Falls was completely blocked from June to November in what year?",
    "options": [
      "1942",
      "1969",
      "1983",
      "1936"
    ],
    "correctIndex": 1
  },
  {
    "question": "How long is the crest of the American Falls if measured along the jagged lip of the falls?",
    "options": [
      "393  feet  (120 m)",
      "950  feet  (290 m)",
      "688  feet  (210 m)",
      "1310 feet  (400 m)"
    ],
    "correctIndex": 1
  },
  {
    "question": "What event related to the Niagara Falls occurred on March 29th 1848?",
    "options": [
      "The flow of water over both falls stopped to the point where people could walk around the riverbed.",
      "The flow of water was stopped completely over the American Falls.",
      "The waterfalls were named",
      "A third, much smaller waterfall was discovered."
    ],
    "correctIndex": 0
  },
  {
    "question": "The cities of Niagara Falls, Ontario and Niagara Falls, New York are connected by three bridges. Which of them is the oldest one?",
    "options": [
      "Whirlpool Rapids Bridge",
      "Rainbow Bridge",
      "Kingston Bridge",
      "Lewiston-Queenston Bridge"
    ],
    "correctIndex": 0
  },
  {
    "question": "When was the Skylon Tower, Niagaras most famous landmark, built?",
    "options": [
      "in the 1950s",
      "in the 1940s",
      "in the 1960s",
      "in the 1990s"
    ],
    "correctIndex": 2
  },
  {
    "question": "Around the year 1859, Jean-Fran\u00e7ois Blondin crossed the gorge below Niagara Falls on a tightrope 1100 feet (335 m) long, 160 feet (50 m) above the water. He made this accomplishment several times including which of the following theatrical variations?",
    "options": [
      "All of these",
      "He carried his manager on his back.",
      "He sat down midway while he cooked and ate an omelette.",
      "He was blindfolded."
    ],
    "correctIndex": 0
  },
  {
    "question": "Which U.S. state is nicknamed The Natural State?",
    "options": [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas"
    ],
    "correctIndex": 3
  },
  {
    "question": "What nickname has been given to the U.S. state of Oregon?",
    "options": [
      "All of these",
      "Marmot State",
      "Beaver State",
      "Otter State"
    ],
    "correctIndex": 2
  },
  {
    "question": "What U.S. state is nicknamed Land of Infinite Variety?",
    "options": [
      "South Carolina",
      "Florida",
      "Delaware",
      "South Dakota"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these nicknames has been given to the U.S. state of Colorado?",
    "options": [
      "Sweden of America",
      "Himalayas of America",
      "All of these",
      "Switzerland of America"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these nicknames has been given to the U.S. state of Illinois?",
    "options": [
      "Corn State",
      "Rubber State",
      "Cotton State",
      "Paper State"
    ],
    "correctIndex": 0
  },
  {
    "question": "This U.S. state was nicknamed Vacationland, and the nickname is used on license plates.",
    "options": [
      "Hawaii",
      "Maine",
      "Nevada",
      "California"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Independence State is one of the nicknames of this U.S. state.",
    "options": [
      "Virginia",
      "New Hampshire",
      "Pennsylvania",
      "West Virginia"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which U.S. state is nicknamed The Cowboy State?",
    "options": [
      "Texas",
      "Iowa",
      "Wyoming",
      "Idaho"
    ],
    "correctIndex": 2
  },
  {
    "question": "What nickname has been given to the U.S. state of Rhode Island?",
    "options": [
      "Ocean State",
      "Marine State",
      "Island State",
      "All of these"
    ],
    "correctIndex": 0
  },
  {
    "question": "The nickname Queen State has been given to this U.S. state.",
    "options": [
      "West Virginia",
      "Virginia",
      "All of these",
      "Maryland"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which country, Slovakia or Slovenia, used to be part of Yugoslavia?",
    "options": [
      "Slovenia",
      "Both",
      "Slovakia",
      "None of them"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which former empire were both Slovenia and Slovakia part of?",
    "options": [
      "Austria-Hungary",
      "Byzantium",
      "Ottoman Empire",
      "Roman Empire"
    ],
    "correctIndex": 0
  },
  {
    "question": "Slovakia and Slovenia joined the European Union on the same day (May 1, 2004). Which of them was first to accept the euro currency?",
    "options": [
      "None of them has accepted the EURO currency.",
      "Both did on the day of their accession to the EU.",
      "Slovakia",
      "Slovenia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the capital of Slovakia?",
    "options": [
      "Ljubljana",
      "Prague",
      "Zagreb",
      "Bratislava"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the capital of Slovenia?",
    "options": [
      "Prague",
      "Bratislava",
      "Ljubljana",
      "Zagreb"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which country borders both Slovenia and Slovakia?",
    "options": [
      "Serbia",
      "Austria",
      "Poland",
      "Germany"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which statement concerning Slovakia and Slovenia is true?",
    "options": [
      "Both countries have access to the Black Sea.",
      "Slovenia has access to the Adriatic Sea.",
      "Slovakia has access to the Baltic Sea.",
      "Both countries are landlocked."
    ],
    "correctIndex": 1
  },
  {
    "question": "The Danube river flows through many Central European countries. Which of these statements concerning Slovakia and Slovenia is true?",
    "options": [
      "The Danube does not flow through either of the 2 countries.",
      "The Danube originates in Slovakia and then enters Slovenia.",
      "Of the two countries, only Slovakia has Danubian banks.",
      "The Danube originates in Slovenia and then flows through Slovakia."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements regarding Slovakia and Slovenia is true?",
    "options": [
      "Only Slovakia is an Alpine country.",
      "Only Slovenia is an Alpine country.",
      "None of them is an Alpine country.",
      "Both are Alpine countries."
    ],
    "correctIndex": 1
  },
  {
    "question": "Which country, Slovakia or Slovenia, borders a country that did not join the European Union in the period 1951-2007?",
    "options": [
      "Only Slovakia borders a country that did not join the EU during this period.",
      "Both share borders only with countries that became EU members during this period.",
      "Both share borders with countries that did not became EU members during this period.",
      "Only Slovenia borders a country that did not join the EU during this period."
    ],
    "correctIndex": 2
  },
  {
    "question": "What design is depicted on the national flag of Switzerland?",
    "options": [
      "Sun",
      "Cross",
      "Star",
      "Leaf"
    ],
    "correctIndex": 1
  },
  {
    "question": "Switzerland is often associated with this product which is produced at the highest quality in the country.",
    "options": [
      "Chocolate",
      "Watches",
      "All of these",
      "Cheese"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the unofficial national motto of Switzerland?",
    "options": [
      "Progress ans prosperity",
      "In God we trust",
      "One for all, all for one",
      "Higher and stronger"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the capital city of Switzerland?",
    "options": [
      "Bonn",
      "Bern",
      "Berlin",
      "Zurich"
    ],
    "correctIndex": 1
  },
  {
    "question": "What mountain covers about 65% of the territory of Switzerland?",
    "options": [
      "the Apennines",
      "the Andes",
      "Ararat",
      "the Alps"
    ],
    "correctIndex": 3
  },
  {
    "question": "What language is adopted as official for the territory of Switzerland?",
    "options": [
      "German",
      "Italian",
      "French",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the title of the national anthem of Switzerland?",
    "options": [
      "Swiss Vow",
      "Swiss Song",
      "Swiss Anthem",
      "Swiss Psalm"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the main ingredient of the traditional Swiss dish Rosti?",
    "options": [
      "Cheese",
      "Cabbage",
      "Fish",
      "Potatoes"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the largest city in Switzerland?",
    "options": [
      "Geneva",
      "Zurich",
      "Bern",
      "Munich"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these famous philosophers was of Swiss descent?",
    "options": [
      "Jean-Jacques Rousseau",
      "Michel Foucault",
      "Friedrich Schiller",
      "Jean-Paul Sartre"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of these is the capital and the largest city in North Korea?",
    "options": [
      "Nampho",
      "Hungnam",
      "Sinuiju",
      "Pyongyang"
    ],
    "correctIndex": 3
  },
  {
    "question": "What type of climate does North Korea have?",
    "options": [
      "Oceanic",
      "Humid subtropical",
      "Continental",
      "Tropical"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these seas surrounds the Korean Peninsula, in the northern part of which North Korea is located?",
    "options": [
      "All of these",
      "East China Sea",
      "Sea of Japan",
      "Yellow Sea"
    ],
    "correctIndex": 0
  },
  {
    "question": "The establishment of the Democratic Peoples Republic of Korea in this year set the official beginning of North Koreas history.",
    "options": [
      "1940",
      "1950",
      "1948",
      "1945"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these statements is true about the division of Korea into two parts?",
    "options": [
      "Korea was divided at the 38th parallel.",
      "North Korea was to be administered by the Soviet union.",
      "All of these",
      "It followed the end of World War II."
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these natural disasters is known to hit the lands of North Korea on the regular?",
    "options": [
      "All of these",
      "Droughts",
      "Floods",
      "Typhoons"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the official language that is spoken in North Korea?",
    "options": [
      "All of these",
      "Russian",
      "Korean",
      "Japanese"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these religious movements has many adherents among the people of North Korea?",
    "options": [
      "Korean shamanism",
      "Cheondoism",
      "All of these",
      "Buddhism"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which of these musicians became the first US musical group ever to perform in North Korea?",
    "options": [
      "The Black Eyed Peas",
      "The New York Philharmonic Orchestra",
      "The Helen Henderson Choir of Victory Baptist Church",
      "Linkin Park"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these events is regularly performed only in North Korea?",
    "options": [
      "Mass games",
      "Senior citizens beauty pageant",
      "Politicians athletics",
      "Binoculars football games"
    ],
    "correctIndex": 0
  },
  {
    "question": "What other name is commonly used to refer to the Colorado River in North America?",
    "options": [
      "Black River",
      "Yellow River",
      "Blue River",
      "Red River"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the longest river in the United States of America?",
    "options": [
      "Colorado",
      "Missouri",
      "Rio Grande",
      "Mississippi"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Ohio River does not flow though the territory of this American state.",
    "options": [
      "Illinois",
      "Virginia",
      "Kentucky",
      "West Virginia"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the longest river located entirely within the territory of the state of California?",
    "options": [
      "Mad River",
      "Salmon River",
      "Big River",
      "Sacramento River"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the meaning of the name of the Mississippi River, which originated from the Ojibwe word misi-ziibi?",
    "options": [
      "Holy water",
      "Fast river",
      "River of life",
      "Great river"
    ],
    "correctIndex": 3
  },
  {
    "question": "What ocean fish migrates from the Pacific Ocean to the Columbia River to spawn at the end of their life cycles?",
    "options": [
      "Steelhead salmon (Rainbow trout)",
      "All of these",
      "Coho salmon",
      "Chinook salmon"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the The Rio Grande river called in Mexico?",
    "options": [
      "All of these",
      "Rio Bravo",
      "Rio Rojo",
      "Rio del Fuego"
    ],
    "correctIndex": 1
  },
  {
    "question": "What river in North America provides food for the largest wintering Bald Eagle population in the continental United States?",
    "options": [
      "Fraser",
      "Skeena",
      "St. Lawrence",
      "Skagit River"
    ],
    "correctIndex": 3
  },
  {
    "question": "What does the Mohawk name of the Saint Lawrence River, Kaniatarowanenneh, mean?",
    "options": [
      "Female river",
      "Murmur of the gods",
      "Burning water",
      "Big waterway"
    ],
    "correctIndex": 3
  },
  {
    "question": "More than half of the Yukon River is located within this American state.",
    "options": [
      "North Dakota",
      "Kansas",
      "Alaska",
      "Texas"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the name of the capital and largest city of Norway?",
    "options": [
      "Reykjavik",
      "Bergen",
      "Oslo",
      "Helsinki"
    ],
    "correctIndex": 2
  },
  {
    "question": "According to some medieval texts, the name of Norway originated from the name of which of the following?",
    "options": [
      "A mountain",
      "The name of a king",
      "The name of a river",
      "An animal"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of government does Norway have?",
    "options": [
      "Absolute monarchy",
      "Constitutional monarchy",
      "Democratic republic",
      "Presidential republic"
    ],
    "correctIndex": 1
  },
  {
    "question": "What animal is depicted on the Coat of Arms of Norway?",
    "options": [
      "Lion",
      "Bear",
      "Deer",
      "Wolf"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the predominant form of Christianity in Norway?",
    "options": [
      "Anglicanism",
      "Eastern Orthodox Christianity",
      "Roman Catholicism",
      "Protestantism"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the official language adopted by the government of Norway?",
    "options": [
      "Norwegian and Finnish",
      "Norwegian and English",
      "Norwegian and Romani",
      "Norwegian"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the title of the national anthem of Norway?",
    "options": [
      "Glory, Glory",
      "Oh, Amazing Land",
      "The Way North",
      "Yes, We Love This Country"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is Bunad?",
    "options": [
      "A traditional Norwegian celebration",
      "A Norwegian song",
      "A Norwegian costume",
      "A Norwegian meal"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the popular Norwegian delicacy called Smalahove made from?",
    "options": [
      "Pork intestines",
      "Fish liver",
      "Chicken popes nose",
      "Lamb head"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of the following is present on the national flag of Norway?",
    "options": [
      "Star",
      "Cross",
      "Sun",
      "Mountain"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the largest carnivorous mammal endemic to the island of Madagascar?",
    "options": [
      "Short-tailed Mongoose",
      "Fanaloka",
      "Meerkat",
      "Fossa"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is true about Madagascar?",
    "options": [
      "It is slightly smaller than France.",
      "It is the worlds 56th-largest country in terms of area.",
      "None of these",
      "It is the fifth largest island in the world."
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the title of the national anthem of Madagascar, written by Norbert Raharisoa and composed by Rahajason?",
    "options": [
      "Dear Motherland",
      "Blessed Island",
      "Oh, Our Beloved Fatherland",
      "Rise, Oh, Rise"
    ],
    "correctIndex": 2
  },
  {
    "question": "What are the colors on the national flag of Madagascar, adopted on October 14, 1958?",
    "options": [
      "Red, yellow and blue",
      "Yellow and green",
      "Blue, green and yellow",
      "White, red and green"
    ],
    "correctIndex": 3
  },
  {
    "question": "What city is the capital and largest city of Madagascar?",
    "options": [
      "Fianarantsoa",
      "Mahajanga",
      "Antananarivo",
      "Toliara"
    ],
    "correctIndex": 2
  },
  {
    "question": "What are the official languages spoken in Madagascar?",
    "options": [
      "Malagasy, French and English",
      "Malagasy and English",
      "Malagasy and French",
      "English and French"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name some ecologists use wen referring to Madagascar?",
    "options": [
      "The eight continent",
      "All of these",
      "The island of Adam and Eve",
      "The garden of Eden"
    ],
    "correctIndex": 0
  },
  {
    "question": "What kind of traditional ritual is the Famadihana, practiced by the Malagasy people in Madagascar?",
    "options": [
      "Circumcision",
      "Introducing boys into manhood by tattooing and scarring them",
      "Turning of the dead",
      "Animal sacrifice"
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of meal is the godro-godro, which is very popular in the Madagascar cuisine?",
    "options": [
      "Seafood meal",
      "Rice meal",
      "Pudding",
      "Vegetable stew"
    ],
    "correctIndex": 2
  },
  {
    "question": "This tree is a very important part of the Madagascar dry deciduous forests and six species of it are endemic to the island.",
    "options": [
      "All of these",
      "Bottle tree",
      "Monkey bread tree",
      "Upside-down tree"
    ],
    "correctIndex": 0
  },
  {
    "question": "In 1945 Borneo was the site of horrific acts of brutality. The Japanese forced over 6,000 POWs and island civilians to march to a new camp some 160 miles away. This became known as the Sandakan Death March, as only 200 marchers survived to the end of the war.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "How many new species of animals and plants were discovered on Borneo between July 2005 and September 2006?",
    "options": [
      "None",
      "121",
      "3",
      "52"
    ],
    "correctIndex": 3
  },
  {
    "question": "Between the 1980s and 2006 Borneo lost approximately 45 % of its rain forests due to logging.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "Borneo is the 3rd largest island in the world.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "From the 1600s to the 1800s, the British and Dutch were interested in Borneo because they wanted control of this resource.",
    "options": [
      "Pepper",
      "Salt",
      "Coffee",
      "Tea"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the characteristics below is typical for the buildings on the Greek archipelago of Santorini?",
    "options": [
      "The white-and-blue colouring",
      "The huge balconies",
      "The red-tiled roofs",
      "The arched doors"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the biggest Greek island ?",
    "options": [
      "Rhodes",
      "Cyprus",
      "Euboea",
      "Crete"
    ],
    "correctIndex": 3
  },
  {
    "question": "The Navagio Bay (also known as the Shipwreck) is the most popular beach of which Greek island?",
    "options": [
      "Mykonos",
      "Zakynthos",
      "Lefkada",
      "Thasos"
    ],
    "correctIndex": 1
  },
  {
    "question": "Halkidiki, one of the Greek peninsulas, has a peculiar form which resembles what?",
    "options": [
      "A horseshoe",
      "A trident",
      "An olive twig",
      "The Greek letter Omega"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which medieval monument is an essential part of the archaeological sites of the Greek island Rhodes?",
    "options": [
      "The Palace of the Grand Master",
      "The White Tower",
      "The Venice Castle of Naoussa",
      "The Odeon"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which island is NOT a part of Greece?",
    "options": [
      "Kea",
      "Hydra",
      "Gozo",
      "Kos"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Corinth Canal separates this Greek peninsula from the mainland of Greece.",
    "options": [
      "Halkidiki",
      "Mani",
      "Elounda",
      "Peloponnese"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which is the largest group of Greek islands?",
    "options": [
      "The Cyclades",
      "The Sporades",
      "The Ionian",
      "The East Aegean"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Cave of Melissani is among the most popular geological landmarks of which Greek island?",
    "options": [
      "Kefallonia",
      "Lefkada",
      "Mykonos",
      "Samos"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following places in Greece is NOT an island?",
    "options": [
      "Alonissos",
      "Ithaka",
      "Kavala",
      "Kythira"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Shinsengumi group remained loyal to the Tokugawa shogunate until the end of the Bakamatsu.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the leader of the first squad of Shinsengumi?",
    "options": [
      "Okita S\u014dji",
      "Inoue Genzabur\u014d",
      "Harada Sanosuke",
      "T\u014dd\u014d Heisuke"
    ],
    "correctIndex": 0
  },
  {
    "question": "At its peak, how many members did the Shinsengumi group have?",
    "options": [
      "50+",
      "300+",
      "200+",
      "100+"
    ],
    "correctIndex": 1
  },
  {
    "question": "According to the Shinsengumi rules, if the leader of a unit is mortally wounded in a fight, what should the rest of the group do?",
    "options": [
      "Run away",
      "Take the body and run away",
      "Commit Seppuku",
      "All members of the unit must fight and die on the spot."
    ],
    "correctIndex": 3
  },
  {
    "question": "In which city was the Shinsengumi group founded?",
    "options": [
      "Kyoto",
      "Tokyo",
      "Nagasaki",
      "Osaka"
    ],
    "correctIndex": 0
  },
  {
    "question": "Who was Shinsengumi Commander from 1863 to 1868?",
    "options": [
      "Nagakura Shinpachi",
      "Harada Sanosuke",
      "T\u014dd\u014d Heisuke",
      "Kond\u014d Isami"
    ],
    "correctIndex": 3
  },
  {
    "question": "The code of Shinsengumi comprised five rules. What was the punishment for breaking these rules?",
    "options": [
      "Sepuku",
      "Cutting of one finger",
      "Exile",
      "Paying six gold coins"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the favorite weapon of Harada Sanosuke, the 10th unit captain of the Shinsengumi?",
    "options": [
      "Kozuka Blade",
      "Spear",
      "Sword",
      "Shuriken"
    ],
    "correctIndex": 1
  },
  {
    "question": "This river flows through the southern part of England and passes through the capital of the country.",
    "options": [
      "The Avon",
      "All of these",
      "The Thames",
      "The Mersey"
    ],
    "correctIndex": 2
  },
  {
    "question": "What river is considered the longest river on the planet?",
    "options": [
      "The Nile",
      "The Tigris",
      "The Mississippi",
      "The Amazon"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the holy river of the Hindu people?",
    "options": [
      "The Ganges",
      "The Euphrates",
      "The Indus",
      "The Tigris"
    ],
    "correctIndex": 0
  },
  {
    "question": "What river flows through the central part of the French capital, Paris?",
    "options": [
      "Seine",
      "Loire",
      "Charente",
      "Rhine"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the longest river in Asia, and the third-longest in the world?",
    "options": [
      "The Yangtze",
      "The Mekong-Lancang",
      "The Tigris",
      "The Huang He"
    ],
    "correctIndex": 0
  },
  {
    "question": "This river is the longest in the United States, and it gave its name to one of the states.",
    "options": [
      "The Missouri River",
      "The Mississippi River",
      "The Alabama River",
      "The Ohio River"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the largest river on the planet by volume?",
    "options": [
      "The Mississippi",
      "The Amazon",
      "The Nile",
      "The Ganges"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the river in which Jesus Christ was baptized by John the Baptist?",
    "options": [
      "The Tigris",
      "The Jordan",
      "The Euphrates",
      "The Nile"
    ],
    "correctIndex": 1
  },
  {
    "question": "This North American river is also called Kaniatarowanenneh, which means big waterway in Mohawk.",
    "options": [
      "Saint Lawrence River",
      "Rio Grande",
      "Colorado",
      "Ohio River"
    ],
    "correctIndex": 0
  },
  {
    "question": "This European river originates in Germany and empties in the Black Sea via a delta.",
    "options": [
      "The Volga",
      "The Danube",
      "The Rhine",
      "All of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "There is a city in Oklahoma called Moon.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Oklahoma has no cities and communities named after Presidents.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what Oklahoma city was the shopping cart invented?",
    "options": [
      "Ardmore",
      "Guthrie",
      "Duncan",
      "Broken Arrow"
    ],
    "correctIndex": 0
  },
  {
    "question": "How many of the astronauts who have flown in space between 1959 and 2009 were from Oklahoma?",
    "options": [
      "6",
      "20",
      "0",
      "3"
    ],
    "correctIndex": 0
  },
  {
    "question": "There is a town in Oklahoma called IXL.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "A windspeed of 100 feet above the ground was observed in 1999 in what Oklahoma city?",
    "options": [
      "Lawton",
      "Norman",
      "Moore",
      "Midwest City"
    ],
    "correctIndex": 2
  },
  {
    "question": "Will Rogers World Airport and the Wiley Post Airport were named after people who died in 1935. How did they meet their demise?",
    "options": [
      "in a plane crash",
      "by murder",
      "in a car crash",
      "as a result of a boat accident"
    ],
    "correctIndex": 0
  },
  {
    "question": "Carl Albert High School was named after Carl Bert Albert, who was the Speaker of the House of Representatives from 1971 to 1977. What small Oklahoma town did he hail from?",
    "options": [
      "Enid",
      "Bushyhead",
      "Slaughterville",
      "Bugtussle"
    ],
    "correctIndex": 3
  },
  {
    "question": "Oklahoma has more man-made lakes than any other state.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is NOT an Oklahoma city?",
    "options": [
      "Peoria",
      "Burbank",
      "St. Louis",
      "Toledo"
    ],
    "correctIndex": 3
  },
  {
    "question": "Boise City, Oklahoma was the only city within the continental United States to be bombed during World War II.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "The national motto of the Republic of Botswana is Pula. What does this mean in English?",
    "options": [
      "Rain",
      "Strength",
      "Wisdom",
      "Sunshine"
    ],
    "correctIndex": 0
  },
  {
    "question": "The national motto of what country is A Mari Usque Ad Mare, meaning From Sea to Sea in Latin?",
    "options": [
      "Jamaica",
      "Spain",
      "Canada",
      "Haiti"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the national motto of India, Satyameva Jayate, mean in Sanskrit?",
    "options": [
      "The Supreme Treasure of Truth",
      "Truth Alone Triumphs",
      "Truth Is The Best Way",
      "Truth Is Divine"
    ],
    "correctIndex": 1
  },
  {
    "question": "The national motto of what country is Peace at Home, Peace in the World?",
    "options": [
      "Afghanistan",
      "Somalia",
      "Nigeria",
      "Turkey"
    ],
    "correctIndex": 3
  },
  {
    "question": "The national motto of this South American country is Libertad o muerte, Spanish for Liberty or Death.",
    "options": [
      "Peru",
      "Uruguay",
      "Argentina",
      "Brazil"
    ],
    "correctIndex": 1
  },
  {
    "question": "The national motto of the Republic of the Fiji Islands is Rerevaka na Kalou ka Doka na Tui. What does this mean?",
    "options": [
      "Fear God and honor the Queen",
      "God bless our beautiful motherland",
      "We kneel before you, blessed land",
      "Hard work comes before prosperity"
    ],
    "correctIndex": 0
  },
  {
    "question": "The slogan Sub Umbra Floreo, or Under the Shade I Flourish is the national motto of what Central American country?",
    "options": [
      "Costa Rica",
      "Belize",
      "Guatemala",
      "Nicaragua"
    ],
    "correctIndex": 1
  },
  {
    "question": "The national motto of what island country is Ever Conscious of God We Aspire, Build and Advance as One People?",
    "options": [
      "Grenada",
      "New Zealand",
      "Papua New Guinea",
      "Micronesia"
    ],
    "correctIndex": 0
  },
  {
    "question": "The national motto of this Arabic country is God is the greatest.",
    "options": [
      "Morocco",
      "Iran",
      "Syria",
      "Iraq"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the meaning of the national motto of the Republic of Indonesia, Bhinneka Tunggal Ika?",
    "options": [
      "Unity in Diversity",
      "Past Present Future",
      "Progress and Stability",
      "We Are Strong Together"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what country is the Angel Falls, the highest waterfall on the planet, located?",
    "options": [
      "Brazil",
      "Argentina",
      "Colombia",
      "Venezuela"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these is a section of the famous Niagara Falls?",
    "options": [
      "Horseback Falls",
      "Horseshoe Falls",
      "Horsetail Falls",
      "Horseman Falls"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what U.S. state is the famous Bridalveil Fall located?",
    "options": [
      "California",
      "Florida",
      "Colorado",
      "Hawaii"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the tallest waterfall made by humans, which is located in Umbria, Italy?",
    "options": [
      "Cascata delle Marmore",
      "Cascata del Maria",
      "Cascata del Mare",
      "Cascata delle Maccheroni"
    ],
    "correctIndex": 0
  },
  {
    "question": "Jog Falls is the highest plunge waterfall in this Asian country.",
    "options": [
      "India",
      "Japan",
      "China",
      "Thailand"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the name of the second-tallest waterfall on the planet?",
    "options": [
      "Temola Falls",
      "Tugela Falls",
      "Tierra Falls",
      "Tamilla Falls"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what European country are the Rhine Falls located?",
    "options": [
      "Germany",
      "Switzerland",
      "Austria",
      "Belgium"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what U.S. state is the tallest waterfall in the country, Waihilau Falls, located?",
    "options": [
      "Idaho",
      "Wyoming",
      "Hawaii",
      "Iowa"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what country is Jurong Falls, the tallest artificial waterfall in the world, located?",
    "options": [
      "Indonesia",
      "Singapore",
      "Vietnam",
      "North Korea"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the tallest waterfall in eastern North America?",
    "options": [
      "Pissing Mare Falls",
      "Pissing Horse Falls",
      "Pissing Elephant Falls",
      "Pissing Buffalo Falls"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the old name of the country of Madagascar?",
    "options": [
      "Rhodesia",
      "Mozambique",
      "Malaysia",
      "Malagasy Republic"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where is Madagascar?",
    "options": [
      "Off the Southeast Coast of South America",
      "Off the Southeast Coast of South America",
      "Off the Southwest Coast of Africa",
      "Off the Southeast Coast of Africa"
    ],
    "correctIndex": 3
  },
  {
    "question": "What are the 2 main languages spoken in Madagascar?",
    "options": [
      "Italian and French",
      "French and English",
      "English and Malagasy",
      "French and Malagasy"
    ],
    "correctIndex": 3
  },
  {
    "question": "Madagascar is the worlds largest producer and exporter of what product?",
    "options": [
      "Sugarcane",
      "Vanilla",
      "Tapioca",
      "Rice"
    ],
    "correctIndex": 1
  },
  {
    "question": "Of the 10,000 plants native to Madagascar, what percent are found nowhere else in the world?",
    "options": [
      "49%",
      "13%",
      "90%",
      "72%"
    ],
    "correctIndex": 2
  },
  {
    "question": "On what island is the country of Madagascar located?",
    "options": [
      "Madagascar Island",
      "Nias Island",
      "Simeulue Island",
      "Christmas Island"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following is NOT located in the country of Madagascar?",
    "options": [
      "Nosy-Be",
      "Antananarivo",
      "Antsirabe",
      "Bodrum"
    ],
    "correctIndex": 3
  },
  {
    "question": "I am a primate endemic to Madagascar. I have large, reflective eyes. I have a long tail. I have long toes, and opposable thumbs, useful for grasping tree branches. What am I?",
    "options": [
      "An iguana",
      "An ape",
      "A monkey",
      "A lemur"
    ],
    "correctIndex": 3
  },
  {
    "question": "What Portuguese explorer was the first to sight the island of Madagascar?",
    "options": [
      "Henry the Navigator",
      "Diego Dias",
      "Diogo Cao",
      "Vasco da Gama"
    ],
    "correctIndex": 1
  },
  {
    "question": "The first people to settle Madagascar came from Africa.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where is New Guinea ranked in terms of size, among the islands of the world?",
    "options": [
      "New Guinea is the third largest island in the world.",
      "New Guinea is the fourth largest island in the world.",
      "New Guinea is the second largest island in the world.",
      "New Guinea is the largest island in the world."
    ],
    "correctIndex": 2
  },
  {
    "question": "New Guinea is an island north of Australia. It is divided into 2 roughly equal halves. What are they?",
    "options": [
      "The western portion is part of Australia. The eastern portion is the country called Sumatra.",
      "The western portion is part of Indonesia. The eastern portion is the country called Papua New Guinea.",
      "The western portion is part of Indonesia. The eastern portion is the country called Sumatra.",
      "The western portion is part of Australia. The eastern portion is the country called Papua New Guinea."
    ],
    "correctIndex": 1
  },
  {
    "question": "New Guinea is the most linguistically diverse area in the world. Approximately how many separate languages are spoken there?",
    "options": [
      "80",
      "20",
      "650",
      "1000"
    ],
    "correctIndex": 3
  },
  {
    "question": "The island of New Guinea was named after the country of Guinea. Which is Guinea located?",
    "options": [
      "Africa",
      "In the Pacific Ocean",
      "South America",
      "Asia"
    ],
    "correctIndex": 0
  },
  {
    "question": "The country of Papua New Guinea gained its independence from this country in 1975.",
    "options": [
      "Mozambique",
      "Australia",
      "Indonesia",
      "New Zealand"
    ],
    "correctIndex": 1
  },
  {
    "question": "The west half of the island of New Guinea is part of Indonesia, which comprises how many islands?",
    "options": [
      "4",
      "8,407",
      "17,508",
      "247,542"
    ],
    "correctIndex": 2
  },
  {
    "question": "Approximately what percentage of the population of the country of Papua New Guinea lives in rural areas?",
    "options": [
      "50%",
      "34%",
      "97%",
      "86%"
    ],
    "correctIndex": 3
  },
  {
    "question": "In the country of Papua New Guinea, how many children does the average woman give birth to during her lifetime according to 2006 estimates?",
    "options": [
      "1.2",
      "2.8",
      "4.6",
      "3.9"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the capital city of the country of Papua New Guinea?",
    "options": [
      "Port Moresby",
      "Madang",
      "Wau",
      "Lae"
    ],
    "correctIndex": 0
  },
  {
    "question": "The islands of the Pacific are collectively termed Oceania. Oceania is divided into several sub-groupings. In which of these is New Guinea located?",
    "options": [
      "Polynesia",
      "None of these",
      "Melanesia",
      "Micronesia"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the literal translation of the title of the national anthem of Egypt, Bilady, Bilady, Bilady?",
    "options": [
      "Amazing, amazing, amazing",
      "Sing, sing, sing",
      "My country, my country, my country",
      "Blessed, blessed, blessed"
    ],
    "correctIndex": 2
  },
  {
    "question": "What sea borders Egypt to the east?",
    "options": [
      "Black Sea",
      "Yellow Sea",
      "Mediterranean Sea",
      "Red Sea"
    ],
    "correctIndex": 3
  },
  {
    "question": "Why was Egypt called Kemet, or black land, back in the ancient times?",
    "options": [
      "Because of the coal",
      "Because of the black soils",
      "Because of the petrol",
      "All of these"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the official language spoken in Egypt?",
    "options": [
      "Arabic and French",
      "Arabic",
      "Arabic, English and French",
      "Arabic and English"
    ],
    "correctIndex": 1
  },
  {
    "question": "What Egyptian city is the largest city not only in Africa, but also in the whole Middle East?",
    "options": [
      "Cairo",
      "Alexandria",
      "Giza",
      "Ismailia"
    ],
    "correctIndex": 0
  },
  {
    "question": "What animal is depicted on Egypts national emblem, which is featured on the national flag of Egypt, adopted in 1984?",
    "options": [
      "Bear",
      "Jackal",
      "Eagle",
      "Lion"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where was Omar Sharif, one of the most famous Egyptian actors, born?",
    "options": [
      "Paris, France",
      "New York City, USA",
      "Hamburg, Germany",
      "Alexandria, Egypt"
    ],
    "correctIndex": 3
  },
  {
    "question": "What sport is rated as the most popular sport among Egyptians?",
    "options": [
      "Football (soccer)",
      "Baseball",
      "Handball",
      "Tennis"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Egyptian territory is calculated to be roughly twice as large as the territory of this European country.",
    "options": [
      "Poland",
      "Spain",
      "France",
      "United Kingdom"
    ],
    "correctIndex": 1
  },
  {
    "question": "What expression is commonly used in Egypt to refer to the annual flooding of the river Nile, the longest river in the world?",
    "options": [
      "Feeding of the Soil",
      "The Gift of the Nile",
      "The Blessing of the Nile",
      "The Mother of Abundance"
    ],
    "correctIndex": 1
  },
  {
    "question": "Luxembourg is bordered by all of the following nations except this one.",
    "options": [
      "Belgium",
      "France",
      "Germany",
      "Netherlands"
    ],
    "correctIndex": 3
  },
  {
    "question": "What languages are spoken in Luxembourg?",
    "options": [
      "All of these",
      "German",
      "French",
      "Luxembourgish"
    ],
    "correctIndex": 0
  },
  {
    "question": "Luxembourg was not involved in any 20th century war.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following organizations is Luxembourg a member of?",
    "options": [
      "OECD",
      "United Nations",
      "European Union",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Luxembourg has a population of approximately how many people?",
    "options": [
      "30,000",
      "one half million",
      "two million",
      "three and one half million"
    ],
    "correctIndex": 1
  },
  {
    "question": "Why is Luxembourg City one of the wealthiest cities in the world?",
    "options": [
      "It is the European center of computer and computer related companies.",
      "There is great mineral wealth in the area around the city.",
      "It is a banking and administrative center.",
      "Rich retired people have ranked it as the most desirable place in Europe to live."
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the official name of Luxembourg?",
    "options": [
      "The Peoples Republic of Luxembourg",
      "Grand Duchy of Luxembourg",
      "The Luxembourg Democratic Republic",
      "The Kingdom of Luxembourg"
    ],
    "correctIndex": 1
  },
  {
    "question": "How does Luxembourg, which is a member of NATO, contribute to NATO?",
    "options": [
      "by maintaining the sixth largest NATO air force",
      "by maintaining a small army",
      "by allowing extensive US and British military installations on its territory",
      "by financially supporting a navy even though is has no coastline"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the predominant religion in Luxembourg?",
    "options": [
      "Islam",
      "Orthodox Catholic",
      "Protestant",
      "Roman Catholic"
    ],
    "correctIndex": 3
  },
  {
    "question": "The flag of Luxembourg consists of three vertical stripes of red, blue, green.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what country is Virginia Falls located?",
    "options": [
      "United States",
      "Austarlia",
      "Wales",
      "Canada"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the tallest waterfall in Asia?",
    "options": [
      "Midagahara Falls",
      "Hannoki Falls",
      "Shomyo Falls",
      "Toyama Falls"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Eas a Chual Aluinn is the highest waterfall in this country.",
    "options": [
      "France",
      "China",
      "Sri Lanka",
      "Great Britain"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the English name of the Mosi-oa-Tunya waterfall located between Zambia and Zimbabwe?",
    "options": [
      "Virginia Falls",
      "Veronica Falls",
      "Valeria Falls",
      "Victoria Falls"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what country is Yumbilla Falls, the fifth-tallest waterfall on the planet, located?",
    "options": [
      "Chile",
      "Peru",
      "Thailand",
      "Australia"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where is the third-tallest waterfall on the planet, Ramnefjellsfossen, located?",
    "options": [
      "Norway",
      "Finland",
      "Switzerland",
      "Denmark"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the name of the Iguazu Falls, located in South America, mean in English?",
    "options": [
      "Way to heaven",
      "River storm",
      "Devils waterfall",
      "Big water"
    ],
    "correctIndex": 3
  },
  {
    "question": "In what country is Gocta Waterfall located?",
    "options": [
      "Venezuela",
      "Peru",
      "Spain",
      "Nicaragua"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the highest waterfall in North America?",
    "options": [
      "Richard Brown Falls",
      "Johnathan Stevens Falls",
      "James Bruce Falls",
      "John Cliff Falls"
    ],
    "correctIndex": 2
  },
  {
    "question": "In which U.S. state is the Multnomah Falls located?",
    "options": [
      "Ohio",
      "Oregon",
      "Maine",
      "Missouri"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the largest volcano on Earth in terms of area?",
    "options": [
      "Mauna Loa",
      "Taal Volcano",
      "Mauna Kea",
      "Mount Etna"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what Asian country is the Mount Unzen volcanic group located?",
    "options": [
      "Vietnam",
      "Japan",
      "China",
      "Thailand"
    ],
    "correctIndex": 1
  },
  {
    "question": "The area around what Italian volcano is the most densely populated volcanic region in the world, making the volcano one of the most dangerous on the planet?",
    "options": [
      "Mount Vesuvius",
      "Mount Etna",
      "None of these",
      "Stromboli"
    ],
    "correctIndex": 0
  },
  {
    "question": "This Andean stratovolcano in Colombia erupted in 1993, killing 9 people.",
    "options": [
      "Galeras",
      "Pasto",
      "Nina",
      "Paloma"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Santorini volcanic islands are part of what European country?",
    "options": [
      "Denmark",
      "Spain",
      "Italy",
      "Greece"
    ],
    "correctIndex": 3
  },
  {
    "question": "This Russian volcano, located on the Kamchatka Peninsula, is one of the most active volcanoes on the planet.",
    "options": [
      "Elbrus",
      "Anik Mountain",
      "Sikhote-Alin",
      "Avachinsky"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the dangerous active volcano located in the Western Highlands of Guatemala?",
    "options": [
      "Santa Lucia",
      "Santa Fernanda",
      "Santa Beatrice",
      "Santa Maria"
    ],
    "correctIndex": 3
  },
  {
    "question": "On which of the Philippine islands is the active Taal Volcano located?",
    "options": [
      "Mindanao",
      "Visayas",
      "Luzon",
      "None of these"
    ],
    "correctIndex": 2
  },
  {
    "question": "On which of the Canary Islands is the Mount Teide volcano located?",
    "options": [
      "Gran Canaria",
      "Fuerteventura",
      "La Palma",
      "Tenerife"
    ],
    "correctIndex": 3
  },
  {
    "question": "This countrys national holidays include:",
    "options": [
      "Chile",
      "Cuba",
      "Mexico",
      "Palestine"
    ],
    "correctIndex": 1
  },
  {
    "question": "None of these  could be found in Europe before the Great Geographical Discoveries:",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the highest point in the state of Illinois?",
    "options": [
      "Lincoln Mound",
      "Devils Mound",
      "Charles Mound",
      "Mount Vernon"
    ],
    "correctIndex": 2
  },
  {
    "question": "Makawao is the capital of the State of Hawaii.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the 16th president of the United States?",
    "options": [
      "Abraham Lincoln",
      "Andrew Johnson",
      "James Polk",
      "Ulysses P. Grant"
    ],
    "correctIndex": 0
  },
  {
    "question": "The city of Saint Louis, nicknamed Gateway to the West, is located in which state?",
    "options": [
      "Missouri",
      "Nebraska",
      "Mississippi",
      "Ohio"
    ],
    "correctIndex": 0
  },
  {
    "question": "Malcolm X, the founder of the Organization of Afro-American Unity,  was born in what US city?",
    "options": [
      "Kansas City",
      "Omaha",
      "Saint Louis",
      "Belleville"
    ],
    "correctIndex": 1
  },
  {
    "question": "President George W. Bush was inaugurated on January 20, 2000.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the capital of Illinois, the 21st US State?",
    "options": [
      "Chicago",
      "Lincoln",
      "Springfield",
      "Omaha"
    ],
    "correctIndex": 2
  },
  {
    "question": "This city, located in Colorado, is the highest city in the United States.",
    "options": [
      "Vail",
      "Leadville",
      "Colorado Springs",
      "Denver"
    ],
    "correctIndex": 1
  },
  {
    "question": "Amelia Earhart, the first woman to fly solo across the Atlantic, was born in what city and state?",
    "options": [
      "Omaha, Nebraska",
      "Louisville, Kentucky",
      "New York City, New York",
      "Atchison, Kansas"
    ],
    "correctIndex": 3
  },
  {
    "question": "Arrange the following oceans by their total area, starting with the largest:",
    "options": [
      "2, 1, 3, 5, 4",
      "2, 1, 4, 5, 3",
      "1, 2, 4, 5, 3",
      "1, 2, 5, 4, 3"
    ],
    "correctIndex": 0
  },
  {
    "question": "Finish the lyrics of the official state song of California, I Love You, California written by F. B. Silverwood:",
    "options": [
      "It is home sweet home to me.",
      "You are very dear to me.",
      "It is where I want to be.",
      "And where the angels live."
    ],
    "correctIndex": 0
  },
  {
    "question": "In geography, the term desert is used to refer to a region that receives little or no precipitation. Approximately one-third of Earths land surface is desert, with the largest such region being which of these?",
    "options": [
      "Sahara",
      "Antarctica",
      "Kalahari",
      "Greenland"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Kalahari Desert, meaning great thirst translated from the local language, is a vast area of red-brown sands, taking up a considerable area of which of these regions?",
    "options": [
      "Central Asia",
      "South Africa",
      "The Middle East",
      "Southwest Asia"
    ],
    "correctIndex": 1
  },
  {
    "question": "This African desert, famous for its enormous sand dunes, is considered the oldest desert in the world, having endured its current arid conditions for at least 80 million years.",
    "options": [
      "Libyan Desert",
      "Kalahari Desert",
      "Namib Desert",
      "Kara Kum Desert"
    ],
    "correctIndex": 2
  },
  {
    "question": "Rangipo Desert in the central part of New Zealands North Island, does not have its barren and lifeless appearance because of the lack of rain, but rather, due to which of these?",
    "options": [
      "Intense use of pesticides",
      "Constant powerful winds",
      "Soil structure",
      "Frequent destructive storms"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Atacama Desert of Chile and Peru is one of the driest and most lifeless places on Earth. This virtually rainless plateau is made up of sand, lava flows, and what other substance?",
    "options": [
      "Limestone",
      "Salt",
      "Clay",
      "Ash"
    ],
    "correctIndex": 1
  },
  {
    "question": "This Australian desert of nearly 600,000 square kilometres is famous for its spectacular land and rock formations, such as Uluru and Kata Tjuta, its estimated 1,100 parallel dunes running north-south, and the fresh water lake, Rainbow Valley.",
    "options": [
      "Tanami Desert",
      "Simpson Desert",
      "Great Victoria Desert",
      "Great Sandy Desert"
    ],
    "correctIndex": 1
  },
  {
    "question": "The largest natural karst crater on Earth - Ramon Crater, with a length of 40 km (25 miles) and width of 2 to 10 km (1.5 to 6 miles), is situated in the heart of this Middle East desert.",
    "options": [
      "Kyzyl Kum",
      "Negev desert",
      "Judean Desert",
      "Mojave desert"
    ],
    "correctIndex": 1
  },
  {
    "question": "Leonardo of Pisa or Leonardo Pisano, also known as Fibonacci, was an Italian mathematician and is best known for the discovery of the Fibonacci numbers, which form the following sequence.",
    "options": [
      "10",
      "15",
      "8",
      "6"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which one of these countries is largest in area?",
    "options": [
      "Japan",
      "Jordan and Japan are equal in size",
      "Jordan",
      "Jamaica"
    ],
    "correctIndex": 0
  },
  {
    "question": "Which of the following oceans is the worlds largest?",
    "options": [
      "Indian Ocean",
      "Arctic Ocean",
      "Atlantic Ocean",
      "Pacific Ocean"
    ],
    "correctIndex": 3
  },
  {
    "question": "According to the United States Census Bureau in 2006, China was the most populated country in the world.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of the following countries is the worlds smallest continent, and can also be considered an island since it is surrounded by water?",
    "options": [
      "India",
      "Africa",
      "Madagascar",
      "Australia"
    ],
    "correctIndex": 3
  },
  {
    "question": "Russia is the worlds largest country, with a land area of 17,098,242 square kilometers.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "This is the worlds smallest independent state with a population in 2007 of approximately 821.",
    "options": [
      "Vatican City",
      "Monaco",
      "San Marino",
      "Tuvalu"
    ],
    "correctIndex": 0
  },
  {
    "question": "Pittsburgh is home to many universities and research facilities. One of them is described here:",
    "options": [
      "University of Pittsburgh",
      "Carnegie Mellon University",
      "Duquesne University",
      "Pittsburgh Institute of Aeronautics"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which central European countrys all pre-1989 neighbors do not exist any more? The country is now bordered by 7 states.",
    "options": [
      "Austria",
      "Poland",
      "Hungary",
      "Romania"
    ],
    "correctIndex": 1
  },
  {
    "question": "The African kingdom of Dahomey was powerful in the XVIII century. Which modern day country did it cover?",
    "options": [
      "Burma",
      "Burkina Faso",
      "Benin",
      "DR Congo"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Holy Roman Empire of the German Nation was a loosely coupled union of mostly German speaking principalities. Which part of the union was the driver of the 19th century unification of Germany?",
    "options": [
      "Austria",
      "Prussia",
      "Saxony",
      "Bavaria"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where was the late medieval kingdom of Aragon situated?",
    "options": [
      "Ireland and parts of Scotland",
      "Eastern Spain, major islands on the Mediterranean Sea and southern Italy",
      "Tolkiens fiction",
      "Syria, Turkey and northern Iraq"
    ],
    "correctIndex": 1
  },
  {
    "question": "When Yugoslavia collapsed, one of its republics became an independent state known as FYROM. To which country does the acronym refer?",
    "options": [
      "Albania",
      "Bosnia and Herzegovina",
      "Montenegro",
      "Macedonia"
    ],
    "correctIndex": 3
  },
  {
    "question": "By the end of the 16th century, a country called Commonwealth of Both Nations covered almost 1 million square kilometers of Europe. Which two countries formed it?",
    "options": [
      "Sweden and Denmark",
      "Russia and Ukraine",
      "Poland and Lithuania",
      "Austria and Hungary"
    ],
    "correctIndex": 2
  },
  {
    "question": "Phoenicia was an ancient civilization that spread maritime trade over the Mediterranean Sea. From where did the Phoenicians originate?",
    "options": [
      "North Africa (Tunis, Algier)",
      "Sicily (Syracuse)",
      "Greek islands on the Aegean Sea",
      "Modern day Liban (Sidon, Tyre)"
    ],
    "correctIndex": 3
  },
  {
    "question": "Myanmar is a south-eastern Asian country. Under which name was it known before a military junta took over?",
    "options": [
      "Siam",
      "Burma",
      "Bhutan",
      "Noth Vietnam"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Ottoman Empire used to rule over North Africa, the Middle East and south-eastern Europe. Which modern day country is the successor of the empire?",
    "options": [
      "Israel",
      "Saudi Arabia",
      "Turkey",
      "Egypt"
    ],
    "correctIndex": 2
  },
  {
    "question": "Which independent country was not a Soviet republic?",
    "options": [
      "Georgia",
      "Armenia",
      "Lithuania",
      "Albania"
    ],
    "correctIndex": 3
  },
  {
    "question": "Where was the monastic state of the Teutonic Knights located?",
    "options": [
      "Seperated spots on modern day German territory",
      "Northern Poland, southern Lithuania, part of Latvia and the Russian enclave of Kaliningrad",
      "Southern France (Provance)",
      "Malta and other islands on the Mediterranean"
    ],
    "correctIndex": 1
  },
  {
    "question": "Where were the Boer Republics located?",
    "options": [
      "In the Netherlands",
      "Across South Africa",
      "They were early Puritan settlements in the eastern North America",
      "Minor British isles"
    ],
    "correctIndex": 1
  },
  {
    "question": "Finish this Irish saying: A tune is more lasting than the song of birds. And a word is more lasting than ________.",
    "options": [
      "an old mans teeth",
      "the wealth of the world",
      "a maidens beauty",
      "a bottle of whiskey"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the missing word in this Irish saying: Every dog is _____ at his own house door.?",
    "options": [
      "asleep",
      "lonely",
      "bold",
      "fearful"
    ],
    "correctIndex": 2
  },
  {
    "question": "Complete this Irish saying: The whole world cannot make a ________ out of a donkey.",
    "options": [
      "poet",
      "race horse",
      "nobleman",
      "artist"
    ],
    "correctIndex": 1
  },
  {
    "question": "Finish the following Irish saying: However long the day it ends with _______.",
    "options": [
      "some bread",
      "a lullaby",
      "night",
      "a bang"
    ],
    "correctIndex": 2
  },
  {
    "question": "Complete this Irish saying: Dont let your ______ cut your throat.",
    "options": [
      "jealousy",
      "mother-in-law",
      "tongue",
      "stale bread"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the missing word in this Irish saying: ______ is the poor mans doctor.?",
    "options": [
      "An apple",
      "Socialism",
      "Death",
      "Over-the-counter medication"
    ],
    "correctIndex": 2
  },
  {
    "question": "Complete the following Irish saying: If you want ______, always carry the back tooth of a horse with you.",
    "options": [
      "to go swimming",
      "beauty",
      "money",
      "to be the life of the party"
    ],
    "correctIndex": 2
  },
  {
    "question": "Finish this Irish saying: If someone is sick turn his bed so that it faces _________.",
    "options": [
      "the TV",
      "the wall",
      "north",
      "a window"
    ],
    "correctIndex": 2
  },
  {
    "question": "Finish this Irish saying: The far off hills are _______.",
    "options": [
      "covered with clouds",
      "alive with the sound of music",
      "the farthest away",
      "the greenest"
    ],
    "correctIndex": 3
  },
  {
    "question": "Finish this Irish saying: Often has the likely failed and the unlikely _________.",
    "options": [
      "failed too",
      "wrote a novel about the failure",
      "laughed at the failure",
      "succeeded"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the capital and largest city of Jamaica?",
    "options": [
      "Montego Bay",
      "Kigali",
      "Harare",
      "Kingston"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the capital city of India?",
    "options": [
      "Jaipur",
      "Mumbai",
      "Calcutta",
      "New Delhi"
    ],
    "correctIndex": 3
  },
  {
    "question": "Tegucigalpa is the capital and largest city of this country.",
    "options": [
      "Namibia",
      "Honduras",
      "Uzbekistan",
      "Laos"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital and largest city of Romania?",
    "options": [
      "Ankara",
      "Sofia",
      "Kiev",
      "Bucharest"
    ],
    "correctIndex": 3
  },
  {
    "question": "Addis Ababa is the capital of what country?",
    "options": [
      "Samoa",
      "Paraguay",
      "Ghana",
      "Ethiopia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the capital and largest city of Lebanon?",
    "options": [
      "Bujumbura",
      "Dhaka",
      "Baghdad",
      "Beirut"
    ],
    "correctIndex": 3
  },
  {
    "question": "Kathmandu is the capital city of what country?",
    "options": [
      "Gabon",
      "Nepal",
      "Togo",
      "Rwanda"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the capital city of Latvia?",
    "options": [
      "Reykjavik",
      "Port Vila",
      "Porto-Novo",
      "Riga"
    ],
    "correctIndex": 3
  },
  {
    "question": "This city is the capital of the Kingdom of Morocco.",
    "options": [
      "Suva",
      "Yaounde",
      "Tehran",
      "Rabat"
    ],
    "correctIndex": 3
  },
  {
    "question": "The capital city of what country is called Quito?",
    "options": [
      "Bolivia",
      "Macedonia",
      "Ecuador",
      "Yemen"
    ],
    "correctIndex": 2
  },
  {
    "question": "Name Zimbabwes capital which is an independent city equivalent to a province.",
    "options": [
      "Harare",
      "Cairo",
      "Rome",
      "Tunis"
    ],
    "correctIndex": 0
  },
  {
    "question": "Name Moroccos capital that is also the capital of the Rabat-Sal\u00e9-Zemmour-Zaer region.",
    "options": [
      "Casablanca",
      "Pretoria",
      "Niamey",
      "Rabat"
    ],
    "correctIndex": 3
  },
  {
    "question": "Bamako is the capital of Madagascar.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the capital and largest city of the Republic of the Congo?",
    "options": [
      "Brazzaville",
      "Lusaka",
      "Lima",
      "Libreville"
    ],
    "correctIndex": 0
  },
  {
    "question": "Ethiopias capital is Addis Ababa.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "What port on the Atlantic Ocean is the capital and largest city of Guinea.",
    "options": [
      "Baku",
      "Dhaka",
      "Conakry",
      "Bujumbura"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the capital and largest commercial city of Libya?",
    "options": [
      "Ethiopia",
      "Windhoek",
      "Nouakchott",
      "Tripoli"
    ],
    "correctIndex": 3
  },
  {
    "question": "This city is Kenyas capital and the most populous city in East Africa.",
    "options": [
      "Cape Town",
      "Nairobi",
      "Port Louis",
      "Tripoli"
    ],
    "correctIndex": 1
  },
  {
    "question": "Victoria is the capital of the Republic of Seychelles.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Alaska used to be part of Russia.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the currency of Russia?",
    "options": [
      "franc",
      "ruble",
      "dollar",
      "peso"
    ],
    "correctIndex": 1
  },
  {
    "question": "How do you say hello in Russian?",
    "options": [
      "Spasiba",
      "Zdravstvuite",
      "Dobry den",
      "Do svidanya"
    ],
    "correctIndex": 1
  },
  {
    "question": "What phrase means I love you in Russian?",
    "options": [
      "Eu te amo",
      "Ya lyublyu tebya",
      "Te iu besc",
      "Volim te"
    ],
    "correctIndex": 1
  },
  {
    "question": "Tetris, the popular falling-blocks video game, was invented in Russia.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who is the first President of the Russian Federation?",
    "options": [
      "Mikhail Kasyanov",
      "Viktor Khristenko",
      "Boris Yeltsin",
      "Vladimir Putin"
    ],
    "correctIndex": 2
  },
  {
    "question": "The first person in space was Russian.",
    "options": [
      "False",
      "True"
    ],
    "correctIndex": 1
  },
  {
    "question": "Who commissioned  the St. Basils Cathedral?",
    "options": [
      "Ivan the Marvelous",
      "Ivan the Terrible",
      "Ivan the Ultimate",
      "Ivan the Magnificent"
    ],
    "correctIndex": 1
  },
  {
    "question": "Name the capital city of the U.S. state of Wyoming.",
    "options": [
      "Boise",
      "Des Moines",
      "Salt Lake City",
      "Cheyenne"
    ],
    "correctIndex": 3
  },
  {
    "question": "The U.S. state of Oregon has been nicknamed after this animal, which is the official state animal.",
    "options": [
      "Raccoon",
      "Beaver",
      "Marmot",
      "Bear"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which U.S. state has been nicknamed The Silver State?",
    "options": [
      "Nevada",
      "Nebraska",
      "North Dakota",
      "New Mexico"
    ],
    "correctIndex": 0
  },
  {
    "question": "Albuquerque is the largest city of which U.S. state?",
    "options": [
      "Ohio",
      "Kansas",
      "Oklahoma",
      "New Mexico"
    ],
    "correctIndex": 3
  },
  {
    "question": "Name the capital city of the U.S. state of Montana.",
    "options": [
      "Helena",
      "Billings",
      "Pierre",
      "Sioux Falls"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the name of the U.S. state of Texas literally mean in Caddo?",
    "options": [
      "Vast",
      "Buffalo",
      "Wilderness",
      "Friends"
    ],
    "correctIndex": 3
  },
  {
    "question": "The state of Louisiana is bordered by the Gulf of Mexico on the south and three states. Which state does NOT border Louisiana?",
    "options": [
      "Oklahoma",
      "Texas",
      "Arkansas",
      "Mississippi"
    ],
    "correctIndex": 0
  },
  {
    "question": "When Ren\u00e9-Robert Cavelier, Sieur de La Salle (Yikes!) claimed the territory he named it La Louisiane, which means....",
    "options": [
      "Land of Lords or Land of the Lords.",
      "Land of France or Long Live France.",
      "Land of Life or The Life.",
      "Land of Louis or The Lousiana."
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the closest definition of Santeria?",
    "options": [
      "Another name for the Catholic Church in Lousiana.",
      "Another name for the Protestant Baptists religion in Lousiana.",
      "A Cuban based religion popular in Lousiana.",
      "A Jewish based religion popular in Lousiana."
    ],
    "correctIndex": 2
  },
  {
    "question": "The first recorded Euroregion, Gronau, was founded in 1958. What countries established it?",
    "options": [
      "Austria and Switzerland",
      "Germany and Austria",
      "Germany and Netherlands",
      "Switzerland and Germany"
    ],
    "correctIndex": 2
  },
  {
    "question": "The Beskidy (Beskydy) Euroregion is located in the west part of the Carpathian mountain range. Which three countries does it span?",
    "options": [
      "Hungary, Romania, Ukraine",
      "Czech Republic, Poland, Slovakia",
      "Czech Republic, Austria, Slovakia",
      "Poland, Slovakia, Ukraine"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which country is not a member of the Adriatic Euroregion?",
    "options": [
      "Montenegro",
      "Albania",
      "Serbia",
      "Italy"
    ],
    "correctIndex": 2
  },
  {
    "question": "The ore and coal rich region of Silesia (pol.: \u015alask, ger.: Schliesien, cz.: Slezsko) was ruled by Germans, Poles, Czechs and Austrians. To which country does it mostly belong today?",
    "options": [
      "Slovakia",
      "Germany",
      "Poland",
      "Czech Republic"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where would you find the Tornio River Valley Euroregion?",
    "options": [
      "Sweden / Finland",
      "Italy / Slovenia",
      "Italy / France",
      "Austria / Italy"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Cross Channel Euroregion includes France, the UK and what other country?",
    "options": [
      "Belgium",
      "Ireland",
      "Spain",
      "Netherlands"
    ],
    "correctIndex": 0
  },
  {
    "question": "The region of Pomerania (ger.: Pomern, pol.: Pomorze) is located in north Germany and Poland. Which river divides the region into two parts?",
    "options": [
      "Vistula",
      "Danube",
      "Elbe",
      "Oder (Odra)"
    ],
    "correctIndex": 3
  },
  {
    "question": "The TriRhena Euroregion is spans these three countries crossed by the Rhine River.",
    "options": [
      "France, Germany and Switzerland",
      "Belgium, Germany and Luxembourg",
      "Austria, Germany and Switzerland",
      "France, Germany and Holland"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Pyrenees-Mediterranean region is located along the border of which two countries?",
    "options": [
      "France - Italy",
      "Norway - Sweden",
      "France - Spain",
      "Spain - Portugal"
    ],
    "correctIndex": 2
  },
  {
    "question": "Where would you find the Ore Mountains Euroregion?",
    "options": [
      "Greece and Bulgaria",
      "Spain and France",
      "Czech Republic and Germany",
      "Norway and Sweden"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the state animal of Colorado and the symbol of Rocky Mountain National Park?",
    "options": [
      "Mustang",
      "Big Horned Sheep",
      "White Tailed Deer",
      "Buffalo"
    ],
    "correctIndex": 1
  },
  {
    "question": "Was Isabella Bird the first woman to climb Longs Peak, the highest point in Rocky Mountain National Park?",
    "options": [
      "No",
      "Yes"
    ],
    "correctIndex": 0
  },
  {
    "question": "Mesa Verde National Park in southern Colorado is best known for which of the following?",
    "options": [
      "Rather large, fossilized dinosaur tracks",
      "Massive trees known as Sequoias",
      "The best-preserved cliff dwellings in the U.S.",
      "A very rare flower that only grows in the mountains"
    ],
    "correctIndex": 2
  },
  {
    "question": "One the worlds largest silver nuggets was found in Colorado.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Colorado River, the major river of the American southwest, flows through which national landmark?",
    "options": [
      "The Hoover Dam",
      "The Grand Canyon",
      "Arches National Park",
      "All of these"
    ],
    "correctIndex": 3
  },
  {
    "question": "Located at the Peterson Air Force base in Colorado, NORAD is a military organization that tracks aircraft, missiles and space vehicles. It also tracks what fictional character?",
    "options": [
      "The Easter Bunny",
      "The Tooth Fairy",
      "None of these",
      "Santa"
    ],
    "correctIndex": 3
  },
  {
    "question": "What U.S. interstate runs east and west through Colorado?",
    "options": [
      "I-40",
      "I-80",
      "I-90",
      "I-70"
    ],
    "correctIndex": 3
  },
  {
    "question": "Today people visit Colorado to go skiing, hiking, mountain biking and to enjoy the scenery. But 100 years ago, tourists more often went to the mountains to do what?",
    "options": [
      "Soak in hot springs",
      "Play golf",
      "Record music",
      "Go horseback riding"
    ],
    "correctIndex": 0
  },
  {
    "question": "Early Colorado ranchers raised cattle, sheep, hogs, chickens, and turkeys, with the main focus on cattle.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0
  },
  {
    "question": "The huge grain industry in Colorado gives rise to breweries. Which of the following owns the biggest single site brewery located in Golden, Colorado?",
    "options": [
      "Anheuser-Busch",
      "Molson Coors Brewing Company",
      "Jacob Leinenkugel Brewing Company",
      "Highfalls Brewing Company"
    ],
    "correctIndex": 1
  },
  {
    "question": "On May 5, 1920 two Italian-Americans, Nicola Sacco and Bartolomeo Vanzetti, were arrested, tried, and executed for the April 15, 1920 murders of a South Braintree paymaster and security guard and theft of the payroll.",
    "options": [
      "He was in Plymouth peddling fish at the time.",
      "He was visiting friends in West Bridgewater.",
      "He was at the Italian consulate in Boston.",
      "He was at work and had a time-card to prove it."
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the state motto of Colorado?",
    "options": [
      "Nothing Without the Deity",
      "The people rule",
      "God enriches",
      "We Dare Defend Our Rights"
    ],
    "correctIndex": 0
  },
  {
    "question": "What does the word Colorado mean?",
    "options": [
      "Colored Red",
      "Indian Sky",
      "Rocky Mountains",
      "Mountain High"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the state fish of Colorado?",
    "options": [
      "Rainbow Trout",
      "Greenback Cutthroat Trout",
      "Walleye",
      "Salmon"
    ],
    "correctIndex": 1
  },
  {
    "question": "What city in Colorado is known as the Richest Square Mile on Earth?",
    "options": [
      "Central City, Colorado",
      "Denver, Colorado",
      "Leadville, Colorado",
      "Colorado Springs, Colorado"
    ],
    "correctIndex": 0
  },
  {
    "question": "What was the popular slogan of the Colorado Gold Rush?",
    "options": [
      "Westward Ho",
      "Colorado Gold to Go",
      "Go West Young Men",
      "Pikes Peak or Bust"
    ],
    "correctIndex": 3
  },
  {
    "question": "What year did Colorado become a state?",
    "options": [
      "1876",
      "1796",
      "1896",
      "1776"
    ],
    "correctIndex": 0
  },
  {
    "question": "What city boasts the most parks in the US?",
    "options": [
      "Colorado Springs, Colorado",
      "Golden, Colorado",
      "Denver, Colorado",
      "Aspen, Colorado"
    ],
    "correctIndex": 2
  },
  {
    "question": "What legendary American frontiersman commanded a major fort in Colorado?",
    "options": [
      "Daniel Boone",
      "Kit Carson",
      "Wild Bill Cody",
      "Jim Bowie"
    ],
    "correctIndex": 1
  },
  {
    "question": "Glenwood Springs, Colorado was known for its hot springs and hospital. What famous outlaw and gun slinger expired from Tuberculosis there?",
    "options": [
      "Billy The Kid",
      "Jesse James",
      "Doc Holliday",
      "Wyatt Earp"
    ],
    "correctIndex": 2
  },
  {
    "question": "On which continent is the famous active volcano Mount Nyiragongo located?",
    "options": [
      "Asia",
      "Australia",
      "South America",
      "Africa"
    ],
    "correctIndex": 3
  },
  {
    "question": "On which of the islands of Papua New Guinea is the active volcano Ulawun located?",
    "options": [
      "New Britain",
      "New Guinea",
      "Bougainville",
      "New Ireland"
    ],
    "correctIndex": 0
  },
  {
    "question": "The Arabic name of Mount Etna, the second-largest active volcano in Europe, was Jebel Utlamat. What does this mean in English?",
    "options": [
      "The Edge of the World",
      "Mountain of Fire",
      "Home of the Devil",
      "Breathing Mountain"
    ],
    "correctIndex": 1
  },
  {
    "question": "In what country is the active volcano Sakurajima located?",
    "options": [
      "India",
      "Peru",
      "Japan",
      "South Africa"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the name of the most active volcano in Mexico, located mostly in the Mexican state of Jalisco?",
    "options": [
      "Nevado de Toluca",
      "Barcena",
      "Colima",
      "Las Cumbres"
    ],
    "correctIndex": 2
  },
  {
    "question": "What does the Indonesian name of the Mount Merapi volcano, Gunung Merapi, mean in English?",
    "options": [
      "Gods Wrath",
      "Cursed Mountain",
      "Mountain of Fire",
      "Hell Mountain"
    ],
    "correctIndex": 2
  },
  {
    "question": "In what country is the active volcano Koryaksky located?",
    "options": [
      "Russia",
      "Ukraine",
      "Latvia",
      "Poland"
    ],
    "correctIndex": 0
  },
  {
    "question": "In what US state is the Fourpeaked Volcano, also known as Fourpeaked Mountain, situated?",
    "options": [
      "Colorado",
      "Oregon",
      "Alaska",
      "Montana"
    ],
    "correctIndex": 2
  },
  {
    "question": "What is the name of the highest volcano in Asia, and the highest point in the Middle East?",
    "options": [
      "Bazman",
      "Sabalan",
      "Taftan",
      "Mount Damavand"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the name of the active volcano situated in Skamania County, Washington, USA, 50 miles (80 km) northeast of Portland, Oregon?",
    "options": [
      "Mount St. Augustus",
      "Mount St. Paul",
      "Mount St. Georges",
      "Mount St. Helens"
    ],
    "correctIndex": 3
  },
  {
    "question": "The self-governed region of the Holy Mountain is considered part of the Greek state according to a decree",
    "options": [
      "1910",
      "1913",
      "1925",
      "1999"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of government does Sweden have?",
    "options": [
      "Absolute monarchy",
      "Constitutional monarchy",
      "None of these",
      "Presidential republic"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these European countries shares a land border with Sweden?",
    "options": [
      "Switzerland",
      "Denmark",
      "Lithuania",
      "Norway"
    ],
    "correctIndex": 3
  },
  {
    "question": "What are the colors of the national flag of Sweden?",
    "options": [
      "Blue and yellow",
      "White and blue",
      "White and red",
      "Red and yellow"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the official language spoken by the citizens of Sweden?",
    "options": [
      "Finnish and Swedish",
      "Swedish",
      "German and Swedish",
      "Danish"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the name of the largest city and capital of Sweden?",
    "options": [
      "Helsinki",
      "Stockholm",
      "Oslo",
      "Gothenburg"
    ],
    "correctIndex": 1
  },
  {
    "question": "The Swedish name of Sweden is Sverige. What does this word literally mean?",
    "options": [
      "Snow kingdom",
      "Kingdom of the Swedes",
      "Land of snow",
      "Northern land"
    ],
    "correctIndex": 1
  },
  {
    "question": "Which of these celebrities is not Swedish?",
    "options": [
      "the members of ABBA",
      "Lars Ulrich",
      "Greta Garbo",
      "Ingrid Bergman"
    ],
    "correctIndex": 1
  },
  {
    "question": "What type of food is the popular Swedish dish called Surstromming?",
    "options": [
      "Fish",
      "Salad",
      "Soup",
      "Dessert"
    ],
    "correctIndex": 0
  },
  {
    "question": "What song is used as a de facto anthem of Sweden?",
    "options": [
      "Beautiful Sweden",
      "The Song of the King",
      "We Bow Before Thee",
      "Thou Ancient, Thou Free"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the prevailing religion in Sweden?",
    "options": [
      "Lutheranism",
      "Eastern Orthodoxy",
      "Protestantism",
      "Roman Catholicism"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the capital city of the Federative Republic of Brazil?",
    "options": [
      "Sao Paulo",
      "Bogota",
      "Rio de Janeiro",
      "Brasilia"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the meaning of the Portuguese word brasa from which the name of Brazil possibly originated?",
    "options": [
      "Jungle",
      "River",
      "Heaven",
      "Ember"
    ],
    "correctIndex": 3
  },
  {
    "question": "Which of these statements is wrong about the wildlife of Brazil?",
    "options": [
      "It contains the most mammal species on the planet.",
      "Brazil is the country with the largest biodiversity on the planet.",
      "All of these",
      "Brazil is the country with the most endemic species in the world."
    ],
    "correctIndex": 3
  },
  {
    "question": "What are the colors of the national flag of the Federative Republic of Brazil?",
    "options": [
      "Yellow, green, black and blue",
      "White, blue, green and yellow",
      "Red, green and yellow",
      "Green and black"
    ],
    "correctIndex": 1
  },
  {
    "question": "What is the official language of the Federative Republic of Brazil?",
    "options": [
      "English and Spanish",
      "Spanish",
      "Spanish and Portuguese",
      "Portuguese"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the most popular sport among the people living in Brazil?",
    "options": [
      "Volleyball",
      "Rugby",
      "Basketball",
      "Football"
    ],
    "correctIndex": 3
  },
  {
    "question": "What is the largest and richest city in Brazil?",
    "options": [
      "Sao Paulo",
      "Salvador",
      "Rio de Janeiro",
      "Brasilia"
    ],
    "correctIndex": 0
  },
  {
    "question": "What is the national motto of the Federative Republic of Brazil, also featured in the national flag of the country?",
    "options": [
      "Faith and Honesty",
      "Freedom Above All",
      "Order and Progress",
      "Unity and Strength"
    ],
    "correctIndex": 2
  },
  {
    "question": "What type of food is the traditional Brazilian dish called Moqueca?",
    "options": [
      "Dessert",
      "Drink",
      "Salad",
      "Stew"
    ],
    "correctIndex": 3
  },
  {
    "question": "On what day of the week does the parade of the famous Rio Carnival traditionally start?",
    "options": [
      "Sunday",
      "Thursday",
      "Wednesday",
      "Friday"
    ],
    "correctIndex": 0
  }
];