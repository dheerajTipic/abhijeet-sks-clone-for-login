import React, { useState } from 'react';
import { View, Text,  Button, StyleSheet,  ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { TextInput,Provider, Dialog,DialogHeader, DialogContent,DialogActions, } from "@react-native-material/core";

const NewCustomer = () => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [otherCall, setOtherCall] = useState('');
 
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);
  

  const router = useRouter();

  const handleSubmit = () => {
    if (customerName.trim() === '' ||
       address.trim() === '' ||
        contactPerson.trim() === '' ||
        email.trim() === '' ||
        selectedOption.trim() === '' ||
        selectedOption2.trim() === '' 
        
      ) {
         
      setError('All fields are required!');
    } else {
      setError('');
     // router.push('/service_info');
      setCustomerName('');
      setAddress('');
      setContactPerson('');
      setEmail('');
      setSelectedOption('');
      setSelectedOption2('');
      setOtherCall('');
     
    }
  };

  return (
    <>
  <Button
        title="New Customer"
        style={{ margin: 16 }}
        onPress={() => setVisible(true)}
      />
      
      <Dialog visible={visible} onDismiss={() => setVisible(false)} >
        <DialogHeader title="New Customer" />
        
        
  <ScrollView contentContainerStyle={styles.scrollContainer}>
  <DialogContent>

       <TextInput variant="outlined" label="Customer name" style={{ margin: 10 }}
       value={customerName}
       onChangeText={setCustomerName} />

       <TextInput variant="outlined" label="Address" style={{ margin: 10}} 
        value={address}
        onChangeText={setAddress} 
 />

       <TextInput variant="outlined" label="Contact person" style={{ margin: 10 }}
        value={contactPerson}
        onChangeText={setContactPerson}  />

       <TextInput variant="outlined" label="Email" style={{ margin:10 }} 
       value={email}
       onChangeText={setEmail} 

       />

     
          { <Text style={styles.label}>Select Type Of Call:</Text> }
          <Picker
            selectedValue={selectedOption}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOption(itemValue)}
          >
            <Picker.Item label="Select Type of Call" value="option1" />
            <Picker.Item label="Breakdown" value="option2" />
            <Picker.Item label="PPM" value="option3" />
            <Picker.Item label="Installation" value="option4" />
            <Picker.Item label="Inspection" value="option5" />
            <Picker.Item label="Other" value="option6" />
          </Picker>

          {selectedOption === 'option6' && (
            <TextInput
              style={styles.input}
              placeholder="Enter Type of call"
              value={otherCall}
              onChangeText={setOtherCall}
            />
          )}

          { <Text style={styles.label}>Select Location:</Text> }
          <Picker
            selectedValue={selectedOption2}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOption2(itemValue)}
          >
            <Picker.Item label="Select Location" value="optiona1" />
            <Picker.Item label="Smart Kitchen" value="optiona2" />
            <Picker.Item label="Pantry" value="optiona3" />
            <Picker.Item label="Gym" value="optiona4" />
            <Picker.Item label="Other" value="optiona5" />
          </Picker>
       

      


<TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
         
        </TouchableOpacity>
         </DialogContent>
      </ScrollView>
     
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
      </Dialog>
      </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 10,
   // backgroundColor: '#f5f5f5',
    
  },
  dialog: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 40,
    padding: 20,
  },
  
 
  pickerContainer: {
    marginVertical: 5,
    marginBottom: 16,
    flex: 1,
    justifyContent: 'center',
    
  },
  picker: {
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 50,  // Rounded corners
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 48,
    justifyContent: 'center',
    elevation: 3,
    margin: 9,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  
  customButton: {
  backgroundColor: '#4A4A4A', // Sleek, neutral gray background
  paddingVertical: 10,        // Increased padding for comfort
  paddingHorizontal: 25,      // Balanced padding for touch target
  borderRadius: 12,           // Softer, more modern rounded corners
  borderWidth: 1,             // Thin border for a clean look
  borderColor: '#2E2E2E',     // Slightly lighter black for subtle contrast
  alignItems: 'center',
  marginBottom: 15,           // Reduced margin for tighter layout
  marginHorizontal: 50,       // Optimized for various screen sizes
  
  // Strong shadow effect
  shadowColor: '#000000',     // Pure black for a deep shadow
  shadowOffset: { width: 0, height: 10 }, // Larger vertical offset for dramatic depth
  shadowOpacity: 0.,         // High opacity for a bold shadow
  shadowRadius: 15,           // Larger blur radius for a wide, soft shadow
  elevation: 5,              // High elevation for a strong shadow on Android
},
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Line1: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  logoHeading: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
},
    errorText: {
        color: 'red',
        marginBottom: 10,
      },
      dialog1: {
        borderRadius: 10, // Rounded corners
        backgroundColor: '#fff', // White background
        paddingHorizontal: 20, // Padding on the sides
        paddingVertical: 15, // Padding on top and bottom
      },
  
});

// export default NewCustomer;

const AppProvider = () => (
      <Provider>
         <NewCustomer />
       </Provider>
     );
     export default AppProvider;
    
   