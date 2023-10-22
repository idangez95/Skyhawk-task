import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import InputField from '../../../components/inputField';
import TrashIconButton from '../../../components/trashIconButton';
import styles from '../users.module.css';
import SelectField from '../../../components/selectField';
import countryOptions from '../../../data/countries.json';
import { useUserRowServices } from './userRow.services';

const UserRow = ({
  user,
  tempUsersData,
  setTempUsersData,
  onDeleteUser,
  setIsValidRow,
}) => {
  const { validationSchema } = useUserRowServices();
  const [localUser, setLocalUser] = useState(user);

  const handleInputChange = (field, value) => {
    const updatedUser = { ...localUser, [field]: value };
    setLocalUser(updatedUser);

    const updatedTempUsersData = tempUsersData.map((tempUser) =>
      tempUser.id === localUser.id ? updatedUser : tempUser
    );
    setTempUsersData(updatedTempUsersData);
  };

  const { errors, values, handleChange, handleBlur, isValid } = useFormik({
    initialValues: localUser,
    validationSchema: validationSchema,
  });

  useEffect(() => {
    setIsValidRow(isValid);
  }, [isValid, setIsValidRow]);

  return (
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

      <SelectField
        name="country"
        placeholder="Country"
        value={values.country}
        onChange={(e) => {
          handleChange(e);
          handleInputChange(e.target.name, e.target.value);
        }}
        onBlur={handleBlur}
        error={!!errors.country}
        options={countryOptions}
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

      <TrashIconButton handleClick={() => onDeleteUser(user.id)} />
    </Grid>
  );
};

export default UserRow;
