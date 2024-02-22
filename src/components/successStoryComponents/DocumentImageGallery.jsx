import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "../../assets/documents/ (1).jpeg";
import img2 from "../../assets/documents/ (1).jpg";
import img3 from "../../assets/documents/ (2).jpg";
import img4 from "../../assets/documents/ (3).jpg";
import img5 from "../../assets/documents/ (4).jpg";
import img6 from "../../assets/documents/ (5).jpg";
import img7 from "../../assets/documents/ (6).jpg";
import img8 from "../../assets/documents/ (7).jpg";
import img9 from "../../assets/documents/ (8).jpg";
import img10 from "../../assets/documents/ (9).jpg";
import img11 from "../../assets/documents/ (10).jpg";
import img12 from "../../assets/documents/ (11).jpg";
import img13 from "../../assets/documents/ (12).jpg";
import img14 from "../../assets/documents/ (13).jpg";
import img15 from "../../assets/documents/ (14).jpg";
import img16 from "../../assets/documents/ (15).jpg";

const DocumentImageGallery = () => {
  const itemData = [
    {
      img: img1,
      title: "Breakfast",
    },
    {
      img: img2,
      title: "Burger",
    },
    {
      img: img3,
      title: "Camera",
    },
    {
      img: img4,
      title: "Coffee",
    },
    {
      img: img5,
      title: "Hats",
    },
    {
      img: img6,
      title: "Honey",
    },
    {
      img: img7,
      title: "Basketball",
    },
    {
      img: img8,
      title: "Fern",
    },
    {
      img: img9,
      title: "Mushrooms",
    },
    {
      img: img10,
      title: "Tomato basil",
    },
    {
      img: img11,
      title: "Sea star",
    },
    {
      img: img12,
      title: "Bike",
    },
    {
      img: img13,
      title: "Bike",
    },
    {
      img: img14,
      title: "Bike",
    },
    {
      img: img15,
      title: "Bike",
    },
    {
      img: img16,
      title: "Bike",
    },
  ];
  return (
    <>
      <ImageList cols={3}>
        {itemData.map((item) => (
          <ImageListItem
            sx={{ border: "2px solid red", borderRadius: 9 }}
            key={item.img}>
            <img
              style={{
                borderRadius: 9,
              }}
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default DocumentImageGallery;
