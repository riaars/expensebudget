import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import HomePage from './pages/HomePage'
import InputExpensePage from './pages/InputExpensePage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Expense Manager</Text> */}
      {/* <LoginPage /> */}
      <InputExpensePage />
      {/* <HomePage /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
