import { createStackNavigator } from '@react-navigation/stack';
import Product from '../components/Product';
import Products from '../screens/Products';
import Data from '../screens/Data';
import Svg from '../screens/Svg';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen name='Products' component={Products}/>
      <Stack.Screen name='Data' component={Data}/>
      <Stack.Screen name='Svg' component={Svg}/>
    </Stack.Navigator>
  );
};

export default AuthNavigator