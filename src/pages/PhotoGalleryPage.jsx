import React from "react";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HeadingH2 from "../globalsComponents/Headings/HeadingH2";
import HoverNAnimation from "../globalsComponents/HoverNAnimation/HoverNAnimation";
import { documentGalleryData, photoGalleryData } from "../utils/galleryData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const PhotoGalleryPage = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <DynamicPageTitle pageTitle="Gallery Page" />
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 12, md: 10 },
        }}>
        <HeadingH2
          marginBottom={{ xs: 2, sm: 3, md: 4 }}
          headingH2Text={"DreamEdu Photo Gallery"}
        />
        <Typography gutterBottom variant="body1" sx={{ textAlign: "justify" }}>
          DreamEdu's Photo Gallery page is a captivating visual representation
          of the incredible study abroad experiences they have facilitated over
          the years. With a collection of stunning photographs from various
          destinations around the world, this page offers a glimpse into the
          diverse cultures, landscapes, and learning environments that students
          can immerse themselves in through DreamEdu's programs. From vibrant
          cityscapes to breathtaking natural wonders, the images on the Photo
          Gallery page showcase the beauty and richness of the study abroad
          destinations, inspiring students to explore new horizons and broaden
          their perspectives. Whether it's capturing the excitement of classroom
          discussions or the joy of cultural festivals, DreamEdu's Photo Gallery
          page is a testament to the transformative power of studying abroad and
          serves as a source of inspiration for future students embarking on
          their own educational adventures.
        </Typography>
        <ImageList
          sx={{ overflow: "hidden" }}
          gap={44}
          cols={isSmallScreen ? 1 : 4}
          rowHeight={"auto"}>
          {photoGalleryData.map((item) => (
            <ImageListItem
              sx={{
                border: "1px solid",
                borderRadius: 1,
                boxShadow: "7px 9px 6px 2px #C0C0C0",
                cursor: "pointer",
                "&:hover": {
                  transition: "all 0.5s",
                  transform: "scale(1.05)",
                },
              }}
              key={item.img}
              onClick={() => handleImageClick(item)}>
              <img
                style={{ borderRadius: "5px" }}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Full-screen image dialog */}

        <Dialog open={open} onClose={handleClose} fullWidth>
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
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper">
              <SwiperSlide>
                <img
                  loading="lazy"
                  src={selectedImage && selectedImage.img}
                  alt={selectedImage && selectedImage.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
              {photoGalleryData.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={item.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </DialogContent>
        </Dialog>
      </Container>
    </>
  );
};

export default PhotoGalleryPage;
