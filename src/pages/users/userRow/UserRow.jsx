import { Grid } from '@mui/material';
import InputField from '../../../components/InputField';
import TrashIconButton from '../../../components/TrashIconButton';
import styles from '../users.module.css';
import countryOptions from '../../../data/countries.json';

// user country must be one of those - for select/autocomplete implementation
import { useCallback, useState } from 'react';

const UserRow = ({ user, onDeleteUser }) => {
  const [localUser, setLocalUser] = useState(user);
  const [errors, setErrors] = useState({
    name: false,
    country: false,
    email: false,
    phone: false,
  });

  const handleInputChange = (field, value) => {
    const updatedUser = { ...localUser, [field]: value };
    setLocalUser(updatedUser);

    // Validate the input when the user types something
    if (value) {
      switch (field) {
        case 'name':
          setErrors({ ...errors, name: !validateName(value) });
          break;
        case 'country':
          setErrors({ ...errors, country: !validateCountry(value) });
          break;
        case 'email':
          setErrors({ ...errors, email: !validateEmail(value) });
          break;
        case 'phone':
          setErrors({ ...errors, phone: !validatePhone(value) });
          break;
        default:
          break;
      }
    } else {
      // Clear the error when the input is empty
      setErrors({ ...errors, [field]: false });
    }
  };

  const validateName = useCallback((name) => /^[a-zA-Z\s]*$/.test(name), []);

  const validateCountry = useCallback((country) => countryOptions.includes(country), []);

  const validateEmail = useCallback(
    (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    []
  );

  const validatePhone = useCallback((phone) => /^\+[0-9]*$/.test(phone), []);

  return (
    <Grid container className={styles.userRow}>
      <InputField
        name="name"
        value={localUser.name}
        placeholder="Name"
        onChangehandler={(name, value) => {
          handleInputChange(name, value);
        }}
        error={errors.name}
      />
      <InputField
        name="country"
        value={localUser.country}
        placeholder="Country"
        onChangehandler={(name, value) => handleInputChange(name, value)}
        error={errors.country}
      />
      <InputField
        name="email"
        value={localUser.email}
        placeholder="Email"
        onChangehandler={(name, value) => handleInputChange(name, value)}
        error={errors.email}
      />
      <InputField
        name="phone"
        value={localUser.phone}
        placeholder="Phone"
        onChangehandler={(name, value) => handleInputChange(name, value)}
        error={errors.phone}
      />
      <TrashIconButton handleClick={onDeleteUser} />
    </Grid>
  );
};

export default UserRow;
