import {View, Text, StyleSheet} from 'react-native'

function GoalItem (props) {
    return <View style = {styles.goalItem}><Text style = {styles.goalText}>{props.text}</Text></View>
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#4633FF',
        margin: 10,
        padding: 10,
        borderRadius: 6
      },
      goalText: {
        color: 'white'
      }
})