// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

const MytubeScreen = (props) => {
  return (
      <View style={{flex: 1, padding: 16}}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Press to Mytube example
          </Text>
          <Button
            title = 'Go Mytube Web'
            onPress = {()=>props.navigation.navigate('MytubeWebView')}
            />
      </View>
  );
};

export default MytubeScreen;
