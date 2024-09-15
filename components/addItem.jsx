import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { TextInput as RNMaterialTextInput } from "@react-native-material/core";
import Animated, { Layout, FadeIn, FadeOut } from 'react-native-reanimated';

const AddTable = ({ isVisible, onClose }) => {
  const [filterText, setFilterText] = useState('');
  const [items, setItems] = useState([
    //  { id: '1', name: 'sam', quantity: 10, price: 100 },
    //  { id: '2', name: 'sagar', quantity: 20, price: 200 },
    // // More items...
  ]);


  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '', remark: '' });

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.price && newItem.remark) {
      const id = (items.length + 1).toString();
      setItems([...items, { id, ...newItem }]);
      setNewItem({ name: '', quantity: '', price: '', remark: '' });
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
    <Modal visible={isVisible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <RNMaterialTextInput
            label="Filter by Equipment name"
            value={filterText}
            onChangeText={setFilterText}
            style={styles.filterInput}
          />

          <View style={styles.table}>
            <Animated.FlatList
              data={filteredItems}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListHeaderComponent={
                <View style={styles.header}>
                  <Text style={styles.headerText}>Item</Text>
                  <Text style={styles.headerText}>Description</Text>
                  <Text style={styles.headerText}>Quantity</Text>
                  <Text style={styles.headerText}>Remarks</Text>
                </View>
              }
            />
          </View>

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
              style={styles.input}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
              <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.buttonText}>Close Table</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background to give a modal feel
  },
  modalContent: {
    width: '92%',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
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
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cell: {
    flex: 1,
    fontSize: 12,
  },
  form: {
    marginTop: 20,
  },
  input: {
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTable;
