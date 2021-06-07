import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {color} from '../Default/color';
import LinearGradient from 'react-native-linear-gradient';
// import {useNavigation} from '@react-navigation/native';
import Rating from '../Component/Rating';

const Nearloc = props => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.touch}>
        <ImageBackground
          imageStyle={styles.imageStyle}
          style={styles.imgback}
          source={{uri: props.partner_logo}}>
          <LinearGradient
            start={{x: 1, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#0796C6', 'rgba(7, 150, 198, 0)']}
            style={styles.linear}>
            <View style={styles.subcontainer}>
              <Text style={styles.txt1}>{props.brand_service_name}</Text>
              <Text style={styles.txt2}>{props.category_name}</Text>
              <Rating rate={props.avg_rating} />
              <Text style={styles.txt2}>{props.business_address}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  touch: {
    width: 144,
    height: 206,
  },
  imageStyle: {
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imgback: {
    width: 144,
    height: 206,
  },
  linear: {
    width: 144,
    height: 206,
    borderRadius: 10,
  },
  subcontainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  txt1: {
    color: color.white, //LEE Computer
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
  },
  txt2: {
    color: color.white, //Computer Service
    fontWeight: '400',
    fontSize: 10,
    fontFamily: 'Mulish-Regular',
  },
});

export default Nearloc;
