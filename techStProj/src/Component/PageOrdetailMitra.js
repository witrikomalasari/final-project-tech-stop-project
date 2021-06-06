import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {color} from '../Default/color';
import CustomButton from './CustomButton';

const MitraDetailOrder = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.service}>
          <Text style={styles.txtTitle}>Service</Text>
          <Text style={styles.txt}>{props.categoryName}</Text>
        </View>

        <View style={styles.bookfor}>
          <Text style={styles.txtTitle}>Book for</Text>
          <Text style={styles.txt}>{props.appointmentDate}</Text>
        </View>
        <View style={styles.serviceplan}>
          <Text style={styles.txtTitle}>Services Plan</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.txt}>{props.totalItem} unit</Text>
            <Text style={styles.txt}>Rp. {props.totalFee}</Text>
          </View>
        </View>
        <View style={styles.address}>
          <Text style={styles.txtTitle}>Address</Text>
          <Text style={styles.txt}>{props.appointmentAddress}</Text>
        </View>
        <View style={styles.contactperson}>
          <Text style={styles.txtTitle}>Contact Person</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt}>{props.userName} - </Text>
            <Text style={styles.txt}> {props.userPhonenumber}</Text>
          </View>
        </View>
        <View style={styles.paymentdetail}>
          <Text style={styles.txtTitle}>Payment Detail</Text>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Mulish-Regular',
                  fontSize: 14,
                  marginTop: 20,
                }}>
                Service fee{' '}
              </Text>
              <Text style={styles.txt}>Rp. {props.serviceFee} </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Mulish-Regular',
                  fontSize: 14,
                }}>
                {' '}
                Travel Fee{' '}
              </Text>
              <Text
                style={{
                  fontFamily: 'Mulish-Regular',
                  fontSize: 14,
                }}>
                {' '}
                0
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
            }}></View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.txtTitle}> Total Payment </Text>
            <Text style={styles.txt}>Rp. {props.totalPayment}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },

  txtTitle: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    marginVertical: 10,
    marginTop: 20,
    fontWeight: '700',
  },

  txt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '400',
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

  bookfor: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
    // backgroundColor: 'yellow',
  },
  serviceplan: {
    flex: 0.2,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  address: {
    flex: 0.3,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  contactperson: {
    flex: 0.2,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  paymentdetail: {
    flex: 0.2,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    elevation: 2,
  },
});

export default MitraDetailOrder;
