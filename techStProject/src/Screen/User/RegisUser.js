import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {color} from '../../Default/color';
import Buttontrans from '../../Component/Buttontrans';
import Buttongrad from '../../Component/Buttongrad';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const RegisUser = ({navigation}) => {
  const [name, setName] = useState('Wendi Sapardi');
  const [password, setPassword] = useState('Wenwen123!!');
  const [confirmPassword, setConfirmPassword] = useState('Wenwen123!!');
  const [phonenumber, setPhonenumber] = useState('+6287877456599');
  const [value, setValue] = useState(null);
  const [postalcode, setPostalcode] = useState('10650');
  const email = useSelector(state => state.userReducer.email);
  // console.log(email);

  //dropdown
  // const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState([
    {key: Math.random(), label: 'Jakarta', value: 'Jakarta'},
    {key: Math.random(), label: 'Bandung', value: 'Bandung'},
    {key: Math.random(), label: 'Bekasi', value: 'Bekasi'},
    {key: Math.random(), label: 'Surabaya', value: 'Surabaya'},
    {key: Math.random(), label: 'Semarang', value: 'Semarang'},
    {key: Math.random(), label: 'Lampung', value: 'Lampung'},
    {key: Math.random(), label: 'Padang', value: 'Padang'},
  ]);

  const Regis = () => {
    var qs = require('qs');
    var data = qs.stringify({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone_number: phonenumber,
      city_or_regional: value,
      postal_code: postalcode,
    });
    var config = {
      method: 'post',
      url: 'https://techstop.gabatch11.my.id/auth/signup',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function ({data}) {
        AsyncStorage.setItem('access_token', data.token, error => {
          if (!error) {
            setName('');
            setPassword('');
            setConfirmPassword('');
            setPhonenumber('');
            setValue(null);
            setPostalcode('');
            navigation.navigate('TabNavigator');
          }
        });
      })
      .catch(function (error) {
        // console.log(error);
        alert(error.message);
      });
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../Assets/header.png')} />
          <Text style={styles.txtheader}>Cutomer Registration Form</Text>
          <Text style={styles.title}>New Profile</Text>
        </View>

        <View style={styles.subcontainer}>
          <View style={styles.textinput}>
            <Text style={styles.name}>Name</Text>
            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.txtinput}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.txtajah}>Email</Text>
            <TextInput
              style={styles.txtinput}
              placeholder={email}
              editable={false}
            />

            <Text style={styles.txtajah}>Password</Text>
            <TextInput
              style={styles.txtinput}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <Text style={styles.txtajah}>Confirm Password</Text>
            <TextInput
              style={styles.txtinput}
              placeholder="Confirm Password"
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword(text)}
            />

            <Text style={styles.txtajah}>Phone Number</Text>
            <TextInput
              style={styles.txtinput}
              placeholder="Phone Number"
              value={phonenumber}
              onChangeText={text => setPhonenumber(text)}
            />

            <Text style={styles.txtajah}>City of region</Text>
            <View>
              <DropDownPicker
                dropDownDirection="TOP"
                placeholder="Choose.."
                placeholderStyle={{
                  color: color.midgrey,
                  fontFamily: 'Mulish-Regular',
                }}
                open={open}
                value={value}
                items={location}
                setValue={setValue}
                setItems={setLocation}
                setOpen={setOpen}
                style={styles.txtinput}
              />
            </View>

            <Text style={styles.txtajah}>Postal Code</Text>
            <TextInput
              style={styles.txtinput}
              placeholder="Postal Code"
              value={postalcode}
              onChangeText={text => setPostalcode(text)}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Buttontrans
            title="Cancel"
            // jika ada 2 function harus ditutup dengan 1 curly bracket
            onPressButton={() => navigation.navigate('Join')}
          />
          <Buttongrad
            title="Save"
            // jika ada 2 function harus ditutup dengan 1 curly bracket
            onPressButton={() => Regis()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  subcontainer: {flex: 1, marginTop: 95},
  textinput: {
    color: color.darkgrey,
    paddingBottom: 30,
    marginTop: 30,
    fontSize: 10,
    fontFamily: 'Mulish-Regular',
  },
  header: {
    flex: 1,
    width: '100%',
    height: 110,
    position: 'absolute',
    top: 0,
  },
  txtheader: {
    position: 'absolute',
    top: 23,
    marginLeft: 18,
    fontSize: 15,
    fontWeight: '800',
    color: color.white,
    fontFamily: 'Mulish-Regular',
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: color.blueMain,
    marginLeft: 15,
    fontFamily: 'Mulish-Regular',
  },
  txtinput: {
    paddingLeft: 10,
    width: 379,
    height: 45,
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'Mulish-Regular',
  },
  name: {
    fontFamily: 'Mulish-Regular',
    paddingBottom: 5,
    fontSize: 10,
  },
  txtajah: {
    fontFamily: 'Mulish-Regular',
    paddingBottom: 5,
    marginTop: 10,
    fontSize: 10,
  },
  bottom: {
    width: 379,
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 60,
    justifyContent: 'space-between',
  },
});

export default RegisUser;
