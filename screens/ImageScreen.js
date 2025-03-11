

import { Image, StyleSheet, View } from 'react-native';
    
export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="cover"
        transition={1000}
      />
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
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});