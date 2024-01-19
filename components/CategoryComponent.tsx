import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CategoryComponentProps {
  title: string;
  icon: string;
}
const CategoryComponent = (props: CategoryComponentProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Ionicons name={props.icon} size={25} color={'#F58B32'} />
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
    borderColor: '#F58B32',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },

  category_title: {
    textAlign: 'center',
    color: '#656565',
  },
});

export default CategoryComponent;
