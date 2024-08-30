import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Text style={styles.label}>Customer Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter customer name"
          value={customerName}
          onChangeText={setCustomerName}
        />

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter customer address"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Contact Person:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter contact person name"
          value={contactPerson}
          onChangeText={setContactPerson}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter contact person email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCompleteType="email"
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Select Type Of Call:</Text>
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

          <Text style={styles.label}>Select Location:</Text>
          <Picker
            selectedValue={selectedOption2}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOption2(itemValue)}
          >
            <Picker.Item label="Select Location" value="option1" />
            <Picker.Item label="Smart Kitchen" value="option2" />
            <Picker.Item label="Pantry" value="option3" />
            <Picker.Item label="Gym" value="option4" />
            <Picker.Item label="Other" value="option5" />
          </Picker>
        </View>

        <Text style={styles.label}>Model No:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Model No"
          value={modelNo}
          onChangeText={setModelNo}
        />

        <Text style={styles.label}>Serial No:</Text>
        <TextInput
          style={styles.input}
          placeholder="Serial No"
          value={serialNo}
          onChangeText={setSerialNo}
        />

        <Text style={styles.label}>Equipment Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Equipment Name"
          value={equipmentName}
          onChangeText={setEquipmentName}
        />

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
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    marginTop: 10,
    marginStart: 2,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  pickerContainer: {
    marginVertical: 5,
    marginBottom: 30,
  },
  picker: {
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 48,
    justifyContent: 'center',
    elevation: 3,
    margin: 9,
    marginBottom: 10,
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
