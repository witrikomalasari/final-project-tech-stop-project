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

const HomeMitraStack = createStackNavigator();
const OrderMitraStack = createStackNavigator();
const MessageMitraStack = createStackNavigator();
const ProfileMitraStack = createStackNavigator();

// Screen
import HomeMitra from './Mitra/HomeMit';
import OrderMitra from './Mitra/OrderMitra';
import MessageMitra from './Mitra/MessageMitra';
import ProfileMitra from './Mitra/ProfileMitra';
import DetailMitra from './Mitra/DetailMitra';
import MyService from './Mitra/MyService';

// Setting Each Stack Scrren
const HomeMitraStackScreen = ({navigation}) => (
  <HomeMitraStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.white,
      },
      headerTintColor: color.black,
      fontWeight: 'bold',
    }}
    initialRouteName="HomeMitra">
    <HomeMitraStack.Screen
      name="HomeMitra"
      component={HomeMitra}
      options={{headerShown: false}}
    />
    <HomeMitraStack.Screen
      name="DetailMitra"
      component={DetailMitra}
      options={{headerShown: true}}
    />
  </HomeMitraStack.Navigator>
);

const OrderMitraStackScreen = props => (
  <OrderMitraStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor:
          'linear-gradient(90deg, #0796C6 -16.55%, #50E590 123.69%',
      },
      headerTintColor: color.black,
      fontWeight: 'bold',
    }}>
    <OrderMitraStack.Screen
      options={{headerShown: false, title: 'Active Order'}}
      name="ActiveOrder"
      component={OrderMitra}
    />
  </OrderMitraStack.Navigator>
);
const MessageMitraStackScreen = ({navigation}) => (
  <MessageMitraStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.white,
      },
      headerTintColor: color.black,
      fontWeight: 'bold',
    }}>
    <MessageMitraStack.Screen name="MessageMitra" component={MessageMitra} />
  </MessageMitraStack.Navigator>
);

const ProfileMitraStackScreen = ({navigation}) => (
  <ProfileMitraStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.white,
      },
      headerTintColor: color.black,
      fontWeight: 'bold',
    }}>
    <ProfileMitraStack.Screen name="ProfileMitra" component={ProfileMitra} />
    <ProfileMitraStack.Screen
      options={{headerShown: true, title: 'My Service'}}
      name="MyService"
      component={MyService}
    />
  </ProfileMitraStack.Navigator>
);

const TabNavigatorMitra = () => (
  <Tab.Navigator
    initialRouteName="HomeMitra"
    activeColor={color.blueMain}
    inactiveColor="grey"
    barStyle={{
      backgroundColor: color.white,
    }}>
    <Tab.Screen
      name="HomeMitra"
      component={HomeMitraStackScreen}
      options={{
        tabBarLabel: 'NewOrder',
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
      name="ActiveOrder"
      component={OrderMitraStackScreen}
      options={{
        tabBarLabel: 'Active Order',
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
      name="MessageMitra"
      component={MessageMitraStackScreen}
      options={{
        tabBarLabel: 'Message Mitra',
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
      name="ProfileMitra"
      component={ProfileMitraStackScreen}
      options={{
        tabBarLabel: 'Account',
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

export default TabNavigatorMitra;
