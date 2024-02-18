import React, { useEffect } from "react";

function DynamicPageTitle({ pageTitle }) {
  useEffect(() => {
    const baseTitle = "DreamEdu Consultancy"; // Base title
    const fullTitle = pageTitle ? `${baseTitle} - ${pageTitle}` : baseTitle;
    document.title = fullTitle; // Update the document title
  }, [pageTitle]);

  return <></>;
}
export default DynamicPageTitle;
