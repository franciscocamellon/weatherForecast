import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainCard = (props) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: props.backgroundColor,
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
    cardTitle: {
      color: 'white',
      margin: 15,
      fontSize: 20,
    },
    cardIcon: {
      color: 'white',
      margin: 15,
    },
    text: {
      color: 'white',
      margin: 15,
      fontSize: 20,
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{props.title}</Text>
      <Ionicons
        name={props.icon}
        size={40}
        color="white"
        style={styles.cardIcon}
      />
      <Text style={styles.text}>{props.temperature}°</Text>
    </View>
  );
};

export default MainCard;
