import { createTheme } from "@mui/material";

export const darkTheme = (isDarkMode) =>
  createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "rgb(208 208 208)", //type of silver
      },
      silverPro: {
        main: "#C0C0C0", //type of silver Pro
      },
      accent: {
        main: "#EEEEEE", //type of Gallery silver
      },
      secondary: {
        main: "#9E0105",
      },
      redCustom: {
        main: "#Df0707",
      },
      success: {
        main: "#5cb85c",
      },
      black: {
        main: "#000",
      },
      whiteCustom: {
        main: "#fff",
      },
      deepGray: {
        main: "#272727",
      },
      btnHover: {
        main: "#0A7CFF", //type of blue
      },
      linkHover: {
        main: "#0000EE", //type of blue dip
      },
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 13, // default font size
      h1: {
        fontSize: 21,
        "@media (max-width: 600px)": {
          fontSize: 28,
        },
      },
      h2: {
        fontSize: 20,
        "@media (max-width: 400px)": {
          fontSize: 27,
        },
      },
      h3: {
        fontSize: 19,
        "@media (max-width: 400px)": {
          fontSize: 16,
        },
      },
      h4: {
        fontSize: 18,
        "@media (max-width: 400px)": {
          fontSize: 15,
        },
      },
      h5: {
        fontSize: 17,
        fontWeight: 700,
        "@media (max-width: 400px)": {
          fontSize: 14,
        },
      },
      h6: {
        fontSize: 16,
        fontWeight: 650,
        "@media (max-width: 400px)": {
          fontSize: 13,
        },
      },
      subtitle1: {
        fontSize: 15,
        fontWeight: 600,
        "@media (max-width: 400px)": {
          fontSize: 12,
        },
      },
      subtitle2: {
        fontSize: 14.5,
        fontWeight: 500,
        "@media (max-width: 400px)": {
          fontSize: 12,
        },
      },
      body1: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.5,
        "@media (max-width: 400px)": {
          fontSize: 11,
        },
      },
      body2: {
        fontSize: 12.5,
        "@media (max-width: 400px)": {
          fontSize: 8,
        },
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            // Default state of label.
            "& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-standard.MuiFormLabel-colorPrimary.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-standard":
              {
                color: isDarkMode ? "white" : "black",
              },

            // On focus state of label (after text is entered into the form field).
            "& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-shrink.MuiInputLabel-standard.MuiFormLabel-colorPrimary.MuiFormLabel-filled.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-shrink.MuiInputLabel-standard":
              {
                color: "#2E98EF",
              },
          },
        },
      },
    },
  });
