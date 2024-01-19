import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

interface CategoryDetailsProps {
  category: string;
  onPress: () => void;
}
const CatogeryDetails = (props: CategoryDetailsProps) => {
  return (
    <View>
      <Text>{props.category}</Text>
      <TextInput
        style={styles.input}
        placeholder="Budget"
        keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{'Save'}</Text>
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

export default CatogeryDetails;
