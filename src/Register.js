import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Background from './Background'
import Field from './Field'
import Button from './Button'

const Register = (props) => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      password: userPassword,
      contact: userContact,
      address: userAddress,
    };
   
  
  if (isRegistraionSuccess) {
    return (
      <View>
        <Text>
          Registration Successful
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}>
          <Text>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }


  return (
    <Background>
      <View style={{ alignItems: "center", width: 360 }}>
        <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Register</Text>
        <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
        <KeyboardAvoidingView enabled>
          <View style={{ backgroundColor: "white", alignItems: "center", height: 700, width: 360, top: 20, borderTopLeftRadius: 100, paddingTop: 20 }}>
            <Field placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value)
              }}
            />
            <Field placeholder="Valid Email Address" onChange={(e) => {
              setUserEmail(e.target.value)
            }} />
            <Field placeholder="Password" onChange={(e) => {
              setuserPassword(e.target.value)
            }} secureTextEntry={true} />
            <Field placeholder="Contact Number" onChange={(e) => {
              setUserContact(e.target.value)
            }} />
            <Field placeholder="Address"
              onChange={(e) => {
                setUserAddress(e.target.value)
              }}
            />

            <Button textColor='white' bgcolor='green' btnLabel="Register" press={handleSubmitButton} />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Alreadr have an account ? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Background>
  )
}

export default Register