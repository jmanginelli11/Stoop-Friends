import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import Map from './components/Map';

export default function App() {
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
      <Map />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
