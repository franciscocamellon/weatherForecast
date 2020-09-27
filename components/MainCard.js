import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainCard = (props) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      width: 110,
      height: 210,
      borderRadius: 15,
    },

    refreshButtom: {
      position: 'absolute',
      margin: 30,
      alignSelf: 'flex-start',
    },
    cardView: {},
  });

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Manhã</Text>
      <Ionicons name="sunny" size={40} color="orange" style={{marginTop: 55}} />
      <Text style={styles.cardTitle}>21°C</Text>
    </View>
  );
};

export default MainCard;
