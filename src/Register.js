import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background'
import Field from './Field'
import Button from './Button'

const Register = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 360 }}>
        <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Register</Text>
        <View style={{ backgroundColor: "white", alignItems: "center", height: 700, width: 360, top: 20, borderTopLeftRadius: 100, paddingTop: 20 }}>

          <Field placeholder="Full Name"/>
          <Field placeholder="Valid Email Address"/>
          <Field placeholder="Password"/>
          <Field placeholder="Contact Number"/>
          <Field placeholder="Address"/>

          <Button textColor='white' bgcolor='green' btnLabel="Register" press={() => alert("Signed In")} />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Alreadr have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
              <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  )
}

export default Register