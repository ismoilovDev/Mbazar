import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Col } from 'react-bootstrap';
import http from '../../Services/getData';


export default function RecipeReviewCard({ item, setAdds, adds, name }) {

   // Delete Add
   const deleteAddHendler = (id) => {
      if (window.confirm("Хотите удалить свою рекламу?")) {
         http.get(`/delete_ads/${id}`)
            .then((res) => {
               console.log(res.data);
               const addList = adds.filter(post => post.id !== id);
               setAdds(addList);
            })
            .catch(err => console.log(err))
      }
   }

   return (
      <Col xs="6" md="4" lg="3" className='my-3'>
         <Card >
            <CardHeader
               avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     {name.slice(0, 1)}
                  </Avatar>
               }
               action={
                  <IconButton aria-label="settings">
                     <MoreVertIcon />
                  </IconButton>
               }
               title={item.title}
               subheader={item.phone}
            />
            <CardMedia
               component="img"
               height="194"
               image={item.img1}
               alt="img"
            />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  {item.description}
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
               </IconButton>
               <IconButton onClick={() => deleteAddHendler(item.id)} aria-label="share">
                  <DeleteIcon />
               </IconButton>
            </CardActions>
         </Card>
      </Col>
   );
}