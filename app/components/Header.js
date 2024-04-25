import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const Header = () => {

  const navigation = useNavigation()
const {cart} = useSelector( (state)=> state.reducer);
console.log('header', cart);
  return (
    <>
    <View style={styles.container}>
    <TouchableOpacity onPress={()=> navigation.navigate('Data')}
    style={styles.btn}
    >

    {cart.length !== 0 &&  <Text style={styles.text}>{cart.length}</Text>}
      
    </TouchableOpacity>
    </View>
 
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    backgroundColor:'orange',
  },

  btn:{
alignSelf:'flex-end',
marginRight:12

  },
    text:{
        color:'#fff',
        fontFamily:'Poppins-MediumItalic',
    }
})