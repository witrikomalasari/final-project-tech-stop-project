import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {color} from '../Default/color';

const Complete = props => {
  // console.log('ini toprated', toprated);

  return (
    //get user transaction //props.category_name
    <TouchableOpacity
      onPress={() => props.onPressButton()}
      style={styles.container}>
      <View style={styles.shadow}>
        <View style={styles.subcontainer}>
          <View style={styles.wrap}>
            <Image style={styles.image} source={{uri: props.partnerlogo}} />
            <View style={styles.wrap1}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.brand}>{props.totalItem} UNIT - </Text>
                <Text style={styles.brand}>{props.totalFee}</Text>
              </View>
              <Text style={styles.brand}>{props.brandServiceName}</Text>
              <Text style={styles.brand}>{props.categoryName}</Text>
              <Text style={styles.bookfor}>Booked for {props.bookFor}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  shadow: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'rgba(70, 70, 70, 0.08)',
    borderRadius: 8,
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  subcontainer: {
    flex: 0.4,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '35%',
    height: 120,
    margin: 10,
    resizeMode: 'stretch',
  },
  wrap1: {
    flex: 1,
    margin: 10,
    textAlign: 'justify',
  },
  brand: {
    fontFamily: 'Mulish-Regular', //Ace Computer Service
    fontSize: 14,
    fontWeight: '700',
    paddingVertical: 3,
  },
  category: {
    fontFamily: 'Mulish-Regular', //Computer Service
    fontSize: 12,
    fontWeight: '600',
  },
  bookfor: {
    fontFamily: 'Mulish-Regular', //Kebon Jeruk, Jakarta
    fontSize: 14,
    fontWeight: '700',
    color: color.blueMain,
    paddingVertical: 5,
  },
  bottom: {
    width: 379,
    borderBottomWidth: 2,
    marginTop: 5,
    borderBottomColor: '#F8F8F8',
  },
  bottomwrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  fee: {
    marginLeft: 10,
    fontFamily: 'Mulish-Regular', //Rp 100.000 - Rp 500.000
    color: color.blueMain,
    fontWeight: 'bold',
  },
  touch: {
    width: 130,
    height: 40,
    marginTop: 5,
    borderRadius: 6,
  },
  linear: {
    width: 98,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
export default Complete;
