import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {color} from '../Default/color';
import CustomButton from '../Component/CustomButton';
import {LinearTextGradient} from 'react-native-text-gradient';

const Join = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View>
          <LinearTextGradient
            locations={[0, 1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#0796C6', '#50E590']}
            style={{marginTop: '25%'}}>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 35,
                fontWeight: '700',
                letterSpacing: 0.2,
              }}>
              TECH STOP
            </Text>
          </LinearTextGradient>
        </View>
        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 16,
              fontFamily: 'Mulish-Regular',
              marginTop: '10%',
              color: '#4D4D4D',
            }}>
            Welcome to TECH STOP
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '25%',
          }}>
          <CustomButton
            title="Register as service seeker"
            // jika ada 2 function harus ditutup dengan 1 curly bracket
            onPressButton={() => navigation.navigate('VerificationCustomer')}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('VerificationPartner')}>
            <View
              style={{
                width: 379,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#50E590',
                borderWidth: 1,
                marginTop: 20,
              }}>
              <Text
                style={{
                  color: '#50E590',
                  fontSize: 16,
                  fontWeight: 'bold',
                  letterSpacing: 0.5,
                  fontFamily: 'Mulish-Regular',
                }}>
                Register as service provider
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textinput: {
    color: color.darkgrey,
    paddingBottom: 30,
    marginTop: 30,
    fontSize: 10,
    fontFamily: 'Mulish-Regular',
  },
  subcontainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Join;
