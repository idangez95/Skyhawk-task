import React, { useCallback, useEffect, useMemo } from 'react';
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

  const { errors, handleChange, handleBlur, isValid, values } = useFormik({
    initialValues: user,
    validationSchema: validationSchema,
  });

  const updatedUser = useMemo(() => ({ ...user, ...values, errors }), [values, errors]);

  const updatedTempUsersData = useMemo(
    () =>
      tempUsersData.map((tempUser) => (tempUser.id === user.id ? updatedUser : tempUser)),
    [values, errors]
  );

  const updateTempUsersData = useCallback(
    () => setTempUsersData(updatedTempUsersData),
    [values, errors]
  );

  useEffect(() => {
    updateTempUsersData();
  }, [values, errors]);

  useEffect(() => {
    setIsValidRow(isValid);
  }, [isValid, setIsValidRow]);

  return (
    <Grid container className={styles.userRow}>
      <InputField
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.name}
      />

      <SelectField
        name="country"
        placeholder="Country"
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.country}
        options={countryOptions}
      />

      <InputField
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.email}
      />

      <InputField
        name="phone"
        placeholder="Phone"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.phone}
      />

      <TrashIconButton handleClick={() => onDeleteUser(user.id)} />
    </Grid>
  );
};

export default React.memo(UserRow);
