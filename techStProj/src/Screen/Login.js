import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import fb from '../Assets/fb1.png';
import google from '../Assets/Google.png';
import CustomButton from '../Component/CustomButton';
import {color} from '../Default/color';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getALlCategory,
  getNearLoc,
  getTopRated,
  putCategory,
} from '../Redux/Action/categoryAction';
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isActives, setActives] = useState(false);
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();

  const HandleLogin = () => {
    let qs = require('qs');
    let data = qs.stringify({
      email: email,
      password: password,
    });
    let config = {
      method: 'POST',
      url: 'https://techstop.gabatch11.my.id/auth/signin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function ({data}) {
        AsyncStorage.setItem('access_token', data.token, error => {
          console.log('ini token User', data.token);
          if (!error) {
            setEmail('');
            setPassword('');
            navigation.navigate('TabNavigator');
          }
        });
      })
      .catch(function (error) {
        // console.log(error);
        HandleLoginMitra();
        // alert(error.message);
      });
  };

  const HandleLoginMitra = () => {
    let qs = require('qs');
    let data = qs.stringify({
      email: email,
      password: password,
    });
    let config = {
      method: 'POST',
      url: 'https://techstop.gabatch11.my.id/auth/signin/partner',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function ({data}) {
        // console.log('data partner', data);
        AsyncStorage.setItem('token', data.token, error => {
          console.log('ini token partner', data.token);
          if (!error) {
            setEmail('');
            setPassword('');
            navigation.navigate('TabNavigatorMitra');
          }
        });
      })
      .catch(function (error) {
        HandleLogin();
        // console.log(error);
        // alert(error.message);
      });
  };

  useEffect(() => {
    AsyncStorage.getItem('access_token', (err, token) => {
      console.log('ini token', token);
      if (token) {
        navigation.navigate('TabNavigator');
      }
    });
    AsyncStorage.getItem('token', (err, token) => {
      console.log('ini token partner', token);
      if (token) {
        navigation.navigate('TabNavigatorMitra');
      }
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <View style={styles.wrap}>
            <LinearTextGradient
              locations={[0, 1]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#0796C6', '#50E590']}
              style={styles.linear}>
              <Text style={{fontFamily: 'Lato-Regular'}}>TECH STOP</Text>
            </LinearTextGradient>

            <Text style={styles.title}>Welcome to TECH STOP</Text>
            <Text style={styles.sign}>Sign in to continue</Text>
            <View
              onFocus={() => setActives(true)}
              onBlur={() => setActives(false)}
              style={{
                width: 379,
                height: 50,
                flexDirection: 'row',
                borderColor: isActives ? color.blueMain : color.lightgrey,
                borderWidth: 1,
                borderRadius: 5,
                marginVertical: 10,
              }}>
              <Ionicons.Button
                name="person-outline"
                size={22}
                backgroundColor={color.white}
                color={color.grey}
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={{width: 300}}
              />
            </View>
            <View
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              style={{
                width: 379,
                height: 50,
                flexDirection: 'row',
                borderColor: isActive ? color.blueMain : color.lightgrey,
                borderWidth: 1,
                borderRadius: 5,
              }}>
              <Feather.Button
                name="lock"
                size={22}
                backgroundColor={color.white}
                color={color.grey}
              />
              <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                style={{width: 300}}
              />
            </View>
            <View>
              <CustomButton
                title="Sign In"
                // jika ada 2 function harus ditutup dengan 1 curly bracket
                onPressButton={() => {
                  HandleLoginMitra();
                  // navigation.navigate('TabNavigatorMitra');
                }}
              />
            </View>

            <View style={styles.wrap2}>
              <View style={styles.border}></View>
              <Text style={styles.txt}>OR</Text>
              <View style={styles.border}></View>
            </View>
            <TouchableOpacity>
              <View style={styles.sosmed}>
                <Image
                  source={google}
                  style={{position: 'absolute', right: 320}}></Image>
                <Text style={styles.txtsosmed}>Login with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.sosmed}>
                <Image
                  source={fb}
                  style={{
                    position: 'absolute',
                    right: 330,
                  }}></Image>
                <Text style={styles.txtsosmed}> Login with Facebook </Text>
              </View>
            </TouchableOpacity>
            <View style={{marginTop: 15}}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.midbottom}>Don't have an account?</Text>
              <Text
                style={styles.btnbottom}
                onPress={() => navigation.navigate('Join')}>
                Register
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  subcontainer: {alignItems: 'center'},
  linear: {
    fontSize: 35,
    fontWeight: '700',
    letterSpacing: 0.2,
    fontFamily: 'Lato-Regular',
  },
  title: {
    fontFamily: 'Mulish-Regular',
    marginTop: 20,
    fontSize: 16,
  },
  sign: {
    marginTop: 10,
    fontSize: 12,
    marginBottom: 20,
    color: 'grey',
    fontFamily: 'Mulish-Regular',
  },

  wrap2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  border: {
    width: 155,
    borderBottomWidth: 1,
    borderColor: color.grey,
  },
  txt: {
    fontWeight: '800',
    marginLeft: 20,
    marginRight: 20,
    color: '#979797',
    fontFamily: 'Mulish-Regular',
  },
  sosmed: {
    flexDirection: 'row',
    width: 370,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  txtsosmed: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: color.grey,
    fontFamily: 'Mulish-Regular',
  },
  midbottom: {
    fontFamily: 'Mulish-Regular',
    color: color.grey,
    letterSpacing: 0.5,
  },
  btnbottom: {
    fontFamily: 'Mulish-Regular',
    color: color.blueMain,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '700',
  },
  forgot: {
    fontFamily: 'Mulish-Regular',
    color: color.blueMain,
    fontWeight: '700',
  },
});

export default Login;
