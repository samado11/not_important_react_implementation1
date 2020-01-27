import {PermissionsAndroid,View,TouchableOpacity,Text} from 'react-native';
import React, { Component } from 'react';
import {request, PERMISSIONS} from 'react-native-permissions';

async function requestAll() {
  const cameraStatus = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    }),
  );;
  console.log(cameraStatus)
  return cameraStatus;
}

class Perm extends Component {
  render(){
    return(
    <View style={{height:"100%",backgroundColor:"green"}}>

<TouchableOpacity style={{backgroundColor:"red"}} onPress={()=>requestAll()}>
         <Text style={{color:"white",alignSelf:"center",fontSize: 18}}> Camera</Text>
</TouchableOpacity>
    </View>
    )}
}

export default Perm