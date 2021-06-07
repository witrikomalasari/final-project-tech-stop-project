import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {color} from '../Default/color';
import LinearGradient from 'react-native-linear-gradient';

const Buttongrad = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPressButton}>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#0796C6', '#50E590']}
      style={styles.linear}>
      <Text style={styles.title}>{props.title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: color.white,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontFamily: 'Mulish-Regular',
  },
  linear: {
    width: 170,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    fontFamily: 'Mulish-Regular',
  },
});

export default Buttongrad;
