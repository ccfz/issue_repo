import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Template Repo for issues!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 40
  }
});

export default App;
