// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {WebView} from 'react-native-webview';

const MytubeWebView= () => {
  return (
    <WebView
        source={{uri: 'http://10.0.2.2:3001'}}
        //source={{uri: 'https://mypage.com/index.php', headers: '---', body: '---',method:'POST'}}
        style={{marginTop: 20}}
      />

  );
};

export default MytubeWebView;
