import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deletedProduct } from '../../Redux/actions/actionsProduct';

export default function ProductCard({ el }) {
  const dispatch = useDispatch()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
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
        <Button size="small" onClick={() => dispatch(deletedProduct(el._id))}>Delete</Button>
      </CardActions>
    </Card>
  );
}