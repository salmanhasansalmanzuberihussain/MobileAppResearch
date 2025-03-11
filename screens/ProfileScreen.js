import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('Options');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
        source={require('../assets/ZUB8ETI.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
        source={{ uri: "https://hgsiqwr8s5zf3sjv.public.blob.vercel-storage.com/ZUB8ETI%20%286%29-hsAgTlQwg12Hv8Fq9A8iNkjMTVhX2i.png" }}
          
          style={styles.image}
        />
      </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: 550,
    resizeMode: 'cover', 
  },
});

export default ProfileScreen;