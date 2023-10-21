import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../components/InputField';
import TrashIconButton from '../../../components/TrashIconButton';
import styles from '../users.module.css';
import countryOptions from '../../../data/countries.json';
import { useSetRecoilState } from 'recoil';
import { errorsState } from '../../../state/atoms/errorsState';

const validateName = (name) => /^[a-zA-Z\s]*$/.test(name) && name.trim() !== '';
const validateCountry = (country) => countryOptions.includes(country);
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^\+[0-9]*$/.test(phone);

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

const UserRow = ({ user, onDeleteUser }) => {
  const [localUser, setLocalUser] = useState(user);
  const setErrorsCounter = useSetRecoilState(errorsState);

  const handleInputChange = (field, value) => {
    const updatedUser = { ...localUser, [field]: value };
    setLocalUser(updatedUser);
  };

  return (
    <Formik
      initialValues={localUser}
      validationSchema={validationSchema}
    >
      {({ errors, values, handleChange, handleBlur }) => (
        <Form>
          <Grid container className={styles.userRow}>
            <InputField
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={(e) => {
                handleChange(e);
                handleInputChange(e.target.name, e.target.value);
              }}
              onBlur={handleBlur}
              error={!!errors.name}
            />

            <InputField
              name="country"
              placeholder="Country"
              value={values.country}
              onChange={(e) => {
                handleChange(e);
                handleInputChange(e.target.name, e.target.value);
              }}
              onBlur={handleBlur}
              error={!!errors.country}
            />

            <InputField
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={(e) => {
                handleChange(e);
                handleInputChange(e.target.name, e.target.value);
              }}
              onBlur={handleBlur}
              error={!!errors.email}
            />

            <InputField
              name="phone"
              placeholder="Phone"
              value={values.phone}
              onChange={(e) => {
                handleChange(e);
                handleInputChange(e.target.name, e.target.value);
              }}
              onBlur={handleBlur}
              error={!!errors.phone}
            />

            <TrashIconButton handleClick={onDeleteUser} />
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default UserRow;
