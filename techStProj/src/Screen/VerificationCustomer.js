import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {color} from '../Default/color';
import CustomButton from '../Component/CustomButton';
import fb from '../Assets/fb1.png';
import google from '../Assets/Google.png';
import {useDispatch} from 'react-redux';
import {emailAccess} from '../Redux/Action/userAction';

const VerificationCustomer = ({navigation}) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  // console.log(email);

  // const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regex = /\./g;
  const Emailhandler = async () => {
    if (email.match('@') && email.match(regex) && email.length > 8) {
      await dispatch(emailAccess(email));
      setEmail('');
      await navigation.navigate('Verification', {
        role: 'customer',
      });
    } else {
      alert('error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{marginTop: 30, fontSize: 24}}>Daftar Sekarang</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop: 20, fontSize: 14}}>
          Sudah Punya Akun di Tech Stop?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.touch}> Masuk</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrap}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.sosmed}>
              <Image source={fb} style={styles.imgfb}></Image>
              <Text style={styles.fb}>Facebook </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.sosmed}>
            <Image
              source={google}
              style={{position: 'absolute', right: 120}}></Image>
            <Text style={styles.google}>Google</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.wrap2}>
        <View style={styles.add}></View>
        <Text style={styles.border}>atau daftar dengan</Text>
        <View style={styles.add}></View>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.textinput}>
          <Text style={{paddingBottom: 10, fontSize: 15}}>Email</Text>
          <TextInput
            style={styles.txtinput}
            placeholder="Email"
            value={email}
            onChangeText={val => setEmail(val)}
          />
          <Text style={{fontSize: 10, color: '#797979'}}>
            example : yourname@yourmail.com
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', bottom: 30}}>
        <CustomButton
          title="Daftar"
          // jika ada 2 function harus ditutup dengan 1 curly bracket
          onPressButton={() => Emailhandler()}
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

  textinput: {
    flex: 1,
    width: 379,
    color: color.darkgrey,
    paddingBottom: 30,
    marginTop: 30,
    fontSize: 10,
  },
  touch: {
    marginTop: 20,
    fontSize: 14,
    marginLeft: 5,
    color: color.blueMain,
  },
  wrap: {
    width: 379,
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sosmed: {
    width: 170,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.lightgrey,
    borderWidth: 1,
    borderRadius: 10,
  },
  imgfb: {
    position: 'absolute',
    right: 130,
  },
  fb: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: color.grey,
    marginLeft: 20,
    fontFamily: 'Mulish-Regular',
  },
  google: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: color.grey,
    marginLeft: 20,
    fontFamily: 'Mulish-Regular',
  },
  wrap2: {
    width: 379,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    width: 105,
    borderBottomWidth: 1,
    borderColor: color.lightgrey,
  },
  border: {
    fontWeight: '400',
    marginLeft: 20,
    marginRight: 20,
    color: '#979797',
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
  },
  txtinput: {
    borderColor: color.lightgrey,
    borderRadius: 6,
    borderWidth: 1,
    paddingLeft: 15,
  },
});

export default VerificationCustomer;
