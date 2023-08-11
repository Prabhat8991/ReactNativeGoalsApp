import { TextInput, Button, View, StyleSheet } from "react-native"
import { useState } from "react";


function GoalsInput(props) {

    const [textEntered, setEnteredText] = useState('')

    function handleTextInput(enteredText) {
        setEnteredText(enteredText)
      }

    function onAddGoalButtonClick() {
        props.onAddButtonClick(textEntered)
        setEnteredText('')
    }  

    return   <View style = {styles.inputContainer}>
    <TextInput 
    onChangeText={
      handleTextInput
    }
    style = {styles.textInput}
    placeholder='Please add a Goal'/>
    <Button
    onPress={
        onAddGoalButtonClick
    }
    title='Add Goal'/>
   </View>
}

export default GoalsInput;

const styles = StyleSheet.create({
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
    }
  });
