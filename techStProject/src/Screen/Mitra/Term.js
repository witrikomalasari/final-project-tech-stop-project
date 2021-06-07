import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {color} from '../../Default/color';
import ReadMore from 'react-native-read-more-text';
import CheckBox from '@react-native-community/checkbox';
import Buttontrans from '../../Component/Buttontrans';
import Buttongrad from '../../Component/Buttongrad';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';

const Term = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // console.log('ini props term', props);
  const navigation = useNavigation();

  const brand = props.route.params.partner[0];
  // console.log(brand);
  const businessphone = props.route.params.partner[1];
  const phonenumber = props.route.params.partner[2];
  const servicefee = props.route.params.partner[3];
  const value = props.route.params.partner[4];
  const valueservice = props.route.params.partner[5];
  const emailpartner = props.route.params.partner[6];
  const fullname = props.route.params.partner[7];
  const password = props.route.params.partner[8];
  const confirmPassword = props.route.params.partner[9];
  const address = props.route.params.partner[10];
  const domicile = props.route.params.partner[11];
  const ktp_image = props.route.params.partner[12];

  const RegisPartner = () => {
    var data = new FormData();
    data.append('name', fullname);
    data.append('email', emailpartner);
    data.append('password', password);
    data.append('confirmPassword', confirmPassword);
    data.append('phone_number', phonenumber);
    data.append('owner_address', domicile);
    data.append('ktp_address', address);
    data.append('brand_service_name', brand);
    data.append('business_phone', businessphone);
    data.append('business_address', value);
    data.append('category_name', valueservice);
    data.append('service_fee', servicefee);
    data.append('ktp_image', ktp_image);

    var config = {
      method: 'POST',
      url: 'https://techstop.gabatch11.my.id/auth/signup/partner',

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'multipart/form-data',
        // 'Access-Control-Allow-Origin': '*',
      },
      data: data,
    };

    axios(config)
      .then(function ({data}) {
        AsyncStorage.setItem('token', data.token, error => {
          if (!error) {
            // setName('');
            // setPassword('');
            // setConfirmPassword('');
            // setPhonenumber('');
            // setValue(null);
            // setPostalcode('');
            // console.log(data);
            props.navigation.navigate('TabNavigatorMitra');
          }
        });
      })
      .catch(function (error) {
        console.log(error);
        // alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image source={require('../../Assets/header.png')} />
        <Text style={styles.header}>Partner Registration Form</Text>
        <Text style={styles.header2}>3/3. Term dan Condition</Text>
      </View>
      <View style={styles.paragraf}>
        <ReadMore numberOfLines={3} style={styles.textStyle}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </ReadMore>

        <View style={{flexDirection: 'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            style={{marginTop: 20}}
          />
          <View style={styles.term}>
            <Text style={{fontFamily: 'Mulish-Regular'}}>
              I Have read and agree to the term of registration of service
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Buttontrans
          title="Cancel"
          // jika ada 2 function harus ditutup dengan 1 curly bracket
          onPressButton={() => navigation.navigate('RegisPemilik')}
        />
        <Buttongrad
          title="Save"
          // jika ada 2 function harus ditutup dengan 1 curly bracket
          onPressButton={() => RegisPartner()}
        />
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
  subcontainer: {
    flex: 1,
    width: '100%',
    height: 110,
    position: 'absolute',
    top: 0,
  },
  safe: {
    flex: 1,
  },
  root: {
    flex: 1,
    padding: 16,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
  },
  header: {
    position: 'absolute',
    top: 23,
    marginLeft: 18,
    fontSize: 15,
    fontWeight: '800',
    color: color.white,
    fontFamily: 'Mulish-Regular',
  },
  header2: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: color.blueMain,
    marginLeft: 15,
    fontFamily: 'Mulish-Regular',
  },
  paragraf: {
    width: 379,
    height: 220,
    marginTop: 120,
    marginBottom: 10,
    fontFamily: 'Mulish-Regular',
  },
  term: {
    width: 340,
    marginTop: 20,
    marginLeft: 20,
    fontFamily: 'Mulish-Regular',
  },
  bottom: {
    flexDirection: 'row',
    width: 379,
    marginTop: 220,
    marginBottom: 100,
    justifyContent: 'space-between',
  },
});

export default Term;
