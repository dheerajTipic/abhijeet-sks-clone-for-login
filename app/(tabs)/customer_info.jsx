import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
//import { PortalProvider, TextInput } from "@react-native-material/core";

import {
  Provider,
  Stack,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  //Text,
  TextInput,
} from "@react-native-material/core";



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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchModelQuery, setSearchModelQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [filteredModelData, setFilteredModelData] = useState([]);
  const [isCustomerSelected, setIsCustomerSelected] = useState(false);
  const [visible, setVisible] = useState(false);
  
  const router = useRouter();

  const data = [
    'Hayat Hotel',
    'Tipic',
    'Swad',
    'Swayananad',
    'Anant Hotel',
    'PureVeg Hotel',
    'NonVeg Hotel',
  ];

  const modelData = [
    'Model1234',
    'Model5678',
    'Model91011',
    'Model1213',
    'Model1415',
    'Model1617',
  ];

  const handleSubmitd= () => {
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

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const results = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };

  const handleModelSearch = (text) => {
    setSearchModelQuery(text);
    if (text) {
      const results = modelData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredModelData(results);
    } else {
      setFilteredModelData([]);
    }
  };

  const handleSelectItem = (item) => {
    setSearchQuery(item);
    setFilteredData([]);
    setIsCustomerSelected(true); // Show the model search box when a customer is selected
  };

  const handleSelectModelItem = (item) => {
    setSearchModelQuery(item);
    setFilteredModelData([]);
  };

  const handleSubmit = () => {
    if (customerName.trim() === '') {
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
      setSearchQuery('');
      setSearchModelQuery('');
      setFilteredData([]);
      setFilteredModelData([]);
      setIsCustomerSelected(false); // Hide the model search box after submission
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

        <TextInput
          variant="outlined"
          label="Search Customer..."
          style={{ marginHorizontal: 10,marginTop:30,
            
           }}
          value={searchQuery}
          onChangeText={handleSearch}
        />
       

        {filteredData.length > 0 && (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectItem(item)}>
                <Text style={styles.suggestionItem}>{item}</Text>
              </TouchableOpacity >
            )}
          />
        )}

<>
      <Button style={styles.dailogBtn}
        title="New Customer"
        //style={{ margin:60 }}
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
       onPress={handleSubmitd} />
        
     
      
             
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

        {/* Conditionally render the model search box */}
        {isCustomerSelected && (
          <>
            <TextInput
              variant="outlined"
              label="Search Model..."
              style={{ marginHorizontal: 10,marginTop:30 }}
              value={searchModelQuery}
              onChangeText={handleModelSearch}
            />
            {filteredModelData.length > 0 && (
              <FlatList
                data={filteredModelData}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectModelItem(item)}>
                    <Text style={styles.suggestionItem}>{item}</Text>
                  </TouchableOpacity>
                  
                )}
              />
            )}
          </>
        )}
       
     


        
        
           

        <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
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
  dailogBtn:{
    marginStart:255,
    alignSelf:'flex-end',
    marginEnd:10,
   
//marginHorizontal:,
  },

  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f8f8f8',
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
    marginTop:10,
    backgroundColor: '#4A4A4A',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2E2E2E',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 50,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
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
const AppProvider  = () => (
  <Provider>
    <CustomerInfo />
  </Provider>
);
export default AppProvider;