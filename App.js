import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalsItem'
import GoalsInput from './components/GoalsInput';


export default function App() {

  const [goalsList, setGoalsList] = useState([])

  function handleAddGoalPress(textEntered) {
    setGoalsList((goals) => 
      [...goals, {text: textEntered, id: Math.random.toString()}]
    )
  }
  
  return (
    <View style = {styles.parentContainer}>
     <GoalsInput onAddButtonClick = {handleAddGoalPress}/>
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
