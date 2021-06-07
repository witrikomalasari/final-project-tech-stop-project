import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Complete from '../../Component/CardCompleteOrder';
import {color} from '../../Default/color';
import {
  getDetailMitra,
  getDetailUser,
  getOrderMitraAccepted,
  getOrderMitraDone,
  getOrderMitraOnprocess,
  getOrderUser,
  getOrderUserAccepted,
  getOrderUserDone,
  getOrderUserOnprocess,
  getOrderUserWaiting,
} from '../../Redux/Action/userOrderAction';
import moment from 'moment';

const Order = props => {
  const orderUser = useSelector(state => state.orderUserReducer.order);
  // console.log('isi orderuser: ', orderUser);
  const dispatch = useDispatch();
  // console.log('isi orderuser: ', orderUser);
  const orderuseronprocess = useSelector(
    state => state.orderUserReducer.orderuseronprocess,
  );
  const orderuserdone = useSelector(
    state => state.orderUserReducer.orderuserdone,
  );
  const orderuseraccepted = useSelector(
    state => state.orderUserReducer.orderuseraccepted,
  );
  const orderuserwaiting = useSelector(
    state => state.orderUserReducer.orderuserwaiting,
  );
  // console.log('proses', orderuseronprocess);
  // console.log('accept', orderuseraccepted);
  // console.log('wait', orderuserwaiting);

  const [status, setStatus] = useState('Onprogress');

  useEffect(() => {
    dispatch(getOrderUser());
    dispatch(getOrderUserDone());
    dispatch(getOrderUserAccepted());
    dispatch(getOrderUserOnprocess());
    dispatch(getOrderUserWaiting());
  }, []);

  const Onprogress = () => {
    return (
      <View style={styles.card}>
        {orderuserwaiting.map((item, index) => {
          return (
            <Complete
              key={index}
              id={item.id}
              partnerlogo={item.partner.partner_logo}
              totalItem={item.total_item}
              totalFee={item.total_fee}
              brandServiceName={item.partner.brand_service_name}
              categoryName={item.partner.category.category_name}
              bookFor={moment(item.appointment_date).format('DD MMMM YYYY')}
              onPressButton={async () => {
                await dispatch(getDetailUser(item.id));
                await props.navigation.navigate('OrderDetail', {
                  order: item.id,
                });
              }}
            />
          );
        })}
        {orderuseraccepted.map((item, idx) => {
          return (
            <Complete
              key={idx}
              id={item.id}
              partnerlogo={item.partner.partner_logo}
              totalItem={item.total_item}
              totalFee={item.total_fee}
              brandServiceName={item.partner.brand_service_name}
              categoryName={item.partner.category.category_name}
              bookFor={moment(item.appointment_date).format('DD MMMM YYYY')}
              onPressButton={async () => {
                await dispatch(getDetailUser(item.id));
                await props.navigation.navigate('OrderDetail', {
                  order: item.id,
                });
              }}
            />
          );
        })}
        {orderuseronprocess.map((item, i) => {
          // console.log('ini item', item);
          return (
            <Complete
              key={i}
              id={item.id}
              partnerlogo={item.partner.partner_logo}
              totalItem={item.total_item}
              totalFee={item.total_fee}
              brandServiceName={item.partner.brand_service_name}
              categoryName={item.partner.category.category_name}
              bookFor={moment(item.appointment_date).format('DD MMMM YYYY')}
              onPressButton={async () => {
                await dispatch(getDetailUser(item.id));
                await props.navigation.navigate('OrderDetail', {
                  order: item.id,
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
        {orderuserdone.map((item, idx) => {
          return (
            <Complete
              key={idx}
              id={item.idx}
              partnerlogo={item.partner.partner_logo}
              totalItem={item.total_item}
              totalFee={item.total_fee}
              brandServiceName={item.partner.brand_service_name}
              categoryName={item.partner.category.category_name}
              bookFor={moment(item.appointment_date).format('DD MMMM YYYY')}
              onPressButton={() => {
                // await dispatch(getDetailUser(item.id));
                // await props.navigation.navigate('OrderDetail', {
                //   order: item.id,
                // });
              }}
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
          onPress={async () => {
            await dispatch(getOrderUserAccepted());
            await dispatch(getOrderUserOnprocess());
            await dispatch(getOrderUserWaiting());
            Onprogress();
            setStatus('Onprogress');
          }}
          style={styles.box}>
          <Text style={status == 'Onprogress' ? styles.txtbox2 : styles.txtbox}>
            In Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await dispatch(getOrderUserDone());
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
export default Order;
