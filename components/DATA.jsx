import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { PortalProvider, TextInput } from "@react-native-material/core";
import NewCustomer from '../../components/NewCustomer'; 




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
          style={{ margin: 15 }}
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

        {/* Conditionally render the model search box */}
        {isCustomerSelected && (
          <>
            <TextInput
              variant="outlined"
              label="Search Model..."
              style={{ margin: 15 }}
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
        <View style={{ flex: 1, height:700,backgroundColor: 'transparent' }}>
      <PortalProvider>
      <NewCustomer/>
      </PortalProvider>
    </View>
        
        
           

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
    // padding: 5,
    // paddingTop: 30,
    // backgroundColor: '#f5f5f5',
    
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

export default CustomerInfo;










// import React, { useState } from 'react';
// import { View, Text,  Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useRouter } from 'expo-router';
// import { TextInput } from "@react-native-material/core";

// const CustomerInfo = () => {
//   const [customerName, setCustomerName] = useState('');
//   const [address, setAddress] = useState('');
//   const [contactPerson, setContactPerson] = useState('');
//   const [email, setEmail] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');
//   const [selectedOption2, setSelectedOption2] = useState('');
//   const [otherCall, setOtherCall] = useState('');
//   const [modelNo, setModelNo] = useState('');
//   const [serialNo, setSerialNo] = useState('');
//   const [equipmentName, setEquipmentName] = useState('');
//   const [error, setError] = useState('');

//   const router = useRouter();

//   const handleSubmit = () => {
//     if (customerName.trim() === '' 
//     // ||
//         // address.trim() === '' ||
//         // contactPerson.trim() === '' ||
//         // email.trim() === '' ||
//         // selectedOption.trim() === '' ||
//         // selectedOption2.trim() === '' ||
//         // modelNo.trim() === '' ||
//         // serialNo.trim() === '' ||
//         // equipmentName.trim() === ''
//       ) {
         
//       setError('All fields are required!');
//     } else {
//       setError('');
//       router.push('/service_info');
//       setCustomerName('');
//       setAddress('');
//       setContactPerson('');
//       setEmail('');
//       setSelectedOption('');
//       setSelectedOption2('');
//       setOtherCall('');
//       setModelNo('');
//       setSerialNo('');
//       setEquipmentName('');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image 
//         source={require('../../assets/images/logo.png')}
//         style={styles.image}
//       />
//       <Text style={styles.logoHeading}>SMART KITCHEN SOLUTION</Text>
//       <View style={styles.Line1} />
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
        

//        <TextInput variant="outlined" label="Customer name" style={{ margin: 15}}
//        value={customerName}
//        onChangeText={setCustomerName} />

//        <TextInput variant="outlined" label="Address" style={{ margin: 15}} 
//         value={address}
//         onChangeText={setAddress} 
//  />

//        <TextInput variant="outlined" label="Contact person" style={{ margin: 15 }}
//         value={contactPerson}
//         onChangeText={setContactPerson}  />

//        <TextInput variant="outlined" label="Email" style={{ margin:15 }} 
//        value={email}
//        onChangeText={setEmail} 

//        />

//         <View style={styles.pickerContainer}>
//           {/* <Text style={styles.label}>Select Type Of Call:</Text> */}
//           <Picker
//             selectedValue={selectedOption}
//             style={styles.picker}
//             onValueChange={(itemValue) => setSelectedOption(itemValue)}
//           >
//             <Picker.Item label="Select Type of Call" value="option1" />
//             <Picker.Item label="Breakdown" value="option2" />
//             <Picker.Item label="PPM" value="option3" />
//             <Picker.Item label="Installation" value="option4" />
//             <Picker.Item label="Inspection" value="option5" />
//             <Picker.Item label="Other" value="option6" />
//           </Picker>

//           {selectedOption === 'option6' && (
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Type of call"
//               value={otherCall}
//               onChangeText={setOtherCall}
//             />
//           )}

//           {/* <Text style={styles.label}>Select Location:</Text> */}
//           <Picker
//             selectedValue={selectedOption2}
//             style={styles.picker}
//             onValueChange={(itemValue) => setSelectedOption2(itemValue)}
//           >
//             <Picker.Item label="Select Location" value="optiona1" />
//             <Picker.Item label="Smart Kitchen" value="optiona2" />
//             <Picker.Item label="Pantry" value="optiona3" />
//             <Picker.Item label="Gym" value="optiona4" />
//             <Picker.Item label="Other" value="optiona5" />
//           </Picker>
//         </View>

//         <TextInput variant="outlined" label="Model no:" style={{ margin: 15 }}
//          value={modelNo}
//          onChangeText={setModelNo}
//        />


//         <TextInput variant="outlined" label="Serial no" style={{ margin: 15 }} 
//         value={serialNo}
//         onChangeText={setSerialNo}
//       />

// <TextInput variant="outlined" label="Equipment name" style={{ margin: 15 }} 
// value={equipmentName}
// onChangeText={setEquipmentName}
// />

//         <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Save And Next</Text>
//           <Icon name="arrow-forward" size={30} color="#fff" style={styles.icon} />
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 5,
//     paddingTop: 30,
//     backgroundColor: '#f5f5f5',
//   },
 
  
 
//   pickerContainer: {
//     marginVertical: 5,
//     marginBottom: 16,
//     flex: 1,
//     justifyContent: 'center',
    
//   },
//   picker: {
//     borderColor: '#ccc',
//     borderWidth: 2,
//     borderRadius: 50,  // Rounded corners
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     height: 48,
//     justifyContent: 'center',
//     elevation: 3,
//     margin: 9,
//     marginBottom: 15,
//     marginHorizontal: 15,
//   },
//   image: {
//     width: '40%',
//     height: 40,
//     marginBottom: 15,
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   customButton: {
//   backgroundColor: '#4A4A4A', // Sleek, neutral gray background
//   paddingVertical: 10,        // Increased padding for comfort
//   paddingHorizontal: 25,      // Balanced padding for touch target
//   borderRadius: 12,           // Softer, more modern rounded corners
//   borderWidth: 1,             // Thin border for a clean look
//   borderColor: '#2E2E2E',     // Slightly lighter black for subtle contrast
//   alignItems: 'center',
//   marginBottom: 15,           // Reduced margin for tighter layout
//   marginHorizontal: 50,       // Optimized for various screen sizes
  
//   // Strong shadow effect
//   shadowColor: '#000000',     // Pure black for a deep shadow
//   shadowOffset: { width: 0, height: 10 }, // Larger vertical offset for dramatic depth
//   shadowOpacity: 0.,         // High opacity for a bold shadow
//   shadowRadius: 15,           // Larger blur radius for a wide, soft shadow
//   elevation: 5,              // High elevation for a strong shadow on Android
// },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   Line1: {
//     width: '100%',
//     height: 2,
//     backgroundColor: 'black',
//     marginVertical: 10,
//   },
//   logoHeading: {
//     fontSize: 18,
//     marginBottom: 8,
//     fontWeight: 'bold',
//     alignSelf: 'center',
// },
//     errorText: {
//         color: 'red',
//         marginBottom: 10,
//       },
  
  
// });

// export default CustomerInfo;




??

//make button witout animated
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
  const [isButtonVisible, setButtonVisible] = useState(false);
  
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

{filteredData.length === 0 && searchQuery.length > 0  &&  (
          <Button 
            style={styles.dailogBtn}
            title="Add"
            onPress={() => setVisible(true)}
          />
        )}
      
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
    marginTop:20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 120,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    marginBottom: 15,
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