import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Topcard from '../../Component/topCard';
import {getDetailloc} from '../../Redux/Action/categoryAction';

const SearchResult = props => {
  const {searchfilter} = useSelector(state => state.searchReducer);
  // const navigation = useNavigation();
  // console.log('isi dari searchfilter', searchfilter);
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mapwrap}>
        {searchfilter.map((e, index) => {
          // console.log(props);
          return (
            <Topcard
              key={index}
              id={e.id}
              brand_service_name={e.brand_service_name}
              // category_name={props.category.category_name}
              partner_logo={e.partner_logo}
              business_address={e.business_address}
              service_fee={e.service_fee}
              avg_rating={e.avg_rating}
              onPressButton={async () => {
                await dispatch(getDetailloc(e));
                await props.navigation.navigate('DetailNear', {
                  idpartner: e.id,
                });
              }}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapwrap: {flex: 1, marginLeft: 10},
});

export default SearchResult;
