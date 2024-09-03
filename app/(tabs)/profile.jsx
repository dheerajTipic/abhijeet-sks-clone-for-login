
// // import React, { useState } from 'react';
// // import { View, Text,  Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import { useRouter } from 'expo-router';
// // import { TextInput } from "@react-native-material/core";

// // const profile = () => {
// //   const [customerName, setCustomerName] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [contactPerson, setContactPerson] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [selectedOption, setSelectedOption] = useState('');
// //   const [selectedOption2, setSelectedOption2] = useState('');
// //   const [otherCall, setOtherCall] = useState('');
// //   const [modelNo, setModelNo] = useState('');
// //   const [serialNo, setSerialNo] = useState('');
// //   const [equipmentName, setEquipmentName] = useState('');
// //   const [error, setError] = useState('');

// //   const router = useRouter();

// //   const handleSubmit = () => {
// //     if (customerName.trim() === '' 
// //     // ||
// //         // address.trim() === '' ||
// //         // contactPerson.trim() === '' ||
// //         // email.trim() === '' ||
// //         // selectedOption.trim() === '' ||
// //         // selectedOption2.trim() === '' ||
// //         // modelNo.trim() === '' ||
// //         // serialNo.trim() === '' ||
// //         // equipmentName.trim() === ''
// //       ) {
         
// //       setError('All fields are required!');
// //     } else {
// //       setError('');
// //       router.push('/service_info');
// //       setCustomerName('');
// //       setAddress('');
// //       setContactPerson('');
// //       setEmail('');
// //       setSelectedOption('');
// //       setSelectedOption2('');
// //       setOtherCall('');
// //       setModelNo('');
// //       setSerialNo('');
// //       setEquipmentName('');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Image 
// //         source={require('../../assets/images/logo.png')}
// //         style={styles.image}
// //       />
// //       <Text style={styles.logoHeading}>SMART KITCHEN SOLUTION</Text>
// //       <View style={styles.Line1} />
// //       {error ? <Text style={styles.errorText}>{error}</Text> : null}
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
        

// //        <TextInput variant="outlined" label="Customer name" style={{ margin: 15}}
// //        value={customerName}
// //        onChangeText={setCustomerName} />

// //        <TextInput variant="outlined" label="Address" style={{ margin: 15}} 
// //         value={address}
// //         onChangeText={setAddress} 
// //  />

// //        <TextInput variant="outlined" label="Contact person" style={{ margin: 15 }}
// //         value={contactPerson}
// //         onChangeText={setContactPerson}  />

// //        <TextInput variant="outlined" label="Email" style={{ margin:15 }} 
// //        value={email}
// //        onChangeText={setEmail} 

// //        />

// //         <View style={styles.pickerContainer}>
// //           {/* <Text style={styles.label}>Select Type Of Call:</Text> */}
// //           <Picker
// //             selectedValue={selectedOption}
// //             style={styles.picker}
// //             onValueChange={(itemValue) => setSelectedOption(itemValue)}
// //           >
// //             <Picker.Item label="Select Type of Call" value="option1" />
// //             <Picker.Item label="Breakdown" value="option2" />
// //             <Picker.Item label="PPM" value="option3" />
// //             <Picker.Item label="Installation" value="option4" />
// //             <Picker.Item label="Inspection" value="option5" />
// //             <Picker.Item label="Other" value="option6" />
// //           </Picker>

// //           {selectedOption === 'option6' && (
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Enter Type of call"
// //               value={otherCall}
// //               onChangeText={setOtherCall}
// //             />
// //           )}

// //           {/* <Text style={styles.label}>Select Location:</Text> */}
// //           <Picker
// //             selectedValue={selectedOption2}
// //             style={styles.picker}
// //             onValueChange={(itemValue) => setSelectedOption2(itemValue)}
// //           >
// //             <Picker.Item label="Select Location" value="optiona1" />
// //             <Picker.Item label="Smart Kitchen" value="optiona2" />
// //             <Picker.Item label="Pantry" value="optiona3" />
// //             <Picker.Item label="Gym" value="optiona4" />
// //             <Picker.Item label="Other" value="optiona5" />
// //           </Picker>
// //         </View>

