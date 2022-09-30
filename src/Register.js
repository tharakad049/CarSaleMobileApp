import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Background from './Background'
import Field from './Field'
import Button from './Button'

const Register = (props) => {

  const [name, setName ]=useState("");

  return (
    <Background>
      <View style={{ alignItems: "center", width: 360 }}>
        <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Register</Text>
        
        <KeyboardAvoidingView>
        <View style={{ backgroundColor: "white", alignItems: "center", height: 700, width: 360, top: 20, borderTopLeftRadius: 100, paddingTop: 20 }}>
          <Field placeholder="Full Name"/>
          <Field placeholder="Valid Email Address"/>
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Contact Number"/>
          <Field placeholder="Address"/>

          <Button textColor='white' bgcolor='green' btnLabel="Register" press={()=>{props.navigation.navigate("Details")}} />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Alreadr have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
              <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>

      </View>
    </Background>
  )
}

export default Register