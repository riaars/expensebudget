import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CatogeryDetails from './components/CatogeryDetails'
import BudgetPlanning from './pages/BudgetPlanning'
import HomePage from './pages/HomePage'
import InputExpensePage from './pages/InputExpensePage'
import LoginPage from './pages/LoginPage'
import SummaryPage from './pages/SummaryPage'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Expense Manager</Text> */}
      {/* <LoginPage /> */}
      {/* <InputExpensePage /> */}
      {/* <BudgetPlanning /> */}
      {/* <HomePage /> */}
      {/* <CatogeryDetails /> */}
      <SummaryPage />
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
