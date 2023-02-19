// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map(movie => movie.director);
    //bonus: allDirectors.sort();
    // bonus: allDirectors = allDirectors.filter((director, index, array) => director !== array[index-1] )
    return allDirectors;
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
    moviesArray.sort(function (x, y) {
        if (x.title > y.title) {
        return 1;
        }
        if (y.title > x.title) {
        return -1;
        }
        return 0;
        });
    let moviesByYear = [...moviesArray].sort((a,b) => a.year-b.year);
    return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesByAlphabet = moviesArray.map((movie) => movie = movie.title);
    moviesByAlphabet = moviesByAlphabet.sort();
    return moviesByAlphabet.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let durationArr = moviesArray.map((movie) => movie.duration)
    durationArr = durationArr.map((duration) => {
        let sumMins = 0;
        sumMins = duration[0] * 60;
        let isNum = (duration[4]) * 1
        if(duration.length > 2) {
            if(typeof isNum === 'number') {
                sumMins += (duration[3] * 10) + duration[4]*1
            } else {
                sumMins += duration[3]*1;
            }
        }
        return sumMins;
    })

    let moviesMin = [...moviesArray];
    moviesArray.forEach((movie) => {
        return durationArr.forEach((duration) => {
          movie.duration = duration;
        })
        
    })
      
    return moviesMin;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
    //should return null if it's passed with an empty array
    if(moviesArray.length === 0) {
        return null;
    }

    //get an array of each year, without repetition
    let arrOfYears = moviesArray.map((movie) => movie.year)
    arrOfYears.sort();
    arrOfYears = arrOfYears.filter((year, index, self) => {
        if (year !== self[index-1]) {
            return year;
        } 
    })

    //get an array of objects, each one with a key value for the year and an array for the score
    arrOfYears = arrOfYears.map((year) => {
        return {
            year: year,
            score: [],
        }
    })
    
    //push each score into the corresponding year 
    arrOfYears.forEach((year) => {
        moviesArray.forEach((movie) => {
            if(movie.year === year.year) {
                year.score.push(movie.score)
            }
        });
    })

    //we get the average score of each year
    arrOfYears.forEach((year) => {
        let sumScores = year.score.reduce((acc, current) => acc + current, 0)
        year.score = Math.floor(sumScores / year.score.length * 10) / 10;
    })

    arrOfYears.sort((a,b) => b.score-a.score)

    return `The best year was ${arrOfYears[0].year} with an average score of ${arrOfYears[0].score}`
}