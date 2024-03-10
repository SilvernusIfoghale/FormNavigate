import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Display({ route }) {
  const getdata = route.params.transfer;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt}>Welcome {getdata.name}</Text>
        <Text style={styles.txt}>
          Remember your password "{getdata.password}"
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
