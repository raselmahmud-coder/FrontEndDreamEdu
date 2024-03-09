import * as React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";
import { documentGalleryData } from "../../utils/galleryData";

const DocumentImageGallery = () => {
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
      <HeadingH2
        marginTop={{ xs: 8, sm: 12, md: 12 }}
        headingH2Text={"Recent Admission Notice"}
      />
      <ImageList
        sx={{ overflow: "hidden" }}
        gap={44}
        cols={isSmallScreen ? 1 : 4}
        rowHeight={"auto"}>
        {documentGalleryData.map((item) => (
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
      {/* <Grid
        container
        spacing={{ xs: 4, sm: 5, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {documentGalleryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HoverNAnimation scale={"scale(1.05)"}>
              <Box
                sx={{
                  border: "1px solid",
                  borderRadius: 3,
                  boxShadow: 10,
                  bgcolor: "accent.main",
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
      </Grid> */}

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
