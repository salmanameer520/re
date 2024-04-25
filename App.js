import 'react-native-gesture-handler';
import React from 'react';
import AuthNavigator from './app/navigations/AuthNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import MyStore from './app/redux/Store';
// import { Text } from 'react-native';
// import Counter from './app/screens/Counter';
const App = () => {
  return (
    <NavigationContainer>
    <Provider store={MyStore}>
    {/* <Counter/> */}
    <AuthNavigator/>
    </Provider>
  
    </NavigationContainer>
  )
}

export default App