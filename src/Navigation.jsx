import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import BettiltHomeScreen from './pages/BettiltHomeScreen';
import BettiltCartScreen from './pages/BettiltCartScreen';
import BettiltCartSuccessScreen from './pages/BettiltCartSuccessScreen';
import BettiltReservationScreen from './pages/BettiltReservationScreen';
import MarsSportReservationSuccessScreen from './pages/BettiltReserveSuccessScreen';
import BettiltContactsScreen from './pages/BettiltContactsScreen';
import BettiltEventsScreen from './pages/BettiltEventsScreen';
import BettiltEventDetailScreen from './pages/BettiltEventDetailScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/drawer_cart_icon.png';
import Logo from './assets/drawer_logo.png';
import BettiltTranslationsScreen from './pages/BettiltTranslationsScreen';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.black,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'Главная', screen: 'BettiltHomeScreen'},
    {label: 'Корзина', screen: 'BettiltCartScreen'},
    {label: 'Трансляции', screen: 'BettiltTranslationsScreen'},
    {label: 'Контакты', screen: 'BettiltContactsScreen'},
    {label: 'Резерв столика', screen: 'BettiltReservationScreen'},
    {label: 'События', screen: 'BettiltEventsScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('BettiltCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );
}

const drawerScreens = [
  {name: 'BettiltHomeScreen', component: BettiltHomeScreen},
  {name: 'BettiltCartScreen', component: BettiltCartScreen},
  {name: 'BettiltCartSuccessScreen', component: BettiltCartSuccessScreen},
  {name: 'BettiltReservationScreen', component: BettiltReservationScreen},
  {
    name: 'MarsSportReservationSuccessScreen',
    component: MarsSportReservationSuccessScreen,
  },
  {name: 'BettiltContactsScreen', component: BettiltContactsScreen},
  {name: 'BettiltEventsScreen', component: BettiltEventsScreen},
  {name: 'BettiltEventDetailScreen', component: BettiltEventDetailScreen},
  {name: 'BettiltTranslationsScreen', component: BettiltTranslationsScreen},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
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
  logoIcon: {
    width: width * 0.8,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: width,
  },
  drawerItem: {
    justifyContent: 'center',
    width: '75%',
    marginTop: 15,
    backgroundColor: COLORS.white,
    paddingVertical: 15,
  },
  itemText: {
    fontSize: 23,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'center',
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
