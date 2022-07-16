import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useState, useReducer } from 'react'

const reducer = (state, action)=> {
  switch (action.type) {
    case 'add':
      return { count : state.count + 1, name : 'ADD'}
    case 'minus':
      return {...state, count: state.count - 1}
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0, name: 'add'});

  return (
    <View style = {styles.body}>
      <View style = {styles.mid}>
        <Pressable style={styles.button} onPress={() => dispatch({type : 'minus'})}>
          <Text>MINUS</Text>
        </Pressable>
        <Text style={styles.text}>{state.count}</Text>
        <Pressable style={styles.button} onPress = {() => dispatch({type : 'add'})}>
          <Text>{state.name}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    flexDirection : 'row'
  },
  text: {
    width : 80,
    fontSize : 20,
    textAlign : 'center',
  },
  button : {
    borderWidth : 1,
    borderColor: '#b63ddb',
    borderRadius : 2,
    width : 150,
    height : 30,
    alignItems: 'center',
    justifyContent : 'center',
  }
});
