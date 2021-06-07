import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import {color} from '../../Default/color';
import Buttontrans from '../../Component/Buttontrans';
import Buttongrad from '../../Component/Buttongrad';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch, useSelector} from 'react-redux';
import {emailAccessPartner} from '../../Redux/Action/userAction';

const RegisUsaha = ({navigation}) => {
  const [brand, setBrand] = useState('');
  const [businessphone, setBusinessPhone] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [servicefee, setServiceFee] = useState('');
  const [value, setValue] = useState('');
  const [valueservice, setValueService] = useState('');
  const emailpartner = useSelector(state => state.userReducer.emailpartner);
  console.log(emailpartner);

  const dataUsaha = [
    brand,
    businessphone,
    phonenumber,
    servicefee,
    value,
    valueservice,
    emailpartner,
  ];

  //dropdown
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [location, setLocation] = useState([
    {id: 1, label: 'DKI Jakarta', value: 'DKI Jakarta'},
    {id: 2, label: 'Bandung', value: 'Bandung'},
    {id: 3, label: 'Bekasi', value: 'Bekasi'},
    {id: 4, label: 'Surabaya', value: 'Surabaya'},
    {id: 5, label: 'Semarang', value: 'Semarang'},
    {id: 6, label: 'Medan', value: 'Medan'},
    {id: 7, label: 'Padang', value: 'Padang'},
  ]);
  const [usaha, setUsaha] = useState([
    {id: 1, label: 'Air Conditioner', value: 'Air Conditioner'},
    {id: 2, label: 'Automotive', value: 'Automotive'},
    {id: 3, label: 'Computer', value: 'Computer'},
    {id: 4, label: 'Home Appliance', value: 'Home Appliance'},
    {id: 5, label: 'Electronics', value: 'Electronics'},
    {id: 6, label: 'Tailors', value: 'Tailors'},
    {id: 7, label: 'Furnitures', value: 'Furnitures'},
    {id: 8, label: 'Plumbing', value: 'Plumbing'},
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image source={require('../../Assets/header.png')} />
        <Text style={styles.header}>Partner Registration Form</Text>
        <Text style={styles.header2}>1/3. Business Data</Text>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 100}}>
        <View style={{flex: 1}}>
          <View style={styles.textinput}>
            <View style={styles.wrapbintang}>
              <Text style={styles.txtajah}>Brand service name</Text>
              <Text style={styles.bintang}>*</Text>
            </View>

            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.txtinput}
              placeholder="Brand service name"
              value={brand}
              onChangeText={setBrand}
            />

            <View style={styles.wrapbintang}>
              <Text style={styles.txtajah}>Business Address</Text>
              <Text style={styles.bintang}>*</Text>
            </View>

            <View>
              <DropDownPicker
                dropDownDirection="BOTTOM"
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

            <View style={styles.wrapbintang}>
              <Text style={styles.txtajah}>Business Phone</Text>
              <Text style={styles.bintang}>*</Text>
            </View>

            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.txtinput}
              placeholder="Business Phone"
              value={businessphone}
              onChangeText={setBusinessPhone}
            />

            <View style={styles.wrapbintang}>
              <Text style={styles.txtajah}>Phone Number</Text>
              <Text style={styles.bintang}>*</Text>
            </View>

            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.txtinput}
              placeholder="Phone Number"
              value={phonenumber}
              onChangeText={setPhonenumber}
            />

            <View style={styles.wrapbintang}>
              <Text style={styles.txtajah}>Email</Text>
              <Text style={styles.bintang}>*</Text>
            </View>

            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.txtinput}
              placeholder={emailpartner}
              editable={false}
            />

            <View style={styles.wrapbintang}>
              <Text style={styles.txtajah}>Type of Business Categories</Text>
              <Text style={styles.bintang}>*</Text>
            </View>

            <View>
              <DropDownPicker
                dropDownDirection="TOP"
                placeholder="Choose.."
                placeholderStyle={{
                  color: color.midgrey,
                  fontFamily: 'Mulish-Regular',
                }}
                open={open2}
                value={valueservice}
                items={usaha}
                setValue={setValueService}
                setItems={setUsaha}
                setOpen={setOpen2}
                style={styles.txtinput}
              />
            </View>

            <View style={styles.wrapbintang}>
              <Text style={styles.txtajah}>Service Fee</Text>
              <Text style={styles.bintang}>*</Text>
            </View>

            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.txtinput}
              placeholder="Service Fee"
              value={servicefee}
              onChangeText={setServiceFee}
            />
          </View>
        </View>

        <View style={styles.bottom}>
          <Buttontrans
            title="Cancel"
            // jika ada 2 function harus ditutup dengan 1 curly bracket
            onPressButton={() => navigation.navigate('Login')}
          />
          <Buttongrad
            title="Next Step"
            // jika ada 2 function harus ditutup dengan 1 curly bracket

            onPressButton={() => {
              navigation.navigate('RegisPemilik', {datausaha: dataUsaha});
            }}
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
  subcontainer: {
    flex: 1,
    width: '100%',
    height: 110,
    position: 'absolute',
    top: 0,
  },
  wrapbintang: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bintang: {
    width: '2%',
    height: 20,
    color: 'red',
    paddingLeft: 6,
    paddingTop: 4,
    justifyContent: 'center',
  },
  textinput: {
    color: color.darkgrey,
    paddingBottom: 30,
    marginTop: 30,
    fontSize: 10,
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
  bintang: {
    color: 'red',
  },
  header2: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: color.blueMain,
    marginLeft: 15,
    fontFamily: 'Mulish-Regular',
  },
  brand: {
    fontFamily: 'Mulish-Regular',
    paddingBottom: 10,
    fontSize: 14,
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
  txtajah: {
    fontFamily: 'Mulish-Regular',
    paddingBottom: 10,
    marginTop: 10,
    fontSize: 14,
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 70,
    justifyContent: 'space-between',
  },
});

export default RegisUsaha;
