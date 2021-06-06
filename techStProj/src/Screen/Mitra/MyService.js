import {useNavigation} from '@react-navigation/core';
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
import Inprocess from '../../Component/CardInprocess';
import CustomButton from '../../Component/CustomButton';
import {color} from '../../Default/color';
import {getMitraDetailAction} from '../../Redux/Action/userAction';
import SetMyService from './SetMyService';

const MyService = props => {
  const mitraDetail = useSelector(state => state.userReducer.profilemitra);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // console.log('ini: ', mitraDetail);

  useEffect(() => {
    dispatch(getMitraDetailAction());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Inprocess
          partnerlogo={mitraDetail.partner_logo}
          categoryName={mitraDetail.category.tag_service}
          onPressButton={() => navigation.navigate('SetMyService')}
        />

        <CustomButton title="Add New Services" style={{bottom: 0}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {flex: 1, alignItems: 'center', bottom: 0},
});
export default MyService;
