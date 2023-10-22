import { UsersList } from '../usersList/usersList';
import { PrimaryButton } from '../../../components/primaryButton';
import styles from '../../users/users.module.css';
import { useUsersPageServices } from './usersPage.services';
import { ErrorsCounter } from '../errorsCounter/errorsCounter';

export const UsersPage = () => {
  const {
    hasEmptyValues,
    isValidRow,
    saveUsers,
    setIsValidRow,
    usersData,
    tempUsersData,
    setTempUsersData,
    setUsersData,
  } = useUsersPageServices();

  return (
    <div className={styles.pageRoot}>
      <div className={styles.pageContentContainer}>
        <UsersList
          setUsersData={setUsersData}
          setIsValidRow={setIsValidRow}
          usersData={usersData}
          tempUsersData={tempUsersData}
          setTempUsersData={setTempUsersData}
        />
        <div className={styles.rightButtonContainer}>
          <ErrorsCounter tempUsersData={tempUsersData} />
          <PrimaryButton disabled={!isValidRow || hasEmptyValues} handleClick={saveUsers}>
            Save
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
