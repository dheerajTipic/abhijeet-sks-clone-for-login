
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Animated, Easing, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { Provider, Stack, Button, DialogHeader, DialogContent, DialogActions, TextInput } from "@react-native-material/core";
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import AddTable from '../../components/addItem';
// import SignaturePad from '../../components/Signature_pad'
// import { SafeAreaView } from 'react-native-safe-area-context';


//......................................................Dailog
const AnimatedDialog = ({ visible, onClose, onSubmit, customerName, setCustomerName, address, setAddress, contactPerson, setContactPerson, email, setEmail, error }) => {
  const [show, setShow] = useState(visible);
  
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const translateYValue = useRef(new Animated.Value(50)).current;
  const [errord, setErrord] = useState('');
  const router = useRouter();
  const handleSubmitd = () => {
    // value={searchModelQuery}
    // value={searchModelQuery}
if (customerName.trim() === '' || address.trim() === '' || contactPerson.trim() === '' || email.trim() === '') {  
setErrord('All fields are required!');
 
} else {
setErrord('');
onClose();
router.push('/customer_info');

setCustomerName('');
setAddress('');
setContactPerson('');
setEmail('');

}
};

  useEffect(() => {
    if (visible) {
      setShow(true);
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
        Animated.timing(translateYValue, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
        Animated.timing(translateYValue, {
          toValue: 50,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(() => setShow(false)),
      ]);
    }
  }, [visible]);

  return (
<Modal transparent visible={show} animationType="none">
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.dialogContainer,
            {
              transform: [
                { scale: scaleValue },
                { translateY: translateYValue },
              ],
              opacity: opacityValue,
            },
          ]}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <DialogHeader title="         New Customer" style={styles.dialogHeader} />
            <View style={styles.Line1} />
            {errord ? <Text style={styles.errorTextd}>{errord}</Text> : null}
            <DialogContent>
              <Stack spacing={2}>
                <TextInput
                  variant="outlined"
                  label="Customer name"
                  style={styles.input}
                  value={customerName}
                  onChangeText={setCustomerName}
                />
                <TextInput
                  variant="outlined"
                  label="Address"
                  style={styles.input}
                  value={address}
                  onChangeText={setAddress}
                />
                <TextInput
                  variant="outlined"
                  label="Contact person"
                  style={styles.input}
                  value={contactPerson}
                  onChangeText={setContactPerson}
                />
                <TextInput
                  variant="outlined"
                  label="Email"
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                />
                {/* <Button
                  title="Save"
                  compact
                  style={{marginHorizontal:30, borderWidth:2 ,backgroundColor:'black'}}
                  variant="text"
                  onPress={handleSubmitd}
                /> */}
<View style={{display:"flex",alignItems:'center', justifyContent:'space-between',flexDirection:'row',width:"100%", marginTop:8,

}}>
<TouchableOpacity style={styles.customButtond} onPress={handleSubmitd  }>
          <Text style={styles.buttonTextd}>Save</Text>
        </TouchableOpacity>
             
        <TouchableOpacity style={styles.customButtoncancel} onPress={onClose}>
          <Text style={styles.buttonTextcancle}>Cancel</Text>
        </TouchableOpacity>
        </View>
              </Stack>
            </DialogContent>
            <DialogActions>
              {/* <Button 
                title="Cancel"
                compact 
                variant="text"
                onPress={onClose}
                style={{color:'red'}}
              /> */}


              {/* <Button
                title="Ok"
                compact
                variant="text"
                onPress={onClose}
              /> */}
            </DialogActions>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};
