import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function TestimonialCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        background: "#0a0d19",
      }}
    >
      <CardActionArea>
        <LazyLoadImage
          width="100%"
          height="auto"
          src={props.imageURL}
          alt={props.imageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="#eee" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="#eee">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
