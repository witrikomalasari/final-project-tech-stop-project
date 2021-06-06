import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {color} from '../Default/color';

const Inprocess = props => {
  // console.log('ini toprated', toprated);

  return (
    //get user transaction //props.category_name
    <View style={styles.container}>
      <View style={styles.shadow}>
        <View style={styles.subcontainer}>
          <View style={styles.wrap}>
            <Image style={styles.image} source={{uri: props.partnerlogo}} />
            <View style={styles.wrap1}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.brand}>{props.totalItem} </Text>
                <Text style={styles.brand}>{props.totalFee}</Text>
              </View>
              <Text style={styles.brand}>{props.brandServiceName}</Text>
              <Text style={styles.brand}>{props.categoryName}</Text>
              <Text style={styles.bookfor}>{props.bookFor}</Text>
              <TouchableOpacity
                onPress={props.onPressButton}
                style={{
                  width: 60,
                  height: 40,
                  marginLeft: 80,
                  marginRight: 20,
                  backgroundColor: '#0796C6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}>
                <Text style={{color: color.white}}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  shadow: {
    flex: 1,
    margin: 10,
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
  },
  image: {
    width: '25%',
    height: 80,
    margin: 20,
    resizeMode: 'stretch',
  },
  wrap1: {
    flex: 1,
    textAlign: 'justify',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
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
export default Inprocess;
