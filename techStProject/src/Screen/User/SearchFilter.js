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
  ViewPagerAndroid,
  ColorPropType,
} from 'react-native';
import {color} from '../../Default/color';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../Component/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  searchFilterAction,
  searchServicenameAction,
} from '../../Redux/Action/searchAction';

const SearchFilter = props => {
  const [search, setSearch] = useState('');
  const [minprice, setMinprice] = useState('');
  const [maxprice, setMaxprice] = useState('');
  const [checkcategory, setCheckcategory] = useState('');
  const [checklocation, setChecklocation] = useState('');
  const [star5, setStar5] = useState(false); // untuk buat checkbox
  const [star34, setStar34] = useState(false); // untuk buat checkbox
  const [minrating, setMinrating] = useState(''); // untuk passing data
  const [maxrating, setMaxrating] = useState(''); // untuk passing data
  const dispatch = useDispatch();

  const checkhandler = key => {
    setChecklocation(key); // buat param untuk mengambil datanya cari yg unik
  };

  const category = useSelector(state => state.categoryReducer.category);
  // console.log(category);
  const Location = [
    {key: Math.random(), name: 'Jakarta'},
    {key: Math.random(), name: 'Surabaya'},
    {key: Math.random(), name: 'Medan'},
    {key: Math.random(), name: 'Aceh'},
    {key: Math.random(), name: 'Yogyakarta'},
    {key: Math.random(), name: 'Denpasar'},
    {key: Math.random(), name: 'Flores'},
  ];

  const checkhandlercategory = key => {
    setCheckcategory(key); // buat param untuk mengambil datanya cari yg unik
  };

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: color.white}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderColor: 'black',
              borderWidth: 1,
              padding: 10,
              marginTop: 5,
              borderRadius: 6,
            }}>
            <TouchableOpacity>
              <AntDesign
                style={{
                  paddingRight: 10,
                  paddingTop: 5,
                  paddingLeft: 10,
                }}
                name="search1"
                size={20}
              />
            </TouchableOpacity>
            <TextInput
              style={{
                width: '100%',
                height: 35,
                paddingLeft: 20,
                fontFamily: 'Mulish-Regular',
              }}
              placeholder="Need Help?"
              value={search}
              onChangeText={text => setSearch(text)}
            />
          </View>
        </View>
        {/*<View
          style={{
            marginLeft: 20,
            marginBottom: 10,
          }}>
          <Text style={{color: color.blueMain}}>Last Search</Text>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={styles.txt}>Service ac Jakarta</Text>
            <Text style={styles.txt}>Tukang Ledeng</Text>
            <Text style={styles.txt}>Service Motor</Text>
          </View>
        </View> 
        <View
          style={{
            width: '90%',
            borderBottomColor: color.grey,
            borderBottomWidth: 1,
          }}></View>
          */}
        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
          <Ionicons name="ios-filter" size={20} color={color.blueMain} />
          <Text style={{color: color.blueMain, paddingLeft: 5}}>Filter</Text>
        </View>
        {/*<View style={styles.checkb2}>
        //   {category.map(e => {
        //     // console.log(e.name);
        //     return (
        //       // console.log(e);
        //       <View
        //         key={e.key}
        //         style={{
        //           width: '100%',
        //           flexDirection: 'row',
        //           fontWeight: '700',
        //           alignItems: 'center',
        //         }}>
        //         {checkcategory == e.category_name ? (
        //           <Ionicons name="square" color={color.greenMain} size={20} />
        //         ) : (
        //           <Ionicons
        //             onPress={() => checkhandlercategory(e.category_name)}
        //             color={color.black}
        //             name="square-outline"
        //             size={20}
        //           />
        //         )}
        //         <Text>{e.category_name}</Text>
        //       </View>
        //     );
        //   })}
        // </View> */}

        <View
          style={{
            width: '90%',
            borderBottomColor: color.grey,
            borderBottomWidth: 1,
            margin: 20,
          }}></View>
        <View style={{marginLeft: 20}}>
          <Text
            style={{
              marginBottom: 10,
              fontWeight: 'bold',
              fontFamily: 'Mulish-Regular',
            }}>
            Fee
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 40,
                borderColor: 'black',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E4E4E4',
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
                borderRightWidth: 0,
              }}>
              <Text style={{fontWeight: 'bold', fontFamily: 'Mulish-Regular'}}>
                Rp
              </Text>
            </View>
            <TextInput
              placeholder="Minimum Fee"
              placeholderTextColor={color.white}
              style={{
                width: '50%',
                height: 45,
                backgroundColor: color.white,
                borderLeftColor: color.black,
                borderWidth: 1,
                paddingHorizontal: 15,
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                fontWeight: 'bold',
                fontFamily: 'Mulish-Regular',
              }}
              value={minprice} //searchTextInput
              onChangeText={text => setMinprice(text)}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                width: 40,
                borderColor: 'black',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E4E4E4',
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
                borderRightWidth: 0,
              }}>
              <Text style={{fontWeight: 'bold', fontFamily: 'Mulish-Regular'}}>
                Rp
              </Text>
            </View>
            <TextInput
              placeholder="Maximum Fee"
              placeholderTextColor={color.white}
              style={{
                width: '50%',
                height: 45,
                backgroundColor: color.white,
                borderColor: color.black,
                borderWidth: 1,
                paddingHorizontal: 15,
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                fontWeight: 'bold',
                fontFamily: 'Mulish-Regular',
              }}
              value={maxprice} //searchTextInput
              onChangeText={text => setMaxprice(text)}
            />
          </View>
          <View
            style={{
              width: '90%',
              borderBottomColor: color.grey,
              borderBottomWidth: 1,
              margin: 20,
            }}></View>
          <View>
            <Text
              style={{
                marginBottom: 10,
                fontWeight: 'bold',
                fontFamily: 'Mulish-Regular',
              }}>
              Location
            </Text>
            <View style={styles.checkb}>
              {Location.map(e => {
                // console.log(e.name);
                return (
                  // console.log(e);
                  <View
                    key={e.key}
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      fontWeight: '700',
                      alignItems: 'center',
                    }}>
                    {checklocation == e.name ? (
                      <Ionicons
                        name="square"
                        color={color.greenMain}
                        size={20}
                      />
                    ) : (
                      <Ionicons
                        onPress={() => checkhandler(e.name)}
                        name="square-outline"
                        size={20}
                      />
                    )}
                    <Text
                      style={{
                        paddingLeft: 10,
                        fontFamily: 'Mulish-Regular',
                      }}>
                      {e.name}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View>
            <View
              style={{
                width: '90%',
                borderBottomColor: color.grey,
                borderBottomWidth: 1,
                margin: 20,
              }}></View>
            <View>
              <Text
                style={{
                  marginBottom: 10,
                  fontWeight: 'bold',
                  fontFamily: 'Mulish-Regular',
                }}>
                Rating
              </Text>
              <View style={styles.rating}>
                <CheckBox
                  disabled={false}
                  value={star5} //toggleCheckBox
                  onValueChange={() => {
                    setMinrating(5);
                    setMaxrating(5);
                  }}
                />
                <Image source={require('../../Assets/Star1.png')} />
                <Text style={styles.txt}>5 Bintang</Text>
              </View>
              <View style={styles.rating}>
                <CheckBox
                  disabled={false}
                  value={star34} //toggleCheckBox
                  onValueChange={() => {
                    setMinrating(3);
                    setMaxrating(4);
                  }}
                />
                <Image source={require('../../Assets/Star1.png')} />
                <Text style={styles.txt}>3 - 4 Bintang</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginBottom: 20}}>
          <CustomButton
            title="Go Search"
            // jika ada 2 function harus ditutup dengan 1 curly bracket
            onPressButton={() => {
              dispatch(
                searchFilterAction(
                  search,
                  // checkcategory.toString(),
                  minprice,
                  maxprice,
                  checklocation,
                  minrating,
                  maxrating,
                ),
              );
              props.navigation.navigate('SearchResult');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  checkb: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  checkb2: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  txt: {
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    letterSpacing: 0.2,
    paddingLeft: 10,
  },
});

export default SearchFilter;
