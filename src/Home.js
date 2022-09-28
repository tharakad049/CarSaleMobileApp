import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Button from './Button'

const Home = () => {
  return (
    <Background>
      <View style={{left: 20, bottom: -20}}>
      <Text style={{color: 'white',  fontSize: 30 }}>Car Sale Nimal</Text>
      <Text style={{color: 'white',  fontSize: 20 }}>Lest Start</Text>
      </View>
    </Background>
  )
}

export default Home