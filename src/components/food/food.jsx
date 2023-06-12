/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Grid } from "@mui/material";

const Food = ({ food }) => {
  const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
    food;

  // Define the maximum length of the shortened description
  const maxLength = 200;
  const shortDescription =
    strCategoryDescription.length > maxLength
      ? strCategoryDescription.substring(0, maxLength) + "..." // Append ellipsis if truncated
      : strCategoryDescription;

  return (
    <Grid sx={{ margin: "40px 0 20px 0" }} item xs={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {idCategory}
            </Avatar>
          }
          action={
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          }
          title={strCategory}
        />
        <CardMedia
          component="img"
          height="194"
          image={strCategoryThumb}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {shortDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Food;
