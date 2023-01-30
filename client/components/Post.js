import { StyleSheet, Text, View, TextInput } from 'react-native';

//button that says "post a sale"
//drop a pin on a location
//form pops up to post a sale

export default function Post() {
  return (
    <View>
      <Text>POST A STOOP SALE</Text>
      <TextInput placeholder='start time' />
      <TextInput placeholder='end time' />
      <TextInput placeholder="what's there?" />
    </View>
  );
}
