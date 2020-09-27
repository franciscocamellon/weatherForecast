import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainCard from './components/MainCard';
import InfoCard from './components/InfoCard';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState('27');
  const [location, setLocation] = useState('BR, Brasília');
  const [currentHour, setCurrentHour] = useState('13:00');

  const [wind, setWind] = useState(65);
  const [humidity, setHumidity] = useState(80);
  const [tempMin, setTempMin] = useState(21);
  const [tempMax, setTempMax] = useState(31);

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
      width: width * 0.9,
      height: height * 0.35,
    },
    infoCard: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    infoText: {
      color: darkTheme ? '#e0e0e0' : 'white',
      margin: 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
    themeButton: {
      margin: 10,
      marginLeft: width * 0.8,
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 0.2,
      height: height * 0.05,
      borderRadius: 25,
    },
    themeButtonSquare: {
      backgroundColor: darkTheme ? '#F2F2F2' : '#8F8F8F',
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 20,
      width: width * 0.2,
      height: height * 0.035,
    },
    themeButtonCircle: {
      alignSelf: darkTheme ? 'flex-end' : 'flex-start',
      margin: 5,
      width: width * 0.05,
      height: height * 0.03,
      borderRadius: height * 0.015,
      backgroundColor: darkTheme ? '#232634' : '#F2F2F2',
    },
  });

  return (

    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.refreshButtom}>
            <Ionicons
              name="refresh"
              size={30}
              color={darkTheme ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <Ionicons
            name="sunny"
            size={40}
            color="orange"
            style={{marginTop: 55}}
          />
          <View style={styles.temperature}>
            <Text style={styles.temperatureText}>{currentTemperature}</Text>
            <Text style={[styles.temperatureText, {fontSize: 15}]}>°C</Text>
          </View>
          <Text style={[styles.temperatureText, {fontSize: 14}]}>
            {location} - {currentHour}
          </Text>
          <View style={styles.cardView}>
            <MainCard
              title={'Manhã'}
              temperature={'21'}
              backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'}
              icon={'sunny'}></MainCard>
            <MainCard
              title={'Tarde'}
              temperature={'37'}
              backgroundColor={darkTheme ? '#d29600' : '#fcc63f'}
              icon={'sunny'}></MainCard>
            <MainCard
              title={'Noite'}
              temperature={'12'}
              backgroundColor={darkTheme ? '#008081' : '#388788'}
              icon={'moon'}></MainCard>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}> Informações adicionais</Text>
            <View style={styles.infoCard}>
              <InfoCard title={'Wind'} value={wind + ' m/h'}></InfoCard>
              <InfoCard title={'Humidity'} value={humidity + '%'}></InfoCard>
              <InfoCard title={'Temp. Min'} value={tempMin + '°C'}></InfoCard>
              <InfoCard title={'Temp. Max'} value={tempMax + '°C'}></InfoCard>
            </View>
          </View>
          <View style={styles.themeButton}>
            <View style={styles.themeButtonSquare}>
              <TouchableOpacity
                style={styles.themeButtonCircle}
                onPress={() =>
                  darkTheme ? setDarkTheme(false) : setDarkTheme(true)
                }></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
