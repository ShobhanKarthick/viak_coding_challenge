import { ImageList, ImageListItem } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Gallery(props) {
  return (
    <div className="gallery">
      {props.dataset.map((item, index) => {
        return (
          <LazyLoadImage
            src={item.img}
            key={index}
            alt={item.alt}
            width={item.width}
            height="auto"
          />
        );
      })}
    </div>
  );
}
