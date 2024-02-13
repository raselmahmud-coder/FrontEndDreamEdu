import React from "react";
import { LocationOnRounded } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import { useSelector } from "react-redux";
import { officeInfo } from "../../utils/fakeData";

const OfficeAddress = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          sx={{
            mt: { xs: 6, sm: 8, md: 12 },
            mb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 1, sm: 3, md: 6 },
            py: { xs: 1, sm: 3, md: 4 },
            zIndex: 899,
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkMode ? "deepGray.main" : "primary.main",
            color: isDarkMode ? "whiteCustom.main" : "secondary.main",
            borderColor: isDarkMode ? "accent.main" : "secondary.main",
            borderRadius: "25% 0 25% 0",
            border: 1,
            fontWeight: "bold",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
          variant="h2">
          Office Address
          <OtherHousesIcon
            sx={{
              fontSize: { xs: "45px", sm: "60px", md: "75px" },
              ml: { xs: 2, sm: 2, md: 3 },
            }}
          />
        </Typography>
      </Box>
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
                  }}>
                  <LocationOnRounded sx={{ fontSize: 40 }} />
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                    }}>
                    {office.locationName}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    my: 2,
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
