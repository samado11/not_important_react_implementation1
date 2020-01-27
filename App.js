import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import Form from './components/form'
import Perm from './components/permession'


const { width, height } = Dimensions.get('window')


class App extends Component {

  render() {

    return (

       <Form />

    )
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    borderWidth: 1,
    width: "100%",
    height: "100%"
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',

    // right:0.4*width,

  },
  relative: {
    top: 0.04 * height,
    position: 'absolute',
    alignSelf: 'center',
    alignContent: "center"

  }
})


export default App;
