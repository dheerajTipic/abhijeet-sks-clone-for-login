import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { TextInput as RNMaterialTextInput, Button } from "@react-native-material/core";
import Animated, { Layout, FadeIn, FadeOut } from 'react-native-reanimated';

const AddTable = () => {
  const [filterText, setFilterText] = useState('');
  
  const [items, setItems] = useState([
    //  { id: '1', name: '', quantity: 10, price: 100 },
    //  { id: '2', name: '', quantity: 20, price: 200 },
    // More items...
  ]);

  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '',remark:'' });

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.price && newItem.remark) {
      const id = (items.length + 1).toString();
      setItems([...items, { id, ...newItem }]);
      setNewItem({ name: '', quantity: '', price: '',remark:'' ,});
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={Layout.springify()}
      style={styles.row}
    >
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.quantity}</Text>
      <Text style={styles.cell}>{item.price}</Text>
      <Text style={styles.cell}>{item.remark}</Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {/* Filter Input */}
      <RNMaterialTextInput
        label="Filter by Equipment name"
        value={filterText}
        onChangeText={setFilterText}
        style={styles.filterInput}
      />

      {/* Table */}
      <View style={styles.table}>
        <Animated.FlatList
          data={filteredItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.headerText}>Item </Text>
              <Text style={styles.headerText}>Description</Text>
              <Text style={styles.headerText}>Qty</Text>
              <Text style={styles.headerText}>Remarks</Text>
            </View>
          }
        />
      </View>

      {/* Add Item Form */}
      <View style={styles.form}>
        <RNMaterialTextInput
          label="Item"
          value={newItem.name}
          onChangeText={text => setNewItem({ ...newItem, name: text })}
          style={styles.input}
        />
        <RNMaterialTextInput
          label="Description"
          value={newItem.quantity}
          onChangeText={text => setNewItem({ ...newItem, quantity: text })}
         // keyboardType="numeric"
          style={styles.input}
        />
        <RNMaterialTextInput
          label="Qty"
          value={newItem.price}
          onChangeText={text => setNewItem({ ...newItem, price: text })}
          keyboardType="numeric"
          style={styles.input}
        />
         <RNMaterialTextInput
          label="Remark"
          value={newItem.remark}
          onChangeText={text => setNewItem({ ...newItem, remark: text })}
         // keyboardType="numeric"
          style={styles.input}
        />
        {/* <Button
          title="Add Item"
          onPress={handleAddItem}
          style={styles.addButton}
          contentContainerStyle={styles.addButtonContent}
        /> */}
        <TouchableOpacity style={styles.addButton}    onPress={handleAddItem}>
  <Text style={styles.buttonText}>Add Item</Text>    
</TouchableOpacity>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
     backgroundColor: '#D3D3D3',
    borderWidth:4,
    borderRadius:25,
  },
  filterInput: {
    marginBottom: 20,
  },
  table: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
  form: {
    marginTop: 30,
  },
  input: {
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: 'black',
    // marginTop: 20,
    paddingVertical: 4,
    paddingHorizontal: 15,
    width:'60%',
   // marginStart: 255,
    alignSelf: 'center',
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
  addButtonContent: {
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTable;
