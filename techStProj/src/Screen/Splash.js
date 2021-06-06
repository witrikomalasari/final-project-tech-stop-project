import React, {useEffect} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import {color} from '../Default/color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('access_token', (err, token) => {
        // console.log('ini token', token);
        if (token) {
          navigation.navigate('TabNavigator');
        } else {
          navigation.navigate('Login');
        }
      });
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LinearTextGradient
        locations={[0, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#0796C6', '#50E590']}
        style={styles.linear}>
        <Text style={{fontFamily: 'Lato-Regular'}}>TECH STOP</Text>
      </LinearTextGradient>
      <Text
        style={{
          position: 'absolute',
          color: 'white',
          bottom: 20,
          left: 150,
        }}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  linear: {
    fontSize: 55,
    fontWeight: '700',
    letterSpacing: 0.2,
    fontFamily: 'Lato-Regular',
  },
});
export default Splash;
