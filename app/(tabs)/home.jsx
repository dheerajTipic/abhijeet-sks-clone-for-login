import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/Person.png')} // Replace with your image path
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total</Text>
          <Text style={styles.cardContent}>5</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Complete</Text>
          <Text style={styles.cardContent}>3 </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>pending</Text>
          <Text style={styles.cardContent}>2</Text>
        </View>
      </View>
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,          // Increased size
    height: 100,         // Match width for a perfect circle
    borderRadius: 50,   // Half of the width/height for a circle
    marginBottom: 30,   // Margin between the image and name
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',    // Wrap cards to the next line if necessary
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5, // Space between cards
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flex: 1,   // Allow the cards to grow and shrink as needed
    maxWidth: 300,  // Maximum width for each card
    height: 150,    // Adjust card height as needed
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
});

export default Dashboard;
