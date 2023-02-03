import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function CreditCard( {valor, saldo} ) {
 return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.titleCard}>Cartão de crédito</Text>
            <Text style={styles.titleCardSub}>Fatura atual</Text>
            <Text style={styles.valueCard}>R$ {valor}</Text>
            <Text style={styles.cardLimit}>Limite disponível R$ {saldo}</Text>
        </View>
    </View>
 );
}


const styles = StyleSheet.create({
    container : {
        maxHeight: 150,
        paddingEnd: 14,
        paddingStart: 14,
        marginBottom: 15,
        marginTop: 25,
        height: 140,
        borderBottomColor: "#fff",
        borderBottomWidth: 3,     
    },
    card: {
        marginTop: 11,
    },
    titleCard : {
        fontSize: 19,
        fontWeight: 'bold',
    },
    titleCardSub : {
        marginTop: 5,
        marginBottom: 2,
        fontSize: 17,
        color: "#adadad",
        marginLeft: 5,
        fontWeight: 'bold',
    },
    valueCard : {
        fontWeight: '800',
        fontSize: 19,
        marginLeft: 5,
    },
    cardLimit : {
        fontSize: 17,
        marginLeft: 5,
        fontWeight: 'bold',
        color: "#adadad",
        marginBottom: 10,
    }
})