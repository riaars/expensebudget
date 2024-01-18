import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import DropDownPicker from 'react-native-dropdown-picker';

const InputExpensePage = (props) => {
  //   const [chosenDate, setChosenDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Eating out', value: 'eating out'},
    {label: 'Groceries', value: 'groceries'},
    {label: 'Miscellanous', value: 'miscellanous'},
    {label: 'Investment', value: 'investment'},
    {label: 'Rent', value: 'rent'},
    {label: 'Skincare', value: 'skincare'},
    {label: 'Subscription', value: 'subscription'},
    {label: 'Wishlist', value: 'wishlist'},
  ]);
  return (
    <View>
      <Text style={styles.title}>Add expense</Text>
      {/* <DateTimePicker value={value} onValueChange={(date) => setValue(date)} /> */}
      <TextInput style={styles.input} placeholder="Select date" />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        placeholderStyle={styles.placeholder}
        searchable={true}
      />
      <TextInput style={styles.input} placeholder="Expense details" />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
      />
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{'Submit'}</Text>
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
    borderRadius: 4,
    padding: 12,
    width: 250,
    letterSpacing: 0.25,
    backgroundColor: '#f4f5fb',
  },

  dropdown: {
    backgroundColor: '#f4f5fb',
    borderWidth: 0,
    width: 250,
    height: 40,
    margin: 12,
    borderRadius: 4,
    padding: 12,
  },

  placeholder: {
    color: '#F58B32',
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

export default InputExpensePage;
