const { processArray, formatArrayStrings } = require("./arrayManipulation");

const createUserProfiles = (originalNames, numbers) => {
    const processedNumbers = processArray(numbers);

    const modifiedNames = formatArrayStrings(originalNames, processedNumbers);

    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index],
        };
    });
};

// const originalNames = ["KWASI", "kwabena", "KWEKU", "yaw", "KOFI", "kwame"];
// const numbers = [1, 2, 3, 4, 5, 6];
// const User = createUserProfiles(originalNames, numbers);

// console.log(User);
