import React from "react";
import { Box, Grid, Typography } from "@mui/material";
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
      <HeadingH2
        headingH2Text={"Our Office Address"}
        headingH2Icon={OtherHousesIcon}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          mb: 7,
        }}>
        {officeInfo.length > 0 &&
          officeInfo.map((office) => (
            <Grid item xs={12} sm={6} md={6} key={office.locationName}>
              <Box
                sx={{
                  ml: 1,
                }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <img
                    loading="lazy"
                    src={mapIcon}
                    alt=""
                    style={{
                      width: "65px",
                      height: "65px",
                    }}
                  />
                  <HeadingH4 HeadingH4Text={office.locationName} />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    my: 2,
                    px: 3,
                    borderRadius: "15px",
                    color: "redCustom.main",
                    fontWeight:"bold",
                  }}>
                  {office.fullAddress}
                </Typography>
                <iframe
                  src={office.mapSrc}
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </Box>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default OfficeAddress;
