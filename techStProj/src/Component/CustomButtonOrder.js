import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {color} from '../Default/color';
import LinearGradient from 'react-native-linear-gradient';

const CustomButtonOrder = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPressButton}>
    <Text style={styles.title}>
      {props.title}
      {props.customer}
      {props.Partner}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#0796C6',
  },
  title: {
    fontSize: 16,
    color: color.white,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontFamily: 'Mulish-Regular',
  },
});

export default CustomButtonOrder;
