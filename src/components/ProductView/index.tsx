import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, TableRow } from '@mui/material';
import { IProduct } from '../../ts/productTypes';
import { useDeleteProductMutation } from '../../services/product';
import EditProdModal from '../EditProdModal';
import WarningAlert from '../WarningAlert';

const ProductView = (currentProduct: IProduct) => {
  const { id, name, count, weight, imageUrl } = currentProduct;

  const [editModaOpen, setEditModaOpen] = React.useState(false);
  const [warnAlert, setWarnAlert] = React.useState(false);

  const [deleteProduct] = useDeleteProductMutation();

  const toggleWarnAlert = () => {
    setWarnAlert((prev) => !prev);
  };

  const toggleEditModal = () => {
    setEditModaOpen((prev) => !prev);
  };

  const deleteFunc = () => {
    toggleWarnAlert();
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

        <IconButton aria-label="delete" color="error" onClick={toggleWarnAlert}>
          <DeleteIcon />
        </IconButton>
        <WarningAlert
          isOpen={warnAlert}
          toggle={toggleWarnAlert}
          toggleWithAction={deleteFunc}
        />
      </TableCell>
    </TableRow>
  );
};

export default ProductView;
