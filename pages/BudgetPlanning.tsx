import React from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import CategoryComponent from '../components/CategoryComponent';

const BudgetPlanning = (props) => {
  const category_list = [
    {
      label: 'Eating out',
      value: 'eating-out',
      icon: 'fast-food',
    },
    {
      label: 'Groceries',
      value: 'groceries',
      icon: 'restaurant',
    },
    {
      label: 'Miscellanous',
      value: 'miscellanous',
      icon: 'gift',
    },
    {
      label: 'Investment',
      value: 'investment',
      icon: 'cash',
    },
    {
      label: 'Rent',
      value: 'rent',
      icon: 'home',
    },
    {
      label: 'Skincare',
      value: 'skincare',
      icon: 'brush',
    },
    {
      label: 'Subscription',
      value: 'subscription',
      icon: 'phone-portrait',
    },

    {
      label: 'Wishlist',
      value: 'wishlist',
      icon: 'airplane',
    },
    {
      label: 'New Category',
      value: 'new',
      icon: 'add',
    },
  ];
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Budget Planninng</Text>
      <TextInput style={styles.input} placeholder="Budget Name" />
      <Text style={styles.subtitle}>Choose Category</Text>
      <View style={styles.container}>
        {category_list.map((item, index) => (
          <CategoryComponent key={index} title={item.label} icon={item.icon} />
        ))}
      </View>
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{'Save'}</Text>
      </Pressable>
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

  subtitle: {
    fontSize: 16,
    margin: 20,
    fontWeight: 'bold',
    color: '#656565',
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderRadius: 16,
    padding: 12,
    width: 320,
    letterSpacing: 0.25,
    backgroundColor: '#f4f5fb',
  },

  button: {
    height: 40,
    margin: 32,
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

export default BudgetPlanning;
