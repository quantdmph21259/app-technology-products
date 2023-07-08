import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Welcom = (props) => {
    setTimeout(() => {
        props.navigation.navigate("Home");
    },2222)
  return (
    <View style={{flex:1, backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}>
      <View style={{flexDirection:'row'}}>
        {/* <Image style={{width:100,height:100}} source={require('../assets/logo.jpg')}/> */}
        <View style={{flexDirection:'column', alignSelf:'center',marginLeft:8}}>
          <View style={{flexDirection:'row'}} >
          <Text style={{color:'white'}}>Họ Tên :</Text>
        <Text style={{color:'yellow'}}>Tống Đỗ Minh Quân</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'white'}}>Mã Sinh Viên :</Text>
        <Text style={{color:'yellow'}}>PH21259</Text>
        </View>
        </View>
      </View>
      
    </View>
  )
}

export default Welcom

const styles = StyleSheet.create({})