import React from "react";
import { Box } from "@mui/material";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MembersCard from "./MembersCard";
import {
  useGetAdvisoryInfoQuery,
  useGetBranchManagerInfoQuery,
  useGetOperationInfoQuery,
} from "../../redux/feature/employee/EmployeeAPI";

const AboutUsSection2 = () => {
  const {
    data: advisory,
    isError: advisoryError,
    isLoading: advisoryLoading,
  } = useGetAdvisoryInfoQuery();
  const {
    data: operation,
    isError: operationError,
    isLoading: operationLoading,
  } = useGetOperationInfoQuery();
  const {
    data: branchManager,
    isError: branchManagerError,
    isLoading: branchManagerLoading,
  } = useGetBranchManagerInfoQuery();
  return (
    <Box component={"section"}>
      <HeadingH2
        headingH2Text={"MEET OUR TEAM"}
        headingH2Icon={Diversity3Icon}
      />
      <MembersCard
        positionTitle={"ADVISORY"}
        team={advisory?.teammember}
        isError={advisoryError}
        isLoading={advisoryLoading}
      />
      <MembersCard
        positionTitle={"OPERATION"}
        team={operation?.teammember}
        isError={operationError}
        isLoading={operationLoading}
      />
      <MembersCard
        positionTitle={"BRANCH MANAGER"}
        team={branchManager?.teammember}
        isError={branchManagerError}
        isLoading={branchManagerLoading}
      />
    </Box>
  );
};

export default AboutUsSection2;
