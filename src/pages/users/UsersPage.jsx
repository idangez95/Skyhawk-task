import UsersList from './usersList/UsersList';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './users.module.css';
import { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { usersDataState } from '../../state/atoms/userDataState';

function UsersPage() {
  const [isValidRow, setIsValidRow] = useState(false);
  const [usersData, setUsersData] = useRecoilState(usersDataState);
  const [tempUsersData, setTempUsersData] = useState(usersData);

  const hasEmptyValues = useMemo(
    () => tempUsersData.some((user) => Object.values(user).some((value) => value === '')),
    [tempUsersData]
  );

  const saveUsers = () => {
    setUsersData(tempUsersData);
  };

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
