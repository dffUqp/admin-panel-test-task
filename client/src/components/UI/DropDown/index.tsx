import React from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';
import { SelectProps } from '@mui/material';
import { DropDownOption } from '../../../ts/dropDownTypes';

type DrowDownProps = {
  options: DropDownOption[];
  value: string;
  setValue: (value: string) => void;
} & SelectProps;

const DropDown = ({ options, value, setValue }: DrowDownProps): JSX.Element => {
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
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
