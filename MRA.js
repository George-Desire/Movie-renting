class Movie {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
        this.available = true;
    }

    rent() {
        if (this.available) {
            this.available = false;
            console.log(`You rented "${this.title}". Enjoy watching!`);
        } else {
            console.log(`Sorry, "${this.title}" is not available for rent.`);
        }
    }

    returnMovie() {
        if (!this.available) {
            this.available = true;
            console.log(`Thank you for returning "${this.title}".`);
        } else {
            console.log(`"${this.title}" is already available.`);
        }
    }
}

class MovieStore {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    rentMovie(title) {
        const movie = this.movies.find(movie => movie.title === title);
        if (movie) {
            movie.rent();
        } else {
            console.log(`"${title}" is not available in our store.`);
        }
    }

    returnMovie(title) {
        const movie = this.movies.find(movie => movie.title === title);
        if (movie) {
            movie.returnMovie();
        } else {
            console.log(`"${title}" is not available in our store.`);
        }
    }
}

// Example usage:
const movieStore = new MovieStore();

const movie1 = new Movie("A tribe called Judah", "Comedy");
const movie2 = new Movie("Prophet Suddenly", "Crime");

movieStore.addMovie(movie1);
movieStore.addMovie(movie2);

movieStore.rentMovie("Ada Omo Daddy");
movieStore.rentMovie("Ada Omo Daddy"); // Trying to rent already rented movie

movieStore.returnMovie("Ada Omo Daddy");
movieStore.returnMovie("Ada Omo Daddy"); // Trying to return already returned movie
