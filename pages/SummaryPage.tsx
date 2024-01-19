import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SummaryPage = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Summary Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

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

export default SummaryPage;
