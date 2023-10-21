import styles from '../users.module.css';

export const ErrorsCounter = ({ errors }) => {
  return (
    <div className={styles.errorsCounter}>
      Errors: Empty Fields - {errors.emptyFields}, Invalid Fields - {errors.invalidFields}
    </div>
  );
};
