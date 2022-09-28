import React from 'react'
import { Text, View } from 'react-native'
import Background from './Background'
import Field from './Field'

const Login = () => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 360 }}>
        <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Login</Text>
        <View style={{ backgroundColor: "white", alignItems: "center", height: 700, width: 360, top: 20, borderTopLeftRadius: 100, paddingTop: 100 }}>
          <Text style={{ fontSize: 30, color: "darkgreen", fontWeight: "bold" , top:-30}}>
            Welcome Back
          </Text>
          <Text style={{ color: "gray", fontSize: 14, fontWeight: "bold" , top:-30}}>Login To Your Account</Text>
        
        <Field placeholder="Email / Username"
            keyboardType={'email-address'}/>

        <Field placeholder="Password"
           secureTextEntry={true}/>
        </View>
      </View>
    </Background>
  )
}

export default Login