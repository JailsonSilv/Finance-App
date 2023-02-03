import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CardsInfo() {
 return (
   <View style={styles.container}>
        <View style={styles.card}>
            <AntDesign  name="creditcard" size={28} color="#000" />
            <Text style={styles.title}>Meus cartões</Text>
        </View>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    maxHeight: 90,
    height: 75,
    paddingEnd: 14,
    paddingStart: 14,
  },
  card: {
    display: 'flex',
    flexDirection:'row',
    marginTop: 20,
  },
  title: {
    fontSize: 19,
    marginLeft: 12,
    fontWeight: "800",
  }
});