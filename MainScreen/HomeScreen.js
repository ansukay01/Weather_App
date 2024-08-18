import * as React from 'react';
import { Button, View, StyleSheet, Text} from 'react-native';

 export default  function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.today}>Today's Weather</Text>
      </View>
    </View>
  );
 }

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
         marginTop: 1,
         backgroundColor: '#36454F'
    },
   today: {
    color: "white"
   }

  })


