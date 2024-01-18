import React from 'react';

import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CategoryComponentProps {
  title: string;
  icon: string;
}
const CategoryComponent = (props: CategoryComponentProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Ionicons name={props.icon} size={25} color={'white'} />
      </View>
      <Text style={styles.category_title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: '#F58B32',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },

  category_title: {
    textAlign: 'center',
  },
});

export default CategoryComponent;