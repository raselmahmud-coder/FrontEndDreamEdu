import React, { useEffect, useState } from "react";
import SnackBar from "../../globalsComponents/AlertShowing/SnackBar";
import LazyLoading from "../../globalsComponents/LazyLoading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/feature/applyForAdmission/userAdmissionProfileSlice";

const DefaultComponent = ({ isError, isLoading, isSuccess }) => {
  const [readyToShow, setReadyToShow] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      setReadyToShow("");
      setReadyToShow("There is an error");
    } else if (isSuccess) {
      setReadyToShow("");
      setReadyToShow("You have successfully submitted");
      dispatch(reset());
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [isError, isLoading, isSuccess]);
  return (
    <>
      {isLoading ? (
        <LazyLoading />
      ) : (
        <SnackBar setShowError={setReadyToShow} message={readyToShow} />
      )}
    </>
  );
};

export default DefaultComponent;