// //         <TextInput variant="outlined" label="Model no:" style={{ margin: 15 }}
// //          value={modelNo}
// //          onChangeText={setModelNo}
// //        />


// //         <TextInput variant="outlined" label="Serial no" style={{ margin: 15 }} 
// //         value={serialNo}
// //         onChangeText={setSerialNo}
// //       />

// // <TextInput variant="outlined" label="Equipment name" style={{ margin: 15 }} 
// // value={equipmentName}
// // onChangeText={setEquipmentName}
// // />

// //         <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
// //           <Text style={styles.buttonText}>Save And Next</Text>
// //           <Icon name="arrow-forward" size={30} color="#fff" style={styles.icon} />
// //         </TouchableOpacity>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 5,
// //     paddingTop: 30,
// //     backgroundColor: '#f5f5f5',
// //   },
 
  
 
// //   pickerContainer: {
// //     marginVertical: 5,
// //     marginBottom: 16,
// //     flex: 1,
// //     justifyContent: 'center',
    
// //   },
// //   picker: {
// //     borderColor: '#ccc',
// //     borderWidth: 2,
// //     borderRadius: 50,  // Rounded corners
// //     backgroundColor: '#fff',
// //     paddingHorizontal: 10,
// //     height: 48,
// //     justifyContent: 'center',
// //     elevation: 3,
// //     margin: 9,
// //     marginBottom: 15,
// //     marginHorizontal: 15,
// //   },
// //   image: {
// //     width: '40%',
// //     height: 40,
// //     marginBottom: 15,
// //     marginTop: 20,
// //     alignSelf: 'center',
// //   },
// //   customButton: {
// //     backgroundColor: 'gray',
// //     paddingVertical: 5,
// //     paddingHorizontal: 20,
// //     borderRadius: 8,
// //     borderWidth: 2,
// //     borderColor: 'black',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //     marginHorizontal: 70,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   Line1: {
// //     width: '100%',
// //     height: 2,
// //     backgroundColor: 'black',
// //     marginVertical: 10,
// //   },
// //   logoHeading: {
// //     fontSize: 18,
// //     marginBottom: 8,
// //     fontWeight: 'bold',
// //     alignSelf: 'center',
// // },
// //     errorText: {
// //         color: 'red',
// //         marginBottom: 10,
// //       },
  
  
// // });

// // export default profile;


// // import React, { useState } from 'react';
// // import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
// // import { Button } from '@react-native-material/core';

// // export default function CustomPicker() {
// //   const [selectedOption, setSelectedOption] = useState("Select Remark");
// //   const [modalVisible, setModalVisible] = useState(false);

// //   const options = [
// //     { label: 'Select Remark', value: 'option1' },
// //     { label: 'Working Fully', value: 'option2' },
// //     { label: 'Working Moderately', value: 'option3' },
// //     { label: 'Working', value: 'option4' },
// //   ];

// //   const handleSelect = (itemValue) => {
// //     setSelectedOption(itemValue);
// //     setModalVisible(false);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.pickerButton}>
// //         <Text style={styles.pickerText}>{selectedOption}</Text>
// //       </TouchableOpacity>

// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={() => setModalVisible(false)}
// //       >
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
// //             {options.map((option, index) => (
// //               <TouchableOpacity
// //                 key={index}
// //                 onPress={() => handleSelect(option.label)}
// //                 style={styles.optionButton}
// //               >
// //                 <Text style={styles.optionText}>{option.label}</Text>
// //               </TouchableOpacity>
// //             ))}
// //             <Button
// //               title="Close"
// //               onPress={() => setModalVisible(false)}
// //               style={styles.closeButton}
// //             />
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 16,
// //   },
// //   pickerButton: {
// //     backgroundColor: '#f0f0f0',
// //     padding: 15,
// //     borderRadius: 8,
// //     elevation: 2,
// //   },
// //   pickerText: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContent: {
// //     margin: 20,
// //     backgroundColor: 'white',
// //     borderRadius: 8,
// //     padding: 20,
// //     elevation: 5,
// //   },
// //   optionButton: {
// //     paddingVertical: 15,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   optionText: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   closeButton: {
// //     marginTop: 20,
// //   },
// // });

// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Button, Dialog, DialogHeader, DialogContent, DialogActions, TextInput, PortalProvider } from '@react-native-material/core';

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   const handleOpenDialog = () => {
//     setVisible(true);
//   };

//   const handleCloseDialog = () => {
//     setVisible(false);
//   };

//   return (
//     <PortalProvider>
//       <View style={styles.container}>
//         <Button title="Open Dialog" onPress={handleOpenDialog} />

//         <Dialog visible={visible} onDismiss={handleCloseDialog}>
//           <DialogHeader title="Customer Information" />
//           <DialogContent>
//             <TextInput label="Name" variant="outlined" style={[styles.input]} />
//             <TextInput label="Address" variant="outlined" style={[styles.input]} />
//             <TextInput label="Phone Number" variant="outlined" style={[styles.input]} />
//           </DialogContent>
//           <DialogActions>
//             <Button title="Cancel" compact onPress={handleCloseDialog} />
//             <Button title="Submit" compact onPress={handleCloseDialog} />
//           </DialogActions>
//         </Dialog>
//       </View>
//     </PortalProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     marginBottom: 16,
//   },
// });

// export default App;


import React, { useState } from "react";
import {
  Provider,
  Stack,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  TextInput,
} from "@react-native-material/core";
import Picker from "react-native-picker-select";
import {  View } from "react-native-web";
import { router } from "expo-router";
import { ScrollView} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
    const [contactPerson, setContactPerson] = useState('');
     const [email, setEmail] = useState('');
     const [otherCall, setOtherCall] = useState('');
     const [selectedOption, setSelectedOption] = useState('');
 const [selectedOption2, setSelectedOption2] = useState('');
 const [error, setError] = useState('');

 const handleSubmit = () => {
      if (customerName.trim() === '' ||
       
          address.trim() === '' ||
           contactPerson.trim() === '' ||
           email.trim() === '' 
         
        ) {
           
        setError('All fields are required!');
      } else {
        setError('');
        router.push('/service_info');
        setCustomerName('');
        setAddress('');
        setContactPerson('');
        setEmail('');
      
      }
    };


  return (
    <>
      <Button
        title="New Customer"
        style={{ margin:60 }}
        onPress={() => setVisible(true)}
      />
      <Dialog style={{borderRadius: 20}} visible={visible} onDismiss={() => setVisible(false)}>
      <ScrollView>
        <DialogHeader title="         New Customer"style={{alignSelf:'center'}} />
        {error ? <Text style={{alignSelf:'center',color: 'red',}} >{error}</Text> : null}
        <DialogContent>
          <Stack spacing={2}>
           
            <TextInput variant="outlined" label="Customer name" style={{ margin: 15}}
      value={customerName}
       onChangeText={setCustomerName} />
        <TextInput variant="outlined" label="Address" style={{ margin: 15}} 
         value={address}
         onChangeText={setAddress} 
  />

        <TextInput variant="outlined" label="Contact person" style={{ margin: 15 }}
         value={contactPerson}
       onChangeText={setContactPerson}  />

        <TextInput variant="outlined" label="Email" style={{ margin:15 }} 
        value={email}
       onChangeText={setEmail} 
       
       />
       <Button
       title="Save"
       compact
       variant="text"
       onPress={handleSubmit} />
        
     
      
             
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
       </ScrollView>
      </Dialog>
    </>
  );
};

const AppProvider = () => (
  <Provider>
    <App />
  </Provider>
);

export default AppProvider;
