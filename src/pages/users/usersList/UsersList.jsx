import { Typography } from '@mui/material';
import UserRow from '../userRow/userRow';
import AddButton from '../../../components/addButton';
import styles from '../users.module.css';
import { ErrorsCounter } from '../errorsCounter/errorsCounter';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilState } from 'recoil';
import { errorsState } from '../../../state/atoms/errorsState';

const UsersList = ({ setIsValidRow, usersData, tempUsersData, setTempUsersData }) => {
  const [errorsCounter, setErrorsCounter] = useRecoilState(errorsState);

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
    setTempUsersData((prevUsersData) => [newUser, ...prevUsersData]);
  };

  const deleteUser = (id) => {
    const updatedUsersList = tempUsersData.filter((user) => user.id !== id);
    setTempUsersData(updatedUsersList);
  };

  return (
    <div className={styles.usersList}>
      <div className={styles.usersListHeader}>
        <Typography variant="h6">Users List ({usersData.length})</Typography>
        <AddButton handleClick={addNewUser} />
      </div>
      <div className={styles.usersListContent}>
        {tempUsersData.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            setErrorsCounter={setErrorsCounter}
            onDeleteUser={() => deleteUser(user.id)}
            setIsValidRow={setIsValidRow}
            tempUsersData={tempUsersData}
            setTempUsersData={setTempUsersData}
          />
        ))}
      </div>
      <ErrorsCounter errors={errorsCounter} />
    </div>
  );
};

export default UsersList;
