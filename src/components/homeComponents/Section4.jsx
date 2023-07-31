import { Avatar, Typography } from "@mui/material";
import React from "react";
import sichuanLogo from "../../assets/sichuan.png"

const Section4 = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", textAlign: "center", mt: "42px" }}>
        Top Universities
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", mt: "12px" }}>
        We have quality partners in variety of destinations around the globe.
      </Typography>
      <Avatar
        sx={{ width: 90, height: 90 }}
        alt="university"
        src={sichuanLogo}
      />
    </>
  );
};

export default Section4;
