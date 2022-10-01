import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { EditedProduct, IProduct } from '../../ts/productTypes';
import { useUpdateProductMutation } from '../../services/product';
import ModalContent from '../ModalContent';
import Comments from './partials/Comments';
import { EditProdModalProps } from './EditProdModal.props';

const EditProdModal = ({
  isOpen,
  toggleModal,
  editValue,
}: EditProdModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditedProduct>({
    mode: 'onBlur',
  });

  const [editProduct] = useUpdateProductMutation();

  const onSubmit = (data: EditedProduct) => {
    const result: IProduct = {
      ...data,
      id: editValue.id,
      count: Number(data.count),
      size: {
        width: Number(data.size.width),
        height: Number(data.size.height),
      },
    };
    editProduct(result);
    toggleModal();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onClose={toggleModal} maxWidth="md">
      <DialogTitle>Edit Product Info</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent
          register={register}
          errors={errors}
          defaultValues={editValue}
        />
        <Comments productId={editValue.id} comments={editValue.comments} />
        <DialogActions>
          <Button onClick={toggleModal}>Cancel</Button>
          <Button type="submit">Edit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditProdModal;