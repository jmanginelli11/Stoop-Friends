import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import Map from './client/components/Map';
import PostSchema from './client/components/PostSchema';
const { RealmProvider } = PostSchema;

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style='auto' />
    // </View>
    <RealmProvider>
      <View style={{ flex: 1 }}>
        <Text
          style={{ flex: 1, marginTop: 50, textAlign: 'center', fontSize: 25 }}
        >
          Welcome to Super-Stooper
        </Text>
        <StatusBar style="auto" />
        <Map />
        <View style={styles.button}>
          <Button
            // style={styles.fixToText}
            title="POST A STOOP SALE"
            color="purple"
            onPress={() => Alert.alert('look at you, you pressed the button')}
          />
        </View>
      </View>
    </RealmProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textAlign: 'center',
    marginBottom: 30,
    marginHorizontal: 30,
    backgroundColor: '#f194ff',
    borderRadius: 10,
  },
});
