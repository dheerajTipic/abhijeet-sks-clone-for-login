
import {Image,ScrollView} from 'react-native';
import React, { useState } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { TextInput } from '@react-native-material/core';
import { Picker } from '@react-native-picker/picker';



const Serviceinfo = () => {
  const [visit, setVisit] = useState('');
  const [actualFault,setActualFault] = useState('');
  const [actionteken, setActionTeken] = useState(''); 
  const [selectedOption3, setSelectedOption3] = useState(''); 
  


   const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
     
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
      <View style={styles.incontainer}>
      <TextInput variant="outlined" label="Nature of complaint/visit" style={{ margin: 12}}
       value={visit}
       onChangeText={setVisit}
       multiline
     maxLength={200} 
       />
        <TextInput variant="outlined" label="Actual foult" style={{ margin: 12}}
       value={actualFault}
       onChangeText={setActualFault}
       multiline
     maxLength={200} 
       />
       <TextInput variant="outlined" label="Action Taken" style={{ margin: 12}}
       value={actionteken}
       onChangeText={setActionTeken}
       multiline
     maxLength={200} 
       />

<Picker
            selectedValue={selectedOption3}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOption3(itemValue)}
          >
            <Picker.Item label="Select Remark" value="optiona1" />
            <Picker.Item label="Working Fully" value="optiona2" />
            <Picker.Item label="Working Moderately" value="optiona3" />
            <Picker.Item label="Working" value="optiona4" />
            
          </Picker>
      
      
    </View>


      

     

      

  
         
      
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
  
    
  
 
  image: {
    width: '40%',
    height: 40,
    marginBottom: 15,
    marginTop:20,
    alignSelf: 'center', // Centers the image horizontally
    
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
    incontainer: {
      flex: 1,
     
      padding: 10,
      
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
      margin: 7,
      marginBottom: 15,
      marginHorizontal: 13,
    },
   
});

export default Serviceinfo;

