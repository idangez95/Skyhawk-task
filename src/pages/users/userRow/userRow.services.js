import * as Yup from 'yup';
import { validateCountry, validateEmail, validateName, validatePhone } from './Utils';

export const useUserRowServices = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .test('name', 'Invalid name', validateName)
            .required('Name is required'),
        country: Yup.string()
            .test('country', 'Invalid country', validateCountry)
            .required('Country is required'),
        email: Yup.string()
            .test('email', 'Invalid email', validateEmail)
            .required('Email is required'),
        phone: Yup.string()
            .test('phone', 'Invalid phone', validatePhone)
            .required('Phone is required'),
    });

    return {
        validationSchema
    }
}
