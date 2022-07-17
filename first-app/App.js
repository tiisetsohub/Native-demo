import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useState, useReducer } from 'react'

const reducer = (state, action)=> {
  switch (action.type) {
    case 'add':
      return [...state, newItem(action.payload.name)]
    case 'remove':
      return state.filter(state => state.name !== action.payload.name)
    default:
      return state
  }
}

const newItem = (name) => {
  return {id: name, name: name, complete: false}
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  return (
    <View style = {styles.body}>
      <TextInput
      value = {name}
      placeholder ='add note'
      style = {styles.input}
      onChangeText={value => setName(value)}
      />
      <Pressable 
      style = {styles.button}
      onPress = {() => 
        {
          dispatch({type : 'add', payload : {name: name}})
          setName('')

        }
      }
      >
        <Text>ADD</Text>
      </Pressable>
      {state.map((item) => 
        {
          return (
            <View style = {styles.thing} key = {item.id}>
              <View style = {styles.leftthing}>
                <Text>{item.name}</Text>
              </View>
              <View style = {styles.rightthing}>
                <Pressable
                  onPress={() => {
                    dispatch({ type: 'remove', payload: { name: item.name } })
                    setName('')
                   }
                  }>
                  <Text>🗑</Text>
                </Pressable>
              </View>
            </View>
          )
        }
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    marginTop : 50,
    borderColor: '#000000',
    borderWidth: 1,
    margin: 10,
    borderRadius: 2,
    padding: 10,
    width: 320,
    textAlign: 'center',
  },
  button: {
    borderRadius: 2,
    backgroundColor: '#b63ddb',
    width: 320,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  thing: {
    borderRadius: 2,
    padding: 10,
    backgroundColor : '#ffbbdd',
    width: 320,
    textAlign: 'center',
    justifyContent : 'space-between',
    flexDirection: 'row',
    marginBottom : 10
  },
  leftthing: {
    alignSelf : 'left'
  }, 
  rightthing: {
    alignSelf: 'right'
  }
});
