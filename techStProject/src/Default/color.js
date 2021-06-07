import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

export const color = {
  darkRed: '#B20710',
  red: '#E50914',
  white: '#FFFFFF',
  black: '#000000',
  darkGrey: '#111111',
  greenMain: '#50E590',
  blueMain: '#0796C6',
  grey: '#9098B1',
  midgrey: '#CACACA',
  lightgrey: '#EBF0FF',
  darkgrey: '#4D4D4D',
  greygrey: '#C6C6C6',
};

export const Linear = props => {
  <View style={{backgroundColor: '#eee'}}>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#0796C6', '#50E590']}
      style={[StyleSheet.absoluteFill, {height: Header.HEIGHT}]}>
      <Header {...props} style={{backgroundColor: 'transparent'}} />
    </LinearGradient>
  </View>;
};
