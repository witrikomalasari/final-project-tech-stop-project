import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const WebViews = props => {
  const Orderdetail = useSelector(
    state => state.orderUserReducer.orderdetailuser,
  );

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const webviewRef = useRef(null);

  // console.log('ini webviewref', currentUrl);

  const backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack();
  };

  const frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: Orderdetail.redirect_url}}
        renderLoading={() => (
          <ActivityIndicator
            color="blue"
            size="large"
            style={{
              flex: 1,
            }}
          />
        )}
        javaScriptEnabled={true}
        startInLoadingState={true}
        domStorageEnabled={true}
        ref={webviewRef}
        onNavigationStateChange={() => {
          setCanGoBack(canGoBack);
          setCanGoForward(canGoForward);
          setCurrentUrl(currentUrl);
          // console.log('ini webviewref', currentUrl);
        }}
      />

      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '',
        }}>
        <TouchableOpacity onPress={backButtonHandler}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#0796C6', '#50E590']}
            style={styles.linear}>
            <Text>Back</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            frontButtonHandler();
            props.navigation.navigate('OrderDetail', {
              order: Orderdetail.id,
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#0796C6', '#50E590']}
            style={styles.linear}>
            <Text>Forward</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linear: {
    width: 170,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    fontFamily: 'Mulish-Regular',
  },
});

export default WebViews;
