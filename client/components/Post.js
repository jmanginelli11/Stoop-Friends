import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

//when user clicks on "post a sale" a form pops up with sale information
//coordinates are autofilled with user's location || a pin pops up that is draggable, the location of the pin autofills the coordinates of the sale
//once the sale is saved, the pin is no longer draggable (unless being edited)

// connect to database here
// in api write your fetch / axios req to that base URL
// inside will have the .write()

export default function Post() {
  return (
    <View>
      <Text>POST A STOOP SALE</Text>
      <TextInput placeholder="start time" />
      <TextInput placeholder="end time" />
      <TextInput placeholder="what's there?" />
    </View>
  );
}
