import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {color} from '../../Default/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Warn from '../../Assets/warn.png';
import moment from 'moment';
import MitraDetailOrder from '../../Component/PageOrdetailMitra';
import Buttontrans from '../../Component/Buttontrans';
import Buttongrad from '../../Component/Buttongrad';
import Order from '../User/Order';
import CustomButton from '../../Component/CustomButton';
import {
  getDetailMitra,
  getOrderMitraWaiting,
  completeOrder,
} from '../../Redux/Action/userOrderAction';
import axios from 'axios';

const DetailMitra = props => {
  const OrderDetailMitra = useSelector(
    state => state.orderUserReducer.orderdetailmitra,
  );
  const ordermitraonprocess = useSelector(
    state => state.orderUserReducer.ordermitraonprocess,
  );
  console.log('ini mitra id', ordermitraonprocess);

  const [review, setReview] = useState('');
  const [button, setButton] = useState('');
  const dispatch = useDispatch();
  // console.log('ini props', props);

  const [status, setStatus] = useState();

  const declineOrderMitra = id => {
    axios({
      method: 'PUT',
      url: 'https://techstop.gabatch11.my.id/transaction/cancel/' + id,
    })
      .then(function ({data}) {
        console.log('woii data nih', data);
        dispatch(getDetailMitra());
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const acceptOrder = id => {
    axios({
      method: 'POST',
      url: 'https://techstop.gabatch11.my.id/transaction/accept/' + id,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          'Basic U0ItTWlkLXNlcnZlci13VlpMTnEtbHVtcmVGTHYzYmhDMFEzQkQ6',
      },
      data: JSON.stringify({}),
    })
      .then(function ({data}) {
        console.log('ini say', data);
        dispatch(getOrderMitraWaiting());
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    status == 'onprocess' && AsyncStorage.setItem('statusprocess', status);
  }, [status]);

  const [statusonproses, setStatusonproses] = useState();

  const proses = async () => {
    const a = await AsyncStorage.getItem('statusprocess');
    setStatusonproses(a);
  };

  useEffect(() => {
    // console.log('f', statusonproses);
  }, [statusonproses]);

  const completeOrder = id => {
    axios({
      method: 'PUT',
      url: 'https://techstop.gabatch11.my.id/transaction/complete/' + id,
    })
      .then(function (data) {
        console.log('woii data nih', data);
        // dispatch(getDetailMitraDone());
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.service}>
        <Text
          style={{
            marginVertical: 10,
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Mulish-Regular',
          }}>
          Status
        </Text>
        {/*accepted pending , waiting pending, done success, accepted failed, accepted pending
        {OrderDetailMitra.payment_status == 'success' &&
        OrderDetailMitra.order_status == 'on process' ? (
          <View
            style={{
              marginVertical: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Mulish-Regular',
                  textTransform: 'capitalize',
                }}>
                Waiting to go to customer house
              </Text>
            </View>

            <CustomButton
              title=" Go to customer’s house now"
              onPressButton={() => {}}
            />
          </View> */}
        {OrderDetailMitra.payment_status == 'success' &&
        OrderDetailMitra.order_status == 'on process' ? (
          <View>
            <Text style={{fontFamily: 'Mulish-Regular'}}>
              {statusonproses == 'onprocess'
                ? 'service in progress'
                : 'On the way to customer’s house'}
            </Text>
            <View>
              <CustomButton
                title={
                  statusonproses == 'onprocess' ? 'finish' : 'Start to Work'
                }
                onPressButton={async title => {
                  title == 'Start to Work'
                    ? setStatus('onprocess')
                    : title == 'finish' && completeOrder(OrderDetailMitra.id);
                  await proses();
                  props.navigation.navigate('OrderMitra');
                }}
              />
            </View>
          </View>
        ) : OrderDetailMitra.payment_status == 'success' &&
          OrderDetailMitra.order_status == 'done' ? (
          <View>
            <Text>Great! You’ve completed this order</Text>
            <Text>Give your review for this order</Text>
            <TextInput
              placeholder="Write your review about this order"
              style={{
                width: '80%',
                height: 60,
                borderWidth: 1,
                borderColor: color.midgrey,
                alignItems: 'center',
              }}
              value={review}
              onChangeText={setReview}
            />
            <View
              style={{
                width: '30%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0796C6',
              }}>
              <Text style={{color: color.white}}>Submit</Text>
            </View>
          </View>
        ) : null}
      </View>

      <View style={styles.carddetailmitra}>
        <MitraDetailOrder
          categoryName={OrderDetailMitra.partner.category.category_name}
          appointmentDate={moment(OrderDetailMitra.appointment_date).format(
            'DD MMMM YYYY',
          )}
          totalItem={OrderDetailMitra.total_item}
          totalFee={OrderDetailMitra.total_fee}
          appointmentAddress={OrderDetailMitra.appointment_address}
          userName={OrderDetailMitra.user.name}
          userPhonenumber={OrderDetailMitra.user.phone_number}
          serviceFee={OrderDetailMitra.total_fee}
          totalPayment={OrderDetailMitra.total_fee}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa proin
            diam rhoncus, orci lacus eu consequat.
          </Text>
        </View>
        {OrderDetailMitra.payment_status == 'success' ? (
          <TouchableOpacity
            style={{alignItems: 'center', marginBottom: 30}}
            OnPress={() => declineOrderMitra(OrderDetailMitra.id)}>
            <Text style={{color: 'red', fontSize: 17}}>Cancel Booking</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.bottombutton}>
            <Buttontrans
              title="Decline"
              // jika ada 2 function harus ditutup dengan 1 curly bracket
              onPressButton={async () => {
                await declineOrderMitra(OrderDetailMitra.id);
                await props.avigation.navigate('HomeMit');
              }}
            />
            <Buttongrad
              title="Accept"
              // jika ada 2 function harus ditutup dengan 1 curly bracket

              onPressButton={() => {
                acceptOrder(OrderDetailMitra.id);
                props.navigation.navigate('HomeMitra');
              }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  box: {
    width: 180,
    height: 50,
    borderBottomColor: color.blueMain,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
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
  txtbox: {
    fontFamily: 'Mulish-Regular',
    fontSize: 15,
    color: color.grey,
    alignItems: 'center',
    fontWeight: '700',
  },
  card: {flex: 1, alignItems: 'center'},

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
export default DetailMitra;
