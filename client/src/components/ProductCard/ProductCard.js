import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deletedProduct } from '../../Redux/actions/actionsProduct';

export default function ProductCard({ el }) {
  const currentUser = useSelector(state => state.userReducer.currentUser)
  const dispatch = useDispatch()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={el.imagesrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over {el.price}
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/editProduct/${el._id}`}><Button size="small">Edit</Button></Link>
        {localStorage.getItem("token") && currentUser.role == "admin" && <Button size="small" onClick={() => dispatch(deletedProduct(el._id))}>Delete</Button>}
      </CardActions>
    </Card>
  );
}