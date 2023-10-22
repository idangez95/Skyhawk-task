import styles from '../users.module.css';
import { totalInvalidErrors, totalRequiredErrors } from './utils';

export const ErrorsCounter = ({ tempUsersData }) => {
  return (
    <div className={styles.errorsCounter}>
      Errors: Required Fields - {totalRequiredErrors(tempUsersData)}, Invalid Fields -
      {totalInvalidErrors(tempUsersData)}
    </div>
  );
};
