import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

export default function Infos() {
 return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cards}>
            <Text style={styles.texts}>
                    <Text style={styles.span}>Modo Rua: </Text>
                    aumente a segurança do seu app.
            </Text>
        </View>

        <View style={styles.cards}>
            <Text style={styles.texts}>
                Concorra a prêmios com o bank. Vida a partir de R$4/mês.
                <Text style={styles.span}>Saiba ...</Text>
            </Text>
        </View>

        <View style={styles.cards}>
            <Text style={styles.texts}>
                <Text style={styles.span}>Convide amigos para o bank e: </Text>
                desbloqueie brasões incriveis.
            </Text>
        </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
        maxHeight: 100,
        paddingEnd: 14,
        paddingStart: 14,
        height: 95,
    },
    cards: {
        minHeight: 500,
        marginStart: 5,
        marginTop: -5,
        padding: 30,
        width: 250,
        height: 250,
        backgroundColor: "#fff", 
        marginRight: 5,
        marginRight: 25,
    },
    texts: {
        fontSize: 17,
    },
    span: {
        color:"#ADD8E1",
        fontWeight: "800",
    }
});