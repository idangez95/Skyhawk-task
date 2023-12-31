import React from 'react';
import { styled } from '@mui/material/styles';
import { Select, MenuItem, FormControl } from '@mui/material';

const StyledFormControl = styled(FormControl)({
  boxShadow: 'none',
  textTransform: 'none',
  backgroundColor: '#909196',
  borderRadius: '4px',
  width: '180px',
  height: '40px'
});

const StyledSelect = styled(Select)({
  width: '100%',
  '& .MuiSelect-select': {
    padding: '8px',
  },
});

export const SelectField = ({ name, value, onChange, error, placeholder, options, onBlur }) => {
  return (
    <StyledFormControl error={error} variant="outlined" size="small">
      <StyledSelect
        labelId={`${name}-label`}
        label={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};