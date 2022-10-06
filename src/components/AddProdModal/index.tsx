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
  isOpen: boolean;
  toggleModal: () => void;
};

const AddProdModal = ({ isOpen, toggleModal }: AddProdModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<EditedProduct>({
    mode: 'onBlur',
  });

  const [createdProduct] = useCreateProductMutation();

  if (!isOpen) {
    return null;
  }

  const onSubmit = (data: EditedProduct) => {
    createdProduct(data);
    reset();
  };

  const toggleWithReset = () => {
    toggleModal();
    reset();
  };

  return (
    <Dialog open={isOpen} onClose={toggleWithReset} maxWidth="md">
      <DialogTitle>Add New Product</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent register={register} errors={errors} />
        <DialogActions>
          <Button onClick={toggleWithReset}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddProdModal;
