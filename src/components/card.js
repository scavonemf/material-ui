import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from "@material-ui/core";

import useStyles from "../styles";

const ramdonImage = Math.round(Math.random() * 1000);

const CardNew = ({ key }) => {
  const classes = useStyles();
  return (
    <Grid key={key}  item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`https://picsum.photos/id/${ramdonImage}/300/300`} //ramdon image
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            heading
          </Typography>
          <Typography>
            This is a media card you can use this section to describe the
            content
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardNew;
