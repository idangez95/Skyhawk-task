import { Button, Typography } from '@mui/material';
import UserRow from '../userRow/UserRow';
import AddButton from '../../../components/AddButton';
import styles from '../users.module.css';
import { useRecoilState } from 'recoil';
import { errorsState } from '../../../state/atoms/errorsState';
import { usersDataState } from '../../../state/atoms/userDataState';
import initialUsersData from '../../../data/initialUsersData.json';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function UsersList() {
  const [usersData, setUsersData] = useRecoilState(usersDataState);
  const [errorsCounter, setErrorsCounter] = useRecoilState(errorsState);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      // You can load data from an API here if needed
      setUsersData(initialUsersData);
    };
    loadData();
  }, [setUsersData]);

  const addNewUser = () => {
    const newUserId = uuidv4();

    // Create the new user object
    const newUser = {
      id: newUserId,
      name: '',
      country: '',
      email: '',
      phone: '',
    };

    // Update the state using the updater function
    setUsersData((prevUsersData) => [newUser, ...prevUsersData]);
  };

  console.log({ usersData });

  return (
    <div className={styles.usersList}>
      <div className={styles.usersListHeader}>
        <Typography variant="h6">Users List ({usersData.length})</Typography>
        <AddButton handleClick={addNewUser} />
      </div>
      <div className={styles.usersListContent}>
        {usersData.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UsersList;
