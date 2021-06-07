import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {color} from '../Default/color';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = props => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.onPressButton(props.title)}
    disabled={props.disabled}>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#0796C6', '#50E590']}
      style={styles.linear}>
      <Text style={styles.title}>
        {props.title}
        {props.customer}
        {props.Partner}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    color: color.white,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontFamily: 'Mulish-Regular',
  },
  linear: {
    width: 379,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    fontFamily: 'Mulish-Regular',
  },
});

export default CustomButton;
