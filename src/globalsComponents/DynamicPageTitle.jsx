import React, { useEffect } from "react";

function DynamicPageTitle({ pageTitle }) {
  useEffect(() => {
    const baseTitle = "Dream Edu"; // Base title
    const fullTitle = pageTitle ? `${baseTitle} - ${pageTitle}` : baseTitle;
    document.title = fullTitle; // Update the document title
  }, [pageTitle]);

  return <></>;
}
export default DynamicPageTitle;
