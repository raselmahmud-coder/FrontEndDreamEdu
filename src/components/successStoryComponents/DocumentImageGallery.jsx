import * as React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
import img17 from "../../assets/documents/ (16).jpg";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";

const DocumentImageGallery = () => {
  const itemData = [
    {
      img: img1,
      title: "ADMISSION NOTICE",
    },
    {
      img: img2,
      title: "ADMISSION NOTICE",
    },
    {
      img: img3,
      title: "ADMISSION NOTICE",
    },
    {
      img: img4,
      title: "ADMISSION NOTICE",
    },
    {
      img: img5,
      title: "ADMISSION NOTICE",
    },
    {
      img: img6,
      title: "ADMISSION NOTICE",
    },
    {
      img: img7,
      title: "ADMISSION NOTICE",
    },
    {
      img: img8,
      title: "ADMISSION NOTICE",
    },
    {
      img: img9,
      title: "ADMISSION NOTICE",
    },
    {
      img: img10,
      title: "ADMISSION NOTICE",
    },
    {
      img: img11,
      title: "ADMISSION NOTICE",
    },
    {
      img: img12,
      title: "ADMISSION NOTICE",
    },
    {
      img: img13,
      title: "ADMISSION NOTICE",
    },
    {
      img: img14,
      title: "ADMISSION NOTICE",
    },
    {
      img: img15,
      title: "ADMISSION NOTICE",
    },
    {
      img: img16,
      title: "ADMISSION NOTICE",
    },
    {
      img: img17,
      title: "ADMISSION NOTICE",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HeadingH2
        marginTop={{ xs: 8, sm: 12, md: 12 }}
        headingH2Text={"Recent Admission Notice"}
      />

      <Grid
        container
        spacing={{ xs: 4, sm: 5, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {itemData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HoverNAnimation scale={"scale(1.05)"}>
              <Box
                sx={{
                  border: "1px solid",
                  borderRadius: 3,
                  boxShadow: 10,
                  bgcolor:"accent.main",
                  m: 1,
                  cursor: "pointer",
                  minHeight: { md: "720px" },
                }}
                onClick={() => handleImageClick(item)}>
                <Box
                  component="img"
                  sx={{
                    borderRadius: 3,
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </Box>
            </HoverNAnimation>
          </Grid>
        ))}
      </Grid>

      {/* Full-screen image dialog */}

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close">
            <CloseIcon />
          </IconButton>
          <DialogTitle>{selectedImage && selectedImage.title}</DialogTitle>
        </Toolbar>
        <DialogContent>
          <img
            src={selectedImage && selectedImage.img}
            alt={selectedImage && selectedImage.title}
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DocumentImageGallery;
