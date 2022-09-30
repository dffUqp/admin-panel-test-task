import React, { forwardRef, useId } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import { DefaultInputProps } from './DefaultInput.props';

export const Mylabel = styled.label`
  font-family: Roboto;
  font-size: 17px;
  color: black;
`;

const DefaultInput = forwardRef(
  ({ labelName = '', ...props }: DefaultInputProps, ref) => {
    const id = useId();

    return (
      <>
        {labelName && (
          <Mylabel htmlFor={`outlined-hidden-label-by ${id}`}>
            {labelName}
          </Mylabel>
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
