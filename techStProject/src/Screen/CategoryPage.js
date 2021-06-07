import React, {version} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailloc} from '../Redux/Action/categoryAction';

const CategoryPage = ({navigation, route}) => {
  const {category} = route.params;
  const catpage = useSelector(state => state.categoryReducer.toprated);
  // console.log('isi categorypage', category);
  // console.log('ini isi dari: ', catpage);
  const dispatch = useDispatch();

  const search = catpage.filter(e => e.id_category === category);
  // console.log('ini isi: ', search);

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {search.map(e => {
        // console.log('ini e', e);
        return (
          <TouchableOpacity
            onPress={() => {
              dispatch(getDetailloc(e));
              navigation.navigate('DetailNear', {
                idCategory: e.id_category,
              });
            }}
            style={styles.shadow}
            key={e.id}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{marginVertical: 5, fontSize: 20}}>
                {' '}
                {e.brand_service_name}
              </Text>
              <Image
                style={{width: '80%', height: 200, resizeMode: 'stretch'}}
                source={{uri: e.partner_logo}}></Image>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    flexDirection: 'column',
    width: 379,
    height: 280,
    borderColor: 'rgba(70, 70, 70, 0.08)',
    borderRadius: 8,
    shadowColor: '#464646',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 5,
    marginTop: 20,
    paddingTop: 20,
    alignSelf: 'center',
  },
});

export default CategoryPage;
