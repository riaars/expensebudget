import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ExpenseDetails = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Expense Details</Text>
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
});

export default ExpenseDetails;
