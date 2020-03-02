
exports.min = function min (array) {
    if (Array.isArray(array) === true && array.length >0) {
        let minimal = array.sort(function (a, b) {
            return a - b;
        });
        return minimal[0];
    }
    else {
        return 0;
    }
};

exports.max = function max (array) {
    if (Array.isArray(array) === true && array.length >0) {
        let maximal = array.sort(function (a, b) {
            return a - b;
        });
        return maximal[maximal.length - 1];
    }
    else{
        return 0;
    }
};

exports.avg = function avg (array) {

    if (Array.isArray(array) === true && array.length >0) {
        let average = array.sort(function (a, b) {
            return a - b;
        });
    let sum = 0;
    for (let i = 0; i < average.length; i++) {
        sum = sum + average[i];
    }
    return sum / average.length;
}
else {
    return 0;
    }
};
