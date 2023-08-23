import React from "react";
import { useParams } from "react-router-dom";
import { useGetUniversityQuery } from "../../features/Universities/universitiesAPI";
import MainFeaturedPost from "../../components/universityComponents/MainFeaturePost";
import ErrorShow from "../../globals/ErrorShow";
import { Box, CircularProgress } from "@mui/material";

const UniversityDetailPage = () => {
  const { id } = useParams() || {};
  const {
    isLoading: getPostLoading,
    error: getPostError,
    data: university,
  } = useGetUniversityQuery(
    { id: id },
    {
      refetchOnMountOrArgChange: true,
      skip: !id,
    },
  );
  let content;
  if (getPostLoading) {
    content = (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  } else if (getPostError) {
    content = <ErrorShow errorData={getPostError.data.detail} />;
  } else {
    content = <MainFeaturedPost university={university} />;
  }

  return <>{content}</>;
};

export default UniversityDetailPage;
