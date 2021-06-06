import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './src/Screen/Splash';
import Login from './src/Screen/Login';
import Join from './src/Screen/Join';
import VerificationCustomer from './src/Screen/VerificationCustomer';
import VerificationPartner from './src/Screen/VerificationPartner';
import RegisUser from './src/Screen/User/RegisUser';
import TabNavigator from './src/Screen/TabNavigator';
import Detail from './src/Screen/User/Detail';
import AddressDetail from './src/Screen/User/AddressDetail';
import DetailNear from './src/Screen/User/DetailNear';
import CategoryPage from './src/Screen/CategoryPage';
import SearchFilter from './src/Screen/User/SearchFilter';
import SummaryOrder from './src/Screen/User/SummaryOrder';
import SearchResult from './src/Screen/User/SearchResult';
import Message from './src/Screen/User/Message';
import Verification from './src/Screen/User/Verification';
import RegisUsaha from './src/Screen/Mitra/RegisUsaha';
import RegisPemilik from './src/Screen/Mitra/RegisPemilik';
import Term from './src/Screen/Mitra/Term';
import TabNavigatorMitra from './src/Screen/TabNavigatorMit';
import OrderDetail from './src/Screen/User/OrderDetail';
import WebView from './src/Screen/User/WebView';

// import HomeMitra from './src/Screen/Mitra/HomeMit';
// import OrderMitra from './src/Screen/Mitra/OrderMitra';
// import MessageMitra from './src/Screen/Mitra/MessageMitra';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/Index';
import SetMyService from './src/Screen/Mitra/SetMyService';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            options={{headerShown: false}}
            name="Splash"
            component={Splash}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Join"
            component={Join}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="VerificationPartner"
            component={VerificationPartner}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="VerificationCustomer"
            component={VerificationCustomer}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="RegisUser"
            component={RegisUser}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Verification"
            component={Verification}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="TabNavigator"
            component={TabNavigator}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="RegisUsaha"
            component={RegisUsaha}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="RegisPemilik"
            component={RegisPemilik}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Term"
            component={Term}
          />
          <Stack.Screen
            options={{headerShown: true, title: 'Detail Service'}}
            name="Detail"
            component={Detail}
          />
          <Stack.Screen
            options={{headerShown: true, title: 'Checkout'}}
            name="AddressDetail"
            component={AddressDetail}
          />

          <Stack.Screen
            options={{headerShown: true, title: 'Category'}}
            name="CategoryPage"
            component={CategoryPage}
          />
          <Stack.Screen
            options={{headerShown: true, title: 'Filter'}}
            name="SearchFilter"
            component={SearchFilter}
          />
          <Stack.Screen
            name="DetailNear"
            component={DetailNear}
            options={{headerShown: true, title: 'Detail Service'}}
          />
          <Stack.Screen
            options={{headerShown: true, title: 'Checkout'}}
            name="SummaryOrder"
            component={SummaryOrder}
          />
          <Stack.Screen
            options={{headerShown: true, title: 'Back'}}
            name="SearchResult"
            component={SearchResult}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="TabNavigatorMitra"
            component={TabNavigatorMitra}
          />
          <Stack.Screen
            options={{headerShown: true, title: 'Order Detail'}}
            name="OrderDetail"
            component={OrderDetail}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="WebView"
            component={WebView}
          />
          <Stack.Screen
            options={{headerShown: true, title: 'Set My Service'}}
            name="SetMyService"
            component={SetMyService}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
