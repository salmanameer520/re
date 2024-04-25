import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/CreatSlice.js'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
   <>
   <View>
   <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.btn}
        onPress={()=> dispatch(increment())}
        >
            <Text style={{color:'#fff'}}>+</Text>
        </TouchableOpacity>

<Text>{count}</Text>

        <TouchableOpacity style={styles.btn}
        onPress={()=> dispatch(decrement())}
        >
            <Text style={{color:'#fff'}}>-</Text>
        </TouchableOpacity>

        
    </View>
  
   </View>
   
   </>
  )
}

export default Counter

const styles = StyleSheet.create({
    btnsContainer:{
    flexDirection:'row',
alignItems:'center',
justifyContent:'space-around',
marginTop:28
},

    btn:{
backgroundColor:"#1C5C2E",
paddingHorizontal:8,
paddingVertical:4,
borderRadius:4
    }
})