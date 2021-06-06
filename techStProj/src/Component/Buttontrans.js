import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {color} from '../Default/color';

const Buttontrans = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPressButton}>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.midgrey,
    borderWidth: 2,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: color.grey,
    fontFamily: 'Mulish-Regular',
  },
});

export default Buttontrans;
