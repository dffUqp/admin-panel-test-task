import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { EditedProduct } from '../../ts/productTypes';
import { useCreateProductMutation } from '../../services/product';
import ModalContent from '../ModalContent';

type AddProdModalProps = {
  open: boolean;
  handleClose: () => void;
};

const AddProdModal = ({ open, handleClose }: AddProdModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<EditedProduct>({
    mode: 'onBlur',
  });

  const [createdProduct] = useCreateProductMutation();

  const onSubmit = (data: EditedProduct) => {

    const result: EditedProduct = {
      ...data,
      count: Number(data.count),
      size: {
        width: Number(data.size.width),
        height: Number(data.size.height),
      },
    };
    createdProduct(result);
    reset();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle>Subscribe</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent register={register} errors={errors} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddProdModal;
