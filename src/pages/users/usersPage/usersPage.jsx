import {UsersList} from '../usersList/usersList';
import PrimaryButton from '../../../components/primaryButton';
import styles from '../../users/users.module.css';
import { useUsersPageServices } from './usersPage.services';

function UsersPage() {
  const {
    hasEmptyValues,
    isValidRow,
    saveUsers,
    setIsValidRow,
    usersData,
    tempUsersData,
    setTempUsersData,
  } = useUsersPageServices();

  return (
    <div className={styles.pageRoot}>
      <div className={styles.pageContentContainer}>
        <UsersList
          setIsValidRow={setIsValidRow}
          usersData={usersData}
          tempUsersData={tempUsersData}
          setTempUsersData={setTempUsersData}
        />
        <div className={styles.rightButtonContainer}>
          <PrimaryButton disabled={!isValidRow || hasEmptyValues} handleClick={saveUsers}>
            Save
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
