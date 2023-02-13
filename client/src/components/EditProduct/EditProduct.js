import * as React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import {Link as LinkR, useNavigate, useParams}  from "react-router-dom"
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  editProduct, getOneProduct } from '../../Redux/actions/actionsProduct';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function EditProduct() {
    const {id}= useParams()
   
    
  const [category, setCategory] = React.useState("pc");
  const navigate = useNavigate()
  const dispatch= useDispatch()
  React.useEffect(() => {
    dispatch(getOneProduct(id))

 
}, [id])
  const handleSubmit = (event) => {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      price: data.get('price'),
      qte:data.get('quantity'),
      category
    });
    dispatch(editProduct({
      name: data.get('name'),
      price: data.get('price'),
      qte:data.get('quantity'),
      category
    },navigate,id))
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Product 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  type='number'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Category"
                      onChange={handleChange}
                    >
                      <MenuItem value={"pc"}>PC</MenuItem>
                      <MenuItem value={"telephone"}>Telephone</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} >
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
            <LinkR to="/">
            <Button
              type="reset"
              fullWidth
              variant="contained"
              sx={{ mb: 2 }}
            >
              Cancel
            </Button>
            </LinkR>
              </Grid>
            </Grid>
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}