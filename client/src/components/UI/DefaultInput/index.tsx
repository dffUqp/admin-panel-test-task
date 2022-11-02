import { forwardRef, useId } from 'react';
import { TextField } from '@mui/material';
import { DefaultInputProps } from './DefaultInput.props';
import { styled, experimental_sx as sx } from '@mui/system';

export const Label = styled('label')(
  sx({ color: 'text.primary', fontFamily: 'Roboto', fontSize: '17px' })
);

const DefaultInput = forwardRef(
  ({ labelName, ...props }: DefaultInputProps, ref): JSX.Element => {
    const id = useId();

    return (
      <>
        {labelName && (
          <Label htmlFor={`outlined-hidden-label-by ${id}`}>{labelName}</Label>
        )}
        <TextField
          hiddenLabel
          id={`outlined-hidden-label-by ${id}`}
          variant="outlined"
          size="small"
          type="text"
          inputRef={ref}
          {...props}
        />
      </>
    );
  }
);

export default DefaultInput;
