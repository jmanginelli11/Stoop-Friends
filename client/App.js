import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
// import GetLocation from 'react-native-get-location';
import React, { useState } from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
    };
  }
  
  // componentDidMount(){
  //   if(hasLocationPermission){
  //     Geolocation
  //   }
  // }
  // requestLocation() {
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 15000,
  //   })
  //     .then((location) => {
  //       console.log(location);
  //     })
  //     .catch((error) => {
  //       const { code, message } = error;
  //       console.warn(code, message);
  //     });
  // }

  // componentDidMount() {
  //   GetLocation.getCurrentPosition(async (info) => {
  //     const location = await GetLocation(
  //       info.coords.latitude,
  //       info.coords.longitude
  //     );
  //     console.log(location);
  //   });
  // }

  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </View>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
