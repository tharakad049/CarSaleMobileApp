import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'

const Register = () => {
  return (
    <Background>
      <View style={{alignItems: "center", width: 360}}>
      <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Sign Up</Text>
      <View style={{ backgroundColor: "white", height: 700, width:360, top:20,  borderTopLeftRadius: 100, paddingTop:100}}>
      </View>
      </View>
    </Background>
  )
}

export default Register