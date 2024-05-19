const processArray = (arr) => {
    return arr.map((mapping) =>
        mapping % 2 === 0 ? mapping * 2 : mapping * 3
    );
};
