// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
// import React from 'react';
// import {View, Text, SafeAreaView} from 'react-native';

// const HomeScreen = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{flex: 1, padding: 16}}>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               fontSize: 20,
//               textAlign: 'center',
//               marginBottom: 16,
//             }}>
//             Example of Splash, Login and Sign Up in React Native
//             {'\n\n'}
//             This is the Home Screen
//           </Text>
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey',
//           }}>
//           Splash, Login and Register Example{'\n'}React Native
//         </Text>
//         <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'grey',
//           }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };
//
// // export default HomeScreen;
// import React from 'react';
// import {View, Text, SafeAreaView} from 'react-native';
// import { Calendar } from 'react-native-big-calendar'
//
//
// const events = [
//   {
//     title: 'Meeting',
//     start: new Date(2020, 1, 11, 10, 0),
//     end: new Date(2020, 1, 11, 10, 30),
//   },
//   {
//     title: 'Coffee break',
//     start: new Date(2020, 1, 11, 15, 45),
//     end: new Date(2020, 1, 11, 16, 30),
//   },
// ]
//
// const HomeScreen = () => {
//   return (
//      <Calendar events={events} height={600} />
//    );
// };
//
// export default HomeScreen;

// import React from 'react';
// import {View, Text, SafeAreaView} from 'react-native';
// import { Calendar } from "react-native-event-week";
//
// const events = [
//   {
//     title: "Important meeting",
//     start: "2022-01-22 14:45",
//     end: "2022-01-22 18:15",
//     backgroundColor: "#41CAC0",
//   },
//   {
//     title: "Coffee break",
//     start: "2022-01-23 06:45",
//     end: "2022-01-23 07:15",
//     backgroundColor: "#41CAC0",
//   },
// ];
//
// export default function App() {
//   return <Calendar events={events} height={600} />;
// }
//
// import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
//
// function App() {
//
//     const [myEvents, setEvents] = React.useState([]);
//
//     React.useEffect(() => {
//         getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
//             setEvents(events);
//         }, 'jsonp');
//     }, []);
//
//     const onEventClick = React.useCallback((event) => {
//         toast({
//             message: event.event.title
//         });
//     }, []);
//
//     const view = React.useMemo(() => {
//         return {
//             schedule: { type: 'week' }
//         };
//     }, []);
//
//     return (
//         <Eventcalendar
//             theme="ios"
//             themeVariant="light"
//             clickToCreate={true}
//             dragToCreate={true}
//             dragToMove={true}
//             dragToResize={true}
//             data={myEvents}
//             view={view}
//             onEventClick={onEventClick}
//        />
//     );
// }

import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { Calendar } from "react-native-big-calendar";

const events = [
  {
      title: 'Meeting',
      start: new Date(2022, 1, 18, 10, 0),
      end: new Date(2022, 1, 18, 10, 30),
    },
    {
      title: 'Coffee break',
      start: new Date(2022, 0, 23, 15, 45),
      end: new Date(2022, 0, 23, 16, 30),
    },
];

export default function HomeScreen() {
  return (

    <Calendar
      events={events}
      height={600}
      swipeEnabled={true}
      mode={'week'}
      />
  );
}
