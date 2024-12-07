import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import MarsSportSportHeader from '../components/BettiltHeader';
import MarsSportMenuComponent from '../components/BettiltMenuComponent';
import {COLORS, height, width} from '../helpers/colors';
import {bettlilt} from '../helpers/bettlilt';
import Mask from '../assets/mask.png';

export default function BettiltHomeScreen() {
  return (
    <View style={styles.container}>
      <MarsSportSportHeader />

      <Image source={Mask} style={styles.mask} />

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {bettlilt.map((product, index) => (
          <MarsSportMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  mask: {
    width: width * 0.9,
    height: 200,
    alignSelf: 'center',
    borderRadius: 12,
  },
});
