import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainCard from './components/MainCard';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState('27');
  const [location, setLocation] = useState('BR, Brasília');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    temperature: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText: {
      color: darkTheme ? '#e0e0e0' : 'black',
      fontSize: 38,
    },
    refreshButtom: {
      position: 'absolute',
      margin: 30,
      alignSelf: 'flex-start',
    },
    cardView: {
      color: darkTheme ? 'white' : 'black',
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButtom}>
        <Ionicons
          name="refresh"
          size={30}
          color={darkTheme ? 'white' : 'black'}
        />
      </TouchableOpacity>
      <Ionicons name="sunny" size={40} color="orange" style={{marginTop: 55}} />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, {fontSize: 15}]}>°C</Text>
      </View>
      <View style={styles.cardView}>
        <MainCard title={'blabla'}></MainCard>
        <MainCard title={'blabla'}></MainCard>
        <MainCard title={'blabla'}></MainCard>
      </View>
    </View>
  );
}

export default App;
