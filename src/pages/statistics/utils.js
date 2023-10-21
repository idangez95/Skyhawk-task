export const quantifyPeopleByCountry = (usersData) => {
    const countriesData = {};

    usersData.forEach((user) => {
        const country = user.country;
        if (countriesData[country]) {
            countriesData[country] += 1;
        } else {
            countriesData[country] = 1;
        }
    });

    return countriesData;
};

export const generateRandomColors = (count) => {
    const colors = [];

    for (let i = 0; i < count; i++) {
        const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
        colors.push(color);
    }

    return colors;
};