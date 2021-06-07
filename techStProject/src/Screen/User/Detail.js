import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {color} from '../../Default/color';
import arrowgo from '../../Assets/arrowgo.png';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';
import moment, {invalid} from 'moment';
import Rating from '../../Component/Rating';

const Detail = props => {
  const detailloc = useSelector(state => state.categoryReducer.detailloc);
  // console.log('props', props);
  const [radioButton, setRadioButton] = useState(null);
  const [price, setPrice] = useState('');
  const idpartner = props.route.params.idpartner; //1

  const ServicePlan = [
    {
      key: Math.random(),
      name: 1,
      price: detailloc.service_fee,
    },
    {
      key: Math.random(),
      name: 2,
      price: detailloc.service_fee * 2,
    },
    {key: Math.random(), name: 3, price: detailloc.service_fee * 3},
    {key: Math.random(), name: 4, price: detailloc.service_fee * 4},
  ];

  const handleradioButton = name => {
    setRadioButton(name);
  };

  const handlePrice = price => {
    setPrice(price);
  };

  const [date, setDate] = useState('Select Date');
  const [datestatus, setDatestatus] = useState(false);

  // console.log('ini date', datestatus);

  const handleCalendar = () => {
    setDatestatus(!datestatus);
  };

  const datePic = date ? date.toString() : '';

  const maxDate = moment(datePic).format('DD MMMM YYYY');

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: 15,
          borderRadius: 10,
          borderColor: color.midgrey,
          borderWidth: 1,
        }}>
        <Image source={{uri: detailloc.partner_logo}} style={styles.image} />
        <View
          style={{
            flexDirection: 'column',
            paddingLeft: 5,
          }}>
          <Text style={{color: 'black', marginBottom: 5}}>
            {detailloc.brand_service_name}
          </Text>
          <Text style={{color: '#50E590', marginBottom: 5}}>
            {detailloc.business_address}
          </Text>
          <Rating rate={detailloc.avg_rating} />
        </View>
        <View
          style={{
            width: '20%',
            height: 30,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            borderRadius: 10,
            borderColor: '#50E590 ',
          }}>
          <Text style={{color: '#50E590'}}>Chat</Text>
        </View>
      </View>
      <View style={styles.unitcontainer}>
        <Text style={{marginBottom: 10}}> Choose service plan</Text>
        <View style={styles.unit}>
          {ServicePlan.map(e => {
            // console.log(e);
            return (
              <View key={e.key}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginVertical: 8,
                  }}>
                  <Text style={{fontSize: 16}}>{e.name} Unit</Text>
                  <View
                    style={{
                      width: '35%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 16}}>Rp. {e.price}</Text>
                    <MaterialIcons
                      onPress={() => {
                        handlePrice(e.price);
                        handleradioButton(e.name);
                      }}
                      name="panorama-fish-eye"
                      size={25}
                      style={
                        e.name === radioButton && e.price === price
                          ? styles.iconmark
                          : styles.icondefault
                      }
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={{
          flex: 1.8,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 40,
        }}>
        <Text>Book For</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginTop: 5,
          }}>
          <TextInput
            style={{width: '100%', height: 35, paddingLeft: 5}}
            placeholder="Selected Date"
            value={
              maxDate == 'Invalid date' ? 'select date' : maxDate.toString()
            }
          />

          <TouchableOpacity onPress={handleCalendar}>
            <AntDesign
              style={{
                paddingRight: 10,
                paddingTop: 5,
              }}
              name="calendar"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>

      {datestatus == true ? (
        <View style={styles.calender}>
          <CalendarPicker
            startFromMonday={false}
            format="DD MMMM YYYY"
            minimumDate="31 MAY 2021"
            maximumDate="20 MAY 2025"
            onDateChange={e => {
              setDate(e);
              handleCalendar();
            }}
            width={280}
          />
        </View>
      ) : null}

      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('AddressDetail', {
            unit: radioButton,
            bookfor: maxDate,
            idpartner: idpartner,
            price: price,
          })
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
            <View>
              <Text style={{fontFamily: 'Mulish-Regular', color: color.white}}>
                Next{' '}
              </Text>
              <Text style={{fontFamily: 'Mulish-Regular', color: color.white}}>
                Address Detail{' '}
              </Text>
            </View>
            <View>
              <Image source={arrowgo} />
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  subcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: {
    width: '30%',
    height: 87,
    resizeMode: 'stretch',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },

  unitcontainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  unit: {
    marginVertical: 2,
  },

  linear: {
    width: '90%',
    height: 50,
    marginBottom: 10,
  },

  icondefault: {
    backgroundColor: color.white,
    borderRadius: 20,
  },
  iconmark: {
    backgroundColor: color.blueMain,
    borderRadius: 50,
  },
  calender: {
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 35,
    top: 370,
    zIndex: 100,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default Detail;

// <View style={styles.tomac}>
// <Text style={styles.title}>{detailloc.brand_service_name}</Text>

// <View style={{flexDirection: 'row', paddingTop: 20}}>
//   <View style={{flexDirection: 'row', alignItems: 'center'}}>
//     <Image
//       style={styles.image2}
//       source={require('../../Assets/loc.png')}
//     />
//     <Text style={styles.jkt}>Jakarta</Text>
//   </View>
//   <View style={styles.border}></View>
//   <View>
//     <Text>{detailloc.business_address}</Text>
//   </View>
// </View>
// <View style={styles.border2}></View>
// <View style={{paddingTop: 10}}>
//   <Text style={styles.fee}>Rp. {detailloc.service_fee}</Text>
// </View>
// <View style={{marginTop: 10}}>
//   <Text style={styles.paragraf}>{detailloc.service_description}</Text>
// </View>
// </View>
