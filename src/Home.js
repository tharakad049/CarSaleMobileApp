import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Button from './Button'

const Home = (props) => {
  return (
    <Background>
      <View style={{left: 20, bottom: -40}}>
      <Text style={{color: 'white',  fontSize: 30 }}>Car Sale Nimal</Text>
      <Text style={{color: 'white',  fontSize: 20 }}>Let's Start</Text>
      <Button bgcolor='white' textColor='white' btnLabel="Login" press={()=>{props.navigation.navigate("Login")}}/>
      <Button bgcolor='white' textColor='white' btnLabel="Sign Up" press={()=>{props.navigation.navigate("SignIn")}}/>
      </View>
    </Background>
  )
}

export default Home