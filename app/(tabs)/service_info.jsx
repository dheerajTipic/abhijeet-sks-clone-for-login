import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

const Serviceinfo = () => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');


  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      customerName,
      address,
      contactPerson,
      email,
      selectedOption,
      selectedOption2,
    });
  };

  return (

    
    
    <View style={styles.container}>


    <Image 
      source={require('../../assets/images/logo.png')} // Update this with the correct image path
      style={styles.image}
    />
    <Text style={styles.logoHeading}>SMART KITCHEN SOLUTION</Text>
      <View style={styles.Line1}></View>
 <ScrollView contentContainerStyle={styles.scrollContainer}>

      

     

      

   <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
      { <Text style={styles.buttonText}>Save And Next</Text> }
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
    paddingTop:30,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  picker: {
   
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      backgroundColor: '#fff',
  },
  image: {
    width: '40%',
    height: 40,
    marginBottom: 15,
    marginTop:20,
    alignSelf: 'center', // Centers the image horizontally
    
  },
    
   
  customButton: {
    backgroundColor: 'gray',  // Button background color
    paddingVertical: 12,         // Vertical padding for the button
    paddingHorizontal: 20,       // Horizontal padding for the button
    borderRadius: 8,             // Rounded corners
    borderWidth: 2,              // Border size (thickness)
    borderColor: 'black',      // Border color
    alignItems: 'center',        // Centers the text inside the button
    marginBottom: 20, 
    marginHorizontal: 35,           // Adds a bottom margin to the button
  },
  buttonText: {
    color: '#fff',               // Text color
    fontSize: 16,                // Text size
    fontWeight: 'bold',          // Bold text
  },
    
    Line1: {
      width: '100%', // Full width of the parent container
      height: 2,     // Height of the line (thickness)
      backgroundColor: 'black', // Color of the line
      marginVertical: 10, // Space around the line (optional
      
    },
    logoHeading: {
      fontSize: 18,
      marginBottom: 8,
      fontWeight: 'bold',
      alignSelf:'center',
      
    },
});

export default Serviceinfo;

