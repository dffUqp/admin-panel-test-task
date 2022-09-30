import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, TableRow } from '@mui/material';
import { IProduct } from '../../ts/productTypes';
import { useDeleteProductMutation } from '../../services/product';
import EditProdModal from '../EditProdModal';

const ProductView = (item: IProduct) => {
  const { id, name, count, weight, imageUrl } = item;

  const [open, setOpen] = React.useState(false);
  const [deleteProduct] = useDeleteProductMutation();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{count}</TableCell>
      <TableCell>{weight}</TableCell>
      <TableCell>{imageUrl}</TableCell>

      <TableCell align="right">
        <IconButton aria-label="delete" color="primary" onClick={handleOpen}>
          <EditIcon />
        </IconButton>
        <EditProdModal open={open} handleClose={handleClose} editValue={item} />
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => deleteProduct(id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ProductView;
