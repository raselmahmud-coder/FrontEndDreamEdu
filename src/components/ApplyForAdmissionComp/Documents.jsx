import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Button, Chip } from "@mui/material";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import { useDispatch, useSelector } from "react-redux";
import { admissionProfileCreate3 } from "../../redux/feature/applyForAdmission/userAdmissionProfileSlice";
import validateAndRenameFile from "../../utils/fileValidationNRename";
import SnackBar from "../../globalsComponents/AlertShowing/SnackBar";

export default function Documents() {
  const { step1, step3 } = useSelector((state) => state.admission);
  const { program } = step1;
  const {
    passportFile,
    photo,
    nonCriminalCertificate,
    studyPlan,
    othersFile,
    ssc,
    hsc,
    bachelor,
    masters,
    bankStatement,
    recommendationLetters,
    englishProficiencyTest,
  } = step3;
  const dispatch = useDispatch();
  const [showError, setShowError] = React.useState("");
  const handleDelete = (fileName) => {
    dispatch(
      admissionProfileCreate3({
        ...step3,
        [fileName]: "",
      }),
    );
  };
  // console.log(showError, "showError");
  return (
    <React.Fragment>
      {showError && (
        <SnackBar setShowError={setShowError} message={showError} />
      )}
      <Typography variant="h6" gutterBottom>
        Documents list for{" "}
        <span style={{ textTransform: "uppercase" }}>{program}</span>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Passport File*
          </Typography>
          {passportFile && (
            <Chip
              sx={{
                mb: "5px",
              }}
              size="small"
              label="File Uploaded"
              variant="outlined"
              onDelete={() => handleDelete("passportFile")}
            />
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
                required={passportFile ? false : true}
                type="file"
                onChange={(e) => {
                  const selectedFile = validateAndRenameFile(
                    e.target.files[0],
                    "passportFile",
                  );
                  if (selectedFile[0]) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile[1].name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...step3,
                          passportFile: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile[1]);
                  } else {
                    setShowError(selectedFile[1]);
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
          Photo (48*33mm, White Background)*
          </Typography>
          {photo && (
            <Chip
              sx={{
                mb: "5px",
              }}
              size="small"
              label="File Uploaded"
              variant="outlined"
              onDelete={() => handleDelete("photo")}
            />
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
                    "passport size photo",
                  );
                  if (selectedFile[0]) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile[1].name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...step3,
                          photo: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile[1]);
                  } else {
                    setShowError(selectedFile[1]);
                  }
                }}
                // required={photo ? false : true}
                type="file"
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Police clearance certificate*
          </Typography>
          {nonCriminalCertificate && (
            <Chip
              sx={{
                mb: "5px",
              }}
              size="small"
              label="File Uploaded"
              variant="outlined"
              onDelete={() => handleDelete("nonCriminalCertificate")}
            />
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
                  if (selectedFile[0]) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile[1].name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...step3,
                          nonCriminalCertificate: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile[1]);
                  } else {
                    setShowError(selectedFile[1]);
                  }
                }}
                required={nonCriminalCertificate ? false : true}
                type="file"
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
          Bank Statements (20,000 CNY or 3000 USD)*
          </Typography>
          {bankStatement && (
            <Chip
              sx={{
                mb: "5px",
              }}
              size="small"
              label="File Uploaded"
              variant="outlined"
              onDelete={() => handleDelete("bankStatement")}
            />
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
                  if (selectedFile[0]) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile[1].name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...step3,
                          bankStatement: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile[1]);
                  } else {
                    setShowError(selectedFile[1]);
                  }
                }}
                required={bankStatement ? false : true}
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
          {studyPlan && (
            <Chip
              sx={{
                mb: "5px",
              }}
              size="small"
              label="File Uploaded"
              variant="outlined"
              onDelete={() => handleDelete("studyPlan")}
            />
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
                    "study plan",
                  );
                  if (selectedFile[0]) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile[1].name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...step3,
                          studyPlan: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile[1]);
                  } else {
                    setShowError(selectedFile[1]);
                  }
                }}
                required={studyPlan ? false : true}
                type="file"
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            IELTS/Any English proficiency certificate*
          </Typography>
          {englishProficiencyTest && (
            <Chip
              sx={{
                mb: "5px",
              }}
              size="small"
              label="File Uploaded"
              variant="outlined"
              onDelete={() => handleDelete("englishProficiencyTest")}
            />
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
                  if (selectedFile[0]) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile[1].name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...step3,
                          englishProficiencyTest: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile[1]);
                  } else {
                    setShowError(selectedFile[1]);
                  }
                }}
                required={englishProficiencyTest ? false : true}
                type="file"
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
       
        {["Bachelor", "Masters"].includes(program) && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Higher Secondary (HSC)/Diploma certificate & transcript*
              </Typography>
              {hsc && (
                <Chip
                  sx={{
                    mb: "5px",
                  }}
                  size="small"
                  label="File Uploaded"
                  variant="outlined"
                  onDelete={() => handleDelete("hsc")}
                />
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
                        "higher secondary",
                      );
                      if (selectedFile[0]) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const fileData = {
                            name: selectedFile[1].name,
                            dataURL: event.target.result,
                          };
                          dispatch(
                            admissionProfileCreate3({
                              ...step3,
                              hsc: fileData.dataURL,
                            }),
                          );
                        };
                        reader.readAsDataURL(selectedFile[1]);
                      } else {
                        setShowError(selectedFile[1]);
                      }
                    }}
                    required={hsc ? false : true}
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png, .pdf"
                  />
                </Button>
              </Box>
            </Grid>
          </>
        )}
        {["Language", "Bachelor", "Diploma"].includes(program) && (
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Secondary school certificate (SSC) & transcript*
            </Typography>
            {ssc && (
              <Chip
                sx={{
                  mb: "5px",
                }}
                size="small"
                label="File Uploaded"
                variant="outlined"
                onDelete={() => handleDelete("ssc")}
              />
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
                      "ssc",
                    );
                    if (selectedFile[0]) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        const fileData = {
                          name: selectedFile[1].name,
                          dataURL: event.target.result,
                        };
                        dispatch(
                          admissionProfileCreate3({
                            ...step3,
                            ssc: fileData.dataURL,
                          }),
                        );
                      };
                      reader.readAsDataURL(selectedFile[1]);
                    } else {
                      setShowError(selectedFile[1]);
                    }
                  }}
                  required={ssc ? false : true}
                  type="file"
                  hidden
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </Button>
            </Box>
          </Grid>
        )}
        {["Masters", "Phd"].includes(program) && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Bachelor's degree certificate & transcript*
              </Typography>
              {bachelor && (
                <Chip
                  sx={{
                    mb: "5px",
                  }}
                  size="small"
                  label="File Uploaded"
                  variant="outlined"
                  onDelete={() => handleDelete("bachelor")}
                />
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
                        "Bachelor",
                      );
                      if (selectedFile[0]) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const fileData = {
                            name: selectedFile[1].name,
                            dataURL: event.target.result,
                          };
                          dispatch(
                            admissionProfileCreate3({
                              ...step3,
                              bachelor: fileData.dataURL,
                            }),
                          );
                        };
                        reader.readAsDataURL(selectedFile[1]);
                      } else {
                        setShowError(selectedFile[1]);
                      }
                    }}
                    required={bachelor ? false : true}
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
                <Chip
                  sx={{
                    mb: "5px",
                  }}
                  size="small"
                  label="File Uploaded"
                  variant="outlined"
                  onDelete={() => handleDelete("recommendationLetters")}
                />
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
                      if (selectedFile[0]) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const fileData = {
                            name: selectedFile[1].name,
                            dataURL: event.target.result,
                          };
                          dispatch(
                            admissionProfileCreate3({
                              ...step3,
                              recommendationLetters: fileData.dataURL,
                            }),
                          );
                        };
                        reader.readAsDataURL(selectedFile[1]);
                      } else {
                        setShowError(selectedFile[1]);
                      }
                    }}
                    required={recommendationLetters ? false : true}
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png, .pdf"
                  />
                </Button>
              </Box>
            </Grid>
          </>
        )}
        {["Phd"].includes(program) && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                Master's degree certificate & transcript*
              </Typography>
              {masters && (
                <Chip
                  sx={{
                    mb: "5px",
                  }}
                  size="small"
                  label="File Uploaded"
                  variant="outlined"
                  onDelete={() => handleDelete("masters")}
                />
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
                        "Masters",
                      );
                      if (selectedFile[0]) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const fileData = {
                            name: selectedFile[1].name,
                            dataURL: event.target.result,
                          };
                          dispatch(
                            admissionProfileCreate3({
                              ...step3,
                              masters: fileData.dataURL,
                            }),
                          );
                        };
                        reader.readAsDataURL(selectedFile[1]);
                      } else {
                        setShowError(selectedFile[1]);
                      }
                    }}
                    required={masters ? false : true}
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png, .pdf"
                  />
                </Button>
              </Box>
            </Grid>
          </>
        )}
         <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
          Others (Extra-curricular) 
          </Typography>
          {othersFile && (
            <Chip
              sx={{
                mb: "5px",
              }}
              size="small"
              label="File Uploaded"
              variant="outlined"
              onDelete={() => handleDelete("othersFile")}
            />
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
                // required={othersFile ? false : true}
                type="file"
                onChange={(e) => {
                  const selectedFile = validateAndRenameFile(
                    e.target.files[0],
                    "othersFile",
                  );
                  if (selectedFile[0]) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const fileData = {
                        name: selectedFile[1].name,
                        dataURL: event.target.result,
                      };
                      dispatch(
                        admissionProfileCreate3({
                          ...step3,
                          othersFile: fileData.dataURL,
                        }),
                      );
                    };
                    reader.readAsDataURL(selectedFile[1]);
                  } else {
                    setShowError(selectedFile[1]);
                  }
                }}
                hidden
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
