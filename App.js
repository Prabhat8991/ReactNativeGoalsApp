import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalsItem'


export default function App() {

  const [textEntered, setEnteredText] = useState('')
  const [goalsList, setGoalsList] = useState([])

  function handleTextInput(enteredText) {
    setEnteredText(enteredText)
  }
  
  function handleAddGoalPress() {
    setGoalsList((goals) => 
      [...goals, {text: textEntered, id: Math.random.toString()}]
    )
  }
  
  return (
    <View style = {styles.parentContainer}>
     <View style = {styles.inputContainer}>
      <TextInput 
      onChangeText={
        handleTextInput
      }
      style = {styles.textInput}
      placeholder='Please add a Goal'/>
      <Button
      onPress={
        handleAddGoalPress
      }
      title='Add Goal'/>
     </View>
     <View style = {styles.listContainer}>
     <FlatList data = {goalsList} renderItem={
      (itemData) => {
         return <GoalItem text = {itemData.item.text}/>
      }
     }
     keyExtractor={(item, index) => {
      return item.id
     }}/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
     flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 24,
    alignItems: 'center',
    borderBottomWidth: 1
    },
  textInput: {
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '70%',
  },
  listContainer: {
    flex: 3,
  }
});
