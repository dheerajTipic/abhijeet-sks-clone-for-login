
import React, { useState } from 'react';
import { View, Text,  Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { TextInput } from "@react-native-material/core";

const CustomerInfo = () => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [otherCall, setOtherCall] = useState('');
  const [modelNo, setModelNo] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [equipmentName, setEquipmentName] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = () => {
    if (customerName.trim() === '' ||
        address.trim() === '' ||
        contactPerson.trim() === '' ||
        email.trim() === '' ||
        selectedOption.trim() === '' ||
        selectedOption2.trim() === '' ||
        modelNo.trim() === '' ||
        serialNo.trim() === '' ||
        equipmentName.trim() === '') {
      setError('All fields are required!');
    } else {
      setError('');
      router.push('/service_info');
      setCustomerName('');
      setAddress('');
      setContactPerson('');
      setEmail('');
      setSelectedOption('');
      setSelectedOption2('');
      setOtherCall('');
      setModelNo('');
      setSerialNo('');
      setEquipmentName('');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.logoHeading}>SMART KITCHEN SOLUTION</Text>
      <View style={styles.Line1} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        

       <TextInput variant="outlined" label="Customer name" style={{ margin: 15}} />

       <TextInput variant="outlined" label="Address" style={{ margin: 15}} />

       <TextInput variant="outlined" label="Contact person" style={{ margin: 15 }} />

       <TextInput variant="outlined" label="Email" style={{ margin:15 }} />

        <View style={styles.pickerContainer}>
          {/* <Text style={styles.label}>Select Type Of Call:</Text> */}
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

          {/* <Text style={styles.label}>Select Location:</Text> */}
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
        </View>

        <TextInput variant="outlined" label="Model no:" style={{ margin: 15 }} />

        <TextInput variant="outlined" label="Serial no" style={{ margin: 15 }} />

<TextInput variant="outlined" label="Equipment name" style={{ margin: 15 }} />

        <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save And Next</Text>
          <Icon name="arrow-forward" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 30,
    backgroundColor: '#f5f5f5',
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
  image: {
    width: '40%',
    height: 40,
    marginBottom: 15,
    marginTop: 20,
    alignSelf: 'center',
  },
  customButton: {
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 70,
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
  
  
});

export default CustomerInfo;
