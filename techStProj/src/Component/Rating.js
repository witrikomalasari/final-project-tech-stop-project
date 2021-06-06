import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Rating = props => {
  const rate = props.rate;

  return (
    <View>
      {rate == 5 ? (
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
        </View>
      ) : rate == 4 ? (
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="#CACACA" />
        </View>
      ) : rate == 3 ? (
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="#CACACA" />
          <AntDesign name="star" size={15} color="#CACACA" />
        </View>
      ) : rate == 2 ? (
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="#CACACA" />
          <AntDesign name="star" size={15} color="#CACACA" />
          <AntDesign name="star" size={15} color="#CACACA" />
        </View>
      ) : (
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="star" size={15} color="gold" />
          <AntDesign name="star" size={15} color="#CACACA" />
          <AntDesign name="star" size={15} color="#CACACA" />
          <AntDesign name="star" size={15} color="#CACACA" />
          <AntDesign name="star" size={15} color="#CACACA" />
        </View>
      )}
    </View>
  );
};

export default Rating;
