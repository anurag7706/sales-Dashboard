import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ProductTable = () => {
  // Example data
  const products = [
    {
      id: 1,
      name: '3D image',
      description: 'Locom ipsum dolor sit amot. consoctotur adipiscing olit',
      stock: 32,
      price: 45.99,
      totalSales: 20,
      imageSrc: 'src/assets/pr1.png'
    },
    {
        id: 2,
        name: 'Sarphens Illustration',
        description: 'Locom ipsum dolor sit amot. consoctotur adipiscing olit',
        stock: 15,
        price: 29.99,
        totalSales: 10,
        imageSrc: 'src/assets/pr2.png'
      },
    // Add more entries here
  ];

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <h1>Product Sell</h1>
          </Grid>
          <Grid item>
            <TextField
              id="search"
              label="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Grid container spacing={2}>
                      <Grid item>
                        <img
                          src={product.imageSrc}
                          alt="Product"
                          style={{ width: 50, height: 50 }}
                        />
                      </Grid>
                      <Grid item>
                          <h4 style={{ fontSize: '1.2rem' }}>
                            {product.name}
                          </h4>
                        <p>{product.description}</p>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>{product.stock} in stock</TableCell>
                  <TableCell><strong>${product.price.toFixed(2)}</strong></TableCell>
                  <TableCell>{product.totalSales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ProductTable;
