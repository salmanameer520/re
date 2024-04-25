import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GetData from '../components/GetData'
import { useNavigation } from '@react-navigation/native'

const Data = () => {
  const navigation = useNavigation();

  return (
   <>
    <GetData/>

    <TouchableOpacity
    style={styles.backBtn}
     onPress={()=> navigation.navigate('Svg')} >
<Text style={styles.btnText}>Next</Text>
    </TouchableOpacity>
   </>
  )
}

export default Data

const styles = StyleSheet.create({
  backBtn:{
    backgroundColor:'orange',
    // paddingHorizontal:4,
    paddingVertical:1,
    width:44,
    borderRadius:4,
    marginLeft:8,
    marginTop:8
        },
        btnText:{
            color:'#fff',
            fontFamily:'Poppins-MediumItalic',
            fontSize:10,
            textAlign:'center'
        }
})