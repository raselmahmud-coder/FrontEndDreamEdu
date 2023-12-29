import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FrequentlyAskQuestion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            How do I apply for a student visa to study in China?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To apply for a student visa (X visa) for China, you typically need
            to first receive an acceptance letter from a Chinese university.
            Once you have the letter, you can submit your visa application to
            the Chinese embassy or consulate in your home country. Make sure to
            check the specific requirements and procedures, as they may vary.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            What are the popular universities in China for international
            students?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            China has many reputable universities for international students.
            Some popular choices include Peking University, Tsinghua University,
            Fudan University, Zhejiang University, and Shanghai Jiao Tong
            University. However, the best university for you depends on your
            field of study and personal preferences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Are there scholarships available for international students in
            China?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, China offers various scholarships to international students,
            such as the Chinese Government Scholarship, Confucius Institute
            Scholarship, and scholarships provided by individual universities.
            Eligibility criteria and application procedures vary, so it's
            important to research and apply for scholarships well in advance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            What is the cost of living for international students in China?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The cost of living in China for international students can vary
            depending on the city and lifestyle. Generally, it is more
            affordable than in many Western countries. Expenses include
            accommodation, food, transportation, and miscellaneous items. Tier 1
            cities like Beijing and Shanghai tend to have higher living costs
            compared to smaller cities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            Is it necessary to learn Mandarin before studying in China?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            While many universities offer programs in English, learning Mandarin
            can enhance your overall experience and communication with locals.
            It's not always a strict requirement, but having basic Mandarin
            language skills can be beneficial for daily life, cultural
            integration, and navigating your surroundings. Some degree programs
            may also have language prerequisites.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
