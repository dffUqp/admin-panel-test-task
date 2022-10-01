import React, { useEffect, useState } from 'react';
import ProductView from '../ProductView';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetProductsQuery } from '../../services/product';
import { Box, Container } from '@mui/material';
import { IProduct } from '../../ts/productTypes';

type ProductsListViewProps = {
  sortMethod: string;
};

const ProductsListView = ({ sortMethod }: ProductsListViewProps) => {
  const { data } = useGetProductsQuery();
  const [sortedData, setsortedData] = useState<IProduct[] | undefined>(data);

  useEffect(() => {
    if (data != null) {
      const sorted = [...data].sort((a, b) =>
        sortMethod === 'count'
          ? a.count - b.count
          : a.name.localeCompare(b.name)
      );
      setsortedData(sorted);
    }
  }, [data, sortMethod]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: '20px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Count</TableCell>
                <TableCell>Weight&nbsp;(g)</TableCell>
                <TableCell>ImageUrl</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData?.map((item) => (
                <ProductView key={item.id} {...item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ProductsListView;
