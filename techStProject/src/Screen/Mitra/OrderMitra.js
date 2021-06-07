import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ViewPagerAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Complete from '../../Component/CardCompleteOrder';
import {color} from '../../Default/color';
import {
  getDetailMitra,
  getDetailUser,
  getOrderMitra,
  getOrderMitraAccepted,
  getOrderMitraDone,
  getOrderMitraOnprocess,
  getOrderMitraWaiting,
  getOrderUser,
} from '../../Redux/Action/userOrderAction';
import moment, {localeData} from 'moment';
import ActiveOrder from '../../Component/ActiveOrder';

const OrderMitra = props => {
  const OrderMitra = useSelector(state => state.orderUserReducer.ordermitra);
  // console.log('isi orderuser: ', orderUser);
  const ordermitraonprocess = useSelector(
    state => state.orderUserReducer.ordermitraonprocess,
  );
  const ordermitradone = useSelector(
    state => state.orderUserReducer.ordermitradone,
  );
  const ordermitraaccepted = useSelector(
    state => state.orderUserReducer.ordermitrawaiting,
  );
  const ordermitrawaiting = useSelector(
    state => state.orderUserReducer.ordermitraaccepted,
  );

  const [status, setStatus] = useState('Onprogress');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderMitraDone());
    dispatch(getOrderMitraAccepted());
    dispatch(getOrderMitraOnprocess());
    dispatch(getOrderMitraWaiting());
  }, []);

  const Onprogress = () => {
    return (
      <View style={{flex: 1}}>
        {ordermitraonprocess.map((item, idx) => {
          // console.log('ini item', item);
          return (
            <ActiveOrder
              key={idx}
              id={item.idx}
              partnerlogo={item.partner.partner_logo}
              totalItem={item.total_item}
              totalFee={item.total_fee}
              categoryName={item.partner.category.category_name}
              appointmentAddress={item.appointment_address}
              bookFor={moment(item.appointment_date).format('DD MMMM YYYY')}
              onPressButton={async () => {
                await dispatch(getDetailMitra(item.id));
                await props.navigation.navigate('DetailMitra', {
                  idUser: item.user.id_user,
                });
              }}
            />
          );
        })}
        {ordermitraaccepted.map((item, idx) => {
          // console.log('ini item', item);
          return (
            <ActiveOrder
              key={idx}
              id={item.idx}
              partnerlogo={item.partner.partner_logo}
              totalItem={item.total_item}
              totalFee={item.total_fee}
              categoryName={item.partner.category.category_name}
              appointmentAddress={item.appointment_address}
              bookFor={moment(item.appointment_date).format('DD MMMM YYYY')}
              onPressButton={async () => {
                await dispatch(getDetailMitra(item.id));
                await props.navigation.navigate('DetailMitra', {
                  idUser: item.user.id_user,
                });
              }}
            />
          );
        })}
      </View>
    );
  };

  const Completed = props => {
    return (
      <View style={{flex: 1}}>
        {ordermitradone.map((item, idx) => {
          return (
            <ActiveOrder
              key={idx}
              id={item.idx}
              partnerlogo={item.partner.partner_logo}
              totalItem={item.total_item}
              totalFee={item.total_fee}
              categoryName={item.partner.category.category_name}
              appointmentAddress={item.appointment_address}
              bookFor={moment(item.appointment_date).format('DD MMMM YYYY')}
              statusOrder={item.order_status != 'done' ? 'Completed' : ''}
            />
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            dispatch(getOrderMitraAccepted());
            dispatch(getOrderMitraOnprocess());
            Onprogress();
            setStatus('Onprogress');
          }}
          style={styles.box}>
          <Text style={status == 'Onprogress' ? styles.txtbox2 : styles.txtbox}>
            In Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(getOrderMitraDone());
            Completed();
            setStatus('Completed');
          }}
          style={styles.box}>
          <Text style={status == 'Completed' ? styles.txtbox2 : styles.txtbox}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      {status == 'Onprogress' ? Onprogress() : Completed()}
      {/*INPROCESS*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  box: {
    width: 180,
    height: 50,
    borderBottomColor: color.blueMain,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtbox: {
    fontFamily: 'Mulish-Regular',
    fontSize: 15,
    color: color.lightgrey,
    alignItems: 'center',
    fontWeight: '700',
  },
  txtbox2: {
    fontFamily: 'Mulish-Regular',
    fontSize: 15,
    color: color.blueMain,
    alignItems: 'center',
    fontWeight: '700',
  },
  card: {flex: 1, alignItems: 'center'},
});
export default OrderMitra;