//......................................................Dailog End
const CustomerInfo = () => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');
 // const [equipmentName, setequipmentName] = useState();

 const [visit, setVisit] = useState('');
 const [actualFault, setActualFault] = useState('');
 const [actionteken, setActionTeken] = useState('');
 const [selectedOptionremark, setSelectedOptionremark] = useState('');
 const [selectedOptionType, setSelectedOptionType] = useState('');
 const [selectedOptionLocation, setSelectedOptionLocation] = useState('');
 const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  
  const [errord, setErrord] = useState('');
  const [searchQuery, setSearchQuery] = useState('');//constomer
  const [searchModelQuery, setSearchModelQuery] = useState('');
  const [searchEqpQuery, setSearchEqpQuery] = useState('');
  const [searchsnoQuery, setSearchsnoQuery] = useState('');
 
  const [filteredData, setFilteredData] = useState([]);
  const [filteredModelData, setFilteredModelData] = useState([]);
  const [filteredEqpData, setFilteredEqpData] = useState([]);
  const [filteredsnoData, setFilteredsnoData] = useState([]);
  

  const [isCustomerSelected, setIsCustomerSelected] = useState(false);
  const [isEqpSelected, setIsEqpSelected] = useState(false);
  const [issnoSelected, setIssnoSelected] = useState(false);
 
 
  const [visible, setVisible] = useState(false);
  const [serialNo, setserialNo] = useState();
 

  const router = useRouter();
  const [otherCall, setOtherCall] = useState('');
  const [otherLocation, setOtherLocation] = useState('');
 // const [otherCall, setOtherCall] = useState('');

  const data = [
    'Hayat Hotel',
    'Tipic',
    'Swad',
    'Swayananad',
    'Anant Hotel',
    'PureVeg Hotel',
    'NonVeg Hotel',
  ];
  const eqpData =[
    
    'Bajaj',
    'Tata',
    'aaa',
    'demo1',
    'Microwave',
    'Blender',
    'Food Processor',

  
  ];

  const modelData = [
    'Model1234',
    'Model5678',
    'Model91011',
    'Model1213',
    'Model1415',
    'Model1617',
  ];
  const snoData = [
    '1234',
    '5678',
    '91011',
    '1213',
    '1415',
    'M617',
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
  

  const handleEqpSearch = (text) => {
    setSearchEqpQuery(text);
    if (text) {
      const results = eqpData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredEqpData(results);
    } else {
      setFilteredEqpData([]);
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
  const handlesnoSearch = (text) => {
    setSearchsnoQuery(text);
    if (text) {
      const results = snoData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredsnoData(results);
    } else {
      setFilteredsnoData([]);
    }
  };

  
 

  const handleSelectItem = (item) => {
    setSearchQuery(item);
    setFilteredData([]);
    setIsCustomerSelected(true);
  };

  const handleSelectModelItem = (item) => {
    setSearchModelQuery(item);
    setFilteredModelData([]);
  };
  const handleSelectEqpItem = (item) => {
    setSearchEqpQuery(item);
    setFilteredEqpData([]);
    setIsEqpSelected(true);
  };
  const handleSelectsnoItem = (item) => {
    setSearchsnoQuery(item);
    setFilteredsnoData([]);
    setIssnoSelected(true);
  };

  // const handleSubmits = () => {
  //   router.push('/profile');
  // };
  const handleAddItem = () => {
    setIsVisible(true); // Show the table when the button is clicked
  };
  const handlecancel= () => {
    setIsVisible(false); // Show the table when the button is clicked
  };

  

  const handleSubmit = () => {
              // value={searchModelQuery}
              // value={searchModelQuery}
    if ( searchQuery.trim() === ''||  searchModelQuery.trim() === ''|| searchEqpQuery.trim() === '') {  
      setError('All fields are required!');
    } else {
      setError('');
      router.push('/profile');
      
      setSearchQuery('');
      setSearchModelQuery('');
      setSearchEqpQuery('');
      setSearchsnoQuery('');
     
      setFilteredData([]);
      setFilteredModelData([]);
      setFilteredEqpData([]);
      setFilteredsnoData([]);
     
      
      setIsCustomerSelected(false);
      setIsEqpSelected(false);
      setIssnoSelected(false);
      
    }
  };
  const handleSubmitsign = () => {
<SignaturePad/>
  }
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
          style={styles.searchInput}
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
              </TouchableOpacity>
            )}
          />
        )}

        {filteredData.length === 0 && searchQuery.length > 0 && (
          // {filteredData.length === 0 && searchQuery.length > 0 && (
          // <Button
          //   style={styles.dailogBtn}
          //   title="Add"
          //   onPress={() => setVisible(true)}

          // />
          <TouchableOpacity style={styles.customButtonadd}   onPress={() => setVisible(true)}>
  <Text style={styles.buttonText}>Add</Text>    
</TouchableOpacity>

        )}

        <AnimatedDialog
          visible={visible}
          onClose={() => setVisible(false)}
          onSubmit={handleSubmit}
          customerName={customerName}
          setCustomerName={setCustomerName}
          address={address}
          setAddress={setAddress}
          contactPerson={contactPerson}
          setContactPerson={setContactPerson}
          email={email}
          setEmail={setEmail}
          error={error}
        />

        
        {/* Conditionally render the model search box */}
        {isCustomerSelected && (
          <>
            <TextInput
              variant="outlined"
              label=" Search Equipment..."
              style={styles.searchInput}
              value={searchEqpQuery}
              onChangeText={handleEqpSearch}
            />
            {filteredEqpData.length > 0 && (
              <FlatList
                data={filteredEqpData}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectEqpItem(item)}>
                    <Text style={styles.suggestionItem}>{item}</Text>
                  </TouchableOpacity>
                )}
              />

            )}

          </>
        )}
         {isEqpSelected &&
          (
          <>
            <TextInput
              variant="outlined"
              label="Search Model..."
              style={styles.searchInput}
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

{isEqpSelected &&
          (
          <>
          <TextInput
          variant="outlined"
          label=" Search Serial No.."
          style={styles.searchInput}
         // value={searchQuery}
          value ={searchsnoQuery}
          onChangeText={handlesnoSearch}
        />
            {filteredsnoData.length > 0 && (
              <FlatList
                data={filteredsnoData}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectsnoItem(item)}>
                    <Text style={styles.suggestionItem}>{item}</Text>
                  </TouchableOpacity>
                )}
              />

            )}

          </>
        )}



