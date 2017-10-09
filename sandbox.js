const map = require('./src/lists/map');
const filter = require('./src/lists/filter');
const movies = require('./data/movies');
const bookmarks = require('./data/bookmarks');

function zip(left, right, fn) {
    let result = [];

    for (let i = 0; i < Math.min(left.length, right.length); i++) {
        result.push(fn(left[i], right[i]));
    }

    return result;
}

// [1, 2, 3, 4] [-1, -2, -3] -> [0, 0, 0]

let result = zip(movies, bookmarks, (movie, bookmark) => {
    return Object.assign({}, movie, { bookmark });
});

console.log(result);