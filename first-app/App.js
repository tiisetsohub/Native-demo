import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  const [name, setname] = useState('')
  const [clicked,setclicked] = useState(false);

  const handlePress = () => {
    setclicked(!clicked)
  }
  return (
    <View style = {styles.body}>
      <Text>Enter your name</Text>
      <TextInput 
      placeholder='name' 
      style={styles.input} 
      onChangeText={value => setname(value)}
      keyboardType = 'number-pad'
      />
      <Pressable style = {styles.button} onPress={handlePress}>
        <Text>Submit</Text>
      </Pressable>
      {clicked ? <Text>{name}</Text> : null}
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
  input: {
    borderColor : '#000000',
    borderWidth : 1,
    margin : 10,
    borderRadius : 2,
    padding : 10,
    width : 100,
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
