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
        <View style={styles.navigationContainer}>          
        <Text style={styles.title}>Choose Navigation Option: </Text>
            <TouchableOpacity 
              style={styles.button}
            >
              <Text style={styles.buttonText}>Class Manager</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
            >
              <Text style={styles.buttonText}>Problem Manager</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
            >
              <Text style={styles.buttonText}>Student Portal</Text>
            </TouchableOpacity>
        </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5edfff'
  },
  navigationContainer: {
    alignItems: 'center',
    height: '40%',
    marginTop: 20
  },
  button: {
      width: '85%',
      backgroundColor: '#3e64ff',
      paddingVertical: 15,
      marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,    
    color: '#FFF'
  }

})
