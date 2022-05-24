 import React from 'react';
 import{ StyleSheet, Text, View, SafeAreaView, StyleSheet, TextInput } from 'react-native';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default UselessTextInput;