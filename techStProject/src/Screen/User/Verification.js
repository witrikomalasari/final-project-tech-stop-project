import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {color} from '../../Default/color';

const Verification = ({navigation, route}) => {
  const email = useSelector(state => state.userReducer.email);
  const emailpartner = useSelector(state => state.userReducer.emailpartner);

  console.log('partner', emailpartner);
  const [countdown, setCountdown] = useState('3');

  useEffect(() => {
    setTimeout(() => {
      setCountdown('2');
      setTimeout(() => {
        setCountdown('1');
        setTimeout(() => {
          setCountdown('0');
          setTimeout(() => {
            if (route.params.role == 'partner') {
              navigation.navigate('RegisUsaha');
            } else {
              navigation.navigate('RegisUser');
            }
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../../Assets/verif.png')}
        />
        <Text style={styles.email}>Email Verification</Text>
        <Text style={styles.verify}>
          The verification code has been sent via
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>email to,</Text>
          <Text style={styles.txt}>
            {route.params.role == 'partner' ? emailpartner : email}
          </Text>
        </View>
        <Text style={{marginTop: 30}}>Auto Verify in</Text>

        <Text style={{fontSize: 25}}> {countdown} </Text>
        <ActivityIndicator size="large" color={color.blueMain} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.white,
  },
  subcontainer: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '700',
    alignItems: 'center',
    fontFamily: 'Mulish-Regular',
  },
  verify: {
    marginTop: 120,
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    letterSpacing: 0.5,
    fontFamily: 'Mulish-Regular',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    marginTop: 5,
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    letterSpacing: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Mulish-Regular',
  },
});

export default Verification;
