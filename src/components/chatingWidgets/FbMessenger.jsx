import React, { useEffect } from "react";
import { CustomChat, FacebookProvider } from "react-facebook";

const FbMessenger = () => {
  return (
    <FacebookProvider appId="1097637678258718" chatSupport>
      {/* 
        appId:279348328035520
        pageId:1012236045619075
        */}
      <CustomChat pageId="1012236045619075" minimized={true} />
    </FacebookProvider>
  );
};

export default FbMessenger;
