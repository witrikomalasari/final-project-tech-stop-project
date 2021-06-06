import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {color} from '../Default/color';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Rating from './Rating';

const Topcard = props => {
  // console.log('ini toprated', toprated);

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <View style={styles.subcontainer}>
          <View style={styles.wrap}>
            <Image style={styles.image} source={{uri: props.partner_logo}} />
            <View style={styles.wrap1}>
              <Text style={styles.brand}>{props.brand_service_name}</Text>
              <Text style={styles.category}>{props.category_name}</Text>
              <Text style={styles.address}>{props.business_address}</Text>
            </View>
          </View>
          <View style={{width: '28%', height: '70%', paddingLeft: 10}}>
            <Rating rate={props.avg_rating} />
          </View>
        </View>
        <View style={styles.bottom}></View>
        <View style={styles.bottomwrap}>
          <View style={{marginTop: 5}}>
            <Text style={styles.fee}> Rp. {props.service_fee} </Text>
          </View>
          <TouchableOpacity
            onPress={props.onPressButton}
            // onPress={() =>
            //   navigation.navigate('Detail', {
            //     idpartner: toprated.id,
            //   })
            // }
            // onPress={() => {
            //   dispatch(getDetailloc(item));
            //   props.navigation.navigate('DetailNear');
            // }}>

            style={styles.touch}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#0796C6', '#50E590']}
              style={styles.linear}>
              <Text style={{fontFamily: 'Mulish-Regular'}}>Connect </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 379,
  },
  shadow: {
    flexDirection: 'column',
    width: 379,
    height: 180,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    borderRadius: 8,
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 5,
  },
  subcontainer: {
    width: 379,
    height: 80,
    marginTop: 35,
    marginLeft: 10,
    flexDirection: 'row',
  },
  wrap: {
    width: '65%',
    height: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 10,
    marginTop: 10,
    resizeMode: 'stretch',
  },
  wrap1: {
    width: 140,
    marginLeft: 10,
    textAlign: 'justify',
  },
  brand: {
    fontFamily: 'Mulish-Regular', //Ace Computer Service
    fontSize: 12,
    fontWeight: '700',
  },
  category: {
    fontFamily: 'Mulish-Regular', //Computer Service
    fontSize: 12,
    fontWeight: '600',
  },
  address: {
    fontFamily: 'Mulish-Regular', //Kebon Jeruk, Jakarta
    fontSize: 12,
    fontWeight: '400',
    color: '#50E590',
  },
  bottom: {
    borderBottomWidth: 2,
    marginTop: 5,
    marginLeft: 6,
    marginRight: 6,
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
export default Topcard;
