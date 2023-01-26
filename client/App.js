import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

export default function App() {
  // console.log(userLocation);
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style='auto' />
    // </View>
    <View style={{ flex: 1 }}>
      <Text
        style={{ flex: 1, marginTop: 50, textAlign: 'center', fontSize: 25 }}
      >
        Welcome to Super-Stooper
      </Text>
      <StatusBar style='auto' />
      <MapView
        style={{ flex: 10, margin: 30 }}
        provider={PROVIDER_GOOGLE}
        // provider='google'
        showsUserLocation={true}
        followsUserLocation={true}
        showsCompass={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 40.688615,
          longitude: -74.018907,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 40.688615,
            longitude: -74.018907,
          }}
          pinColor='black'
        >
          <Callout>
            <Text>STOOP SALE</Text>
            <Text>Address</Text>
            <Text>Hours</Text>
            <Text>What kinda stuff is there</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
