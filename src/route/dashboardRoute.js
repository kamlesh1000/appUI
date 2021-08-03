import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  BottomTabBar,
} from 'react-navigation-tabs';
import LinearGradient from 'react-native-linear-gradient';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '../screens/profile';
import NotificationScreen from '../screens/notification';
import SearchScreen from '../screens/search';
import DownloadScreen from '../screens/download';
import SettingScreen from '../screens/setting';
import DrawerContent from '../components/drawerContent';

import Grid from '../screens/grid';
import Feed from '../screens/feed';
import Video from '../screens/video';

import Colors from '../res/colors';
import Icons from '../res/icons';

const ProfileTab = createMaterialTopTabNavigator(
  {
    Grid: {
      screen: Grid,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({tintColor}) => (
          <Icons.MaterialIcons
            name="grid-on"
            size={34}
            color={tintColor}
            style={{marginTop: -5, height: 50, width: 50}}
          />
        ),
      },
    },
    Feed: {
      screen: Feed,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({tintColor}) => (
          <Icons.FontAwesome
            name="user-circle-o"
            size={30}
            color={tintColor}
            style={{marginTop: -3, height: 50, width: 50}}
          />
        ),
      },
    },
    Video: {
      screen: Video,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({tintColor}) => (
          <Icons.Ionicons
            name="videocam-outline"
            size={34}
            color={tintColor}
            style={{marginTop: -5, height: 50, width: 50}}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    initialRouteName: 'Grid',
    tabBarOptions: {
      activeTintColor: Colors.tertiary,
      inactiveTintColor: Colors.grayDarkest,
      showIcon: true,
      showLabel: false,
      style: {
        width: '115%',
        height: 50,
        backgroundColor: 'white',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        elevation: 0,
        marginTop: 0,
        paddingTop: 0,
        alignSelf: 'center',
        borderColor: Colors.grayLight,
      },
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      tabStyle: {},
    },
  },
);

global.ProfileTabContainer = createAppContainer(ProfileTab);

const HomeScreenStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    initialRouteProps: 'Home',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false,
    },
  },
);

const NotificationScreenStack = createStackNavigator(
  {
    Notification: {screen: NotificationScreen},
  },
  {
    initialRouteProps: 'Notification',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false,
    },
  },
);

const SearchScreenStack = createStackNavigator(
  {
    Search: {screen: SearchScreen},
  },
  {
    initialRouteProps: 'Search',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false,
    },
  },
);

const DownloadScreenStack = createStackNavigator(
  {
    Download: {screen: DownloadScreen},
  },
  {
    initialRouteProps: 'Profile',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false,
    },
  },
);

const TabNavigatorScreen = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icons.AntDesign name="home" color={tintColor} size={32} />
        ),
      },
    },
    Notification: {
      screen: NotificationScreenStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icons.Feather name="bell" style={{color: tintColor}} size={32} />
        ),
      },
    },
    Search: {
      screen: SearchScreenStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icons.Fontisto name="search" style={{color: tintColor}} size={29} />
        ),
      },
    },
    Download: {
      screen: DownloadScreenStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icons.Feather name="download" style={{color: tintColor}} size={32} />
        ),
      },
    },
  },
  {
    initialRouteProps: 'Home',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: Colors.black,
        height: 50,
      },
      inactiveTintColor: Colors.white,
      activeTintColor: Colors.white,
    },
    tabBarComponent: props => {
      return (
        <LinearGradient
          colors={[Colors.gradient1, Colors.gradient2]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <BottomTabBar {...props} style={{backgroundColor: 'transparent'}} />
        </LinearGradient>
      );
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigatorScreen,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: prop => (
          <Icons.AntDesign
            name="home"
            size={20}
            color={prop.focused ? Colors.tertiary : Colors.grayMedium}
          />
        ),
      },
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        drawerLabel: 'Setting',
        drawerIcon: prop => (
          <Icons.AntDesign
            name="setting"
            size={20}
            color={prop.focused ? Colors.tertiary : Colors.grayMedium}
          />
        ),
      },
    },
  },
  {
    contentComponent: DrawerContent,
    initialRouteName: 'Home',
    edgeWidth: 70,
    drawerWidth: '80%',
    drawerPosition: 'left',
    gesturesEnabled: false,
    headerMode: 'float',
    contentOptions: {
      labelStyle: {
        fontWeight: 'normal',
        fontFamily: 'Raleway-Medium',
        fontSize: 14,
        color: Colors.grayDarkest,
        marginLeft: -6,
      },
      activeLabelStyle: {
        fontWeight: 'normal',
        fontFamily: 'Raleway-Medium',
        fontSize: 14,
        color: Colors.tertiary,
        marginLeft: -6,
      },
    },
  },
);

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
