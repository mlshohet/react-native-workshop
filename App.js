import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  
  return (
    <View style={ styles.screen }>
      <View style={ styles.inputContainer }>
        <TextInput 
          placeholder={"Shopping List"}
          style={styles.input}
        />
        <Button
          title="ADD"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  input: {
    width: '80%',
    borderColor: 'black',
    borderBottomWidth: 1,
    padding: 10
  }
});




