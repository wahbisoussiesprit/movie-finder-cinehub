// Movie categories
export const MOVIE_CATEGORIES = [
  { id: 'trending', name: 'Trending Now', icon: '🔥' },
  { id: 'top_rated', name: 'Top Rated', icon: '🏆' },
  { id: 'action', name: 'Action', icon: '💥' },
  { id: 'comedy', name: 'Comedy', icon: '😂' },
  { id: 'drama', name: 'Drama', icon: '🎭' },
  { id: 'horror', name: 'Horror', icon: '👻' },
  { id: 'scifi', name: 'Sci-Fi', icon: '🚀' },
  { id: 'romance', name: 'Romance', icon: '💖' },
];

// Extended movie data
export const SAMPLE_MOVIES = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.7,
    genre: "Sci-Fi/Adventure",
    duration: "2h 46m",
    poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nx1S8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    isFeatured: true,
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    language: "English"
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.3,
    genre: "Biography/Drama",
    duration: "3h",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n8ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    isFeatured: false,
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
    language: "English"
  },
  {
    id: 3,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    rating: 8.6,
    genre: "Animation/Action",
    duration: "2h 20m",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People.",
    isFeatured: true,
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
    language: "English"
  },
  {
    id: 4,
    title: "John Wick: Chapter 4",
    year: 2023,
    rating: 7.8,
    genre: "Action/Thriller",
    duration: "2h 49m",
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy.",
    isFeatured: false,
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
    language: "English"
  },
  {
    id: 5,
    title: "The Batman",
    year: 2022,
    rating: 7.8,
    genre: "Action/Crime",
    duration: "2h 56m",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/c0AspB8Om2hfb4t2TyGyWspDdQh.jpg",
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate.",
    isFeatured: true,
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"],
    language: "English"
  },
  {
    id: 6,
    title: "Everything Everywhere All at Once",
    year: 2022,
    rating: 7.8,
    genre: "Action/Adventure",
    duration: "2h 19m",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7Jh6KKy75iMhk4BTtLp6R1bPomu.jpg",
    description: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world.",
    isFeatured: false,
    director: "Daniel Kwan",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
    language: "English"
  },
  {
    id: 7,
    title: "Top Gun: Maverick",
    year: 2022,
    rating: 8.2,
    genre: "Action/Drama",
    duration: "2h 10m",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/odJ4hx6g6Vbt4o96JO0KwEgfzJZ.jpg",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
    isFeatured: true,
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
    language: "English"
  },
  {
    id: 8,
    title: "Barbie",
    year: 2023,
    rating: 7.0,
    genre: "Comedy/Adventure",
    duration: "1h 54m",
    poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    description: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
    isFeatured: false,
    director: "Greta Gerwig",
    cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
    language: "English"
  },
  {
    id: 9,
    title: "Avatar: The Way of Water",
    year: 2022,
    rating: 7.6,
    genre: "Sci-Fi/Adventure",
    duration: "3h 12m",
    poster: "https://image.tmdb.org/t/p/w500/94xxm5701CzOdJdUEdIuwqZaowx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.",
    isFeatured: true,
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    language: "English"
  },
  {
    id: 10,
    title: "Mission: Impossible - Dead Reckoning Part One",
    year: 2023,
    rating: 7.7,
    genre: "Action/Thriller",
    duration: "2h 43m",
    poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/2QL5j6m1hX1bqFQwDy6VcH9Uc6y.jpg",
    description: "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
    isFeatured: false,
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames"],
    language: "English"
  },
  {
    id: 11,
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    rating: 8.0,
    genre: "Action/Adventure",
    duration: "2h 30m",
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    description: "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe.",
    isFeatured: true,
    director: "James Gunn",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    language: "English"
  },
  {
    id: 12,
    title: "The Super Mario Bros. Movie",
    year: 2023,
    rating: 7.1,
    genre: "Animation/Adventure",
    duration: "1h 32m",
    poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    description: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi.",
    isFeatured: false,
    director: "Aaron Horvath",
    cast: ["Chris Pratt", "Anya Taylor-Joy", "Jack Black"],
    language: "English"
  }
];

// Helper functions
export const formatDuration = (duration) => {
  return duration;
};

export const getRandomMovies = (count = 4) => {
  return [...SAMPLE_MOVIES]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

export const getHighestRatedMovies = (count = 5) => {
  return [...SAMPLE_MOVIES]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
};