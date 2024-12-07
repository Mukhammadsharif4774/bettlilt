import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import MarsSportSportHeader from '../components/BettiltHeader';
import {useNavigation} from '@react-navigation/native';
import Event_1 from '../assets/event_1.png';
import Event_2 from '../assets/event_2.png';
import Event_3 from '../assets/event_3.png';
import Event_4 from '../assets/event_4.png';
import Event_5 from '../assets/event_5.png';
import Logo from '../assets/drawer_logo.png';

const events = [
  {title: 'Ретро-Бургер Найт', image: Event_1},
  {title: 'Конкурс', image: Event_2},
  {title: 'Бургер-Пати', image: Event_3},
  {title: 'Ночь Гастрономических', image: Event_4},
  {title: 'Гурме-Бургер Ночь', image: Event_5},
];

const EventButton = ({title, image, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={() => onPress(image)}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default function () {
  const navigation = useNavigation();

  const handlePress = image => {
    navigation.navigate('DrawerNavigator', {
      screen: 'BettiltEventDetailScreen',
      params: {image},
    });
  };

  return (
    <View style={styles.container}>
      <MarsSportSportHeader />

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.content}>
        {events.map((event, index) => (
          <EventButton
            key={index}
            title={event.title}
            image={event.image}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.black,
  },
  button: {
    justifyContent: 'center',
    width: '75%',
    marginTop: 15,
    backgroundColor: COLORS.white,
    paddingVertical: 15,
  },
  title: {
    fontSize: 23,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'center',
  },
  content: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
    width: width,
    marginTop: '25%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingTop: 40,
    elevation: 5,
  },
  logo: {
    width: width * 0.8,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
