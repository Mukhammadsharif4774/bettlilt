import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import MarsSportSportHeader from '../components/BettiltHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <MarsSportSportHeader />
      <Text style={styles.header}>Спортивные трансляции</Text>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100}}>
        {renderBroadcast(
          'NBA',
          '12.02  00:25',
          'Miami Heat\n' + 'San Antonio Spurs',
        )}
        {renderBroadcast(
          'NLL',
          '25.02  00:15',
          'Philadelphia Wings\n' + 'New England Black Wolves',
        )}
        {renderBroadcast(
          'CFL',
          '25.01 00:00',
          'Calgary Stampeders\n' + 'Ottawa Redblacks',
        )}
        {renderBroadcast('UEFA', '30.02 00:55', 'Juventus\n' + 'Barcelona')}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  header: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
  },
  league: {
    fontSize: 50,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    textAlign: 'left',
    verticalAlign: 'middle',
  },
  broadcast: {
    width: width * 0.8,
    paddingLeft: 20,
  },
  leagueContainer: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 15,
  },
  teamsContainer: {
    width: '100%',
  },
  matchTime: {
    fontSize: 20,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    paddingVertical: 5,
    paddingLeft: 5,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.black,
    fontSize: 18,
    color: COLORS.black,
    marginTop: 5,
    marginLeft: 5,
  },
});
