import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {color} from '../../Default/color';
import Buttontrans from '../../Component/Buttontrans';
import Buttongrad from '../../Component/Buttongrad';
import ImagePicker from 'react-native-image-crop-picker';

const RegisPemilik = props => {
  const [fullname, setFullname] = useState('Sudarmadi');
  const [password, setPassword] = useState('Madi123!!');
  const [confirmPassword, setConfirmPassword] = useState('Madi123!!');
  const [address, setAddress] = useState(
    'Jl. Cempaka Baru Timur Bandung Selatan',
  );
  const [domicile, setDomicile] = useState('Bandung');
  const [ktp_image, setKtp_image] = useState({
    type: '',
    path:
      'data:image/jpeg;base64,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',
    name: '',
  });

  const imgpic = () => {
    ImagePicker.openPicker({})
      .then(images => {
        // console.log('KTP IMAGE: ', images);
        setKtp_image({
          type: images.mime,
          uri: images.path,
          name: images.path.split('/')[9],
        });
      })
      .catch(e => alert(e));
  };

  // const imgpiclogo = () => {
  //   ImagePicker.openPicker({})
  //     .then(images => {
  //       // console.log('KTP IMAGE: ', images);
  //       setLogo({
  //         type: images.mime,
  //         uri: images.path,
  //         name: images.path.split('/')[9],
  //       });
  //     })
  //     .catch(e => alert(e));
  // };

  const brand = props.route.params.datausaha[0];
  const businessphone = props.route.params.datausaha[1];
  const phonenumber = props.route.params.datausaha[2];
  const servicefee = props.route.params.datausaha[3];
  const value = props.route.params.datausaha[4];
  const valueservice = props.route.params.datausaha[5];
  const emailpartner = props.route.params.datausaha[6];

  const dataPartner = [
    brand,
    businessphone,
    phonenumber,
    servicefee,
    value,
    valueservice,
    emailpartner,
    fullname,
    password,
    confirmPassword,
    address,
    domicile,
    ktp_image,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image source={require('../../Assets/header.png')} />
        <Text style={styles.header}>Formulir Pendaftaran Mitra</Text>
        <Text style={styles.midheader}>2/3. Data Pemilik</Text>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        style={{backgroundcolor: 'red', marginTop: 100}}>
        <View style={{flex: 1}}>
          <View style={styles.textinput}>
            <Text
              style={{
                fontFamily: 'Mulish-Regular',
                paddingBottom: 10,
                fontSize: 14,
              }}>
              Nama Lengkap
            </Text>
            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.txt}
              placeholder="Fullname"
              value={fullname}
              onChangeText={setFullname}
            />

            <Text style={styles.txtajah}>Password</Text>
            <TextInput
              style={styles.txt}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <Text style={styles.txtajah}>Confirm Password</Text>
            <TextInput
              style={styles.txt}
              placeholder="Confirm Password"
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword(text)}
            />

            <Text style={styles.txtajah}>Alamat Sesuai KTP</Text>
            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.txt}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

            <Text style={styles.txtajah}>Alamat Domisili</Text>
            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.txt}
              placeholder="Domicile"
              value={domicile}
              onChangeText={setDomicile}
            />
          </View>
          <View style={styles.upload}>
            <Text style={{fontFamily: 'Mulish-Regular', marginBottom: 20}}>
              Upload Dokumen
            </Text>
            <Text style={styles.doc}>
              Silakan unggah foto dokumen berikut dan isi informasi yang
              diperlukan (JPG / PDF max 1Mb)
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              borderWidth: 1,
              borderColor: 'black',
            }}
            onPress={imgpic}>
            <Image
              style={{width: 120, height: 120}}
              source={{uri: ktp_image?.uri}} //else show random
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonbottom}>
          <Buttontrans
            title="Cancel"
            // jika ada 2 function harus ditutup dengan 1 curly bracket
            onPressButton={() => props.navigation.navigate('RegisUsaha')}
          />
          <Buttongrad
            title="Next Step"
            // jika ada 2 function harus ditutup dengan 1 curly bracket
            onPressButton={() =>
              props.navigation.navigate('Term', {partner: dataPartner})
            }
          />
        </View>
      </ScrollView>
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
    width: '100%',
    height: 110,
    position: 'absolute',
    top: 0,
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
  midheader: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: color.blueMain,
    marginLeft: 15,
    fontFamily: 'Mulish-Regular',
  },
  txt: {
    paddingLeft: 10,
    width: 379,
    height: 45,
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'Mulish-Regular',
  },
  txtajah: {
    fontFamily: 'Mulish-Regular',
    paddingBottom: 10,
    marginTop: 10,
    fontSize: 14,
  },
  upload: {
    width: 379,
    fontWeight: '700',
    fontFamily: 'Mulish-Regular',
    paddingBottom: 20,
    fontSize: 14,
  },
  doc: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: '#717171',
    fontWeight: '400',
  },
  bottom: {
    width: 250,
    height: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginRight: 10,
    justifyContent: 'center',
  },
  ktp: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    fontWeight: '700',
    color: color.darkGrey,
  },
  up: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: color.greygrey,
  },
  imagepic: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: color.greygrey,
  },
  buttonbottom: {
    flexDirection: 'row',
    marginTop: 90,
    marginBottom: 100,
    justifyContent: 'space-between',
  },
});

export default RegisPemilik;
