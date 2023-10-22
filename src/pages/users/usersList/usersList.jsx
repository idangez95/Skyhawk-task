import { Typography } from '@mui/material';
import UserRow from '../userRow/userRow';
import { AddButton } from '../../../components/addButton';
import styles from '../users.module.css';
import { v4 as uuidv4 } from 'uuid';
import { InputField } from '../../../components/inputField';
import { useState } from 'react';

export const UsersList = ({
  setIsValidRow,
  usersData,
  tempUsersData,
  setTempUsersData,
}) => {
  const [filterText, setFilterText] = useState('');

  const addNewUser = () => {
    const newUserId = uuidv4();

    const newUser = {
      id: newUserId,
      name: '',
      country: '',
      email: '',
      phone: '',
    };

    setTempUsersData((prevUsersData) => [newUser, ...prevUsersData]);
  };

  const deleteUser = (id) => {
    const updatedUsersList = tempUsersData.filter((user) => user.id !== id);
    setTempUsersData(updatedUsersList);
  };

  const filteredUsers = tempUsersData.filter((user) => {
    const lowerCaseFilterText = filterText.toLowerCase();
    return (
      user.name.toLowerCase().includes(lowerCaseFilterText) ||
      user.country.toLowerCase().includes(lowerCaseFilterText) ||
      user.email.toLowerCase().includes(lowerCaseFilterText) ||
      user.phone.toLowerCase().includes(lowerCaseFilterText)
    );
  });

  return (
    <div className={styles.usersList}>
      <div className={styles.usersListHeader}>
        <Typography variant="h6">Users List ({usersData.length})</Typography>
        <div className={styles.searchAndAddButton}>
          <InputField
            type="text"
            placeholder="Filter users by name"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <AddButton handleClick={addNewUser} />
        </div>
      </div>
      <div className={styles.usersListContent}>
        {filteredUsers.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            tempUsersData={tempUsersData}
            setTempUsersData={setTempUsersData}
            onDeleteUser={() => deleteUser(user.id)}
            setIsValidRow={setIsValidRow}
          />
        ))}
      </div>
    </div>
  );
};
