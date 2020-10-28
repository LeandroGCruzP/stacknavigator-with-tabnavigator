import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Information() {
   const navigation = useNavigation();

   function handleNavigateToMoreInformation() {
      navigation.navigate('MoreInformation');
   }

   return (
      <View style={styles.container}>
         <Text>I'am Information</Text>
         <Button title="Go to More Information" onPress={handleNavigateToMoreInformation} />
      </View>
   );
}
