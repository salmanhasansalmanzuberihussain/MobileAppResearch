import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('Options');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={require('../assets/ZUB8ETI.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 350,
    resizeMode: 'cover', 
  },
});

export default MyComponent;