import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Animated, Easing, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { Provider, Stack, Button, DialogHeader, DialogContent, DialogActions, TextInput } from "@react-native-material/core";
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
router.push('/service_info');
setCustomerName('');
setAddress('');
setContactPerson('');
setEmail('');
//setSearchQuery('');
//setSearchModelQuery('');
//setFilteredData([]);
//setFilteredModelData([]);
//setIsCustomerSelected(false);
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
                <Button
                  title="Save"
                  compact
                  style={{marginTop:10, borderBottomWidth:2}}
                  variant="text"
                  onPress={handleSubmitd}
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button 
                title="Cancel"
                compact 
                variant="text"
                onPress={onClose}
                style={{color:'red'}}
              />
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
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  
  const [errord, setErrord] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
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
    // bajaj=[m1,m2,m3],
    // tata=[t1,t2,t3],
    // Honda=[h1,h2,h3],
    'Bajaa',
    'Tata',
    'aaa'

  
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
  

  const handleSubmit = () => {
              // value={searchModelQuery}
              // value={searchModelQuery}
    if ( searchQuery.trim() === ''||  searchModelQuery.trim() === ''|| searchEqpQuery.trim() === '') {  
      setError('All fields are required!');
    } else {
      setError('');
      router.push('/service_info');
      
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
          <Button
            style={styles.dailogBtn}
            title="Add"
            onPress={() => setVisible(true)}
          />
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
  dailogBtn: {
    marginStart: 255,
    alignSelf: 'flex-end',
    marginEnd: 10,
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
    marginTop: 20,
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
    padding: 20,
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
marginTop: 3,


  },
});

const AppProvider = () => (
  <Provider>
    <CustomerInfo />
  </Provider>
);

export default AppProvider;
