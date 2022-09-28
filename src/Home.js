import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'

const Home = () => {
  return (
    <Background>
      <Text style={{color: 'white',  fontSize: 50 }}>Car Sale Nimal</Text>
      <Text style={{color: 'white',  fontSize: 40 }}>Lest Start</Text>
      <Text style={{color: 'white',  fontSize: 40 }}>Our System </Text>
   
    </Background>
  )
}

export default Home