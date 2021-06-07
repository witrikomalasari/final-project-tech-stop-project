import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {color} from '../../Default/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getDetailMitra,
  getDetailUser,
  getOrderMitra,
  getOrderMitraWaiting,
} from '../../Redux/Action/userOrderAction';
import moment from 'moment';
import MitraOrder from '../../Component/CardHomeMit';
import {WebView} from 'react-native-webview';
import {getMitraDetailAction} from '../../Redux/Action/userAction';
import axios from 'axios';

const HomeMitra = props => {
  const dispatch = useDispatch();
  const OrderMitraWaiting = useSelector(
    state => state.orderUserReducer.ordermitrawaiting,
  );
  // console.log('i', OrderMitraWaiting);

  useEffect(async () => {
    dispatch(getOrderMitra());
    dispatch(getMitraDetailAction());
    dispatch(getOrderMitraWaiting());
    AsyncStorage.getItem('token', (err, token) => {
      if (token) {
        props.navigation.navigate('TabNavigatorMitra');
      }
    });
  }, []);

  return (
    <>
      <ScrollView
        style={{backgroundColor: 'white'}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          {/*category*/}
          <View>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 15,
                marginBottom: 5,
                fontFamily: 'Mulish-Regular',
                fontWeight: '700',
              }}>
              New Orders
            </Text>
          </View>
          <View style={styles.ordermitra}>
            {OrderMitraWaiting.map((e, index) => {
              // console.log('ini e', e);
              return (
                <MitraOrder
                  key={index}
                  id={e.id}
                  partnerlogo={e.partner.partner_logo}
                  totalItem={e.total_item}
                  totalFee={e.total_fee}
                  categoryName={e.partner.category.category_name}
                  appointmentAddress={e.appointment_address}
                  bookFor={moment(e.appointment_date).format('DD MMMM YYYY')}
                  onPressButton={async () => {
                    await dispatch(getDetailMitra(e.id));
                    await props.navigation.navigate('DetailMitra', {
                      idUser: e.user.id_user,
                    });
                  }}
                  // onPress={acceptOrder(e.id)}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },

  wrapcat: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  touch: {
    width: 100,
    alignItems: 'center',
    paddingLeft: 20,
  },
  catName: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  txtajah: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 15,
    fontFamily: 'Mulish-Regular',
  },
  ordermitra: {flex: 1, marginLeft: 10},
});

export default HomeMitra;

// featcher check-square
