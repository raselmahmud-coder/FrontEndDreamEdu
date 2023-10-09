import React, { useEffect } from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const FbMessenger = () => {

    return (
        <FacebookProvider appId="279348328035520" chatSupport>
        <CustomChat pageId="1012236045619075" minimized={true}/>
      </FacebookProvider>   
    );
};

export default FbMessenger;
