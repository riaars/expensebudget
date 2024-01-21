import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Profile </Text>
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
    justifyContent: 'flex-start',
    textAlign: 'center',
    color: '#656565',
    paddingBottom: 40,
  },
});

export default Profile;
