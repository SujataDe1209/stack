/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, { useState } from 'react';
import Main from './View';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const App = () => {
  return(
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  )
}


export default App;

























































// const App = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date: any) => {
//     console.warn("A date has been picked: ", date);
//     hideDatePicker();
//   };


//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <TouchableOpacity
//         style={{width:'50%',
//         height:50,
//         borderWidth:0.5,
//         borderRadius:20,
//         justifyContent:'center',
//         alignItems:'center'
         
//         }}>
//         <Text> Select Date</Text>
//       </TouchableOpacity >
//       <TouchableOpacity  style={{width:'50%',
//         height:50,margin:10,
//         borderWidth:0.5,
//         borderRadius:20,
//         justifyContent:'center',
//         alignItems:'center'
//         }}>
//         <Text> Select Time</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;
