import React from 'react';
import DialogContent from '@mui/material/DialogContent';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { EditedProduct } from '../../ts/productTypes';
import DefaultInput, { Mylabel } from '../UI/DefaultInput';

type ModalContentProps = {
  register: UseFormRegister<EditedProduct>;
  errors: FieldErrorsImpl<EditedProduct>;
  defaultValues?: EditedProduct | null;
};

const ModalContent = ({
  register,
  errors,
  defaultValues,
}: ModalContentProps) => {
  return (
    <DialogContent sx={{ maxWidth: '600px' }}>
      <DefaultInput
        labelName="Name"
        sx={{ width: '100%', padding: '5px 0 20px' }}
        error={!!errors.name}
        defaultValue={defaultValues?.name}
        {...register('name', { required: true })}
      />
      <DefaultInput
        labelName="Count"
        sx={{ width: '100%', padding: '5px 0 20px' }}
        {...register('count', {
          required: true,
          validate: (value) => value > 0,
          valueAsNumber: true,
          maxLength: 10,
        })}
        error={!!errors.count}
        defaultValue={defaultValues?.count}
      />
      <DefaultInput
        labelName="ImageUrl"
        sx={{ width: '100%', padding: '5px 0 20px' }}
        error={!!errors.imageUrl}
        defaultValue={defaultValues?.imageUrl}
        {...register('imageUrl', { required: true })}
      />

      <Mylabel style={{ display: 'block' }}>Size</Mylabel>
      <DefaultInput
        sx={{ width: '50%', padding: '5px 0 20px' }}
        placeholder="width"
        {...register('size.width', {
          required: true,
          validate: (value) => value > 0,
          valueAsNumber: true,
          maxLength: 10,
        })}
        error={!!errors.size?.width}
        defaultValue={defaultValues?.size.width}
      />
      <DefaultInput
        sx={{ width: '50%', padding: '5px 0 20px' }}
        placeholder="height"
        {...register('size.height', {
          required: true,
          validate: (value) => value > 0,
          valueAsNumber: true,
          maxLength: 10,
        })}
        error={!!errors.size?.height}
        defaultValue={defaultValues?.size.height}
      />

      <DefaultInput
        labelName="Weight"
        sx={{ width: '100%', padding: '5px 0 20px' }}
        error={!!errors.weight}
        defaultValue={defaultValues?.weight}
        {...register('weight', { required: true })}
      />
    </DialogContent>
  );
};

export default ModalContent;
