import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)({
  boxShadow: 'none',
  textTransform: 'none',
  backgroundColor: '#909196',
  borderRadius: '4px',
  width: '180px',
});

export const InputField = ({ name, value, onChange, error, disabled, placeholder, onBlur }) => {
  return (
    <StyledTextField
      onBlur={onBlur}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      autoComplete="off"
      inputProps={{
        autoComplete: 'off',
      }}
    />
  );
};