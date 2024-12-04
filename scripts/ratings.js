const ratingData = [
    {
        "name": "Brianna Monk",
        "rating": 4.3,
        "difficulty": 2.3,
        "num_ratings": 7,
        "would_take_again": 71.4
    },
    {
        "name": "Catherine Zeman",
        "rating": 4.3,
        "difficulty": 2.7,
        "num_ratings": 3,
        "would_take_again": 100
    },
    {
        "name": "Bob Horn",
        "rating": 3.3,
        "difficulty": 3.5,
        "num_ratings": 135,
        "would_take_again": 35.5
    },
    {
        "name": "Toya Okonkwo",
        "rating": 3,
        "difficulty": 3,
        "num_ratings": 1,
        "would_take_again": "N/A"
    },
    {
        "name": "James Marafino",
        "rating": 4.8,
        "difficulty": 1.9,
        "num_ratings": 200,
        "would_take_again": 98.8
    },
    {
        "name": "Gui Hwan Lee",
        "rating": 5,
        "difficulty": 2,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Tom McNeilus",
        "rating": 4.2,
        "difficulty": 1.9,
        "num_ratings": 12,
        "would_take_again": 80
    },
    {
        "name": "Nieko McDaniel",
        "rating": 5,
        "difficulty": 2,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Shah Hanifi",
        "rating": 3.3,
        "difficulty": 3.2,
        "num_ratings": 176,
        "would_take_again": 51.0
    },
    {
        "name": "Jared Stoltzfus",
        "rating": 3.8,
        "difficulty": 2.7,
        "num_ratings": 77,
        "would_take_again": 67.5
    },
    {
        "name": "Kevin Carini",
        "rating": 4.7,
        "difficulty": 2.4,
        "num_ratings": 27,
        "would_take_again": 92.6
    },
    {
        "name": "Molly O'Donnell",
        "rating": 3.3,
        "difficulty": 3.2,
        "num_ratings": 51,
        "would_take_again": 60.8
    },
    {
        "name": "Sarah Taylor",
        "rating": 4.3,
        "difficulty": 1.9,
        "num_ratings": 75,
        "would_take_again": 84.5
    },
    {
        "name": "Alvin Chao",
        "rating": 3.2,
        "difficulty": 3.9,
        "num_ratings": 9,
        "would_take_again": 44.4
    },
    {
        "name": "Jason Czak",
        "rating": 2.5,
        "difficulty": 4,
        "num_ratings": 36,
        "would_take_again": 44.4
    },
    {
        "name": "Heather Comfort",
        "rating": 4.3,
        "difficulty": 1.6,
        "num_ratings": 151,
        "would_take_again": 77.2
    },
    {
        "name": "Emily Westkaemper",
        "rating": 3.1,
        "difficulty": 3.3,
        "num_ratings": 90,
        "would_take_again": 38.5
    },
    {
        "name": "Gabriel Niculescu",
        "rating": 2.4,
        "difficulty": 3.6,
        "num_ratings": 75,
        "would_take_again": 19.0
    },
    {
        "name": "Hsini Leary",
        "rating": 4.7,
        "difficulty": 2.3,
        "num_ratings": 3,
        "would_take_again": 100
    },
    {
        "name": "William Turner",
        "rating": 2.9,
        "difficulty": 2.6,
        "num_ratings": 90,
        "would_take_again": 48.9
    },
    {
        "name": "Brandon Mendenhall",
        "rating": 2.7,
        "difficulty": 4.2,
        "num_ratings": 19,
        "would_take_again": 31.6
    },
    {
        "name": "Chris Smith",
        "rating": 4.3,
        "difficulty": 2.7,
        "num_ratings": 38,
        "would_take_again": 73.7
    },
    {
        "name": "Eva Carrara",
        "rating": 5,
        "difficulty": 2.6,
        "num_ratings": 7,
        "would_take_again": 100
    },
    {
        "name": "Mary Gayne",
        "rating": 2.6,
        "difficulty": 3.5,
        "num_ratings": 127,
        "would_take_again": 33.3
    },
    {
        "name": "Rebecca A Silberman",
        "rating": 3.9,
        "difficulty": 2.2,
        "num_ratings": 25,
        "would_take_again": 100
    },
    {
        "name": "David Wenos",
        "rating": 2.3,
        "difficulty": 3.5,
        "num_ratings": 78,
        "would_take_again": 14.3
    },
    {
        "name": "Aiveen Gallagher",
        "rating": 4,
        "difficulty": 1.9,
        "num_ratings": 32,
        "would_take_again": 78.1
    },
    {
        "name": "Sofia Samatar",
        "rating": 4,
        "difficulty": 2.6,
        "num_ratings": 35,
        "would_take_again": 82.9
    },
    {
        "name": "Jonathan Gibson",
        "rating": 4.3,
        "difficulty": 2.7,
        "num_ratings": 205,
        "would_take_again": 80.7
    },
    {
        "name": "Ingrid DeSanctis",
        "rating": 3.5,
        "difficulty": 2.3,
        "num_ratings": 6,
        "would_take_again": 66.7
    },
    {
        "name": "David Brennan",
        "rating": 4.6,
        "difficulty": 1.9,
        "num_ratings": 63,
        "would_take_again": 94.2
    },
    {
        "name": "Rebecca Field",
        "rating": 3.2,
        "difficulty": 3.3,
        "num_ratings": 63,
        "would_take_again": 46.7
    },
    {
        "name": "Elizabeth Ben Ward",
        "rating": 2.2,
        "difficulty": 3.8,
        "num_ratings": 55,
        "would_take_again": 29.1
    },
    {
        "name": "Mark Rooker",
        "rating": 3.8,
        "difficulty": 3.2,
        "num_ratings": 29,
        "would_take_again": 73.3
    },
    {
        "name": "Mona Rizvi",
        "rating": 2,
        "difficulty": 3,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Mike Lam",
        "rating": 3.7,
        "difficulty": 3.7,
        "num_ratings": 35,
        "would_take_again": 69.7
    },
    {
        "name": "Jonathan Spindel",
        "rating": 3.5,
        "difficulty": 3.2,
        "num_ratings": 26,
        "would_take_again": 75
    },
    {
        "name": "Peter Bsumek",
        "rating": 3.9,
        "difficulty": 2.9,
        "num_ratings": 61,
        "would_take_again": 69.2
    },
    {
        "name": "Wanchi Huang",
        "rating": 3.8,
        "difficulty": 4.4,
        "num_ratings": 16,
        "would_take_again": -1
    },
    {
        "name": "Riley Murray",
        "rating": 2.8,
        "difficulty": 3.6,
        "num_ratings": 27,
        "would_take_again": 38.9
    },
    {
        "name": "Kristen Koopman",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Chung-Lung Huang",
        "rating": 4.3,
        "difficulty": 1.8,
        "num_ratings": 6,
        "would_take_again": -1
    },
    {
        "name": "Annette Federico",
        "rating": 3.7,
        "difficulty": 3.1,
        "num_ratings": 90,
        "would_take_again": 60
    },
    {
        "name": "Karen McDonnell",
        "rating": 3.5,
        "difficulty": 3.3,
        "num_ratings": 125,
        "would_take_again": 40
    },
    {
        "name": "Samantha Constantine",
        "rating": 4.8,
        "difficulty": 2.3,
        "num_ratings": 6,
        "would_take_again": 83.3
    },
    {
        "name": "Debra Warne",
        "rating": 3.7,
        "difficulty": 3.4,
        "num_ratings": 142,
        "would_take_again": 66.7
    },
    {
        "name": "Maria Delgadillo",
        "rating": 2.8,
        "difficulty": 4,
        "num_ratings": 20,
        "would_take_again": 40
    },
    {
        "name": "Jay Varner",
        "rating": 2.8,
        "difficulty": 4.1,
        "num_ratings": 203,
        "would_take_again": 28.2
    },
    {
        "name": "John Siegfried",
        "rating": 3.5,
        "difficulty": 4.2,
        "num_ratings": 75,
        "would_take_again": 57.8
    },
    {
        "name": "Scott Mersiovsky",
        "rating": 3,
        "difficulty": 2.6,
        "num_ratings": 30,
        "would_take_again": 80
    },
    {
        "name": "Laura Taalman",
        "rating": 4.1,
        "difficulty": 3.4,
        "num_ratings": 115,
        "would_take_again": 75
    },
    {
        "name": "Tochukwu  Nweze",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Eric Ruple",
        "rating": 3.2,
        "difficulty": 2.8,
        "num_ratings": 17,
        "would_take_again": 100
    },
    {
        "name": "Joost Burgers",
        "rating": 3.1,
        "difficulty": 3.4,
        "num_ratings": 7,
        "would_take_again": 28.6
    },
    {
        "name": "Ilarion Melnikov",
        "rating": 4.8,
        "difficulty": 4,
        "num_ratings": 19,
        "would_take_again": 94.4
    },
    {
        "name": "Pye Aung",
        "rating": 1.8,
        "difficulty": 4.2,
        "num_ratings": 61,
        "would_take_again": 14.8
    },
    {
        "name": "Mark Piper",
        "rating": 4.7,
        "difficulty": 2.8,
        "num_ratings": 214,
        "would_take_again": 93.9
    },
    {
        "name": "Leonard Richards",
        "rating": 4.6,
        "difficulty": 1.2,
        "num_ratings": 14,
        "would_take_again": 92.9
    },
    {
        "name": "Debali Mookerjea-Leonard",
        "rating": 3.2,
        "difficulty": 3.4,
        "num_ratings": 108,
        "would_take_again": 48
    },
    {
        "name": "Kevin Borg",
        "rating": 4.1,
        "difficulty": 3,
        "num_ratings": 188,
        "would_take_again": 68.4
    },
    {
        "name": "Theresa Clarke",
        "rating": 4.6,
        "difficulty": 3.1,
        "num_ratings": 31,
        "would_take_again": 100
    },
    {
        "name": "Mary Thompson",
        "rating": 3.1,
        "difficulty": 3.6,
        "num_ratings": 117,
        "would_take_again": 31.7
    },
    {
        "name": "Chris Lantz",
        "rating": 3.6,
        "difficulty": 3.8,
        "num_ratings": 115,
        "would_take_again": 73.5
    },
    {
        "name": "Elisabeth Gumnior",
        "rating": 4.3,
        "difficulty": 1.2,
        "num_ratings": 35,
        "would_take_again": 95.2
    },
    {
        "name": "Emily York",
        "rating": 4.2,
        "difficulty": 2.8,
        "num_ratings": 11,
        "would_take_again": 90.9
    },
    {
        "name": "Evan Friss",
        "rating": 4.4,
        "difficulty": 2.6,
        "num_ratings": 87,
        "would_take_again": 93.5
    },
    {
        "name": "Vladislav Kokushkin",
        "rating": 5,
        "difficulty": 2.3,
        "num_ratings": 3,
        "would_take_again": 100
    },
    {
        "name": "Mark Mattson",
        "rating": 3.3,
        "difficulty": 3.6,
        "num_ratings": 88,
        "would_take_again": 37.0
    },
    {
        "name": "Gabrielle Lanier",
        "rating": 4,
        "difficulty": 2.6,
        "num_ratings": 64,
        "would_take_again": 35
    },
    {
        "name": "Diane Riordan",
        "rating": 4.7,
        "difficulty": 2.1,
        "num_ratings": 25,
        "would_take_again": -1
    },
    {
        "name": "Masayoshi Ishikawa",
        "rating": 5,
        "difficulty": 3,
        "num_ratings": 5,
        "would_take_again": 100
    },
    {
        "name": "Teresa Haskiell",
        "rating": 4,
        "difficulty": 3,
        "num_ratings": 2,
        "would_take_again": 100
    },
    {
        "name": "Sherri Wilson",
        "rating": 4.9,
        "difficulty": 1.8,
        "num_ratings": 31,
        "would_take_again": 100
    },
    {
        "name": "Michael Seth",
        "rating": 3.5,
        "difficulty": 2.9,
        "num_ratings": 296,
        "would_take_again": 45.4
    },
    {
        "name": "Katey Castellano",
        "rating": 4.3,
        "difficulty": 3,
        "num_ratings": 73,
        "would_take_again": 78.9
    },
    {
        "name": "Jason Haney",
        "rating": 4.4,
        "difficulty": 1.9,
        "num_ratings": 42,
        "would_take_again": 100
    },
    {
        "name": "Paulo Branicio",
        "rating": 5,
        "difficulty": 2.7,
        "num_ratings": 80,
        "would_take_again": 98.8
    },
    {
        "name": "Paul Henriksen",
        "rating": 4,
        "difficulty": 3.1,
        "num_ratings": 52,
        "would_take_again": 88.9
    },
    {
        "name": "Snigdha Das",
        "rating": 2.7,
        "difficulty": 3.8,
        "num_ratings": 6,
        "would_take_again": 16.7
    },
    {
        "name": "Allyson Taylor",
        "rating": 4.9,
        "difficulty": 1.2,
        "num_ratings": 59,
        "would_take_again": 100
    },
    {
        "name": "Tanya Corcuera",
        "rating": 1,
        "difficulty": 4.3,
        "num_ratings": 3,
        "would_take_again": "N/A"
    },
    {
        "name": "Nancy El Gendy",
        "rating": 5,
        "difficulty": 1,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Tehani Finch",
        "rating": 2.3,
        "difficulty": 3,
        "num_ratings": 53,
        "would_take_again": 34.0
    },
    {
        "name": "Justin Attas",
        "rating": 5,
        "difficulty": 1.2,
        "num_ratings": 6,
        "would_take_again": 100
    },
    {
        "name": "Chris Hughes",
        "rating": 4.3,
        "difficulty": 2.9,
        "num_ratings": 62,
        "would_take_again": 100
    },
    {
        "name": "Santo Coleman",
        "rating": 4,
        "difficulty": 3.4,
        "num_ratings": 14,
        "would_take_again": 85.7
    },
    {
        "name": "Gregory Czyszczon",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Shelley Aley",
        "rating": 4.7,
        "difficulty": 1.6,
        "num_ratings": 74,
        "would_take_again": 97.2
    },
    {
        "name": "Xunhua Wang",
        "rating": 5,
        "difficulty": 2.3,
        "num_ratings": 8,
        "would_take_again": 100
    },
    {
        "name": "Beth Chandler",
        "rating": 4.9,
        "difficulty": 3.9,
        "num_ratings": 7,
        "would_take_again": 100
    },
    {
        "name": "Ashley Allen",
        "rating": 4.5,
        "difficulty": 3,
        "num_ratings": 4,
        "would_take_again": 75
    },
    {
        "name": "Shaun Mooney",
        "rating": 4.5,
        "difficulty": 2.5,
        "num_ratings": 19,
        "would_take_again": 89.5
    },
    {
        "name": "Angela Crow",
        "rating": 2.2,
        "difficulty": 3.9,
        "num_ratings": 37,
        "would_take_again": 29.2
    },
    {
        "name": "Karina Kline-Gabel",
        "rating": 3.8,
        "difficulty": 3.1,
        "num_ratings": 70,
        "would_take_again": 80
    },
    {
        "name": "Colleen Watson",
        "rating": 4.4,
        "difficulty": 2.8,
        "num_ratings": 271,
        "would_take_again": 82.9
    },
    {
        "name": "Jamison Walker",
        "rating": 4.7,
        "difficulty": 3.2,
        "num_ratings": 9,
        "would_take_again": 88.9
    },
    {
        "name": "Jennifer Coffman",
        "rating": 4.5,
        "difficulty": 3.1,
        "num_ratings": 57,
        "would_take_again": 80
    },
    {
        "name": "Anthony Teate",
        "rating": 3,
        "difficulty": 3.3,
        "num_ratings": 71,
        "would_take_again": 43.5
    },
    {
        "name": "Harold Butner",
        "rating": 3.2,
        "difficulty": 2.8,
        "num_ratings": 44,
        "would_take_again": 34.6
    },
    {
        "name": "Pedro R Aponte",
        "rating": 4,
        "difficulty": 2.3,
        "num_ratings": 163,
        "would_take_again": 77.4
    },
    {
        "name": "Amanda Sanson",
        "rating": 3,
        "difficulty": 3,
        "num_ratings": 2,
        "would_take_again": 50
    },
    {
        "name": "April Temple",
        "rating": 4.7,
        "difficulty": 2.3,
        "num_ratings": 58,
        "would_take_again": 97.4
    },
    {
        "name": "David Biber",
        "rating": 5,
        "difficulty": 2,
        "num_ratings": 8,
        "would_take_again": 100
    },
    {
        "name": "Mozhdeh Forghaniarani",
        "rating": 1.7,
        "difficulty": 3.7,
        "num_ratings": 69,
        "would_take_again": 14.5
    },
    {
        "name": "Paul Klemt",
        "rating": 4.3,
        "difficulty": 2.8,
        "num_ratings": 43,
        "would_take_again": 68.2
    },
    {
        "name": "Caitlin Gill",
        "rating": 2,
        "difficulty": 3.7,
        "num_ratings": 3,
        "would_take_again": "N/A"
    },
    {
        "name": "Dayna Henry",
        "rating": 2.8,
        "difficulty": 3.8,
        "num_ratings": 46,
        "would_take_again": 43.5
    },
    {
        "name": "Jenny Gibson",
        "rating": 5,
        "difficulty": 3.4,
        "num_ratings": 17,
        "would_take_again": 100
    },
    {
        "name": "Benjamin Ryan",
        "rating": 5,
        "difficulty": 2,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "William Van Norman",
        "rating": 3.2,
        "difficulty": 2.4,
        "num_ratings": 86,
        "would_take_again": 56
    },
    {
        "name": "Scott Paulson",
        "rating": 4,
        "difficulty": 3.5,
        "num_ratings": 19,
        "would_take_again": 75
    },
    {
        "name": "Chuck Dotas",
        "rating": 4.5,
        "difficulty": 3.1,
        "num_ratings": 12,
        "would_take_again": 100
    },
    {
        "name": "Nusrat Jahan",
        "rating": 1.9,
        "difficulty": 3.7,
        "num_ratings": 143,
        "would_take_again": 10
    },
    {
        "name": "Giovanna Scarel",
        "rating": 2,
        "difficulty": 3.5,
        "num_ratings": 35,
        "would_take_again": 41.7
    },
    {
        "name": "Eric Guinivan",
        "rating": 5,
        "difficulty": 2.5,
        "num_ratings": 8,
        "would_take_again": 100
    },
    {
        "name": "Dawn Goode",
        "rating": 3.9,
        "difficulty": 3.4,
        "num_ratings": 54,
        "would_take_again": 75.9
    },
    {
        "name": "Lauren Mays",
        "rating": 4.8,
        "difficulty": 1.5,
        "num_ratings": 2,
        "would_take_again": -1
    },
    {
        "name": "Laura Lewis",
        "rating": 3.2,
        "difficulty": 3.1,
        "num_ratings": 63,
        "would_take_again": -1
    },
    {
        "name": "Anna Johnson",
        "rating": 4.3,
        "difficulty": 2.2,
        "num_ratings": 68,
        "would_take_again": 82.4
    },
    {
        "name": "Rodolfo Barrett",
        "rating": 4.7,
        "difficulty": 2.6,
        "num_ratings": 12,
        "would_take_again": 100
    },
    {
        "name": "Amanda Gerber",
        "rating": 3.7,
        "difficulty": 3,
        "num_ratings": 20,
        "would_take_again": 65
    },
    {
        "name": "Jason Baltazar",
        "rating": 5,
        "difficulty": 1.9,
        "num_ratings": 8,
        "would_take_again": 100
    },
    {
        "name": "Lisa Tubach",
        "rating": 4.3,
        "difficulty": 2.4,
        "num_ratings": 26,
        "would_take_again": 75
    },
    {
        "name": "Jeanette Zyko",
        "rating": 4,
        "difficulty": 2.1,
        "num_ratings": 18,
        "would_take_again": 100
    },
    {
        "name": "Bridgid O'Donnell",
        "rating": 4.1,
        "difficulty": 3.3,
        "num_ratings": 8,
        "would_take_again": "N/A"
    },
    {
        "name": "Paul Warne",
        "rating": 4.7,
        "difficulty": 3.5,
        "num_ratings": 155,
        "would_take_again": 97.9
    },
    {
        "name": "Dinesh Sharma",
        "rating": 2.1,
        "difficulty": 3.6,
        "num_ratings": 98,
        "would_take_again": 19.6
    },
    {
        "name": "Carl Becker",
        "rating": 4,
        "difficulty": 1.6,
        "num_ratings": 9,
        "would_take_again": 88.9
    },
    {
        "name": "Kari Salois",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Dylan Mabe",
        "rating": 5,
        "difficulty": 1.4,
        "num_ratings": 7,
        "would_take_again": 100
    },
    {
        "name": "Corinne Diop",
        "rating": 4.1,
        "difficulty": 1.9,
        "num_ratings": 20,
        "would_take_again": 80
    },
    {
        "name": "Erica Cavanagh",
        "rating": 3.5,
        "difficulty": 3.3,
        "num_ratings": 33,
        "would_take_again": 53.6
    },
    {
        "name": "Sonya Baker",
        "rating": 2,
        "difficulty": 3,
        "num_ratings": 1,
        "would_take_again": "N/A"
    },
    {
        "name": "Mollie Godfrey",
        "rating": 3.8,
        "difficulty": 3,
        "num_ratings": 66,
        "would_take_again": 74.1
    },
    {
        "name": "Elisabeth Gumnior",
        "rating": 4.3,
        "difficulty": 1.2,
        "num_ratings": 35,
        "would_take_again": 95.2
    },
    {
        "name": "Michael Gubser",
        "rating": 3.7,
        "difficulty": 3.2,
        "num_ratings": 128,
        "would_take_again": 62.1
    },
    {
        "name": "Fawn-Amber  Montoya",
        "rating": 3.5,
        "difficulty": 2,
        "num_ratings": 2,
        "would_take_again": 50
    },
    {
        "name": "David Bernstein",
        "rating": 4.7,
        "difficulty": 3.2,
        "num_ratings": 104,
        "would_take_again": 91.4
    },
    {
        "name": "Emily Zane",
        "rating": 4.3,
        "difficulty": 3.6,
        "num_ratings": 20,
        "would_take_again": 70
    },
    {
        "name": "Jessica Davidson",
        "rating": 3.8,
        "difficulty": 2.6,
        "num_ratings": 119,
        "would_take_again": 73.3
    },
    {
        "name": "Christopher Bachmann",
        "rating": 4.8,
        "difficulty": 2.5,
        "num_ratings": 47,
        "would_take_again": 100
    },
    {
        "name": "John Zimmerman",
        "rating": 5,
        "difficulty": 1.4,
        "num_ratings": 23,
        "would_take_again": 100
    },
    {
        "name": "Caroline Lubert",
        "rating": 3.9,
        "difficulty": 3.3,
        "num_ratings": 66,
        "would_take_again": 71.4
    },
    {
        "name": "Marijn de Waal",
        "rating": 5,
        "difficulty": 2.7,
        "num_ratings": 9,
        "would_take_again": 100
    },
    {
        "name": "Neel Amin",
        "rating": 4.1,
        "difficulty": 2.5,
        "num_ratings": 48,
        "would_take_again": 79.2
    },
    {
        "name": "Adam Usman",
        "rating": 3.1,
        "difficulty": 3.2,
        "num_ratings": 25,
        "would_take_again": 64
    },
    {
        "name": "Hao Zhang",
        "rating": 3,
        "difficulty": 2.7,
        "num_ratings": 7,
        "would_take_again": 57.1
    },
    {
        "name": "Samar  Fitzgerald ",
        "rating": 4.3,
        "difficulty": 2.9,
        "num_ratings": 16,
        "would_take_again": 66.7
    },
    {
        "name": "Alex Parrish",
        "rating": 3.8,
        "difficulty": 2.4,
        "num_ratings": 32,
        "would_take_again": 77.3
    },
    {
        "name": "Andrew Kohen",
        "rating": 2.3,
        "difficulty": 4.4,
        "num_ratings": 112,
        "would_take_again": -1
    },
    {
        "name": "Leah Boyer",
        "rating": 3.5,
        "difficulty": 2.7,
        "num_ratings": 24,
        "would_take_again": 52.6
    },
    {
        "name": "Edward Neel",
        "rating": 2.6,
        "difficulty": 3.5,
        "num_ratings": 66,
        "would_take_again": 33.3
    },
    {
        "name": "Feixue Mei",
        "rating": 2,
        "difficulty": 3.5,
        "num_ratings": 2,
        "would_take_again": "N/A"
    },
    {
        "name": "Kendra Letchworth-Weaver",
        "rating": 3.3,
        "difficulty": 4,
        "num_ratings": 21,
        "would_take_again": 57.1
    },
    {
        "name": "Jordan McCann",
        "rating": 4.7,
        "difficulty": 1.3,
        "num_ratings": 29,
        "would_take_again": 96.6
    },
    {
        "name": "Jim Hammond",
        "rating": 4.8,
        "difficulty": 1.1,
        "num_ratings": 16,
        "would_take_again": -1
    },
    {
        "name": "Chamila Ranaweera",
        "rating": 1.2,
        "difficulty": 4.4,
        "num_ratings": 42,
        "would_take_again": 2.4
    },
    {
        "name": "David Wenos",
        "rating": 2.3,
        "difficulty": 3.5,
        "num_ratings": 78,
        "would_take_again": 14.3
    },
    {
        "name": "Emily York",
        "rating": 4.2,
        "difficulty": 2.8,
        "num_ratings": 11,
        "would_take_again": 90.9
    },
    {
        "name": "Spencer Bennington",
        "rating": 4.6,
        "difficulty": 2,
        "num_ratings": 9,
        "would_take_again": 88.9
    },
    {
        "name": "Chandani Shrestha",
        "rating": 2.6,
        "difficulty": 3.4,
        "num_ratings": 23,
        "would_take_again": 26.1
    },
    {
        "name": "Robert Brent",
        "rating": 3.9,
        "difficulty": 3,
        "num_ratings": 12,
        "would_take_again": 66.7
    },
    {
        "name": "Chris Lantz",
        "rating": 3.6,
        "difficulty": 3.8,
        "num_ratings": 115,
        "would_take_again": 73.5
    },
    {
        "name": "Chris Mayfield",
        "rating": 4.1,
        "difficulty": 3.3,
        "num_ratings": 54,
        "would_take_again": 74.3
    },
    {
        "name": "Adeen Ayub",
        "rating": 3,
        "difficulty": 3,
        "num_ratings": 2,
        "would_take_again": 50
    },
    {
        "name": "Lauren Mays",
        "rating": 4.8,
        "difficulty": 1.5,
        "num_ratings": 2,
        "would_take_again": -1
    },
    {
        "name": "Raafat  Zaini",
        "rating": 4.7,
        "difficulty": 2.7,
        "num_ratings": 3,
        "would_take_again": 100
    },
    {
        "name": "Robert Mertens",
        "rating": 4.3,
        "difficulty": 2.3,
        "num_ratings": 16,
        "would_take_again": 92.3
    },
    {
        "name": "Gary Kirk",
        "rating": 4.6,
        "difficulty": 3.4,
        "num_ratings": 5,
        "would_take_again": -1
    },
    {
        "name": "Dennis Lo",
        "rating": 3.3,
        "difficulty": 4,
        "num_ratings": 48,
        "would_take_again": 45.8
    },
    {
        "name": "William Wightman",
        "rating": 4.6,
        "difficulty": 2.4,
        "num_ratings": 45,
        "would_take_again": 94.1
    },
    {
        "name": "Christian Davis",
        "rating": 3.8,
        "difficulty": 3.2,
        "num_ratings": 200,
        "would_take_again": 73.3
    },
    {
        "name": "Matthew Rebhorn",
        "rating": 3.8,
        "difficulty": 3.2,
        "num_ratings": 66,
        "would_take_again": 58.3
    },
    {
        "name": "Johnathan Bush",
        "rating": 5,
        "difficulty": 2,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Alex Capaldi",
        "rating": 4.5,
        "difficulty": 2.5,
        "num_ratings": 2,
        "would_take_again": 100
    },
    {
        "name": "Heidi Pennington",
        "rating": 3.8,
        "difficulty": 3.5,
        "num_ratings": 59,
        "would_take_again": 73.1
    },
    {
        "name": "Susan Ghiaciuc",
        "rating": 4.2,
        "difficulty": 1.7,
        "num_ratings": 62,
        "would_take_again": 90
    },
    {
        "name": "Maria Papadakis",
        "rating": 4.2,
        "difficulty": 2.4,
        "num_ratings": 30,
        "would_take_again": 40
    },
    {
        "name": "Jonathan Jones",
        "rating": 5,
        "difficulty": 2.8,
        "num_ratings": 4,
        "would_take_again": 100
    },
    {
        "name": "Roger Thelwell",
        "rating": 2.9,
        "difficulty": 3.7,
        "num_ratings": 64,
        "would_take_again": 40.9
    },
    {
        "name": "Jack McCaslin",
        "rating": 4.5,
        "difficulty": 3.2,
        "num_ratings": 19,
        "would_take_again": 100
    },
    {
        "name": "Florian Buchholz",
        "rating": 3.3,
        "difficulty": 2.9,
        "num_ratings": 13,
        "would_take_again": 50
    },
    {
        "name": "Suzanne Miller-Corso",
        "rating": 4.5,
        "difficulty": 2.5,
        "num_ratings": 21,
        "would_take_again": 75
    },
    {
        "name": "Jeannie Harding",
        "rating": 4.3,
        "difficulty": 2.8,
        "num_ratings": 112,
        "would_take_again": 82.4
    },
    {
        "name": "Danielle Derise",
        "rating": 3.7,
        "difficulty": 3,
        "num_ratings": 82,
        "would_take_again": 68.8
    },
    {
        "name": "Michael Kirkpatrick",
        "rating": 3.6,
        "difficulty": 4.1,
        "num_ratings": 34,
        "would_take_again": 68.2
    },
    {
        "name": "Mohamed Aboutabl",
        "rating": 3.3,
        "difficulty": 3.6,
        "num_ratings": 74,
        "would_take_again": 62.1
    },
    {
        "name": "Steve Baedke",
        "rating": 4.4,
        "difficulty": 3,
        "num_ratings": 94,
        "would_take_again": 94.4
    },
    {
        "name": "Jason Rosenhouse",
        "rating": 4.2,
        "difficulty": 2.8,
        "num_ratings": 124,
        "would_take_again": 80
    },
    {
        "name": "Julia  Murphy",
        "rating": 3.2,
        "difficulty": 2.9,
        "num_ratings": 13,
        "would_take_again": 61.5
    },
    {
        "name": "David McGraw",
        "rating": 3.9,
        "difficulty": 2.2,
        "num_ratings": 32,
        "would_take_again": 20
    },
    {
        "name": "Andrew Kohen",
        "rating": 2.3,
        "difficulty": 4.4,
        "num_ratings": 112,
        "would_take_again": -1
    },
    {
        "name": "Mark Rankin",
        "rating": 3,
        "difficulty": 4.2,
        "num_ratings": 86,
        "would_take_again": 39.3
    },
    {
        "name": "Sarunas Jankauskas",
        "rating": 5,
        "difficulty": 1,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Elizabeth Keene",
        "rating": 3.7,
        "difficulty": 2.8,
        "num_ratings": 66,
        "would_take_again": 63.6
    },
    {
        "name": "Meric Augat",
        "rating": 4,
        "difficulty": 4,
        "num_ratings": 2,
        "would_take_again": 100
    },
    {
        "name": "Joseph Wilson",
        "rating": 4.3,
        "difficulty": 2.4,
        "num_ratings": 48,
        "would_take_again": 85.4
    },
    {
        "name": "John Webb",
        "rating": 4.6,
        "difficulty": 3.1,
        "num_ratings": 48,
        "would_take_again": 95.1
    },
    {
        "name": "Brenda Witmer",
        "rating": 4.7,
        "difficulty": 2.3,
        "num_ratings": 15,
        "would_take_again": 100
    },
    {
        "name": "Kaitlin Fisher",
        "rating": 4.6,
        "difficulty": 3.2,
        "num_ratings": 40,
        "would_take_again": 92.5
    },
    {
        "name": "Kevin Molloy",
        "rating": 3.5,
        "difficulty": 3.6,
        "num_ratings": 16,
        "would_take_again": 68.8
    },
    {
        "name": "Alexander Stas",
        "rating": 4.1,
        "difficulty": 3.1,
        "num_ratings": 10,
        "would_take_again": 90
    },
    {
        "name": "John Ott",
        "rating": 4.2,
        "difficulty": 3.3,
        "num_ratings": 68,
        "would_take_again": 64
    },
    {
        "name": "Jeff Tang",
        "rating": 2.6,
        "difficulty": 3.2,
        "num_ratings": 30,
        "would_take_again": 44.4
    },
    {
        "name": "Raihan Khan",
        "rating": 4.2,
        "difficulty": 1.9,
        "num_ratings": 52,
        "would_take_again": 88.5
    },
    {
        "name": "Lori De Hertogh",
        "rating": 4.9,
        "difficulty": 2.3,
        "num_ratings": 7,
        "would_take_again": 100
    },
    {
        "name": "Susan Zurbrigg",
        "rating": 3.3,
        "difficulty": 2.7,
        "num_ratings": 26,
        "would_take_again": 55.6
    },
    {
        "name": "Colleen Moore",
        "rating": 4.5,
        "difficulty": 2.5,
        "num_ratings": 54,
        "would_take_again": 88.9
    },
    {
        "name": "Stephanie Berry",
        "rating": 4.1,
        "difficulty": 3.5,
        "num_ratings": 49,
        "would_take_again": 79.6
    },
    {
        "name": "Keigo Fukumura",
        "rating": 3.6,
        "difficulty": 2.4,
        "num_ratings": 16,
        "would_take_again": 53.3
    },
    {
        "name": "Michael Smith",
        "rating": 4,
        "difficulty": 2.9,
        "num_ratings": 81,
        "would_take_again": 52.4
    },
    {
        "name": "Cheng LI",
        "rating": 4.5,
        "difficulty": 1.5,
        "num_ratings": 2,
        "would_take_again": 100
    },
    {
        "name": "To  be Announced",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Michael Critzer",
        "rating": 4.5,
        "difficulty": 1.6,
        "num_ratings": 112,
        "would_take_again": 77.6
    },
    {
        "name": "Chris Johnson",
        "rating": 4.7,
        "difficulty": 3,
        "num_ratings": 26,
        "would_take_again": 96.2
    },
    {
        "name": "Anca Constantin",
        "rating": 2.8,
        "difficulty": 3.9,
        "num_ratings": 44,
        "would_take_again": 44
    },
    {
        "name": "Zhuojun Duan",
        "rating": 3.9,
        "difficulty": 3.1,
        "num_ratings": 17,
        "would_take_again": 70.6
    },
    {
        "name": "Michael Hickman",
        "rating": 4.5,
        "difficulty": 2.6,
        "num_ratings": 110,
        "would_take_again": 86.2
    },
    {
        "name": "Isaac Wang",
        "rating": 5,
        "difficulty": 2.4,
        "num_ratings": 20,
        "would_take_again": 100
    },
    {
        "name": "Matt Rutherford",
        "rating": 4.3,
        "difficulty": 2.6,
        "num_ratings": 24,
        "would_take_again": 100
    },
    {
        "name": "Beth Cochran",
        "rating": 4.2,
        "difficulty": 2.2,
        "num_ratings": 51,
        "would_take_again": 88.2
    },
    {
        "name": "Karim Altaii",
        "rating": 3.1,
        "difficulty": 3.9,
        "num_ratings": 68,
        "would_take_again": 31.6
    },
    {
        "name": "Lori Piitz",
        "rating": 3.9,
        "difficulty": 3.9,
        "num_ratings": 16,
        "would_take_again": 100
    },
    {
        "name": "Laura Lambert",
        "rating": 4,
        "difficulty": 2.4,
        "num_ratings": 8,
        "would_take_again": 85.7
    },
    {
        "name": "Kane Nashimoto",
        "rating": 4.2,
        "difficulty": 2.5,
        "num_ratings": 115,
        "would_take_again": 95.1
    },
    {
        "name": "Maura Hametz",
        "rating": 3.3,
        "difficulty": 2.8,
        "num_ratings": 8,
        "would_take_again": 62.5
    },
    {
        "name": "Scott Arbogast",
        "rating": 5,
        "difficulty": 1,
        "num_ratings": 2,
        "would_take_again": -1
    },
    {
        "name": "Kane Nashimoto",
        "rating": 4.2,
        "difficulty": 2.5,
        "num_ratings": 115,
        "would_take_again": 95.1
    },
    {
        "name": "Judith Ofcarcik",
        "rating": 5,
        "difficulty": 3,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Debra Sutton",
        "rating": 3,
        "difficulty": 3,
        "num_ratings": 477,
        "would_take_again": 45.7
    },
    {
        "name": "Alison Sandman",
        "rating": 3.2,
        "difficulty": 2.9,
        "num_ratings": 100,
        "would_take_again": 93.8
    },
    {
        "name": "Andrew Kohen",
        "rating": 2.3,
        "difficulty": 4.4,
        "num_ratings": 112,
        "would_take_again": -1
    },
    {
        "name": "Jo-Anne Van Der Vat-Chromy",
        "rating": 4.2,
        "difficulty": 1.7,
        "num_ratings": 19,
        "would_take_again": 70
    },
    {
        "name": "Bryant Beverly",
        "rating": 3,
        "difficulty": 2.7,
        "num_ratings": 39,
        "would_take_again": 43.6
    },
    {
        "name": "Cynthia Martin",
        "rating": 4.3,
        "difficulty": 2.6,
        "num_ratings": 72,
        "would_take_again": 84.6
    },
    {
        "name": "Lauren Mays",
        "rating": 4.8,
        "difficulty": 1.5,
        "num_ratings": 2,
        "would_take_again": -1
    },
    {
        "name": "Lynn Lucatorto",
        "rating": 4.2,
        "difficulty": 2.4,
        "num_ratings": 69,
        "would_take_again": 82.6
    },
    {
        "name": "Ian Lowery",
        "rating": 5,
        "difficulty": 2.5,
        "num_ratings": 2,
        "would_take_again": 100
    },
    {
        "name": "Bobby Ratliff",
        "rating": 3.4,
        "difficulty": 3.6,
        "num_ratings": 10,
        "would_take_again": 60
    },
    {
        "name": "Kristian Weihs",
        "rating": 4.1,
        "difficulty": 2.9,
        "num_ratings": 85,
        "would_take_again": 77.2
    },
    {
        "name": "Imelda O'Reilly",
        "rating": 3.4,
        "difficulty": 3.8,
        "num_ratings": 24,
        "would_take_again": 58.3
    },
    {
        "name": "Katherine Axtell",
        "rating": 4.4,
        "difficulty": 2.4,
        "num_ratings": 5,
        "would_take_again": -1
    },
    {
        "name": "Mollie Godfrey",
        "rating": 3.8,
        "difficulty": 3,
        "num_ratings": 66,
        "would_take_again": 74.1
    },
    {
        "name": "Chandani Shrestha",
        "rating": 2.6,
        "difficulty": 3.4,
        "num_ratings": 23,
        "would_take_again": 26.1
    },
    {
        "name": "Gabriel Dobner",
        "rating": 4.9,
        "difficulty": 3.1,
        "num_ratings": 10,
        "would_take_again": 100
    },
    {
        "name": "Mesude Bayrakci-Boz",
        "rating": 3.4,
        "difficulty": 3.4,
        "num_ratings": 5,
        "would_take_again": 100
    },
    {
        "name": "Melanie Shoffner",
        "rating": 5,
        "difficulty": 2,
        "num_ratings": 2,
        "would_take_again": 100
    },
    {
        "name": "Jon McMillan",
        "rating": 5,
        "difficulty": 2,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Masoud Kaveh",
        "rating": 3.9,
        "difficulty": 3.5,
        "num_ratings": 52,
        "would_take_again": 73.1
    },
    {
        "name": "Brett Tjaden",
        "rating": 3.8,
        "difficulty": 3.3,
        "num_ratings": 24,
        "would_take_again": 75
    },
    {
        "name": "Kevin Jefferson",
        "rating": 4.3,
        "difficulty": 2.6,
        "num_ratings": 81,
        "would_take_again": 75
    },
    {
        "name": "David Newman",
        "rating": 3.6,
        "difficulty": 2.4,
        "num_ratings": 13,
        "would_take_again": 57.1
    },
    {
        "name": "Elizabeth Brown",
        "rating": 2.9,
        "difficulty": 4,
        "num_ratings": 75,
        "would_take_again": 34.8
    },
    {
        "name": "Andrew Connell",
        "rating": 3.8,
        "difficulty": 2.2,
        "num_ratings": 328,
        "would_take_again": 65.7
    },
    {
        "name": "Brooks Youngmark",
        "rating": 4,
        "difficulty": 2.8,
        "num_ratings": 4,
        "would_take_again": 75
    },
    {
        "name": "Art Shala",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Celestine Woodruff",
        "rating": 3.3,
        "difficulty": 3.6,
        "num_ratings": 39,
        "would_take_again": 48
    },
    {
        "name": "Eva Strawbridge",
        "rating": 3.1,
        "difficulty": 3.6,
        "num_ratings": 61,
        "would_take_again": 53.1
    },
    {
        "name": "M. Hossain Heydari",
        "rating": 4,
        "difficulty": 2,
        "num_ratings": 2,
        "would_take_again": 100
    },
    {
        "name": "Michael Riddell",
        "rating": 4.9,
        "difficulty": 1.2,
        "num_ratings": 31,
        "would_take_again": 100
    },
    {
        "name": "John Peterson",
        "rating": 4.9,
        "difficulty": 3.3,
        "num_ratings": 29,
        "would_take_again": 96.4
    },
    {
        "name": "Joshua Orndorff",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Thomas Martin",
        "rating": 5,
        "difficulty": 3,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "William Johnson",
        "rating": 2,
        "difficulty": 1,
        "num_ratings": 2,
        "would_take_again": "N/A"
    },
    {
        "name": "Elizabeth Gheen",
        "rating": 4.7,
        "difficulty": 1.9,
        "num_ratings": 24,
        "would_take_again": 91.7
    },
    {
        "name": "Stephanie Baller",
        "rating": 2.2,
        "difficulty": 4.2,
        "num_ratings": 135,
        "would_take_again": 18.2
    },
    {
        "name": "Tiajuana Tillman",
        "rating": 5,
        "difficulty": 1.5,
        "num_ratings": 4,
        "would_take_again": 100
    },
    {
        "name": "Carl Donakowski",
        "rating": 3.3,
        "difficulty": 2.9,
        "num_ratings": 38,
        "would_take_again": 100
    },
    {
        "name": "Lamiaa Korayem",
        "rating": 3.6,
        "difficulty": 3.3,
        "num_ratings": 87,
        "would_take_again": 65.5
    },
    {
        "name": "Katherine Ott Walter",
        "rating": 3.6,
        "difficulty": 3.2,
        "num_ratings": 34,
        "would_take_again": 61.8
    },
    {
        "name": "Sheila Fielding",
        "rating": 3.3,
        "difficulty": 3.3,
        "num_ratings": 44,
        "would_take_again": 52
    },
    {
        "name": "Jason Sterlace",
        "rating": 4.7,
        "difficulty": 2.4,
        "num_ratings": 34,
        "would_take_again": 97.1
    },
    {
        "name": "Jennifer Almjeld",
        "rating": 4.9,
        "difficulty": 2,
        "num_ratings": 27,
        "would_take_again": 100
    },
    {
        "name": "David Wenos",
        "rating": 2.3,
        "difficulty": 3.5,
        "num_ratings": 78,
        "would_take_again": 14.3
    },
    {
        "name": "Greg Gabriel",
        "rating": 5,
        "difficulty": 2,
        "num_ratings": 7,
        "would_take_again": 100
    },
    {
        "name": "Muhammad Upal",
        "rating": 5,
        "difficulty": 3,
        "num_ratings": 2,
        "would_take_again": 100
    },
    {
        "name": "Richard Busi",
        "rating": 3.7,
        "difficulty": 3.6,
        "num_ratings": 58,
        "would_take_again": 59.1
    },
    {
        "name": "Dymphna De Wild",
        "rating": 4,
        "difficulty": 2.4,
        "num_ratings": 19,
        "would_take_again": 75
    },
    {
        "name": "Joseph Taylor",
        "rating": 3.4,
        "difficulty": 2.9,
        "num_ratings": 70,
        "would_take_again": 65.8
    },
    {
        "name": "David Babcock",
        "rating": 2.9,
        "difficulty": 3.3,
        "num_ratings": 56,
        "would_take_again": 42.6
    },
    {
        "name": "Rachel Smith",
        "rating": 5,
        "difficulty": 1.7,
        "num_ratings": 6,
        "would_take_again": 100
    },
    {
        "name": "Gregory Czyszczon",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Tim Ozcan",
        "rating": 4.3,
        "difficulty": 3.3,
        "num_ratings": 6,
        "would_take_again": 83.3
    },
    {
        "name": "Jill Lassiter",
        "rating": 2.5,
        "difficulty": 3.9,
        "num_ratings": 42,
        "would_take_again": 33.3
    },
    {
        "name": "Michael Stewart",
        "rating": 3.7,
        "difficulty": 2.8,
        "num_ratings": 32,
        "would_take_again": 78.1
    },
    {
        "name": "Will Jedrzejczak",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Nathan Sprague",
        "rating": 4.1,
        "difficulty": 3.6,
        "num_ratings": 51,
        "would_take_again": 80
    },
    {
        "name": "Chris Carrillo",
        "rating": 3.5,
        "difficulty": 3.5,
        "num_ratings": 2,
        "would_take_again": "N/A"
    },
    {
        "name": "Dee Weikle",
        "rating": 3.6,
        "difficulty": 3.6,
        "num_ratings": 33,
        "would_take_again": 72.7
    },
    {
        "name": "Alexis  Stevens",
        "rating": 3.6,
        "difficulty": 3.8,
        "num_ratings": 60,
        "would_take_again": 63.3
    },
    {
        "name": "Sojib Zaman",
        "rating": 4.5,
        "difficulty": 1.7,
        "num_ratings": 13,
        "would_take_again": 92.3
    },
    {
        "name": "Kevin Hardwick",
        "rating": 4.4,
        "difficulty": 2.8,
        "num_ratings": 226,
        "would_take_again": 92.1
    },
    {
        "name": "Breanne Weber",
        "rating": 5,
        "difficulty": 1.7,
        "num_ratings": 9,
        "would_take_again": 100
    },
    {
        "name": "Dominic Baldoni",
        "rating": 4.9,
        "difficulty": 1.2,
        "num_ratings": 17,
        "would_take_again": 94.1
    },
    {
        "name": "Bradley Roof",
        "rating": 3.3,
        "difficulty": 3.6,
        "num_ratings": 68,
        "would_take_again": 66.7
    },
    {
        "name": "Jeremiah McCarthy",
        "rating": 3,
        "difficulty": 2.8,
        "num_ratings": 103,
        "would_take_again": -1
    },
    {
        "name": "Cindy Klevickis",
        "rating": 5,
        "difficulty": 1,
        "num_ratings": 4,
        "would_take_again": 100
    },
    {
        "name": "Emmarose Phillips",
        "rating": 3.3,
        "difficulty": 4,
        "num_ratings": 9,
        "would_take_again": -1
    },
    {
        "name": "Maegan Daniels",
        "rating": 5,
        "difficulty": 1.8,
        "num_ratings": 4,
        "would_take_again": 100
    },
    {
        "name": "Casey Ouren",
        "rating": 5,
        "difficulty": 1.4,
        "num_ratings": 9,
        "would_take_again": 100
    },
    {
        "name": "Kevin Giovanetti",
        "rating": 2.2,
        "difficulty": 3.5,
        "num_ratings": 47,
        "would_take_again": 13.3
    },
    {
        "name": "Sarah Taylor",
        "rating": 4.3,
        "difficulty": 1.9,
        "num_ratings": 75,
        "would_take_again": 84.5
    },
    {
        "name": "Ronald Raab",
        "rating": 3.5,
        "difficulty": 3,
        "num_ratings": 84,
        "would_take_again": 59.6
    },
    {
        "name": "Laura Henigman",
        "rating": 3.2,
        "difficulty": 2.9,
        "num_ratings": 82,
        "would_take_again": 54.8
    },
    {
        "name": "Gbenga Adesina",
        "rating": 2,
        "difficulty": 3,
        "num_ratings": 1,
        "would_take_again": "N/A"
    },
    {
        "name": "Shannon Conley",
        "rating": 3.7,
        "difficulty": 2.3,
        "num_ratings": 11,
        "would_take_again": 80
    },
    {
        "name": "Kristen McCleary",
        "rating": 3.7,
        "difficulty": 2.2,
        "num_ratings": 98,
        "would_take_again": 55.8
    },
    {
        "name": "Mark Gordon",
        "rating": 4.8,
        "difficulty": 1.5,
        "num_ratings": 11,
        "would_take_again": 100
    },
    {
        "name": "Katelyn Wood",
        "rating": 5,
        "difficulty": 2,
        "num_ratings": 37,
        "would_take_again": 100
    },
    {
        "name": "Tobias Gerken",
        "rating": 3,
        "difficulty": 3.4,
        "num_ratings": 5,
        "would_take_again": 60
    },
    {
        "name": "Greg Corder",
        "rating": 4.2,
        "difficulty": 2,
        "num_ratings": 59,
        "would_take_again": 95
    },
    {
        "name": "Mark Piper",
        "rating": 4.7,
        "difficulty": 2.8,
        "num_ratings": 214,
        "would_take_again": 93.9
    },
    {
        "name": "Kristi Lewis",
        "rating": 3,
        "difficulty": 2.6,
        "num_ratings": 141,
        "would_take_again": 42.5
    },
    {
        "name": "Maria Niculescu",
        "rating": 2.9,
        "difficulty": 3.4,
        "num_ratings": 14,
        "would_take_again": 42.9
    },
    {
        "name": "Mackenzie Hammack",
        "rating": 4,
        "difficulty": 2,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Chris Willingham ",
        "rating": 2.3,
        "difficulty": 4.3,
        "num_ratings": 4,
        "would_take_again": 25
    },
    {
        "name": "Stephanie Stockwell",
        "rating": 3.5,
        "difficulty": 3.6,
        "num_ratings": 32,
        "would_take_again": 58.3
    },
    {
        "name": "Towfiqul Alam",
        "rating": 2.7,
        "difficulty": 3,
        "num_ratings": 7,
        "would_take_again": 28.6
    },
    {
        "name": "William Boucher",
        "rating": 4.4,
        "difficulty": 1.4,
        "num_ratings": 23,
        "would_take_again": 95.7
    },
    {
        "name": "Zev Woodstock",
        "rating": 0,
        "difficulty": 0,
        "num_ratings": 0,
        "would_take_again": -1
    },
    {
        "name": "Margaret Mulrooney",
        "rating": 3.7,
        "difficulty": 3.6,
        "num_ratings": 22,
        "would_take_again": 20
    },
    {
        "name": "Rod MacDonald",
        "rating": 4.7,
        "difficulty": 2.2,
        "num_ratings": 15,
        "would_take_again": 100
    },
    {
        "name": "Steven Garren",
        "rating": 3.5,
        "difficulty": 3.2,
        "num_ratings": 160,
        "would_take_again": 59.6
    },
    {
        "name": "Melissa Altman",
        "rating": 3.9,
        "difficulty": 2.8,
        "num_ratings": 44,
        "would_take_again": 75
    },
    {
        "name": "Jonathan Miles",
        "rating": 4,
        "difficulty": 4,
        "num_ratings": 1,
        "would_take_again": 100
    },
    {
        "name": "Richard Hilliard",
        "rating": 4.8,
        "difficulty": 1.8,
        "num_ratings": 47,
        "would_take_again": 94.4
    },
    {
        "name": "Timothy Fitzgerald",
        "rating": 4.3,
        "difficulty": 3.6,
        "num_ratings": 191,
        "would_take_again": 81.7
    }
]