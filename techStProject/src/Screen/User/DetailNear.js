import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {color} from '../../Default/color';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import Rating from '../../Component/Rating';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailNear = props => {
  const detailloc = useSelector(state => state.categoryReducer.detailloc);
  // console.log('isi dari', detailloc);
  const [ratings, setRatings] = useState('5');

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: color.white}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
          }}>
          <View style={styles.wrap}>
            <Image
              source={{uri: detailloc.partner_logo}}
              style={styles.image}
            />
            <View style={styles.shadow}>
              <View style={styles.price}>
                <View>
                  <Text style={{fontSize: 14, color: color.grey}}>Price</Text>
                  <Text style={styles.fee}>Rp. {detailloc.service_fee}</Text>
                </View>
                <Text style={styles.paragraf}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ut purus ligula. Morbi non posuere felis. Nam
                  hendrerit vestibulum mauris
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('Detail', {
                      idpartner: detailloc.id,
                    })
                  }
                  style={{alignItems: 'center'}}>
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
          <View
            style={{
              flex: 1,
              margin: 20,
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: '700',
                fontFamily: 'Mulish-Regular',
              }}>
              {detailloc.brand_service_name}
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    width: 10,
                    height: 10,
                    paddingRight: 10,
                  }}
                  source={require('../../Assets/loc.png')}
                />
                <Text style={{paddingRight: 5, paddingLeft: 5}}>
                  {detailloc.business_address}
                </Text>
              </View>
              <View style={styles.address}></View>
              <View>
                <Text>{detailloc.business_address}</Text>
              </View>
              <View style={{marginLeft: 130, marginTop: 3}}>
                <Rating rate={detailloc.avg_rating} />
              </View>
            </View>
            <View style={styles.border}></View>
            <View style={{paddingTop: 10}}>
              <Text style={styles.about}>About</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{textAlign: 'justify'}}>
                {detailloc.service_description}
              </Text>
            </View>
            <View style={styles.wrap2}>
              <Text> Services </Text>
              <View style={styles.tag}>
                <View style={styles.tagtag}>
                  <Text>Maintenance</Text>
                </View>
                <View style={styles.tagtag}>
                  <Text>Repairing</Text>
                </View>
                <View style={styles.tagtag}>
                  <Text>Cleaning</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  wrap: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  shadow: {
    top: -50,
    backgroundColor: color.white,
    width: '90%',
    marginHorizontal: 20,
    marginBottom: -50,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    borderRadius: 8,
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    marginRight: 5,
    marginLeft: 5,
    padding: 20,
    justifyContent: 'space-between',
  },
  fee: {
    color: color.blueMain,
    fontWeight: 'bold',
    fontSize: 12,
  },
  address: {
    borderLeftColor: color.grey,
    borderLeftWidth: 2,
    paddingLeft: 5,
  },
  border: {
    width: '100%',
    borderBottomColor: color.grey,
    borderBottomWidth: 2,
    paddingTop: 10,
  },
  about: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Mulish-Regular',
  },
  wrap2: {
    width: 250,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  tag: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  tagtag: {
    backgroundColor: 'rgba(7, 150, 198, 0.2)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  linear: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  paragraf: {
    color: color.black,
    paddingTop: 10,
    textAlign: 'justify',
    paddingBottom: 10,
    fontSize: 12,
  },
  tabrating: {
    flex: 0.3,
    backgroundColor: 'red',
  },
});

export default DetailNear;
