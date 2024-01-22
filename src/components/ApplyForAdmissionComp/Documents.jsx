import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import { useDispatch, useSelector } from "react-redux";
import { admissionProfileCreate3 } from "../../redux/feature/userAdmissionProfile/userAdmissionProfileSlice";
import validateAndRenameFile from "../../utils/fileValidationNRename";

export default function Documents() {
  const initialData = useSelector((state) => state.admission);
  const {
    program,
    passport,
    masters,
    bachelor,
    hsc,
    ssc,
    bankStatement,
    passportSizePhoto,
    nonCriminalCertificate,
    studyPlan,
    recommendationLetters,
    englishProficiencyTest,
  } = initialData;
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Documents list for{" "}
        <span style={{ textTransform: "uppercase" }}>{program}</span>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Passport*
          </Typography>
          {passport && <img src={passport} width={"20%"} alt="Preview" />}
          <Box>
            <Button variant="contained" component="label">
              <DriveFileMoveIcon
                sx={{
                  fontSize: "30px",
                }}
              />
              Upload File
              <input
                required
                type="file"
                onChange={(e) => {
                  const selectedFile = validateAndRenameFile(
                    e.target.files[0],
                    "passport",
                  );
                  if (selectedFile) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile.name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...initialData,
                          passport: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile);
                  }
                }}
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Others/Extra-curricular*
          </Typography>
          {passport && <img src={passport} width={"20%"} alt="Preview" />}
          <Box>
            <Button variant="contained" component="label">
              <DriveFileMoveIcon
                sx={{
                  fontSize: "30px",
                }}
              />
              Upload File
              <input
                required
                type="file"
                onChange={(e) => {
                  const selectedFile = validateAndRenameFile(
                    e.target.files[0],
                    "extra_curricular",
                  );
                  if (selectedFile) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile.name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...initialData,
                          extraCurricular: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile);
                  }
                }}
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Photo 48/33 mm (White background)*
          </Typography>
          {passportSizePhoto && <img src={passportSizePhoto} width={"20%"} />}
          <Box>
            <Button variant="contained" component="label">
              <DriveFileMoveIcon
                sx={{
                  fontSize: "30px",
                }}
              />
              Upload File
              <input
                onChange={(e) => {
                  const selectedFile = validateAndRenameFile(
                    e.target.files[0],
                    "passport size photo",
                  );
                  if (selectedFile) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile.name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...initialData,
                          passportSizePhoto: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile);
                  }
                }}
                required
                type="file"
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
        {(program === "Language" || program === "Bachelor") && (
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Secondary school certificate (SSC) & transcript*
            </Typography>
            {ssc && <img src={ssc} width={"20%"} alt="Preview" />}
            <Box>
              <Button variant="contained" component="label">
                <DriveFileMoveIcon
                  sx={{
                    fontSize: "30px",
                  }}
                />
                Upload File
                <input
                  onChange={(e) => {
                    const selectedFile = validateAndRenameFile(
                      e.target.files[0],
                      "ssc",
                    );
                    if (selectedFile) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        const fileData = {
                          name: selectedFile.name,
                          dataURL: event.target.result,
                        };
                        dispatch(
                          admissionProfileCreate3({
                            ...initialData,
                            ssc: fileData.dataURL,
                          }),
                        );
                      };
                      reader.readAsDataURL(selectedFile);
                    }
                  }}
                  required
                  type="file"
                  hidden
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </Button>
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Police clearance certificate*
          </Typography>
          {nonCriminalCertificate && (
            <img src={nonCriminalCertificate} width={"20%"} alt="Preview" />
          )}
          <Box>
            <Button variant="contained" component="label">
              <DriveFileMoveIcon
                sx={{
                  fontSize: "30px",
                }}
              />
              Upload File
              <input
                onChange={(e) => {
                  const selectedFile = validateAndRenameFile(
                    e.target.files[0],
                    "non criminal certificate",
                  );
                  if (selectedFile) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile.name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...initialData,
                          nonCriminalCertificate: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile);
                  }
                }}
                required
                type="file"
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Bank statement (last 6 months)*
          </Typography>
          {bankStatement && (
            <img src={bankStatement} width={"20%"} alt="Preview" />
          )}
          <Box>
            <Button variant="contained" component="label">
              <DriveFileMoveIcon
                sx={{
                  fontSize: "30px",
                }}
              />
              Upload File
              <input
                onChange={(e) => {
                  const selectedFile = validateAndRenameFile(
                    e.target.files[0],
                    "bank statement",
                  );
                  if (selectedFile) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile.name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...initialData,
                          bankStatement: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile);
                  }
                }}
                required
                type="file"
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Study plan (800 - 1000 words)*
          </Typography>
          {studyPlan && <img src={studyPlan} width={"20%"} alt="Preview" />}
          <Box>
            <Button variant="contained" component="label">
              <DriveFileMoveIcon
                sx={{
                  fontSize: "30px",
                }}
              />
              Upload File
              <input
                onChange={(e) => {
                  const selectedFile = validateAndRenameFile(
                    e.target.files[0],
                    "study plan",
                  );
                  if (selectedFile) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile.name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...initialData,
                          studyPlan: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile);
                  }
                }}
                required
                type="file"
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                IELTS/Any other English proficiency certificate*
              </Typography>
              {englishProficiencyTest && (
                <img src={englishProficiencyTest} width={"20%"} alt="Preview" />
              )}
              <Box>
                <Button variant="contained" component="label">
                  <DriveFileMoveIcon
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                  Upload File
                  <input
                    onChange={(e) => {
                      const selectedFile = validateAndRenameFile(
                        e.target.files[0],
                        "english proficiency test",
                      );
                      if (selectedFile) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const fileData = {
                            name: selectedFile.name,
                            dataURL: event.target.result,
                          };
                          dispatch(
                            admissionProfileCreate3({
                              ...initialData,
                              englishProficiencyTest: fileData.dataURL,
                            }),
                          );
                        };
                        reader.readAsDataURL(selectedFile);
                      }
                    }}
                    required
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png, .pdf"
                  />
                </Button>
              </Box>
            </Grid>
        {(program === "Bachelor" || program === "Masters") && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Higher Secondary (HSC)/Diploma certificate & transcript*
              </Typography>
              {hsc && <img src={hsc} width={"20%"} alt="Preview" />}
              <Box>
                <Button variant="contained" component="label">
                  <DriveFileMoveIcon
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                  Upload File
                  <input
                    onChange={(e) => {
                      const selectedFile = validateAndRenameFile(
                        e.target.files[0],
                        "higher secondary",
                      );
                      if (selectedFile) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const fileData = {
                            name: selectedFile.name,
                            dataURL: event.target.result,
                          };
                          dispatch(
                            admissionProfileCreate3({
                              ...initialData,
                              hsc: fileData.dataURL,
                            }),
                          );
                        };
                        reader.readAsDataURL(selectedFile);
                      }
                    }}
                    required
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png, .pdf"
                  />
                </Button>
              </Box>
            </Grid>
            
          </>
        )}
        {(program === "Masters" || program === "Phd") && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Bachelor's degree certificate & transcript*
              </Typography>
              {bachelor && <img src={bachelor} width={"20%"} alt="Preview" />}
              <Box>
                <Button variant="contained" component="label">
                  <DriveFileMoveIcon
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                  Upload File
                  <input
                    onChange={(e) => {
                      const selectedFile = validateAndRenameFile(
                        e.target.files[0],
                        "Bachelor",
                      );
                      if (selectedFile) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const fileData = {
                            name: selectedFile.name,
                            dataURL: event.target.result,
                          };
                          dispatch(
                            admissionProfileCreate3({
                              ...initialData,
                              bachelor: fileData.dataURL,
                            }),
                          );
                        };
                        reader.readAsDataURL(selectedFile);
                      }
                    }}
                    required
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png, .pdf"
                  />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Two Recommendation Letters*
              </Typography>
              {recommendationLetters && (
                <img src={recommendationLetters} width={"20%"} alt="Preview" />
              )}
              <Box>
                <Button variant="contained" component="label">
                  <DriveFileMoveIcon
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                  Upload File
                  <input
                    onChange={(e) => {
                      const selectedFile = validateAndRenameFile(
                        e.target.files[0],
                        "recommendationLetters",
                      );
                      if (selectedFile) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const fileData = {
                            name: selectedFile.name,
                            dataURL: event.target.result,
                          };
                          dispatch(
                            admissionProfileCreate3({
                              ...initialData,
                              recommendationLetters: fileData.dataURL,
                            }),
                          );
                        };
                        reader.readAsDataURL(selectedFile);
                      }
                    }}
                    required
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png, .pdf"
                  />
                </Button>
              </Box>
            </Grid>
          </>
        )}
        {program === "Phd" && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Master's degree certificate & transcript*
              </Typography>
              {masters && <img src={masters} width={"20%"} alt="Preview" />}
              <Box>
                <Button variant="contained" component="label">
                  <DriveFileMoveIcon
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                  Upload File
                  <input
                    onChange={(e) => {
                      const selectedFile = validateAndRenameFile(
                        e.target.files[0],
                        "Masters",
                      );
                      if (selectedFile) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const fileData = {
                            name: selectedFile.name,
                            dataURL: event.target.result,
                          };
                          dispatch(
                            admissionProfileCreate3({
                              ...initialData,
                              masters: fileData.dataURL,
                            }),
                          );
                        };
                        reader.readAsDataURL(selectedFile);
                      }
                    }}
                    required
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png, .pdf"
                  />
                </Button>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </React.Fragment>
  );
}