{issnoSelected &&
          (
          <>
                     <Picker
            selectedValue={selectedOptionType}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOptionType(itemValue)}
          >
            <Picker.Item label="Select Type of Call" value="option1" />
            <Picker.Item label="Breakdown" value="option2" />
            <Picker.Item label="PPM" value="option3" />
            <Picker.Item label="Installation" value="option4" />
            <Picker.Item label="Inspection" value="option5" />
            <Picker.Item label="Other" value="option6" />
          </Picker>

          {selectedOptionType === 'option6' && (
            <TextInput
              style={styles.input}
              placeholder="Enter Type of call"
              value={otherCall}
              onChangeText={setOtherCall}
            />
          )}

<Picker
            selectedValue={selectedOptionLocation}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOptionLocation(itemValue)}
          >
            <Picker.Item label="Select Location" value="optiona1" />
            <Picker.Item label="Smart Kitchen" value="optiona2" />
            <Picker.Item label="Pantry" value="optiona3" />
            <Picker.Item label="Gym" value="optiona4" />
            <Picker.Item label="Other" value="optiona5" />
          </Picker>
          {selectedOptionLocation === 'option5' && (
            <TextInput
              style={styles.input}
              placeholder="Enter a Location"
              value={otherLocation}
              onChangeText={setOtherLocation}
            />
          )} 
          <TextInput
            variant="outlined"
            label="Nature of complaint/visit"
            style={styles.searchInput}
            value={visit}
            onChangeText={setVisit}
            multiline
            maxLength={200}
          />
          <TextInput
            variant="outlined"
            label="Actual fault"
            style={styles.searchInput}
            value={actualFault}
            onChangeText={setActualFault}
            multiline
            maxLength={200}
          />
          <TextInput
            variant="outlined"
            label="Action Taken"
              style={styles.searchInput}
            value={actionteken}
            onChangeText={setActionTeken}
            multiline
            maxLength={200}
          />

          <Picker
            selectedValue={selectedOptionremark}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOptionremark(itemValue)}
          >
            <Picker.Item label="Select Remark" value="optiona1" />
            <Picker.Item label="Working Fully" value="optiona2" />
            <Picker.Item label="Working Moderately" value="optiona3" />
            <Picker.Item label="Not Working" value="optiona4" />
          </Picker>

          
          
          


