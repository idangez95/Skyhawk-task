import { totalInvalidErrors, totalRequiredErrors } from './utils';

export const ErrorsCounter = ({ tempUsersData }) => {
  return (
    <div>
      Errors: Required Fields - {totalRequiredErrors(tempUsersData)}, Invalid Fields -
      {totalInvalidErrors(tempUsersData)}
    </div>
  );
};
