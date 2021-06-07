import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import {color} from '../../Default/color';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import phone from '../../Assets/phone.png';
import arrowgo from '../../Assets/arrowgo.png';
import CheckBox from '@react-native-community/checkbox';
// import {getTopRated} from '../../Redux/Action/categoryAction';

const AddressDetail = props => {
  // console.log('p', props);
  const detailloc = useSelector(state => state.categoryReducer.detailloc);
  const profile = useSelector(state => state.userReducer.profile);

  const [fulladdress, setFulladdress] = useState('');
  const [cor, setCor] = useState(profile.city_or_regional);
  const [postalcode, setPostalcode] = useState(profile.postal_code.toString());
  const [contactperson, setContactperson] = useState(profile.phone_number);
  const [name, setName] = useState(profile.name);
  const [booking, setBooking] = useState(false);

  const bookfor = props.route.params.bookfor;
  const totalitem = props.route.params.unit.toString();
  const idpartner = props.route.params.idpartner.toString();
  const price = props.route.params.price;

  // console.log('ini adalah isi props addressdetail:', props);

  const detailorder = [
    fulladdress,
    cor,
    postalcode,
    contactperson,
    name,
    bookfor,
    totalitem,
    idpartner,
    price,
  ];

  // useEffect(() => {
  //   getTopRated();
  // }, []);

  // console.log(
  //   'ini isi dari detailorder:',
  //   fulladdress,
  //   cor,
  //   postalcode,
  //   contactperson,
  //   name,
  //   bookfor,
  //   totalitem,
  //   booking,
  // );

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Address Detail</Text>
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontFamily: 'Mulish-Regular',
              fontSize: 16,
              marginBottom: 5,
              marginTop: 10,
            }}>
            Full Address
          </Text>

          <TextInput
            // onFocus={() => setFocus(true)}
            style={{
              paddingLeft: 10,
              height: 75,
              borderColor: color.grey,
              borderWidth: 1,
              borderRadius: 6,
              fontFamily: 'Mulish-Regular',
              alignItems: 'center',
              marginBottom: 15,
            }}
            multiline={true}
            textAlign="left"
            placeholder="Please insert your  full address"
            value={fulladdress}
            onChangeText={setFulladdress}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontFamily: 'Mulish-Regular',
              fontSize: 16,
              marginBottom: 5,
            }}>
            City of Regional
          </Text>
          <TextInput
            // onFocus={() => setFocus(true)}
            style={styles.Txtinput}
            placeholder="Please insert your city or Regional"
            value={cor}
            onChangeText={setCor}
          />
        </View>
        <View style={{width: '60%'}}>
          <Text
            style={{
              fontFamily: 'Mulish-Regular',
              fontSize: 16,
              marginBottom: 5,
            }}>
            Postal Code
          </Text>
          <TextInput
            // onFocus={() => setFocus(true)}
            style={styles.Txtinput}
            // placeholder="Please insert your postal code"
            value={postalcode}
            onChangeText={setPostalcode}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontFamily: 'Mulish-Regular',
              fontSize: 16,
              marginBottom: 5,
            }}>
            Contact Person
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInput
              // onFocus={() => setFocus(true)}
              style={styles.Txtinput}
              placeholder="Please insert a number"
              value={contactperson}
              onChangeText={setContactperson}
            />
          </View>
          <TextInput
            // onFocus={() => setFocus(true)}
            style={styles.Txtinput}
            placeholder="Please insert a name"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            disabled={false}
            value={booking}
            onValueChange={newValue => setBooking(newValue)}
            style={{marginTop: 20}}
          />
          <View style={styles.term}>
            <Text style={{fontFamily: 'Mulish-Regular'}}>Add me as booker</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('SummaryOrder', {order: detailorder})
          }
          style={{alignItems: 'center'}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#0796C6', '#50E590']}
            style={styles.linear}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{fontFamily: 'Mulish-Regular', color: color.white}}>
                  Next{' '}
                </Text>
                <Text
                  style={{fontFamily: 'Mulish-Regular', color: color.white}}>
                  Summary Order{' '}
                </Text>
              </View>
              <View>
                <Image source={arrowgo} />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  subcontainer: {
    flex: 2,
    margin: 20,
    backgroundColor: color.white,
  },
  title: {fontSize: 20, fontWeight: '700', fontFamily: 'Mulish-Regular'},

  wrap: {},
  Txtinput: {
    paddingLeft: 10,
    height: 45,
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'Mulish-Regular',
    alignItems: 'center',
    marginBottom: 15,
  },
  linear: {
    width: '100%',
    height: 50,
    marginTop: 30,
  },
  term: {
    width: 340,
    marginTop: 20,
    marginLeft: 10,
  },
});

export default AddressDetail;
