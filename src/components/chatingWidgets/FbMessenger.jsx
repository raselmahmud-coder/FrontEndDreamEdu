import React from "react";
import { CustomChat, FacebookProvider } from "react-facebook";

const FbMessenger = () => {
  return (
    <FacebookProvider appId="1097637678258718" chatSupport>
      <CustomChat pageId="109496148576767" minimized={true.toString()} />
    </FacebookProvider>
  );
};

export default FbMessenger;
