import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {color} from '../Default/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const ActiveOrder = props => {
  const OrderMitra = useSelector(state => state.orderUserReducer.ordermitra);
  // console.log('isi orderuser: ', orderUser);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPressButton}>
        <View style={styles.shadow}>
          <View style={{width: '70%', flexDirection: 'column'}}>
            <View style={styles.subcontainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.image} source={{uri: props.partnerlogo}} />
                <View style={{flexDirection: 'column'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 10,
                      marginLeft: 20,
                    }}>
                    <Text style={styles.brand}>{props.totalItem} UNIT - </Text>
                    <Text style={styles.brand}>{props.totalFee} </Text>
                  </View>
                  <Text style={styles.category}>{props.categoryName}</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View
                style={{
                  width: '80%',
                  height: 70,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 20,
                  marginBottom: 10,
                  marginRight: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign
                    name="enviroment"
                    size={20}
                    color={color.greenMain}
                    style={{
                      right: 5,
                    }}
                  />
                  <Text style={{fontSize: 12}}>{props.appointmentAddress}</Text>
                </View>
                {OrderMitra.order_status == 'done' ? (
                  <Text style={styles.address}> {props.statusOrder}</Text>
                ) : (
                  <Text style={styles.address}>Book for {props.bookFor}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// style={{width: '70%', flexDirection: 'column'}}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    marginTop: 10,
    marginLeft: 20,
  },
  shadow: {
    width: '95%',
    flexDirection: 'row',
    borderColor: 'rgba(70, 70, 70, 0.08)',
    borderRadius: 10,
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 5,
  },
  subcontainer: {
    width: '100%',
    height: 100,
    marginTop: 15,
    marginLeft: 5,
    alignItems: 'center',
  },
  wrap: {
    width: '65%',
    height: '70%',
    flexDirection: 'column',
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 20,
    resizeMode: 'stretch',
  },
  wrap1: {
    flexDirection: 'row',
    width: 140,
    textAlign: 'justify',
  },
  brand: {
    fontFamily: 'Mulish-Regular', //Ace Computer Service
    fontSize: 14,
    fontWeight: '700',
    color: color.black,
  },
  category: {
    fontFamily: 'Mulish-Regular', //Computer Service
    fontSize: 12,
    fontWeight: '600',
    color: color.black,
    marginLeft: 20,
  },
  address: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: '#50E590',
  },

  bottomwrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subcontainerright: {
    width: '27%',
    height: 170,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ActiveOrder;
