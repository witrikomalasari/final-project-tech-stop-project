import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {orderTransaction} from '../../Redux/Action/Transaction';
import Rating from '../../Component/Rating';

const SummaryOrder = props => {
  const detailloc = useSelector(state => state.categoryReducer.detailloc);
  const dispatch = useDispatch();
  const orderUser = useSelector(state => state.orderUserReducer.order);

  // console.log('isi dari', orderUser);

  const idpartner = props.route.params.order[7];
  const appointmentDate = props.route.params.order[5];
  const appointmentAddress = props.route.params.order[0];
  const totalitem = props.route.params.order[6];
  const price = props.route.params.order[8];

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Summary</Text>
      </View>
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: 10,
          borderRadius: 10,
          borderColor: color.midgrey,
          borderWidth: 1,
        }}>
        <Image source={{uri: detailloc.partner_logo}} style={styles.image} />
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text>{detailloc.brand_service_name}</Text>
          <Text style={{color: '#50E590'}}>{detailloc.business_address}</Text>
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
            borderColor: '#50E590',
          }}>
          <Text style={{color: '#50E590'}}>Chat</Text>
        </View>
      </View>

      <View style={styles.bookfor}>
        <Text style={{marginVertical: 10}}>Book for</Text>
        <Text>{props.route.params.order[5]}</Text>
      </View>
      <View style={styles.serviceplan}>
        <Text style={{marginVertical: 10}}>Services Plan</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>{props.route.params.order[6]} unit</Text>
          <Text>Rp. {price}</Text>
        </View>
      </View>
      <View style={styles.address}>
        <Text style={{marginVertical: 15}}>Address</Text>
        <Text>{props.route.params.order[0]}</Text>
      </View>
      <View style={styles.contactperson}>
        <Text style={{marginVertical: 10}}>Contact Person</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{props.route.params.order[4]} - </Text>
          <Text>{props.route.params.order[3]}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={{marginVertical: 10, marginBottom: 20}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa proin
          diam rhoncus, orci lacus eu consequat.
        </Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(
              orderTransaction(
                idpartner,
                appointmentDate,
                appointmentAddress,
                totalitem,
              ),
            );
            // await dispatch(getDetailUser());
            props.navigation.navigate('Order');
          }}
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
                <Text
                  style={{fontFamily: 'Mulish-Regular', color: color.white}}>
                  Estimation Fee{' '}
                </Text>
                <Text
                  style={{fontFamily: 'Mulish-Regular', color: color.white}}>
                  Rp. {price}
                </Text>
              </View>
              <View
                style={{
                  width: '30%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Proceed</Text>
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

  title: {
    fontSize: 18,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
    marginTop: 20,
    paddingLeft: 20,
  },

  image: {
    width: '30%',
    height: 90,
    resizeMode: 'stretch',

    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  bookfor: {
    flex: 0.3,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  serviceplan: {
    flex: 0.3,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
  },

  txtTitle: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    marginVertical: 10,
    marginTop: 20,
    fontWeight: '700',
  },

  txt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '400',
  },

  address: {
    flex: 0.3,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  contactperson: {
    flex: 0.3,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  bottom: {
    flex: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,

    elevation: 2,
  },
  linear: {
    width: '95%',
    height: 50,
    marginBottom: 10,
  },
});

export default SummaryOrder;
