import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={true} horizontal={true}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
     alignItems: 'center' 
  },
  box1:{
    backgroundColor:'red',
    height: 250,
    width: 100,
    margin: 5
  },
  box2:{
    backgroundColor:'blue',
    height: 250,
    width: 100,
    margin: 5
  },
  box3:{
    backgroundColor:'green',
    height: 250,
    width: 100,
    margin: 5
  },
  box4:{
    backgroundColor:'pink',
    height: 250,
    width: 100,
    margin: 5
  }
});
