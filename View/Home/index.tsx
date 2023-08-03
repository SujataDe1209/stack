import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const Home = (props:any) => {
  return (
<View>
<ImageBackground source={require("../../Images/IX42Ma.jpg")}
      style={{height:'100%'}}  />
      <View style={{position:"absolute"}}>
        <Text  style={styles.text_style}>
          Let's Start
        </Text>

    <View>
      <TouchableOpacity  onPress={()=>props.navigation.navigate("Login")}
      style={{marginTop:210}}>
      <Text style={styles.button_text}>Go to Login</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>props.navigation.navigate("Singup")}>
      <Text   style={styles.button_text}>Go to Singup</Text>
      </TouchableOpacity>
    </View>
    </View>
    </View>
  )
}





const styles = StyleSheet.create({
  text_style: {
    color:'white',fontSize:40,fontWeight:'800',
    padding:100
  },
  button_text:{fontSize:18,fontWeight:'800',color:'white',backgroundColor:'#13401f',padding:10,margin:10,
  marginLeft:100,marginRight:100,textAlign:'center',borderRadius:20

  }
})




export default Home;