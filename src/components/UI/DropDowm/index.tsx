import React from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';
import { SelectProps } from '@mui/material';

type DrowDownProps = {
  option: { value: string; name: string }[];
  value: string;
  setValue: (value: string) => void;
} & SelectProps;

const DropDowm = ({ option, value, setValue }: DrowDownProps) => {
  return (
    <FormControl sx={{ padding: '10px' }}>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={value}
        displayEmpty
        onChange={(e) => {
          setValue(e.target.value);
        }}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {option.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDowm;
