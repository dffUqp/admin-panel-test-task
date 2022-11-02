import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, TableRow } from '@mui/material';
import { IProduct } from '../../ts/productTypes';
import { useDeleteProductMutation } from '../../services/product';
import EditProdModal from '../EditProdModal';
import ConfirmModal from '../ConfirmModal';
import { useToggle } from '../../hooks/useToggle';

const ProductView = (currentProduct: IProduct) => {
  const { id, name, count, weight, imageUrl } = currentProduct;

  const [editModaOpen, toggleEditModal] = useToggle();
  const [confimModal, toggleConfimModal] = useToggle();

  const [deleteProduct] = useDeleteProductMutation();

  const deleteFunc = () => {
    toggleConfimModal();
    deleteProduct(id);
  };

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{count}</TableCell>
      <TableCell>{weight}</TableCell>
      <TableCell>{imageUrl}</TableCell>

      <TableCell align="right">
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={toggleEditModal}
        >
          <EditIcon />
        </IconButton>
        <EditProdModal
          isOpen={editModaOpen}
          toggleModal={toggleEditModal}
          editValue={currentProduct}
        />

        <IconButton aria-label="delete" color="error" onClick={toggleConfimModal}>
          <DeleteIcon />
        </IconButton>

        <ConfirmModal
          isOpen={confimModal}
          toggle={toggleConfimModal}
          toggleWithAction={deleteFunc}
        />
      </TableCell>
    </TableRow>
  );
};

export default ProductView;
