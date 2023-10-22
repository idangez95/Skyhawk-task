import styles from '../users.module.css';

export const ErrorsCounter = ({ errors }) => {
  // Count the fields with "required" and "Invalid" keywords
  const requiredCount = countErrors(errors, 'required');
  const invalidCount = countErrors(errors, 'Invalid');

  return (
    <div className={styles.errorsCounter}>
      Errors: Required Fields - {requiredCount}, Invalid Fields - {invalidCount}
    </div>
  );
};

// Function to count fields with a specific keyword
const countErrors = (errors, keyword) => {
  return Object.values(errors).reduce((count, error) => {
    if (
      typeof error === 'string' &&
      error.toLowerCase().includes(keyword?.toLowerCase())
    ) {
      return count + 1;
    }
    return count;
  }, 0);
};
