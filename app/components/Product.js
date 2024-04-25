import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import { addToCard } from '../redux/Actions';

const Product = () => {
    const Products = [
        {
            name: 'i Phone',
            color: 'black',
            price: 150000,
            image: require('../assets/iphone2.png'),
        },
        {
            name: 'sparkX neo8',
            color: 'lightblue',
            price: 28000,
            image: require('../assets/iphone2.png'),
        },
        {
            name: 'smart 7',
            color: 'green',
            price: 25000,
            image: require('../assets/iphone2.png'),
        },

    ];
const dispatch = useDispatch()

    const handelAddtoCard  = (item) =>{
        // console.warn(item);
        console.log('ProductData',item);
        dispatch(addToCard(item))
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {Products.map((item) => <View key={item.name}
            style={styles.conatainer}
            >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.color}>{item.color}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Image source={item.image} style={styles.image} />
                <TouchableOpacity style={styles.btn} 
                onPress={()=>handelAddtoCard (item)}
                >
                    <Text style={{color:'#fff', fontFamily:'Poppins-ExtraLightItalic', fontSize:8, textAlign:'center'}}>Add to card</Text>
                </TouchableOpacity>
                <View style={{backgroundColor:'orange',  height:2, marginTop:4}}/>
            </View>)}
           
            <View style={{ marginVertical: 30 }} />
          
        </ScrollView>
    )
}

export default Product

const styles = StyleSheet.create({
    conatainer:{
        // alignSelf:'center',
       marginVertical:12,
        marginHorizontal:12
       
    },

    name:{
fontFamily:'Poppins-BoldItalic',
color:'#000',
fontSize:13,
textAlign:'center',
    },

    color:{
        color:'#000',
        fontFamily:'Poppins-Medium',
        fontSize:12,
        textAlign:'center',
    },

    price:{
        fontFamily:'Poppins-MediumItalic',
        color:'#000',
        fontSize:12,
        textAlign:'center',
    },
    image:{
width:38,
height:68,
alignSelf:'center'
    },

    btn:{
        backgroundColor:'#1492E6',
        paddingVertical:3,
        paddingHorizontal:6,
        borderRadius:6,
    }
})