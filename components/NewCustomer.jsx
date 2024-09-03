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
  Flex,
} from "@react-native-material/core";
import Picker from "react-native-picker-select";
import { View } from "react-native-web";
import { router } from "expo-router";
import { ScrollView } from "react-native";

const NewCustomer = () => {
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
  <Provider style={{Flex:1}}>
    <NewCustomer/>
  </Provider>
);

export default AppProvider;