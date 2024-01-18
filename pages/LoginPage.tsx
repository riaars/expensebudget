import React from 'react';
import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';

const LoginPage = (props) => {
  return (
    <View>
      <Text style={styles.title}>Expense Manager</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="password" />
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{'Login'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#656565',
    paddingBottom: 40,
  },

  input: {
    height: 40,
    margin: 12,
    borderRadius: 16,
    padding: 12,
    width: 250,
    letterSpacing: 0.25,
    backgroundColor: '#f4f5fb',
  },

  button: {
    height: 40,
    margin: 12,
    borderRadius: 16,
    paddingHorizontal: 12,
    width: 250,
    lineHeight: 21,
    letterSpacing: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F58B32',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginPage;
