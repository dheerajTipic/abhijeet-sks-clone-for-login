import { TextInput } from '@react-native-material/core';
import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Animated } from 'react-native';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState({ total: false, complete: false, pending: false, options: false, logout: false, changePassword: false });
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity for animation
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 }); // State to hold the modal position

  // Create refs for each card using createRef
  const totalCardRef = useRef(null);
  const completeCardRef = useRef(null);
  const pendingCardRef = useRef(null);

  const openModal = (type) => {
    let ref;

    // Set ref according to the card type
    if (type === 'total') ref = totalCardRef;
    if (type === 'complete') ref = completeCardRef;
    if (type === 'pending') ref = pendingCardRef;

    if (ref && ref.current) {
      ref.current.measure((fx, fy, width, height, px, py) => {
        setModalPosition({ x: px, y: py - height }); // Position above the card
        setModalVisible((prev) => ({ ...prev, [type]: true }));
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    } else {
      // For other modals like logout and change password, just set visibility
      setModalVisible((prev) => ({ ...prev, [type]: true }));
    }
  };

  const closeModal = (type) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible((prev) => ({ ...prev, [type]: false }));
    });
  };

  return (
    <View style={styles.container}>
      {/* Top Right Corner Buttons */}
      <View style={styles.topRightButtons}>
        <TouchableOpacity style={styles.topButton} onPress={() => openModal('logout')}>
          <Text style={styles.topButtonText}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton} onPress={() => openModal('changePassword')}>
          <Text style={styles.topButtonText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/Person.png')} // Replace with your image path
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <View style={styles.cardContainer}>
        {/* Card for Total */}
        <TouchableOpacity
          ref={totalCardRef}
          style={styles.card}
          onPress={() => openModal('total')}
        >
          <Text style={styles.cardTitle}>Total</Text>
          <Text style={styles.cardContent}>5</Text>
        </TouchableOpacity>

        {/* Card for Complete */}
        <TouchableOpacity
          ref={completeCardRef}
          style={styles.card}
          onPress={() => openModal('complete')}
        >
          <Text style={styles.cardTitle}>Complete</Text>
          <Text style={styles.cardContent}>3</Text>
        </TouchableOpacity>

        {/* Card for Pending */}
        <TouchableOpacity
          ref={pendingCardRef}
          style={styles.card}
          onPress={() => openModal('pending')}
        >
          <Text style={styles.cardTitle}>Pending</Text>
          <Text style={styles.cardContent}>2</Text>
        </TouchableOpacity>
      </View>

      {/* Existing Modals for Total, Complete, and Pending remain unchanged */}

      {/* Modal for Logout */}
      <Modal
        transparent={true}
        visible={modalVisible.logout}
        onRequestClose={() => closeModal('logout')}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Log Out</Text>
            <Text style={styles.modalContent}>Are you sure you want to log out?</Text>
          
          
            <TouchableOpacity style={styles.closeButton} onPress={() => closeModal('logout')}>
              <Text style={styles.closeButtonText }>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => closeModal('logout')}>
              <Text style={styles.closeButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal for Change Password */}
      <Modal
        transparent={true}
        visible={modalVisible.changePassword}
        onRequestClose={() => closeModal('changePassword')}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Change Password</Text>
            <Text style={styles.modalContent}>Please enter your new password.</Text>
            {/* here do changes as you want */}
            <TextInput
            variant="outlined"
            label="New password"
            style={styles.searchInput}
          //  value={visit}
           // onChangeText={setVisit}
            
          />
          
            <TouchableOpacity style={styles.closeButton} onPress={() => closeModal('changePassword')}>
              <Text style={styles.closeButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => closeModal('changePassword')}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  topRightButtons: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  topButton: {
    padding: 8,
    marginLeft: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  topButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flex: 1,
    maxWidth: 300,
    height: 150,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 15,
  },
  closeButtonText: {
    color: '#FF0000',
    fontSize: 16,
  },
});

export default Profile;
