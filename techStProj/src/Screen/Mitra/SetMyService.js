import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../../Component/CustomButton';

const SetMyService = props => {
  return (
    <View style={styles.container}>
      <View style={{margin: 20}}>
        <View style={{marginVertical: 20}}>
          <Text>Jenis Kategori Usaha</Text>
          <TextInput style={styles.textinput}></TextInput>
        </View>
        <View>
          <Text>Harga / Tarif Layanan</Text>
          <TextInput style={styles.textinput}></TextInput>
          <View style={{marginVertical: 20}}>
            <Text>Deskripsi</Text>
            <TextInput style={styles.textinput}></TextInput>
            <View style={{marginVertical: 20}}>
              <Text>Tag</Text>
              <TextInput style={styles.textinput}></TextInput>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 0.9, justifyContent: 'flex-end'}}>
        <CustomButton style={styles.custbutton} title="Save Service" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  textinput: {
    fontFamily: 'Mulish-Regular',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
  },
  custbutton: {},
});
export default SetMyService;
