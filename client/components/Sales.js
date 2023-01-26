import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

const dummySales = [
  {
    id: 1,
    coordinates: {
      latitude: 40.75901,
      longitude: -73.984474,
    },
    hours: {
      start: '9AM',
      end: '4PM',
    },
    stuff: ['cloths', 'books'],
  },
  {
    id: 2,
    coordinates: {
      latitude: 40.782864,
      longitude: -73.965355,
    },
    hours: {
      start: '9AM',
      end: '4PM',
    },
    stuff: 'cloths books media',
  },
];

export default function Sales() {
  return dummySales.map((sale) => {
    return (
      <Marker key={sale.id} coordinate={sale.coordinates} pinColor='black'>
        <Callout>
          <Text>STOOP SALE</Text>
          <Text>Address </Text>
          <Text>
            Hours {sale.hours.start} - {sale.hours.end}
          </Text>
          <Text>What kinda stuff is there {sale.stuff}</Text>
        </Callout>
      </Marker>
    );
  });
}
