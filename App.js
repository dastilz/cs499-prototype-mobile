import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'

import { Button, ThemeProvider } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props)

  }

 render() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('./Images/logo.png')} 
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
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5edfff'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },
  logo: {
    width: 250,
    height: 250
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 350,
    backgroundColor: '#b2fcff',
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 20,
    color: '#FFF'
  },
  button: {
      width: 350,
      backgroundColor: '#3e64ff',
      paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  }

})
