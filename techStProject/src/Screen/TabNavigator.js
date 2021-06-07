import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {color, Linear} from '../Default/color';
import LinearGradient from 'react-native-linear-gradient';

// Navigation Setting
const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const OrderStack = createStackNavigator();
const MessageStack = createStackNavigator();
const ProfileStack = createStackNavigator();

// radiobutton radio-btn-active
// checkbox foundation
//account-edit-outline matterialycommunity
//tooltip-text matterialcomunityicon
//border-color materialicon
//radio-button-checked material icon

//outline

// Screen
import HomeScreen from './User/HomeScreen';
import Order from './User/Order';
import Message from './User/Message';
import ProfileUser from './User/ProfileUser';

// Setting Each Stack Scrren
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.white,
      },
      headerTintColor: color.black,
      fontWeight: 'bold',
    }}
    initialRouteName="HomeScreen">
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
);

const OrderStackScreen = props => (
  <OrderStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor:
          'linear-gradient(90deg, #0796C6 -16.55%, #50E590 123.69%',
      },
      headerTintColor: color.black,
      fontWeight: 'bold',
    }}>
    <OrderStack.Screen
      name="Order"
      component={Order}
      options={{headerShown: true}}
    />
  </OrderStack.Navigator>
);
const MessageStackScreen = ({navigation}) => (
  <MessageStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.white,
      },
      headerTintColor: color.black,
      fontWeight: 'bold',
    }}>
    <MessageStack.Screen name="Message" component={Message} />
  </MessageStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.white,
      },
      headerTintColor: color.black,
      fontWeight: 'bold',
    }}>
    <ProfileStack.Screen
      options={{headerShown: false}}
      name="ProfileUser"
      component={ProfileUser}
    />
  </ProfileStack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeScreen"
    activeColor={color.blueMain}
    inactiveColor="grey"
    barStyle={{
      backgroundColor: color.white,
    }}>
    <Tab.Screen
      name="HomeScreen"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#fff',
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons
            name="label-outline"
            color={color}
            size={focused ? 28 : 20}
            style={{
              transform: [{rotate: '270deg'}],
              color: focused ? color.blueMain : '#949494',
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Order"
      component={OrderStackScreen}
      options={{
        tabBarLabel: 'Order',
        tabBarColor: '#fff',
        tabBarIcon: ({focused}) => (
          <Feather
            name="check-square"
            size={focused ? 28 : 20}
            style={{color: focused ? color.blueMain : '#949494'}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Message"
      component={MessageStackScreen}
      options={{
        tabBarLabel: 'Messages',
        tabBarColor: '#fff',
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons
            name="comment-text-outline"
            size={focused ? 28 : 20}
            style={{color: focused ? color.blueMain : '#949494'}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileUser"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#fff',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="person-outline"
            size={focused ? 28 : 20}
            style={{color: focused ? color.blueMain : '#949494'}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
