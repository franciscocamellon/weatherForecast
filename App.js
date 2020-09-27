import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainCard from './components/MainCard';
import InfoCard from './components/InfoCard';

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
    info: {
      alignItems: 'center',
      backgroundColor: darkTheme ? '#393e54' : '#8f8f8f',
      borderRadius: 20,
      width: 350,
      height: 230,
    },
    infoText: {
      color: darkTheme ? '#e0e0e0' : 'white',
      margin: 15,
      fontSize: 20,
      fontWeight: 'bold',

    }
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
        <MainCard title={'Manhã'} temperature={'21'} backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} icon={'sunny'}></MainCard>
        <MainCard title={'Tarde'} temperature={'37'} backgroundColor={darkTheme ? '#d29600' : '#fcc63f'} icon={'sunny'}></MainCard>
        <MainCard title={'Noite'} temperature={'12'} backgroundColor={darkTheme ? '#008081' : '#388788'} icon={'moon'}></MainCard>

      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}> Informações adicionais</Text>
        <View style={styles.infoCard}>
          <InfoCard title={'Wind'} value={'65 km/h'}></InfoCard>
          <InfoCard title={'Wind'} value={'65 km/h'}></InfoCard>
          <InfoCard title={'Wind'} value={'65 km/h'}></InfoCard>
          <InfoCard title={'Wind'} value={'65 km/h'}></InfoCard>
        </View>
      </View>
    </View>
  );
}

export default App;
