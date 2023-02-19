// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirector = moviesArray.map(movie => movie.director);
    return allDirector;
    //bonus pending
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDramaMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return stevenDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const moviesScore = moviesArray.filter(movie => movie.score);
    const sumScores = moviesScore.reduce((acc, currentValue) => acc + currentValue.score, 0);
    const average = (sumScores / moviesArray.length).toFixed(2);
    return Number(average);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.score && movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) {
        return 0;
    }
    const sumDrama = dramaMovies.reduce((acc, current) => acc +current.score, 0);
    const average = Math.floor((sumDrama / dramaMovies.length) * 100) / 100;
    return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = [...moviesArray].sort((a,b) => a.title - b.title)
    moviesByYear.sort((a,b) => a.year - b.year)
    return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesByAlphabet = [...moviesArray].map((movie) => movie = movie.title);
    moviesByAlphabet = moviesByAlphabet.sort();
    return moviesByAlphabet.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