<View style={{ display: "flex", 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  flexDirection: 'row', 
  width: "100%", 
  marginTop: 10, 
  marginBottom:15,
  paddingHorizontal: 8}}>
<TouchableOpacity style={styles.customButtona} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add spare parts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.customButtonsign} onPress={handleSubmitsign}>
          <Text style={styles.buttonText}>Sign</Text>
        </TouchableOpacity>
        
        
        
         
          {/* <TouchableOpacity style={styles.customButtons} onPress={handleSubmits}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity> */}
          
  
</View>
          {/* <TouchableOpacity style={styles.customButton} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity> */}
          
          

        
        {isVisible && (
          <View>
            {/* <View style={{height:2,width:'85%',backgroundColor:'black',alignSelf:'center'}}></View> */}
            <AddTable/>
            {/* <SafeAreaView style={{ flex: 1 }}>
      <SignaturePad />
    </SafeAreaView> */}
            <TouchableOpacity style={styles.customButtonclose} onPress={handlecancel}>
            <Text style={styles.buttonText}>close Table</Text>
          </TouchableOpacity>
          
          
          </View>
        )}

          </>
        )}

        {/* <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity> */}
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
  dailogBtn: {
    marginStart: 255,
    alignSelf: 'flex-end',
    marginEnd: 10,
    color:'black',
    borderBlockColor:'black',
  
    borderColor: 'black',
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
    height: 50,
    marginBottom: 15,
    marginTop: 20,
    alignSelf: 'center',
  },
  customButton: {
    backgroundColor: 'green',
    marginTop: 9,
    paddingVertical: 6,
    paddingHorizontal: 24,
    // marginHorizontal: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },

  customButtona: {
   // marginRight: 10,
   height:36,
    marginTop:9,
    backgroundColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 6,
   // marginHorizontal: 70,
  // marginleft:20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    height:36,
  },
  customButtonsign: {
    backgroundColor: 'green',
    height:36,
    marginTop: 9,
    paddingVertical: 6,
    paddingHorizontal: 24,
    // marginHorizontal: 120,
    marginStart:20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  customButtonadd: {
    backgroundColor: 'black',
    // marginTop: 20,
    paddingVertical: 4,
    paddingHorizontal: 15,
    marginStart: 255,
    alignSelf: 'flex-end',
    marginEnd: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  customButtonclose: {
    marginTop: 20,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
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
    marginBottom: 20,
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
  errorTextd: {
    color: 'red',
    marginBottom: 10,
    alignSelf:'center'
  },
  searchInput: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dialogContainer: {
    width: '80%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  dialogHeader: {
    marginBottom: 15,
  },
  input:{
marginTop: 5,



  },
  customButtond:{
    marginTop: 10,
    //marginRight:50,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
   // marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width:80,
  },
  
  customButtoncancel:{
    marginTop: 10,
   // marginLeft:2,
    backgroundColor: '#BF0000',
    paddingVertical: 10,
    paddingHorizontal: 13,
    //marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    width:80,
  },
  
  customButtons: {
    marginTop: 20,
    marginLeft:35,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    marginleft: 20,
  },
  buttonTextd: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextcancle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 48,
    justifyContent: 'center',
    elevation: 3,
    margin: 7,
    marginTop:30,
    marginBottom: 15,
    marginHorizontal: 10,
  },
});


const AppProvider = () => (
  <Provider>
    <CustomerInfo />
  </Provider>
);

export default AppProvider;
