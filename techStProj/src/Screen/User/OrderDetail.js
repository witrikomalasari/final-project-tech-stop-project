import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import {color} from '../../Default/color';
import {useDispatch, useSelector} from 'react-redux';
import Warn from '../../Assets/warn.png';
import moment from 'moment';
import UserDetailOrder from '../../Component/PageOrderUser';
import Buttontrans from '../../Component/Buttontrans';
import Buttongrad from '../../Component/Buttongrad';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDetailUser} from '../../Redux/Action/userOrderAction';

const OrderDetail = props => {
  const Orderdetail = useSelector(
    state => state.orderUserReducer.orderdetailuser,
  );

  const dispatch = useDispatch();

  // console.log('ini isi dari orderdetail: ', Orderdetail);

  const cancelOrder = id => {
    axios({
      method: 'PUT',
      url: 'https://techstop.gabatch11.my.id/transaction/cancel/' + id,
    })
      .then(({data}) => {
        console.log('woii data nih', data);
        dispatch(getDetailUser());
        // console.log('id loh', id);
      })
      .catch(err => {
        console.log(error);
      });
  };

  useEffect(() => {
    dispatch(getDetailUser());
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>ORDER DETAIL</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 15,
            borderRadius: 10,
            borderColor: color.lightgrey,
            borderWidth: 1,
            shadowColor: '#0000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}>
          <ImageBackground
            imageStyle={styles.imageStyle}
            source={{uri: Orderdetail.partner.partner_logo}}
            style={styles.imgback}
          />

          <View
            style={{
              width: '40%',
              flexDirection: 'column',
              marginHorizontal: 10,
            }}>
            <Text>{Orderdetail.partner.brand_service_name}</Text>
            <Text style={{color: '#50E590', marginTop: 5}}>
              {Orderdetail.partner.business_address}
            </Text>
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

        <View style={styles.service}>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: 'Mulish-Regular',
            }}>
            Order Status
          </Text>
          {(Orderdetail.order_status == 'accepted' &&
            Orderdetail.payment_status == 'pending') ||
          (Orderdetail.order_status == 'waiting' &&
            Orderdetail.payment_status == 'pending') ? (
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Mulish-Regular',
                    textTransform: 'capitalize',
                  }}>
                  {Orderdetail.order_status} the booking date :{' '}
                </Text>
                <Text
                  style={{fontFamily: 'Mulish-Regular', color: color.blueMain}}>
                  {moment(Orderdetail.appointment_date).format('DD MMMM YYYY')}
                </Text>
              </View>
            </View>
          ) : Orderdetail.order_status == 'on process' &&
            Orderdetail.payment_status == 'success' ? (
            <View>
              <Text style={{fontFamily: 'Mulish-Regular', marginBottom: 15}}>
                The mechanic is on the way to your house
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '70%',
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,
                  }}>
                  <Image
                    source={{uri: Orderdetail.partner.partner_logo}}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: 20,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Mulish-Regular',
                        fontWeight: 'bold',
                        paddingBottom: 5,
                      }}>
                      {Orderdetail.partner.brand_service_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Mulish-Regular',
                      }}>
                      {Orderdetail.partner.business_phone}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ) : Orderdetail.order_status == 'on process' &&
            Orderdetail.payment_status == 'success' ? (
            <View>
              <Text style={{fontFamily: 'Mulish-Regular', marginBottom: 15}}>
                Service in progress
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '70%',
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,
                  }}>
                  <Image
                    source={{uri: Orderdetail.partner.partner_logo}}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: 20,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Mulish-Regular',
                        fontWeight: 'bold',
                        paddingBottom: 5,
                      }}>
                      {Orderdetail.partner.brand_service_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Mulish-Regular',
                      }}>
                      {Orderdetail.partner.business_phone}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ) : Orderdetail.order_status == 'done' &&
            Orderdetail.payment_status == 'success' ? (
            <View style={{alignItem: 'center'}}>
              <Text style={{alignItem: 'center', justifyContent: 'center'}}>
                How was this services?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItem: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="star" size={25} color="grey" />
                <AntDesign name="star" size={25} color="grey" />
                <AntDesign name="star" size={25} color="grey" />
                <AntDesign name="star" size={25} color="grey" />
                <AntDesign name="star" size={25} color="grey" />
              </View>
              <TextInput
                placeholder="Write your review about this service"
                style={{
                  width: '90%',
                  height: 60,
                  borderWidth: 1,
                  borderColor: color.midgrey,
                  borderRadius: 6,
                  alignItem: 'center',
                  justifyContent: 'center',
                }}
              />
              <View
                style={{
                  width: '40%',
                  height: 60,
                  backgroundColor: '#0796C6',
                  borderRadius: 7,
                  alignItem: 'center',
                }}>
                <Text style={{color: color.white, marginBottom: 40}}>
                  Submit
                </Text>
                <View
                  style={{
                    borderColor: color.grey,
                    borderWidth: 1,
                    width: '90%',
                    alignItem: 'center',
                  }}></View>
              </View>
            </View>
          ) : null}
        </View>
        <View style={styles.carddetailuser}>
          <UserDetailOrder
            categoryName={Orderdetail.partner.category.category_name}
            appointmentDate={moment(Orderdetail.appointment_date).format(
              'DD MMMM YYYY',
            )}
            appointmentAddress={Orderdetail.appointment_address}
            totalItem={Orderdetail.total_item}
            totalFee={Orderdetail.total_fee}
            userName={Orderdetail.user.name}
            userPhonenumber={Orderdetail.user.phone_number}
            serviceFee={Orderdetail.total_fee}
            totalPayment={Orderdetail.total_fee}
            // onPressButton={() => props.navigation.navigate('Detail')}
            // dispatch(getDetailloc(e));
          />
        </View>

        <View style={styles.bottom}>
          <View
            style={{
              width: '100%',
              height: 60,
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <Image
              source={Warn}
              style={{
                width: 18,
                height: 18,
                marginRight: 10,
                marginTop: 10,
              }}
            />
            <Text
              style={{
                width: '85%',
                height: 80,
                marginVertical: 10,
                textAlign: 'justify',
                fontSize: 12,
                fontFamily: 'Mulish-Regular',
                fontWeight: '400',
                alignItems: 'center',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              proin diam rhoncus, orci lacus eu consequat.
            </Text>
          </View>

          <View style={styles.bottombutton}>
            <Buttontrans
              title="Cancel Booking"
              onPressButton={() => {
                cancelOrder(Orderdetail.id);
                props.navigation.navigate('TabNavigator');
              }}
            />
            {Orderdetail.payment_status == 'done' ? (
              <Buttongrad disable={true} />
            ) : (
              <Buttongrad
                title="Pay Now"
                onPressButton={() => {
                  props.navigation.navigate('WebView');
                }}
              />
            )}
          </View>
        </View>
      </View>
    </ScrollView>
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
  imageStyle: {
    width: '100%',
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imgback: {
    width: '25%',
    height: 75,
  },

  service: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  bottom: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottombutton: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-around',
  },
});

export default OrderDetail;
