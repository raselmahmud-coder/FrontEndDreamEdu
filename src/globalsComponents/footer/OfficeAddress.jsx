import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import { useSelector } from "react-redux";
import { officeInfo } from "../../utils/fakeData";
import HeadingH2 from "../Headings/HeadingH2";
import HeadingH4 from "../Headings/HeadingH4";
import mapIcon from "../../assets/Icon/google-map-icon.svg";

const OfficeAddress = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          pb: { xs: 6, sm: 7, md: 8 },
        }}>
        <HeadingH2
          marginTop={{ xs: 4, sm: 5, md: 6 }}
          headingH2Text={"Our Office Address"}
          headingH2Icon={OtherHousesIcon}
        />
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mb: 7,
          }}>
          {officeInfo.length > 0 &&
            officeInfo.map(({ locationName, phone, fullAddress, mapSrc }) => (
              <Grid item xs={12} sm={6} md={4} key={locationName}>
                <Box
                  sx={{
                    minHeight: "445px",
                    borderRadius: 5,
                    bgcolor: isDarkMode ? "deepGray.main" : "silverPro.main",
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Box
                      component={"img"}
                      loading="lazy"
                      src={mapIcon}
                      alt=""
                      sx={{
                        width: { xs: "35px", sm: "42px", md: "45px" },
                        height: { xs: "35px", sm: "42px", md: "45px" },
                      }}
                    />
                    <HeadingH4 HeadingH4Text={locationName} />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      my: 2,
                      px: 3,
                      color: isDarkMode ? "whiteCustom.main" : "redCustom.main",
                    }}>
                    Address:➡️ {fullAddress}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      my: 2,
                      px: 3,
                      color: isDarkMode ? "whiteCustom.main" : "redCustom.main",
                    }}>
                    Phone Number:📞 {phone}
                  </Typography>

                  <iframe
                    src={mapSrc}
                    width="90%"
                    height="auto"
                    style={{
                      border: "1px solid #fff",
                      borderRadius: "5px",
                      margin: "0px auto",
                      display: "block",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default OfficeAddress;
