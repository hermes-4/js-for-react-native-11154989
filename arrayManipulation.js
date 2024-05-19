const processArray = (arr) => {
    return arr.map((mapping) =>
        mapping % 2 === 0 ? mapping * 2 : mapping * 3
    );
};

const formatArrayStrings = (originalNames, modifiedNumbers) => {
    if (originalNames.length !== modifiedNumbers.length) {
        console.log("The arrays must be of the same length");
    }
    return originalNames.map((str, index) => {
        const num = modifiedNumbers[index];
        if (num % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
};
