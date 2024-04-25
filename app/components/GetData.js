import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { remove } from '../redux/Reducer';



const RenderItem = ({prop}) =>{
const [name, setName] = useState(prop.name);
const [color, setColor] = useState(prop.color);
const [price, setPrice] = useState(prop.price);
const [image, setImage] = useState(prop.image);
const dispatch =useDispatch();


const removeCard = (prop)=>{
dispatch(remove(prop))
}
    return(
        <>
<View style={styles.container}>
<View>
<Text style={styles.text}>Name: {name}</Text>
    <Text style={styles.text}>Color: {color}</Text>
    <Text style={styles.text}>Price: {price}</Text>
</View>
 
    <Image source={image} style={{width:30,
height:60,}}/>
 </View>

 <TouchableOpacity style={styles.btn}
 onPress={()=>removeCard(prop)}
 >
    <Text style={{color:'#fff', fontFamily:'Poppins-ExtraLightItalic', fontSize:8, textAlign:'center'}}>RemoveCard</Text>
 </TouchableOpacity>
 <View style={{backgroundColor:'#1492E6',  height:2, marginTop:4, marginHorizontal:12}}/>
        </>

    )
};

const GetData = () => {

    const navigation = useNavigation();

const {cart} = useSelector((state)=> state.reducer);
console.log('GetData',cart);



  return (
    <>
    <View>
    <TouchableOpacity
    style={styles.backBtn}
     onPress={()=> navigation.goBack()} >
<Text style={styles.btnText}>GoBack</Text>
    </TouchableOpacity>
   <FlatList
           data={cart}
           renderItem={({ item }) => <RenderItem prop={item}/>}
           contentContainerStyle={{paddingBottom:40}}
           showsVerticalScrollIndicator={false}
       />
    </View>
 


   
       

    </>
  )
}

export default GetData

const styles = StyleSheet.create({

    container:{ backgroundColor:'#1492E6',
// justifyContent:'center',
// alignItems:"center",
borderRadius:4,
// width:'50%',
// alignSelf:'center',
marginTop:12,
padding:4,
marginHorizontal:12,
flexDirection:'row',
alignItems:'center',
justifyContent:"space-evenly"
},
    text:{
        color:'#FFF',
        fontFamily:'Poppins-LightItalic',
        fontSize:10
    },

    btn:{
        // backgroundColor:'#1492E6',
        backgroundColor:'orange',
        paddingVertical:3,
        paddingHorizontal:6,
        borderRadius:6,
        marginHorizontal:12,
        marginTop:6
    },

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