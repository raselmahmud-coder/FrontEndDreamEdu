import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import founderImg from "../../assets/founder.jpg";
import coFounderImg from "../../assets/dream edu about us.jpg";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useSelector } from "react-redux";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import HeadingH4 from "../../globalsComponents/Headings/HeadingH4";
import bgGradient from "../../assets/backgrounds/bgWhiteVector.svg";
import bgGradient1 from "../../assets/backgrounds/wave3.svg";
import "./ribbon.css";

const AboutUsSection1 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  return (
    <Box
      sx={
        {
          // background: isDarkMode ? "" : `url(${bgGradient})`,
          // position: "relative",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }
      }>
      <Container maxWidth="xl" sx={{ pb: { xs: 4, sm: 6, md: 8 } }}>
        <HeadingH2
          marginTop={22}
          marginBottom={1}
          headingH2Text={"About Us"}
          headingH2Icon={PermContactCalendarIcon}
        />
        <Grid
          container
          spacing={{ xs: 1, sm: 4, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            pt: 10,
            pb: 12,
            px: 1,
            justifyContent: "space-between",
            alignItems: "center",
            background: isDarkMode ? "" : `url(${bgGradient1})`,
            // position: "relative",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
          }}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              variant="h5"
              sx={{
                backgroundColor: isDarkMode ? "success.main" : "#8fbe00",
                textAlign: "center",
                color: "whiteCustom.main",
                pt: 3,
              }}
              className="ribbon">
              ENGR. MD SHAHRIAR ISLAM
              <Typography
                component={"span"}
                variant="h6"
                sx={{ textAlign: "center", mb: 1, display: "block" }}>
                Founder of DreamEdu Consultancy
              </Typography>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "justify", lineHeight: 2 }}>
              Md Shahriar Islam, the founder of DreamEdu Consultancy, hails from
              Bangladesh. He holds a diploma in engineering from his home
              country and a bachelor's degree in Mechanical Engineering from
              Southwest Petroleum University in China. Currently, he is pursuing
              a master's degree in the same field at Sichuan University, China.
              <br />
              <br />
              Throughout his academic journey, Md Shahriar has consistently
              impressed, receiving numerous awards in recognition of his
              brilliance. These include the prestigious Chinese Government
              Scholarship (CSC) in 2022, the Belt and Road Initiative
              Scholarship in 2021, and accolades for his volunteer work with the
              Youth Volunteer Association and International Students. His
              dedication extends beyond academics, as evidenced by his
              participation in the Chinese Skills Competition for International
              Students (2020) and the Chinese Classic Competition (2018).
            </Typography>
            <Typography
              variant="h5"
              sx={{
                backgroundColor: isDarkMode ? "success.main" : "#8fbe00",
                textAlign: "center",
                color: "whiteCustom.main",
                pt: 3,
                pb: 1,
                mt: 5,
                mb: 2,
              }}
              className="messageRibbon">
              MESSAGE FROM FOUNDER
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "justify", lineHeight: 2 }}>
              My journey began in 2018 when I got a scholarship to pursue my
              bachelor's degree in China. I was greatly inspired by the dynamic
              culture, state-of-the-art facilities, and wide range of
              educational options. It made me aware of China's enormous
              potential for students like me who want to study abroad.
              Witnessing the growing international interest in studying in
              China, I felt compelled to help others access this life-changing
              opportunity. Initially, I assisted fellow students in securing
              scholarships and navigating the application process. However, I
              soon realized that my individual efforts were not sufficient to
              meet the growing demand. This led to the establishment of DreamEdu
              Consultancy, with the aim of creating a dedicated team to provide
              comprehensive support and guidance to aspiring students.
              <br />
              <br />
              DreamEdu Consultancy's journey began in 2021. Driven by a passion
              for promoting Chinese culture worldwide, I established the
              DreamEdu Foundation just one year later. We believe that everyone
              should have the opportunity to learn Chinese language and culture.
              That's why we offer free Chinese language courses to anyone
              interested in exploring the beauty and richness of Chinese
              traditions. But our mission doesn't stop there. We understand that
              financial constraints can sometimes hold brilliant minds back from
              pursuing their dreams. That's why we have a special program
              dedicated to supporting talented students with limited financial
              means. We work tirelessly to help them secure scholarships to
              study in China, unlocking incredible educational opportunities
              that would otherwise be out of reach.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img
              loading="lazy"
              src={founderImg}
              alt="dream edu founder"
              width={"100%"}
              style={{
                borderRadius: "20% 5px 20% 5px",
                border: "2px solid #Df0707",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, sm: 4, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            pt: 2,
            pb: 4,
            px: 1,
            justifyContent: "space-between",
            alignItems: "center",
            background: isDarkMode ? "" : `url(${bgGradient})`,
            position: "relative",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <Grid item xs={12} sm={6} md={6}>
            <img
              loading="lazy"
              src={coFounderImg}
              alt="dream edu co-founder"
              width={"100%"}
              style={{
                borderRadius: "10% 5px 10% 5px",
                border: "2px solid #Df0707",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              variant="h5"
              sx={{
                backgroundColor: isDarkMode ? "success.main" : "#8fbe00",
                textAlign: "center",
                color: "whiteCustom.main",
                pt: 3,
              }}
              className="ribbon">
              ENGR. MD SAKAYOT HOSEN
              <Typography
                component={"span"}
                variant="h6"
                sx={{ textAlign: "center", mb: 1, display: "block" }}>
                Co-Founder of DreamEdu Consultancy
              </Typography>
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ textAlign: "justify", lineHeight: 2 }}>
              Engr. Md Sakayot Hosen, a native of Bangladesh, has a remarkable
              educational and professional background. He completed his diploma
              course at BIIT, Bugra in 2016, and went on to finish a foundation
              course at SU University, Dhaka, Bangladesh in 2020. Subsequently,
              in 2021, he obtained his IPE from BKEMA, Dhaka, Bangladesh. In
              2022, he successfully completed a Safety Management & Planning
              Course at BRAC, and also acquired his Electrical Engineering Gov
              License from OCEI, Dhaka, Bangladesh. During his time in
              Bangladesh, he co-founded DreamEdu Consultancy with Engr. Md
              Shahriar Islam and currently holds the position of Co-Founder at
              DreamEdu Consultancy.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                backgroundColor: isDarkMode ? "success.main" : "#8fbe00",
                textAlign: "center",
                color: "whiteCustom.main",
                pt: 3,
                pb: 1,
                mt: 5,
                mb: 2,
              }}
              className="messageRibbon">
              MESSAGE FROM CO-FOUNDER
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "justify", lineHeight: 2 }}>
              Looking into the future of education, China offers a diverse range
              of academic opportunities, high-quality research facilities, and a
              rich cultural experience, including tuition and accommodation
              waivers. Bangladeshi students can benefit from the advanced
              technology and infrastructure available at Chinese universities,
              as well as the chance to learn from experienced professors.
              Additionally, studying in China provides an opportunity to immerse
              oneself in a vibrant and diverse cultural environment, which can
              broaden perspectives and enhance global awareness. We also look
              forward to establishing partnerships and nominating branch
              partners with the aim of promoting China's dynamic education
              system and fostering future educational advancements jointly. Best
              wishes to all!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection1;
