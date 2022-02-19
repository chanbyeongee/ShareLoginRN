// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import WeekView from 'react-native-week-view';

const myEvents = [
  {
    id: 1,
    description: 'Event',
    startDate: new Date(2022, 0,24 , 12, 0),
    endDate: new Date(2022, 0, 24, 12, 30),
    color: '#98DFFF',
    // ... more properties if needed,
  },
  // More events...
];

const SubScreen = () => (
  <SafeAreaView style={styles.container}>
  <WeekView
    events={myEvents}
    selectedDate={new Date(2022, 0, 2)}
    numberOfDays={7}
    showTitle={true}
    headerStyle={styles.header}
    eventContainerStyle={styles.eventContainer}
    gridRowStyle={styles.gridRow}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D2D2FF',
    borderColor: '#D2D2FF'
  },
  container: {
    flex: 1,
    backgroundColor: '#D2D2FF',
  },
  gridRow: {
    borderTopWidth: 1,
    borderColor: '#E9EDF0',
  },
})

export default SubScreen;
