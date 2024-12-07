import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import MarsSportSportHeader from '../components/BettiltHeader';
import BettiltButtonComponent from '../components/BettiltButtonComponent';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'BettiltHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <MarsSportSportHeader />

      <Text style={styles.text}>
        СТОЛИК {'\n'}
        ЗАРЕЗЕРВИРОВАН!
      </Text>

      <BettiltButtonComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.medium,
    fontSize: 30,
    marginTop: '25%',
    paddingVertical: 40,
  },
});
