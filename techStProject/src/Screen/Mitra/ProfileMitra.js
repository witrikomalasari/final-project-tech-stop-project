import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {color} from '../../Default/color';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMitraDetailAction,
  getUserDetailAction,
} from '../../Redux/Action/userAction';
import Setting from '../../Assets/setting.png';
import Contact from '../../Assets/user.png';
import Term from '../../Assets/info.png';
import Logout from '../../Assets/logout.png';
import LinearGradient from 'react-native-linear-gradient';
import Service from '../../Assets/service.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AccountPhoto from '../../Assets/userpic.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileMitra = props => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phonenumber, setPhonenumber] = useState('');
  // const [value, setValue] = useState(null);

  const dispatch = useDispatch();
  const mitraDetail = useSelector(state => state.userReducer.profilemitra);

  // console.log(mitraDetail);

  useEffect(() => {
    dispatch(getMitraDetailAction());
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#0796C6', '#50E590']}
          style={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
          <View
            style={{
              width: '90%',
              height: 130,
              paddingTop: 30,
              paddingLeft: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 16,
                color: color.white,
                letterSpacing: 0.2,
                fontWeight: '700',
              }}>
              TECH STOP
            </Text>
          </View>
        </LinearGradient>

        <View style={{bottom: 80}}>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              borderColor: '#EFEFEF',
              borderWidth: 1,
              borderRadius: 10,
              top: 15,
              marginVertical: 10,
              marginHorizontal: 20,
            }}>
            <View
              style={{
                width: '20%',
                marginVertical: 20,
                marginHorizontal: 20,
              }}>
              <Image
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                  width: 60,
                  height: 60,
                }}
                source={AccountPhoto}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginBottom: 5,
                    fontFamily: 'Mulish-Regular',
                  }}>
                  {mitraDetail.brand_service_name}
                </Text>
                <Text styles={{marginBottom: 5, fontFamily: 'Mulish-Regular'}}>
                  {mitraDetail.phone_number}
                </Text>
                <Text styles={{marginBottom: 5, fontFamily: 'Mulish-Regular'}}>
                  {mitraDetail.email}
                </Text>
              </View>
            </View>

            <TouchableOpacity
            // onPress={}
            >
              <Image
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                  width: 20,
                  height: 20,
                }}
                source={null} //ProfileEdit
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#EFEFEF',
            borderWidth: 5,
            borderRadius: 10,
            marginVertical: 20,
            marginHorizontal: 20,
            bottom: 60,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingLeft: 30,
            }}>
            <TouchableOpacity style={styles.accountBox}>
              <Image source={Setting} />
              <Text style={styles.textAccountBox}>Account Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('MyService')}
              style={styles.accountBox}>
              <Image source={Service} />
              <Text style={styles.textAccountBox}>My Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.accountBox}>
              <Image source={Contact} />
              <Text style={styles.textAccountBox}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.accountBox}>
              <Image source={Term} />
              <Text style={styles.textAccountBox}>Term & Condition</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.accountBox}
              onPress={async () => {
                await AsyncStorage.removeItem('token');
                props.navigation.navigate('Login');
              }}>
              <Image source={Logout} />
              <Text style={styles.textAccountBox}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },

  // pic: {
  //   width: 100,
  //   height: 100,
  //   marginBottom: 25,
  // },
  // headText: {
  //   color: '#FFC200',
  //   fontSize: 25,
  //   fontWeight: 'bold',
  //   marginBottom: 20,
  // },
  linear: {
    fontSize: 35,
    fontWeight: '700',
    letterSpacing: 0.2,
    fontFamily: 'Lato-Regular',
  },
  // form: {
  //   fontSize: 25,
  //   color: 'white',
  //   width: 300,
  //   height: 40,
  //   marginVertical: 5,
  //   borderBottomColor: '#FFC200',
  //   borderBottomWidth: 3,
  //   fontWeight: 'bold',
  // },

  textButton: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },

  accountBox: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAccountBox: {
    paddingHorizontal: 20,
    fontFamily: 'Mulish-Regular',
  },
});

export default ProfileMitra;
