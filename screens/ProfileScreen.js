import { Text, View, StyleSheet, Button } from 'react-native';

function ProfileScreen(props) {
  return <View>
     <Button title="Nav to options" onPress={() => props.navigation.navigate("Options")}></Button>
  </View>
}

export default ProfileScreen