import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {color} from '../../Default/color';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Topcard from '../../Component/topCard';
import Nearloc from '../../Component/Nearloc';
import {useDispatch, useSelector} from 'react-redux';
import {
  getALlCategory,
  getDetailloc,
  getNearLoc,
  getTopRated,
} from '../../Redux/Action/categoryAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserDetailAction} from '../../Redux/Action/userAction';
import {getDetailUser} from '../../Redux/Action/userOrderAction';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [data, setData] = useState();
  const category = useSelector(state => state.categoryReducer.category);
  const toprated = useSelector(state => state.categoryReducer.toprated);
  const nearloc = useSelector(state => state.categoryReducer.nearloc);
  const profile = useSelector(state => state.userReducer.profile);

  // console.log('ini isi:', profile);
  // console.log('ini adalah cat:', toprated);

  useEffect(() => {
    dispatch(getUserDetailAction());
    dispatch(getNearLoc());
    dispatch(getTopRated());
    dispatch(getALlCategory());
    AsyncStorage.getItem('access_token', (err, token) => {
      if (token) {
        props.navigation.navigate('TabNavigator');
      }
    });
  }, []);

  return (
    <>
      <ScrollView
        style={{backgroundColor: 'white'}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#0796C6', '#50E590']}
            style={styles.linear}>
            <View
              style={{
                marginBottom: 10,
                right: 130,
              }}>
              <Text
                style={{
                  fontFamily: 'Lato-Regular',
                  fontSize: 16,
                  color: color.white,
                  letterSpacing: 0.2,
                  fontWeight: '700',
                }}>
                TECH STOP
              </Text>
            </View>
            <View style={styles.linear2}>
              <TouchableOpacity
                style={{width: 350, flexDirection: 'row'}}
                onPress={() => {
                  dispatch(getNearLoc());
                  props.navigation.navigate('SearchFilter');
                  // data ? setSearch(true) : setSearch(false);
                }}>
                <AntDesign
                  name="search1"
                  size={25}
                  color={color.grey}
                  style={{left: 15}}
                />
                <Text style={{marginLeft: 25}}>Need Help?</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          {/*category*/}
          <View style={styles.header}>
            <AntDesign
              name="enviroment"
              size={17}
              style={{color: color.blueMain}}
            />
            <Text style={styles.loc}>
              Your Location : {profile.city_or_regional}
            </Text>
          </View>
          <View style={styles.wrapcat}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {category?.map(item => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      key={item.id_category}
                      id={item.id_category}
                      style={styles.touch}
                      onPress={() =>
                        props.navigation.navigate('CategoryPage', {
                          category: item.id,
                        })
                      }>
                      <Image
                        style={{
                          width: 55,
                          height: 55,
                          marginBottom: 10,
                          alignSelf: 'center',
                        }}
                        source={{uri: item.category_icon}}
                      />
                      <Text style={styles.catName}>{item.category_name}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View>
            <Text
              style={{
                marginLeft: 20,
                marginBottom: 15,
                fontFamily: 'Mulish-Regular',
                fontWeight: '700',
              }}>
              All Services
            </Text>
          </View>
          {/* NEAR YOUR LOCATION}*/}
          <View style={styles.wrapcat}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {nearloc?.map(item => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(getDetailloc(item));
                        props.navigation.navigate('DetailNear');
                      }}>
                      <Nearloc
                        key={item.id}
                        id={item.id}
                        partner_logo={item.partner_logo}
                        brand_service_name={item.brand_service_name}
                        category_name={item.category.category_name}
                        business_address={item.business_address}
                        avg_rating={item.avg_rating}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 15,
                marginBottom: 5,
                fontFamily: 'Mulish-Regular',
                fontWeight: '700',
              }}>
              Top Rated
            </Text>
          </View>

          <View style={styles.toprated}>
            {toprated.map(e => {
              return (
                <Topcard
                  key={e.key}
                  id={e.id}
                  brand_service_name={e.brand_service_name}
                  category_name={e.category.category_name}
                  partner_logo={e.partner_logo}
                  business_address={e.business_address}
                  service_fee={e.service_fee}
                  avg_rating={e.avg_rating}
                  onPressButton={() => {
                    dispatch(getDetailloc(e));
                    props.navigation.navigate('Detail', {
                      idpartner: e.id,
                    });
                  }}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  linear: {
    width: '100%',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  linear2: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 6,
  },
  search: {
    backgroundColor: '#ffffff',
    width: '70%',
    paddingLeft: 10,
    borderRadius: 6,
  },
  header: {
    paddingHorizontal: 20,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {alignItems: 'center'},
  loc: {marginLeft: 5, fontFamily: 'Mulish-Regular'},

  wrapcat: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
  },
  touch: {
    width: 100,
    alignItems: 'center',
    paddingLeft: 20,
  },
  catName: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  txtajah: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 15,
    fontFamily: 'Mulish-Regular',
  },
  toprated: {flex: 1, marginLeft: 10},
});

export default HomeScreen;

// featcher check-square
