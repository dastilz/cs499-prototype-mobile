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

export default class TeacherPortal extends Component {
 render() {
  return (
      <View style={styles.container}>

      </View>
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
    marginTop: '35%'
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
