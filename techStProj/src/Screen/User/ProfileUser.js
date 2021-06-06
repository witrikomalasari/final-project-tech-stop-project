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
import {getUserDetailAction} from '../../Redux/Action/userAction';
import Setting from '../../Assets/setting.png';
import Contact from '../../Assets/user.png';
import Term from '../../Assets/info.png';
import Logout from '../../Assets/logout.png';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AccountPhoto from '../../Assets/userpic.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileUser = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [value, setValue] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.userReducer.profile);

  // console.log(userDetail);

  useEffect(() => {
    dispatch(getUserDetailAction());
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
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                  {userDetail.name}
                </Text>
                <Text styles={{marginBottom: 5}}>
                  {userDetail.phone_number}
                </Text>
                <Text styles={{marginBottom: 5}}>{userDetail.email}</Text>
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
                await AsyncStorage.removeItem('access_token');
                navigation.navigate('Login');
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
  },
  textAccountBox: {
    paddingHorizontal: 20,
  },
});

export default ProfileUser;

{
  /*

        <View>
          <TextInput
            onChangeText={setName}
            value={name}
            style={styles.input}
            placeholder={userDetail.name}
            placeholderTextColor={color.black}
          />
        </View>
        <View>
          <TextInput
            onChangeText={setEmail}
            value={email}
            style={styles.input}
            placeholder={userDetail.email}
            placeholderTextColor={color.black}
          />
        </View>
        <View>
          <TextInput
            onChangeText={setPhonenumber}
            value={phonenumber}
            style={styles.input}
            placeholder={userDetail.phone_number}
            placeholderTextColor={color.black}
          />
        </View>
        <View>
          <TextInput
            onChangeText={setValue}
            value={value}
            style={styles.input}
            placeholder={userDetail.city_or_regional}
            placeholderTextColor={color.black}
          />
        </View>
*/
}

// const openImagePicker = () => {
//   ImagePicker.openPicker({
//     width: 300,
//     height: 400,
//     waitAnimationEnd: false,
//     cropping: true,
//   }).then(image => {
//     console.log('response', image);
//   });
// };

// const editUser = async () => {
//   const token = await AsyncStorage.getItem('access_token');
//   const AuthStr = 'Bearer '.concat(token);

//   axios({
//     method: 'PUT',
//     url: `${API_URL1}/user/update/`,
//     headers: {Authorization: AuthStr},

//     data: {
//       email,
//       nama,
//       password,
//       confirmPassword,
//     },
//   })
//     .then(({data}) => {
//       setEmail('');
//       setPassword('');
//       setNama('');
//       setConfirmPassword('');
//       alert('edit profile succes');
//     })
//     .catch(err => {
//       setEmail('');
//       setPassword('');
//       setNama('');
//       setConfirmPassword('');
//       alert(err.message);
//     });
// };
