import { useCallback, useState } from "react";
import countryOptions from '../../../data/countries.json';

export const useUserRowServices = ({ user, onDeleteUser }) => {
    const [localUser, setLocalUser] = useState(user);
    console.log({ localUser })

    const handleInputChange = (field, value) => {
        const updatedUser = { ...localUser, [field]: value };
        setLocalUser(updatedUser);
    };

    const validateName = useCallback((name) => /^[a-zA-Z\s]*$/.test(name), [setLocalUser]);
    console.log(localUser?.name);
    console.log(validateName(localUser.name));

    const validateCountry = (country) => {
        return countryOptions.includes(country);
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^(\+\d{1,3})$/.test(phone);

    return {
        localUser,
        handleInputChange,
        validateName,
        validateCountry,
        validateEmail,
        validatePhone
    }
}