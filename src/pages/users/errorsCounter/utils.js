export const totalRequiredErrors = (tempUsersData) => countTotalErrors(tempUsersData, 'required');
export const totalInvalidErrors = (tempUsersData) => countTotalErrors(tempUsersData, 'Invalid');

export const countTotalErrors = (tempUsersData, errorType) => {
    return tempUsersData.reduce((count, user) => {
        const userErrors = user.errors || {};

        for (const errorKey in userErrors) {
            const errorText = userErrors[errorKey].toLowerCase();
            if (errorText.includes(errorType.toLowerCase())) {
                count++;
            }
        }

        return count;
    }, 0);
};