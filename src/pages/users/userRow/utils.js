import countryOptions from '../../../data/countries.json';

export const validateName = (name) => /^[a-zA-Z\s]*$/.test(name) && name.trim() !== '';
export const validateCountry = (country) => countryOptions.includes(country);
export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePhone = (phone) => /^\+[0-9]*$/.test(phone);