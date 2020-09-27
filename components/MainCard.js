import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MainCard = (props) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: props.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      width: width*0.265,
      height: height*0.23,
      borderRadius: 15,
    },

    refreshButtom: {
      position: 'absolute',
      margin: 10,
      alignSelf: 'flex-start',
    },
    cardTitle: {
      color: 'white',
      margin: 10,
      fontSize: 20,
    },
    cardIcon: {
      color: 'white',
      margin: 5,
    },
    text: {
      color: 'white',
      margin: 10,
      fontSize: 19,
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{props.title}</Text>
      <Ionicons
        name={props.icon}
        size={35}
        color="white"
        style={styles.cardIcon}
      />
      <Text style={styles.text}>{props.temperature}°</Text>
    </View>
  );
};

export default MainCard;
