import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native'
import React, {useState} from 'react'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const RenderItem = ({prop, index}) =>{
const [currentScreen, setCurrentScreen] = useState(0)
// const handleScroll = (event) => {
//     const offsetX = event.nativeEvent.contentOffset.x;
//     const currentIndex = Math.round(offsetX / windowWidth);
//     setCurrentScreen(currentIndex);
//   };

    return(
        <>
        <View style={{ backgroundColor: prop.backgroundColor,  width:windowWidth, height:windowHeight }}>
<Text>{prop.tittle}</Text>
<Image source={require('../assets/wolf.png')} style={{width:"66%", height:"42%", alignSelf:"center"}}/>
<View style={styles.row}>
<View style={[styles.dots, { opacity: currentScreen === 0 ? 0.5 : "red" }]} />
<View style={[styles.dots, { opacity: currentScreen === 0 ? 0.5 : "red" }]} />
<View style={styles.dots}/>
<View style={styles.dots}/>
<View style={styles.dots}/>
{/* {data.map((item, i) => (
            <View key={i} style={[styles.dots, { backgroundColor: currentScreen === i ? 'red' : 'grey' }]} />
          ))} */}
</View>


        </View>
    </>
    )
   
}

const Svg = () => {

    data = [
        {
            id:"1",
            backgroundColor: "orange",
            tittle:"Check",
    },
    {
        id:"2",
          backgroundColor: "orange",
            tittle:"Check",
    },
    {
        id:"3",
          backgroundColor: "orange",
            tittle:"Check",
    },
    {
        id:"4",
          backgroundColor: "orange",
            tittle:"Check",
    },
]
  return (
    <>
       <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item, index})=> <RenderItem prop={item} index={index}/> }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled={true}
        // onScroll={handleScroll} 
       />
    </>
  )
}

export default Svg

const styles = StyleSheet.create({
    row:{flexDirection:"row", alignItems:"center", justifyContent:'center',
marginTop:28},

dots:{
    marginLeft:6,
backgroundColor:"red",
 width:20, height:20, 
 borderRadius:50, 
}
})