import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'


import ResponsiveImage from "react-native-responsive-image";



export default function Login({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('TeacherPortal')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <ResponsiveImage 
            initWidth="250"
            initHeight="250"
            source={require('../Images/logo.png')} 
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput 
            placeholder="username"
            style={styles.input}
          />
          <TextInput 
            placeholder="password"
            style={styles.input}
            secureTextEntry={true}
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={pressHandler}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5edfff'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '25%'
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '85%',
    backgroundColor: '#b2fcff',
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 20,
    color: '#000'
  },
  button: {
      width: '85%',
      backgroundColor: '#3e64ff',
      paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  }

})
