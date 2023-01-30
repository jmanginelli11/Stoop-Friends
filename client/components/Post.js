import { StyleSheet, Text, View, TextInput } from 'react-native';

//when user clicks on "post a sale" a form pops up with sale information
//coordinates are autofilled with user's location || a pin pops up that is draggable, the location of the pin autofills the coordinates of the sale
//once the sale is saved, the pin is no longer draggable (unless being edited)

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
