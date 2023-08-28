import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from './ScreenConstants';
import Activity from '../Screens/Activity';
import SearchScreen from '../Screens/Search/SearchScreen';
import Reels from '../Screens/Reels/Reels';
import Profile from '../Screens/Profile';
import {NavigationStyles} from './AppNavigationStyle';
import Ionic from 'react-native-vector-icons/Ionicons';
import {ICON_NAME} from '../Icons/Icons';
import {COLORS} from '../Colors/Colors';
import HomeScreen from '../Screens/Home/HomeScreen';
import Status from '../Screens/Home/Status';
import Posts from '../Screens/Home/Posts';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const screenName = useNavigationState(
    state => state.routes[state.index].name,
  );
  console.log(screenName);
  const renderTabBarIcon = ({route, focused, color, size}) => {
    let iconName;
    if (route.name === SCREEN_NAMES.HOME.route) {
      iconName = focused ? ICON_NAME.HOME_FILL : ICON_NAME.HOME_UNFILL;
    } else if (route.name === SCREEN_NAMES.SEARCH.route) {
      iconName = focused ? ICON_NAME.SEARCH_FILL : ICON_NAME.SEARCH_UNFILL;
    } else if (route.name === SCREEN_NAMES.REELS.route) {
      iconName = focused ? ICON_NAME.REELS_FILL : ICON_NAME.REELS_UNFILL;
    } else if (route.name === SCREEN_NAMES.ACTIVITY.route) {
      iconName = focused ? ICON_NAME.HEART_FILL : ICON_NAME.HEART_UNFILL;
    } else if (route.name === SCREEN_NAMES.PROFILE.route) {
      iconName = focused ? ICON_NAME.PERSON_FILL : ICON_NAME.PERSON_UNFILL;
    }
    return (
      <Ionic
        name={iconName}
        size={focused ? size + 6 : size + 2}
        color={focused ? COLORS.BLACK : color}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: NavigationStyles.tabBar,
        tabBarIcon: ({focused, color, size}) =>
          renderTabBarIcon({route, focused, color, size}),
      })}>
      <Tab.Screen name={SCREEN_NAMES.HOME.route} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAMES.SEARCH.route} component={SearchScreen} />
      <Tab.Screen name={SCREEN_NAMES.REELS.route} component={Reels} />
      <Tab.Screen name={SCREEN_NAMES.ACTIVITY.route} component={Activity} />
      <Tab.Screen name={SCREEN_NAMES.PROFILE.route} component={Profile} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={SCREEN_NAMES.BOTTOM_TAB.route}
          component={TabNavigator}
        />
        <Stack.Screen name={SCREEN_NAMES.STATUS.route} component={Status} />
        <Stack.Screen name={SCREEN_NAMES.POSTS.route} component={Posts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
